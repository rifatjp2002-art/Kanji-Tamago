import { Lesson } from '../types/kanji';

export const lesson24: Lesson = {
  id: 24,
  number: 24,
  titleJa: '働いているところで',
  titleRomaji: 'Hatarakite iru tokoro de',
  titleBn: 'কর্মক্ষেত্রে (At the Workplace - Office & Nature)',
  titleEn: 'At the Workplace (Office & Nature)',
  descriptionBn: 'জাপানে পার্ট-টাইম বা পূর্ণকালীন কাজের সময় পারস্পরিক যোগাযোগ, কাজের পদ্ধতি, ইমেল প্রত্যুত্তর এবং অফিসিয়াল ডকুমেন্টেশনের প্রয়োজনীয় কান্জি (足, 手, 元, 作, 返, 者, 林, 森, 山, 川)।',
  descriptionEn: 'Essential Kanji for communication at work, office duties, replying to messages, and business etiquette in Japan.',
  kanjiList: [
    // --- Main Kanji (書ける: 足, 手, 元, 作, 返, 者, 林, 森, 山, 川) ---
    {
      id: 'l24-ashi',
      kanji: '足',
      emoji: '👣',
      strokeCount: 7,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ソク', romaji: 'soku' }],
        kunyomi: [{ kana: 'あし', romaji: 'ashi' }, { kana: 'た.りる', romaji: 'ta.riru' }, { kana: 'た.す', romaji: 'ta.su' }]
      },
      meanings: {
        en: 'Leg, foot, be sufficient',
        bn: 'পা, পর্যাপ্ত হওয়া, যোগ করা'
      },
      vocab: [
        { kanji: '足', kana: 'あし', romaji: 'ashi', meaningEn: 'leg, foot', meaningBn: 'পা', tag: 'N5' },
        { kanji: '足りる', kana: 'たりる', romaji: 'tariru', meaningEn: 'to be sufficient', meaningBn: 'পর্যাপ্ত হওয়া', tag: 'N4' },
        { kanji: '一足', kana: 'いっそく', romaji: 'issoku', meaningEn: 'one pair (shoes)', meaningBn: 'এক জোড়া জুতো', tag: 'N4' },
        { kanji: '遠足', kana: 'えんそく', romaji: 'ensoku', meaningEn: 'school trip, picnic', meaningBn: 'শিক্ষা সফর', tag: 'N4' },
        { kanji: '手足', kana: 'てあし', romaji: 'teashi', meaningEn: 'hands and feet', meaningBn: 'হাত-পা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '仕事をがんばったので、足がとても疲れました।',
          romaji: 'Shigoto o ganbatta node, ashi ga totemo tsukaremashita.',
          meaningEn: 'I worked hard, so my legs became very tired.',
          meaningBn: 'কাজে প্রচুর পরিশ্রম করার কারণে আমার পা অনেক ক্লান্ত হয়ে গেছে।'
        },
        {
          ja: '今回のイベントの準備をするには、スタッフの人数が足りません।',
          romaji: 'Konkai no ibento no junbi o suru ni wa, sutaffu no ninzuu ga tarimasen.',
          meaningEn: 'The number of staff is not sufficient to prepare for this event.',
          meaningBn: 'এবারের ইভেন্টের প্রস্তুতির জন্য পর্যাপ্ত কর্মী নেই।'
        }
      ]
    },
    {
      id: 'l24-te',
      kanji: '手',
      emoji: '✋',
      strokeCount: 4,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'シュ', romaji: 'shu' }],
        kunyomi: [{ kana: 'て', romaji: 'te' }]
      },
      meanings: {
        en: 'Hand, worker, means',
        bn: 'হাত, কর্মী, উপায়'
      },
      vocab: [
        { kanji: '手', kana: 'て', romaji: 'te', meaningEn: 'hand', meaningBn: 'হাত', tag: 'N5' },
        { kanji: '手伝う', kana: 'てつだう', romaji: 'tetsudau', meaningEn: 'to help, assist', meaningBn: 'সাহায্য করা', tag: 'N5' },
        { kanji: '上手な', kana: 'じょうずな', romaji: 'jouzu na', meaningEn: 'skilled, good at', meaningBn: 'দক্ষ বা পারদর্শী', tag: 'N5' },
        { kanji: '下手な', kana: 'へたな', romaji: 'heta na', meaningEn: 'unskilled, bad at', meaningBn: 'অদক্ষ বা অপটু', tag: 'N5' },
        { kanji: '手続き', kana: 'てつづき', romaji: 'tetsuduki', meaningEn: 'procedure, formality', meaningBn: 'প্রশাসনিক কাজ বা ফর্মালিটি', tag: 'N4' }
      ],
      sentences: [
        {
          ja: '先輩、すみませんが、この重い箱を運ぶのを手伝ってください।',
          romaji: 'Senpai, sumimasen ga, kono omoi hako o hakobu no o tetsudatte kudasai.',
          meaningEn: 'Senior, excuse me, but please help me carry this heavy box.',
          meaningBn: 'সেনপাই, একটু শুনবেন, এই ভারী বাক্সটি বহন করতে আমাকে একটু সাহায্য করবেন কি?'
        },
        {
          ja: '仕事の前に、アルコールで手をきれいに消毒します।',
          romaji: 'Shigoto no mae ni, arukooru de te o kirei ni shoudoku shimasu.',
          meaningEn: 'Before working, I sanitize my hands cleanly with alcohol.',
          meaningBn: 'কাজ শুরু করার আগে অ্যালকোহল দিয়ে হাত দুটো ভালোভাবে জীবাণুমুক্ত করে নিই।'
        }
      ]
    },
    {
      id: 'l24-moto',
      kanji: '元',
      emoji: '🌱',
      strokeCount: 4,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ゲン', romaji: 'gen' }, { kana: 'ガン', romaji: 'gan' }],
        kunyomi: [{ kana: 'moto', romaji: 'moto' }]
      },
      meanings: {
        en: 'Origin, source, health',
        bn: 'উৎস, স্বাস্থ্য, গোড়া'
      },
      vocab: [
        { kanji: '元気な', kana: 'げんきな', romaji: 'genki na', meaningEn: 'healthy, energetic', meaningBn: 'সুস্থ বা কর্মচঞ্চল', tag: 'N5' },
        { kanji: '元日', kana: 'がんじつ', romaji: 'ganjitsu', meaningEn: 'New Year’s Day', meaningBn: 'নতুন বছরের প্রথম দিন (১লা জানুয়ারি)', tag: 'N4' },
        { kanji: '地元', kana: 'じもと', romaji: 'jimoto', meaningEn: 'local, hometown', meaningBn: 'নিজ এলাকার বা স্থানীয়', tag: 'N3' },
        { kanji: '足元', kana: 'あしもと', romaji: 'ashimoto', meaningEn: 'at one’s feet', meaningBn: 'পায়ের পাতা বা নিচে', tag: 'N3' },
        { kanji: '元々', kana: 'もともと', romaji: 'motomoto', meaningEn: 'originally, from the start', meaningBn: 'মূলত বা প্রথম থেকেই', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '職場の皆さんはいつも明るく元気にあいさつをします।',
          romaji: 'Shokuba no minasan wa itsumo akaruku genki ni aisatsu o shimasu.',
          meaningEn: 'Everyone at the workplace always greets cheerfully and energetically.',
          meaningBn: 'কর্মক্ষেত্রের সবাই সর্বদা হাসিমুখে ও সতেজভাবে অভিবাদন জানান।'
        },
        {
          ja: '階段が濡れているので、足元に気をつけて歩いてください।',
          romaji: 'Kaidan ga nurete iru node, ashimoto ni ki o tsukete aruite kudasai.',
          meaningEn: 'The stairs are wet, so please walk carefully watching your feet.',
          meaningBn: 'সিঁড়িগুলো ভেজা আছে, তাই নিচের দিকে খেয়াল রেখে সাবধানে হাঁটবেন।'
        }
      ]
    },
    {
      id: 'l24-tsuku',
      kanji: '作',
      emoji: '🛠️',
      strokeCount: 7,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'サク', romaji: 'saku' }, { kana: 'サ', romaji: 'sa' }],
        kunyomi: [{ kana: 'つく.る', romaji: 'tsuku.ru' }]
      },
      meanings: {
        en: 'Make, production, prepare',
        bn: 'তৈরি করা, সৃষ্টি করা, রান্না করা'
      },
      vocab: [
        { kanji: '作る', kana: 'つくる', romaji: 'tsukuru', meaningEn: 'to make, cook', meaningBn: 'তৈরি করা বা রান্না করা', tag: 'N5' },
        { kanji: '作文', kana: 'さくぶん', romaji: 'sakubun', meaningEn: 'essay', meaningBn: 'রচনা বা প্যারাগ্রাফ', tag: 'N5' },
        { kanji: '作品', kana: 'さくひん', romaji: 'sakuhin', meaningEn: 'artwork, creation', meaningBn: 'শিল্পকর্ম বা সৃষ্টি', tag: 'N4' },
        { kanji: '作業する', kana: 'さぎょうする', romaji: 'sagyou suru', meaningEn: 'to work, operate', meaningBn: 'কাজ করা (ম্যানুয়াল)', tag: 'N3' },
        { kanji: '手作り', kana: 'てづくり', romaji: 'tedukuri', meaningEn: 'handmade', meaningBn: 'হাতে তৈরি', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '明日の会議で使う大切な書類をパソコンで作成しています।',
          romaji: 'Ashita no kaigi de tsukau taisetsu na shorui o pasokon de sakusei shite imasu.',
          meaningEn: 'I am creating important documents for tomorrow’s meeting on the computer.',
          meaningBn: 'আগামীকালের মিটিংয়ে প্রয়োজনীয় গুরুত্বপূর্ণ ফাইলটি কম্পিউটারে তৈরি করছি।'
        },
        {
          ja: 'この工場では、毎日たくさんの新車が作られています।',
          romaji: 'Kono koujou de wa, mainichi takusan no shinsha ga tsukurarete imasu.',
          meaningEn: 'In this factory, many new cars are made every day.',
          meaningBn: 'এই ফ্যাক্টরিতে প্রতিদিন প্রচুর পরিমাণে নতুন গাড়ি প্রস্তুত করা হয়।'
        }
      ]
    },
    {
      id: 'l24-kaesu',
      kanji: '返',
      emoji: '↩️',
      strokeCount: 7,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ヘン', romaji: 'hen' }],
        kunyomi: [{ kana: 'かえ.す', romaji: 'kae.su' }, { kana: 'かえ.る', romaji: 'kae.ru' }]
      },
      meanings: {
        en: 'Return, restore, answer',
        bn: 'ফেরত দেওয়া, প্রত্যুত্তর করা'
      },
      vocab: [
        { kanji: '返す', kana: 'かえす', romaji: 'kaesu', meaningEn: 'to return (something)', meaningBn: 'ফেরত দেওয়া', tag: 'N5' },
        { kanji: '返事', kana: 'へんじ', romaji: 'henji', meaningEn: 'reply, answer', meaningBn: 'উত্তর বা সাড়া', tag: 'N5' },
        { kanji: '返却', kana: 'へんきゃく', romaji: 'henkyaku', meaningEn: 'returning borrowed items', meaningBn: 'ধার করা জিনিস ফেরত দেওয়া', tag: 'N3' },
        { kanji: '返還', kana: 'へんかん', romaji: 'henkan', meaningEn: 'restoration, return', meaningBn: 'ক্ষমতা বা অধিকার ফেরত দেওয়া', tag: 'N3' },
        { kanji: '返り咲き', kana: 'かえりざき', romaji: 'kaerizaki', meaningEn: 'comeback, resurgence', meaningBn: 'পুনরুজ্জীবন', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '事務所の鍵を使ったら、必ず受付へ返してください।',
          romaji: 'Jimusho no kagi o tsukattara, kanarazu uketsuke e kaeshite kudasai.',
          meaningEn: 'Once you use the office key, please make sure to return it to the reception.',
          meaningBn: 'অফিসের চাবিটি ব্যবহার শেষ হলে অবশ্যই রিসেপশনে ফেরত দিয়ে দেবেন।'
        },
        {
          ja: '取引先からのメールには、すぐに返事をするのがマナーです।',
          romaji: 'Torihikisaki kara no meeru ni wa, sugu ni henji o suru no ga manaa desu.',
          meaningEn: 'It is good manners to reply immediately to emails from business clients.',
          meaningBn: 'ব্যবসায়িক ক্লায়েন্টদের ইমেইলের দ্রুত উত্তর দেওয়া একটি অন্যতম ভালো ভদ্রতা।'
        }
      ]
    },
    {
      id: 'l24-mono',
      kanji: '者',
      emoji: '🧑‍💻',
      strokeCount: 8,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'シャ', romaji: 'sha' }],
        kunyomi: [{ kana: 'もの', romaji: 'mono' }]
      },
      meanings: {
        en: 'Person, someone',
        bn: 'ব্যক্তি, লোক (সম্মানসূচক ছাড়া)'
      },
      vocab: [
        { kanji: '医者', kana: 'いしゃ', romaji: 'isha', meaningEn: 'doctor', meaningBn: 'চিকিৎসক বা ডাক্তার', tag: 'N5' },
        { kanji: '学者', kana: 'がくしゃ', romaji: 'gakusha', meaningEn: 'scholar', meaningBn: 'শিক্ষাবিদ বা গবেষক', tag: 'N4' },
        { kanji: '若者', kana: 'わかもの', romaji: 'wakamono', meaningEn: 'young people', meaningBn: 'তরুণ প্রজন্ম', tag: 'N4' },
        { kanji: '担当者', kana: 'たんとうしゃ', romaji: 'tantousha', meaningEn: 'person in charge', meaningBn: 'দায়িত্বপ্রাপ্ত ব্যক্তি', tag: 'N3' },
        { kanji: '初心者', kana: 'しょしんしゃ', romaji: 'shoshinsha', meaningEn: 'beginner', meaningBn: 'নতুন বা শিক্ষানবিস', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '分からない問題があれば、プロジェクトの担当者に聞いてください।',
          romaji: 'Wakaranai mondai ga areba, purojekuto no tantousha ni kiite kudasai.',
          meaningEn: 'If you have questions you don’t understand, please ask the project lead.',
          meaningBn: 'কোনো অস্পষ্টতা থাকলে প্রজেক্টের দায়িত্বপ্রাপ্ত কর্মকর্তার কাছে জেনে নিবেন।'
        },
        {
          ja: 'このマニュアルはパソコンの初心者向けに優しく書かれています।',
          romaji: 'Kono manyuaru wa pasokon no shoshinsha muke ni yasashiku kakarete imasu.',
          meaningEn: 'This manual is written simply for computer beginners.',
          meaningBn: 'এই ম্যানুয়ালটি কম্পিউটার যারা নতুন শুরু করছে তাদের জন্য সহজভাবে লেখা।'
        }
      ]
    },
    {
      id: 'l24-hayashi',
      kanji: '林',
      emoji: '🌳',
      strokeCount: 8,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'リン', romaji: 'rin' }],
        kunyomi: [{ kana: 'はやし', romaji: 'hayashi' }]
      },
      meanings: {
        en: 'Grove, small forest',
        bn: 'ছোট জঙ্গল, বন'
      },
      vocab: [
        { kanji: '林', kana: 'はやし', romaji: 'hayashi', meaningEn: 'grove', meaningBn: 'ছোট জঙ্গল বা উদ্যান', tag: 'N4' },
        { kanji: '林業', kana: 'りんぎょう', romaji: 'ringyou', meaningEn: 'forestry', meaningBn: 'বনসম্পদ শিল্প', tag: 'N3' },
        { kanji: '山林', kana: 'さんりん', romaji: 'sanrin', meaningEn: 'mountain forest', meaningBn: 'পাহাড়ী বনভূমি', tag: 'N3' },
        { kanji: '松林', kana: 'まつばやし', romaji: 'matsubayashi', meaningEn: 'pine forest', meaningBn: 'পাইন বনের বাগান', tag: 'N3' },
        { kanji: '小林さん', kana: 'こばやしさん', romaji: 'kobayashi san', meaningEn: 'Mr./Ms. Kobayashi', meaningBn: 'কোবায়াশি সান (জাপানি পদবী)', tag: 'N5' }
      ],
      sentences: [
        {
          ja: '職場の窓から、緑豊かな静かな松林が見えます।',
          romaji: 'Shokuba no mado kara, midori yutaka na shizuka na matsubayashi ga miemasu.',
          meaningEn: 'From the office window, we can see a lush green and quiet pine grove.',
          meaningBn: 'অফিসের জানালা দিয়ে সবুজে ঘেরা চমৎকার পাইন বনের একাংশ দেখা যায়।'
        },
        {
          ja: '担当の小林さんは、仕事がとても早くて親切です।',
          romaji: 'Tantou no kobayashi san wa, shigoto ga totemo hayakute shinsetsu desu.',
          meaningEn: 'Kobayashi-san in charge is very fast and kind in working.',
          meaningBn: 'দায়িত্বে থাকা কোবায়াশি সান কাজে অত্যন্ত দ্রুত এবং ভীষণ দয়ালু।'
        }
      ]
    },
    {
      id: 'l24-mori',
      kanji: '森',
      emoji: '🌲',
      strokeCount: 12,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'シン', romaji: 'shin' }],
        kunyomi: [{ kana: 'もり', romaji: 'mori' }]
      },
      meanings: {
        en: 'Forest, deep woods',
        bn: 'ঘন জঙ্গল, গভীর অরণ্য'
      },
      vocab: [
        { kanji: '森', kana: 'もり', romaji: 'mori', meaningEn: 'forest', meaningBn: 'গভীর অরণ্য বা জঙ্গল', tag: 'N4' },
        { kanji: '森林', kana: 'しんりん', romaji: 'shinrin', meaningEn: 'forest land, woodland', meaningBn: 'ঘন বনভূমি', tag: 'N3' },
        { kanji: '青森県', kana: 'あおもりけん', romaji: 'aomori ken', meaningEn: 'Aomori prefecture', meaningBn: 'আওমোরি প্রিফেকচার (জাপানের রাজ্য)', tag: 'N4' },
        { kanji: '森の中', kana: 'もりのなか', romaji: 'mori no naka', meaningEn: 'in the forest', meaningBn: 'বনের ভেতরে', tag: 'N4' },
        { kanji: '森田さん', kana: 'もりたさん', romaji: 'morita san', meaningEn: 'Mr./Ms. Morita', meaningBn: 'মরিতা সান (পদবী)', tag: 'N5' }
      ],
      sentences: [
        {
          ja: '休日には都会を離れて、森の中をハイキングしてリフレッシュします।',
          romaji: 'Kyuujitsu ni wa tokai o hanarete, mori no naka o haikingu shite rifuresshu shimasu.',
          meaningEn: 'On holidays, I leave the city and hike in the forest to refresh.',
          meaningBn: 'ছুটির দিনে শহর ছেড়ে গভীর অরণ্যে হাইকিং করে মনকে সতেজ করি।'
        },
        {
          ja: '青森県は美味しいリンゴの産地として世界中に有名です।',
          romaji: 'Aomori-ken wa oishii ringo no sanchi to shite sekaijuu ni yuumei desu.',
          meaningEn: 'Aomori Prefecture is famous worldwide as a production site for delicious apples.',
          meaningBn: 'সুস্বাদু আপেল উৎপাদনের স্থান হিসেবে আওমোরি রাজ্য বিশ্বজুড়ে সুপরিচিত।'
        }
      ]
    },
    {
      id: 'l24-yama',
      kanji: '山',
      emoji: '⛰️',
      strokeCount: 3,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'サン', romaji: 'san' }],
        kunyomi: [{ kana: 'やま', romaji: 'yama' }]
      },
      meanings: {
        en: 'Mountain, hill',
        bn: 'পাহাড়, পর্বত'
      },
      vocab: [
        { kanji: '山', kana: 'やま', romaji: 'yama', meaningEn: 'mountain', meaningBn: 'পাহাড়', tag: 'N5' },
        { kanji: '富士山', kana: 'ふじさん', romaji: 'fujisan', meaningEn: 'Mount Fuji', meaningBn: 'মাউন্ট ফুজি', tag: 'N5' },
        { kanji: '山登り', kana: 'やまのぼり', romaji: 'yamanobori', meaningEn: 'mountain climbing', meaningBn: 'পাহাড়ে চড়া', tag: 'N4' },
        { kanji: '火山', kana: 'かざん', romaji: 'kazan', meaningEn: 'volcano', meaningBn: 'আগ্নেয়গিরি', tag: 'N4' },
        { kanji: '山川さん', kana: 'やまかわさん', romaji: 'yamakawa san', meaningEn: 'Mr./Ms. Yamakawa', meaningBn: 'ইয়ামাকাওয়া সান', tag: 'N5' }
      ],
      sentences: [
        {
          ja: 'いつか職場の仲間と一緒に富士山に登るのが夢です।',
          romaji: 'Itsuka shokuba no nakama to issho ni Fujisan ni noboru no ga yume desu.',
          meaningEn: 'It is my dream to climb Mount Fuji with my colleagues someday.',
          meaningBn: 'একদিন সহকর্মীদের নিয়ে মাউন্ট ফুজির চূড়ায় চড়ার স্বপ্ন দেখি।'
        },
        {
          ja: '日本の国土の約七十パーセントは山や森林です।',
          romaji: 'Nihon no kokudo no yaku nanajuu paasento wa yama ya shinrin desu.',
          meaningEn: 'About 70% of Japan’s land is mountains and forests.',
          meaningBn: 'জাপানের মূল ভূখণ্ডের প্রায় ৭০ শতাংশই হলো পাহাড় ও গভীর অরণ্য।'
        }
      ]
    },
    {
      id: 'l24-kawa',
      kanji: '川',
      emoji: '🌊',
      strokeCount: 3,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'セン', romaji: 'sen' }],
        kunyomi: [{ kana: 'かわ', romaji: 'kawa' }]
      },
      meanings: {
        en: 'River, stream',
        bn: 'নদী, ঝর্ণা'
      },
      vocab: [
        { kanji: '川', kana: 'かわ', romaji: 'kawa', meaningEn: 'river', meaningBn: 'নদী', tag: 'N5' },
        { kanji: '小川', kana: 'おがわ', romaji: 'ogawa', meaningEn: 'brook, stream', meaningBn: 'ছোট নদী বা খাল', tag: 'N4' },
        { kanji: '川沿い', kana: 'かわぞい', romaji: 'kawazoi', meaningEn: 'along the river', meaningBn: 'নদীর পাড় ঘেঁষে', tag: 'N3' },
        { kanji: '河川', kana: 'かせん', romaji: 'kasen', meaningEn: 'rivers, waterways', meaningBn: 'নদীসমূহ', tag: 'N3' },
        { kanji: '川口さん', kana: 'かわぐちさん', romaji: 'kawaguchi san', meaningEn: 'Mr./Ms. Kawaguchi', meaningBn: 'কাওয়াগুচি সান', tag: 'N5' }
      ],
      sentences: [
        {
          ja: '会社の帰りに、川沿いの綺麗な道を自転車で走ります।',
          romaji: 'Kaisha no kaeri ni, kawazoi no kirei na michi o jitensha de hashirimasu.',
          meaningEn: 'On my way home from work, I ride my bicycle along the beautiful path by the river.',
          meaningBn: 'অফিস থেকে ফেরার পথে নদীর পাড় ঘেঁষে চমৎকার রাস্তা দিয়ে সাইকেল চালাই।'
        },
        {
          ja: 'この川の水は山から流れてくるので冷たくて綺麗です।',
          romaji: 'Kono kawa no mizu wa yama kara nagarete kuru node tsumetaku te kirei desu.',
          meaningEn: 'The water of this river flows from the mountains, so it is cold and clean.',
          meaningBn: 'এই নদীর পানি পাহাড় থেকে নেমে আসায় বেশ ঠাণ্ডা ও স্বচ্ছ।'
        }
      ]
    },

    // --- Read Only (読める: 返信, ～様) ---
    {
      id: 'l24-henshin',
      kanji: '返信',
      emoji: '✉️',
      strokeCount: 16,
      jlpt: 'N3',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'ヘンシン', romaji: 'henshin' }],
        kunyomi: []
      },
      meanings: {
        en: 'Reply to message/email',
        bn: 'ইমেলের জবাব বা রিপ্লাই'
      },
      vocab: [
        { kanji: '返信する', kana: 'へんしんする', romaji: 'henshin suru', meaningEn: 'to reply to message', meaningBn: 'মেসেজের রিপ্লাই দেওয়া', tag: 'N3' },
        { kanji: '信じる', kana: 'しんじる', romaji: 'shinjiru', meaningEn: 'to believe', meaningBn: 'বিশ্বাস করা', tag: 'N4' }
      ],
      sentences: [
        {
          ja: '部長からいただいた指示のメールにすぐに返信をしました।',
          romaji: 'Buchou karaいただいた shiji no meeru ni sugu ni henshin o shimashita.',
          meaningEn: 'I immediately replied to the instruction email received from the department manager.',
          meaningBn: 'বিভাগীয় প্রধানের নির্দেশনামূলক ইমেইলের দ্রুত উত্তর দিয়েছি।'
        }
      ]
    },
    {
      id: 'l24-sama',
      kanji: '～様',
      emoji: '👑',
      strokeCount: 15,
      jlpt: 'N4',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'ヨウ', romaji: 'you' }],
        kunyomi: [{ kana: 'さま', romaji: 'sama' }]
      },
      meanings: {
        en: 'Mr./Ms. (highly polite suffix), state, manner',
        bn: 'সম্মানিত জনাব/মহোদয়'
      },
      vocab: [
        { kanji: 'お客様', kana: 'おきゃくさま', romaji: 'okyakusama', meaningEn: 'respected customer', meaningBn: 'সম্মানিত কাস্টমার বা অতিথি', tag: 'N4' },
        { kanji: '様子', kana: 'ようす', romaji: 'yousu', meaningEn: 'state, appearance', meaningBn: 'অবস্থা বা ভাবগতিক', tag: 'N4' },
        { kanji: '様々', kana: 'さまざま', romaji: 'samazama', meaningEn: 'various, diverse', meaningBn: 'নানাবিধ বা হরেক রকম', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'ビジネスメールを送るとき、相手の名前に必ず「～様」をつけます।',
          romaji: 'Bijinesu meeru o okuru toki, aite no namae ni kanarazu "sama" o tsukemasu.',
          meaningEn: 'When sending a business email, always attach "-sama" to the recipient’s name.',
          meaningBn: 'ব্যবসায়িক ইমেইল পাঠানোর সময় প্রাপকের নামের শেষে অবশ্যই সম্মানসূচক "সামা" যোগ করতে হয়।'
        }
      ]
    },

    // --- Visual Recognition (見て、分かる: 保存, 印刷) ---
    {
      id: 'l24-hozon',
      kanji: '保存',
      emoji: '💾',
      strokeCount: 15,
      jlpt: 'N3',
      category: 'visual_recognition',
      readings: {
        onyomi: [{ kana: 'ホゾン', romaji: 'hozon' }],
        kunyomi: []
      },
      meanings: {
        en: 'Save, preserve, store',
        bn: 'সংরক্ষণ করা, সেভ করা'
      },
      vocab: [
        { kanji: '保存する', kana: 'ほぞんする', romaji: 'hozon suru', meaningEn: 'to save, preserve', meaningBn: 'সেভ করা', tag: 'N3' },
        { kanji: '存在', kana: 'そんざい', romaji: 'sonzai', meaningEn: 'existence', meaningBn: 'অস্তিত্ব', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'パソコンがフリーズする前に、作成中のファイルを小まめに保存します।',
          romaji: 'Pasokon ga furiizu suru mae ni, sakuseichuu no fairu o komame ni hozon shimasu.',
          meaningEn: 'Before the computer freezes, I frequently save the file under creation.',
          meaningBn: 'কম্পিউটার হ্যাং হয়ে যাওয়ার আগেই তৈরিকৃত ফাইলটি ঘন ঘন সেভ করে রাখা উচিত।'
        }
      ]
    },
    {
      id: 'l24-insatsu',
      kanji: '印刷',
      emoji: '🖨️',
      strokeCount: 16,
      jlpt: 'N3',
      category: 'visual_recognition',
      readings: {
        onyomi: [{ kana: 'インサツ', romaji: 'insatsu' }],
        kunyomi: []
      },
      meanings: {
        en: 'Printing, printing press',
        bn: 'প্রিন্ট করা, মুদ্রণ করা'
      },
      vocab: [
        { kanji: '印刷する', kana: 'いんさつする', romaji: 'insatsu suru', meaningEn: 'to print', meaningBn: 'প্রিন্ট করা', tag: 'N3' },
        { kanji: '刷る', kana: 'する', romaji: 'suru', meaningEn: 'to print, copy', meaningBn: 'ছাপানো', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '会議で配る資料をオフィスのプリンターで印刷しました।',
          romaji: 'Kaigi de kubaru shiryou o ofisu no purintaa de insatsu shimashita.',
          meaningEn: 'I printed the materials to be distributed at the meeting on the office printer.',
          meaningBn: 'মিটিংয়ে বিতরণের জন্য প্রয়োজনীয় কাগজপত্র অফিসের প্রিন্টারে প্রিন্ট করেছি।'
        }
      ]
    }
  ]
};
