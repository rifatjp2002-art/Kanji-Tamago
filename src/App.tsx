import React, { useState, useMemo, useEffect, useRef } from 'react';
import { allLessons, defaultToggles } from './data/allLessons';
import { lessonContextGuides } from './data/lessonContextGuides';
import { KanjiItem, DisplayToggles, KanjiCategory } from './types/kanji';
import { Navbar, MainTabType } from './components/Navbar';
import { HomeDashboard } from './components/HomeDashboard';
import { KanjiCard } from './components/KanjiCard';
import { KanjiDrawModal } from './components/KanjiDrawModal';
import { FlashcardMode } from './components/FlashcardMode';
import { QuizMode } from './components/QuizMode';
import { RawDataExportModal } from './components/RawDataExportModal';
import { SettingsModal } from './components/SettingsModal';
import { getProgress, setLastLesson } from './utils/progress';
import {
  Search,
  ShoppingBag,
  UserCheck,
  Utensils,
  Users,
  Music,
  Compass,
  Clock,
  HeartPulse,
  Plane,
  ShieldAlert,
  CloudRain,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
} from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<MainTabType>('home');
  const [selectedLessonNum, setSelectedLessonNum] = useState<number>(() => {
    return getProgress().lastLessonId || 1;
  });
  const [toggles, setToggles] = useState<DisplayToggles>(defaultToggles);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | KanjiCategory>('all');
  const [selectedKanji, setSelectedKanji] = useState<KanjiItem | null>(null);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [flashcardLessonId, setFlashcardLessonId] = useState<number | 'all'>(1);

  // Keep track of scroll positions for lessons per lesson and general tabs
  const lessonsScrollPosRef = useRef<Record<number, number>>({});
  const tabScrollPosRef = useRef<Partial<Record<MainTabType, number>>>({});
  const prevTabRef = useRef<MainTabType>(currentTab);

  // Continuously record scroll position for current tab & lesson
  useEffect(() => {
    const handleScroll = () => {
      if (currentTab === 'lessons') {
        lessonsScrollPosRef.current[selectedLessonNum] = window.scrollY;
      } else {
        tabScrollPosRef.current[currentTab] = window.scrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentTab, selectedLessonNum]);

  // Handle smart scroll behavior when switching tabs or changing lessons
  useEffect(() => {
    let savedPos = 0;
    if (currentTab === 'lessons') {
      savedPos = lessonsScrollPosRef.current[selectedLessonNum] || 0;
    } else {
      savedPos = tabScrollPosRef.current[currentTab] || 0;
    }

    const rafId = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: savedPos, left: 0, behavior: 'instant' });
      });
    });

    prevTabRef.current = currentTab;
    return () => cancelAnimationFrame(rafId);
  }, [currentTab, selectedLessonNum]);

  // Active toggle count
  const activeToggleCount = useMemo(() => {
    return Object.values(toggles).filter(Boolean).length;
  }, [toggles]);

  // Selected Lesson data
  const currentLesson = useMemo(() => {
    return allLessons.find((l) => l.number === selectedLessonNum) || allLessons[0];
  }, [selectedLessonNum]);

  // Flashcards items
  const flashcardItems = useMemo(() => {
    if (flashcardLessonId === 'all') {
      return allLessons.flatMap((l) => l.kanjiList);
    }
    const target = allLessons.find((l) => l.number === flashcardLessonId);
    return target ? target.kanjiList : allLessons[0].kanjiList;
  }, [flashcardLessonId]);

  // Handle lesson change
  const handleSelectLesson = (num: number) => {
    setSelectedLessonNum(num);
    setLastLesson(num);
    setCurrentTab('lessons');
  };

  // Handle toggle changes
  const handleToggleChange = (key: keyof DisplayToggles) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Preset configurations
  const handleApplyPreset = (preset: 'all' | 'bengali' | 'immersion' | 'selftest') => {
    switch (preset) {
      case 'all':
        setToggles({
          showEmoji: true,
          showBengali: true,
          showEnglish: true,
          showKana: true,
          showRomaji: true,
          showSentences: true,
          showVocab: true,
        });
        break;
      case 'bengali':
        setToggles({
          showEmoji: true,
          showBengali: true,
          showEnglish: false,
          showKana: true,
          showRomaji: true,
          showSentences: true,
          showVocab: true,
        });
        break;
      case 'immersion':
        setToggles({
          showEmoji: false,
          showBengali: false,
          showEnglish: false,
          showKana: true,
          showRomaji: false,
          showSentences: true,
          showVocab: true,
        });
        break;
      case 'selftest':
        setToggles({
          showEmoji: false,
          showBengali: false,
          showEnglish: false,
          showKana: false,
          showRomaji: false,
          showSentences: false,
          showVocab: false,
        });
        break;
    }
  };

  // Filtered Kanji list for the active lesson
  const filteredKanji = useMemo(() => {
    return currentLesson.kanjiList.filter((item) => {
      // Category filter
      if (categoryFilter !== 'all' && item.category !== categoryFilter) {
        return false;
      }
      // Search query filter
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();

      const matchKanji = item.kanji.includes(q);
      const matchMeaningBn = item.meanings.bn.toLowerCase().includes(q);
      const matchMeaningEn = item.meanings.en.toLowerCase().includes(q);
      const matchOnyomi = item.readings.onyomi.some(
        (r) => r.kana.includes(q) || r.romaji.toLowerCase().includes(q)
      );
      const matchKunyomi = item.readings.kunyomi.some(
        (r) => r.kana.includes(q) || r.romaji.toLowerCase().includes(q)
      );
      const matchVocab = item.vocab.some(
        (v) =>
          v.kanji.includes(q) ||
          v.kana.includes(q) ||
          v.meaningBn.toLowerCase().includes(q) ||
          v.meaningEn.toLowerCase().includes(q)
      );

      return (
        matchKanji ||
        matchMeaningBn ||
        matchMeaningEn ||
        matchOnyomi ||
        matchKunyomi ||
        matchVocab
      );
    });
  }, [currentLesson, categoryFilter, searchQuery]);

  return (
    <div className="min-h-screen bg-[#0d0f12] text-stone-200 font-sans selection:bg-amber-500/30 selection:text-amber-200 w-full max-w-full overflow-x-hidden">
      {/* Top Navbar */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={(tab) => setCurrentTab(tab)}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      <main className="mx-auto max-w-7xl px-3 sm:px-8 pt-4 sm:pt-6 pb-[calc(5rem+env(safe-area-inset-bottom,0px))] md:pb-8">
        {/* VIEW 1: Home Dashboard */}
        {currentTab === 'home' && (
          <HomeDashboard
            lessons={allLessons}
            onSelectLesson={(num) => handleSelectLesson(num)}
            onGoToFlashcards={(num) => {
              if (num) setFlashcardLessonId(num);
              setCurrentTab('flashcards');
            }}
            onGoToQuiz={() => setCurrentTab('quiz')}
            onOpenSettings={() => setIsSettingsOpen(true)}
            onOpenExport={() => setIsExportOpen(true)}
          />
        )}

        {/* VIEW 2: Study Library (Lessons) */}
        {currentTab === 'lessons' && (
          <div>
            {/* Lesson Navigation Header & Selector */}
            <div className="mb-5 rounded-2xl border border-stone-800/80 bg-[#14171d] p-4 sm:p-6 shadow-xl shadow-black/30 overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:gap-4">
                {/* Left: Current Lesson Title */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-1 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-950/70 border border-amber-800/50">
                      Lesson {currentLesson.number} of {allLessons.length} ({currentLesson.number <= 15 ? 'A1-A2 Level' : 'A2-B1 Level'})
                    </span>
                    <span className="text-stone-600">·</span>
                    <span className="text-stone-400 font-normal">
                      {currentLesson.kanjiList.length} টি কাঞ্জি ও শব্দভাণ্ডার
                    </span>
                  </div>

                  <h1 className="text-xl sm:text-3xl font-bold font-serif text-stone-100 flex flex-wrap items-baseline gap-2 break-words">
                    <span className="text-amber-300">{currentLesson.titleJa}</span>
                    <span className="text-sm sm:text-base font-sans font-medium text-stone-400">
                      ({currentLesson.titleBn})
                    </span>
                  </h1>

                  <p className="mt-1 text-xs sm:text-sm text-stone-400 max-w-3xl leading-relaxed break-words">
                    {currentLesson.descriptionBn}
                  </p>
                </div>

                {/* Right: Lesson Selector & Switcher */}
                <div className="flex items-center gap-1.5 sm:gap-2 w-full md:w-auto shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-stone-800">
                  <button
                    disabled={selectedLessonNum <= 1}
                    onClick={() => handleSelectLesson(selectedLessonNum - 1)}
                    className="flex items-center justify-center rounded-xl border border-stone-800 bg-[#1b1f29] p-2 sm:px-3 sm:py-2 text-xs font-medium text-stone-300 hover:bg-stone-800 disabled:opacity-30 transition-colors shrink-0"
                    title="পূর্ববর্তী লেসন"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span className="hidden sm:inline ml-1">পূর্ববর্তী</span>
                  </button>

                  <div className="relative flex-1 min-w-0 md:w-64">
                    <select
                      value={selectedLessonNum}
                      onChange={(e) => handleSelectLesson(Number(e.target.value))}
                      className="w-full truncate rounded-xl border border-stone-800 bg-[#181b24] py-2 pl-3 pr-8 text-xs sm:text-sm font-semibold text-stone-200 shadow-sm focus:border-amber-500 focus:outline-none cursor-pointer"
                    >
                      {allLessons.map((l) => (
                        <option key={l.id} value={l.number} className="bg-[#14171d] text-stone-200">
                          {l.number <= 15 ? '[A1-A2]' : '[A2-B1]'} L{l.number}: {l.titleJa} ({l.titleBn})
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    disabled={selectedLessonNum >= allLessons.length}
                    onClick={() => handleSelectLesson(selectedLessonNum + 1)}
                    className="flex items-center justify-center rounded-xl border border-stone-800 bg-[#1b1f29] p-2 sm:px-3 sm:py-2 text-xs font-medium text-stone-300 hover:bg-stone-800 disabled:opacity-30 transition-colors shrink-0"
                    title="পরবর্তী লেসন"
                  >
                    <span className="hidden sm:inline mr-1">পরবর্তী</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Context Callout Banners for ALL 15 Lessons */}
            {categoryFilter === 'all' && lessonContextGuides[selectedLessonNum] && (
              <div
                className={`mb-5 rounded-2xl border p-4 text-xs shadow-md transition-all ${
                  lessonContextGuides[selectedLessonNum].theme === 'emerald'
                    ? 'border-emerald-900/60 bg-emerald-950/40 text-emerald-200'
                    : lessonContextGuides[selectedLessonNum].theme === 'rose'
                    ? 'border-rose-900/60 bg-rose-950/40 text-rose-200'
                    : lessonContextGuides[selectedLessonNum].theme === 'blue'
                    ? 'border-blue-900/60 bg-blue-950/40 text-blue-200'
                    : lessonContextGuides[selectedLessonNum].theme === 'purple'
                    ? 'border-purple-900/60 bg-purple-950/40 text-purple-200'
                    : lessonContextGuides[selectedLessonNum].theme === 'sky'
                    ? 'border-sky-900/60 bg-sky-950/40 text-sky-200'
                    : 'border-amber-900/60 bg-amber-950/40 text-amber-200'
                }`}
              >
                <div className="font-semibold mb-1 flex items-center gap-1.5">
                  {selectedLessonNum === 1 && <UserCheck className="h-4 w-4 text-amber-400" />}
                  {selectedLessonNum === 2 && <ShoppingBag className="h-4 w-4 text-amber-400" />}
                  {selectedLessonNum === 3 && <Clock className="h-4 w-4 text-emerald-400" />}
                  {selectedLessonNum === 4 && <UserCheck className="h-4 w-4 text-amber-400" />}
                  {selectedLessonNum === 5 && <Utensils className="h-4 w-4 text-blue-400" />}
                  {selectedLessonNum === 6 && <Users className="h-4 w-4 text-purple-400" />}
                  {selectedLessonNum === 7 && <Utensils className="h-4 w-4 text-amber-400" />}
                  {selectedLessonNum === 8 && <Users className="h-4 w-4 text-rose-400" />}
                  {selectedLessonNum === 9 && <Music className="h-4 w-4 text-emerald-400" />}
                  {selectedLessonNum === 10 && <Compass className="h-4 w-4 text-amber-400" />}
                  {selectedLessonNum === 11 && <Clock className="h-4 w-4 text-blue-400" />}
                  {selectedLessonNum === 12 && <HeartPulse className="h-4 w-4 text-rose-400" />}
                  {selectedLessonNum === 13 && <Plane className="h-4 w-4 text-emerald-400" />}
                  {selectedLessonNum === 14 && <ShieldAlert className="h-4 w-4 text-rose-400" />}
                  {selectedLessonNum === 15 && <CloudRain className="h-4 w-4 text-sky-400" />}
                  <span>{lessonContextGuides[selectedLessonNum].title}</span>
                </div>
                <p className="text-stone-300 leading-relaxed text-xs">
                  {lessonContextGuides[selectedLessonNum].contentBn}
                </p>
              </div>
            )}

            {/* Filter, Search & Display Controls Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
              {/* Category Segmented Filters */}
              <div className="flex items-center gap-1 bg-[#151820] border border-stone-800 p-1 rounded-xl text-xs font-semibold text-stone-400 overflow-x-auto max-w-full">
                <button
                  onClick={() => setCategoryFilter('all')}
                  className={`px-3 py-1.5 rounded-lg transition-all shrink-0 whitespace-nowrap ${
                    categoryFilter === 'all'
                      ? 'bg-amber-500/20 border border-amber-500/40 text-amber-300 shadow-sm'
                      : 'hover:text-stone-200'
                  }`}
                >
                  সব ({currentLesson.kanjiList.length})
                </button>
                <button
                  onClick={() => setCategoryFilter('main')}
                  className={`px-3 py-1.5 rounded-lg transition-all shrink-0 whitespace-nowrap ${
                    categoryFilter === 'main'
                      ? 'bg-amber-500/20 border border-amber-500/40 text-amber-300 shadow-sm'
                      : 'hover:text-stone-200'
                  }`}
                >
                  মূল কান্জি ({currentLesson.kanjiList.filter((k) => k.category === 'main').length})
                </button>
                <button
                  onClick={() => setCategoryFilter('read_only')}
                  className={`px-3 py-1.5 rounded-lg transition-all shrink-0 whitespace-nowrap ${
                    categoryFilter === 'read_only'
                      ? 'bg-amber-500/20 border border-amber-500/40 text-amber-300 shadow-sm'
                      : 'hover:text-stone-200'
                  }`}
                >
                  পড়ার কান্জি ({currentLesson.kanjiList.filter((k) => k.category === 'read_only').length})
                </button>
                <button
                  onClick={() => setCategoryFilter('visual_recognition')}
                  className={`px-3 py-1.5 rounded-lg transition-all shrink-0 whitespace-nowrap ${
                    categoryFilter === 'visual_recognition'
                      ? 'bg-amber-500/20 border border-amber-500/40 text-amber-300 shadow-sm'
                      : 'hover:text-stone-200'
                  }`}
                >
                  দেখে চেনার ({currentLesson.kanjiList.filter((k) => k.category === 'visual_recognition').length})
                </button>
              </div>

              {/* Search Box & Quick Settings Trigger */}
              <div className="flex items-center gap-2">
                <div className="relative flex-1 sm:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-500" />
                  <input
                    type="text"
                    placeholder="কাঞ্জি, অর্থ বা রিডিং খুঁজুন..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-xl border border-stone-800 bg-[#161a22] py-1.5 pl-9 pr-3 text-xs sm:text-sm text-stone-200 placeholder:text-stone-500 focus:border-amber-500 focus:outline-none shadow-sm"
                  />
                </div>

                {/* Quick Display Settings Button */}
                <button
                  onClick={() => setIsSettingsOpen(true)}
                  title="ডিসপ্লে নিয়ন্ত্রণ ও প্রিসেট পরিবর্তন"
                  className="flex items-center gap-1.5 rounded-xl border border-amber-500/40 bg-amber-950/40 hover:bg-amber-900/60 text-amber-300 px-3 py-1.5 text-xs font-semibold shadow-sm transition-all shrink-0"
                >
                  <SlidersHorizontal className="h-3.5 w-3.5 text-amber-400" />
                  <span className="hidden sm:inline">ডিসপ্লে</span>
                  <span className="bg-stone-900 px-1.5 py-0.5 rounded text-[10px] text-amber-300 border border-amber-500/30 font-bold">
                    {activeToggleCount}/7
                  </span>
                </button>
              </div>
            </div>

            {/* Kanji Cards Grid */}
            {filteredKanji.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredKanji.map((item) => (
                  <KanjiCard
                    key={item.id}
                    item={item}
                    toggles={toggles}
                    onSelectKanji={(selected) => setSelectedKanji(selected)}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-stone-800 bg-[#14171d] p-12 text-center">
                <p className="text-sm text-stone-400 font-medium">
                  অনুসন্ধানের সাথে মিলে এমন কোনো কান্জি পাওয়া যায়নি।
                </p>
              </div>
            )}
          </div>
        )}

        {/* VIEW 3: Flashcards */}
        {currentTab === 'flashcards' && (
          <div className="space-y-3">
            {/* Top Compact Selector for Flashcards */}
            <div className="flex items-center justify-between gap-2 border-b border-stone-800/80 pb-2">
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-bold font-serif text-stone-100 flex items-center gap-1.5">
                  <span>🎴 ফ্ল্যাশকার্ড</span>
                </h1>
                <span className="hidden xs:inline-block text-[11px] font-semibold text-amber-300 bg-amber-950/60 border border-amber-800/40 px-2 py-0.5 rounded-md">
                  {flashcardItems.length} টি কাঞ্জি
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <select
                  value={flashcardLessonId}
                  onChange={(e) => {
                    const val = e.target.value;
                    setFlashcardLessonId(val === 'all' ? 'all' : Number(val));
                  }}
                  className="rounded-xl border border-stone-800 bg-[#161a22] px-2.5 py-1 text-xs font-semibold text-stone-200 shadow-sm focus:border-amber-500 focus:outline-none max-w-[200px] xs:max-w-xs truncate cursor-pointer"
                >
                  <option value="all" className="bg-[#14171d] text-stone-200">সব লেসন একসাথে (২২৭ কাঞ্জি)</option>
                  {allLessons.map((l) => (
                    <option key={l.id} value={l.number} className="bg-[#14171d] text-stone-200">
                      L{l.number}: {l.titleJa} ({l.titleBn})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <FlashcardMode
              items={flashcardItems}
              toggles={toggles}
              lessonTitle={
                flashcardLessonId === 'all'
                  ? 'সব লেসন'
                  : `L${flashcardLessonId}: ${
                      allLessons.find((l) => l.number === flashcardLessonId)?.titleJa || ''
                    }`
              }
              onSelectKanjiDetail={(item) => setSelectedKanji(item)}
            />
          </div>
        )}

        {/* VIEW 4: Quiz Mode */}
        {currentTab === 'quiz' && (
          <div className="space-y-6">
            <QuizMode />
          </div>
        )}
      </main>

      {/* Interactive Kanji Drawing & Details Studio Modal */}
      {selectedKanji && (
        <KanjiDrawModal
          item={selectedKanji}
          itemsList={currentLesson.kanjiList}
          toggles={toggles}
          onClose={() => setSelectedKanji(null)}
          onSelectKanji={(item) => setSelectedKanji(item)}
        />
      )}

      {/* Settings & Modular Display Control Modal */}
      {isSettingsOpen && (
        <SettingsModal
          toggles={toggles}
          onToggleChange={handleToggleChange}
          onResetToggles={() => setToggles(defaultToggles)}
          onApplyPreset={handleApplyPreset}
          onOpenExport={() => setIsExportOpen(true)}
          onClose={() => setIsSettingsOpen(false)}
        />
      )}

      {/* Export Modal */}
      {isExportOpen && (
        <RawDataExportModal
          lessons={allLessons}
          initialLessonId={selectedLessonNum}
          onClose={() => setIsExportOpen(false)}
        />
      )}
    </div>
  );
}
