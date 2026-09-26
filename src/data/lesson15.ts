import { Lesson } from '../types/kanji';

export const lesson15: Lesson = {
  id: 15,
  number: 15,
  titleJa: 'どんなニュース？',
  titleRomaji: 'Donna nyuusu?',
  titleBn: 'কেমন খবর বা সংবাদ? (আবহাওয়া, ঝড়-বৃষ্টি, তাপমাত্রা, দুর্ঘটনা ও ট্রাফিক)',
  titleEn: 'What Kind of News? (Weather Forecast, Typhoons, Temperature, Disasters & Traffic)',
  descriptionBn: 'জাপানের আবহাওয়া বার্তা, সংবাদ বুলেটিন ও জরুরি দুর্যোগ সতর্কবার্তার কাঞ্জি: আকাশ ও আবহাওয়া (天, 気, 雨), টাইফুন ও বাতাস (台, 風), আধিক্য ও নিম্নমাত্রা (多, 低), তাপমাত্রা ও বারংবার (度), ট্রাফিক ও যাতায়াত (交, 通), মৃত্যু ও দুর্ঘটনা (死), সংবাদ পাঠ (気温, 事故, 地震) এবং ওয়েদার ম্যাপের প্রতীক (晴, 曇, 雪)।',
  descriptionEn: 'Essential Kanji for understanding Japanese TV news, weather forecasts, and emergency disaster bulletins: weather elements (天, 気, 雨), typhoon & wind (台, 風), quantity & low levels (多, 低), degrees & frequency (度), traffic & transport (交, 通), casualties (死), news literacy (気温, 事故, 地震), and weather map symbols (晴, 曇, 雪).',
  kanjiList: [
    // --- MAIN KANJI (11 items) ---
    // 1. 天
    {
      id: 'l15-ten',
      kanji: '天',
      emoji: '🌤️',
      strokeCount: 4,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'テン', romaji: 'ten' }
        ],
        kunyomi: [
          { kana: 'あま', romaji: 'ama' },
          { kana: 'あめ', romaji: 'ame' }
        ]
      },
      meanings: {
        en: 'heavens, sky, weather, nature',
        bn: 'আকাশ, আসমান, স্বর্গ, আবহাওয়া'
      },
      vocab: [
        {
          kanji: '天気',
          kana: 'てんき',
          romaji: 'tenki',
          meaningEn: 'weather',
          meaningBn: 'আবহাওয়া',
          tag: 'Daily N5'
        },
        {
          kanji: '天気予報',
          kana: 'てんきよほう',
          romaji: 'tenki yohou',
          meaningEn: 'weather forecast',
          meaningBn: 'আবহাওয়ার পূর্বাভাস',
          tag: 'News N4'
        },
        {
          kanji: '天国',
          kana: 'てんごく',
          romaji: 'tengoku',
          meaningEn: 'heaven, paradise',
          meaningBn: 'স্বর্গ / বেহেশত',
          tag: 'Noun N4'
        },
        {
          kanji: '天ぷら',
          kana: 'てんぷら',
          romaji: 'tenpura',
          meaningEn: 'tempura (crispy battered dish)',
          meaningBn: 'তেম্পুরা (জাপানি খাবার)',
          tag: 'Food N5'
        },
        {
          kanji: '雨天',
          kana: 'うてん',
          romaji: 'uten',
          meaningEn: 'rainy weather',
          meaningBn: 'বৃষ্টিভেজা আবহাওয়া',
          tag: 'Formal N4'
        },
        {
          kanji: '青天',
          kana: 'せいてん',
          romaji: 'seiten',
          meaningEn: 'clear blue sky, fair weather',
          meaningBn: 'মেঘমুক্ত নীল আকাশ',
          tag: 'Nature N3'
        }
      ],
      sentences: [
        {
          ja: '「今日の天気はどうですか。」「一日中よく晴れて暖かいですよ。」',
          romaji: '"Kyou no tenki wa dou desu ka." "Ichinichijuu yoku harete atatakai desu yo."',
          meaningEn: '"How is today\'s weather?" "It is sunny and pleasantly warm all day long."',
          meaningBn: '"আজকের আবহাওয়া কেমন?" "সারাদিন বেশ রৌদ্রোজ্জ্বল এবং মনোরম উষ্ণ।"'
        },
        {
          ja: '毎朝、家を出る前にテレビで今日の天気予報をチェックします。',
          romaji: 'Maiasa, ie o deru mae ni terebi de kyou no tenki yohou o chekku shimasu.',
          meaningEn: 'Every morning before leaving home, I check today\'s weather forecast on television.',
          meaningBn: 'প্রতিদিন সকালে বাড়ি থেকে বের হওয়ার আগে টিভিতে আজকের আবহাওয়ার পূর্বাভাস দেখে নিই।'
        },
        {
          ja: '運動会は雨天順延となりますので、学校の連絡をご確認ください。',
          romaji: 'Undoukai wa uten jun\'en to narimasu node, gakkou no renraku o gokakunin kudasai.',
          meaningEn: 'Since sports day is postponed in the event of rain, please confirm the school notice.',
          meaningBn: 'বৃষ্টির ক্ষেত্রে বার্ষিক ক্রীড়া প্রতিযোগিতা স্থগিত রাখা হবে, তাই স্কুলের নোটিশ চেক করুন।'
        }
      ],
      tamagoTip: {
        bn: 'বড় মানুষের (大) মাথার ওপর দিগন্তজোড়া ছড়ানো আকাশ (一)। আকাশ বা স্বর্গ 天 (テン)। আবহাওয়া 天気 (てんき)।',
        en: 'A broad sky (一) resting above a large person (大). Sky/heavens 天 (ten). Weather 天気 (tenki).'
      }
    },

    // 2. 気
    {
      id: 'l15-ki',
      kanji: '気',
      emoji: '💨',
      strokeCount: 6,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'キ', romaji: 'ki' },
          { kana: 'ケ', romaji: 'ke' }
        ],
        kunyomi: [
          { kana: 'き', romaji: 'ki' }
        ]
      },
      meanings: {
        en: 'spirit, mind, mood, air, energy, atmosphere',
        bn: 'মন, মেজাজ, অনুভূতি, বাতাস, প্রাণশক্তি'
      },
      vocab: [
        {
          kanji: '気をつける',
          kana: 'きをつける',
          romaji: 'ki o tsukeru',
          meaningEn: 'to take care, to be careful',
          meaningBn: 'সাবধান হওয়া / সচেতন থাকা',
          tag: 'Phrase N5'
        },
        {
          kanji: '元気',
          kana: 'げんき',
          romaji: 'genki',
          meaningEn: 'healthy, energetic, fine',
          meaningBn: 'সুস্থ / প্রাণবন্ত / ভালো',
          tag: 'Adjective N5'
        },
        {
          kanji: '気持ち',
          kana: 'きもち',
          romaji: 'kimochi',
          meaningEn: 'feeling, sensation, mood',
          meaningBn: 'অনুভূতি / মেজাজ / মনের ভাব',
          tag: 'Noun N5'
        },
        {
          kanji: '電気',
          kana: 'でんき',
          romaji: 'denki',
          meaningEn: 'electricity, electric light',
          meaningBn: 'বিদ্যুৎ / বৈদ্যুতিক আলো',
          tag: 'Daily N5'
        },
        {
          kanji: '気に入る',
          kana: 'きにいる',
          romaji: 'ki ni iru',
          meaningEn: 'to like, to take a liking to',
          meaningBn: 'মনে ধরা / পছন্দ হওয়া',
          tag: 'Verb N4'
        },
        {
          kanji: '空気',
          kana: 'くうき',
          romaji: 'kuuki',
          meaningEn: 'air, atmosphere',
          meaningBn: 'বাতাস / বায়ুমণ্ডল',
          tag: 'Noun N5'
        }
      ],
      sentences: [
        {
          ja: '風邪をひかないように、暖かくして気をつけてください。',
          romaji: 'Kaze o hikanai you ni, atatakaku shite ki o tsukete kudasai.',
          meaningEn: 'Please stay warm and take good care so you don\'t catch a cold.',
          meaningBn: 'ঠাণ্ডা যাতে না লাগে সেজন্য গরম কাপড় পরে সাবধানে থাকবেন।'
        },
        {
          ja: '朝の澄んだ空気の中で散歩すると、とても気持ちがいいです。',
          romaji: 'Asa no sunda kuuki no naka de sanpo suru to, totemo kimochi ga ii desu.',
          meaningEn: 'When taking a walk in the crisp morning air, it feels extremely refreshing.',
          meaningBn: 'সকালের স্নিগ্ধ নির্মল বাতাসে প্রাতঃভ্রমণ করলে মনটা খুব সতেজ লাগে।'
        },
        {
          ja: '「お元気ですか。」「はい、おかげさまでとても元気です。」',
          romaji: '"Ogenki desu ka." "Hai, okagesama de totemo genki desu."',
          meaningEn: '"How are you doing?" "Yes, thanks to your kindness, I am doing very well."',
          meaningBn: '"কেমন আছেন?" "হ্যাঁ, আপনাদের দোয়ায় খুব ভালো আছি।"'
        }
      ],
      tamagoTip: {
        bn: 'বায়ুমণ্ডলে কুণ্ডলী পাকিয়ে ছড়িয়ে যাওয়া অদৃশ্য শক্তির বাষ্প ও বাতাস। সুস্থতা 元気 (げんき) ও সাবধানতা 気をつける।',
        en: 'Invisible streams of vapor and life energy circulating in the air. Spirit/Mind 気 (ki).'
      }
    },

    // 3. 雨
    {
      id: 'l15-ame',
      kanji: '雨',
      emoji: '🌧️',
      strokeCount: 8,
      jlpt: 'N5',
      category: 'main',
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
        en: 'rain, rainfall',
        bn: 'বৃষ্টি, বর্ষণ'
      },
      vocab: [
        {
          kanji: '雨',
          kana: 'あめ',
          romaji: 'ame',
          meaningEn: 'rain',
          meaningBn: 'বৃষ্টি',
          tag: 'Nature N5'
        },
        {
          kanji: '大雨',
          kana: 'おおあめ',
          romaji: 'ooame',
          meaningEn: 'heavy rain, downpour',
          meaningBn: 'মুষলধারে বৃষ্টি / ভারী বর্ষণ',
          tag: 'News N4'
        },
        {
          kanji: '雨具',
          kana: 'あまぐ',
          romaji: 'amagu',
          meaningEn: 'rain gear (umbrellas, raincoats)',
          meaningBn: 'বৃষ্টির সরঞ্জাম (ছাতা ও রেইনকোট)',
          tag: 'Daily N4'
        },
        {
          kanji: '梅雨',
          kana: 'つゆ / ばいう',
          romaji: 'tsuyu / baiu',
          meaningEn: 'rainy season (June-July in Japan)',
          meaningBn: 'বর্ষাকাল (জাপানে জুন-জুলাইয়ের বর্ষা)',
          tag: 'Season N4'
        },
        {
          kanji: '小雨',
          kana: 'こさめ',
          romaji: 'kosame',
          meaningEn: 'light rain, drizzle',
          meaningBn: 'গুঁড়ি গুঁড়ি বৃষ্টি',
          tag: 'Nature N3'
        },
        {
          kanji: '暴風雨',
          kana: 'ぼうふうう',
          romaji: 'boufuuu',
          meaningEn: 'rainstorm, rainstorm with gale winds',
          meaningBn: 'ঝড়ো বৃষ্টি / প্রবল কালবৈশাখী',
          tag: 'News N3'
        }
      ],
      sentences: [
        {
          ja: '午後から冷たい雨が降り始めたので、傘をさして歩きました。',
          romaji: 'Gogo kara tsumetai ame ga furihajimeta node, kasa o sashite arukimashita.',
          meaningEn: 'Because cold rain began falling from the afternoon, I walked holding up an umbrella.',
          meaningBn: 'দুপুরের পর থেকে হিমেল বৃষ্টি শুরু হওয়ায় ছাতা মাথায় দিয়ে হাঁটলাম।'
        },
        {
          ja: '大雨警報が発表されたため、特急電車に運休が出ています。',
          romaji: 'Ooame keihou ga happyou sareta tame, tokkyuu densha ni unkyuu ga dete imasu.',
          meaningEn: 'Because a heavy rain warning was announced, limited express trains are facing cancellations.',
          meaningBn: 'ভারী বৃষ্টির সতর্কতা জারি করায় সীমিত এক্সপ্রেস ট্রেনগুলোর যাত্রা বাতিল হয়েছে।'
        },
        {
          ja: '六月になると梅雨に入り、雨の日が何日も続きます。',
          romaji: 'Rokugatsu ni naru to tsuyu ni hairi, ame no hi ga nannichi mo tsuzukimasu.',
          meaningEn: 'When June arrives, the rainy season begins, and rainy days continue for many days.',
          meaningBn: 'জুন মাস এলেই বর্ষাকাল (梅雨) শুরু হয় এবং টানা কয়েকদিন বৃষ্টির ধারা চলতে থাকে।'
        }
      ],
      tamagoTip: {
        bn: 'মেঘের ছাদ (一) থেকে জানালার মতো নেমে আসা চার ফোঁটা বৃষ্টির জল (::)। বৃষ্টি 雨 (あめ)। ভারী বৃষ্টি 大雨 (おおあめ)।',
        en: 'Four drops of rain falling from a cloud canopy (一). Rain 雨 (ame).'
      }
    },

    // 4. 台
    {
      id: 'l15-tai',
      kanji: '台',
      emoji: '🖥️',
      strokeCount: 5,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'タイ', romaji: 'tai' },
          { kana: 'ダイ', romaji: 'dai' }
        ],
        kunyomi: [
          { kana: 'うてな', romaji: 'utena' }
        ]
      },
      meanings: {
        en: 'stand, platform, pedestal, counter for vehicles/machines',
        bn: 'স্ট্যান্ড, মঞ্চ, পাটাতন, গাড়ি বা যন্ত্রের গণক, টাইফুন'
      },
      vocab: [
        {
          kanji: '台風',
          kana: 'たいふう',
          romaji: 'taifuu',
          meaningEn: 'typhoon, tropical cyclone',
          meaningBn: 'টাইফুন / সামুদ্রিক ঘূর্ণিঝড়',
          tag: 'News N5'
        },
        {
          kanji: '一台',
          kana: 'いちだい',
          romaji: 'ichidai',
          meaningEn: 'one machine / vehicle',
          meaningBn: 'একটি গাড়ি বা কম্পিউটার',
          tag: 'Counter N5'
        },
        {
          kanji: '台所',
          kana: 'だいどころ',
          romaji: 'daidokoro',
          meaningEn: 'kitchen',
          meaningBn: 'রান্নাঘর',
          tag: 'Living N5'
        },
        {
          kanji: '舞台',
          kana: 'ぶたい',
          romaji: 'butai',
          meaningEn: 'stage, scene, setting',
          meaningBn: 'মঞ্চ / থিয়েটার মঞ্চ',
          tag: 'Art N3'
        },
        {
          kanji: '高台',
          kana: 'たかだい',
          romaji: 'takadai',
          meaningEn: 'high ground, heights',
          meaningBn: 'উঁচু স্থান / পাহাড়ের উঁচু টিলা',
          tag: 'Disaster N3'
        },
        {
          kanji: '台湾',
          kana: 'たいわん',
          romaji: 'taiwan',
          meaningEn: 'Taiwan',
          meaningBn: 'তাইওয়ান',
          tag: 'Place N4'
        }
      ],
      sentences: [
        {
          ja: '大型の台風１５号が強い勢力で日本列島に上陸しました。',
          romaji: 'Oogata no taifuu juugogou ga tsuyoi seiryoku de Nihon rettou ni jouriku shimashita.',
          meaningEn: 'Large Typhoon No. 15 has made landfall on the Japanese archipelago with strong intensity.',
          meaningBn: 'শক্তিশালী ১৫ নম্বর বিশাল টাইফুন প্রবল শক্তি নিয়ে জাপান দ্বীপপুঞ্জে আঘাত হেনেছে।'
        },
        {
          ja: '津波の危険があるときは、すぐに近くの高台へ避難してください。',
          romaji: 'Tsunami no kiken ga aru toki wa, sugu ni chikaku no takadai e hinan shite kudasai.',
          meaningEn: 'When there is danger of a tsunami, please evacuate immediately to nearby high ground.',
          meaningBn: 'সুনামির ঝুঁকি থাকলে কালবিলম্ব না করে নিকটস্থ উঁচু স্থানে আশ্রয় নিন।'
        },
        {
          ja: '兄は新しい車を一台買って、家族でドライブに出かけました。',
          romaji: 'Ani wa atarashii kuruma o ichidai katte, kazoku de doraibu ni dekakemashita.',
          meaningEn: 'My older brother bought one new car and went out driving with the family.',
          meaningBn: 'আমার বড় ভাই একটি নতুন গাড়ি কিনে পরিবারের সবাইকে নিয়ে ড্রাইভে গেলেন।'
        }
      ],
      tamagoTip: {
        bn: 'কোনো মজবুত পাটাতন বা টেবিলের ওপর রাখা কোনো বাক্স বা বস্তু। গাড়ি ও যন্ত্রের একক 〜台 (だい) এবং টাইফুন 台風 (たいふう)।',
        en: 'A solid pedestal platform supporting objects. Counter for vehicles/machines 台 (dai) & Typhoon 台風 (taifuu).'
      }
    },

    // 5. 風
    {
      id: 'l15-fuu',
      kanji: '風',
      emoji: '🍃',
      strokeCount: 9,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'フウ', romaji: 'fuu' },
          { kana: 'フ', romaji: 'fu' }
        ],
        kunyomi: [
          { kana: 'かぜ', romaji: 'kaze' },
          { kana: 'かざ', romaji: 'kaza' }
        ]
      },
      meanings: {
        en: 'wind, breeze, style, manner, common cold',
        bn: 'বাতাস, বায়ুপ্রবাহ, ধরন/শৈলী, সর্দি-কাশি'
      },
      vocab: [
        {
          kanji: '風',
          kana: 'かぜ',
          romaji: 'kaze',
          meaningEn: 'wind, breeze',
          meaningBn: 'বাতাস / বায়ুপ্রবাহ',
          tag: 'Nature N5'
        },
        {
          kanji: '風邪',
          kana: 'かぜ',
          romaji: 'kaze',
          meaningEn: 'common cold, flu',
          meaningBn: 'সর্দি / ঠাণ্ডা লাগা',
          tag: 'Health N5'
        },
        {
          kanji: '強風',
          kana: 'きょうふう',
          romaji: 'kyoufuu',
          meaningEn: 'strong wind, gale',
          meaningBn: 'প্রচণ্ড ঝড়ো বাতাস',
          tag: 'News N4'
        },
        {
          kanji: '和風',
          kana: 'わふう',
          romaji: 'wafuu',
          meaningEn: 'Japanese style',
          meaningBn: 'জাপানি ঐতিহ্যবাহী শৈলী',
          tag: 'Culture N4'
        },
        {
          kanji: '洋風',
          kana: 'ようふう',
          romaji: 'youfuu',
          meaningEn: 'Western style',
          meaningBn: 'পাশ্চাত্য ঘরানা বা স্টাইল',
          tag: 'Culture N4'
        },
        {
          kanji: '風速',
          kana: 'ふうそく',
          romaji: 'fuusoku',
          meaningEn: 'wind speed',
          meaningBn: 'বাতাসের গতিবেগ',
          tag: 'Weather N3'
        }
      ],
      sentences: [
        {
          ja: '外は冷たい風が強く吹いていて、とても寒いです。',
          romaji: 'Soto wa tsumetai kaze ga tsuyoku fuite ite, totemo samui desu.',
          meaningEn: 'Outside, cold wind is blowing strongly and it is very cold.',
          meaningBn: 'বাইরে তীব্র বেগে হিমেল বাতাস বইছে এবং প্রচণ্ড ঠাণ্ডা লাগছে।'
        },
        {
          ja: '昨夜から風邪をひいて熱があるので、病院で薬をもらいました。',
          romaji: 'Sakuya kara kaze o hiite netsu ga aru node, byouin de kusuri o moraimashita.',
          meaningEn: 'Since I caught a cold and had a fever last night, I got medicine from the clinic.',
          meaningBn: 'গতরাত থেকে ঠাণ্ডা লেগে জ্বর থাকায় ক্লিনিক থেকে ওষুধ এনেছি।'
        },
        {
          ja: '沿岸部では最大風速３０メートルの強風に警戒してください。',
          romaji: 'Enganbu de wa saidai fuusoku sanjuu meetoru no kyoufuu ni keikai shite kudasai.',
          meaningEn: 'In coastal areas, please be on alert for gale-force winds with maximum speeds of 30 meters per second.',
          meaningBn: 'উপকূলবর্তী এলাকায় সর্বোচ্চ ৩০ মিটার বেগের ঝড়ো বাতাসের প্রতি সতর্ক থাকুন।'
        }
      ],
      tamagoTip: {
        bn: 'ঝড়ো বাতাসের ঘুর্ণিঝড়ে উড়ে যাওয়া কোনো বস্তু বা পতঙ্গ (虫)। বাতাস 風 (かぜ) এবং সর্দি লাগা 風邪 (かぜ)।',
        en: 'A swirling gust enclosed around moving air elements. Wind/Style 風 (kaze).'
      }
    },

    // 6. 多
    {
      id: 'l15-ta',
      kanji: '多',
      emoji: '👥',
      strokeCount: 6,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'タ', romaji: 'ta' }
        ],
        kunyomi: [
          { kana: 'おお・い', romaji: 'oo-i' }
        ]
      },
      meanings: {
        en: 'many, frequent, much, numerous',
        bn: 'অনেক, প্রচুর, অধিক, বহু'
      },
      vocab: [
        {
          kanji: '多い',
          kana: 'おおい',
          romaji: 'ooi',
          meaningEn: 'many, numerous, plentiful',
          meaningBn: 'অনেক / বহুসংখ্যক / প্রচুর',
          tag: 'Adjective N5'
        },
        {
          kanji: '多分',
          kana: 'たぶん',
          romaji: 'tabun',
          meaningEn: 'probably, perhaps',
          meaningBn: 'সম্ভবত / হয়তোবা',
          tag: 'Adverb N5'
        },
        {
          kanji: '多数',
          kana: 'たすう',
          romaji: 'tasuu',
          meaningEn: 'large number, majority',
          meaningBn: 'বিপুল সংখ্যক / অধিকাংশ',
          tag: 'Noun N4'
        },
        {
          kanji: '多少',
          kana: 'たしょう',
          romaji: 'tashou',
          meaningEn: 'more or less, somewhat, slightly',
          meaningBn: 'কমবেশি / কিছুটা',
          tag: 'Adverb N3'
        },
        {
          kanji: '多忙',
          kana: 'たぼう',
          romaji: 'tabou',
          meaningEn: 'very busy, hectic',
          meaningBn: 'অত্যন্ত ব্যস্ত / কাজের চাপ',
          tag: 'Formal N3'
        },
        {
          kanji: '多目的',
          kana: 'たもくてき',
          romaji: 'tamokuteki',
          meaningEn: 'multipurpose',
          meaningBn: 'বহুমুখী ব্যবহারের',
          tag: 'Noun N3'
        }
      ],
      sentences: [
        {
          ja: '東京の夏は湿度が高くて、雨が降る日が多いです。',
          romaji: 'Toukyou no natsu wa shitsudo ga takakute, ame ga furu hi ga ooi desu.',
          meaningEn: 'Tokyo summers have high humidity, with many days of rain.',
          meaningBn: 'টোকিওর গ্রীষ্মকালে আর্দ্রতা বেশি থাকে এবং বৃষ্টির দিন প্রচুর।'
        },
        {
          ja: '明日の朝は多分、電車が遅れるので早めに出発しましょう。',
          romaji: 'Ashita no asa wa tabun, densha ga okureru node hayame ni shuppatsu shimashou.',
          meaningEn: 'Tomorrow morning trains will probably be delayed, so let\'s depart early.',
          meaningBn: 'আগামীকাল সকালে হয়তোবা ট্রেনে দেরি হবে, তাই একটু সকাল সকাল বের হওয়া যাক।'
        },
        {
          ja: 'この駅は利用者が多く、多数の路線が乗り入れています。',
          romaji: 'Kono eki wa riyousha ga ooku, tasuu no rosen ga noriirete imasu.',
          meaningEn: 'This station has many users, and a large number of train lines connect here.',
          meaningBn: 'এই স্টেশনের যাত্রীসংখ্যা প্রচুর এবং অসংখ্য রেললাইনের সংযোগ রয়েছে।'
        }
      ],
      tamagoTip: {
        bn: 'সন্ধ্যা বা চাঁদের কাঞ্জি (夕) একের ওপর আরেকটি সাজানো—বহু সন্ধ্যার সঞ্চয়। অনেক বা প্রচুর 多い (おおい)।',
        en: 'Two evenings/crescents (夕) stacked atop one another, accumulating over time. Many 多 (ooi).'
      }
    },

    // 7. 低
    {
      id: 'l15-tei',
      kanji: '低',
      emoji: '📉',
      strokeCount: 7,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'テイ', romaji: 'tei' }
        ],
        kunyomi: [
          { kana: 'ひく・い', romaji: 'hiku-i' },
          { kana: 'ひく・める', romaji: 'hiku-meru' },
          { kana: 'ひく・まる', romaji: 'hiku-maru' }
        ]
      },
      meanings: {
        en: 'low, short, humble, decline',
        bn: 'নিচু, খাটো, কম, হ্রাস, নিম্ন'
      },
      vocab: [
        {
          kanji: '低い',
          kana: 'ひくい',
          romaji: 'hikui',
          meaningEn: 'low, short',
          meaningBn: 'নিচু / খাটো / কম',
          tag: 'Adjective N5'
        },
        {
          kanji: '最低',
          kana: 'さいてい',
          romaji: 'saitei',
          meaningEn: 'lowest, minimum, worst',
          meaningBn: 'সর্বনিম্ন / সবচেয়ে কম / নিকৃষ্ট',
          tag: 'Adverb N4'
        },
        {
          kanji: '最低気温',
          kana: 'さいていきおん',
          romaji: 'saitei kion',
          meaningEn: 'minimum / lowest temperature',
          meaningBn: 'দিনের সর্বনিম্ন তাপমাত্রা',
          tag: 'News N4'
        },
        {
          kanji: '低気圧',
          kana: 'ていきあつ',
          romaji: 'teikiatsu',
          meaningEn: 'low atmospheric pressure, depression',
          meaningBn: 'নিম্নচাপ (বায়ুমণ্ডলীয় নিম্নচাপ)',
          tag: 'Weather N3'
        },
        {
          kanji: '低下',
          kana: 'ていか',
          romaji: 'teika',
          meaningEn: 'fall, decline, deterioration',
          meaningBn: 'পতন / অবনতি / হ্রাস পাওয়া',
          tag: 'Noun N3'
        },
        {
          kanji: '低音',
          kana: 'ていおん',
          romaji: 'teion',
          meaningEn: 'low tone, bass voice',
          meaningBn: 'খাদ বা নিচু সুরের কণ্ঠ',
          tag: 'Music N3'
        }
      ],
      sentences: [
        {
          ja: '明日の朝は最低気温が氷点下のマイナス２度まで下がります。',
          romaji: 'Ashita no asa wa saitei kion ga hyoutenka no mainasu nido made sagarimasu.',
          meaningEn: 'Tomorrow morning, the lowest temperature will drop to minus 2 degrees below freezing.',
          meaningBn: 'আগামীকাল ভোরে সর্বনিম্ন তাপমাত্রা হিমাঙ্কের নিচে মাইনাস ২ ডিগ্রিতে নামবে।'
        },
        {
          ja: '天井が低い場所を通るときは、頭上に気をつけてください。',
          romaji: 'Tenjou ga hikui basho o tooru toki wa, zujou ni ki o tsukete kudasai.',
          meaningEn: 'When passing through low-ceilinged areas, please watch your head above.',
          meaningBn: 'নিচু ছাদবিশিষ্ট পথ অতিক্রমের সময় মাথার ওপর খেয়াল রাখুন।'
        },
        {
          ja: '南の海上で低気圧が発達し、列島に雨雲を運んでいます。',
          romaji: 'Minami no kaijou de teikiatsu ga hattatsu shi, rettou ni amagumo o hakonde imasu.',
          meaningEn: 'A low-pressure depression has developed over southern waters, bringing rain clouds to the archipelago.',
          meaningBn: 'দক্ষিণের সাগরে নিম্নচাপ ঘনীভূত হয়ে জাপানে বৃষ্টির মেঘ নিয়ে আসছে।'
        }
      ],
      tamagoTip: {
        bn: 'মানুষের রেডিক্যাল (亻) অবনত হয়ে নিচের ভিত্তি স্পর্শ করছে। নিচু বা খাটো 低い (ひくい) এবং সর্বনিম্ন 最低 (さいてい)।',
        en: 'A person (亻) bowing low to the ground. Low/Decline 低 (hikui).'
      }
    },

    // 8. 度
    {
      id: 'l15-do',
      kanji: '度',
      emoji: '🌡️',
      strokeCount: 9,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ド', romaji: 'do' },
          { kana: 'ト', romaji: 'to' },
          { kana: 'タク', romaji: 'taku' }
        ],
        kunyomi: [
          { kana: 'たび', romaji: 'tabi' }
        ]
      },
      meanings: {
        en: 'degrees, occurrences, counter for times, attitude',
        bn: 'ডিগ্রি (তাপমাত্রা), বার, দফায় দফায়, আচরণ'
      },
      vocab: [
        {
          kanji: '今度',
          kana: 'こんど',
          romaji: 'kondo',
          meaningEn: 'this time, next time, near future',
          meaningBn: 'এবার / আগামীতে / সামনে',
          tag: 'Daily N5'
        },
        {
          kanji: '一度',
          kana: 'いちど',
          romaji: 'ichido',
          meaningEn: 'once, one time',
          meaningBn: 'একবার',
          tag: 'Daily N5'
        },
        {
          kanji: '何度',
          kana: 'なんど',
          romaji: 'nando',
          meaningEn: 'how many degrees? how many times?',
          meaningBn: 'কত ডিগ্রি? / কতবার?',
          tag: 'Question N5'
        },
        {
          kanji: '温度',
          kana: 'おんど',
          romaji: 'ondo',
          meaningEn: 'temperature',
          meaningBn: 'তাপমাত্রা',
          tag: 'Science N4'
        },
        {
          kanji: '震度',
          kana: 'しんど',
          romaji: 'shindo',
          meaningEn: 'seismic intensity scale (Japanese scale 0-7)',
          meaningBn: 'ভূমিকম্পের তীব্রতার স্কেল (শিন্দো)',
          tag: 'Disaster N4'
        },
        {
          kanji: '湿度',
          kana: 'しつど',
          romaji: 'shitsudo',
          meaningEn: 'humidity',
          meaningBn: 'বাতাসের আর্দ্রতা',
          tag: 'Weather N3'
        }
      ],
      sentences: [
        {
          ja: 'エアコンの温度を二十六度に設定して、部屋を涼しく保ちます。',
          romaji: 'Eakon no ondo o nijuurokudo ni settei shite, heya o suzushiku tamochimasu.',
          meaningEn: 'I set the air conditioner temperature to 26 degrees to keep the room comfortably cool.',
          meaningBn: 'এয়ার কন্ডিশনারের তাপমাত্রা ২৬ ডিগ্রিতে সেট করে ঘর মনোরম ঠাণ্ডা রাখছি।'
        },
        {
          ja: '東京で震度４の揺れを観測しましたが、津波の心配はありません。',
          romaji: 'Toukyou de shindo yon no yure o kansoku shimashita ga, tsunami no shinpai wa arimasen.',
          meaningEn: 'Tremors of seismic intensity 4 were observed in Tokyo, but there is no concern of a tsunami.',
          meaningBn: 'টোকিওতে ৪ মাত্রার তীব্রতার ঝাঁকুনি ধরা পড়েছে, তবে সুনামির কোনো আশঙ্কা নেই।'
        },
        {
          ja: '富士山にはまだ登ったことがないので、今度一度行ってみたいです。',
          romaji: 'Fujisan ni wa mada nobotta koto ga nai node, kondo ichido itte mitai desu.',
          meaningEn: 'I haven\'t climbed Mount Fuji yet, so next time I want to try going once.',
          meaningBn: 'ফুজি পাহাড়ে এখনো চড়া হয়নি, তাই সামনে কোনো এক সময় একবার যেতে চাই।'
        }
      ],
      tamagoTip: {
        bn: 'বিল্ডিংয়ের ভেতরে হাত দিয়ে পরিমাপ করার স্কেল বা স্কেলের ডিগ্রি। তাপমাত্রা 温度 (おんど) ও কম্পন মাত্রা 震度 (しんど)।',
        en: 'A hand measuring intervals under a shelter. Degree/Time 度 (do).'
      }
    },

    // 9. 交
    {
      id: 'l15-kou',
      kanji: '交',
      emoji: '🚦',
      strokeCount: 6,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'コウ', romaji: 'kou' }
        ],
        kunyomi: [
          { kana: 'まじ・わる', romaji: 'maji-waru' },
          { kana: 'まじ・える', romaji: 'maji-eru' },
          { kana: 'か・わす', romaji: 'ka-wasu' }
        ]
      },
      meanings: {
        en: 'cross, intersect, exchange, mix, traffic',
        bn: 'মোড়, সংযোগ, বিনিময়, মেলামেশা, ট্রাফিক'
      },
      vocab: [
        {
          kanji: '交通',
          kana: 'こうつう',
          romaji: 'koutsuu',
          meaningEn: 'traffic, transportation',
          meaningBn: 'ট্রাফিক / যাতায়াত ব্যবস্থা',
          tag: 'Daily N5'
        },
        {
          kanji: '交番',
          kana: 'こうばん',
          romaji: 'kouban',
          meaningEn: 'police box (neighborhood police post)',
          meaningBn: 'কোবান (পাড়ার স্থানীয় পুলিশ বক্স)',
          tag: 'Town N5'
        },
        {
          kanji: '交差点',
          kana: 'こうさてん',
          romaji: 'kousaten',
          meaningEn: 'intersection, crossing',
          meaningBn: 'চৌরাস্তা / সড়ক সংযোগ মোড়',
          tag: 'Town N5'
        },
        {
          kanji: '交換',
          kana: 'こうかん',
          romaji: 'koukan',
          meaningEn: 'exchange, barter, replace',
          meaningBn: 'বিনিময় / অদলবদল করা',
          tag: 'Daily N4'
        },
        {
          kanji: '交流',
          kana: 'こうりゅう',
          romaji: 'kouryuu',
          meaningEn: 'cultural exchange, fellowship',
          meaningBn: 'পারস্পরিক মেলামেশা ও সংস্কৃতি বিনিময়',
          tag: 'Society N4'
        },
        {
          kanji: '外交',
          kana: 'がいこう',
          romaji: 'gaikou',
          meaningEn: 'diplomacy, international relations',
          meaningBn: 'কূটনীতি / বহির্বিশ্বের সাথে সম্পর্ক',
          tag: 'News N3'
        }
      ],
      sentences: [
        {
          ja: '駅前の交番で道を尋ねたら、警察官が親切に教えてくれました。',
          romaji: 'Ekimae no kouban de michi o tazunetara, keisatsukan ga shinsetsu ni oshiete kuremashita.',
          meaningEn: 'When I asked for directions at the police box in front of the station, the police officer kindly explained.',
          meaningBn: 'স্টেশনের সামনের পুলিশ বক্সে রাস্তা জানতে চাইলে পুলিশ কর্মকর্তা আন্তরিকভাবে বুঝিয়ে দিলেন।'
        },
        {
          ja: '台風の接近により、新幹線など交通機関に乱れが生じています。',
          romaji: 'Taifuu no sekkin ni yori, shinkansen nado koutsuu kikan ni midare ga shoujite imasu.',
          meaningEn: 'Due to the approaching typhoon, disruptions have occurred in public transit including the bullet trains.',
          meaningBn: 'টাইফুনের কাছাকাছি আসার কারণে শিনকানসেন সহ গণপরিবহন শিডিউলে বিঘ্ন ঘটছে।'
        },
        {
          ja: '危ないですから、交差点では信号が青になってから渡りましょう。',
          romaji: 'Abunai desu kara, kousaten de wa shingou ga ao ni natte kara watarimashou.',
          meaningEn: 'Because it is dangerous, let\'s cross intersections only after the light turns green.',
          meaningBn: 'বিপদজনক বিধায় চৌরাস্তায় সিগন্যাল বাতি সবুজ হওয়ার পর রাস্তা পার হোন।'
        }
      ],
      tamagoTip: {
        bn: 'পা ক্রস করে বসা মানুষের ভঙ্গিমা—যেখানে দুই পথ মিলিত হয়ে আদানপ্রদান হয়। ট্রাফিক 交通 (こうつう) ও পুলিশ বক্স 交番 (こうばん)।',
        en: 'Legs crossing over each other, depicting crossing paths and exchange. Traffic 交通 (koutsuu).'
      }
    },

    // 10. 通
    {
      id: 'l15-tsuu',
      kanji: '通',
      emoji: '🚶‍♂️',
      strokeCount: 10,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ツウ', romaji: 'tsuu' },
          { kana: 'ツ', romaji: 'tsu' }
        ],
        kunyomi: [
          { kana: 'とお・る', romaji: 'too-ru' },
          { kana: 'とお・す', romaji: 'too-su' },
          { kana: 'かよ・う', romaji: 'kayo-u' }
        ]
      },
      meanings: {
        en: 'pass through, commute, street/avenue, understand',
        bn: 'চলাচল করা, নিয়মিত যাতায়াত (কমিউট), রাস্তা/সড়ক'
      },
      vocab: [
        {
          kanji: '通る',
          kana: 'とおる',
          romaji: 'tooru',
          meaningEn: 'to pass through, to go along',
          meaningBn: 'দিয়ে যাওয়া / অতিক্রম করা',
          tag: 'Verb N5'
        },
        {
          kanji: '通う',
          kana: 'かよう',
          romaji: 'kayou',
          meaningEn: 'to commute to (school/work), to attend regularly',
          meaningBn: 'নিয়মিত যাতায়াত করা (স্কুল/অফিস)',
          tag: 'Verb N5'
        },
        {
          kanji: '通り',
          kana: 'とおり',
          romaji: 'toori',
          meaningEn: 'street, avenue, thoroughfare',
          meaningBn: 'রাস্তা / বড় এভিনিউ',
          tag: 'Town N5'
        },
        {
          kanji: '普通',
          kana: 'ふつう',
          romaji: 'futsuu',
          meaningEn: 'local train, ordinary, usual',
          meaningBn: 'লোকাল ট্রেন / সাধারণ / সচরাচর',
          tag: 'Daily N5'
        },
        {
          kanji: '通行止め',
          kana: 'つうこうどめ',
          romaji: 'tsuukoudome',
          meaningEn: 'road closed, closed to traffic',
          meaningBn: 'রাস্তায় যান ও পথচারী চলাচল বন্ধ',
          tag: 'Sign N4'
        },
        {
          kanji: '通勤',
          kana: 'つうきん',
          romaji: 'tsuukin',
          meaningEn: 'commuting to work',
          meaningBn: 'কাজে যাতায়াত',
          tag: 'Work N4'
        }
      ],
      sentences: [
        {
          ja: '私は月曜日から金曜日まで、地下鉄で会社に通っています。',
          kana: 'わたしはげつようびからきんようびまで、ちかてつでかいしゃにかよっています。',
          romaji: 'Watashi wa getsuyoubi kara kinyoubi made, chikatetsu de kaisha ni kayotte imasu.',
          meaningEn: 'From Monday to Friday, I commute to my office by subway.',
          meaningBn: 'আমি সোম থেকে শুক্রবার পর্যন্ত পাতালরেলে চড়ে অফিসে যাতায়াত করি।'
        },
        {
          ja: '事故のため、この大通りは現在全面通行止めになっています。',
          romaji: 'Jiko no tame, kono oodoori wa genzai zenmen tsuukoudome ni natte imasu.',
          meaningEn: 'Due to an accident, this main avenue is currently completely closed to traffic.',
          meaningBn: 'দুর্ঘটনার কারণে এই প্রধান এভিনিউটিতে বর্তমানে সব ধরনের যান চলাচল বন্ধ রয়েছে।'
        },
        {
          ja: '駅へ向かう途中で、賑やかな商店街の通りを通りました。',
          romaji: 'Eki e mukau tochuu de, nigiyakana shoutengai no toori o toorimashita.',
          meaningEn: 'On my way toward the station, I passed through the lively shopping street.',
          meaningBn: 'স্টেশনে যাওয়ার পথে আমি প্রাণবন্ত মার্কেট স্ট্রিট অতিক্রম করলাম।'
        }
      ],
      tamagoTip: {
        bn: 'হাঁটার রাস্তা (辶) বরাবর অবিরাম যাতায়াত করা। নিয়মিত যাতায়াত 通う (かよう) এবং বন্ধ রাস্তা 通行止め (つうこうどめ)।',
        en: 'A road movement radical (辶) leading through. Commute 通う (kayou) and Ordinary 普通 (futsuu).'
      }
    },

    // 11. 死
    {
      id: 'l15-shi',
      kanji: '死',
      emoji: '🕊️',
      strokeCount: 6,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'シ', romaji: 'shi' }
        ],
        kunyomi: [
          { kana: 'し・ぬ', romaji: 'shi-nu' }
        ]
      },
      meanings: {
        en: 'death, die, pass away, expire',
        bn: 'মৃত্যু, মারা যাওয়া, প্রাণ হারানো'
      },
      vocab: [
        {
          kanji: '死ぬ',
          kana: 'しぬ',
          romaji: 'shinu',
          meaningEn: 'to die, to pass away',
          meaningBn: 'মারা যাওয়া / প্রাণত্যাগ করা',
          tag: 'Verb N5'
        },
        {
          kanji: '死亡',
          kana: 'しぼう',
          romaji: 'shibou',
          meaningEn: 'death, decease, fatality',
          meaningBn: 'মৃত্যু / নিহত হওয়া',
          tag: 'News N4'
        },
        {
          kanji: '死者',
          kana: 'ししゃ',
          romaji: 'shisha',
          meaningEn: 'the dead, casualties, deceased persons',
          meaningBn: 'নিহত ব্যক্তি / মৃতের সংখ্যা',
          tag: 'News N4'
        },
        {
          kanji: '必死',
          kana: 'ひっし',
          romaji: 'hisshi',
          meaningEn: 'desperate, with utmost effort',
          meaningBn: 'মরিয়া হয়ে / জানপ্রাণ দিয়ে',
          tag: 'Adverb N3'
        },
        {
          kanji: '急死',
          kana: 'きゅうし',
          romaji: 'kyuushi',
          meaningEn: 'sudden death',
          meaningBn: 'আকস্মিক প্রয়াণ / হঠাৎ মৃত্যু',
          tag: 'News N3'
        },
        {
          kanji: '死後',
          kana: 'しご',
          romaji: 'shigo',
          meaningEn: 'after death, posthumous',
          meaningBn: 'মৃত্যুর পরে / মরণোত্তর',
          tag: 'Formal N3'
        }
      ],
      sentences: [
        {
          ja: 'ニュースによると、昨夜のトラック事故で運転手が死亡しました。',
          romaji: 'Nyuusu ni yoru to, sakuya no torakku jiko de untenshu ga shibou shimashita.',
          meaningEn: 'According to the news, the driver passed away in last night\'s truck accident.',
          meaningBn: 'সংবাদ অনুযায়ী, গত রাতের ট্রাক দুর্ঘটনায় গাড়িচালক নিহত হয়েছেন।'
        },
        {
          ja: '大地震が発生しましたが、幸いにも死者やけが人は出ませんでした。',
          romaji: 'Oojishin ga hassei shimashita ga, saiwai ni mo shisha ya keganin wa demasendeshita.',
          meaningEn: 'A major earthquake struck, but fortunately there were no deaths or injuries.',
          meaningBn: 'একটি বড় ভূমিকম্প আঘাত হানলেও সৌভাগ্যবশত কোনো প্রাণহানি বা আহত হওয়ার ঘটনা ঘটেনি।'
        },
        {
          ja: '日本語能力試験のＮ４に合格するため、毎日必死に単語を覚えました。',
          romaji: 'Nihongo nouryoku shiken no N4 ni goukaku suru tame, mainichi hisshi ni tango o oboemashita.',
          meaningEn: 'To pass JLPT N4, I memorized vocabulary desperately with all my effort every day.',
          meaningBn: 'জেএলপিটি এন৪ পরীক্ষায় উত্তীর্ণ হতে প্রতিদিন জানপ্রাণ দিয়ে শব্দার্থ মুখস্থ করেছি।'
        }
      ],
      tamagoTip: {
        bn: 'কবরের ফলকের সামনে মাটিতে হাঁটু গেড়ে বসা মানুষ। মৃত্যু বা মারা যাওয়া 死 (シ / しぬ)। নিহত 死亡 (しぼう)।',
        en: 'A burial marker where someone kneels. Death/Die 死 (shinu).'
      }
    },

    // --- READ-ONLY KANJI (3 items) ---
    // 12. 気温
    {
      id: 'l15-kion',
      kanji: '気温',
      emoji: '🌡️',
      strokeCount: 18,
      jlpt: 'N4',
      category: 'read_only',
      readings: {
        onyomi: [
          { kana: 'キオン', romaji: 'kion' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'atmospheric temperature, air temperature',
        bn: 'বায়ুমণ্ডলের তাপমাত্রা, বাতাসের উত্তাপ'
      },
      vocab: [
        {
          kanji: '最高気温',
          kana: 'さいこうきおん',
          romaji: 'saikou kion',
          meaningEn: 'highest / maximum temperature',
          meaningBn: 'সর্বোচ্চ তাপমাত্রা',
          tag: 'Weather N4'
        },
        {
          kanji: '最低気温',
          kana: 'さいていきおん',
          romaji: 'saitei kion',
          meaningEn: 'lowest / minimum temperature',
          meaningBn: 'সর্বনিম্ন তাপমাত্রা',
          tag: 'Weather N4'
        },
        {
          kanji: '平均気温',
          kana: 'へいきんきおん',
          romaji: 'heikin kion',
          meaningEn: 'average temperature',
          meaningBn: 'গড় তাপমাত্রা',
          tag: 'Weather N3'
        },
        {
          kanji: '気温差',
          kana: 'きおんさ',
          romaji: 'kionsa',
          meaningEn: 'temperature difference (day vs night)',
          meaningBn: 'তাপমাত্রার ব্যবধান (দিন ও রাতের তারতম্য)',
          tag: 'Health N3'
        },
        {
          kanji: '気温計',
          kana: 'きおんけい',
          romaji: 'kionkei',
          meaningEn: 'thermometer',
          meaningBn: 'থার্মোমিটার (বাতাসের তাপমাত্রা মাপার যন্ত্র)',
          tag: 'Tool N3'
        }
      ],
      sentences: [
        {
          ja: '東京の今日の最高気温は三十六度まで上がり、猛暑日となる見込みです。',
          romaji: 'Toukyou no kyou no saikou kion wa sanjuurokudo made agari, moushobi to naru mikomi desu.',
          meaningEn: 'Tokyo\'s highest temperature today will rise to 36 degrees, expected to become an extremely hot day.',
          meaningBn: 'আজ টোকিওর সর্বোচ্চ তাপমাত্রা ৩৬ ডিগ্রিতে উঠে তীব্র তাপদাহ সৃষ্টি হওয়ার সম্ভাবনা রয়েছে।'
        },
        {
          ja: '季節の変わり目は昼と夜の気温差が激しいので、体調管理に気をつけてください。',
          romaji: 'Kisetsu no kawarime wa hiru to yoru no kionsa ga hageshii node, taichou kanri ni ki o tsukete kudasai.',
          meaningEn: 'During seasonal transitions the difference between day and night temperatures is drastic, so please look after your health.',
          meaningBn: 'ঋতু পরিবর্তনের সময়ে দিন ও রাতের তাপমাত্রার ব্যবধান খুব বেশি হয়, তাই স্বাস্থ্যের যত্ন নিন।'
        }
      ],
      tamagoTip: {
        bn: 'বাতাসের শক্তি (気) ও পানির উষ্ণতা (温)। আবহাওয়ার তাপমাত্রা 気温 (きおん)। সর্বোচ্চ তাপমাত্রা 最高気温 (さいこうきおん)।',
        en: 'Air/Atmosphere (気) + warmth (温) = Atmospheric temperature 気温 (kion).'
      }
    },

    // 13. 事故
    {
      id: 'l15-jiko',
      kanji: '事故',
      emoji: '🚨',
      strokeCount: 15,
      jlpt: 'N4',
      category: 'read_only',
      readings: {
        onyomi: [
          { kana: 'ジコ', romaji: 'jiko' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'accident, incident, trouble',
        bn: 'দুর্ঘটনা, আকস্মিক সংকট, সংঘর্ষ'
      },
      vocab: [
        {
          kanji: '交通事故',
          kana: 'こうつうじこ',
          romaji: 'koutsuu jiko',
          meaningEn: 'traffic accident, road collision',
          meaningBn: 'সড়ক দুর্ঘটনা / ট্রাফিক এক্সিডেন্ট',
          tag: 'Daily N4'
        },
        {
          kanji: '人身事故',
          kana: 'じんしんじこ',
          romaji: 'jinshin jiko',
          meaningEn: 'personal injury accident (train delays)',
          meaningBn: 'ব্যক্তির সাথে দুর্ঘটনা (ট্রেন লাইনে মানুষ পড়ার ঘটনা)',
          tag: 'Transit N4'
        },
        {
          kanji: '事故現場',
          kana: 'じこげんば',
          romaji: 'jiko genba',
          meaningEn: 'accident scene',
          meaningBn: 'দুর্ঘটনাস্থল',
          tag: 'News N3'
        },
        {
          kanji: '事故防止',
          kana: 'じこぼうし',
          romaji: 'jiko boushi',
          meaningEn: 'accident prevention',
          meaningBn: 'দুর্ঘটনা প্রতিরোধ ও সতর্কতা',
          tag: 'Safety N3'
        },
        {
          kanji: '車両事故',
          kana: 'しゃりょうじこ',
          romaji: 'sharyou jiko',
          meaningEn: 'vehicular / carriage accident',
          meaningBn: 'যানবাহন ত্রুটি বা সংঘর্ষ',
          tag: 'Transit N3'
        }
      ],
      sentences: [
        {
          ja: '駅構内で人身事故が発生したため、中央線が一時運転を見合わせています。',
          romaji: 'Eki kounai de jinshin jiko ga hassei shita tame, Chuuousen ga ichiji unten o miawasete imasu.',
          meaningEn: 'Because a personal injury accident occurred inside a station, the Chuo Line has temporarily suspended operations.',
          meaningBn: 'স্টেশনে মানুষের দুর্ঘটনা ঘটার কারণে চুও লাইনের ট্রেন চলাচল সাময়িকভাবে স্থগিত রয়েছে।'
        },
        {
          ja: '雨の日の夜道は暗くて見えにくいので、交通事故にくれぐれも気をつけてください。',
          romaji: 'Ame no hi no yomichi wa kurakute mienikui node, koutsuu jiko ni kuregure mo ki o tsukete kudasai.',
          meaningEn: 'Because night roads on rainy days are dark and hard to see, please be extremely careful of traffic accidents.',
          meaningBn: 'বৃষ্টির রাতে রাস্তা অন্ধকার ও ঝাপসা থাকে, তাই সড়ক দুর্ঘটনার ব্যাপারে বিশেষভাবে সতর্ক থাকুন।'
        }
      ],
      tamagoTip: {
        bn: 'ঘটনাবলী (事) এবং কারণ বা পুরোনো ইতিহাস (故)। দুর্ঘটনা বা ট্রাফিক সমস্যা 事故 (じこ)। সড়ক দুর্ঘটনা 交通事故 (こうつうじこ)।',
        en: 'Matters (事) + circumstance/cause (故) = Accident 事故 (jiko).'
      }
    },

    // 14. 地震
    {
      id: 'l15-jishin',
      kanji: '地震',
      emoji: '🏚️',
      strokeCount: 21,
      jlpt: 'N4',
      category: 'read_only',
      readings: {
        onyomi: [
          { kana: 'ジシン', romaji: 'jishin' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'earthquake, seismic tremor',
        bn: 'ভূমিকম্প, ভূকম্পন'
      },
      vocab: [
        {
          kanji: '大地震',
          kana: 'おおじしん / だいじしん',
          romaji: 'oojishin / daijishin',
          meaningEn: 'major earthquake',
          meaningBn: 'বড় মাত্রার প্রবল ভূমিকম্প',
          tag: 'Disaster N4'
        },
        {
          kanji: '地震速報',
          kana: 'じしんそくほう',
          romaji: 'jishin sokuhou',
          meaningEn: 'earthquake early warning bulletin',
          meaningBn: 'ভূমিকম্পের জরুরি বার্তা (টিভি ও মোবাইল এলার্ট)',
          tag: 'Alert N3'
        },
        {
          kanji: '震源地',
          kana: 'しんげんち',
          romaji: 'shingenchi',
          meaningEn: 'earthquake epicenter',
          meaningBn: 'ভূমিকম্পের উৎপত্তিস্থল বা কেন্দ্রবিন্দু',
          tag: 'News N3'
        },
        {
          kanji: '余震',
          kana: 'よしん',
          romaji: 'yoshin',
          meaningEn: 'aftershock',
          meaningBn: 'পরবর্তী মৃদু ভূকম্পন (আফটারশক)',
          tag: 'News N3'
        },
        {
          kanji: '地震保険',
          kana: 'じしんほけん',
          romaji: 'jishin hoken',
          meaningEn: 'earthquake insurance',
          meaningBn: 'ভূমিকম্প বীমা',
          tag: 'Living N3'
        }
      ],
      sentences: [
        {
          ja: '緊急地震速報の警報音が鳴ったら、慌てずに頭を守って机の下に入りましょう。',
          romaji: 'Kinkyuu jishin sokuhou no keihouon ga nattara, awatezu ni atama o mamotte tsukue no shita ni hairimashou.',
          meaningEn: 'If the emergency earthquake warning alarm sounds, do not panic, protect your head, and get under a desk.',
          meaningBn: 'জরুরি ভূমিকম্প সতর্কতার অ্যালার্ম বাজলে আতঙ্কিত না হয়ে মাথা রক্ষা করে টেবিলের নিচে যান।'
        },
        {
          ja: '日本でアパートを借りるときは、地震保険に加入するのが一般的です。',
          romaji: 'Nihon de apaato o kariru toki wa, jishin hoken ni kanyuu suru no ga ippanteki desu.',
          meaningEn: 'When renting an apartment in Japan, enrolling in earthquake insurance is customary.',
          meaningBn: 'জাপানে অ্যাপার্টমেন্ট ভাড়া নেওয়ার সময়ে ভূমিকম্প বীমা করানো একটি সাধারণ নিয়ম।'
        }
      ],
      tamagoTip: {
        bn: 'মাটি বা পৃথিবী (地) এবং বৃষ্টির সাথে বজ্রঝাঁকুনি বা ভূকম্পন (震)। ভূমিকম্প 地震 (じしん)। জরুরি সতর্কতা 緊急地震速報।',
        en: 'Earth/Ground (地) + Shake/Tremor (震) = Earthquake 地震 (jishin).'
      }
    },

    // --- VISUAL RECOGNITION / SIGNS (3 items) ---
    // 15. 晴
    {
      id: 'l15-hare',
      kanji: '晴',
      emoji: '☀️',
      strokeCount: 12,
      jlpt: 'N4',
      category: 'visual_recognition',
      readings: {
        onyomi: [
          { kana: 'セイ', romaji: 'sei' }
        ],
        kunyomi: [
          { kana: 'は・れる', romaji: 'ha-reru' },
          { kana: 'は・れ', romaji: 'ha-re' }
        ]
      },
      meanings: {
        en: 'clear weather, sunny, fair sky',
        bn: 'রৌদ্রোজ্জ্বল, পরিষ্কার আকাশ, মেঘমুক্ত রোদ'
      },
      vocab: [
        {
          kanji: '晴れ',
          kana: 'はれ',
          romaji: 'hare',
          meaningEn: 'clear weather, sunny day',
          meaningBn: 'রোদ / রৌদ্রোজ্জ্বল আবহাওয়া',
          tag: 'Weather N5'
        },
        {
          kanji: '晴天',
          kana: 'せいてん',
          romaji: 'seiten',
          meaningEn: 'fine weather, fair sky',
          meaningBn: 'মেঘমুক্ত চমৎকার পরিষ্কার দিন',
          tag: 'Weather N4'
        },
        {
          kanji: '快晴',
          kana: 'かいせい',
          romaji: 'kaisei',
          meaningEn: 'cloudless skies, wonderfully clear day',
          meaningBn: 'একদম ঝকঝকে মেঘহীন নীল আকাশ',
          tag: 'Weather N3'
        },
        {
          kanji: '秋晴れ',
          kana: 'あきばれ',
          romaji: 'akibare',
          meaningEn: 'clear autumn weather',
          meaningBn: 'শরতের মনোরম মিষ্টি রোদ',
          tag: 'Season N3'
        },
        {
          kanji: '晴れ時々曇り',
          kana: 'はれ ときどき くもり',
          romaji: 'hare tokidoki kumori',
          meaningEn: 'partly cloudy, sunny with occasional clouds',
          meaningBn: 'রোদের সাথে মাঝে মাঝে মেঘলা আকাশ',
          tag: 'Forecast N4'
        }
      ],
      sentences: [
        {
          ja: '明日の天気マークは「晴れ」ですから、絶好のピクニック日和になりそうです。',
          romaji: 'Ashita no tenki maaku wa "hare" desu kara, zekkou no pikunikku biyori ni narisou desu.',
          meaningEn: 'Tomorrow\'s weather symbol is "sunny", so it looks like it will be ideal picnic weather.',
          meaningBn: 'আগামীকালের আবহাওয়া সাইন হচ্ছে "রোদ" (晴れ), তাই পিকনিকের জন্য দারুণ দিন হবে।'
        },
        {
          ja: '雲ひとつない快晴の空の下、富士山がとても綺麗に見えました。',
          romaji: 'Kumo hitotsu nai kaisei no sora no shita, Fujisan ga totemo kirei ni miemashita.',
          meaningEn: 'Under the cloudless clear sky, Mount Fuji was visible looking extraordinarily beautiful.',
          meaningBn: 'একখণ্ড মেঘহীন ঝকঝকে পরিষ্কার আকাশের নিচে ফুজি পাহাড় অপরূপ সুন্দর দেখাচ্ছিল।'
        }
      ],
      tamagoTip: {
        bn: 'সূর্য (日) উঠলে নীল আকাশ (青) উদ্ভাসিত হয়। রৌদ্রোজ্জ্বল আবহাওয়া 晴れ (はれ) ও মেঘহীন দিন 快晴 (かいせい)।',
        en: 'The sun (日) shines to reveal a clean blue sky (青). Sunny weather 晴れ (hare).'
      }
    },

    // 16. 曇
    {
      id: 'l15-kumori',
      kanji: '曇',
      emoji: '☁️',
      strokeCount: 16,
      jlpt: 'N4',
      category: 'visual_recognition',
      readings: {
        onyomi: [
          { kana: 'ドン', romaji: 'don' }
        ],
        kunyomi: [
          { kana: 'くも・る', romaji: 'kumo-ru' },
          { kana: 'くも・り', romaji: 'kumo-ri' }
        ]
      },
      meanings: {
        en: 'cloudy, overcast, shadow, dim',
        bn: 'মেঘলা, মেঘে ঢাকা, বিষাদময় আকাশ'
      },
      vocab: [
        {
          kanji: '曇り',
          kana: 'くもり',
          romaji: 'kumori',
          meaningEn: 'cloudiness, cloudy weather',
          meaningBn: 'মেঘলা আকাশ / মেঘাচ্ছন্নতা',
          tag: 'Weather N5'
        },
        {
          kanji: '曇る',
          kana: 'くもる',
          romaji: 'kumoru',
          meaningEn: 'to become cloudy, to fog up',
          meaningBn: 'মেঘলা হওয়া / ঝাপসা বা বাষ্পাচ্ছন্ন হওয়া',
          tag: 'Verb N4'
        },
        {
          kanji: '曇天',
          kana: 'どんてん',
          romaji: 'donten',
          meaningEn: 'overcast sky, cloudy day',
          meaningBn: 'ঘন মেঘে ঢাকা ধূসর আকাশ',
          tag: 'Weather N3'
        },
        {
          kanji: '曇り空',
          kana: 'くもりぞら',
          romaji: 'kumorizora',
          meaningEn: 'overcast / grey cloudy sky',
          meaningBn: 'মেঘলা আকাশ',
          tag: 'Daily N3'
        },
        {
          kanji: '曇りのち雨',
          kana: 'くもりのちあめ',
          romaji: 'kumori nochi ame',
          meaningEn: 'cloudy, later rain',
          meaningBn: 'প্রথমে মেঘলা, পরবর্তীতে বৃষ্টিপাত',
          tag: 'Forecast N4'
        }
      ],
      sentences: [
        {
          ja: '東京地方の明日の予報は「曇りのち雨」ですので、折りたたみ傘をお持ちください。',
          romaji: 'Toukyou chihou no ashita no yohou wa "kumori nochi ame" desu node, oritatamigasa o omochi kudasai.',
          meaningEn: 'Tomorrow\'s forecast for the Tokyo region is "cloudy, then rain", so please carry a folding umbrella.',
          meaningBn: 'টোকিও অঞ্চলের আগামীকালের পূর্বাভাস "মেঘলার পর বৃষ্টি", তাই একটি ছোট ছাতা সঙ্গে রাখুন।'
        },
        {
          ja: '朝からどんよりとした曇り空が広がり、今にも雨が降り出しそうです。',
          romaji: 'Asa kara donyori to shita kumorizora ga hirogari, ima ni mo ame ga furidashisou desu.',
          meaningEn: 'Since morning a gloomy overcast sky has spread, looking as if rain will pour any moment.',
          meaningBn: 'সকাল থেকেই থমথমে মেঘলা আকাশ ছেয়ে আছে, যেকোনো মুহূর্তে বৃষ্টি নামতে পারে।'
        }
      ],
      tamagoTip: {
        bn: 'মেঘমালা (雲) সূর্যের আলো ঢেকে দিয়ে অন্ধকার করেছে (日)। মেঘলা আকাশ 曇り (くもり)।',
        en: 'Clouds (雲) gathering over the sun (日) casting shade. Cloudy 曇り (kumori).'
      }
    },

    // 17. 雪
    {
      id: 'l15-yuki',
      kanji: '雪',
      emoji: '❄️',
      strokeCount: 11,
      jlpt: 'N5',
      category: 'visual_recognition',
      readings: {
        onyomi: [
          { kana: 'セツ', romaji: 'setsu' }
        ],
        kunyomi: [
          { kana: 'ゆき', romaji: 'yuki' }
        ]
      },
      meanings: {
        en: 'snow, snowfall',
        bn: 'তুষার, বরফপাত, বরফ'
      },
      vocab: [
        {
          kanji: '雪',
          kana: 'ゆき',
          romaji: 'yuki',
          meaningEn: 'snow',
          meaningBn: 'তুষার / বরফ',
          tag: 'Nature N5'
        },
        {
          kanji: '大雪',
          kana: 'おおゆき',
          romaji: 'ooyuki',
          meaningEn: 'heavy snow, blizzard',
          meaningBn: 'প্রচণ্ড তুষারপাত / ভারী বরফ',
          tag: 'Weather N4'
        },
        {
          kanji: '雪だるま',
          kana: 'ゆきだるま',
          romaji: 'yukidaruma',
          meaningEn: 'snowman',
          meaningBn: 'তুষারমানব (স্নোম্যান)',
          tag: 'Culture N4'
        },
        {
          kanji: '降雪',
          kana: 'こうせつ',
          romaji: 'kousetsu',
          meaningEn: 'snowfall, falling snow',
          meaningBn: 'বরফপড়া / তুষারপাত',
          tag: 'News N3'
        },
        {
          kanji: '雪景色',
          kana: 'ゆきげしき',
          romaji: 'yukigeshiki',
          meaningEn: 'snowy landscape / winter scenery',
          meaningBn: 'তুষারে ঢাকা শুভ্র প্রাকৃতিক দৃশ্য',
          tag: 'Nature N3'
        }
      ],
      sentences: [
        {
          ja: '大雪の影響により、高速道路の通行止めや飛行機の欠航が相次いでいます。',
          romaji: 'Ooyuki no eikyou ni yori, kousokudouro no tsuukoudome ya hikouki no kekkou ga aitsuide imasu.',
          meaningEn: 'Due to the heavy snow, highway closures and flight cancellations are occurring one after another.',
          meaningBn: 'ভারী তুষারপাতের প্রভাবে এক্সপ্রেসওয়েতে চলাচল বন্ধ এবং একের পর এক ফ্লাইট বাতিল হচ্ছে।'
        },
        {
          ja: '昨晩降った雪が道路で凍結しているので、足元に十分注意して歩いてください。',
          romaji: 'Sakuban futta yuki ga douro de touketsu shite iru node, ashimoto ni juubun chuui shite aruite kudasai.',
          meaningEn: 'Because snow that fell last night has frozen on the roads, please walk with great caution watching your feet.',
          meaningBn: 'গতরাতে পড়া বরফ রাস্তায় জমে বরফখণ্ডে পরিণত হয়েছে, তাই হাঁটার সময় খুব সাবধানে পা ফেলুন।'
        }
      ],
      tamagoTip: {
        bn: 'মেঘ থেকে বৃষ্টি পড়ার বদলে (雨) হাত দিয়ে স্পর্শ করা যায় এমন স্ফটিক বরফকণা (ヨ)। তুষার 雪 (ゆき)। প্রচণ্ড বরফ 大雪 (おおゆき)।',
        en: 'Rain (雨) that can be swept or held by hand (ヨ). Snow 雪 (yuki).'
      }
    }
  ]
};
