import React, { useRef, useState, useEffect } from 'react';
import { KanjiItem, DisplayToggles } from '../types/kanji';
import {
  X,
  Volume2,
  RotateCcw,
  Eraser,
  Eye,
  EyeOff,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Lightbulb,
  PenTool,
} from 'lucide-react';
import { speakJapanese } from '../utils/speech';

interface KanjiDrawModalProps {
  item: KanjiItem | null;
  itemsList?: KanjiItem[];
  toggles: DisplayToggles;
  onClose: () => void;
  onSelectKanji?: (item: KanjiItem) => void;
}

export const KanjiDrawModal: React.FC<KanjiDrawModalProps> = ({
  item,
  itemsList = [],
  toggles,
  onClose,
  onSelectKanji,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [showGuide, setShowGuide] = useState(true);
  const [strokeHistory, setStrokeHistory] = useState<ImageData[]>([]);
  const [boardMode, setBoardMode] = useState<'slate' | 'paper'>('slate');
  const [brushColor, setBrushColor] = useState('#fbbf24'); // Default Gold on dark slate
  const [brushSize, setBrushSize] = useState(8);
  const [isAnimatingStroke, setIsAnimatingStroke] = useState(false);

  // Synchronize default brush color when toggling board mode
  useEffect(() => {
    if (boardMode === 'slate') {
      setBrushColor('#fbbf24'); // Gold on slate
    } else {
      setBrushColor('#1c1917'); // Sumi-e Black on paper
    }
  }, [boardMode]);

  // Find index for prev/next
  const currentIndex = itemsList.findIndex((k) => k.id === item?.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex >= 0 && currentIndex < itemsList.length - 1;

  const primaryReading = item
    ? item.readings.kunyomi[0]?.kana ||
      item.readings.onyomi[0]?.kana ||
      item.kanji
    : '';

  // Compute dynamic font size for ghost canvas guide so multi-character compounds (地下鉄, 銀行) fit perfectly
  const getGuideFontSize = (text: string) => {
    const len = text.length;
    if (len <= 1) return 'text-[150px] xs:text-[170px] sm:text-[190px]';
    if (len === 2) return 'text-[76px] xs:text-[86px] sm:text-[96px] tracking-tight';
    if (len === 3) return 'text-[50px] xs:text-[58px] sm:text-[66px] tracking-tight';
    if (len === 4) return 'text-[38px] xs:text-[44px] sm:text-[50px] tracking-tight';
    return 'text-[30px] xs:text-[36px] sm:text-[40px] tracking-tight';
  };

  // Initialize canvas
  useEffect(() => {
    if (!item) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // High-DPI crisp canvas setup
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    // Initial clear
    clearCanvas();
  }, [item, boardMode]);

  if (!item) return null;

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);
    setStrokeHistory([]);
  };

  const undoLastStroke = () => {
    const canvas = canvasRef.current;
    if (!canvas || strokeHistory.length === 0) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const newHistory = [...strokeHistory];
    newHistory.pop(); // remove current state
    const previousState = newHistory[newHistory.length - 1];

    if (previousState) {
      ctx.putImageData(previousState, 0, 0);
      setStrokeHistory(newHistory);
    } else {
      clearCanvas();
    }
  };

  const saveStrokeState = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    setStrokeHistory((prev) => [...prev, imgData]);
  };

  const getCoordinates = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();

    if ('touches' in e && e.touches[0]) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    } else if ('clientX' in e) {
      return {
        x: (e as React.MouseEvent<HTMLCanvasElement>).clientX - rect.left,
        y: (e as React.MouseEvent<HTMLCanvasElement>).clientY - rect.top,
      };
    }
    return { x: 0, y: 0 };
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setIsDrawing(true);
    const { x, y } = getCoordinates(e);

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = brushColor;
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    if (boardMode === 'slate') {
      ctx.shadowColor = brushColor;
      ctx.shadowBlur = brushSize / 2.5; // glowing chalk on slate
    } else {
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0; // crisp solid sumi ink on paper
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { x, y } = getCoordinates(e);
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (isDrawing) {
      setIsDrawing(false);
      saveStrokeState();
    }
  };

  const handleSimulateStrokeOrder = () => {
    setIsAnimatingStroke(true);
    speakJapanese(item.kanji, primaryReading);
    setTimeout(() => {
      setIsAnimatingStroke(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:p-4 backdrop-blur-md">
      <div
        className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-stone-800 bg-[#12151b] text-stone-200 shadow-2xl animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-stone-800 bg-[#151922] px-4 sm:px-6 py-3">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            {toggles.showEmoji && (
              <span className="text-xl sm:text-2xl shrink-0">{item.emoji}</span>
            )}
            <div className="min-w-0">
              <h2 className="text-base sm:text-lg font-bold font-serif text-stone-100 flex items-center gap-1.5 flex-wrap leading-tight">
                <span className="text-amber-400 font-bold">{item.kanji}</span>
                {toggles.showBengali && (
                  <span className="text-xs sm:text-sm font-sans font-medium text-stone-400 truncate">
                    ({item.meanings.bn})
                  </span>
                )}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="hidden xs:inline-block text-[11px] font-semibold px-2 py-0.5 rounded-md bg-amber-950/60 border border-amber-800/50 text-amber-300">
              {item.strokeCount} স্ট্রোক
            </span>
            <span className="hidden xs:inline-block text-[11px] font-semibold px-2 py-0.5 rounded-md bg-stone-800 text-stone-300">
              JLPT {item.jlpt}
            </span>

            {/* Prev / Next Kanji Buttons */}
            {itemsList.length > 1 && (
              <div className="flex items-center gap-0.5 border-l border-stone-800 pl-2 ml-1">
                <button
                  disabled={!hasPrev}
                  onClick={() => hasPrev && onSelectKanji && onSelectKanji(itemsList[currentIndex - 1])}
                  className="rounded-lg p-1 text-stone-400 hover:bg-stone-800 hover:text-stone-200 disabled:opacity-30 transition-colors"
                  title="পূর্ববর্তী কাঞ্জি"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <span className="text-[11px] text-stone-500 font-mono">
                  {currentIndex + 1}/{itemsList.length}
                </span>
                <button
                  disabled={!hasNext}
                  onClick={() => hasNext && onSelectKanji && onSelectKanji(itemsList[currentIndex + 1])}
                  className="rounded-lg p-1 text-stone-400 hover:bg-stone-800 hover:text-stone-200 disabled:opacity-30 transition-colors"
                  title="পরবর্তী কাঞ্জি"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}

            <button
              onClick={onClose}
              className="rounded-full p-1.5 text-stone-400 hover:bg-stone-800 hover:text-stone-100 transition-colors"
              title="বন্ধ করুন"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Modal Main Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 custom-scrollbar">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Column: Big Kanji Display & Writing Studio Canvas (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-center">
              {/* Studio Canvas Box with Japanese Grid Guidelines */}
              <div className={`relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[350px] aspect-square rounded-3xl border-2 transition-all duration-300 overflow-hidden select-none touch-none ${
                boardMode === 'slate'
                  ? 'border-amber-500/60 bg-gradient-to-b from-[#11141e] to-[#07090e] ring-4 ring-amber-500/15 shadow-[0_0_35px_rgba(245,158,11,0.2)]'
                  : 'border-amber-600/40 bg-[#fbf9f3] ring-4 ring-amber-600/5 shadow-[0_4px_24px_rgba(139,92,26,0.08)]'
              }`}>
                {/* Traditional Japanese Calligraphy Grid Guidelines (Clean & Unobtrusive) */}
                <div className="absolute inset-0 pointer-events-none opacity-40">
                  {/* Horizontal Center Line */}
                  <div className={`absolute top-1/2 left-0 right-0 h-px border-t-2 border-dashed ${
                    boardMode === 'slate' ? 'border-amber-500/20' : 'border-stone-400/35'
                  }`} />
                  {/* Vertical Center Line */}
                  <div className={`absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed ${
                    boardMode === 'slate' ? 'border-amber-500/20' : 'border-stone-400/35'
                  }`} />
                  {/* Inner guide box */}
                  <div className={`absolute inset-6 border border-dashed rounded-2xl ${
                    boardMode === 'slate' ? 'border-amber-500/10' : 'border-stone-400/15'
                  }`} />
                </div>

                {/* High-Contrast Ghost Outline Guide */}
                {showGuide && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none px-4">
                    <span
                      className={`font-serif font-bold transition-all duration-300 leading-none text-center select-none ${
                        boardMode === 'slate'
                          ? `text-stone-200/30 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] ${isAnimatingStroke ? 'scale-105 text-amber-300/50 animate-pulse' : ''}`
                          : `text-stone-500/25 ${isAnimatingStroke ? 'scale-105 text-amber-700/40 animate-pulse' : ''}`
                      } ${getGuideFontSize(item.kanji)}`}
                    >
                      {item.kanji}
                    </span>
                  </div>
                )}

                {/* Interactive Drawing Canvas Layer */}
                <canvas
                  ref={canvasRef}
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  onTouchStart={startDrawing}
                  onTouchMove={draw}
                  onTouchEnd={stopDrawing}
                  className="relative z-10 w-full h-full cursor-crosshair"
                />

                {/* Status indicator */}
                <div className={`absolute bottom-2.5 left-3.5 text-[10px] font-semibold backdrop-blur-md px-2 py-0.5 rounded-md border pointer-events-none transition-colors duration-300 ${
                  boardMode === 'slate'
                    ? 'text-stone-300 bg-[#11141a]/80 border-stone-800/50'
                    : 'text-stone-600 bg-white/80 border-stone-300/50'
                }`}>
                  {showGuide ? '✍️ ট্রেসিং গাইড চালু' : '📝 ফ্রি-হ্যান্ড প্র্যাকটিস'}
                </div>
              </div>

              {/* Canvas Controls Toolbar */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 w-full max-w-[350px]">
                {/* Board Mode Toggle */}
                <button
                  onClick={() => setBoardMode(boardMode === 'slate' ? 'paper' : 'slate')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#1c2130]/90 border border-stone-800 text-stone-200 hover:bg-[#252c3d] shadow-md active:scale-95 transition-all"
                  title="বোর্ড ব্যাকগ্রাউন্ড পরিবর্তন করুন (ডিপ শ্লেট বা সাদা কাগজ)"
                >
                  <span>{boardMode === 'slate' ? '📜 কাগজ মোড' : '🎴 শ্লেট মোড'}</span>
                </button>

                {/* Guide Toggle */}
                <button
                  onClick={() => setShowGuide(!showGuide)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all shadow-md active:scale-95 border ${
                    showGuide
                      ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40 shadow-emerald-950/20'
                      : 'bg-stone-800/80 text-stone-400 border-stone-700 hover:bg-stone-700'
                  }`}
                  title="কাঞ্জি ব্যাকড্রপ ট্রেসিং গাইড অন/অফ করুন"
                >
                  {showGuide ? <Eye className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}
                  <span>গাইড: {showGuide ? 'অন' : 'অফ'}</span>
                </button>

                {/* Audio Button */}
                <button
                  onClick={handleSimulateStrokeOrder}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 shadow-md active:scale-95 transition-all"
                  title={`উচ্চারণ শুনুন (${primaryReading})`}
                >
                  <Volume2 className="h-3.5 w-3.5" />
                  <span>উচ্চারণ</span>
                </button>

                {/* Undo Button */}
                <button
                  onClick={undoLastStroke}
                  disabled={strokeHistory.length === 0}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-[#1c2130]/90 border border-stone-800 text-stone-200 hover:bg-[#252c3d] disabled:opacity-30 shadow-md active:scale-95 transition-all"
                  title="আগের স্ট্রোক ফিরিয়ে আনুন"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>আনডু</span>
                </button>

                {/* Clear Canvas */}
                <button
                  onClick={clearCanvas}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-red-500/10 border border-red-500/30 text-red-300 hover:bg-red-500/20 shadow-md active:scale-95 transition-all"
                  title="ক্যানভাস সম্পূর্ণ মুছে ফেলুন"
                >
                  <Eraser className="h-3.5 w-3.5" />
                  <span>মুছুন</span>
                </button>
              </div>

              {/* Ink Color & Brush Thickness Controls */}
              <div className={`mt-3.5 flex flex-col gap-2.5 w-full max-w-[350px] p-3 rounded-2xl shadow-inner transition-colors duration-300 ${
                boardMode === 'slate' ? 'bg-[#141822]/90 border border-[#212735]' : 'bg-stone-100 border border-stone-200'
              }`}>
                <div className="flex items-center justify-between text-xs text-stone-400">
                  {/* Color choices */}
                  <div className="flex items-center gap-1.5">
                    <span className={`text-[11px] font-semibold ${boardMode === 'slate' ? 'text-stone-400' : 'text-stone-500'}`}>কালি:</span>
                    <div className="flex items-center gap-2">
                      {(boardMode === 'slate'
                        ? [
                            { label: 'সোনালী (Gold)', color: '#fbbf24' },
                            { label: 'সাদা চক (White)', color: '#f8fafc' },
                          ]
                        : [
                            { label: 'কালো কালি (Sumi)', color: '#1c1917' },
                            { label: 'লাল কালি (Shu)', color: '#ef4444' },
                          ]
                      ).map((c) => (
                        <button
                          key={c.color}
                          onClick={() => setBrushColor(c.color)}
                          style={{ backgroundColor: c.color }}
                          className={`h-5 w-5 rounded-full transition-all duration-150 ${
                            brushColor === c.color
                              ? `ring-2 ring-amber-500 ring-offset-2 scale-120 shadow-md ${
                                  boardMode === 'slate' ? 'ring-offset-[#141822]' : 'ring-offset-stone-100'
                                }`
                              : 'opacity-75 hover:opacity-100 hover:scale-110'
                          }`}
                          title={c.label}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Brush size */}
                  <div className="flex items-center gap-1.5">
                    <span className={`text-[11px] font-semibold ${boardMode === 'slate' ? 'text-stone-400' : 'text-stone-500'}`}>তুলি:</span>
                    <div className="flex items-center gap-1">
                      {[
                        { label: 'পাতলা', size: 5 },
                        { label: 'মাঝারি', size: 8 },
                        { label: 'মোটা', size: 14 },
                      ].map((b) => (
                        <button
                          key={b.size}
                          onClick={() => setBrushSize(b.size)}
                          className={`px-2.5 py-0.5 text-[10px] font-semibold rounded-lg border transition-all ${
                            brushSize === b.size
                              ? 'bg-amber-500/15 border-amber-500/50 text-amber-300 font-bold shadow-sm'
                              : boardMode === 'slate'
                                ? 'bg-[#1a1f2c] border-[#2c3345] text-stone-400 hover:bg-[#252c3d]'
                                : 'bg-white border-stone-300 text-stone-600 hover:bg-stone-50'
                          }`}
                        >
                          {b.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Dedicated Drawing & Writing Guidance Hub (5 cols) */}
            <div className="lg:col-span-5 flex flex-col space-y-4">
              {/* Card 1: Meaning & Readings Quick Card */}
              <div className="rounded-2xl border border-stone-800 bg-[#161a22] p-4 space-y-3">
                <div className="flex items-center justify-between border-b border-stone-800/80 pb-2.5">
                  <div className="text-xs font-bold text-stone-200 flex items-center gap-1.5">
                    <Sparkles className="h-4 w-4 text-amber-400" />
                    <span>কাঞ্জি পরিচয় ও রিডিং</span>
                  </div>
                  <span className="text-[11px] font-semibold text-amber-300 bg-amber-950/60 border border-amber-800/50 px-2 py-0.5 rounded-md">
                    {item.strokeCount} স্ট্রোক
                  </span>
                </div>

                {/* Meanings */}
                <div>
                  <div className="text-base font-bold text-amber-300 font-sans leading-snug">
                    {item.meanings.bn}
                  </div>
                  <div className="text-xs text-stone-400 font-medium mt-0.5 uppercase tracking-wider">
                    {item.meanings.en}
                  </div>
                </div>

                {/* Readings Grid with individual audio buttons */}
                <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-stone-800/80">
                  <div className="bg-[#1a1f2a] p-2.5 rounded-xl border border-stone-850">
                    <span className="text-amber-400/80 font-medium block text-[11px]">音読み (On'yomi):</span>
                    {item.readings.onyomi.length > 0 ? (
                      <div className="flex flex-wrap gap-1 mt-0.5">
                        {item.readings.onyomi.map((r, rIdx) => (
                          <button
                            key={rIdx}
                            type="button"
                            onClick={() => speakJapanese(r.kana, r.kana)}
                            className="inline-flex items-baseline gap-1 text-amber-300 hover:text-amber-200 hover:bg-amber-950/60 px-1 py-0.5 rounded font-bold text-sm transition-colors"
                            title={`${r.kana} উচ্চারণ শুনুন`}
                          >
                            <span>{r.kana}</span>
                            <span className="text-[10px] text-stone-400 font-mono font-normal">[{r.romaji}]</span>
                            <Volume2 className="h-2.5 w-2.5 text-stone-500" />
                          </button>
                        ))}
                      </div>
                    ) : (
                      <span className="text-stone-500 text-xs">নেই</span>
                    )}
                  </div>

                  <div className="bg-[#1a1f2a] p-2.5 rounded-xl border border-stone-850">
                    <span className="text-rose-400/80 font-medium block text-[11px]">訓読み (Kun'yomi):</span>
                    {item.readings.kunyomi.length > 0 ? (
                      <div className="flex flex-wrap gap-1 mt-0.5">
                        {item.readings.kunyomi.map((r, rIdx) => (
                          <button
                            key={rIdx}
                            type="button"
                            onClick={() => speakJapanese(r.kana, r.kana)}
                            className="inline-flex items-baseline gap-1 text-stone-200 hover:text-white hover:bg-emerald-950/60 px-1 py-0.5 rounded font-bold text-sm transition-colors"
                            title={`${r.kana} উচ্চারণ শুনুন`}
                          >
                            <span>{r.kana}</span>
                            <span className="text-[10px] text-stone-400 font-mono font-normal">[{r.romaji}]</span>
                            <Volume2 className="h-2.5 w-2.5 text-stone-500" />
                          </button>
                        ))}
                      </div>
                    ) : (
                      <span className="text-stone-500 text-xs">নেই</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card 2: Tamago Mnemonic Story Tip */}
              {item.tamagoTip && (
                <div className="rounded-2xl border border-amber-800/50 bg-amber-950/30 p-4 text-xs shadow-sm">
                  <div className="font-bold text-amber-300 mb-1.5 flex items-center gap-1.5">
                    <Lightbulb className="h-4 w-4 text-amber-400 shrink-0" />
                    <span>কাঞ্জি তামাগো স্মৃতি টিপ (Tamago Tip):</span>
                  </div>
                  <p className="text-stone-200 font-medium leading-relaxed font-sans">
                    {item.tamagoTip.bn}
                  </p>
                  <p className="text-stone-400 text-[11px] mt-1 leading-normal">
                    {item.tamagoTip.en}
                  </p>
                </div>
              )}

              {/* Card 3: Calligraphy & Stroke Principles */}
              <div className="rounded-2xl border border-stone-800 bg-[#161a22] p-4 text-xs shadow-sm">
                <div className="font-bold text-stone-200 mb-2 flex items-center gap-1.5">
                  <PenTool className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>সঠিক কাঞ্জি লেখার ৪টি মূল নিয়ম (Writing Principles):</span>
                </div>
                <ul className="space-y-1.5 text-stone-300 leading-relaxed list-inside">
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">১.</span>
                    <span><strong>উপর থেকে নিচে</strong> এবং <strong>বাম থেকে ডানে</strong> দাগ টানুন।</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">২.</span>
                    <span>অনুভূমিক (Horizontal) রেখা উল্লম্ব (Vertical) রেখার আগে লিখুন।</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">৩.</span>
                    <span>বাইরের ফ্রেম আগে এঁকে ভেতরের অংশ লিখুন, এবং সবার শেষে নিচ বন্ধ করুন।</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">৪.</span>
                    <span>ক্যানভাসে আঙুল বা মাউস দিয়ে বারবার এঁকে হাতের মাসল মেমোরি তৈরি করুন।</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
