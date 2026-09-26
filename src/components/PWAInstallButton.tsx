import React, { useState } from 'react';
import { usePWAInstall } from '../utils/usePWAInstall';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  // If already running as an installed PWA, hide the button
  if (isInstalled) {
    return null;
  }

  // Chromium / Android / Desktop flow
  if (isInstallable) {
    return (
      <button
        onClick={install}
        className="flex items-center gap-1.5 rounded-xl border border-amber-500/40 bg-gradient-to-r from-amber-600 to-amber-700 px-3 py-1.5 text-xs font-semibold text-white shadow-md hover:from-amber-500 hover:to-amber-600 active:scale-95 transition-all animate-pulse"
        title="Kanji Tamago মোবাইল বা ডেসকটপে ইন্সটল করুন"
      >
        <svg
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        <span>ইন্সটল অ্যাপ</span>
      </button>
    );
  }

  // iOS Safari flow (beforeinstallprompt is not supported by iOS WebKit)
  if (isIOS) {
    return (
      <>
        <button
          onClick={() => setShowIOSGuide(true)}
          className="flex items-center gap-1.5 rounded-xl border border-amber-500/40 bg-gradient-to-r from-amber-600/20 to-amber-700/20 px-3 py-1.5 text-xs font-semibold text-amber-300 shadow-md hover:bg-amber-500/30 active:scale-95 transition-all"
          title="iPhone/iPad-এ ইন্সটল করার নিয়ম"
        >
          <svg
            className="h-3.5 w-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13zM12 2v3m0 14v3M4 12H1m22 0h-3"
            />
          </svg>
          <span>ইন্সটল iOS</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
            <div className="w-full max-w-sm rounded-3xl border border-[#2b3140] bg-[#161a22] p-6 shadow-2xl text-stone-100">
              <div className="flex items-center gap-3 border-b border-[#222733] pb-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/20 text-xl font-bold text-amber-400">
                  卵
                </span>
                <div>
                  <h3 className="font-serif text-base font-bold text-stone-100">iPhone / iPad ইন্সটলেশন গাইড</h3>
                  <p className="text-[10px] text-stone-400">Kanji Tamago A1-B1</p>
                </div>
              </div>

              <div className="mt-4 space-y-3.5 text-xs sm:text-sm text-stone-300">
                <p className="text-amber-400/90 font-medium">নিচের নিয়ম মেনে হোম স্ক্রিনে যুক্ত করুন:</p>
                <div className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1e2330] text-xs font-bold text-stone-400">১</span>
                  <p>Safari ব্রাউজারের নিচের টুলবার থেকে <strong className="text-white">Share (শেয়ার)</strong> বাটনটি ট্যাপ করুন।</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1e2330] text-xs font-bold text-stone-400">২</span>
                  <p>মেনু স্ক্রল করে একটু নিচে নেমে <strong className="text-white">Add to Home Screen (হোম স্ক্রিনে যোগ করুন)</strong> অপশনটি সিলেক্ট করুন।</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1e2330] text-xs font-bold text-stone-400">৩</span>
                  <p>ডানদিকের ওপরের কোণা থেকে <strong className="text-white">Add (যোগ করুন)</strong> বাটনটি ট্যাপ করে সফলভাবে ইন্সটল সম্পন্ন করুন।</p>
                </div>
              </div>

              <button
                onClick={() => setShowIOSGuide(false)}
                className="mt-6 w-full rounded-2xl bg-gradient-to-r from-amber-600 to-amber-700 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md hover:from-amber-500 hover:to-amber-600 active:scale-95 transition-all"
              >
                বুঝেছি, বন্ধ করুন
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};
