import React, { useState } from 'react';
import { KanjiItem, DisplayToggles } from '../types/kanji';
import { Volume2, ChevronDown, ChevronUp, Lightbulb } from 'lucide-react';
import { speakJapanese } from '../utils/speech';

interface KanjiCardProps {
  item: KanjiItem;
  toggles: DisplayToggles;
  onSelectKanji: (item: KanjiItem) => void;
}

export const KanjiCard: React.FC<KanjiCardProps> = ({
  item,
  toggles,
  onSelectKanji,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getCategoryLabel = () => {
    switch (item.category) {
      case 'read_only':
        return '読める (Read-Only)';
      case 'visual_recognition':
        return '見て、わかる (Visual Sign)';
      default:
        return '書ける (Main Kanji)';
    }
  };

  // Primary natural reading for standalone Kanji pronunciation
  const primaryReading =
    item.readings.kunyomi[0]?.kana ||
    item.readings.onyomi[0]?.kana ||
    item.kanji;

  const handleAudioPlay = (e: React.MouseEvent, text: string, kanaHint?: string) => {
    e.stopPropagation();
    speakJapanese(text, kanaHint);
  };

  return (
    <div className="group relative flex flex-col justify-between rounded-3xl border border-[#262c3b] bg-[#141822] p-4 sm:p-5 shadow-lg transition-all duration-200 hover:border-amber-500/40">
      {/* Card Header: Metadata (JLPT, Strokes, Category) */}
      <div>
        <div className="flex items-center justify-between text-xs text-stone-400 mb-2">
          <div className="flex items-center gap-1.5 font-medium">
            <span className="text-amber-400 font-semibold">{getCategoryLabel()}</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span className="text-stone-300">{item.jlpt}</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span className="text-stone-400">{item.strokeCount} strokes</span>
          </div>
        </div>

        {/* 1 & 2: Big Kanji Display + Emoji Placed Closely + Click-to-Draw only on Kanji Box */}
        <div className="flex items-center justify-between border-b border-[#222836] pb-3 pt-1">
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Clickable Kanji & Emoji Box */}
            <button
              type="button"
              onClick={() => onSelectKanji(item)}
              title="কাঞ্জি আঁকা ও স্ট্রোক অর্ডার দেখতে ক্লিক করুন"
              className="flex items-center gap-2 rounded-2xl bg-[#1c2230] hover:bg-[#242b3d] border border-amber-500/30 px-3 py-1.5 transition-all text-left group/btn active:scale-98 shadow-sm"
            >
              <span className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white group-hover/btn:text-amber-300 transition-colors">
                {item.kanji}
              </span>

              {/* Emoji right next to Kanji */}
              {toggles.showEmoji && (
                <span
                  className="text-2xl sm:text-3xl select-none transition-transform group-hover/btn:scale-110"
                  title="ভিজ্যুয়াল মেমরি ইমোজি"
                >
                  {item.emoji}
                </span>
              )}
            </button>

            {/* Quick Audio Button with accurate natural reading */}
            <button
              type="button"
              onClick={(e) => handleAudioPlay(e, item.kanji, primaryReading)}
              title={`উচ্চারণ শুনুন (${primaryReading})`}
              className="rounded-xl p-2.5 text-amber-300 bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 transition-colors active:scale-95 shadow-2xs"
            >
              <Volume2 className="h-5 w-5" />
            </button>
          </div>

          {/* Quick Meanings in Header */}
          <div className="text-right">
            {toggles.showBengali && (
              <div className="text-base sm:text-lg font-bold text-stone-100 font-sans leading-tight">
                {item.meanings.bn}
              </div>
            )}
            {toggles.showEnglish && (
              <div className="text-xs text-stone-400 font-medium mt-0.5">
                {item.meanings.en}
              </div>
            )}
          </div>
        </div>

        {/* Readings (On'yomi & Kun'yomi) with clickable audio listening for each reading */}
        {(toggles.showKana || toggles.showRomaji) && (
          <div className="mt-3 space-y-1.5 text-xs">
            {/* On'yomi */}
            {item.readings.onyomi.length > 0 && (
              <div className="flex items-baseline gap-2">
                <span className="w-14 text-amber-400/90 font-medium shrink-0">音読み:</span>
                <div className="flex flex-wrap items-baseline gap-1.5 text-stone-300">
                  {item.readings.onyomi.map((r, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={(e) => handleAudioPlay(e, r.kana, r.kana)}
                      className="inline-flex items-baseline gap-1 font-medium hover:bg-amber-950/50 px-1 py-0.5 rounded transition-colors group/r"
                      title={`${r.kana} (${r.romaji}) অন'ইয়োমি উচ্চারণ শুনুন`}
                    >
                      {toggles.showKana && (
                        <span className="text-amber-300 font-semibold group-hover/r:underline">
                          {r.kana}
                        </span>
                      )}
                      {toggles.showRomaji && (
                        <span className="text-[11px] text-stone-400 font-mono">[{r.romaji}]</span>
                      )}
                      <Volume2 className="h-3 w-3 text-stone-500 group-hover/r:text-amber-300 shrink-0 ml-0.5" />
                      {idx < item.readings.onyomi.length - 1 && (
                        <span className="text-stone-600 ml-1">·</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Kun'yomi */}
            {item.readings.kunyomi.length > 0 && (
              <div className="flex items-baseline gap-2">
                <span className="w-14 text-emerald-400/90 font-medium shrink-0">訓読み:</span>
                <div className="flex flex-wrap items-baseline gap-1.5 text-stone-300">
                  {item.readings.kunyomi.map((r, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={(e) => handleAudioPlay(e, r.kana, r.kana)}
                      className="inline-flex items-baseline gap-1 font-medium hover:bg-emerald-950/50 px-1 py-0.5 rounded transition-colors group/r"
                      title={`${r.kana} (${r.romaji}) কুন'ইয়োমি উচ্চারণ শুনুন`}
                    >
                      {toggles.showKana && (
                        <span className="text-stone-100 font-semibold group-hover/r:underline">
                          {r.kana}
                        </span>
                      )}
                      {toggles.showRomaji && (
                        <span className="text-[11px] text-stone-400 font-mono">[{r.romaji}]</span>
                      )}
                      <Volume2 className="h-3 w-3 text-stone-500 group-hover/r:text-emerald-300 shrink-0 ml-0.5" />
                      {idx < item.readings.kunyomi.length - 1 && (
                        <span className="text-stone-600 ml-1">·</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* 4: Kanji Origin & Mnemonic Story Box */}
        {item.tamagoTip && (
          <div className="mt-3.5 flex items-start gap-2.5 rounded-2xl bg-amber-950/20 p-3 text-xs text-amber-200 border border-amber-500/30 shadow-2xs">
            <Lightbulb className="h-4 w-4 shrink-0 text-amber-400 mt-0.5" />
            <div className="space-y-1">
              {toggles.showBengali && (
                <p className="font-semibold leading-relaxed text-amber-200">
                  {item.tamagoTip.bn}
                </p>
              )}
              {toggles.showEnglish && (
                <p className="text-[11px] text-amber-300/80 leading-normal">
                  {item.tamagoTip.en}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Vocab Section (5-6 words) */}
        {toggles.showVocab && (
          <div className="mt-4 pt-3 border-t border-[#222836]">
            <div className="flex items-center justify-between text-xs text-stone-400 font-medium mb-2">
              <span>ব্যবহারিক শব্দভাণ্ডার (Vocabulary)</span>
              <span className="text-[11px] text-stone-500 font-mono">
                {item.vocab.length} words
              </span>
            </div>

            <div className="space-y-2">
              {item.vocab.slice(0, isExpanded ? item.vocab.length : 3).map((v, vIdx) => (
                <div
                  key={vIdx}
                  className="rounded-xl bg-[#1a202d] hover:bg-[#202737] border border-[#2b3344] p-2.5 text-xs transition-colors"
                >
                  {/* Top line: Japanese Kanji + Kana + Romaji + Audio/Tag */}
                  <div className="flex flex-wrap items-center justify-between gap-1.5">
                    <div className="flex flex-wrap items-baseline gap-1.5">
                      <span className="font-bold text-white font-serif text-sm sm:text-xs">
                        {v.kanji}
                      </span>
                      {toggles.showKana && (
                        <span className="text-amber-300 font-medium text-xs sm:text-[11px]">
                          ({v.kana})
                        </span>
                      )}
                      {toggles.showRomaji && (
                        <span className="text-[11px] sm:text-[10px] text-stone-400 font-mono">
                          [{v.romaji}]
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0 ml-auto">
                      {v.tag && (
                        <span className="text-[9px] bg-amber-500/20 text-amber-300 font-semibold px-1.5 py-0.5 rounded border border-amber-500/30">
                          {v.tag}
                        </span>
                      )}
                      <button
                        type="button"
                        onClick={(e) => handleAudioPlay(e, v.kanji, v.kana)}
                        className="text-stone-400 hover:text-amber-300 transition-colors p-0.5"
                        title={`উচ্চারণ শুনুন (${v.kana})`}
                      >
                        <Volume2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Bottom line: Meanings (Bengali and/or English) */}
                  {(toggles.showBengali || toggles.showEnglish) && (
                    <div className="mt-1 flex flex-wrap items-baseline gap-x-2 gap-y-0.5 text-stone-300 leading-relaxed pt-1 border-t border-[#2a3140]">
                      {toggles.showBengali && (
                        <span className="text-stone-200 font-medium text-xs">
                          {v.meaningBn}
                        </span>
                      )}
                      {toggles.showBengali && toggles.showEnglish && (
                        <span className="text-stone-600 select-none">·</span>
                      )}
                      {toggles.showEnglish && (
                        <span className="text-stone-400 text-[11px]">
                          {v.meaningEn}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3: Sentences Section (2-3 items) */}
        {toggles.showSentences && (
          <div className="mt-4 pt-3 border-t border-[#222836]">
            <div className="text-xs text-stone-400 font-medium mb-2">
              বাস্তব জীবনের উদাহরণ বাক্য (Sentences)
            </div>
            <div className="space-y-2">
              {item.sentences.slice(0, isExpanded ? item.sentences.length : 2).map((s, sIdx) => (
                <div
                  key={sIdx}
                  className="rounded-xl border border-[#2b3344] bg-[#1a202d] p-3 text-xs flex items-start justify-between gap-2.5"
                >
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-stone-100 text-xs sm:text-sm leading-snug">
                      {s.ja}
                    </div>
                    {toggles.showRomaji && (
                      <div className="text-[11px] text-stone-400 font-mono mt-0.5">
                        {s.romaji}
                      </div>
                    )}
                    {toggles.showBengali && (
                      <div className="text-stone-300 font-medium mt-1">
                        {s.meaningBn}
                      </div>
                    )}
                    {toggles.showEnglish && (
                      <div className="text-stone-500 text-[11px] mt-0.5">
                        {s.meaningEn}
                      </div>
                    )}
                  </div>

                  {/* Big Clear Sound Button */}
                  <button
                    type="button"
                    onClick={(e) => handleAudioPlay(e, s.ja)}
                    title="বাক্যের অডিও শুনুন"
                    className="rounded-xl p-2 bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 transition-all shrink-0 active:scale-95 shadow-2xs"
                  >
                    <Volume2 className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Card Footer: Expand/Collapse toggle */}
      <div className="mt-3.5 pt-2 border-t border-[#222836] flex items-center justify-between text-xs text-stone-500">
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1 font-medium text-amber-400 hover:text-amber-300 transition-colors py-1"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="h-4 w-4" />
              <span>কম দেখুন (Collapse)</span>
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4" />
              <span>আরও শব্দ ও বাক্য দেখুন ({item.vocab.length} শব্দ / {item.sentences.length} বাক্য)</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
