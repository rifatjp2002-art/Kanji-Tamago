import { Lesson } from '../types/kanji';

export const lesson8: Lesson = {
  id: 8,
  number: 8,
  titleJa: '家族のこと',
  titleRomaji: 'Kazoku no koto',
  titleBn: 'পরিবারের কথা ও দৈহিক বৈশিষ্ট্য (পরিবার, সম্পর্ক ও বিবরণ)',
  titleEn: 'About Family & Physical Descriptions (Kinship & Adjectives)',
  descriptionBn: 'পরিবারের সদস্য ও আত্মীয়স্বজন (家, 族, 父, 母, 兄, 弟, 姉, 妹, 犬), শারীরিক উচ্চতা ও মাপজোখের বিশেষণ (高, 長, 短) এবং আত্মপরিচয় ও জীবনবৃত্তান্তের ফরমের জরুরি শব্দ যেমন শখ (趣味), জন্মস্থান (出身地) ও পেশা (職業)।',
  descriptionEn: 'Family terms for one\'s own and others\' relatives, pet dog (犬), physical descriptive adjectives (tall/expensive, long, short), and personal profile fields including hobbies (趣味), birthplace (出身地), and occupation (職業).',
  kanjiList: [
    // --- MAIN KANJI (12) ---
    // 1. 家
    {
      id: 'l8-ie',
      kanji: '家',
      emoji: '🏡',
      strokeCount: 10,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'カ', romaji: 'ka' },
          { kana: 'ケ', romaji: 'ke' }
        ],
        kunyomi: [
          { kana: 'いえ', romaji: 'ie' },
          { kana: 'や', romaji: 'ya' },
          { kana: 'うち', romaji: 'uchi' }
        ]
      },
      meanings: {
        en: 'house, home, family, specialist',
        bn: 'বাড়ি, ঘর, পরিবার, বিশেষজ্ঞ'
      },
      vocab: [
        {
          kanji: '家',
          kana: 'いえ / うち',
          romaji: 'ie / uchi',
          meaningEn: 'house, home',
          meaningBn: 'বাড়ি / নিজের ঘর',
          tag: 'Daily N5'
        },
        {
          kanji: '家族',
          kana: 'かぞく',
          romaji: 'kazoku',
          meaningEn: 'family, household members',
          meaningBn: 'পরিবার',
          tag: 'Family N5'
        },
        {
          kanji: '家賃',
          kana: 'やちん',
          romaji: 'yachin',
          meaningEn: 'house rent, apartment rent',
          meaningBn: 'বাড়ি ভাড়া',
          tag: 'Daily N4'
        },
        {
          kanji: '大家さん',
          kana: 'おおやさん',
          romaji: 'ooyasan',
          meaningEn: 'landlord, landlady',
          meaningBn: 'বাড়ির মালিক / বাড়িওয়ালা',
          tag: 'Daily N4'
        },
        {
          kanji: '作家',
          kana: 'さっか',
          romaji: 'sakka',
          meaningEn: 'author, writer, novelist',
          meaningBn: 'লেখক / সাহিত্যিক',
          tag: 'Career N4'
        },
        {
          kanji: '家内',
          kana: 'かない',
          romaji: 'kanai',
          meaningEn: 'my wife (humble expression)',
          meaningBn: 'আমার স্ত্রী (বিনীত রূপ)',
          tag: 'Family N4'
        }
      ],
      sentences: [
        {
          ja: '仕事が終わったら、真っ直ぐ自分の家に帰ります。',
          romaji: 'Shigoto ga owattara, massugu jibun no ie ni kaerimasu.',
          meaningEn: 'When work is over, I go directly back to my house.',
          meaningBn: 'কাজ শেষ হলে আমি সোজা নিজের বাড়িতে ফিরে যাই।'
        },
        {
          ja: '毎月二十五日にアパートの家賃を銀行で振り込みます。',
          romaji: 'Maitsuki nijuugonichi ni apaato no yachin o ginkou de furikomimasu.',
          meaningEn: 'On the 25th of every month, I transfer the apartment rent via the bank.',
          meaningBn: 'প্রতি মাসের ২৫ তারিখে আমি ব্যাংকের মাধ্যমে ফ্ল্যাটের বাড়ি ভাড়া পরিশোধ করি।'
        },
        {
          ja: 'バングラデシュにいる私の家族はみんな元気です。',
          romaji: 'Banguradeshu ni iru watashi no kazoku wa minna genki desu.',
          meaningEn: 'My family back in Bangladesh are all doing well.',
          meaningBn: 'বাংলাদেশে থাকা আমার পরিবারের সবাই সুস্থ ও ভালো আছেন।'
        }
      ],
      tamagoTip: {
        bn: 'ছাদের (宀) নিচে গৃহপালিত শূকর বা পশু (豕) পালন করা গৃহ। পরিবার (家族) ও বাড়ি ভাড়া (家賃)-এর মূল কাঞ্জি।',
        en: 'A roof (宀) sheltering domestic livestock (豕). Represents hearth, home, and professional mastery.'
      }
    },

    // 2. 族
    {
      id: 'l8-zoku',
      kanji: '族',
      emoji: '👨‍👩‍👧‍👦',
      strokeCount: 11,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ゾク', romaji: 'zoku' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'tribe, clan, family, group',
        bn: 'পরিবার, বংশ, গোষ্ঠী, দল'
      },
      vocab: [
        {
          kanji: '家族',
          kana: 'かぞく',
          romaji: 'kazoku',
          meaningEn: 'family',
          meaningBn: 'পরিবার',
          tag: 'Family N5'
        },
        {
          kanji: '親族',
          kana: 'しんぞく',
          romaji: 'shinzoku',
          meaningEn: 'relatives, kin',
          meaningBn: 'আত্মীয়স্বজন',
          tag: 'Formal N4'
        },
        {
          kanji: '民族',
          kana: 'みんぞく',
          romaji: 'minzoku',
          meaningEn: 'ethnic group, nationality, race',
          meaningBn: 'জাতিগোষ্ঠী / উপজাতি',
          tag: 'Society N4'
        },
        {
          kanji: '水族館',
          kana: 'すいぞくかん',
          romaji: 'suizokukan',
          meaningEn: 'aquarium (public marine park)',
          meaningBn: 'অ্যাকোয়ারিয়াম (সামুদ্রিক প্রাণী পার্ক)',
          tag: 'Leisure N4'
        },
        {
          kanji: '貴族',
          kana: 'きぞく',
          romaji: 'kizoku',
          meaningEn: 'nobility, aristocrat',
          meaningBn: 'অভিজাত বংশ / জমিদার',
          tag: 'History'
        },
        {
          kanji: '核家族',
          kana: 'かくかぞく',
          romaji: 'kakukazoku',
          meaningEn: 'nuclear family',
          meaningBn: 'একক পরিবার (বাবা-মা ও সন্তান)',
          tag: 'Social'
        }
      ],
      sentences: [
        {
          ja: '私の家族は父、母、兄と私の四人家族です。',
          romaji: 'Watashi no kazoku wa chichi, haha, ani to watashi no yonin kazoku desu.',
          meaningEn: 'My family has four members: my father, mother, older brother, and myself.',
          meaningBn: 'আমার পরিবারে বাবা, মা, বড় ভাই এবং আমি—মোট চারজন সদস্য।'
        },
        {
          ja: '週末に家族と一緒に品川の水族館へ遊びに行きました。',
          romaji: 'Shuumatsu ni kazoku to issho ni Shinagawa no suizokukan e asobi ni ikimashita.',
          meaningEn: 'Over the weekend, I went with my family to the Shinagawa Aquarium.',
          meaningBn: 'সাপ্তাহিক ছুটিতে পরিবারের সাথে আমি শিনাগাওয়া অ্যাকোয়ারিয়ামে ঘুরতে গিয়েছিলাম।'
        },
        {
          ja: 'お正月に親族全員が集まって楽しい時間を過ごしました。',
          romaji: 'Oshougatsu ni shinzoku zen\'in ga atsumatte tanoshii jikan o sugoshimashita.',
          meaningEn: 'On New Year\'s, all relatives gathered and spent a wonderful time together.',
          meaningBn: 'নতুন বছরের শুরুতে সকল আত্মীয়স্বজন একত্রিত হয়ে চমৎকার সময় কাটিয়েছি।'
        }
      ],
      tamagoTip: {
        bn: 'পতাকা বা নিশান (方) নিচে একদল তীরন্দাজ যোদ্ধা (矢) একত্রিত হওয়া। রক্তের বন্ধন ও গোষ্ঠী হলো 族 (家族)।',
        en: 'A banner (方) uniting warriors with arrows (矢). Signifies kin, clan, and family ties (家族).'
      }
    },

    // 3. 父
    {
      id: 'l8-chichi',
      kanji: '父',
      emoji: '👨',
      strokeCount: 4,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'フ', romaji: 'fu' }
        ],
        kunyomi: [
          { kana: 'ちち', romaji: 'chichi' },
          { kana: 'とう', romaji: 'tou' }
        ]
      },
      meanings: {
        en: 'father (one\'s own / humble)',
        bn: 'বাবা, পিতা'
      },
      vocab: [
        {
          kanji: '父',
          kana: 'ちち',
          romaji: 'chichi',
          meaningEn: 'my father (used when talking about own dad)',
          meaningBn: 'আমার বাবা (অন্যের কাছে নিজের বাবার কথা বলতে)',
          tag: 'Family N5'
        },
        {
          kanji: 'お父さん',
          kana: 'おとうさん',
          romaji: 'otousan',
          meaningEn: 'father (polite / someone else\'s dad / calling dad)',
          meaningBn: 'বাবা (শ্রদ্ধাভরে অন্যের বাবা বা বাবাকে ডাকতে)',
          tag: 'Family N5'
        },
        {
          kanji: '父母',
          kana: 'ふぼ',
          romaji: 'fubo',
          meaningEn: 'father and mother, parents',
          meaningBn: 'পিতা-মাতা / মা-বাবা',
          tag: 'Formal N4'
        },
        {
          kanji: '祖父',
          kana: 'そふ',
          romaji: 'sofu',
          meaningEn: 'my grandfather',
          meaningBn: 'আমার দাদা / নানা',
          tag: 'Family N4'
        },
        {
          kanji: '叔父 / 伯父',
          kana: 'おじ',
          romaji: 'oji',
          meaningEn: 'uncle',
          meaningBn: 'চাচা / মামা / খালু / ফুফা',
          tag: 'Family N4'
        },
        {
          kanji: '父親',
          kana: 'ちちおや',
          romaji: 'chichioya',
          meaningEn: 'father, male parent',
          meaningBn: 'পিতা / পুরুষ অভিভাবক',
          tag: 'Formal N4'
        }
      ],
      sentences: [
        {
          ja: '私の父は高校の数学の教師をしています。',
          romaji: 'Watashi no chichi wa koukou no suugaku no kyoushi o shite imasu.',
          meaningEn: 'My father is a high school mathematics teacher.',
          meaningBn: 'আমার বাবা একটি উচ্চ বিদ্যালয়ের গণিত শিক্ষক।'
        },
        {
          ja: 'お父さんのお仕事は何ですか。ー銀行員です。',
          romaji: 'Otousan no oshigoto wa nan desu ka. - Ginkouin desu.',
          meaningEn: 'What is your father\'s job? - He is a bank employee.',
          meaningBn: 'আপনার বাবার পেশা কী? — তিনি একজন ব্যাংক কর্মকর্তা।'
        },
        {
          ja: '毎週末に祖父の畑を手伝いに行きます。',
          romaji: 'Maishuumatsu ni sofu no hatake o tetsudai ni ikimasu.',
          meaningEn: 'Every weekend I go to help at my grandfather\'s farm.',
          meaningBn: 'প্রতি সাপ্তাহিক ছুটিতে আমি আমার দাদার সবজিখেতে সাহায্য করতে যাই।'
        }
      ],
      tamagoTip: {
        bn: 'হাতে একটি লাঠি বা কুড়াল ধরে পরিবার রক্ষা করা ও শাসন করা অভিভাবক। নিজের বাবা হলো 父 (ちち) এবং অন্যের বাবা お父さん।',
        en: 'A hand wielding a staff/axe of authority. Use 父 for one\'s own father, and お父さん for others\'.'
      }
    },

    // 4. 母
    {
      id: 'l8-haha',
      kanji: '母',
      emoji: '👩',
      strokeCount: 5,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ボ', romaji: 'bo' }
        ],
        kunyomi: [
          { kana: 'はは', romaji: 'haha' },
          { kana: 'かあ', romaji: 'kaa' }
        ]
      },
      meanings: {
        en: 'mother (one\'s own / humble)',
        bn: 'মা, মাতা'
      },
      vocab: [
        {
          kanji: '母',
          kana: 'はは',
          romaji: 'haha',
          meaningEn: 'my mother (humble when speaking to outsiders)',
          meaningBn: 'আমার মা (বাইরের মানুষের সাথে কথা বলার সময়)',
          tag: 'Family N5'
        },
        {
          kanji: 'お母さん',
          kana: 'おかあさん',
          romaji: 'okaasan',
          meaningEn: 'mother (polite / addressing mom)',
          meaningBn: 'আম্মু / মা (শ্রদ্ধাভরে বা মাকে ডাকতে)',
          tag: 'Family N5'
        },
        {
          kanji: '祖母',
          kana: 'そぼ',
          romaji: 'sobo',
          meaningEn: 'my grandmother',
          meaningBn: 'আমার দাদি / নানি',
          tag: 'Family N4'
        },
        {
          kanji: '母国語',
          kana: 'ぼこくご',
          romaji: 'bokokugo',
          meaningEn: 'mother tongue, native language',
          meaningBn: 'মাতৃভাষা',
          tag: 'Language N4'
        },
        {
          kanji: '母親',
          kana: 'ははおや',
          romaji: 'hahaoya',
          meaningEn: 'mother, female parent',
          meaningBn: 'মা / নারী অভিভাবক',
          tag: 'Formal N4'
        },
        {
          kanji: '母校',
          kana: 'ぼこう',
          romaji: 'bokou',
          meaningEn: 'alma mater (one\'s former school)',
          meaningBn: 'নিজের প্রাক্তন শিক্ষাপ্রতিষ্ঠান',
          tag: 'Formal'
        }
      ],
      sentences: [
        {
          ja: '母の手料理の中で、特にビリヤニが一番美味しいです。',
          romaji: 'Haha no teryouri no naka de, tokuni biriyani ga ichiban oishii desu.',
          meaningEn: 'Among my mother\'s home-cooked dishes, the biryani is especially delicious.',
          meaningBn: 'মায়ের হাতের রান্নার মধ্যে বিশেষ করে বিরিয়ানি সবচেয়ে সেরা লাগে।'
        },
        {
          ja: 'お母さんによろしくお伝えください。',
          romaji: 'Okaasan ni yoroshiku otsutae kudasai.',
          meaningEn: 'Please give my warm regards to your mother.',
          meaningBn: 'আপনার মাকে আমার সালাম ও শুভেচ্ছা জানাবেন।'
        },
        {
          ja: '私の母国語はベンガル語で、英語と日本語も話せます。',
          romaji: 'Watashi no bokokugo wa Bengarugo de, Eigo to Nihongo mo hanasemasu.',
          meaningEn: 'My mother tongue is Bengali, and I can also speak English and Japanese.',
          meaningBn: 'আমার মাতৃভাষা বাংলা, পাশাপাশি ইংরেজি ও জাপানি ভাষায়ও কথা বলতে পারি।'
        }
      ],
      tamagoTip: {
        bn: 'সন্তানকে কোলে নিয়ে বুকে দুধ পান করানো মমতাময়ী মা (বুকের দুটি স্তন নির্দেশক দুটি বিন্দু)। নিজের মা হলো 母 (はは)।',
        en: 'A mother holding an infant to nurse, shown with two nurturing dots. Use 母 for own mom and お母さん for others\'.'
      }
    },

    // 5. 兄
    {
      id: 'l8-ani',
      kanji: '兄',
      emoji: '👦',
      strokeCount: 5,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ケイ', romaji: 'kei' },
          { kana: 'キョウ', romaji: 'kyou' }
        ],
        kunyomi: [
          { kana: 'あに', romaji: 'ani' },
          { kana: 'にい', romaji: 'nii' }
        ]
      },
      meanings: {
        en: 'older brother, elder brother',
        bn: 'বড় ভাই, অগ্রজ'
      },
      vocab: [
        {
          kanji: '兄',
          kana: 'あに',
          romaji: 'ani',
          meaningEn: 'my older brother',
          meaningBn: 'আমার বড় ভাই',
          tag: 'Family N5'
        },
        {
          kanji: 'お兄さん',
          kana: 'おにいさん',
          romaji: 'oniisan',
          meaningEn: 'older brother (polite / addressing older brother / young man)',
          meaningBn: 'বড় ভাইয়া (শ্রদ্ধাভরে বা অন্য কারো বড় ভাই)',
          tag: 'Family N5'
        },
        {
          kanji: '兄弟',
          kana: 'きょうだい',
          romaji: 'kyoudai',
          meaningEn: 'brothers, siblings',
          meaningBn: 'ভাই-বোন / ভাই-ভাই',
          tag: 'Family N5'
        },
        {
          kanji: '長兄',
          kana: 'ちょうけい',
          romaji: 'choukei',
          meaningEn: 'eldest brother',
          meaningBn: 'সবার বড় ভাই (জ্যেষ্ঠ ভ্রাতা)',
          tag: 'Formal'
        },
        {
          kanji: '義兄',
          kana: 'ぎけい',
          romaji: 'gikei',
          meaningEn: 'brother-in-law (older)',
          meaningBn: 'দুলাভাই / ভায়রা / বড় শ্যালক',
          tag: 'Family'
        },
        {
          kanji: '兄貴',
          kana: 'あにき',
          romaji: 'aniki',
          meaningEn: 'bro, big brother (informal / friendly)',
          meaningBn: 'বড় ভাইয়া / দোস্তসম বড় ভাই',
          tag: 'Slang'
        }
      ],
      sentences: [
        {
          ja: '私の兄は自動車メーカーでエンジニアをしています。',
          romaji: 'Watashi no ani wa jidousha meekaa de enjinia o shite imasu.',
          meaningEn: 'My older brother is working as an engineer at an automobile maker.',
          meaningBn: 'আমার বড় ভাই একটি অটোমোবাইল কোম্পানিতে প্রকৌশলী হিসেবে কাজ করছেন।'
        },
        {
          ja: '兄弟は何人いますか。ー兄が一人と妹が一人います。',
          romaji: 'Kyoudai wa nannin imasu ka. - Ani ga hitori to imouto ga hitori imasu.',
          meaningEn: 'How many siblings do you have? - I have one older brother and one younger sister.',
          meaningBn: 'আপনার ভাই-বোন কয়জন? — আমার এক বড় ভাই এবং এক ছোট বোন আছে।'
        },
        {
          ja: '駅前でお兄さんに道を尋ねたら、親切に教えてくれました。',
          romaji: 'Ekimae de oniisan ni michi o tazunetara, shinsetsu ni oshiete kuremashita.',
          meaningEn: 'When I asked a young man for directions near the station, he kindly guided me.',
          meaningBn: 'স্টেশনের সামনে এক ভাইকে পথ জিজ্ঞেস করতেই উনি খুব আন্তরিকভাবে চিনিয়ে দিলেন।'
        }
      ],
      tamagoTip: {
        bn: 'বড় মুখ (口) ও দুটি পা (儿)। পরিবারের ছোটদের পরামর্শ ও নেতৃত্ব দেওয়া বড় ভাই। নিজের বড় ভাই 兄 এবং ভাই-বোন 兄弟।',
        en: 'A big mouth (口) upon legs (儿), representing the elder brother speaking for family members.'
      }
    },

    // 6. 弟
    {
      id: 'l8-otouto',
      kanji: '弟',
      emoji: '🧒',
      strokeCount: 7,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'テイ', romaji: 'tei' },
          { kana: 'ダイ', romaji: 'dai' },
          { kana: 'デ', romaji: 'de' }
        ],
        kunyomi: [
          { kana: 'おとうと', romaji: 'otouto' }
        ]
      },
      meanings: {
        en: 'younger brother, junior',
        bn: 'ছোট ভাই, অনুজ'
      },
      vocab: [
        {
          kanji: '弟',
          kana: 'おとうと',
          romaji: 'otouto',
          meaningEn: 'my younger brother',
          meaningBn: 'আমার ছোট ভাই',
          tag: 'Family N5'
        },
        {
          kanji: '弟さん',
          kana: 'おとうとさん',
          romaji: 'otoutosan',
          meaningEn: 'someone else\'s younger brother',
          meaningBn: 'আপনার বা অন্য কারো ছোট ভাই',
          tag: 'Family N5'
        },
        {
          kanji: '兄弟',
          kana: 'きょうだい',
          romaji: 'kyoudai',
          meaningEn: 'brothers, siblings',
          meaningBn: 'ভাই-বোন',
          tag: 'Family N5'
        },
        {
          kanji: '弟子',
          kana: 'でし',
          romaji: 'deshi',
          meaningEn: 'pupil, apprentice, disciple',
          meaningBn: 'শিষ্য / শাগরেদ / ছাত্র',
          tag: 'Culture N4'
        },
        {
          kanji: '末弟',
          kana: 'まってい',
          romaji: 'mattei',
          meaningEn: 'youngest brother',
          meaningBn: 'সবার ছোট ভাই',
          tag: 'Formal'
        },
        {
          kanji: '義弟',
          kana: 'ぎてい',
          romaji: 'gitei',
          meaningEn: 'younger brother-in-law',
          meaningBn: 'ছোট শ্যালক / ছোট দেবর',
          tag: 'Family'
        }
      ],
      sentences: [
        {
          ja: '私の弟は今年高校に入学しました。',
          romaji: 'Watashi no otouto wa kotoshi koukou ni nyuugaku shimashita.',
          meaningEn: 'My younger brother enrolled in high school this year.',
          meaningBn: 'আমার ছোট ভাই এ বছর হাই স্কুলে ভর্তি হয়েছে।'
        },
        {
          ja: '弟さんはサッカーがとても上手ですね。',
          romaji: 'Otoutosan wa sakkaa ga totemo jouzu desu ne.',
          meaningEn: 'Your younger brother is very good at soccer, isn\'t he?',
          meaningBn: 'আপনার ছোট ভাই তো ফুটবল খেলায় দারুণ পারদর্শী, তাই না?'
        },
        {
          ja: '有名な寿司職人の弟子として毎日修行しています。',
          romaji: 'Yuumei na sushi shokunin no deshi toshite mainichi shugyou shite imasu.',
          meaningEn: 'As an apprentice to a famous sushi master, I train every day.',
          meaningBn: 'বিখ্যাত সুশি মাস্টারের শিষ্য (弟子) হিসেবে প্রতিদিন কাজ শিখছি।'
        }
      ],
      tamagoTip: {
        bn: 'একটি খুঁটির গায়ে দড়ি বা ফিতা জড়িয়ে নিচের দিকে বাঁধানো। বয়সে ছোট অনুজ বোঝাতে 弟 (おとうと)।',
        en: 'A rod wound around with leather strap. Denotes junior rank or younger brother.'
      }
    },

    // 7. 姉
    {
      id: 'l8-ane',
      kanji: '姉',
      emoji: '👧',
      strokeCount: 8,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'シ', romaji: 'shi' }
        ],
        kunyomi: [
          { kana: 'あね', romaji: 'ane' },
          { kana: 'ねえ', romaji: 'nee' }
        ]
      },
      meanings: {
        en: 'older sister, elder sister',
        bn: 'বড় বোন, আপু, জ্যেষ্ঠা ভগিনী'
      },
      vocab: [
        {
          kanji: '姉',
          kana: 'あね',
          romaji: 'ane',
          meaningEn: 'my older sister',
          meaningBn: 'আমার বড় বোন / আপু',
          tag: 'Family N5'
        },
        {
          kanji: 'お姉さん',
          kana: 'おねえさん',
          romaji: 'oneesan',
          meaningEn: 'older sister (polite / young lady)',
          meaningBn: 'আপু (শ্রদ্ধাভরে বা অন্যের বড় বোন)',
          tag: 'Family N5'
        },
        {
          kanji: '姉妹',
          kana: 'しまい',
          romaji: 'shimai',
          meaningEn: 'sisters',
          meaningBn: 'বোন-বোন (সহোদরা ভগিনী)',
          tag: 'Family N4'
        },
        {
          kanji: '長姉',
          kana: 'ちょうし',
          romaji: 'choushi',
          meaningEn: 'eldest sister',
          meaningBn: 'সবার বড় বোন',
          tag: 'Formal'
        },
        {
          kanji: '義姉',
          kana: 'ぎし',
          romaji: 'gishi',
          meaningEn: 'sister-in-law (older)',
          meaningBn: 'বড় ভাবি / বড় ননদ / শালিকা',
          tag: 'Family'
        },
        {
          kanji: '姉妹都市',
          kana: 'しまにとし',
          romaji: 'shimaitoshi',
          meaningEn: 'sister cities (international partnership)',
          meaningBn: 'বন্ধুভাবাপন্ন জোড়া শহর (সিস্টার সিটি)',
          tag: 'Formal'
        }
      ],
      sentences: [
        {
          ja: '私の姉は病院で看護師として働いています。',
          romaji: 'Watashi no ane wa byouin de kangoshi toshite hataraite imasu.',
          meaningEn: 'My older sister works as a nurse at a hospital.',
          meaningBn: 'আমার বড় আপু একটি হাসপাতালে নার্স হিসেবে চাকরি করেন।'
        },
        {
          ja: 'あそこにいる綺麗なお姉さんは誰ですか。',
          romaji: 'Asoko ni iru kirei na oneesan wa dare desu ka.',
          meaningEn: 'Who is that pretty young lady over there?',
          meaningBn: 'ঐখানে দাঁড়িয়ে থাকা সুন্দরী আপুটি কে?'
        },
        {
          ja: '彼女たちはとても仲が良い姉妹です。',
          romaji: 'Kanojotachi wa totemo naka ga yoi shimai desu.',
          meaningEn: 'They are sisters who get along very well.',
          meaningBn: 'ওরা খুব আন্তরিক ও মিলেমিশে থাকা দুই বোন।'
        }
      ],
      tamagoTip: {
        bn: 'নারী (女) এবং বাজার বা শহরে দাঁড়িয়ে থাকা মার্কেট (市)। সংসারের কেনাকাটা ও তত্ত্বাবধানকারী বড় বোন 姉।',
        en: 'A woman (女) managing market matters (市). Represents the elder sister caring for the household.'
      }
    },

    // 8. 妹
    {
      id: 'l8-imouto',
      kanji: '妹',
      emoji: '🧒',
      strokeCount: 8,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'マイ', romaji: 'mai' }
        ],
        kunyomi: [
          { kana: 'いもうと', romaji: 'imouto' }
        ]
      },
      meanings: {
        en: 'younger sister',
        bn: 'ছোট বোন, অনুজা'
      },
      vocab: [
        {
          kanji: '妹',
          kana: 'いもうと',
          romaji: 'imouto',
          meaningEn: 'my younger sister',
          meaningBn: 'আমার ছোট বোন',
          tag: 'Family N5'
        },
        {
          kanji: '妹さん',
          kana: 'いもうとさん',
          romaji: 'imoutosan',
          meaningEn: 'someone else\'s younger sister',
          meaningBn: 'আপনার বা অন্য কারো ছোট বোন',
          tag: 'Family N5'
        },
        {
          kanji: '姉妹',
          kana: 'しまい',
          romaji: 'shimai',
          meaningEn: 'sisters',
          meaningBn: 'বোন-বোন (সহোদরা)',
          tag: 'Family N4'
        },
        {
          kanji: '義妹',
          kana: 'ぎまい',
          romaji: 'gimai',
          meaningEn: 'younger sister-in-law',
          meaningBn: 'ছোট ভাবি / ছোট শ্যালিকা',
          tag: 'Family'
        },
        {
          kanji: '末妹',
          kana: 'まつまい / ばつまい',
          romaji: 'matsumai / batsumai',
          meaningEn: 'youngest sister',
          meaningBn: 'সবার ছোট বোন',
          tag: 'Formal'
        },
        {
          kanji: '従妹',
          kana: 'いとこ',
          romaji: 'itoko',
          meaningEn: 'younger female cousin',
          meaningBn: 'ছোট খালাতো/চাচাতো বোন',
          tag: 'Family'
        }
      ],
      sentences: [
        {
          ja: '私の妹はアニメと日本の歌が大好きです。',
          romaji: 'Watashi no imouto wa anime to Nihon no uta ga daisuki desu.',
          meaningEn: 'My younger sister loves anime and Japanese songs very much.',
          meaningBn: 'আমার ছোট বোন অ্যানিমে এবং জাপানি গান খুব ভালোবাসে।'
        },
        {
          ja: '妹さんの誕生日に何をプレゼントしますか。',
          romaji: 'Imoutosan no tanjoubi ni nani o purezento shimasu ka.',
          meaningEn: 'What will you present for your younger sister\'s birthday?',
          meaningBn: 'আপনার ছোট বোনের জন্মদিনে আপনি কী উপহার দেবেন?'
        },
        {
          ja: '姉と妹で一緒に買い物に出かけました。',
          romaji: 'Ane to imouto de issho ni kaimono ni dekakemashita.',
          meaningEn: 'The older and younger sister went out shopping together.',
          meaningBn: 'বড় বোন এবং ছোট বোন একসাথে কেনাকাটা করতে বের হলো।'
        }
      ],
      tamagoTip: {
        bn: 'নারী (女) এবং এখনো পূর্ণ বৃদ্ধি না হওয়া গাছ (未)। বয়সে কনিষ্ঠা ছোট বোন হলো 妹 (いもうと)।',
        en: 'A young female (女) who is not yet (未) fully grown. Designates the younger sister.'
      }
    },

    // 9. 犬
    {
      id: 'l8-inu',
      kanji: '犬',
      emoji: '🐕',
      strokeCount: 4,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ケン', romaji: 'ken' }
        ],
        kunyomi: [
          { kana: 'いぬ', romaji: 'inu' }
        ]
      },
      meanings: {
        en: 'dog, canine',
        bn: 'কুকুর, পোষা কুকুর'
      },
      vocab: [
        {
          kanji: '犬',
          kana: 'いぬ',
          romaji: 'inu',
          meaningEn: 'dog',
          meaningBn: 'কুকুর',
          tag: 'Animal N5'
        },
        {
          kanji: '子犬',
          kana: 'こいぬ',
          romaji: 'koinu',
          meaningEn: 'puppy',
          meaningBn: 'কুকুরছানা',
          tag: 'Animal N4'
        },
        {
          kanji: '番犬',
          kana: 'ばんけん',
          romaji: 'banken',
          meaningEn: 'guard dog, watchdog',
          meaningBn: 'পাহাড়াদার কুকুর',
          tag: 'General N4'
        },
        {
          kanji: '盲導犬',
          kana: 'もうどうけん',
          romaji: 'moudouken',
          meaningEn: 'guide dog for the visually impaired',
          meaningBn: 'দৃষ্টিপ্রতিবন্ধীদের পথপ্রদর্শক কুকুর',
          tag: 'Society N4'
        },
        {
          kanji: '秋田犬',
          kana: 'あきたいぬ / あきたけん',
          romaji: 'akitainu / akitaken',
          meaningEn: 'Akita dog (famous Japanese breed, e.g. Hachiko)',
          meaningBn: 'আকিতা জাতের জাপানি কুকুর (হাচিকো)',
          tag: 'Culture'
        },
        {
          kanji: '愛犬',
          kana: 'あいけん',
          romaji: 'aiken',
          meaningEn: 'pet dog, beloved dog',
          meaningBn: 'স্নেহের পোষা কুকুর',
          tag: 'Daily'
        }
      ],
      sentences: [
        {
          ja: '毎朝、公園で愛犬の散歩をしています。',
          romaji: 'Maiasa, kouen de aiken no sanpo o shite imasu.',
          meaningEn: 'Every morning, I walk my beloved dog in the park.',
          meaningBn: 'প্রতিদিন সকালে পার্কে আমি আমার প্রিয় পোষা কুকুর নিয়ে হাঁটতে বের হই।'
        },
        {
          ja: '渋谷駅の前に有名な忠犬ハチ公の銅像があります。',
          romaji: 'Shibuya-eki no mae ni yuumei na chuuken hachikou no douzou ga arimasu.',
          meaningEn: 'In front of Shibuya Station stands the famous statue of the loyal dog Hachiko.',
          meaningBn: 'শিবুয়া স্টেশনের সামনে বিখ্যাত বিশ্বস্ত কুকুর হাচিকোর ব্রোঞ্জ মূর্তি রয়েছে।'
        },
        {
          ja: '友達の家で生まれたばかりの可愛い子犬を見ました。',
          romaji: 'Tomodachi no ie de umareta bakari no kawaii koinu o mimashita.',
          meaningEn: 'I saw an adorable newborn puppy at my friend\'s house.',
          meaningBn: 'বন্ধুর বাসায় আমি সদ্য জন্ম নেওয়া একটি মিষ্টি কুকুরছানা দেখেছি।'
        }
      ],
      tamagoTip: {
        bn: 'বড় মানুষের (大) পাশে একটি কান বা লেজের ফুটকি (丶)। মানুষের সবচেয়ে বিশ্বস্ত সঙ্গী পোষা কুকুর 犬 (いぬ)।',
        en: 'Kanji for big (大) with an added ear/tail tick (丶). A human\'s faithful domestic companion.'
      }
    },

    // 10. 高
    {
      id: 'l8-taka',
      kanji: '高',
      emoji: '🗼',
      strokeCount: 10,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'コウ', romaji: 'kou' }
        ],
        kunyomi: [
          { kana: 'たか・い', romaji: 'taka-i' },
          { kana: 'たか', romaji: 'taka' },
          { kana: 'たか・まる', romaji: 'taka-maru' }
        ]
      },
      meanings: {
        en: 'high, tall, expensive',
        bn: 'উঁচু, লম্বা, দামি, ব্যয়বহুল'
      },
      vocab: [
        {
          kanji: '高い',
          kana: 'たかい',
          romaji: 'takai',
          meaningEn: 'high, tall, expensive',
          meaningBn: 'উঁচু / দামি / লম্বা',
          tag: 'Adj N5'
        },
        {
          kanji: '高校',
          kana: 'こうこう',
          romaji: 'koukou',
          meaningEn: 'high school, senior secondary school',
          meaningBn: 'উচ্চ বিদ্যালয় / হাই স্কুল',
          tag: 'School N5'
        },
        {
          kanji: '高校生',
          kana: 'こうこうせい',
          romaji: 'koukousei',
          meaningEn: 'high school student',
          meaningBn: 'হাই স্কুলের শিক্ষার্থী',
          tag: 'School N5'
        },
        {
          kanji: '背が高い',
          kana: 'せがたかい',
          romaji: 'se ga takai',
          meaningEn: 'tall (in height / stature)',
          meaningBn: 'উচ্চতায় লম্বা (শারীরিক উচ্চতা)',
          tag: 'Body N5'
        },
        {
          kanji: '円高',
          kana: 'えんだか',
          romaji: 'endaka',
          meaningEn: 'strong yen (high value of Japanese yen)',
          meaningBn: 'শক্তিশালী ইয়েন (মুদ্রার উচ্চমান)',
          tag: 'Economy N4'
        },
        {
          kanji: '最高',
          kana: 'さいこう',
          romaji: 'saikou',
          meaningEn: 'the best, supreme, highest',
          meaningBn: 'সর্বোচ্চ / অসাধারণ / সেরা',
          tag: 'Daily N4'
        }
      ],
      sentences: [
        {
          ja: '兄はバスケットボールをしていて、とても背が高いです。',
          romaji: 'Ani wa basukettobooru o shite ite, totemo se ga takai desu.',
          meaningEn: 'My older brother plays basketball and is very tall in height.',
          meaningBn: 'আমার বড় ভাই বাস্কেটবল খেলে এবং সে উচ্চতায় বেশ লম্বা।'
        },
        {
          ja: '東京スカイツリーは日本で一番高いタワーです。',
          romaji: 'Toukyou Sukai Tsurii wa Nihon de ichiban takai tawaa desu.',
          meaningEn: 'Tokyo Skytree is the tallest tower in Japan.',
          meaningBn: 'টোকিও স্কাইট্রি হলো জাপানের সর্বোচ্চ উঁচু টাওয়ার।'
        },
        {
          ja: 'このデパートの商品は質が良いですが、値段が少し高いです。',
          romaji: 'Kono depaato no shouhin wa shitsu ga yoi desu ga, nedan ga sukoshi takai desu.',
          meaningEn: 'The goods in this department store are of good quality, but the prices are a bit expensive.',
          meaningBn: 'এই ডিপার্টমেন্টাল স্টোরের পণ্যের মান ভালো হলেও দাম কিছুটা চড়া।'
        }
      ],
      tamagoTip: {
        bn: 'উঁচু ওয়াচটাওয়ার বা মহলের চূড়া। মানুষের শারীরিক উচ্চতা বোঝাতে 背が高い এবং দামে চড়া বোঝাতে 値段が高い।',
        en: 'A multistory watchtower standing tall. Used for physical stature (背が高い), height, and high price (高い).'
      }
    },

    // 11. 長
    {
      id: 'l8-naga',
      kanji: '長',
      emoji: '📏',
      strokeCount: 8,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'チョウ', romaji: 'chou' }
        ],
        kunyomi: [
          { kana: 'なが・い', romaji: 'naga-i' },
          { kana: 'おさ', romaji: 'osa' }
        ]
      },
      meanings: {
        en: 'long, leader, head, chief, elder',
        bn: 'লম্বা, দীর্ঘ, প্রধান, সভাপতি'
      },
      vocab: [
        {
          kanji: '長い',
          kana: 'ながい',
          romaji: 'nagai',
          meaningEn: 'long (length, distance, time)',
          meaningBn: 'লম্বা / দীর্ঘ (সময় বা দূরত্ব)',
          tag: 'Adj N5'
        },
        {
          kanji: '社長',
          kana: 'しゃちょう',
          romaji: 'shachou',
          meaningEn: 'company president, CEO',
          meaningBn: 'কোম্পানি প্রধান / প্রেসিডেন্ট',
          tag: 'Business N5'
        },
        {
          kanji: '校長',
          kana: 'こうちょう',
          romaji: 'kouchou',
          meaningEn: 'school principal, headmaster',
          meaningBn: 'স্কুলের অধ্যক্ষ / প্রিন্সিপাল',
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
          kanji: '長女',
          kana: 'ちょうじょ',
          romaji: 'choujo',
          meaningEn: 'eldest daughter',
          meaningBn: 'বড় মেয়ে / জ্যেষ্ঠা কন্যা',
          tag: 'Family N4'
        },
        {
          kanji: '部長',
          kana: 'ぶちょう',
          romaji: 'buchou',
          meaningEn: 'department manager, division head',
          meaningBn: 'বিভাগীয় প্রধান / ম্যানেজার',
          tag: 'Business N4'
        }
      ],
      sentences: [
        {
          ja: '姉は黒くて綺麗な長い髪をしています。',
          romaji: 'Ane wa kurokute kirei na nagai kami o shite imasu.',
          meaningEn: 'My older sister has beautiful, long black hair.',
          meaningBn: 'আমার বড় বোনের চমৎকার লম্বা কালো চুল রয়েছে।'
        },
        {
          ja: '夏休みに二週間の長い旅行に出かけました。',
          romaji: 'Natsuyasumi ni nishuukan no nagai ryokou ni dekakemashita.',
          meaningEn: 'I went on a long two-week trip during summer vacation.',
          meaningBn: 'গ্রীষ্মকালীন ছুটিতে আমি দুই সপ্তাহের এক দীর্ঘ ভ্রমণে গিয়েছিলাম।'
        },
        {
          ja: '社長室で新しいプロジェクトについて話し合いました。',
          romaji: 'Shachoushitsu de atarashii purojekuto ni tsuite hanashiaimashita.',
          meaningEn: 'We discussed the new project inside the president\'s office.',
          meaningBn: 'কোম্পানি প্রেসিডেন্টের কার্যালয়ে আমরা নতুন প্রজেক্ট নিয়ে আলোচনা করেছি।'
        }
      ],
      tamagoTip: {
        bn: 'লম্বা চুল ও লাঠি হাতে শ্রদ্ধেয় বয়োজ্যেষ্ঠ মানুষ। দৈর্ঘ্যে লম্বা বোঝাতে 長い এবং পদমর্যাদার প্রধান বোঝাতে 社長, 校長।',
        en: 'An elder with flowing long locks leaning on a walking stick. Denotes length in time/space and leadership.'
      }
    },

    // 12. 短
    {
      id: 'l8-mijika',
      kanji: '短',
      emoji: '✂️',
      strokeCount: 12,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'タン', romaji: 'tan' }
        ],
        kunyomi: [
          { kana: 'みじか・い', romaji: 'mijika-i' }
        ]
      },
      meanings: {
        en: 'short, brief, fault, defect',
        bn: 'খাটো, ছোট, সংক্ষিপ্ত, ত্রুটি'
      },
      vocab: [
        {
          kanji: '短い',
          kana: 'みじかい',
          romaji: 'miji-kai',
          meaningEn: 'short (length, duration)',
          meaningBn: 'ছোট / খাটো / সংক্ষিপ্ত',
          tag: 'Adj N5'
        },
        {
          kanji: '短所',
          kana: 'たんしょ',
          romaji: 'tansho',
          meaningEn: 'weak point, shortcoming, flaw',
          meaningBn: 'দুর্বল দিক / ত্রুটি / খামতি',
          tag: 'Daily N4'
        },
        {
          kanji: '長短',
          kana: 'ちょうたん',
          romaji: 'choutan',
          meaningEn: 'length, pros and cons',
          meaningBn: 'দৈর্ঘ্য / ভালো-মন্দ দিক',
          tag: 'Formal N4'
        },
        {
          kanji: '短期',
          kana: 'たんき',
          romaji: 'tanki',
          meaningEn: 'short term, short period',
          meaningBn: 'স্বল্পমেয়াদী / কম সময়ের',
          tag: 'Daily N4'
        },
        {
          kanji: '短大',
          kana: 'たんだい',
          romaji: 'tandai',
          meaningEn: 'junior college (2-year degree)',
          meaningBn: 'দুই বছরের জুনিয়র কলেজ',
          tag: 'School N4'
        },
        {
          kanji: '短気',
          kana: 'たんき',
          romaji: 'tanki',
          meaningEn: 'short-tempered, quick to anger',
          meaningBn: 'বদমেজাজি / দ্রুত রেগে যাওয়া স্বভাব',
          tag: 'Personality'
        }
      ],
      sentences: [
        {
          ja: '夏は暑いので、髪を短く切りました。',
          romaji: 'Natsu wa atsui node, kami o mijikaku kirimashita.',
          meaningEn: 'Because summer is hot, I cut my hair short.',
          meaningBn: 'গ্রীষ্মকালে গরম লাগে বলে আমি চুল ছোট করে ছেঁটে ফেলেছি।'
        },
        {
          ja: '面接で自分の長所と短所について質問されました。',
          romaji: 'Mensetsu de jibun no chousho to tansho ni tsuite shitsumon saremashita.',
          meaningEn: 'In the interview, I was questioned about my strong points and weak points.',
          meaningBn: 'চাকরির ইন্টারভিউতে আমার গুণাবলি এবং দুর্বল দিকগুলো নিয়ে প্রশ্ন করা হয়েছিল।'
        },
        {
          ja: '日本の冬は昼の時間が短くて、すぐに暗くなります。',
          romaji: 'Nihon no fuyu wa hiru no jikan ga mijikakute, sugu ni kuraku narimasu.',
          meaningEn: 'In Japanese winter, daytime is short and it becomes dark quickly.',
          meaningBn: 'জাপানের শীতকালে দিনের সময় সংক্ষিপ্ত হয় এবং খুব তাড়াতাড়ি চারপাশ অন্ধকার হয়ে যায়।'
        }
      ],
      tamagoTip: {
        bn: 'তীর (矢) এবং শিম/পাত্র (豆)। তীরের মতো ছোট পরিমাপ। দৈর্ঘ্যে বা সময়ে খাটো হলো 短い এবং চারিত্রিক দুর্বলতা 短所।',
        en: 'An arrow (矢) matched against a small bean/bowl (豆). Measures short distance or brief durations.'
      }
    },

    // --- READ-ONLY KANJI (読める - 1 item) ---
    // 13. 趣味
    {
      id: 'l8-shumi',
      kanji: '趣味',
      emoji: '🎨',
      strokeCount: 21,
      jlpt: 'N4',
      category: 'read_only',
      readings: {
        onyomi: [
          { kana: 'シュミ', romaji: 'shumi' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'hobby, pastime, personal interest, taste',
        bn: 'শখ, আগ্রহ, রুচি'
      },
      vocab: [
        {
          kanji: '趣味',
          kana: 'しゅみ',
          romaji: 'shumi',
          meaningEn: 'hobby, pastime',
          meaningBn: 'শখ / অবসর বিনোদন',
          tag: 'Hobby N5'
        },
        {
          kanji: '興味',
          kana: 'きょうみ',
          romaji: 'kyoumi',
          meaningEn: 'interest, curiosity',
          meaningBn: 'আগ্রহ / কৌতূহল',
          tag: 'Daily N4'
        },
        {
          kanji: '意味',
          kana: 'いみ',
          romaji: 'imi',
          meaningEn: 'meaning, significance',
          meaningBn: 'অর্থ / তাৎপর্য',
          tag: 'Study N5'
        },
        {
          kanji: '味',
          kana: 'あじ',
          romaji: 'aji',
          meaningEn: 'taste, flavor',
          meaningBn: 'স্বাদ / ফ্লেভার',
          tag: 'Food N5'
        },
        {
          kanji: '無趣味',
          kana: 'むしゅみ',
          romaji: 'mushumi',
          meaningEn: 'having no hobbies, tasteless',
          meaningBn: 'কোনো শখ না থাকা',
          tag: 'General'
        },
        {
          kanji: '趣味が良い',
          kana: 'しゅみがいい',
          romaji: 'shumi ga ii',
          meaningEn: 'having good taste (in clothes, art)',
          meaningBn: 'উচ্চমানের রুচিশীল',
          tag: 'Phrase N4'
        }
      ],
      sentences: [
        {
          ja: 'あなたの趣味は何ですか。ー私の趣味は写真撮影と旅行です。',
          romaji: 'Anata no shumi wa nan desu ka. - Watashi no shumi wa shashinsatsuei to ryokou desu.',
          meaningEn: 'What is your hobby? - My hobbies are photography and traveling.',
          meaningBn: 'আপনার শখ কী? — আমার শখ হলো ছবি তোলা এবং দেশ-বিদেশ ভ্রমণ করা।'
        },
        {
          ja: '自己紹介のシートに名前と趣味を記入してください。',
          romaji: 'Jikoshoukai no shiito ni namae to shumi o kinyuu shite kudasai.',
          meaningEn: 'Please write down your name and hobbies on the self-introduction sheet.',
          meaningBn: 'নিজের পরিচিতি ফর্মে নাম এবং শখ লিখে পূরণ করুন।'
        },
        {
          ja: '休日は同じ趣味を持つ友達と集まってギターを弾きます。',
          romaji: 'Kyuujitsu wa onaji shumi o motsu tomodachi to atsumatte gitaa o hikimasu.',
          meaningEn: 'On holidays, I gather with friends having the same hobby to play guitar.',
          meaningBn: 'ছুটির দিনে একই শখের বন্ধুদের সাথে একত্রিত হয়ে আমি গিটার বাজাই।'
        }
      ],
      tamagoTip: {
        bn: '趣 (গতি ও প্রবৃত্তি) + 味 (স্বাদ)। জীবনের অবসর সময়ে আনন্দের স্বাদ নেওয়া। পরিচয় পর্বে 趣味 (শখ) অত্যন্ত সাধারণ বিষয়।',
        en: 'Pursuit (趣) + Flavor/Taste (味). The quintessential self-introduction topic for hobbies and interests.'
      }
    },

    // --- VISUAL RECOGNITION KANJI (見て、わかる - 2 items) ---
    // 14. 出身地
    {
      id: 'l8-shusshinchi',
      kanji: '出身地',
      emoji: '📍',
      strokeCount: 16,
      jlpt: 'N4',
      category: 'visual_recognition',
      readings: {
        onyomi: [
          { kana: 'シュッシンチ', romaji: 'shusshinchi' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'birthplace, native place, hometown origin',
        bn: 'জন্মস্থান, নিজের এলাকা / আদি বাসস্থান'
      },
      vocab: [
        {
          kanji: '出身地',
          kana: 'しゅっしんち',
          romaji: 'shusshinchi',
          meaningEn: 'place of origin, birthplace',
          meaningBn: 'জন্মস্থান / আদি নিবাস',
          tag: 'Form N4'
        },
        {
          kanji: '出身',
          kana: 'しゅっしん',
          romaji: 'shusshin',
          meaningEn: 'origin, from (e.g. Dhaka出身)',
          meaningBn: 'আগত এলাকা / বাড়ি (যেমন: ঢাকার লোক)',
          tag: 'Daily N5'
        },
        {
          kanji: '地方',
          kana: 'ちほう',
          romaji: 'chihou',
          meaningEn: 'region, countryside, rural area',
          meaningBn: 'অঞ্চল / প্রাদেশিক এলাকা',
          tag: 'Place N4'
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
          kanji: '地下鉄',
          kana: 'ちかてつ',
          romaji: 'chikatetsu',
          meaningEn: 'subway, underground railway',
          meaningBn: 'পাতালরেল / সাবওয়ে',
          tag: 'Transport N5'
        },
        {
          kanji: '出発',
          kana: 'しゅっぱつ',
          romaji: 'shuppatsu',
          meaningEn: 'departure, takeoff',
          meaningBn: 'যাত্রা শুরু / রওনা হওয়া',
          tag: 'Travel N5'
        }
      ],
      sentences: [
        {
          ja: '登録フォームの出身地の欄に「バングラデシュ・ダッカ」と書きました。',
          romaji: 'Touroku foomu no shusshinchi no ran ni "Banguradeshu Dakka" to kakimashita.',
          meaningEn: 'In the birthplace column of the registration form, I wrote "Bangladesh, Dhaka".',
          meaningBn: 'নিবন্ধন ফর্মের জন্মস্থানের ঘরে আমি "বাংলাদেশ, ঢাকা" লিখেছি।'
        },
        {
          ja: 'ご出身地はどちらですか。ー北海道の札幌です。',
          romaji: 'Go-shusshinchi wa dochira desu ka. - Hokkaidou no Sapporo desu.',
          meaningEn: 'Where is your place of origin? - It is Sapporo in Hokkaido.',
          meaningBn: 'আপনার আদি বাড়ি বা জন্মস্থান কোথায়? — হোক্কাইডোর সাপ্পোরো।'
        },
        {
          ja: '大学の寮で様々な出身地の学生たちと仲良くなりました。',
          romaji: 'Daigaku no ryou de samazama na shusshinchi no gakuseitachi to nakayoku narimashita.',
          meaningEn: 'In the university dorm, I became good friends with students from various home regions.',
          meaningBn: 'বিশ্ববিদ্যালয়ের ছাত্রাবাসে বিভিন্ন এলাকার সহপাঠীদের সাথে আমার দারুণ বন্ধুত্ব হয়েছে।'
        }
      ],
      tamagoTip: {
        bn: '出 (বের হওয়া) + 身 (দেহ/ব্যক্তি) + 地 (স্থান)। জাপানের যেকোনো চাকরির সিভি (履歴書) বা ফর্মের আবশ্যক কলাম।',
        en: 'Exit (出) + Body (身) + Land (地). The official label for birthplace/hometown on Japanese forms and CVs.'
      }
    },

    // 15. 職業
    {
      id: 'l8-shokugyou',
      kanji: '職業',
      emoji: '💼',
      strokeCount: 31,
      jlpt: 'N4',
      category: 'visual_recognition',
      readings: {
        onyomi: [
          { kana: 'ショクギョウ', romaji: 'shokugyou' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'occupation, profession, job, vocation',
        bn: 'পেশা, বৃত্তি, কর্মসংস্থান, জীবিকা'
      },
      vocab: [
        {
          kanji: '職業',
          kana: 'しょくぎょう',
          romaji: 'shokugyou',
          meaningEn: 'occupation, profession, vocation',
          meaningBn: 'পেশা / চাকরি / জীবিকা',
          tag: 'Form N4'
        },
        {
          kanji: '職場',
          kana: 'しょくば',
          romaji: 'shokuba',
          meaningEn: 'workplace, office environment',
          meaningBn: 'কর্মক্ষেত্র / কর্মস্থল',
          tag: 'Business N4'
        },
        {
          kanji: '就職',
          kana: 'しゅうしょく',
          romaji: 'shuushoku',
          meaningEn: 'finding employment, getting a job',
          meaningBn: 'চাকরি লাভ / কর্মে যোগদান',
          tag: 'Career N4'
        },
        {
          kanji: '卒業',
          kana: 'そつぎょう',
          romaji: 'sotsugyou',
          meaningEn: 'graduation from school/college',
          meaningBn: 'গ্র্যাজুয়েশন / পাস করে বের হওয়া',
          tag: 'School N4'
        },
        {
          kanji: '授業',
          kana: 'じゅぎょう',
          romaji: 'jugyou',
          meaningEn: 'class, lesson, lecture',
          meaningBn: 'ক্লাস / পাঠদান',
          tag: 'School N5'
        },
        {
          kanji: '退職',
          kana: 'たいしょく',
          romaji: 'taishoku',
          meaningEn: 'resignation, retirement',
          meaningBn: 'চাকরি থেকে অবসর / ইস্তফা',
          tag: 'Business N4'
        }
      ],
      sentences: [
        {
          ja: '銀行口座の開設書類で、職業の欄に「学生」と書きました。',
          romaji: 'Ginkou kouza no kaisetsu shorui de, shokugyou no ran ni "gakusei" to kakimashita.',
          meaningEn: 'On the bank account opening documents, I wrote "Student" in the occupation column.',
          meaningBn: 'ব্যাংক হিসাব খোলার নথিতে পেশার ঘরে আমি "শিক্ষার্থী" লিখেছি।'
        },
        {
          ja: '将来は自分の好きなITの職業に就きたいです。',
          romaji: 'Shourai wa jibun no suki na IT no shokugyou ni tsukitai desu.',
          meaningEn: 'In the future, I want to pursue an occupation in IT that I love.',
          meaningBn: 'ভবিষ্যতে আমি আমার প্রিয় আইটি পেশায় যুক্ত হতে চাই।'
        },
        {
          ja: '入国管理局の申請書で職業と勤務先の会社名を記入しました。',
          romaji: 'Nyuukoku kanrikyoku no shinseisho de shokugyou to kinmusaki no kaishamei o kinyuu shimashita.',
          meaningEn: 'On the Immigration Bureau application, I filled in my occupation and workplace company name.',
          meaningBn: 'ইমিগ্রেশন ব্যুরোর আবেদনপত্রে আমি আমার পেশা এবং কর্মরত কোম্পানির নাম উল্লেখ করেছি।'
        }
      ],
      tamagoTip: {
        bn: '職 (চাকরি/পদ) + 業 (কর্ম/শিল্প)। সিটি হল, ব্যাংক বা ভিসা ফর্মে পেশা লেখার ঘরের শিরোনাম হলো 職業।',
        en: 'Duty/Position (職) + Industry/Work (業). The universal form field label for occupation on official forms.'
      }
    }
  ]
};
