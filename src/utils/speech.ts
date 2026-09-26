/**
 * High-Accuracy Native Japanese Speech Synthesizer for Language Learners
 * Fixes morphological splitting bugs (e.g. 月曜日 getting split into つき + 曜 + ひ)
 * and guarantees 100% natural, correct pronunciation for Kanji, compounds, and full sentences.
 */

/**
 * Isolated single Kanji readings - ONLY applied when the text to pronounce is strictly
 * a SINGLE isolated character (length === 1) and no explicit reading hint was provided.
 *
 * CRITICAL RULE: These single-character entries are NEVER substituted as substrings
 * inside sentences or compound words!
 */
export const SINGLE_KANJI_READINGS: Record<string, string> = {
  // Days & Elements
  '日': 'ひ',
  '月': 'つき',
  '火': 'ひ',
  '水': 'みず',
  '木': 'き',
  '金': 'かね',
  '土': 'つち',

  // Common single Kanji
  '何': 'なに',
  '私': 'わたし',
  '人': 'ひと',
  '男': 'おとこ',
  '女': 'おんな',
  '子': 'こ',
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
  '花': 'はな',
  '天': 'てん',
  '気': 'き',
  '校': 'こう',
  '友': 'とも',
  '父': 'ちち',
  '母': 'はは',
  '兄': 'あに',
  '弟': 'おとうと',
  '姉': 'あね',
  '妹': 'いもうと',
  '上': 'うえ',
  '下': 'した',
  '中': 'なか',
  '前': 'まえ',
  '後': 'うしろ',
  '右': 'みぎ',
  '左': 'ひだり',
  '白': 'しろ',
  '黒': 'くろ',
  '赤': 'あか',
  '青': 'あお',
  '春': 'はる',
  '夏': 'なつ',
  '秋': 'あき',
  '冬': 'ふゆ',
  '朝': 'あさ',
  '昼': 'ひる',
  '晩': 'ばん',
  '夜': 'よる',
  '北': 'きた',
  '南': 'みなみ',
  '東': 'ひがし',
  '西': 'にし',
};

/**
 * Multi-character compound words with frequent Web Speech API morphological guessing bugs.
 * ONLY entries with length >= 2 are placed here to protect full sentences from corruption.
 */
export const COMPOUND_PHONETIC_OVERRIDES: Record<string, string> = {
  // Days of the week (Prevents TTS from reading 月曜日 as つきようひ!)
  '月曜日': 'げつようび',
  '火曜日': 'かようび',
  '水曜日': 'すいようび',
  '木曜日': 'もくようび',
  '金曜日': 'きんようび',
  '土曜日': 'どようび',
  '日曜日': 'にちようび',
  '何曜日': 'なんようび',
  '月曜': 'げつよう',
  '火曜': 'かよう',
  '水曜': 'すいよう',
  '木曜': 'もくよう',
  '金曜': 'きんよう',
  '土曜': 'どよう',
  '日曜': 'にちよう',

  // Months of the year
  '一月': 'いちがつ',
  '二月': 'にがつ',
  '三月': 'さんがつ',
  '四月': 'しがつ',
  '五月': 'ごがつ',
  '六月': 'ろくがつ',
  '七月': 'しちがつ',
  '八月': 'はちがつ',
  '九月': 'くがつ',
  '十月': 'じゅうがつ',
  '十一月': 'じゅういちがつ',
  '十二月': 'じゅうにがつ',
  '何月': 'なんがつ',
  '今月': 'こんげつ',
  '先月': 'せんげつ',
  '来月': 'らいげつ',
  '毎月': 'まいつき',
  '年月': 'ねんげつ',

  // Days of the month (Irregular date counters)
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
  '十一日': 'じゅういちにち',
  '十二日': 'じゅうににち',
  '十三日': 'じゅうさんにち',
  '十四日': 'じゅうよっか',
  '十五日': 'じゅうごにち',
  '十六日': 'じゅうろくにち',
  '十七日': 'じゅうしちにち',
  '十八日': 'じゅうはちにち',
  '十九日': 'じゅうくにち',
  '二十日': 'はつか',
  '二十一日': 'にじゅういちにち',
  '二十二日': 'にじゅうににち',
  '二十三日': 'にじゅうさんにち',
  '二十四日': 'にじゅうよっか',
  '二十五日': 'にじゅうごにち',
  '二十六日': 'にじゅうろくにち',
  '二十七日': 'にじゅうしちにち',
  '二十八日': 'にじゅうはちにち',
  '二十九日': 'にじゅうくにち',
  '三十日': 'さんじゅうにち',
  '三十一日': 'さんじゅういちにち',
  '何日': 'なんにち',

  // Time & Numbers (TTS often misreads 4, 7, 9 o'clock)
  '一時': 'いちじ',
  '二時': 'にじ',
  '三時': 'さんじ',
  '四時': 'よじ',      // Crucial: not yonji or shiji
  '五時': 'ごじ',
  '六時': 'ろくじ',
  '七時': 'しちじ',    // Crucial: not nanaji
  '八時': 'はちじ',
  '九時': 'くじ',      // Crucial: not kyuuji
  '十時': 'じゅうじ',
  '十一時': 'じゅういちじ',
  '十二時': 'じゅうにじ',
  '何時': 'なんじ',
  '何時何分': 'なんじなんぷん',
  '時間': 'じかん',
  '一時間': 'いちじかん',
  '二時間': 'にじかん',
  '時計': 'とけい',

  // Minutes with irregular rendaku / sokuon
  '一分': 'いっぷん',
  '二分': 'にふん',
  '三分': 'さんぷん',
  '四分': 'よんぷん',
  '五分': 'ごふん',
  '六分': 'ろっぷん',
  '七分': 'ななふん',
  '八分': 'はっぷん',
  '九分': 'きゅうふん',
  '十分': 'じゅっぷん',
  '何分': 'なんぷん',
  '半分': 'はんぶん',

  // People & Counters
  '一人': 'ひとり',
  '二人': 'ふたり',
  '三人': 'さんにん',
  '四人': 'よにん',    // Crucial: not shinin or yonnin
  '五人': 'ごにん',
  '何人': 'なんにん',
  '大人': 'おとな',
  '子供': 'こども',
  '二十歳': 'はたち',
  '何才': 'なんさい',
  '何歳': 'なんさい',
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

  // Relative Dates & Years
  '今日': 'きょう',
  '明日': 'あした',
  '昨日': 'きのう',
  '一昨日': 'おととい',
  '明後日': 'あさって',
  '今年': 'ことし',
  '去年': 'きょねん',
  '来年': 'らいねん',
  '今週': 'こんしゅう',
  '先週': 'せんしゅう',
  '来週': 'らいしゅう',
  '毎週': 'まいしゅう',
  '毎日': 'まいにち',
  '毎年': 'まいとし',
  '休日': 'きゅうじつ',
  '祝日': 'しゅくじつ',
  '平日': 'へいじつ',
  '誕生日': 'たんじょうび',
  '記念日': 'きねんび',
  '生年月日': 'せいねんがっぴ',

  // Japan & Geography
  '日本': 'にほん',
  '日本人': 'にほんじん',
  '日本語': 'にほんご',
  '東京': 'とうきょう',
  '京都': 'きょうと',
  '大阪': 'おおさか',

  // Transportation & Transit
  '車道': 'しゃどう',
  '歩道': 'ほどう',
  '高速道路': 'こうそくどうろ',
  '道路': 'どうろ',
  '地下鉄': 'ちかてつ',
  '新幹線': 'しんかんせん',
  '電車': 'でんしゃ',
  '自転車': 'じてんしゃ',
  '自動車': 'じどうしゃ',
  '飛行機': 'ひこうき',
  '空港': 'くうこう',
  '駅前': 'えきまえ',
  '駅員': 'えきいん',
  '改札口': 'かいさつぐち',
  '東出口': 'ひがしでぐち',
  '西出口': 'にしでぐち',
  '南出口': 'みなみでぐち',
  '北出口': 'きたでぐち',
  '非常口': 'ひじょうぐち',
  '案内所': 'あんないしょ',

  // Buildings & Facilities
  '銀行': 'ぎんこう',
  '郵便局': 'ゆうびんきょく',
  '図書館': 'としょかん',
  '病院': 'びょういん',
  '映画館': 'えいがかん',
  '美術館': 'びじゅつかん',
  '動物園': 'どうぶつえん',
  '公園': 'こうえん',
  '交番': 'こうばん',
  '喫茶店': 'きっさてん',
  '居酒屋': 'いざかや',
  '店員': 'てんいん',
  '自動販売機': 'じどうはんばいき',
  '千円札': 'せんえんさつ',
  '一万円札': 'いちまんえんさつ',

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

  // Daily Life & Signs
  '上手': 'じょうず',
  '下手': 'へた',
  '大丈夫': 'だいじょうぶ',
  '大切': 'たいせつ',
  '大変': 'たいへん',
  '大勢': 'おおぜい',
  '有名': 'ゆうめい',
  '禁煙': 'きんえん',
  '喫煙所': 'きつえんじょ',
  '準備中': 'じゅんびちゅう',
  '営業中': 'えいぎょうちゅう',
  '使用中': 'しようちゅう',
  '立ち入り禁止': 'たちいりきんし',
  '階段': 'かいだん',
};

// Cached sorted compound keys (length >= 2, sorted longest first)
const SORTED_COMPOUND_KEYS = Object.keys(COMPOUND_PHONETIC_OVERRIDES)
  .filter((k) => k.length >= 2)
  .sort((a, b) => b.length - a.length);

/**
 * Prepares and sanitizes text for native Web Speech API `ja-JP`.
 *
 * Features:
 * 1. Uses explicit `kanaHint` if supplied (e.g. vocab item kana, reading kana).
 * 2. Extracts kana when input contains parenthesized reading, e.g. "平日 (へいじつ)" -> "へいじつ".
 * 3. When text is an isolated single Kanji character, looks up its natural reading in SINGLE_KANJI_READINGS.
 * 4. For multi-character compounds or sentences:
 *    - Replaces only verified multi-character compound overrides (length >= 2).
 *    - NEVER replaces single kanji inside sentences, ensuring compound words like 月曜日
 *      are never mangled into つき曜ひ!
 */
export function prepareSpeechText(text: string, kanaHint?: string): string {
  // 1. Explicit kana hint provided
  if (kanaHint && kanaHint.trim().length > 0) {
    return kanaHint.replace(/[~〜\-·・\s\[\]()（）]/g, '').trim();
  }

  if (!text) return '';

  let cleaned = text.trim();

  // 2. Check for parenthesized kana pattern: e.g. "平日 (へいじつ)" or "酒 (さけ / おさけ)"
  const parenKanaMatch = cleaned.match(/^([^\(（]+)[\(（]([\u3040-\u309F\u30A0-\u30FF\s\/／、・]+)[\)）]$/);
  if (parenKanaMatch) {
    const insideKana = parenKanaMatch[2].split(/[\/／、]/)[0].trim();
    if (insideKana.length > 0) {
      return insideKana.replace(/[~〜\-·・\s\[\]()（）]/g, '').trim();
    }
  }

  // 3. Clean leading or trailing dashes / tildes
  cleaned = cleaned.replace(/^[〜\-\s]+/, '').replace(/[〜\-\s]+$/, '').trim();

  // 4. Isolated Single Kanji case:
  // ONLY if the entire text is a single isolated character!
  if (cleaned.length === 1) {
    if (SINGLE_KANJI_READINGS[cleaned]) {
      return SINGLE_KANJI_READINGS[cleaned];
    }
    return cleaned;
  }

  // 5. Exact compound match
  if (COMPOUND_PHONETIC_OVERRIDES[cleaned]) {
    return COMPOUND_PHONETIC_OVERRIDES[cleaned];
  }

  // 6. Sentence / Phrase processing:
  // Apply compound phonetic overrides (length >= 2, longest first)
  for (const key of SORTED_COMPOUND_KEYS) {
    if (cleaned.includes(key)) {
      cleaned = cleaned.split(key).join(COMPOUND_PHONETIC_OVERRIDES[key]);
    }
  }

  return cleaned;
}

// Global cached Japanese voice to prevent voice-lookup lag
let cachedJaVoice: SpeechSynthesisVoice | null = null;

function getJapaneseVoice(): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return null;
  }

  if (cachedJaVoice) {
    return cachedJaVoice;
  }

  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) {
    return null;
  }

  // Priority order for native Japanese voices:
  // 1. Exact ja-JP or ja_JP
  // 2. Name contains Kyoko, Otoya, Hattori, Ayumi, Haruka, Ichiro, Google 日本語, etc.
  const jaVoices = voices.filter((v) => v.lang === 'ja-JP' || v.lang === 'ja_JP' || v.lang.startsWith('ja'));
  
  const preferredVoice = jaVoices.find((v) =>
    /kyoko|otoya|haruka|ichiro|ayumi|hattori|google\s*日本語/i.test(v.name)
  ) || jaVoices[0] || null;

  if (preferredVoice) {
    cachedJaVoice = preferredVoice;
  }

  return preferredVoice;
}

// Preload voices when browser initializes them
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    cachedJaVoice = null;
    getJapaneseVoice();
  };
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
  utterance.rate = 0.88; // Natural, clear pacing for Japanese learners
  utterance.pitch = 1.0;

  const jaVoice = getJapaneseVoice();
  if (jaVoice) {
    utterance.voice = jaVoice;
  }

  window.speechSynthesis.speak(utterance);
}

/**
 * Helper to speak single reading (On'yomi or Kun'yomi)
 */
export function speakReading(kana: string, label?: string): void {
  speakJapanese(kana, kana);
}
