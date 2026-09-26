import { KanjiItem, Lesson } from '../types/kanji';
import { allLessons } from '../data/allLessons';
import { getProgress, MasteryLevel } from './progress';

export type QuestionMode = 
  | 'all' 
  | 'jlpt_exam'
  | 'kanji_to_kana'
  | 'kana_to_kanji'
  | 'kanji_to_onyomi'
  | 'onyomi_to_kanji'
  | 'kanji_to_kunyomi'
  | 'kunyomi_to_kanji'
  | 'kanji_to_meaning' 
  | 'meaning_to_kanji'
  | 'vocab' 
  | 'sentences' 
  | 'strokes'
  | 'scenario';

export interface GeneratedQuestion {
  id: string;
  kanjiId: string;
  kanjiChar?: string;
  lessonId: number;
  questionType: QuestionMode;
  promptBn: string;
  promptJa?: string;
  promptRomaji?: string;
  options: {
    text: string;
    subText?: string;
    kanaText?: string;
    romajiText?: string;
    isCorrect: boolean;
  }[];
  explanationBn: string;
  targetItem?: KanjiItem;
}

export interface QuizFilterConfig {
  lessonId: number | 'all';
  masteryFilter: MasteryLevel | 'all' | 'mistakes';
  questionMode: QuestionMode;
  questionCount: number | 'all';
}

const MISTAKES_KEY = 'kanji_tamago_quiz_mistakes_v1';

export function getStoredMistakes(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(MISTAKES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveStoredMistakes(mistakes: string[]): void {
  if (typeof window === 'undefined') return;
  try {
    const unique = Array.from(new Set(mistakes));
    localStorage.setItem(MISTAKES_KEY, JSON.stringify(unique));
  } catch (e) {
    console.error('Failed to save mistakes', e);
  }
}

export function recordMistake(kanjiId: string): void {
  const current = getStoredMistakes();
  if (!current.includes(kanjiId)) {
    current.push(kanjiId);
    saveStoredMistakes(current);
  }
}

export function removeMistake(kanjiId: string): void {
  const current = getStoredMistakes();
  const updated = current.filter((id) => id !== kanjiId);
  saveStoredMistakes(updated);
}

export function clearAllMistakes(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(MISTAKES_KEY);
}

/**
 * Flatten all Kanji items across lessons with their lesson number
 */
export function getAllKanjiWithLesson(): { item: KanjiItem; lessonNumber: number; lessonTitle: string }[] {
  const list: { item: KanjiItem; lessonNumber: number; lessonTitle: string }[] = [];
  allLessons.forEach((lesson) => {
    lesson.kanjiList.forEach((item) => {
      list.push({
        item,
        lessonNumber: lesson.number,
        lessonTitle: lesson.titleJa,
      });
    });
  });
  return list;
}

/**
 * Fisher-Yates shuffle array
 */
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Curated real-world scenario questions based on Kanji Tamago daily Japanese
 */
export const curatedScenarioQuestions: GeneratedQuestion[] = [
  {
    id: 'scenario-1',
    kanjiId: 'l2-beef',
    lessonId: 2,
    questionType: 'scenario',
    promptBn: 'জাপানের সুপারমার্কেটে মাংসের প্যাকেটে 「牛肉」 লেখা আছে। এটি কোন মাংস?',
    promptJa: '牛肉 (ぎゅうにく)',
    promptRomaji: 'gyuuniku',
    options: [
      { text: 'গরুর মাংস (Beef)', romajiText: 'gyuuniku', isCorrect: true },
      { text: 'শূকরের মাংস (Pork)', romajiText: 'butaniku', isCorrect: false },
      { text: 'মুরগির মাংস (Chicken)', romajiText: 'toriniku', isCorrect: false },
      { text: 'মাছের সাশিমি (Fish)', romajiText: 'sakana', isCorrect: false },
    ],
    explanationBn: '牛 (গরু) + 肉 (মাংস) = 牛肉 (gyuuniku / গরুর মাংস)। জাপানি সুপারমার্কেটে এটি অত্যন্ত জনপ্রিয়।',
  },
  {
    id: 'scenario-2',
    kanjiId: 'l2-pork',
    lessonId: 2,
    questionType: 'scenario',
    promptBn: 'খাদ্যতালিকায় পর্ক বা শূকরের মাংস এড়াতে সুপারমার্কেটে কোন কান্জিটি চেনা জরুরি?',
    promptJa: '豚肉 (ぶたにく)',
    promptRomaji: 'butaniku',
    options: [
      { text: '豚肉 (ぶたにく)', romajiText: 'butaniku', isCorrect: true },
      { text: '鶏肉 (とりにく)', romajiText: 'toriniku', isCorrect: false },
      { text: '牛肉 (ぎゅうにく)', romajiText: 'gyuuniku', isCorrect: false },
      { text: '羊肉 (ようにく)', romajiText: 'youniku', isCorrect: false },
    ],
    explanationBn: '豚 (শূকর) + 肉 (মাংস) = 豚肉 (butaniku / পর্ক)। হালাল ও স্বাস্থ্য সচেতনদের জন্য এটি চেনা আবশ্যক।',
  },
  {
    id: 'scenario-3',
    kanjiId: 'l2-discount',
    lessonId: 2,
    questionType: 'scenario',
    promptBn: 'সন্ধ্যায় সুপারমার্কেটের বেন্টো বক্সে 「２割引」 স্টিকার লাগানো হলে কত শতাংশ ছাড় পাওয়া যাবে?',
    promptJa: '２割引 (にわりびき)',
    promptRomaji: 'niwaribiki',
    options: [
      { text: '২০% মূল্যছাড় (20% off)', romajiText: '20% discount', isCorrect: true },
      { text: '২% মূল্যছাড় (2% off)', romajiText: '2% discount', isCorrect: false },
      { text: '৫০% মূল্যছাড় (Half price)', romajiText: '50% discount', isCorrect: false },
      { text: '২০০ ইয়েন ছাড় (200 yen off)', romajiText: '200 yen off', isCorrect: false },
    ],
    explanationBn: 'জাপানে ১ 割 (wari) মানে ১০%। অতএব ২ 割引 (niwaribiki) মানে ২০% ছাড় বা ডিসকাউন্ট।',
  },
  {
    id: 'scenario-4',
    kanjiId: 'l2-domestic',
    lessonId: 2,
    questionType: 'scenario',
    promptBn: 'জাপানের নিজস্ব বা দেশীয় ফসল ও মাংস বোঝাতে প্যাকেটের স্টিকারে কোন কান্জিটি থাকে?',
    promptJa: '国産 (こくさん)',
    promptRomaji: 'kokusan',
    options: [
      { text: '国産 (দেশীয় / জাপানে উৎপাদিত)', romajiText: 'kokusan (Domestic)', isCorrect: true },
      { text: '外国産 (আমদানিকৃত পণ্য)', romajiText: 'gaikokusan (Imported)', isCorrect: false },
      { text: '減産 (উৎপাদন হ্রাস)', romajiText: 'gensan (Reduced production)', isCorrect: false },
      { text: '特産 (স্থানীয় বিশেষ খাবার)', romajiText: 'tokusan (Specialty)', isCorrect: false },
    ],
    explanationBn: '国 (দেশ) + 産 (উৎপাদিত) = 国産 (kokusan / জাপানের দেশীয় ফলন/উৎপাদন)।',
  },
  {
    id: 'scenario-5',
    kanjiId: 'l2-sake',
    lessonId: 2,
    questionType: 'scenario',
    promptBn: 'কনভেনিয়েন্স স্টোর (Konbini) বা সুপারমার্কেটে অ্যালকোহল সেকশন চিনতে কোন কান্জি দেখতে পাবেন?',
    promptJa: '酒 (さけ / おさけ)',
    promptRomaji: 'sake / osake',
    options: [
      { text: '酒 (অ্যালকোহল / মদ)', romajiText: 'sake (Alcohol)', isCorrect: true },
      { text: '茶 (চা)', romajiText: 'ocha (Tea)', isCorrect: false },
      { text: '水 (পানি)', romajiText: 'mizu (Water)', isCorrect: false },
      { text: '油 (তেল)', romajiText: 'abura (Oil)', isCorrect: false },
    ],
    explanationBn: 'দোকানের বাইরে ও অ্যালকোহল সেকশনের ওপর 「酒」 বা 「お酒」 (sake) লেখা থাকে।',
  },
  {
    id: 'scenario-6',
    kanjiId: 'l3-weekday',
    lessonId: 3,
    questionType: 'scenario',
    promptBn: 'জাপানের রেলস্টেশন বা বাসস্টপের সময়সূচি বোর্ডে 「平日」 লেখা থাকলে তা কোন দিনগুলোর শিডিউল?',
    promptJa: '平日 (へいじつ)',
    promptRomaji: 'heijitsu',
    options: [
      { text: 'সোমবার থেকে শুক্রবার (সাধারণ কর্মদিবস)', romajiText: 'heijitsu (Weekdays)', isCorrect: true },
      { text: 'শনিবার ও রবিবার (সাপ্তাহিক ছুটি)', romajiText: 'shuumatsu (Weekends)', isCorrect: false },
      { text: 'জাতীয় সরকারি ছুটির দিন', romajiText: 'shukujitsu (Holidays)', isCorrect: false },
      { text: 'শুধুমাত্র বৃষ্টির দিন', romajiText: 'uten (Rainy days)', isCorrect: false },
    ],
    explanationBn: '平 (স্বাভাবিক) + 日 (দিন) = 平日 (heijitsu / কর্মদিবস)। শনি-রবিবার ছাড়া সোম থেকে শুক্রবার বোঝায়।',
  },
  {
    id: 'scenario-7',
    kanjiId: 'l3-holiday',
    lessonId: 3,
    questionType: 'scenario',
    promptBn: 'জাপানি ক্যালেন্ডারে লাল রঙে চিহ্নিত 「祝日」 বলতে কী বোঝায়?',
    promptJa: '祝日 (しゅくじつ)',
    promptRomaji: 'shukujitsu',
    options: [
      { text: 'জাতীয় সরকারি ছুটির দিন (Public Holiday)', romajiText: 'shukujitsu (Holiday)', isCorrect: true },
      { text: 'অতিরিক্ত কাজের দিন', romajiText: 'zangyou (Overtime)', isCorrect: false },
      { text: 'পরীক্ষার তারিখ', romajiText: 'shikenbi (Exam day)', isCorrect: false },
      { text: 'বেতন পাওয়ার দিন', romajiText: 'kyuuryoubi (Payday)', isCorrect: false },
    ],
    explanationBn: '祝 (উদযাপন) + 日 (দিন) = 祝日 (shukujitsu / সরকারি ছুটি)। এই দিনে ব্যাংক ও অফিস বন্ধ থাকে।',
  },
  {
    id: 'scenario-8',
    kanjiId: 'l4-exit',
    lessonId: 4,
    questionType: 'scenario',
    promptBn: 'জরুরি পরিস্থিতিতে ভবন থেকে নিরাপদে দ্রুত বের হওয়ার পথ নির্দেশক চিহ্ন কোনটি?',
    promptJa: '非常口 (ひじょうぐち)',
    promptRomaji: 'hijouguchi',
    options: [
      { text: '非常口 (Emergency Exit)', romajiText: 'hijouguchi', isCorrect: true },
      { text: '改札口 (Ticket Gate)', romajiText: 'kaisatsuguchi', isCorrect: false },
      { text: '入口 (Entrance)', romajiText: 'iriguchi', isCorrect: false },
      { text: '窓口 (Ticket Window)', romajiText: 'madoguchi', isCorrect: false },
    ],
    explanationBn: '非常 (জরুরি) + 口 (দ্বার) = 非常口 (hijouguchi / জরুরি বহির্গমন পথ)।',
  },
  {
    id: 'scenario-9',
    kanjiId: 'l4-nosmoking',
    lessonId: 4,
    questionType: 'scenario',
    promptBn: 'রেস্তোরাঁ বা পাবলিক প্লেসে ধূমপান সম্পূর্ণ নিষিদ্ধ বোঝাতে কোন সাইনবোর্ডটি থাকবে?',
    promptJa: '禁煙 (きんえん)',
    promptRomaji: 'kin-en',
    options: [
      { text: '禁煙 (ধূমপান নিষেধ / No Smoking)', romajiText: 'kin-en (No smoking)', isCorrect: true },
      { text: '喫煙所 (ধূমপানের নির্ধারিত স্থান)', romajiText: 'kitsuensho (Smoking area)', isCorrect: false },
      { text: '飲食禁止 (খাবার খাওয়া নিষেধ)', romajiText: 'inshoku kinshi (No food)', isCorrect: false },
      { text: '駐輪禁止 (সাইকেল পার্কিং নিষেধ)', romajiText: 'chuurin kinshi (No parking)', isCorrect: false },
    ],
    explanationBn: '禁 (নিষেধ) + 煙 (ধোঁয়া/সিগারেট) = 禁煙 (kin-en / ধূমপান সম্পূর্ণ নিষিদ্ধ)।',
  },
  {
    id: 'scenario-10',
    kanjiId: 'l5-closedday',
    lessonId: 5,
    questionType: 'scenario',
    promptBn: 'দোকান বা রেস্তোরাঁর নোটিশে 「定休日：毎週水曜日」 লেখা থাকলে এর অর্থ কী?',
    promptJa: '定休日 (ていきゅうび)',
    promptRomaji: 'teikyuubi',
    options: [
      { text: 'প্রতি বুধবার নিয়মিত বন্ধ থাকে (Regular Closing Day)', romajiText: 'teikyuubi (Regular closing)', isCorrect: true },
      { text: 'প্রতি বুধবার বিশেষ ছাড় দেওয়া হয়', romajiText: 'tokubetsu waribiki', isCorrect: false },
      { text: 'বুধবার রাত পর্যন্ত খোলা থাকে', romajiText: 'shin-ya eigyou', isCorrect: false },
      { text: 'বুধবার নতুন পণ্য আসে', romajiText: 'shinshouhin', isCorrect: false },
    ],
    explanationBn: '定休 (নির্ধারিত ছুটি) + 日 (দিন) = 定休日 (teikyuubi / সাপ্তাহিক নিয়মিত বন্ধের দিন)।',
  },
];

/**
 * Generate comprehensive questions for a single kanji item across all requested question types
 * Pure, clean JLPT standard options with rich Romaji metadata for real-time toggles
 */
function createQuestionsForKanji(
  entry: { item: KanjiItem; lessonNumber: number; lessonTitle: string },
  allKanjis: { item: KanjiItem; lessonNumber: number; lessonTitle: string }[],
  mode: QuestionMode
): GeneratedQuestion[] {
  const { item, lessonNumber } = entry;
  const otherKanjis = allKanjis.filter((o) => o.item.id !== item.id);
  const result: GeneratedQuestion[] = [];

  const onReadings = item.readings.onyomi;
  const kunReadings = item.readings.kunyomi;
  const onKanaOnly = onReadings.map((r) => r.kana).join('・') || 'なし';
  const kunKanaOnly = kunReadings.map((r) => r.kana).join('・') || 'なし';
  const onWithRomaji = onReadings.map((r) => `${r.kana} (${r.romaji})`).join(', ') || 'নেই';
  const kunWithRomaji = kunReadings.map((r) => `${r.kana} (${r.romaji})`).join(', ') || 'নেই';
  
  const primaryVocab = item.vocab[0] || {
    kanji: item.kanji,
    kana: kunReadings[0]?.kana || onReadings[0]?.kana || '',
    romaji: kunReadings[0]?.romaji || onReadings[0]?.romaji || '',
    meaningEn: item.meanings.en,
    meaningBn: item.meanings.bn,
  };

  const primaryRomaji = kunReadings[0]?.romaji || onReadings[0]?.romaji || primaryVocab.romaji;

  // 1. KANJI TO MEANING (কাঞ্জি দেখে অর্থ)
  if (mode === 'all' || mode === 'kanji_to_meaning') {
    const distractors = shuffleArray(otherKanjis).slice(0, 3).map((d) => ({
      text: `${d.item.meanings.bn} (${d.item.meanings.en})`,
      romajiText: d.item.readings.kunyomi[0]?.romaji || d.item.readings.onyomi[0]?.romaji,
      isCorrect: false,
    }));
    const options = shuffleArray([
      {
        text: `${item.meanings.bn} (${item.meanings.en})`,
        romajiText: primaryRomaji,
        isCorrect: true,
      },
      ...distractors,
    ]);
    result.push({
      id: `q-k2m-${item.id}-${Date.now()}-${Math.random()}`,
      kanjiId: item.id,
      kanjiChar: item.kanji,
      lessonId: lessonNumber,
      questionType: 'kanji_to_meaning',
      promptBn: `【 ${item.kanji} 】 কাঞ্জিটির সঠিক বাংলা ও ইংরেজি অর্থ কোনটি?`,
      promptJa: item.kanji,
      promptRomaji: primaryRomaji,
      options,
      explanationBn: `【${item.kanji}】কাঞ্জির অর্থ: ${item.meanings.bn} (${item.meanings.en})। অন'ইয়োমি: ${onWithRomaji} | কুন'ইয়োমি: ${kunWithRomaji}।`,
      targetItem: item,
    });
  }

  // 2. MEANING TO KANJI (অর্থ দেখে কাঞ্জি)
  if (mode === 'all' || mode === 'meaning_to_kanji') {
    const distractors = shuffleArray(otherKanjis).slice(0, 3).map((d) => ({
      text: d.item.kanji,
      kanaText: d.item.readings.kunyomi[0]?.kana || d.item.readings.onyomi[0]?.kana,
      romajiText: d.item.readings.kunyomi[0]?.romaji || d.item.readings.onyomi[0]?.romaji,
      isCorrect: false,
    }));
    const options = shuffleArray([
      {
        text: item.kanji,
        kanaText: item.readings.kunyomi[0]?.kana || item.readings.onyomi[0]?.kana,
        romajiText: primaryRomaji,
        isCorrect: true,
      },
      ...distractors,
    ]);
    result.push({
      id: `q-m2k-${item.id}-${Date.now()}-${Math.random()}`,
      kanjiId: item.id,
      kanjiChar: item.kanji,
      lessonId: lessonNumber,
      questionType: 'meaning_to_kanji',
      promptBn: `「 ${item.meanings.bn} (${item.meanings.en}) 」 অর্থ নির্দেশক সঠিক কাঞ্জি কোনটি?`,
      promptJa: item.meanings.en,
      promptRomaji: primaryRomaji,
      options,
      explanationBn: `সঠিক কাঞ্জি হলো 【${item.kanji}】(${item.emoji})। অর্থ: "${item.meanings.bn}"। অন'ইয়োমি: ${onWithRomaji} | কুন'ইয়োমি: ${kunWithRomaji}।`,
      targetItem: item,
    });
  }

  // 3. KANJI TO ONYOMI (কাঞ্জি দেখে অন'ইয়োমি)
  if ((mode === 'all' || mode === 'kanji_to_onyomi') && onReadings.length > 0) {
    const validOthers = otherKanjis.filter((o) => o.item.readings.onyomi.length > 0);
    const distractors = shuffleArray(validOthers).slice(0, 3).map((d) => {
      const dKana = d.item.readings.onyomi.map((r) => r.kana).join('・');
      const dRomaji = d.item.readings.onyomi.map((r) => r.romaji).join(', ');
      return {
        text: dKana,
        romajiText: dRomaji,
        isCorrect: false,
      };
    });
    const options = shuffleArray([
      {
        text: onKanaOnly,
        romajiText: onReadings.map((r) => r.romaji).join(', '),
        isCorrect: true,
      },
      ...distractors,
    ]);
    result.push({
      id: `q-k2on-${item.id}-${Date.now()}-${Math.random()}`,
      kanjiId: item.id,
      kanjiChar: item.kanji,
      lessonId: lessonNumber,
      questionType: 'kanji_to_onyomi',
      promptBn: `【 ${item.kanji} 】 কাঞ্জিটির সঠিক অন'ইয়োমি (On'yomi / Katakana) রিডিং কোনটি?`,
      promptJa: item.kanji,
      promptRomaji: onReadings.map((r) => r.romaji).join(', '),
      options,
      explanationBn: `【${item.kanji}】এর অন'ইয়োমি হলো 「${onKanaOnly}」(${onWithRomaji})। অর্থ: ${item.meanings.bn}।`,
      targetItem: item,
    });
  }

  // 4. ONYOMI TO KANJI (অন'ইয়োমি দেখে কাঞ্জি)
  if ((mode === 'all' || mode === 'onyomi_to_kanji') && onReadings.length > 0) {
    const distractors = shuffleArray(otherKanjis).slice(0, 3).map((d) => ({
      text: d.item.kanji,
      romajiText: d.item.readings.onyomi[0]?.romaji || d.item.readings.kunyomi[0]?.romaji,
      isCorrect: false,
    }));
    const options = shuffleArray([
      {
        text: item.kanji,
        romajiText: onReadings.map((r) => r.romaji).join(', '),
        isCorrect: true,
      },
      ...distractors,
    ]);
    result.push({
      id: `q-on2k-${item.id}-${Date.now()}-${Math.random()}`,
      kanjiId: item.id,
      kanjiChar: item.kanji,
      lessonId: lessonNumber,
      questionType: 'onyomi_to_kanji',
      promptBn: `অন'ইয়োমি রিডিং 「 ${onKanaOnly} 」 নির্দেশক সঠিক কাঞ্জি কোনটি?`,
      promptJa: onKanaOnly,
      promptRomaji: onReadings.map((r) => r.romaji).join(', '),
      options,
      explanationBn: `অন'ইয়োমি 「${onKanaOnly}」(${onWithRomaji}) নির্দেশক কাঞ্জি হলো 【${item.kanji}】(${item.emoji})। অর্থ: "${item.meanings.bn}"।`,
      targetItem: item,
    });
  }

  // 5. KANJI TO KUNYOMI (কাঞ্জি দেখে কুন'ইয়োমি)
  if ((mode === 'all' || mode === 'kanji_to_kunyomi') && kunReadings.length > 0) {
    const validOthers = otherKanjis.filter((o) => o.item.readings.kunyomi.length > 0);
    const distractors = shuffleArray(validOthers).slice(0, 3).map((d) => {
      const dKana = d.item.readings.kunyomi.map((r) => r.kana).join('・');
      const dRomaji = d.item.readings.kunyomi.map((r) => r.romaji).join(', ');
      return {
        text: dKana,
        romajiText: dRomaji,
        isCorrect: false,
      };
    });
    const options = shuffleArray([
      {
        text: kunKanaOnly,
        romajiText: kunReadings.map((r) => r.romaji).join(', '),
        isCorrect: true,
      },
      ...distractors,
    ]);
    result.push({
      id: `q-k2kun-${item.id}-${Date.now()}-${Math.random()}`,
      kanjiId: item.id,
      kanjiChar: item.kanji,
      lessonId: lessonNumber,
      questionType: 'kanji_to_kunyomi',
      promptBn: `【 ${item.kanji} 】 কাঞ্জিটির সঠিক কুন'ইয়োমি (Kun'yomi / Hiragana) রিডিং কোনটি?`,
      promptJa: item.kanji,
      promptRomaji: kunReadings.map((r) => r.romaji).join(', '),
      options,
      explanationBn: `【${item.kanji}】এর কুন'ইয়োমি হলো 「${kunKanaOnly}」(${kunWithRomaji})। অর্থ: ${item.meanings.bn}।`,
      targetItem: item,
    });
  }

  // 6. KUNYOMI TO KANJI (কুন'ইয়োমি দেখে কাঞ্জি)
  if ((mode === 'all' || mode === 'kunyomi_to_kanji') && kunReadings.length > 0) {
    const distractors = shuffleArray(otherKanjis).slice(0, 3).map((d) => ({
      text: d.item.kanji,
      romajiText: d.item.readings.kunyomi[0]?.romaji || d.item.readings.onyomi[0]?.romaji,
      isCorrect: false,
    }));
    const options = shuffleArray([
      {
        text: item.kanji,
        romajiText: kunReadings.map((r) => r.romaji).join(', '),
        isCorrect: true,
      },
      ...distractors,
    ]);
    result.push({
      id: `q-kun2k-${item.id}-${Date.now()}-${Math.random()}`,
      kanjiId: item.id,
      kanjiChar: item.kanji,
      lessonId: lessonNumber,
      questionType: 'kunyomi_to_kanji',
      promptBn: `কুন'ইয়োমি রিডিং 「 ${kunKanaOnly} 」 নির্দেশক সঠিক কাঞ্জি কোনটি?`,
      promptJa: kunKanaOnly,
      promptRomaji: kunReadings.map((r) => r.romaji).join(', '),
      options,
      explanationBn: `কুন'ইয়োমি 「${kunKanaOnly}」(${kunWithRomaji}) নির্দেশক কাঞ্জি হলো 【${item.kanji}】(${item.emoji})। অর্থ: "${item.meanings.bn}"।`,
      targetItem: item,
    });
  }

  // 7. KANJI TO KANA (কাঞ্জি দেখে কানা রিডিং)
  if (mode === 'all' || mode === 'kanji_to_kana') {
    const randomVocab = item.vocab[Math.floor(Math.random() * item.vocab.length)] || primaryVocab;
    const distractors = shuffleArray(otherKanjis).slice(0, 3).map((d) => {
      const dV = d.item.vocab[0] || {
        kana: d.item.readings.kunyomi[0]?.kana || d.item.readings.onyomi[0]?.kana || 'かな',
        romaji: d.item.readings.kunyomi[0]?.romaji || d.item.readings.onyomi[0]?.romaji || 'kana',
      };
      return {
        text: dV.kana,
        romajiText: dV.romaji,
        isCorrect: false,
      };
    });
    const options = shuffleArray([
      {
        text: randomVocab.kana,
        romajiText: randomVocab.romaji,
        isCorrect: true,
      },
      ...distractors,
    ]);
    result.push({
      id: `q-k2kana-${item.id}-${Date.now()}-${Math.random()}`,
      kanjiId: item.id,
      kanjiChar: item.kanji,
      lessonId: lessonNumber,
      questionType: 'kanji_to_kana',
      promptBn: `শব্দ 「 ${randomVocab.kanji} 」 এর সঠিক হিরাগানা/কানা রিডিং কোনটি?`,
      promptJa: randomVocab.kanji,
      promptRomaji: randomVocab.romaji,
      options,
      explanationBn: `「${randomVocab.kanji}」এর সঠিক কানা রিডিং হলো 「${randomVocab.kana}」(${randomVocab.romaji})। অর্থ: ${randomVocab.meaningBn} (${randomVocab.meaningEn})।`,
      targetItem: item,
    });
  }

  // 8. KANA TO KANJI (কানা দেখে কাঞ্জি শব্দ)
  if (mode === 'all' || mode === 'kana_to_kanji') {
    const randomVocab = item.vocab[Math.floor(Math.random() * item.vocab.length)] || primaryVocab;
    const distractors = shuffleArray(otherKanjis).slice(0, 3).map((d) => {
      const dV = d.item.vocab[0] || { kanji: d.item.kanji, romaji: 'romaji' };
      return {
        text: dV.kanji,
        romajiText: dV.romaji,
        isCorrect: false,
      };
    });
    const options = shuffleArray([
      {
        text: randomVocab.kanji,
        romajiText: randomVocab.romaji,
        isCorrect: true,
      },
      ...distractors,
    ]);
    result.push({
      id: `q-kana2k-${item.id}-${Date.now()}-${Math.random()}`,
      kanjiId: item.id,
      kanjiChar: item.kanji,
      lessonId: lessonNumber,
      questionType: 'kana_to_kanji',
      promptBn: `কানা 「 ${randomVocab.kana} 」 এর সঠিক কাঞ্জি রূপ কোনটি?`,
      promptJa: randomVocab.kana,
      promptRomaji: randomVocab.romaji,
      options,
      explanationBn: `「${randomVocab.kana}」(${randomVocab.romaji}) এর সঠিক কাঞ্জি হলো 「${randomVocab.kanji}」。 অর্থ: ${randomVocab.meaningBn} (${randomVocab.meaningEn})।`,
      targetItem: item,
    });
  }

  // 9. STROKE COUNT (স্ট্রোক সংখ্যা)
  if (mode === 'all' || mode === 'strokes') {
    const correctStrokes = item.strokeCount;
    const strokeOptions = [
      correctStrokes,
      Math.max(1, correctStrokes - 2),
      correctStrokes + 2,
      correctStrokes + 4,
    ];
    const uniqueStrokes = Array.from(new Set(strokeOptions));
    while (uniqueStrokes.length < 4) {
      uniqueStrokes.push(uniqueStrokes[uniqueStrokes.length - 1] + 1);
    }
    const options = shuffleArray(
      uniqueStrokes.map((s) => ({
        text: `${s} টি স্ট্রোক (${s} Strokes)`,
        romajiText: `${s} strokes`,
        isCorrect: s === correctStrokes,
      }))
    );
    result.push({
      id: `q-strokes-${item.id}-${Date.now()}-${Math.random()}`,
      kanjiId: item.id,
      kanjiChar: item.kanji,
      lessonId: lessonNumber,
      questionType: 'strokes',
      promptBn: `【 ${item.kanji} 】 কাঞ্জিটিতে মোট কয়টি স্ট্রোক (Stroke Count) রয়েছে?`,
      promptJa: item.kanji,
      promptRomaji: primaryRomaji,
      options,
      explanationBn: `【${item.kanji}】কাঞ্জিটির মোট স্ট্রোক সংখ্যা হলো ${item.strokeCount} টি। অর্থ: "${item.meanings.bn}"।`,
      targetItem: item,
    });
  }

  // 10. VOCABULARY MEANING (শব্দার্থ প্রয়োগ)
  if (mode === 'all' || mode === 'vocab') {
    const targetVocab = item.vocab[1] || primaryVocab;
    const distractors = shuffleArray(otherKanjis).slice(0, 3).map((d) => {
      const dVocab = d.item.vocab[0] || {
        meaningBn: d.item.meanings.bn,
        meaningEn: d.item.meanings.en,
        romaji: 'romaji',
      };
      return {
        text: `${dVocab.meaningBn} (${dVocab.meaningEn})`,
        romajiText: dVocab.romaji,
        isCorrect: false,
      };
    });
    const options = shuffleArray([
      {
        text: `${targetVocab.meaningBn} (${targetVocab.meaningEn})`,
        romajiText: targetVocab.romaji,
        isCorrect: true,
      },
      ...distractors,
    ]);
    result.push({
      id: `q-vocab-${item.id}-${Date.now()}-${Math.random()}`,
      kanjiId: item.id,
      kanjiChar: item.kanji,
      lessonId: lessonNumber,
      questionType: 'vocab',
      promptBn: `জাপানি শব্দ 「${targetVocab.kanji}」(${targetVocab.kana}) এর সঠিক অর্থ কোনটি?`,
      promptJa: targetVocab.kanji,
      promptRomaji: targetVocab.romaji,
      options,
      explanationBn: `「${targetVocab.kanji}」উচ্চারণ: ${targetVocab.kana} (${targetVocab.romaji})। অর্থ: ${targetVocab.meaningBn} (${targetVocab.meaningEn})।`,
      targetItem: item,
    });
  }

  // 11. SENTENCE BLANK FILL (বাক্য ও প্রয়োগ)
  if (mode === 'all' || mode === 'sentences') {
    const targetSentence = item.sentences[0] || {
      ja: `これは${item.kanji}です。`,
      romaji: `Kore wa ${item.kanji} desu.`,
      meaningBn: `এটি হল ${item.meanings.bn}।`,
      meaningEn: `This is ${item.meanings.en}.`,
    };

    const sentenceWithBlank = targetSentence.ja.includes(item.kanji)
      ? targetSentence.ja.replace(item.kanji, ' ＿ ')
      : `${targetSentence.ja} ( ＿ )`;

    const distractors = shuffleArray(otherKanjis).slice(0, 3).map((d) => ({
      text: d.item.kanji,
      romajiText: d.item.readings.kunyomi[0]?.romaji || d.item.readings.onyomi[0]?.romaji,
      isCorrect: false,
    }));

    const options = shuffleArray([
      {
        text: item.kanji,
        romajiText: primaryRomaji,
        isCorrect: true,
      },
      ...distractors,
    ]);

    result.push({
      id: `q-sent-${item.id}-${Date.now()}-${Math.random()}`,
      kanjiId: item.id,
      kanjiChar: item.kanji,
      lessonId: lessonNumber,
      questionType: 'sentences',
      promptBn: `নিচের বাক্যের শূন্যস্থানে ( ＿ ) কোন কাঞ্জিটি বসবে?\nঅর্থ: "${targetSentence.meaningBn}"`,
      promptJa: sentenceWithBlank,
      promptRomaji: targetSentence.romaji,
      options,
      explanationBn: `সম্পূর্ণ বাক্য: 「${targetSentence.ja}」(${targetSentence.romaji})। অর্থ: ${targetSentence.meaningBn}।`,
      targetItem: item,
    });
  }

  // 12. JLPT REAL EXAM FORMAT (漢字読み & 表記)
  if (mode === 'all' || mode === 'jlpt_exam') {
    const sentenceObj = item.sentences[0] || {
      ja: `この${item.kanji}を見ました。`,
      romaji: `Kono ${item.kanji} o mimashita.`,
      meaningBn: `এই ${item.meanings.bn} দেখেছি।`,
      meaningEn: `I saw this ${item.meanings.en}.`,
    };

    const targetVocab = item.vocab[0] || {
      kanji: item.kanji,
      kana: kunReadings[0]?.kana || onReadings[0]?.kana || 'kana',
      romaji: primaryRomaji,
      meaningBn: item.meanings.bn,
      meaningEn: item.meanings.en,
    };

    const targetWord = sentenceObj.ja.includes(targetVocab.kanji) ? targetVocab.kanji : item.kanji;
    const correctKana = targetVocab.kana || kunReadings[0]?.kana || onReadings[0]?.kana || 'kana';

    // Pattern A: 漢字読み (Underlined Kanji in authentic sentence -> Choose Hiragana reading)
    const sentenceWithUnderline = sentenceObj.ja.includes(targetWord)
      ? sentenceObj.ja.replace(targetWord, `【 ${targetWord} 】`)
      : `【 ${targetWord} 】：${sentenceObj.ja}`;

    const kanaDistractors = shuffleArray(otherKanjis)
      .slice(0, 3)
      .map((d) => {
        const dKana = d.item.vocab[0]?.kana || d.item.readings.kunyomi[0]?.kana || d.item.readings.onyomi[0]?.kana || 'kana';
        const dRomaji = d.item.vocab[0]?.romaji || d.item.readings.kunyomi[0]?.romaji || d.item.readings.onyomi[0]?.romaji;
        return {
          text: dKana,
          romajiText: dRomaji,
          isCorrect: false,
        };
      })
      .filter((d) => d.text !== correctKana);

    while (kanaDistractors.length < 3) {
      kanaDistractors.push({
        text: correctKana + 'い',
        romajiText: '',
        isCorrect: false,
      });
    }

    const jlptReadingOptions = shuffleArray([
      {
        text: correctKana,
        romajiText: targetVocab.romaji,
        isCorrect: true,
      },
      ...kanaDistractors.slice(0, 3),
    ]);

    result.push({
      id: `q-jlpt-read-${item.id}-${Date.now()}-${Math.random()}`,
      kanjiId: item.id,
      kanjiChar: item.kanji,
      lessonId: lessonNumber,
      questionType: 'jlpt_exam',
      promptBn: `【JLPT 漢字読み】নিচের বাক্যে বন্ধনীতে থাকা শব্দটির সঠিক হিরাগানা রিডিং (読み方) নির্বাচন করুন:`,
      promptJa: sentenceWithUnderline,
      promptRomaji: sentenceObj.romaji,
      options: jlptReadingOptions,
      explanationBn: `জেএলপিটি সমাধান: 「${targetWord}」এর সঠিক রিডিং হলো 『${correctKana}』(${targetVocab.romaji})। বাক্যের অর্থ: "${sentenceObj.meaningBn}"।`,
      targetItem: item,
    });

    // Pattern B: 表記 (Underlined Hiragana in sentence -> Choose correct Kanji)
    const sentenceWithKanaUnderline = sentenceObj.ja.includes(targetWord)
      ? sentenceObj.ja.replace(targetWord, `【 ${correctKana} 】`)
      : `【 ${correctKana} 】：${sentenceObj.ja}`;

    const kanjiDistractors = shuffleArray(otherKanjis).slice(0, 3).map((d) => ({
      text: d.item.kanji,
      kanaText: d.item.readings.kunyomi[0]?.kana || d.item.readings.onyomi[0]?.kana,
      romajiText: d.item.readings.kunyomi[0]?.romaji || d.item.readings.onyomi[0]?.romaji,
      isCorrect: false,
    }));

    const jlptWritingOptions = shuffleArray([
      {
        text: item.kanji,
        kanaText: correctKana,
        romajiText: targetVocab.romaji,
        isCorrect: true,
      },
      ...kanjiDistractors,
    ]);

    result.push({
      id: `q-jlpt-write-${item.id}-${Date.now()}-${Math.random()}`,
      kanjiId: item.id,
      kanjiChar: item.kanji,
      lessonId: lessonNumber,
      questionType: 'jlpt_exam',
      promptBn: `【JLPT 表記】নিচের বাক্যে বন্ধনীতে থাকা হিরাগানার সঠিক কাঞ্জি (漢字) কোনটি?`,
      promptJa: sentenceWithKanaUnderline,
      promptRomaji: sentenceObj.romaji,
      options: jlptWritingOptions,
      explanationBn: `জেএলপিটি সমাধান: 『${correctKana}』এর সঠিক কাঞ্জি হলো 【${item.kanji}】(${item.emoji})। অর্থ: ${item.meanings.bn}।`,
      targetItem: item,
    });
  }

  return result;
}

/**
 * Generate a massive, dynamic, multi-directional quiz pool
 */
export function generateQuiz(config: QuizFilterConfig): GeneratedQuestion[] {
  const allKanjiWithMeta = getAllKanjiWithLesson();
  const progress = getProgress();
  const storedMistakes = getStoredMistakes();

  // 1. Filter by Lesson
  let pool = allKanjiWithMeta;
  if (config.lessonId !== 'all') {
    pool = pool.filter((k) => k.lessonNumber === config.lessonId);
  }

  // 2. Filter by Mastery status
  if (config.masteryFilter === 'mistakes') {
    pool = pool.filter((k) => storedMistakes.includes(k.item.id));
    if (pool.length === 0) {
      pool = allKanjiWithMeta.filter((k) => progress.kanjiStatus[k.item.id] === 'hard');
      if (pool.length === 0) pool = allKanjiWithMeta;
    }
  } else if (config.masteryFilter !== 'all') {
    pool = pool.filter((k) => {
      const status = progress.kanjiStatus[k.item.id] || 'unseen';
      return status === config.masteryFilter;
    });
    if (pool.length === 0) {
      pool = config.lessonId !== 'all' 
        ? allKanjiWithMeta.filter((k) => k.lessonNumber === config.lessonId)
        : allKanjiWithMeta;
    }
  }

  // Generate multi-directional questions for every kanji in the pool
  const allGeneratedQuestions: GeneratedQuestion[] = [];

  pool.forEach((entry) => {
    const kanjiQuestions = createQuestionsForKanji(entry, allKanjiWithMeta, config.questionMode);
    allGeneratedQuestions.push(...kanjiQuestions);
  });

  // Inject scenario questions if applicable
  if (config.questionMode === 'scenario') {
    return shuffleArray(curatedScenarioQuestions);
  } else if (config.questionMode === 'all') {
    const scenarios = curatedScenarioQuestions.filter(
      (s) => config.lessonId === 'all' || s.lessonId === config.lessonId
    );
    allGeneratedQuestions.push(...scenarios);
  }

  // Shuffle entire pool
  const finalQuestions = shuffleArray(allGeneratedQuestions);

  // Apply count limit
  if (config.questionCount === 'all') {
    return finalQuestions;
  }
  return finalQuestions.slice(0, Number(config.questionCount));
}

/**
 * Get estimated total pool size for the current configuration
 */
export function getEstimatedPoolSize(lessonId: number | 'all', mode: QuestionMode): number {
  const allKanjiWithMeta = getAllKanjiWithLesson();
  const pool = lessonId === 'all' 
    ? allKanjiWithMeta 
    : allKanjiWithMeta.filter((k) => k.lessonNumber === lessonId);

  if (mode === 'scenario') return curatedScenarioQuestions.length;
  if (mode === 'jlpt_exam') return pool.length * 2;

  if (mode === 'all') {
    return pool.length * 8 + (lessonId === 'all' ? curatedScenarioQuestions.length : 10);
  }

  return pool.length;
}
