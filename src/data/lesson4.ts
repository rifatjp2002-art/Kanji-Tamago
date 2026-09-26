import { Lesson } from '../types/kanji';

export const lesson4: Lesson = {
  id: 4,
  number: 4,
  titleJa: '新しい町で',
  titleRomaji: 'Atarashii machi de',
  titleBn: 'নতুন শহরে (ঠিকানা, ফর্ম পূরণ ও প্রশাসনিক কাজ)',
  titleEn: 'In a New Town (Addresses, City Hall, Direction & Municipal Forms)',
  descriptionBn: 'জাপানে নতুন শহরে বসবাস শুরু, ওয়ার্ড অফিস (Ward Office) বা সিটি হলে ঠিকানা নিবন্ধন, ফর্ম পূরণ এবং দিকনির্দেশনার জন্য প্রয়োজনীয় কাঞ্জি।',
  descriptionEn: 'Essential Kanji for living in a new Japanese town, registering residency at City Hall / Ward Office, filling out official forms, and navigating locations.',
  kanjiList: [
    // --- MAIN KANJI (書ける) ---
    // 1. 東
    {
      id: 'l4-higashi',
      kanji: '東',
      emoji: '🧭',
      strokeCount: 8,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'トウ', romaji: 'tou' }
        ],
        kunyomi: [
          { kana: 'ひがし', romaji: 'higashi' }
        ]
      },
      meanings: {
        en: 'east',
        bn: 'পূর্ব, পূর্ব দিক'
      },
      vocab: [
        {
          kanji: '東',
          kana: 'ひがし',
          romaji: 'higashi',
          meaningEn: 'east',
          meaningBn: 'পূর্ব দিক',
          tag: 'Direction N5'
        },
        {
          kanji: '東口',
          kana: 'ひがしぐち',
          romaji: 'higashiguchi',
          meaningEn: 'east exit (station)',
          meaningBn: 'পূর্ব বহির্গমন পথ (স্টেশন গেট)',
          tag: 'Station N5'
        },
        {
          kanji: '東京',
          kana: 'とうきょう',
          romaji: 'Toukyou',
          meaningEn: 'Tokyo (Capital of Japan)',
          meaningBn: 'টোকিও (জাপানের রাজধানী)',
          tag: 'City N5'
        },
        {
          kanji: '中東',
          kana: 'ちゅうとう',
          romaji: 'chuutou',
          meaningEn: 'Middle East',
          meaningBn: 'মধ্যপ্রাচ্য',
          tag: 'Geography N4'
        },
        {
          kanji: '東洋',
          kana: 'とうよう',
          romaji: 'touyou',
          meaningEn: 'the East, Orient',
          meaningBn: 'প্রাচ্য / এশীয় সংস্কৃতি',
          tag: 'General N4'
        },
        {
          kanji: '南東',
          kana: 'なんとう',
          romaji: 'nantou',
          meaningEn: 'southeast',
          meaningBn: 'দক্ষিণ-পূর্ব',
          tag: 'Direction'
        }
      ],
      sentences: [
        {
          ja: '駅の東口の改札で待ち合わせしましょう。',
          romaji: 'Eki no higashiguchi no kaisatsu de machiawase shimashou.',
          meaningEn: 'Let\'s meet at the ticket gate of the station\'s East Exit.',
          meaningBn: 'স্টেশনের পূর্ব গেটের টিকিট গেটের সামনে দেখা করা যাক।'
        },
        {
          ja: '東京は日本の首都で、とても賑やかです。',
          romaji: 'Toukyou wa Nihon no shuto de, totemo nigiyaka desu.',
          meaningEn: 'Tokyo is the capital of Japan and is very lively.',
          meaningBn: 'টোকিও হলো জাপানের রাজধানী এবং এটি অত্যন্ত প্রাণবন্ত ও ব্যস্ত।'
        },
        {
          ja: '太陽は東から昇って西へ沈みます。',
          romaji: 'Taiyou wa higashi kara nobotte nishi e shizumimasu.',
          meaningEn: 'The sun rises in the east and sets in the west.',
          meaningBn: 'সূর্য পূর্ব দিকে ওঠে এবং পশ্চিম দিকে অস্ত যায়।'
        }
      ],
      tamagoTip: {
        bn: 'গাছের (木) ডালপালার পেছনে সূর্য (日) উদয় হওয়ার দৃশ্য থেকেই পূর্ব দিক (東) কাঞ্জির সৃষ্টি হয়েছে।',
        en: 'The sun (日) rising behind the branches of a tree (木) indicates the East.'
      }
    },

    // 2. 京
    {
      id: 'l4-kyou',
      kanji: '京',
      emoji: '🏯',
      strokeCount: 8,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'キョウ', romaji: 'kyou' },
          { kana: 'ケイ', romaji: 'kei' }
        ],
        kunyomi: [
          { kana: 'みやこ', romaji: 'miyako' }
        ]
      },
      meanings: {
        en: 'capital city, metropolis',
        bn: 'রাজধানী, রাজকীয় শহর'
      },
      vocab: [
        {
          kanji: '東京',
          kana: 'とうきょう',
          romaji: 'Toukyou',
          meaningEn: 'Tokyo (Eastern Capital)',
          meaningBn: 'টোকিও',
          tag: 'City N5'
        },
        {
          kanji: '京都',
          kana: 'きょうと',
          romaji: 'Kyouto',
          meaningEn: 'Kyoto (historic capital)',
          meaningBn: 'কিয়োটো (ঐতিহাসিক রাজধানী)',
          tag: 'City N5'
        },
        {
          kanji: '上京',
          kana: 'じょうきょう',
          romaji: 'joukyou',
          meaningEn: 'moving/going to the capital (Tokyo)',
          meaningBn: 'রাজধানী টোকিওতে পড়তে বা কাজে যাওয়া',
          tag: 'Culture N4'
        },
        {
          kanji: '京王線',
          kana: 'けいおうせん',
          romaji: 'Keiousen',
          meaningEn: 'Keio Train Line',
          meaningBn: 'কেইও ট্রেন লাইন',
          tag: 'Train Line'
        },
        {
          kanji: '北京',
          kana: 'ぺきん',
          romaji: 'Pekin',
          meaningEn: 'Beijing',
          meaningBn: 'বেইজিং (চীনের রাজধানী)',
          tag: 'Geography'
        },
        {
          kanji: '京成線',
          kana: 'けいせいせん',
          romaji: 'Keiseisen',
          meaningEn: 'Keisei Train Line (to Narita Airport)',
          meaningBn: 'কেইসেই ট্রেন লাইন (নারিতা এয়ারপোর্ট)',
          tag: 'Train Line'
        }
      ],
      sentences: [
        {
          ja: '京都には古いお寺や神社がたくさんあります。',
          romaji: 'Kyouto ni wa furui otera ya jinja ga takusan arimasu.',
          meaningEn: 'There are many old temples and shrines in Kyoto.',
          meaningBn: 'কিয়োটোতে অনেক প্রাচীন বৌদ্ধ মন্দির ও শিন্তো তীর্থ রয়েছে।'
        },
        {
          ja: '大学に入るために四月に上京しました。',
          romaji: 'Daigaku ni hairu tame ni shigatsu ni joukyou shimashita.',
          meaningEn: 'I moved to Tokyo in April to enter university.',
          meaningBn: 'বিশ্ববিদ্যালয়ে ভর্তির উদ্দেশ্যে এপ্রিল মাসে আমি টোকিও চলে আসি।'
        },
        {
          ja: '東京駅で新幹線に乗り換えます。',
          romaji: 'Toukyou eki de shinkansen ni norikaemasu.',
          meaningEn: 'I will transfer to the Shinkansen at Tokyo Station.',
          meaningBn: 'টোকিও স্টেশনে নেমে আমি বুলেট ট্রেনে বদল করব।'
        }
      ],
      tamagoTip: {
        bn: 'উঁচু পাহাড় বা মাটির ঢিবির ওপর নির্মিত রাজপ্রাসাদ বা ফটকের রূপ। 東 (পূর্ব) + 京 (রাজধানী) = 東京 (টোকিও)।',
        en: 'Represents a grand gate or palace built on elevated ground. 東 (East) + 京 (Capital) = Tokyo.'
      }
    },

    // 3. 名
    {
      id: 'l4-na',
      kanji: '名',
      emoji: '🏷️',
      strokeCount: 6,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'メイ', romaji: 'mei' },
          { kana: 'ミョウ', romaji: 'myou' }
        ],
        kunyomi: [
          { kana: 'な', romaji: 'na' }
        ]
      },
      meanings: {
        en: 'name, famous, reputation',
        bn: 'নাম, খ্যাতি, পরিচিতি'
      },
      vocab: [
        {
          kanji: '名前',
          kana: 'なまえ',
          romaji: 'namae',
          meaningEn: 'name, full name',
          meaningBn: 'নাম',
          tag: 'Daily N5'
        },
        {
          kanji: '有名',
          kana: 'ゆうめい',
          romaji: 'yuumei',
          meaningEn: 'famous, well-known',
          meaningBn: 'বিখ্যাত, নামকরা',
          tag: 'Adjective N5'
        },
        {
          kanji: '名刺',
          kana: 'めいし',
          romaji: 'meishi',
          meaningEn: 'business card',
          meaningBn: 'ভিজিটিং কার্ড / বিজনেস কার্ড',
          tag: 'Business N4'
        },
        {
          kanji: '名字 / 苗字',
          kana: 'みょうじ',
          romaji: 'myouji',
          meaningEn: 'family name, surname',
          meaningBn: 'পারিবারিক পদবি',
          tag: 'Official N4'
        },
        {
          kanji: '名物',
          kana: 'めいぶつ',
          romaji: 'meibutsu',
          meaningEn: 'famous local speciality / dish',
          meaningBn: 'এলাকার বিখ্যাত খাবার বা পণ্য',
          tag: 'Culture N4'
        },
        {
          kanji: '仮名',
          kana: 'かな',
          romaji: 'kana',
          meaningEn: 'Kana (Hiragana/Katakana)',
          meaningBn: 'জাপানি কানা হরফ',
          tag: 'Language N4'
        }
      ],
      sentences: [
        {
          ja: 'こちらの申請書にお名前をご記入ください。',
          romaji: 'Kochira no shinseisho ni onamae o gokinyuu kudasai.',
          meaningEn: 'Please write your name on this application form.',
          meaningBn: 'দয়া করে এই আবেদনপত্রে আপনার নামটি লিখুন।'
        },
        {
          ja: '浅草は外国人観光客にとても有名な場所です。',
          romaji: 'Asakusa wa gaikokujin kankoukyaku ni totemo yuumei na basho desu.',
          meaningEn: 'Asakusa is a place very famous among foreign tourists.',
          meaningBn: 'আশাকুসা বিদেশি পর্যটকদের কাছে অত্যন্ত পরিচিত ও বিখ্যাত একটি জায়গা।'
        },
        {
          ja: 'ビジネスの挨拶で名刺を交換します。',
          romaji: 'Bijinesu no aisatsu de meishi o koukan shimasu.',
          meaningEn: 'In Japanese business greetings, people exchange business cards.',
          meaningBn: 'জাপানে ব্যবসায়িক সাক্ষাতে একে অপরের সাথে বিজনেস কার্ড বিনিময় করা হয়।'
        }
      ],
      tamagoTip: {
        bn: 'সন্ধ্যায় বা রাতে (夕) অন্ধকারে মুখ (口) দিয়ে নিজের নাম উচ্চারণ করার চিত্র থেকে 名 কাঞ্জি এসেছে।',
        en: 'In the evening darkness (夕), calling out one\'s name with the mouth (口).'
      }
    },

    // 4. 前
    {
      id: 'l4-mae',
      kanji: '前',
      emoji: '⏩',
      strokeCount: 9,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ゼン', romaji: 'zen' }
        ],
        kunyomi: [
          { kana: 'まえ', romaji: 'mae' }
        ]
      },
      meanings: {
        en: 'front, before, ahead, prior',
        bn: 'সামনে, পূর্বে, আগে'
      },
      vocab: [
        {
          kanji: '前',
          kana: 'まえ',
          romaji: 'mae',
          meaningEn: 'front, in front of, before',
          meaningBn: 'সামনে, পূর্বে',
          tag: 'Position N5'
        },
        {
          kanji: '名前',
          kana: 'なまえ',
          romaji: 'namae',
          meaningEn: 'name',
          meaningBn: 'নাম',
          tag: 'Daily N5'
        },
        {
          kanji: '午前',
          kana: 'ごぜん',
          romaji: 'gozen',
          meaningEn: 'morning, AM',
          meaningBn: 'সকাল / এএম (AM)',
          tag: 'Time N5'
        },
        {
          kanji: '駅前',
          kana: 'えきまえ',
          romaji: 'ekimae',
          meaningEn: 'in front of the station',
          meaningBn: 'স্টেশনের সামনে / চত্বর',
          tag: 'Station N5'
        },
        {
          kanji: '三日前',
          kana: 'みっかまえ',
          romaji: 'mikkamae',
          meaningEn: 'three days ago',
          meaningBn: 'তিন দিন আগে',
          tag: 'Time N5'
        },
        {
          kanji: '前半',
          kana: 'ぜんはん',
          romaji: 'zenhan',
          meaningEn: 'first half',
          meaningBn: 'প্রথমার্ধ',
          tag: 'Time N4'
        }
      ],
      sentences: [
        {
          ja: '駅前のコンビニで友達と待ち合わせをしました。',
          romaji: 'Ekimae no konbini de tomodachi to machiawase o shimashita.',
          meaningEn: 'I met with my friend at the convenience store in front of the station.',
          meaningBn: 'স্টেশনের সামনের কনভেনিয়েন্স স্টোরে আমি বন্ধুর সাথে দেখা করেছি।'
        },
        {
          ja: 'ご飯を食べる前に、手を洗いましょう。',
          romaji: 'Gohan o taberu mae ni, te o araimashou.',
          meaningEn: 'Let\'s wash our hands before eating a meal.',
          meaningBn: 'খাবার খাওয়ার আগে হাত ধুয়ে নেওয়া উচিত।'
        },
        {
          ja: '明日の午前十時に区役所へ行きます。',
          romaji: 'Ashita no gozen juuji ni kuyakusho e ikimasu.',
          meaningEn: 'I will go to the ward office at 10:00 AM tomorrow.',
          meaningBn: 'আগামীকাল সকাল ১০টায় আমি ওয়ার্ড অফিসে যাব।'
        }
      ],
      tamagoTip: {
        bn: 'পা ফেলে সামনে এগিয়ে যাওয়ার নির্দেশক। স্থানের সামনে (駅前) এবং সময়ের আগে (〜の前) বোঝাতে ব্যবহৃত হয়।',
        en: 'Signifies moving forward. Used for physical space (in front) and chronological time (before/ago).'
      }
    },

    // 5. 国
    {
      id: 'l4-kuni',
      kanji: '国',
      emoji: '🌐',
      strokeCount: 8,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'コク', romaji: 'koku' }
        ],
        kunyomi: [
          { kana: 'くに', romaji: 'kuni' }
        ]
      },
      meanings: {
        en: 'country, nation, homeland',
        bn: 'দেশ, রাষ্ট্র, মাতৃভূমি'
      },
      vocab: [
        {
          kanji: '国',
          kana: 'くに',
          romaji: 'kuni',
          meaningEn: 'country, homeland',
          meaningBn: 'দেশ, স্বদেশ',
          tag: 'Country N5'
        },
        {
          kanji: '外国人',
          kana: 'がいこくじん',
          romaji: 'gaikokujin',
          meaningEn: 'foreigner, foreign national',
          meaningBn: 'বিদেশি নাগরিক',
          tag: 'Official N5'
        },
        {
          kanji: '中国',
          kana: 'ちゅうごく',
          romaji: 'Chuugoku',
          meaningEn: 'China',
          meaningBn: 'চীন',
          tag: 'Country N5'
        },
        {
          kanji: '韓国',
          kana: 'かんこく',
          romaji: 'Kankoku',
          meaningEn: 'South Korea',
          meaningBn: 'দক্ষিণ কোরিয়া',
          tag: 'Country N5'
        },
        {
          kanji: '国際',
          kana: 'こくさい',
          romaji: 'kokusai',
          meaningEn: 'international',
          meaningBn: 'আন্তর্জাতিক',
          tag: 'Daily N4'
        },
        {
          kanji: '帰国',
          kana: 'きこく',
          romaji: 'kikoku',
          meaningEn: 'returning to one\'s home country',
          meaningBn: 'স্বদেশে প্রত্যাবর্তন',
          tag: 'Official N4'
        }
      ],
      sentences: [
        {
          ja: 'お国はどちらですか。ーバングラデシュです。',
          romaji: 'Okuni wa dochira desu ka. - Banguradeshu desu.',
          meaningEn: 'Which country are you from? - I am from Bangladesh.',
          meaningBn: 'আপনার দেশের বাড়ি কোথায়? — বাংলাদেশ।'
        },
        {
          ja: '区役所で外国人登録の手続きをしました。',
          romaji: 'Kuyakusho de gaikokujin touroku no tetsuzuki o shimashita.',
          meaningEn: 'I completed the foreign resident registration procedures at the ward office.',
          meaningBn: 'ওয়ার্ড অফিসে গিয়ে আমি বিদেশি নাগরিক নিবন্ধনের কাজ সম্পন্ন করেছি।'
        },
        {
          ja: '夏休みに国へ帰る予定です。',
          romaji: 'Natsuyasumi ni kuni e kaeru yotei desu.',
          meaningEn: 'I plan to return to my home country during summer vacation.',
          meaningBn: 'গ্রীষ্মের ছুটিতে দেশে ফেরার পরিকল্পনা করছি।'
        }
      ],
      tamagoTip: {
        bn: 'সীমানা প্রাচীরের (囗) ভেতরে মূল্যবান রত্ন বা সম্পদ (玉) রক্ষা করা। এটিই হলো দেশ (国)।',
        en: 'A precious jade jewel (玉) protected within bordered territory walls (囗).'
      }
    },

    // 6. 男
    {
      id: 'l4-otoko',
      kanji: '男',
      emoji: '👨',
      strokeCount: 7,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ダン', romaji: 'dan' },
          { kana: 'ナン', romaji: 'nan' }
        ],
        kunyomi: [
          { kana: 'おとこ', romaji: 'otoko' }
        ]
      },
      meanings: {
        en: 'man, male, boy',
        bn: 'পুরুষ, ছেলে'
      },
      vocab: [
        {
          kanji: '男の人',
          kana: 'おとこのひと',
          romaji: 'otoko no hito',
          meaningEn: 'man, male adult',
          meaningBn: 'পুরুষ মানুষ',
          tag: 'Daily N5'
        },
        {
          kanji: '男の子',
          kana: 'おとこのこ',
          romaji: 'otoko no ko',
          meaningEn: 'boy',
          meaningBn: 'ছেলে শিশু',
          tag: 'Daily N5'
        },
        {
          kanji: '男性',
          kana: 'だんせい',
          romaji: 'dansei',
          meaningEn: 'male, gentleman (formal)',
          meaningBn: 'পুরুষ (মার্জিত/অফিসিয়াল রূপ)',
          tag: 'Official N4'
        },
        {
          kanji: '男子',
          kana: 'だんし',
          romaji: 'danshi',
          meaningEn: 'boy, young man, male student',
          meaningBn: 'বালক, তরুণ শিক্ষার্থী',
          tag: 'School N4'
        },
        {
          kanji: '長男',
          kana: 'ちょうなん',
          romaji: 'chounan',
          meaningEn: 'eldest son',
          meaningBn: 'বড় ছেলে / জ্যেষ্ঠ পুত্র',
          tag: 'Family N4'
        },
        {
          kanji: '男女',
          kana: 'だんじょ',
          romaji: 'danjo',
          meaningEn: 'men and women',
          meaningBn: 'উভয় লিঙ্গ / নারী-পুরুষ',
          tag: 'Official N4'
        }
      ],
      sentences: [
        {
          ja: '向こうにいる男の人は田中先生です。',
          romaji: 'Mukou ni iru otoko no hito wa Tanaka sensei desu.',
          meaningEn: 'The man over there is Professor Tanaka.',
          meaningBn: 'ওই পাশের পুরুষ ভদ্রলোকটি হলেন তানাকা শিক্ষক।'
        },
        {
          ja: '役所の申請用紙で「男」にチェックを入れました。',
          romaji: 'Yakusho no shinsei youshi de "otoko" ni chekku o iremashita.',
          meaningEn: 'I checked "Male" on the municipal application form.',
          meaningBn: 'সিটি হলের আবেদনপত্রের লিঙ্গ কলামে আমি "পুরুষ" অপশনে টিক দিয়েছি।'
        },
        {
          ja: '男性用のトイレは右側にあります。',
          romaji: 'Danseiyou no toire wa migigawa ni arimasu.',
          meaningEn: 'The men\'s restroom is on the right side.',
          meaningBn: 'পুরুষদের শৌচাগারটি ডান পাশে অবস্থিত।'
        }
      ],
      tamagoTip: {
        bn: 'ধানক্ষেতে (田) শারীরিক শক্তি (力) দিয়ে কাজ করা ব্যক্তি = পুরুষ (男)। সরকারি ফর্মে 性別 এর ঘরে 男 থাকে।',
        en: 'Using physical strength (力) in rice fields (田) depicts a man. Look for 男 on official forms.'
      }
    },

    // 7. 女
    {
      id: 'l4-onna',
      kanji: '女',
      emoji: '👩',
      strokeCount: 3,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ジョ', romaji: 'jo' },
          { kana: 'ニョ', romaji: 'nyo' }
        ],
        kunyomi: [
          { kana: 'おんな', romaji: 'onna' },
          { kana: 'め', romaji: 'me' }
        ]
      },
      meanings: {
        en: 'woman, female, girl',
        bn: 'নারী, মহিলা, মেয়ে'
      },
      vocab: [
        {
          kanji: '女の人',
          kana: 'おんなのひと',
          romaji: 'onna no hito',
          meaningEn: 'woman, female adult',
          meaningBn: 'মহিলা, নারী',
          tag: 'Daily N5'
        },
        {
          kanji: '女の子',
          kana: 'おんなのこ',
          romaji: 'onna no ko',
          meaningEn: 'girl',
          meaningBn: 'মেয়ে শিশু',
          tag: 'Daily N5'
        },
        {
          kanji: '女性',
          kana: 'じょせい',
          romaji: 'josei',
          meaningEn: 'female, lady (formal)',
          meaningBn: 'মহিলা (মার্জিত রূপ)',
          tag: 'Official N4'
        },
        {
          kanji: '女子',
          kana: 'じょし',
          romaji: 'joshi',
          meaningEn: 'girl, female student',
          meaningBn: 'বালিকা, ছাত্রী',
          tag: 'School N4'
        },
        {
          kanji: '長女',
          kana: 'ちょうじょ',
          romaji: 'choujo',
          meaningEn: 'eldest daughter',
          meaningBn: 'বড় মেয়ে / জ্যেষ্ঠ কন্যা',
          tag: 'Family N4'
        },
        {
          kanji: '彼女',
          kana: 'かのじょ',
          romaji: 'kanojo',
          meaningEn: 'she, girlfriend',
          meaningBn: 'সে (স্ত্রীলিঙ্গ), বান্ধবী',
          tag: 'Daily N5'
        }
      ],
      sentences: [
        {
          ja: '受付に優しい女の人がいます。',
          romaji: 'Uketsuke ni yasashii onna no hito ga imasu.',
          meaningEn: 'There is a kind woman at the reception desk.',
          meaningBn: 'রিসেপশনে একজন ভদ্র ও অমায়িক মহিলা দায়িত্ব পালন করছেন।'
        },
        {
          ja: '電車には朝、女性専用車両があります。',
          romaji: 'Densha ni wa asa, josei sen\'you sharyou ga arimasu.',
          meaningEn: 'There are women-only carriages on trains in the morning.',
          meaningBn: 'সকালে জাপানের ট্রেনে মহিলাদের জন্য বিশেষ সংরক্ষিত কামরা থাকে।'
        },
        {
          ja: '彼女は日本語の勉強を一生懸命しています。',
          romaji: 'Kanojo wa Nihongo no benkyou o isshoukenmei shite imasu.',
          meaningEn: 'She is studying Japanese very hard.',
          meaningBn: 'সে অত্যন্ত মনোযোগ ও নিষ্ঠার সাথে জাপানি ভাষা শিখছে।'
        }
      ],
      tamagoTip: {
        bn: 'মার্জিতভাবে বসা একজন নারীর সুন্দর দেহাবয়ব থেকে 女 কাঞ্জি এসেছে। ওয়ার্ড অফিসের ফর্মে 性別 এ 女 থাকে।',
        en: 'Depicts a woman sitting gracefully. Found on municipal registration forms and restrooms.'
      }
    },

    // 8. 区
    {
      id: 'l4-ku',
      kanji: '区',
      emoji: '🏙️',
      strokeCount: 4,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ク', romaji: 'ku' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'ward, district, municipal section',
        bn: 'ওয়ার্ড, পৌর বরো / প্রশাসনিক এলাকা'
      },
      vocab: [
        {
          kanji: '区役所',
          kana: 'くやくしょ',
          romaji: 'kuyakusho',
          meaningEn: 'ward office (City Hall for ward)',
          meaningBn: 'ওয়ার্ড অফিস (নাগরিক সেবা কেন্দ্র)',
          tag: 'Official N5'
        },
        {
          kanji: '区',
          kana: 'く',
          romaji: 'ku',
          meaningEn: 'ward (e.g. Shinjuku-ku)',
          meaningBn: 'ওয়ার্ড / পৌর অঞ্চল',
          tag: 'Address N5'
        },
        {
          kanji: '区民',
          kana: 'くみん',
          romaji: 'kumin',
          meaningEn: 'ward resident',
          meaningBn: 'ওয়ার্ডের অধিবাসী',
          tag: 'Official N4'
        },
        {
          kanji: '区別',
          kana: 'くべつ',
          romaji: 'kubetsu',
          meaningEn: 'distinction, differentiation',
          meaningBn: 'পার্থক্যকরণ / শ্রেণিবিভাগ',
          tag: 'Daily N4'
        },
        {
          kanji: '地区',
          kana: 'ちく',
          romaji: 'chiku',
          meaningEn: 'district, sector, zone',
          meaningBn: 'অঞ্চল / এলাকা',
          tag: 'General N4'
        },
        {
          kanji: '新宿区',
          kana: 'しんじゅくく',
          romaji: 'Shinjuku-ku',
          meaningEn: 'Shinjuku Ward (Tokyo)',
          meaningBn: 'শিনজুকু ওয়ার্ড',
          tag: 'Address'
        }
      ],
      sentences: [
        {
          ja: '日本に着いたら、二週間以内に区役所で住所登録をします。',
          romaji: 'Nihon ni tsuitara, nishuukan inai ni kuyakusho de juusho touroku o shimasu.',
          meaningEn: 'When you arrive in Japan, register your address at the ward office within 2 weeks.',
          meaningBn: 'জাপানে পৌঁছানোর দুই সপ্তাহের মধ্যে ওয়ার্ড অফিসে গিয়ে স্থায়ী ঠিকানা রেজিস্ট্রি করতে হয়।'
        },
        {
          ja: '私は東京都新宿区に住んでいます。',
          romaji: 'Watashi wa Toukyou-to Shinjuku-ku ni sunde imasu.',
          meaningEn: 'I live in Shinjuku Ward, Tokyo.',
          meaningBn: 'আমি টোকিও মেট্রোপলিটনের শিনজুকু ওয়ার্ডে বসবাস করি।'
        },
        {
          ja: '区民センターで日本語教室が開かれています。',
          romaji: 'Kumin sentaa de Nihongo kyoushitsu ga hirakarete imasu.',
          meaningEn: 'Japanese classes are held at the ward residents\' center.',
          meaningBn: 'ওয়ার্ডের কমিউনিটি সেন্টারে জাপানি ভাষার ক্লাস পরিচালিত হয়।'
        }
      ],
      tamagoTip: {
        bn: 'বাক্সের ভেতরে (匚) জিনিসপত্র সুনির্দিষ্ট সীমানায় আলাদা ভাগ (区) করা। টোকিওর ২৩টি বিশেষ ওয়ার্ডের প্রতিটিতে 区役所 থাকে।',
        en: 'Partitioning items neatly into sections inside a container (匚). Crucial for Tokyo\'s 23 wards.'
      }
    },

    // 9. 市
    {
      id: 'l4-shi',
      kanji: '市',
      emoji: '🏢',
      strokeCount: 5,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'シ', romaji: 'shi' }
        ],
        kunyomi: [
          { kana: 'いち', romaji: 'ichi' }
        ]
      },
      meanings: {
        en: 'city, town, market, fair',
        bn: 'শহর, নগর, বাজার'
      },
      vocab: [
        {
          kanji: '市役所',
          kana: 'しやくしょ',
          romaji: 'shiyakusho',
          meaningEn: 'city hall',
          meaningBn: 'সিটি হল (পৌর ভবন)',
          tag: 'Official N5'
        },
        {
          kanji: '市民',
          kana: 'しみん',
          romaji: 'shimin',
          meaningEn: 'citizen, city resident',
          meaningBn: 'শহরের নাগরিক',
          tag: 'Official N4'
        },
        {
          kanji: '市長',
          kana: 'しちょう',
          romaji: 'shichou',
          meaningEn: 'mayor (of a city)',
          meaningBn: 'সিটি মেয়র',
          tag: 'Official N4'
        },
        {
          kanji: '市場',
          kana: 'いちば / しじょう',
          romaji: 'ichiba / shijou',
          meaningEn: 'marketplace, market',
          meaningBn: 'বাজার / কাঁচাবাজার',
          tag: 'Daily N4'
        },
        {
          kanji: '都市',
          kana: 'とし',
          romaji: 'toshi',
          meaningEn: 'city, metropolis',
          meaningBn: 'মহানগরী / শহর',
          tag: 'General N4'
        },
        {
          kanji: '市内',
          kana: 'しない',
          romaji: 'shinai',
          meaningEn: 'within the city',
          meaningBn: 'শহরের ভেতরে',
          tag: 'Daily N4'
        }
      ],
      sentences: [
        {
          ja: '引越しのあと、市役所で住民票をもらいました。',
          romaji: 'Hikkoshi no ato, shiyakusho de juuminhyou o moraimashita.',
          meaningEn: 'After moving, I obtained my certificate of residence at the city hall.',
          meaningBn: 'বাসা বদলের পর সিটি হল থেকে আমি আমার বাসিন্দা সনদ (জুমিনহিও) তুলেছি।'
        },
        {
          ja: '横浜市は東京の隣にある大きな港町です。',
          romaji: 'Yokohama-shi wa Toukyou no tonari ni aru ookina minatomachi desu.',
          meaningEn: 'Yokohama City is a large port city next to Tokyo.',
          meaningBn: 'ইয়োকোহামা শহর হলো টোকিওর পাশেই অবস্থিত একটি বৃহৎ বন্দর নগরী।'
        },
        {
          ja: '朝早く魚市場へ見学に行きました。',
          romaji: 'Asa hayaku uoichiba e kengaku ni ikimashita.',
          meaningEn: 'I went to visit the fish market early in the morning.',
          meaningBn: 'সকাল সকাল আমি মাছের পাইকারি বাজার পরিদর্শনে গিয়েছিলাম।'
        }
      ],
      tamagoTip: {
        bn: 'জনাকীর্ণ হাটে পতাকা টাঙিয়ে কেনাবেচার কেন্দ্র থেকে 市 কাঞ্জির উৎপত্তি। জাপানের পৌর ঠিকানায় 〜市 (শহর) সর্বদা থাকে।',
        en: 'A banner marking a crowded central market. Used in city names and City Hall (市役所).'
      }
    },

    // --- READ-ONLY KANJI (読める) ---
    // 10. 電話
    {
      id: 'l4-denwa',
      kanji: '電話',
      emoji: '☎️',
      strokeCount: 26,
      jlpt: 'N5',
      category: 'read_only',
      readings: {
        onyomi: [
          { kana: 'デンワ', romaji: 'denwa' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'telephone, phone call',
        bn: 'টেলিফোন, ফোন কল, যোগাযোগ'
      },
      vocab: [
        {
          kanji: '電話',
          kana: 'でんわ',
          romaji: 'denwa',
          meaningEn: 'telephone, phone call',
          meaningBn: 'টেলিফোন, ফোন কল',
          tag: 'Daily N5'
        },
        {
          kanji: '電話番号',
          kana: 'でんわばんごう',
          romaji: 'denwa bangou',
          meaningEn: 'telephone number',
          meaningBn: 'ফোন নম্বর',
          tag: 'Official N5'
        },
        {
          kanji: '携帯電話',
          kana: 'けいたいでんわ',
          romaji: 'keitai denwa',
          meaningEn: 'mobile phone, cell phone',
          meaningBn: 'মোবাইল ফোন',
          tag: 'Daily N5'
        },
        {
          kanji: '電話をかける',
          kana: 'でんわをかける',
          romaji: 'denwa o kakeru',
          meaningEn: 'to make a phone call',
          meaningBn: 'কাউকে ফোন করা',
          tag: 'Phrase N5'
        },
        {
          kanji: '公衆電話',
          kana: 'こうしゅうでんわ',
          romaji: 'koushuu denwa',
          meaningEn: 'public payphone',
          meaningBn: 'পাবলিক পে-ফোন',
          tag: 'Emergency N4'
        },
        {
          kanji: '不在電話',
          kana: 'ふざいでんわ',
          romaji: 'fuzai denwa',
          meaningEn: 'missed call',
          meaningBn: 'মিসড কল',
          tag: 'Daily'
        }
      ],
      sentences: [
        {
          ja: '書類に連絡先として電話番号を書いてください。',
          romaji: 'Shorui ni renrakusaki toshite denwa bangou o kaite kudasai.',
          meaningEn: 'Please write your telephone number as your contact information on the document.',
          meaningBn: 'কাগজপত্রে যোগাযোগের মাধ্যম হিসেবে আপনার ফোন নম্বরটি লিখুন।'
        },
        {
          ja: '明日、病院に予約の電話をかけます。',
          romaji: 'Ashita, byouin ni yoyaku no denwa o kakemasu.',
          meaningEn: 'Tomorrow, I will make a phone call to the hospital for an appointment.',
          meaningBn: 'আগামীকাল হাসপাতালে অ্যাপয়েন্টমেন্ট নেওয়ার জন্য ফোন করব।'
        },
        {
          ja: '電車の優先席の近くでは携帯電話の電源を切りましょう。',
          romaji: 'Densha no yuusenseki no chikaku de wa keitai denwa no dengen o kirimashou.',
          meaningEn: 'Near priority seats on trains, please turn off your mobile phone.',
          meaningBn: 'ট্রেনের অগ্রাধিকার আসনের কাছে মোবাইল ফোনের পাওয়ার বন্ধ রাখার অনুরোধ করা হয়।'
        }
      ],
      tamagoTip: {
        bn: '電 (বিদ্যুৎ) + 話 (কথা বলা) = 電話 (টেলিফোন)। সরকারি যেকোনো ফর্মে 電話番号 (ফোন নম্বর) লেখার ঘর থাকে।',
        en: 'Electricity (電) + Talk (話) = Telephone. Watch for 電話番号 (phone number) on forms.'
      }
    },

    // 11. 住所
    {
      id: 'l4-juusho',
      kanji: '住所',
      emoji: '🏠',
      strokeCount: 15,
      jlpt: 'N5',
      category: 'read_only',
      readings: {
        onyomi: [
          { kana: 'ジュウショ', romaji: 'juusho' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'address, residence, living place',
        bn: 'ঠিকানা, বাসস্থান'
      },
      vocab: [
        {
          kanji: '住所',
          kana: 'じゅうしょ',
          romaji: 'juusho',
          meaningEn: 'address, place of residence',
          meaningBn: 'ঠিকানা, বাসস্থান',
          tag: 'Official N5'
        },
        {
          kanji: '現住所',
          kana: 'げんじゅうしょ',
          romaji: 'genjuusho',
          meaningEn: 'current address',
          meaningBn: 'বর্তমান ঠিকানা',
          tag: 'Official N4'
        },
        {
          kanji: '住む',
          kana: 'すむ',
          romaji: 'sumu',
          meaningEn: 'to live, reside',
          meaningBn: 'বসবাস করা',
          tag: 'Verb N5'
        },
        {
          kanji: '住民票',
          kana: 'じゅうみんひょう',
          romaji: 'juuminhyou',
          meaningEn: 'certificate of residence',
          meaningBn: 'নাগরিক বাসিন্দা সনদ (জুমিনহিও)',
          tag: 'Official N4'
        },
        {
          kanji: '住宅',
          kana: 'じゅうたく',
          romaji: 'juutaku',
          meaningEn: 'housing, residential building',
          meaningBn: 'আবাসন, বসতবাড়ি',
          tag: 'Housing N4'
        },
        {
          kanji: '住所変更',
          kana: 'じゅうしょへんこう',
          romaji: 'juusho henkou',
          meaningEn: 'change of address',
          meaningBn: 'ঠিকানা পরিবর্তন',
          tag: 'Official N4'
        }
      ],
      sentences: [
        {
          ja: '在留カードの裏面に新しい住所が書かれています。',
          romaji: 'Zairyuu kaado no uramen ni atarashii juusho ga kakarete imasu.',
          meaningEn: 'The new address is printed on the back of the Residence Card.',
          meaningBn: 'রেসিডেন্স কার্ডের পেছনের অংশে নতুন ঠিকানাটি সরকারি সিল দিয়ে লিখে দেওয়া হয়।'
        },
        {
          ja: '郵便番号を入力すると、住所が自動で出ます。',
          romaji: 'Yuubin bangou o nyuuryoku suru to, juusho ga jidou de demasu.',
          meaningEn: 'When you enter the postal code, the address appears automatically.',
          meaningBn: 'পোস্টাল কোড বা পিন নম্বর লিখলে স্বয়ংক্রিয়ভাবে জাপানি ঠিকানা চলে আসে।'
        },
        {
          ja: '銀行口座を開くために住民票が必要です。',
          romaji: 'Ginkou kouza o hiraku tame ni juuminhyou ga hitsuyou desu.',
          meaningEn: 'A certificate of residence is needed to open a bank account.',
          meaningBn: 'ব্যাংক অ্যাকাউন্ট খোলার জন্য বাসিন্দা সনদের (জুমিনহিও) প্রয়োজন হয়।'
        }
      ],
      tamagoTip: {
        bn: '住 (বসবাস করা) + 所 (স্থান) = 住所 (বাসস্থানের ঠিকানা)। ব্যাংক, সিম কার্ড ও সরকারি ফর্মের প্রধান ঘর হলো 住所।',
        en: 'Reside (住) + Place (所) = Address. Found at the top of every bank, SIM, and city registration form.'
      }
    },

    // 12. 〜歳
    {
      id: 'l4-sai-formal',
      kanji: '歳',
      emoji: '🎂',
      strokeCount: 13,
      jlpt: 'N4',
      category: 'read_only',
      readings: {
        onyomi: [
          { kana: 'サイ', romaji: 'sai' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'years of age (formal official counter)',
        bn: 'বছর বয়স (অফিসিয়াল ও প্রমিত রূপ)'
      },
      vocab: [
        {
          kanji: '〜歳',
          kana: '〜さい',
          romaji: '~sai',
          meaningEn: '...years old (formal)',
          meaningBn: 'বছর বয়স (অফিসিয়াল ফর্মের রূপ)',
          tag: 'Age N5'
        },
        {
          kanji: '二十歳',
          kana: 'はたち / にじゅっさい',
          romaji: 'hatachi / nijussai',
          meaningEn: 'twenty years old (adulthood in Japan)',
          meaningBn: '২০ বছর বয়স (জাপানে সাবালকত্ব)',
          tag: 'Age N5'
        },
        {
          kanji: '何歳',
          kana: 'なんさい',
          romaji: 'nansai',
          meaningEn: 'how old',
          meaningBn: 'বয়স কত',
          tag: 'Question N5'
        },
        {
          kanji: '歳末',
          kana: 'さいまつ',
          romaji: 'saimatsu',
          meaningEn: 'year-end',
          meaningBn: 'বছরের সমাপ্তিকাল',
          tag: 'Season N4'
        },
        {
          kanji: '万歳',
          kana: 'ばんざい',
          romaji: 'banzai',
          meaningEn: 'hurrah! long life!',
          meaningBn: 'দীর্ঘজীবী হোক! জয়ধ্বনি!',
          tag: 'Culture N4'
        },
        {
          kanji: '満〜歳',
          kana: 'まん〜さい',
          romaji: 'man ~sai',
          meaningEn: 'full/completed age of ...',
          meaningBn: 'পূর্ণ বয়স ... বছর',
          tag: 'Official Form'
        }
      ],
      sentences: [
        {
          ja: '申請書の年齢の欄に「二十五歳」と書きました。',
          romaji: 'Shinseisho no nenrei no ran ni "nijuugo sai" to kakimashita.',
          meaningEn: 'I wrote "25 years old" in the age column of the application form.',
          meaningBn: 'আবেদনপত্রের বয়সের কলামে আমি "২৫ বছর" লিখেছি।'
        },
        {
          ja: '日本では二十歳になるとお酒やたばこが買えます。',
          romaji: 'Nihon de wa hatachi ni naru to osake ya tabako ga kaemasu.',
          meaningEn: 'In Japan, when you turn 20 years old, you can purchase alcohol and tobacco.',
          meaningBn: 'জাপানে ২০ বছর পূর্ণ হলে অ্যালকোহল ও তামাক কেনার আইনি অধিকার তৈরি হয়।'
        },
        {
          ja: '今年でちょうど三十歳になります。',
          romaji: 'Kotoshi de choudo sanjussai ni narimasu.',
          meaningEn: 'I will turn exactly 30 years old this year.',
          meaningBn: 'এই বছর আমার বয়স ঠিক ৩০ বছরে পা দেবে।'
        }
      ],
      tamagoTip: {
        bn: 'লেসন ১-এ শেখা সহজ 才 এর আসল আনুষ্ঠানিক কাঞ্জি হলো 歳। সরকারি নথিপত্র ও আইডিতে সর্বদা 歳 ব্যবহৃত হয়।',
        en: 'Formal orthodox Kanji for age counter (replacing the shorthand 才 in official forms).'
      }
    },

    // --- VISUAL RECOGNITION (見て、わかる) ---
    // 13. 性別
    {
      id: 'l4-seibetsu',
      kanji: '性別',
      emoji: '🚻',
      strokeCount: 15,
      jlpt: 'N4',
      category: 'visual_recognition',
      readings: {
        onyomi: [
          { kana: 'セイベツ', romaji: 'seibetsu' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'sex, gender (on official forms)',
        bn: 'লিঙ্গ (অফিসিয়াল ফর্ম ও সনদে লিঙ্গ পরিচয়)'
      },
      vocab: [
        {
          kanji: '性別',
          kana: 'せいべつ',
          romaji: 'seibetsu',
          meaningEn: 'gender, sex (official forms)',
          meaningBn: 'লিঙ্গ পরিচয় (ফরমের কলাম)',
          tag: 'Official Form N4'
        },
        {
          kanji: '男性',
          kana: 'だんせい',
          romaji: 'dansei',
          meaningEn: 'male',
          meaningBn: 'পুরুষ',
          tag: 'Official N4'
        },
        {
          kanji: '女性',
          kana: 'じょせい',
          romaji: 'josei',
          meaningEn: 'female',
          meaningBn: 'নারী / মহিলা',
          tag: 'Official N4'
        },
        {
          kanji: '別',
          kana: 'べつ',
          romaji: 'betsu',
          meaningEn: 'different, separate, another',
          meaningBn: 'আলাদা, ভিন্ন',
          tag: 'Daily N4'
        },
        {
          kanji: '特別',
          kana: 'とくべつ',
          romaji: 'tokubetsu',
          meaningEn: 'special, exceptional',
          meaningBn: 'বিশেষ, ব্যতিক্রমী',
          tag: 'Daily N4'
        },
        {
          kanji: '別々に',
          kana: 'べつべつに',
          romaji: 'betsubetsu ni',
          meaningEn: 'separately (e.g. paying the bill)',
          meaningBn: 'আলাদা আলাদাভাবে (বিল দেওয়া)',
          tag: 'Restaurant N5'
        }
      ],
      sentences: [
        {
          ja: '住民登録の用紙に「性別」の欄があります。',
          romaji: 'Juumin touroku no youshi ni "seibetsu" no ran ga arimasu.',
          meaningEn: 'There is a "Sex/Gender" field on the resident registration sheet.',
          meaningBn: 'বাসিন্দা নিবন্ধন সনদে "লিঙ্গ (性別)" এর একটি নির্দিষ্ট কলাম থাকে।'
        },
        {
          ja: '性別の隣にある「男」または「女」に丸をつけてください。',
          romaji: 'Seibetsu no tonari ni aru "otoko" matawa "onna" ni maru o tsukete kudasai.',
          meaningEn: 'Please circle "Male" or "Female" next to Gender.',
          meaningBn: 'লিঙ্গ কলামের পাশে দেওয়া "পুরুষ (男)" অথবা "নারী (女)" অপশনে গোল দাগ দিন।'
        },
        {
          ja: 'お会計は別々にお願いできますか。',
          romaji: 'Okaikei wa betsubetsu ni onegai dekimasu ka.',
          meaningEn: 'Could we please pay the bill separately?',
          meaningBn: 'আমরা কি খাবারের বিলটা আলাদা আলাদাভাবে দিতে পারি?'
        }
      ],
      tamagoTip: {
        bn: '性 (প্রকৃতি/লিঙ্গ) + 別 (পার্থক্য)। জাপানের যে কোনো নাগরিক ও ইমিগ্রেশন ফর্মে "性別: 男・女" থাকে।',
        en: 'Sex (性) + Distinguish (別). Seen on every municipal, bank, and visa application form.'
      }
    }
  ]
};
