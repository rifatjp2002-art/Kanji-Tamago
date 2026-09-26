import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  Award,
  Volume2,
  ArrowRight,
  Sparkles,
  Flame,
  Zap,
  BookOpen,
  Filter,
  Play,
  Shuffle,
  HelpCircle,
  Check,
  AlertTriangle,
  BookmarkPlus,
  BookmarkCheck,
  RefreshCw,
  Layers,
  Compass,
  Eye,
  EyeOff,
  Languages,
  Info,
} from 'lucide-react';
import { speakJapanese } from '../utils/speech';
import { allLessons } from '../data/allLessons';
import {
  GeneratedQuestion,
  QuestionMode,
  QuizFilterConfig,
  generateQuiz,
  getStoredMistakes,
  recordMistake,
  removeMistake,
  clearAllMistakes,
  getAllKanjiWithLesson,
  getEstimatedPoolSize,
} from '../utils/quizGenerator';
import { setKanjiMastery, getProgress, MasteryLevel } from '../utils/progress';

export const QuizMode: React.FC = () => {
  // Setup / Filter State
  const [isConfiguring, setIsConfiguring] = useState(true);
  const [selectedLesson, setSelectedLesson] = useState<number | 'all'>('all');
  const [selectedMastery, setSelectedMastery] = useState<MasteryLevel | 'all' | 'mistakes'>('all');
  const [selectedMode, setSelectedMode] = useState<QuestionMode>('all');
  const [selectedCount, setSelectedCount] = useState<number | 'all'>(20);
  const [selectedTimer, setSelectedTimer] = useState<number>(0); // 0 = off, 15, 30 seconds

  // In-Quiz Real-Time Toggles
  const [showRomajiHint, setShowRomajiHint] = useState<boolean>(true);
  const [timeLeft, setTimeLeft] = useState<number>(0);

  // Active Quiz State
  const [questions, setQuestions] = useState<GeneratedQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [userAnswers, setUserAnswers] = useState<{
    question: GeneratedQuestion;
    selectedIndex: number;
    isCorrect: boolean;
  }[]>([]);

  // Toast Notification State
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Local state tracking marked hard kanjis for instant UI reactivity
  const [hardKanjiIds, setHardKanjiIds] = useState<Record<string, boolean>>({});

  // Results State
  const [isFinished, setIsFinished] = useState(false);
  const [reviewFilter, setReviewFilter] = useState<'all' | 'mistakes' | 'correct'>('all');

  // Stored mistakes count
  const [mistakeCount, setMistakeCount] = useState<number>(0);

  // Load progress and mistakes on mount / return
  useEffect(() => {
    setMistakeCount(getStoredMistakes().length);
    const progress = getProgress();
    const map: Record<string, boolean> = {};
    Object.entries(progress.kanjiStatus).forEach(([id, status]) => {
      if (status === 'hard') map[id] = true;
    });
    setHardKanjiIds(map);
  }, [isConfiguring, isFinished]);

  // Scroll to top whenever transitioning screens or questions in Quiz
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [isConfiguring, isFinished, currentIndex]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3500);
  };

  // Start a new quiz with selected configuration
  const handleStartQuiz = (overrideConfig?: Partial<QuizFilterConfig>) => {
    const config: QuizFilterConfig = {
      lessonId: overrideConfig?.lessonId ?? selectedLesson,
      masteryFilter: overrideConfig?.masteryFilter ?? selectedMastery,
      questionMode: overrideConfig?.questionMode ?? selectedMode,
      questionCount: overrideConfig?.questionCount ?? selectedCount,
    };

    const generated = generateQuiz(config);

    if (generated.length === 0) {
      const fallback = generateQuiz({
        lessonId: 'all',
        masteryFilter: 'all',
        questionMode: 'all',
        questionCount: 20,
      });
      setQuestions(fallback);
    } else {
      setQuestions(generated);
    }

    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setUserAnswers([]);
    setIsFinished(false);
    setIsConfiguring(false);
  };

  // Retake only wrong questions from current quiz session
  const handleRetakeCurrentMistakes = () => {
    const missedQuestions = userAnswers
      .filter((a) => !a.isCorrect)
      .map((a) => a.question);

    if (missedQuestions.length === 0) return;

    setQuestions(missedQuestions);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setUserAnswers([]);
    setIsFinished(false);
  };

  // Start mistakes quiz from persistent mistake bank
  const handleStartMistakesQuiz = () => {
    handleStartQuiz({
      lessonId: 'all',
      masteryFilter: 'mistakes',
      questionMode: 'all',
      questionCount: 'all',
    });
  };

  const currentQ = questions[currentIndex];

  // Timer countdown hook for timed challenges
  useEffect(() => {
    if (isConfiguring || isFinished || selectedTimer <= 0) return;
    if (isAnswered) return;

    setTimeLeft(selectedTimer);
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex, isConfiguring, isFinished, isAnswered, selectedTimer]);

  // Handle timeout when countdown reaches 0
  const handleTimeout = () => {
    if (isAnswered || !currentQ) return;

    setSelectedOption(-1); // -1 indicates timed out
    setIsAnswered(true);

    setUserAnswers((prev) => [
      ...prev,
      {
        question: currentQ,
        selectedIndex: -1,
        isCorrect: false,
      },
    ]);

    if (currentQ.kanjiId) {
      recordMistake(currentQ.kanjiId);
      setMistakeCount((prev) => prev + 1);
    }

    showToast('⏰ সময় শেষ হয়ে গেছে! সঠিক উত্তরটি নিচে সবুজ রঙে দেখে নিন।');
  };

  // Clear persistent mistakes bank
  const handleClearMistakes = () => {
    clearAllMistakes();
    setMistakeCount(0);
    showToast('🧹 ভুল কাঞ্জি ব্যাংক সফলভাবে খালি করা হয়েছে!');
  };

  // Handle user selecting an option
  const handleSelectOption = (index: number) => {
    if (isAnswered || !currentQ) return;

    setSelectedOption(index);
    setIsAnswered(true);

    const chosen = currentQ.options[index];
    const isCorrect = !!chosen?.isCorrect;

    // Track answer for results
    setUserAnswers((prev) => [
      ...prev,
      {
        question: currentQ,
        selectedIndex: index,
        isCorrect,
      },
    ]);

    // Track mistakes in persistent storage
    if (currentQ.kanjiId) {
      const wasMistake = getStoredMistakes().includes(currentQ.kanjiId);
      if (!isCorrect) {
        recordMistake(currentQ.kanjiId);
        setMistakeCount((prev) => prev + 1);
      } else {
        removeMistake(currentQ.kanjiId);
        setMistakeCount((prev) => Math.max(0, prev - 1));
        if (wasMistake) {
          showToast('🎉 চমৎকার! ভুল শুধরে নিয়েছেন—কাঞ্জিটি ভুল ব্যাংক থেকে মুছে দেওয়া হয়েছে।');
        }
      }
    }

    // Auto-play pronunciation on correct answer for immersion
    if (isCorrect && currentQ.promptJa) {
      speakJapanese(currentQ.promptJa);
    }
  };

  // Advance to next question or complete quiz
  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  // Toggle Hard Kanji status in Flashcard database
  const handleToggleHard = (kanjiId: string) => {
    const isCurrentlyHard = !!hardKanjiIds[kanjiId];
    if (isCurrentlyHard) {
      setKanjiMastery(kanjiId, 'medium');
      setHardKanjiIds((prev) => ({ ...prev, [kanjiId]: false }));
      showToast('⚡ ফ্ল্যাশকার্ডে \'মধ্যম\' তালিকায় স্থানান্তরিত হয়েছে');
    } else {
      setKanjiMastery(kanjiId, 'hard');
      setHardKanjiIds((prev) => ({ ...prev, [kanjiId]: true }));
      showToast('🔥 ফ্ল্যাশকার্ডে \'কঠিন\' তালিকায় সংরক্ষিত হয়েছে! আপনি ফ্ল্যাশকার্ডে এটি অগ্রাধিকার পাবেন।');
    }
  };

  // Global Keyboard event listeners for lightning-fast quiz taking
  useEffect(() => {
    if (isConfiguring || isFinished || !currentQ) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Avoid firing when user is typing in general text inputs
      const activeEl = document.activeElement;
      if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA')) {
        return;
      }

      const key = e.key.toLowerCase();

      // If already answered, let them press Space/Enter/ArrowRight to go to next
      if (isAnswered) {
        if (key === ' ' || key === 'enter' || key === 'arrowright') {
          e.preventDefault();
          handleNext();
        } else if (key === 'v') {
          e.preventDefault();
          if (currentQ.promptJa) {
            speakJapanese(currentQ.promptJa);
          }
        } else if (key === 'h') {
          e.preventDefault();
          if (currentQ.kanjiId) {
            handleToggleHard(currentQ.kanjiId);
          }
        }
        return;
      }

      // If not yet answered, let them choose options
      // Support 1-4 keys
      if (key === '1' || key === '2' || key === '3' || key === '4') {
        e.preventDefault();
        const index = parseInt(key, 10) - 1;
        if (index < currentQ.options.length) {
          handleSelectOption(index);
        }
      }
      // Support a-d keys
      else if (key === 'a') {
        e.preventDefault();
        handleSelectOption(0);
      } else if (key === 'b') {
        e.preventDefault();
        handleSelectOption(1);
      } else if (key === 'c') {
        e.preventDefault();
        if (currentQ.options.length > 2) handleSelectOption(2);
      } else if (key === 'd') {
        e.preventDefault();
        if (currentQ.options.length > 3) handleSelectOption(3);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isConfiguring, isFinished, isAnswered, currentIndex, currentQ, questions.length]);

  // Calculate scores
  const correctCount = userAnswers.filter((a) => a.isCorrect).length;
  const wrongCount = userAnswers.filter((a) => !a.isCorrect).length;
  const scorePercent = userAnswers.length > 0 ? Math.round((correctCount / userAnswers.length) * 100) : 0;

  const estimatedPoolCount = getEstimatedPoolSize(selectedLesson, selectedMode);
  const isKanjiOptionType =
    currentQ &&
    (['kana_to_kanji', 'onyomi_to_kanji', 'kunyomi_to_kanji', 'meaning_to_kanji'].includes(
      currentQ.questionType
    ) || (currentQ.questionType === 'jlpt_exam' && currentQ.options[0]?.text.length <= 2 && !/[\u3040-\u309F]/.test(currentQ.options[0]?.text)));

  const isCurrentKanjiHard = currentQ?.kanjiId ? !!hardKanjiIds[currentQ.kanjiId] : false;

  // ----------------------------------------------------
  // VIEW 1: CONFIGURATION SCREEN (QUIZ STUDIO SETUP)
  // ----------------------------------------------------
  if (isConfiguring) {
    return (
      <div className="space-y-6 max-w-4xl mx-auto">
        {/* Japanese Themed Header Banner */}
        <div className="rounded-3xl border border-stone-800/80 bg-gradient-to-br from-[#1b1512] via-[#14171d] to-[#12151b] p-6 sm:p-8 text-stone-200 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-6 -bottom-6 w-44 h-44 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
          <div className="absolute -left-6 -top-6 w-44 h-44 rounded-full bg-rose-500/10 blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
                <Sparkles className="h-3.5 w-3.5" />
                <span>মাস্টারি কুইজ ইঞ্জিন · ডায়নামিক ৩,৬৮২টি প্রশ্ন</span>
              </div>
              <h1 className="font-serif text-2xl sm:text-4xl font-bold text-stone-100 tracking-tight flex items-center gap-2.5">
                <span>🎯 কাঞ্জি কুইজ স্টুডিও</span>
              </h1>
              <p className="mt-2 text-sm text-stone-300 max-w-2xl leading-relaxed font-sans">
                কাঞ্জি ➔ কানা, কানা ➔ কাঞ্জি, অন'ইয়োমি, কুন'ইয়োমি, JLPT রিয়েল এক্সাম ও টাইমার মোড। রোমাজি টগল এবং কঠিন কাঞ্জি সেভ করার পূর্ণাঙ্গ সুবিধা।
              </p>
            </div>

            {/* Quick Stats Badges */}
            <div className="flex flex-wrap md:flex-col gap-2.5 shrink-0 text-xs">
              <div className="bg-[#12151c]/80 backdrop-blur-md rounded-2xl px-4 py-2 border border-stone-800 flex items-center gap-2.5 shadow-sm">
                <BookOpen className="h-4 w-4 text-amber-400" />
                <div>
                  <div className="text-[10px] text-stone-400">মোট প্রশ্ন ক্ষমতা</div>
                  <div className="font-bold text-stone-100 text-sm">৩,৬৮২টি ইউনিক প্রশ্ন</div>
                </div>
              </div>

              {mistakeCount > 0 && (
                <div className="flex items-center gap-1.5 w-full">
                  <button
                    onClick={handleStartMistakesQuiz}
                    className="bg-rose-950/70 hover:bg-rose-900/80 backdrop-blur-md rounded-2xl px-3.5 py-2 border border-rose-800/60 flex items-center gap-2 text-left transition-all group shadow-sm flex-1"
                  >
                    <AlertTriangle className="h-4 w-4 text-rose-400 group-hover:scale-110 transition-transform shrink-0" />
                    <div>
                      <div className="text-[10px] text-rose-300 font-medium">ভুল হওয়া কাঞ্জি ব্যাংক</div>
                      <div className="font-bold text-rose-200 text-xs sm:text-sm">{mistakeCount} টি রিটেক করুন ➔</div>
                    </div>
                  </button>
                  <button
                    onClick={handleClearMistakes}
                    className="p-2.5 rounded-2xl bg-[#181b24] border border-stone-800 text-stone-400 hover:text-rose-400 hover:border-rose-800/60 transition-colors text-xs"
                    title="ভুল তালিকা রিসেট / খালি করুন"
                  >
                    🗑️
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Configuration Card */}
        <div className="rounded-3xl border border-stone-800 bg-[#14171d] p-6 sm:p-8 shadow-xl shadow-black/40 space-y-7">
          <div className="flex items-center gap-2 text-stone-100 font-bold text-lg pb-3 border-b border-stone-800">
            <Filter className="h-5 w-5 text-amber-400" />
            <span>কুইজ সেটিংস ও ফিল্টার নির্বাচন করুন</span>
          </div>

          {/* 1. Lesson Selector */}
          <div>
            <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-2.5">
              ১. লেসন নির্বাচন (Lesson Scope)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">
              <button
                onClick={() => setSelectedLesson('all')}
                className={`px-3 py-2.5 rounded-2xl text-xs font-bold transition-all text-center border ${
                  selectedLesson === 'all'
                    ? 'bg-amber-500/25 text-amber-300 border-amber-500 shadow-sm ring-1 ring-amber-500/30'
                    : 'bg-[#181b24] text-stone-400 border-stone-800 hover:bg-stone-800 hover:text-stone-200'
                }`}
              >
                🌟 সব লেসন (1-15)
              </button>
              {allLessons.map((l) => (
                <button
                  key={l.number}
                  onClick={() => setSelectedLesson(l.number)}
                  className={`px-3 py-2.5 rounded-2xl text-xs font-bold transition-all text-center border ${
                    selectedLesson === l.number
                      ? 'bg-amber-500/25 text-amber-300 border-amber-500 shadow-sm ring-1 ring-amber-500/30'
                      : 'bg-[#181b24] text-stone-400 border-stone-800 hover:bg-stone-800 hover:text-stone-200'
                  }`}
                >
                  L{l.number}: {l.titleJa.length > 5 ? l.titleJa.slice(0, 5) + '..' : l.titleJa}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Flashcard Mastery Filter */}
          <div>
            <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-2.5">
              ২. দক্ষতা ও মেমোরি ফিল্টার (Flashcard Mastery Filter)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
              <button
                onClick={() => setSelectedMastery('all')}
                className={`px-3 py-2.5 rounded-2xl text-xs font-bold transition-all text-center border ${
                  selectedMastery === 'all'
                    ? 'bg-stone-700 text-stone-100 border-stone-600 shadow-sm'
                    : 'bg-[#181b24] text-stone-400 border-stone-800 hover:bg-stone-800 hover:text-stone-200'
                }`}
              >
                🎯 সব কাঞ্জি
              </button>
              <button
                onClick={() => setSelectedMastery('hard')}
                className={`px-3 py-2.5 rounded-2xl text-xs font-bold transition-all text-center border ${
                  selectedMastery === 'hard'
                    ? 'bg-rose-950/80 text-rose-300 border-rose-600 shadow-sm'
                    : 'bg-rose-950/30 text-rose-400 border-rose-900/60 hover:bg-rose-900/50'
                }`}
              >
                🔥 শুধু কঠিন (Hard)
              </button>
              <button
                onClick={() => setSelectedMastery('medium')}
                className={`px-3 py-2.5 rounded-2xl text-xs font-bold transition-all text-center border ${
                  selectedMastery === 'medium'
                    ? 'bg-amber-950/80 text-amber-300 border-amber-600 shadow-sm'
                    : 'bg-amber-950/30 text-amber-400 border-amber-900/60 hover:bg-amber-900/50'
                }`}
              >
                ⚡ শুধু মধ্যম (Medium)
              </button>
              <button
                onClick={() => setSelectedMastery('easy')}
                className={`px-3 py-2.5 rounded-2xl text-xs font-bold transition-all text-center border ${
                  selectedMastery === 'easy'
                    ? 'bg-emerald-950/80 text-emerald-300 border-emerald-600 shadow-sm'
                    : 'bg-emerald-950/30 text-emerald-400 border-emerald-900/60 hover:bg-emerald-900/50'
                }`}
              >
                🌱 শুধু সহজ (Easy)
              </button>
              <button
                onClick={() => setSelectedMastery('unseen')}
                className={`px-3 py-2.5 rounded-2xl text-xs font-bold transition-all text-center border ${
                  selectedMastery === 'unseen'
                    ? 'bg-sky-950/80 text-sky-300 border-sky-600 shadow-sm'
                    : 'bg-sky-950/30 text-sky-400 border-sky-900/60 hover:bg-sky-900/50'
                }`}
              >
                🆕 নতুন (Unseen)
              </button>
              <button
                onClick={() => setSelectedMastery('mistakes')}
                className={`px-3 py-2.5 rounded-2xl text-xs font-bold transition-all text-center border ${
                  selectedMastery === 'mistakes'
                    ? 'bg-red-950/90 text-red-300 border-red-600 shadow-sm'
                    : 'bg-[#181b24] text-stone-400 border-stone-800 hover:bg-stone-800 hover:text-stone-200'
                }`}
              >
                ❌ ভুল কাঞ্জি ({mistakeCount})
              </button>
            </div>
          </div>

          {/* 3. Multi-Directional Question Types */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <label className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                ৩. প্রশ্নের ধরণ ও দিক (Question Direction & Mode)
              </label>
              <span className="text-[11px] text-amber-300 font-semibold bg-amber-950/60 px-2 py-0.5 rounded-lg border border-amber-800/50">
                ১২+ টি আলাদা ক্যাটাগরি
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {[
                {
                  id: 'all',
                  title: '🎲 মেগা মিক্সড অল (৩,৬৮২টি প্রশ্ন)',
                  desc: 'কাঞ্জি, কানা, অন, কুন, অর্থ, বাক্য ও স্ট্রোক মিলিয়ে মিশ্রিত',
                  badge: 'সেরা মোড',
                },
                {
                  id: 'kanji_to_kana',
                  title: '🔤 কাঞ্জি ➔ কানা রিডিং',
                  desc: 'কাঞ্জি বা শব্দ দেখে সঠিক হিরাগানা/কানা রিডিং নির্বাচন',
                },
                {
                  id: 'kana_to_kanji',
                  title: '🔤 কানা ➔ কাঞ্জি নির্বাচন',
                  desc: 'কানা উচ্চারণ দেখে সঠিক কাঞ্জি রূপ চিহ্নিতকরণ',
                },
                {
                  id: 'kanji_to_onyomi',
                  title: "🔊 কাঞ্জি ➔ অন'ইয়োমি (Katakana)",
                  desc: "কাঞ্জির সঠিক On'yomi (কাতাকানা) রিডিং বাছাই",
                },
                {
                  id: 'onyomi_to_kanji',
                  title: "🔊 অন'ইয়োমি ➔ কাঞ্জি নির্বাচন",
                  desc: "অন'ইয়োমি রিডিং দেখে ৪টি কাঞ্জি থেকে সঠিকটি চেনা",
                },
                {
                  id: 'kanji_to_kunyomi',
                  title: "🌿 কাঞ্জি ➔ কুন'ইয়োমি (Hiragana)",
                  desc: "কাঞ্জির সঠিক Kun'yomi (হিরাগানা) রিডিং বাছাই",
                },
                {
                  id: 'kunyomi_to_kanji',
                  title: "🌿 কুন'ইয়োমি ➔ কাঞ্জি নির্বাচন",
                  desc: "কুন'ইয়োমি রিডিং দেখে সঠিক কাঞ্জি শনাক্তকরণ",
                },
                {
                  id: 'kanji_to_meaning',
                  title: '🈸 কাঞ্জি ➔ বাংলা ও ইংরেজি অর্থ',
                  desc: 'কাঞ্জি দেখে সঠিক বাংলা/ইংরেজি অর্থ নির্বাচন',
                },
                {
                  id: 'meaning_to_kanji',
                  title: '🈸 অর্থ ➔ কাঞ্জি নির্বাচন',
                  desc: 'বাংলা বা ইংরেজি অর্থ পড়ে সঠিক কাঞ্জি বেছে নেওয়া',
                },
                {
                  id: 'vocab',
                  title: '📖 শব্দ ও ভোকাবুলারি প্রয়োগ',
                  desc: 'যৌগিক কাঞ্জি শব্দ ও বাস্তব জীবনের ভোকাবুলারি',
                },
                {
                  id: 'sentences',
                  title: '✏️ বাস্তব বাক্য ও শূন্যস্থান পূরণ',
                  desc: 'বাস্তব বাক্যের শূন্যস্থানে মানানসই কাঞ্জি বসান',
                },
                {
                  id: 'strokes',
                  title: '✍️ স্ট্রোক সংখ্যা ও বৈশিষ্ট্য',
                  desc: 'কাঞ্জিটির মোট স্ট্রোক সংখ্যা কত যাচাই করুন',
                },
                {
                  id: 'scenario',
                  title: '🏪 বাস্তব সাইনবোর্ড ও সিচুয়েশন',
                  desc: 'সুপারমার্কেট, স্টেশন ও জরুরি সাইনবোর্ড সংক্রান্ত কুইজ',
                },
                {
                  id: 'jlpt_exam',
                  title: '🎌 JLPT রিয়েল এক্সাম মোড (N5-N3)',
                  desc: 'আসল পরীক্ষার অনুকরণে 漢字読み ও 表記 ফরম্যাটে বাক্যভিত্তিক প্রশ্ন',
                  badge: 'JLPT স্টাইল',
                },
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setSelectedMode(m.id as QuestionMode)}
                  className={`p-3.5 rounded-2xl text-left border transition-all relative ${
                    selectedMode === m.id
                      ? 'bg-amber-950/40 border-amber-500 ring-1 ring-amber-500/40 text-stone-100 shadow-sm'
                      : 'bg-[#181b24] border-stone-800 hover:bg-stone-800/80 text-stone-400'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1">
                    <div className="font-bold text-xs text-stone-200">{m.title}</div>
                    {m.badge && (
                      <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold px-1.5 py-0.5 rounded-md">
                        {m.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-stone-400 mt-1 leading-snug">{m.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* 4. Question Count Selector */}
          <div>
            <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-2.5">
              ৪. প্রশ্নের সংখ্যা (Quiz Length)
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {[
                { val: 10, label: '১০ টি (Quick)' },
                { val: 20, label: '২০ টি (Standard)' },
                { val: 50, label: '৫০ টি (Deep)' },
                { val: 100, label: '১০০ টি (Mega)' },
                { val: 200, label: '২০০ টি (Mastery)' },
                { val: 'all', label: 'সব প্রশ্ন (Full Pool)' },
              ].map((c) => (
                <button
                  key={c.val}
                  onClick={() => setSelectedCount(c.val as number | 'all')}
                  className={`py-2.5 px-2 rounded-2xl text-xs font-bold text-center border transition-all ${
                    selectedCount === c.val
                      ? 'bg-amber-500/25 text-amber-300 border-amber-500 shadow-sm'
                      : 'bg-[#181b24] text-stone-400 border-stone-800 hover:bg-stone-800 hover:text-stone-200'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* 5. Speed & Timer Options */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <label className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                ৫. স্পিড ও টাইমার চ্যালেঞ্জ (Countdown Timer)
              </label>
              <span className="text-[11px] text-amber-300 font-semibold bg-amber-950/60 px-2 py-0.5 rounded-lg border border-amber-800/50">
                {selectedTimer === 0 ? '🧘 আনলিমিটেড সময়' : `⏱️ ${selectedTimer} সেকেন্ড লিমিট`}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {[
                { val: 0, label: '🧘 টাইমার নেই (Relaxed)', desc: 'যতক্ষণ ইচ্ছা ভেবেচিন্তে শান্তভাবে উত্তর দিন' },
                { val: 15, label: '⚡ ১৫ সেকেন্ড (Speed Round)', desc: 'তাত্ক্ষণিক সিদ্ধান্ত ও রিফ্লেক্স বাড়ানোর স্পিড টেস্ট' },
                { val: 30, label: '⏱️ ৩০ সেকেন্ড (JLPT Pace)', desc: 'আসল জেএলপিটি পরীক্ষার স্ট্যান্ডার্ড টাইম ম্যানেজমেন্ট' },
              ].map((t) => (
                <button
                  key={t.val}
                  onClick={() => setSelectedTimer(t.val)}
                  className={`p-3.5 rounded-2xl text-left border transition-all ${
                    selectedTimer === t.val
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500 shadow-sm ring-1 ring-amber-500/30'
                      : 'bg-[#181b24] text-stone-400 border-stone-800 hover:bg-stone-800 hover:text-stone-200'
                  }`}
                >
                  <div className="text-xs font-bold text-stone-200">{t.label}</div>
                  <div className="text-[11px] text-stone-400 mt-0.5">{t.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* CTA Action Button */}
          <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-stone-400 font-medium">
              উপলব্ধ প্রশ্ন পুল: প্রায়{' '}
              <span className="font-bold text-amber-300 text-sm">{estimatedPoolCount} টি প্রশ্ন</span>
            </div>

            <button
              onClick={() => handleStartQuiz()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-600 hover:bg-amber-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-amber-900/30 transition-all active:scale-[0.99]"
            >
              <Play className="h-4 w-4 fill-white" />
              <span>
                কুইজ শুরু করুন (
                {selectedCount === 'all'
                  ? `${estimatedPoolCount} টি প্রশ্ন`
                  : `${Math.min(Number(selectedCount), estimatedPoolCount || 20)} টি প্রশ্ন`}
                )
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // VIEW 2: RESULTS SCREEN (POST-QUIZ)
  // ----------------------------------------------------
  if (isFinished) {
    const missedList = userAnswers.filter((a) => !a.isCorrect);
    const correctList = userAnswers.filter((a) => a.isCorrect);

    const displayReviewItems =
      reviewFilter === 'mistakes'
        ? missedList
        : reviewFilter === 'correct'
        ? correctList
        : userAnswers;

    let badgeText = '💡 আরও অনুশীলন প্রয়োজন (Keep Practicing)';
    let badgeColor = 'text-amber-300 bg-amber-950/60 border-amber-700/60';
    if (scorePercent >= 90) {
      badgeText = '🏆 অসাধারণ! কাঞ্জি মাস্টার (Master Level)';
      badgeColor = 'text-emerald-300 bg-emerald-950/60 border-emerald-700/60';
    } else if (scorePercent >= 70) {
      badgeText = '🌟 চমৎকার অগ্রগতি (Great Progress)';
      badgeColor = 'text-sky-300 bg-sky-950/60 border-sky-700/60';
    }

    return (
      <div className="space-y-6 max-w-4xl mx-auto">
        {/* Results Banner */}
        <div className="rounded-3xl border border-stone-800 bg-[#14171d] p-6 sm:p-8 shadow-xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-amber-500/20 border border-amber-500/40 text-amber-300 mb-4 shadow-inner">
            <Award className="h-8 w-8" />
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100">
            কুইজের ফলাফল (Quiz Results)
          </h2>

          <div className={`inline-block mt-2 px-4 py-1.5 rounded-full text-xs font-bold border ${badgeColor}`}>
            {badgeText}
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 max-w-md mx-auto">
            <div className="rounded-2xl bg-[#191d27] border border-stone-800 p-3.5">
              <div className="text-[11px] text-stone-400 font-bold uppercase">স্কোর</div>
              <div className="text-2xl font-bold text-amber-300 mt-0.5">{scorePercent}%</div>
            </div>
            <div className="rounded-2xl bg-emerald-950/40 border border-emerald-800/50 p-3.5">
              <div className="text-[11px] text-emerald-400 font-bold uppercase">সঠিক</div>
              <div className="text-2xl font-bold text-emerald-300 mt-0.5">{correctCount}</div>
            </div>
            <div className="rounded-2xl bg-rose-950/40 border border-rose-800/50 p-3.5">
              <div className="text-[11px] text-rose-400 font-bold uppercase">ভুল</div>
              <div className="text-2xl font-bold text-rose-300 mt-0.5">{wrongCount}</div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => handleStartQuiz()}
              className="inline-flex items-center gap-2 rounded-2xl bg-stone-800 hover:bg-stone-700 px-6 py-3 text-xs font-bold text-stone-200 transition-all shadow-sm"
            >
              <RotateCcw className="h-4 w-4" />
              <span>একই কুইজ আবার দিন</span>
            </button>

            {missedList.length > 0 && (
              <button
                onClick={handleRetakeCurrentMistakes}
                className="inline-flex items-center gap-2 rounded-2xl bg-rose-600 hover:bg-rose-500 px-6 py-3 text-xs font-bold text-white transition-all shadow-sm"
              >
                <RefreshCw className="h-4 w-4" />
                <span>শুধু ভুলগুলো রিটেক করুন ({missedList.length} টি)</span>
              </button>
            )}

            <button
              onClick={() => setIsConfiguring(true)}
              className="inline-flex items-center gap-2 rounded-2xl bg-amber-950/50 px-6 py-3 text-xs font-bold text-amber-300 border border-amber-800/60 hover:bg-amber-900/60 transition-all"
            >
              <Filter className="h-4 w-4" />
              <span>নতুন কুইজ সেটআপ করুন</span>
            </button>
          </div>
        </div>

        {/* Detailed Question Review List */}
        <div className="rounded-3xl border border-stone-800 bg-[#14171d] p-6 sm:p-8 shadow-xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-stone-800">
            <h3 className="text-base font-bold text-stone-100 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-amber-400" />
              <span>প্রশ্নোত্তর বিশ্লেষণ ও পর্যালোচনা ({userAnswers.length} টি)</span>
            </h3>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 bg-[#181b24] border border-stone-800 p-1 rounded-2xl text-xs font-semibold">
              <button
                onClick={() => setReviewFilter('all')}
                className={`px-3 py-1.5 rounded-xl transition-all ${
                  reviewFilter === 'all'
                    ? 'bg-stone-700 text-stone-100 shadow-sm'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                সব ({userAnswers.length})
              </button>
              <button
                onClick={() => setReviewFilter('mistakes')}
                className={`px-3 py-1.5 rounded-xl transition-all ${
                  reviewFilter === 'mistakes'
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                ভুল ({missedList.length})
              </button>
              <button
                onClick={() => setReviewFilter('correct')}
                className={`px-3 py-1.5 rounded-xl transition-all ${
                  reviewFilter === 'correct'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                সঠিক ({correctList.length})
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {displayReviewItems.map((ans, idx) => {
              const q = ans.question;
              const correctOpt = q.options.find((o) => o.isCorrect);
              const userOpt = q.options[ans.selectedIndex];
              const isHard = q.kanjiId ? !!hardKanjiIds[q.kanjiId] : false;

              return (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border transition-all ${
                    ans.isCorrect
                      ? 'bg-emerald-950/25 border-emerald-800/60'
                      : 'bg-rose-950/25 border-rose-800/60'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs font-semibold">
                        {ans.isCorrect ? (
                          <span className="inline-flex items-center gap-1 text-emerald-400 font-bold">
                            <CheckCircle2 className="h-4 w-4" /> সঠিক
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-rose-400 font-bold">
                            <XCircle className="h-4 w-4" /> ভুল হয়েছে
                          </span>
                        )}
                        <span className="text-stone-600">·</span>
                        <span className="text-stone-400">Lesson {q.lessonId}</span>
                      </div>
                      <div className="text-sm font-bold text-stone-100 mt-1">{q.promptBn}</div>
                      {q.promptJa && (
                        <div className="font-serif text-base font-bold text-amber-300 flex items-center gap-2 mt-1">
                          <span>{q.promptJa}</span>
                          <button
                            onClick={() => speakJapanese(q.promptJa || '')}
                            className="text-stone-400 hover:text-amber-400"
                            title="উচ্চারণ শুনুন"
                          >
                            <Volume2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      )}
                    </div>

                    {q.kanjiId && (
                      <button
                        onClick={() => handleToggleHard(q.kanjiId)}
                        className={`shrink-0 p-2 rounded-xl border text-xs font-medium flex items-center gap-1.5 transition-all ${
                          isHard
                            ? 'bg-rose-950/80 border-rose-600 text-rose-300 font-bold'
                            : 'bg-[#181b24] border-stone-800 hover:bg-stone-800 text-stone-400 hover:text-amber-300'
                        }`}
                        title="ফ্ল্যাশকার্ডে 'কঠিন' হিসেবে টগল করুন"
                      >
                        {isHard ? (
                          <>
                            <BookmarkCheck className="h-3.5 w-3.5 text-rose-400" />
                            <span className="hidden sm:inline">কঠিন তালিকায় সেভ</span>
                          </>
                        ) : (
                          <>
                            <BookmarkPlus className="h-3.5 w-3.5 text-amber-400" />
                            <span className="hidden sm:inline">কঠিন হিসেবে সেভ</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  {/* Answers summary */}
                  <div className="mt-3 pt-3 border-t border-stone-800/80 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="bg-[#181b24] p-2.5 rounded-xl border border-stone-800">
                      <span className="text-[10px] text-stone-500 uppercase font-bold block">আপনার উত্তর</span>
                      <span className={`font-semibold ${ans.isCorrect ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {userOpt?.text || 'নির্বাচিত হয়নি'}
                      </span>
                    </div>
                    <div className="bg-[#181b24] p-2.5 rounded-xl border border-emerald-800/60">
                      <span className="text-[10px] text-emerald-400 uppercase font-bold block">সঠিক উত্তর</span>
                      <span className="font-bold text-emerald-300">{correctOpt?.text}</span>
                    </div>
                  </div>

                  {/* Explanation */}
                  <div className="mt-2.5 text-xs text-stone-300 leading-relaxed font-sans bg-[#181b24]/80 p-2.5 rounded-xl border border-stone-800/60">
                    <span className="font-bold text-amber-300">💡 ব্যাখ্যা: </span>
                    {q.explanationBn}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // VIEW 3: ACTIVE INTERACTIVE QUIZ CARD
  // ----------------------------------------------------
  if (!currentQ) {
    return (
      <div className="rounded-3xl border border-stone-800 bg-[#14171d] p-12 text-center max-w-md mx-auto text-stone-400">
        <p className="mb-4">কোনো প্রশ্ন পাওয়া যায়নি। ফিল্টার পরিবর্তন করে চেষ্টা করুন।</p>
        <button
          onClick={() => setIsConfiguring(true)}
          className="rounded-2xl bg-amber-600 px-6 py-2.5 text-xs font-bold text-white hover:bg-amber-500"
        >
          কুইজ সেটিংস এ যান
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4 max-w-3xl mx-auto relative">
      {/* Interactive Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 max-w-md w-11/12 bg-[#1a1e28] text-stone-100 px-4 py-3 rounded-2xl shadow-2xl border border-amber-500/50 text-xs flex items-center gap-2.5 animate-fadeIn">
          <Info className="h-4 w-4 text-amber-400 shrink-0" />
          <span className="leading-snug">{toastMessage}</span>
        </div>
      )}

      {/* Quiz Top Status Bar */}
      <div className="flex items-center justify-between text-xs bg-[#14171d] px-4 py-2.5 rounded-2xl border border-stone-800 shadow-md">
        <div className="flex items-center gap-3">
          <span className="font-bold text-stone-100 font-sans">
            প্রশ্ন {currentIndex + 1} / {questions.length}
          </span>
          <span className="text-stone-700">|</span>
          <div className="flex items-center gap-2 font-medium">
            <span className="text-emerald-400 font-bold">✅ {correctCount}</span>
            <span className="text-rose-400 font-bold">❌ {wrongCount}</span>
          </div>
        </div>

        {/* Live Quiz Helper Toggles */}
        <div className="flex items-center gap-2">
          {/* Live Countdown Timer Badge */}
          {selectedTimer > 0 && (
            <div className={`flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-bold border transition-colors ${
              timeLeft <= 5 && !isAnswered
                ? 'bg-rose-950/80 border-rose-500 text-rose-300 animate-pulse'
                : 'bg-[#181b24] border-stone-800 text-amber-300'
            }`}>
              <span>⏱️ {timeLeft}s</span>
            </div>
          )}

          {/* Romaji Hint Toggle */}
          <button
            onClick={() => setShowRomajiHint((prev) => !prev)}
            className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
              showRomajiHint
                ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-sm'
                : 'bg-[#181b24] border-stone-800 text-stone-400 hover:text-stone-200'
            }`}
            title="রোমাজি উচ্চারণ সহায়ক অন/অফ করুন"
          >
            <Languages className="h-3.5 w-3.5 text-amber-400" />
            <span>রোমাজি: {showRomajiHint ? 'ON' : 'OFF'}</span>
          </button>

          <span className="inline-flex items-center px-2 py-0.5 rounded-lg bg-amber-950/60 border border-amber-800/40 text-amber-300 font-bold text-[10px]">
            Lesson {currentQ.lessonId}
          </span>

          <button
            onClick={() => setIsConfiguring(true)}
            className="text-stone-400 hover:text-stone-200 text-xs font-medium"
          >
            বন্ধ
          </button>
        </div>
      </div>

      {/* Progress Line */}
      <div className="h-1.5 w-full bg-stone-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-amber-500 transition-all duration-300 rounded-full"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Live Countdown Timer Progress Bar */}
      {selectedTimer > 0 && (
        <div className="h-1.5 w-full bg-stone-800/80 rounded-full overflow-hidden -mt-2">
          <div
            className={`h-full transition-all duration-1000 ease-linear rounded-full ${
              timeLeft > selectedTimer * 0.5
                ? 'bg-emerald-500'
                : timeLeft > 5
                ? 'bg-amber-500'
                : 'bg-rose-500 animate-pulse'
            }`}
            style={{ width: `${Math.max(0, (timeLeft / selectedTimer) * 100)}%` }}
          />
        </div>
      )}

      {/* Main Question Card */}
      <div className="rounded-3xl border border-stone-800 bg-[#14171d] p-5 sm:p-7 shadow-xl">
        {/* Question Category / Mode Tag */}
        <div className="text-[11px] text-amber-400 font-bold mb-2 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-amber-400 animate-ping" />
            <span>
              {currentQ.questionType === 'kanji_to_kana' && '🔤 কাঞ্জি ➔ কানা রিডিং'}
              {currentQ.questionType === 'kana_to_kanji' && '🔤 কানা ➔ কাঞ্জি নির্বাচন'}
              {currentQ.questionType === 'kanji_to_onyomi' && "🔊 কাঞ্জি ➔ On'yomi রিডিং (Katakana)"}
              {currentQ.questionType === 'onyomi_to_kanji' && "🔊 On'yomi ➔ কাঞ্জি নির্বাচন"}
              {currentQ.questionType === 'kanji_to_kunyomi' && "🌿 কাঞ্জি ➔ Kun'yomi রিডিং (Hiragana)"}
              {currentQ.questionType === 'kunyomi_to_kanji' && "🌿 Kun'yomi ➔ কাঞ্জি নির্বাচন"}
              {currentQ.questionType === 'kanji_to_meaning' && '🈸 কাঞ্জি ➔ বাংলা ও ইংরেজি অর্থ'}
              {currentQ.questionType === 'meaning_to_kanji' && '🈸 অর্থ ➔ কাঞ্জি নির্বাচন'}
              {currentQ.questionType === 'vocab' && '📖 শব্দ ও ভোকাবুলারি প্রয়োগ'}
              {currentQ.questionType === 'sentences' && '✏️ বাস্তব বাক্য ও শূন্যস্থান পূরণ'}
              {currentQ.questionType === 'strokes' && '✍️ স্ট্রোক সংখ্যা ও বৈশিষ্ট্য'}
              {currentQ.questionType === 'scenario' && '🏪 বাস্তব সাইনবোর্ড ও সিচুয়েশন'}
              {currentQ.questionType === 'jlpt_exam' && '🎌 JLPT রিয়েল এক্সাম ফরম্যাট (N5-N3)'}
            </span>
          </div>

          {currentQ.targetItem && (
            <span className="text-stone-500 text-[10px] font-normal">
              JLPT {currentQ.targetItem.jlpt} · {currentQ.targetItem.strokeCount} Strokes
            </span>
          )}
        </div>

        {/* Prompt Question */}
        <h3 className="text-base sm:text-lg font-bold text-stone-100 leading-snug">
          {currentQ.promptBn}
        </h3>

        {/* Japanese Visual Display Box with prominent Romaji toggle feedback */}
        {currentQ.promptJa && (
          <div className="mt-3.5 bg-[#181b24] p-4 rounded-2xl border border-stone-800">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-stone-100 tracking-wide block">
                  {currentQ.promptJa}
                </span>

                {/* Visible Romaji subtitle when toggled ON */}
                {showRomajiHint && currentQ.promptRomaji && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-amber-950/60 border border-amber-800/40 text-amber-300 text-xs font-mono font-semibold">
                    <span>🔤 উচ্চারণ:</span>
                    <span>{currentQ.promptRomaji}</span>
                  </div>
                )}
              </div>

              <button
                onClick={() => speakJapanese(currentQ.promptJa || '')}
                className="flex items-center gap-1.5 bg-[#1f2430] px-3 py-1.5 rounded-xl text-xs font-semibold text-amber-300 border border-stone-700 shadow-sm hover:bg-stone-700 transition-all shrink-0"
                title="উচ্চারণ শুনুন"
              >
                <Volume2 className="h-4 w-4 text-amber-400" />
                <span>উচ্চারণ</span>
              </button>
            </div>
          </div>
        )}

        {/* Timeout Notification Banner */}
        {isAnswered && selectedOption === -1 && (
          <div className="mt-4 rounded-2xl bg-rose-950/60 border border-rose-800/60 p-3 text-xs text-rose-300 font-bold flex items-center gap-2 animate-fadeIn">
            <span>⏰ সময় পার হয়ে গেছে! সঠিক উত্তরটি নিচে সবুজ রঙে চিহ্নিত করা হয়েছে।</span>
          </div>
        )}

        {/* 4 Shuffled Clean JLPT Standard Options */}
        <div className={`mt-5 ${isKanjiOptionType ? 'grid grid-cols-2 gap-3' : 'space-y-2.5'}`}>
          {currentQ.options.map((opt, idx) => {
            let btnStyle = 'border-stone-800 bg-[#181b24] hover:bg-stone-800 text-stone-200';
            const letter = ['A', 'B', 'C', 'D'][idx] || String(idx + 1);

            if (isAnswered) {
              if (opt.isCorrect) {
                btnStyle = 'border-emerald-500 bg-emerald-950/40 text-emerald-200 font-bold ring-1 ring-emerald-500/30';
              } else if (selectedOption === idx) {
                btnStyle = 'border-rose-500 bg-rose-950/40 text-rose-200 ring-1 ring-rose-500/30';
              } else {
                btnStyle = 'border-stone-850 bg-[#15171e] text-stone-600 opacity-40';
              }
            }

            return (
              <button
                key={idx}
                disabled={isAnswered}
                onClick={() => handleSelectOption(idx)}
                className={`flex w-full items-center justify-between rounded-2xl border p-3.5 text-left text-xs transition-all shadow-sm ${btnStyle}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex items-center justify-center w-6 h-6 rounded-lg text-xs font-bold shrink-0 ${
                      isAnswered && opt.isCorrect
                        ? 'bg-emerald-500 text-white'
                        : isAnswered && selectedOption === idx
                        ? 'bg-rose-500 text-white'
                        : 'bg-[#1e2330] border border-stone-700 text-stone-300'
                    }`}
                  >
                    {letter}
                  </span>
                  <div>
                    <div className={`font-semibold font-sans text-stone-100 ${
                      isKanjiOptionType ? 'font-serif text-xl sm:text-2xl tracking-wide' : 'text-sm sm:text-base'
                    }`}>
                      {opt.text}
                    </div>

                    {/* Show Romaji hint in options when user toggled it ON */}
                    {showRomajiHint && opt.romajiText && (
                      <div className="text-[11px] text-amber-400 font-mono mt-0.5 font-semibold bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-800/40 inline-block">
                        ({opt.romajiText})
                      </div>
                    )}
                  </div>
                </div>

                {isAnswered && (
                  <div className="shrink-0 ml-2">
                    {opt.isCorrect && <CheckCircle2 className="h-5 w-5 text-emerald-400" />}
                    {selectedOption === idx && !opt.isCorrect && (
                      <XCircle className="h-5 w-5 text-rose-400" />
                    )}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Detailed Explanation upon Answer */}
        {isAnswered && (
          <div className="mt-4 rounded-2xl bg-amber-950/30 p-4 border border-amber-800/50 text-xs text-stone-200 animate-fadeIn">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-amber-300 flex items-center gap-1.5">
                <Sparkles className="h-4 w-4 text-amber-400" />
                <span>💡 সঠিক উত্তর ও বিশদ ব্যাখ্যা:</span>
              </span>

              {/* Functional Interactive Mark as Hard button */}
              {currentQ.kanjiId && (
                <button
                  onClick={() => handleToggleHard(currentQ.kanjiId)}
                  className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-xl border font-bold transition-all shadow-sm ${
                    isCurrentKanjiHard
                      ? 'bg-rose-600 text-white border-rose-500 ring-2 ring-rose-400/30'
                      : 'bg-[#181b24] text-stone-300 border-amber-500/40 hover:bg-amber-950/60 hover:text-amber-300'
                  }`}
                  title="ফ্ল্যাশকার্ডে 'কঠিন' হিসেবে সংরক্ষণ করতে ক্লিক করুন"
                >
                  {isCurrentKanjiHard ? (
                    <>
                      <BookmarkCheck className="h-3.5 w-3.5 fill-white text-rose-600" />
                      <span>✓ কঠিন তালিকায় সংরক্ষিত</span>
                    </>
                  ) : (
                    <>
                      <BookmarkPlus className="h-3.5 w-3.5 text-amber-400" />
                      <span>🔥 কঠিন হিসেবে সেভ করুন</span>
                    </>
                  )}
                </button>
              )}
            </div>

            <p className="leading-relaxed font-sans text-stone-300">{currentQ.explanationBn}</p>
          </div>
        )}

        {/* Next Question / Results Button */}
        {isAnswered && (
          <div className="mt-5 flex items-center justify-between pt-3 border-t border-stone-800">
            <button
              onClick={() => setIsConfiguring(true)}
              className="text-xs text-stone-500 hover:text-stone-300 font-medium"
            >
              কুইজ বন্ধ করুন
            </button>

            <button
              onClick={handleNext}
              className="flex items-center gap-2 rounded-2xl bg-amber-600 hover:bg-amber-500 px-6 py-3 text-xs font-bold text-white transition-all shadow-md active:scale-95"
            >
              <span>
                {currentIndex < questions.length - 1
                  ? 'পরবর্তী প্রশ্ন (Next Question)'
                  : 'ফলাফল দেখুন (See Final Score)'}
              </span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      {/* Quiet Minimalist Keyboard Shortcuts Hint */}
      <div className="text-center text-[10px] text-stone-500 font-sans flex flex-wrap items-center justify-center gap-1.5 pt-1.5 select-none">
        <span>⌨️ কীবোর্ড শর্টকাট:</span>
        <span className="bg-[#1c202a] border border-stone-800 text-stone-400 px-1 py-0.5 rounded font-mono">1 - 4</span>
        <span>বা</span>
        <span className="bg-[#1c202a] border border-stone-800 text-stone-400 px-1 py-0.5 rounded font-mono">A - D</span>
        <span>অপশন সিলেক্ট</span>
        <span className="text-stone-700">·</span>
        <span className="bg-[#1c202a] border border-stone-800 text-stone-400 px-1 py-0.5 rounded font-mono">Space/Enter</span>
        <span>পরবর্তী</span>
        {currentQ.kanjiId && (
          <>
            <span className="text-stone-700">·</span>
            <span className="bg-[#1c202a] border border-stone-800 text-stone-400 px-1 py-0.5 rounded font-mono">H</span>
            <span>কঠিন তালিকায় সেভ</span>
          </>
        )}
        <span className="text-stone-700">·</span>
        <span className="bg-[#1c202a] border border-stone-800 text-stone-400 px-1 py-0.5 rounded font-mono">V</span>
        <span>উচ্চারণ</span>
      </div>
    </div>
  );
};
