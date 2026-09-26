import React from 'react';
import { 
  X, 
  Settings, 
  Sparkles, 
  Smile, 
  Languages, 
  Globe, 
  BookA, 
  FileText, 
  Layers, 
  RotateCcw,
  Download,
  FileCode2
} from 'lucide-react';
import { DisplayToggles } from '../types/kanji';
import { PWAInstallButton } from './PWAInstallButton';

interface SettingsModalProps {
  toggles: DisplayToggles;
  onToggleChange: (key: keyof DisplayToggles) => void;
  onResetToggles: () => void;
  onApplyPreset: (preset: 'all' | 'bengali' | 'immersion' | 'selftest') => void;
  onOpenExport?: () => void;
  onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  toggles,
  onToggleChange,
  onResetToggles,
  onApplyPreset,
  onOpenExport,
  onClose,
}) => {
  const activeCount = Object.values(toggles).filter(Boolean).length;

  // Determine which preset is currently active
  const currentActivePreset = React.useMemo<'all' | 'bengali' | 'immersion' | 'selftest' | null>(() => {
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
      return 'rounded-xl border border-amber-500/60 bg-amber-500/20 text-amber-300 font-bold px-3 py-1.5 text-xs transition-all shadow-sm';
    }
    return 'rounded-xl border border-stone-800 bg-[#161a22] px-3 py-1.5 text-xs text-stone-400 hover:text-stone-200 hover:bg-stone-800 transition-colors font-medium';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:p-4 backdrop-blur-md">
      <div
        className="relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-stone-800 bg-[#12151b] text-stone-200 shadow-2xl animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-stone-800 px-5 py-4 bg-[#151922]">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 shadow-sm">
              <Settings className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-stone-100 leading-tight">
                অ্যাপ সেটিংস ও ডিসপ্লে নিয়ন্ত্রণ
              </h2>
              <p className="text-[11px] text-stone-400">
                Display Customization & App Options ({activeCount}/7 চালু)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-full p-2 text-stone-400 hover:bg-stone-800 hover:text-stone-100 transition-colors"
            title="বন্ধ করুন"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6 custom-scrollbar">
          {/* Presets Row */}
          <div className="rounded-2xl bg-amber-950/30 p-4 border border-amber-800/50 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
                <Sparkles className="h-4 w-4 text-amber-400" />
                <span>দ্রুত প্রিসেট মোড (Quick Presets):</span>
              </div>
              <button
                onClick={onResetToggles}
                title="সব ডিফল্ট করুন"
                className="flex items-center gap-1 text-[11px] font-medium text-stone-400 hover:text-amber-300 bg-[#181b24] px-2.5 py-1 rounded-lg border border-stone-800 transition-colors"
              >
                <RotateCcw className="h-3 w-3" />
                <span>রিসেট</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-2">
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
            </div>
          </div>

          {/* 7 Switches Grid */}
          <div>
            <h4 className="text-xs font-semibold text-stone-400 mb-2.5">
              স্বাধীন উপাদান নিয়ন্ত্রণ (Independent Toggle Switches):
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {/* Toggle 1: Emojis */}
              <button
                type="button"
                onClick={() => onToggleChange('showEmoji')}
                className={`flex items-center justify-between rounded-2xl border p-3 text-left transition-all ${
                  toggles.showEmoji
                    ? 'border-amber-500/60 bg-amber-950/40 text-stone-100 shadow-sm'
                    : 'border-stone-800 bg-[#161a22] text-stone-500'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Smile className={`h-5 w-5 ${toggles.showEmoji ? 'text-amber-400' : 'text-stone-500'}`} />
                  <div>
                    <div className="text-xs font-bold">ইমোজি (Visual Cue)</div>
                    <div className="text-[10px] text-stone-400">ভিজ্যুয়াল মেমোরি আইকন</div>
                  </div>
                </div>
                <span
                  className={`inline-block h-4 w-8 rounded-full p-0.5 transition-colors ${
                    toggles.showEmoji ? 'bg-amber-500' : 'bg-stone-700'
                  }`}
                >
                  <span
                    className={`block h-3 w-3 rounded-full bg-white transition-transform ${
                      toggles.showEmoji ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </span>
              </button>

              {/* Toggle 2: Bengali */}
              <button
                type="button"
                onClick={() => onToggleChange('showBengali')}
                className={`flex items-center justify-between rounded-2xl border p-3 text-left transition-all ${
                  toggles.showBengali
                    ? 'border-emerald-500/60 bg-emerald-950/40 text-stone-100 shadow-sm'
                    : 'border-stone-800 bg-[#161a22] text-stone-500'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Languages className={`h-5 w-5 ${toggles.showBengali ? 'text-emerald-400' : 'text-stone-500'}`} />
                  <div>
                    <div className="text-xs font-bold">বাংলা অর্থ (Bengali)</div>
                    <div className="text-[10px] text-stone-400">বাংলা অনুবাদ ও ব্যাখ্যা</div>
                  </div>
                </div>
                <span
                  className={`inline-block h-4 w-8 rounded-full p-0.5 transition-colors ${
                    toggles.showBengali ? 'bg-emerald-500' : 'bg-stone-700'
                  }`}
                >
                  <span
                    className={`block h-3 w-3 rounded-full bg-white transition-transform ${
                      toggles.showBengali ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </span>
              </button>

              {/* Toggle 3: English */}
              <button
                type="button"
                onClick={() => onToggleChange('showEnglish')}
                className={`flex items-center justify-between rounded-2xl border p-3 text-left transition-all ${
                  toggles.showEnglish
                    ? 'border-blue-500/60 bg-blue-950/40 text-stone-100 shadow-sm'
                    : 'border-stone-800 bg-[#161a22] text-stone-500'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Globe className={`h-5 w-5 ${toggles.showEnglish ? 'text-blue-400' : 'text-stone-500'}`} />
                  <div>
                    <div className="text-xs font-bold">English (Meaning)</div>
                    <div className="text-[10px] text-stone-400">ইংরেজি অনুবাদ</div>
                  </div>
                </div>
                <span
                  className={`inline-block h-4 w-8 rounded-full p-0.5 transition-colors ${
                    toggles.showEnglish ? 'bg-blue-500' : 'bg-stone-700'
                  }`}
                >
                  <span
                    className={`block h-3 w-3 rounded-full bg-white transition-transform ${
                      toggles.showEnglish ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </span>
              </button>

              {/* Toggle 4: Kana */}
              <button
                type="button"
                onClick={() => onToggleChange('showKana')}
                className={`flex items-center justify-between rounded-2xl border p-3 text-left transition-all ${
                  toggles.showKana
                    ? 'border-purple-500/60 bg-purple-950/40 text-stone-100 shadow-sm'
                    : 'border-stone-800 bg-[#161a22] text-stone-500'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <BookA className={`h-5 w-5 ${toggles.showKana ? 'text-purple-400' : 'text-stone-500'}`} />
                  <div>
                    <div className="text-xs font-bold">কানা (Kana / 音·訓読み)</div>
                    <div className="text-[10px] text-stone-400">হিরাগানা ও কাতাকানা রিডিংস</div>
                  </div>
                </div>
                <span
                  className={`inline-block h-4 w-8 rounded-full p-0.5 transition-colors ${
                    toggles.showKana ? 'bg-purple-500' : 'bg-stone-700'
                  }`}
                >
                  <span
                    className={`block h-3 w-3 rounded-full bg-white transition-transform ${
                      toggles.showKana ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </span>
              </button>

              {/* Toggle 5: Romaji */}
              <button
                type="button"
                onClick={() => onToggleChange('showRomaji')}
                className={`flex items-center justify-between rounded-2xl border p-3 text-left transition-all ${
                  toggles.showRomaji
                    ? 'border-rose-500/60 bg-rose-950/40 text-stone-100 shadow-sm'
                    : 'border-stone-800 bg-[#161a22] text-stone-500'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={`text-xs font-bold font-mono px-1.5 py-0.5 rounded ${toggles.showRomaji ? 'bg-rose-900/60 text-rose-300' : 'bg-stone-800 text-stone-500'}`}>
                    Abc
                  </span>
                  <div>
                    <div className="text-xs font-bold">রোমাজি (Romaji)</div>
                    <div className="text-[10px] text-stone-400">ইংরেজি উচ্চারণের হরফ</div>
                  </div>
                </div>
                <span
                  className={`inline-block h-4 w-8 rounded-full p-0.5 transition-colors ${
                    toggles.showRomaji ? 'bg-rose-500' : 'bg-stone-700'
                  }`}
                >
                  <span
                    className={`block h-3 w-3 rounded-full bg-white transition-transform ${
                      toggles.showRomaji ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </span>
              </button>

              {/* Toggle 6: Vocab */}
              <button
                type="button"
                onClick={() => onToggleChange('showVocab')}
                className={`flex items-center justify-between rounded-2xl border p-3 text-left transition-all ${
                  toggles.showVocab
                    ? 'border-teal-500/60 bg-teal-950/40 text-stone-100 shadow-sm'
                    : 'border-stone-800 bg-[#161a22] text-stone-500'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Layers className={`h-5 w-5 ${toggles.showVocab ? 'text-teal-400' : 'text-stone-500'}`} />
                  <div>
                    <div className="text-xs font-bold">শব্দভাণ্ডার (Vocab 5-6)</div>
                    <div className="text-[10px] text-stone-400">প্রতি কাঞ্জির বাস্তব শব্দ</div>
                  </div>
                </div>
                <span
                  className={`inline-block h-4 w-8 rounded-full p-0.5 transition-colors ${
                    toggles.showVocab ? 'bg-teal-500' : 'bg-stone-700'
                  }`}
                >
                  <span
                    className={`block h-3 w-3 rounded-full bg-white transition-transform ${
                      toggles.showVocab ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </span>
              </button>

              {/* Toggle 7: Sentences */}
              <button
                type="button"
                onClick={() => onToggleChange('showSentences')}
                className={`flex items-center justify-between rounded-2xl border p-3 text-left transition-all sm:col-span-2 ${
                  toggles.showSentences
                    ? 'border-indigo-500/60 bg-indigo-950/40 text-stone-100 shadow-sm'
                    : 'border-stone-800 bg-[#161a22] text-stone-500'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <FileText className={`h-5 w-5 ${toggles.showSentences ? 'text-indigo-400' : 'text-stone-500'}`} />
                  <div>
                    <div className="text-xs font-bold">বাস্তব জীবনের বাক্য (Sentences 2-3)</div>
                    <div className="text-[10px] text-stone-400">দৈনন্দিন জীবনের ধারাবাহিক উদাহরণ বাক্য ও বড় অডিও বাটন</div>
                  </div>
                </div>
                <span
                  className={`inline-block h-4 w-8 rounded-full p-0.5 transition-colors ${
                    toggles.showSentences ? 'bg-indigo-500' : 'bg-stone-700'
                  }`}
                >
                  <span
                    className={`block h-3 w-3 rounded-full bg-white transition-transform ${
                      toggles.showSentences ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>

          {/* PWA Mobile App Installation Section */}
          <div className="rounded-2xl border border-stone-800 bg-[#161a22] p-4">
            <h4 className="text-xs font-bold text-stone-200 mb-2.5 flex items-center gap-2">
              <span>📱</span>
              <span>মোবাইল ও পিসি অ্যাপ ইনস্টল (Offline PWA)</span>
            </h4>
            <PWAInstallButton variant="settings" />
          </div>

          {/* Advanced / Safe Data Export Section */}
          {onOpenExport && (
            <div className="rounded-2xl border border-stone-800 bg-[#161a22] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-xl bg-[#1b1f2b] border border-stone-800 text-stone-400 shrink-0">
                  <FileCode2 className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-200">
                    কাঁচা ডেটা ব্যাকআপ ও এক্সপোর্ট (Data Export)
                  </h4>
                  <p className="text-[11px] text-stone-400 mt-0.5">
                    JSON বা Markdown ফরম্যাটে সমস্ত কাঞ্জির ডেটা এক্সপোর্ট ও কপি করুন
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenExport();
                }}
                className="flex items-center justify-center gap-1.5 rounded-xl border border-stone-700 bg-[#1b1f29] px-3.5 py-2 text-xs font-semibold text-stone-200 shadow-sm hover:bg-stone-800 hover:border-amber-500 hover:text-amber-300 transition-all shrink-0"
              >
                <Download className="h-4 w-4 text-amber-400" />
                <span>এক্সপোর্ট টুল খুলুন</span>
              </button>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="border-t border-stone-800 bg-[#151922] px-5 py-3 flex items-center justify-between">
          <div className="text-[11px] text-stone-400 font-medium">
            পছন্দ অনুযায়ী স্বয়ংক্রিয়ভাবে সংরক্ষিত হয়
          </div>
          <button
            onClick={onClose}
            className="rounded-xl bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 text-xs font-semibold transition-colors shadow-sm"
          >
            সম্পন্ন (Done)
          </button>
        </div>
      </div>
    </div>
  );
};
