/**
 * High-Accuracy Native Japanese Speech Synthesizer for Language Learners
 * Resolves Web Speech API morphological guessing bugs (e.g., 車道 -> しゃどう instead of くるまどう, 何 -> なに instead of か)
 */

// Irregular / High-Frequency Phonetic Overrides for TTS
const PHONETIC_OVERRIDES: Record<string, string> = {
  // Common single Kanji default natural readings
  '何': 'なに',
  '私': 'わたし',
  '人': 'ひと',
  '男': 'おとこ',
  '女': 'おんな',
  '子': 'こ',
  '日': 'ひ',
  '月': 'つき',
  '火': 'ひ',
  '水': 'みず',
  '木': 'き',
  '金': 'かね',
  '土': 'つち',
  '年': 'とし',
  '時': 'とき',
  '車': 'くるま',
  '道': 'みち',
  '手': 'て',
  '足': 'あし',
  '目': 'め',
  '口': 'くち',
  '耳': 'みみ',
  '雨': 'あめ',
  '空': 'そら',
  '川': 'かわ',
  '山': 'やま',
  '海': 'うみ',
  '魚': 'さかな',
  '肉': 'にく',
  '酒': 'さけ',
  '本': 'ほん',
  '店': 'みせ',
  '家': 'いえ',
  '町': 'まち',
  '駅': 'えき',

  // Compound words with frequent TTS mispronunciations
  '車道': 'しゃどう',
  '歩道': 'ほどう',
  '高速道路': 'こうそくどうろ',
  '道路': 'どうろ',
  '地下鉄': 'ちかてつ',
  '銀行': 'ぎんこう',
  '郵便局': 'ゆうびんきょく',
  '図書館': 'としょかん',
  '病院': 'びょういん',
  '映画館': 'えいがかん',
  '美術館': 'びじゅつかん',
  '動物園': 'どうぶつえん',
  '公園': 'こうえん',
  '交番': 'こうばん',

  // Counters & Irregular Number readings
  '一日': 'ついたち',
  '二日': 'ふつか',
  '三日': 'みっか',
  '四日': 'よっか',
  '五日': 'いつか',
  '六日': 'むいか',
  '七日': 'なのか',
  '八日': 'ようか',
  '九日': 'ここのか',
  '十日': 'とおか',
  '十四日': 'じゅうよっか',
  '二十日': 'はつか',
  '二十四日': 'にじゅうよっか',
  '一人': 'ひとり',
  '二人': 'ふたり',
  '三人': 'さんにん',
  '四人': 'よにん',
  '大人': 'おとな',
  '子供': 'こども',
  '二十歳': 'はたち',
  '今年': 'ことし',
  '去年': 'きょねん',
  '来年': 'らいねん',
  '今日': 'きょう',
  '明日': 'あした',
  '昨日': 'きのう',
  '一昨日': 'おととい',
  '明後日': 'あさって',
  '今週': 'こんしゅう',
  '先週': 'せんしゅう',
  '来週': 'らいしゅう',
  '今月': 'こんげつ',
  '先月': 'せんげつ',
  '来月': 'らいげつ',

  // 何 Context compounds
  '何時': 'なんじ',
  '何分': 'なんぷん',
  '何人': 'なんにん',
  '何月': 'なんがつ',
  '何日': 'なんにち',
  '何年': 'なんねん',
  '何才': 'なんさい',
  '何歳': 'なんさい',
  '何度': 'なんど',
  '何階': 'なんかい',
  '何番': 'なんばん',
  '何曜日': 'なんようび',
  '何か': 'なにか',
  '何も': 'なにも',
  '何で': 'なんで',

  // People & relations
  '男の人': 'おとこのひと',
  '女の人': 'おんなのひと',
  '男の子': 'おとこのこ',
  '女の子': 'おんなのこ',
  '友達': 'ともだち',
  '家族': 'かぞく',
  '先生': 'せんせい',
  '学生': 'がくせい',
  '留学生': 'りゅうがくせい',
  '会社員': 'かいしゃいん',
  '医者': 'いしゃ',

  // Food & Shopping
  'お酒': 'おさけ',
  'お茶': 'おちゃ',
  'ご飯': 'ごはん',
  '牛肉': 'ぎゅうにく',
  '豚肉': 'ぶたにく',
  '鶏肉': 'とりにく',
  '食べ放題': 'たべほうだい',
  '飲み放題': 'のみほうだい',
  '割引': 'わりびき',
  '半額': 'はんがく',
  '税込み': 'ぜいこみ',
  '税抜き': 'ぜいぬき',

  // Descriptive / Adverbs
  '上手': 'じょうず',
  '下手': 'へた',
  '大丈夫': 'だいじょうぶ',
  '大切': 'たいせつ',
  '大変': 'たいへん',
  '大勢': 'おおぜい',
};

// Clean text for speech synthesis
function prepareSpeechText(text: string, kanaHint?: string): string {
  // If an exact phonetic kana reading is provided, use it directly!
  if (kanaHint && kanaHint.trim().length > 0) {
    return kanaHint.replace(/[~〜\-·・\s\[\]()（）]/g, '').trim();
  }

  // Clean raw text
  let cleaned = text.replace(/^[〜\-\s]+/, '').trim();

  // Check direct override dictionary
  if (PHONETIC_OVERRIDES[cleaned]) {
    return PHONETIC_OVERRIDES[cleaned];
  }

  // Replace compound kanji in sentences with exact kana to avoid TTS guessing bugs
  // Sort keys by length descending so longer compounds match first
  const sortedKeys = Object.keys(PHONETIC_OVERRIDES).sort((a, b) => b.length - a.length);
  for (const key of sortedKeys) {
    if (cleaned.includes(key)) {
      cleaned = cleaned.split(key).join(PHONETIC_OVERRIDES[key]);
    }
  }

  return cleaned;
}

/**
 * Native Japanese pronunciation with smart phonetic correction.
 * @param text The Kanji, phrase, or sentence to speak.
 * @param kanaHint Optional exact Kana (Hiragana/Katakana) to enforce 100% correct pronunciation.
 */
export function speakJapanese(text: string, kanaHint?: string): void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return;
  }

  // Cancel any ongoing speech to avoid overlap
  window.speechSynthesis.cancel();

  const phoneticText = prepareSpeechText(text, kanaHint);
  if (!phoneticText) return;

  const utterance = new SpeechSynthesisUtterance(phoneticText);
  utterance.lang = 'ja-JP';
  utterance.rate = 0.88; // Optimized pacing for Japanese language learners
  utterance.pitch = 1.0;

  // Select best Japanese native voice available in browser
  const voices = window.speechSynthesis.getVoices();
  const jaVoice =
    voices.find((v) => v.lang === 'ja-JP' || v.lang === 'ja_JP') ||
    voices.find((v) => v.lang.startsWith('ja'));

  if (jaVoice) {
    utterance.voice = jaVoice;
  }

  window.speechSynthesis.speak(utterance);
}

/**
 * Helper to speak single reading (On'yomi or Kun'yomi)
 */
export function speakReading(kana: string, label?: string): void {
  // Speak the exact kana directly
  speakJapanese(kana, kana);
}
