import { Lesson } from '../types/kanji';

export const lesson20: Lesson = {
  id: 20,
  number: 20,
  titleJa: '住んでいる町で',
  titleRomaji: 'Sunde iru machi de',
  titleBn: 'যে শহরে বাস করি (In my town - Train, Bank & Life)',
  titleEn: 'In my town (Train, Bank & Life)',
  descriptionBn: 'নিজের শহর ও দৈনন্দিন জীবনে ট্রেন ভ্রমণ, ব্যাংক ট্রানজেকশন, ভুল সংশোধন ও জমার প্রয়োজনীয় কান্জি (急, 特, 線, 回, 遅, 忘, 待, 取, 消, 残)। কাঞ্জির গুরুত্বপূর্ণ পার্টস: 心 (হৃদয়), 主 (মাস্টার), 糸/系 (সুতা), 刀 (তলোয়ার)।',
  descriptionEn: 'Essential Kanji for living in a Japanese town, using trains, banking, withdrawing money, and fixing errors.',
  kanjiList: [
    // --- Main Kanji (書ける: 急, 特, 線, 回, 遅, 忘, 待, 取, 消, 残) ---
    {
      id: 'l20-kyuu',
      kanji: '急',
      emoji: '🏃',
      strokeCount: 9,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'キュウ', romaji: 'kyuu' }],
        kunyomi: [{ kana: '急.ぐ', romaji: 'isog.u' }]
      },
      meanings: {
        en: 'Hurry, urgent, sudden',
        bn: 'তাড়াহুড়ো করা, জরুরি, আচমকা'
      },
      vocab: [
        { kanji: '急ぐ', kana: 'いそぐ', romaji: 'isogu', meaningEn: 'to hurry', meaningBn: 'তাড়াহুড়ো করা', tag: 'N5' },
        { kanji: '急行', kana: 'きゅうこう', romaji: 'kyuukou', meaningEn: 'express train', meaningBn: 'এক্সপ্রেস ট্রেন', tag: 'N4' },
        { kanji: '急に', kana: 'きゅうに', romaji: 'kyuu ni', meaningEn: 'suddenly', meaningBn: 'হঠাৎ করে', tag: 'N4' },
        { kanji: '救急車', kana: 'きゅうきゅうしゃ', romaji: 'kyuukyuusha', meaningEn: 'ambulance', meaningBn: 'অ্যাম্বুলেন্স', tag: 'N3' },
        { kanji: '急速な', kana: 'きゅうそくな', romaji: 'kyuusoku na', meaningEn: 'rapid, swift', meaningBn: 'অতি দ্রুত গতি সম্পন্ন', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '遅刻しそうなので急いで駅へ走ります।',
          romaji: 'Chikoku shisou na node isoide eki e hashirimasu.',
          meaningEn: 'I seem to be running late, so I hurry and run to the station.',
          meaningBn: 'দেরি হয়ে যাচ্ছে মনে হচ্ছে, তাই জলদি করে স্টেশনের দিকে দৌড়াচ্ছি।'
        },
        {
          ja: '雨が急に降り始めましたから傘を買いました।',
          romaji: 'Ame ga kyuu ni furihajimemashita kara kasa o kaimashita.',
          meaningEn: 'The rain suddenly started falling, so I bought an umbrella.',
          meaningBn: 'হঠাৎ বৃষ্টি শুরু হওয়ায় একটি ছাতা কিনেছি।'
        }
      ]
    },
    {
      id: 'l20-toku',
      kanji: '特',
      emoji: '⭐',
      strokeCount: 10,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'トク', romaji: 'toku' }],
        kunyomi: []
      },
      meanings: {
        en: 'Special, unique, particular',
        bn: 'বিশেষ, অনন্য, অসাধারণ'
      },
      vocab: [
        { kanji: '特別', kana: 'とくべつ', romaji: 'tokubetsu', meaningEn: 'special, unique', meaningBn: 'বিশেষ বা অনন্য', tag: 'N4' },
        { kanji: '特に', kana: 'とくに', romaji: 'tokuni', meaningEn: 'especially, particularly', meaningBn: 'বিশেষ করে', tag: 'N4' },
        { kanji: '特急', kana: 'とっきゅう', romaji: 'tokkyuu', meaningEn: 'limited express train', meaningBn: 'সীমিত এক্সপ্রেস ট্রেন (দ্রুততম)', tag: 'N3' },
        { kanji: '特徴', kana: 'とくちょう', romaji: 'tokuchou', meaningEn: 'characteristic, feature', meaningBn: 'বৈশিষ্ট্য', tag: 'N3' },
        { kanji: '特売', kana: 'とくばい', romaji: 'tokubai', meaningEn: 'special sale', meaningBn: 'বিশেষ মূল্যছাড়', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '日本の食べ物の中で、特に寿司が好きです।',
          romaji: 'Nihon no tabemono no naka de, tokuni sushi ga suki desu.',
          meaningEn: 'Among Japanese foods, I especially like sushi.',
          meaningBn: 'জাপানি খাবারের মধ্যে আমি বিশেষ করে সুশি পছন্দ করি।'
        },
        {
          ja: '旅行のときは普通電車ではなく特急に乗ります।',
          romaji: 'Ryokou no toki wa futsuu densha de wa naku tokkyuu ni norimasu.',
          meaningEn: 'When traveling, I ride the limited express instead of the local train.',
          meaningBn: 'ভ্রমণের সময় লোকাল ট্রেনের বদলে আমি দ্রুতগতির এক্সপ্রেস ট্রেনে চড়ি।'
        }
      ]
    },
    {
      id: 'l20-sen',
      kanji: '線',
      emoji: '🛤️',
      strokeCount: 15,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'セン', romaji: 'sen' }],
        kunyomi: []
      },
      meanings: {
        en: 'Line, track, wire',
        bn: 'লাইন, রেললাইন, রেখা'
      },
      vocab: [
        { kanji: '線路', kana: 'せんろ', romaji: 'senro', meaningEn: 'railway track', meaningBn: 'রেললাইন বা রেলট্র্যাক', tag: 'N3' },
        { kanji: '山手線', kana: 'やまのてせん', romaji: 'yamanotesen', meaningEn: 'Yamanote Line', meaningBn: 'ইয়ামানোতে লাইন (টোকিওর বৃত্তাকার ট্রেন লাইন)', tag: 'N4' },
        { kanji: '新幹線', kana: 'しんかんせん', romaji: 'shinkansen', meaningEn: 'bullet train', meaningBn: 'বুলেট ট্রেন', tag: 'N4' },
        { kanji: '下線', kana: 'かせん', romaji: 'kasen', meaningEn: 'underline', meaningBn: 'আন্ডারলাইন বা নিচের রেখা', tag: 'N3' },
        { kanji: '直線', kana: 'ちょくせん', romaji: 'chokusen', meaningEn: 'straight line', meaningBn: 'সরলরেখা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '新幹線に乗ると大阪までとても早く行けます।',
          romaji: 'Shinkansen ni noru to Oosaka made totemo hayaku ikemasu.',
          meaningEn: 'If you take the bullet train, you can go to Osaka very quickly.',
          meaningBn: 'বুলেট ট্রেনে চড়লে ওসাকা পর্যন্ত খুব দ্রুত যাওয়া যায়।'
        },
        {
          ja: '山手線は東京で一番便利な電車路線です।',
          romaji: 'Yamanotesen wa Toukyou de ichiban benri na densha rosen desu.',
          meaningEn: 'The Yamanote Line is the most convenient train route in Tokyo.',
          meaningBn: 'টোকিওর মধ্যে ইয়ামানোতে লাইন হলো সবচেয়ে আরামদায়ক ট্রেন রুট।'
        }
      ]
    },
    {
      id: 'l20-kai',
      kanji: '回',
      emoji: '🔄',
      strokeCount: 6,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'カイ', romaji: 'kai' }],
        kunyomi: [{ kana: 'まわ.る', romaji: 'mawa.ru' }, { kana: 'まわ.す', romaji: 'mawa.su' }]
      },
      meanings: {
        en: 'Times, round, revolve',
        bn: 'বার, ঘোরানো, আবর্তন'
      },
      vocab: [
        { kanji: '一回', kana: 'いっかい', romaji: 'ikkai', meaningEn: 'once, one time', meaningBn: 'একবার', tag: 'N5' },
        { kanji: '回る', kana: 'まわる', romaji: 'mawaru', meaningEn: 'to rotate, go around', meaningBn: 'ঘোরা', tag: 'N4' },
        { kanji: '回数券', kana: 'かいすうけん', romaji: 'kaisuuken', meaningEn: 'coupon ticket book', meaningBn: 'মাল্টিপল জার্নি টিকিট বুক', tag: 'N3' },
        { kanji: '今回', kana: 'こんかい', romaji: 'konkai', meaningEn: 'this time', meaningBn: 'এবার বা এইবার', tag: 'N4' },
        { kanji: '回復', kana: 'かいふく', romaji: 'kaifuku', meaningEn: 'recovery, healing', meaningBn: 'সুস্থ হয়ে ওঠা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'この薬は一日に三回、食後に飲んでください।',
          romaji: 'Kono kusuri wa ichinichi ni san-kai, shokugo ni nonde kudasai.',
          meaningEn: 'Please take this medicine three times a day, after meals.',
          meaningBn: 'এই ওষুধটি দিনে তিনবার, খাবারের পর সেবন করবেন।'
        },
        {
          ja: '今回のJLPT試験は合格したいです।',
          romaji: 'Konkai no JLPT shiken wa goukaku shitai desu.',
          meaningEn: 'I want to pass this time’s JLPT exam.',
          meaningBn: 'এবারের জেএলপিটি পরীক্ষায় আমি অবশ্যই পাস করতে চাই।'
        }
      ]
    },
    {
      id: 'l20-osoi',
      kanji: '遅',
      emoji: '🐢',
      strokeCount: 12,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'チ', romaji: 'chi' }],
        kunyomi: [{ kana: 'おそ.い', romaji: 'oso.i' }, { kana: 'おく.れる', romaji: 'oku.reru' }]
      },
      meanings: {
        en: 'Late, slow',
        bn: 'দেরি, ধীর, বিলম্বিত'
      },
      vocab: [
        { kanji: '遅い', kana: 'おそい', romaji: 'osoi', meaningEn: 'slow, late', meaningBn: 'ধীর বা দেরি', tag: 'N5' },
        { kanji: '遅れる', kana: 'おくれる', romaji: 'okureru', meaningEn: 'to be late', meaningBn: 'দেরি করা বা পিছিয়ে পড়া', tag: 'N4' },
        { kanji: '遅刻する', kana: 'ちこくする', romaji: 'chikoku suru', meaningEn: 'to arrive late', meaningBn: 'লেট করা বা দেরিতে পৌঁছানো', tag: 'N4' },
        { kanji: '遅延', kana: 'ちえん', romaji: 'chien', meaningEn: 'delay (train)', meaningBn: 'ট্রেন বিলম্ব বা বিলম্ব', tag: 'N3' },
        { kanji: '遅くまで', kana: 'おそくまで', romaji: 'osoku made', meaningEn: 'till late at night', meaningBn: 'অনেক রাত পর্যন্ত', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '大雪のために電車が三十分遅れました।',
          romaji: 'Ooyuki no tame ni densha ga sanjuppun okuremashita.',
          meaningEn: 'The train was delayed by 30 minutes due to heavy snow.',
          meaningBn: 'ভারী তুষারপাতের কারণে ট্রেন ৩০ মিনিট লেট করেছে।'
        },
        {
          ja: '約束の時間に遅れないように出発します।',
          romaji: 'Yakusoku no jikan ni okurenai you ni shuppatsu shimasu.',
          meaningEn: 'I will depart so as not to be late for the appointment time.',
          meaningBn: 'নির্ধারিত সময়ে যেন দেরি না হয়, সেভাবে রওনা হচ্ছি।'
        }
      ]
    },
    {
      id: 'l20-wasureru',
      kanji: '忘',
      emoji: '🧠',
      strokeCount: 7,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ボウ', romaji: 'bou' }],
        kunyomi: [{ kana: 'わす.れる', romaji: 'wasu.reru' }]
      },
      meanings: {
        en: 'Forget',
        bn: 'ভুলে যাওয়া'
      },
      vocab: [
        { kanji: '忘れる', kana: 'わすれる', romaji: 'wasureru', meaningEn: 'to forget', meaningBn: 'ভুলে যাওয়া', tag: 'N5' },
        { kanji: '忘れ物', kana: 'わすれもの', romaji: 'wasuremono', meaningEn: 'forgotten item', meaningBn: 'ফেলে আসা জিনিসপত্র', tag: 'N4' },
        { kanji: '忘年会', kana: 'ぼうねんかい', romaji: 'bounenkai', meaningEn: 'year-end party', meaningBn: 'বছর শেষের বিদায়ী উৎসব বা পার্টি', tag: 'N3' },
        { kanji: '見忘れる', kana: 'みわすれる', romaji: 'miwasureru', meaningEn: 'to forget having seen', meaningBn: 'দেখেও মনে না করতে পারা', tag: 'N3' },
        { kanji: '度忘れ', kana: 'どわすれ', romaji: 'dowasure', meaningEn: 'temporary slip of mind', meaningBn: 'সাময়িক ভুলে যাওয়া', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '電車の中に傘を忘れてしまいました।',
          romaji: 'Densha no naka ni kasa o wasurete shimaimashita.',
          meaningEn: 'I accidentally forgot my umbrella inside the train.',
          meaningBn: 'ট্রেনের ভেতরে আমি ছাতাটি ভুলে ফেলে এসেছি।'
        },
        {
          ja: '宿題を忘れないように、メモに書いておきます।',
          romaji: 'Shukudai o wasurenai you ni, memo ni kaite okimasu.',
          meaningEn: 'I write on a memo so as not to forget my homework.',
          meaningBn: 'বাড়ির কাজ যেন ভুলে না যাই, তাই নোটবুকে লিখে রাখছি।'
        }
      ]
    },
    {
      id: 'l20-matsu',
      kanji: '待',
      emoji: '⏳',
      strokeCount: 9,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'タイ', romaji: 'tai' }],
        kunyomi: [{ kana: 'ま.つ', romaji: 'ma.tsu' }]
      },
      meanings: {
        en: 'Wait, depend on',
        bn: 'অপেক্ষা করা'
      },
      vocab: [
        { kanji: '待つ', kana: 'まつ', romaji: 'matsu', meaningEn: 'to wait', meaningBn: 'অপেক্ষা করা', tag: 'N5' },
        { kanji: '待ち合わせ', kana: 'まちあわせ', romaji: 'machiawase', meaningEn: 'meeting up', meaningBn: 'দেখা করার অ্যাপয়েন্টমেন্ট', tag: 'N4' },
        { kanji: '待合室', kana: 'まちあいしつ', romaji: 'machiaishitsu', meaningEn: 'waiting room', meaningBn: 'অপেক্ষমাণ কক্ষ (স্টেশন/হাসপাতাল)', tag: 'N3' },
        { kanji: '期待する', kana: 'きたいする', romaji: 'kitai suru', meaningEn: 'to expect, hope', meaningBn: 'আশা বা প্রত্যাশা করা', tag: 'N3' },
        { kanji: '招待する', kana: 'しょうたいする', romaji: 'shoutai suru', meaningEn: 'to invite', meaningBn: 'আমন্ত্রণ জানানো', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '駅の改札口の前で友達を待っています।',
          romaji: 'Eki no kaisatsuguchi no mae de tomodachi o matte imasu.',
          meaningEn: 'I am waiting for my friend in front of the station ticket gate.',
          meaningBn: 'স্টেশনের টিকিট গেটের সামনে বন্ধুর জন্য অপেক্ষা করছি।'
        },
        {
          ja: '今日のご飯は、楽しみに待っていたカレーライスです।',
          romaji: 'Kyou no gohan wa, tanoshimi ni matteita kareeraisu desu.',
          meaningEn: 'Today’s meal is the curry rice I was waiting for with looking forward.',
          meaningBn: 'আজকের খাবার হলো আনন্দের সাথে অপেক্ষারত কারি রাইস।'
        }
      ]
    },
    {
      id: 'l20-toru',
      kanji: '取',
      emoji: '📥',
      strokeCount: 8,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'シュ', romaji: 'shu' }],
        kunyomi: [{ kana: 'と.る', romaji: 'to.ru' }]
      },
      meanings: {
        en: 'Take, fetch, obtain',
        bn: 'নেওয়া, তোলা, অর্জন করা'
      },
      vocab: [
        { kanji: '取る', kana: 'とる', romaji: 'toru', meaningEn: 'to take', meaningBn: 'নেওয়া বা ধরা', tag: 'N5' },
        { kanji: '取り消す', kana: 'とりけす', romaji: 'torikesu', meaningEn: 'to cancel', meaningBn: 'বাতিল করা', tag: 'N3' },
        { kanji: '受け取る', kana: 'うけとる', romaji: 'uketoru', meaningEn: 'to receive, accept', meaningBn: 'গ্রহণ করা বা রিসিভ করা', tag: 'N4' },
        { kanji: '書き取り', kana: 'かきとり', romaji: 'kakitori', meaningEn: 'dictation', meaningBn: 'শ্রুতিলেখক বা ডিকটেশন', tag: 'N4' },
        { kanji: '取得する', kana: 'しゅとくする', romaji: 'shutoku suru', meaningEn: 'to acquire, obtain', meaningBn: 'সার্টিফিকেট বা লাইসেন্স অর্জন করা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '宅急便の荷物を無事に受け取りました।',
          romaji: 'Takkyuubin no nimotsu o buji ni uketorimashita.',
          meaningEn: 'I safely received the courier package.',
          meaningBn: 'কুরিয়ার সার্ভিসের পার্সেলটি সহি-সালামত বুঝে পেয়েছি।'
        },
        {
          ja: 'ホテルの予約を取り消すには手数料がかかります।',
          romaji: 'Hoteru no yoyaku o torikesu ni wa tesuuryou ga kakarimasu.',
          meaningEn: 'To cancel a hotel reservation, a cancellation fee is required.',
          meaningBn: 'হোটেলের বুকিং বাতিল করতে হলে ক্যান্সলেশন ফি লাগবে।'
        }
      ]
    },
    {
      id: 'l20-kesu',
      kanji: '消',
      emoji: '🧹',
      strokeCount: 10,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ショウ', romaji: 'shou' }],
        kunyomi: [{ kana: 'き.える', romaji: 'ki.eru' }, { kana: 'け.す', romaji: 'ke.su' }]
      },
      meanings: {
        en: 'Extinguish, erase, turn off',
        bn: 'নেভানো, মুছে ফেলা, নিভে যাওয়া'
      },
      vocab: [
        { kanji: '消す', kana: 'けす', romaji: 'kesu', meaningEn: 'to turn off, erase', meaningBn: 'বন্ধ করা বা নেভানো/মুছা', tag: 'N5' },
        { kanji: '消しゴム', kana: 'けしゴム', romaji: 'keshigomu', meaningEn: 'eraser', meaningBn: 'রবার বা ইরেজার', tag: 'N5' },
        { kanji: '消える', kana: 'きえる', romaji: 'kieru', meaningEn: 'to disappear, turn off', meaningBn: 'নিভে যাওয়া বা হারিয়ে যাওয়া', tag: 'N4' },
        { kanji: '消費税', kana: 'しょうひぜい', romaji: 'shouhizei', meaningEn: 'consumption tax', meaningBn: 'ভ্যাট', tag: 'N3' },
        { kanji: '消防車', kana: 'しょうぼうしゃ', romaji: 'shoubousha', meaningEn: 'fire engine', meaningBn: 'দমকল বাহিনীর গাড়ি', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '部屋を出るときは電気を消してください।',
          romaji: 'Heya o deru toki wa denki o keshite kudasai.',
          meaningEn: 'Please turn off the lights when leaving the room.',
          meaningBn: 'ঘর থেকে বের হওয়ার সময় লাইট নিভিয়ে দেবেন।'
        },
        {
          ja: '間違えた言葉を消しゴムできれいに消します।',
          romaji: 'Machigaeta kotoba o keshigomu de kirei ni keshimasu.',
          meaningEn: 'I erase the mistaken words cleanly with an eraser.',
          meaningBn: 'ভুল শব্দগুলো রবার দিয়ে পরিষ্কারভাবে মুছে ফেলছি।'
        }
      ]
    },
    {
      id: 'l20-nokoru',
      kanji: '残',
      emoji: '🍲',
      strokeCount: 10,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ザン', romaji: 'zan' }],
        kunyomi: [{ kana: 'のこ.る', romaji: 'noko.ru' }, { kana: 'のこ.す', romaji: 'noko.su' }]
      },
      meanings: {
        en: 'Remainder, leftover, stay',
        bn: 'অবশিষ্ট থাকা, বাকি অংশ, রেখে যাওয়া'
      },
      vocab: [
        { kanji: '残る', kana: 'のこる', romaji: 'nokoru', meaningEn: 'to remain', meaningBn: 'অবশিষ্ট থাকা', tag: 'N4' },
        { kanji: '残す', kana: 'のこす', romaji: 'nokosu', meaningEn: 'to leave behind', meaningBn: 'রেখে যাওয়া', tag: 'N4' },
        { kanji: '残念な', kana: 'ざんねんな', romaji: 'zannen na', meaningEn: 'disappointing, regrettable', meaningBn: 'দুঃখজনক বা আফসোসজনক', tag: 'N4' },
        { kanji: '残業', kana: 'ざんぎょう', romaji: 'zangyou', meaningEn: 'overtime work', meaningBn: 'ওভারটাইম কাজ', tag: 'N3' },
        { kanji: '残高', kana: 'ざんだか', romaji: 'zandaka', meaningEn: 'bank balance', meaningBn: 'ব্যাংক একাউন্টের ব্যালেন্স', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '試験に一点足りなくて、とても残念でした।',
          romaji: 'Shiken ni ippen tarinakute, totemo zannen deshita.',
          meaningEn: 'I was one point short of passing the exam, which was very disappointing.',
          meaningBn: 'পরীক্ষায় মাত্র এক নম্বরের জন্য পাস করতে পারিনি, খুব আফসোসের বিষয়।'
        },
        {
          ja: 'ATMで現在の口座残高を確認します।',
          romaji: 'ATM de genzai no kouza zandaka o kakunin shimasu.',
          meaningEn: 'I check the current account balance at the ATM.',
          meaningBn: 'এটিএম বুথে গিয়ে ব্যাংক একাউন্টের বর্তমান ব্যালেন্স চেক করছি।'
        }
      ]
    },

    // --- Read Only (読める: 各駅停車, 暗証番号, 確認, 預ける) ---
    {
      id: 'l20-kakueki',
      kanji: '各駅停車',
      emoji: '🚉',
      strokeCount: 20,
      jlpt: 'N3',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'カクエキテイシャ', romaji: 'kakueki teisha' }],
        kunyomi: []
      },
      meanings: {
        en: 'Local train, stopping at every station',
        bn: 'লোকাল ট্রেন (সব স্টেশনে থামে)'
      },
      vocab: [
        { kanji: '各駅停車', kana: 'かくえきていしゃ', romaji: 'kakueki teisha', meaningEn: 'local train', meaningBn: 'লোকাল ট্রেন', tag: 'N3' },
        { kanji: '停車する', kana: 'ていしゃする', romaji: 'teisha suru', meaningEn: 'to stop vehicle', meaningBn: 'গাড়ি থামানো', tag: 'N4' }
      ],
      sentences: [
        {
          ja: '急行が止まらない駅なので、各駅停車に乗ります।',
          romaji: 'Kyuukou ga tomaranai eki na node, kakueki teisha ni norimasu.',
          meaningEn: 'Since it is a station where the express does not stop, I take the local train.',
          meaningBn: 'যেহেতু এই স্টেশনে এক্সপ্রেস ট্রেন থামে না, তাই আমি লোকাল ট্রেনে চড়েছি।'
        }
      ]
    },
    {
      id: 'l20-anshou',
      kanji: '暗証番号',
      emoji: '🔒',
      strokeCount: 25,
      jlpt: 'N3',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'アンショウバンゴウ', romaji: 'anshou bangou' }],
        kunyomi: []
      },
      meanings: {
        en: 'PIN code, password',
        bn: 'পিন কোড, পাসওয়ার্ড'
      },
      vocab: [
        { kanji: '暗証番号', kana: 'あんしょうばんごう', romaji: 'anshou bangou', meaningEn: 'personal identification number', meaningBn: 'গোপন পিন নম্বর', tag: 'N3' },
        { kanji: '番号', kana: 'ばんごう', romaji: 'bangou', meaningEn: 'number', meaningBn: 'নম্বর', tag: 'N5' }
      ],
      sentences: [
        {
          ja: 'カードを使うときは、暗証番号を入力してください।',
          romaji: 'Kaado o ukau toki wa, anshou bangou o nyuuryoku shite kudasai.',
          meaningEn: 'When using the card, please enter the PIN code.',
          meaningBn: 'কার্ড ব্যবহারের সময় দয়া করে গোপন পিন নম্বর টাইপ করবেন।'
        }
      ]
    },
    {
      id: 'l20-kakunin',
      kanji: '確認',
      emoji: '✔️',
      strokeCount: 15,
      jlpt: 'N3',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'カクニン', romaji: 'kakunin' }],
        kunyomi: []
      },
      meanings: {
        en: 'Confirmation, verification',
        bn: 'নিশ্চিত করা, যাচাই করা'
      },
      vocab: [
        { kanji: '確認する', kana: 'かくにんする', romaji: 'kakunin suru', meaningEn: 'to confirm', meaningBn: 'নিশ্চিত করা', tag: 'N3' },
        { kanji: '認める', kana: 'みとめる', romaji: 'mitomeru', meaningEn: 'to admit, approve', meaningBn: 'স্বীকার করা বা অনুমোদন দেওয়া', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '電車の出発時間をもう一度確認します।',
          romaji: 'Densha no shuppatsu jikan o mou ichido kakunin shimasu.',
          meaningEn: 'I will check the departure time of the train once more.',
          meaningBn: 'ট্রেন ছাড়ার সময়টি আমি আরও একবার মিলিয়ে নিচ্ছি।'
        }
      ]
    },
    {
      id: 'l20-azakeru',
      kanji: '預',
      emoji: '🏦',
      strokeCount: 13,
      jlpt: 'N3',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'ヨ', romaji: 'yo' }],
        kunyomi: [{ kana: 'あず.ける', romaji: 'azu.keru' }, { kana: 'あず.かる', romaji: 'azu.karu' }]
      },
      meanings: {
        en: 'Deposit, entrust, reserve',
        bn: 'জমা রাখা, আমানত রাখা, দায়িত্বে দেওয়া'
      },
      vocab: [
        { kanji: '預ける', kana: 'あずける', romaji: 'azukeru', meaningEn: 'to entrust, deposit', meaningBn: 'জমা দেওয়া বা গচ্ছিত রাখা', tag: 'N3' },
        { kanji: '預金する', kana: 'よきんする', romaji: 'yokin suru', meaningEn: 'to deposit money', meaningBn: 'ব্যাংকে টাকা সেভিংস করা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '旅行の前に、駅のコインロッカーに荷物を預けました।',
          romaji: '旅行の前に (Ryokou no mae ni), eki no koinrokkaa ni nimotsu o azukemashita.',
          meaningEn: 'Before traveling, I deposited my baggage in the station coin locker.',
          meaningBn: 'ভ্রমণের আগে স্টেশনের কয়েন লকারে আমার মালামালগুলো জমা রেখেছি।'
        }
      ]
    },

    // --- Visual Recognition (見て、分かる: 精算機, 訂正, 振込) ---
    {
      id: 'l20-seisanki',
      kanji: '精算機',
      emoji: '🤖',
      strokeCount: 16,
      jlpt: 'N3',
      category: 'visual_recognition',
      readings: {
        onyomi: [{ kana: 'セイサンキ', romaji: 'seisanki' }],
        kunyomi: []
      },
      meanings: {
        en: 'Fare adjustment machine',
        bn: 'ভাড়া সমন্বয় মেশিন (ট্রেন স্টেশন বা পার্কিং)'
      },
      vocab: [
        { kanji: '精算機', kana: 'せいさんき', romaji: 'seisanki', meaningEn: 'fare adjustment machine', meaningBn: 'ভাড়া সমন্বয়ের মেশিন', tag: 'N3' },
        { kanji: '計算する', kana: 'けいさんする', romaji: 'keisan suru', meaningEn: 'to calculate', meaningBn: 'হিসাব করা', tag: 'N4' }
      ],
      sentences: [
        {
          ja: 'チャージ残高が足りなかったので、精算機で支払いました।',
          romaji: 'Chaaji zandaka ga tarinakatta node, seisanki de shiharaimashita.',
          meaningEn: 'Since the IC card balance was insufficient, I paid at the fare adjustment machine.',
          meaningBn: 'কার্ডে ব্যালেন্স না থাকায় অ্যাডজাস্টমেন্ট মেশিনে অতিরিক্ত ভাড়া পরিশোধ করেছি।'
        }
      ]
    },
    {
      id: 'l20-teisei',
      kanji: '訂正',
      emoji: '🖍️',
      strokeCount: 12,
      jlpt: 'N3',
      category: 'visual_recognition',
      readings: {
        onyomi: [{ kana: 'テイセイ', romaji: 'teisei' }],
        kunyomi: []
      },
      meanings: {
        en: 'Correction, revision',
        bn: 'ভুল সংশোধন করা'
      },
      vocab: [
        { kanji: '訂正する', kana: 'ていせいする', romaji: 'teisei suru', meaningEn: 'to correct', meaningBn: 'সংশোধন করা', tag: 'N3' },
        { kanji: '正しい', kana: '正しい', romaji: 'tadashii', meaningEn: 'correct', meaningBn: 'সঠিক', tag: 'N5' }
      ],
      sentences: [
        {
          ja: '書類に誤りを見つけたので、赤ペンで訂正します।',
          romaji: 'Shorui ni ayamari o mitsuketa node, akapen de teisei shimasu.',
          meaningEn: 'Since I found an error in the document, I will correct it with a red pen.',
          meaningBn: 'কাগজে একটি ভুল খুঁজে পাওয়ায় লাল কলম দিয়ে সংশোধন করছি।'
        }
      ]
    },
    {
      id: 'l20-furikomi',
      kanji: '振込',
      emoji: '💸',
      strokeCount: 15,
      jlpt: 'N3',
      category: 'visual_recognition',
      readings: {
        onyomi: [{ kana: 'フリコミ', romaji: 'furikomi' }],
        kunyomi: []
      },
      meanings: {
        en: 'Bank transfer',
        bn: 'ব্যাংক ট্রান্সফার / ফান্ড ট্রান্সফার'
      },
      vocab: [
        { kanji: '振込', kana: 'ふりこみ', romaji: 'furikomi', meaningEn: 'bank transfer', meaningBn: 'ফান্ড ট্রান্সফার', tag: 'N3' },
        { kanji: '振り込む', kana: 'ふりこむ', romaji: 'furikomu', meaningEn: 'to transfer money', meaningBn: 'টাকা ব্যাংক অ্যাকাউন্টে পাঠানো', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '家賃を期日までに大家さんの口座に振込で支払いました।',
          romaji: 'Yachin o kijitsu made ni ooyasan no kouza ni furikomi de shiharaimashita.',
          meaningEn: 'I paid the rent by bank transfer to the landlord’s account before the due date.',
          meaningBn: 'শেষ তারিখের আগেই বাড়িওয়ালার একাউন্টে ব্যাংক ট্রান্সফারের মাধ্যমে ভাড়া পরিশোধ করেছি।'
        }
      ]
    }
  ]
};
