import React, { useMemo, useState } from 'react';
import { Lesson } from '../types/kanji';
import { getProgress } from '../utils/progress';
import { speakJapanese } from '../utils/speech';
import {
  BookOpen,
  Sparkles,
  ArrowRight,
  Flame,
  RotateCw,
  PenTool,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Layers,
  Award,
  Code2,
  Mail,
  Copy,
  Check,
  Compass,
  Heart,
  Send,
  Volume2,
} from 'lucide-react';

interface HomeDashboardProps {
  lessons: Lesson[];
  onSelectLesson: (lessonNumber: number) => void;
  onGoToFlashcards: (lessonNumber?: number) => void;
  onGoToQuiz: () => void;
  onOpenSettings?: () => void;
  onOpenExport?: () => void;
}

// Developer profile photo URL (Direct image from ImgBB)
const DEVELOPER_PHOTO_URL = 'https://i.ibb.co/wZ4t6NYR/app-developer.png';

export const HomeDashboard: React.FC<HomeDashboardProps> = ({
  lessons,
  onSelectLesson,
  onGoToFlashcards,
  onGoToQuiz,
}) => {
  const progress = useMemo(() => getProgress(), []);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('rifatjp2002@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handlePlayJapaneseName = (nameKana: string = 'リファト・アハメド') => {
    setIsPlayingAudio(true);
    speakJapanese(nameKana, nameKana);
    setTimeout(() => setIsPlayingAudio(false), 1600);
  };

  // Calculate stats
  const totalKanji = useMemo(() => {
    return lessons.reduce((acc, l) => acc + l.kanjiList.length, 0);
  }, [lessons]);

  const stats = useMemo(() => {
    let easy = 0;
    let medium = 0;
    let hard = 0;

    Object.values(progress.kanjiStatus).forEach((status) => {
      if (status === 'easy') easy++;
      else if (status === 'medium') medium++;
      else if (status === 'hard') hard++;
    });

    const reviewed = easy + medium + hard;
    const unseen = Math.max(0, totalKanji - reviewed);
    const progressPercent = Math.min(100, Math.round((reviewed / (totalKanji || 1)) * 100));

    return { easy, medium, hard, unseen, reviewed, progressPercent };
  }, [progress, totalKanji]);

  const lastLessonNum = progress.lastLessonId || 1;
  const lastLesson = lessons.find((l) => l.number === lastLessonNum) || lessons[0];

  return (
    <div className="space-y-6 sm:space-y-8 pb-4">
      {/* 1. Hero Banner: Japanese Zen Dark Aesthetic */}
      <section className="relative overflow-hidden rounded-3xl border border-[#2d3446] bg-gradient-to-br from-[#181d28] via-[#141822] to-[#0f1218] p-6 sm:p-10 shadow-xl">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-300 mb-4 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            <span>জাপানি ভাষা পাঠ্যক্রম · A1-B1 (JLPT N5-N3)</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Kanji Tamago <span className="text-amber-400">漢字たまご</span>
          </h1>

          <p className="mt-3 text-base sm:text-lg text-stone-300 leading-relaxed font-sans">
            জাপানের বাস্তব জীবনে চলার জন্য ডিজাইন করা আধুনিক কাঞ্জি পাঠশালা। মুখস্থবিদ্যার বদলে
            সুপারমার্কেট, ট্রেন স্টেশন, রেস্তোরাঁ, ক্লিনিক ও আবহাওয়া বার্তার প্র্যাকটিক্যাল
            প্রেক্ষাপটে সহজে কাঞ্জি শিখুন, হাতে আঁকুন এবং আত্মস্থ করুন।
          </p>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3">
            <button
              onClick={() => onSelectLesson(lastLessonNum)}
              className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-600 to-amber-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg hover:from-amber-500 hover:to-amber-600 transition-all w-full sm:w-auto active:scale-95"
            >
              <BookOpen className="h-4 w-4" />
              <span>পড়াশোনা চালিয়ে যান (Lesson {lastLessonNum})</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <div className="grid grid-cols-2 gap-2 w-full sm:w-auto">
              <button
                onClick={() => onGoToFlashcards(lastLessonNum)}
                className="flex items-center justify-center gap-1.5 rounded-2xl border border-[#303748] bg-[#1a202d] px-4 py-3 text-xs sm:text-sm font-semibold text-stone-200 shadow-sm hover:bg-[#222a3b] hover:border-amber-500/50 hover:text-amber-300 transition-all"
              >
                <RotateCw className="h-4 w-4 text-amber-400" />
                <span>ফ্ল্যাশকার্ড</span>
              </button>

              <button
                onClick={onGoToQuiz}
                className="flex items-center justify-center gap-1.5 rounded-2xl border border-[#303748] bg-[#1a202d] px-4 py-3 text-xs sm:text-sm font-semibold text-stone-200 shadow-sm hover:bg-[#222a3b] hover:border-amber-500/50 hover:text-amber-300 transition-all"
              >
                <Flame className="h-4 w-4 text-amber-400" />
                <span>বাস্তব কুইজ</span>
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Kanji Watermark in background */}
        <div className="pointer-events-none absolute -right-6 -bottom-10 select-none opacity-[0.04] text-[260px] font-serif font-bold text-amber-200">
          卵
        </div>
      </section>

      {/* 2. User Progress Dashboard (Live Tracking Metrics) */}
      <section className="rounded-3xl border border-[#262c3b] bg-[#141822] p-6 sm:p-8 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#242a38] pb-5">
          <div>
            <h2 className="text-xl font-bold font-serif text-white flex items-center gap-2">
              <Flame className="h-5 w-5 text-amber-400" />
              <span>আপনার ব্যক্তিগত অগ্রগতি (Learning Progress)</span>
            </h2>
            <p className="text-xs text-stone-400 mt-1">
              ফ্ল্যাশকার্ড ও কুইজের আত্মমূল্যায়নের ভিত্তিতে আপনার দক্ষতা রিয়েল-টাইমে আপডেট হচ্ছে।
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-stone-400">মোট পাঠ শেষ:</span>
            <span className="text-sm font-bold font-mono text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-xl border border-amber-500/30">
              {stats.reviewed} / {totalKanji} কাঞ্জি ({stats.progressPercent}%)
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-[#1e2433]">
          <div
            className="h-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 transition-all duration-500 rounded-full"
            style={{ width: `${stats.progressPercent}%` }}
          />
        </div>

        {/* Stats 4-box Grid */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-4 text-center">
            <div className="flex items-center justify-center gap-1.5 text-emerald-400 text-xs font-semibold mb-1">
              <CheckCircle2 className="h-4 w-4" />
              <span>আয়ত্তে এসেছে (Easy)</span>
            </div>
            <div className="text-2xl font-bold font-serif text-emerald-300">{stats.easy}</div>
            <div className="text-[10px] text-emerald-400/80 mt-0.5">মাস্টার করা কাঞ্জি</div>
          </div>

          <div className="rounded-2xl border border-amber-500/30 bg-amber-950/20 p-4 text-center">
            <div className="flex items-center justify-center gap-1.5 text-amber-400 text-xs font-semibold mb-1">
              <RotateCw className="h-4 w-4" />
              <span>অনুশীলনাধীন (Medium)</span>
            </div>
            <div className="text-2xl font-bold font-serif text-amber-300">{stats.medium}</div>
            <div className="text-[10px] text-amber-400/80 mt-0.5">চর্চা চলছে</div>
          </div>

          <div className="rounded-2xl border border-rose-500/30 bg-rose-950/20 p-4 text-center">
            <div className="flex items-center justify-center gap-1.5 text-rose-400 text-xs font-semibold mb-1">
              <AlertCircle className="h-4 w-4" />
              <span>রিভিশন দরকার (Hard)</span>
            </div>
            <div className="text-2xl font-bold font-serif text-rose-300">{stats.hard}</div>
            <div className="text-[10px] text-rose-400/80 mt-0.5">দুর্বলতা চিহ্নিত</div>
          </div>

          <div className="rounded-2xl border border-[#2b3242] bg-[#181d28] p-4 text-center">
            <div className="flex items-center justify-center gap-1.5 text-stone-400 text-xs font-semibold mb-1">
              <Layers className="h-4 w-4" />
              <span>বাকি রয়েছে (New)</span>
            </div>
            <div className="text-2xl font-bold font-serif text-stone-200">{stats.unseen}</div>
            <div className="text-[10px] text-stone-400 mt-0.5">নতুন পাঠ্যক্রম</div>
          </div>
        </div>
      </section>

      {/* 3. Core Features Showcase */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="rounded-2xl border border-[#262c3b] bg-[#141822] p-5 shadow-sm hover:border-amber-500/40 transition-colors">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400 mb-3 font-semibold border border-amber-500/30">
            <BookOpen className="h-5 w-5" />
          </div>
          <h3 className="font-bold font-serif text-white text-base">১. পাঠশালা ও কাস্টম টগল</h3>
          <p className="mt-1.5 text-xs text-stone-300 leading-relaxed">
            বাংলা অর্থ, ইংরেজি অর্থ, ইমোজি বা রোমাজি নিজের পছন্দমতো অন/অফ করে ফোকাসড কাঞ্জি স্টাডি।
          </p>
        </div>

        <div className="rounded-2xl border border-[#262c3b] bg-[#141822] p-5 shadow-sm hover:border-amber-500/40 transition-colors">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/20 text-sky-400 mb-3 font-semibold border border-sky-500/30">
            <PenTool className="h-5 w-5" />
          </div>
          <h3 className="font-bold font-serif text-white text-base">২. ড্রয়িং স্টুডিও ও গাইড</h3>
          <p className="mt-1.5 text-xs text-stone-300 leading-relaxed">
            যেকোনো কাঞ্জিতে ট্যাপ করে বড় ক্যানভাসে আঙুল বা মাউস দিয়ে আঁকুন। গাইড অন করে ট্রেসিং বা গাইড অফ করে ফ্রি-হ্যান্ড লিখুন।
          </p>
        </div>

        <div className="rounded-2xl border border-[#262c3b] bg-[#141822] p-5 shadow-sm hover:border-amber-500/40 transition-colors">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 mb-3 font-semibold border border-emerald-500/30">
            <RotateCw className="h-5 w-5" />
          </div>
          <h3 className="font-bold font-serif text-white text-base">৩. স্মার্ট ফ্ল্যাশকার্ড ও কুইজ</h3>
          <p className="mt-1.5 text-xs text-stone-300 leading-relaxed">
            অ্যাক্টিভ রিকল দিয়ে কার্ড উল্টে মনে রাখুন। সহজ/কঠিন মার্ক করে দুর্বল কাঞ্জিগুলো বেশি বেশি অনুশীলন করুন।
          </p>
        </div>
      </section>

      {/* 4. Creator & Developer Profile Card */}
      <section className="rounded-3xl border border-[#2d3546] bg-gradient-to-br from-[#161a24] via-[#12151e] to-[#0c0f15] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        {/* Subtle Japanese watermark */}
        <div className="absolute right-4 top-2 select-none opacity-[0.03] font-serif text-9xl font-bold text-amber-300 pointer-events-none">
          志
        </div>

        <div className="relative z-10 space-y-6">
          {/* Header Profile Info */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 text-center sm:text-left">
            {/* Developer Photo */}
            <div className="relative shrink-0">
              <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-2xl overflow-hidden border-2 border-amber-500/60 shadow-lg shadow-amber-950/40 bg-[#1c2230]">
                <img
                  src={DEVELOPER_PHOTO_URL}
                  alt="Rifat - Developer & Creator"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            {/* Developer Identity Details */}
            <div className="flex-1 space-y-2">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-100 tracking-tight flex flex-wrap items-baseline gap-2">
                  <span>Rifat Ahmed</span>
                  <span className="text-sm sm:text-base font-sans font-medium text-stone-400">
                    (রিফাত আহমেদ)
                  </span>
                </h2>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/30">
                  <Sparkles className="h-3 w-3" />
                  Creator & Developer
                </span>
              </div>

              {/* Japanese Name with Interactive Audio Pronunciation (Clean & Minimal) */}
              <div className="flex items-center justify-center sm:justify-start pt-0.5">
                <button
                  type="button"
                  onClick={() => handlePlayJapaneseName('リファト・アハメド')}
                  className={`group inline-flex items-center gap-2 rounded-xl px-3.5 py-1.5 text-xs font-semibold border transition-all ${
                    isPlayingAudio
                      ? 'border-amber-400 bg-amber-500/25 text-amber-200 ring-2 ring-amber-500/40 shadow-lg shadow-amber-950/60 scale-105'
                      : 'border-amber-500/40 bg-amber-950/30 text-amber-300 hover:bg-amber-900/40 hover:border-amber-400 hover:scale-105 active:scale-95'
                  }`}
                  title="জাপানি উচ্চারণ শুনুন (Click to hear native Japanese pronunciation)"
                >
                  <span className="font-serif text-sm tracking-wide font-bold text-amber-300">
                    リファト アハメド
                  </span>
                  <Volume2
                    className={`h-4 w-4 text-amber-400 transition-transform ${
                      isPlayingAudio ? 'animate-bounce text-amber-200' : 'group-hover:scale-110'
                    }`}
                  />
                </button>
              </div>

              <p className="text-xs sm:text-sm font-medium text-stone-300 pt-0.5">
                সফটওয়্যার ডেভেলপার ও জাপানি ভাষা শিক্ষাক্রম পরিকল্পক
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1 text-xs text-stone-400">
                <span className="flex items-center gap-1 bg-[#1a202d] px-2.5 py-1 rounded-lg border border-[#273042] text-[11px]">
                  🇧🇩 বাংলাদেশ · 🇯🇵 জাপান
                </span>
                <span className="flex items-center gap-1 bg-[#1a202d] px-2.5 py-1 rounded-lg border border-[#273042] text-[11px]">
                  🎓 JLPT & EdTech Researcher
                </span>
              </div>
            </div>
          </div>

          {/* Developer's Mission / উদ্দেশ্য */}
          <div className="rounded-2xl border border-[#262f40] bg-[#141822]/90 p-5 space-y-2.5">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs sm:text-sm">
              <Compass className="h-4 w-4 text-amber-400" />
              <span>আমার উদ্দেশ্য ও লক্ষ্য (Creator's Mission)</span>
            </div>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              জাপানি ভাষা শিক্ষার্থী ও জাপানে বসবাসরত প্রবাসীদের কাঞ্জি পড়ার ভয় দূর করে আধুনিক, দৃশ্যমান (Visual Memory) ও ইন্টারেক্টিভ পদ্ধতিতে কাঞ্জি আয়ত্ত করতে সাহায্য করাই আমার মূল উদ্দেশ্য। প্রতিটি শিক্ষার্থী যেন সহজ ও সাবলীলভাবে বাস্তব জীবনের কাঞ্জিগুলো আয়ত্ত করতে পারেন—সেই লক্ষ্য নিয়েই এই অ্যাপ্লিকেশনটি তৈরি করা।
            </p>
          </div>

          {/* Contact & Email Action */}
          <div className="rounded-2xl border border-[#262f40] bg-[#141822]/90 p-5 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] text-stone-400 font-medium">সরাসরি যোগাযোগ ও পরামর্শের জন্য</div>
                <div className="text-xs sm:text-sm font-semibold font-mono text-stone-100 select-all truncate">
                  rifatjp2002@gmail.com
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 w-full md:w-auto shrink-0 justify-end">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 rounded-xl border border-[#323c4e] bg-[#1c2230] px-3.5 py-2 text-xs font-semibold text-stone-200 hover:bg-[#252e42] hover:border-amber-500/40 hover:text-amber-300 transition-all active:scale-95"
              >
                {copiedEmail ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span className="text-emerald-400">কপি হয়েছে!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-amber-400" />
                    <span>ইমেইল কপি করুন</span>
                  </>
                )}
              </button>

              <a
                href="mailto:rifatjp2002@gmail.com"
                className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 px-4 py-2 text-xs font-bold text-stone-950 shadow-md shadow-amber-950/40 transition-all active:scale-95"
              >
                <Send className="h-3.5 w-3.5 text-stone-950" />
                <span>মেইল পাঠান</span>
              </a>
            </div>
          </div>

          {/* Bottom Copyright and Love note */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-1.5 text-center sm:text-left">
            <div>
              © 2026 Crafted by <strong>Rifat</strong> · সর্বস্বত্ব সংরক্ষিত
            </div>
            <div className="flex items-center gap-1 text-stone-400 font-medium">
              Made with <Heart className="h-3 w-3 text-red-500 fill-red-500 inline" /> for Japanese Language Learners
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
