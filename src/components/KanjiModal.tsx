import React from 'react';
import { KanjiItem, DisplayToggles } from '../types/kanji';
import { X, Volume2, Lightbulb, CheckCircle2 } from 'lucide-react';
import { speakJapanese } from '../utils/speech';

interface KanjiModalProps {
  item: KanjiItem | null;
  toggles: DisplayToggles;
  onClose: () => void;
}

export const KanjiModal: React.FC<KanjiModalProps> = ({
  item,
  toggles,
  onClose,
}) => {
  if (!item) return null;

  const primaryReading =
    item.readings.kunyomi[0]?.kana?.replace(/[~-]/g, '') ||
    item.readings.onyomi[0]?.kana?.replace(/[~-]/g, '') ||
    '';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 p-4 backdrop-blur-xs">
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-stone-200 bg-white p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-stone-400 hover:bg-stone-100 hover:text-stone-700 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Top Header */}
        <div className="flex items-start gap-5 border-b border-stone-100 pb-5">
          <div className="flex flex-col items-center">
            <div className="flex h-28 w-28 items-center justify-center rounded-2xl border-2 border-amber-200 bg-amber-50/40 text-stone-900 shadow-inner">
              <span className="font-serif text-6xl font-bold">{item.kanji}</span>
            </div>
            <button
              onClick={() => speakJapanese(item.kanji, primaryReading)}
              className="mt-2 flex items-center gap-1.5 rounded-lg border border-stone-200 bg-white px-3 py-1 text-xs font-medium text-stone-700 hover:bg-stone-50 hover:text-amber-800 transition-colors"
            >
              <Volume2 className="h-3.5 w-3.5" />
              <span>উচ্চারণ শুনুন</span>
            </button>
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 text-xs text-stone-500 font-medium mb-1">
              <span>{item.category.replace('_', ' ').toUpperCase()}</span>
              <span aria-hidden="true">·</span>
              <span>JLPT {item.jlpt}</span>
              <span aria-hidden="true">·</span>
              <span>{item.strokeCount} স্ট্রোক (Strokes)</span>
              {toggles.showEmoji && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="text-xl" title="ভিজ্যুয়াল ইমোজি">{item.emoji}</span>
                </>
              )}
            </div>

            {toggles.showBengali && (
              <h2 className="text-2xl font-bold text-stone-900 font-sans">
                {item.meanings.bn}
              </h2>
            )}

            {toggles.showEnglish && (
              <p className="text-sm font-medium text-stone-600">
                {item.meanings.en}
              </p>
            )}

            {/* Readings Table */}
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs bg-stone-50 rounded-xl p-3 border border-stone-200/80">
              <div>
                <span className="font-semibold text-stone-600 block mb-1">音読み (On'yomi):</span>
                {item.readings.onyomi.length > 0 ? (
                  item.readings.onyomi.map((r, i) => (
                    <div key={i} className="font-medium text-stone-900">
                      {toggles.showKana && <span className="text-amber-900 font-bold">{r.kana}</span>}
                      {toggles.showRomaji && <span className="text-stone-600 font-mono text-[11px] ml-1.5">[{r.romaji}]</span>}
                    </div>
                  ))
                ) : (
                  <span className="text-stone-600">প্রযোজ্য নয়</span>
                )}
              </div>

              <div>
                <span className="font-semibold text-stone-600 block mb-1">訓読み (Kun'yomi):</span>
                {item.readings.kunyomi.length > 0 ? (
                  item.readings.kunyomi.map((r, i) => (
                    <div key={i} className="font-medium text-stone-900">
                      {toggles.showKana && <span className="text-stone-900 font-bold">{r.kana}</span>}
                      {toggles.showRomaji && <span className="text-stone-600 font-mono text-[11px] ml-1.5">[{r.romaji}]</span>}
                    </div>
                  ))
                ) : (
                  <span className="text-stone-600">সাধারণত নেই</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Kanji Tamago Tip */}
        {item.tamagoTip && (
          <div className="mt-4 flex items-start gap-3 rounded-xl border border-amber-200/80 bg-amber-50/60 p-3.5 text-xs text-amber-950">
            <Lightbulb className="h-5 w-5 shrink-0 text-amber-700 mt-0.5" />
            <div>
              <div className="font-semibold text-amber-900 mb-0.5">
                কান্জি তামাগো শিক্ষণ কৌশল (Tamago Memory Key):
              </div>
              <p className="leading-relaxed font-medium">{item.tamagoTip.bn}</p>
              <p className="text-amber-800/90 text-[11px] mt-1">{item.tamagoTip.en}</p>
            </div>
          </div>
        )}

        {/* All Vocab List (5-6 words) */}
        <div className="mt-5">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2.5">
            উচ্চ-ফ্রিকোয়েন্সির বাস্তব শব্দভাণ্ডার (JLPT N5-N4 Vocab · {item.vocab.length} Words)
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {item.vocab.map((v, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between rounded-lg border border-stone-200/80 bg-stone-50/50 p-2.5 text-xs hover:border-amber-300 transition-colors"
              >
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-sm font-bold text-stone-900">{v.kanji}</span>
                    {toggles.showKana && <span className="text-amber-900 font-medium text-[11px]">({v.kana})</span>}
                    <button
                      onClick={() => speakJapanese(v.kanji, v.kana)}
                      className="text-stone-400 hover:text-amber-800 transition-colors"
                      title={`উচ্চারণ শুনুন (${v.kana})`}
                    >
                      <Volume2 className="h-3 w-3" />
                    </button>
                  </div>
                  {toggles.showRomaji && (
                    <div className="text-[10px] text-stone-600 font-mono mt-0.5">{v.romaji}</div>
                  )}
                  {toggles.showBengali && (
                    <div className="text-stone-800 font-medium mt-1">{v.meaningBn}</div>
                  )}
                  {toggles.showEnglish && (
                    <div className="text-stone-500 text-[11px]">{v.meaningEn}</div>
                  )}
                </div>
                {v.tag && (
                  <span className="text-[10px] text-stone-600 font-medium self-start">
                    {v.tag}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Progressive Real-Life Sentences */}
        <div className="mt-5">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2.5">
            প্রোগ্রেসিভ ব্যবহারিক বাক্য (Progressive Practical Sentences · {item.sentences.length})
          </h4>
          <div className="space-y-2.5">
            {item.sentences.map((s, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-stone-200/90 bg-stone-50/60 p-3 text-xs"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                    <span className="font-semibold text-stone-900 text-sm">{s.ja}</span>
                  </div>
                  <button
                    onClick={() => speakJapanese(s.ja, s.kana)}
                    className="flex items-center gap-1 rounded-md border border-stone-200 bg-white px-2 py-0.5 text-[11px] text-stone-600 hover:bg-stone-100 hover:text-amber-800 transition-colors shrink-0"
                    title="বাক্যের সঠিক জাপানি উচ্চারণ শুনুন"
                  >
                    <Volume2 className="h-3 w-3" />
                    <span>শুনুন</span>
                  </button>
                </div>
                {toggles.showRomaji && (
                  <div className="text-[11px] text-stone-600 font-mono mt-1 pl-6">
                    {s.romaji}
                  </div>
                )}
                {toggles.showBengali && (
                  <div className="text-stone-800 font-medium mt-1.5 pl-6">
                    {s.meaningBn}
                  </div>
                )}
                {toggles.showEnglish && (
                  <div className="text-stone-600 text-[11px] pl-6 mt-0.5">
                    {s.meaningEn}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Close CTA */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-lg bg-stone-900 px-4 py-2 text-xs font-medium text-white hover:bg-stone-800 transition-colors"
          >
            বন্ধ করুন (Close)
          </button>
        </div>
      </div>
    </div>
  );
};
