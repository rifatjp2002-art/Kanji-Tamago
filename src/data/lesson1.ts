import { Lesson } from '../types/kanji';

export const lesson1: Lesson = {
  id: 1,
  number: 1,
  titleJa: 'どうぞよろしく！',
  titleRomaji: 'Douzo yoroshiku!',
  titleBn: 'আপনাদের সাথে পরিচিত হয়ে ভালো লাগল!',
  titleEn: 'Nice to meet you! (Self-Introduction)',
  descriptionBn: 'নিজের নাম, বয়স, জাতীয়তা ও স্কুলের পরিচয় দেওয়ার জন্য আবশ্যক ৯টি কান্জি।',
  descriptionEn: 'Essential 9 Kanji for self-introduction, nationality, age, and school life in Japan.',
  kanjiList: [
    {
      id: 'l1-watashi',
      kanji: '私',
      emoji: '🙋',
      strokeCount: 7,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'シ', romaji: 'shi' }],
        kunyomi: [
          { kana: 'わたし', romaji: 'watashi' },
          { kana: 'わたくし', romaji: 'watakushi' }
        ]
      },
      meanings: {
        en: 'I, me, private',
        bn: 'আমি, নিজে, ব্যক্তিগত'
      },
      vocab: [
        {
          kanji: '私',
          kana: 'わたし',
          romaji: 'watashi',
          meaningEn: 'I, me',
          meaningBn: 'আমি',
          tag: 'Daily N5'
        },
        {
          kanji: '私たち',
          kana: 'わたしたち',
          romaji: 'watashitachi',
          meaningEn: 'we, us',
          meaningBn: 'আমরা',
          tag: 'Daily N5'
        },
        {
          kanji: '私立',
          kana: 'しりつ',
          romaji: 'shiritsu',
          meaningEn: 'private (e.g. school)',
          meaningBn: 'বেসরকারি, প্রাইভেট',
          tag: 'N4'
        },
        {
          kanji: '私用',
          kana: 'しよう',
          romaji: 'shiyou',
          meaningEn: 'personal business',
          meaningBn: 'ব্যক্তিগত কাজ',
          tag: 'Work/Life'
        },
        {
          kanji: '私生活',
          kana: 'しせいかつ',
          romaji: 'shiseikatsu',
          meaningEn: 'private life',
          meaningBn: 'ব্যক্তিগত জীবন',
          tag: 'Daily N4'
        }
      ],
      sentences: [
        {
          ja: '私は学生です。どうぞよろしく。',
          romaji: 'Watashi wa gakusei desu. Douzo yoroshiku.',
          meaningEn: 'I am a student. Nice to meet you.',
          meaningBn: 'আমি একজন শিক্ষার্থী। আপনার সাথে পরিচিত হয়ে ভালো লাগল।'
        },
        {
          ja: 'これは私の本です。',
          romaji: 'Kore wa watashi no hon desu.',
          meaningEn: 'This is my book.',
          meaningBn: 'এটি আমার বই।'
        },
        {
          ja: '私たちは来年日本へ行きます。',
          romaji: 'Watashitachi wa rainen Nihon e ikimasu.',
          meaningEn: 'We are going to Japan next year.',
          meaningBn: 'আমরা আগামী বছর জাপানে যাব।'
        }
      ],
      tamagoTip: {
        bn: 'বামপাশে 禾 (শস্য) এবং ডানপাশে 厶 (ব্যক্তিগত হাত)। প্রাচীনকালে নিজের ধান নিজের বলে দাবি করা থেকেই "আমি/ব্যক্তিগত" ভাব এসেছে।',
        en: 'Left side is grain (禾), right side is self (厶). Claiming your harvested grain for yourself represents "I / private".'
      }
    },
    {
      id: 'l1-hito',
      kanji: '人',
      emoji: '🧍',
      strokeCount: 2,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ジン', romaji: 'jin' },
          { kana: 'ニン', romaji: 'nin' }
        ],
        kunyomi: [{ kana: 'ひと', romaji: 'hito' }]
      },
      meanings: {
        en: 'person, human, people',
        bn: 'মানুষ, ব্যক্তি, লোক'
      },
      vocab: [
        {
          kanji: '人',
          kana: 'ひと',
          romaji: 'hito',
          meaningEn: 'person',
          meaningBn: 'মানুষ, ব্যক্তি',
          tag: 'Daily N5'
        },
        {
          kanji: '日本人',
          kana: 'にほんじん',
          romaji: 'nihonjin',
          meaningEn: 'Japanese person',
          meaningBn: 'জাপানি মানুষ',
          tag: 'Daily N5'
        },
        {
          kanji: '一人',
          kana: 'ひとり',
          romaji: 'hitori',
          meaningEn: 'one person, alone',
          meaningBn: 'একজন, একা',
          tag: 'Daily N5'
        },
        {
          kanji: '二人',
          kana: 'ふたり',
          romaji: 'futari',
          meaningEn: 'two people',
          meaningBn: 'দুইজন',
          tag: 'Daily N5'
        },
        {
          kanji: '三人',
          kana: 'さんにん',
          romaji: 'sannin',
          meaningEn: 'three people',
          meaningBn: 'তিনজন',
          tag: 'Daily N5'
        },
        {
          kanji: '外国人',
          kana: 'がいこくじん',
          romaji: 'gaikokujin',
          meaningEn: 'foreigner',
          meaningBn: 'বিদেশি ব্যক্তি',
          tag: 'Daily N5'
        }
      ],
      sentences: [
        {
          ja: 'あの人はだれですか。',
          romaji: 'Ano hito wa dare desu ka.',
          meaningEn: 'Who is that person over there?',
          meaningBn: 'ওই ব্যক্তিটি কে?'
        },
        {
          ja: '私はバングラデシュ人です。',
          romaji: 'Watashi wa Banguradeshu-jin desu.',
          meaningEn: 'I am Bangladeshi.',
          meaningBn: 'আমি বাংলাদেশি।'
        },
        {
          ja: 'レストランに人がたくさんいます。',
          romaji: 'Resutoran ni hito ga takusan imasu.',
          meaningEn: 'There are many people in the restaurant.',
          meaningBn: 'রেস্তোরাঁয় অনেক মানুষ আছে।'
        }
      ],
      tamagoTip: {
        bn: 'দুটি পা ফেলে দাঁড়িয়ে থাকা একজন মানুষের প্রতিচ্ছবি। মাত্র ২টি সোজা স্ট্রোক।',
        en: 'A pictograph of a human walking on two legs. Simple 2 strokes.'
      }
    },
    {
      id: 'l1-sai',
      kanji: '才',
      emoji: '🎂',
      strokeCount: 3,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'サイ', romaji: 'sai' }],
        kunyomi: []
      },
      meanings: {
        en: 'age (years old), talent, ability',
        bn: 'বয়স (বছর), প্রতিভা, মেধা'
      },
      vocab: [
        {
          kanji: '何才',
          kana: 'なんさい',
          romaji: 'nansai',
          meaningEn: 'how old?',
          meaningBn: 'কত বছর বয়স?',
          tag: 'Daily N5'
        },
        {
          kanji: '一才',
          kana: 'いっさい',
          romaji: 'issai',
          meaningEn: 'one year old',
          meaningBn: 'এক বছর বয়স',
          tag: 'Daily N5'
        },
        {
          kanji: '二十才',
          kana: 'はたち',
          romaji: 'hatachi',
          meaningEn: '20 years old (adulthood)',
          meaningBn: '২০ বছর বয়স',
          tag: 'Daily N5'
        },
        {
          kanji: '天才',
          kana: 'てんさい',
          romaji: 'tensai',
          meaningEn: 'genius',
          meaningBn: 'জিনিয়াস, অত্যন্ত প্রতিভাবান',
          tag: 'N4'
        },
        {
          kanji: '才能',
          kana: 'さいのう',
          romaji: 'sainou',
          meaningEn: 'talent, natural gift',
          meaningBn: 'প্রতিভা, দক্ষতা',
          tag: 'N4'
        }
      ],
      sentences: [
        {
          ja: 'お名前は何ですか。何才ですか。',
          romaji: 'Onamae wa nan desu ka. Nansai desu ka.',
          meaningEn: 'What is your name? How old are you?',
          meaningBn: 'আপনার নাম কী? আপনার বয়স কত?'
        },
        {
          ja: '私は今年二十才になります。',
          romaji: 'Watashi wa kotoshi hatachi ni narimasu.',
          meaningEn: 'I will turn 20 years old this year.',
          meaningBn: 'আমার বয়স এই বছর বিশ বছর হবে।'
        },
        {
          ja: '彼は語学の才能があります。',
          romaji: 'Kare wa gogaku no sainou ga arimasu.',
          meaningEn: 'He has a talent for languages.',
          meaningBn: 'তার ভাষা শেখার ভালো প্রতিভা রয়েছে।'
        }
      ],
      tamagoTip: {
        bn: 'বয়স গণনায় 歳 এর সহজ বিকল্প রূপ হিসেবে 才 বহুল ব্যবহৃত হয়।',
        en: 'Commonly written in place of the complex 歳 for counting age in daily forms and informal contexts.'
      }
    },
    {
      id: 'l1-gaku',
      kanji: '学',
      emoji: '📚',
      strokeCount: 8,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ガク', romaji: 'gaku' }],
        kunyomi: [{ kana: 'まな・ぶ', romaji: 'mana-bu' }]
      },
      meanings: {
        en: 'study, learning, science',
        bn: 'শেখা, পড়াশোনা, জ্ঞান, অধ্যয়ন'
      },
      vocab: [
        {
          kanji: '学生',
          kana: 'がくせい',
          romaji: 'gakusei',
          meaningEn: 'student',
          meaningBn: 'ছাত্র, শিক্ষার্থী',
          tag: 'Daily N5'
        },
        {
          kanji: '大学',
          kana: 'だいがく',
          romaji: 'daigaku',
          meaningEn: 'university, college',
          meaningBn: 'বিশ্ববিদ্যালয়',
          tag: 'Daily N5'
        },
        {
          kanji: '学ぶ',
          kana: 'まなぶ',
          romaji: 'manabu',
          meaningEn: 'to learn, to study',
          meaningBn: 'শেখা, বিদ্যা অর্জন করা',
          tag: 'Daily N4'
        },
        {
          kanji: '留学生',
          kana: 'りゅうがくせい',
          romaji: 'ryuugakusei',
          meaningEn: 'international student',
          meaningBn: 'বিদেশি শিক্ষার্থী',
          tag: 'Daily N5'
        },
        {
          kanji: '学校',
          kana: 'がっこう',
          romaji: 'gakkou',
          meaningEn: 'school',
          meaningBn: 'বিদ্যালয়, স্কুল',
          tag: 'Daily N5'
        },
        {
          kanji: '学部',
          kana: 'がくぶ',
          romaji: 'gakubu',
          meaningEn: 'academic department/faculty',
          meaningBn: 'অনুষদ, বিভাগ',
          tag: 'N4'
        }
      ],
      sentences: [
        {
          ja: '私は東京の大学の学生です。',
          romaji: 'Watashi wa Toukyou no daigaku no gakusei desu.',
          meaningEn: 'I am a student at a Tokyo university.',
          meaningBn: 'আমি টোকিওর একটি বিশ্ববিদ্যালয়ের শিক্ষার্থী।'
        },
        {
          ja: '日本でITの技術を学びたいです。',
          romaji: 'Nihon de aiti- no gijutsu o manabitai desu.',
          meaningEn: 'I want to learn IT technology in Japan.',
          meaningBn: 'আমি জাপানে আইটি প্রযুক্তি শিখতে চাই।'
        },
        {
          ja: 'クラスにはたくさんの留学生がいます。',
          romaji: 'Kurasu ni wa takusan no ryuugakusei ga imasu.',
          meaningEn: 'There are many international students in the class.',
          meaningBn: 'ক্লাসে অনেক বিদেশি শিক্ষার্থী আছে।'
        }
      ],
      tamagoTip: {
        bn: 'ছাদের নিচে (冖) এক শিশু (子) দুই হাত নেড়ে আনন্দের সাথে বিদ্যা শিখছে।',
        en: 'A child (子) under a roof (冖) receiving knowledge with open hands.'
      }
    },
    {
      id: 'l1-sei',
      kanji: '生',
      emoji: '🌱',
      strokeCount: 5,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'セイ', romaji: 'sei' },
          { kana: 'ショウ', romaji: 'shou' }
        ],
        kunyomi: [
          { kana: 'い・きる', romaji: 'i-kiru' },
          { kana: 'う・まれる', romaji: 'u-mareru' },
          { kana: 'なま', romaji: 'nama' }
        ]
      },
      meanings: {
        en: 'life, birth, live, fresh/raw',
        bn: 'জীবন, জন্ম, জীবন্ত, কাঁচা'
      },
      vocab: [
        {
          kanji: '先生',
          kana: 'せんせい',
          romaji: 'sensei',
          meaningEn: 'teacher, instructor',
          meaningBn: 'শিক্ষক, ওস্তাদ',
          tag: 'Daily N5'
        },
        {
          kanji: '生徒',
          kana: 'せいと',
          romaji: 'seito',
          meaningEn: 'pupil, student',
          meaningBn: 'স্কুল শিক্ষার্থী',
          tag: 'Daily N5'
        },
        {
          kanji: '生まれる',
          kana: 'うまれる',
          romaji: 'umareru',
          meaningEn: 'to be born',
          meaningBn: 'জন্মগ্রহণ করা',
          tag: 'Daily N5'
        },
        {
          kanji: '生ビール',
          kana: 'なまビール',
          romaji: 'namabiiru',
          meaningEn: 'draft beer',
          meaningBn: 'ড্রাফট বিয়ার',
          tag: 'Daily Life'
        },
        {
          kanji: '生活',
          kana: 'せいかつ',
          romaji: 'seikatsu',
          meaningEn: 'daily life, living',
          meaningBn: 'দৈনন্দিন জীবনযাত্রা',
          tag: 'Daily N4'
        },
        {
          kanji: '誕生日',
          kana: 'たんじょうび',
          romaji: 'tanjoubi',
          meaningEn: 'birthday',
          meaningBn: 'জন্মদিন',
          tag: 'Daily N5'
        }
      ],
      sentences: [
        {
          ja: '田中先生、おはようございます。',
          romaji: 'Tanaka-sensei, ohayou gozaimasu.',
          meaningEn: 'Good morning, Teacher Tanaka.',
          meaningBn: 'তানাকা শিক্ষক, শুভ সকাল।'
        },
        {
          ja: '私はバングラデシュで生まれました。',
          romaji: 'Watashi wa Banguradeshu de umaremashita.',
          meaningEn: 'I was born in Bangladesh.',
          meaningBn: 'আমি বাংলাদেশে জন্মগ্রহণ করেছি।'
        },
        {
          ja: '日本での生活はどうですか。',
          romaji: 'Nihon de no seikatsu wa dou desu ka.',
          meaningEn: 'How is your life in Japan?',
          meaningBn: 'জাপানে আপনার জীবন কেমন কাটছে?'
        }
      ],
      tamagoTip: {
        bn: 'মাটি ফুঁড়ে কচি চারাগাছ গজিয়ে ওঠার প্রতীক—যা প্রাণ এবং নতুন জীবনের সূচনা বোঝায়।',
        en: 'A sprout emerging out of the earth, symbolizing life, birth, and fresh vitality.'
      }
    },
    {
      id: 'l1-kou',
      kanji: '校',
      emoji: '🏫',
      strokeCount: 10,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'コウ', romaji: 'kou' }],
        kunyomi: []
      },
      meanings: {
        en: 'school, exam, institute',
        bn: 'বিদ্যালয়, স্কুল, পাঠশালা'
      },
      vocab: [
        {
          kanji: '学校',
          kana: 'がっこう',
          romaji: 'gakkou',
          meaningEn: 'school',
          meaningBn: 'বিদ্যালয়, স্কুল',
          tag: 'Daily N5'
        },
        {
          kanji: '高校',
          kana: 'こうこう',
          romaji: 'koukou',
          meaningEn: 'high school',
          meaningBn: 'উচ্চ বিদ্যালয় (হাই স্কুল)',
          tag: 'Daily N5'
        },
        {
          kanji: '小学校',
          kana: 'しょうがっこう',
          romaji: 'shougakkou',
          meaningEn: 'elementary school',
          meaningBn: 'প্রাথমিক বিদ্যালয়',
          tag: 'Daily N5'
        },
        {
          kanji: '中学校',
          kana: 'ちゅうがっこう',
          romaji: 'chuugakkou',
          meaningEn: 'junior high school',
          meaningBn: 'নিম্ন মাধ্যমিক বিদ্যালয়',
          tag: 'Daily N5'
        },
        {
          kanji: '校長',
          kana: 'こうちょう',
          romaji: 'kouchou',
          meaningEn: 'principal, headmaster',
          meaningBn: 'প্রধান শিক্ষক',
          tag: 'Daily N4'
        },
        {
          kanji: '校舎',
          kana: 'こうしゃ',
          romaji: 'kousha',
          meaningEn: 'school building',
          meaningBn: 'স্কুল ভবন',
          tag: 'N4'
        }
      ],
      sentences: [
        {
          ja: '毎朝八時に学校へ行きます。',
          romaji: 'Maiasa hachiji ni gakkou e ikimasu.',
          meaningEn: 'I go to school every morning at 8:00.',
          meaningBn: 'আমি প্রতিদিন সকাল আটটায় স্কুলে যাই।'
        },
        {
          ja: '私の高校は駅の近くにあります。',
          romaji: 'Watashi no koukou wa eki no chikaku ni arimasu.',
          meaningEn: 'My high school is located near the train station.',
          meaningBn: 'আমার হাই স্কুলটি রেল স্টেশনের কাছে অবস্থিত।'
        },
        {
          ja: '日本語学校で新しい友達ができました。',
          romaji: 'Nihongo gakkou de atarashii tomodachi ga dekimashita.',
          meaningEn: 'I made new friends at the Japanese language school.',
          meaningBn: 'জাপানি ভাষার স্কুলে আমার নতুন বন্ধু হয়েছে।'
        }
      ],
      tamagoTip: {
        bn: 'বামপাশে 木 (কাঠের ভবন) এবং ডানপাশে 交 (মানুষের মেলামেশা ও ভাববিনিময়)। একসাথে স্কুল বোঝায়।',
        en: 'Wooden building (木) where people interact and exchange knowledge (交) = school.'
      }
    },
    {
      id: 'l1-nichi',
      kanji: '日',
      emoji: '☀️',
      strokeCount: 4,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ニチ', romaji: 'nichi' },
          { kana: 'ジツ', romaji: 'jitsu' }
        ],
        kunyomi: [
          { kana: 'ひ', romaji: 'hi' },
          { kana: '-び', romaji: '-bi' },
          { kana: '-か', romaji: '-ka' }
        ]
      },
      meanings: {
        en: 'day, sun, Japan, counter for days',
        bn: 'দিন, সূর্য, জাপান, তারিখ'
      },
      vocab: [
        {
          kanji: '日本',
          kana: 'にほん',
          romaji: 'nihon',
          meaningEn: 'Japan',
          meaningBn: 'জাপান',
          tag: 'Daily N5'
        },
        {
          kanji: '日曜日',
          kana: 'にちようび',
          romaji: 'nichiyoubi',
          meaningEn: 'Sunday',
          meaningBn: 'রবিবার',
          tag: 'Daily N5'
        },
        {
          kanji: '今日',
          kana: 'きょう',
          romaji: 'kyou',
          meaningEn: 'today',
          meaningBn: 'আজ, আজকের দিন',
          tag: 'Daily N5'
        },
        {
          kanji: '毎日',
          kana: 'まいにち',
          romaji: 'mainichi',
          meaningEn: 'every day',
          meaningBn: 'প্রতিদিন',
          tag: 'Daily N5'
        },
        {
          kanji: '休日',
          kana: 'きゅうじつ',
          romaji: 'kyuujitsu',
          meaningEn: 'holiday, day off',
          meaningBn: 'ছুটির দিন',
          tag: 'Daily N5'
        },
        {
          kanji: '一日',
          kana: 'ついたち',
          romaji: 'tsuitachi',
          meaningEn: 'first day of the month',
          meaningBn: 'মাসের ১ তারিখ',
          tag: 'Special N5'
        }
      ],
      sentences: [
        {
          ja: '今日はいい天気ですね。',
          romaji: 'Kyou wa ii tenki desu ne.',
          meaningEn: 'The weather is nice today, isn\'t it?',
          meaningBn: 'আজকের আবহাওয়া চমৎকার, তাই না?'
        },
        {
          ja: '日曜日はいっしょに買い物に行きませんか。',
          romaji: 'Nichiyoubi wa issho ni kaimono ni ikimasen ka.',
          meaningEn: 'Would you like to go shopping together on Sunday?',
          meaningBn: 'রবিবারে একসাথে কেনাকাটা করতে যাবেন কি?'
        },
        {
          ja: '毎日日本語の漢字を練習します。',
          romaji: 'Mainichi nihongo no kanji o renshuu shimasu.',
          meaningEn: 'I practice Japanese Kanji every single day.',
          meaningBn: 'আমি প্রতিদিন জাপানি ভাষার কান্জি অনুশীলন করি।'
        }
      ],
      tamagoTip: {
        bn: 'সূর্যের বৃত্তাকার রূপের ভেতর একটি দাগ দিয়ে চিত্রলিপি তৈরি করা হয়েছিল, যা পরে চতুষ্কোণ 日 রূপ নিয়েছে।',
        en: 'Originally a circle with a dot representing the radiant sun in the sky.'
      }
    },
    {
      id: 'l1-hon',
      kanji: '本',
      emoji: '📖',
      strokeCount: 5,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ホン', romaji: 'hon' }],
        kunyomi: [{ kana: 'もと', romaji: 'moto' }]
      },
      meanings: {
        en: 'book, origin, main, root, cylinder counter',
        bn: 'বই, মূল, উৎপত্তি, প্রধান, বোতল গোনার একক'
      },
      vocab: [
        {
          kanji: '本',
          kana: 'ほん',
          romaji: 'hon',
          meaningEn: 'book',
          meaningBn: 'বই',
          tag: 'Daily N5'
        },
        {
          kanji: '本屋',
          kana: 'ほんや',
          romaji: 'honya',
          meaningEn: 'bookstore',
          meaningBn: 'বইয়ের দোকান',
          tag: 'Daily N5'
        },
        {
          kanji: '日本語',
          kana: 'にほんご',
          romaji: 'nihongo',
          meaningEn: 'Japanese language',
          meaningBn: 'জাপানি ভাষা',
          tag: 'Daily N5'
        },
        {
          kanji: '一本',
          kana: 'いっぽん',
          romaji: 'ippon',
          meaningEn: 'one cylindrical item (bottle/pen)',
          meaningBn: 'একটি (বোতল/কলম ইত্যাদি)',
          tag: 'Counter N5'
        },
        {
          kanji: '本当に',
          kana: 'ほんとうに',
          romaji: 'hontou ni',
          meaningEn: 'really, truly',
          meaningBn: 'সত্যিই, প্রকৃতপক্ষে',
          tag: 'Daily N5'
        },
        {
          kanji: '本部',
          kana: 'ほんぶ',
          romaji: 'honbu',
          meaningEn: 'headquarters',
          meaningBn: 'হেডকোয়ার্টার, প্রধান কার্যালয়',
          tag: 'N4'
        }
      ],
      sentences: [
        {
          ja: '机の上に日本語の本があります。',
          romaji: 'Tsukue no ue ni nihongo no hon ga arimasu.',
          meaningEn: 'There is a Japanese book on the desk.',
          meaningBn: 'টেবিলের ওপর জাপানি ভাষার বই আছে।'
        },
        {
          ja: '駅前の本屋で辞書を買いました。',
          romaji: 'Ekimae no honya de jisho o kaimashita.',
          meaningEn: 'I bought a dictionary at the bookstore in front of the station.',
          meaningBn: 'স্টেশনের সামনের বইয়ের দোকান থেকে একটি অভিধান কিনেছি।'
        },
        {
          ja: '親切にしてくれて、本当にありがとうございました。',
          romaji: 'Shinsetsu ni shite kurete, hontou ni arigatou gozaimashita.',
          meaningEn: 'Thank you very much indeed for your kindness.',
          meaningBn: 'সহায়তা করার জন্য আপনাকে সত্যিই অসংখ্য ধন্যবাদ।'
        }
      ],
      tamagoTip: {
        bn: 'গাছের (木) গোড়ায় একটি অনুভূমিক রেখা টেনে শেকড় বা মূল (origin) নির্দেশ করা হয়েছে। সেখান থেকেই বই (জ্ঞানের মূল উৎস) বোঝায়।',
        en: 'A horizontal stroke marks the root of the tree (木), meaning origin, source, or book.'
      }
    },
    {
      id: 'l1-go',
      kanji: '語',
      emoji: '🗣️',
      strokeCount: 14,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ゴ', romaji: 'go' }],
        kunyomi: [{ kana: 'かた・る', romaji: 'kata-ru' }]
      },
      meanings: {
        en: 'language, speech, word, talk',
        bn: 'ভাষা, কথা, শব্দ, বর্ণনা'
      },
      vocab: [
        {
          kanji: '日本語',
          kana: 'にほんご',
          romaji: 'nihongo',
          meaningEn: 'Japanese language',
          meaningBn: 'জাপানি ভাষা',
          tag: 'Daily N5'
        },
        {
          kanji: '英語',
          kana: 'えいご',
          romaji: 'eigo',
          meaningEn: 'English language',
          meaningBn: 'ইংরেজি ভাষা',
          tag: 'Daily N5'
        },
        {
          kanji: 'ベンガル語',
          kana: 'ベンガルご',
          romaji: 'bengarugo',
          meaningEn: 'Bengali language',
          meaningBn: 'বাংলা ভাষা',
          tag: 'Language'
        },
        {
          kanji: '単語',
          kana: 'たんご',
          romaji: 'tango',
          meaningEn: 'word, vocabulary',
          meaningBn: 'শব্দভাণ্ডার, শব্দ',
          tag: 'Daily N5'
        },
        {
          kanji: '敬語',
          kana: 'けいご',
          romaji: 'keigo',
          meaningEn: 'honorific/polite speech',
          meaningBn: 'শ্রদ্ধাপূর্ণ ভাষা, কেইগো',
          tag: 'N4'
        },
        {
          kanji: '物語',
          kana: 'ものがたり',
          romaji: 'monogatari',
          meaningEn: 'story, tale',
          meaningBn: 'গল্প, উপাখ্যান',
          tag: 'N4'
        }
      ],
      sentences: [
        {
          ja: '私は日本語とベンガル語を話します。',
          romaji: 'Watashi wa nihongo to bengarugo o hanashimasu.',
          meaningEn: 'I speak Japanese and Bengali.',
          meaningBn: 'আমি জাপানি এবং বাংলা ভাষায় কথা বলি।'
        },
        {
          ja: '毎日新しい単語を５つ覚えます。',
          romaji: 'Mainichi atarashii tango o itsutsu oboemasu.',
          meaningEn: 'I memorize 5 new vocabulary words every day.',
          meaningBn: 'প্রতিদিন নতুন ৫টি শব্দ মুখস্থ করি।'
        },
        {
          ja: '日本の文化についての物語を読みました。',
          romaji: 'Nihon no bunka ni tsuite no monogatari o yomimashita.',
          meaningEn: 'I read a story about Japanese culture.',
          meaningBn: 'জাপানি সংস্কৃতি সম্পর্কিত একটি গল্প পড়েছি।'
        }
      ],
      tamagoTip: {
        bn: 'কথা (言) + পাঁচ (五) + মুখ (口) = পাঁচ মুখে উচ্চারিত বাক্য বা সুসংগঠিত "ভাষা"।',
        en: 'Words (言) spoken through mouths (口) by people (五) form human language.'
      }
    }
  ]
};
