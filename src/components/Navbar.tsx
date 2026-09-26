import React from 'react';
import { Home, BookOpen, RotateCw, Flame, Download, Settings } from 'lucide-react';

export type MainTabType = 'home' | 'lessons' | 'flashcards' | 'quiz';

interface NavbarProps {
  currentTab: MainTabType;
  onSelectTab: (tab: MainTabType) => void;
  onOpenSettings: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  onOpenSettings,
}) => {
  return (
    <>
      {/* Top Navbar */}
      <header className="sticky top-0 z-30 border-b border-[#222733] bg-[#11141a]/90 px-3 py-2 sm:px-8 sm:py-2.5 backdrop-blur-md shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Brand / Logo */}
          <button
            onClick={() => onSelectTab('home')}
            className="flex items-center gap-2.5 text-left font-serif text-base sm:text-xl font-bold tracking-tight text-stone-100 transition-colors hover:text-amber-400 group"
          >
            <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-xl bg-gradient-to-br from-amber-600 to-amber-800 text-xs sm:text-sm font-bold text-white shadow-md border border-amber-500/40 group-hover:scale-105 transition-transform">
              卵
            </span>
            <div className="flex flex-col">
              <span className="leading-none text-sm sm:text-base tracking-wide text-white">Kanji Tamago</span>
              <span className="text-[9px] sm:text-[10px] font-normal text-amber-400/90 font-sans tracking-normal mt-0.5">
                漢字たまご · A1-A2
              </span>
            </div>
          </button>

          {/* Desktop Navigation Tabs (Hidden on mobile) */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => onSelectTab('home')}
              className={`flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-all ${
                currentTab === 'home'
                  ? 'bg-amber-500/15 text-amber-300 shadow-xs border border-amber-500/30'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-[#1a1f29]'
              }`}
            >
              <Home className="h-4 w-4 text-amber-400" />
              <span>হোম</span>
            </button>

            <button
              onClick={() => onSelectTab('lessons')}
              className={`flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-all ${
                currentTab === 'lessons'
                  ? 'bg-amber-500/15 text-amber-300 shadow-xs border border-amber-500/30'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-[#1a1f29]'
              }`}
            >
              <BookOpen className="h-4 w-4 text-amber-400" />
              <span>লেসন পাঠশালা</span>
            </button>

            <button
              onClick={() => onSelectTab('flashcards')}
              className={`flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-all ${
                currentTab === 'flashcards'
                  ? 'bg-amber-500/15 text-amber-300 shadow-xs border border-amber-500/30'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-[#1a1f29]'
              }`}
            >
              <RotateCw className="h-4 w-4 text-amber-400" />
              <span>ফ্ল্যাশকার্ড</span>
            </button>

            <button
              onClick={() => onSelectTab('quiz')}
              className={`flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-all ${
                currentTab === 'quiz'
                  ? 'bg-amber-500/15 text-amber-300 shadow-xs border border-amber-500/30'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-[#1a1f29]'
              }`}
            >
              <Flame className="h-4 w-4 text-amber-400" />
              <span>বাস্তব কুইজ</span>
            </button>
          </nav>

          {/* Right utility buttons: Settings */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={onOpenSettings}
              className="flex items-center gap-1.5 rounded-xl border border-[#2b3140] bg-[#161a22] px-2.5 py-1.5 sm:px-3 sm:py-1.5 text-xs font-semibold text-stone-200 shadow-xs hover:bg-amber-500/20 hover:border-amber-500/50 hover:text-amber-300 transition-all"
              title="ডিসপ্লে নিয়ন্ত্রণ ও অ্যাপ সেটিংস"
            >
              <Settings className="h-4 w-4 text-amber-400 shrink-0" />
              <span>সেটিংস</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation Bar (Shown ONLY on mobile < md) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-[#222733] bg-[#11141a]/95 backdrop-blur-lg px-2 py-1 shadow-xl">
        <div className="grid grid-cols-4 gap-1 max-w-md mx-auto">
          <button
            onClick={() => onSelectTab('home')}
            className={`flex flex-col items-center justify-center py-1.5 rounded-xl transition-all ${
              currentTab === 'home'
                ? 'text-amber-400 bg-amber-500/15 font-bold border border-amber-500/30'
                : 'text-stone-400 hover:text-stone-100 font-medium'
            }`}
          >
            <Home className="h-4 w-4" />
            <span className="text-[10px] mt-0.5">হোম</span>
          </button>

          <button
            onClick={() => onSelectTab('lessons')}
            className={`flex flex-col items-center justify-center py-1.5 rounded-xl transition-all ${
              currentTab === 'lessons'
                ? 'text-amber-400 bg-amber-500/15 font-bold border border-amber-500/30'
                : 'text-stone-400 hover:text-stone-100 font-medium'
            }`}
          >
            <BookOpen className="h-4 w-4" />
            <span className="text-[10px] mt-0.5">পাঠশালা</span>
          </button>

          <button
            onClick={() => onSelectTab('flashcards')}
            className={`flex flex-col items-center justify-center py-1.5 rounded-xl transition-all ${
              currentTab === 'flashcards'
                ? 'text-amber-400 bg-amber-500/15 font-bold border border-amber-500/30'
                : 'text-stone-400 hover:text-stone-100 font-medium'
            }`}
          >
            <RotateCw className="h-4 w-4" />
            <span className="text-[10px] mt-0.5">ফ্ল্যাশকার্ড</span>
          </button>

          <button
            onClick={() => onSelectTab('quiz')}
            className={`flex flex-col items-center justify-center py-1.5 rounded-xl transition-all ${
              currentTab === 'quiz'
                ? 'text-amber-400 bg-amber-500/15 font-bold border border-amber-500/30'
                : 'text-stone-400 hover:text-stone-100 font-medium'
            }`}
          >
            <Flame className="h-4 w-4" />
            <span className="text-[10px] mt-0.5">কুইজ</span>
          </button>
        </div>
      </div>
    </>
  );
};
