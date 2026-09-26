import { Lesson, KanjiItem, DisplayToggles } from '../types/kanji';
import { lesson1 } from './lesson1';
import { lesson2 } from './lesson2';
import { lesson3 } from './lesson3';
import { lesson4 } from './lesson4';
import { lesson5 } from './lesson5';
import { lesson6 } from './lesson6';
import { lesson7 } from './lesson7';
import { lesson8 } from './lesson8';
import { lesson9 } from './lesson9';
import { lesson10 } from './lesson10';
import { lesson11 } from './lesson11';
import { lesson12 } from './lesson12';
import { lesson13 } from './lesson13';
import { lesson14 } from './lesson14';
import { lesson15 } from './lesson15';
import { a2b1Lessons } from './a2b1Lessons';

export const allLessons: Lesson[] = [
  lesson1,
  lesson2,
  lesson3,
  lesson4,
  lesson5,
  lesson6,
  lesson7,
  lesson8,
  lesson9,
  lesson10,
  lesson11,
  lesson12,
  lesson13,
  lesson14,
  lesson15,
  ...a2b1Lessons,
];

export const defaultToggles: DisplayToggles = {
  showEmoji: true,
  showBengali: true,
  showEnglish: true,
  showKana: true,
  showRomaji: true,
  showSentences: true,
  showVocab: true,
};

/**
 * Generate strict clean JSON representation of a given Kanji list or Lesson
 */
export function exportKanjiAsJSON(kanjiList: KanjiItem[]): string {
  const cleanData = kanjiList.map((item) => ({
    kanji: item.kanji,
    visual_cue_emoji: item.emoji,
    readings: {
      onyomi: item.readings.onyomi.map((r) => `${r.kana} (${r.romaji})`).join(', ') || 'N/A',
      kunyomi: item.readings.kunyomi.map((r) => `${r.kana} (${r.romaji})`).join(', ') || 'N/A',
    },
    meanings: {
      english: item.meanings.en,
      bengali: item.meanings.bn,
    },
    vocab_list: item.vocab.map((v) => ({
      word: v.kanji,
      reading: v.kana,
      romaji: v.romaji,
      meaning_en: v.meaningEn,
      meaning_bn: v.meaningBn,
      tag: v.tag,
    })),
    sentences: item.sentences.map((s) => ({
      japanese: s.ja,
      romaji: s.romaji,
      meaning_bn: s.meaningBn,
      meaning_en: s.meaningEn,
    })),
    tamago_tip: item.tamagoTip,
    stroke_count: item.strokeCount,
    category: item.category,
    jlpt_level: item.jlpt,
  }));

  return JSON.stringify(cleanData, null, 2);
}

/**
 * Generate clean Markdown representation formatted according to the Kanji Tamago curriculum specifications
 */
export function exportKanjiAsMarkdown(lessonTitle: string, kanjiList: KanjiItem[]): string {
  let md = `# Kanji Tamago (漢字たまご) - ${lessonTitle}\n\n`;

  kanjiList.forEach((k, idx) => {
    md += `## ${idx + 1}. 【${k.kanji}】 ${k.emoji}\n`;
    md += `- **Category**: ${k.category.replace('_', ' ').toUpperCase()} | **Strokes**: ${k.strokeCount} | **JLPT**: ${k.jlpt}\n`;
    md += `- **Meanings**: English: *${k.meanings.en}* | Bengali: *${k.meanings.bn}*\n`;
    
    const onStr = k.readings.onyomi.length > 0 
      ? k.readings.onyomi.map((r) => `${r.kana} [${r.romaji}]`).join(', ')
      : 'None';
    const kunStr = k.readings.kunyomi.length > 0 
      ? k.readings.kunyomi.map((r) => `${r.kana} [${r.romaji}]`).join(', ')
      : 'None';
    md += `- **Readings**:\n  - On'yomi (Katakana): ${onStr}\n  - Kun'yomi (Hiragana): ${kunStr}\n\n`;

    md += `### High-Frequency Vocabulary (5-6 Words):\n`;
    k.vocab.forEach((v, vIdx) => {
      md += `${vIdx + 1}. **${v.kanji}** (${v.kana} / ${v.romaji})\n   - EN: ${v.meaningEn}\n   - BN: ${v.meaningBn} *[${v.tag || 'Daily'}]*\n`;
    });

    md += `\n### Practical Sentences (Real-Life / JLPT):\n`;
    k.sentences.forEach((s, sIdx) => {
      md += `${sIdx + 1}. **${s.ja}**\n   - Romaji: *${s.romaji}*\n   - Bengali: ${s.meaningBn}\n   - English: ${s.meaningEn}\n`;
    });

    if (k.tamagoTip) {
      md += `\n> **Kanji Tamago Tip**: ${k.tamagoTip.bn} (${k.tamagoTip.en})\n`;
    }

    md += `\n---\n\n`;
  });

  return md;
}
