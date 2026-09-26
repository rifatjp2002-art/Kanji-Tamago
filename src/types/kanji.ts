export type JlptLevel = 'N5' | 'N4' | 'N3';

export type KanjiCategory = 'main' | 'read_only' | 'visual_recognition';

export interface Reading {
  kana: string;
  romaji: string;
}

export interface VocabWord {
  kanji: string;
  kana: string;
  romaji: string;
  meaningEn: string;
  meaningBn: string;
  tag?: string; // e.g. "JLPT N5", "Daily Supermarket"
}

export interface SentenceItem {
  ja: string;
  romaji: string;
  meaningEn: string;
  meaningBn: string;
}

export interface KanjiItem {
  id: string;
  kanji: string;
  emoji: string; // 1 relevant emoji for visual memory
  strokeCount: number;
  jlpt: JlptLevel;
  category: KanjiCategory;
  readings: {
    onyomi: Reading[];
    kunyomi: Reading[];
  };
  meanings: {
    en: string;
    bn: string;
  };
  vocab: VocabWord[]; // 5-6 high-frequency words
  sentences: SentenceItem[]; // 2-3 progressive real-life/JLPT sentences
  tamagoTip?: {
    bn: string;
    en: string;
  };
}

export interface Lesson {
  id: number;
  number: number;
  titleJa: string;
  titleRomaji: string;
  titleBn: string;
  titleEn: string;
  descriptionBn: string;
  descriptionEn: string;
  kanjiList: KanjiItem[];
}

export interface DisplayToggles {
  showEmoji: boolean;
  showBengali: boolean;
  showEnglish: boolean;
  showKana: boolean;
  showRomaji: boolean;
  showSentences: boolean;
  showVocab: boolean;
}
