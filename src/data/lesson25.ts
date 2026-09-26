import { Lesson } from '../types/kanji';

export const lesson25: Lesson = {
  id: 25,
  number: 25,
  titleJa: '遊びに行って',
  titleRomaji: 'Asobi ni itte',
  titleBn: 'ঘুরতে যাওয়া (Going Out & Recreations)',
  titleEn: 'Going Out & Recreations',
  descriptionBn: 'ছুটির দিনে বা অবসরে পার্ক, চিড়িয়াখানা, আর্ট মিউজিয়াম, পুকুর ও বিভিন্ন দর্শনীয় স্থানে ঘুরতে যাওয়া এবং ভ্রমণের সময় প্রয়োজনীয় চমৎকার কান্জি (場, 動, 公, 園, 鳥, 遊, 池, 店, 産, 軽)।',
  descriptionEn: 'Essential Kanji for planning outings, visiting parks, art museums, recreational places, and experiencing tourism in Japan.',
  kanjiList: [
    // --- Main Kanji (書ける: 場, 動, 公, 園, 鳥, 遊, 池, 店, 産, 軽) ---
    {
      id: 'l25-ba',
      kanji: '場',
      emoji: '📍',
      strokeCount: 12,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ジョウ', romaji: 'jou' }],
        kunyomi: [{ kana: 'ば', romaji: 'ba' }]
      },
      meanings: {
        en: 'Place, spot, arena',
        bn: 'স্থান, জায়গা, ক্ষেত্র'
      },
      vocab: [
        { kanji: '場所', kana: 'ばしょ', romaji: 'basho', meaningEn: 'place, location', meaningBn: 'জায়গা বা স্থান', tag: 'N5' },
        { kanji: '広場', kana: 'ひろば', romaji: 'hiroba', meaningEn: 'plaza, open square', meaningBn: 'উন্মুক্ত মাঠ বা চত্বর', tag: 'N4' },
        { kanji: '運動場', kana: 'うんどうじょう', romaji: 'undoujou', meaningEn: 'playground, athletic field', meaningBn: 'খেলার মাঠ', tag: 'N4' },
        { kanji: '会場', kana: 'かいじょう', romaji: 'kaijou', meaningEn: 'venue, assembly hall', meaningBn: 'অনুষ্ঠানের স্থান বা ভেন্যু', tag: 'N4' },
        { kanji: '立場', kana: 'たちば', romaji: 'tachiba', meaningEn: 'standpoint, position', meaningBn: 'অবস্থান বা দৃষ্টিভঙ্গি', tag: 'N3' },
        { kanji: '入場料', kana: 'にゅうじょうりょう', romaji: 'nyuujouryou', meaningEn: 'entrance fee', meaningBn: 'প্রবেশ মূল্য', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '週末、友達と約束した静かな場所に遊びに行きました।',
          romaji: 'Shuumatsu, tomodachi to yakusoku shita shizuka na basho ni asobi ni ikimashita.',
          meaningEn: 'On the weekend, I went to a quiet place I had promised with my friend.',
          meaningBn: 'ছুটির দিনে বন্ধুর সাথে কথা দেওয়া একটি শান্ত জায়গায় ঘুরতে গিয়েছিলাম।'
        },
        {
          ja: 'お祭りの会場はたくさんの人で賑わっていました।',
          romaji: 'Omatsuri no kaijou wa takusan no hito de nigiwatte imasu.',
          meaningEn: 'The festival venue is crowded with many people.',
          meaningBn: 'উৎসবের ভেন্যুটি প্রচুর মানুষের উপস্থিতিতে মুখরিত ছিল।'
        }
      ],
      tamagoTip: {
        en: 'Left side is earth/ground (土) and right side represents sun rays rising (昜), marking an active, warm place on the ground.',
        bn: 'বামে মাটি (土) আর ডানে সূর্যের আলো প্রকাশ করে, যা মাটির ওপর আলোকময় বা প্রাণবন্ত একটি জায়গাকে নির্দেশ করে।'
      }
    },
    {
      id: 'l25-ugoku',
      kanji: '動',
      emoji: '🏃',
      strokeCount: 11,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ドウ', romaji: 'dou' }],
        kunyomi: [{ kana: 'うご.く', romaji: 'ugo.custom_tts_hook' }, { kana: 'うご.かす', romaji: 'ugo.kasu' }]
      },
      meanings: {
        en: 'Move, motion, change',
        bn: 'নড়াচড়া করা, চলা, পরিবর্তন করা'
      },
      vocab: [
        { kanji: '動く', kana: 'うごく', romaji: 'ugoku', meaningEn: 'to move, run', meaningBn: 'নড়ে ওঠা বা সচল হওয়া', tag: 'N5' },
        { kanji: '運動する', kana: 'うんどうする', romaji: 'undou suru', meaningEn: 'to exercise, workout', meaningBn: 'ব্যায়াম বা কসরত করা', tag: 'N5' },
        { kanji: '動物', kana: 'どうぶつ', romaji: 'doubutsu', meaningEn: 'animal', meaningBn: 'পশু-পাখি বা প্রাণী', tag: 'N5' },
        { kanji: '自動車', kana: 'じどうしゃ', romaji: 'jidousha', meaningEn: 'automobile, car', meaningBn: 'স্বয়ংক্রিয় গাড়ি', tag: 'N4' },
        { kanji: '活動', kana: 'かつどう', romaji: 'katsudou', meaningEn: 'activity', meaningBn: 'কার্যক্রম বা অ্যাক্টিভিটি', tag: 'N3' },
        { kanji: '自動的に', kana: 'じどうてきに', romaji: 'jidouteki ni', meaningEn: 'automatically', meaningBn: 'স্বয়ংক্রিয়ভাবে', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'エレベーターが動かないので、階段を使ってください।',
          romaji: 'Erebeetaa ga ugokanai node, kaidan o tsukatte kudasai.',
          meaningEn: 'The elevator is not working, so please use the stairs.',
          meaningBn: 'এলিভেটরটি অচল থাকায় দয়া করে সিঁড়ি ব্যবহার করুন।'
        },
        {
          ja: '健康のために、毎朝近くの公園を走って運動しています।',
          romaji: 'Kenkou no tame ni, maiasa chikaku no kouen o hashitte undou shite imasu.',
          meaningEn: 'For health, I run and exercise in the nearby park every morning.',
          meaningBn: 'সুস্থ থাকার জন্য প্রতিদিন সকালে কাছের পার্কে দৌড়ে ব্যায়াম করি।'
        }
      ],
      tamagoTip: {
        en: 'Combining heavy/heavy-load (重) on the left with power/effort (力) on the right: putting power to move heavy loads!',
        bn: 'বামে ভারী বোঝা (重) আর ডানে শক্তি (力) - ভারী জিনিসকে শক্তি প্রয়োগ করে নড়াচড়া করা বা সরানো।'
      }
    },
    {
      id: 'l25-kou',
      kanji: '公',
      emoji: '🏛️',
      strokeCount: 4,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'コウ', romaji: 'kou' }],
        kunyomi: [{ kana: 'おおやけ', romaji: 'ooyake' }]
      },
      meanings: {
        en: 'Public, official, fair',
        bn: 'জনসাধারণের, সরকারি, পক্ষপাতহীন'
      },
      vocab: [
        { kanji: '公園', kana: 'こうえん', romaji: 'kouen', meaningEn: 'park', meaningBn: 'পার্ক বা উদ্যান', tag: 'N5' },
        { kanji: '公立', kana: 'こうりつ', romaji: 'kouritsu', meaningEn: 'publicly established', meaningBn: 'সরকারিভাবে প্রতিষ্ঠিত', tag: 'N4' },
        { kanji: '公務員', kana: 'こうむいん', romaji: 'koumuin', meaningEn: 'civil servant', meaningBn: 'সরকারি চাকুরিজীবী', tag: 'N3' },
        { kanji: '公平な', kana: 'こうへいな', romaji: 'kouhei na', meaningEn: 'fair, just', meaningBn: 'ন্যায়সঙ্গত বা পক্ষপাতহীন', tag: 'N3' },
        { kanji: '公開する', kana: 'こうかいする', romaji: 'koukai suru', meaningEn: 'to open to the public', meaningBn: 'সবার জন্য উন্মুক্ত করা', tag: 'N3' },
        { kanji: '主人公', kana: 'しゅじんこう', romaji: 'shujinkou', meaningEn: 'protagonist, hero', meaningBn: 'মূল চরিত্র বা নায়ক', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '週末、天気が良ければ公立の大きな図書館に行くのが好きです।',
          romaji: 'Shuumatsu, tenki ga yokereba kouritsu no ookina toshokan ni iku no ga suki desu.',
          meaningEn: 'On weekends, if the weather is good, I like to go to the large public library.',
          meaningBn: 'উইকেন্ডে আবহাওয়া ভালো থাকলে আমি সরকারি বড় লাইব্রেরিতে যেতে পছন্দ করি।'
        },
        {
          ja: '将来は国のために働く真面目な公務員になりたいです।',
          romaji: 'Shourai wa kuni no tame ni hataraku majime na koumuin ni naritai desu.',
          meaningEn: 'In the future, I want to become an earnest civil servant working for the country.',
          meaningBn: 'ভবিষ্যতে আমি দেশের সেবায় নিয়োজিত একজন সৎ ও কর্মঠ সরকারি কর্মকর্তা হতে চাই।'
        }
      ],
      tamagoTip: {
        en: 'It shows parts dividing things (八) and private/selfish interest (ム) covered, representing sharing fairly and opening up to everyone.',
        bn: 'এটি কোনো জিনিস ভাগ করা এবং ব্যক্তিগত স্বার্থ ঢেকে রাখা বোঝায়, অর্থাৎ সবার মাঝে সমান ও সরকারিভাবে ভাগ করা।'
      }
    },
    {
      id: 'l25-en',
      kanji: '園',
      emoji: '🏡',
      strokeCount: 13,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'エン', romaji: 'en' }],
        kunyomi: [{ kana: 'その', romaji: 'sono' }]
      },
      meanings: {
        en: 'Garden, park, yard',
        bn: 'বাগান, পার্ক, প্রাঙ্গণ'
      },
      vocab: [
        { kanji: '公園', kana: 'こうえん', romaji: 'kouen', meaningEn: 'park', meaningBn: 'পার্ক', tag: 'N5' },
        { kanji: '動物園', kana: 'どうぶつえん', romaji: 'doubutsuen', meaningEn: 'zoo', meaningBn: 'চিড়িয়াখানা', tag: 'N5' },
        { kanji: '遊園地', kana: 'ゆうえんち', romaji: 'yuuenchi', meaningEn: 'amusement park', meaningBn: 'বিনোদন পার্ক (Theme Park)', tag: 'N4' },
        { kanji: '幼稚園', kana: 'ようちえん', romaji: 'youchien', meaningEn: 'kindergarten', meaningBn: 'কিন্ডারগার্টেন বা প্রাক-প্রাথমিক', tag: 'N4' },
        { kanji: '庭園', kana: 'ていえん', romaji: 'teien', meaningEn: 'formal garden', meaningBn: 'জাপানি ঐতিহ্যবাহী বাগান', tag: 'N3' },
        { kanji: '学園', kana: 'がくえん', romaji: 'gakuen', meaningEn: 'campus, academy', meaningBn: 'ক্যাম্পাস বা শিক্ষা প্রতিষ্ঠান', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '休日に子供たちと一緒にアトラクションが多い遊園地へ行きました।',
          romaji: 'Kyuujitsu ni kodomotachi to issho ni atorakushon ga ooi yuuenchi e ikimashita.',
          meaningEn: 'On a holiday, I went with my children to an amusement park with many attractions.',
          meaningBn: 'ছুটির দিনে বাচ্চাদের নিয়ে চমৎকার রাইড সমৃদ্ধ একটি থিম পার্কে ঘুরতে গিয়েছিলাম।'
        },
        {
          ja: '京都にある古い庭園は、春の桜と秋の紅葉がとても美しいです।',
          romaji: 'Kyouto ni aru furui teien wa, haru no sakura to aki no kouyou ga totemo utsukushii desu.',
          meaningEn: 'The ancient gardens in Kyoto are incredibly beautiful with cherry blossoms in spring and autumn leaves.',
          meaningBn: 'কিয়োটোর ঐতিহ্যবাহী প্রাচীন বাগানগুলো বসন্তের চেরি ফুল ও শরতের রঙিন পাতার সময়ে দারুণ রূপ নেয়।'
        }
      ],
      tamagoTip: {
        en: 'The large outer border (囗) encloses a beautiful site (袁 - representing elegant clothes and flowers), showing a fenced, beautiful garden.',
        bn: 'বড় চারকোনা ঘেরা সীমানা (囗) দিয়ে সুন্দর একটি জায়গা আবৃত করা হয়েছে, যা প্রাচীর দিয়ে ঘেরা সুসজ্জিত বাগান প্রকাশ করে।'
      }
    },
    {
      id: 'l25-tori',
      kanji: '鳥',
      emoji: '🐦',
      strokeCount: 11,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'チョウ', romaji: 'chou' }],
        kunyomi: [{ kana: 'とり', romaji: 'tori' }]
      },
      meanings: {
        en: 'Bird, chicken',
        bn: 'পাখি, মুরগি'
      },
      vocab: [
        { kanji: '鳥', kana: 'とり', romaji: 'tori', meaningEn: 'bird, chicken', meaningBn: 'পাখি বা মুরগির মাংস', tag: 'N5' },
        { kanji: '小鳥', kana: 'ことり', romaji: 'kotori', meaningEn: 'little bird', meaningBn: 'মিষ্টি ছোট পাখি', tag: 'N4' },
        { kanji: '焼き鳥', kana: 'やきとり', romaji: 'yakitori', meaningEn: 'grilled chicken skewers', meaningBn: 'জাপানি চিকেন শিককাবাব', tag: 'N4' },
        { kanji: '白鳥', kana: 'はくちょう', romaji: 'hakuchou', meaningEn: 'swan', meaningBn: 'রাজহাঁস', tag: 'N3' },
        { kanji: '野鳥', kana: 'やちょう', romaji: 'yachou', meaningEn: 'wild bird', meaningBn: 'বুনো পাখি', tag: 'N3' },
        { kanji: '一石二鳥', kana: 'いっせきにちょう', romaji: 'isseki nichou', meaningEn: 'killing two birds with one stone', meaningBn: 'এক ঢিলে দুই পাখি মারা (প্রবাদ)', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '公園の池の周りで、可愛い小鳥たちが気持ちよさそうに歌っています।',
          romaji: 'Kouen no ike no mawari de, kawaii kotori-tachi ga kimochiyosasou ni utatte imasu.',
          meaningEn: 'Around the park pond, lovely small birds are singing pleasantly.',
          meaningBn: 'পার্কের পুকুরের চারপাশে মিষ্টি ছোট ছোট পাখিরা খুব সুন্দর সুরে ডাকছে।'
        },
        {
          ja: '会社のみんなと仕事の後に、居酒屋へ行って焼き鳥を食べました।',
          romaji: 'Kaisha no minna to shigoto no ato ni, izakaya e itte yakitori o tabemashita.',
          meaningEn: 'After work with colleagues, we went to an Izakaya and ate skewered grilled chicken.',
          meaningBn: 'অফিস শেষ করে সবার সাথে জাপানি ঐতিহ্যবাহী রেস্তোরাঁয় (Izakaya) গিয়ে ইয়াকিতোরি খেয়েছিলাম।'
        }
      ],
      tamagoTip: {
        en: 'A pictograph of a bird. The top portion is the head and crest, the middle is the wing and eye (白), and the bottom dots are its feet or feathers.',
        bn: 'এটি একটি পাখির ছবি থেকে এসেছে। ওপরের অংশটি পাখির মাথা ও ঝুঁটি, মাঝের অংশটি ডানা ও চোখ, এবং নিচের ডটগুলো পাখির পা নির্দেশ করে।'
      }
    },
    {
      id: 'l25-asobu',
      kanji: '遊',
      emoji: '🎡',
      strokeCount: 12,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ユウ', romaji: 'yuu' }],
        kunyomi: [{ kana: 'あそ.ぶ', romaji: 'aso.bu' }]
      },
      meanings: {
        en: 'Play, enjoy, travel, wander',
        bn: 'খেলা করা, ঘুরে বেড়ানো, অবসর কাটানো'
      },
      vocab: [
        { kanji: '遊ぶ', kana: 'あそぶ', romaji: 'asobu', meaningEn: 'to play, hang out', meaningBn: 'ঘুরতে যাওয়া বা আড্ডা দেওয়া', tag: 'N5' },
        { kanji: '遊び', kana: 'あそび', romaji: 'asobi', meaningEn: 'play, recreation, fun', meaningBn: 'খেলাধুলা বা বিনোদন', tag: 'N4' },
        { kanji: '遊園地', kana: 'ゆうえんち', romaji: 'yuuenchi', meaningEn: 'amusement park', meaningBn: 'থিম পার্ক বা বিনোদন পার্ক', tag: 'N4' },
        { kanji: '遊び場', kana: 'あそびば', romaji: 'asobiba', meaningEn: 'playground', meaningBn: 'বাচ্চাদের খেলার জায়গা', tag: 'N3' },
        { kanji: '浮世絵', kana: 'うきよえ', romaji: 'ukiyoe', meaningEn: 'Ukiyo-e (art style)', meaningBn: 'উকিয়ো-এ (ঐতিহ্যবাহী আর্ট)', tag: 'N3' },
        { kanji: '周遊', kana: 'しゅうゆう', romaji: 'shuuyuu', meaningEn: 'excursion, round-trip tour', meaningBn: 'বৃত্তাকার ভ্রমণ বা ট্যুর', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '今度の日曜日、お互いの休みが合えば渋谷へ遊びに行きませんか।',
          romaji: 'Kondo no nichiyoubi, otagai no yasumi ga aeba Shibuya e asobi ni ikimasen ka.',
          meaningEn: 'This coming Sunday, if our holidays align, would you like to go hang out in Shibuya?',
          meaningBn: 'আগামী রবিবার আমাদের দুজনেরই ছুটি মিললে একসাথে শিবুয়ায় ঘুরতে যাবেন কি?'
        },
        {
          ja: 'アパートの近くに子供たちが安全に走り回れる遊び場があります।',
          romaji: 'Apaato no chikaku ni kodomotachi ga anzen ni hashirimawarenu asobiba ga arimasu.',
          meaningEn: 'Near the apartment, there is a playground where children can run around safely.',
          meaningBn: 'অপার্টমেন্টের কাছেই বাচ্চাদের নিরাপদে দৌড়াদৌড়ি করে খেলার জন্য একটি মাঠ রয়েছে।'
        }
      ],
      tamagoTip: {
        en: 'The road radical (辶) combined with a flag waving (方) and a child (子) wandering under it: taking a casual path to play and relax.',
        bn: 'রাস্তার চিহ্ন (辶) এর সাথে পতাকা (方) এবং নিচে শিশু (子) মনের সুখে ঘুরে বেড়াচ্ছে, যা উদ্দেশ্যহীন আনন্দময় ঘুরে বেড়ানো প্রকাশ করে।'
      }
    },
    {
      id: 'l25-ike',
      kanji: '池',
      emoji: '🏞️',
      strokeCount: 6,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'チ', romaji: 'chi' }],
        kunyomi: [{ kana: 'いけ', romaji: 'ike' }]
      },
      meanings: {
        en: 'Pond, pool, cistern',
        bn: 'পুকুর, জলাশয়, আধার'
      },
      vocab: [
        { kanji: '池', kana: 'いけ', romaji: 'ike', meaningEn: 'pond', meaningBn: 'পুকুর বা দিঘি', tag: 'N5' },
        { kanji: '電池', kana: 'でんち', romaji: 'denchi', meaningEn: 'battery', meaningBn: 'ব্যাটারি', tag: 'N5' },
        { kanji: '乾電池', kana: 'かんでんち', romaji: 'kandenchi', meaningEn: 'dry cell battery', meaningBn: 'শুকনো ব্যাটারি বা পেন্সিল ব্যাটারি', tag: 'N4' },
        { kanji: '貯水池', kana: 'ちょすいち', romaji: 'chosuichi', meaningEn: 'reservoir', meaningBn: 'পানির রিজার্ভার বা জলাধার', tag: 'N3' },
        { kanji: '池端', kana: 'いけばた', romaji: 'ikebata', meaningEn: 'pond side', meaningBn: 'পুকুরের পাড়', tag: 'N3' },
        { kanji: '鯉の池', kana: 'こいのいけ', romaji: 'koi no ike', meaningEn: 'koi fish pond', meaningBn: 'কোই মাছের পুকুর', tag: 'N4' }
      ],
      sentences: [
        {
          ja: 'その公園の古い池には、カラフルで大きな鯉がたくさん泳いでいます।',
          romaji: 'Sono kouen no furui ike ni wa, karafuru de ookina koi ga takusan oyoide imasu.',
          meaningEn: 'In the old pond of that park, many large, colorful koi fish are swimming.',
          meaningBn: 'ওই পার্কের প্রাচীন পুকুরটিতে অনেক বড় বড় রঙিন কোই মাছ সাঁতার কাটছে।'
        },
        {
          ja: 'エアコンのリモコンが動かないので、電池を新しいものに交換します।',
          romaji: 'Eakon no rimokon ga ugokanai node, denchi o atarashii mono ni koukan shimasu.',
          meaningEn: 'The air conditioner remote is not working, so I will replace the battery with a new one.',
          meaningBn: 'এসি-র রিমোটটি কাজ করছে না, তাই ব্যাটারিটি নতুন একটি দিয়ে পরিবর্তন করে নিচ্ছি।'
        }
      ],
      tamagoTip: {
        en: 'Left side is water droplets (氵) and right side (也) represents a flat container or flow, showing water held in a shallow pond.',
        bn: 'বামে পানির ফোঁটা (氵) আর ডানে একটি অগভীর পাত্রের অবয়ব (也), যা এক জায়গায় শান্ত হয়ে জমে থাকা পানি বা পুকুরকে প্রকাশ করে।'
      }
    },
    {
      id: 'l25-mise',
      kanji: '店',
      emoji: '🏪',
      strokeCount: 8,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'テン', romaji: 'ten' }],
        kunyomi: [{ kana: 'みせ', romaji: 'mise' }]
      },
      meanings: {
        en: 'Shop, store',
        bn: 'দোকান, বিপণি'
      },
      vocab: [
        { kanji: '店', kana: 'みせ', romaji: 'mise', meaningEn: 'shop, store', meaningBn: 'দোকান', tag: 'N5' },
        { kanji: '店員', kana: 'てんいん', romaji: 'ten-in', meaningEn: 'shop assistant, clerk', meaningBn: 'দোকানের কর্মচারী', tag: 'N5' },
        { kanji: '書店', kana: 'しょてん', romaji: 'shoten', meaningEn: 'bookstore', meaningBn: 'বইয়ের দোকান', tag: 'N4' },
        { kanji: '喫茶店', kana: 'きっさてん', romaji: 'kissaten', meaningEn: 'coffee shop, cafe', meaningBn: 'ক্যাফে বা কফি শপ', tag: 'N4' },
        { kanji: '売店', kana: 'ばいてん', romaji: 'baiten', meaningEn: 'booth, kiosk, stall', meaningBn: 'স্টল বা ছোট অস্থায়ী দোকান', tag: 'N3' },
        { kanji: '本店', kana: 'ほんてん', romaji: 'honten', meaningEn: 'head office, main store', meaningBn: 'প্রধান শাখা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '駅前にある美味しいラーメンの店は、いつもお昼に行列ができています।',
          romaji: 'Ekimae ni aru oishii raamen no mise wa, itsumo ohiru ni gyouretsu ga dekite imasu.',
          meaningEn: 'The delicious ramen shop in front of the station always has a queue at lunchtime.',
          meaningBn: 'স্টেশনের সামনে থাকা সুস্বাদু রামেনের দোকানটিতে দুপুরের সময় সর্বদা মানুষের দীর্ঘ লাইন থাকে।'
        },
        {
          ja: 'お洒落な喫茶店で、店員さんが親切におすすめのコーヒーを教えてくれました।',
          romaji: 'Oshare na kissaten de, ten-in-san ga shinsetsu ni osusume no koohii o oshiete kuremashita.',
          meaningEn: 'At the stylish cafe, the clerk kindly recommended coffee options.',
          meaningBn: 'চমৎকার সাজানো ওই ক্যাফেটিতে দোকানের কর্মচারীটি খুব আন্তরিকতার সাথে সেরা কফির কথা জানিয়েছিল।'
        }
      ],
      tamagoTip: {
        en: 'The building radical (广) covering a fortune-telling stand or sign (占): a building with a designated stall inside, which is a shop.',
        bn: 'ভবনের ছাদ (广) এর নিচে পণ্য বা সাইনবোর্ড ঝুলিয়ে রাখার চিত্র (占), যা স্থায়ীভাবে কোনো জিনিস বিক্রির দোকান নির্দেশ করে।'
      }
    },
    {
      id: 'l25-san',
      kanji: '産',
      emoji: '🎁',
      strokeCount: 11,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'サン', romaji: 'san' }],
        kunyomi: [{ kana: 'う.む', romaji: 'u.mu' }, { kana: 'う.まれる', romaji: 'u.mareru' }]
      },
      meanings: {
        en: 'Produce, give birth, yield, native of',
        bn: 'উৎপাদন করা, জন্ম দেওয়া, সম্পদ'
      },
      vocab: [
        { kanji: 'お土産', kana: 'おみやげ', romaji: 'omiyage', meaningEn: 'souvenir, travel gift', meaningBn: 'ভ্রমণের স্যুভেনির বা উপহার', tag: 'N5' },
        { kanji: '生産する', kana: 'せいさんする', romaji: 'seisan suru', meaningEn: 'to produce, manufacture', meaningBn: 'উৎপাদন বা তৈরি করা', tag: 'N3' },
        { kanji: '産業', kana: 'さんぎょう', romaji: 'sangyou', meaningEn: 'industry', meaningBn: 'শিল্প খাত', tag: 'N3' },
        { kanji: '産地', kana: 'さんち', romaji: 'sanchi', meaningEn: 'producing region', meaningBn: 'উৎপত্তিস্থল বা মূল উৎপাদন এলাকা', tag: 'N3' },
        { kanji: '出産', kana: 'しゅっさん', romaji: 'shussan', meaningEn: 'childbirth, delivery', meaningBn: 'সন্তান প্রসব বা জন্মদান', tag: 'N3' },
        { kanji: '水産物', kana: 'すいさんぶつ', romaji: 'suisanbutsu', meaningEn: 'marine products', meaningBn: 'সামুদ্রিক মাছ ও জলজ সম্পদ', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '京都へ旅行に行ったとき、会社の先輩たちに美味しい和菓子のお土産を買いました।',
          romaji: 'Kyouto e ryokou ni itta toki, kaisha no senpai-tachi ni oishii wagashi no omiyage o kaishita.',
          meaningEn: 'When I traveled to Kyoto, I bought delicious Japanese sweet souvenirs for my workplace seniors.',
          meaningBn: 'কিয়োটো ভ্রমণের সময় অফিসের সিনিয়রদের জন্য সুস্বাদু ঐতিহ্যবাহী জাপানি মিষ্টির (ওমিয়াগে) উপহার কিনেছিলাম।'
        },
        {
          ja: '日本は高度な技術を使った自動車産業が世界中で有名です।',
          romaji: 'Nihon wa koudo na gijutsu o tsukatta jidousha sangyou ga sekaijuu de yuumei desu.',
          meaningEn: 'Japan is famous worldwide for its automobile industry that uses advanced technology.',
          meaningBn: 'জাপান উন্নত প্রযুক্তিতে সমৃদ্ধ তাদের অটোমোবাইল (গাড়ি) শিল্পের জন্য পৃথিবীজুড়ে অত্যন্ত সুপরিচিত।'
        }
      ],
      tamagoTip: {
        en: 'The top part is cliff/birthplace (产) over life/growth (生): representing natural growth and production emerging from a source.',
        bn: 'ওপরের অংশটি উৎস (产) আর নিচের অংশটি জন্ম বা বৃদ্ধি (生) প্রকাশ করে, অর্থাৎ নতুন জীবন বা পণ্যের উৎপত্তি।'
      }
    },
    {
      id: 'l25-karui',
      kanji: '軽',
      emoji: '🎈',
      strokeCount: 12,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ケイ', romaji: 'kei' }],
        kunyomi: [{ kana: 'かる.い', romaji: 'karu.i' }]
      },
      meanings: {
        en: 'Lightweight, simple, gentle, careless',
        bn: 'হালকা, সহজ-সরল, গুরুত্বহীন'
      },
      vocab: [
        { kanji: '軽い', kana: 'かるい', romaji: 'karui', meaningEn: 'light, not heavy', meaningBn: 'ওজনে হালকা', tag: 'N5' },
        { kanji: '手軽な', kana: 'てがるな', romaji: 'tegaru na', meaningEn: 'easy, convenient, simple', meaningBn: 'খুব সহজ ও সুবিধাজনক', tag: 'N4' },
        { kanji: '軽食', kana: 'けいしょく', romaji: 'keishoku', meaningEn: 'light meal, snack', meaningBn: 'হালকা খাবার বা নাস্তা', tag: 'N3' },
        { kanji: '軽自動車', kana: 'けいじどうしゃ', romaji: 'keijidousha', meaningEn: 'light automobile, Kei-car', meaningBn: 'জাপানি হালকা গাড়ি (K-car)', tag: 'N3' },
        { kanji: '気軽に', kana: 'きがるに', romaji: 'kigaruni', meaningEn: 'casually, without hesitation', meaningBn: 'কোনো দ্বিধা ছাড়াই সহজে', tag: 'N3' },
        { kanji: '軽減する', kana: 'けいげんする', romaji: 'keigen suru', meaningEn: 'to reduce, lighten', meaningBn: 'ভার কমানো বা লাঘব করা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'この新しいパソコンはとても軽くて薄いので、外への持ち運びにすごく便利です।',
          romaji: 'Kono atarashii pasokon wa totemo karukute usui node, soto e no mochihakobi ni sugoku benri desu.',
          meaningEn: 'This new computer is very light and thin, so it is extremely convenient to carry outside.',
          meaningBn: 'এই নতুন ল্যাপটপটি অনেক হালকা এবং পাতলা হওয়াতে বাইরে বহন করার জন্য ভীষণ চমৎকার ও আরামদায়ক।'
        },
        {
          ja: '困ったことがあれば、いつでも気軽にスタッフに相談してくださいね।',
          romaji: 'Komatta koto ga areba, itsudemo kigaruni sutaffu ni soudan shite kudasai ne.',
          meaningEn: 'If you have any trouble, please feel free to consult our staff at any time.',
          meaningBn: 'কোনো সমস্যায় পড়লে যেকোনো সময়ে খুব সহজ মনে দ্বিধাহীনভাবে আমাদের কর্মীদের সাথে কথা বলতে পারেন।'
        }
      ],
      tamagoTip: {
        en: 'Left is car (車) and right (巠) represents weaving threads, symbolizing a light-wheeled carriage that moves quickly and effortlessly.',
        bn: 'বামে চাকাওয়ালা গাড়ি (車) আর ডানে সুতোর মতো হালকা বুনন (巠) - যা খুব হালকা চাকার দ্রুতগতিতে চলা গাড়ি নির্দেশ করে।'
      }
    },

    // --- Read Only (読める: 美術館) ---
    {
      id: 'l25-bijutsukan',
      kanji: '美術館',
      emoji: '🖼️',
      strokeCount: 9 + 11 + 16, // 美 + 術 + 館
      jlpt: 'N4',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'ビジュツカン', romaji: 'bijutsukan' }],
        kunyomi: []
      },
      meanings: {
        en: 'Art museum, art gallery',
        bn: 'চিত্রশালা, আর্ট মিউজিয়াম'
      },
      vocab: [
        { kanji: '美術', kana: 'びじゅつ', romaji: 'bijutsu', meaningEn: 'fine art', meaningBn: 'ললিতকলা বা আর্ট', tag: 'N4' },
        { kanji: '美術館', kana: 'びじゅつかん', romaji: 'bijutsukan', meaningEn: 'art gallery', meaningBn: 'চিত্রশালা', tag: 'N4' },
        { kanji: '芸術', kana: 'げいじゅつ', romaji: 'geijutsu', meaningEn: 'art, artistic work', meaningBn: 'শিল্পকলা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '日曜日に上野にある有名な美術館へ行き、世界の素晴らしい絵を見て感動しました।',
          romaji: 'Nichiyoubi ni Ueno ni aru yuumei na bijutsukan e iki, sekai no subarashii e o mite kandou shimashita.',
          meaningEn: 'On Sunday, I went to a famous art museum in Ueno and was deeply moved by the wonderful paintings.',
          meaningBn: 'রবিবার উয়েনোর নামকরা আর্ট মিউজিয়ামে গিয়ে বিশ্বের অন্যতম সব সেরা ছবি দেখে ভীষণ অভিভূত হয়েছিলাম।'
        }
      ],
      tamagoTip: {
        en: '美 (beauty) + 術 (technique/skill) + 館 (building) = The building of beautiful techniques, representing an art museum.',
        bn: '美 (সৌন্দর্য) + 術 (কৌশল/শিল্প) + 館 (বিল্ডিং) = সুন্দর সুন্দর চিত্রকর্ম ও ভাস্কর্য প্রদর্শনের জন্য নির্ধারিত বিশেষ ভবন বা গ্যালারি।'
      }
    },

    // --- Visual Recognition (見て、分かる: 展望台) ---
    {
      id: 'l25-tenboudai',
      kanji: '展望台',
      emoji: '🔭',
      strokeCount: 11 + 17 + 5, // 展 + 望 + 台
      jlpt: 'N3',
      category: 'visual_recognition',
      readings: {
        onyomi: [{ kana: 'テンボウダイ', romaji: 'tenboudai' }],
        kunyomi: []
      },
      meanings: {
        en: 'Observation deck, lookout point',
        bn: 'পর্যবেক্ষণ ডেক বা ওয়াচ টাওয়ার'
      },
      vocab: [
        { kanji: '展望台', kana: 'てんぼうだい', romaji: 'tenboudai', meaningEn: 'observation deck', meaningBn: 'উঁচু ভিউ-পয়েন্ট বা পর্যবেক্ষণ টাওয়ার', tag: 'N3' },
        { kanji: '展望', kana: 'てんぼう', romaji: 'tenbou', meaningEn: 'view, outlook', meaningBn: 'দৃশ্যপট বা সম্ভাবনা', tag: 'N3' },
        { kanji: '台所', kana: 'だいどころ', romaji: 'daidokoro', meaningEn: 'kitchen', meaningBn: 'রান্নাঘর', tag: 'N5' }
      ],
      sentences: [
        {
          ja: '東京スカイツリーの展望台から、晴れた日には富士山の綺麗な姿もはっきりと見えますよ।',
          romaji: 'Toukyou Sukaiturii no tenboudai kara, hareta hi ni wa Fujisan no kirei na sugata mo hakkiri to miemasu yo.',
          meaningEn: 'From the observation deck of Tokyo Skytree, on a clear day you can even clearly see the beautiful shape of Mount Fuji.',
          meaningBn: 'টোকিও স্কাইট্রির পর্যবেক্ষণ ডেক থেকে আকাশ পরিষ্কার থাকলে মাউন্ট ফুজির মনোমুগ্ধকর রূপও একদম স্পষ্ট দেখা যায়।'
        }
      ],
      tamagoTip: {
        en: '展 (unroll/stretch) + 望 (look far/hope) + 台 (elevated platform) = An elevated platform to look far and wide.',
        bn: '展 (উন্মুক্ত করা) + 望 (দূরে তাকানো) + 台 (উঁচু প্ল্যাটফর্ম) = দিগন্তের বহুদূর পর্যন্ত চমৎকার দৃশ্যপট দেখার জন্য নির্মিত বিশেষ পর্যবেক্ষণ কেন্দ্র।'
      }
    }
  ]
};
