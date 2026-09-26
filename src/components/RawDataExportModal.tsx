import React, { useState, useMemo } from 'react';
import { Lesson, KanjiItem } from '../types/kanji';
import { exportKanjiAsJSON, exportKanjiAsMarkdown } from '../data/allLessons';
import { X, Copy, Check, Download, FileCode, FileText } from 'lucide-react';

interface RawDataExportModalProps {
  lessons: Lesson[];
  initialLessonId?: number;
  onClose: () => void;
}

export const RawDataExportModal: React.FC<RawDataExportModalProps> = ({
  lessons,
  initialLessonId = 1,
  onClose,
}) => {
  const [selectedLesson, setSelectedLesson] = useState<number | 'all'>(initialLessonId);
  const [format, setFormat] = useState<'json' | 'markdown'>('json');
  const [copied, setCopied] = useState(false);

  // Filter items
  const activeItems: KanjiItem[] = useMemo(() => {
    if (selectedLesson === 'all') {
      return lessons.flatMap((l) => l.kanjiList);
    }
    const target = lessons.find((l) => l.id === selectedLesson);
    return target ? target.kanjiList : [];
  }, [lessons, selectedLesson]);

  const outputText = useMemo(() => {
    if (format === 'json') {
      return exportKanjiAsJSON(activeItems);
    } else {
      const title =
        selectedLesson === 'all'
          ? 'Complete Deck (Lesson 1 to 15)'
          : lessons.find((l) => l.id === selectedLesson)?.titleJa || 'Kanji Tamago';
      return exportKanjiAsMarkdown(title, activeItems);
    }
  }, [activeItems, format, selectedLesson, lessons]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(outputText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const handleDownload = () => {
    const filename = `kanji_tamago_${selectedLesson === 'all' ? 'all' : `lesson_${selectedLesson}`}.${
      format === 'json' ? 'json' : 'md'
    }`;
    const blob = new Blob([outputText], {
      type: format === 'json' ? 'application/json' : 'text/markdown',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
      <div
        className="relative flex h-[85vh] w-full max-w-4xl flex-col rounded-3xl border border-stone-800 bg-[#12151b] text-stone-200 p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-stone-800 pb-4">
          <div>
            <h3 className="text-base font-bold text-stone-100">
              মডুলার ডেটা এক্সপোর্ট (Export Modular Data)
            </h3>
            <p className="text-xs text-stone-400">
              Strict JSON অথবা Clean Markdown ফরম্যাটে কান্জি তামাগো ডেটা রপ্তানি ও কপি করুন
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 text-stone-400 hover:bg-stone-800 hover:text-stone-100 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Toolbar Filter & Format Selectors */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-800 py-3 text-xs">
          {/* Lesson selector */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-stone-400 font-medium">লেসন:</span>
            {lessons.slice(0, 8).map((lesson) => (
              <button
                key={lesson.id}
                onClick={() => setSelectedLesson(lesson.id)}
                className={`rounded-md px-2.5 py-1.5 font-medium transition-colors ${
                  selectedLesson === lesson.id
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50 font-semibold'
                    : 'bg-[#181b24] text-stone-400 hover:text-stone-200 border border-stone-800'
                }`}
              >
                L{lesson.id}
              </button>
            ))}
            <button
              onClick={() => setSelectedLesson('all')}
              className={`rounded-md px-2.5 py-1.5 font-medium transition-colors ${
                selectedLesson === 'all'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50 font-semibold'
                  : 'bg-[#181b24] text-stone-400 hover:text-stone-200 border border-stone-800'
              }`}
            >
              সব লেসন ({lessons.reduce((acc, l) => acc + l.kanjiList.length, 0)}টি)
            </button>
          </div>

          {/* Format selector */}
          <div className="flex items-center gap-2">
            <div className="flex rounded-lg bg-[#161a22] border border-stone-800 p-0.5">
              <button
                onClick={() => setFormat('json')}
                className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 font-medium transition-colors ${
                  format === 'json'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                <FileCode className="h-3.5 w-3.5 text-amber-400" />
                <span>Strict JSON</span>
              </button>
              <button
                onClick={() => setFormat('markdown')}
                className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 font-medium transition-colors ${
                  format === 'markdown'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                <FileText className="h-3.5 w-3.5 text-emerald-400" />
                <span>Clean Markdown</span>
              </button>
            </div>

            {/* Action buttons */}
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 rounded-lg border border-stone-750 bg-[#191d27] px-3 py-1.5 font-medium text-stone-200 shadow-sm hover:bg-stone-800 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="text-emerald-300 font-semibold">কপি হয়েছে!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>কপি করুন</span>
                </>
              )}
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 rounded-lg bg-amber-600 px-3 py-1.5 font-medium text-white shadow-sm hover:bg-amber-500 transition-colors"
            >
              <Download className="h-3.5 w-3.5" />
              <span>ডাউনলোড</span>
            </button>
          </div>
        </div>

        {/* Code View Area */}
        <div className="relative flex-1 overflow-hidden rounded-2xl border border-stone-800 bg-[#0c0e12] text-stone-100 my-3">
          <textarea
            readOnly
            value={outputText}
            className="h-full w-full resize-none p-4 font-mono text-xs leading-relaxed text-stone-300 bg-transparent outline-none selection:bg-amber-900 selection:text-white custom-scrollbar"
          />
        </div>

        {/* Footer meta */}
        <div className="flex items-center justify-between text-xs text-stone-500 pt-2">
          <span>মোট আইটেম সংখ্যা: {activeItems.length} টি</span>
          <span>সম্পূর্ণ মডুলার আর্কিটেকচার (Emoji, Reading, Meanings, Vocab, Sentences)</span>
        </div>
      </div>
    </div>
  );
};
