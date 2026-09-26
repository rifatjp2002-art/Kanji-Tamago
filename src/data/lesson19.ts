import { Lesson } from '../types/kanji';

export const lesson19: Lesson = {
  id: 19,
  number: 19,
  titleJa: '申し込んでみよう！',
  titleRomaji: 'Moushikonde miyou!',
  titleBn: 'আবেদন করা যাক! (Let\'s Apply - Events & Municipalities)',
  titleEn: 'Let\'s apply! (Events & Municipalities)',
  descriptionBn: 'জাপানে সিটি অফিস (役所), ইভেন্টে আবেদন, অংশগ্রহণ, এবং বিভিন্ন প্রশাসনিক ও আবাসিক তথ্যের প্রয়োজনীয় কান্জি (住, 所, 民, 役, 知, 問, 合, 定, 員, 無, 集, 友)।',
  descriptionEn: 'Essential Kanji for city office procedures, event applications, inquiries, and residence information in Japan.',
  kanjiList: [
    // --- Main Kanji (書ける: 住, 所, 民, 役, 知, 問, 合, 定, 員, 無, 集, 友) ---
    {
      id: 'l19-ju',
      kanji: '住',
      emoji: '🏠',
      strokeCount: 7,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ジュウ', romaji: 'juu' }],
        kunyomi: [{ kana: 'す.む', romaji: 'su.mu' }, { kana: 'す.まう', romaji: 'su.mau' }]
      },
      meanings: {
        en: 'Dwell, reside, live',
        bn: 'বাস করা, থাকা'
      },
      vocab: [
        { kanji: '住所', kana: 'じゅうしょ', romaji: 'juusho', meaningEn: 'address', meaningBn: 'ঠিকানা', tag: 'N4' },
        { kanji: '住む', kana: 'すむ', romaji: 'sumu', meaningEn: 'to live', meaningBn: 'বাস করা', tag: 'N5' },
        { kanji: '住民', kana: 'じゅうみん', romaji: 'juumin', meaningEn: 'resident', meaningBn: 'বাসিন্দা', tag: 'N3' },
        { kanji: '住宅', kana: 'じゅうたく', romaji: 'juutaku', meaningEn: 'housing, residence', meaningBn: 'আবাসিক বাড়িঘর', tag: 'N3' },
        { kanji: '衣食住', kana: 'いしょくじゅう', romaji: 'ishokuju', meaningEn: 'necessities of life', meaningBn: 'অন্ন, বস্ত্র, বাসস্থান', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '私は東京の静かな街に住んでいます।',
          romaji: 'Watashi wa Toukyou no shizuka na machi ni sunde imasu.',
          meaningEn: 'I live in a quiet town in Tokyo.',
          meaningBn: 'আমি টোকিওর একটি শান্ত এলাকায় বসবাস করি।'
        },
        {
          ja: 'ここに新しい住所と名前を書いてください।',
          romaji: 'Koko ni atarashii juusho to namae o kaite kudasai.',
          meaningEn: 'Please write your new address and name here.',
          meaningBn: 'এখানে আপনার নতুন ঠিকানা ও নাম লিখুন।'
        }
      ]
    },
    {
      id: 'l19-sho',
      kanji: '所',
      emoji: '📍',
      strokeCount: 8,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ショ', romaji: 'sho' }],
        kunyomi: [{ kana: 'ところ', romaji: 'tokoro' }]
      },
      meanings: {
        en: 'Place, spot, office',
        bn: 'স্থান, জায়গা, অফিস'
      },
      vocab: [
        { kanji: '場所', kana: 'ばしょ', romaji: 'basho', meaningEn: 'place', meaningBn: 'স্থান বা জায়গা', tag: 'N4' },
        { kanji: '住所', kana: 'じゅうしょ', romaji: 'juusho', meaningEn: 'address', meaningBn: 'ঠিকানা', tag: 'N4' },
        { kanji: '区役所', kana: 'くやくしょ', romaji: 'kuyakusho', meaningEn: 'ward office', meaningBn: 'ওয়ার্ড অফিস / সিটি অফিস', tag: 'N4' },
        { kanji: '事務所', kana: 'じむしょ', romaji: 'jimusho', meaningEn: 'office', meaningBn: 'অফিস বা কার্যালয়', tag: 'N4' },
        { kanji: '名所', kana: 'めいしょ', romaji: 'meisho', meaningEn: 'famous place', meaningBn: 'দর্শনীয় স্থান', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '待ち合わせの場所は駅の前です।',
          romaji: 'Machiawase no basho wa eki no mae desu.',
          meaningEn: 'The meeting place is in front of the station.',
          meaningBn: 'দেখা করার জায়গাটি স্টেশনের সামনে।'
        },
        {
          ja: '区役所で住所の変更手続きをします।',
          romaji: 'Kuyakusho de juusho no henkou tetsuduki o shimasu.',
          meaningEn: 'I complete address change procedures at the ward office.',
          meaningBn: 'ওয়ার্ড অফিসে ঠিকানা পরিবর্তনের ফর্ম পূরণ করছি।'
        }
      ]
    },
    {
      id: 'l19-min',
      kanji: '民',
      emoji: '👥',
      strokeCount: 5,
      jlpt: 'N3',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ミン', romaji: 'min' }],
        kunyomi: [{ kana: 'たみ', romaji: 'tami' }]
      },
      meanings: {
        en: 'People, nation, citizen',
        bn: 'জনগণ, নাগরিক, বাসিন্দা'
      },
      vocab: [
        { kanji: '住民', kana: 'じゅうみん', romaji: 'juumin', meaningEn: 'resident', meaningBn: 'বাসিন্দা', tag: 'N3' },
        { kanji: '国民', kana: 'こくみん', romaji: 'kokumin', meaningEn: 'citizen', meaningBn: 'দেশের নাগরিক', tag: 'N3' },
        { kanji: '市民', kana: 'しみん', romaji: 'shimin', meaningEn: 'city resident', meaningBn: 'শহরের বাসিন্দা', tag: 'N3' },
        { kanji: '民間', kana: 'みんかん', romaji: 'minkan', meaningEn: 'private sector', meaningBn: 'বেসরকারি খাত', tag: 'N3' },
        { kanji: '民主主義', kana: 'みんしゅしゅぎ', romaji: 'minshushugi', meaningEn: 'democracy', meaningBn: 'গণতন্ত্র', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '住民票を発行するために区役所へ来ました।',
          romaji: 'Juuminhyou o hakkou suru tame ni kuyakusho e kimashita.',
          meaningEn: 'I came to the ward office to issue my resident certificate.',
          meaningBn: 'রেসিডেন্স সার্টিফিকেট তুলতে ওয়ার্ড অফিসে এসেছি।'
        },
        {
          ja: '市民センターで日本語講座が開かれています।',
          romaji: 'Shimin sentaa de nihonngo kouza ga hirakarete imasu.',
          meaningEn: 'Japanese classes are held at the citizen center.',
          meaningBn: 'সিটিজেন সেন্টারে জাপানি ভাষার কোর্স হচ্ছে।'
        }
      ]
    },
    {
      id: 'l19-yaku',
      kanji: '役',
      emoji: '🏢',
      strokeCount: 7,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ヤク', romaji: 'yaku' }, { kana: 'エキ', romaji: 'eki' }],
        kunyomi: []
      },
      meanings: {
        en: 'Service, role, office',
        bn: 'দায়িত্ব, ভূমিকা, অফিস'
      },
      vocab: [
        { kanji: '区役所', kana: 'くやくしょ', romaji: 'kuyakusho', meaningEn: 'ward office', meaningBn: 'সিটি বা ওয়ার্ড অফিস', tag: 'N4' },
        { kanji: '市役所', kana: 'しやくしょ', romaji: 'shiyakusho', meaningEn: 'city hall', meaningBn: 'সিটি হল', tag: 'N4' },
        { kanji: '役立つ', kana: 'やくだつ', romaji: 'yakudatsu', meaningEn: 'to be useful', meaningBn: 'উপকারী হওয়া', tag: 'N3' },
        { kanji: '役割', kana: 'やくわり', romaji: 'yakuwari', meaningEn: 'role, duty', meaningBn: 'দায়িত্ব ও ভূমিকা', tag: 'N3' },
        { kanji: '役員', kana: 'やくいん', romaji: 'yakuin', meaningEn: 'executive officer', meaningBn: 'নির্বাহী কর্মকর্তা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '明日、市役所でビザの書類を受け取ります।',
          romaji: 'Ashita, shiyakusho de biza no shorui o uketorimasu.',
          meaningEn: 'Tomorrow I will receive visa documents at city hall.',
          meaningBn: 'আগামীকাল সিটি হল থেকে ভিসার কাগজপত্র সংগ্রহ করব।'
        },
        {
          ja: 'この辞書は日本語の勉強にとても役立ちます।',
          romaji: 'Kono jisho wa nihonngo no benkyou ni totemo yakudatimasu.',
          meaningEn: 'This dictionary is very useful for studying Japanese.',
          meaningBn: 'এই অভিধানটি জাপানি ভাষা শেখার জন্য খুব উপকারী।'
        }
      ]
    },
    {
      id: 'l19-chi',
      kanji: '知',
      emoji: '💡',
      strokeCount: 8,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'チ', romaji: 'chi' }],
        kunyomi: [{ kana: 'し.る', romaji: 'shi.ru' }]
      },
      meanings: {
        en: 'Know, wisdom',
        bn: 'জানা, জ্ঞান'
      },
      vocab: [
        { kanji: '知る', kana: 'しる', romaji: 'shiru', meaningEn: 'to know', meaningBn: 'জানা', tag: 'N5' },
        { kanji: '知り合い', kana: 'しりあい', romaji: 'shiriai', meaningEn: 'acquaintance', meaningBn: 'পরিচিত লোক', tag: 'N4' },
        { kanji: 'お知らせ', kana: 'おしらせ', romaji: 'oshirase', meaningEn: 'notice, announcement', meaningBn: 'বিজ্ঞপ্তি বা নোটিশ', tag: 'N4' },
        { kanji: '知識', kana: 'ちしき', romaji: 'chishiki', meaningEn: 'knowledge', meaningBn: 'জ্ঞান', tag: 'N3' },
        { kanji: '知知', kana: 'ちち', romaji: 'chichi', meaningEn: 'intelligence', meaningBn: 'বুদ্ধিমত্তা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'イベントのお知らせを掲示板で見ました।',
          romaji: 'Ibento no oshirase o keijiban de mimashita.',
          meaningEn: 'I saw the event notice on the bulletin board.',
          meaningBn: 'নোটিশ বোর্ডে ইভেন্টের নোটিশটি দেখেছি।'
        },
        {
          ja: '日本文化についての知識を深めたいです।',
          romaji: 'Nihon bunka ni tsuite no chishiki o fukametaidesu.',
          meaningEn: 'I want to deepen my knowledge about Japanese culture.',
          meaningBn: 'জাপানি সংস্কৃতি সম্পর্কে জ্ঞান বাড়াতে চাই।'
        }
      ]
    },
    {
      id: 'l19-mon',
      kanji: '問',
      emoji: '❓',
      strokeCount: 11,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'モン', romaji: 'mon' }],
        kunyomi: [{ kana: 'と.う', romaji: 'to.u' }]
      },
      meanings: {
        en: 'Question, inquiry, problem',
        bn: 'প্রশ্ন করা, অনুসন্ধান'
      },
      vocab: [
        { kanji: '質問', kana: 'しつもん', romaji: 'shitsumon', meaningEn: 'question', meaningBn: 'প্রশ্ন', tag: 'N5' },
        { kanji: '問題', kana: 'もんだい', romaji: 'mondai', meaningEn: 'problem, question', meaningBn: 'সমস্যা বা প্রশ্নপত্র', tag: 'N5' },
        { kanji: '問い合わせ', kana: 'といあわせ', romaji: 'toiawase', meaningEn: 'inquiry', meaningBn: 'অনুসন্ধান / যোগাযোগ', tag: 'N3' },
        { kanji: '疑問', kana: 'ぎもん', romaji: 'gimon', meaningEn: 'doubt, question', meaningBn: 'সন্দেহ বা খটকা', tag: 'N3' },
        { kanji: '訪問', kana: 'ほうもん', romaji: 'houmon', meaningEn: 'visiting', meaningBn: 'পরিদর্শন করা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '分からない点があればメールでお問い合わせください।',
          romaji: 'Wakaranai ten ga areba meeru de otoiawase kudasai.',
          meaningEn: 'If there are points you don’t understand, please inquire by email.',
          meaningBn: 'বুঝতে সমস্যা থাকলে ইমেইলে যোগাযোগ করুন।'
        },
        {
          ja: '試験の問題を落ち着いて解きます।',
          romaji: 'Shiken no mondai o ochitsuite tokimasu.',
          meaningEn: 'I calmly solve the exam questions.',
          meaningBn: 'পরীক্ষার প্রশ্নগুলো মাথা ঠাণ্ডা রেখে সমাধান করছি।'
        }
      ]
    },
    {
      id: 'l19-gou',
      kanji: '合',
      emoji: '🤝',
      strokeCount: 6,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ゴウ', romaji: 'gou' }],
        kunyomi: [{ kana: 'あ.う', romaji: 'a.u' }, { kana: 'あ.わせる', romaji: 'a.waseru' }]
      },
      meanings: {
        en: 'Fit, join, suit, combine',
        bn: 'মিলিত হওয়া, মানানসই হওয়া'
      },
      vocab: [
        { kanji: '試合', kana: 'しあい', romaji: 'shiai', meaningEn: 'match, game', meaningBn: 'খেলার ম্যাচ', tag: 'N4' },
        { kanji: '場合', kana: 'ばあい', romaji: 'baai', meaningEn: 'case, situation', meaningBn: 'ক্ষেত্র / অবস্থা', tag: 'N4' },
        { kanji: '間に合う', kana: 'まニアう', romaji: 'maniau', meaningEn: 'to be in time', meaningBn: 'সময়ে পৌঁছানো', tag: 'N4' },
        { kanji: '合格', kana: 'ごうかく', romaji: 'goukaku', meaningEn: 'passing an exam', meaningBn: 'পরীক্ষায় পাস করা', tag: 'N3' },
        { kanji: '都合', kana: 'つごう', romaji: 'tsugou', meaningEn: 'convenience, schedule', meaningBn: 'সুযোগ-সুবিধা বা সময়', tag: 'N4' }
      ],
      sentences: [
        {
          ja: '明日の午後はご都合がいいですか।',
          romaji: 'Ashita no gogo wa gotsugou ga ii desu ka.',
          meaningEn: 'Is tomorrow afternoon convenient for you?',
          meaningBn: 'আগামীকাল বিকেলে কি আপনার সুবিধা হবে?'
        },
        {
          ja: '電車の事故で約束の時間に間に合いませんでした।',
          romaji: 'Densha no jiko de yakusoku no jikan ni maniaimasen deshita.',
          meaningEn: 'Because of a train accident, I couldn’t make it in time for the appointment.',
          meaningBn: 'ট্রেন দুর্ঘটনার কারণে নির্ধারিত সময়ে পৌঁছাতে পারিনি।'
        }
      ]
    },
    {
      id: 'l19-tei',
      kanji: '定',
      emoji: '📌',
      strokeCount: 8,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'テイ', romaji: 'tei' }, { kana: 'ジョウ', romaji: 'jou' }],
        kunyomi: [{ kana: 'さだ.める', romaji: 'sadameru' }]
      },
      meanings: {
        en: 'Fix, decide, establish',
        bn: 'স্থির করা, নির্দিষ্ট করা'
      },
      vocab: [
        { kanji: '予定', kana: 'よてい', romaji: 'yotei', meaningEn: 'plan, schedule', meaningBn: 'পরিকল্পনা', tag: 'N5' },
        { kanji: '定員', kana: 'ていいん', romaji: 'teiin', meaningEn: 'capacity, quota', meaningBn: 'নির্ধারিত আসনসংখ্যা', tag: 'N3' },
        { kanji: '定期券', kana: 'ていきけん', romaji: 'teikiken', meaningEn: 'commuter pass', meaningBn: 'মান্থলি পাস (ট্রেন)', tag: 'N3' },
        { kanji: '定休日', kana: 'ていきゅうび', romaji: 'teikyuubi', meaningEn: 'regular holiday', meaningBn: 'সাপ্তাহিক বন্ধের দিন', tag: 'N3' },
        { kanji: '決定', kana: 'けってい', romaji: 'kettei', meaningEn: 'decision', meaningBn: 'সিদ্ধান্ত', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'この講座의定員は３０名ですのでお早めにお申し込みください।',
          romaji: 'Kono kouza no teiin wa sanjuu-mei desu node ohayame ni omoushikomi kudasai.',
          meaningEn: 'The capacity for this course is 30 people, so please apply early.',
          meaningBn: 'কোর্সটির আসনসংখ্যা ৩০ জন, তাই দ্রুত আবেদন করুন।'
        },
        {
          ja: '通学のために６ヶ月の定期券を買いました।',
          romaji: 'Tsuugaku no tame ni rokkagetsu no teikiken o kaimashita.',
          meaningEn: 'I bought a 6-month commuter pass for attending school.',
          meaningBn: 'যাতায়াতের জন্য ৬ মাসের ট্রেনের পিরিয়ডিক্যাল পাস কিনেছি।'
        }
      ]
    },
    {
      id: 'l19-in',
      kanji: '員',
      emoji: '🧑‍💼',
      strokeCount: 10,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'イン', romaji: 'in' }],
        kunyomi: []
      },
      meanings: {
        en: 'Member, staff, personnel',
        bn: 'সদস্য, কর্মী'
      },
      vocab: [
        { kanji: '会社員', kana: 'かいしゃいん', romaji: 'kaishain', meaningEn: 'company employee', meaningBn: 'কোম্পানি কর্মী', tag: 'N5' },
        { kanji: '店員', kana: 'てんいん', romaji: 'tenin', meaningEn: 'store clerk', meaningBn: 'দোকান কর্মী', tag: 'N5' },
        { kanji: '会員', kana: 'かいいん', romaji: 'kaiin', meaningEn: 'member', meaningBn: 'সদস্য', tag: 'N3' },
        { kanji: '公務員', kana: 'こうむいん', romaji: 'koumuin', meaningEn: 'civil servant', meaningBn: 'सरकारी চাকরিজীবী', tag: 'N3' },
        { kanji: '全員', kana: 'ぜんいん', romaji: 'zenin', meaningEn: 'everyone, all members', meaningBn: 'সকলেই / সকল সদস্য', tag: 'N4' }
      ],
      sentences: [
        {
          ja: '会員登録をするとポイントが貯まります।',
          romaji: 'Kaiin touroku o suru to pointo ga tamarimasu.',
          meaningEn: 'If you register as a member, you earn points.',
          meaningBn: 'মেম্বারশিপ রেজিস্টার করলে পয়েন্ট জমা হবে।'
        },
        {
          ja: '会議には全員が出席しました।',
          romaji: 'Kaigi ni wa zenin ga shusseki shimashita.',
          meaningEn: 'Everyone attended the meeting.',
          meaningBn: 'মিटिंगয়ে সমস্ত সদস্য উপস্থিত ছিলেন।'
        }
      ]
    },
    {
      id: 'l19-mu',
      kanji: '無',
      emoji: '🆓',
      strokeCount: 12,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ム', romaji: 'mu' }, { kana: 'ブ', romaji: 'bu' }],
        kunyomi: [{ kana: 'な.い', romaji: 'na.i' }]
      },
      meanings: {
        en: 'Nothing, free, lack',
        bn: 'নেই, বিনামূল্যে, শূন্য'
      },
      vocab: [
        { kanji: '無料', kana: 'むりょう', romaji: 'muryou', meaningEn: 'free of charge', meaningBn: 'বিনামূল্যে', tag: 'N3' },
        { kanji: '無駄', kana: 'むだ', romaji: 'muda', meaningEn: 'waste, futile', meaningBn: 'অপচয় / বৃথা', tag: 'N3' },
        { kanji: '無事', kana: 'ぶじ', romaji: 'buji', meaningEn: 'safe, accident-free', meaningBn: 'নিরাপদ বা সহি-সালামত', tag: 'N3' },
        { kanji: '無理', kana: 'むり', romaji: 'muri', meaningEn: 'impossible, overdoing', meaningBn: 'অসম্ভব বা জোর করা', tag: 'N4' },
        { kanji: '無休', kana: 'むきゅう', romaji: 'mukyuu', meaningEn: 'no holidays', meaningBn: 'সাপ্তাহিক বন্ধ ছাড়া খোলা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'この交流会は参加費が無料です।',
          romaji: 'Kono kouryuukai wa sankahi ga muryou desu.',
          meaningEn: 'Participation in this exchange event is free.',
          meaningBn: 'এই মিলনমেলায় অংশগ্রহণ সম্পূর্ণ ফ্রি।'
        },
        {
          ja: '台風が来ましたが無事に家へ帰れました।',
          romaji: 'Taifuu ga kimashita ga buji ni ie e kaeremashita.',
          meaningEn: 'A typhoon came, but I returned home safely.',
          meaningBn: 'টাইফুন আসা সত্ত্বেও নিরাপদে বাড়ি ফিরতে পেরেছি।'
        }
      ]
    },
    {
      id: 'l19-shuu',
      kanji: '集',
      emoji: '📚',
      strokeCount: 12,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'シュウ', romaji: 'shuu' }],
        kunyomi: [{ kana: 'あつ.まる', romaji: 'atsumaru' }, { kana: 'あつ.める', romaji: 'atsumeru' }]
      },
      meanings: {
        en: 'Gather, collect, assemble',
        bn: 'একত্র করা, জমা করা'
      },
      vocab: [
        { kanji: '集まる', kana: 'あつまる', romaji: 'atsumaru', meaningEn: 'to gather', meaningBn: 'জড়ো হওয়া', tag: 'N4' },
        { kanji: '集める', kana: 'あつめる', romaji: 'atsumeru', meaningEn: 'to collect', meaningBn: 'সংগ্রহ করা', tag: 'N4' },
        { kanji: '集中', kana: 'しゅうちゅう', romaji: 'shuuchuu', meaningEn: 'concentration', meaningBn: 'একমনে মনোযোগ দেওয়া', tag: 'N3' },
        { kanji: '募集', kana: 'ぼしゅう', romaji: 'boshuu', meaningEn: 'recruitment', meaningBn: 'নিয়োগ বা আবেদন আহ্বান', tag: 'N3' },
        { kanji: '集会', kana: 'しゅうかい', romaji: 'shuukai', meaningEn: 'assembly', meaningBn: 'सभा বা সমাবেশ', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '明日の朝９時にロビーに集合してください।',
          romaji: 'Ashita no asa ku-ji ni robii ni shuugou shite kudasai.',
          meaningEn: 'Please assemble in the lobby at 9 AM tomorrow.',
          meaningBn: 'আগামীকাল সকাল ৯টায় লবিতে সবাই জড়ো হবেন।'
        },
        {
          ja: '新しいアルバイトを募集しています।',
          romaji: 'Atarashii arubaito o boshuu shite imasu.',
          meaningEn: 'We are recruiting new part-time workers.',
          meaningBn: 'নতুন খণ্ডকালীন কর্মী নিয়োগ দেওয়া হচ্ছে।'
        }
      ]
    },
    {
      id: 'l19-tomo',
      kanji: '友',
      emoji: '🤝',
      strokeCount: 4,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ユウ', romaji: 'yuu' }],
        kunyomi: [{ kana: 'とも', romaji: 'tomo' }]
      },
      meanings: {
        en: 'Friend',
        bn: 'বন্ধু'
      },
      vocab: [
        { kanji: '友達', kana: 'ともだち', romaji: 'tomodachi', meaningEn: 'friend', meaningBn: 'বন্ধু', tag: 'N5' },
        { kanji: '友人', kana: 'ゆうじん', romaji: 'yuujin', meaningEn: 'friend (formal)', meaningBn: 'বন্ধু (আনুষ্ঠানিক)', tag: 'N3' },
        { kanji: '友情', kana: 'ゆうじょう', romaji: 'yuujou', meaningEn: 'friendship', meaningBn: 'বন্ধুত্ব', tag: 'N3' },
        { kanji: '親友', kana: 'しんゆう', romaji: 'shinyuu', meaningEn: 'best friend', meaningBn: 'ঘনিষ্ঠ বা সেরা বন্ধু', tag: 'N3' },
        { kanji: '友愛', kana: 'ゆうあい', romaji: 'yuuai', meaningEn: 'fraternity', meaningBn: 'সৌহার্দ্য', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '休日に親友と一緒に買い物を楽しみました।',
          romaji: 'Kyuujitsu ni shinyuu to issho ni kaimono o tanoshimashita.',
          meaningEn: 'I enjoyed shopping with my best friend on the weekend.',
          meaningBn: 'ছুটির দিনে সেরা বন্ধুর সাথে কেনাকাটা উপভোগ করেছি।'
        },
        {
          ja: '日本でたくさんの良い友人ができました।',
          romaji: 'Nihon de takusan no yoi yuujin ga dekimashita.',
          meaningEn: 'I made many good friends in Japan.',
          meaningBn: 'জাপানে আমার অনেক ভালো বন্ধু তৈরি হয়েছে।'
        }
      ]
    },

    // --- Read Only (読める: 申し込み, 参加, 他) ---
    {
      id: 'l19-moushikomi',
      kanji: '申込',
      emoji: '✍️',
      strokeCount: 9,
      jlpt: 'N3',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'モウシコミ', romaji: 'moushikomi' }],
        kunyomi: []
      },
      meanings: {
        en: 'Application, entry, proposal',
        bn: 'আবেদন করা, ফর্ম পূরণ'
      },
      vocab: [
        { kanji: '申し込み', kana: 'もうしこみ', romaji: 'moushikomi', meaningEn: 'application', meaningBn: 'আবেদন', tag: 'N3' },
        { kanji: '申し込む', kana: 'もうしこむ', romaji: 'moushikomu', meaningEn: 'to apply', meaningBn: 'আবেদন পাঠানো', tag: 'N3' },
        { kanji: '申込書', kana: 'もうしこみしょ', romaji: 'moushikomisho', meaningEn: 'application form', meaningBn: 'আবেদন ফর্ম', tag: 'N3' },
        { kanji: '申込期間', kana: 'もうしこみきかん', romaji: 'moushikomi kikan', meaningEn: 'application period', meaningBn: 'আবেদনের সময়সীমা', tag: 'N3' },
        { kanji: '申告', kana: 'しんこく', romaji: 'shinkoku', meaningEn: 'declaration', meaningBn: 'ট্যাক্স বা তথ্যের ঘোষণা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'ホームページから講座の申し込みができます।',
          romaji: 'Houmupeeji kara kouza no moushikomi ga dekimasu.',
          meaningEn: 'You can apply for the course from the homepage.',
          meaningBn: 'ওয়েবসাইট থেকে কোর্সের জন্য সরাসরি আবেদন করতে পারবেন।'
        },
        {
          ja: '申込書に必要な事項を記入してください।',
          romaji: 'Moushikomisho ni hitsuyou na jiikou o kinuu shite kudasai.',
          meaningEn: 'Please fill in the necessary items on the application form.',
          meaningBn: 'আবেদন ফর্মে প্রয়োজনীয় তথ্যগুলো পূরণ করুন।'
        }
      ]
    },
    {
      id: 'l19-sanka',
      kanji: '参加',
      emoji: '🙋‍♂️',
      strokeCount: 11,
      jlpt: 'N4',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'サンカ', romaji: 'sanka' }],
        kunyomi: []
      },
      meanings: {
        en: 'Participation, joining',
        bn: 'অংশগ্রহণ করা'
      },
      vocab: [
        { kanji: '参加', kana: 'さんか', romaji: 'sanka', meaningEn: 'participation', meaningBn: 'অংশগ্রহণ', tag: 'N4' },
        { kanji: '参加者', kana: 'さんかしゃ', romaji: 'sankasha', meaningEn: 'participant', meaningBn: 'অংশগ্রহণকারী', tag: 'N3' },
        { kanji: '参加費', kana: 'さんかひ', romaji: 'sankahi', meaningEn: 'participation fee', meaningBn: 'এন্ট্রি ফি', tag: 'N3' },
        { kanji: '加える', kana: 'くわえる', romaji: 'kuwaeru', meaningEn: 'to add', meaningBn: 'যুক্ত করা', tag: 'N3' },
        { kanji: '増加', kana: 'ぞうか', romaji: 'zouka', meaningEn: 'increase', meaningBn: 'বৃদ্ধি পাওয়া', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '地域のボランティア活動に参加します।',
          romaji: 'Chiiki no borantia katsudou ni sanka shimasu.',
          meaningEn: 'I will participate in local volunteer activities.',
          meaningBn: 'এলাকার স্বেচ্ছাসেবামূলক কর্মকাণ্ডে অংশ নেব।'
        },
        {
          ja: '参加希望者は前日までに連絡してください।',
          romaji: 'Sanka kibousha wa zenjitsu made ni renraku shite kudasai.',
          meaningEn: 'Those wishing to participate, please contact us by the previous day.',
          meaningBn: 'অংশগ্রহণে ইচ্ছুকগণ আগের দিনের মধ্যে যোগাযোগ করবেন।'
        }
      ]
    },
    {
      id: 'l19-hoka',
      kanji: '他',
      emoji: '🔀',
      strokeCount: 5,
      jlpt: 'N3',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'タ', romaji: 'ta' }],
        kunyomi: [{ kana: 'ほか', romaji: 'hoka' }]
      },
      meanings: {
        en: 'Other, another, besides',
        bn: 'অন্যান্য, অন্য'
      },
      vocab: [
        { kanji: '他', kana: 'ほか', romaji: 'hoka', meaningEn: 'other', meaningBn: 'অন্য', tag: 'N4' },
        { kanji: '他人', kana: 'たにん', romaji: 'tanin', meaningEn: 'stranger, other people', meaningBn: 'পরের লোক বা পরশ্রী', tag: 'N3' },
        { kanji: 'その他', kana: 'そのた', romaji: 'sonota', meaningEn: 'others, and so on', meaningBn: 'ইত্যাদি / অন্যান্য', tag: 'N3' },
        { kanji: '他国', kana: 'たこく', romaji: 'takoku', meaningEn: 'other countries', meaningBn: 'অন্য দেশ', tag: 'N3' },
        { kanji: '排他', kana: 'はいた', romaji: 'haita', meaningEn: 'exclusion', meaningBn: 'বর্জন করা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '他にご質問や不明な点はございませんか।',
          romaji: 'Hoka ni goshitsumon ya fumei na ten wa gozaimen ka.',
          meaningEn: 'Do you have any other questions or points that are unclear?',
          meaningBn: 'আর কোনো প্রশ্ন বা অস্পষ্ট বিষয় আছে কি?'
        },
        {
          ja: '他人の迷惑にならないように行動しましょう।',
          romaji: 'Tanin no meiwaku ni naranai you ni koudou shimashou.',
          meaningEn: 'Let’s act so as not to cause trouble to others.',
          meaningBn: 'অন্য কারো বিরক্তির কারণ না হয়ে যেন চলাফেরা করি।'
        }
      ]
    },

    // --- Visual Recognition (見て、分かる: ～費, 在住, 在学, 在勤) ---
    {
      id: 'l19-hi',
      kanji: '～費',
      emoji: '💴',
      strokeCount: 15,
      jlpt: 'N3',
      category: 'visual_recognition',
      readings: {
        onyomi: [{ kana: 'ヒ', romaji: 'hi' }],
        kunyomi: []
      },
      meanings: {
        en: 'Expense, cost, fee',
        bn: 'খরচ, ফি, ব্যয়'
      },
      vocab: [
        { kanji: '学費', kana: 'がくひ', romaji: 'gakuhi', meaningEn: 'tuition fee', meaningBn: 'পড়াশোনার খরচ', tag: 'N3' },
        { kanji: '会費', kana: 'かいひ', romaji: 'kaihi', meaningEn: 'membership fee', meaningBn: 'সদস্য ফি', tag: 'N3' },
        { kanji: '交通費', kana: 'こうつうひ', romaji: 'koutsuuhi', meaningEn: 'travel expenses', meaningBn: 'যাতায়াত খরচ', tag: 'N3' },
        { kanji: '食費', kana: 'しょくひ', romaji: 'shokuhi', meaningEn: 'food cost', meaningBn: 'খাবারের খরচ', tag: 'N3' },
        { kanji: '生活費', kana: 'せいかつひ', romaji: 'seikatsuhi', meaningEn: 'living cost', meaningBn: 'জীবনযাত্রার খরচ', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'アルバイトの給料で学費と生活費を払っています।',
          romaji: 'Arubaito no kyuuryou de gakuhi to seikatsuhi o haraatte imasu.',
          meaningEn: 'I pay tuition and living expenses with my part-time job salary.',
          meaningBn: 'খণ্ডকালীন চাকরির আয় দিয়ে পড়াশোনা ও জীবিকার খরচ চালাই।'
        },
        {
          ja: '会社から交通費が全額支給されます।',
          romaji: 'Kaisha kara koutsuuhi ga zengaku shikyuu saremasu.',
          meaningEn: 'Transportation expenses are fully covered by the company.',
          meaningBn: 'কোম্পানি থেকে যাতায়াত খরচের পুরো টাকা দেওয়া হয়।'
        }
      ]
    },
    {
      id: 'l19-zaijuu',
      kanji: '在住',
      emoji: '🏙️',
      strokeCount: 14,
      jlpt: 'N3',
      category: 'visual_recognition',
      readings: {
        onyomi: [{ kana: 'ザイジュウ', romaji: 'zaijuu' }],
        kunyomi: []
      },
      meanings: {
        en: 'Residing in, resident',
        bn: 'বসবাসকারী'
      },
      vocab: [
        { kanji: '在住', kana: 'ざいじゅう', romaji: 'zaijuu', meaningEn: 'residing', meaningBn: 'বসবাসকারী', tag: 'N3' },
        { kanji: '現在', kana: 'げんざい', romaji: 'genzai', meaningEn: 'present time', meaningBn: 'বর্তমান সময়', tag: 'N3' },
        { kanji: '存在', kana: 'そんざい', romaji: 'sonzai', meaningEn: 'existence', meaningBn: 'অস্তিত্ব', tag: 'N3' },
        { kanji: '滞在', kana: 'たいざい', romaji: 'taizai', meaningEn: 'stay, visit', meaningBn: 'অবস্থান বা সফর', tag: 'N3' },
        { kanji: '在日', kana: 'ざいにち', romaji: 'zainichi', meaningEn: 'residing in Japan', meaningBn: 'জাপানে বসবাসরত', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '市内在住の方なら誰でも参加できます।',
          romaji: 'Shinai zaijuu no kata nara dare demo sanka dekimasu.',
          meaningEn: 'Anyone who is a resident of the city can participate.',
          meaningBn: 'শহরের যেকোনো স্থানীয় বাসিন্দা অংশগ্রহণ করতে পারবেন।'
        },
        {
          ja: '東京に滞在している間にたくさんの場所を訪問しました।',
          romaji: 'Toukyou ni taizai shite iru aida ni takusan no basho o houmon shimashita.',
          meaningEn: 'During my stay in Tokyo, I visited many places.',
          meaningBn: 'টোকিও সফরের সময় অনেক স্থান পরিদর্শন করেছি।'
        }
      ]
    },
    {
      id: 'l19-zaigaku',
      kanji: '在学',
      emoji: '🎓',
      strokeCount: 14,
      jlpt: 'N3',
      category: 'visual_recognition',
      readings: {
        onyomi: [{ kana: 'ザイガク', romaji: 'zaigaku' }],
        kunyomi: []
      },
      meanings: {
        en: 'Enrolled in school, studying at',
        bn: 'শিক্ষাপ্রতিষ্ঠানে অধ্যয়নরত'
      },
      vocab: [
        { kanji: '在学', kana: 'ざいがく', romaji: 'zaigaku', meaningEn: 'enrolled in school', meaningBn: 'অধ্যয়নরত', tag: 'N3' },
        { kanji: '在学証明書', kana: 'ざいがくしょうめいしょ', romaji: 'zaigaku shoumeisho', meaningEn: 'certificate of enrollment', meaningBn: 'স্টুডেন্ট আইডি প্রত্যয়নপত্র', tag: 'N3' },
        { kanji: '奨学金', kana: 'しょうがくきん', romaji: 'shougakukin', meaningEn: 'scholarship', meaningBn: 'বৃত্তি', tag: 'N3' },
        { kanji: '学生証', kana: 'がくせいしょう', romaji: 'gakuseishou', meaningEn: 'student ID card', meaningBn: 'ছাত্র পরিচয়পত্র', tag: 'N3' },
        { kanji: '在校生', kana: 'ざいこうせい', romaji: 'zaikousei', meaningEn: 'current student', meaningBn: 'বর্তমান শিক্ষার্থী', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'ビザ更新のために在学証明書が必要です।',
          romaji: 'Biza koushin no tame ni zaigaku shoumeisho ga hitsuyou desu.',
          meaningEn: 'A certificate of enrollment is required for visa renewal.',
          meaningBn: 'ভিসা রিনিউয়ের জন্য স্টুডেন্ট সার্টিফিকেট প্রয়োজন।'
        },
        {
          ja: '大学在学中に奨学金を申し込む予定です।',
          romaji: 'Daigaku zaigakuchuu ni shougakukin o moushikomu yotei desu.',
          meaningEn: 'I plan to apply for a scholarship while enrolled in university.',
          meaningBn: 'ভার্সিটিতে থাকাকালীন স্কলারশিপের আবেদন করার ইচ্ছা আছে।'
        }
      ]
    },
    {
      id: 'l19-zaikin',
      kanji: '在勤',
      emoji: '🏢',
      strokeCount: 15,
      jlpt: 'N3',
      category: 'visual_recognition',
      readings: {
        onyomi: [{ kana: 'ザイキン', romaji: 'zaikin' }],
        kunyomi: []
      },
      meanings: {
        en: 'Working at, employed at',
        bn: 'কর্মরত, চাকরিরত'
      },
      vocab: [
        { kanji: '在勤', kana: 'ざいきん', romaji: 'zaikin', meaningEn: 'working at', meaningBn: 'কর্মরত', tag: 'N3' },
        { kanji: '在勤証明書', kana: 'ざいきんしょうめいしょ', romaji: 'zaikin shoumeisho', meaningEn: 'employment certificate', meaningBn: 'চাকরির শংসাপত্র', tag: 'N3' },
        { kanji: '通勤', kana: 'つうきん', romaji: 'tsuukin', meaningEn: 'commuting to work', meaningBn: 'অফিসে যাতায়াত', tag: 'N3' },
        { kanji: '勤務', kana: 'きんむ', romaji: 'kinmu', meaningEn: 'duty, service', meaningBn: 'কর্মঘণ্টা / ডিউটি', tag: 'N3' },
        { kanji: '転勤', kana: 'てんきん', romaji: 'tenkin', meaningEn: 'job transfer', meaningBn: 'কর্মস্থল বদলি', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '区内在勤の方も区のスポーツ施設を利用できます।',
          romaji: 'Kunai zaikin no kata mo ku no supootsu shisetsu o riyou dekimasu.',
          meaningEn: 'People working in the ward can also use the ward’s sports facilities.',
          meaningBn: 'ওয়ার্ডের ভেতরে কর্মরত ব্যক্তিবর্গও স্পোর্টস কমপ্লেক্স ব্যবহার করতে পারবেন।'
        },
        {
          ja: '会社から在勤証明書を発行してもらいました।',
          romaji: 'Kaisha kara zaikin shoumeisho o hakkou shite moraimashita.',
          meaningEn: 'I had my company issue an employment certificate.',
          meaningBn: 'কোম্পানি থেকে চাকরির শংসাপত্র উঠিয়েছি।'
        }
      ]
    }
  ]
};
