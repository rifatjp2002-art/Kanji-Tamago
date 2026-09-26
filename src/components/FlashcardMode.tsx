import React, { useState, useEffect } from 'react';
import { KanjiItem, DisplayToggles } from '../types/kanji';
import {
  Volume2,
  RotateCw,
  ArrowLeft,
  ArrowRight,
  Check,
  X,
  PenTool,
  Layers,
  FileText,
} from 'lucide-react';
import { speakJapanese } from '../utils/speech';
import { setKanjiMastery, getProgress } from '../utils/progress';

interface FlashcardModeProps {
  items: KanjiItem[];
  toggles: DisplayToggles;
  lessonTitle: string;
  onSelectKanjiDetail?: (item: KanjiItem) => void;
}

export const FlashcardMode: React.FC<FlashcardModeProps> = ({
  items,
  toggles,
  lessonTitle,
  onSelectKanjiDetail,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Auto scroll to top when changing cards
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [currentIndex]);

  const currentItem = items[currentIndex];

  const primaryReading = currentItem
    ? currentItem.readings.kunyomi[0]?.kana ||
      currentItem.readings.onyomi[0]?.kana ||
      currentItem.kanji
    : '';

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleRate = (level: 'easy' | 'medium' | 'hard') => {
    setKanjiMastery(currentItem.id, level);
    handleNext();
  };

  // Global keyboard listeners for lightning-fast study on laptops & keyboard tablets
  useEffect(() => {
    if (!currentItem) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Avoid firing when user is typing in general text inputs
      const activeEl = document.activeElement;
      if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA')) {
        return;
      }

      switch (e.key) {
        case ' ': // Spacebar
        case 'Enter':
          e.preventDefault();
          setIsFlipped((prev) => !prev);
          break;
        case 'ArrowRight':
        case 'ArrowDown':
          e.preventDefault();
          handleNext();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault();
          handlePrev();
          break;
        case '1': // Rate Hard
          if (isFlipped) {
            e.preventDefault();
            handleRate('hard');
          }
          break;
        case '2': // Rate Medium
          if (isFlipped) {
            e.preventDefault();
            handleRate('medium');
          }
          break;
        case '3': // Rate Easy
          if (isFlipped) {
            e.preventDefault();
            handleRate('easy');
          }
          break;
        case 'v':
        case 'V':
          e.preventDefault();
          speakJapanese(currentItem.kanji, primaryReading);
          break;
        case 'd':
        case 'D':
          if (onSelectKanjiDetail) {
            e.preventDefault();
            onSelectKanjiDetail(currentItem);
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, isFlipped, currentItem, onSelectKanjiDetail, primaryReading]);

  if (!currentItem) {
    return (
      <div className="rounded-2xl border border-stone-800 bg-[#14171c] p-12 text-center max-w-md mx-auto text-stone-400">
        <p>কোনো কাঞ্জি পাওয়া যায়নি।</p>
      </div>
    );
  }

  const progress = getProgress();
  const currentStatus = progress.kanjiStatus[currentItem.id];

  return (
    <div className="mx-auto max-w-xl pb-4">
      {/* Top Status & Controls */}
      <div className="flex items-center justify-between text-xs text-stone-400 mb-3 px-1">
        <div>
          <span className="font-bold text-stone-200">{lessonTitle}</span>
          <span aria-hidden="true" className="mx-1.5 text-stone-600">·</span>
          <span className="font-semibold text-amber-400">কার্ড {currentIndex + 1} / {items.length}</span>
        </div>

        <div className="flex items-center gap-2">
          {/* Current Kanji mastery badge if rated */}
          {currentStatus && (
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                currentStatus === 'easy'
                  ? 'bg-emerald-950/70 border-emerald-800/60 text-emerald-300'
                  : currentStatus === 'medium'
                  ? 'bg-amber-950/70 border-amber-800/60 text-amber-300'
                  : 'bg-rose-950/70 border-rose-800/60 text-rose-300'
              }`}
            >
              {currentStatus === 'easy' ? '✓ সহজ' : currentStatus === 'medium' ? '⚡ মধ্যম' : '⚠️ কঠিন'}
            </span>
          )}

          {/* Direct Drawing Studio Button */}
          {onSelectKanjiDetail && (
            <button
              onClick={() => onSelectKanjiDetail(currentItem)}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold border border-amber-500/30 bg-amber-950/40 text-amber-300 hover:bg-amber-900/60 transition-all shadow-sm"
              title="বড় ক্যালিগ্রাফি বোর্ডে আঁকার স্টুডিও খুলুন"
            >
              <PenTool className="h-3.5 w-3.5 text-amber-400" />
              <span>হাতে লিখুন</span>
            </button>
          )}
        </div>
      </div>

      {/* Flip Card Container */}
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className={`relative cursor-pointer rounded-3xl border-2 border-stone-800/80 bg-[#14171d] p-5 sm:p-7 shadow-xl shadow-black/40 transition-all hover:border-amber-500/50 flex flex-col justify-between select-none ${
          !isFlipped ? 'min-h-[260px] xs:min-h-[290px] sm:min-h-[330px]' : 'min-h-[350px]'
        }`}
      >
        {/* Card Header */}
        <div className="flex items-center justify-between text-xs text-stone-400 border-b border-stone-800/70 pb-3">
          <div className="flex items-center gap-1.5 font-medium">
            <span className="bg-stone-800/80 border border-stone-700/60 px-2 py-0.5 rounded text-[11px] font-semibold text-stone-300">
              JLPT {currentItem.jlpt}
            </span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span className="bg-amber-950/60 border border-amber-800/40 px-2 py-0.5 rounded text-[11px] font-semibold text-amber-300">
              {currentItem.strokeCount} 획 (স্ট্রোক)
            </span>
          </div>

          <div className="flex items-center gap-2">
            {toggles.showEmoji && (
              <span className="text-xl sm:text-2xl drop-shadow" title="ভিজ্যুয়াল ইমোজি">
                {currentItem.emoji}
              </span>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                speakJapanese(currentItem.kanji, primaryReading);
              }}
              title={`উচ্চারণ শুনুন (${primaryReading})`}
              className="rounded-lg p-1.5 text-stone-400 hover:bg-stone-800 hover:text-amber-400 transition-colors"
            >
              <Volume2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Card Main Area */}
        {!isFlipped ? (
          // Front View
          <div className="my-auto flex flex-col items-center justify-center py-4 sm:py-6 text-center">
            <span className="font-serif text-7xl sm:text-8xl font-bold tracking-tight text-stone-100 my-2 select-none drop-shadow-md">
              {currentItem.kanji}
            </span>

            <span className="text-xs font-medium text-stone-400 mt-3 flex items-center gap-1.5 bg-stone-900/80 px-3 py-1.5 rounded-full border border-stone-800">
              <RotateCw className="h-3 w-3 text-amber-400 animate-spin-slow" />
              <span>অর্থ, শব্দভাণ্ডার ও বাক্য দেখতে ট্যাপ করুন (Click to Flip)</span>
            </span>
          </div>
        ) : (
          // Back View
          <div
            onClick={(e) => e.stopPropagation()}
            className="my-auto py-2 text-left space-y-4 cursor-default"
          >
            {/* Meaning Top Section */}
            <div className="text-center pb-3 border-b border-stone-800/70">
              {toggles.showBengali && (
                <div className="text-2xl sm:text-3xl font-bold text-amber-300 font-sans leading-tight">
                  {currentItem.meanings.bn}
                </div>
              )}
              {toggles.showEnglish && (
                <div className="text-xs font-medium text-stone-400 mt-1 uppercase tracking-wider">
                  {currentItem.meanings.en}
                </div>
              )}
            </div>

            {/* Readings (On'yomi & Kun'yomi) with clickable pronunciation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {currentItem.readings.onyomi.length > 0 && (
                <div className="bg-[#1a1e27] rounded-xl p-2.5 border border-stone-800">
                  <span className="text-amber-400/80 font-medium block text-[11px]">音読み (On'yomi):</span>
                  <div className="flex flex-wrap items-baseline gap-1 mt-0.5">
                    {currentItem.readings.onyomi.map((r, rIdx) => (
                      <button
                        key={rIdx}
                        type="button"
                        onClick={() => speakJapanese(r.kana, r.kana)}
                        className="inline-flex items-baseline gap-1 text-amber-300 hover:text-amber-200 hover:bg-amber-950/60 px-1 py-0.5 rounded transition-colors font-bold text-sm"
                        title={`${r.kana} (${r.romaji}) অন'ইয়োমি উচ্চারণ শুনুন`}
                      >
                        <span>{r.kana}</span>
                        {toggles.showRomaji && (
                          <span className="text-stone-400 font-mono text-[10px] font-normal">
                            [{r.romaji}]
                          </span>
                        )}
                        <Volume2 className="h-2.5 w-2.5 text-stone-500 hover:text-amber-300 ml-0.5" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {currentItem.readings.kunyomi.length > 0 && (
                <div className="bg-[#1a1e27] rounded-xl p-2.5 border border-stone-800">
                  <span className="text-rose-400/80 font-medium block text-[11px]">訓読み (Kun'yomi):</span>
                  <div className="flex flex-wrap items-baseline gap-1 mt-0.5">
                    {currentItem.readings.kunyomi.map((r, rIdx) => (
                      <button
                        key={rIdx}
                        type="button"
                        onClick={() => speakJapanese(r.kana, r.kana)}
                        className="inline-flex items-baseline gap-1 text-stone-200 hover:text-white hover:bg-emerald-950/60 px-1 py-0.5 rounded transition-colors font-bold text-sm"
                        title={`${r.kana} (${r.romaji}) কুন'ইয়োমি উচ্চারণ শুনুন`}
                      >
                        <span>{r.kana}</span>
                        {toggles.showRomaji && (
                          <span className="text-stone-400 font-mono text-[10px] font-normal">
                            [{r.romaji}]
                          </span>
                        )}
                        <Volume2 className="h-2.5 w-2.5 text-stone-500 hover:text-emerald-300 ml-0.5" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Complete Vocabulary Words */}
            <div className="border-t border-stone-800/70 pt-3">
              <div className="flex items-center justify-between text-xs font-bold text-stone-300 mb-2">
                <span className="flex items-center gap-1.5">
                  <Layers className="h-3.5 w-3.5 text-amber-400" />
                  <span>ব্যবহারিক শব্দভাণ্ডার ({currentItem.vocab.length}টি শব্দ):</span>
                </span>
              </div>
              <div className="space-y-1.5 max-h-52 overflow-y-auto pr-1 custom-scrollbar">
                {currentItem.vocab.map((v, i) => (
                  <div
                    key={i}
                    className="text-xs bg-[#1a1e26] rounded-xl p-2 border border-stone-800/80 flex flex-col gap-0.5 hover:border-stone-700 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-1">
                      <div className="flex flex-wrap items-baseline gap-1.5">
                        <span className="font-bold text-stone-100 font-serif text-sm">
                          {v.kanji}
                        </span>
                        <span className="text-[11px] text-amber-400 font-medium font-sans">
                          ({v.kana})
                        </span>
                        {toggles.showRomaji && (
                          <span className="text-[10px] text-stone-400 font-mono">
                            [{v.romaji}]
                          </span>
                        )}
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          speakJapanese(v.kanji, v.kana);
                        }}
                        className="text-stone-400 hover:text-amber-400 p-0.5"
                        title={`উচ্চারণ শুনুন (${v.kana})`}
                      >
                        <Volume2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <div className="text-stone-300 font-medium text-[11px] font-sans flex flex-wrap items-baseline gap-1">
                      <span>{v.meaningBn}</span>
                      {toggles.showEnglish && (
                        <span className="text-stone-400 text-[10px]">· {v.meaningEn}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Sentences */}
            {currentItem.sentences && currentItem.sentences.length > 0 && (
              <div className="border-t border-stone-800/70 pt-3">
                <div className="flex items-center justify-between text-xs font-bold text-stone-300 mb-2">
                  <span className="flex items-center gap-1.5">
                    <FileText className="h-3.5 w-3.5 text-indigo-400" />
                    <span>বাস্তব জীবনের উদাহরণ বাক্য ({currentItem.sentences.length}টি বাক্য):</span>
                  </span>
                </div>
                <div className="space-y-2">
                  {currentItem.sentences.map((s, sIdx) => (
                    <div
                      key={sIdx}
                      className="rounded-xl border border-stone-800 bg-[#191d24] p-2.5 text-xs flex items-start justify-between gap-2"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="font-bold text-stone-100 leading-snug text-xs sm:text-sm">
                          {s.ja}
                        </div>
                        {toggles.showRomaji && (
                          <div className="text-[10px] text-stone-400 font-mono mt-0.5">
                            {s.romaji}
                          </div>
                        )}
                        <div className="text-amber-200 font-medium mt-1 font-sans text-xs">
                          {s.meaningBn}
                        </div>
                        {toggles.showEnglish && (
                          <div className="text-stone-400 text-[11px] mt-0.5 font-sans">
                            {s.meaningEn}
                          </div>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          speakJapanese(s.ja, s.kana);
                        }}
                        title="বাক্যের সঠিক জাপানি অডিও শুনুন"
                        className="rounded-lg p-1.5 bg-stone-800 hover:bg-stone-700 text-amber-300 border border-stone-700 transition-all shrink-0"
                      >
                        <Volume2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Card Footer indicator */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsFlipped(!isFlipped);
          }}
          className="flex items-center justify-center gap-1.5 text-xs font-semibold text-stone-300 hover:text-amber-300 py-2.5 px-3 rounded-xl bg-[#1a1e27] hover:bg-stone-800 border border-stone-800 transition-all mt-4"
        >
          <RotateCw className="h-3.5 w-3.5 text-amber-400" />
          <span>{isFlipped ? '🔄 সামনের কাঞ্জি দেখতে এখানে ট্যাপ করুন' : '💡 অর্থ ও ব্যাখ্যা দেখতে এখানে ট্যাপ করুন'}</span>
        </button>
      </div>

      {/* Difficulty Mastery Rating Buttons */}
      <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
        <button
          onClick={() => handleRate('hard')}
          className="flex flex-col items-center justify-center gap-0.5 rounded-2xl border border-rose-900/60 bg-rose-950/40 p-2.5 text-rose-300 transition-all hover:bg-rose-900/60 active:scale-95 shadow-md"
        >
          <span className="text-xs font-bold flex items-center gap-1">
            <X className="h-3.5 w-3.5" /> কঠিন (Hard)
          </span>
          <span className="text-[10px] text-rose-400/80">মনে পড়েনি</span>
        </button>

        <button
          onClick={() => handleRate('medium')}
          className="flex flex-col items-center justify-center gap-0.5 rounded-2xl border border-amber-900/60 bg-amber-950/40 p-2.5 text-amber-300 transition-all hover:bg-amber-900/60 active:scale-95 shadow-md"
        >
          <span className="text-xs font-bold flex items-center gap-1">
            <RotateCw className="h-3.5 w-3.5" /> মধ্যম (Medium)
          </span>
          <span className="text-[10px] text-amber-400/80">একটু সময় লেগেছে</span>
        </button>

        <button
          onClick={() => handleRate('easy')}
          className="flex flex-col items-center justify-center gap-0.5 rounded-2xl border border-emerald-900/60 bg-emerald-950/40 p-2.5 text-emerald-300 transition-all hover:bg-emerald-900/60 active:scale-95 shadow-md"
        >
          <span className="text-xs font-bold flex items-center gap-1">
            <Check className="h-3.5 w-3.5" /> সহজ (Easy)
          </span>
          <span className="text-[10px] text-emerald-400/80">আয়ত্তে এসেছে</span>
        </button>
      </div>

      {/* Prev / Next Bottom Navigation Bar */}
      <div className="mt-3 flex items-center justify-between text-xs text-stone-400 px-1">
        <button
          onClick={handlePrev}
          className="flex items-center gap-1 rounded-xl border border-stone-800 bg-[#14171d] px-3.5 py-2 font-medium text-stone-300 hover:bg-stone-800 shadow-sm transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>পূর্ববর্তী</span>
        </button>

        <span className="font-mono text-stone-500">
          {currentIndex + 1} / {items.length}
        </span>

        <button
          onClick={handleNext}
          className="flex items-center gap-1 rounded-xl border border-stone-800 bg-[#14171d] px-3.5 py-2 font-medium text-stone-300 hover:bg-stone-800 shadow-sm transition-colors"
        >
          <span>পরবর্তী</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Quiet Minimalist Keyboard Shortcuts Hint */}
      <div className="mt-5 text-center text-[10px] text-stone-500 font-sans flex flex-wrap items-center justify-center gap-1.5 border-t border-stone-800/40 pt-3 select-none">
        <span>⌨️ কীবোর্ড শর্টকাট:</span>
        <span className="bg-[#1c202a] border border-stone-800 text-stone-400 px-1 py-0.5 rounded font-mono">Space/Enter</span>
        <span>ফ্লিপ</span>
        <span className="text-stone-700">·</span>
        <span className="bg-[#1c202a] border border-stone-800 text-stone-400 px-1 py-0.5 rounded font-mono">← / →</span>
        <span>কার্ড</span>
        <span className="text-stone-700">·</span>
        <span className="bg-[#1c202a] border border-stone-800 text-stone-400 px-1 py-0.5 rounded font-mono">১, ২, ৩</span>
        <span>রেটিং</span>
        <span className="text-stone-700">·</span>
        <span className="bg-[#1c202a] border border-stone-800 text-stone-400 px-1 py-0.5 rounded font-mono">V</span>
        <span>শুনুন</span>
        <span className="text-stone-700">·</span>
        <span className="bg-[#1c202a] border border-stone-800 text-stone-400 px-1 py-0.5 rounded font-mono">D</span>
        <span>লিখুন</span>
      </div>
    </div>
  );
};
