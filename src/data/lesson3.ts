import { Lesson } from '../types/kanji';

export const lesson3: Lesson = {
  id: 3,
  number: 3,
  titleJa: 'いつ、どこで？',
  titleRomaji: 'Itsu, doko de?',
  titleBn: 'কখন, কোথায়? (সময়, বার, শিডিউল ও স্থান)',
  titleEn: 'When and Where? (Days, Time, Schedule & Meeting Places)',
  descriptionBn: 'জাপানে অ্যাপয়েন্টমেন্ট নির্ধারণ, সপ্তাহের দিন, সময়, তারিখ এবং সাক্ষাতের স্থান প্রকাশের জন্য আবশ্যক কাঞ্জি।',
  descriptionEn: 'Essential Kanji for arranging schedules, days of the week, time expressions, and meeting venues in Japan.',
  kanjiList: [
    // --- MAIN KANJI (書ける) ---
    // 1. 月
    {
      id: 'l3-tsuki',
      kanji: '月',
      emoji: '🌙',
      strokeCount: 4,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ゲツ', romaji: 'getsu' },
          { kana: 'ガツ', romaji: 'gatsu' }
        ],
        kunyomi: [
          { kana: 'つき', romaji: 'tsuki' }
        ]
      },
      meanings: {
        en: 'moon, month, Monday',
        bn: 'চাঁদ, মাস, সোমবার'
      },
      vocab: [
        {
          kanji: '月曜日',
          kana: 'げつようび',
          romaji: 'getsuyoubi',
          meaningEn: 'Monday',
          meaningBn: 'সোমবার',
          tag: 'Days N5'
        },
        {
          kanji: '一月',
          kana: 'いちがつ',
          romaji: 'ichigatsu',
          meaningEn: 'January',
          meaningBn: 'জানুয়ারি মাস',
          tag: 'Month N5'
        },
        {
          kanji: '今月',
          kana: 'こんげつ',
          romaji: 'kongetsu',
          meaningEn: 'this month',
          meaningBn: 'এই মাস',
          tag: 'Time N5'
        },
        {
          kanji: '来月',
          kana: 'らいげつ',
          romaji: 'raigetsu',
          meaningEn: 'next month',
          meaningBn: 'পরের মাস',
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
          kanji: '月',
          kana: 'つき',
          romaji: 'tsuki',
          meaningEn: 'moon',
          meaningBn: 'চাঁদ',
          tag: 'Nature N5'
        }
      ],
      sentences: [
        {
          ja: '月曜日の朝にミーティングがあります。',
          kana: 'げつようびのあさにミーティングがあります。',
          romaji: 'Getsuyoubi no asa ni miitingu ga arimasu.',
          meaningEn: 'There is a meeting on Monday morning.',
          meaningBn: 'সোমবার সকালে একটি মিটিং আছে।'
        },
        {
          ja: '来月の五日に日本へ行きます。',
          kana: 'らいげつのいつかににほんへいきます。',
          romaji: 'Raigetsu no itsuka ni Nihon e ikimasu.',
          meaningEn: 'I will go to Japan on the 5th of next month.',
          meaningBn: 'আগামী মাসের ৫ তারিখে আমি জাপান যাব।'
        },
        {
          ja: '今夜は月がとてもきれいです。',
          kana: 'こんやはつきがとてもきれいです。',
          romaji: 'Konya wa tsuki ga totemo kirei desu.',
          meaningEn: 'The moon is very beautiful tonight.',
          meaningBn: 'আজ রাতে চাঁদটি ভীষণ সুন্দর।'
        }
      ],
      tamagoTip: {
        bn: 'অর্ধচন্দ্র বা ক্রিসেন্ট চাঁদের অবয়ব থেকে 月 কাঞ্জিটি এসেছে। সপ্তাহের প্রথম কাজের দিন সোমবার হলো 月曜日।',
        en: 'Pictograph of a crescent moon. Monday is moon day (Getsuyoubi).'
      }
    },

    // 2. 火
    {
      id: 'l3-hi',
      kanji: '火',
      emoji: '🔥',
      strokeCount: 4,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'カ', romaji: 'ka' }
        ],
        kunyomi: [
          { kana: 'ひ', romaji: 'hi' },
          { kana: 'ほ', romaji: 'ho' }
        ]
      },
      meanings: {
        en: 'fire, Tuesday',
        bn: 'আগুন, মঙ্গলবার'
      },
      vocab: [
        {
          kanji: '火曜日',
          kana: 'かようび',
          romaji: 'kayoubi',
          meaningEn: 'Tuesday',
          meaningBn: 'মঙ্গলবার',
          tag: 'Days N5'
        },
        {
          kanji: '火',
          kana: 'ひ',
          romaji: 'hi',
          meaningEn: 'fire, flame',
          meaningBn: 'আগুন, শিখা',
          tag: 'Daily N5'
        },
        {
          kanji: '花火',
          kana: 'はなび',
          romaji: 'hanabi',
          meaningEn: 'fireworks',
          meaningBn: 'আতশবাজি',
          tag: 'Culture N4'
        },
        {
          kanji: '火事',
          kana: 'かじ',
          romaji: 'kaji',
          meaningEn: 'fire (disaster)',
          meaningBn: 'অগ্নিকাণ্ড',
          tag: 'Emergency N4'
        },
        {
          kanji: '火山',
          kana: 'かざん',
          romaji: 'kazan',
          meaningEn: 'volcano',
          meaningBn: 'আগ্নেয়গিরি',
          tag: 'Geography N4'
        },
        {
          kanji: '消火器',
          kana: 'しょうかき',
          romaji: 'shoukaki',
          meaningEn: 'fire extinguisher',
          meaningBn: 'অগ্নি নির্বাপক যন্ত্র',
          tag: 'Safety'
        }
      ],
      sentences: [
        {
          ja: '火曜日は燃えるゴミの日です。',
          romaji: 'Kayoubi wa moeru gomi no hi desu.',
          meaningEn: 'Tuesday is the burnable garbage day.',
          meaningBn: 'মঙ্গলবার হলো পচনশীল/দাহ্য আবর্জনা ফেলার দিন।'
        },
        {
          ja: '料理のあと、火を止めました。',
          romaji: 'Ryouri no ato, hi o tomemashita.',
          meaningEn: 'After cooking, I turned off the fire.',
          meaningBn: 'রান্নার পর আমি আগুন নিভিয়ে দিয়েছি।'
        },
        {
          ja: '夏休みに友達と花火を見ました。',
          romaji: 'Natsuyasumi ni tomodachi to hanabi o mimashita.',
          meaningEn: 'I watched fireworks with my friend during summer vacation.',
          meaningBn: 'গ্রীষ্মের ছুটিতে বন্ধুদের সাথে আতশবাজি উৎসব দেখেছি।'
        }
      ],
      tamagoTip: {
        bn: 'দপ করে জ্বলে ওঠা আগুনের শিখা থেকে 火 কাঞ্জি এসেছে। জাপানে মঙ্গলবার বর্জ্য ব্যবস্থাপনায় 火曜日 অত্যন্ত জরুরি।',
        en: 'Depicts leaping flames of a fire. Mars/Fire day is Tuesday (Kayoubi).'
      }
    },

    // 3. 水
    {
      id: 'l3-mizu',
      kanji: '水',
      emoji: '💧',
      strokeCount: 4,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'スイ', romaji: 'sui' }
        ],
        kunyomi: [
          { kana: 'みず', romaji: 'mizu' }
        ]
      },
      meanings: {
        en: 'water, Wednesday',
        bn: 'পানি, বুধবার'
      },
      vocab: [
        {
          kanji: '水曜日',
          kana: 'すいようび',
          romaji: 'suiyoubi',
          meaningEn: 'Wednesday',
          meaningBn: 'বুধবার',
          tag: 'Days N5'
        },
        {
          kanji: '水',
          kana: 'みず',
          romaji: 'mizu',
          meaningEn: 'cold water',
          meaningBn: 'পানি (ঠাণ্ডা/স্বাভাবিক)',
          tag: 'Daily N5'
        },
        {
          kanji: 'お水',
          kana: 'おみず',
          romaji: 'omizu',
          meaningEn: 'water (polite, e.g. restaurant)',
          meaningBn: 'খাবার পানি (বিনম্র রূপ)',
          tag: 'Restaurant N5'
        },
        {
          kanji: '水泳',
          kana: 'すいえい',
          romaji: 'suiei',
          meaningEn: 'swimming',
          meaningBn: 'সাঁতার',
          tag: 'Sports N4'
        },
        {
          kanji: '水道',
          kana: 'すいどう',
          romaji: 'suidou',
          meaningEn: 'tap water, water supply',
          meaningBn: 'পানির পাইপলাইন / কলের পানি',
          tag: 'Daily N4'
        },
        {
          kanji: '水着',
          kana: 'みずぎ',
          romaji: 'mizugi',
          meaningEn: 'swimsuit',
          meaningBn: 'সাঁতারের পোশাক',
          tag: 'Daily N4'
        }
      ],
      sentences: [
        {
          ja: '水曜日にテストがあります。',
          romaji: 'Suiyoubi ni tesuto ga arimasu.',
          meaningEn: 'There is a test on Wednesday.',
          meaningBn: 'বুধবার একটি পরীক্ষা রয়েছে।'
        },
        {
          ja: 'すみません、お水を一杯ください。',
          romaji: 'Sumimasen, omizu o ippai kudasai.',
          meaningEn: 'Excuse me, please give me a glass of water.',
          meaningBn: 'শুনুন, দয়া করে আমাকে এক গ্লাস পানি দিন।'
        },
        {
          ja: '日本の水道水はそのまま飲めます。',
          romaji: 'Nihon no suidousui wa sonomama nomemasu.',
          meaningEn: 'Tap water in Japan can be drunk directly.',
          meaningBn: 'জাপানের কলের পানি সরাসরি পান করা যায়।'
        }
      ],
      tamagoTip: {
        bn: 'মাঝখান দিয়ে জলধারা বয়ে চলা এবং দুপাশে পানির ছিটার রূপ থেকেই 水 কাঞ্জি এসেছে। বুধবার হলো 水曜日।',
        en: 'Represents a meandering stream with splashes. Wednesday is water day (Suiyoubi).'
      }
    },

    // 4. 木
    {
      id: 'l3-ki',
      kanji: '木',
      emoji: '🌳',
      strokeCount: 4,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'モク', romaji: 'moku' },
          { kana: 'ボク', romaji: 'boku' }
        ],
        kunyomi: [
          { kana: 'き', romaji: 'ki' },
          { kana: 'こ', romaji: 'ko' }
        ]
      },
      meanings: {
        en: 'tree, wood, Thursday',
        bn: 'গাছ, কাঠ, বৃহস্পতিবার'
      },
      vocab: [
        {
          kanji: '木曜日',
          kana: 'もくようび',
          romaji: 'mokuyoubi',
          meaningEn: 'Thursday',
          meaningBn: 'বৃহস্পতিবার',
          tag: 'Days N5'
        },
        {
          kanji: '木',
          kana: 'き',
          romaji: 'ki',
          meaningEn: 'tree, wood',
          meaningBn: 'গাছ, কাঠ',
          tag: 'Nature N5'
        },
        {
          kanji: '木村',
          kana: 'きむら',
          romaji: 'Kimura',
          meaningEn: 'Kimura (common surname)',
          meaningBn: 'কিমুরা (জাপানি পদবি)',
          tag: 'Name'
        },
        {
          kanji: '大木',
          kana: 'たいぼく',
          romaji: 'taiboku',
          meaningEn: 'large tree',
          meaningBn: 'বিশাল গাছ',
          tag: 'Nature'
        },
        {
          kanji: '木造',
          kana: 'もくぞう',
          romaji: 'mokuzou',
          meaningEn: 'wooden building/structure',
          meaningBn: 'কাঠের তৈরি বাড়ি/স্থাপনা',
          tag: 'Housing N4'
        },
        {
          kanji: '植木',
          kana: 'うえき',
          romaji: 'ueki',
          meaningEn: 'potted plant, garden tree',
          meaningBn: 'টবের গাছ, বাগানের গাছ',
          tag: 'Daily'
        }
      ],
      sentences: [
        {
          ja: '木曜日の午後に図書館へ行きます。',
          romaji: 'Mokuyoubi no gogo ni toshokan e ikimasu.',
          meaningEn: 'I will go to the library on Thursday afternoon.',
          meaningBn: 'বৃহস্পতিবার বিকেলে আমি লাইব্রেরিতে যাব।'
        },
        {
          ja: '庭に大きい桜の木があります。',
          romaji: 'Niwa ni ookii sakura no ki ga arimasu.',
          meaningEn: 'There is a big cherry blossom tree in the garden.',
          meaningBn: 'বাগানে একটি বড় সাকুরা গাছ রয়েছে।'
        },
        {
          ja: '日本には木造のアパートが多いです。',
          romaji: 'Nihon ni wa mokuzou no apaato ga ooi desu.',
          meaningEn: 'There are many wooden apartments in Japan.',
          meaningBn: 'জাপানে কাঠের তৈরি অ্যাপার্টমেন্টের সংখ্যা অনেক বেশি।'
        }
      ],
      tamagoTip: {
        bn: 'গাছের ডালপালা ও মূল বা শিকড়ের চিত্র থেকেই 木 কাঞ্জির উৎপত্তি। বৃহস্পতিবার হলো 木曜日।',
        en: 'Depicts tree branches above and roots below. Thursday is wood day (Mokuyoubi).'
      }
    },

    // 5. 金
    {
      id: 'l3-kin',
      kanji: '金',
      emoji: '🪙',
      strokeCount: 8,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'キン', romaji: 'kin' },
          { kana: 'コン', romaji: 'kon' }
        ],
        kunyomi: [
          { kana: 'かね', romaji: 'kane' },
          { kana: 'かな', romaji: 'kana' }
        ]
      },
      meanings: {
        en: 'gold, money, Friday',
        bn: 'সোনা, অর্থ/টাকা, শুক্রবার'
      },
      vocab: [
        {
          kanji: '金曜日',
          kana: 'きんようび',
          romaji: 'kin\'youbi',
          meaningEn: 'Friday',
          meaningBn: 'শুক্রবার',
          tag: 'Days N5'
        },
        {
          kanji: 'お金',
          kana: 'おかね',
          romaji: 'okane',
          meaningEn: 'money',
          meaningBn: 'টাকা, অর্থ',
          tag: 'Daily N5'
        },
        {
          kanji: '金',
          kana: 'きん',
          romaji: 'kin',
          meaningEn: 'gold',
          meaningBn: 'সোনা / স্বর্ণ',
          tag: 'Material N5'
        },
        {
          kanji: '金メダル',
          kana: 'きんメダル',
          romaji: 'kin medaru',
          meaningEn: 'gold medal',
          meaningBn: 'স্বর্ণপদক',
          tag: 'General'
        },
        {
          kanji: '料金',
          kana: 'りょうきん',
          romaji: 'ryoukin',
          meaningEn: 'fee, fare, charge',
          meaningBn: 'ভাড়া, ফি, চার্জ',
          tag: 'Daily N4'
        },
        {
          kanji: '貯金',
          kana: 'ちょきん',
          romaji: 'chokin',
          meaningEn: 'savings (money)',
          meaningBn: 'টাকা সঞ্চয় / জমা',
          tag: 'Finance N4'
        }
      ],
      sentences: [
        {
          ja: '金曜日の夜、友達とご飯を食べます。',
          romaji: 'Kin\'youbi no yoru, tomodachi to gohan o tabemasu.',
          meaningEn: 'On Friday evening, I will have dinner with my friends.',
          meaningBn: 'শুক্রবার রাতে বন্ধুদের সাথে রাতের খাবার খাব।'
        },
        {
          ja: '財布にお金があまり入っていません。',
          romaji: 'Saifu ni okane ga amari haitte imasen.',
          meaningEn: 'There is not much money in my wallet.',
          meaningBn: 'আমার মানিব্যাগে তেমন বেশি টাকা নেই।'
        },
        {
          ja: 'バスの料金は二百二十円です。',
          romaji: 'Basu no ryoukin wa nihyaku nijuuen desu.',
          meaningEn: 'The bus fare is 220 yen.',
          meaningBn: 'বাসের ভাড়া ২২০ ইয়েন।'
        }
      ],
      tamagoTip: {
        bn: 'মাটির গভীরে চাপা থাকা সোনার খণ্ড নির্দেশক চিত্র থেকে 金 সৃষ্টি হয়েছে। অর্থ (お金) ও শুক্রবার (金曜日)।',
        en: 'Gold nuggets buried under the ground. Friday is gold/metal day (Kin\'youbi).'
      }
    },

    // 6. 土
    {
      id: 'l3-tsuchi',
      kanji: '土',
      emoji: '🪴',
      strokeCount: 3,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ド', romaji: 'do' },
          { kana: 'ト', romaji: 'to' }
        ],
        kunyomi: [
          { kana: 'つち', romaji: 'tsuchi' }
        ]
      },
      meanings: {
        en: 'soil, earth, Saturday',
        bn: 'মাটি, শনিবারে'
      },
      vocab: [
        {
          kanji: '土曜日',
          kana: 'どようび',
          romaji: 'doyoubi',
          meaningEn: 'Saturday',
          meaningBn: 'শনিবার',
          tag: 'Days N5'
        },
        {
          kanji: '土',
          kana: 'つち',
          romaji: 'tsuchi',
          meaningEn: 'soil, earth, dirt',
          meaningBn: 'মাটি',
          tag: 'Nature N5'
        },
        {
          kanji: '土地',
          kana: 'とち',
          romaji: 'tochi',
          meaningEn: 'land, plot of land',
          meaningBn: 'জমি, ভূখণ্ড',
          tag: 'Housing N4'
        },
        {
          kanji: 'お土産',
          kana: 'おみやげ',
          romaji: 'omiyage',
          meaningEn: 'souvenir, local present',
          meaningBn: 'স্মারক উপহার (স্মৃতিচিহ্ন)',
          tag: 'Culture N4'
        },
        {
          kanji: '粘土',
          kana: 'ねんど',
          romaji: 'nendo',
          meaningEn: 'clay',
          meaningBn: 'কাদা মাটি / ক্লে',
          tag: 'Material'
        },
        {
          kanji: '土日',
          kana: 'どにち',
          romaji: 'donichi',
          meaningEn: 'Saturday and Sunday (weekend)',
          meaningBn: 'শনি ও রবিবার (সাপ্তাহিক ছুটি)',
          tag: 'Daily N5'
        }
      ],
      sentences: [
        {
          ja: '土曜日は学校が休みです。',
          romaji: 'Doyoubi wa gakkou ga yasumi desu.',
          meaningEn: 'School is closed on Saturday.',
          meaningBn: 'শনিবার স্কুল বন্ধ থাকে।'
        },
        {
          ja: '土日は家でゆっくり休みます。',
          romaji: 'Donichi wa ie de yukkuri yasumimasu.',
          meaningEn: 'On weekends (Sat/Sun), I rest comfortably at home.',
          meaningBn: 'শনি-রবিবারে আমি বাড়িতে আয়েশ করে বিশ্রাম নিই।'
        },
        {
          ja: '京都へ旅行してお土産を買いました。',
          romaji: 'Kyouto e ryokou shite omiyage o kaimashita.',
          meaningEn: 'I traveled to Kyoto and bought souvenirs.',
          meaningBn: 'কিয়োটো ভ্রমণ করে আমি স্মারক উপহার কিনেছি।'
        }
      ],
      tamagoTip: {
        bn: 'মাটির ওপর গজিয়ে ওঠা নতুন চারার স্তূপ থেকে 土 কাঞ্জি এসেছে। শনি-রবিবার বোঝাতে 土日 সংক্ষেপ ব্যবহৃত হয়।',
        en: 'A sprout shooting up from a mound of soil. Saturday is earth/soil day (Doyoubi).'
      }
    },

    // 7. 曜
    {
      id: 'l3-you',
      kanji: '曜',
      emoji: '📅',
      strokeCount: 18,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ヨウ', romaji: 'you' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'day of the week',
        bn: 'সপ্তাহের বার'
      },
      vocab: [
        {
          kanji: '曜日',
          kana: 'ようび',
          romaji: 'youbi',
          meaningEn: 'day of the week',
          meaningBn: 'সপ্তাহের বার',
          tag: 'Days N5'
        },
        {
          kanji: '何曜日',
          kana: 'なんようび',
          romaji: 'nanyoubi',
          meaningEn: 'which day of the week',
          meaningBn: 'কী বার',
          tag: 'Question N5'
        },
        {
          kanji: '日曜日',
          kana: 'にちようび',
          romaji: 'nichiyoubi',
          meaningEn: 'Sunday',
          meaningBn: 'রবিবার',
          tag: 'Days N5'
        },
        {
          kanji: '月曜日',
          kana: 'げつようび',
          romaji: 'getsuyoubi',
          meaningEn: 'Monday',
          meaningBn: 'সোমবার',
          tag: 'Days N5'
        },
        {
          kanji: '金曜日',
          kana: 'きんようび',
          romaji: 'kin\'youbi',
          meaningEn: 'Friday',
          meaningBn: 'শুক্রবার',
          tag: 'Days N5'
        },
        {
          kanji: '土曜日',
          kana: 'どようび',
          romaji: 'doyoubi',
          meaningEn: 'Saturday',
          meaningBn: 'শনিবার',
          tag: 'Days N5'
        }
      ],
      sentences: [
        {
          ja: '今日は何曜日ですか。ー木曜日です。',
          kana: 'きょうはなんようびですか。ーもくようびです。',
          romaji: 'Kyou wa nanyoubi desu ka. - Mokuyoubi desu.',
          meaningEn: 'What day is it today? - It is Thursday.',
          meaningBn: 'আজ কী বার? — আজ বৃহস্পতিবার।'
        },
        {
          ja: 'ゴミの日は曜日によって違います。',
          kana: 'ごみのひはようびによってちがいます。',
          romaji: 'Gomi no hi wa youbi ni yotte chigaimasu.',
          meaningEn: 'Garbage collection days differ depending on the day of the week.',
          meaningBn: 'আবর্জনা ফেলার দিন সপ্তাহের বার অনুযায়ী পরিবর্তিত হয়।'
        },
        {
          ja: '日曜日にアルバイトをします。',
          kana: 'にちようびにあるばいとをします。',
          romaji: 'Nichiyoubi ni arubaito o shimasu.',
          meaningEn: 'I work a part-time job on Sunday.',
          meaningBn: 'রবিবারে আমি পার্টটাইম চাকরি (আরুবাইতো) করি।'
        }
      ],
      tamagoTip: {
        bn: 'বামে সূর্য (日) এবং ডানে উজ্জ্বল ডানা মেলা জ্যোতিষ্ক। সপ্তাহের সাতটি গ্রহ/দিনের প্রত্যয় হিসেবে 〜曜日 ব্যবহৃত হয়।',
        en: 'Combines the sun (日) with shining feathers. Essential suffix for all days of the week (~youbi).'
      }
    },

    // 8. 何
    {
      id: 'l3-nani',
      kanji: '何',
      emoji: '❓',
      strokeCount: 7,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'カ', romaji: 'ka' }
        ],
        kunyomi: [
          { kana: 'なに', romaji: 'nani' },
          { kana: 'なん', romaji: 'nan' }
        ]
      },
      meanings: {
        en: 'what, which, how many',
        bn: 'কী, কত, কোনটি'
      },
      vocab: [
        {
          kanji: '何',
          kana: 'なに / なん',
          romaji: 'nani / nan',
          meaningEn: 'what',
          meaningBn: 'কী',
          tag: 'Question N5'
        },
        {
          kanji: '何時',
          kana: 'なんじ',
          romaji: 'nanji',
          meaningEn: 'what time',
          meaningBn: 'কয়টা বাজে / কোন সময়',
          tag: 'Time N5'
        },
        {
          kanji: '何人',
          kana: 'なんにん',
          romaji: 'nannin',
          meaningEn: 'how many people',
          meaningBn: 'কতজন মানুষ',
          tag: 'Counter N5'
        },
        {
          kanji: '何才 / 何歳',
          kana: 'なんさい',
          romaji: 'nansai',
          meaningEn: 'how old',
          meaningBn: 'কত বয়স',
          tag: 'Age N5'
        },
        {
          kanji: '何分',
          kana: 'なんぷん',
          romaji: 'nanpun',
          meaningEn: 'how many minutes',
          meaningBn: 'কত মিনিট',
          tag: 'Time N5'
        },
        {
          kanji: '何度も',
          kana: 'なんども',
          romaji: 'nandomo',
          meaningEn: 'many times',
          meaningBn: 'বহুবার / বারবার',
          tag: 'Daily N4'
        }
      ],
      sentences: [
        {
          ja: '今、何時ですか。ー午後三時です。',
          romaji: 'Ima, nanji desu ka. - Gogo sanji desu.',
          meaningEn: 'What time is it now? - It is 3:00 PM.',
          meaningBn: 'এখন কয়টা বাজে? — দুপুর ৩টা।'
        },
        {
          ja: '朝ごはんに何を食べましたか。',
          romaji: 'Asagohan ni nani o tabemashita ka.',
          meaningEn: 'What did you eat for breakfast?',
          meaningBn: 'সকালের নাস্তায় আপনি কী খেয়েছেন?'
        },
        {
          ja: '駅からここまで何分かかりますか。',
          romaji: 'Eki kara koko made nanpun kakarimasu ka.',
          meaningEn: 'How many minutes does it take from the station to here?',
          meaningBn: 'স্টেশন থেকে এখানে আসতে কত মিনিট সময় লাগে?'
        }
      ],
      tamagoTip: {
        bn: 'বামে মানুষ (亻) কাঁধে বোঝা বয়ে নিয়ে প্রশ্ন করছে "এটা কী?"। প্রশ্নবোধক বাক্য তৈরিতে 何 অপরিহার্য।',
        en: 'A person carrying a burden asking "What is this?". Essential question word for what/how many.'
      }
    },

    // 9. 年
    {
      id: 'l3-nen',
      kanji: '年',
      emoji: '🗓️',
      strokeCount: 6,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ネン', romaji: 'nen' }
        ],
        kunyomi: [
          { kana: 'とし', romaji: 'toshi' }
        ]
      },
      meanings: {
        en: 'year, age',
        bn: 'বছর, সাল, বয়স'
      },
      vocab: [
        {
          kanji: '今年',
          kana: 'ことし',
          romaji: 'kotoshi',
          meaningEn: 'this year',
          meaningBn: 'এই বছর',
          tag: 'Time N5'
        },
        {
          kanji: '来年',
          kana: 'らいねん',
          romaji: 'rainen',
          meaningEn: 'next year',
          meaningBn: 'আগামী বছর',
          tag: 'Time N5'
        },
        {
          kanji: '去年',
          kana: 'きょねん',
          romaji: 'kyonen',
          meaningEn: 'last year',
          meaningBn: 'গত বছর',
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
          kanji: '一年生',
          kana: 'いちねんせい',
          romaji: 'ichinensei',
          meaningEn: 'first-year student',
          meaningBn: 'প্রথম বর্ষের শিক্ষার্থী',
          tag: 'School N5'
        },
        {
          kanji: '年末',
          kana: 'ねんまつ',
          romaji: 'nenmatsu',
          meaningEn: 'end of the year',
          meaningBn: 'বছরের শেষ সময়',
          tag: 'Calendar N4'
        }
      ],
      sentences: [
        {
          ja: '私は去年の十月に日本へ来ました。',
          romaji: 'Watashi wa kyonen no juugatsu ni Nihon e kimashita.',
          meaningEn: 'I came to Japan in October of last year.',
          meaningBn: 'আমি গত বছরের অক্টোবর মাসে জাপানে এসেছি।'
        },
        {
          ja: '今年は日本語能力試験（JLPT）を受けます。',
          romaji: 'Kotoshi wa Nihongo nouryoku shiken (JLPT) o ukemasu.',
          meaningEn: 'This year, I will take the Japanese Language Proficiency Test.',
          meaningBn: 'এই বছর আমি জেএলপিটি (JLPT) পরীক্ষা দেব।'
        },
        {
          ja: '毎年、お正月に神社へお参りに行きます。',
          romaji: 'Maitoshi, oshougatsu ni jinja e omairi ni ikimasu.',
          meaningEn: 'Every year, I go to pray at the shrine during New Year.',
          meaningBn: 'প্রতি বছর নববর্ষে আমি মন্দিরে প্রার্থনা করতে যাই।'
        }
      ],
      tamagoTip: {
        bn: 'ধান বা ফসলের বার্ষিক কাটার চক্র থেকে 年 (বছর) এর সৃষ্টি। চলতি বছর বোঝাতে "今年 (ことし)" একটি বিশেষ রিডিং।',
        en: 'Originally represented annual harvest cycles. Note the special reading for this year: 今年 (kotoshi).'
      }
    },

    // 10. 時
    {
      id: 'l3-ji',
      kanji: '時',
      emoji: '⏰',
      strokeCount: 10,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ジ', romaji: 'ji' }
        ],
        kunyomi: [
          { kana: 'とき', romaji: 'toki' },
          { kana: 'どき', romaji: 'doki' }
        ]
      },
      meanings: {
        en: 'time, hour, o\'clock, when',
        bn: 'সময়, ঘণ্টা, -টা বাজে, যখন'
      },
      vocab: [
        {
          kanji: '時間',
          kana: 'じかん',
          romaji: 'jikan',
          meaningEn: 'time, hours',
          meaningBn: 'সময়, ঘণ্টার ব্যপ্তি',
          tag: 'Time N5'
        },
        {
          kanji: '時',
          kana: 'とき',
          romaji: 'toki',
          meaningEn: 'when, time',
          meaningBn: 'সময়, যখন',
          tag: 'Grammar N5'
        },
        {
          kanji: '一時',
          kana: 'いちじ',
          romaji: 'ichiji',
          meaningEn: 'one o\'clock',
          meaningBn: '১ টা বাজে',
          tag: 'Time N5'
        },
        {
          kanji: '時計',
          kana: 'とけい',
          romaji: 'tokei',
          meaningEn: 'clock, watch',
          meaningBn: 'ঘড়ি',
          tag: 'Daily N5'
        },
        {
          kanji: '時々',
          kana: 'ときどき',
          romaji: 'tokidoki',
          meaningEn: 'sometimes',
          meaningBn: 'মাঝে মাঝে / কখনো কখনো',
          tag: 'Adverb N5'
        },
        {
          kanji: '営業時間',
          kana: 'えいぎょうじかん',
          romaji: 'eigyoujikan',
          meaningEn: 'business hours',
          meaningBn: 'দোকান/অফিস খোলার সময়',
          tag: 'Shop N4'
        }
      ],
      sentences: [
        {
          ja: '明日の朝九時に駅で会いましょう。',
          romaji: 'Ashita no asa kuji ni eki de aimashou.',
          meaningEn: 'Let\'s meet at the station at 9 o\'clock tomorrow morning.',
          meaningBn: 'আগামীকাল সকাল ৯টায় স্টেশনে দেখা করা যাক।'
        },
        {
          ja: '忙しくて、勉強する時間がありません。',
          romaji: 'Isogashikute, benkyou suru jikan ga arimasen.',
          meaningEn: 'I am busy and have no time to study.',
          meaningBn: 'ব্যস্ততার কারণে পড়াশোনা করার সময় পাচ্ছি না।'
        },
        {
          ja: '子供の時、よくアニメを見ました。',
          romaji: 'Kodomo no toki, yoku anime o mimashita.',
          meaningEn: 'When I was a child, I often watched anime.',
          meaningBn: 'ছোটবেলায় আমি প্রচুর অ্যানিমে দেখতাম।'
        }
      ],
      tamagoTip: {
        bn: 'বামে সূর্য (日) এবং ডানে মন্দির (寺)। সূর্যালোক ও ছায়া দেখে মন্দিরের সময় নির্ধারণ থেকে 時 কাঞ্জির উৎপত্তি।',
        en: 'Combines the sun (日) and temple (寺), referring to reading the sundial at temples.'
      }
    },

    // 11. 間
    {
      id: 'l3-aida',
      kanji: '間',
      emoji: '⏳',
      strokeCount: 12,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'カン', romaji: 'kan' },
          { kana: 'ケン', romaji: 'ken' }
        ],
        kunyomi: [
          { kana: 'あいだ', romaji: 'aida' },
          { kana: 'ま', romaji: 'ma' }
        ]
      },
      meanings: {
        en: 'interval, between, duration, room',
        bn: 'মাঝখানে, ব্যবধান, সময়কাল'
      },
      vocab: [
        {
          kanji: '時間',
          kana: 'じかん',
          romaji: 'jikan',
          meaningEn: 'time, duration of hours',
          meaningBn: 'সময়, ঘণ্টার পরিমাপ',
          tag: 'Time N5'
        },
        {
          kanji: '間',
          kana: 'あいだ',
          romaji: 'aida',
          meaningEn: 'between, interval',
          meaningBn: 'মাঝখানে, মধ্যবর্তী স্থান',
          tag: 'Position N5'
        },
        {
          kanji: '一時間',
          kana: 'いちじかん',
          romaji: 'ichijikan',
          meaningEn: 'one hour',
          meaningBn: 'এক ঘণ্টা ব্যাপী',
          tag: 'Duration N5'
        },
        {
          kanji: '週間',
          kana: 'しゅうかん',
          romaji: 'shuukan',
          meaningEn: 'week (duration)',
          meaningBn: 'সপ্তাহের মেয়াদ',
          tag: 'Duration N5'
        },
        {
          kanji: '間に合う',
          kana: 'まにあう',
          romaji: 'maniau',
          meaningEn: 'to be in time for',
          meaningBn: 'নির্দিষ্ট সময়ে পৌঁছানো',
          tag: 'Verb N4'
        },
        {
          kanji: '人間',
          kana: 'にんげん',
          romaji: 'ningen',
          meaningEn: 'human being, person',
          meaningBn: 'মানুষ, মানবজাতি',
          tag: 'Daily N4'
        }
      ],
      sentences: [
        {
          ja: '東京から大阪まで新幹線で二時間半かかります。',
          romaji: 'Toukyou kara Oosaka made shinkansen de nijikanhan kakarimasu.',
          meaningEn: 'It takes 2.5 hours from Tokyo to Osaka by Shinkansen.',
          meaningBn: 'টোকিও থেকে ওসাকা যেতে বুলেট ট্রেনে আড়াই ঘণ্টা সময় লাগে।'
        },
        {
          ja: '銀行と郵便局の間にコンビニがあります。',
          romaji: 'Ginkou to yuubinkyoku no aida ni konbini ga arimasu.',
          meaningEn: 'There is a convenience store between the bank and post office.',
          meaningBn: 'ব্যাংক ও পোস্ট অফিসের মাঝখানে একটি কনভেনিয়েন্স স্টোর আছে।'
        },
        {
          ja: '走って電車に間に合いました。',
          romaji: 'Hashitte densha ni maniaimashita.',
          meaningEn: 'I ran and caught the train in time.',
          meaningBn: 'দৌড়ে গিয়ে সময়মতো ট্রেনে উঠতে পেরেছি।'
        }
      ],
      tamagoTip: {
        bn: 'দরজার কপাট (門) এর ফাঁক দিয়ে সূর্যের (日) আলো গলে পড়ার দৃশ্য। দুটি বস্তুর মাঝের শূন্যস্থান বা সময়ের ব্যবধান।',
        en: 'Sunlight (日) shining through the gap in closed gate doors (門). Signifies interval and duration.'
      }
    },

    // 12. 分
    {
      id: 'l3-fun',
      kanji: '分',
      emoji: '⏱️',
      strokeCount: 4,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ブン', romaji: 'bun' },
          { kana: 'フン', romaji: 'fun' },
          { kana: 'プン', romaji: 'pun' }
        ],
        kunyomi: [
          { kana: 'わ・かる', romaji: 'wa-karu' },
          { kana: 'わ・ける', romaji: 'wa-keru' }
        ]
      },
      meanings: {
        en: 'minute, part, understand, divide',
        bn: 'মিনিট, অংশ, বুঝতে পারা, ভাগ করা'
      },
      vocab: [
        {
          kanji: '分',
          kana: 'ふん / ぷん',
          romaji: 'fun / pun',
          meaningEn: 'minute(s)',
          meaningBn: 'মিনিট',
          tag: 'Counter N5'
        },
        {
          kanji: '分かる',
          kana: 'わかる',
          romaji: 'wakaru',
          meaningEn: 'to understand',
          meaningBn: 'বুঝতে পারা / জানা',
          tag: 'Verb N5'
        },
        {
          kanji: '十分',
          kana: 'じゅっぷん / じっぽん',
          romaji: 'juppun / jippun',
          meaningEn: 'ten minutes',
          meaningBn: 'দশ মিনিট',
          tag: 'Time N5'
        },
        {
          kanji: '半分',
          kana: 'はんぶん',
          romaji: 'hanbun',
          meaningEn: 'half',
          meaningBn: 'অর্ধেক / আধা',
          tag: 'Quantity N5'
        },
        {
          kanji: '自分',
          kana: 'じぶん',
          romaji: 'jibun',
          meaningEn: 'oneself',
          meaningBn: 'নিজে / স্বয়ং',
          tag: 'Daily N5'
        },
        {
          kanji: '気分',
          kana: 'きぶん',
          romaji: 'kibun',
          meaningEn: 'feeling, mood',
          meaningBn: 'শারীরিক অনুভূতি, মেজাজ',
          tag: 'Daily N4'
        }
      ],
      sentences: [
        {
          ja: '電車はあと五分で到着します。',
          romaji: 'Densha wa ato gofun de touchaku shimasu.',
          meaningEn: 'The train will arrive in 5 minutes.',
          meaningBn: 'ট্রেনটি আর ৫ মিনিটের মধ্যে এসে পৌঁছাবে।'
        },
        {
          ja: '日本語が少し分かります。',
          romaji: 'Nihongo ga sukoshi wakarimasu.',
          meaningEn: 'I understand a little Japanese.',
          meaningBn: 'আমি অল্প অল্প জাপানি বুঝতে পারি।'
        },
        {
          ja: '今日は気分がとても良いです。',
          romaji: 'Kyou wa kibun ga totemo yoi desu.',
          meaningEn: 'I feel very good today.',
          meaningBn: 'আজ আমার শরীর ও মন ভীষণ প্রফুল্ল লাগছে।'
        }
      ],
      tamagoTip: {
        bn: 'একটি বস্তুকে ছুরি (刀) দিয়ে দুই ভাগে ভাগ করার চিত্র। সময়ের ক্ষুদ্র ভাগ মিনিট (〜分) এবং বুঝতে পারা (分かる)।',
        en: 'Using a blade (刀) to divide something into parts (八). Means minute, divide, or understand.'
      }
    },

    // --- READ-ONLY KANJI (読める) ---
    // 13. 雨
    {
      id: 'l3-ame',
      kanji: '雨',
      emoji: '🌧️',
      strokeCount: 8,
      jlpt: 'N5',
      category: 'read_only',
      readings: {
        onyomi: [
          { kana: 'ウ', romaji: 'u' }
        ],
        kunyomi: [
          { kana: 'あめ', romaji: 'ame' },
          { kana: 'あま', romaji: 'ama' }
        ]
      },
      meanings: {
        en: 'rain',
        bn: 'বৃষ্টি'
      },
      vocab: [
        {
          kanji: '雨',
          kana: 'あめ',
          romaji: 'ame',
          meaningEn: 'rain',
          meaningBn: 'বৃষ্টি',
          tag: 'Weather N5'
        },
        {
          kanji: '大雨',
          kana: 'おおあめ',
          romaji: 'ooame',
          meaningEn: 'heavy rain, downpour',
          meaningBn: 'ভারী বৃষ্টিপাত / মুষলধারে বৃষ্টি',
          tag: 'Weather N4'
        },
        {
          kanji: '雨天',
          kana: 'うてん',
          romaji: 'uten',
          meaningEn: 'rainy weather',
          meaningBn: 'বৃষ্টির আবহাওয়া',
          tag: 'Notice N4'
        },
        {
          kanji: '雨具',
          kana: 'あまぐ',
          romaji: 'amagu',
          meaningEn: 'rain gear (umbrella, raincoat)',
          meaningBn: 'বৃষ্টির সরঞ্জাম (ছাতা, রেইনকোট)',
          tag: 'Daily'
        },
        {
          kanji: '梅雨',
          kana: 'つゆ / ばいう',
          romaji: 'tsuyu / baiu',
          meaningEn: 'rainy season (June-July in Japan)',
          meaningBn: 'জাপানের বর্ষাকাল (সুয়ু)',
          tag: 'Season N4'
        },
        {
          kanji: '雨水',
          kana: 'あまみず',
          romaji: 'amamizu',
          meaningEn: 'rainwater',
          meaningBn: 'বৃষ্টির পানি',
          tag: 'Daily'
        }
      ],
      sentences: [
        {
          ja: '外は雨が降っていますから、傘を持って行きます。',
          romaji: 'Soto wa ame ga futte imasu kara, kasa o motte ikimasu.',
          meaningEn: 'It is raining outside, so I will take an umbrella.',
          meaningBn: 'বাইরে বৃষ্টি হচ্ছে, তাই আমি ছাতা সঙ্গে নিয়ে যাচ্ছি।'
        },
        {
          ja: '雨天の場合はイベントを中止します。',
          romaji: 'Uten no baai wa ibento o chuushi shimasu.',
          meaningEn: 'In case of rain, the event will be cancelled.',
          meaningBn: 'বৃষ্টি হলে অনুষ্ঠানটি বাতিল করা হবে।'
        },
        {
          ja: '日本の梅雨は六月から七月までです。',
          romaji: 'Nihon no tsuyu wa rokugatsu kara nanagatsu made desu.',
          meaningEn: 'Japan\'s rainy season is from June to July.',
          meaningBn: 'জাপানের বর্ষাকাল জুন থেকে জুলাই মাস পর্যন্ত স্থায়ী হয়।'
        }
      ],
      tamagoTip: {
        bn: 'মেঘের ছাদ থেকে বৃষ্টির ফোঁটা ঝরে পড়ার দৃশ্য। জাপানে আবহাওয়ার পূর্বাভাস ও নোটিশে 「雨天 (বৃষ্টির কারণে)」 লেখা থাকে।',
        en: 'Pictograph of rain drops falling beneath a cloud. Look for 雨天 (rainy weather) on event notices.'
      }
    },

    // 14. 場所
    {
      id: 'l3-basho',
      kanji: '場所',
      emoji: '📍',
      strokeCount: 18,
      jlpt: 'N5',
      category: 'read_only',
      readings: {
        onyomi: [
          { kana: 'バショ', romaji: 'basho' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'place, location, venue',
        bn: 'স্থান, জায়গা, লোকেশন'
      },
      vocab: [
        {
          kanji: '場所',
          kana: 'ばしょ',
          romaji: 'basho',
          meaningEn: 'place, location, venue',
          meaningBn: 'স্থান, সাক্ষাতের জায়গা',
          tag: 'Meeting N5'
        },
        {
          kanji: '集合場所',
          kana: 'しゅうごうばしょ',
          romaji: 'shuugou basho',
          meaningEn: 'meeting place, assembly point',
          meaningBn: 'জড়ো হওয়ার স্থান / সমাবেশ কেন্দ্র',
          tag: 'Event N4'
        },
        {
          kanji: '喫煙場所',
          kana: 'きつえんばしょ',
          romaji: 'kitsuen basho',
          meaningEn: 'smoking area',
          meaningBn: 'ধূমপানের নির্দিষ্ট স্থান',
          tag: 'Sign N4'
        },
        {
          kanji: '置き場所',
          kana: 'おきばしょ',
          romaji: 'okibasho',
          meaningEn: 'storage space, place to put things',
          meaningBn: 'জিনিসপত্র রাখার নির্দিষ্ট জায়গা',
          tag: 'Daily N4'
        },
        {
          kanji: '売り場',
          kana: 'うりば',
          romaji: 'uriba',
          meaningEn: 'sales counter, sales floor',
          meaningBn: 'বিক্রয় কেন্দ্র / কাউন্টার',
          tag: 'Shopping N5'
        },
        {
          kanji: '近所',
          kana: 'きんじょ',
          romaji: 'kinjo',
          meaningEn: 'neighborhood',
          meaningBn: 'আশেপাশের এলাকা / পাড়া-প্রতিবেশী',
          tag: 'Daily N5'
        }
      ],
      sentences: [
        {
          ja: '明日の集合場所は新宿駅の東口です。',
          romaji: 'Ashita no shuugou basho wa Shinjuku eki no higashiguchi desu.',
          meaningEn: 'Tomorrow\'s meeting place is the East Exit of Shinjuku Station.',
          meaningBn: 'আগামীকাল জড়ো হওয়ার স্থান হলো শিনজুকু স্টেশনের পূর্ব গেট।'
        },
        {
          ja: 'すみません、ゴミの捨て場所はどこですか。',
          romaji: 'Sumimasen, gomi no sutebasho wa doko desu ka.',
          meaningEn: 'Excuse me, where is the garbage disposal place?',
          meaningBn: 'শুনুন, আবর্জনা ফেলার নির্ধারিত স্থানটি কোথায়?'
        },
        {
          ja: 'ここは静かで、勉強するのにいい場所です。',
          romaji: 'Koko wa shizuka de, benkyou suru no ni ii basho desu.',
          meaningEn: 'This is a quiet and good place for studying.',
          meaningBn: 'এটি একটি শান্ত এবং পড়াশোনা করার জন্য চমৎকার জায়গা।'
        }
      ],
      tamagoTip: {
        bn: '場 (মঞ্চ/মাঠ) + 所 (স্থান/বিল্ডিং) = 場所 (জায়গা/লোকেশন)। কোনো ইভেন্ট বা বন্ধুদের সাথে সাক্ষাতে 集合場所 লেখা থাকে।',
        en: 'Combines 場 (field/scene) and 所 (place). Meeting spots on invites are written as 集合場所.'
      }
    },

    // --- VISUAL RECOGNITION (見て、わかる) ---
    // 15. 平日
    {
      id: 'l3-heijitsu',
      kanji: '平日',
      emoji: '💼',
      strokeCount: 9,
      jlpt: 'N4',
      category: 'visual_recognition',
      readings: {
        onyomi: [
          { kana: 'ヘイジツ', romaji: 'heijitsu' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'weekday(s) (Monday to Friday)',
        bn: 'কাজের দিন / সাধারণ দিন (সোম থেকে শুক্র)'
      },
      vocab: [
        {
          kanji: '平日',
          kana: 'へいじつ',
          romaji: 'heijitsu',
          meaningEn: 'weekday(s)',
          meaningBn: 'সাধারণ কর্মদিবস (সোম-শুক্র)',
          tag: 'Schedule N4'
        },
        {
          kanji: '平日限定',
          kana: 'へいじつげんてい',
          romaji: 'heijitsu gentei',
          meaningEn: 'weekday special only',
          meaningBn: 'শুধুমাত্র কর্মদিবসে প্রযোজ্য অফার',
          tag: 'Shop Sign'
        },
        {
          kanji: '平日ダイヤ',
          kana: 'へいじつダイヤ',
          romaji: 'heijitsu daiya',
          meaningEn: 'weekday timetable (train/bus)',
          meaningBn: 'কর্মদিবসের ট্রেন/বাসের সময়সূচি',
          tag: 'Station Sign'
        },
        {
          kanji: '平和',
          kana: 'へいわ',
          romaji: 'heiwa',
          meaningEn: 'peace',
          meaningBn: 'শান্তি',
          tag: 'General N4'
        },
        {
          kanji: '平気',
          kana: 'へいき',
          romaji: 'heiki',
          meaningEn: 'calm, all right, fine',
          meaningBn: 'ঠিক আছে, সমস্যা নেই',
          tag: 'Daily N4'
        },
        {
          kanji: '平熱',
          kana: 'へいねつ',
          romaji: 'heinetsu',
          meaningEn: 'normal body temperature',
          meaningBn: 'স্বাভাবিক শারীরিক তাপমাত্রা',
          tag: 'Health'
        }
      ],
      sentences: [
        {
          ja: '銀行は平日の午前九時から午後三時まで開いています。',
          romaji: 'Ginkou wa heijitsu no gozen kuji kara gogo sanji made aite imasu.',
          meaningEn: 'Banks are open on weekdays from 9:00 AM to 3:00 PM.',
          meaningBn: 'ব্যাংকগুলো শুধুমাত্র কর্মদিবসে (সোম-শুক্র) সকাল ৯টা থেকে বিকেল ৩টা পর্যন্ত খোলা থাকে।'
        },
        {
          ja: 'レストランのランチセットは平日限定です。',
          romaji: 'Resutoran no ranchi setto wa heijitsu gentei desu.',
          meaningEn: 'The restaurant lunch set is limited to weekdays.',
          meaningBn: 'রেস্তোরাঁর সাশ্রয়ী লাঞ্চ সেটটি শুধুমাত্র কর্মদিবসের জন্য সীমাবদ্ধ।'
        },
        {
          ja: '平日は仕事で忙しいですが、週末はゆっくりします。',
          romaji: 'Heijitsu wa shigoto de isogashii desu ga, shuumatsu wa yukkuri shimasu.',
          meaningEn: 'I am busy with work on weekdays, but I relax on weekends.',
          meaningBn: 'কাজের দিনগুলোতে কাজের প্রচুর ব্যস্ততা থাকে, তবে সাপ্তাহিক ছুটিতে আয়েশ করি।'
        }
      ],
      tamagoTip: {
        bn: '平 (সমতল/স্বাভাবিক) + 日 (দিন) = 平日 (কর্মদিবস)। জাপানের বাসস্টপ ও ট্রেনের শিডিউল বোর্ডে কালো বা সাদা ব্যাকগ্রাউন্ডে থাকে।',
        en: 'Flat/ordinary days = Weekdays (Mon-Fri). Look for 平日 on Japanese bus and train schedule boards.'
      }
    },

    // 16. 祝日
    {
      id: 'l3-shukujitsu',
      kanji: '祝日',
      emoji: '🎌',
      strokeCount: 13,
      jlpt: 'N4',
      category: 'visual_recognition',
      readings: {
        onyomi: [
          { kana: 'シュクジツ', romaji: 'shukujitsu' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'national holiday, public holiday',
        bn: 'জাতীয় সরকারি ছুটির দিন'
      },
      vocab: [
        {
          kanji: '祝日',
          kana: 'しゅくじつ',
          romaji: 'shukujitsu',
          meaningEn: 'national holiday',
          meaningBn: 'সরকারি ছুটির দিন',
          tag: 'Calendar N4'
        },
        {
          kanji: '国民の祝日',
          kana: 'こくみんのしゅくじつ',
          romaji: 'kokumin no shukujitsu',
          meaningEn: 'national public holiday',
          meaningBn: 'নাগরিক জাতীয় ছুটি',
          tag: 'Official'
        },
        {
          kanji: 'お祝い',
          kana: 'おいわい',
          romaji: 'oiwai',
          meaningEn: 'celebration, gift/congratulations',
          meaningBn: 'উদযাপন, অভিনন্দন স্মারক',
          tag: 'Culture N4'
        },
        {
          kanji: '祝う',
          kana: 'いわう',
          romaji: 'iwau',
          meaningEn: 'to celebrate',
          meaningBn: 'উদযাপন করা',
          tag: 'Verb N4'
        },
        {
          kanji: '土日祝',
          kana: 'どにちしゅく',
          romaji: 'donichishuku',
          meaningEn: 'weekends and national holidays',
          meaningBn: 'শনি, রবি ও সরকারি ছুটি',
          tag: 'Shop Sign'
        },
        {
          kanji: '振替休日',
          kana: 'ふりかえきゅうじつ',
          romaji: 'furikae kyuujitsu',
          meaningEn: 'substitute public holiday',
          meaningBn: 'বিকল্প সরকারি ছুটি (ছুটি রবিবারে পড়লে সোমবারে)',
          tag: 'Calendar N4'
        }
      ],
      sentences: [
        {
          ja: '明日は祝日ですから、市役所や銀行は休みです。',
          romaji: 'Ashita wa shukujitsu desu kara, shiyakusho ya ginkou wa yasumi desu.',
          meaningEn: 'Tomorrow is a national holiday, so city hall and banks are closed.',
          meaningBn: 'আগামীকাল সরকারি ছুটির দিন, তাই সিটি হল ও ব্যাংক বন্ধ থাকবে।'
        },
        {
          ja: 'カレンダーで赤く書いてある日は祝日です。',
          romaji: 'Karendaa de akaku kaite aru hi wa shukujitsu desu.',
          meaningEn: 'The days written in red on the calendar are national holidays.',
          meaningBn: 'জাপানি ক্যালেন্ডারে লাল রঙে চিহ্নিত দিনগুলো হলো সরকারি ছুটির দিন।'
        },
        {
          ja: '土日祝日はバスの時刻表が変わります。',
          romaji: 'Donichishukujitsu wa basu no jikokuhyou ga kawarimasu.',
          meaningEn: 'The bus timetable changes on weekends and national holidays.',
          meaningBn: 'শনি, রবি ও সরকারি ছুটির দিনে বাসের সময়সূচি পরিবর্তিত হয়ে লাল রঙের শিডিউলে চলে।'
        }
      ],
      tamagoTip: {
        bn: '祝 (উদযাপন) + 日 (দিন) = 祝日 (সরকারি ছুটির দিন)। জাপানের ক্যালেন্ডার ও ট্রেনের সময়সূচিতে লাল রঙে (休日ダイヤ) লেখা থাকে।',
        en: 'Celebration day = National holiday. Highlighted in red on calendars and train timetable boards.'
      }
    }
  ]
};
