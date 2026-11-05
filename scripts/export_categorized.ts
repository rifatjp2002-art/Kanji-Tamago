import { allLessons } from '../src/data/allLessons';
import fs from 'fs';

// 1. Create clean Markdown file
let md = '# 🌸 Kanji Tamago (漢字たまご) - সম্পূর্ণ কাঞ্জি তালিকা (Lesson 1 to 30)\n\n';
md += '> **মোট লেসন:** ৩০টি | **মোট কাঞ্জি:** ৪৫৯টি\n';
md += '> **ক্যাটাগরি বিভাজন:**\n';
md += '> - ✍️ **Main Kanji (মূল কাঞ্জি / 書く漢字):** ৩১৯টি\n';
md += '> - 👀 **Mite Wakaru (দেখে বোঝার কাঞ্জি / 見てわかる漢字):** ৫৩টি\n';
md += '> - 📖 **Yomu (পড়ার কাঞ্জি / 読む漢字):** ৮৭টি\n\n';
md += '---\n\n';

allLessons.forEach((lesson) => {
  md += `## 📚 লেসন ${lesson.number}: ${lesson.titleJa} (${lesson.titleBn})\n`;
  md += `> **বিষয়:** ${lesson.titleEn} | **লেভেল:** ${lesson.level} | **কাঞ্জি সংখ্যা:** ${lesson.kanjiList.length}টি\n\n`;

  const mainKanjis = lesson.kanjiList.filter((k) => k.category === 'main');
  const miteWakaruKanjis = lesson.kanjiList.filter((k) => k.category === 'visual_recognition');
  const yomuKanjis = lesson.kanjiList.filter((k) => k.category === 'read_only');

  // Main
  if (mainKanjis.length > 0) {
    md += `### ✍️ Main Kanji (মূল কাঞ্জি) [${mainKanjis.length}টি]:\n`;
    mainKanjis.forEach((k, idx) => {
      const on = k.readings.onyomi.map((r) => r.kana).join(', ') || '-';
      const kun = k.readings.kunyomi.map((r) => r.kana).join(', ') || '-';
      md += `${idx + 1}. **${k.kanji}** ${k.emoji} — অর্থ: **${k.meanings.bn}** (${k.meanings.en}) | On: ${on} | Kun: ${kun} | JLPT: ${k.jlpt} | স্ট্রোক: ${k.strokeCount}\n`;
    });
    md += '\n';
  }

  // Mite Wakaru
  if (miteWakaruKanjis.length > 0) {
    md += `### 👀 Mite Wakaru (দেখে বোঝার কাঞ্জি / Visual) [${miteWakaruKanjis.length}টি]:\n`;
    miteWakaruKanjis.forEach((k, idx) => {
      const on = k.readings.onyomi.map((r) => r.kana).join(', ') || '-';
      const kun = k.readings.kunyomi.map((r) => r.kana).join(', ') || '-';
      md += `${idx + 1}. **${k.kanji}** ${k.emoji} — অর্থ: **${k.meanings.bn}** (${k.meanings.en}) | On: ${on} | Kun: ${kun} | JLPT: ${k.jlpt}\n`;
    });
    md += '\n';
  }

  // Yomu
  if (yomuKanjis.length > 0) {
    md += `### 📖 Yomu Kanji (পড়ার কাঞ্জি / Reading Only) [${yomuKanjis.length}টি]:\n`;
    yomuKanjis.forEach((k, idx) => {
      const on = k.readings.onyomi.map((r) => r.kana).join(', ') || '-';
      const kun = k.readings.kunyomi.map((r) => r.kana).join(', ') || '-';
      md += `${idx + 1}. **${k.kanji}** ${k.emoji} — অর্থ: **${k.meanings.bn}** (${k.meanings.en}) | On: ${on} | Kun: ${kun} | JLPT: ${k.jlpt}\n`;
    });
    md += '\n';
  }

  md += '---\n\n';
});

fs.writeFileSync('./KANJI_LESSONS_1_TO_30.md', md, 'utf-8');
fs.writeFileSync('./public/KANJI_LESSONS_1_TO_30.md', md, 'utf-8');

// 2. Structured JSON
const categorizedJson = allLessons.map((l) => ({
  lesson_number: l.number,
  lesson_title_ja: l.titleJa,
  lesson_title_bn: l.titleBn,
  lesson_title_en: l.titleEn,
  level: l.level,
  total_kanji: l.kanjiList.length,
  main_kanji: l.kanjiList.filter((k) => k.category === 'main').map((k) => ({
    kanji: k.kanji,
    emoji: k.emoji,
    meanings: k.meanings,
    readings: k.readings,
    jlpt: k.jlpt,
    strokeCount: k.strokeCount,
    tamagoTip: k.tamagoTip,
    vocab: k.vocab,
    sentences: k.sentences,
  })),
  mite_wakaru_kanji: l.kanjiList.filter((k) => k.category === 'visual_recognition').map((k) => ({
    kanji: k.kanji,
    emoji: k.emoji,
    meanings: k.meanings,
    readings: k.readings,
    jlpt: k.jlpt,
    strokeCount: k.strokeCount,
    tamagoTip: k.tamagoTip,
    vocab: k.vocab,
    sentences: k.sentences,
  })),
  yomu_kanji: l.kanjiList.filter((k) => k.category === 'read_only').map((k) => ({
    kanji: k.kanji,
    emoji: k.emoji,
    meanings: k.meanings,
    readings: k.readings,
    jlpt: k.jlpt,
    strokeCount: k.strokeCount,
    tamagoTip: k.tamagoTip,
    vocab: k.vocab,
    sentences: k.sentences,
  })),
}));

fs.writeFileSync('./public/kanji_by_category.json', JSON.stringify(categorizedJson, null, 2), 'utf-8');

// 3. Compact text list for quick glance
let txt = '=== KANJI TAMAGO (LESSONS 1-30) QUICK CHARACTER LIST ===\n\n';
allLessons.forEach((l) => {
  const m = l.kanjiList.filter((k) => k.category === 'main').map((k) => k.kanji).join(' ');
  const v = l.kanjiList.filter((k) => k.category === 'visual_recognition').map((k) => k.kanji).join(' ');
  const r = l.kanjiList.filter((k) => k.category === 'read_only').map((k) => k.kanji).join(' ');
  txt += `[Lesson ${l.number}: ${l.titleJa} (${l.titleBn})]\n`;
  if (m) txt += `  ✍️ Main (লিখা/মূল): ${m}\n`;
  if (v) txt += `  👀 Mite Wakaru (দেখে চেনা): ${v}\n`;
  if (r) txt += `  📖 Yomu (পড়া): ${r}\n`;
  txt += '\n';
});
fs.writeFileSync('./public/kanji_quick_list.txt', txt, 'utf-8');
fs.writeFileSync('./kanji_quick_list.txt', txt, 'utf-8');

console.log('All files generated successfully!');
