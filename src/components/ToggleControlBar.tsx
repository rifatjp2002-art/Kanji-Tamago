import React, { useState, useMemo } from 'react';
import { DisplayToggles } from '../types/kanji';
import { 
  Smile, 
  Languages, 
  Globe, 
  BookA, 
  FileText, 
  Layers,
  RotateCcw,
  Sparkles,
  ChevronDown,
  ChevronUp,
  SlidersHorizontal
} from 'lucide-react';

interface ToggleControlBarProps {
  toggles: DisplayToggles;
  onToggleChange: (key: keyof DisplayToggles) => void;
  onResetToggles: () => void;
  onApplyPreset: (preset: 'all' | 'bengali' | 'immersion' | 'selftest') => void;
}

export const ToggleControlBar: React.FC<ToggleControlBarProps> = ({
  toggles,
  onToggleChange,
  onResetToggles,
  onApplyPreset,
}) => {
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
  const activeCount = Object.values(toggles).filter(Boolean).length;

  // Determine which preset is currently active based on toggle state
  const currentActivePreset = useMemo<'all' | 'bengali' | 'immersion' | 'selftest' | null>(() => {
    // All ON
    if (
      toggles.showEmoji &&
      toggles.showBengali &&
      toggles.showEnglish &&
      toggles.showKana &&
      toggles.showRomaji &&
      toggles.showSentences &&
      toggles.showVocab
    ) {
      return 'all';
    }
    // Bengali Focus: (English is OFF, others ON)
    if (
      toggles.showEmoji &&
      toggles.showBengali &&
      !toggles.showEnglish &&
      toggles.showKana &&
      toggles.showRomaji &&
      toggles.showSentences &&
      toggles.showVocab
    ) {
      return 'bengali';
    }
    // Japanese Immersion: (Kana, Vocab, Sentences ON, others OFF)
    if (
      !toggles.showEmoji &&
      !toggles.showBengali &&
      !toggles.showEnglish &&
      toggles.showKana &&
      !toggles.showRomaji &&
      toggles.showSentences &&
      toggles.showVocab
    ) {
      return 'immersion';
    }
    // Self-Test: (All OFF)
    if (
      !toggles.showEmoji &&
      !toggles.showBengali &&
      !toggles.showEnglish &&
      !toggles.showKana &&
      !toggles.showRomaji &&
      !toggles.showSentences &&
      !toggles.showVocab
    ) {
      return 'selftest';
    }
    return null;
  }, [toggles]);

  const getPresetBtnClass = (preset: 'all' | 'bengali' | 'immersion' | 'selftest') => {
    const isActive = currentActivePreset === preset;
    if (isActive) {
      return 'rounded-lg border border-amber-500/50 bg-amber-500/20 text-amber-300 font-bold px-2.5 py-1 text-[11px] sm:text-xs transition-all shadow-sm';
    }
    return 'rounded-lg border border-stone-800 bg-[#161a22] px-2.5 py-1 text-[11px] sm:text-xs text-stone-400 hover:text-stone-200 hover:bg-stone-800 transition-colors font-medium';
  };

  return (
    <div className="rounded-2xl border border-stone-800/80 bg-[#12151b] p-3.5 sm:p-4 shadow-lg shadow-black/30">
      <div className="flex flex-col gap-3">
        {/* Title & Info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-400 shrink-0">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-stone-100 leading-tight">
                মডুলার ডিসপ্লে নিয়ন্ত্রণ (Display Toggles)
              </h3>
              <p className="text-[11px] text-stone-400 hidden sm:block">
                প্রয়োজনমতো উপাদানগুলো অন/অফ করুন · Customize visibility
              </p>
            </div>
          </div>

          {/* Mobile toggle expand/collapse button */}
          <button
            onClick={() => setIsMobileExpanded(!isMobileExpanded)}
            className="md:hidden flex items-center gap-1 text-[11px] font-semibold text-amber-300 bg-amber-950/50 border border-amber-800/50 px-2.5 py-1 rounded-lg transition-colors"
          >
            <SlidersHorizontal className="h-3 w-3" />
            <span>{activeCount}/7 চালু</span>
            {isMobileExpanded ? <ChevronUp className="h-3.5 w-3.5 ml-0.5" /> : <ChevronDown className="h-3.5 w-3.5 ml-0.5" />}
          </button>
        </div>

        {/* Preset quick actions */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs">
          <span className="text-stone-400 font-medium mr-1 text-[11px] shrink-0">প্রিসেট:</span>
          <button
            onClick={() => onApplyPreset('all')}
            className={getPresetBtnClass('all')}
          >
            সব অন (All ON)
          </button>
          <button
            onClick={() => onApplyPreset('bengali')}
            className={getPresetBtnClass('bengali')}
          >
            বাংলা ফোকাস
          </button>
          <button
            onClick={() => onApplyPreset('immersion')}
            className={getPresetBtnClass('immersion')}
          >
            জাপানি ইমার্শন
          </button>
          <button
            onClick={() => onApplyPreset('selftest')}
            className={getPresetBtnClass('selftest')}
          >
            স্ব-মূল্যায়ন
          </button>
          <button
            onClick={onResetToggles}
            title="সব ডিফল্ট করুন"
            className="rounded-lg p-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800 transition-colors ml-auto sm:ml-1"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Switches Grid (Always visible on desktop md+, toggleable on mobile) */}
      <div className={`mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 pt-3 border-t border-stone-800/80 ${isMobileExpanded ? 'grid' : 'hidden md:grid'}`}>
        {/* Toggle 1: Emojis */}
        <button
          onClick={() => onToggleChange('showEmoji')}
          className={`flex items-center justify-between rounded-xl border p-2 sm:px-3 sm:py-2 text-left transition-all ${
            toggles.showEmoji
              ? 'border-amber-500/60 bg-amber-950/30 text-stone-100 shadow-sm'
              : 'border-stone-800/80 bg-[#161921] text-stone-500 opacity-70'
          }`}
        >
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <Smile className={`h-4 w-4 shrink-0 ${toggles.showEmoji ? 'text-amber-400' : 'text-stone-500'}`} />
            <div className="min-w-0">
              <div className="text-xs font-semibold truncate">ইমোজি</div>
              <div className="text-[9px] sm:text-[10px] text-stone-400 truncate">Visual Cue</div>
            </div>
          </div>
          <span
            className={`ml-1 shrink-0 inline-block h-3.5 w-7 rounded-full p-0.5 transition-colors ${
              toggles.showEmoji ? 'bg-amber-500' : 'bg-stone-700'
            }`}
          >
            <span
              className={`block h-2.5 w-2.5 rounded-full bg-white transition-transform ${
                toggles.showEmoji ? 'translate-x-3.5' : 'translate-x-0'
              }`}
            />
          </span>
        </button>

        {/* Toggle 2: Bengali Meanings */}
        <button
          onClick={() => onToggleChange('showBengali')}
          className={`flex items-center justify-between rounded-xl border p-2 sm:px-3 sm:py-2 text-left transition-all ${
            toggles.showBengali
              ? 'border-emerald-500/60 bg-emerald-950/30 text-stone-100 shadow-sm'
              : 'border-stone-800/80 bg-[#161921] text-stone-500 opacity-70'
          }`}
        >
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <Languages className={`h-4 w-4 shrink-0 ${toggles.showBengali ? 'text-emerald-400' : 'text-stone-500'}`} />
            <div className="min-w-0">
              <div className="text-xs font-semibold truncate">বাংলা অর্থ</div>
              <div className="text-[9px] sm:text-[10px] text-stone-400 truncate">Bengali</div>
            </div>
          </div>
          <span
            className={`ml-1 shrink-0 inline-block h-3.5 w-7 rounded-full p-0.5 transition-colors ${
              toggles.showBengali ? 'bg-emerald-500' : 'bg-stone-700'
            }`}
          >
            <span
              className={`block h-2.5 w-2.5 rounded-full bg-white transition-transform ${
                toggles.showBengali ? 'translate-x-3.5' : 'translate-x-0'
              }`}
            />
          </span>
        </button>

        {/* Toggle 3: English Meanings */}
        <button
          onClick={() => onToggleChange('showEnglish')}
          className={`flex items-center justify-between rounded-xl border p-2 sm:px-3 sm:py-2 text-left transition-all ${
            toggles.showEnglish
              ? 'border-blue-500/60 bg-blue-950/30 text-stone-100 shadow-sm'
              : 'border-stone-800/80 bg-[#161921] text-stone-500 opacity-70'
          }`}
        >
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <Globe className={`h-4 w-4 shrink-0 ${toggles.showEnglish ? 'text-blue-400' : 'text-stone-500'}`} />
            <div className="min-w-0">
              <div className="text-xs font-semibold truncate">English</div>
              <div className="text-[9px] sm:text-[10px] text-stone-400 truncate">Meaning</div>
            </div>
          </div>
          <span
            className={`ml-1 shrink-0 inline-block h-3.5 w-7 rounded-full p-0.5 transition-colors ${
              toggles.showEnglish ? 'bg-blue-500' : 'bg-stone-700'
            }`}
          >
            <span
              className={`block h-2.5 w-2.5 rounded-full bg-white transition-transform ${
                toggles.showEnglish ? 'translate-x-3.5' : 'translate-x-0'
              }`}
            />
          </span>
        </button>

        {/* Toggle 4: Kana / Readings */}
        <button
          onClick={() => onToggleChange('showKana')}
          className={`flex items-center justify-between rounded-xl border p-2 sm:px-3 sm:py-2 text-left transition-all ${
            toggles.showKana
              ? 'border-purple-500/60 bg-purple-950/30 text-stone-100 shadow-sm'
              : 'border-stone-800/80 bg-[#161921] text-stone-500 opacity-70'
          }`}
        >
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <BookA className={`h-4 w-4 shrink-0 ${toggles.showKana ? 'text-purple-400' : 'text-stone-500'}`} />
            <div className="min-w-0">
              <div className="text-xs font-semibold truncate">কানা (Kana)</div>
              <div className="text-[9px] sm:text-[10px] text-stone-400 truncate">音/訓読み</div>
            </div>
          </div>
          <span
            className={`ml-1 shrink-0 inline-block h-3.5 w-7 rounded-full p-0.5 transition-colors ${
              toggles.showKana ? 'bg-purple-500' : 'bg-stone-700'
            }`}
          >
            <span
              className={`block h-2.5 w-2.5 rounded-full bg-white transition-transform ${
                toggles.showKana ? 'translate-x-3.5' : 'translate-x-0'
              }`}
            />
          </span>
        </button>

        {/* Toggle 5: Romaji */}
        <button
          onClick={() => onToggleChange('showRomaji')}
          className={`flex items-center justify-between rounded-xl border p-2 sm:px-3 sm:py-2 text-left transition-all ${
            toggles.showRomaji
              ? 'border-rose-500/60 bg-rose-950/30 text-stone-100 shadow-sm'
              : 'border-stone-800/80 bg-[#161921] text-stone-500 opacity-70'
          }`}
        >
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <span className={`text-xs font-mono font-bold shrink-0 ${toggles.showRomaji ? 'text-rose-400' : 'text-stone-500'}`}>
              Abc
            </span>
            <div className="min-w-0">
              <div className="text-xs font-semibold truncate">রোমাজি</div>
              <div className="text-[9px] sm:text-[10px] text-stone-400 truncate">Romaji</div>
            </div>
          </div>
          <span
            className={`ml-1 shrink-0 inline-block h-3.5 w-7 rounded-full p-0.5 transition-colors ${
              toggles.showRomaji ? 'bg-rose-500' : 'bg-stone-700'
            }`}
          >
            <span
              className={`block h-2.5 w-2.5 rounded-full bg-white transition-transform ${
                toggles.showRomaji ? 'translate-x-3.5' : 'translate-x-0'
              }`}
            />
          </span>
        </button>

        {/* Toggle 6: Vocabulary */}
        <button
          onClick={() => onToggleChange('showVocab')}
          className={`flex items-center justify-between rounded-xl border p-2 sm:px-3 sm:py-2 text-left transition-all ${
            toggles.showVocab
              ? 'border-teal-500/60 bg-teal-950/30 text-stone-100 shadow-sm'
              : 'border-stone-800/80 bg-[#161921] text-stone-500 opacity-70'
          }`}
        >
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <Layers className={`h-4 w-4 shrink-0 ${toggles.showVocab ? 'text-teal-400' : 'text-stone-500'}`} />
            <div className="min-w-0">
              <div className="text-xs font-semibold truncate">শব্দভাণ্ডার</div>
              <div className="text-[9px] sm:text-[10px] text-stone-400 truncate">Vocab (5-6)</div>
            </div>
          </div>
          <span
            className={`ml-1 shrink-0 inline-block h-3.5 w-7 rounded-full p-0.5 transition-colors ${
              toggles.showVocab ? 'bg-teal-500' : 'bg-stone-700'
            }`}
          >
            <span
              className={`block h-2.5 w-2.5 rounded-full bg-white transition-transform ${
                toggles.showVocab ? 'translate-x-3.5' : 'translate-x-0'
              }`}
            />
          </span>
        </button>

        {/* Toggle 7: Sentences */}
        <button
          onClick={() => onToggleChange('showSentences')}
          className={`flex items-center justify-between rounded-xl border p-2 sm:px-3 sm:py-2 text-left transition-all ${
            toggles.showSentences
              ? 'border-indigo-500/60 bg-indigo-950/30 text-stone-100 shadow-sm'
              : 'border-stone-800/80 bg-[#161921] text-stone-500 opacity-70'
          }`}
        >
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <FileText className={`h-4 w-4 shrink-0 ${toggles.showSentences ? 'text-indigo-400' : 'text-stone-500'}`} />
            <div className="min-w-0">
              <div className="text-xs font-semibold truncate">বাক্য</div>
              <div className="text-[9px] sm:text-[10px] text-stone-400 truncate">Sentences</div>
            </div>
          </div>
          <span
            className={`ml-1 shrink-0 inline-block h-3.5 w-7 rounded-full p-0.5 transition-colors ${
              toggles.showSentences ? 'bg-indigo-500' : 'bg-stone-700'
            }`}
          >
            <span
              className={`block h-2.5 w-2.5 rounded-full bg-white transition-transform ${
                toggles.showSentences ? 'translate-x-3.5' : 'translate-x-0'
              }`}
            />
          </span>
        </button>
      </div>
    </div>
  );
};
