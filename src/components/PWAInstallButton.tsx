import React, { useState } from 'react';
import { usePWAInstall } from '../utils/usePWAInstall';

interface PWAInstallButtonProps {
  variant?: 'navbar' | 'hero' | 'settings';
  className?: string;
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  variant = 'navbar',
  className = '',
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showGuide, setShowGuide] = useState(false);
  const [guideTab, setGuideTab] = useState<'android' | 'ios' | 'pc'>('android');

  const handleClick = async () => {
    if (isInstallable) {
      const result = await install();
      if (!result) {
        setShowGuide(true);
      }
    } else {
      setShowGuide(true);
      if (isIOS) setGuideTab('ios');
    }
  };

  // If already installed, show small badge in settings, or subtle badge
  if (isInstalled) {
    if (variant === 'settings') {
      return (
        <div className="flex items-center gap-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 px-3 py-2 text-xs font-medium text-emerald-400">
          <svg className="h-4 w-4 shrink-0 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
          </svg>
          <span>অ্যাপটি সফলভাবে ইন্সটল করা হয়েছে (PWA Installed)</span>
        </div>
      );
    }
    return null;
  }

  return (
    <>
      {variant === 'hero' ? (
        <button
          onClick={handleClick}
          className={`flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-amber-900/30 hover:from-amber-400 hover:to-amber-600 active:scale-95 transition-all cursor-pointer ${className}`}
        >
          <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span>{isInstallable ? '📱 ১-ক্লিকে অ্যাপ ইনস্টল করুন' : '📱 ফোনে অ্যাপ ইনস্টল করুন'}</span>
        </button>
      ) : variant === 'settings' ? (
        <button
          onClick={handleClick}
          className={`flex items-center justify-between w-full rounded-2xl border border-amber-500/40 bg-gradient-to-r from-amber-600/15 via-amber-500/10 to-transparent p-3.5 text-left text-xs font-semibold text-amber-300 shadow-md hover:border-amber-500 hover:bg-amber-500/20 active:scale-98 transition-all cursor-pointer ${className}`}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-white">মোবাইল অ্যাপ ইনস্টল করুন</p>
              <p className="text-[11px] text-stone-400">অফলাইনে ব্যবহার করতে হোম স্ক্রিনে যুক্ত করুন</p>
            </div>
          </div>
          <span className="rounded-lg bg-amber-500/20 px-2.5 py-1 text-[11px] font-bold text-amber-300">
            {isInstallable ? 'ইনস্টল' : 'নিয়ম দেখুন'}
          </span>
        </button>
      ) : (
        /* Default Navbar Button */
        <button
          onClick={handleClick}
          className={`flex items-center gap-1.5 rounded-xl border border-amber-500/50 bg-gradient-to-r from-amber-600 to-amber-700 px-2.5 py-1.5 sm:px-3 sm:py-1.5 text-xs font-semibold text-white shadow-md hover:from-amber-500 hover:to-amber-600 active:scale-95 transition-all cursor-pointer animate-pulse ${className}`}
          title="Kanji Tamago মোবাইল বা ডেসকটপে ইন্সটল করুন"
        >
          <svg className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span className="hidden xs:inline">অ্যাপ</span>
          <span>ইন্সটল</span>
        </button>
      )}

      {/* Comprehensive Install Guide Modal */}
      {showGuide && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-3 sm:p-4 backdrop-blur-sm"
          onClick={() => setShowGuide(false)}
        >
          <div
            className="w-full max-w-md rounded-3xl border border-[#2b3140] bg-[#161a22] p-5 sm:p-6 shadow-2xl text-stone-100 animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#222733] pb-3.5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-500/20 text-xl font-bold text-amber-400 border border-amber-500/30">
                  卵
                </span>
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-stone-100">
                    Kanji Tamago ইনস্টলেশন গাইড
                  </h3>
                  <p className="text-[11px] text-stone-400">ইন্টারনেট ছাড়া ১০০% অফলাইনে প্র্যাকটিস করুন</p>
                </div>
              </div>
              <button
                onClick={() => setShowGuide(false)}
                className="rounded-xl p-1.5 text-stone-400 hover:bg-[#222733] hover:text-white transition-colors"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Direct Install prompt button if available */}
            {isInstallable && (
              <div className="mt-4 rounded-2xl border border-amber-500/40 bg-amber-500/10 p-3.5 text-center">
                <p className="text-xs text-amber-300 font-semibold mb-2">আপনার ব্রাউজার প্রস্তুত আছে!</p>
                <button
                  onClick={async () => {
                    await install();
                    setShowGuide(false);
                  }}
                  className="w-full rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md hover:from-amber-500 hover:to-amber-600 transition-all cursor-pointer"
                >
                  🚀 এখনই ১-ক্লিকে ইনস্টল করুন
                </button>
              </div>
            )}

            {/* Device Tabs */}
            <div className="mt-4 flex rounded-xl bg-[#11141a] p-1 border border-[#232834]">
              <button
                onClick={() => setGuideTab('android')}
                className={`flex-1 rounded-lg py-1.5 text-xs font-bold transition-all ${
                  guideTab === 'android'
                    ? 'bg-amber-500/20 text-amber-400 shadow-sm border border-amber-500/30'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                🤖 Android
              </button>
              <button
                onClick={() => setGuideTab('ios')}
                className={`flex-1 rounded-lg py-1.5 text-xs font-bold transition-all ${
                  guideTab === 'ios'
                    ? 'bg-amber-500/20 text-amber-400 shadow-sm border border-amber-500/30'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                🍎 iPhone / iPad
              </button>
              <button
                onClick={() => setGuideTab('pc')}
                className={`flex-1 rounded-lg py-1.5 text-xs font-bold transition-all ${
                  guideTab === 'pc'
                    ? 'bg-amber-500/20 text-amber-400 shadow-sm border border-amber-500/30'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                💻 PC / Laptop
              </button>
            </div>

            {/* Guide Content */}
            <div className="mt-4 min-h-[140px] space-y-3 text-xs text-stone-300">
              {guideTab === 'android' && (
                <div className="space-y-2.5">
                  <p className="text-amber-400 font-semibold">Chrome / Samsung Internet ব্রাউজারে:</p>
                  <div className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1e2330] text-xs font-bold text-amber-400 border border-amber-500/30">১</span>
                    <p>ব্রাউজারের ওপরের ডানদিকের <strong className="text-white">৩-ডট মেনু (⋮)</strong> বাটনে চাপ দিন।</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1e2330] text-xs font-bold text-amber-400 border border-amber-500/30">২</span>
                    <p><strong className="text-white">"Install app"</strong> অথবা <strong className="text-white">"Add to Home screen" (হোম স্ক্রিনে যোগ করুন)</strong> অপশনটি সিলেক্ট করুন।</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1e2330] text-xs font-bold text-amber-400 border border-amber-500/30">৩</span>
                    <p><strong className="text-white">"Install"</strong> বাটনে ক্লিক করলেই মোবাইল হোম স্ক্রিনে কাঞ্জি তামাগো আইকন চলে আসবে।</p>
                  </div>
                </div>
              )}

              {guideTab === 'ios' && (
                <div className="space-y-2.5">
                  <p className="text-amber-400 font-semibold">Safari ব্রাউজারে (iPhone / iPad):</p>
                  <div className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1e2330] text-xs font-bold text-amber-400 border border-amber-500/30">১</span>
                    <p>সাফারি ব্রাউজারের নিচের টুলবার থেকে <strong className="text-white">Share (শেয়ার ⎋)</strong> বাটনে ট্যাপ করুন।</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1e2330] text-xs font-bold text-amber-400 border border-amber-500/30">২</span>
                    <p>মেনু স্ক্রল করে একটু নিচে নেমে <strong className="text-white">"Add to Home Screen" (হোম স্ক্রিনে যোগ করুন)</strong> সিলেক্ট করুন।</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1e2330] text-xs font-bold text-amber-400 border border-amber-500/30">৩</span>
                    <p>ডানদিকের ওপরের কোণা থেকে <strong className="text-white">"Add"</strong> বাটনে ট্যাপ করুন। ব্যস, ইনস্টলেশন শেষ!</p>
                  </div>
                </div>
              )}

              {guideTab === 'pc' && (
                <div className="space-y-2.5">
                  <p className="text-amber-400 font-semibold">Chrome, Edge বা Brave ব্রাউজারে:</p>
                  <div className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1e2330] text-xs font-bold text-amber-400 border border-amber-500/30">১</span>
                    <p>ব্রাউজারের অ্যাড্রেস বারের ডান পাশে ছোট <strong className="text-white">ইনস্টল আইকন (⊕ বা মনিটর আইকন)</strong> দেখতে পাবেন।</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1e2330] text-xs font-bold text-amber-400 border border-amber-500/30">২</span>
                    <p>অথবা ডানদিকের ৩-ডট মেনু থেকে <strong className="text-white">"Install Kanji Tamago..."</strong> ক্লিক করুন।</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1e2330] text-xs font-bold text-amber-400 border border-amber-500/30">৩</span>
                    <p>ডেস্কটপে আলাদা উইন্ডো হিসেবে ফুল স্ক্রিনে নেটিভ অ্যাপের মতো চলবে।</p>
                  </div>
                </div>
              )}
            </div>

            {/* Offline advantage note */}
            <div className="mt-4 rounded-xl bg-[#11141a] p-3 text-[11px] text-stone-400 border border-[#232834]">
              💡 <span className="text-stone-300 font-medium">টিপস:</span> ইনস্টল করার পর আপনার ফোনে কোনো ইন্টারনেট কানেকশন না থাকলেও সমস্ত কাঞ্জি লেসন, অডিও এবং কুইজ নিরবচ্ছিন্নভাবে চলবে!
            </div>

            <button
              onClick={() => setShowGuide(false)}
              className="mt-5 w-full rounded-2xl bg-[#222733] py-2.5 text-xs sm:text-sm font-semibold text-stone-200 hover:bg-[#2b3140] hover:text-white transition-all cursor-pointer"
            >
              বন্ধ করুন
            </button>
          </div>
        </div>
      )}
    </>
  );
};
