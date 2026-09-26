import { Lesson } from '../types/kanji';

export const lesson13: Lesson = {
  id: 13,
  number: 13,
  titleJa: '旅行に行こう',
  titleRomaji: 'Ryokou ni ikou',
  titleBn: 'ভ্রমণে যাই (বিশ্ব, চার ঋতু, সকাল-সন্ধ্যা, রিজার্ভেশন ও পর্যটন)',
  titleEn: 'Let\'s Go on a Trip (World, Four Seasons, Morning/Evening, Reservations & Sightseeing)',
  descriptionBn: 'জাপানের ভ্রমণ, ছুটি ও টিকিট বুকিংয়ের কাঞ্জি: বিশ্ব ও চার ঋতু (世, 界, 春, 夏, 秋, 冬), সকাল-সন্ধ্যা ও আগাম বুকিং (早, 夕, 予, 約, 光), ভ্রমণের শব্দ যেমন পর্যটন (観光), রওনা (出発), পৌঁছানো (到着) এবং ট্যুর কুপন ও প্যাকেজ সাইন (〜泊〜日, 〜付き, 〜券)।',
  descriptionEn: 'Essential Kanji for traveling and holidays in Japan: world & four seasons (世, 界, 春, 夏, 秋, 冬), timing & booking (早, 夕, 予, 約, 光), travel actions (観光, 出発, 到着), and hotel package terms (〜泊〜日, 〜付き, 〜券).',
  kanjiList: [
    // --- MAIN KANJI (11 items) ---
    // 1. 世
    {
      id: 'l13-se',
      kanji: '世',
      emoji: '🌐',
      strokeCount: 5,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'セイ', romaji: 'sei' },
          { kana: 'セ', romaji: 'se' }
        ],
        kunyomi: [
          { kana: 'よ', romaji: 'yo' }
        ]
      },
      meanings: {
        en: 'world, generation, society, era, age',
        bn: 'বিশ্ব, পৃথিবী, প্রজন্ম, যুগ, সংসার'
      },
      vocab: [
        {
          kanji: '世界',
          kana: 'せかい',
          romaji: 'sekai',
          meaningEn: 'world, the globe',
          meaningBn: 'বিশ্ব / পৃথিবী',
          tag: 'Daily N5'
        },
        {
          kanji: '世の中',
          kana: 'よのなか',
          romaji: 'yononaka',
          meaningEn: 'the world, society, life',
          meaningBn: 'সমাজ / পার্থিব জগৎ / দুনিয়া',
          tag: 'Society N4'
        },
        {
          kanji: '世話',
          kana: 'せわ',
          romaji: 'sewa',
          meaningEn: 'looking after, care, assistance',
          meaningBn: 'যত্ন নেওয়া / দেখভাল / সাহায্য',
          tag: 'Daily N4'
        },
        {
          kanji: '21世紀',
          kana: 'にじゅういっせいき',
          romaji: 'nijuuisseiki',
          meaningEn: '21st century',
          meaningBn: 'একুশ শতক',
          tag: 'Time N4'
        },
        {
          kanji: '世間',
          kana: 'せけん',
          romaji: 'seken',
          meaningEn: 'public, the world at large',
          meaningBn: 'লোকসমাজ / চারপাশের মানুষ',
          tag: 'Society N4'
        },
        {
          kanji: '前世',
          kana: 'ぜんせ',
          romaji: 'zense',
          meaningEn: 'previous life, past existence',
          meaningBn: 'পূর্বজন্ম',
          tag: 'Culture'
        }
      ],
      sentences: [
        {
          ja: 'いつか世界一周旅行に行って、色々な国の文化に触れたいです。',
          romaji: 'Itsuka sekai isshuu ryokou ni itte, iroiro na kuni no bunka ni furetai desu.',
          meaningEn: 'Someday I want to go on a round-the-world trip and experience cultures of various countries.',
          meaningBn: 'একদিন বিশ্বভ্রমণে গিয়ে বিভিন্ন দেশের সংস্কৃতির সান্নিধ্য লাভ করতে চাই।'
        },
        {
          ja: '日本滞在中、ホストファミリーの皆さんに大変お世話になりました。',
          romaji: 'Nihon taizai-chuu, hosuto famirii no minasan ni taihen osewa ni narimashita.',
          meaningEn: 'During my stay in Japan, I was very well taken care of by the host family.',
          meaningBn: 'জাপানে থাকাকালীন হোস্ট পরিবারের সবাই আমার অত্যন্ত যত্ন ও দেখভাল করেছিলেন।'
        },
        {
          ja: '京都には世界遺産に登録されている歴史的な寺院がたくさんあります。',
          romaji: 'Kyouto ni wa sekai isan ni touroku sarete iru rekishiteki na jiin ga takusan arimasu.',
          meaningEn: 'Kyoto has many historical temples that are registered as World Heritage sites.',
          meaningBn: 'কিয়োটোতে ইউনেস্কো বিশ্ব ঐতিহ্যে তালিকাভুক্ত অনেক ঐতিহাসিক মন্দির রয়েছে।'
        }
      ],
      tamagoTip: {
        bn: 'তিনটি দশের দাগ (১০+১০+১০ = ৩০ বছর), যা এক মানব প্রজন্ম বা যুগের প্রতীক। বিশ্ব 世界 বা দেখভাল お世話।',
        en: 'Three tens linked together (30 years), representing a human generation. World (世界) and care (お世話).'
      }
    },

    // 2. 界
    {
      id: 'l13-kai',
      kanji: '界',
      emoji: '🗺️',
      strokeCount: 9,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'カイ', romaji: 'kai' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'boundary, border, world, circle, realm',
        bn: 'সীমানা, জগত, মণ্ডল, অঙ্গন'
      },
      vocab: [
        {
          kanji: '世界',
          kana: 'せかい',
          romaji: 'sekai',
          meaningEn: 'the world',
          meaningBn: 'বিশ্ব / পৃথিবী',
          tag: 'Daily N5'
        },
        {
          kanji: '世界地図',
          kana: 'せかいちず',
          romaji: 'sekaichizu',
          meaningEn: 'world map',
          meaningBn: 'বিশ্বের মানচিত্র',
          tag: 'Travel N4'
        },
        {
          kanji: '限界',
          kana: 'げんかい',
          romaji: 'genkai',
          meaningEn: 'limit, bound, extreme threshold',
          meaningBn: 'চরম সীমা / সহনসীমা',
          tag: 'General N4'
        },
        {
          kanji: '視界',
          kana: 'しかい',
          romaji: 'shikai',
          meaningEn: 'visibility, field of vision',
          meaningBn: 'দৃষ্টিসীমা (কুয়াশা বা গাড়ি চালানোর সময়)',
          tag: 'Travel N4'
        },
        {
          kanji: '自然界',
          kana: 'しぜんかい',
          romaji: 'shizenkai',
          meaningEn: 'the natural world, nature',
          meaningBn: 'প্রকৃতি / প্রাকৃতিক জগত',
          tag: 'Nature'
        },
        {
          kanji: '業界',
          kana: 'ぎょうかい',
          romaji: 'gyoukai',
          meaningEn: 'industry, business circles',
          meaningBn: 'শিল্প খাত / ব্যবসায়িক অঙ্গন',
          tag: 'Business N4'
        }
      ],
      sentences: [
        {
          ja: '日本の新幹線は、安全性と時間の正確さで世界中から高く評価されています。',
          romaji: 'Nihon no shinkansen wa, anzensei to jikan no seikakusa de sekaijuu kara takaku hyouka sarete imasu.',
          meaningEn: 'Japan\'s Shinkansen is highly acclaimed worldwide for its safety and punctuality.',
          meaningBn: 'জাপানের শিনকানসেন বুলেট ট্রেন নিরাপত্তা ও সময়নিষ্ঠতার জন্য বিশ্বজুড়ে উচ্চ প্রশংসিত।'
        },
        {
          ja: '大雪の日は視界が非常に悪くなるため、車の運転には十分注意が必要です。',
          romaji: 'Ooyuki no hi wa shikai ga hijou ni waruku naru tame, kuruma no unten ni wa juubun chuui ga hitsuyou desu.',
          meaningEn: 'On days of heavy snowfall visibility becomes very poor, so extra care is needed when driving.',
          meaningBn: 'প্রচণ্ড তুষারপাতের দিনে দৃষ্টিসীমা খুব কমে যায়, তাই গাড়ি চালাতে বিশেষ সতর্কতা প্রয়োজন।'
        },
        {
          ja: '富士山は日本一高い山で、世界遺産にも登録されています。',
          romaji: 'Fujisan wa Nihon-ichi takai yama de, sekai isan ni mo touroku sarete imasu.',
          meaningEn: 'Mount Fuji is the highest mountain in Japan and is also registered as a World Heritage site.',
          meaningBn: 'ফুজি পর্বত জাপানের সর্বোচ্চ পর্বত এবং এটি বিশ্ব ঐতিহ্যের স্বীকৃতিপ্রাপ্ত।'
        }
      ],
      tamagoTip: {
        bn: 'ধানক্ষেত (田) যার সীমানা ভাগ করা (介)। ভূখণ্ড ও বিশ্বের পরিমণ্ডল 界 (カイ)।',
        en: 'Paddy fields (田) demarcated by boundary dividers (介). World and territory (世界).'
      }
    },

    // 3. 春
    {
      id: 'l13-haru',
      kanji: '春',
      emoji: '🌸',
      strokeCount: 9,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'シュン', romaji: 'shun' }
        ],
        kunyomi: [
          { kana: 'はる', romaji: 'haru' }
        ]
      },
      meanings: {
        en: 'spring (season), springtime, youthful',
        bn: 'বসন্তকাল, বসন্ত'
      },
      vocab: [
        {
          kanji: '春',
          kana: 'はる',
          romaji: 'haru',
          meaningEn: 'spring, springtime',
          meaningBn: 'বসন্তকাল',
          tag: 'Season N5'
        },
        {
          kanji: '春休み',
          kana: 'はるやすみ',
          romaji: 'haruyasumi',
          meaningEn: 'spring vacation',
          meaningBn: 'বসন্তকালীন স্কুল ছুটি',
          tag: 'School N5'
        },
        {
          kanji: '春風',
          kana: 'はるかぜ',
          romaji: 'harukaze',
          meaningEn: 'spring breeze',
          meaningBn: 'বসন্তের মৃদুমন্দ হাওয়া',
          tag: 'Nature'
        },
        {
          kanji: '早春',
          kana: 'そうしゅん',
          romaji: 'soushun',
          meaningEn: 'early spring',
          meaningBn: 'বসন্তের প্রারম্ভ / ঋতুরাজ শুরুর সময়',
          tag: 'Season'
        },
        {
          kanji: '春分の日',
          kana: 'しゅんぶんのひ',
          romaji: 'shunbun no hi',
          meaningEn: 'Vernal Equinox Day (national holiday)',
          meaningBn: 'বসন্ত বিষুব দিবস (জাপানের সরকারি ছুটি)',
          tag: 'Holiday N4'
        },
        {
          kanji: '青春',
          kana: 'せいしゅん',
          romaji: 'seishun',
          meaningEn: 'youth, adolescent springtime of life',
          meaningBn: 'যৌবনকাল / তারুণ্য',
          tag: 'Culture N4'
        }
      ],
      sentences: [
        {
          ja: '春になると、公園の桜が一斉に咲いて大勢の花見客で賑わいます。',
          romaji: 'Haru ni naru to, kouen no sakura ga issei ni saite oozei no hanamikyaku de nigiwaimasu.',
          meaningEn: 'When spring arrives, the park\'s cherry blossoms bloom all at once and it bustles with cherry blossom viewers.',
          meaningBn: 'বসন্ত এলে পার্কের চেরি ফুলগুলো একযোগে ফোটে এবং অসংখ্য দর্শনার্থীর পদচারণায় মুখর হয়ে ওঠে।'
        },
        {
          ja: '大学の春休みを利用して、友人と一緒に北海道へ旅行しました。',
          romaji: 'Daigaku no haruyasumi o riyou shite, yuujin to issho ni Hokkaidou e ryokou shimashita.',
          meaningEn: 'Taking advantage of university spring break, I traveled to Hokkaido with my friends.',
          meaningBn: 'বিশ্ববিদ্যালয়ের বসন্তকালীন ছুটিকে কাজে লাগিয়ে বন্ধুদের সঙ্গে হোক্কাইডো ভ্রমণে গিয়েছিলাম।'
        },
        {
          ja: '日本では春の四月に新しい学校や会社の新年度がスタートします。',
          romaji: 'Nihon dewa haru no shigatsu ni atarashii gakkou ya kaisha no shinnendo ga sutaato shimasu.',
          meaningEn: 'In Japan, new academic and fiscal years start in spring during April.',
          meaningBn: 'জাপানে বসন্তকালের এপ্রিল মাসে নতুন শিক্ষাবর্ষ ও অফিস-আদালতের নতুন অর্থবছর শুরু হয়।'
        }
      ],
      tamagoTip: {
        bn: 'সূর্যের মিষ্টি আলোতে (日) গাছের কিশলয় ও কুঁড়ি গজানোর স্নিগ্ধ রূপ। বসন্তকাল 春 (はる)।',
        en: 'Shoots sprouting under the warm spring sun (日). Spring season (春).'
      }
    },

    // 4. 夏
    {
      id: 'l13-natsu',
      kanji: '夏',
      emoji: '🌻',
      strokeCount: 10,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'カ', romaji: 'ka' },
          { kana: 'ゲ', romaji: 'ge' }
        ],
        kunyomi: [
          { kana: 'なつ', romaji: 'natsu' }
        ]
      },
      meanings: {
        en: 'summer (season)',
        bn: 'গ্রীষ্মকাল, গ্রীষ্ম'
      },
      vocab: [
        {
          kanji: '夏',
          kana: 'なつ',
          romaji: 'natsu',
          meaningEn: 'summer',
          meaningBn: 'গ্রীষ্মকাল',
          tag: 'Season N5'
        },
        {
          kanji: '夏休み',
          kana: 'なつやすみ',
          romaji: 'natsuyasumi',
          meaningEn: 'summer vacation',
          meaningBn: 'গ্রীষ্মকালীন লম্বা ছুটি',
          tag: 'School N5'
        },
        {
          kanji: '夏祭り',
          kana: 'なつまつり',
          romaji: 'natsumatsuri',
          meaningEn: 'summer festival',
          meaningBn: 'গ্রীষ্মকালীন ঐতিহ্যবাহী উৎসব',
          tag: 'Culture N4'
        },
        {
          kanji: '真夏',
          kana: 'まなつ',
          romaji: 'manatsu',
          meaningEn: 'midsummer',
          meaningBn: 'গ্রীষ্মের তপ্ত মধ্যভাগ',
          tag: 'Season'
        },
        {
          kanji: '初夏',
          kana: 'しょか',
          romaji: 'shoka',
          meaningEn: 'early summer',
          meaningBn: 'গ্রীষ্মের শুরু',
          tag: 'Season'
        },
        {
          kanji: '夏バテ',
          kana: 'なつバテ',
          romaji: 'natsubate',
          meaningEn: 'summer fatigue, heat exhaustion',
          meaningBn: 'গ্রীষ্মের গরমে শরীর দুর্বল বা ক্লান্ত লাগা',
          tag: 'Health'
        }
      ],
      sentences: [
        {
          ja: '日本の夏はとても蒸し暑いので、熱中症に気をつけて水分を取りましょう。',
          romaji: 'Nihon no natsu wa totemo mushiatsui node, necchuushou ni ki o tsukete suibun o torimashou.',
          meaningEn: 'Summer in Japan is very humid and hot, so be careful of heatstroke and drink plenty of fluids.',
          meaningBn: 'জাপানের গ্রীষ্মকাল অত্যন্ত ভ্যাপসা গরম, তাই হিটস্ট্রোক এড়িয়ে প্রচুর তরল পান করা উচিত।'
        },
        {
          ja: '近所の神社で開かれた夏祭りで、浴衣を着て花火を見ました。',
          romaji: 'Kinjo no jinja de hirakareta natsumatsuri de, yukata o kite hanabi o mimashita.',
          meaningEn: 'At the summer festival held at the local shrine, I wore a yukata and watched the fireworks.',
          meaningBn: 'পাড়ার শ্রাইনে আয়োজিত গ্রীষ্মের উৎসবে ইউকাতা পোশাক পরে আতশবাজি প্রদর্শনী দেখেছি।'
        },
        {
          ja: '今年の夏休みは家族と一緒に沖縄のエメラルドグリーンの海へ行きます。',
          romaji: 'Kotoshi no natsuyasumi wa kazoku to issho ni Okinawa no emerarudoguriin no umi e ikimasu.',
          meaningEn: 'During this year\'s summer vacation, I will go with my family to Okinawa\'s emerald-green sea.',
          meaningBn: 'এবারের গ্রীষ্মের ছুটিতে পরিবারের সাথে ওকিনাওয়া দ্বীপের নয়নাভিরাম সমুদ্র সৈকতে যাব।'
        }
      ],
      tamagoTip: {
        bn: 'রোদের টুপির মতো মাথা ও নিচে মানুষের ধীরে চলার পা। তপ্ত গ্রীষ্মকাল 夏 (なつ)।',
        en: 'A person wearing a wide sun hat moving slowly in the intense heat. Summer (夏).'
      }
    },

    // 5. 秋
    {
      id: 'l13-aki',
      kanji: '秋',
      emoji: '🍁',
      strokeCount: 9,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'シュウ', romaji: 'shuu' }
        ],
        kunyomi: [
          { kana: 'あき', romaji: 'aki' }
        ]
      },
      meanings: {
        en: 'autumn, fall, harvest season',
        bn: 'শরৎকাল, হেমন্তকাল, ফসল তোলার ঋতু'
      },
      vocab: [
        {
          kanji: '秋',
          kana: 'あき',
          romaji: 'aki',
          meaningEn: 'autumn, fall',
          meaningBn: 'শরৎকাল / হেমন্তকাল',
          tag: 'Season N5'
        },
        {
          kanji: '秋分の日',
          kana: 'しゅうぶんのひ',
          romaji: 'shuubun no hi',
          meaningEn: 'Autumn Equinox Day (holiday)',
          meaningBn: 'শরৎ বিষুব দিবস (সরকারি ছুটি)',
          tag: 'Holiday N4'
        },
        {
          kanji: '秋晴れ',
          kana: 'あきばれ',
          romaji: 'akibare',
          meaningEn: 'clear autumn weather',
          meaningBn: 'শরতের রৌদ্রোজ্জ্বল নির্মল আকাশ',
          tag: 'Weather'
        },
        {
          kanji: '晩秋',
          kana: 'ばんしゅう',
          romaji: 'banshuu',
          meaningEn: 'late autumn',
          meaningBn: 'হেমন্তের শেষভাগ / শীতের প্রাক্কাল',
          tag: 'Season'
        },
        {
          kanji: '食欲の秋',
          kana: 'しょくよくのあき',
          romaji: 'shokuyoku no aki',
          meaningEn: 'autumn, season of hearty appetite',
          meaningBn: 'শরতের সুস্বাদু ফসলের খাদ্যোৎসব',
          tag: 'Culture'
        },
        {
          kanji: '読書の秋',
          kana: 'どくしょのあき',
          romaji: 'dokusho no aki',
          meaningEn: 'autumn, the season best for reading',
          meaningBn: 'বই পড়ার অনুকূল শান্ত শরৎকাল',
          tag: 'Culture'
        }
      ],
      sentences: [
        {
          ja: '秋になると山の木々の葉が赤や黄色に色づいて紅葉が見事です。',
          romaji: 'Aki ni naru to yama no kigi no ha ga aka ya kiiro ni irozuite kouyou ga migoto desu.',
          meaningEn: 'When autumn comes, mountain tree leaves turn red and yellow, making the autumn foliage splendid.',
          meaningBn: 'শরৎ-হেমন্ত এলে পাহাড়ের গাছের পাতাগুলো লাল ও হলুদে রঞ্জিত হয়ে চোখ জুড়ানো মোমিজি রূপ নেয়।'
        },
        {
          ja: '昨日は気持ちのいい秋晴れだったので、公園をのんびり散歩しました。',
          romaji: 'Kinou wa kimochi no ii akibare datta node, kouen o nonbiri sanpo shimashita.',
          meaningEn: 'Yesterday was a delightfully clear autumn day, so I took a leisurely stroll in the park.',
          meaningBn: 'গতকাল চমৎকার স্নিগ্ধ রোদের শরতের আবহাওয়া থাকায় পার্কে মনের সুখে হেঁটেছি।'
        },
        {
          ja: '日本では「食欲の秋」と言われ、サンマや栗、サツマイモが美味しいです。',
          romaji: 'Nihon dewa "shokuyoku no aki" to iware, sanma ya kuri, satsumaimo ga oishii desu.',
          meaningEn: 'In Japan people say "autumn of appetite," when saury fish, chestnuts, and sweet potatoes are delicious.',
          meaningBn: 'জাপানে বলা হয় "ক্ষুধার ঋতু শরৎ", এই সময়ে সাম্মা মাছ, চেস্টনাট ও মিষ্টি আলু অত্যন্ত সুস্বাদু হয়।'
        }
      ],
      tamagoTip: {
        bn: 'পাকা শস্যের শিষ (禾) আগুনের মতো সোনালী রঙে (火) রূপ নেয়। সোনালী শরৎকাল 秋 (あき)।',
        en: 'Grain crops (禾) ripen to the fiery golden color of harvest (火). Autumn (秋).'
      }
    },

    // 6. 冬
    {
      id: 'l13-fuyu',
      kanji: '冬',
      emoji: '❄️',
      strokeCount: 5,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'トウ', romaji: 'tou' }
        ],
        kunyomi: [
          { kana: 'ふゆ', romaji: 'fuyu' }
        ]
      },
      meanings: {
        en: 'winter (season)',
        bn: 'শীতকাল, শীত'
      },
      vocab: [
        {
          kanji: '冬',
          kana: 'ふゆ',
          romaji: 'fuyu',
          meaningEn: 'winter',
          meaningBn: 'শীতকাল',
          tag: 'Season N5'
        },
        {
          kanji: '冬休み',
          kana: 'ふゆやすみ',
          romaji: 'fuyuyasumi',
          meaningEn: 'winter vacation',
          meaningBn: 'শীতকালীন স্কুল ছুটি (নববর্ষের সময়)',
          tag: 'School N5'
        },
        {
          kanji: '真冬',
          kana: 'まふゆ',
          romaji: 'mafuyu',
          meaningEn: 'dead of winter, midwinter',
          meaningBn: 'মাঘের কনকনে শীত / তীব্র শৈত্যকাল',
          tag: 'Season'
        },
        {
          kanji: '初冬',
          kana: 'しょとう',
          romaji: 'shotou',
          meaningEn: 'early winter',
          meaningBn: 'শীতের আগমনী সময়',
          tag: 'Season'
        },
        {
          kanji: '冬至',
          kana: 'とうじ',
          romaji: 'touji',
          meaningEn: 'winter solstice (shortest day)',
          meaningBn: 'বছরের ক্ষুদ্রতম দিন (শীত বিষুব)',
          tag: 'Culture'
        },
        {
          kanji: '冬景色',
          kana: 'ふゆげしき',
          romaji: 'fuyugeshiki',
          meaningEn: 'wintry scene, snowscape',
          meaningBn: 'শীতকালীন বরফাবৃত দৃশ্যপট',
          tag: 'Nature'
        }
      ],
      sentences: [
        {
          ja: '冬休みに長野県のスキー場へ行って、スノーボードに初挑戦しました。',
          romaji: 'Fuyuyasumi ni Nagano-ken no sukii-jou e itte, sunooboodo ni hatsu-chousen shimashita.',
          meaningEn: 'During winter break I went to a ski resort in Nagano Prefecture and tried snowboarding for the first time.',
          meaningBn: 'শীতের ছুটিতে নাগানো প্রিফেকচারের স্কি রিসোর্টে গিয়ে প্রথমবারের মতো স্নোবোর্ডিং করেছি।'
        },
        {
          ja: '東京の冬は乾燥して冷え込むので、暖かいコートと手袋が欠かせません。',
          romaji: 'Toukyou no fuyu wa kansou shite hiekomu node, atatakai kooto to tebukuro ga kakasemasen.',
          meaningEn: 'Because winter in Tokyo is dry and chilly, a warm coat and gloves are indispensable.',
          meaningBn: 'টোকিওর শীতকাল শুষ্ক ও বেশ ঠাণ্ডা, তাই গরম কোট এবং হাতমোজা নিত্যপ্রয়োজনীয়।'
        },
        {
          ja: '冬の寒い夜には、家族みんなで温かい鍋料理を囲んで食べるのが最高です。',
          romaji: 'Fuyu no samui yoru ni wa, kazoku minna de atatakai naberyouri o kakonde taberu no ga saikou desu.',
          meaningEn: 'On a cold winter night, gathering around a warm nabe hotpot with family is the best.',
          meaningBn: 'শীতের কনকনে রাতে পুরো পরিবার একসঙ্গে বসে গরম নাবে হটপট খাওয়া সত্যিই দারুণ আনন্দের।'
        }
      ],
      tamagoTip: {
        bn: 'হিমশীতল বরফের ফোঁটার প্রতীকী বিন্দু (冫) এবং জমে যাওয়া প্রান্ত। বরফশীতল কাল 冬 (ふゆ)।',
        en: 'Two drops of ice water (冫) freezing at the end of the seasonal cycle. Winter (冬).'
      }
    },

    // 7. 早
    {
      id: 'l13-haya',
      kanji: '早',
      emoji: '⏰',
      strokeCount: 6,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ソウ', romaji: 'sou' },
          { kana: 'サッ', romaji: 'sa\'' }
        ],
        kunyomi: [
          { kana: 'はや・い', romaji: 'haya-i' },
          { kana: 'はや・く', romaji: 'haya-ku' }
        ]
      },
      meanings: {
        en: 'early, fast, prompt, premature',
        bn: 'তাড়াতাড়ি, সকাল সকাল, দ্রুত, প্রারম্ভিক'
      },
      vocab: [
        {
          kanji: '早い',
          kana: 'はやい',
          romaji: 'hayai',
          meaningEn: 'early (in time)',
          meaningBn: 'সকাল সকাল / সময়ের দিক থেকে আগে',
          tag: 'Daily N5'
        },
        {
          kanji: '早く',
          kana: 'はやく',
          romaji: 'hayaku',
          meaningEn: 'early, quickly',
          meaningBn: 'তাড়াতাড়ি / দ্রুত',
          tag: 'Daily N5'
        },
        {
          kanji: '早起き',
          kana: 'はやおき',
          romaji: 'hayaoki',
          meaningEn: 'waking up early',
          meaningBn: 'ভোরে ঘুম থেকে ওঠা',
          tag: 'Daily N5'
        },
        {
          kanji: '早朝',
          kana: 'そうちょう',
          romaji: 'souchou',
          meaningEn: 'early morning',
          meaningBn: 'ভোরবেলা / সাতসকালে',
          tag: 'Time N4'
        },
        {
          kanji: '早口',
          kana: 'はやくち',
          romaji: 'hayakuchi',
          meaningEn: 'fast talking, fast speech',
          meaningBn: 'দ্রুত কথা বলার অভ্যাস',
          tag: 'General N4'
        },
        {
          kanji: '早めに',
          kana: 'はやめに',
          romaji: 'hayameni',
          meaningEn: 'ahead of time, well in advance',
          meaningBn: 'কিছুটা আগেই / হাতে সময় রেখে',
          tag: 'Daily N4'
        }
      ],
      sentences: [
        {
          ja: '明日は新幹線の始発に乗るため、今夜は早く寝て早起きします。',
          romaji: 'Ashita wa shinkansen no shihatsu ni noru tame, kon\'ya wa hayaku nete hayaoki shimasu.',
          meaningEn: 'Because I will catch the first bullet train tomorrow, I will sleep early tonight and wake up early.',
          meaningBn: 'কাল সকালে প্রথম শিনকানসেন ধরতে হবে, তাই আজ রাতে দ্রুত ঘুমিয়ে ভোরে উঠব।'
        },
        {
          ja: '空港の手続きには時間がかかるので、二時間前に早めに到着してください。',
          romaji: 'Kuukou no tetsuzuki ni wa jikan ga kakaru node, nijikan mae ni hayameni touchaku shite kudasai.',
          meaningEn: 'Because airport procedures take time, please arrive ahead of time two hours prior.',
          meaningBn: 'বিমানবন্দরের কার্যক্রমে সময় লাগে, তাই দুই ঘণ্টা আগে পৌঁছানো উচিত।'
        },
        {
          ja: '「早起きは三文の徳」ということわざが日本にはあります。',
          romaji: '"Hayaoki wa sanmon no toku" to iu kotowaza ga Nihon ni wa arimasu.',
          meaningEn: 'There is a Japanese proverb: "Early rising brings three mon of profit" (The early bird gets the worm).',
          meaningBn: 'জাপানে প্রবাদ আছে: "ভোরে ঘুম থেকে ওঠার মধ্যে প্রভূত কল্যাণ নিহিত রয়েছে।"'
        }
      ],
      tamagoTip: {
        bn: 'সূর্য (日) মাত্র প্রথম দিগন্তে উঁকি দিয়েছে (十)। ভোরবেলা বা তাড়াতাড়ি 早 (はやい)।',
        en: 'The sun (日) rising above the horizon marker (十). Early morning (早い).'
      }
    },

    // 8. 夕
    {
      id: 'l13-yuu',
      kanji: '夕',
      emoji: '🌇',
      strokeCount: 3,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'セキ', romaji: 'seki' }
        ],
        kunyomi: [
          { kana: 'ゆう', romaji: 'yuu' }
        ]
      },
      meanings: {
        en: 'evening, dusk, twilight',
        bn: 'সন্ধ্যা, গোধূলি, সাঁঝবেলা'
      },
      vocab: [
        {
          kanji: '夕方',
          kana: 'ゆうがた',
          romaji: 'yuugata',
          meaningEn: 'evening, dusk',
          meaningBn: 'সন্ধ্যাবেলা / গোধূলিলগ্ন',
          tag: 'Time N5'
        },
        {
          kanji: '夕食',
          kana: 'ゆうしょく',
          romaji: 'yuushoku',
          meaningEn: 'dinner, evening meal',
          meaningBn: 'রাতের খাবার / সান্ধ্যভোজ',
          tag: 'Daily N5'
        },
        {
          kanji: '夕日',
          kana: 'ゆうひ',
          romaji: 'yuuhi',
          meaningEn: 'setting sun, evening sun',
          meaningBn: 'অস্তগামী সূর্য / পশ্চিমের লাল রবি',
          tag: 'Nature N4'
        },
        {
          kanji: '夕焼け',
          kana: 'ゆうやけ',
          romaji: 'yuuyake',
          meaningEn: 'sunset glow, evening red sky',
          meaningBn: 'গোধূলির লাল আভা',
          tag: 'Nature'
        },
        {
          kanji: '七夕',
          kana: 'たなばた',
          romaji: 'tanabata',
          meaningEn: 'Star Festival (July 7)',
          meaningBn: 'তানাবাতা তারকা উৎসব (৭ই জুলাই)',
          tag: 'Culture N4'
        },
        {
          kanji: '一朝一夕',
          kana: 'いっちょういっせき',
          romaji: 'icchouisseki',
          meaningEn: 'in a single day, overnight',
          meaningBn: 'একদিন বা এক রাতের ব্যবধানে (সহজে)',
          tag: 'Idiom'
        }
      ],
      sentences: [
        {
          ja: '海辺の温泉旅館の露天風呂から、美しい夕日を眺めました。',
          romaji: 'Umibe no onsen ryokan no rotenburo kara, utsukushii yuuhi o nagamemashita.',
          meaningEn: 'From the open-air bath of the seaside hot spring inn, I gazed at the gorgeous setting sun.',
          meaningBn: 'সৈকতের অনসেন হোটেলের উন্মুক্ত বাথটাব থেকে আমি অপরূপ অস্তগামী সূর্য অবলোকন করেছি।'
        },
        {
          ja: '夕方五時を過ぎると、駅前の商店街は買い物客で混雑します。',
          romaji: 'Yuugata goji o sugiru to, ekimae no shoutengai wa kaimonokyaku de konzatsu shimasu.',
          meaningEn: 'Once it passes 5:00 PM in the evening, the shopping street in front of the station gets crowded.',
          meaningBn: 'সন্ধ্যা পাঁচটার পর স্টেশনের সামনের শপিং স্ট্রিটে ক্রেতাদের বেশ ভিড় জমে ওঠে।'
        },
        {
          ja: '旅館に宿泊すると、地元の旬の魚を使った豪華な夕食が楽しめます。',
          romaji: 'Ryokan ni shukuhaku suru to, jimoto no shun no sakana o tsukatta gouka na yuushoku ga tanoshimemasu.',
          meaningEn: 'When staying at a Japanese inn, you can enjoy a lavish dinner made with local seasonal fish.',
          meaningBn: 'ঐতিহ্যবাহী রিওকানে থাকলে স্থানীয় তাজা মাছ দিয়ে তৈরি রাজকীয় সান্ধ্যভোজ উপভোগ করা যায়।'
        }
      ],
      tamagoTip: {
        bn: 'চাঁদের প্রথম একফালি বাঁকা অংশ যা সন্ধ্যার আকাশে উদিত হয় (月 এর প্রথমাংশ)। সন্ধ্যাবেলা 夕 (ゆう)。',
        en: 'The crescent moon just beginning to show as darkness falls. Evening (夕).'
      }
    },

    // 9. 予
    {
      id: 'l13-yo',
      kanji: '予',
      emoji: '📅',
      strokeCount: 4,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ヨ', romaji: 'yo' }
        ],
        kunyomi: [
          { kana: 'あらかじ・め', romaji: 'arakaji-me' }
        ]
      },
      meanings: {
        en: 'beforehand, in advance, previous, estimate',
        bn: 'পূর্বাহ্ণে, আগে থেকেই, অগ্রিম, পূর্বাভাস'
      },
      vocab: [
        {
          kanji: '予約',
          kana: 'よやく',
          romaji: 'yoyaku',
          meaningEn: 'reservation, booking',
          meaningBn: 'বুকিং / অগ্রিম আসন সংরক্ষণ',
          tag: 'Daily N5'
        },
        {
          kanji: '予定',
          kana: 'よてい',
          romaji: 'yotei',
          meaningEn: 'schedule, plan',
          meaningBn: 'কর্মপরিকল্পনা / নির্ধারিত সূচি',
          tag: 'Daily N5'
        },
        {
          kanji: '天気予報',
          kana: 'てんきよほう',
          romaji: 'tenki yohou',
          meaningEn: 'weather forecast',
          meaningBn: 'আবহাওয়ার পূর্বাভাস',
          tag: 'Daily N5'
        },
        {
          kanji: '予習',
          kana: 'よしゅう',
          romaji: 'yoshuu',
          meaningEn: 'preparation for class, previewing lessons',
          meaningBn: 'ক্লাসের আগে পড়া তৈরি করে নেওয়া',
          tag: 'School N5'
        },
        {
          kanji: '予防',
          kana: 'よぼう',
          romaji: 'yobou',
          meaningEn: 'prevention, precaution',
          meaningBn: 'প্রতিরোধ / আগাম সতর্কতা',
          tag: 'Health N4'
        },
        {
          kanji: '予算',
          kana: 'よさん',
          romaji: 'yosan',
          meaningEn: 'budget, estimated cost',
          meaningBn: 'বাজেট / আনুমানিক খরচ',
          tag: 'Travel N4'
        }
      ],
      sentences: [
        {
          ja: '旅行の日程が決まったので、ネットで新幹線の座席を予約しました。',
          romaji: 'Ryokou no nittei ga kimatta node, netto de shinkansen no zaseki o yoyaku shimashita.',
          meaningEn: 'Since our travel dates are decided, I reserved Shinkansen seats online.',
          meaningBn: 'ভ্রমণের তারিখ চূড়ান্ত হওয়ায় আমি অনলাইনে শিনকানসেনের সিট বুক করেছি।'
        },
        {
          ja: '明日の登山に備えて、テレビで詳しい天気予報を確認しておきましょう。',
          romaji: 'Ashita no tozan ni sonaete, terebi de kuwashii tenki yohou o kakunin shite okimashou.',
          meaningEn: 'In preparation for tomorrow\'s mountain climb, let\'s check the detailed weather forecast on TV.',
          meaningBn: 'আগামীকালের পাহাড় ভ্রমণের প্রস্তুতির জন্য টিভিতে বিস্তারিত আবহাওয়ার পূর্বাভাস দেখে নেওয়া যাক।'
        },
        {
          ja: '来週の週末は日本橋の友達と会う予定が入っています。',
          romaji: 'Raishuu no shuumatsu wa Nihonbashi no tomodachi to au yotei ga haitte imasu.',
          meaningEn: 'Next weekend I have a plan scheduled to meet a friend at Nihonbashi.',
          meaningBn: 'আগামী সপ্তাহে নিহনবাশির এক বন্ধুর সাথে দেখা করার পূর্বপরিকল্পনা রয়েছে।'
        }
      ],
      tamagoTip: {
        bn: 'সুতো জড়িয়ে কাপড় বোনার আগেই কাঠামোর পরিকল্পনা করে নেওয়া। আগে থেকে বা পূর্বাভাস 予 (ヨ)。',
        en: 'Weaving shuttles preparing the loom before work begins. Ahead of time (予約, 予定).'
      }
    },

    // 10. 約
    {
      id: 'l13-yaku',
      kanji: '約',
      emoji: '🤝',
      strokeCount: 9,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ヤク', romaji: 'yaku' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'promise, contract, approximately, about',
        bn: 'প্রতিশ্রুতি, চুক্তি, আনুমানিক, প্রায়'
      },
      vocab: [
        {
          kanji: '予約',
          kana: 'よやく',
          romaji: 'yoyaku',
          meaningEn: 'reservation, appointment',
          meaningBn: 'বুকিং / অ্যাপয়েন্টমেন্ট',
          tag: 'Daily N5'
        },
        {
          kanji: '約束',
          kana: 'やくそく',
          romaji: 'yakusoku',
          meaningEn: 'promise, appointment, commitment',
          meaningBn: 'প্রতিশ্রুতি / কথা দেওয়া',
          tag: 'Daily N5'
        },
        {
          kanji: '約〜',
          kana: 'やく〜',
          romaji: 'yaku~',
          meaningEn: 'about ~, approximately ~',
          meaningBn: 'আনুমানিক ~ / প্রায় ~',
          tag: 'Number N4'
        },
        {
          kanji: '契約',
          kana: 'けいやく',
          romaji: 'keiyaku',
          meaningEn: 'contract, agreement',
          meaningBn: 'চুক্তিপত্র / আইনগত চুক্তি',
          tag: 'Business N4'
        },
        {
          kanji: '節約',
          kana: 'せつやく',
          romaji: 'setsuyaku',
          meaningEn: 'economizing, saving money',
          meaningBn: 'মিতাচার / খরচ সাশ্রয় করা',
          tag: 'Daily N4'
        },
        {
          kanji: '婚約',
          kana: 'こんやく',
          romaji: 'konyaku',
          meaningEn: 'engagement, betrothal',
          meaningBn: 'বাগদান / আংটি বদল',
          tag: 'Life'
        }
      ],
      sentences: [
        {
          ja: '東京から新大阪までは東海道新幹線のぞみ号で約二時間半かかります。',
          romaji: 'Toukyou kara Shin-Oosaka made wa Toukaidou Shinkansen Nozomi-gou de yaku nijikanhan kakarimasu.',
          meaningEn: 'From Tokyo to Shin-Osaka takes approximately 2.5 hours on the Tokaido Shinkansen Nozomi train.',
          meaningBn: 'টোকিও থেকে শিন-ওসাকা যেতে তোখাইদো শিনকানসেন নোজোমিতে আনুমানিক আড়াই ঘণ্টা সময় লাগে।'
        },
        {
          ja: '日本では友達との約束の時間をきちんと守ることがとても大切です。',
          romaji: 'Nihon dewa tomodachi to no yakusoku no jikan o kichinto mamoru koto ga totemo taisetsu desu.',
          meaningEn: 'In Japan, strictly keeping the promised appointment time with friends is very important.',
          meaningBn: 'জাপানে বন্ধুদের দেওয়া প্রতিশ্রুত সময় সঠিকভাবে রক্ষা করা অত্যন্ত গুরুত্বপূর্ণ।'
        },
        {
          ja: 'アパートを借りるときは、契約書の内容をしっかり確認してから署名します。',
          romaji: 'Apaato o kariru toki wa, keiyakusho no naiyou o shikkari kakunin shite kara shomei shimasu.',
          meaningEn: 'When renting an apartment, check the contract contents thoroughly before signing.',
          meaningBn: 'অ্যাপার্টমেন্ট ভাড়া নেওয়ার সময় চুক্তিপত্রের শর্তাবলী ভালোভাবে বুঝে স্বাক্ষর করতে হয়।'
        }
      ],
      tamagoTip: {
        bn: 'সুতো দিয়ে গিঁট বেঁধে (糸) প্রতিশ্রুতি বা কথা চূড়ান্ত করা (勺)। চুক্তি ও বুকিং 約 (ヤク)।',
        en: 'A thread (糸) tied into a bind with a ladle measure (勺). A binding promise or reservation (予約).'
      }
    },

    // 11. 光
    {
      id: 'l13-hikari',
      kanji: '光',
      emoji: '✨',
      strokeCount: 6,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'コウ', romaji: 'kou' }
        ],
        kunyomi: [
          { kana: 'ひかり', romaji: 'hikari' },
          { kana: 'ひか・る', romaji: 'hika-ru' }
        ]
      },
      meanings: {
        en: 'light, ray, shine, scenic view',
        bn: 'আলো, রশ্মি, উজ্জ্বলতা, দর্শনীয় দৃশ্য'
      },
      vocab: [
        {
          kanji: '光',
          kana: 'ひかり',
          romaji: 'hikari',
          meaningEn: 'light, beam, ray',
          meaningBn: 'আলো / দীপ্তি / রশ্মি',
          tag: 'Nature N5'
        },
        {
          kanji: '光る',
          kana: 'ひかる',
          romaji: 'hikaru',
          meaningEn: 'to shine, to glitter, to sparkle',
          meaningBn: 'চকচক করা / আলো ছড়ানো',
          tag: 'Verb N5'
        },
        {
          kanji: '観光',
          kana: 'かんこう',
          romaji: 'kankou',
          meaningEn: 'sightseeing, tourism',
          meaningBn: 'দর্শন / পর্যটন (দেশের আলো-রূপ দেখা)',
          tag: 'Travel N4'
        },
        {
          kanji: '日光',
          kana: 'にっこう',
          romaji: 'nikkou',
          meaningEn: 'sunlight; Nikko (famous historic town)',
          meaningBn: 'সূর্যের আলো; নিক্কো শহর',
          tag: 'Place N4'
        },
        {
          kanji: '月光',
          kana: 'げっこう',
          romaji: 'gekkou',
          meaningEn: 'moonlight',
          meaningBn: 'চাঁদের আলো / জোছনা',
          tag: 'Nature'
        },
        {
          kanji: '光景',
          kana: 'こうけい',
          romaji: 'koukei',
          meaningEn: 'scene, spectacle, sight',
          meaningBn: 'নয়নাভিরাম দৃশ্যপট / দৃশ্য',
          tag: 'General N4'
        }
      ],
      sentences: [
        {
          ja: '東京スカイツリーの展望台から見渡す夜景は、宝石のように光っていました。',
          romaji: 'Toukyou Sukai Tsurii no tenboudai kara miwatasu yakei wa, houseki no you ni hikatte imashita.',
          meaningEn: 'The night view overlooking Tokyo Skytree\'s observatory was glittering like jewels.',
          meaningBn: 'টোকিও স্কাইট্রি পর্যবেক্ষণ টাওয়ার থেকে রাতের দৃশ্যটি রত্নপাথরের মতো চকচক করছিল।'
        },
        {
          ja: '秋の連休に栃木県の日光へ観光に行って、有名な東照宮を見学しました。',
          romaji: 'Aki no renkyuu ni Tochigi-ken no Nikkou e kankou ni itte, yuumei na Toushouguu o kengaku shimashita.',
          meaningEn: 'During autumn consecutive holidays I went sightseeing in Nikko, Tochigi Prefecture, and visited the famous Toshogu Shrine.',
          meaningBn: 'শরতের ছুটিতে তোচিগি প্রিফেকচারের নিক্কোতে পর্যটনে গিয়ে বিখ্যাত তোশোগু শাইন পরিদর্শন করেছি।'
        },
        {
          ja: '春の朝、カーテンを開けると心地よい太陽の光が部屋に差し込んできました。',
          romaji: 'Haru no asa, kaaten o akeru to kokochiyoi taiyou no hikari ga heya ni sashikonde kimashita.',
          meaningEn: 'On a spring morning, opening the curtains let pleasant sunlight stream into the room.',
          meaningBn: 'বসন্তের এক সকালে পর্দা সরাতেই মিষ্টি রোদ ঘরের ভেতর ছড়িয়ে পড়ল।'
        }
      ],
      tamagoTip: {
        bn: 'মানুষের মাথার ওপরে উজ্জ্বল আগুনের শিখা বা আলোর জ্যোতি (小 + 儿)। আলো 光 (ひかり) ও পর্যটন 観光।',
        en: 'A flame of fire atop a person carrying light. Glow (光) and sightseeing (観光).'
      }
    },

    // --- READ-ONLY KANJI (読める - 3 items) ---
    // 12. 観光
    {
      id: 'l13-kankou',
      kanji: '観光',
      emoji: '📸',
      strokeCount: 24,
      jlpt: 'N4',
      category: 'read_only',
      readings: {
        onyomi: [
          { kana: 'カンコウ', romaji: 'kankou' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'sightseeing, tourism',
        bn: 'পর্যটন, দর্শনীয় স্থান ভ্রমণ'
      },
      vocab: [
        {
          kanji: '観光',
          kana: 'かんこう',
          romaji: 'kankou',
          meaningEn: 'sightseeing, tourism',
          meaningBn: 'পর্যটন / দর্শনীয় স্থান ভ্রমণ',
          tag: 'Travel N4'
        },
        {
          kanji: '観光客',
          kana: 'かんこうきゃく',
          romaji: 'kankoukyaku',
          meaningEn: 'tourist, sightseer',
          meaningBn: 'পর্যটক / দর্শনার্থী',
          tag: 'Travel N4'
        },
        {
          kanji: '観光地',
          kana: 'かんこうち',
          romaji: 'kankouchi',
          meaningEn: 'tourist attraction, sightseeing spot',
          meaningBn: 'পর্যটন কেন্দ্র / দর্শনীয় স্থান',
          tag: 'Place N4'
        },
        {
          kanji: '観光案内所',
          kana: 'かんこうあんないじょ',
          romaji: 'kankou annaijo',
          meaningEn: 'tourist information center',
          meaningBn: 'পর্যটন তথ্য কেন্দ্র (স্টেশনে থাকে)',
          tag: 'Travel N4'
        },
        {
          kanji: '観光バス',
          kana: 'かんこうバス',
          romaji: 'kankou basu',
          meaningEn: 'sightseeing tour bus',
          meaningBn: 'দর্শনীয় স্থান ঘোরার ট্যুর বাস',
          tag: 'Travel'
        },
        {
          kanji: '観光ビザ',
          kana: 'かんこうビザ',
          romaji: 'kankou biza',
          meaningEn: 'tourist visa',
          meaningBn: 'পর্যটক ভিসা',
          tag: 'Travel'
        }
      ],
      sentences: [
        {
          ja: '駅の観光案内所で無料の英語マップをもらって、おすすめの観光地を聞きました。',
          romaji: 'Eki no kankou annaijo de muryou no eigo mappu o moratte, osusume no kankouchi o kikimashita.',
          meaningEn: 'I received a free English map at the station tourist information center and asked about recommended tourist spots.',
          meaningBn: 'স্টেশনের পর্যটন তথ্য কেন্দ্র থেকে বিনামূল্যে ইংরেজি ম্যাপ নিয়ে আকর্ষণীয় ভ্রমণস্থলের পরামর্শ নিলাম।'
        },
        {
          ja: '京都や浅草には、世界中からたくさんの外国人観光客が訪れています。',
          romaji: 'Kyouto ya Asakusa ni wa, sekaijuu kara takusan no gaikokujin kankoukyaku ga otozurete imasu.',
          meaningEn: 'To Kyoto and Asakusa, many foreign tourists from all around the world visit.',
          meaningBn: 'কিয়োটো ও আসাকুসায় বিশ্বের বিভিন্ন প্রান্ত থেকে প্রচুর বিদেশি পর্যটক ঘুরতে আসেন।'
        },
        {
          ja: '週末は観光バスに乗って、富士山周辺の湖や温泉を巡るツアーに参加しました。',
          romaji: 'Shuumatsu wa kankou basu ni notte, Fujisan shuuhen no mizuumi ya onsen o meguru tsuaa ni sanka shimashita.',
          meaningEn: 'On the weekend, I boarded a tour bus and joined a tour visiting lakes and hot springs around Mount Fuji.',
          meaningBn: 'সাপ্তাহিক ছুটিতে ট্যুর বাসে চড়ে মাউন্ট ফুজির চারপাশের হ্রদ ও অনসেন ঘুরে দেখার ট্যুরে অংশ নিয়েছিলাম।'
        }
      ],
      tamagoTip: {
        bn: '観 (দেখা/অবলোকন) + 光 (দেশের আলো ও রূপ)। দেশের শোভা দর্শন 観光 (かんこう)।',
        en: 'Observe (観) + Light/Scenery (光). Visiting regions to see their finest sights.'
      }
    },

    // 13. 出発
    {
      id: 'l13-shuppatsu',
      kanji: '出発',
      emoji: '🛫',
      strokeCount: 14,
      jlpt: 'N4',
      category: 'read_only',
      readings: {
        onyomi: [
          { kana: 'シュッパツ', romaji: 'shuppatsu' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'departure, setting out, taking off',
        bn: 'রওনা হওয়া, প্রস্থান, যাত্রা শুরু'
      },
      vocab: [
        {
          kanji: '出発',
          kana: 'しゅっぱつ',
          romaji: 'shuppatsu',
          meaningEn: 'departure',
          meaningBn: 'রওনা হওয়া / যাত্রা শুরু',
          tag: 'Travel N4'
        },
        {
          kanji: '出発する',
          kana: 'しゅっぱつする',
          romaji: 'shuppatsu suru',
          meaningEn: 'to depart, to set off',
          meaningBn: 'যাত্রা করা / রওনা দেওয়া',
          tag: 'Verb N4'
        },
        {
          kanji: '出発時刻',
          kana: 'しゅっぱつじこく',
          romaji: 'shuppatsu jikoku',
          meaningEn: 'departure time',
          meaningBn: 'প্রস্থানের নির্ধারিত সময়',
          tag: 'Travel N4'
        },
        {
          kanji: '出発ロビー',
          kana: 'しゅっぱつロビー',
          romaji: 'shuppatsu robii',
          meaningEn: 'departure lobby (airport)',
          meaningBn: 'বিমানবন্দরের ডিপার্চার লাউঞ্জ',
          tag: 'Airport N4'
        },
        {
          kanji: '出発口',
          kana: 'しゅっぱつぐち',
          romaji: 'shuppatsuguchi',
          meaningEn: 'departure gate',
          meaningBn: 'ডিপার্চার গেট',
          tag: 'Airport'
        },
        {
          kanji: '再出発',
          kana: 'さいしゅっぱつ',
          romaji: 'saishuppatsu',
          meaningEn: 'fresh start, starting afresh',
          meaningBn: 'নতুন করে জীবন বা পথচলা শুরু',
          tag: 'General'
        }
      ],
      sentences: [
        {
          ja: '成田空港の出発ロビーでパスポートと航空券を提示して荷物を預けました。',
          romaji: 'Narita Kuukou no shuppatsu robii de pasupooto to koukuuken o teiji shite nimotsu o azukemashita.',
          meaningEn: 'At Narita Airport\'s departure lobby, I presented my passport and airline ticket to check my luggage.',
          meaningBn: 'নারিতা বিমানবন্দরের ডিপার্চার লবিতে পাসপোর্ট ও টিকিট দেখিয়ে লাগেজ জমা দিয়েছি।'
        },
        {
          ja: '観光バスは朝八時ちょうどに出発しますので、遅れないようお集まりください。',
          romaji: 'Kankou basu wa asa hachiji choudo ni shuppatsu shimasu node, okurenai you oatsumari kudasai.',
          meaningEn: 'The sightseeing bus departs promptly at 8:00 AM, so please gather so as not to be late.',
          meaningBn: 'ট্যুর বাসটি সকাল ঠিক আটটায় রওনা হবে, তাই দেরি না করে সবাই উপস্থিত থাকবেন।'
        },
        {
          ja: '電光掲示板で新幹線の出発時刻と番線を確認してホームへ向かいました。',
          romaji: 'Denkou keijiban de shinkansen no shuppatsu jikoku to bansen o kakunin shite hoomu e mukaimashita.',
          meaningEn: 'I checked the Shinkansen\'s departure time and track number on the electric display board and headed to the platform.',
          meaningBn: 'ডিজিটাল বোর্ডে শিনকানসেনের প্রস্থানের সময় ও ট্র্যাক নম্বর দেখে প্ল্যাটফর্মে গেলাম।'
        }
      ],
      tamagoTip: {
        bn: '出 (বের হওয়া) + 発 (যাত্রা/নিষ্ক্রমণ)। বিমানবন্দর ও স্টেশনে প্রস্থানের সাইন 出発 (しゅっぱつ)।',
        en: 'Exit (出) + Launch/Emits (発). Train and flight departures.'
      }
    },

    // 14. 到着
    {
      id: 'l13-touchaku',
      kanji: '到着',
      emoji: '🛬',
      strokeCount: 20,
      jlpt: 'N4',
      category: 'read_only',
      readings: {
        onyomi: [
          { kana: 'トウチャク', romaji: 'touchaku' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'arrival, reaching destination',
        bn: 'পৌঁছানো, আগমন, গন্তব্যে উপস্থিতি'
      },
      vocab: [
        {
          kanji: '到着',
          kana: 'とうちゃく',
          romaji: 'touchaku',
          meaningEn: 'arrival',
          meaningBn: 'পৌঁছানো / আগমন',
          tag: 'Travel N4'
        },
        {
          kanji: '到着する',
          kana: 'とうちゃくする',
          romaji: 'touchaku suru',
          meaningEn: 'to arrive, to reach',
          meaningBn: 'পৌঁছে যাওয়া',
          tag: 'Verb N4'
        },
        {
          kanji: '到着時刻',
          kana: 'とうちゃくじこく',
          romaji: 'touchaku jikoku',
          meaningEn: 'arrival time',
          meaningBn: 'পৌঁছানোর নির্ধারিত সময়',
          tag: 'Travel N4'
        },
        {
          kanji: '到着ロビー',
          kana: 'とうちゃくロビー',
          romaji: 'touchaku robii',
          meaningEn: 'arrival lobby (airport)',
          meaningBn: 'অ্যারাইভাল লবি (বিমানবন্দর)',
          tag: 'Airport N4'
        },
        {
          kanji: '予定到着時間',
          kana: 'よていとうちゃくじかん',
          romaji: 'yotei touchaku jikan',
          meaningEn: 'estimated time of arrival (ETA)',
          meaningBn: 'সম্ভাব্য পৌঁছানোর সময়',
          tag: 'Travel'
        },
        {
          kanji: '到達',
          kana: 'とうたつ',
          romaji: 'toutatsu',
          meaningEn: 'attainment, reaching a goal',
          meaningBn: 'লক্ষ্যে পৌঁছানো',
          tag: 'General'
        }
      ],
      sentences: [
        {
          ja: '飛行機は定刻通り羽田空港の到着口に無事到着しました。',
          romaji: 'Hikouki wa teikokudoori Haneda Kuukou no touchakuguchi ni buji touchaku shimashita.',
          meaningEn: 'The airplane arrived safely right on schedule at Haneda Airport\'s arrival gate.',
          meaningBn: 'উড়োজাহাজটি নির্ধারিত সময়ে নিরাপদে হানেদা বিমানবন্দরের অ্যারাইভাল গেটে অবতরণ করেছে।'
        },
        {
          ja: 'ホテルに到着したら、フロントで予約の名前を伝えてチェックインします。',
          romaji: 'Hoteru ni touchaku shitara, furonto de yoyaku no namae o tsutaete chekku-in shimasu.',
          meaningEn: 'When you arrive at the hotel, give your reservation name at the front desk and check in.',
          meaningBn: 'হোটেলে পৌঁছে ফ্রন্ট ডেস্কে বুকিংয়ের নাম জানিয়ে চেক-ইন করবেন।'
        },
        {
          ja: '台風の影響で電車のダイヤが乱れ、到着が三十分ほど遅れました。',
          romaji: 'Taifuu no eikyou de densha no daiya ga midare, touchaku ga sanjuppun hodo okuremashita.',
          meaningEn: 'Due to the typhoon\'s effects train schedules were disrupted, and arrival was delayed by about 30 minutes.',
          meaningBn: 'টাইফুনের প্রভাবে ট্রেনের শিডিউল বিঘ্নিত হওয়ায় পৌঁছাতে প্রায় ত্রিশ মিনিট দেরি হয়েছে।'
        }
      ],
      tamagoTip: {
        bn: '到 (উপস্থিত হওয়া) + 着 (পৌঁছানো/জাপটে থাকা)। বিমান ও ট্রেনের আগমনী টার্মিনাল 到着 (とうちゃく)।',
        en: 'Reach (到) + Touchdown/Arrive (着). Arrival board and gate signage.'
      }
    },

    // --- VISUAL RECOGNITION (見て、わかる - 3 items) ---
    // 15. 〜泊〜日
    {
      id: 'l13-haku-ka',
      kanji: '〜泊〜日',
      emoji: '🏨',
      strokeCount: 12,
      jlpt: 'N4',
      category: 'visual_recognition',
      readings: {
        onyomi: [
          { kana: '〜ハク〜にち', romaji: '~haku ~nichi' }
        ],
        kunyomi: [
          { kana: '〜とまり〜か', romaji: '~tomari ~ka' }
        ]
      },
      meanings: {
        en: '~ night(s), ~ day(s) (hotel stay duration)',
        bn: '~ রাত ~ দিনের ভ্রমণ প্যাকেজ'
      },
      vocab: [
        {
          kanji: '一泊二日',
          kana: 'いっぱくふつか',
          romaji: 'ippaku futsuka',
          meaningEn: '1 night, 2 days (weekend trip)',
          meaningBn: '১ রাত ২ দিনের ট্যুর প্যাকেজ',
          tag: 'Travel N4'
        },
        {
          kanji: '二泊三日',
          kana: 'にはくみっか',
          romaji: 'nihaku mikka',
          meaningEn: '2 nights, 3 days',
          meaningBn: '২ রাত ৩ দিনের ভ্রমণ',
          tag: 'Travel N4'
        },
        {
          kanji: '三泊四日',
          kana: 'さんぱくよっか',
          romaji: 'sanpaku yokka',
          meaningEn: '3 nights, 4 days',
          meaningBn: '৩ রাত ৪ দিনের ভ্রমণ প্যাকেজ',
          tag: 'Travel N4'
        },
        {
          kanji: '宿泊',
          kana: 'しゅくはく',
          romaji: 'shukuhaku',
          meaningEn: 'lodging, staying over',
          meaningBn: 'রাত্রিযাপন / হোটেলে অবস্থান',
          tag: 'Travel N4'
        },
        {
          kanji: '素泊まり',
          kana: 'すどまり',
          romaji: 'sudomari',
          meaningEn: 'staying without meals included',
          meaningBn: 'খাবার ছাড়া কেবল রাত্রিযাপন',
          tag: 'Hotel N4'
        },
        {
          kanji: '連泊',
          kana: 'れんぱく',
          romaji: 'renpaku',
          meaningEn: 'consecutive nights stay',
          meaningBn: 'টানা কয়েক রাত হোটেলে থাকা',
          tag: 'Hotel'
        }
      ],
      sentences: [
        {
          ja: '週末の連休に、箱根の温泉へ一泊二日の小旅行に出かけました。',
          romaji: 'Shuumatsu no renkyuu ni, Hakone no onsen e ippaku futsuka no shouryokou ni dekakemashita.',
          meaningEn: 'During the weekend consecutive holidays, I went on a 1-night, 2-day short trip to Hakone hot springs.',
          meaningBn: 'সাপ্তাহিক ছুটিতে হাকোনে অনসেনে ১ রাত ২ দিনের একটি সংক্ষিপ্ত ভ্রমণে গিয়েছিলাম।'
        },
        {
          ja: '「今回の北海道スキーツアーは二泊三日で、ホテル代と飛行機代込みです。」',
          romaji: '"Konkai no Hokkaidou sukii tsuaa wa nihaku mikka de, hoteru-dai to hikouki-dai komi desu."',
          meaningEn: '"This Hokkaido ski tour is 2 nights and 3 days, with hotel and flight costs included."',
          meaningBn: '"এবারের হোক্কাইডো স্কি ট্যুরটি ২ রাত ৩ দিনের, যার মধ্যে হোটেল ও বিমান ভাড়া অন্তর্ভুক্ত রয়েছে।"'
        },
        {
          ja: '食事なしの「素泊まりプラン」を選ぶと、ホテルの宿泊費を安く抑えられます。',
          romaji: 'Shokuji nashi no "sudomari puran" o erabu to, hoteru no shukuhakuhi o yasuku osaeraremasu.',
          meaningEn: 'If you choose the meal-less "room-only plan", you can keep hotel lodging expenses inexpensive.',
          meaningBn: 'খাবার ছাড়া কেবল "সুদোমারি প্ল্যান" বেছে নিলে হোটেলের রাত্রিযাপনের খরচ বেশ সাশ্রয় হয়।'
        }
      ],
      tamagoTip: {
        bn: '泊 (রাত্রিযাপন/হোটেল) + 日 (দিনের সংখ্যা)। ট্রাভেল এজেন্সির বিজ্ঞাপনের মূল টেমপ্লেট 一泊二日 বা 二泊三日।',
        en: 'Nights (泊) + Days (日). Standard Japanese travel agency package notation.'
      }
    },

    // 16. 〜付き
    {
      id: 'l13-tsuki',
      kanji: '〜付き',
      emoji: '🍳',
      strokeCount: 5,
      jlpt: 'N4',
      category: 'visual_recognition',
      readings: {
        onyomi: [],
        kunyomi: [
          { kana: '〜つき', romaji: '~tsuki' }
        ]
      },
      meanings: {
        en: 'with ~, ~ included, attached with',
        bn: '~ সহ, অন্তর্ভুক্ত, সংযুক্ত'
      },
      vocab: [
        {
          kanji: '朝食付き',
          kana: 'ちょうしょくつき',
          romaji: 'choushoku tsuki',
          meaningEn: 'with breakfast included',
          meaningBn: 'সকালের নাশতা সহ / ব্রেকফাস্ট অন্তর্ভুক্ত',
          tag: 'Hotel N4'
        },
        {
          kanji: '二食付き',
          kana: 'にしょくつき',
          romaji: 'nishoku tsuki',
          meaningEn: 'with 2 meals included (dinner & breakfast)',
          meaningBn: 'দুই বেলা খাবার সহ (ডিনার ও ব্রেকফাস্ট)',
          tag: 'Hotel N4'
        },
        {
          kanji: '温泉付き',
          kana: 'おんせんつき',
          romaji: 'onsen tsuki',
          meaningEn: 'with hot spring bath included',
          meaningBn: 'হট স্প্রিং বা অনসেন সুবিধাযুক্ত',
          tag: 'Hotel N4'
        },
        {
          kanji: 'バス・トイレ付き',
          kana: 'バス・トイレつき',
          romaji: 'basu toire tsuki',
          meaningEn: 'with en-suite bath & toilet',
          meaningBn: 'ভেতরে অ্যাটাচড বাথ ও টয়লেটসহ',
          tag: 'Hotel N4'
        },
        {
          kanji: 'ガイド付き',
          kana: 'ガイドつき',
          romaji: 'gaido tsuki',
          meaningEn: 'with tourist guide included',
          meaningBn: 'ট্যুর গাইড সহ',
          tag: 'Travel'
        },
        {
          kanji: '条件付き',
          kana: 'じょうけんつき',
          romaji: 'jouken tsuki',
          meaningEn: 'conditional, with terms attached',
          meaningBn: 'শর্তসাপেক্ষ',
          tag: 'General'
        }
      ],
      sentences: [
        {
          ja: 'ビジネスホテルを予約するときは、必ず「朝食付きプラン」を選んでいます。',
          romaji: 'Bijinesu hoteru o yoyaku suru toki wa, kanarazu "choushoku tsuki puran" o erande imasu.',
          meaningEn: 'When reserving a business hotel, I always choose the "breakfast included plan".',
          meaningBn: 'বিজনেস হোটেল বুকিং করার সময় আমি সব সময় "নাশতা অন্তর্ভুক্ত" প্ল্যান নির্বাচন করি।'
        },
        {
          ja: '客室に専用の露天風呂が付いている贅沢な旅館に泊まりました。',
          romaji: 'Kyakushitsu ni sen\'you no rotenburo ga tsuite iru zeitaku na ryokan ni tomarimashita.',
          meaningEn: 'I stayed at a luxurious Japanese inn with a private open-air bath attached to the guest room.',
          meaningBn: 'অতিথি কক্ষের সাথে নিজস্ব উন্মুক্ত উষ্ণ প্রস্রবণ বাথটাব সংযুক্ত এমন এক বিলাসবহুল রিওকানে ছিলাম।'
        },
        {
          ja: 'ネット通販で、送料無料でおまけ付きのお得な日本茶セットを購入しました。',
          romaji: 'Netto tsuuhan de, souryou muryou de omake tsuki no otoku na Nihoncha setto o kounyuu shimashita.',
          meaningEn: 'Through online shopping, I purchased a bargain Japanese green tea set with free shipping and bonus gifts attached.',
          meaningBn: 'অনলাইন শপে ফ্রি ডেলিভারি ও অতিরিক্ত উপহারসহ একটি লাভজনক জাপানি গ্রিন টির সেট কিনেছি।'
        }
      ],
      tamagoTip: {
        bn: 'সংযুক্ত থাকা বা অন্তর্ভুক্ত (付)। হোটেল বুকিং সাইটে 朝食付き (ব্রেকফাস্ট সহ) বা 温泉付き (অনসেন সহ)।',
        en: 'Attached / included (付き). Ubiquitous on Japanese hotel booking sites for amenities.'
      }
    },

    // 17. 〜券
    {
      id: 'l13-ken',
      kanji: '〜券',
      emoji: '🎟️',
      strokeCount: 8,
      jlpt: 'N4',
      category: 'visual_recognition',
      readings: {
        onyomi: [
          { kana: '〜ケン', romaji: '~ken' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'ticket, coupon, voucher, certificate',
        bn: 'টিকিট, কুপন, ভাউচার, পাস'
      },
      vocab: [
        {
          kanji: '乗車券',
          kana: 'じょうしゃけん',
          romaji: 'joushaken',
          meaningEn: 'train fare ticket',
          meaningBn: 'রেলযাত্রার বেসিক টিকিট',
          tag: 'Train N4'
        },
        {
          kanji: '特急券',
          kana: 'とっきゅうけん',
          romaji: 'tokkyuuken',
          meaningEn: 'limited express / Shinkansen ticket',
          meaningBn: 'শিনকানসেন / এক্সপ্রেস ট্রেনের অতিরিক্ত টিকিট',
          tag: 'Train N4'
        },
        {
          kanji: '航空券',
          kana: 'こうくうけん',
          romaji: 'koukuuken',
          meaningEn: 'airline ticket, boarding flight ticket',
          meaningBn: 'উড়োজাহাজের টিকিট',
          tag: 'Airport N4'
        },
        {
          kanji: '入場券',
          kana: 'にゅうじょうけん',
          romaji: 'nyuujouken',
          meaningEn: 'admission ticket, entrance ticket',
          meaningBn: 'প্রবেশ টিকিট (পার্ক/মিউজিয়াম)',
          tag: 'Place N4'
        },
        {
          kanji: '食券',
          kana: 'しょっけん',
          romaji: 'shokken',
          meaningEn: 'meal ticket (vending machine)',
          meaningBn: 'খাবারের টিকিট (রেস্তোরাঁর ভেন্ডিং মেশিন)',
          tag: 'Daily N4'
        },
        {
          kanji: '割引券',
          kana: 'わりびきけん',
          romaji: 'waribikiken',
          meaningEn: 'discount coupon, discount voucher',
          meaningBn: 'মূল্যছাড়ের ডিসকাউন্ট কুপন',
          tag: 'Shop N4'
        }
      ],
      sentences: [
        {
          ja: '新幹線に乗るときは、「乗車券」と「特急券」の二枚を重ねて改札機に入れます。',
          romaji: 'Shinkansen ni noru toki wa, "joushaken" to "tokkyuuken" no nimai o kasanete kaisatsuki ni iremasu.',
          meaningEn: 'When boarding the Shinkansen, you stack the two tickets—"fare ticket" and "limited express ticket"—into the ticket gate.',
          meaningBn: 'শিনকানসেনে চড়ার সময় বেসিক "জোউশাপাস" এবং "এক্সপ্রেস টিকিট" দুটো একসঙ্গে টিকিট গেটে ঢোকাতে হয়।'
        },
        {
          ja: 'ラーメン屋に入ったら、まず自動券売機で食券を買って店員さんに渡します。',
          romaji: 'Raamen\'ya ni haittara, mazu jidou kenbaiki de shokken o katte ten\'in-san ni watashimasu.',
          meaningEn: 'Upon entering the ramen shop, first purchase a meal ticket at the automatic ticket machine and hand it to the clerk.',
          meaningBn: 'রামেন দোকানে ঢুকে প্রথমে অটোমেটিক ভেন্ডিং মেশিন থেকে খাবারের টিকিট কিনে পরিচারকের কাছে দিতে হয়।'
        },
        {
          ja: 'スマートフォンのアプリで美術館の電子前売り入場券を割引価格で買いました。',
          romaji: 'Sumaatofon no apuri de bijutsukan no denshi maeuri nyuujouken o waribiki kakaku de kaimashita.',
          meaningEn: 'Using a smartphone app, I bought an electronic advance museum admission ticket at a discounted price.',
          meaningBn: 'স্মার্টফোনের অ্যাপ দিয়ে আর্ট মিউজিয়ামের আগাম ইলেকট্রনিক প্রবেশ টিকিট ছাড়মূল্যে কিনেছি।'
        }
      ],
      tamagoTip: {
        bn: 'কাগজের কুপন যা ছুরি দিয়ে টুকরো করে কেটে আলাদা করা যায় (刀)। টিকিট ও কুপন 〜券 (ケン)।',
        en: 'A stamped paper voucher cut with a blade (刀). Tickets (乗車券, 航空券, 食券).'
      }
    }
  ]
};
