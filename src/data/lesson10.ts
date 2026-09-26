import { Lesson } from '../types/kanji';

export const lesson10: Lesson = {
  id: 10,
  number: 10,
  titleJa: '待ち合わせ',
  titleRomaji: 'Machiawase',
  titleBn: 'দেখা করার স্থান ও দিকনির্দেশনা (স্টেশন, দিক, পথ ও অবস্থান)',
  titleEn: 'Meeting Up (Station, Directions, Locations & Exits)',
  descriptionBn: 'দেখা করার অবস্থান ও দিকনির্দেশনা (駅, 上, 下, 地, 図, 館, 右, 左, 道), জাপানের সুবিশাল স্টেশনগুলোর চেনা এক্সিট যেমন উত্তর তোরণ (北口), দক্ষিণ তোরণ (南口), পশ্চিম তোরণ (西口), পাতালরেল (地下鉄), ব্যাংক (銀行) এবং পার্কিং লটের সাইন (駐車場)।',
  descriptionEn: 'Essential Kanji for navigating meeting spots, spatial positions (up, down, right, left), map landmarks (station, library, street), station exit gates (North, South, West), subway, bank, and car parking signs.',
  kanjiList: [
    // --- MAIN KANJI (9) ---
    // 1. 駅
    {
      id: 'l10-eki',
      kanji: '駅',
      emoji: '🚉',
      strokeCount: 14,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'エキ', romaji: 'eki' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'train station, railway station',
        bn: 'ট্রেন স্টেশন, রেলওয়ে স্টেশন'
      },
      vocab: [
        {
          kanji: '駅',
          kana: 'えき',
          romaji: 'eki',
          meaningEn: 'train station',
          meaningBn: 'ট্রেন স্টেশন',
          tag: 'Transport N5'
        },
        {
          kanji: '駅前',
          kana: 'えきまえ',
          romaji: 'ekimae',
          meaningEn: 'in front of the station, station plaza',
          meaningBn: 'স্টেশনের সামনে / স্টেশন চত্বর',
          tag: 'Place N5'
        },
        {
          kanji: '駅員',
          kana: 'えきいん',
          romaji: 'ekiin',
          meaningEn: 'station attendant, station employee',
          meaningBn: 'স্টেশন কর্মকর্তা / কর্মচারী',
          tag: 'Job N5'
        },
        {
          kanji: '東京駅',
          kana: 'とうきょうえき',
          romaji: 'Toukyou-eki',
          meaningEn: 'Tokyo Station',
          meaningBn: 'টোকিও স্টেশন',
          tag: 'Place N5'
        },
        {
          kanji: '駅ビル',
          kana: 'えきビル',
          romaji: 'ekibiru',
          meaningEn: 'station shopping complex / building',
          meaningBn: 'স্টেশন সংলগ্ন শপিং মল ভবন',
          tag: 'Place N4'
        },
        {
          kanji: '次の駅',
          kana: 'つぎのえき',
          romaji: 'tsugi no eki',
          meaningEn: 'next station',
          meaningBn: 'পরবর্তী স্টেশন',
          tag: 'Transport N5'
        }
      ],
      sentences: [
        {
          ja: '明日の午後二時に渋谷駅のハチ公前で待ち合わせしましょう。',
          romaji: 'Ashita no gogo niji ni Shibuya-eki no Hachikou mae de machiawase shimashou.',
          meaningEn: 'Let\'s meet tomorrow at 2:00 PM in front of Hachiko at Shibuya Station.',
          meaningBn: 'আগামীকাল দুপুর ২টায় শিবুয়া স্টেশনের হাচিকো মূর্তির সামনে আমরা দেখা করব।'
        },
        {
          ja: '駅員さんに切符の買い方と乗り換えホームを教えてもらいました。',
          romaji: 'Ekiin-san ni kippu no kaikata to norikae hoomu o oshiete moraimashita.',
          meaningEn: 'The station attendant kindly taught me how to buy a ticket and which transfer platform to use.',
          meaningBn: 'স্টেশন কর্মকর্তা আমাকে টিকিট কাটার নিয়ম এবং ট্রেন বদলের প্ল্যাটফর্ম দেখিয়ে দিলেন।'
        },
        {
          ja: '私の家は最寄り駅から歩いてたった三分でとても便利です。',
          romaji: 'Watashi no ie wa moyorieki kara aruite tatta sanpun de totemo benri desu.',
          meaningEn: 'My house is only a 3-minute walk from the nearest station and is very convenient.',
          meaningBn: 'আমার বাসা নিকটবর্তী স্টেশন থেকে হেঁটে মাত্র ৩ মিনিটের দূরত্বে হওয়ায় বেশ সুবিধাজনক।'
        }
      ],
      tamagoTip: {
        bn: 'ঘোড়া (馬) এবং পরিমাপক স্কেল (尺)। প্রাচীনকালে অশ্বারোহী ডাকবাহকদের বিশ্রামের পোস্ট বা রিলে স্টেশন। বর্তমানে রেলওয়ে স্টেশন 駅 (えき)।',
        en: 'A horse (馬) at a measured distance post (尺). Historically a relay staging post; now modern railway stations.'
      }
    },

    // 2. 上
    {
      id: 'l10-ue',
      kanji: '上',
      emoji: '⬆️',
      strokeCount: 3,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ジョウ', romaji: 'jou' },
          { kana: 'ショウ', romaji: 'shou' }
        ],
        kunyomi: [
          { kana: 'うえ', romaji: 'ue' },
          { kana: 'あ・がる', romaji: 'a-garu' },
          { kana: 'あ・げる', romaji: 'a-geru' },
          { kana: 'のぼ・る', romaji: 'nobo-ru' }
        ]
      },
      meanings: {
        en: 'up, above, top, on, rise, superior',
        bn: 'উপরে, শীর্ষ, ওঠা, বাড়ানো, ঊর্ধ্বতন'
      },
      vocab: [
        {
          kanji: '上',
          kana: 'うえ',
          romaji: 'ue',
          meaningEn: 'above, on top, upper',
          meaningBn: 'উপরে / শীর্ষে',
          tag: 'Position N5'
        },
        {
          kanji: '上手な',
          kana: 'じょうずな',
          romaji: 'jouzu na',
          meaningEn: 'skillful, good at',
          meaningBn: 'দক্ষ / পারদর্শী',
          tag: 'Adj N5'
        },
        {
          kanji: '上がる',
          kana: 'あがる',
          romaji: 'agaru',
          meaningEn: 'to go up, to rise, to enter',
          meaningBn: 'উপরে ওঠা / বৃদ্ধি পাওয়া',
          tag: 'Verb N5'
        },
        {
          kanji: '上着',
          kana: 'うわぎ',
          romaji: 'uwagi',
          meaningEn: 'jacket, outerwear, coat',
          meaningBn: 'উপরের পোশাক / জ্যাকেট',
          tag: 'Clothes N5'
        },
        {
          kanji: '屋上',
          kana: 'おくじょう',
          romaji: 'okujou',
          meaningEn: 'rooftop',
          meaningBn: 'ছাদ / ভবনের উপরিভাগ',
          tag: 'Place N4'
        },
        {
          kanji: '上り',
          kana: 'のぼり',
          romaji: 'nobori',
          meaningEn: 'inbound train (heading toward Tokyo)',
          meaningBn: 'রাজধানীমুখী ট্রেন / উর্ধ্বমুখী যাত্রা',
          tag: 'Transport N4'
        }
      ],
      sentences: [
        {
          ja: '机の上に大切なパスポートと電車の切符を置いてあります。',
          romaji: 'Tsukue no ue ni taisetsu na pasupooto to densha no kippu o oite arimasu.',
          meaningEn: 'My important passport and train tickets are placed on top of the desk.',
          meaningBn: 'টেবিলের ওপর গুরুত্বপূর্ণ পাসপোর্ট এবং ট্রেনের টিকিট রাখা আছে।'
        },
        {
          ja: 'エスカレーターで二階へ上がると、右手にカフェがあります。',
          romaji: 'Esukareetaa de nikai e agaru to, migite ni kafe ga arimasu.',
          meaningEn: 'Going up to the 2nd floor by escalator, you will find a café on the right.',
          meaningBn: 'চলন্ত সিঁড়ি দিয়ে দ্বিতীয় তলায় উঠলে ডান পাশে একটি ক্যাফে দেখতে পাবেন।'
        },
        {
          ja: '日本語がとてもお上手ですね。ーいえ、まだまだです。',
          romaji: 'Nihongo ga totemo ojouzu desu ne. - Ie, madamada desu.',
          meaningEn: 'You are very good at Japanese! - No, I still have a long way to go.',
          meaningBn: 'আপনি তো জাপানি ভাষায় দারুণ দক্ষ! — না, এখনও অনেক শেখা বাকি।'
        }
      ],
      tamagoTip: {
        bn: 'একটি অনুভূমিক রেখার উপর একটি খাড়া দাগ ও নির্দেশক চিহ্ন। নির্দেশ করে উপরে বা শীর্ষে (上)。 দক্ষতায় 上手।',
        en: 'A mark placed above a baseline. Represents upward direction, superior mastery (上手), and topsides.'
      }
    },

    // 3. 下
    {
      id: 'l10-shita',
      kanji: '下',
      emoji: '⬇️',
      strokeCount: 3,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'カ', romaji: 'ka' },
          { kana: 'ゲ', romaji: 'ge' }
        ],
        kunyomi: [
          { kana: 'した', romaji: 'shita' },
          { kana: 'さ・がる', romaji: 'sa-garu' },
          { kana: 'さ・げる', romaji: 'sa-geru' },
          { kana: 'くだ・る', romaji: 'kuda-ru' }
        ]
      },
      meanings: {
        en: 'down, below, under, beneath, descend',
        bn: 'নিচে, তলদেশ, নামা, কমা, নিম্ন'
      },
      vocab: [
        {
          kanji: '下',
          kana: 'した',
          romaji: 'shita',
          meaningEn: 'under, below, beneath',
          meaningBn: 'নিচে / তলদেশে',
          tag: 'Position N5'
        },
        {
          kanji: '下手な',
          kana: 'へたな',
          romaji: 'heta na',
          meaningEn: 'unskillful, poor at, bad at',
          meaningBn: 'অদক্ষ / দুর্বল',
          tag: 'Adj N5'
        },
        {
          kanji: '地下',
          kana: 'ちか',
          romaji: 'chika',
          meaningEn: 'underground, basement',
          meaningBn: 'ভূগর্ভস্থ / মাটির নিচের তলা',
          tag: 'Place N5'
        },
        {
          kanji: '地下鉄',
          kana: 'ちかてつ',
          romaji: 'chikatetsu',
          meaningEn: 'subway, underground metro',
          meaningBn: 'পাতালরেল / সাবওয়ে',
          tag: 'Transport N5'
        },
        {
          kanji: '下がる',
          kana: 'さがる',
          romaji: 'sagaru',
          meaningEn: 'to go down, to drop (temperature/price)',
          meaningBn: 'নিচে নামা / হ্রাস পাওয়া',
          tag: 'Verb N4'
        },
        {
          kanji: '下り',
          kana: 'くだり',
          romaji: 'kudari',
          meaningEn: 'outbound train (heading away from Tokyo)',
          meaningBn: 'রাজধানী থেকে দূরবর্তী অভিমুখী ট্রেন',
          tag: 'Transport N4'
        }
      ],
      sentences: [
        {
          ja: '駅の地下街には美味しいレストランやパン屋がたくさんあります。',
          romaji: 'Eki no chikagai niwa oishii resutoran ya pan\'ya ga takusan arimasu.',
          meaningEn: 'In the station\'s underground mall, there are many delicious restaurants and bakeries.',
          meaningBn: 'স্টেশনের মাটির নিচের শপিং চত্বরে বহু সুস্বাদু খাবারের রেস্তোরাঁ ও বেকারির দোকান রয়েছে।'
        },
        {
          ja: '階段を下りて地下鉄の改札口へ向かいました。',
          romaji: 'Kaidan o orite chikatetsu no kaisatsuguchi e mukaimashita.',
          meaningEn: 'I went down the stairs toward the subway ticket gates.',
          meaningBn: 'সিঁড়ি বেয়ে নিচে নেমে আমি পাতালরেলের টিকিট গেটের দিকে এগিয়ে গেলাম।'
        },
        {
          ja: '私はまだ料理が下手なので、毎日練習しています。',
          romaji: 'Watashi wa mada ryouri ga heta nanode, mainichi renshuu shite imasu.',
          meaningEn: 'I am still poor at cooking, so I practice every day.',
          meaningBn: 'আমি রান্নাবান্নায় এখনও বেশ কাঁচা, তাই প্রতিদিন চর্চা করছি।'
        }
      ],
      tamagoTip: {
        bn: 'অনুভূমিক রেখার নিচে নির্দেশক বিন্দু বা দাগ। মাটির নিচের তল বা সাবওয়ে নির্দেশ করতে 地下 ও 地下鉄। অদক্ষতায় 下手।',
        en: 'A mark placed below a baseline. Signifies subterranean levels (地下), subways, and descending.'
      }
    },

    // 4. 地
    {
      id: 'l10-chi',
      kanji: '地',
      emoji: '🌍',
      strokeCount: 6,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'チ', romaji: 'chi' },
          { kana: 'ジ', romaji: 'ji' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'ground, earth, land, place, territory',
        bn: 'মাটি, ভূমি, পৃথিবী, এলাকা'
      },
      vocab: [
        {
          kanji: '地下',
          kana: 'ちか',
          romaji: 'chika',
          meaningEn: 'underground, basement',
          meaningBn: 'ভূগর্ভস্থ / বেসমেন্ট',
          tag: 'Place N5'
        },
        {
          kanji: '地下鉄',
          kana: 'ちかてつ',
          romaji: 'chikatetsu',
          meaningEn: 'subway, underground railway',
          meaningBn: 'পাতালরেল',
          tag: 'Transport N5'
        },
        {
          kanji: '地図',
          kana: 'ちず',
          romaji: 'chizu',
          meaningEn: 'map',
          meaningBn: 'মানচিত্র / ম্যাপ',
          tag: 'Daily N5'
        },
        {
          kanji: '地震',
          kana: 'じしん',
          romaji: 'jishin',
          meaningEn: 'earthquake',
          meaningBn: 'ভূমিকম্প',
          tag: 'Nature N4'
        },
        {
          kanji: '地方',
          kana: 'ちほう',
          romaji: 'chihou',
          meaningEn: 'region, countryside, locality',
          meaningBn: 'অঞ্চল / প্রাদেশিক এলাকা',
          tag: 'Place N4'
        },
        {
          kanji: '目的地',
          kana: 'もくてきち',
          romaji: 'mokutekichi',
          meaningEn: 'destination',
          meaningBn: 'গন্তব্যস্থল',
          tag: 'Travel N4'
        }
      ],
      sentences: [
        {
          ja: 'スマートフォンの地図アプリを見ながら目的地まで歩きました。',
          romaji: 'Sumaatofon no chizu apuri o minagara mokutekichi made arukimashita.',
          meaningEn: 'I walked to my destination while looking at the map app on my smartphone.',
          meaningBn: 'স্মার্টফোনের গুগল ম্যাপ অ্যাপ দেখে দেখে আমি গন্তব্যস্থল পর্যন্ত হেঁটে গেলাম।'
        },
        {
          ja: '雨の日は地下鉄を利用すると濡れずに移動できます。',
          romaji: 'Ame no hi wa chikatetsu o riyou suru to nurezu ni idou dekimasu.',
          meaningEn: 'On rainy days, using the subway allows you to travel without getting wet.',
          meaningBn: 'বৃষ্টির দিনে পাতালরেল ব্যবহার করলে না ভিজে সহজেই যাতায়াত করা যায়।'
        },
        {
          ja: '日本は地震が多い国なので、常に防災の準備をしています。',
          romaji: 'Nihon wa jishin ga ooi kuni nanode, tsuneni bousai no junbi o shite imasu.',
          meaningEn: 'Because Japan is an earthquake-prone country, we always prepare for disaster prevention.',
          meaningBn: 'জাপানে ঘন ঘন ভূমিকম্প হয় বলে আমরা সবসময় দুর্যোগ মোকাবিলার পূর্বপ্রস্তুতি রাখি।'
        }
      ],
      tamagoTip: {
        bn: 'মাটি (土) এবং আঁকাবাঁকা পানির নালা বা সাপ (也)। পৃথিবীর পৃষ্ঠভূমি। 地下 (পাতাল), 地図 (মানচিত্র) ও 地震 (ভূমিকম্প)।',
        en: 'Soil (土) spreading across terrain (也). Fundamental for maps (地図), subways (地下鉄), and quakes (地震).'
      }
    },

    // 5. 図
    {
      id: 'l10-zu',
      kanji: '図',
      emoji: '🗺️',
      strokeCount: 7,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ズ', romaji: 'zu' },
          { kana: 'ト', romaji: 'to' }
        ],
        kunyomi: [
          { kana: 'はか・る', romaji: 'haka-ru' }
        ]
      },
      meanings: {
        en: 'drawing, diagram, chart, map, plan',
        bn: 'চিত্র, নকশা, মানচিত্র, পরিকল্পনা'
      },
      vocab: [
        {
          kanji: '地図',
          kana: 'ちず',
          romaji: 'chizu',
          meaningEn: 'map',
          meaningBn: 'মানচিত্র / ম্যাপ',
          tag: 'Daily N5'
        },
        {
          kanji: '図書館',
          kana: 'としょかん',
          romaji: 'toshokan',
          meaningEn: 'library',
          meaningBn: 'গ্রন্থাগার / পাঠাগার',
          tag: 'Place N5'
        },
        {
          kanji: '合図',
          kana: 'あいず',
          romaji: 'aizu',
          meaningEn: 'sign, signal, cue',
          meaningBn: 'সংকেত / ইশারা',
          tag: 'Daily N4'
        },
        {
          kanji: '図',
          kana: 'ず',
          romaji: 'zu',
          meaningEn: 'figure, diagram, chart',
          meaningBn: 'চিত্র / ডায়াগ্রাম',
          tag: 'Study N4'
        },
        {
          kanji: '図書',
          kana: 'としょ',
          romaji: 'tosho',
          meaningEn: 'books, library collection',
          meaningBn: 'বইপুস্তক',
          tag: 'Academic N4'
        },
        {
          kanji: '案内図',
          kana: 'あんないず',
          romaji: 'annaizu',
          meaningEn: 'information guide map',
          meaningBn: 'দিকনির্দেশক গাইড ম্যাপ',
          tag: 'Guide N4'
        }
      ],
      sentences: [
        {
          ja: '駅の改札を出たところに周辺の案内図があります。',
          romaji: 'Eki no kaisatsu o deta tokoro ni shuuhen no annaizu ga arimasu.',
          meaningEn: 'Right outside the station ticket gate, there is a local area guide map.',
          meaningBn: 'স্টেশনের টিকিট গেট থেকে বের হলেই আশেপাশের এলাকার গাইড ম্যাপ পাওয়া যায়।'
        },
        {
          ja: '休日は静かな図書館で日本語の試験勉強をしています。',
          romaji: 'Kyuujitsu wa shizuka na toshokan de Nihongo no shiken benkyou o shite imasu.',
          meaningEn: 'On weekends, I study for my Japanese exams in the quiet library.',
          meaningBn: 'ছুটির দিনে আমি শান্ত লাইব্রেরিতে বসে জাপানি ভাষা পরীক্ষার প্রস্তুতি নিই।'
        },
        {
          ja: '信号の合図を見てから安全に横断歩道を渡りましょう。',
          romaji: 'Shingou no aizu o mite kara anzen ni oudanhodou o watarimashou.',
          meaningEn: 'Let\'s check the traffic signal cue and cross the pedestrian crossing safely.',
          meaningBn: 'ট্রাফিক বাতির সংকেত দেখে সতর্কভাবে জেব্রা ক্রসিং পার হওয়া উচিত।'
        }
      ],
      tamagoTip: {
        bn: 'ঘেরা সীমানার (囗) ভেতর সুপরিকল্পিতভাবে সাজানো ড্রয়িং বা খসড়া। 地図 (ম্যাপ) ও 図書館 (লাইব্রেরি)-এর মূল কাঞ্জি।',
        en: 'A bordered enclosure (囗) charting arranged schemes. Seen in maps (地図) and libraries (図書館).'
      }
    },

    // 6. 館
    {
      id: 'l10-kan',
      kanji: '館',
      emoji: '🏛️',
      strokeCount: 16,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'カン', romaji: 'kan' }
        ],
        kunyomi: [
          { kana: 'やかた', romaji: 'yakata' }
        ]
      },
      meanings: {
        en: 'public building, hall, mansion, large facility',
        bn: 'ভবন, মিলনায়তন, গণপ্রতিষ্ঠান, প্রাসাদ'
      },
      vocab: [
        {
          kanji: '図書館',
          kana: 'としょかん',
          romaji: 'toshokan',
          meaningEn: 'library',
          meaningBn: 'গ্রন্থাগার / লাইব্রেরি',
          tag: 'Place N5'
        },
        {
          kanji: '映画館',
          kana: 'えいがかん',
          romaji: 'eigakan',
          meaningEn: 'movie theater, cinema hall',
          meaningBn: 'সিনেমা হল / প্রেক্ষাগৃহ',
          tag: 'Place N5'
        },
        {
          kanji: '水族館',
          kana: 'すいぞくかん',
          romaji: 'suizokukan',
          meaningEn: 'aquarium',
          meaningBn: 'অ্যাকোয়ারিয়াম',
          tag: 'Leisure N4'
        },
        {
          kanji: '美術館',
          kana: 'びじゅつかん',
          romaji: 'bijutsukan',
          meaningEn: 'art museum, gallery',
          meaningBn: 'শিল্পকলা জাদুঘর / আর্ট মিউজিয়াম',
          tag: 'Culture N4'
        },
        {
          kanji: '大使館',
          kana: 'たいしかん',
          romaji: 'taishikan',
          meaningEn: 'embassy',
          meaningBn: 'দূতাবাস (এমব্যাসি)',
          tag: 'Official N4'
        },
        {
          kanji: '旅館',
          kana: 'りょかん',
          romaji: 'ryokan',
          meaningEn: 'traditional Japanese inn',
          meaningBn: 'রিওকান (ঐতিহ্যবাহী জাপানি হোটেল)',
          tag: 'Travel N4'
        }
      ],
      sentences: [
        {
          ja: 'ビザの更新のために目黒にあるバングラデシュ大使館へ行きました。',
          romaji: 'Biza no koushin no tame ni Meguro ni aru Banguradeshu Taishikan e ikimashita.',
          meaningEn: 'I went to the Embassy of Bangladesh in Meguro for my visa renewal.',
          meaningBn: 'ভিসা নবায়নের জন্য আমি মেগুরোতে অবস্থিত বাংলাদেশ দূতাবাসে গিয়েছিলাম।'
        },
        {
          ja: '上野公園の中には有名な美術館や博物館が集まっています。',
          romaji: 'Ueno Kouen no naka niwa yuumei na bijutsukan ya hakubutsukan ga atsumatte imasu.',
          meaningEn: 'Famous art museums and historical museums are clustered inside Ueno Park.',
          meaningBn: 'উয়েনো পার্কের ভেতরে বিখ্যাত আর্ট মিউজিয়াম এবং জাদুঘরসমূহ রয়েছে।'
        },
        {
          ja: '金曜日の夜に友達と映画館へ行ってポップコーンを食べました。',
          romaji: 'Kin\'youbi no yoru ni tomodachi to eigakan e itte poppukoon o tabemashita.',
          meaningEn: 'On Friday night I went to the cinema with friends and ate popcorn.',
          meaningBn: 'শুক্রবার রাতে বন্ধুদের সাথে সিনেমা হলে গিয়ে পপকর্ন খেয়েছি।'
        }
      ],
      tamagoTip: {
        bn: 'খাবারের রেডিক্যাল (食) এবং বড় সরকারি অতিথিশালা (官)। মানুষকে আতিথেয়তা প্রদানকারী বৃহৎ ভবন (館)।',
        en: 'Food hospitality (食) provided inside a grand public edifice (官). Libraries, museums, and embassies.'
      }
    },

    // 7. 右
    {
      id: 'l10-migi',
      kanji: '右',
      emoji: '👉',
      strokeCount: 5,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ウ', romaji: 'u' },
          { kana: 'ユウ', romaji: 'yuu' }
        ],
        kunyomi: [
          { kana: 'みぎ', romaji: 'migi' }
        ]
      },
      meanings: {
        en: 'right, right-hand side',
        bn: 'ডান, ডান দিক'
      },
      vocab: [
        {
          kanji: '右',
          kana: 'みぎ',
          romaji: 'migi',
          meaningEn: 'right, right side',
          meaningBn: 'ডান / ডান দিক',
          tag: 'Direction N5'
        },
        {
          kanji: '右手',
          kana: 'みぎて',
          romaji: 'migite',
          meaningEn: 'right hand, on the right',
          meaningBn: 'ডান হাত / ডান দিকে',
          tag: 'Direction N5'
        },
        {
          kanji: '右折',
          kana: 'うせつ',
          romaji: 'usetsu',
          meaningEn: 'right turn (driving)',
          meaningBn: 'ডানে মোড় নেওয়া',
          tag: 'Traffic N4'
        },
        {
          kanji: '左右',
          kana: 'さゆう',
          romaji: 'sayuu',
          meaningEn: 'left and right, both sides',
          meaningBn: 'ডানে-বাঁয়ে / দুই পাশ',
          tag: 'Daily N4'
        },
        {
          kanji: '右側',
          kana: 'みぎがわ',
          romaji: 'migigawa',
          meaningEn: 'right side, starboard',
          meaningBn: 'ডান পাশ',
          tag: 'Direction N4'
        },
        {
          kanji: '右利き',
          kana: 'みぎきき',
          romaji: 'migikiki',
          meaningEn: 'right-handed person',
          meaningBn: 'ডানহাতি মানুষ',
          tag: 'Daily'
        }
      ],
      sentences: [
        {
          ja: '次の交差点を右に曲がると、目の前に郵便局が見えます。',
          romaji: 'Tsugi no kousaten o migi ni magaru to, me no mae ni yuubinkyoku ga miemasu.',
          meaningEn: 'If you turn right at the next intersection, you will see the post office right before you.',
          meaningBn: 'পরবর্তী মোড়ে ডানে ঘুরলেই আপনার চোখের সামনে পোস্ট অফিস দেখতে পাবেন।'
        },
        {
          ja: '道路を横断するときは、左右の安全をよく確認してください。',
          romaji: 'Douro o oudan suru toki wa, sayuu no anzen o yoku kakunin shite kudasai.',
          meaningEn: 'When crossing the road, please check carefully for safety to both left and right.',
          meaningBn: 'রাস্তা পার হওয়ার সময় ডানে-বাঁয়ে দুই পাশ ভালো করে দেখে নিরাপদে পার হন।'
        },
        {
          ja: 'エレベーターの右側に階段があります。',
          romaji: 'Erebeetaa no migigawa ni kaidan ga arimasu.',
          meaningEn: 'There is a staircase on the right-hand side of the elevator.',
          meaningBn: 'লিফটের ডান পাশে একটি সিঁড়ি রয়েছে।'
        }
      ],
      tamagoTip: {
        bn: 'হাত (𠂇) যা মুখে (口) খাবার তুলে দেয়। খাবার খাওয়ার জন্য ব্যবহৃত প্রধান হাত হলো ডান হাত (右)।',
        en: 'The hand (𠂇) that brings food to the mouth (口). Denotes the right-hand direction.'
      }
    },

    // 8. 左
    {
      id: 'l10-hidari',
      kanji: '左',
      emoji: '👈',
      strokeCount: 5,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'サ', romaji: 'sa' }
        ],
        kunyomi: [
          { kana: 'ひだり', romaji: 'hidari' }
        ]
      },
      meanings: {
        en: 'left, left-hand side',
        bn: 'বাম, বাঁ দিক'
      },
      vocab: [
        {
          kanji: '左',
          kana: 'ひだり',
          romaji: 'hidari',
          meaningEn: 'left, left side',
          meaningBn: 'বাম / বাঁ দিক',
          tag: 'Direction N5'
        },
        {
          kanji: '左手',
          kana: 'ひだりて',
          romaji: 'hidarite',
          meaningEn: 'left hand, on the left',
          meaningBn: 'বাম হাত / বাঁ দিকে',
          tag: 'Direction N5'
        },
        {
          kanji: '左折',
          kana: 'させつ',
          romaji: 'sasetsu',
          meaningEn: 'left turn (driving)',
          meaningBn: 'বাঁয়ে মোড় নেওয়া',
          tag: 'Traffic N4'
        },
        {
          kanji: '左側',
          kana: 'ひだりがわ',
          romaji: 'hidarigawa',
          meaningEn: 'left side',
          meaningBn: 'বাম পাশ',
          tag: 'Direction N4'
        },
        {
          kanji: '左利き',
          kana: 'ひだりきき',
          romaji: 'hidarikiki',
          meaningEn: 'left-handed person',
          meaningBn: 'বাঁহাতি মানুষ',
          tag: 'Daily'
        },
        {
          kanji: '左右',
          kana: 'さゆう',
          romaji: 'sayuu',
          meaningEn: 'left and right',
          meaningBn: 'ডানে-বাঁয়ে',
          tag: 'Daily N4'
        }
      ],
      sentences: [
        {
          ja: '日本では車は道路の左側を通行しなければなりません。',
          romaji: 'Nihon dewa kuruma wa douro no hidarigawa o tsuukou shinakereba narimasen.',
          meaningEn: 'In Japan, cars must drive on the left side of the road.',
          meaningBn: 'জাপানে গাড়িগুলোকে সড়কের বাম পাশ দিয়ে চলাচল করতে হয়।'
        },
        {
          ja: '銀行の角を左に曲がると、すぐ交番があります。',
          romaji: 'Ginkou no kado o hidari ni magaru to, sugu kouban ga arimasu.',
          meaningEn: 'Turning left at the corner of the bank, you will immediately find a police box (kouban).',
          meaningBn: 'ব্যাংকের কোণায় বাঁয়ে ঘুরলেই চোখের সামনে পুলিশ বক্স (কোবান) দেখতে পাবেন।'
        },
        {
          ja: '東京のエスカレーターでは左側に立ち、右側を急ぐ人に空けます。',
          romaji: 'Toukyou no esukareetaa dewa hidarigawa ni tachi, migigawa o isogu hito ni akemasu.',
          meaningEn: 'On escalators in Tokyo, people stand on the left and leave the right side open for those rushing.',
          meaningBn: 'টোকিওর চলন্ত সিঁড়িতে সবাই বাঁ পাশে দাঁড়ায় এবং ডান পাশটি দ্রুতগামীদের জন্য ফাঁকা রাখে।'
        }
      ],
      tamagoTip: {
        bn: 'হাত (𠂇) এবং কাঠমিস্ত্রির মাপকাঠি বা করাত (工)। কারিগরির কাজে ধরে রাখার সহকারী হাত হলো বাঁ হাত (左)।',
        en: 'The hand (𠂇) holding a carpenter\'s square tool (工). Represents the left-hand direction.'
      }
    },

    // 9. 道
    {
      id: 'l10-michi',
      kanji: '道',
      emoji: '🛣️',
      strokeCount: 12,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ドウ', romaji: 'dou' },
          { kana: 'トウ', romaji: 'tou' }
        ],
        kunyomi: [
          { kana: 'みち', romaji: 'michi' }
        ]
      },
      meanings: {
        en: 'road, street, path, way, route, morals/philosophy',
        bn: 'রাস্তা, সড়ক, পথ, নীতিপথ'
      },
      vocab: [
        {
          kanji: '道',
          kana: 'みち',
          romaji: 'michi',
          meaningEn: 'road, street, path, way',
          meaningBn: 'রাস্তা / পথ / সড়ক',
          tag: 'Daily N5'
        },
        {
          kanji: '水道',
          kana: 'すいどう',
          romaji: 'suidou',
          meaningEn: 'water supply, tap water',
          meaningBn: 'পানির লাইন / ট্যাপের পানি',
          tag: 'Daily N5'
        },
        {
          kanji: '歩道',
          kana: 'ほどう',
          romaji: 'hodou',
          meaningEn: 'sidewalk, footpath, pedestrian walkway',
          meaningBn: 'ফুটপাত / হাঁটার পথ',
          tag: 'Traffic N4'
        },
        {
          kanji: '車道',
          kana: 'しゃどう',
          romaji: 'shadou',
          meaningEn: 'roadway for vehicles, carriage-way',
          meaningBn: 'যানবাহন চলাচলের সড়ক',
          tag: 'Traffic N4'
        },
        {
          kanji: '高速道路',
          kana: 'こうそくどうろ',
          romaji: 'kousoku douro',
          meaningEn: 'expressway, highway, toll road',
          meaningBn: 'মহাসড়ক / এক্সপ্রেসওয়ে',
          tag: 'Transport N4'
        },
        {
          kanji: '片道',
          kana: 'かたみち',
          romaji: 'katamichi',
          meaningEn: 'one-way trip / one-way ticket',
          meaningBn: 'একমুখী যাত্রা / একদিকের টিকিট',
          tag: 'Travel N4'
        }
      ],
      sentences: [
        {
          ja: '道に迷ってしまったので、近くの交番で道を尋ねました。',
          romaji: 'Michi ni mayotte shimatta node, chikaku no kouban de michi o tazunemashita.',
          meaningEn: 'Because I lost my way, I asked for directions at a nearby police box.',
          meaningBn: 'পথ হারিয়ে ফেলেছিলাম বলে কাছের একটি পুলিশ বক্সে পথ জিজ্ঞেস করেছি।'
        },
        {
          ja: '日本の水道水は安全なので、そのまま直接飲むことができます。',
          romaji: 'Nihon no suidousui wa anzen nanode, sonomama chokusetsu nomu koto ga dekimasu.',
          meaningEn: 'Tap water in Japan is safe, so you can drink it straight from the tap.',
          meaningBn: 'জাপানের ট্যাপের পানি অত্যন্ত নিরাপদ হওয়ায় সরাসরি পান করা যায়।'
        },
        {
          ja: '自転車に乗るときは歩道ではなく車道を走りましょう。',
          romaji: 'Jitensha ni noru toki wa hodou dewa naku shadou o hashirimashou.',
          meaningEn: 'When riding a bicycle, let\'s ride on the roadway rather than the sidewalk.',
          meaningBn: 'বাইসাইকেল চালানোর সময় ফুটপাতে নয়, নির্ধারিত রাস্তায় চালানো উচিত।'
        }
      ],
      tamagoTip: {
        bn: 'পথ চলার রেডিক্যাল (辶) এবং মাথা বা নেতা (首)। মাথা উঁচু করে নিজের লক্ষ্যপানে এগিয়ে চলার রাস্তা 道 (みち)।',
        en: 'Movement radical (辶) combined with head (首). A leading way or street guiding one\'s path.'
      }
    },

    // --- READ-ONLY KANJI (読める - 5 items) ---
    // 10. 北口
    {
      id: 'l10-kitaguchi',
      kanji: '北口',
      emoji: '🧭',
      strokeCount: 8,
      jlpt: 'N5',
      category: 'read_only',
      readings: {
        onyomi: [
          { kana: 'ホクコウ', romaji: 'hokukou' }
        ],
        kunyomi: [
          { kana: 'きたぐち', romaji: 'kitaguchi' }
        ]
      },
      meanings: {
        en: 'North exit, North gate (of train station)',
        bn: 'উত্তর তোরণ, উত্তর এক্সিট (স্টেশনের উত্তরমুখী গেট)'
      },
      vocab: [
        {
          kanji: '北口',
          kana: 'きたぐち',
          romaji: 'kitaguchi',
          meaningEn: 'North exit (station)',
          meaningBn: 'উত্তর তোরণ / উত্তর এক্সিট',
          tag: 'Station N5'
        },
        {
          kanji: '北',
          kana: 'きた',
          romaji: 'kita',
          meaningEn: 'north',
          meaningBn: 'উত্তর দিক',
          tag: 'Direction N5'
        },
        {
          kanji: '北海道',
          kana: 'ほっかいどう',
          romaji: 'Hokkaidou',
          meaningEn: 'Hokkaido (northernmost major island of Japan)',
          meaningBn: 'হোক্কাইডো (জাপানের উত্তরাঞ্চলীয় দ্বীপ)',
          tag: 'Place N5'
        },
        {
          kanji: '東北',
          kana: 'とうほく',
          romaji: 'Touhoku',
          meaningEn: 'Tohoku region (Northeast Japan)',
          meaningBn: 'তোহোকু অঞ্চল (উত্তর-পূর্ব জাপান)',
          tag: 'Place N4'
        },
        {
          kanji: '北極',
          kana: 'ほっきょく',
          romaji: 'hokkyoku',
          meaningEn: 'North Pole, Arctic',
          meaningBn: 'উত্তর মেরু / সুমেরু',
          tag: 'Nature'
        },
        {
          kanji: '北風',
          kana: 'きたかぜ',
          romaji: 'kitakaze',
          meaningEn: 'north wind (cold winter wind)',
          meaningBn: 'উত্তরা হাওয়া / শীতের ঠান্ডা বাতাস',
          tag: 'Weather'
        }
      ],
      sentences: [
        {
          ja: '駅の北口を出てすぐのロータリーにタクシー乗り場があります。',
          romaji: 'Eki no kitaguchi o dete sugu no rootarii ni takushii noriba ga arimasu.',
          meaningEn: 'Right outside the station\'s North exit at the rotary, there is a taxi stand.',
          meaningBn: 'স্টেশনের উত্তর গেট থেকে বের হলেই গোলচত্বরে ট্যাক্সি স্ট্যান্ড পাওয়া যায়।'
        },
        {
          ja: '待ち合わせは新宿駅の東口ではなく北口です。間違えないでください。',
          romaji: 'Machiawase wa Shinjuku-eki no higashiguchi dewa naku kitaguchi desu. Machigaenaide kudasai.',
          meaningEn: 'The meetup is at Shinjuku Station\'s North exit, not the East exit. Please do not mistake it.',
          meaningBn: 'আমাদের দেখা করার স্থান শিনজুকু স্টেশনের পূর্ব গেট নয়, উত্তর গেট। ভুল করবেন না।'
        },
        {
          ja: '北口周辺には賑やかな商店街が広がっています。',
          romaji: 'Kitaguchi shuuhen niwa nigiyaka na shoutengai ga hirogatte imasu.',
          meaningEn: 'A lively shopping arcade spreads around the North exit area.',
          meaningBn: 'উত্তর তোরণ চত্বরে একটি প্রাণবন্ত শপিং স্ট্রিট রয়েছে।'
        }
      ],
      tamagoTip: {
        bn: '北 (উত্তর) + 口 (মুখ বা তোরণ)। জাপানের বড় স্টেশনগুলোতে ভুল এক্সিট দিয়ে বের হলে বিভ্রান্ত হতে হয়, তাই 北口 সাইন চেনা জরুরি।',
        en: 'North (北) + Exit/Opening (口). Vital for navigating multi-level Japanese train terminals.'
      }
    },

    // 11. 南口
    {
      id: 'l10-minamiguchi',
      kanji: '南口',
      emoji: '🧭',
      strokeCount: 12,
      jlpt: 'N5',
      category: 'read_only',
      readings: {
        onyomi: [
          { kana: 'ナンコウ', romaji: 'nankou' }
        ],
        kunyomi: [
          { kana: 'みなみぐち', romaji: 'minamiguchi' }
        ]
      },
      meanings: {
        en: 'South exit, South gate (of train station)',
        bn: 'দক্ষিণ তোরণ, দক্ষিণ এক্সিট'
      },
      vocab: [
        {
          kanji: '南口',
          kana: 'みなみぐち',
          romaji: 'minamiguchi',
          meaningEn: 'South exit (station)',
          meaningBn: 'দক্ষিণ তোরণ / দক্ষিণ এক্সিট',
          tag: 'Station N5'
        },
        {
          kanji: '南',
          kana: 'みなみ',
          romaji: 'minami',
          meaningEn: 'south',
          meaningBn: 'দক্ষিণ দিক',
          tag: 'Direction N5'
        },
        {
          kanji: '東南アジア',
          kana: 'とうなんアジア',
          romaji: 'Tounan Ajia',
          meaningEn: 'Southeast Asia',
          meaningBn: 'দক্ষিণ-পূর্ব এশিয়া',
          tag: 'World N4'
        },
        {
          kanji: '南米',
          kana: 'なんべい',
          romaji: 'Nanbei',
          meaningEn: 'South America',
          meaningBn: 'দক্ষিণ আমেরিকা',
          tag: 'World N4'
        },
        {
          kanji: '南極',
          kana: 'なんきょく',
          romaji: 'nankyoku',
          meaningEn: 'South Pole, Antarctica',
          meaningBn: 'দক্ষিণ মেরু / অ্যান্টার্কটিকা',
          tag: 'Nature'
        },
        {
          kanji: '南西',
          kana: 'なんせい',
          romaji: 'nansei',
          meaningEn: 'southwest',
          meaningBn: 'দক্ষিণ-পশ্চিম দিক',
          tag: 'Direction N4'
        }
      ],
      sentences: [
        {
          ja: '友人と池袋駅の南口改札前で午後三時に待ち合わせしました。',
          romaji: 'Yuujin to Ikebukuro-eki no minamiguchi kaisatsumae de gogo sanji ni machiawase shimashita.',
          meaningEn: 'I arranged to meet my friend in front of Ikebukuro Station\'s South ticket gate at 3:00 PM.',
          meaningBn: 'ইকেবুকুরো স্টেশনের দক্ষিণ টিকিট গেটের সামনে বিকেল ৩টায় বন্ধুর সাথে দেখা করার সময় ঠিক করেছি।'
        },
        {
          ja: '南口を出るとバスターミナルがあり、空港行きのバスに乗れます。',
          romaji: 'Minamiguchi o deru to basu taaminaru ga ari, kuukou yuki no basu ni noremasu.',
          meaningEn: 'Exiting the South gate leads to a bus terminal where you can board airport-bound buses.',
          meaningBn: 'দক্ষিণ তোরণ দিয়ে বের হলে একটি বাস টার্মিনাল পাওয়া যায়, যেখান থেকে বিমানবন্দরগামী বাসে ওঠা যায়।'
        },
        {
          ja: '駅の南口には大型家電量販店と百貨店が直結しています。',
          romaji: 'Eki no minamiguchi niwa oogata kaden ryouhanten to hyakkaten ga chokketsu shite imasu.',
          meaningEn: 'A major electronics store and department store are directly connected to the South exit.',
          meaningBn: 'স্টেশনের দক্ষিণ গেটের সাথে সুবিশাল ইলেকট্রনিক্স শপ ও ডিপার্টমেন্টাল স্টোর সংযুক্ত রয়েছে।'
        }
      ],
      tamagoTip: {
        bn: 'গাছের ডালে ঝুলন্ত বাদ্যযন্ত্রের মতো দক্ষিণ দিক (南) + তোরণ (口)। স্টেশন থেকে বের হওয়ার দিকনির্দেশক সাইন।',
        en: 'South (南) + Exit (口). Standard signage indicator for meeting locations at major Japanese stations.'
      }
    },

    // 12. 西口
    {
      id: 'l10-nishiguchi',
      kanji: '西口',
      emoji: '🧭',
      strokeCount: 9,
      jlpt: 'N5',
      category: 'read_only',
      readings: {
        onyomi: [
          { kana: 'セイコウ', romaji: 'seikou' }
        ],
        kunyomi: [
          { kana: 'にしぐち', romaji: 'nishiguchi' }
        ]
      },
      meanings: {
        en: 'West exit, West gate (of train station)',
        bn: 'পশ্চিম তোরণ, পশ্চিম এক্সিট'
      },
      vocab: [
        {
          kanji: '西口',
          kana: 'にしぐち',
          romaji: 'nishiguchi',
          meaningEn: 'West exit (station)',
          meaningBn: 'পশ্চিম তোরণ / পশ্চিম এক্সিট',
          tag: 'Station N5'
        },
        {
          kanji: '西',
          kana: 'にし',
          romaji: 'nishi',
          meaningEn: 'west',
          meaningBn: 'পশ্চিম দিক',
          tag: 'Direction N5'
        },
        {
          kanji: '西洋',
          kana: 'せいよう',
          romaji: 'seiyou',
          meaningEn: 'the West, Western countries, the Occident',
          meaningBn: 'পাশ্চাত্য / পশ্চিমাদেশ',
          tag: 'Culture N4'
        },
        {
          kanji: '関西',
          kana: 'かんさい',
          romaji: 'Kansai',
          meaningEn: 'Kansai region (Osaka, Kyoto, Kobe)',
          meaningBn: 'কানসাই অঞ্চল (ওসাকা, কিয়োটো ও কোবে)',
          tag: 'Place N4'
        },
        {
          kanji: '東西',
          kana: 'とうざい',
          romaji: 'touzai',
          meaningEn: 'east and west',
          meaningBn: 'পূর্ব-পশ্চিম',
          tag: 'Direction N4'
        },
        {
          kanji: '洋食',
          kana: 'ようしょく',
          romaji: 'youshoku',
          meaningEn: 'Western-style food',
          meaningBn: 'পাশ্চাত্যের খাবার',
          tag: 'Food N4'
        }
      ],
      sentences: [
        {
          ja: '横浜駅の西口を出て、すぐ左側にあるスターバックスで待ちましょう。',
          romaji: 'Yokohama-eki no nishiguchi o dete, sugu hidarigawa ni aru Sutaabakkusu de machimashou.',
          meaningEn: 'Let\'s exit the West gate of Yokohama Station and wait at the Starbucks right on the left.',
          meaningBn: 'ইয়োকোহামা স্টেশনের পশ্চিম তোরণ দিয়ে বের হয়ে বাম পাশের স্টারবাক্সে অপেক্ষা করা যাক।'
        },
        {
          ja: '新宿駅西口には東京都庁の高層ビル群がそびえ立っています。',
          romaji: 'Shinjuku-eki nishiguchi niwa Toukyou Tochou no kousou birugun ga sobietatte imasu.',
          meaningEn: 'Around Shinjuku Station West exit, the Tokyo Metropolitan Government skyscraper complex towers high.',
          meaningBn: 'শিনজুকু স্টেশন পশ্চিম তোরণে টোকিও মেট্রোপলিটন গভর্নমেন্টের আকাশচুম্বী ভবনগুলো অবস্থিত।'
        },
        {
          ja: '西口ロータリーから区役所行きの路線バスが出発します。',
          romaji: 'Nishiguchi rootarii kara kuyakusho yuki no rosen basu ga shuppatsu shimasu.',
          meaningEn: 'The local route bus bound for the ward office departs from the West exit rotary.',
          meaningBn: 'পশ্চিম এক্সিটের বাস চত্বর থেকে ওয়ার্ড অফিসগামী লোকাল বাস ছেড়ে যায়।'
        }
      ],
      tamagoTip: {
        bn: 'পাখির নীড় যেখানে সূর্য অস্ত যায় (西) + এক্সিট (口)। স্টেশনের ৪টি প্রধান দিকের অন্যতম জরুরি এক্সিট 西口।',
        en: 'West (西) + Exit (口). Common landmark indicator for station meeting coordinates.'
      }
    },

    // 13. 銀行
    {
      id: 'l10-ginkou',
      kanji: '銀行',
      emoji: '🏦',
      strokeCount: 20,
      jlpt: 'N5',
      category: 'read_only',
      readings: {
        onyomi: [
          { kana: 'ギンコウ', romaji: 'ginkou' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'bank, financial institution',
        bn: 'ব্যাংক, আর্থিক প্রতিষ্ঠান'
      },
      vocab: [
        {
          kanji: '銀行',
          kana: 'ぎんこう',
          romaji: 'ginkou',
          meaningEn: 'bank',
          meaningBn: 'ব্যাংক',
          tag: 'Finance N5'
        },
        {
          kanji: '銀行員',
          kana: 'ぎんこういん',
          romaji: 'ginkouin',
          meaningEn: 'bank employee, banker',
          meaningBn: 'ব্যাংক কর্মকর্তা',
          tag: 'Job N5'
        },
        {
          kanji: '銀',
          kana: 'ぎん',
          romaji: 'gin',
          meaningEn: 'silver',
          meaningBn: 'রূপা / রৌপ্য',
          tag: 'Material N4'
        },
        {
          kanji: '口座',
          kana: 'こうざ',
          romaji: 'kouza',
          meaningEn: 'bank account',
          meaningBn: 'ব্যাংক অ্যাকাউন্ট / হিসাব',
          tag: 'Finance N4'
        },
        {
          kanji: 'ゆうちょ銀行',
          kana: 'ゆうちょぎんこう',
          romaji: 'Yuucho Ginkou',
          meaningEn: 'Japan Post Bank',
          meaningBn: 'জাপান পোস্ট ব্যাংক (ইউচো)',
          tag: 'Finance N4'
        },
        {
          kanji: '銀色',
          kana: 'ぎんいろ',
          romaji: 'gin\'iro',
          meaningEn: 'silver color',
          meaningBn: 'রুপালি রং',
          tag: 'Color N4'
        }
      ],
      sentences: [
        {
          ja: '日本に到着した翌週に、ゆうちょ銀行で口座を作りました。',
          romaji: 'Nihon ni touchaku shita yokushuu ni, Yuucho Ginkou de kouza o tsukurimashita.',
          meaningEn: 'The week after arriving in Japan, I opened an account at Japan Post Bank.',
          meaningBn: 'জাপানে পৌঁছানোর পরের সপ্তাহে আমি জাপান পোস্ট ব্যাংকে (ইউচো) অ্যাকাউন্ট খুলেছি।'
        },
        {
          ja: '銀行の窓口は午後三時に閉まるので、急いで行ってください。',
          romaji: 'Ginkou no madoguchi wa gogo sanji ni shimaru node, isoide itte kudasai.',
          meaningEn: 'Bank teller counters close at 3:00 PM, so please hurry.',
          meaningBn: 'ব্যাংকের সেবা কাউন্টার বিকেল ৩টায় বন্ধ হয়ে যায়, তাই তাড়াতাড়ি যান।'
        },
        {
          ja: '駅前の三井住友銀行のATMでお金を引き出しました。',
          romaji: 'Ekimae no Mitsui Sumitomo Ginkou no ATM de okane o hikidashimashita.',
          meaningEn: 'I withdrew cash from the SMBC bank ATM in front of the station.',
          meaningBn: 'স্টেশনের সামনের ব্যাংকের এটিএম বুথ থেকে আমি টাকা তুলেছি।'
        }
      ],
      tamagoTip: {
        bn: 'রূপার মুদ্রা (銀) লেনদেন করার ব্যবসা প্রতিষ্ঠান (行)। জাপানে ব্যাংকগুলো ৩টায় বন্ধ হলেও ATM সার্বক্ষণিক থাকে।',
        en: 'Silver (銀) + Commerce house (行). Indispensable for banking, opening accounts, and salary receipt.'
      }
    },

    // 14. 地下鉄
    {
      id: 'l10-chikatetsu',
      kanji: '地下鉄',
      emoji: '🚇',
      strokeCount: 19,
      jlpt: 'N5',
      category: 'read_only',
      readings: {
        onyomi: [
          { kana: 'チカテツ', romaji: 'chikatetsu' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'subway, underground metro railway',
        bn: 'পাতালরেল, সাবওয়ে, ভূগর্ভস্থ মেট্রো'
      },
      vocab: [
        {
          kanji: '地下鉄',
          kana: 'ちかてつ',
          romaji: 'chikatetsu',
          meaningEn: 'subway, metro',
          meaningBn: 'পাতালরেল / সাবওয়ে',
          tag: 'Transport N5'
        },
        {
          kanji: '地下',
          kana: 'ちか',
          romaji: 'chika',
          meaningEn: 'underground, basement',
          meaningBn: 'ভূগর্ভস্থ / মাটির নিচে',
          tag: 'Place N5'
        },
        {
          kanji: '鉄道',
          kana: 'てつどう',
          romaji: 'tetsudou',
          meaningEn: 'railway, railroad',
          meaningBn: 'রেলপথ / রেললাইন',
          tag: 'Transport N4'
        },
        {
          kanji: '私鉄',
          kana: 'してつ',
          romaji: 'shitetsu',
          meaningEn: 'private railway line',
          meaningBn: 'বেসরকারি রেললাইন',
          tag: 'Transport N4'
        },
        {
          kanji: '鉄',
          kana: 'てつ',
          romaji: 'tetsu',
          meaningEn: 'iron, steel',
          meaningBn: 'লোহা / ইস্পাত',
          tag: 'Material N4'
        },
        {
          kanji: '地下鉄の路線図',
          kana: 'ちかてつのろせんず',
          romaji: 'chikatetsu no rosenzu',
          meaningEn: 'subway route map',
          meaningBn: 'পাতালরেলের রুট ম্যাপ',
          tag: 'Transport N4'
        }
      ],
      sentences: [
        {
          ja: '東京メトロの地下鉄に乗って銀座まで移動しました。',
          romaji: 'Toukyou Metoro no chikatetsu ni notte Ginza made idou shimashita.',
          meaningEn: 'I rode the Tokyo Metro subway to travel to Ginza.',
          meaningBn: 'টোকিও মেট্রোর পাতালরেলে চড়ে আমি গিনজা পর্যন্ত গিয়েছি।'
        },
        {
          ja: '地下鉄は雨や雪の日でも遅れが少なくて非常に信頼できます。',
          romaji: 'Chikatetsu wa ame ya yuki no hi demo okure ga sukunakute hijou ni shinrai dekimasu.',
          meaningEn: 'Even on rainy or snowy days, subways rarely experience delays and are extremely reliable.',
          meaningBn: 'বৃষ্টি বা বরফ পড়ার দিনেও পাতালরেল খুব কম বিলম্বিত হয় এবং এটি ভীষণ নির্ভরযোগ্য।'
        },
        {
          ja: '地下鉄の入口にはアルファベットと駅番号が書かれています。',
          romaji: 'Chikatetsu no iriguchi niwa arufabetto to ekibangou ga kakarete imasu.',
          meaningEn: 'Alphabet letters and station numbering are indicated at the subway entrances.',
          meaningBn: 'পাতালরেলের প্রবেশমুখে ইংরেজি বর্ণ এবং স্টেশন নম্বর স্পষ্টভাবে উল্লেখ থাকে।'
        }
      ],
      tamagoTip: {
        bn: 'মাটির নিচে (地下) লোহার গাড়ি (鉄)。 টোকিও ও ওসাকার দৈনন্দিন যাতায়াতের প্রাণ হলো 地下鉄।',
        en: 'Underground (地下) + Iron rail (鉄). The backbone of Japanese urban public transit.'
      }
    },

    // --- VISUAL RECOGNITION KANJI (見て、わかる - 1 item) ---
    // 15. 駐車場
    {
      id: 'l10-chuushajou',
      kanji: '駐車場',
      emoji: '🅿️',
      strokeCount: 31,
      jlpt: 'N4',
      category: 'visual_recognition',
      readings: {
        onyomi: [
          { kana: 'チュウシャジョウ', romaji: 'chuushajou' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'parking lot, parking space, car park',
        bn: 'গাড়ি পার্কিংয়ের স্থান, পার্কিং লট'
      },
      vocab: [
        {
          kanji: '駐車場',
          kana: 'ちゅうしゃじょう',
          romaji: 'chuushajou',
          meaningEn: 'parking lot, parking area',
          meaningBn: 'গাড়ি পার্কিংয়ের স্থান',
          tag: 'Place N4'
        },
        {
          kanji: '駐輪場',
          kana: 'ちゅうりんじょう',
          romaji: 'chuurinjou',
          meaningEn: 'bicycle / motorcycle parking lot',
          meaningBn: 'সাইকেল বা বাইক পার্কিংয়ের স্থান',
          tag: 'Place N4'
        },
        {
          kanji: '駐車違反',
          kana: 'ちゅうしゃいはん',
          romaji: 'chuusha ihan',
          meaningEn: 'parking violation / illegal parking',
          meaningBn: 'অবৈধ গাড়ি পার্কিংয়ের অপরাধ',
          tag: 'Law N4'
        },
        {
          kanji: '場所',
          kana: 'ばしょ',
          romaji: 'basho',
          meaningEn: 'place, location, spot',
          meaningBn: 'জায়গা / স্থান',
          tag: 'Daily N5'
        },
        {
          kanji: '満車',
          kana: 'まんしゃ',
          romaji: 'mansha',
          meaningEn: 'parking full (no vacant lots)',
          meaningBn: 'পার্কিং পূর্ণ (জায়গা খালি নেই)',
          tag: 'Sign N4'
        },
        {
          kanji: '空車',
          kana: 'くうしゃ',
          romaji: 'kuusha',
          meaningEn: 'parking vacant / empty taxi',
          meaningBn: 'পার্কিং খালি / যাত্রীহীন ট্যাক্সি',
          tag: 'Sign N4'
        }
      ],
      sentences: [
        {
          ja: 'スーパーの屋上に広い無料駐車場が完備されています。',
          romaji: 'Suupaa no okujou ni hiroi muryou chuushajou ga kanbi sarete imasu.',
          meaningEn: 'A spacious free parking lot is equipped on the supermarket rooftop.',
          meaningBn: 'সুপারমার্কেটের ছাদে একটি সুবিশাল বিনামূল্যে গাড়ি পার্কিংয়ের ব্যবস্থা রয়েছে।'
        },
        {
          ja: '駐車場の入口に「満車」と赤く表示されていたので別の場所を探しました。',
          romaji: 'Chuushajou no iriguchi ni "mansha" to akaku hyouji sarete ita node betsu no basho o sagashimashita.',
          meaningEn: 'Because "Full" was displayed in red at the parking entrance, I searched for another spot.',
          meaningBn: 'পার্কিংয়ের প্রবেশমুখে লাল অক্ষরে "ফুল (満車)" লেখা থাকায় আমি অন্য পার্কিং খুঁজলাম।'
        },
        {
          ja: '日本では路上駐車が厳しく取り締まられるため、必ずコインパーキングに止めます。',
          romaji: 'Nihon dewa rojou chuusha ga kibishiku torishimarareru tame, kanarazu koin paakingu ni tomemasu.',
          meaningEn: 'Because street parking is strictly penalized in Japan, always park in paid coin parking.',
          meaningBn: 'জাপানে রাস্তার পাশে অবৈধ পার্কিং কঠোরভাবে জরিমানা করা হয়, তাই পেইড পার্কিংয়ে গাড়ি রাখা আবশ্যক।'
        }
      ],
      tamagoTip: {
        bn: '駐 (থামানো) + 車 (গাড়ি) + 場 (স্থান)। প্রবেশদ্বারে "空" (খালি) অথবা "満" (পূর্ণ) নিওন বাতি দেখে গাড়ি ঢোকাতে হয়।',
        en: 'Park (駐) + Car (車) + Place (場). Look for "空" (Vacant) or "満" (Full) signs at entrances.'
      }
    }
  ]
};
