import { Lesson } from '../types/kanji';

export const lesson5: Lesson = {
  id: 5,
  number: 5,
  titleJa: '楽しい週末',
  titleRomaji: 'Tanoshii shuumatsu',
  titleBn: 'আনন্দময় সাপ্তাহিক ছুটি (সাপ্তাহিক রুটিন, কেনাকাটা ও বিনোদন)',
  titleEn: 'A Fun Weekend (Weekend Activities, Dining Out & Leisure)',
  descriptionBn: 'সাপ্তাহিক ছুটির পরিকল্পনা, বন্ধুদের সাথে ঘোরাঘুরি, রেস্তোরাঁয় খাওয়া-দাওয়া (食べ放題 / 飲み放題), কেনাকাটা এবং দোকানের সাইনবোর্ড (営業中, 徒歩) বোঝার আবশ্যক কাঞ্জি।',
  descriptionEn: 'Essential Kanji for planning weekends, hanging out with friends, dining out (all-you-can-eat/drink), shopping, and reading shop access signs in Japan.',
  kanjiList: [
    // --- MAIN KANJI (書ける) ---
    // 1. 先
    {
      id: 'l5-saki',
      kanji: '先',
      emoji: '⏮️',
      strokeCount: 6,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'セン', romaji: 'sen' }
        ],
        kunyomi: [
          { kana: 'さき', romaji: 'saki' },
          { kana: 'ま・ず', romaji: 'ma-zu' }
        ]
      },
      meanings: {
        en: 'previous, ahead, past, first',
        bn: 'আগে, পূর্ববর্তী, সামনে, প্রথম'
      },
      vocab: [
        {
          kanji: '先生',
          kana: 'せんせい',
          romaji: 'sensei',
          meaningEn: 'teacher, professor, doctor',
          meaningBn: 'শিক্ষক / ওস্তাদ / ডাক্তার',
          tag: 'Daily N5'
        },
        {
          kanji: '先週',
          kana: 'せんしゅう',
          romaji: 'senshuu',
          meaningEn: 'last week',
          meaningBn: 'গত সপ্তাহ',
          tag: 'Time N5'
        },
        {
          kanji: '先月',
          kana: 'せんげつ',
          romaji: 'sengetsu',
          meaningEn: 'last month',
          meaningBn: 'গত মাস',
          tag: 'Time N5'
        },
        {
          kanji: 'お先に',
          kana: 'おさきに',
          romaji: 'osakini',
          meaningEn: 'ahead, before you (greeting)',
          meaningBn: 'আগে আগে (বিদায় সম্ভাষণ)',
          tag: 'Phrase N5'
        },
        {
          kanji: '先端',
          kana: 'せんたん',
          romaji: 'sentan',
          meaningEn: 'cutting-edge, tip, forefront',
          meaningBn: 'অগ্রভাগ / অত্যাধুনিক প্রযুক্তি',
          tag: 'General N4'
        },
        {
          kanji: '先輩',
          kana: 'せんぱい',
          romaji: 'senpai',
          meaningEn: 'senior (at school/work)',
          meaningBn: 'সিনিয়র / অগ্রজ সহকর্মী',
          tag: 'Culture N4'
        }
      ],
      sentences: [
        {
          ja: '先週の土曜日に友達と映画を見に行きました。',
          romaji: 'Senshuu no doyoubi ni tomodachi to eiga o mi ni ikimashita.',
          meaningEn: 'I went to watch a movie with my friend last Saturday.',
          meaningBn: 'গত শনিবার আমি বন্ধুর সাথে সিনেমা দেখতে গিয়েছিলাম।'
        },
        {
          ja: 'お先に失礼します。ーお疲れ様でした。',
          romaji: 'Osaki ni shitsurei shimasu. - Otsukaresama deshita.',
          meaningEn: 'Excuse me for leaving before you. - Good job today.',
          meaningBn: 'আমি আগে বিদায় নিচ্ছি। — আজ সারাদিন পরিশ্রম করার জন্য ধন্যবাদ।'
        },
        {
          ja: '田中先生はとても親切に日本語を教えてくれます。',
          romaji: 'Tanaka sensei wa totemo shinsetsu ni Nihongo o oshiete kuremasu.',
          meaningEn: 'Teacher Tanaka teaches Japanese very kindly.',
          meaningBn: 'তানাকা শিক্ষক অত্যন্ত আন্তরিকতার সাথে জাপানি ভাষা শেখান।'
        }
      ],
      tamagoTip: {
        bn: 'পা ফেলে অন্যের আগে আগে এগিয়ে যাওয়া। সময়ের হিসেবে আগে (先週, 先月) এবং যিনি আগে জন্মে জ্ঞান অর্জন করেছেন তিনি শিক্ষক (先生)।',
        en: 'Walking ahead of others on foot. Used for past time (last week/month) and teachers (born before: 先生).'
      }
    },

    // 2. 週
    {
      id: 'l5-shuu',
      kanji: '週',
      emoji: '📆',
      strokeCount: 11,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'シュウ', romaji: 'shuu' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'week',
        bn: 'সপ্তাহ'
      },
      vocab: [
        {
          kanji: '今週',
          kana: 'こんしゅう',
          romaji: 'konshuu',
          meaningEn: 'this week',
          meaningBn: 'এই সপ্তাহ',
          tag: 'Time N5'
        },
        {
          kanji: '来週',
          kana: 'らいしゅう',
          romaji: 'raishuu',
          meaningEn: 'next week',
          meaningBn: 'পরের সপ্তাহ',
          tag: 'Time N5'
        },
        {
          kanji: '週末',
          kana: 'しゅうまつ',
          romaji: 'shuumatsu',
          meaningEn: 'weekend',
          meaningBn: 'সাপ্তাহিক ছুটি / উইকেন্ড',
          tag: 'Time N5'
        },
        {
          kanji: '毎週',
          kana: 'まいしゅう',
          romaji: 'maishuu',
          meaningEn: 'every week',
          meaningBn: 'প্রতি সপ্তাহ',
          tag: 'Time N5'
        },
        {
          kanji: '一週間',
          kana: 'いっしゅうかん',
          romaji: 'isshuukan',
          meaningEn: 'one week (duration)',
          meaningBn: 'এক সপ্তাহ ব্যাপ্তি',
          tag: 'Duration N5'
        },
        {
          kanji: '週間天気',
          kana: 'しゅうかんてんき',
          romaji: 'shuukantenki',
          meaningEn: 'weekly weather forecast',
          meaningBn: 'সাপ্তাহিক আবহাওয়ার পূর্বাভাস',
          tag: 'Daily N4'
        }
      ],
      sentences: [
        {
          ja: '週末は何をして過ごしましたか。',
          romaji: 'Shuumatsu wa nani o shite sugoshimashita ka.',
          meaningEn: 'What did you do over the weekend?',
          meaningBn: 'সাপ্তাহিক ছুটিতে আপনি কী করে সময় কাটিয়েছেন?'
        },
        {
          ja: '来週の水曜日に日本語の試験があります。',
          romaji: 'Raishuu no suiyoubi ni Nihongo no shiken ga arimasu.',
          meaningEn: 'There is a Japanese test next Wednesday.',
          meaningBn: 'আগামী সপ্তাহের বুধবারে জাপানি ভাষার একটি পরীক্ষা আছে।'
        },
        {
          ja: '毎週日曜日に部屋を掃除します。',
          romaji: 'Maishuu nichiyoubi ni heya o souji shimasu.',
          meaningEn: 'I clean my room every Sunday.',
          meaningBn: 'প্রতি রবিবার আমি আমার ঘর পরিষ্কার করি।'
        }
      ],
      tamagoTip: {
        bn: 'রাস্তায় চলাচলের রুট (辶) + চারপাশ ঘুরে আসা (周)। সাত দিনের একটি পূর্ণ আবর্তনই হলো সপ্তাহ (週)।',
        en: 'A movement (辶) around a cycle (周). Represents the 7-day cyclical week.'
      }
    },

    // 3. 毎
    {
      id: 'l5-mai',
      kanji: '毎',
      emoji: '🔁',
      strokeCount: 6,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'マイ', romaji: 'mai' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'every, each',
        bn: 'প্রতি, প্রত্যেক'
      },
      vocab: [
        {
          kanji: '毎日',
          kana: 'まいにち',
          romaji: 'mainichi',
          meaningEn: 'every day',
          meaningBn: 'প্রতিদিন',
          tag: 'Time N5'
        },
        {
          kanji: '毎週',
          kana: 'まいしゅう',
          romaji: 'maishuu',
          meaningEn: 'every week',
          meaningBn: 'প্রতি সপ্তাহে',
          tag: 'Time N5'
        },
        {
          kanji: '毎月',
          kana: 'まいつき / まいげつ',
          romaji: 'maitsuki / maigetsu',
          meaningEn: 'every month',
          meaningBn: 'প্রতি মাসে',
          tag: 'Time N5'
        },
        {
          kanji: '毎年',
          kana: 'まいとし / まいねん',
          romaji: 'maitoshi / mainen',
          meaningEn: 'every year',
          meaningBn: 'প্রতি বছর',
          tag: 'Time N5'
        },
        {
          kanji: '毎朝',
          kana: 'まいあさ',
          romaji: 'maiasa',
          meaningEn: 'every morning',
          meaningBn: 'প্রতিদিন সকালে',
          tag: 'Daily N5'
        },
        {
          kanji: '毎晩',
          kana: 'まいばん',
          romaji: 'maiban',
          meaningEn: 'every evening/night',
          meaningBn: 'প্রতি রাতে',
          tag: 'Daily N5'
        }
      ],
      sentences: [
        {
          ja: '健康のために毎日三十分走っています。',
          romaji: 'Kenkou no tame ni mainichi sanjuppun hashitte imasu.',
          meaningEn: 'I run for 30 minutes every day for my health.',
          meaningBn: 'সুস্বাস্থ্যের জন্য আমি প্রতিদিন ৩০ মিনিট দৌড়াই।'
        },
        {
          ja: '毎朝七時に起きて、コーヒーを飲みます。',
          romaji: 'Maiasa shichiji ni okite, koohii o nomimasu.',
          meaningEn: 'I wake up at 7:00 every morning and drink coffee.',
          meaningBn: 'প্রতিদিন সকাল ৭টায় ঘুম থেকে উঠে আমি কফি পান করি।'
        },
        {
          ja: '毎月二十五日は給料日です。',
          romaji: 'Maitsuki nijuugonichi wa kyuuryoubi desu.',
          meaningEn: 'The 25th of every month is payday.',
          meaningBn: 'প্রতি মাসের ২৫ তারিখ হলো বেতন পাওয়ার দিন।'
        }
      ],
      tamagoTip: {
        bn: 'মাটির চারাগাছ নিয়মিত বৃদ্ধি পাওয়া বা মায়ের (母) নিত্যদিনের স্নেহের পুনরাবৃত্তি। নিয়মিত ঘটা প্রতিটি বিষয় (毎)।',
        en: 'Represents repetitive, regular care like that of a mother (母). Means "every" or "each".'
      }
    },

    // 4. 午
    {
      id: 'l5-go',
      kanji: '午',
      emoji: '☀️',
      strokeCount: 4,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ゴ', romaji: 'go' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'noon, midday',
        bn: 'দুপুর, মধ্যাহ্ন'
      },
      vocab: [
        {
          kanji: '午前',
          kana: 'ごぜん',
          romaji: 'gozen',
          meaningEn: 'morning, AM',
          meaningBn: 'সকাল / এএম (দুপুরের আগে)',
          tag: 'Time N5'
        },
        {
          kanji: '午後',
          kana: 'ごご',
          romaji: 'gogo',
          meaningEn: 'afternoon, PM',
          meaningBn: 'বিকাল / দুপুর পরবর্তী / পিএম',
          tag: 'Time N5'
        },
        {
          kanji: '正午',
          kana: 'しょうご',
          romaji: 'shougo',
          meaningEn: 'exact noon, 12:00 PM',
          meaningBn: 'ঠিক দুপুর ১২টা',
          tag: 'Time N4'
        },
        {
          kanji: '午前中',
          kana: 'ごぜんちゅう',
          romaji: 'gozenchuu',
          meaningEn: 'throughout the morning',
          meaningBn: 'সকালবেলার সময়ে',
          tag: 'Time N5'
        },
        {
          kanji: '午睡',
          kana: 'ごすい',
          romaji: 'gosui',
          meaningEn: 'afternoon nap, siesta',
          meaningBn: 'দুপুরের ভাতঘুম / বিশ্রাম',
          tag: 'General'
        },
        {
          kanji: '午年',
          kana: 'うまどし',
          romaji: 'umadoshi',
          meaningEn: 'Year of the Horse (Zodiac)',
          meaningBn: 'অশ্ব বর্ষ (জাপানি রাশিচক্র)',
          tag: 'Culture'
        }
      ],
      sentences: [
        {
          ja: '明日の午前中に荷物が届く予定です。',
          romaji: 'Ashita no gozenchuu ni nimotsu ga todoku yotei desu.',
          meaningEn: 'A package is scheduled to arrive tomorrow morning.',
          meaningBn: 'আগামীকাল সকালের মধ্যে আমার একটি পার্সেল এসে পৌঁছানোর কথা রয়েছে।'
        },
        {
          ja: '午後二時から大切な面接があります。',
          romaji: 'Gogo niji kara taisetsu na mensetsu ga arimasu.',
          meaningEn: 'I have an important interview from 2:00 PM.',
          meaningBn: 'দুপুর ২টা থেকে আমার একটি গুরুত্বপূর্ণ ইন্টারভিউ রয়েছে।'
        },
        {
          ja: '正午になると会社のチャイムが鳴ります。',
          romaji: 'Shougo ni naru to kaisha no chaimu ga narimasu.',
          meaningEn: 'When it hits noon, the company chime rings.',
          meaningBn: 'ঠিক দুপুর ১২টা বাজলে অফিসের মধ্যাহ্নবিরতির ঘণ্টা বেজে ওঠে।'
        }
      ],
      tamagoTip: {
        bn: 'সূর্য যখন আকাশে ঠিক মাথার উপরে অবস্থান করে। 午 (দুপুর) এর পূর্বে হলো 午前 (AM), আর পরে হলো 午後 (PM)।',
        en: 'The sundial pointing straight up at noon. 午前 = Before noon (AM), 午後 = After noon (PM).'
      }
    },

    // 5. 後
    {
      id: 'l5-ato',
      kanji: '後',
      emoji: '⏳',
      strokeCount: 9,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ゴ', romaji: 'go' },
          { kana: 'コウ', romaji: 'kou' }
        ],
        kunyomi: [
          { kana: 'のち', romaji: 'nochi' },
          { kana: 'うし・ろ', romaji: 'ushi-ro' },
          { kana: 'あと', romaji: 'ato' },
          { kana: 'おく・れる', romaji: 'oku-reru' }
        ]
      },
      meanings: {
        en: 'after, later, behind, back',
        bn: 'পরে, পেছনে, পরবর্তী'
      },
      vocab: [
        {
          kanji: '午後',
          kana: 'ごご',
          romaji: 'gogo',
          meaningEn: 'afternoon, PM',
          meaningBn: 'বিকাল / পিএম',
          tag: 'Time N5'
        },
        {
          kanji: '後ろ',
          kana: 'うしろ',
          romaji: 'ushiro',
          meaningEn: 'behind, in the back',
          meaningBn: 'পেছনে',
          tag: 'Position N5'
        },
        {
          kanji: '後で',
          kana: 'あとで',
          romaji: 'ato de',
          meaningEn: 'afterwards, later',
          meaningBn: 'একটু পরে / পরবর্তীতে',
          tag: 'Adverb N5'
        },
        {
          kanji: '最後',
          kana: 'さいご',
          romaji: 'saigo',
          meaningEn: 'last, end, final',
          meaningBn: 'সর্বশেষ / ইতি',
          tag: 'Daily N4'
        },
        {
          kanji: '後半',
          kana: 'こうはん',
          romaji: 'kouhan',
          meaningEn: 'second half, latter half',
          meaningBn: 'দ্বিতীয়ার্ধ / শেষের অংশ',
          tag: 'General N4'
        },
        {
          kanji: '食後',
          kana: 'しょくご',
          romaji: 'shokugo',
          meaningEn: 'after a meal (e.g. medicine)',
          meaningBn: 'খাওয়ার পর (ওষুধ খাওয়ার নিয়ম)',
          tag: 'Health N4'
        }
      ],
      sentences: [
        {
          ja: 'ご飯を食べた後で、薬を飲みます。',
          romaji: 'Gohan o tabeta ato de, kusuri o nomimasu.',
          meaningEn: 'I will take the medicine after eating a meal.',
          meaningBn: 'খাবার খাওয়ার পর আমি ওষুধটি পান করব।'
        },
        {
          ja: '教室の後ろにカバンを置いてください。',
          romaji: 'Kyoushitsu no ushiro ni kaban o oite kudasai.',
          meaningEn: 'Please put your bags in the back of the classroom.',
          meaningBn: 'শ্রেণিকক্ষের পেছনের অংশে দয়া করে ব্যাগগুলো রাখুন।'
        },
        {
          ja: '今忙しいので、後で電話をかけ直します。',
          romaji: 'Ima isogashii node, ato de denwa o kakenaoshimasu.',
          meaningEn: 'I am busy right now, so I will call back later.',
          meaningBn: 'এখন আমি একটু ব্যস্ত আছি, তাই কিছুক্ষণ পরে আবার ফোন দিচ্ছি।'
        }
      ],
      tamagoTip: {
        bn: 'পা বেঁধে হাঁটার ফলে পেছনে পড়ে থাকা। স্থানের পেছনে (後ろ) এবং সময়ের পরে (後で / 午後) বোঝাতে ব্যবহৃত হয়।',
        en: 'Walking slowly and trailing behind. Means physical location (behind: うしろ) or time (later: あとで).'
      }
    },

    // 6. 見
    {
      id: 'l5-mi',
      kanji: '見',
      emoji: '👀',
      strokeCount: 7,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ケン', romaji: 'ken' }
        ],
        kunyomi: [
          { kana: 'み・る', romaji: 'mi-ru' },
          { kana: 'み・える', romaji: 'mi-eru' },
          { kana: 'み・せる', romaji: 'mi-seru' }
        ]
      },
      meanings: {
        en: 'see, look, watch, show',
        bn: 'দেখা, তাকানো, দর্শন করা'
      },
      vocab: [
        {
          kanji: '見る',
          kana: 'みる',
          romaji: 'miru',
          meaningEn: 'to see, to watch, to look',
          meaningBn: 'দেখা, দর্শন করা',
          tag: 'Verb N5'
        },
        {
          kanji: '見せる',
          kana: 'みせる',
          romaji: 'miseru',
          meaningEn: 'to show, display',
          meaningBn: 'কাউকে দেখানো',
          tag: 'Verb N5'
        },
        {
          kanji: '見える',
          kana: 'みえる',
          romaji: 'mieru',
          meaningEn: 'to be visible, can see',
          meaningBn: 'চোখে দেখা যাওয়া / দৃশ্যমান হওয়া',
          tag: 'Verb N5'
        },
        {
          kanji: '意見',
          kana: 'いけん',
          romaji: 'iken',
          meaningEn: 'opinion, view',
          meaningBn: 'মতামত, দৃষ্টিভঙ্গি',
          tag: 'Daily N4'
        },
        {
          kanji: '見学',
          kana: 'けんがく',
          romaji: 'kengaku',
          meaningEn: 'study tour, field trip, inspection',
          meaningBn: 'বাস্তব পরিদর্শন / শিক্ষাসফর',
          tag: 'School N4'
        },
        {
          kanji: '花見',
          kana: 'はなみ',
          romaji: 'hanami',
          meaningEn: 'cherry blossom viewing',
          meaningBn: 'হানামি (সাকুরা ফুল দেখা উৎসব)',
          tag: 'Culture N4'
        }
      ],
      sentences: [
        {
          ja: '週末は家で日本のドラマを見ました。',
          romaji: 'Shuumatsu wa ie de Nihon no dorama o mimashita.',
          meaningEn: 'I watched Japanese dramas at home over the weekend.',
          meaningBn: 'সাপ্তাহিক ছুটিতে আমি ঘরে বসে জাপানি নাটক দেখেছি।'
        },
        {
          ja: 'すみません、パスポートを見せてください。',
          romaji: 'Sumimasen, pasupooto o misete kudasai.',
          meaningEn: 'Excuse me, please show me your passport.',
          meaningBn: 'শুনুন, দয়া করে আপনার পাসপোর্টটি আমাকে দেখান।'
        },
        {
          ja: '電車の窓から富士山が綺麗に見えました。',
          romaji: 'Densha no mado kara Fujisan ga kirei ni miemashita.',
          meaningEn: 'Mount Fuji was visible beautifully from the train window.',
          meaningBn: 'ট্রেনের জানালা দিয়ে ফুজি পাহাড় খুব সুন্দরভাবে দেখা যাচ্ছিল।'
        }
      ],
      tamagoTip: {
        bn: 'মানুষের চোখ (目) দুটি পায়ে ভর দিয়ে হেঁটে ঘুরে দেখা। দেখার ক্রিয়া (見る) এবং ফুল দেখা উৎসব (花見)।',
        en: 'A big eye (目) walking around on human legs (儿). Represents seeing, watching, and touring.'
      }
    },

    // 7. 食
    {
      id: 'l5-shoku',
      kanji: '食',
      emoji: '🍱',
      strokeCount: 9,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ショク', romaji: 'shoku' },
          { kana: 'ジキ', romaji: 'jiki' }
        ],
        kunyomi: [
          { kana: 'た・べる', romaji: 'ta-beru' },
          { kana: 'く・う', romaji: 'ku-u' }
        ]
      },
      meanings: {
        en: 'eat, food, meal',
        bn: 'খাওয়া, খাদ্য, আহার'
      },
      vocab: [
        {
          kanji: '食べる',
          kana: 'たべる',
          romaji: 'taberu',
          meaningEn: 'to eat',
          meaningBn: 'খাওয়া',
          tag: 'Verb N5'
        },
        {
          kanji: '食べ物',
          kana: 'たべもの',
          romaji: 'tabemono',
          meaningEn: 'food',
          meaningBn: 'খাবার / খাদ্যদ্রব্য',
          tag: 'Daily N5'
        },
        {
          kanji: '食事',
          kana: 'しょくじ',
          romaji: 'shokuji',
          meaningEn: 'meal, dining',
          meaningBn: 'আহার / খাবার গ্রহণ',
          tag: 'Daily N5'
        },
        {
          kanji: '食堂',
          kana: 'しょくどう',
          romaji: 'shokudou',
          meaningEn: 'cafeteria, dining hall',
          meaningBn: 'ক্যান্টিন / খাবার ঘর',
          tag: 'Daily N5'
        },
        {
          kanji: '朝食',
          kana: 'ちょうしょく',
          romaji: 'choushoku',
          meaningEn: 'breakfast (formal)',
          meaningBn: 'সকালের নাস্তা',
          tag: 'Time N4'
        },
        {
          kanji: '夕食',
          kana: 'ゆうしょく',
          romaji: 'yuushoku',
          meaningEn: 'dinner, supper (formal)',
          meaningBn: 'রাতের খাবার',
          tag: 'Time N4'
        }
      ],
      sentences: [
        {
          ja: 'お昼休みに学食でカレーライスを食べました。',
          romaji: 'Ohiruyasumi ni gakushoku de kareeraisu o tabemashita.',
          meaningEn: 'I ate curry rice at the student cafeteria during lunch break.',
          meaningBn: 'দুপুরের বিরতিতে আমি ভার্সিটি ক্যান্টিনে কারি-রাইস খেয়েছি।'
        },
        {
          ja: '日本の食べ物の中でラーメンが一番好きです。',
          romaji: 'Nihon no tabemono no naka de raamen ga ichiban suki desu.',
          meaningEn: 'Among Japanese foods, I like ramen the best.',
          meaningBn: 'জাপানি খাবারের মধ্যে রামেন আমার সবচেয়ে প্রিয়।'
        },
        {
          ja: '今晩、家族と一緒に外で食事をします。',
          romaji: 'Konban, kazoku to issho ni soto de shokuji o shimasu.',
          meaningEn: 'Tonight, I will dine outside with my family.',
          meaningBn: 'আজ রাতে আমি পরিবারের সাথে বাইরে রেস্তোরাঁয় খাবার খাব।'
        }
      ],
      tamagoTip: {
        bn: 'ঢাকনা দেওয়া পাত্রের ভেতর সুস্বাদু খাবার সাজিয়ে রাখা। জাপানের সর্বত্র 食べ物 ও 食事 ব্যবহৃত হয়।',
        en: 'A lid covering a bowl of delicious food. Foundation for all eating words (食べる, 食堂).'
      }
    },

    // 8. 飲
    {
      id: 'l5-in',
      kanji: '飲',
      emoji: '🍵',
      strokeCount: 12,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'イン', romaji: 'in' }
        ],
        kunyomi: [
          { kana: 'の・む', romaji: 'no-mu' }
        ]
      },
      meanings: {
        en: 'drink, swallow',
        bn: 'পান করা, পানীয়'
      },
      vocab: [
        {
          kanji: '飲む',
          kana: 'のむ',
          romaji: 'nomu',
          meaningEn: 'to drink, take (medicine)',
          meaningBn: 'পান করা / ওষুধ খাওয়া',
          tag: 'Verb N5'
        },
        {
          kanji: '飲み物',
          kana: 'のみもの',
          romaji: 'nomimono',
          meaningEn: 'drink, beverage',
          meaningBn: 'পানীয়',
          tag: 'Daily N5'
        },
        {
          kanji: '飲み屋',
          kana: 'のみや',
          romaji: 'nomiya',
          meaningEn: 'bar, pub, Izakaya',
          meaningBn: 'পানশালা / ইজাকায়া',
          tag: 'Culture N4'
        },
        {
          kanji: '飲食店',
          kana: 'いんしょくてん',
          romaji: 'inshokuten',
          meaningEn: 'restaurant, dining eatery',
          meaningBn: 'রেস্তোরাঁ / খাবারের দোকান',
          tag: 'Business N4'
        },
        {
          kanji: '飲酒運転',
          kana: 'いんしゅうんてん',
          romaji: 'inshuumten',
          meaningEn: 'drunk driving (strictly banned)',
          meaningBn: 'মদ্যপ অবস্থায় গাড়ি চালানো',
          tag: 'Law N4'
        },
        {
          kanji: '飲み薬',
          kana: 'のみぐすり',
          romaji: 'nomigusuri',
          meaningEn: 'internal medicine (oral)',
          meaningBn: 'খাওয়ার ওষুধ (তরল/ট্যাবলেট)',
          tag: 'Medical'
        }
      ],
      sentences: [
        {
          ja: '喉が渇いたので、冷たいお茶を飲みました。',
          romaji: 'Nodo ga kawaita node, tsumetai ocha o nomimashita.',
          meaningEn: 'I was thirsty, so I drank cold green tea.',
          meaningBn: 'আমার খুব তৃষ্ণা পেয়েছিল, তাই ঠাণ্ডা গ্রিন-টি পান করেছি।'
        },
        {
          ja: '自動販売機で温かい飲み物を買いました。',
          romaji: 'Jidouhanbaiki de atatakai nomimono o kaimashita.',
          meaningEn: 'I bought a warm drink from the vending machine.',
          meaningBn: 'ভেন্ডিং মেশিন থেকে আমি একটি গরম পানীয় কিনেছি।'
        },
        {
          ja: '食後にこの薬を二錠飲んでください。',
          romaji: 'Shokugo ni kono kusuri o nijou nonde kudasai.',
          meaningEn: 'Please take two tablets of this medicine after meals.',
          meaningBn: 'খাবার গ্রহণের পর এই ওষুধের দুটি ট্যাবলেট পান করবেন।'
        }
      ],
      tamagoTip: {
        bn: 'বামে খাবার (食) এবং ডানে মুখ হাঁ করে তৃষ্ণার্ত মানুষ (欠)। পান করা (飲む) এবং পানীয় (飲み物)।',
        en: 'Food/liquid (食) approached with an open mouth (欠) to swallow. Used for drinks and taking pills.'
      }
    },

    // 9. 買
    {
      id: 'l5-kai',
      kanji: '買',
      emoji: '🛒',
      strokeCount: 12,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'バイ', romaji: 'bai' }
        ],
        kunyomi: [
          { kana: 'か・う', romaji: 'ka-u' }
        ]
      },
      meanings: {
        en: 'buy, purchase',
        bn: 'কেনা, ক্রয় করা'
      },
      vocab: [
        {
          kanji: '買う',
          kana: 'かう',
          romaji: 'kau',
          meaningEn: 'to buy, purchase',
          meaningBn: 'কেনা / ক্রয় করা',
          tag: 'Verb N5'
        },
        {
          kanji: '買い物',
          kana: 'かいもの',
          romaji: 'kaimono',
          meaningEn: 'shopping',
          meaningBn: 'কেনাকাটা / শপিং',
          tag: 'Daily N5'
        },
        {
          kanji: '買い手',
          kana: 'かいて',
          romaji: 'kaite',
          meaningEn: 'buyer, purchaser',
          meaningBn: 'ক্রেতা',
          tag: 'Business N4'
        },
        {
          kanji: '売買',
          kana: 'ばいばい',
          romaji: 'baibai',
          meaningEn: 'trade, buying and selling',
          meaningBn: 'বেচাকেনা / বাণিজ্য',
          tag: 'Business N4'
        },
        {
          kanji: '買い占め',
          kana: 'かいしめ',
          romaji: 'kaishime',
          meaningEn: 'hoarding, buying up all stocks',
          meaningBn: 'মজুদদারি / সব কিনে ফেলা',
          tag: 'Daily'
        },
        {
          kanji: 'お買い得',
          kana: 'おかいどく',
          romaji: 'okaidoku',
          meaningEn: 'bargain, good deal',
          meaningBn: 'লাভজনক কেনাকাটা / সাশ্রয়ী অফার',
          tag: 'Shop Sign'
        }
      ],
      sentences: [
        {
          ja: '休日にスーパーへ行って一週間分の買い物をしました。',
          romaji: 'Kyuujitsu ni suupaa e itte isshuukan-bun no kaimono o shimashita.',
          meaningEn: 'On my day off, I went to the supermarket and did a week\'s worth of shopping.',
          meaningBn: 'ছুটির দিনে সুপারমার্কেটে গিয়ে আমি পুরো এক সপ্তাহের কেনাকাটা করেছি।'
        },
        {
          ja: '新しいノートパソコンを電気屋で買いました。',
          romaji: 'Atarashii nootopasokon o denkiya de kaimashita.',
          meaningEn: 'I bought a new laptop at the electronics store.',
          meaningBn: 'ইলেকট্রনিক্স দোকান থেকে আমি একটি নতুন ল্যাপটপ কিনেছি।'
        },
        {
          ja: 'タイムセールで牛肉をお買い得価格で買えました。',
          romaji: 'Taimuseeru de gyuuniku o okaidoku kakaku de kaemashita.',
          meaningEn: 'I was able to buy beef at a bargain price during the time-limited sale.',
          meaningBn: 'টাইম সেলে খুব সাশ্রয়ী মূল্যে গরুর মাংস কিনতে পেরেছি।'
        }
      ],
      tamagoTip: {
        bn: 'প্রাচীনকালে মুদ্রারূপে ব্যবহৃত কড়ি বা শামুক (貝) জাল বা থলিতে ভরে কেনাকাটা করা থেকে 買 এসেছে।',
        en: 'A net (罒) filled with cowrie shells (貝) used as money to purchase items.'
      }
    },

    // 10. 物
    {
      id: 'l5-mono',
      kanji: '物',
      emoji: '📦',
      strokeCount: 8,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ブツ', romaji: 'butsu' },
          { kana: 'モツ', romaji: 'motsu' }
        ],
        kunyomi: [
          { kana: 'もの', romaji: 'mono' }
        ]
      },
      meanings: {
        en: 'thing, object, matter',
        bn: 'বস্তু, জিনিস, পদার্থ'
      },
      vocab: [
        {
          kanji: '物',
          kana: 'もの',
          romaji: 'mono',
          meaningEn: 'thing, physical object',
          meaningBn: 'জিনিস, বস্তু',
          tag: 'Daily N5'
        },
        {
          kanji: '食べ物',
          kana: 'たべもの',
          romaji: 'tabemono',
          meaningEn: 'food',
          meaningBn: 'খাবার জিনিস',
          tag: 'Daily N5'
        },
        {
          kanji: '飲み物',
          kana: 'のみもの',
          romaji: 'nomimono',
          meaningEn: 'drink, beverage',
          meaningBn: 'পানীয়',
          tag: 'Daily N5'
        },
        {
          kanji: '買い物',
          kana: 'かいもの',
          romaji: 'kaimono',
          meaningEn: 'shopping',
          meaningBn: 'কেনাকাটার জিনিস',
          tag: 'Daily N5'
        },
        {
          kanji: '荷物',
          kana: 'にもつ',
          romaji: 'nimotsu',
          meaningEn: 'luggage, parcel, baggage',
          meaningBn: 'মালামাল, লাগেজ, পার্সেল',
          tag: 'Daily N5'
        },
        {
          kanji: '動物',
          kana: 'どうぶつ',
          romaji: 'doubutsu',
          meaningEn: 'animal',
          meaningBn: 'প্রাণী / জীবজন্তু',
          tag: 'Nature N4'
        }
      ],
      sentences: [
        {
          ja: '重い荷物を部屋まで運ぶのを手伝いました。',
          romaji: 'Omoi nimotsu o heya made hakobu no o tetsudaimashita.',
          meaningEn: 'I helped carry the heavy luggage up to the room.',
          meaningBn: 'ভারী মালামাল রুম পর্যন্ত বয়ে নিয়ে যেতে আমি সাহায্য করেছি।'
        },
        {
          ja: '日本の物価は母国と比べて高いです。',
          romaji: 'Nihon no bukka wa bokoku to kurabete takai desu.',
          meaningEn: 'Prices of goods in Japan are higher compared to my home country.',
          meaningBn: 'আমার দেশের তুলনায় জাপানের জিনিসপত্রের দাম বেশ চড়া।'
        },
        {
          ja: '大事な物を机の引き出しにしまっておきます。',
          romaji: 'Daiji na mono o tsukue no hikidashi ni shimatte okimasu.',
          meaningEn: 'I store important things in the desk drawer.',
          meaningBn: 'জরুরি জিনিসপত্র আমি টেবিলের ড্রয়ারে গুছিয়ে রাখি।'
        }
      ],
      tamagoTip: {
        bn: 'গরু (牛) এবং বিচিত্র সব জিনিস নির্দেশক উপাদান। 食べ物 (খাবার), 飲み物 (পানীয়), 荷物 (লাগেজ) এ বহুল ব্যবহৃত।',
        en: 'Originally depicting an ox (牛). Forms foundational compound words for food, drinks, and packages.'
      }
    },

    // 11. 行
    {
      id: 'l5-iku',
      kanji: '行',
      emoji: '🚶',
      strokeCount: 6,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'コウ', romaji: 'kou' },
          { kana: 'ギョウ', romaji: 'gyou' }
        ],
        kunyomi: [
          { kana: 'い・く', romaji: 'i-ku' },
          { kana: 'ゆ・く', romaji: 'yu-ku' },
          { kana: 'おこな・う', romaji: 'okona-u' }
        ]
      },
      meanings: {
        en: 'go, travel, conduct, line',
        bn: 'যাওয়া, গমন করা, পরিচালনা করা'
      },
      vocab: [
        {
          kanji: '行く',
          kana: 'いく / ゆく',
          romaji: 'iku / yuku',
          meaningEn: 'to go',
          meaningBn: 'যাওয়া / গমন করা',
          tag: 'Verb N5'
        },
        {
          kanji: '旅行',
          kana: 'りょこう',
          romaji: 'ryokou',
          meaningEn: 'travel, trip',
          meaningBn: 'ভ্রমণ / ট্যুর',
          tag: 'Daily N5'
        },
        {
          kanji: '銀行',
          kana: 'ぎんこう',
          romaji: 'ginkou',
          meaningEn: 'bank (financial institution)',
          meaningBn: 'ব্যাংক',
          tag: 'Daily N5'
        },
        {
          kanji: '行う',
          kana: 'おこなう',
          romaji: 'okonau',
          meaningEn: 'to perform, carry out, conduct',
          meaningBn: 'অনুষ্ঠান পরিচালনা করা',
          tag: 'Verb N4'
        },
        {
          kanji: '飛行機',
          kana: 'ひこうき',
          romaji: 'hikouki',
          meaningEn: 'airplane',
          meaningBn: 'উড়োজাহাজ / বিমান',
          tag: 'Transport N5'
        },
        {
          kanji: '急行',
          kana: 'きゅうこう',
          romaji: 'kyuukou',
          meaningEn: 'express train',
          meaningBn: 'এক্সপ্রেস ট্রেন',
          tag: 'Train N4'
        }
      ],
      sentences: [
        {
          ja: '明日は秋葉原へ買い物に行きます。',
          romaji: 'Ashita wa Akihabara e kaimono ni ikimasu.',
          meaningEn: 'Tomorrow, I will go to Akihabara for shopping.',
          meaningBn: 'আগামীকাল কেনাকাটা করার জন্য আমি আকিহাবারা যাব।'
        },
        {
          ja: '連休に京都と奈良へ旅行しました。',
          romaji: 'Renkyuu ni Kyouto to Nara e ryokou shimashita.',
          meaningEn: 'I traveled to Kyoto and Nara during the long holiday.',
          meaningBn: 'টানা ছুটিতে আমি কিয়োটো ও নারা ভ্রমণ করেছি।'
        },
        {
          ja: 'お金をおろすために銀行のATMへ行きました。',
          romaji: 'Okane o orosu tame ni ginkou no ATM e ikimashita.',
          meaningEn: 'I went to the bank\'s ATM to withdraw money.',
          meaningBn: 'টাকা তোলার জন্য আমি ব্যাংকের এটিএমে গিয়েছিলাম।'
        }
      ],
      tamagoTip: {
        bn: 'চার রাস্তার মোড়ের দৃশ্য থেকে 行 এসেছে। এক স্থান থেকে অন্য স্থানে যাওয়ার পথ (行く, 旅行, 銀行)।',
        en: 'Depicts a four-way intersection. Foundation for going, traveling, and institutions like banks (銀行).'
      }
    },

    // 12. 休
    {
      id: 'l5-yasumi',
      kanji: '休',
      emoji: '🛋️',
      strokeCount: 6,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'キュウ', romaji: 'kyuu' }
        ],
        kunyomi: [
          { kana: 'やす・む', romaji: 'yasu-mu' },
          { kana: 'やす・まる', romaji: 'yasu-maru' },
          { kana: 'やす・める', romaji: 'yasu-meru' }
        ]
      },
      meanings: {
        en: 'rest, day off, break, holiday',
        bn: 'বিশ্রাম নেওয়া, ছুটি, বন্ধ'
      },
      vocab: [
        {
          kanji: '休む',
          kana: 'やすむ',
          romaji: 'yasumu',
          meaningEn: 'to rest, take a break, be absent',
          meaningBn: 'বিশ্রাম নেওয়া / ছুটি নেওয়া',
          tag: 'Verb N5'
        },
        {
          kanji: '休み',
          kana: 'やすみ',
          romaji: 'yasumi',
          meaningEn: 'rest, holiday, vacation, day off',
          meaningBn: 'ছুটি, অবকাশ',
          tag: 'Daily N5'
        },
        {
          kanji: '夏休み',
          kana: 'なつやすみ',
          romaji: 'natsuyasumi',
          meaningEn: 'summer vacation',
          meaningBn: 'গ্রীষ্মকালীন ছুটি',
          tag: 'School N5'
        },
        {
          kanji: '昼休み',
          kana: 'ひるやすみ',
          romaji: 'hiruyasumi',
          meaningEn: 'lunch break',
          meaningBn: 'দুপুরের খাবার ও বিশ্রামের বিরতি',
          tag: 'Daily N5'
        },
        {
          kanji: '定休日',
          kana: 'ていきゅうび',
          romaji: 'teikyuubi',
          meaningEn: 'regular closing day (of a shop)',
          meaningBn: 'দোকানের নিয়মিত সাপ্তাহিক ছুটির দিন',
          tag: 'Shop Sign N4'
        },
        {
          kanji: '休日',
          kana: 'きゅうじつ',
          romaji: 'kyuujitsu',
          meaningEn: 'holiday, day off',
          meaningBn: 'ছুটির দিন',
          tag: 'General N4'
        }
      ],
      sentences: [
        {
          ja: '風邪をひいたので、今日は会社を休みます。',
          romaji: 'Kaze o hiita node, kyou wa kaisha o yasumimasu.',
          meaningEn: 'I caught a cold, so I will take a day off from work today.',
          meaningBn: 'ঠাণ্ডা লাগার কারণে আজ আমি অফিস থেকে ছুটি নেব।'
        },
        {
          ja: '少し疲れたので、公園のベンチで休みましょう。',
          romaji: 'Sukoshi tsukareta node, kouen no benchi de yasumimashou.',
          meaningEn: 'I am a little tired, so let\'s rest on the park bench.',
          meaningBn: 'একটু ক্লান্ত লাগছে, তাই পার্কের বেঞ্চে বসে একটু জিরিয়ে নিই।'
        },
        {
          ja: 'このレストランの定休日は毎週火曜日です。',
          romaji: 'Kono resutoran no teikyuubi wa maishuu kayoubi desu.',
          meaningEn: 'This restaurant\'s regular closing day is every Tuesday.',
          meaningBn: 'এই রেস্তোরাঁটি প্রতি মঙ্গলবার নিয়মিত বন্ধ থাকে।'
        }
      ],
      tamagoTip: {
        bn: 'একজন ক্লান্ত মানুষ (亻) গাছের গুঁড়িতে (木) হেলান দিয়ে ছায়ায় বিশ্রাম নিচ্ছে। বিশ্রাম ও ছুটি হলো 休む।',
        en: 'A person (亻) leaning against a tree (木) to rest in the shade. Means rest and vacation.'
      }
    },

    // --- READ-ONLY KANJI (読める) ---
    // 13. 〜放題
    {
      id: 'l5-houdai',
      kanji: '〜放題',
      emoji: '🍽️',
      strokeCount: 15,
      jlpt: 'N4',
      category: 'read_only',
      readings: {
        onyomi: [
          { kana: 'ホウダイ', romaji: 'houdai' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'all-you-can-... (as much as you like)',
        bn: 'সীমাহীন / যতখুশি তত... (বুফে অফার)'
      },
      vocab: [
        {
          kanji: '食べ放題',
          kana: 'たべほうだい',
          romaji: 'tabehoudai',
          meaningEn: 'all-you-can-eat buffet',
          meaningBn: 'যত খুশি তত খাও (আনলিমিটেড বুফে)',
          tag: 'Restaurant N4'
        },
        {
          kanji: '飲み放題',
          kana: 'のみほうだい',
          romaji: 'nomihoudai',
          meaningEn: 'all-you-can-drink (unlimited drinks)',
          meaningBn: 'যত খুশি তত পান করো (আনলিমিটেড পানীয়)',
          tag: 'Restaurant N4'
        },
        {
          kanji: '見放題',
          kana: 'みほうだい',
          romaji: 'mihoudai',
          meaningEn: 'unlimited viewing (streaming/video)',
          meaningBn: 'সীমাহীন ভিডিও দেখা (স্ট্রিমিং সাবস্ক্রিপশন)',
          tag: 'Media'
        },
        {
          kanji: 'かけ放題',
          kana: 'かけほうだい',
          romaji: 'kakehoudai',
          meaningEn: 'unlimited calls (mobile plan)',
          meaningBn: 'আনলিমিটেড ফ্রি কল (মোবাইল সিম অফার)',
          tag: 'Mobile'
        },
        {
          kanji: '乗り放題',
          kana: 'のりほうだい',
          romaji: 'norihoudai',
          meaningEn: 'unlimited rides (day pass for train/bus)',
          meaningBn: 'আনলিমিটেড ট্রেন/বাস রাইড পাস',
          tag: 'Transport'
        },
        {
          kanji: '取り放題',
          kana: 'torihoudai',
          romaji: 'torihoudai',
          meaningEn: 'free to take as much as you want',
          meaningBn: 'যত ইচ্ছা তুলে নেওয়ার সুযোগ',
          tag: 'Daily'
        }
      ],
      sentences: [
        {
          ja: '焼肉の食べ放題コースを九十分で予約しました。',
          romaji: 'Yakiniku no tabehoudai koosu o kyuujuppun de yoyaku shimashita.',
          meaningEn: 'I booked a 90-minute all-you-can-eat grilled meat course.',
          meaningBn: 'আমি ৯০ মিনিটের আনলিমিটেড বারবিকিউ মাংসের বুফে কোর্স বুক করেছি।'
        },
        {
          ja: '飲み放題がついているので、たくさんジュースを飲みました。',
          romaji: 'Nomihoudai ga tsuite iru node, takusan juusu o nomimashita.',
          meaningEn: 'Since all-you-can-drink was included, I drank plenty of juice.',
          meaningBn: 'আনলিমিটেড ড্রিংক অফার অন্তর্ভুক্ত থাকায় আমি প্রচুর জুস পান করেছি।'
        },
        {
          ja: '東京メトロの乗り放題パスで観光地を巡りました。',
          romaji: 'Toukyou metoro no norihoudai pasu de kankouchi o megurimashita.',
          meaningEn: 'I toured tourist spots using the Tokyo Metro unlimited ride pass.',
          meaningBn: 'টোকিও মেট্রোর আনলিমিটেড রাইড পাস দিয়ে দর্শনীয় স্থানগুলো ঘুরে দেখেছি।'
        }
      ],
      tamagoTip: {
        bn: 'জাপানের রেস্তোরাঁর বাইরে বড় ব্যানারে 食べ放題 ও 飲み放題 থাকে। নির্দিষ্ট সময়ে আনলিমিটেড খাওয়ার জন্য জনপ্রিয়।',
        en: 'Found on restaurant banners across Japan. Designates unlimited all-you-can-eat or drink deals.'
      }
    },

    // --- VISUAL RECOGNITION (見て、わかる) ---
    // 14. 営業
    {
      id: 'l5-eigyou',
      kanji: '営業',
      emoji: '🟢',
      strokeCount: 21,
      jlpt: 'N4',
      category: 'visual_recognition',
      readings: {
        onyomi: [
          { kana: 'エイギョウ', romaji: 'eigyou' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'business, in operation, open',
        bn: 'খোলা / ব্যবসা চালু থাকা'
      },
      vocab: [
        {
          kanji: '営業中',
          kana: 'えいぎょうちゅう',
          romaji: 'eigyouchuu',
          meaningEn: 'open for business (door sign)',
          meaningBn: 'দোকান খোলা আছে (দরজার ঝুলন্ত বোর্ড)',
          tag: 'Shop Sign N4'
        },
        {
          kanji: '営業時間',
          kana: 'えいぎょうじかん',
          romaji: 'eigyoujikan',
          meaningEn: 'business hours, opening hours',
          meaningBn: 'ব্যবসার কার্যকাল / খোলার সময়',
          tag: 'Shop Sign N4'
        },
        {
          kanji: '営業',
          kana: 'えいぎょう',
          romaji: 'eigyou',
          meaningEn: 'business, operations, sales',
          meaningBn: 'ব্যবসা / বাণিজ্যিক কার্যক্রম',
          tag: 'Business N4'
        },
        {
          kanji: '営業所',
          kana: 'えいぎょうしょ',
          romaji: 'eigyousho',
          meaningEn: 'sales branch, business office',
          meaningBn: 'শাখা অফিস / ব্যবসাকেন্দ্র',
          tag: 'Official'
        },
        {
          kanji: '年中無休で営業',
          kana: 'ねんじゅウムきゅうでえいぎょう',
          romaji: 'nenjuumukyuu de eigyou',
          meaningEn: 'open all year round without holidays',
          meaningBn: 'বছরের ৩৬৫ দিনই খোলা থাকে',
          tag: 'Shop Sign'
        },
        {
          kanji: '営業停止',
          kana: 'えいぎょうていし',
          romaji: 'eigyou teishi',
          meaningEn: 'suspension of business',
          meaningBn: 'সাময়িকভাবে ব্যবসা বন্ধ থাকা',
          tag: 'Notice'
        }
      ],
      sentences: [
        {
          ja: 'ドアに「営業中」の看板が出ているので入れます。',
          romaji: 'Doa ni "eigyouchuu" no kanban ga dete iru node hairemasu.',
          meaningEn: 'The "Open for Business" sign is hanging on the door, so we can enter.',
          meaningBn: 'দরজায় "খোলা (営業中)" সাইনবোর্ড ঝুলছে, তাই আমরা ভেতরে ঢুকতে পারব।'
        },
        {
          ja: 'このカフェの営業時間は朝八時から夜十時までです。',
          romaji: 'Kono kafe no eigyoujikan wa asa hachiji kara yoru juuji made desu.',
          meaningEn: 'This cafe\'s business hours are from 8:00 AM to 10:00 PM.',
          meaningBn: 'এই ক্যাফের খোলার সময় সকাল ৮টা থেকে রাত ১০টা পর্যন্ত।'
        },
        {
          ja: '本日の営業は終了いたしました。',
          romaji: 'Honjitsu no eigyou wa shuuryou itashimashita.',
          meaningEn: 'Today\'s business operations have ended.',
          meaningBn: 'আজকের মতো দোকানের বাণিজ্যিক কার্যক্রম সমাপ্ত হয়েছে।'
        }
      ],
      tamagoTip: {
        bn: 'দোকান, রেস্তোরাঁ ও ব্যাংকের ফটকে সবুজ বা কাঠে 「営業中」 ঝোলানো থাকলে বুঝতে হবে প্রতিষ্ঠানটি খোলা আছে।',
        en: 'A sign saying 「営業中」 indicates the store or eatery is currently open for customers.'
      }
    },

    // 15. 徒歩
    {
      id: 'l5-toho',
      kanji: '徒歩',
      emoji: '🚶‍♂️',
      strokeCount: 15,
      jlpt: 'N4',
      category: 'visual_recognition',
      readings: {
        onyomi: [
          { kana: 'トホ', romaji: 'toho' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'on foot, walking (distance indicator)',
        bn: 'পায়ে হেঁটে (দূরত্ব নির্দেশক)'
      },
      vocab: [
        {
          kanji: '徒歩',
          kana: 'とほ',
          romaji: 'toho',
          meaningEn: 'on foot, walking',
          meaningBn: 'পায়ে হেঁটে',
          tag: 'Access N4'
        },
        {
          kanji: '徒歩五分',
          kana: 'とほごふん',
          romaji: 'tohogofun',
          meaningEn: '5-minute walk (approx. 400m)',
          meaningBn: 'পায়ে হেঁটে ৫ মিনিটের পথ (প্রায় ৪০০ মি.)',
          tag: 'Real Estate'
        },
        {
          kanji: '徒歩圏内',
          kana: 'とほけんない',
          romaji: 'tohokennai',
          meaningEn: 'within walking distance',
          meaningBn: 'হাঁটা দূরত্বের সীমানার মধ্যে',
          tag: 'Access'
        },
        {
          kanji: '歩く',
          kana: 'あるく',
          romaji: 'aruku',
          meaningEn: 'to walk',
          meaningBn: 'হাঁটা',
          tag: 'Verb N5'
        },
        {
          kanji: '散歩',
          kana: 'さんぽ',
          romaji: 'sanpo',
          meaningEn: 'walk, stroll',
          meaningBn: 'সান্ধ্যকালীন বা সকালের সান্ধ্যভ্রমণ',
          tag: 'Daily N5'
        },
        {
          kanji: '歩道',
          kana: 'ほどう',
          romaji: 'hodou',
          meaningEn: 'pedestrian sidewalk',
          meaningBn: 'ফুটপাত / পথচারীদের হাঁটার রাস্তা',
          tag: 'Road N4'
        }
      ],
      sentences: [
        {
          ja: '私のアパートは駅から徒歩三分で、とても便利です。',
          romaji: 'Watashi no apaato wa eki kara toho sanpun de, totemo benri desu.',
          meaningEn: 'My apartment is a 3-minute walk from the station, which is very convenient.',
          meaningBn: 'আমার অ্যাপার্টমেন্টটি স্টেশন থেকে পায়ে হেঁটে মাত্র ৩ মিনিটের পথ, খুবই সুবিধাজনক।'
        },
        {
          ja: '店へのアクセス：新宿駅東口より徒歩七分。',
          romaji: 'Mise e no akusesu: Shinjuku eki higashiguchi yori toho nanapun.',
          meaningEn: 'Access to shop: 7-minute walk from Shinjuku Station East Exit.',
          meaningBn: 'দোকানে পৌঁছানোর উপায়: শিনজুকু স্টেশনের পূর্ব গেট থেকে হেঁটে ৭ মিনিট।'
        },
        {
          ja: '気候がいいので、駅まで徒歩で行きました。',
          romaji: 'Kikou ga ii node, eki made toho de ikimashita.',
          meaningEn: 'Because the weather was nice, I went to the station on foot.',
          meaningBn: 'আবহাওয়া ভালো থাকায় আমি পায়ে হেঁটে স্টেশনে গিয়েছি।'
        }
      ],
      tamagoTip: {
        bn: 'জাপানের বাড়ি ভাড়া (不動産) ও রেস্তোরাঁর বিজ্ঞাপনে স্টেশনের দূরত্ব সর্বদা 「徒歩○分」 (মিনিটে ৮০ মিটার হিসাব) লেখা থাকে।',
        en: 'Seen on all Japanese real estate and restaurant maps. 徒歩○分 measures walking time (80m/min).'
      }
    }
  ]
};
