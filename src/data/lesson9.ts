import { Lesson } from '../types/kanji';

export const lesson9: Lesson = {
  id: 9,
  number: 9,
  titleJa: '好きなこと',
  titleRomaji: 'Suki na koto',
  titleBn: 'পছন্দের বিষয় ও বিনোদন (শখ, গান, সিনেমা, ভ্রমণ ও সাগর)',
  titleEn: 'Things I Like (Hobbies, Music, Movies, Travel & Overseas)',
  descriptionBn: 'নিজের শখ ও ভালো লাগার জগৎ (好, 歌, 音, 楽, 車, 映, 画, 旅, 海, 外) এবং বিনোদন ও সাহিত্যের চেনা উপাদান যেমন ম্যাগাজিন (雑誌), কাঞ্জি (漢字) ও বইয়ের দোকান (書店)।',
  descriptionEn: 'Essential Kanji for expressing personal interests, leisure activities, music (音楽), movies (映画), driving (車), travel (旅行), overseas (海外), and cultural items like magazines (雑誌), kanji (漢字), and bookstores (書店).',
  kanjiList: [
    // --- MAIN KANJI (10) ---
    // 1. 好
    {
      id: 'l9-suki',
      kanji: '好',
      emoji: '💖',
      strokeCount: 6,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'コウ', romaji: 'kou' }
        ],
        kunyomi: [
          { kana: 'す・き', romaji: 'su-ki' },
          { kana: 'この・む', romaji: 'kono-mu' }
        ]
      },
      meanings: {
        en: 'like, fond of, favorite, pleasing',
        bn: 'পছন্দ, ভালো লাগা, প্রিয়'
      },
      vocab: [
        {
          kanji: '好き',
          kana: 'すき',
          romaji: 'suki',
          meaningEn: 'like, fond of',
          meaningBn: 'পছন্দ / ভালো লাগা',
          tag: 'Daily N5'
        },
        {
          kanji: '大好き',
          kana: 'だいすき',
          romaji: 'daisuki',
          meaningEn: 'love, favorite, adore',
          meaningBn: 'খুব প্রিয় / ভীষণ পছন্দ',
          tag: 'Daily N5'
        },
        {
          kanji: '好物',
          kana: 'こうぶつ',
          romaji: 'koubutsu',
          meaningEn: 'favorite food / dish',
          meaningBn: 'সবচেয়ে পছন্দের খাবার',
          tag: 'Food N4'
        },
        {
          kanji: '格好',
          kana: 'かっこう',
          romaji: 'kakkou',
          meaningEn: 'appearance, shape, style',
          meaningBn: 'চেহারা / বেশভূষা / স্টাইল',
          tag: 'Daily N4'
        },
        {
          kanji: '好み',
          kana: 'このみ',
          romaji: 'konomi',
          meaningEn: 'taste, preference, liking',
          meaningBn: 'পছন্দ / ব্যক্তিগত রুচি',
          tag: 'Daily N4'
        },
        {
          kanji: '友好',
          kana: 'ゆうこう',
          romaji: 'yuukou',
          meaningEn: 'friendship, friendly relations',
          meaningBn: 'বন্ধুত্বপূর্ণ সম্পর্ক / সৌহার্দ্য',
          tag: 'Society N4'
        }
      ],
      sentences: [
        {
          ja: '休日は家で映画を見たり音楽を聴いたりするのが好きです。',
          romaji: 'Kyuujitsu wa ie de eiga o mitari ongaku o kiitari suru no ga suki desu.',
          meaningEn: 'On weekends, I like watching movies and listening to music at home.',
          meaningBn: 'ছুটির দিনে বাসায় সিনেমা দেখা এবং গান শোনা আমার পছন্দ।'
        },
        {
          ja: '日本料理の中で何が一番好きですか。ー寿司が大好きです。',
          romaji: 'Nihon ryouri no naka de nani ga ichiban suki desu ka. - Sushi ga daisuki desu.',
          meaningEn: 'What do you like best among Japanese food? - I love sushi very much.',
          meaningBn: 'জাপানি খাবারের মধ্যে আপনার কোনটা সবচেয়ে বেশি পছন্দ? — সুশি আমার দারুণ প্রিয়।'
        },
        {
          ja: '彼のスーツ姿はとても格好いいです。',
          romaji: 'Kare no suutsu sugata wa totemo kakkoii desu.',
          meaningEn: 'His look in a suit is very stylish and cool.',
          meaningBn: 'স্যুট পরিহিত অবস্থায় তাকে দেখতে দারুণ স্মার্ট লাগছে।'
        }
      ],
      tamagoTip: {
        bn: 'নারী (女) তার কোলজুড়ে সন্তানকে (子) ভালোবেসে আগলে রাখা। ভালোবাসা ও পছন্দ বোঝাতে 好 (すき)।',
        en: 'A woman/mother (女) embracing her beloved child (子). The universal symbol for liking and affection.'
      }
    },

    // 2. 歌
    {
      id: 'l9-uta',
      kanji: '歌',
      emoji: '🎤',
      strokeCount: 14,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'カ', romaji: 'ka' }
        ],
        kunyomi: [
          { kana: 'うた', romaji: 'uta' },
          { kana: 'うた・う', romaji: 'uta-u' }
        ]
      },
      meanings: {
        en: 'song, poem, sing',
        bn: 'গান, সঙ্গীত, গান গাওয়া'
      },
      vocab: [
        {
          kanji: '歌',
          kana: 'うた',
          romaji: 'uta',
          meaningEn: 'song',
          meaningBn: 'গান',
          tag: 'Music N5'
        },
        {
          kanji: '歌う',
          kana: 'うたう',
          romaji: 'utau',
          meaningEn: 'to sing',
          meaningBn: 'গান গাওয়া',
          tag: 'Verb N5'
        },
        {
          kanji: '歌手',
          kana: 'かしゅ',
          romaji: 'kashu',
          meaningEn: 'singer, vocalist',
          meaningBn: 'সংগীতশিল্পী / গায়ক-গায়িকা',
          tag: 'Career N5'
        },
        {
          kanji: '校歌',
          kana: 'こうか',
          romaji: 'kouka',
          meaningEn: 'school anthem / song',
          meaningBn: 'বিদ্যালয়ের সঙ্গীত / থিম সং',
          tag: 'School N4'
        },
        {
          kanji: '国歌',
          kana: 'こっか',
          romaji: 'kokka',
          meaningEn: 'national anthem',
          meaningBn: 'জাতীয় সংগীত',
          tag: 'Culture N4'
        },
        {
          kanji: '短歌',
          kana: 'たんか',
          romaji: 'tanka',
          meaningEn: 'tanka (classical 31-syllable Japanese poem)',
          meaningBn: 'তানকা (ঐতিহ্যবাহী জাপানি কবিতা)',
          tag: 'Culture'
        }
      ],
      sentences: [
        {
          ja: '友達とカラオケに行って、日本の歌をたくさん歌いました。',
          romaji: 'Tomodachi to karaoke ni itte, Nihon no uta o takusan utaimashita.',
          meaningEn: 'I went to karaoke with friends and sang many Japanese songs.',
          meaningBn: 'বন্ধুদের সাথে কারাওকেতে গিয়ে আমি অনেকগুলো জাপানি গান গেয়েছি।'
        },
        {
          ja: '彼女は世界中で有名な実力派の歌手です。',
          romaji: 'Kanojo wa sekaijuu de yuumei na jitsuryokuha no kashu desu.',
          meaningEn: 'She is a talented singer famous all around the world.',
          meaningBn: 'তিনি বিশ্বজুড়ে পরিচিত একজন দারুণ প্রতিভাধর সংগীতশিল্পী।'
        },
        {
          ja: '式典の初めに全員で起立して国歌を歌いました。',
          romaji: 'Shikiten no hajime ni zen\'in de kiritsu shite kokka o utaimashita.',
          meaningEn: 'At the start of the ceremony, everyone stood up and sang the national anthem.',
          meaningBn: 'অনুষ্ঠানের শুরুতে সবাই উঠে দাঁড়িয়ে জাতীয় সংগীত গেয়েছি।'
        }
      ],
      tamagoTip: {
        bn: 'দুইবার আনন্দধ্বনি (可 + 可) এবং মুখ হা করে শ্বাস নেওয়া (欠)। সুর করে মুখ দিয়ে আনন্দের গান গাওয়া 歌 (うた)।',
        en: 'Repeated cheers (哥) uttered with an open mouth (欠). Singing songs and reciting poetry.'
      }
    },

    // 3. 音
    {
      id: 'l9-oto',
      kanji: '音',
      emoji: '🎵',
      strokeCount: 9,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'オン', romaji: 'on' },
          { kana: 'イン', romaji: 'in' }
        ],
        kunyomi: [
          { kana: 'おと', romaji: 'oto' },
          { kana: 'ね', romaji: 'ne' }
        ]
      },
      meanings: {
        en: 'sound, noise, tone',
        bn: 'শব্দ, সুর, আওয়াজ, সুরতরঙ্গ'
      },
      vocab: [
        {
          kanji: '音',
          kana: 'おと',
          romaji: 'oto',
          meaningEn: 'sound, noise',
          meaningBn: 'শব্দ / আওয়াজ',
          tag: 'Daily N5'
        },
        {
          kanji: '音楽',
          kana: 'おんがく',
          romaji: 'ongaku',
          meaningEn: 'music',
          meaningBn: 'সংগীত / সুর',
          tag: 'Music N5'
        },
        {
          kanji: '足音',
          kana: 'あしおと',
          romaji: 'ashioto',
          meaningEn: 'sound of footsteps',
          meaningBn: 'পায়ের আওয়াজ / পদধ্বনি',
          tag: 'Daily N4'
        },
        {
          kanji: '本音',
          kana: 'ほんね',
          romaji: 'honne',
          meaningEn: 'true feelings, real motive',
          meaningBn: 'মনের ভেতরের আসল কথা',
          tag: 'Culture N4'
        },
        {
          kanji: '発音',
          kana: 'はつおん',
          romaji: 'hatsuon',
          meaningEn: 'pronunciation',
          meaningBn: 'উচ্চারণ',
          tag: 'Language N4'
        },
        {
          kanji: '音量',
          kana: 'おんりょう',
          romaji: 'onryou',
          meaningEn: 'sound volume',
          meaningBn: 'শব্দের ভলিউম / মাত্রা',
          tag: 'Tech N4'
        }
      ],
      sentences: [
        {
          ja: '電車の中でイヤホンを使って静かに音楽を聴きます。',
          romaji: 'Densha no naka de iyahon o tsukatte shizuka ni ongaku o kikimasu.',
          meaningEn: 'Inside the train, I use earphones to quietly listen to music.',
          meaningBn: 'ট্রেনের ভেতর আমি ইয়ারফোন ব্যবহার করে শান্তভাবে গান শুনি।'
        },
        {
          ja: '日本語の「つ」の発音は外国人にとって少し難しいです。',
          romaji: 'Nihongo no "tsu" no hatsuon wa gaikokujin ni totte sukoshi muzukashii desu.',
          meaningEn: 'The pronunciation of Japanese "tsu" is a bit difficult for foreigners.',
          meaningBn: 'জাপানি ভাষার "ৎসু (つ)"-এর উচ্চারণ বিদেশিদের জন্য কিছুটা কঠিন।'
        },
        {
          ja: '外からパトカーの大きなサイレンの音が聞こえます。',
          romaji: 'Soto kara patokaa no ookina sairen no oto ga kikoemasu.',
          meaningEn: 'A loud police car siren sound can be heard from outside.',
          meaningBn: 'বাইরে থেকে পুলিশের গাড়ির তীব্র সাইরেনের শব্দ শোনা যাচ্ছে।'
        }
      ],
      tamagoTip: {
        bn: 'দাঁড়ানো মানুষ (立) ও মুখ (日)। মুখ দিয়ে উচ্চারিত সুরের ধ্বনি। 音楽 (সঙ্গীত) ও 音 (শব্দ)-এর মূল কাঞ্জি।',
        en: 'Standing tall (立) over an open mouth (日). Voice vibration and musical notes.'
      }
    },

    // 4. 楽
    {
      id: 'l9-raku',
      kanji: '楽',
      emoji: '🎉',
      strokeCount: 13,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ガク', romaji: 'gaku' },
          { kana: 'ラク', romaji: 'raku' }
        ],
        kunyomi: [
          { kana: 'たの・しい', romaji: 'tano-shii' },
          { kana: 'たの・しむ', romaji: 'tano-shimu' }
        ]
      },
      meanings: {
        en: 'fun, pleasant, music, comfortable, ease',
        bn: 'আনন্দদায়ক, উপভোগ্য, সংগীত, আরামদায়ক'
      },
      vocab: [
        {
          kanji: '楽しい',
          kana: 'たのしい',
          romaji: 'tanoshii',
          meaningEn: 'fun, enjoyable, pleasant',
          meaningBn: 'আনন্দদায়ক / মজার',
          tag: 'Adj N5'
        },
        {
          kanji: '楽しむ',
          kana: 'たのしむ',
          romaji: 'tanoshimu',
          meaningEn: 'to enjoy, to take pleasure in',
          meaningBn: 'উপভোগ করা / মজা নেওয়া',
          tag: 'Verb N5'
        },
        {
          kanji: '音楽',
          kana: 'おんがく',
          romaji: 'ongaku',
          meaningEn: 'music',
          meaningBn: 'গান / সংগীত',
          tag: 'Music N5'
        },
        {
          kanji: '楽な',
          kana: 'らくな',
          romaji: 'raku na',
          meaningEn: 'easy, comfortable, effortless',
          meaningBn: 'আরামদায়ক / সহজসাধ্য',
          tag: 'Adj N4'
        },
        {
          kanji: '楽器',
          kana: 'がっき',
          romaji: 'gakki',
          meaningEn: 'musical instrument',
          meaningBn: 'বাদ্যযন্ত্র (গিটার, পিয়ানো ইত্যাদি)',
          tag: 'Music N4'
        },
        {
          kanji: '娯楽',
          kana: 'ごらく',
          romaji: 'goraku',
          meaningEn: 'entertainment, pastime, recreation',
          meaningBn: 'বিনোদন / আমোদপ্রমোদ',
          tag: 'Leisure N4'
        }
      ],
      sentences: [
        {
          ja: '先週末の富士山ツアーはとても楽しかったです。',
          romaji: 'Senshuumatsu no Fujisan tsuaa wa totemo tanoshikatta desu.',
          meaningEn: 'The Mount Fuji tour last weekend was very enjoyable.',
          meaningBn: 'গত সাপ্তাহিক ছুটির মাউন্ট ফুজি সফরটি ভীষণ আনন্দের ছিল।'
        },
        {
          ja: '新幹線で行くと乗り換えがなくてとても楽です。',
          romaji: 'Shinkansen de iku to norikae ga nakute totemo raku desu.',
          meaningEn: 'Going by Shinkansen is very comfortable without having to transfer trains.',
          meaningBn: 'শিঙ্কানসেন বুলেট ট্রেনে গেলে কোনো ট্রেন বদল করতে হয় না বলে বেশ আরামদায়ক।'
        },
        {
          ja: '子供の頃からピアノなどの楽器を演奏するのが好きでした。',
          romaji: 'Kodomo no koro kara piano nado no gakki o ensou suru no ga suki deshita.',
          meaningEn: 'Ever since I was a child, I liked playing instruments like the piano.',
          meaningBn: 'ছোটবেলা থেকেই পিয়ানোর মতো বাদ্যযন্ত্র বাজানো আমার ভালো লাগত।'
        }
      ],
      tamagoTip: {
        bn: 'কাঠের (木) ড্রাম বা বাদ্যযন্ত্রের ওপর ঘণ্টা বাজিয়ে সুরের আনন্দ উপভোগ করা। 楽しい (মজার) ও 音楽 (সংগীত)।',
        en: 'Bells mounted upon a wooden stand (木). Joyous rhythm, comfort (楽), and music (音楽).'
      }
    },

    // 5. 車
    {
      id: 'l9-kuruma',
      kanji: '車',
      emoji: '🚗',
      strokeCount: 7,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'シャ', romaji: 'sha' }
        ],
        kunyomi: [
          { kana: 'くるま', romaji: 'kuruma' }
        ]
      },
      meanings: {
        en: 'car, automobile, vehicle, wheel',
        bn: 'গাড়ি, মোটরগাড়ি, চাকা'
      },
      vocab: [
        {
          kanji: '車',
          kana: 'くるま',
          romaji: 'kuruma',
          meaningEn: 'car, automobile',
          meaningBn: 'গাড়ি / মোটরযান',
          tag: 'Vehicle N5'
        },
        {
          kanji: '電車',
          kana: 'でんしゃ',
          romaji: 'densha',
          meaningEn: 'electric train',
          meaningBn: 'ট্রেন / লোকাল ট্রেন',
          tag: 'Transport N5'
        },
        {
          kanji: '自転車',
          kana: 'じてんしゃ',
          romaji: 'jitensha',
          meaningEn: 'bicycle, bike',
          meaningBn: 'বাইসাইকেল',
          tag: 'Vehicle N5'
        },
        {
          kanji: '駐車場',
          kana: 'ちゅうしゃじょう',
          romaji: 'chuushajou',
          meaningEn: 'parking lot, parking garage',
          meaningBn: 'গাড়ি পার্কিংয়ের স্থান',
          tag: 'Place N4'
        },
        {
          kanji: '自動車',
          kana: 'じどうしゃ',
          romaji: 'jidousha',
          meaningEn: 'automobile, motor vehicle',
          meaningBn: 'মোটরগাড়ি',
          tag: 'Transport N5'
        },
        {
          kanji: '車椅子',
          kana: 'くるまいす',
          romaji: 'kurumaisu',
          meaningEn: 'wheelchair',
          meaningBn: 'হুইলচেয়ার',
          tag: 'Daily N4'
        }
      ],
      sentences: [
        {
          ja: '休日に自分の車を運転して海までドライブに行きました。',
          romaji: 'Kyuujitsu ni jibun no kuruma o unten shite umi made doraibu ni ikimashita.',
          meaningEn: 'On my day off, I drove my car to the sea for a drive.',
          meaningBn: 'ছুটির দিনে নিজের গাড়ি চালিয়ে আমি সমুদ্রের পাড়ে ড্রাইভে গিয়েছিলাম।'
        },
        {
          ja: '東京では車よりも電車や地下鉄のほうが便利です。',
          romaji: 'Toukyou dewa kuruma yori mo densha ya chikatetsu no hou ga benri desu.',
          meaningEn: 'In Tokyo, trains and subways are more convenient than cars.',
          meaningBn: 'টোকিওতে ব্যক্তিগত গাড়ির চেয়ে ট্রেন ও পাতালরেল বেশি সুবিধাজনক।'
        },
        {
          ja: '駅前の無料駐輪場に自転車を止めました。',
          romaji: 'Ekimae no muryou chuurinjou ni jitensha o tomemashita.',
          meaningEn: 'I parked my bicycle at the free bicycle parking in front of the station.',
          meaningBn: 'স্টেশনের সামনের ফ্রি সাইকেল পার্কিংয়ে আমি আমার বাইসাইকেল রেখেছি।'
        }
      ],
      tamagoTip: {
        bn: 'উপর থেকে দেখা দুই চাকা ও এক্সেলযুক্ত রথ বা গাড়ি। 電車 (ট্রেন), 自転車 (সাইকেল) ও 駐車場 (পার্কিং)।',
        en: 'Bird\'s-eye view of a chariot axle between two wheels. Foundation for all wheeled transit.'
      }
    },

    // 6. 映
    {
      id: 'l9-ei',
      kanji: '映',
      emoji: '📽️',
      strokeCount: 9,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'エイ', romaji: 'ei' }
        ],
        kunyomi: [
          { kana: 'うつ・る', romaji: 'utsu-ru' },
          { kana: 'うつ・す', romaji: 'utsu-su' },
          { kana: 'は・える', romaji: 'ha-eru' }
        ]
      },
      meanings: {
        en: 'project, reflect, shine, cast shadow',
        bn: 'প্রতিফলিত হওয়া, পর্দায় ফেলা, ছায়া ফেলা'
      },
      vocab: [
        {
          kanji: '映画',
          kana: 'えいが',
          romaji: 'eiga',
          meaningEn: 'movie, film, cinema',
          meaningBn: 'সিনেমা / চলচ্চিত্র',
          tag: 'Culture N5'
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
          kanji: '映る',
          kana: 'うつる',
          romaji: 'utsuru',
          meaningEn: 'to be reflected, to appear on screen',
          meaningBn: 'প্রতিফলিত হওয়া / পর্দায় ফুটে ওঠা',
          tag: 'Verb N4'
        },
        {
          kanji: '映す',
          kana: 'うつす',
          romaji: 'utsusu',
          meaningEn: 'to project, to reflect, to cast',
          meaningBn: 'পর্দায় প্রক্ষেপ করা / ছবি ফেলা',
          tag: 'Verb N4'
        },
        {
          kanji: '上映',
          kana: 'じょうえい',
          romaji: 'jouei',
          meaningEn: 'film screening, showing',
          meaningBn: 'সিনেমা প্রদর্শনী / শো',
          tag: 'Leisure N4'
        },
        {
          kanji: '映像',
          kana: 'えいぞう',
          romaji: 'eizou',
          meaningEn: 'video, footage, visual image',
          meaningBn: 'ভিডিও ফুটেজ / চিত্ররূপ',
          tag: 'Tech N4'
        }
      ],
      sentences: [
        {
          ja: '新宿の大きな映画館で最新のアニメ映画を見ました。',
          romaji: 'Shinjuku no ookina eigakan de saishin no anime eiga o mimashita.',
          meaningEn: 'I watched the latest anime movie at a large cinema in Shinjuku.',
          meaningBn: 'শিনজুকুর বড় একটি সিনেমা হলে আমি নতুন মুক্তি পাওয়া অ্যানিমে মুভি দেখেছি।'
        },
        {
          ja: '鏡に映った自分の顔を見て髪を整えました。',
          romaji: 'Kagami ni utsutta jibun no kao o mite kami o totonoemashita.',
          meaningEn: 'Looking at my face reflected in the mirror, I fixed my hair.',
          meaningBn: 'আয়নায় প্রতিফলিত নিজের মুখ দেখে আমি চুল পরিপাটি করে নিয়েছি।'
        },
        {
          ja: 'この映画は今週金曜日から全国の劇場で上映されます。',
          romaji: 'Kono eiga wa konshuu kin\'youbi kara zenkoku no gekijou de jouei saremasu.',
          meaningEn: 'This movie will be screened in theaters nationwide starting this Friday.',
          meaningBn: 'এই সিনেমাটি এ সপ্তাহের শুক্রবার থেকে সারা দেশের প্রেক্ষাগৃহে প্রদর্শিত হবে।'
        }
      ],
      tamagoTip: {
        bn: 'সূর্য (日) এবং কেন্দ্রীয় অংশ (央)। সূর্যালোকে কোনো কিছুর ছবি উজ্জ্বলভাবে পর্দায় প্রতিফলিত করা। 映画 (সিনেমা)।',
        en: 'Sunlight (日) shining in the center (央) to cast a projection. Essential for movies (映画).'
      }
    },

    // 7. 画
    {
      id: 'l9-ga',
      kanji: '画',
      emoji: '🖼️',
      strokeCount: 8,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ガ', romaji: 'ga' },
          { kana: 'カク', romaji: 'kaku' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'picture, drawing, stroke, screen, plan',
        bn: 'ছবি, চিত্রকর্ম, দাগ, পরিকল্পনা'
      },
      vocab: [
        {
          kanji: '映画',
          kana: 'えいが',
          romaji: 'eiga',
          meaningEn: 'movie, film',
          meaningBn: 'চলচ্চিত্র / সিনেমা',
          tag: 'Culture N5'
        },
        {
          kanji: '画家',
          kana: 'がか',
          romaji: 'gaka',
          meaningEn: 'painter, artist',
          meaningBn: 'চিত্রশিল্পী / পেইন্টার',
          tag: 'Career N5'
        },
        {
          kanji: '画面',
          kana: 'がめん',
          romaji: 'gamen',
          meaningEn: 'screen (phone, TV, monitor)',
          meaningBn: 'পর্দা / স্ক্রিন',
          tag: 'Tech N4'
        },
        {
          kanji: '計画',
          kana: 'けいかく',
          romaji: 'keikaku',
          meaningEn: 'plan, project, schedule',
          meaningBn: 'পরিকল্পনা / প্ল্যান',
          tag: 'Daily N4'
        },
        {
          kanji: '漫画',
          kana: 'まんが',
          romaji: 'manga',
          meaningEn: 'manga, Japanese comic',
          meaningBn: 'মাঙ্গা (জাপানি কমিকস)',
          tag: 'Culture N4'
        },
        {
          kanji: '画数',
          kana: 'かくすう',
          romaji: 'kakusuu',
          meaningEn: 'kanji stroke count',
          meaningBn: 'কাঞ্জির স্ট্রোকের সংখ্যা',
          tag: 'Study N4'
        }
      ],
      sentences: [
        {
          ja: 'スマートフォンの画面が割れてしまったので修理に出しました。',
          romaji: 'Sumaatofon no gamen ga warete shimatta node shuuri ni dashimashita.',
          meaningEn: 'Because my smartphone screen cracked, I sent it for repair.',
          meaningBn: 'স্মার্টফোনের স্ক্রিন ফেটে যাওয়ায় আমি এটি মেরামতের জন্য দিয়েছি।'
        },
        {
          ja: '夏休みに北海道へ行く旅行の計画を立てています。',
          romaji: 'Natsuyasumi ni Hokkaidou e iku ryokou no keikaku o tatete imasu.',
          meaningEn: 'I am making travel plans to go to Hokkaido during summer vacation.',
          meaningBn: 'গ্রীষ্মের ছুটিতে হোক্কাইডো যাওয়ার ভ্রমণ পরিকল্পনা করছি।'
        },
        {
          ja: '日本の漫画は海外の若者の間でも非常に人気があります。',
          romaji: 'Nihon no manga wa kaigai no wakamono no aida de mo hijou ni ninki ga arimasu.',
          meaningEn: 'Japanese manga is extremely popular among young people overseas as well.',
          meaningBn: 'জাপানি মাঙ্গা বিদেশের তরুণ প্রজন্মের কাছেও অত্যন্ত জনপ্রিয়।'
        }
      ],
      tamagoTip: {
        bn: 'একটি কলম বা তুলি দিয়ে সীমানা এঁকে চিত্র বা প্ল্যান তৈরি করা। 映画 (সিনেমা), 画面 (স্ক্রিন) এবং 計画 (পরিকল্পনা)।',
        en: 'A brush drafting a bordered plot or sketch. Core for movies, screens, and planning.'
      }
    },

    // 8. 旅
    {
      id: 'l9-tabi',
      kanji: '旅',
      emoji: '🧳',
      strokeCount: 10,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'リョ', romaji: 'ryo' }
        ],
        kunyomi: [
          { kana: 'たび', romaji: 'tabi' }
        ]
      },
      meanings: {
        en: 'trip, travel, journey, voyage',
        bn: 'ভ্রমণ, সফর, পর্যটন'
      },
      vocab: [
        {
          kanji: '旅行',
          kana: 'りょこう',
          romaji: 'ryokou',
          meaningEn: 'travel, trip, tour',
          meaningBn: 'ভ্রমণ / ট্যুর',
          tag: 'Travel N5'
        },
        {
          kanji: '旅',
          kana: 'たび',
          romaji: 'tabi',
          meaningEn: 'journey, trip, voyage',
          meaningBn: 'সফর / ভ্রমণ',
          tag: 'Travel N4'
        },
        {
          kanji: '旅行社',
          kana: 'りょこうしゃ',
          romaji: 'ryokousha',
          meaningEn: 'travel agency',
          meaningBn: 'ট্রাভেল এজেন্সি',
          tag: 'Business N4'
        },
        {
          kanji: '一人旅',
          kana: 'ひとりたび',
          romaji: 'hitoritabi',
          meaningEn: 'solo travel, traveling alone',
          meaningBn: 'একা একা ভ্রমণ (সোলো ট্রাভেল)',
          tag: 'Travel N4'
        },
        {
          kanji: '旅館',
          kana: 'りょかん',
          romaji: 'ryokan',
          meaningEn: 'traditional Japanese inn',
          meaningBn: 'রিওকান (ঐতিহ্যবাহী জাপানি হোটেল)',
          tag: 'Place N4'
        },
        {
          kanji: '旅費',
          kana: 'りょひ',
          romaji: 'ryohi',
          meaningEn: 'travel expenses',
          meaningBn: 'ভ্রমণ ব্যয় / যাতায়াত খরচ',
          tag: 'Finance N4'
        }
      ],
      sentences: [
        {
          ja: 'ゴールデンウィークに京都へ二泊三日の旅行に行きます。',
          romaji: 'Gooruden Wiiku ni Kyouto e nihaku mikka no ryokou ni ikimasu.',
          meaningEn: 'During Golden Week, I will go on a 3-day, 2-night trip to Kyoto.',
          meaningBn: 'গোল্ডেন উইকের ছুটিতে আমি কিয়োটোতে তিন দিন দুই রাতের ভ্রমণে যাব।'
        },
        {
          ja: '温泉のある有名な旅館に泊まって美味しい和食を食べました。',
          romaji: 'Onsen no aru yuumei na ryokan ni tomatte oishii washoku o tabemashita.',
          meaningEn: 'I stayed at a famous traditional inn with hot springs and ate delicious Japanese cuisine.',
          meaningBn: 'গরম পানির ঝরনাযুক্ত ঐতিহ্যবাহী রিওকানে রাত কাটিয়ে সুস্বাদু জাপানি খাবার খেয়েছি।'
        },
        {
          ja: 'いつか日本全国を巡る一人旅をしてみたいです。',
          romaji: 'Itsuka Nihon zenkoku o meguru hitoritabi o shite mitai desu.',
          meaningEn: 'Someday I want to try solo traveling all across Japan.',
          meaningBn: 'একদিন পুরো জাপান ঘুরে দেখার মতো একাকী ভ্রমণ করতে চাই।'
        }
      ],
      tamagoTip: {
        bn: 'পতাকা (方) নিয়ে একসঙ্গে মার্চ করে দূরে অভিযানে বের হওয়া দলটি। 旅行 (ভ্রমণ) ও 旅館 (জাপানি ইন)।',
        en: 'Troops marching under an expedition banner (方). Represents journeys, travel, and inns (旅館).'
      }
    },

    // 9. 海
    {
      id: 'l9-umi',
      kanji: '海',
      emoji: '🌊',
      strokeCount: 9,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'カイ', romaji: 'kai' }
        ],
        kunyomi: [
          { kana: 'うみ', romaji: 'umi' }
        ]
      },
      meanings: {
        en: 'sea, ocean, beach',
        bn: 'সমুদ্র, সাগর, উপকূল'
      },
      vocab: [
        {
          kanji: '海',
          kana: 'うみ',
          romaji: 'umi',
          meaningEn: 'sea, ocean',
          meaningBn: 'সমুদ্র / সাগর',
          tag: 'Nature N5'
        },
        {
          kanji: '海外',
          kana: 'かいがい',
          romaji: 'kaigai',
          meaningEn: 'overseas, abroad, foreign countries',
          meaningBn: 'বিদেশ / সাগরের ওপারে',
          tag: 'Travel N5'
        },
        {
          kanji: '海岸',
          kana: 'かいがん',
          romaji: 'kaigan',
          meaningEn: 'coast, seashore, beach',
          meaningBn: 'সমুদ্রতীর / সৈকত',
          tag: 'Nature N4'
        },
        {
          kanji: '海水浴',
          kana: 'かいすいよく',
          romaji: 'kaisuiyoku',
          meaningEn: 'sea bathing, swimming in the ocean',
          meaningBn: 'সাগরের পানিতে সাঁতার কাটা',
          tag: 'Leisure N4'
        },
        {
          kanji: '海鮮',
          kana: 'かいせん',
          romaji: 'kaisen',
          meaningEn: 'fresh seafood',
          meaningBn: 'তাজা সামুদ্রিক খাবার',
          tag: 'Food N4'
        },
        {
          kanji: '日本海',
          kana: 'にほんかい',
          romaji: 'Nihonkai',
          meaningEn: 'Sea of Japan',
          meaningBn: 'জাপান সাগর',
          tag: 'Geography'
        }
      ],
      sentences: [
        {
          ja: '夏休みに友達と一緒に湘南の海へ泳ぎに行きました。',
          romaji: 'Natsuyasumi ni tomodachi to issho ni Shounan no umi e oyogi ni ikimashita.',
          meaningEn: 'During summer vacation, I went swimming in the Shonan sea with friends.',
          meaningBn: 'গ্রীষ্মের ছুটিতে বন্ধুদের সাথে আমি শোনান সমুদ্রসৈকতে সাঁতার কাটতে গিয়েছিলাম।'
        },
        {
          ja: '将来は海外のIT企業で働きたいと思っています。',
          romaji: 'Shourai wa kaigai no IT kigyou de hatarakitai to omotte imasu.',
          meaningEn: 'In the future, I want to work at an IT company overseas.',
          meaningBn: 'ভবিষ্যতে আমি বিদেশের কোনো আইটি কোম্পানিতে কাজ করতে চাই।'
        },
        {
          ja: '海辺のレストランで新鮮な海鮮丼を食べました。',
          romaji: 'Umibe no resutoran de shinsen na kaisendon o tabemashita.',
          meaningEn: 'I ate a fresh seafood bowl at a seaside restaurant.',
          meaningBn: 'সমুদ্রের পারের একটি রেস্তোরাঁয় বসে আমি তাজা সামুদ্রিক মাছের বাটি খেয়েছি।'
        }
      ],
      tamagoTip: {
        bn: 'পানি (氵) এবং প্রতি/মমতাময়ী জননী (毎)। সকল প্রাণের মাতৃসমা বিশাল জলরাশি হলো 海 (うみ)। বিদেশের ক্ষেত্রে 海外।',
        en: 'Water droplets (氵) joined with "every/mother" (毎). The great ocean nurturing all life.'
      }
    },

    // 10. 外
    {
      id: 'l9-soto',
      kanji: '外',
      emoji: '🚪',
      strokeCount: 5,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ガイ', romaji: 'gai' },
          { kana: 'ゲ', romaji: 'ge' }
        ],
        kunyomi: [
          { kana: 'そと', romaji: 'soto' },
          { kana: 'ほか', romaji: 'hoka' },
          { kana: 'はず・す', romaji: 'hazu-su' }
        ]
      },
      meanings: {
        en: 'outside, exterior, foreign, other',
        bn: 'বাইরে, বহির্ভাগ, বিদেশ, অন্য'
      },
      vocab: [
        {
          kanji: '外',
          kana: 'そと',
          romaji: 'soto',
          meaningEn: 'outside, outdoors, exterior',
          meaningBn: 'বাইরে / বহির্ভাগ',
          tag: 'Daily N5'
        },
        {
          kanji: '外国',
          kana: 'がいこく',
          romaji: 'gaikoku',
          meaningEn: 'foreign country, abroad',
          meaningBn: 'বিদেশ / অন্য দেশ',
          tag: 'World N5'
        },
        {
          kanji: '外国人',
          kana: 'がいこくじん',
          romaji: 'gaikokujin',
          meaningEn: 'foreigner, non-Japanese citizen',
          meaningBn: 'বিদেশি নাগরিক',
          tag: 'Society N5'
        },
        {
          kanji: '海外',
          kana: 'かいがい',
          romaji: 'kaigai',
          meaningEn: 'overseas, abroad',
          meaningBn: 'বিদেশ / প্রবাসী',
          tag: 'Travel N5'
        },
        {
          kanji: '外出',
          kana: 'がいしゅつ',
          romaji: 'gaishutsu',
          meaningEn: 'going out, outing',
          meaningBn: 'বাইরে বের হওয়া',
          tag: 'Daily N4'
        },
        {
          kanji: '意外な',
          kana: 'いがいな',
          romaji: 'igai na',
          meaningEn: 'unexpected, surprising',
          meaningBn: 'অপ্রত্যাশিত / বিস্ময়কর',
          tag: 'Daily N4'
        }
      ],
      sentences: [
        {
          ja: '外はとても寒いので、暖かいコートを着て出かけましょう。',
          romaji: 'Soto wa totemo samui node, atatakai kooto o kite dekakemashou.',
          meaningEn: 'It is very cold outside, so let\'s put on warm coats before going out.',
          meaningBn: 'বাইরে ভীষণ ঠান্ডা, তাই বের হওয়ার আগে গরম কোট পরে নিই।'
        },
        {
          ja: '市役所で外国人登録の手続きを済ませました。',
          romaji: 'Shiyakusho de gaikokujin touroku no tetsuduki o sumasemashita.',
          meaningEn: 'I completed the foreign resident registration procedure at the city hall.',
          meaningBn: 'সিটি হলে গিয়ে আমি বিদেশি নাগরিক নিবন্ধনের কাজ সম্পন্ন করেছি।'
        },
        {
          ja: '日本に来る前に二年間外国語学校で勉強しました。',
          romaji: 'Nihon ni kuru mae ni ninenkan gaikokugo gakkou de benkyou shimashita.',
          meaningEn: 'Before coming to Japan, I studied at a foreign language school for two years.',
          meaningBn: 'জাপানে আসার পূর্বে দুই বছর আমি একটি বিদেশি ভাষা শিক্ষাকেন্দ্রে পড়াশোনা করেছি।'
        }
      ],
      tamagoTip: {
        bn: 'সন্ধ্যা (夕) এবং ভবিষ্যদ্বাণী বা জাদুকরী চিহ্ন (卜)। ঘরের বাইরে সূর্যাস্তের সময় লক্ষণ নির্ধারণ করা। 外 (そと) ও 外国 (বিদেশ)।',
        en: 'Evening (夕) with a divination marker (卜). Looking beyond domestic borders into the outside world.'
      }
    },

    // --- READ-ONLY KANJI (読める - 2 items) ---
    // 11. 雑誌
    {
      id: 'l9-zasshi',
      kanji: '雑誌',
      emoji: '📰',
      strokeCount: 28,
      jlpt: 'N5',
      category: 'read_only',
      readings: {
        onyomi: [
          { kana: 'ザッシ', romaji: 'zasshi' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'magazine, journal, periodical',
        bn: 'ম্যাগাজিন, সাময়িকী, পত্রিকা'
      },
      vocab: [
        {
          kanji: '雑誌',
          kana: 'ざっし',
          romaji: 'zasshi',
          meaningEn: 'magazine, journal',
          meaningBn: 'ম্যাগাজিন / সাময়িকী',
          tag: 'Media N5'
        },
        {
          kanji: '週刊誌',
          kana: 'しゅうかんし',
          romaji: 'shuukanshi',
          meaningEn: 'weekly magazine',
          meaningBn: 'সাপ্তাহিক পত্রিকা',
          tag: 'Media N4'
        },
        {
          kanji: '月刊誌',
          kana: 'げっかんし',
          romaji: 'gekkanshi',
          meaningEn: 'monthly magazine',
          meaningBn: 'মাসিক ম্যাগাজিন',
          tag: 'Media N4'
        },
        {
          kanji: 'ファッション雑誌',
          kana: 'ファッションざっし',
          romaji: 'fasshon zasshi',
          meaningEn: 'fashion magazine',
          meaningBn: 'ফ্যাশন বিষয়ক ম্যাগাজিন',
          tag: 'Media'
        },
        {
          kanji: '日誌',
          kana: 'にっし',
          romaji: 'nisshi',
          meaningEn: 'daily journal, logbook',
          meaningBn: 'দৈনন্দিন কাজের লগবুক / ডায়েরি',
          tag: 'Work N4'
        },
        {
          kanji: '複雑な',
          kana: 'ふくざつな',
          romaji: 'fukuzatsu na',
          meaningEn: 'complex, complicated',
          meaningBn: 'জটিল / প্যাঁচানো',
          tag: 'Adj N4'
        }
      ],
      sentences: [
        {
          ja: 'コンビニの雑誌コーナーで旅行のガイドブックを買いました。',
          romaji: 'Konbini no zasshi koonaa de ryokou no gaidobukku o kaimashita.',
          meaningEn: 'I bought a travel guidebook at the convenience store magazine corner.',
          meaningBn: 'কনভেনিয়েন্স স্টোরের ম্যাগাজিন কর্নার থেকে আমি একটি ভ্রমণ সহায়িকা বই কিনেছি।'
        },
        {
          ja: '日本の流行を知るために毎月ファッション雑誌を読んでいます。',
          romaji: 'Nihon no ryuukou o shiru tame ni maitsuki fasshon zasshi o yonde imasu.',
          meaningEn: 'To stay updated on Japanese fashion trends, I read fashion magazines every month.',
          meaningBn: 'জাপানের হালফ্যাশন সম্পর্কে জানতে আমি প্রতি মাসে ফ্যাশন ম্যাগাজিন পড়ি।'
        },
        {
          ja: 'カフェで美味しいコーヒーを飲みながら雑誌をパラパラめくりました。',
          romaji: 'Kafe de oishii koohii o nominagara zasshi o parapara mekurimashita.',
          meaningEn: 'Sipping delicious coffee at the café, I flipped through a magazine.',
          meaningBn: 'ক্যাফেতে সুস্বাদু কফি খাওয়ার পাশাপাশি আমি একটি ম্যাগাজিনের পাতা উল্টে দেখলাম।'
        }
      ],
      tamagoTip: {
        bn: 'বিবিধ তথ্য (雑) শব্দের মাধ্যমে লিপিবদ্ধ করা (誌)। কনবিনি বা বুকশপে ম্যাগাজিন তাক হলো 雑誌コーナー।',
        en: 'Assorted miscellany (雑) recorded in written words (誌). Found at every konbini entrance.'
      }
    },

    // 12. 漢字
    {
      id: 'l9-kanji',
      kanji: '漢字',
      emoji: '🈴',
      strokeCount: 19,
      jlpt: 'N5',
      category: 'read_only',
      readings: {
        onyomi: [
          { kana: 'カンジ', romaji: 'kanji' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'kanji, Chinese characters used in Japanese',
        bn: 'কাঞ্জি (জাপানি ভাষায় ব্যবহৃত চীনা ভাবলিপি)'
      },
      vocab: [
        {
          kanji: '漢字',
          kana: 'かんじ',
          romaji: 'kanji',
          meaningEn: 'kanji, Chinese characters',
          meaningBn: 'কাঞ্জি বর্ণমালা',
          tag: 'Study N5'
        },
        {
          kanji: '文字',
          kana: 'もじ',
          romaji: 'moji',
          meaningEn: 'letter, character, text',
          meaningBn: 'বর্ণ / অক্ষর / টেক্সট',
          tag: 'Study N5'
        },
        {
          kanji: '名字 / 苗字',
          kana: 'みょうじ',
          romaji: 'myouji',
          meaningEn: 'family name, surname',
          meaningBn: 'পারিবারিক উপাধি / পদবি',
          tag: 'Personal N5'
        },
        {
          kanji: '漢方薬',
          kana: 'かんぽうやく',
          romaji: 'kanpouyaku',
          meaningEn: 'traditional herbal medicine',
          meaningBn: 'ভেষজ ওষুধ / হার্বাল মেডিসিন',
          tag: 'Health N4'
        },
        {
          kanji: 'ローマ字',
          kana: 'ローマじ',
          romaji: 'roomaji',
          meaningEn: 'Roman alphabet transcription',
          meaningBn: 'রোমান লিপি / রোমাজি',
          tag: 'Language N5'
        },
        {
          kanji: '数字',
          kana: 'すうじ',
          romaji: 'suuji',
          meaningEn: 'numeral, digit, figure',
          meaningBn: 'সংখ্যা / অঙ্ক',
          tag: 'Study N4'
        }
      ],
      sentences: [
        {
          ja: '毎日アプリを使って新しい漢字を五つずつ覚えるようにしています。',
          romaji: 'Mainichi apuri o tsukatte atarashii kanji o itsutsu zutsu oboeru you ni shite imasu.',
          meaningEn: 'Every day using the app, I try to memorize five new kanji.',
          meaningBn: 'প্রতিদিন অ্যাপ ব্যবহার করে আমি পাঁচটি করে নতুন কাঞ্জি মুখস্থ করার চেষ্টা করি।'
        },
        {
          ja: 'JLPTのN5試験には約百個の基本的な漢字が出題されます。',
          romaji: 'JLPT no N5 shiken niwa yaku hyakko no kihonteki na kanji ga shutsudai saremasu.',
          meaningEn: 'In the JLPT N5 exam, about 100 basic kanji appear on the test.',
          meaningBn: 'জেএলপিটি এন৫ পরীক্ষায় প্রায় ১০০টি মৌলিক কাঞ্জি থেকে প্রশ্ন আসে।'
        },
        {
          ja: '漢字の意味と成り立ちを理解すると、日本語の語彙がぐんと増えます。',
          romaji: 'Kanji no imi to naritachi o rikai suru to, Nihongo no goi ga gun to fuemasu.',
          meaningEn: 'Understanding the origins and meanings of kanji dramatically expands your Japanese vocabulary.',
          meaningBn: 'কাঞ্জির অর্থ ও উৎস উপলব্ধি করতে পারলে জাপানি শব্দভাণ্ডার বহুগুণ বেড়ে যায়।'
        }
      ],
      tamagoTip: {
        bn: 'প্রাচীন চীনা হান রাজবংশ (漢) এবং ঘরের নিচে শিশুর মতো রক্ষিত বর্ণমালা (字)। জাপানি ভাষার সমৃদ্ধ ভাবলিপি।',
        en: 'Han civilization (漢) + preserved letters (字). The logographic characters fundamental to Japanese literacy.'
      }
    },

    // --- VISUAL RECOGNITION KANJI (見て、わかる - 1 item) ---
    // 13. 書店
    {
      id: 'l9-shoten',
      kanji: '書店',
      emoji: '🏬',
      strokeCount: 18,
      jlpt: 'N4',
      category: 'visual_recognition',
      readings: {
        onyomi: [
          { kana: 'ショテン', romaji: 'shoten' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'bookshop, bookstore, bookseller shop',
        bn: 'বইয়ের দোকান, বই বিপণি'
      },
      vocab: [
        {
          kanji: '書店',
          kana: 'しょてん',
          romaji: 'shoten',
          meaningEn: 'bookstore, bookshop',
          meaningBn: 'বইয়ের দোকান / বই বিপণি',
          tag: 'Shop N4'
        },
        {
          kanji: '本屋',
          kana: 'ほんや',
          romaji: 'hon\'ya',
          meaningEn: 'bookshop (conversational term)',
          meaningBn: 'বইয়ের দোকান (কথ্য রূপ)',
          tag: 'Shop N5'
        },
        {
          kanji: '店',
          kana: 'みせ',
          romaji: 'mise',
          meaningEn: 'shop, store',
          meaningBn: 'দোকান',
          tag: 'Daily N5'
        },
        {
          kanji: '店員',
          kana: 'てんいん',
          romaji: 'ten\'in',
          meaningEn: 'store clerk, shop assistant',
          meaningBn: 'দোকানের কর্মী / সেলসম্যান',
          tag: 'Job N5'
        },
        {
          kanji: '紀伊國屋書店',
          kana: 'きのくにやしょてん',
          romaji: 'Kinokuniya Shoten',
          meaningEn: 'Kinokuniya Bookstore (famous chain)',
          meaningBn: 'কিনোকুনিয়া বুকস্টোর (জাপানের বিখ্যাত চেইন)',
          tag: 'Culture'
        },
        {
          kanji: '電子書籍',
          kana: 'でんししょせき',
          romaji: 'denshi shoseki',
          meaningEn: 'e-book, digital books',
          meaningBn: 'ই-বুক / ডিজিটাল বই',
          tag: 'Tech N4'
        }
      ],
      sentences: [
        {
          ja: '駅ビルの中にある大型書店でJLPT対策の単語帳を買いました。',
          romaji: 'Ekibiru no naka ni aru oogata shoten de JLPT taisaku no tangochou o kaimashita.',
          meaningEn: 'I bought a JLPT prep vocabulary book at the large bookstore inside the station building.',
          meaningBn: 'স্টেশন ভবনের ভেতরের বিশাল বইয়ের দোকান থেকে আমি জেএলপিটি প্রস্তুতির ভোকাবুলারি বই কিনেছি।'
        },
        {
          ja: '休日は静かな書店で新刊の本を探すのが私のリラックス法です。',
          romaji: 'Kyuujitsu wa shizuka na shoten de shinkan no hon o sagasu no ga watashi no rirakkusu-hou desu.',
          meaningEn: 'On weekends, browsing for new arrivals in a quiet bookstore is my way of relaxing.',
          meaningBn: 'ছুটির দিনে নিরিবিলি বইয়ের দোকানে নতুন বই খুঁজে দেখা আমার মানসিক প্রশান্তির মাধ্যম।'
        },
        {
          ja: '「紀伊國屋書店」は日本で最も有名で品揃えが豊富な本屋です。',
          romaji: '"Kinokuniya Shoten" wa Nihon de mottomo yuumei de shinazoroe ga houfu na hon\'ya desu.',
          meaningEn: '"Kinokuniya Bookstore" is Japan\'s most famous bookstore with an abundant collection.',
          meaningBn: '"কিনোকুনিয়া শোদেন" হলো জাপানের সবচেয়ে নামকরা ও সমৃদ্ধ বই বিপণি।'
        }
      ],
      tamagoTip: {
        bn: '書 (বই/লেখা) + 店 (দোকান)। কথ্য ভাষায় 本屋 বললেও সাইনবোর্ড ও বড় ডিপার্টমেন্টে অফিশিয়ালি 書店 লেখা থাকে।',
        en: 'Writing/Book (書) + Shop (店). The formal signage title for bookstores across Japan (e.g. 紀伊國屋書店, 丸善書店).'
      }
    }
  ]
};
