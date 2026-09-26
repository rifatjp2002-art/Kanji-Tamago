import { Lesson } from '../types/kanji';

export const lesson7: Lesson = {
  id: 7,
  number: 7,
  titleJa: '何を食べる？',
  titleRomaji: 'Nani o taberu?',
  titleBn: 'কী খাবেন? (খাবার, রন্ধনশিল্প ও রেস্তোরাঁর অফার)',
  titleEn: 'What Do You Eat? (Food, Cooking & Restaurant Discounts)',
  descriptionBn: 'দৈনন্দিন খাবার, রান্নাবান্না (料理), মাংস (肉), মাঠ ও সবজি (野菜), মাপ ও আকার (大, 小, 半) এবং রেস্তোরাঁ ও সুপারমার্কেটের চেনা সাইন যেমন ভাত (ご飯), মাছ (魚), জাপানি মদ (酒), বাটির খাবার (〜丼), সেট মিল (定食) ও অর্ধেক দামের অফার (半額)।',
  descriptionEn: 'Essential Kanji for dining, supermarket groceries, portion sizes (large, small, half), and restaurant menus including set meals (定食), rice bowls (〜丼), sake, and half-price discounts (半額).',
  kanjiList: [
    // --- MAIN KANJI (7) ---
    // 1. 肉
    {
      id: 'l7-niku',
      kanji: '肉',
      emoji: '🥩',
      strokeCount: 6,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ニク', romaji: 'niku' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'meat, flesh, muscle',
        bn: 'মাংস, গোশত'
      },
      vocab: [
        {
          kanji: '肉',
          kana: 'にく',
          romaji: 'niku',
          meaningEn: 'meat',
          meaningBn: 'মাংস',
          tag: 'Food N5'
        },
        {
          kanji: '牛肉',
          kana: 'ぎゅうにく',
          romaji: 'gyuuniku',
          meaningEn: 'beef',
          meaningBn: 'গরুর মাংস',
          tag: 'Food N5'
        },
        {
          kanji: '豚肉',
          kana: 'ぶたにく',
          romaji: 'butaniku',
          meaningEn: 'pork',
          meaningBn: 'শূকরের মাংস',
          tag: 'Food N5'
        },
        {
          kanji: '鶏肉',
          kana: 'とりにく',
          romaji: 'toriniku',
          meaningEn: 'chicken meat',
          meaningBn: 'মুরগির মাংস',
          tag: 'Food N5'
        },
        {
          kanji: '肉屋',
          kana: 'にくや',
          romaji: 'nikuya',
          meaningEn: 'butcher shop',
          meaningBn: 'মাংসের দোকান',
          tag: 'Shop N4'
        },
        {
          kanji: 'ひき肉',
          kana: 'ひきにく',
          romaji: 'hikiniku',
          meaningEn: 'minced meat, ground meat',
          meaningBn: 'কিম্বা / কিমা মাংস',
          tag: 'Cooking N4'
        }
      ],
      sentences: [
        {
          ja: '今夜のカレーのためにスーパーで鶏肉を買いました。',
          romaji: 'Kon\'ya no karee no tame ni suupaa de toriniku o kaimashita.',
          meaningEn: 'I bought chicken at the supermarket for tonight\'s curry.',
          meaningBn: 'আজ রাতের কারি রান্নার জন্য আমি সুপারমার্কেট থেকে মুরগির মাংস কিনেছি।'
        },
        {
          ja: 'ハラール認証の牛肉を探しています。',
          romaji: 'Haraaru ninshou no gyuuniku o sagashite imasu.',
          meaningEn: 'I am looking for halal-certified beef.',
          meaningBn: 'আমি হালাল সার্টিফাইড গরুর মাংস খুঁজছি।'
        },
        {
          ja: '私は宗教上の理由で豚肉を食べません。',
          romaji: 'Watashi wa shuukyoujou no riyuu de butaniku o tabemasen.',
          meaningEn: 'I do not eat pork for religious reasons.',
          meaningBn: 'ধর্মীয় কারণে আমি শূকরের মাংস খাই না।'
        }
      ],
      tamagoTip: {
        bn: 'হাড়ের সাথে ঝুলন্ত মাংসের পেশির স্তর। জাপানের সুপারমার্কেটে 牛肉 (গরু), 鶏肉 (মুরগি) ও 豚肉 (শূকর) লেবেল চিনতে পারা অপরিহার্য।',
        en: 'Flesh sliced from ribs showing sinew lines. Essential in Japan for distinguishing chicken (鶏肉), beef (牛肉), and pork (豚肉).'
      }
    },

    // 2. 料
    {
      id: 'l7-ryou',
      kanji: '料',
      emoji: '🧾',
      strokeCount: 10,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'リョウ', romaji: 'ryou' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'fee, ingredients, measure, materials',
        bn: 'ফি, উপাদান, পরিমাপ, ব্যয়'
      },
      vocab: [
        {
          kanji: '料金',
          kana: 'りょうきん',
          romaji: 'ryoukin',
          meaningEn: 'fee, charge, fare',
          meaningBn: 'ফি / ভাড়া / মাশুল',
          tag: 'Daily N5'
        },
        {
          kanji: '料理',
          kana: 'りょうり',
          romaji: 'ryouri',
          meaningEn: 'cooking, cuisine, food dish',
          meaningBn: 'রান্না / খাবার',
          tag: 'Daily N5'
        },
        {
          kanji: '材料',
          kana: 'ざいりょう',
          romaji: 'zairyou',
          meaningEn: 'ingredients, raw materials',
          meaningBn: 'উপাদান / কাঁচামাল',
          tag: 'Daily N4'
        },
        {
          kanji: '無料',
          kana: 'むりょう',
          romaji: 'muryou',
          meaningEn: 'free of charge',
          meaningBn: 'বিনামূল্যে / ফ্রি',
          tag: 'Daily N4'
        },
        {
          kanji: '有料',
          kana: 'ゆうりょう',
          romaji: 'yuuryou',
          meaningEn: 'paid, toll, fee required',
          meaningBn: 'সशुल्क / পেমেন্ট প্রযোজ্য',
          tag: 'Daily N4'
        },
        {
          kanji: '授業料',
          kana: 'じゅぎょうりょう',
          romaji: 'jugyouryou',
          meaningEn: 'tuition fee',
          meaningBn: 'টিউশন ফি / পড়াশোনার খরচ',
          tag: 'School N4'
        }
      ],
      sentences: [
        {
          ja: 'この美術館の入場料金はいくらですか。ー高校生は無料です。',
          romaji: 'Kono bijutsukan no nyuujouryoukin wa ikura desu ka. - Koukousei wa muryou desu.',
          meaningEn: 'How much is the admission fee for this museum? - It is free for high school students.',
          meaningBn: 'এই জাদুঘরের প্রবেশ ফি কত? — হাই স্কুলের শিক্ষার্থীদের জন্য বিনামূল্যে।'
        },
        {
          ja: '日本の家庭料理の作り方を習いたいです。',
          romaji: 'Nihon no katei ryouri no tsukurikata o naritai desu.',
          meaningEn: 'I want to learn how to make Japanese home cooking.',
          meaningBn: 'আমি জাপানি ঘরোয়া রান্নার নিয়ম শিখতে চাই।'
        },
        {
          ja: '美味しい料理を作るには新鮮な材料が必要です。',
          romaji: 'Oishii ryouri o tsukuru niwa shinsen na zairyou ga hitsuyou desu.',
          meaningEn: 'Fresh ingredients are necessary to make delicious food.',
          meaningBn: 'সুস্বাদু খাবার প্রস্তুত করার জন্য তাজা উপাদান প্রয়োজন।'
        }
      ],
      tamagoTip: {
        bn: 'ভাত বা চাল (米) বড় চামচ দিয়ে মেপে (斗) উপাদান বণ্টন করা বা মূল্য নির্ধারণ করা। 料理 (রান্না) ও 無料 (ফ্রি)-তে এটি ব্যবহৃত হয়।',
        en: 'Measuring out grain (米) with a ladle (斗). Represents ingredients in cooking (料理) and fee/price (料金, 無料).'
      }
    },

    // 3. 理
    {
      id: 'l7-ri',
      kanji: '理',
      emoji: '🧠',
      strokeCount: 11,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'リ', romaji: 'ri' }
        ],
        kunyomi: [
          { kana: 'ことわり', romaji: 'kotowari' }
        ]
      },
      meanings: {
        en: 'reason, logic, arrangement, manage',
        bn: 'যুক্তি, নীতি, সুশৃঙ্খল ব্যবস্থা'
      },
      vocab: [
        {
          kanji: '料理',
          kana: 'りょうり',
          romaji: 'ryouri',
          meaningEn: 'cooking, culinary dish',
          meaningBn: 'রান্নাবান্না / খাদ্য পদ',
          tag: 'Daily N5'
        },
        {
          kanji: '理由',
          kana: 'りゆう',
          romaji: 'riyuu',
          meaningEn: 'reason, pretext',
          meaningBn: 'কারণ / যুক্তি',
          tag: 'Daily N4'
        },
        {
          kanji: '理解',
          kana: 'りかい',
          romaji: 'rikai',
          meaningEn: 'understanding, comprehension',
          meaningBn: 'অনুধাবন / উপলব্ধি করা',
          tag: 'Academic N4'
        },
        {
          kanji: '地理',
          kana: 'ちり',
          romaji: 'chiri',
          meaningEn: 'geography',
          meaningBn: 'ভূগোল',
          tag: 'Study N4'
        },
        {
          kanji: '修理',
          kana: 'しゅうり',
          romaji: 'shuuri',
          meaningEn: 'repair, mending',
          meaningBn: 'মেরামত করা',
          tag: 'Daily N4'
        },
        {
          kanji: '無理',
          kana: 'むり',
          romaji: 'muri',
          meaningEn: 'impossible, unreasonable, overdoing it',
          meaningBn: 'অসম্ভব / অতিরিক্ত চাপ নেওয়া',
          tag: 'Daily N4'
        }
      ],
      sentences: [
        {
          ja: '休日は自分で美味しい料理を作って食べます。',
          romaji: 'Kyuujitsu wa jibun de oishii ryouri o tsukutte tabemasu.',
          meaningEn: 'On holidays, I cook and eat delicious meals by myself.',
          meaningBn: 'ছুটির দিনে আমি নিজে মজাদার রান্না করে খাই।'
        },
        {
          ja: '学校を休んだ理由を先生に詳しく説明しました。',
          romaji: 'Gakkou o yasunda riyuu o sensei ni kuwashiku setsumei shimashita.',
          meaningEn: 'I explained in detail to the teacher the reason why I was absent from school.',
          meaningBn: 'স্কুলে অনুপস্থিত থাকার কারণটি আমি শিক্ষককে বিস্তারিতভাবে বুঝিয়ে বলেছি।'
        },
        {
          ja: 'あまり無理をしないで、体を大切にしてください。',
          romaji: 'Amari muri o shinaide, karada o taisetsu ni shite kudasai.',
          meaningEn: 'Please don\'t overwork yourself and take good care of your body.',
          meaningBn: 'বেশি বাড়াবাড়ি বা কাজের চাপ নেবেন না, নিজের শরীরের যত্ন নিন।'
        }
      ],
      tamagoTip: {
        bn: 'রত্নপাথর (王/玉) কেটে গ্রামের (里) রাস্তার মতো সুনির্দিষ্ট নকশা তৈরি করা। সুশৃঙ্খল ব্যবস্থাপনায় 料理 (রান্না) ও 理由 (কারণ)।',
        en: 'Polishing precious jade (王) following orderly lines like village roads (里). Logic, repair (修理), and cuisine (料理).'
      }
    },

    // 4. 野
    {
      id: 'l7-ya',
      kanji: '野',
      emoji: '🥬',
      strokeCount: 11,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ヤ', romaji: 'ya' }
        ],
        kunyomi: [
          { kana: 'の', romaji: 'no' }
        ]
      },
      meanings: {
        en: 'field, plain, wild, outdoor',
        bn: 'মাঠ, প্রান্তর, বন্য, উন্মুক্ত স্থান'
      },
      vocab: [
        {
          kanji: '野菜',
          kana: 'やさい',
          romaji: 'yasai',
          meaningEn: 'vegetables, greens',
          meaningBn: 'শাকসবজি / তরকারি',
          tag: 'Food N5'
        },
        {
          kanji: '野球',
          kana: 'やきゅう',
          romaji: 'yakyuu',
          meaningEn: 'baseball',
          meaningBn: 'বেসবল খেলা',
          tag: 'Sport N5'
        },
        {
          kanji: '野原',
          kana: 'のはら',
          romaji: 'nohara',
          meaningEn: 'open grassy plain, field',
          meaningBn: 'ঘাসের উন্মুক্ত প্রান্তর',
          tag: 'Nature N4'
        },
        {
          kanji: '分野',
          kana: 'ぶんや',
          romaji: 'bunya',
          meaningEn: 'field of study, specialty, sphere',
          meaningBn: 'কর্মক্ষেত্র / অধ্যায়নের ক্ষেত্র',
          tag: 'Formal N4'
        },
        {
          kanji: '中野',
          kana: 'なかの',
          romaji: 'Nakano',
          meaningEn: 'Nakano (famous Tokyo district & surname)',
          meaningBn: 'নাকানো (টোকিওর জনপ্রিয় এলাকা)',
          tag: 'Place'
        },
        {
          kanji: '野生',
          kana: 'やせい',
          romaji: 'yasei',
          meaningEn: 'wild (animals, plants)',
          meaningBn: 'বন্য / প্রাকৃতিকভাবে জন্ম নেওয়া',
          tag: 'Nature'
        }
      ],
      sentences: [
        {
          ja: '健康のために毎日たくさんの新鮮な野菜を食べます。',
          romaji: 'Kenkou no tame ni mainichi takusan no shinsen na yasai o tabemasu.',
          meaningEn: 'For good health, I eat lots of fresh vegetables every day.',
          meaningBn: 'সুস্বাস্থ্যের জন্য আমি প্রতিদিন প্রচুর তাজা শাকসবজি খাই।'
        },
        {
          ja: '日本の男の子に最も人気があるスポーツは野球です。',
          romaji: 'Nihon no otokonoko ni mottomo ninki ga aru supootsu wa yakyuu desu.',
          meaningEn: 'The most popular sport among Japanese boys is baseball.',
          meaningBn: 'জাপানের ছেলেদের কাছে সবচেয়ে জনপ্রিয় খেলা হলো বেসবল।'
        },
        {
          ja: '春になると野原に綺麗な黄色い花が咲きます。',
          romaji: 'Haru ni naru to nohara ni kirei na kiiroi hana ga sakimasu.',
          meaningEn: 'When spring arrives, pretty yellow flowers bloom in the open field.',
          meaningBn: 'বসন্তকাল এলে খোলা প্রান্তরে সুন্দর হলুদ ফুল ফোটে।'
        }
      ],
      tamagoTip: {
        bn: 'গ্রামের (里) পাশে বিস্তীর্ণ ফাঁকা মাঠ (予)। মাটির সবজির জন্য 野菜 এবং খোলা মাঠের খেলার জন্য 野球।',
        en: 'A rural village (里) opening into a wide expanse (予). Key for vegetables (野菜) and baseball (野球).'
      }
    },

    // 5. 半
    {
      id: 'l7-han',
      kanji: '半',
      emoji: '🌓',
      strokeCount: 5,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ハン', romaji: 'han' }
        ],
        kunyomi: [
          { kana: 'なか・ば', romaji: 'naka-ba' }
        ]
      },
      meanings: {
        en: 'half, middle, semi-',
        bn: 'অর্ধেক, আধা, সাড়ে'
      },
      vocab: [
        {
          kanji: '半分',
          kana: 'はんぶん',
          romaji: 'hanbun',
          meaningEn: 'half, half portion',
          meaningBn: 'অর্ধেক / অর্ধেক ভাগ',
          tag: 'Daily N5'
        },
        {
          kanji: '半額',
          kana: 'はんがく',
          romaji: 'hangaku',
          meaningEn: 'half price, 50% discount',
          meaningBn: 'অর্ধেক দাম (৫০% ছাড়)',
          tag: 'Shop N4'
        },
        {
          kanji: '三時半',
          kana: 'さんじはん',
          romaji: 'sanjihan',
          meaningEn: '3:30 (half past three)',
          meaningBn: 'সাড়ে তিনটা',
          tag: 'Time N5'
        },
        {
          kanji: '半年',
          kana: 'はんとし / はんねん',
          romaji: 'hantoshi / hannen',
          meaningEn: 'half a year, six months',
          meaningBn: 'অর্ধবছর / ছয় মাস',
          tag: 'Time N5'
        },
        {
          kanji: '半日',
          kana: 'はんにち',
          romaji: 'hannichi',
          meaningEn: 'half day',
          meaningBn: 'অর্ধেক দিন',
          tag: 'Time N4'
        },
        {
          kanji: '後半',
          kana: 'こうはん',
          romaji: 'kouhan',
          meaningEn: 'latter half, second half',
          meaningBn: 'দ্বিতীয়ার্ধ / শেষের অর্ধেক',
          tag: 'General N4'
        }
      ],
      sentences: [
        {
          ja: '午後のミーティングは二時半から始まります。',
          romaji: 'Gogo no miitingu wa nijihan kara hajimarimasu.',
          meaningEn: 'The afternoon meeting begins from 2:30.',
          meaningBn: 'বিকেলের মিটিংটি আড়াইটা (২:৩০) থেকে শুরু হবে।'
        },
        {
          ja: '夜八時を過ぎると、弁当が半額になります。',
          romaji: 'Yoru hachiji o sugiru to, bentou ga hangaku ni narimasu.',
          meaningEn: 'Past 8:00 PM at night, bento lunchboxes become half price.',
          meaningBn: 'রাত আটটার পর সুপারমার্কেটে লাঞ্চবক্স অর্ধেক দামে বিক্রি হয়।'
        },
        {
          ja: '大きなリンゴを友達と半分ずつ分けて食べました。',
          romaji: 'Ookina ringo o tomodachi to hanbun zutsu wakete tabemashita.',
          meaningEn: 'We divided the large apple in half with my friend and ate it.',
          meaningBn: 'একটি বড় আপেল বন্ধুর সাথে অর্ধেক অর্ধেক ভাগ করে আমরা খেয়েছি।'
        }
      ],
      tamagoTip: {
        bn: 'একটি বস্তুকে মাঝখান দিয়ে সমান দুই ভাগে চিরে ফেলা (八 + 十)। সময়ের ক্ষেত্রে সাড়ে (時半) এবং দামে 半額 (অর্ধেক মূল্য)।',
        en: 'Cleaving an object through the middle into two parts. Essential for clock times (三時半) and 50% sales (半額).'
      }
    },

    // 6. 大
    {
      id: 'l7-dai',
      kanji: '大',
      emoji: '🐘',
      strokeCount: 3,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ダイ', romaji: 'dai' },
          { kana: 'タイ', romaji: 'tai' }
        ],
        kunyomi: [
          { kana: 'おお・きい', romaji: 'oo-kii' },
          { kana: 'おお・いに', romaji: 'oo-ini' }
        ]
      },
      meanings: {
        en: 'big, large, great',
        bn: 'বড়, বিশাল, অনেক'
      },
      vocab: [
        {
          kanji: '大きい',
          kana: 'おおきい',
          romaji: 'ookii',
          meaningEn: 'big, large',
          meaningBn: 'বড় / বিশাল',
          tag: 'Adj N5'
        },
        {
          kanji: '大学',
          kana: 'だいがく',
          romaji: 'daigaku',
          meaningEn: 'university, college',
          meaningBn: 'বিশ্ববিদ্যালয়',
          tag: 'School N5'
        },
        {
          kanji: '大人',
          kana: 'おとな',
          romaji: 'otona',
          meaningEn: 'adult, grown-up',
          meaningBn: 'প্রাপ্তবয়স্ক ব্যক্তি',
          tag: 'Person N5'
        },
        {
          kanji: '大変',
          kana: 'たいへん',
          romaji: 'taihen',
          meaningEn: 'tough, hard, very',
          meaningBn: 'খুব কষ্টকর / ভীষণ',
          tag: 'Daily N5'
        },
        {
          kanji: '大好き',
          kana: 'だいすき',
          romaji: 'daisuki',
          meaningEn: 'love, like very much',
          meaningBn: 'খুব পছন্দ / দারুণ প্রিয়',
          tag: 'Emotion N5'
        },
        {
          kanji: '大盛り',
          kana: 'おおもり',
          romaji: 'oomori',
          meaningEn: 'extra-large serving (food portion)',
          meaningBn: 'বড় সাইজের পরিবেশন (অতিরিক্ত খাবার)',
          tag: 'Restaurant N4'
        }
      ],
      sentences: [
        {
          ja: 'お腹が空いたので、ラーメンの大盛りを注文しました。',
          romaji: 'Onaka ga suita node, raamen no oomori o chuumon shimashita.',
          meaningEn: 'Because I was hungry, I ordered a large portion of ramen.',
          meaningBn: 'খুব ক্ষুধা লেগেছিল বলে আমি বড় সাইজের (ওওমোরি) রামেন অর্ডার করেছি।'
        },
        {
          ja: '私は日本の抹茶アイスクリームが大好きです。',
          romaji: 'Watashi wa Nihon no matcha aisukuriimu ga daisuki desu.',
          meaningEn: 'I love Japanese matcha ice cream very much.',
          meaningBn: 'আমি জাপানের মাচ্চা গ্রিন-টি আইসক্রিম ভীষণ পছন্দ করি।'
        },
        {
          ja: '東京には有名な大学がたくさん集まっています。',
          romaji: 'Toukyou niwa yuumei na daigaku ga takusan atsumatte imasu.',
          meaningEn: 'Many famous universities are concentrated in Tokyo.',
          meaningBn: 'টোকিওতে বহু নামকরা বিশ্ববিদ্যালয় অবস্থিত।'
        }
      ],
      tamagoTip: {
        bn: 'একজন মানুষ দুই হাত ও পা ছড়িয়ে বিশাল হয়ে দাঁড়ানো। বড় খাবার (大盛り), বিশ্ববিদ্যালয় (大学), এবং প্রাপ্তবয়স্ক (大人)।',
        en: 'A person standing with arms and legs stretched wide to appear huge. Large sizes, adulthood, and universities.'
      }
    },

    // 7. 小
    {
      id: 'l7-shou',
      kanji: '小',
      emoji: '🐣',
      strokeCount: 3,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ショウ', romaji: 'shou' }
        ],
        kunyomi: [
          { kana: 'ちい・さい', romaji: 'chii-sai' },
          { kana: 'こ', romaji: 'ko' },
          { kana: 'お', romaji: 'o' }
        ]
      },
      meanings: {
        en: 'small, little, tiny',
        bn: 'ছোট, খুদে, সামান্য'
      },
      vocab: [
        {
          kanji: '小さい',
          kana: 'ちいさい',
          romaji: 'chiisai',
          meaningEn: 'small, little',
          meaningBn: 'ছোট / খুদে',
          tag: 'Adj N5'
        },
        {
          kanji: '小学校',
          kana: 'しょうがっこう',
          romaji: 'shougakkou',
          meaningEn: 'elementary school, primary school',
          meaningBn: 'প্রাথমিক বিদ্যালয়',
          tag: 'School N5'
        },
        {
          kanji: '小人',
          kana: 'しょうにん / こびと',
          romaji: 'shounin / kobito',
          meaningEn: 'child ticket / dwarf',
          meaningBn: 'শিশু টিকিট / খুদে মানুষ',
          tag: 'Ticket N5'
        },
        {
          kanji: '小説',
          kana: 'しょうせつ',
          romaji: 'shousetsu',
          meaningEn: 'novel, story book',
          meaningBn: 'উপন্যাস',
          tag: 'Book N4'
        },
        {
          kanji: '小川',
          kana: 'おがわ',
          romaji: 'ogawa',
          meaningEn: 'brook, small stream',
          meaningBn: 'ছোট নদী / পাহাড়ি ছড়া',
          tag: 'Nature N4'
        },
        {
          kanji: '小盛り',
          kana: 'こもり',
          romaji: 'komori',
          meaningEn: 'small portion (food serving)',
          meaningBn: 'ছোট আকারের খাবার পরিবেশন',
          tag: 'Restaurant N4'
        }
      ],
      sentences: [
        {
          ja: '私の部屋は小さいですが、とても日当たりが良いです。',
          romaji: 'Watashi no heya wa chiisai desu ga, totemo hiatari ga yoi desu.',
          meaningEn: 'My room is small, but it receives very good sunlight.',
          meaningBn: 'আমার ঘরটি ছোট, তবে সেখানে খুব সুন্দর রোদ আসে।'
        },
        {
          ja: '電車の運賃は大人二百円、小人百円です。',
          romaji: 'Densha no unchin wa otona nihyakuen, shounin hyakuen desu.',
          meaningEn: 'The train fare is 200 yen for adults and 100 yen for children.',
          meaningBn: 'ট্রেনের ভাড়া বড়দের ২০০ ইয়েন এবং বাচ্চাদের ১০০ ইয়েন।'
        },
        {
          ja: 'ダイエット中なので、ご飯は小盛りでお願いします。',
          romaji: 'Daietto-chuu nanode, gohan wa komori de onegai shimasu.',
          meaningEn: 'I am on a diet, so please give me a small portion of rice.',
          meaningBn: 'আমি ডায়েট করছি, তাই ভাত দয়া করে অল্প পরিমাপে (কোমোরি) দেবেন।'
        }
      ],
      tamagoTip: {
        bn: 'একটি বস্তুকে কেটে ছোট ছোট তিন টুকরো করা। 小学校 (প্রাইমারি স্কুল) এবং ট্রেনের টিকিট কাউন্টারে 小人 (বাচ্চাদের টিকিট)।',
        en: 'Dividing into small splinters. Used for elementary schools (小学校), small sizes, and children (小人).'
      }
    },

    // --- READ-ONLY KANJI (読める - 6 items) ---
    // 8. 魚
    {
      id: 'l7-sakana',
      kanji: '魚',
      emoji: '🐟',
      strokeCount: 11,
      jlpt: 'N5',
      category: 'read_only',
      readings: {
        onyomi: [
          { kana: 'ギョ', romaji: 'gyo' }
        ],
        kunyomi: [
          { kana: 'さかな', romaji: 'sakana' },
          { kana: 'うお', romaji: 'uo' }
        ]
      },
      meanings: {
        en: 'fish (food & aquatic animal)',
        bn: 'মাছ, মৎস্য'
      },
      vocab: [
        {
          kanji: '魚',
          kana: 'さかな',
          romaji: 'sakana',
          meaningEn: 'fish',
          meaningBn: 'মাছ',
          tag: 'Food N5'
        },
        {
          kanji: '魚屋',
          kana: 'さかなや',
          romaji: 'sakanaya',
          meaningEn: 'fishmonger, fish market',
          meaningBn: 'মাছের দোকান / বাজার',
          tag: 'Shop N5'
        },
        {
          kanji: '焼き魚',
          kana: 'やきざかな',
          romaji: 'yakizakana',
          meaningEn: 'grilled fish',
          meaningBn: 'ভাজা বা পোড়ানো মাছ',
          tag: 'Food N5'
        },
        {
          kanji: '金魚',
          kana: 'きんぎょ',
          romaji: 'kingyo',
          meaningEn: 'goldfish',
          meaningBn: 'গোল্ডফিশ / সোনালি মাছ',
          tag: 'Animal N4'
        },
        {
          kanji: '人魚',
          kana: 'にんぎょ',
          romaji: 'ningyo',
          meaningEn: 'mermaid',
          meaningBn: 'মৎস্যকন্যা',
          tag: 'Culture'
        },
        {
          kanji: '魚市場',
          kana: 'うおいちば',
          romaji: 'uoichiba',
          meaningEn: 'fish wholesale market (e.g. Toyosu)',
          meaningBn: 'পাইকারি মাছের আড়ত',
          tag: 'Place N4'
        }
      ],
      sentences: [
        {
          ja: '日本の伝統的な朝ごはんは、ご飯と味噌汁と焼き魚です。',
          romaji: 'Nihon no dentouteki na asagohan wa, gohan to misoshiru to yakizakana desu.',
          meaningEn: 'Traditional Japanese breakfast consists of rice, miso soup, and grilled fish.',
          meaningBn: 'জাপানের ঐতিহ্যবাহী সকালের নাস্তায় থাকে ভাত, মিসো স্যুপ এবং সেঁকা মাছ।'
        },
        {
          ja: '刺身は新鮮な魚を使って作ります。',
          romaji: 'Sashimi wa shinsen na sakana o tsukatte tsukurimasu.',
          meaningEn: 'Sashimi is prepared using fresh fish.',
          meaningBn: 'সাশিমি তাজা মাছ ব্যবহার করে তৈরি করা হয়।'
        },
        {
          ja: 'バングラデシュの人々は川の魚をよく食べます。',
          romaji: 'Banguradeshu no hitobito wa kawa no sakana o yoku tabemasu.',
          meaningEn: 'People in Bangladesh frequently eat river fish.',
          meaningBn: 'বাংলাদেশের মানুষ নদীর মাছ খুব বেশি খায়।'
        }
      ],
      tamagoTip: {
        bn: 'মাছের মাথা, শরীর এবং নিচে চারটি স্ফুলিঙ্গ/পাখনা (灬)। জাপানি খাবারের প্রাণ হলো 魚 (মাছ)।',
        en: 'Head, scaly body, and tail fins (灬). Core foundation of Japanese culinary culture.'
      }
    },

    // 9. 野菜
    {
      id: 'l7-yasai',
      kanji: '野菜',
      emoji: '🥦',
      strokeCount: 11,
      jlpt: 'N5',
      category: 'read_only',
      readings: {
        onyomi: [
          { kana: 'ヤサイ', romaji: 'yasai' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'vegetables, greens',
        bn: 'শাকসবজি, তরিতরকারি'
      },
      vocab: [
        {
          kanji: '野菜',
          kana: 'やさい',
          romaji: 'yasai',
          meaningEn: 'vegetables',
          meaningBn: 'শাকসবজি',
          tag: 'Food N5'
        },
        {
          kanji: '生野菜',
          kana: 'なまやさい',
          romaji: 'namayasai',
          meaningEn: 'raw vegetables, salad',
          meaningBn: 'কাঁচা সালাদের সবজি',
          tag: 'Food N4'
        },
        {
          kanji: '野菜ジュース',
          kana: 'やさいジュース',
          romaji: 'yasai juusu',
          meaningEn: 'vegetable juice',
          meaningBn: 'সবজির জুস',
          tag: 'Drink'
        },
        {
          kanji: '野菜炒め',
          kana: 'やさいいため',
          romaji: 'yasai-itame',
          meaningEn: 'stir-fried vegetables',
          meaningBn: 'ভাজা সবজি (মিক্সড ভেজিটেবল)',
          tag: 'Food N4'
        },
        {
          kanji: '温野菜',
          kana: 'おんやさい',
          romaji: 'onyasai',
          meaningEn: 'steamed warm vegetables',
          meaningBn: 'ভাপে সেদ্ধ গরম সবজি',
          tag: 'Food'
        },
        {
          kanji: '野菜売り場',
          kana: 'やさいうりば',
          romaji: 'yasai uriba',
          meaningEn: 'vegetable section in grocery store',
          meaningBn: 'দোকানের কাঁচাবাজার সেকশন',
          tag: 'Shop N4'
        }
      ],
      sentences: [
        {
          ja: 'スーパーの野菜売り場で新鮮なトマトとキャベツを買いました。',
          romaji: 'Suupaa no yasai uriba de shinsen na tomato to kyabetsu o kaimashita.',
          meaningEn: 'I bought fresh tomatoes and cabbage in the supermarket\'s vegetable aisle.',
          meaningBn: 'সুপারমার্কেটের সবজি কর্নার থেকে আমি তাজা টমেটো ও বাঁধাকপি কিনেছি।'
        },
        {
          ja: '定食には生野菜のサラダがセットで付いてきます。',
          romaji: 'Teishoku niwa namayasai no sarada ga setto de tsuite kimasu.',
          meaningEn: 'The set meal comes included with a fresh raw vegetable salad.',
          meaningBn: 'সেট মিলের সাথে সালাদের কাঁচা সবজি অন্তর্ভুক্ত থাকে।'
        },
        {
          ja: '子供の時は野菜が苦手でしたが、今は大好きです。',
          romaji: 'Kodomo no toki wa yasai ga nigate deshita ga, ima wa daisuki desu.',
          meaningEn: 'When I was a kid I disliked vegetables, but now I love them.',
          meaningBn: 'ছোটবেলায় সবজি আমার অপছন্দ ছিল, কিন্তু এখন খুব প্রিয়।'
        }
      ],
      tamagoTip: {
        bn: 'মাঠের (野) ঘাস/পাতা (艹) বিশিষ্ট ফসল (菜)। সুপারমার্কেটের প্রবেশমুখেই থাকে 野菜売り場।',
        en: 'Grassy plant radical (艹) over a gathering hand. Seen in every supermarket produce section.'
      }
    },

    // 10. ご飯
    {
      id: 'l7-gohan',
      kanji: 'ご飯',
      emoji: '🍚',
      strokeCount: 12,
      jlpt: 'N5',
      category: 'read_only',
      readings: {
        onyomi: [
          { kana: 'ハン', romaji: 'han' }
        ],
        kunyomi: [
          { kana: 'めし', romaji: 'meshi' }
        ]
      },
      meanings: {
        en: 'cooked rice, meal',
        bn: 'ভাত, আহার, বেলার খাবার'
      },
      vocab: [
        {
          kanji: 'ご飯',
          kana: 'ごはん',
          romaji: 'gohan',
          meaningEn: 'cooked rice, meal',
          meaningBn: 'ভাত / বেলার খাবার',
          tag: 'Food N5'
        },
        {
          kanji: '朝ご飯',
          kana: 'あさごはん',
          romaji: 'asagohan',
          meaningEn: 'breakfast',
          meaningBn: 'সকালের নাস্তা',
          tag: 'Food N5'
        },
        {
          kanji: '昼ご飯',
          kana: 'ひるごはん',
          romaji: 'hirugohan',
          meaningEn: 'lunch',
          meaningBn: 'দুপুরের খাবার',
          tag: 'Food N5'
        },
        {
          kanji: '晩ご飯',
          kana: 'ばんごはん',
          romaji: 'bangohan',
          meaningEn: 'dinner, supper',
          meaningBn: 'রাতের খাবার',
          tag: 'Food N5'
        },
        {
          kanji: 'ご飯のおかわり',
          kana: 'ごはんのおかわり',
          romaji: 'gohan no okawari',
          meaningEn: 'second helping of rice / rice refill',
          meaningBn: 'আবার ভাত নেওয়া (ফ্রি রিফিল)',
          tag: 'Restaurant N4'
        },
        {
          kanji: '炊き込みご飯',
          kana: 'たきこみごはん',
          romaji: 'takikomi gohan',
          meaningEn: 'seasoned rice cooked with meat/vegetables',
          meaningBn: 'সবজি ও মাংসে সেদ্ধ জাপানি পোলাও ভাত',
          tag: 'Food'
        }
      ],
      sentences: [
        {
          ja: '毎朝七時に起きて、家族と一緒に朝ご飯を食べます。',
          romaji: 'Maiasa shichiji ni okite, kazoku to issho ni asagohan o tabemasu.',
          meaningEn: 'Every morning I wake up at 7:00 and eat breakfast together with my family.',
          meaningBn: 'প্রতিদিন সকাল সাতটায় উঠে পরিবারের সাথে আমি সকালের নাস্তা খাই।'
        },
        {
          ja: 'この定食屋は、ご飯のおかわりが自由です。',
          romaji: 'Kono teishokuya wa, gohan no okawari ga jiyuu desu.',
          meaningEn: 'At this diner, free refills of rice are unlimited.',
          meaningBn: 'এই খাবার দোকানে যতবার ইচ্ছা বিনামূল্যে ভাত পুনরায় নেওয়ার সুবিধা আছে।'
        },
        {
          ja: '晩ご飯は何がいいですか。ー美味しいカレーが食べたいです。',
          romaji: 'Bangohan wa nani ga ii desu ka. - Oishii karee ga tabetai desu.',
          meaningEn: 'What would you like for dinner? - I want to eat delicious curry.',
          meaningBn: 'রাতের খাবারে কী খেতে চান? — মজাদার কারি খেতে ইচ্ছে করছে।'
        }
      ],
      tamagoTip: {
        bn: 'খাবারের রেডিক্যাল (飠) এবং 반 (반대/উল্টো)। সেদ্ধ ভাত শুধু খাদ্য নয়, জাপানে সার্বিক আহার (বেলা) নির্দেশ করে।',
        en: 'Food radical (飠) on the left. Signifies both boiled white rice and whole meals (breakfast/lunch/dinner).'
      }
    },

    // 11. 酒
    {
      id: 'l7-sake',
      kanji: '酒',
      emoji: '🍶',
      strokeCount: 10,
      jlpt: 'N5',
      category: 'read_only',
      readings: {
        onyomi: [
          { kana: 'シュ', romaji: 'shu' }
        ],
        kunyomi: [
          { kana: 'さけ', romaji: 'sake' },
          { kana: 'さか', romaji: 'saka' }
        ]
      },
      meanings: {
        en: 'sake, alcoholic beverage, liquor',
        bn: 'সাকে, মদ, অ্যালকোহল'
      },
      vocab: [
        {
          kanji: 'お酒',
          kana: 'おさけ',
          romaji: 'osake',
          meaningEn: 'alcoholic drink, Japanese sake',
          meaningBn: 'অ্যালকোহল / জাপানি সাকে মদ',
          tag: 'Drink N5'
        },
        {
          kanji: '日本酒',
          kana: 'にほんしゅ',
          romaji: 'nihonshu',
          meaningEn: 'Japanese rice wine (traditional sake)',
          meaningBn: 'জাপানি ঐতিহ্যবাহী চালের মদ',
          tag: 'Culture N4'
        },
        {
          kanji: '居酒屋',
          kana: 'いざかや',
          romaji: 'izakaya',
          meaningEn: 'Japanese-style pub / tavern',
          meaningBn: 'ইজাকায়া (জাপানি ডাইনিং পাব)',
          tag: 'Place N4'
        },
        {
          kanji: '酒屋',
          kana: 'さかや',
          romaji: 'sakaya',
          meaningEn: 'liquor store',
          meaningBn: 'মদের দোকান',
          tag: 'Shop N4'
        },
        {
          kanji: '飲酒運転',
          kana: 'いんしゅうんてん',
          romaji: 'inshu unten',
          meaningEn: 'drunk driving (strictly prohibited in Japan)',
          meaningBn: 'মদ্যপ অবস্থায় গাড়ি চালানো (কঠোর নিষিদ্ধ)',
          tag: 'Law N4'
        },
        {
          kanji: '洋酒',
          kana: 'ようしゅ',
          romaji: 'youshu',
          meaningEn: 'Western liquor (whisky, wine)',
          meaningBn: 'পাশ্চাত্যের মদ',
          tag: 'Drink'
        }
      ],
      sentences: [
        {
          ja: '金曜日の夜に同僚と居酒屋へ行きました。',
          romaji: 'Kin\'youbi no yoru ni douryou to izakaya e ikimashita.',
          meaningEn: 'On Friday night I went to a Japanese pub (izakaya) with coworkers.',
          meaningBn: 'শুক্রবার রাতে সহকর্মীদের সাথে আমি একটি ইজাকায়াতে গিয়েছিলাম।'
        },
        {
          ja: '日本では二十歳未満のお酒とタバコは禁止されています。',
          romaji: 'Nihon dewa hatachi miman no osake to tabako wa kinshi sarete imasu.',
          meaningEn: 'In Japan, alcohol and cigarettes are prohibited for those under 20.',
          meaningBn: 'জাপানে ২০ বছরের কম বয়সীদের জন্য মদ ও ধূমপান কঠোরভাবে নিষিদ্ধ।'
        },
        {
          ja: 'お酒を飲んだら絶対に車を運転してはいけません。',
          romaji: 'Osake o nondara zettai ni kuruma o unten shite wa ikemasen.',
          meaningEn: 'If you drink alcohol, you must never drive a car under any circumstances.',
          meaningBn: 'মদ্যপান করলে কখনোই কোনো অবস্থাতেই গাড়ি চালানো যাবে না।'
        }
      ],
      tamagoTip: {
        bn: 'জলের ফোঁটা (氵) এবং মদের বয়াম বা পাত্র (酉)। জাপানি পানশালা 居酒屋 এবং রেস্তোরাঁর মেনুতে 酒 থাকে।',
        en: 'Liquid splashes (氵) next to an earthenware wine jar (酉). Essential for restaurants and izakayas.'
      }
    },

    // 12. 〜丼
    {
      id: 'l7-don',
      kanji: '〜丼',
      emoji: '🍲',
      strokeCount: 5,
      jlpt: 'N4',
      category: 'read_only',
      readings: {
        onyomi: [
          { kana: 'ドン', romaji: 'don' },
          { kana: 'トン', romaji: 'ton' }
        ],
        kunyomi: [
          { kana: 'どんぶり', romaji: 'donburi' }
        ]
      },
      meanings: {
        en: 'rice bowl dish, ceramic bowl',
        bn: 'বাটির খাবার, ভাতের ওপর তরকারির ডিশ (দোনবুরি)'
      },
      vocab: [
        {
          kanji: '牛丼',
          kana: 'ぎゅうどん',
          romaji: 'gyuudon',
          meaningEn: 'beef bowl (famous fast food)',
          meaningBn: 'গরুর মাংসের ভাতের বাটি (গিউদোন)',
          tag: 'Food N5'
        },
        {
          kanji: '親子丼',
          kana: 'おやこどん',
          romaji: 'oyakodon',
          meaningEn: 'chicken and egg rice bowl ("parent & child")',
          meaningBn: 'মুরগি ও ডিমের ভাতের বাটি (ওয়াকোদোন)',
          tag: 'Food N4'
        },
        {
          kanji: '天丼',
          kana: 'てんどん',
          romaji: 'tendon',
          meaningEn: 'tempura rice bowl',
          meaningBn: 'তেম্পুরা ও চিংড়ির ভাতের বাটি',
          tag: 'Food N4'
        },
        {
          kanji: 'カツ丼',
          kana: 'かつどん',
          romaji: 'katsudon',
          meaningEn: 'pork cutlet rice bowl',
          meaningBn: 'কাৎসুদোন (কাটলেট বাটি)',
          tag: 'Food N4'
        },
        {
          kanji: '海鮮丼',
          kana: 'かいせんどん',
          romaji: 'kaisendon',
          meaningEn: 'fresh seafood sashimi bowl',
          meaningBn: 'তাজা সামুদ্রিক মাছের ভাতের বাটি',
          tag: 'Food N4'
        },
        {
          kanji: '丼ぶり',
          kana: 'どんぶり',
          romaji: 'donburi',
          meaningEn: 'ceramic deep food bowl',
          meaningBn: 'গভীর মাটির বাটি',
          tag: 'Tableware'
        }
      ],
      sentences: [
        {
          ja: '駅前のすき家で温かい牛丼の並盛りを食べました。',
          romaji: 'Ekimae no Sukiya de atatakai gyuudon no namimori o tabemashita.',
          meaningEn: 'I ate a regular-sized warm beef bowl at Sukiya in front of the station.',
          meaningBn: 'স্টেশনের সামনের সুকিয়া চেইন শপে আমি এক বাটি গরম গরুর মাংসের ভাত (গিউদোন) খেয়েছি।'
        },
        {
          ja: '昼休みに同僚と食堂で親子丼を注文しました。',
          romaji: 'Hiruyasumi ni douryou to shokudou de oyakodon o chuumon shimashita.',
          meaningEn: 'During lunch break, I ordered oyakodon at the cafeteria with my colleague.',
          meaningBn: 'দুপুরের বিরতিতে ক্যান্টিনে সহকর্মীর সাথে আমি ওয়াকোদোন অর্ডার করেছি।'
        },
        {
          ja: '日本のファストフードとして丼もの料理は安くて早いです。',
          romaji: 'Nihon no fasutofuudo toshite donmono ryouri wa yasukute hayai desu.',
          meaningEn: 'As Japanese fast food, rice bowl dishes are cheap and fast.',
          meaningBn: 'জাপানি ফাস্টফুড হিসেবে দোনবুরি খাবারগুলো বেশ সস্তা এবং দ্রুত পরিবেশিত হয়।'
        }
      ],
      tamagoTip: {
        bn: 'কূপের (井) ভেতর একটি বিন্দু বা খাবার (丶)। বড় গভীর বাটিতে ভাতের ওপর সাজানো সুস্বাদু পদ (牛丼, 天丼)।',
        en: 'A bowl or well (井) holding a precious morsel (丶). Represents Japan\'s iconic donburi rice bowls.'
      }
    },

    // 13. 半額
    {
      id: 'l7-hangaku',
      kanji: '半額',
      emoji: '🏷️',
      strokeCount: 16,
      jlpt: 'N4',
      category: 'read_only',
      readings: {
        onyomi: [
          { kana: 'ハンガク', romaji: 'hangaku' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'half price, 50% discount label',
        bn: 'অর্ধেক মূল্য, ৫০% মূল্যছাড়'
      },
      vocab: [
        {
          kanji: '半額',
          kana: 'はんがく',
          romaji: 'hangaku',
          meaningEn: 'half price, 50% off',
          meaningBn: 'অর্ধেক দাম / ৫০% ডিসকাউন্ট',
          tag: 'Shop N4'
        },
        {
          kanji: '半額シール',
          kana: 'はんがくシール',
          romaji: 'hangaku shiiru',
          meaningEn: 'half-price discount sticker',
          meaningBn: 'অর্ধেক দামের স্টিকার',
          tag: 'Shop N4'
        },
        {
          kanji: '全額',
          kana: 'ぜんがく',
          romaji: 'zengaku',
          meaningEn: 'full amount, total sum',
          meaningBn: 'পুরো টাকা / সম্পূর্ণ অর্থ',
          tag: 'Business N4'
        },
        {
          kanji: '金額',
          kana: 'きんがく',
          romaji: 'kingaku',
          meaningEn: 'amount of money',
          meaningBn: 'টাকার পরিমাণ',
          tag: 'Daily N4'
        },
        {
          kanji: '定額',
          kana: 'ていがく',
          romaji: 'teigaku',
          meaningEn: 'fixed amount, flat rate',
          meaningBn: 'নির্দিষ্ট বা ধার্যকৃত মূল্য',
          tag: 'Daily N4'
        },
        {
          kanji: '差額',
          kana: 'さがく',
          romaji: 'sagaku',
          meaningEn: 'balance, price difference',
          meaningBn: 'মূল্যের পার্থক্য বা ব্যবধান',
          tag: 'Finance'
        }
      ],
      sentences: [
        {
          ja: 'スーパーで半額シールが貼られた刺身と寿司を買いました。',
          romaji: 'Suupaa de hangaku shiiru ga貼られた sashimito sushi o kaimashita.',
          meaningEn: 'I bought sashimi and sushi with half-price stickers on them at the supermarket.',
          meaningBn: 'সুপারমার্কেট থেকে ৫০% ছাড়ের স্টিকার লাগানো সাশিমি ও সুশি কিনেছি।'
        },
        {
          ja: '閉店の三十分前になると、多くの惣菜が半額になります。',
          romaji: 'Heiten no sanjuppun mae ni naru to, ooku no souzai ga hangaku ni narimasu.',
          meaningEn: 'Thirty minutes before closing, many prepared side dishes become half price.',
          meaningBn: 'দোকান বন্ধের ৩০ মিনিট আগে রান্না করা খাবারগুলোর দাম অর্ধেক হয়ে যায়।'
        },
        {
          ja: '留学生の生活費を節約するために半額セールを利用しています。',
          romaji: 'Ryuugakusei no seikatsuhi o setsuyaku suru tame ni hangaku seeru o riyou shite imasu.',
          meaningEn: 'To save on living expenses as an international student, I utilize half-price sales.',
          meaningBn: 'বিদেশি ছাত্র হিসেবে জীবনযাত্রার খরচ বাঁচাতে আমি হাফ-প্রাইস সেলের সুবিধা নিই।'
        }
      ],
      tamagoTip: {
        bn: '半 (অর্ধেক) + 額 (টাকার পরিমাণ)। জাপানের সুপারমার্কেটে সন্ধ্যার পর হলুদ বা লাল রঙের 半額 স্টিকার দেখলে দ্রুত কেনাকাটা সেরে নিন!',
        en: 'Half (半) + Amount (額). Look for this sticker in supermarkets around 8 PM for 50% savings!'
      }
    },

    // --- VISUAL RECOGNITION KANJI (見て、わかる - 1 item) ---
    // 14. 定食
    {
      id: 'l7-teishoku',
      kanji: '定食',
      emoji: '🍱',
      strokeCount: 17,
      jlpt: 'N4',
      category: 'visual_recognition',
      readings: {
        onyomi: [
          { kana: 'テイショク', romaji: 'teishoku' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'set meal, combo meal (rice, main dish, soup, pickles)',
        bn: 'সেট মিল (ভাত, প্রধান পদ, স্যুপ ও আচারের সমন্বিত থালি)'
      },
      vocab: [
        {
          kanji: '定食',
          kana: 'ていしょく',
          romaji: 'teishoku',
          meaningEn: 'set meal, combo platter',
          meaningBn: 'সেট মিল / কম্বো খাবার',
          tag: 'Food N4'
        },
        {
          kanji: '日替わり定食',
          kana: 'ひがわりていしょく',
          romaji: 'higawari teishoku',
          meaningEn: 'daily special set meal',
          meaningBn: 'প্রতিদিনের স্পেশাল সেট মিল',
          tag: 'Food N4'
        },
        {
          kanji: '焼き魚定食',
          kana: 'やきざかなていしょく',
          romaji: 'yakizakana teishoku',
          meaningEn: 'grilled fish set meal',
          meaningBn: 'ভাজা মাছের সেট মিল',
          tag: 'Food N4'
        },
        {
          kanji: 'から揚げ定食',
          kana: 'からあげていしょく',
          romaji: 'karaage teishoku',
          meaningEn: 'Japanese fried chicken set meal',
          meaningBn: 'জাপানি ফ্রাইড চিকেন সেট মিল',
          tag: 'Food N4'
        },
        {
          kanji: '定休日',
          kana: 'ていきゅうび',
          romaji: 'teikyuubi',
          meaningEn: 'regular closing day / weekly holiday',
          meaningBn: 'দোকানের সাপ্তাহিক ছুটির দিন',
          tag: 'Shop N4'
        },
        {
          kanji: '予定',
          kana: 'よてい',
          romaji: 'yotei',
          meaningEn: 'plan, schedule, arrangement',
          meaningBn: 'পরিকল্পনা / শিডিউল',
          tag: 'Daily N4'
        }
      ],
      sentences: [
        {
          ja: 'お昼に学食で五百円の日替わり定食を食べました。',
          romaji: 'Ohiru ni gakushoku de gohyakuen no higawari teishoku o tabemashita.',
          meaningEn: 'For lunch, I ate the 500-yen daily special set meal at the school cafeteria.',
          meaningBn: 'দুপুরে বিশ্ববিদ্যালয়ের ক্যাফেটেরিয়ায় ৫০০ ইয়েন দামের ডেইলি স্পেশাল সেট মিল খেয়েছি।'
        },
        {
          ja: '日本の定食は栄養のバランスが良くてとても健康的です。',
          romaji: 'Nihon no teishoku wa eiyou no baransu ga yokute totemo kenkouteki desu.',
          meaningEn: 'Japanese set meals have good nutritional balance and are very healthy.',
          meaningBn: 'জাপানি সেট মিলে পুষ্টির ভারসাম্য দারুণ থাকে, যা স্বাস্থ্যের জন্য খুব উপকারী।'
        },
        {
          ja: '定食にはご飯、味噌汁、サラダ、漬物がセットで付きます。',
          romaji: 'Teishoku niwa gohan, misoshiru, sarada, tsukemono ga setto de tsukimasu.',
          meaningEn: 'The set meal includes rice, miso soup, salad, and Japanese pickles as a combo.',
          meaningBn: 'সেট মিলের সাথে ভাত, মিসো স্যুপ, সালাদ ও ঐতিহ্যবাহী আচার একসাথে পরিবেশন করা হয়।'
        }
      ],
      tamagoTip: {
        bn: '定 (নির্দিষ্ট) + 食 (খাবার)। জাপানি ডাইনিং ও ক্যাফেটেরিয়ার সাইনবোর্ডে 定食 লেখা দেখলে বুঝবেন পরিপূর্ণ সুষম থালি মিল।',
        en: 'Fixed (定) + Meal (食). Represents balanced Japanese combo platters served at diners (やよい軒, 大戸屋).'
      }
    }
  ]
};
