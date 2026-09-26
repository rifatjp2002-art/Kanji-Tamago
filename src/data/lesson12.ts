import { Lesson } from '../types/kanji';

export const lesson12: Lesson = {
  id: 12,
  number: 12,
  titleJa: '病気のとき',
  titleRomaji: 'Byouki no toki',
  titleBn: 'অসুস্থতা ও চিকিৎসা সেবা (শরীর, চোখ, কান, মুখ, দাঁত, রোগ, হাসপাতাল, ওষুধ ও ফার্মেসি)',
  titleEn: 'When You Are Sick (Body, Eye, Ear, Mouth, Tooth, Illness, Hospital, Medicine, Pharmacy)',
  descriptionBn: 'শারীরিক অঙ্গপ্রত্যঙ্গ ও ক্লিনিকের কাঞ্জি (体, 目, 耳, 口, 歯, 病, 院, 薬, 局), ক্লিনিক পরিদর্শনের কাঞ্জি যেমন ওজন (体重), রিসিপশন (受付), জ্বর (熱) এবং ক্লিনিকের বিভাগ সাইন মেডিসিন/ইন্টারনাল (内科) ও সার্জারি (外科)।',
  descriptionEn: 'Essential Kanji for expressing medical conditions and doctor visits: body parts (体, 目, 耳, 口, 歯), sickness & hospitals (病, 院, 薬, 局), vital metrics (体重, 熱, 受付), and medical department signage (内科, 外科).',
  kanjiList: [
    // --- MAIN KANJI (9 items) ---
    // 1. 体
    {
      id: 'l12-karada',
      kanji: '体',
      emoji: '🧍',
      strokeCount: 7,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'タイ', romaji: 'tai' },
          { kana: 'テイ', romaji: 'tei' }
        ],
        kunyomi: [
          { kana: 'からだ', romaji: 'karada' }
        ]
      },
      meanings: {
        en: 'body, physique, health, torso',
        bn: 'শরীর, দেহ, স্বাস্থ্য'
      },
      vocab: [
        {
          kanji: '体',
          kana: 'からだ',
          romaji: 'karada',
          meaningEn: 'body, health',
          meaningBn: 'শরীর / দেহ / স্বাস্থ্য',
          tag: 'Daily N5'
        },
        {
          kanji: '体にいい',
          kana: 'からだにいい',
          romaji: 'karada ni ii',
          meaningEn: 'good for the body, healthy',
          meaningBn: 'শরীরের জন্য ভালো / উপকারী',
          tag: 'Health N5'
        },
        {
          kanji: '体調',
          kana: 'たいちょう',
          romaji: 'taichou',
          meaningEn: 'physical condition, health status',
          meaningBn: 'শারীরিক অবস্থা / শরীর-স্বাস্থ্য',
          tag: 'Health N4'
        },
        {
          kanji: '体操',
          kana: 'たいそう',
          romaji: 'taisou',
          meaningEn: 'gymnastics, physical calisthenics',
          meaningBn: 'শরীরচর্চা / ব্যয়াম (রেডিও তাইসো)',
          tag: 'Daily N5'
        },
        {
          kanji: '体重',
          kana: 'たいじゅう',
          romaji: 'taijuu',
          meaningEn: 'body weight',
          meaningBn: 'শরীরের ওজন',
          tag: 'Health N4'
        },
        {
          kanji: '全体',
          kana: 'ぜんたい',
          romaji: 'zentai',
          meaningEn: 'whole, entirety',
          meaningBn: 'সমগ্র / সম্পূর্ণ শরীর',
          tag: 'General N4'
        }
      ],
      sentences: [
        {
          ja: '最近少し体調を崩してしまって、病院へ行きました。',
          romaji: 'Saikin sukoshi taichou o kuzushiteshimatte, byouin e ikimashita.',
          meaningEn: 'Recently my physical condition deteriorated a bit, so I visited the hospital.',
          meaningBn: 'সম্প্রতি শরীর কিছুটা খারাপ করায় আমি হাসপাতালে ডাক্তারের কাছে গিয়েছিলাম।'
        },
        {
          ja: '緑茶や納豆は体にとてもいい日本の健康食品です。',
          romaji: 'Ryokucha ya nattou wa karada ni totemo ii Nihon no kenkou shokuhin desu.',
          meaningEn: 'Green tea and natto are Japanese health foods that are very good for the body.',
          meaningBn: 'গ্রিন টি ও নাত্তো হলো শরীরের জন্য দারুণ উপকারী জাপানি স্বাস্থ্যকর খাবার।'
        },
        {
          ja: 'お体に気をつけて、元気に日本の冬を乗り切ってください。',
          romaji: 'Okarada ni ki o tsukete, genki ni Nihon no fuyu o norikitte kudasai.',
          meaningEn: 'Please take care of your health and get through the Japanese winter in good spirits.',
          meaningBn: 'শরীরের প্রতি যত্ন নেবেন এবং সুস্থভাবে জাপানের শীতকাল পার করবেন।'
        }
      ],
      tamagoTip: {
        bn: 'মানুষ (亻) এবং তার মূল ভিত্তি (本)। মানুষের অস্তিত্বের মূল আধারই হলো তার শরীর বা দেহ 体 (からだ)।',
        en: 'A person (亻) and their core root/foundation (本). One\'s physique and health.'
      }
    },

    // 2. 目
    {
      id: 'l12-me',
      kanji: '目',
      emoji: '👁️',
      strokeCount: 5,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'モク', romaji: 'moku' },
          { kana: 'ボク', romaji: 'boku' }
        ],
        kunyomi: [
          { kana: 'め', romaji: 'me' },
          { kana: 'ま', romaji: 'ma' }
        ]
      },
      meanings: {
        en: 'eye, eyeball, insight, ordinal suffix (-th)',
        bn: 'চোখ, দৃষ্টি, ক্রমানুসারে (তম)'
      },
      vocab: [
        {
          kanji: '目',
          kana: 'め',
          romaji: 'me',
          meaningEn: 'eye',
          meaningBn: 'চোখ / দর্শনেন্দ্রিয়',
          tag: 'Body N5'
        },
        {
          kanji: '目薬',
          kana: 'めぐすり',
          romaji: 'megusuri',
          meaningEn: 'eye drops',
          meaningBn: 'চোখের ড্রপ',
          tag: 'Health N4'
        },
        {
          kanji: '目覚まし時計',
          kana: 'めざましどけい',
          romaji: 'mezamashidokei',
          meaningEn: 'alarm clock',
          meaningBn: 'অ্যালার্ম ঘড়ি',
          tag: 'Daily N5'
        },
        {
          kanji: '一つ目',
          kana: 'ひとつめ',
          romaji: 'hitotsume',
          meaningEn: 'the first one',
          meaningBn: 'প্রথমটি / প্রথম বিষয়',
          tag: 'Order N5'
        },
        {
          kanji: '二番目',
          kana: 'にばんめ',
          romaji: 'nibanme',
          meaningEn: 'the second one',
          meaningBn: 'দ্বিতীয়টি / ক্রমিক দুই',
          tag: 'Order N5'
        },
        {
          kanji: '目的',
          kana: 'もくてき',
          romaji: 'mokuteki',
          meaningEn: 'purpose, objective, goal',
          meaningBn: 'উদ্দেশ্য / লক্ষ্য',
          tag: 'Society N4'
        }
      ],
      sentences: [
        {
          ja: 'パソコンの画面を長時間見つめていたので、目が疲れて痛いです。',
          romaji: 'Pasokon no gamen o choujikan mitsumete ita node, me ga tsukarete itai desu.',
          meaningEn: 'Because I looked at the computer screen for a long time, my eyes are tired and hurting.',
          meaningBn: 'কম্পিউটারের স্ক্রিনের দিকে দীর্ঘক্ষণ তাকিয়ে থাকায় চোখ ক্লান্ত হয়ে ব্যথা করছে।'
        },
        {
          ja: 'ドラッグストアで花粉症用の目薬を買ってさしました。',
          romaji: 'Doraggusutoa de kafunshou you no megusuri o katte sashimashita.',
          meaningEn: 'I bought pollinosis eye drops at the drugstore and applied them.',
          meaningBn: 'ড্রাগস্টোর থেকে ফুলের পরাগরেণুর অ্যালার্জির জন্য চোখের ড্রপ কিনে চোখে দিয়েছি।'
        },
        {
          ja: '二つ目の交差点を右に曲がると、大きな総合病院があります。',
          romaji: 'Futatsume no kousaten o migi ni magaru to, ookina sougou byouin ga arimasu.',
          meaningEn: 'If you turn right at the second intersection, there is a large general hospital.',
          meaningBn: 'দ্বিতীয় চৌরাস্তায় ডানে ঘুরলে একটি বড় জেনারেল হাসপাতাল দেখতে পাবেন।'
        }
      ],
      tamagoTip: {
        bn: 'চোখের তারা ও অক্ষিগোলকের উল্লম্ব রেখাচিত্র। চোখ 目 (め) এবং ড্রপ 目薬।',
        en: 'A vertical pictogram of the human eyeball and iris. Eyes, eye drops, and ordinal rankings.'
      }
    },

    // 3. 耳
    {
      id: 'l12-mimi',
      kanji: '耳',
      emoji: '👂',
      strokeCount: 6,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ジ', romaji: 'ji' }
        ],
        kunyomi: [
          { kana: 'みみ', romaji: 'mimi' }
        ]
      },
      meanings: {
        en: 'ear, hearing, edge, ear radical',
        bn: 'কান, শ্রবণেন্দ্রিয়, প্রান্ত'
      },
      vocab: [
        {
          kanji: '耳',
          kana: 'みみ',
          romaji: 'mimi',
          meaningEn: 'ear',
          meaningBn: 'কান / শ্রবণেন্দ্রিয়',
          tag: 'Body N5'
        },
        {
          kanji: '耳鼻科',
          kana: 'じびか',
          romaji: 'jibika',
          meaningEn: 'otorhinolaryngology, ENT clinic (ear & nose)',
          meaningBn: 'নাক, কান ও গলা বিভাগ (ইএনটি)',
          tag: 'Medical N4'
        },
        {
          kanji: '初耳',
          kana: 'はつみみ',
          romaji: 'hatsumimi',
          meaningEn: 'hearing something for the first time',
          meaningBn: 'প্রথমবার কোনো খবর শোনা',
          tag: 'Daily N4'
        },
        {
          kanji: '耳鳴り',
          kana: 'みみなり',
          romaji: 'miminari',
          meaningEn: 'tinnitus, ringing in the ears',
          meaningBn: 'কানে ভোঁ-ভোঁ শব্দ হওয়া',
          tag: 'Health'
        },
        {
          kanji: 'パンの耳',
          kana: 'パンのみみ',
          romaji: 'pan no mimi',
          meaningEn: 'crust of bread',
          meaningBn: 'পাউরুটির শক্ত বাদামী কিনারা',
          tag: 'Food'
        },
        {
          kanji: '耳を傾ける',
          kana: 'みみをかたむける',
          romaji: 'mimi o katamukeru',
          meaningEn: 'to listen attentively, to lend an ear',
          meaningBn: 'মনোযোগ দিয়ে কান পেতে শোনা',
          tag: 'Idiom'
        }
      ],
      sentences: [
        {
          ja: '風邪を引いて耳の奥が痛くなったので、近所の耳鼻科に行きました。',
          romaji: 'Kaze o hiite mimi no oku ga itaku natta node, kinjo no jibika ni ikimashita.',
          meaningEn: 'Because I caught a cold and deep inside my ear was hurting, I went to a local ENT clinic.',
          meaningBn: 'ঠান্ডা লেগে কানের ভেতরে ব্যথা করায় আমি পাড়ার নাক-কান-গলা (ইএনটি) ক্লিনিকে গিয়েছিলাম।'
        },
        {
          ja: '「えっ、彼が国へ帰るんですか？それは初耳です！」',
          romaji: '"E\', kare ga kuni e kaerun desu ka? Sore wa hatsumimi desu!"',
          meaningEn: '"What, he is returning to his home country? That is completely news to me!"',
          meaningBn: '"কী, সে দেশে ফিরে যাচ্ছে? এই কথাটি আমি আজ প্রথম শুনলাম!"'
        },
        {
          ja: '先生の注意事項にしっかりと耳を傾けてメモを取りましょう。',
          romaji: 'Sensei no chuuijikou ni shikkari to mimi o katamukete memo o torimashou.',
          meaningEn: 'Let\'s listen attentively to the teacher\'s instructions and take notes.',
          meaningBn: 'শিক্ষকের দেওয়া নির্দেশাবলীতে মনোযোগ দিয়ে কান পেতে নোট রাখা উচিত।'
        }
      ],
      tamagoTip: {
        bn: 'মানুষের কানের বাইরের লতি ও অভ্যন্তরীণ গহ্বরের সুন্দর রেখাচিত্র। কান 耳 (みみ) এবং ইএনটি ডাক্তার 耳鼻科।',
        en: 'A sketch of the human outer ear lobe and auditory canal. Ears and ENT clinics (耳鼻科).'
      }
    },

    // 4. 口
    {
      id: 'l12-kuchi',
      kanji: '口',
      emoji: '👄',
      strokeCount: 3,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'コウ', romaji: 'kou' },
          { kana: 'ク', romaji: 'ku' }
        ],
        kunyomi: [
          { kana: 'くち', romaji: 'kuchi' },
          { kana: 'ぐち', romaji: 'guchi' }
        ]
      },
      meanings: {
        en: 'mouth, opening, entrance, exit, gate',
        bn: 'মুখ, প্রবেশদ্বার, তোরণ'
      },
      vocab: [
        {
          kanji: '口',
          kana: 'くち',
          romaji: 'kuchi',
          meaningEn: 'mouth, entrance',
          meaningBn: 'মুখ / তোরণ',
          tag: 'Body N5'
        },
        {
          kanji: '北口',
          kana: 'きたぐち',
          romaji: 'kitaguchi',
          meaningEn: 'North Exit / gate',
          meaningBn: 'উত্তর এক্সিট গেট',
          tag: 'Station N5'
        },
        {
          kanji: '出口',
          kana: 'でぐち',
          romaji: 'deguchi',
          meaningEn: 'exit, way out',
          meaningBn: 'বহির্গমন তোরণ / এক্সিট',
          tag: 'Place N5'
        },
        {
          kanji: '入口',
          kana: 'いりぐち',
          romaji: 'iriguchi',
          meaningEn: 'entrance, way in',
          meaningBn: 'প্রবেশপথ / এন্ট্রি',
          tag: 'Place N5'
        },
        {
          kanji: '窓口',
          kana: 'まどぐち',
          romaji: 'madoguchi',
          meaningEn: 'service counter, customer window',
          meaningBn: 'সেবা কাউন্টার / সেবা জানালা',
          tag: 'Office N4'
        },
        {
          kanji: '人口',
          kana: 'じんこう',
          romaji: 'jinkou',
          meaningEn: 'population',
          meaningBn: 'জনসংখ্যা (মুখের গণনা)',
          tag: 'Society N4'
        }
      ],
      sentences: [
        {
          ja: '「お医者さんに診てもらうときは、大きく口を開けてください。」',
          romaji: '"Oishasan ni mitemorau toki wa, ookiku kuchi o akete kudasai."',
          meaningEn: '"When the doctor examines you, please open your mouth wide."',
          meaningBn: '"ডাক্তার যখন পরীক্ষা করবেন, তখন দয়া করে বড় করে মুখ খুলবেন।"'
        },
        {
          ja: '食後はうがい薬で口の中を綺麗にゆすぐようにしています。',
          romaji: 'Shokugo wa ugaiyaku de kuchi no naka o kirei ni yusugu you ni shite imasu.',
          meaningEn: 'After meals, I make sure to rinse the inside of my mouth cleanly with mouthwash.',
          meaningBn: 'খাবারের পর আমি মাউথওয়াশ দিয়ে মুখের ভেতর ভালোভাবে কুলি করে পরিষ্কার করি।'
        },
        {
          ja: '市役所の相談窓口で健康保険証の手続きを行いました。',
          romaji: 'Shiyakusho no soudan madoguchi de kenkou hokenshou no tetsuzuki o okonaimashita.',
          meaningEn: 'I handled my health insurance card procedures at the city hall consultation counter.',
          meaningBn: 'সিটি হলের পরামর্শ কাউন্টারে আমি স্বাস্থ্য বীমা কার্ডের কাজ সম্পন্ন করেছি।'
        }
      ],
      tamagoTip: {
        bn: 'উন্মুক্ত চতুষ্কোণ মুখগহ্বর। মানুষের মুখ এবং স্টেশনের গেট (出口, 入口, 北口)।',
        en: 'A square opening representing the human mouth or an entrance/exit gate.'
      }
    },

    // 5. 歯
    {
      id: 'l12-ha',
      kanji: '歯',
      emoji: '🦷',
      strokeCount: 12,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'シ', romaji: 'shi' }
        ],
        kunyomi: [
          { kana: 'は', romaji: 'ha' }
        ]
      },
      meanings: {
        en: 'tooth, teeth, cog, dental',
        bn: 'দাঁত, দন্ত'
      },
      vocab: [
        {
          kanji: '歯',
          kana: 'は',
          romaji: 'ha',
          meaningEn: 'tooth, teeth',
          meaningBn: 'দাঁত',
          tag: 'Body N5'
        },
        {
          kanji: '歯医者',
          kana: 'はいしゃ',
          romaji: 'haisha',
          meaningEn: 'dentist, dental clinic',
          meaningBn: 'দাঁতের ডাক্তার / ডেন্টাল ক্লিনিক',
          tag: 'Medical N5'
        },
        {
          kanji: '歯ブラシ',
          kana: 'はブラシ',
          romaji: 'haburashi',
          meaningEn: 'toothbrush',
          meaningBn: 'টুথব্রাশ',
          tag: 'Daily N5'
        },
        {
          kanji: '歯磨き',
          kana: 'はみがき',
          romaji: 'hamigaki',
          meaningEn: 'brushing teeth, tooth brushing',
          meaningBn: 'দাঁত মাজা / ব্রাশ করা',
          tag: 'Daily N5'
        },
        {
          kanji: '虫歯',
          kana: 'むしば',
          romaji: 'mushiba',
          meaningEn: 'cavity, decayed tooth, tooth decay',
          meaningBn: 'দাঁতের ক্যাভিটি / পোকা লাগা দাঁত',
          tag: 'Health N4'
        },
        {
          kanji: '歯科',
          kana: 'しか',
          romaji: 'shika',
          meaningEn: 'dentistry, dental department',
          meaningBn: 'দন্ত বিভাগ / ডেন্টাল ডিপার্টমেন্ট',
          tag: 'Medical N4'
        }
      ],
      sentences: [
        {
          ja: '虫歯がズキズキ痛むので、午後から歯医者を予約しました。',
          romaji: 'Mushiba ga zukizuki itamu node, gogo kara haisha o yoyaku shimashita.',
          meaningEn: 'Because my decayed tooth is throbbing with pain, I booked an appointment at the dentist this afternoon.',
          meaningBn: 'ক্যাভিটি হওয়া দাঁতে টনটন ব্যথা করায় আজ বিকেলে ডেন্টাল ক্লিনিকে অ্যাপয়েন্টমেন্ট নিয়েছি।'
        },
        {
          ja: '寝る前に必ずしっかりと歯を磨く習慣をつけましょう。',
          romaji: 'Neru mae ni kanarazu shikkari to ha o migaku shuukan o tsukemashou.',
          meaningEn: 'Let\'s build the habit of always brushing our teeth thoroughly before going to sleep.',
          meaningBn: 'ঘুমানোর আগে অবশ্যই ভালোভাবে দাঁত মাজার অভ্যাস গড়ে তোলা উচিত।'
        },
        {
          ja: 'ドラッグストアで柔らかい歯ブラシとフッ素入り歯磨き粉を買いました。',
          romaji: 'Doraggusutoa de yawarakai haburashi to fusso-iri hamigakiko o kaimashita.',
          meaningEn: 'I bought a soft toothbrush and fluoride toothpaste at the drugstore.',
          meaningBn: 'ড্রাগস্টোর থেকে একটি নরম টুথব্রাশ এবং ফ্লোরাইডযুক্ত টুথপেস্ট কিনেছি।'
        }
      ],
      tamagoTip: {
        bn: 'মাড়ির নিচে সারিবদ্ধ শক্ত দাঁত (米) এবং দৃঢ় চোয়ালের কাঠামো (止)। দাঁতের ডাক্তার 歯医者 (はいしゃ)।',
        en: 'A row of teeth set firmly within the jawbone. Dental hygiene and clinics.'
      }
    },

    // 6. 病
    {
      id: 'l12-byou',
      kanji: '病',
      emoji: '🤒',
      strokeCount: 10,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ビョウ', romaji: 'byou' },
          { kana: 'ヘイ', romaji: 'hei' }
        ],
        kunyomi: [
          { kana: 'や・む', romaji: 'ya-mu' },
          { kana: 'やまい', romaji: 'yamai' }
        ]
      },
      meanings: {
        en: 'ill, sick, sickness, disease, ailment',
        bn: 'রোগ, অসুস্থতা, ব্যাধি'
      },
      vocab: [
        {
          kanji: '病気',
          kana: 'びょうき',
          romaji: 'byouki',
          meaningEn: 'illness, sickness, disease',
          meaningBn: 'অসুখ / রোগ / অসুস্থতা',
          tag: 'Daily N5'
        },
        {
          kanji: '病院',
          kana: 'びょういん',
          romaji: 'byouin',
          meaningEn: 'hospital',
          meaningBn: 'হাসপাতাল',
          tag: 'Place N5'
        },
        {
          kanji: '病人',
          kana: 'びょうにん',
          romaji: 'byounin',
          meaningEn: 'sick person, patient',
          meaningBn: 'অসুস্থ ব্যক্তি / রোগী',
          tag: 'Society N4'
        },
        {
          kanji: '急病',
          kana: 'きゅうびょう',
          romaji: 'kyuubyou',
          meaningEn: 'sudden illness',
          meaningBn: 'হঠাৎ অসুস্থতা / আকস্মিক রোগ',
          tag: 'Emergency N4'
        },
        {
          kanji: '重病',
          kana: 'じゅうびょう',
          romaji: 'juubyou',
          meaningEn: 'serious illness, severe disease',
          meaningBn: 'গুরুতর অসুস্থতা',
          tag: 'Medical N4'
        },
        {
          kanji: '持病',
          kana: 'じびょう',
          romaji: 'jibyou',
          meaningEn: 'chronic disease, chronic condition',
          meaningBn: 'দীর্ঘস্থায়ী রোগ / ক্রনিক অসুখ',
          tag: 'Medical'
        }
      ],
      sentences: [
        {
          ja: '病気で会社を三日間休んで、家でゆっくり休養しました。',
          romaji: 'Byouki de kaisha o mikka-kan yasunde, ie de yukkuri kyuuyou shimashita.',
          meaningEn: 'Due to illness, I took off three days from the company and rested quietly at home.',
          meaningBn: 'অসুস্থতার কারণে কোম্পানি থেকে তিন দিন ছুটি নিয়ে বাসায় শান্তভাবে বিশ্রাম নিয়েছি।'
        },
        {
          ja: '急病のときは躊躇せずに「１１９番」に電話して救急車を呼びます。',
          romaji: 'Kyuubyou no toki wa chuucho sezu ni "119-ban" ni denwa shite kyuukyuusha o yobimasu.',
          meaningEn: 'In case of sudden illness, call "119" without hesitation to summon an ambulance.',
          meaningBn: 'আকস্মিক গুরুতর অসুস্থতায় দ্বিধা না করে ১১৯ নম্বরে কল দিয়ে অ্যাম্বুলেন্স ডাকতে হয়।'
        },
        {
          ja: '手洗いとうがいを徹底して、冬の感染症や病気を防ぎましょう。',
          romaji: 'Tearai to ugai o tettei shite, fuyu no kansenshou ya byouki o fusegimashou.',
          meaningEn: 'Let\'s thoroughly wash hands and gargle to prevent winter infections and diseases.',
          meaningBn: 'হাত ধোয়া ও কুলির চর্চা মেনে চলে শীতের সংক্রামক রোগব্যাধি প্রতিরোধ করা উচিত।'
        }
      ],
      tamagoTip: {
        bn: 'অসুস্থ মানুষের বিছানার প্রতীকী রেডিক্যাল (疒) এবং ভেতরে যন্ত্রণাদায়ক অবস্থা (丙)। রোগ বা ব্যাধি 病 (ビョウ)।',
        en: 'The sickness enclosure radical (疒) wrapped around afflicted fire (丙). Illness and hospitals.'
      }
    },

    // 7. 院
    {
      id: 'l12-in',
      kanji: '院',
      emoji: '🏥',
      strokeCount: 10,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'イン', romaji: 'in' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'institution, mansion, hospital, academy, courtyard',
        bn: 'প্রতিষ্ঠান, হাসপাতাল, পরিষদ ভবন'
      },
      vocab: [
        {
          kanji: '病院',
          kana: 'びょういん',
          romaji: 'byouin',
          meaningEn: 'hospital',
          meaningBn: 'হাসপাতাল',
          tag: 'Place N5'
        },
        {
          kanji: '入院する',
          kana: 'にゅういんする',
          romaji: 'nyuuin suru',
          meaningEn: 'to be hospitalized, to be admitted',
          meaningBn: 'হাসপাতালে ভর্তি হওয়া',
          tag: 'Medical N4'
        },
        {
          kanji: '退院する',
          kana: 'たいいんする',
          romaji: 'taiin suru',
          meaningEn: 'to be discharged from hospital',
          meaningBn: 'হাসপাতাল থেকে ছাড়া পাওয়া',
          tag: 'Medical N4'
        },
        {
          kanji: '大学院',
          kana: 'だいがくいん',
          romaji: 'daigakuin',
          meaningEn: 'graduate school',
          meaningBn: 'মাস্টার্স/পিএইচডি গ্র্যাজুয়েট স্কুল',
          tag: 'Academic N4'
        },
        {
          kanji: '医院',
          kana: 'いいん',
          romaji: 'iin',
          meaningEn: 'clinic, medical doctor\'s office',
          meaningBn: 'চিকিৎসাকেন্দ্র / প্রাইভেট ক্লিনিক',
          tag: 'Medical N4'
        },
        {
          kanji: '通院',
          kana: 'つういん',
          romaji: 'tsuuin',
          meaningEn: 'regular hospital visits, outpatient care',
          meaningBn: 'নিয়মিত হাসপাতালে চিকিৎসাধীন থাকা',
          tag: 'Medical'
        }
      ],
      sentences: [
        {
          ja: '友人が盲腸の手術で総合病院に入院したので、お見舞いに行きました。',
          romaji: 'Yuujin ga mouchou no shujutsu de sougou byouin ni nyuuin shita node, omimai ni ikimashita.',
          meaningEn: 'Because a friend was hospitalized for appendicitis surgery, I went to visit them.',
          meaningBn: 'এক বন্ধু অ্যাপেন্ডিসাইটিসের অপারেশনে হাসপাতালে ভর্তি থাকায় আমি তাকে দেখতে গিয়েছিলাম।'
        },
        {
          ja: '体調がすっかり回復したので、来週の火曜日に退院できることになりました。',
          romaji: 'Taichou ga sukkari kaifuku shita node, raishuu no kayoubi ni taiin dekiru koto ni narimashita.',
          meaningEn: 'Because my health has completely recovered, I will be discharged next Tuesday.',
          meaningBn: 'শরীর পুরোপুরি সুস্থ হয়ে ওঠায় আগামী মঙ্গলবার আমি হাসপাতাল থেকে রিলিজ পাব।'
        },
        {
          ja: '駅のすぐ近くに夜間も診療している便利な内科医院があります。',
          romaji: 'Eki no sugu chikaku ni yakan mo shinryou shite iru benri na naika iin ga arimasu.',
          meaningEn: 'Right near the station there is a convenient internal medicine clinic open at night.',
          meaningBn: 'স্টেশনের ঠিক কাছেই রাতেও খোলা থাকে এমন একটি সুবিধাজনক মেডিসিন ক্লিনিক আছে।'
        }
      ],
      tamagoTip: {
        bn: 'প্রাচীরঘেরা নিরাপদ পাহাড়ি সীমানা (阝) এবং ভেতরে সুপরিচালিত প্রতিষ্ঠান (完)। হাসপাতাল 病院 বা গ্র্যাজুয়েট স্কুল 大学院।',
        en: 'A protected walled sanctuary (阝) completing complete care (完). Public institutions and hospitals.'
      }
    },

    // 8. 薬
    {
      id: 'l12-kusuri',
      kanji: '薬',
      emoji: '💊',
      strokeCount: 16,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ヤク', romaji: 'yaku' }
        ],
        kunyomi: [
          { kana: 'くすり', romaji: 'kusuri' }
        ]
      },
      meanings: {
        en: 'medicine, chemical, remedy, pharmaceutical drug',
        bn: 'ওষুধ, ভেষজ প্রতিকার'
      },
      vocab: [
        {
          kanji: '薬',
          kana: 'くすり',
          romaji: 'kusuri',
          meaningEn: 'medicine, remedy',
          meaningBn: 'ওষুধ / দাওয়াই',
          tag: 'Health N5'
        },
        {
          kanji: '薬局',
          kana: 'やっきょく',
          romaji: 'yakkyoku',
          meaningEn: 'pharmacy, dispensary',
          meaningBn: 'ফার্মেসি / ওষুধের দোকান',
          tag: 'Place N4'
        },
        {
          kanji: '薬屋',
          kana: 'くすりや',
          romaji: 'kusuriya',
          meaningEn: 'drugstore, pharmacy (colloquial)',
          meaningBn: 'ওষুধের দোকান',
          tag: 'Shop N5'
        },
        {
          kanji: '風邪薬',
          kana: 'かぜぐすり',
          romaji: 'kazegusuri',
          meaningEn: 'cold medicine',
          meaningBn: 'সর্দি-কাশির ওষুধ',
          tag: 'Health N4'
        },
        {
          kanji: '目薬',
          kana: 'めぐすり',
          romaji: 'megusuri',
          meaningEn: 'eye drops',
          meaningBn: 'চোখের ড্রপ',
          tag: 'Health N4'
        },
        {
          kanji: '飲み薬',
          kana: 'のみぐすり',
          romaji: 'nomigusuri',
          meaningEn: 'oral medicine, medicine to drink',
          meaningBn: 'খাওয়ার ওষুধ (ট্যাবলেট/সিরাপ)',
          tag: 'Health'
        }
      ],
      sentences: [
        {
          ja: '「この風邪薬は食後三十分以内にぬるま湯で飲んでください。」',
          romaji: '"Kono kazegusuri wa shokugo sanjuppun inai ni nurumayu de nonde kudasai."',
          meaningEn: '"Please take this cold medicine within 30 minutes after meals with lukewarm water."',
          meaningBn: '"খাবারের ৩০ মিনিটের মধ্যে কুসুম গরম পানি দিয়ে এই সর্দির ওষুধটি খাবেন।"'
        },
        {
          ja: '処方箋を持って病院の隣にある調剤薬局へ行きました。',
          romaji: 'Shohousen o motte byouin no tonari ni aru chouzai yakkyoku e ikimashita.',
          meaningEn: 'Holding the prescription, I went to the dispensing pharmacy next to the hospital.',
          meaningBn: 'প্রেসক্রিপশনটি নিয়ে আমি হাসপাতালের পাশে থাকা ডিসপেনসারি ফার্মেসিতে গিয়েছিলাম।'
        },
        {
          ja: '薬を飲んだら眠くなることがあるので、車の運転は控えてください。',
          romaji: 'Kusuri o nondara nemuku naru koto ga aru node, kuruma no unten wa hikaete kudasai.',
          meaningEn: 'Because taking the medicine may cause drowsiness, please refrain from driving.',
          meaningBn: 'ওষুধ খাওয়ার পর তন্দ্রাভাব হতে পারে, তাই গাড়ি চালানো থেকে বিরত থাকুন।'
        }
      ],
      tamagoTip: {
        bn: 'ভেষজ ঘাসপাতা (艹) যা মানুষকে আরামদায়ক আনন্দ ফিরিয়ে দেয় (楽)। উপশমকারী ওষুধ 薬 (くすり)।',
        en: 'Medicinal herbs (艹) that bring back comfort and pleasant ease (楽). Pharmaceuticals and remedies.'
      }
    },

    // 9. 局
    {
      id: 'l12-kyoku',
      kanji: '局',
      emoji: '🏢',
      strokeCount: 7,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'キョク', romaji: 'kyoku' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'bureau, office, station, department',
        bn: 'দপ্তর, অফিস, ব্যুরো'
      },
      vocab: [
        {
          kanji: '薬局',
          kana: 'やっきょく',
          romaji: 'yakkyoku',
          meaningEn: 'pharmacy, dispensing chemist',
          meaningBn: 'ফার্মেসি / প্রেসক্রিপশন ওষুধের দোকান',
          tag: 'Medical N4'
        },
        {
          kanji: '郵便局',
          kana: 'ゆうびんきょく',
          romaji: 'yuubinkyoku',
          meaningEn: 'post office',
          meaningBn: 'পোস্ট অফিস / ডাকঘর',
          tag: 'Place N5'
        },
        {
          kanji: 'テレビ局',
          kana: 'テレビきょく',
          romaji: 'terebikyoku',
          meaningEn: 'television broadcasting station',
          meaningBn: 'টেলিভিশন স্টেশন / চ্যানেল কেন্দ্র',
          tag: 'Media N4'
        },
        {
          kanji: '当局',
          kana: 'とうきょく',
          romaji: 'toukyoku',
          meaningEn: 'authorities, governing department',
          meaningBn: 'প্রশাসন / সংশ্লিষ্ট কর্তৃপক্ষ',
          tag: 'Society N4'
        },
        {
          kanji: '全局',
          kana: 'ぜんきょく',
          romaji: 'zenkyoku',
          meaningEn: 'all stations, all bureaus',
          meaningBn: 'সকল কেন্দ্র / সকল শাখা',
          tag: 'General'
        },
        {
          kanji: '局長',
          kana: 'きょくちょう',
          romaji: 'kyokuchou',
          meaningEn: 'director of a bureau, postmaster',
          meaningBn: 'পোস্টমাস্টার / ব্যুরো প্রধান',
          tag: 'Job'
        }
      ],
      sentences: [
        {
          ja: '病院の向かいにある薬局で、お薬手帳を出して薬を受け取りました。',
          romaji: 'Byouin no mukai ni aru yakkyoku de, okusuri techou o dashite kusuri o uketorimashita.',
          meaningEn: 'At the pharmacy across from the hospital, I presented my medicine handbook and received the drugs.',
          meaningBn: 'হাসপাতালের সামনের ফার্মেসিতে মেডিসিন হ্যান্ডবুক জমা দিয়ে আমি ওষুধ গ্রহণ করেছি।'
        },
        {
          ja: '荷物を母国へ送るために、アパートの近くの郵便局へ行きました。',
          romaji: 'Nimotsu o bokoku e okuru tame ni, apaato no chikaku no yuubinkyoku e ikimashita.',
          meaningEn: 'In order to send a parcel to my home country, I went to the post office near my apartment.',
          meaningBn: 'দেশে পার্সেল পাঠানোর জন্য আমি আমার অ্যাপার্টমেন্টের কাছের পোস্ট অফিসে গিয়েছিলাম।'
        },
        {
          ja: '日本の薬局では薬剤師さんが薬の飲み方を丁寧に説明してくれます。',
          romaji: 'Nihon no yakkyoku dewa yakuzaishi-san ga kusuri no nomikata o teinei ni setsumei shite kuremasu.',
          meaningEn: 'In Japanese pharmacies, the pharmacist explains how to take the medicine very politely.',
          meaningBn: 'জাপানের ফার্মেসিতে ফার্মাসিস্টরা ওষুধ সেবনের নিয়ম বিনম্রভাবে বুঝিয়ে দেন।'
        }
      ],
      tamagoTip: {
        bn: 'ঘরের কোণে (尸) বিভাজিত কর্মস্থান বা ডেস্ক (口)। বিশেষ কাজের বিভাগ যেমন 薬局 (ফার্মেসি) ও 郵便局 (ডাকঘর)।',
        en: 'A designated chamber (尸) with assigned windows (口). Bureaus such as post offices and pharmacies.'
      }
    },

    // --- READ-ONLY KANJI (読める - 3 items) ---
    // 10. 体重
    {
      id: 'l12-taijuu',
      kanji: '体重',
      emoji: '⚖️',
      strokeCount: 16,
      jlpt: 'N4',
      category: 'read_only',
      readings: {
        onyomi: [
          { kana: 'タイジュウ', romaji: 'taijuu' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'body weight',
        bn: 'শরীরের ওজন'
      },
      vocab: [
        {
          kanji: '体重',
          kana: 'たいじゅう',
          romaji: 'taijuu',
          meaningEn: 'body weight',
          meaningBn: 'শরীরের ওজন',
          tag: 'Health N4'
        },
        {
          kanji: '体重計',
          kana: 'たいじゅうけい',
          romaji: 'taijuukei',
          meaningEn: 'bathroom scales, body weight scale',
          meaningBn: 'ওজন মাপার স্কেল বা যন্ত্র',
          tag: 'Health N4'
        },
        {
          kanji: '重い',
          kana: 'おもい',
          romaji: 'omoi',
          meaningEn: 'heavy',
          meaningBn: 'ভারী / ওজনদার',
          tag: 'Daily N5'
        },
        {
          kanji: '重要',
          kana: 'じゅうよう',
          romaji: 'juuyou',
          meaningEn: 'important, essential',
          meaningBn: 'গুরুত্বপূর্ণ',
          tag: 'Society N4'
        },
        {
          kanji: '体重を測る',
          kana: 'たいじゅうをはかる',
          romaji: 'taijuu o hakaru',
          meaningEn: 'to weigh oneself, to measure body weight',
          meaningBn: 'শরীরের ওজন মাপা',
          tag: 'Health'
        },
        {
          kanji: '健康診断',
          kana: 'けんこうしんだん',
          romaji: 'kenkoushindan',
          meaningEn: 'medical checkup, health screening',
          meaningBn: 'বার্ষিক স্বাস্থ্য পরীক্ষা',
          tag: 'Medical N4'
        }
      ],
      sentences: [
        {
          ja: '年に一度の会社の健康診断で、身長と体重を測定しました。',
          romaji: 'Toshi ni ichido no kaisha no kenkoushindan de, shinchou to taijuu o sokutei shimashita.',
          meaningEn: 'During the company\'s annual health checkup, they measured my height and body weight.',
          meaningBn: 'কোম্পানির বার্ষিক স্বাস্থ্য পরীক্ষায় আমার উচ্চতা এবং শরীরের ওজন মাপা হয়েছে।'
        },
        {
          ja: 'お風呂上がりに毎日体重計に乗って健康管理をしています。',
          romaji: 'Ofuro agari ni mainichi taijuukei ni notte kenkou kanri o shite imasu.',
          meaningEn: 'After taking a bath, I step on the scale every day to manage my health.',
          meaningBn: 'গোসলের পর প্রতিদিন ওজন স্কেলে উঠে আমি আমার স্বাস্থ্য পর্যবেক্ষণ করি।'
        },
        {
          ja: '日本に来てから美味しいラーメンを食べすぎて体重が三キロ増えました。',
          romaji: 'Nihon ni kite kara oishii raamen o tabesugite taijuu ga sankiro fuemashita.',
          meaningEn: 'Since coming to Japan, I ate too much delicious ramen and gained 3 kg in weight.',
          meaningBn: 'জাপানে আসার পর বেশি রামেন খাওয়ায় আমার ওজন ৩ কেজি বেড়ে গেছে।'
        }
      ],
      tamagoTip: {
        bn: '体 (শরীর) + 重 (ওজন/ভারী)। স্বাস্থ্য পরীক্ষা ও ফর্মের অত্যাবশ্যক কলাম 体重 (たいじゅう)।',
        en: 'Body (体) + Weight/Heavy (重). Essential medical checkup metric.'
      }
    },

    // 11. 受付
    {
      id: 'l12-uketsuke',
      kanji: '受付',
      emoji: '🛎️',
      strokeCount: 12,
      jlpt: 'N4',
      category: 'read_only',
      readings: {
        onyomi: [],
        kunyomi: [
          { kana: 'うけつけ', romaji: 'uketsuke' }
        ]
      },
      meanings: {
        en: 'reception, front desk, check-in window (clinic/hospital)',
        bn: 'অভ্যর্থনা, ফ্রন্ট ডেস্ক, রেজিস্ট্রেশন কাউন্টার'
      },
      vocab: [
        {
          kanji: '受付',
          kana: 'うけつけ',
          romaji: 'uketsuke',
          meaningEn: 'reception, information desk',
          meaningBn: 'অভ্যর্থনা / ফ্রন্ট ডেস্ক',
          tag: 'Place N4'
        },
        {
          kanji: '受ける',
          kana: 'うける',
          romaji: 'ukeru',
          meaningEn: 'to receive, to undergo (an exam)',
          meaningBn: 'গ্রহণ করা / পরীক্ষা দেওয়া',
          tag: 'Verb N4'
        },
        {
          kanji: '付ける',
          kana: 'つける',
          romaji: 'tsukeru',
          meaningEn: 'to attach, to turn on',
          meaningBn: 'যুক্ত করা / লাগানো',
          tag: 'Verb N5'
        },
        {
          kanji: '受付票',
          kana: 'うけつけひょう',
          romaji: 'uketsukehyou',
          meaningEn: 'reception ticket, check-in slip',
          meaningBn: 'টোকেন স্লিপ / সিরিয়াল টিকিট',
          tag: 'Hospital'
        },
        {
          kanji: '保険証',
          kana: 'ほけんしょう',
          romaji: 'hokenshou',
          meaningEn: 'health insurance card',
          meaningBn: 'স্বাস্থ্য বীমা কার্ড',
          tag: 'Hospital N4'
        },
        {
          kanji: '問診票',
          kana: 'もんしんひょう',
          romaji: 'monshinhyou',
          meaningEn: 'medical questionnaire form',
          meaningBn: 'লক্ষণ বর্ণনার প্রাথমিক ফর্ম',
          tag: 'Hospital'
        }
      ],
      sentences: [
        {
          ja: '病院に着いたら、まず受付に健康保険証を提出してください。',
          romaji: 'Byouin ni tsuitara, mazu uketsuke ni kenkou hokenshou o teishutsu shite kudasai.',
          meaningEn: 'When you arrive at the hospital, first submit your health insurance card at the reception desk.',
          meaningBn: 'হাসপাতালে পৌঁছে প্রথমে অভ্যর্থনা (রিসিপশন) ডেস্কে স্বাস্থ্য বীমা কার্ড জমা দিতে হবে।'
        },
        {
          ja: '受付で問診票を渡されたので、現在の熱や症状を記入しました。',
          romaji: 'Uketsuke de monshinhyou o watasareta node, genzai no netsu ya shoujou o kinyuu shimashita.',
          meaningEn: 'Because I was handed a medical questionnaire at the desk, I wrote down my current fever and symptoms.',
          meaningBn: 'রিসিপশনে আমাকে একটি ফর্ম দেওয়ায় আমি বর্তমান জ্বর ও উপসর্গগুলো লিখে দিয়েছি।'
        },
        {
          ja: '診察が終わったら、受付の前のソファでお名前が呼ばれるまでお待ちください。',
          romaji: 'Shinsatsu ga owattara, uketsuke no mae no sofa de onamae ga yobareru made omachi kudasai.',
          meaningEn: 'Once the consultation ends, please wait on the sofa in front of the reception until your name is called.',
          meaningBn: 'ডাক্তার দেখানো শেষ হলে নাম ডাকার আগ পর্যন্ত রিসিপশনের সামনের সোফায় অপেক্ষা করুন।'
        }
      ],
      tamagoTip: {
        bn: 'রোগীর আগমন গ্রহণ করা (受) এবং ফাইলভুক্ত করা (付)। ক্লিনিকের প্রথম স্টপ 受付 (うけつけ)।',
        en: 'Receive (受) + Attach/Register (付). The first desk to show your health insurance card.'
      }
    },

    // 12. 熱
    {
      id: 'l12-netsu',
      kanji: '熱',
      emoji: '🌡️',
      strokeCount: 15,
      jlpt: 'N4',
      category: 'read_only',
      readings: {
        onyomi: [
          { kana: 'ネツ', romaji: 'netsu' }
        ],
        kunyomi: [
          { kana: 'あつ・い', romaji: 'atsu-i' }
        ]
      },
      meanings: {
        en: 'fever, heat, temperature, passion, zeal',
        bn: 'জ্বর, উত্তাপ, দেহের তাপমাত্রা'
      },
      vocab: [
        {
          kanji: '熱',
          kana: 'ねつ',
          romaji: 'netsu',
          meaningEn: 'fever, heat',
          meaningBn: 'জ্বর / দেহের উত্তাপ',
          tag: 'Health N4'
        },
        {
          kanji: '熱がある',
          kana: 'ねつがある',
          romaji: 'netsu ga aru',
          meaningEn: 'to have a fever',
          meaningBn: 'জ্বর থাকা / গায়ে জ্বর আসা',
          tag: 'Health N4'
        },
        {
          kanji: '熱を測る',
          kana: 'ねつをはかる',
          romaji: 'netsu o hakaru',
          meaningEn: 'to take one\'s temperature',
          meaningBn: 'থার্মোমিটার দিয়ে জ্বর মাপা',
          tag: 'Health N4'
        },
        {
          kanji: '体温計',
          kana: 'たいおんけい',
          romaji: 'taionkei',
          meaningEn: 'clinical thermometer',
          meaningBn: 'থার্মোমিটার',
          tag: 'Medical N4'
        },
        {
          kanji: '高熱',
          kana: 'こうねつ',
          romaji: 'kounetsu',
          meaningEn: 'high fever',
          meaningBn: 'তীব্র জ্বর (৩৮ ডিগ্রির বেশি)',
          tag: 'Medical N4'
        },
        {
          kanji: '熱心な',
          kana: 'ねっしんな',
          romaji: 'nesshin na',
          meaningEn: 'enthusiastic, passionate, zealous',
          meaningBn: 'একনিষ্ঠ / উৎসাহী',
          tag: 'Personality N4'
        }
      ],
      sentences: [
        {
          ja: '朝起きたら頭が痛くて、熱を測ったら三十八度五分もありました。',
          romaji: 'Asa okitara atama ga itakute, netsu o hakattara sanjuuhachido gobu mo arimashita.',
          meaningEn: 'When I woke up in the morning my head hurt, and when I took my temperature it was as high as 38.5°C.',
          meaningBn: 'সকালে ওঠার পর মাথা ব্যথা করছিল, থার্মোমিটারে মেপে দেখি ৩৮.৫ ডিগ্রি তীব্র জ্বর।'
        },
        {
          ja: '「昨晩から高い熱があるので、今日のアルバイトを休ませてください。」',
          romaji: '"Sakuban kara takai netsu ga aru node, kyou no arubaito o yasumasete kudasai."',
          meaningEn: '"Because I have had a high fever since last night, please allow me to take off from part-time work today."',
          meaningBn: '"গত রাত থেকে তীব্র জ্বর থাকায় আজকের খণ্ডকালীন কাজ থেকে আমাকে ছুটি দিন।"'
        },
        {
          ja: '解熱剤を飲んで冷えピタを額に貼ったら、少し熱が下がりました。',
          romaji: 'Genetsuzai o nonde hiepita o hitai ni hattara, sukoshi netsu ga sagarimashita.',
          meaningEn: 'After taking a fever reducer and putting a cooling sheet on my forehead, my fever went down a bit.',
          meaningBn: 'জ্বরের ওষুধ খেয়ে কপালে কুলিং জেল প্যাচ লাগানোর পর জ্বর কিছুটা কমেছে।'
        }
      ],
      tamagoTip: {
        bn: 'উপরে গাছপালা ও শক্তি এবং নিচে আগুনের শিখা (灬)। দেহে তাপের বৃদ্ধি বা জ্বর 熱 (ねつ)।',
        en: 'The flame radical (灬) boiling at the bottom. Indicates body fever or intense passion.'
      }
    },

    // --- VISUAL RECOGNITION KANJI (見て、わかる - 2 items) ---
    // 13. 内科
    {
      id: 'l12-naika',
      kanji: '内科',
      emoji: '🩺',
      strokeCount: 13,
      jlpt: 'N4',
      category: 'visual_recognition',
      readings: {
        onyomi: [
          { kana: 'ナイカ', romaji: 'naika' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'internal medicine, general physician clinic (colds, stomach flu, fevers)',
        bn: 'মেডিসিন বিভাগ / ইন্টারনাল মেডিসিন (সর্দি, জ্বর, পেটের অসুখ)'
      },
      vocab: [
        {
          kanji: '内科',
          kana: 'ないか',
          romaji: 'naika',
          meaningEn: 'internal medicine, physician',
          meaningBn: 'মেডিসিন বিভাগ',
          tag: 'Medical N4'
        },
        {
          kanji: '内側',
          kana: 'うちがわ',
          romaji: 'uchigawa',
          meaningEn: 'inside, interior',
          meaningBn: 'ভেতরের পাশ',
          tag: 'Daily N5'
        },
        {
          kanji: '案内',
          kana: 'あんない',
          romaji: 'annai',
          meaningEn: 'guidance, information tour',
          meaningBn: 'দিকনির্দেশনা / পথ দেখানো',
          tag: 'Daily N5'
        },
        {
          kanji: '科目',
          kana: 'かもく',
          romaji: 'kamoku',
          meaningEn: 'subject, curriculum course',
          meaningBn: 'বিষয় / পাঠ্য কোর্স',
          tag: 'School N4'
        },
        {
          kanji: '総合内科',
          kana: 'そうごうないか',
          romaji: 'sougou naika',
          meaningEn: 'general internal medicine',
          meaningBn: 'জেনারেল মেডিসিন শাখা',
          tag: 'Medical'
        },
        {
          kanji: '胃腸科',
          kana: 'いちょうか',
          romaji: 'ichouka',
          meaningEn: 'gastroenterology (stomach & bowels)',
          meaningBn: 'পরিপাকতন্ত্র ও গ্যাস্ট্রো বিভাগ',
          tag: 'Medical'
        }
      ],
      sentences: [
        {
          ja: '咳と発熱がひどいときは、まず駅前の「〇〇内科クリニック」を受診しましょう。',
          romaji: 'Seki to hatsunetsu ga hidoi toki wa, mazu ekimae no "XX naika kurinikku" o jushin shimashou.',
          meaningEn: 'When your cough and fever are severe, first visit the local "XX Internal Medicine Clinic" in front of the station.',
          meaningBn: 'কাশি ও জ্বরের মাত্রা বেশি হলে প্রথমে স্টেশনের সামনের মেডিসিন ক্লিনিকে ডাক্তার দেখানো উচিত।'
        },
        {
          ja: '総合病院の案内板で内科の待合室を探しました。',
          romaji: 'Sougou byouin no annaiban de naika no machiaishitsu o sagashimashita.',
          meaningEn: 'I looked for the internal medicine waiting room on the general hospital directory board.',
          meaningBn: 'জেনারেল হাসপাতালের নির্দেশক বোর্ডে আমি মেডিসিন বিভাগের ওয়েটিং রুম খুঁজে নিয়েছি।'
        },
        {
          ja: '内科の先生がお腹を優しく触診して薬を処方してくれました。',
          romaji: 'Naika no sensei ga onaka o yasashiku shokushin shite kusuri o shohou shite kuremashita.',
          meaningEn: 'The internal medicine doctor gently palpated my abdomen and prescribed medication.',
          meaningBn: 'মেডিসিনের ডাক্তার আলতো করে পেট পরীক্ষা করে ওষুধ প্রেসক্রাইব করে দিলেন।'
        }
      ],
      tamagoTip: {
        bn: '内 (অভ্যন্তরীণ) + 科 (বিভাগ)। দেহের ভেতরের অসুখ (জ্বর, ঠান্ডা, পেটের ব্যথা) দেখানোর জায়গা 内科 (ないか)।',
        en: 'Inside (内) + Department (科). For non-surgical ailments like colds, flu, and stomach aches.'
      }
    },

    // 14. 外科
    {
      id: 'l12-geka',
      kanji: '外科',
      emoji: '🩹',
      strokeCount: 14,
      jlpt: 'N4',
      category: 'visual_recognition',
      readings: {
        onyomi: [
          { kana: 'ゲカ', romaji: 'geka' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'surgery department, surgical clinic (cuts, fractures, wounds, sprains)',
        bn: 'সার্জারি বিভাগ / শল্যচিকিৎসা (কাটাছেঁড়া, আঘাত, ভাঙা হাড়)'
      },
      vocab: [
        {
          kanji: '外科',
          kana: 'げか',
          romaji: 'geka',
          meaningEn: 'surgical clinic, surgery department',
          meaningBn: 'সার্জারি / শল্য বিভাগ',
          tag: 'Medical N4'
        },
        {
          kanji: '整形外科',
          kana: 'せいけいげか',
          romaji: 'seikeigeka',
          meaningEn: 'orthopedics (bones, joints, sprains)',
          meaningBn: 'অর্থোপেডিকস (হাড়, জয়েন্ট ও মচকে যাওয়া)',
          tag: 'Medical N4'
        },
        {
          kanji: '外科手術',
          kana: 'げかしゅじゅつ',
          romaji: 'geka shujutsu',
          meaningEn: 'surgical operation',
          meaningBn: 'সার্জিক্যাল অপারেশন',
          tag: 'Medical N4'
        },
        {
          kanji: '外国',
          kana: 'がいこく',
          romaji: 'gaikoku',
          meaningEn: 'foreign country',
          meaningBn: 'বিদেশ',
          tag: 'Daily N5'
        },
        {
          kanji: '骨折',
          kana: 'こっせつ',
          romaji: 'kossetsu',
          meaningEn: 'bone fracture',
          meaningBn: 'হাড় ভেঙে যাওয়া',
          tag: 'Health N4'
        },
        {
          kanji: '包帯',
          kana: 'ほうたい',
          romaji: 'houtai',
          meaningEn: 'bandage, dressing',
          meaningBn: 'ব্যান্ডেজ',
          tag: 'Medical N4'
        }
      ],
      sentences: [
        {
          ja: 'サッカー中に足を捻挫して腫れてしまったので、整形外科でレントゲンを撮りました。',
          romaji: 'Sakkaa-chuu ni ashi o nenza shite harete shimatta node, seikeigeka de rentogen o torimashita.',
          meaningEn: 'Because I sprained my ankle playing soccer and it swelled, I had an X-ray taken at orthopedics.',
          meaningBn: 'ফুটবল খেলার সময় পা মচকে ফুলে যাওয়ায় অর্থোপেডিক সার্জারিতে গিয়ে এক্স-রে করিয়েছি।'
        },
        {
          ja: '包丁で指を深く切ったときは、内科ではなく外科を受診する必要があります。',
          romaji: 'Houchou de yubi o fukaku kitta toki wa, naika dewa naku geka o jushin suru hitsuyou ga arimasu.',
          meaningEn: 'When you cut your finger deeply with a kitchen knife, you need to visit surgery rather than internal medicine.',
          meaningBn: 'বঁটি বা ছুরি দিয়ে আঙুল গভীরভাবে কেটে গেলে মেডিসিন নয়, সার্জারিতে (外科) ডাক্তার দেখাতে হয়।'
        },
        {
          ja: '怪我の処置が終わると、外科の看護師さんが綺麗に包帯を巻いてくれました。',
          romaji: 'Kega no shochi ga owaru to, geka no kangoshi-san ga kirei ni houtai o maite kuremashita.',
          meaningEn: 'When the wound treatment was finished, the surgery nurse wrapped the bandage cleanly.',
          meaningBn: 'আঘাতের ড্রেসিং শেষ হলে সার্জারির নার্স সুন্দর করে ব্যান্ডেজ বেঁধে দিলেন।'
        }
      ],
      tamagoTip: {
        bn: '外 (বাইরে/বাহ্যিক আঘাত) + 科 (বিভাগ)। কাটাছেঁড়া, হাড় ভাঙা ও সেলাইয়ের জন্য 外科 (げか) বা 整形外科।',
        en: 'Outside/External (外) + Department (科). For wounds, fractures, and physical surgeries.'
      }
    }
  ]
};
