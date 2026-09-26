import { Lesson } from '../types/kanji';

export const lesson29: Lesson = {
  id: 29,
  number: 29,
  titleJa: '日本を知る',
  titleRomaji: 'Nihon o Shiru',
  titleBn: 'জাপানকে জানা (Knowing Japan - Geography, Festivals & Colors)',
  titleEn: 'Knowing Japan (Geography, Festivals & Colors)',
  descriptionBn: 'জাপানের ভৌগোলিক পরিচিতি, রাজধানী ও জেলাসমূহ, ঐতিহ্যবাহী জাপানি উৎসব এবং রঙের কান্জি (都, 県, 北, 西, 正, 花, 祭, 青, 黒, 白, 赤)।',
  descriptionEn: 'Essential Kanji for Japanese geography, prefectures, traditional festivals, and primary colors to understand Japan deeply.',
  kanjiList: [
    // --- Main Kanji (書ける: 都, 県, 北, 西, 正, 花, 祭, 青, 黒, 白, 赤) ---
    {
      id: 'l29-to',
      kanji: '都',
      emoji: '🏙️',
      strokeCount: 11,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ト', romaji: 'to' }, { kana: 'ツ', romaji: 'tsu' }],
        kunyomi: [{ kana: 'みやこ', romaji: 'miyako' }]
      },
      meanings: {
        en: 'Metropolis, capital, city',
        bn: 'মহানগরী, রাজধানী, ঐতিহ্যবাহী শহর'
      },
      vocab: [
        { kanji: '京都', kana: 'きょうと', romaji: 'Kyouto', meaningEn: 'Kyoto (ancient capital)', meaningBn: 'কিয়োটো (জাপানের ঐতিহ্যবাহী প্রাচীন রাজধানী)', tag: 'N5' },
        { kanji: '東京都', kana: 'とうきょうと', romaji: 'Toukyou-to', meaningEn: 'Tokyo Metropolis', meaningBn: 'টোকিও মহানগরী', tag: 'N4' },
        { kanji: '都会', kana: 'とかい', romaji: 'tokai', meaningEn: 'urban area, city', meaningBn: 'শহরাঞ্চল বা নাগরিক জীবন', tag: 'N4' },
        { kanji: '首都', kana: 'しゅと', romaji: 'shuto', meaningEn: 'capital city', meaningBn: 'রাষ্ট্রের রাজধানী', tag: 'N3' },
        { kanji: '都市', kana: 'とし', romaji: 'toshi', meaningEn: 'city, municipal', meaningBn: 'শহর বা পৌরসভা', tag: 'N3' },
        { kanji: '都合', kana: 'つごう', romaji: 'tsugou', meaningEn: 'convenience, circumstances', meaningBn: 'সুযোগ-সুবিধা বা পারিপার্শ্বিক অবস্থা', tag: 'N5' }
      ],
      sentences: [
        {
          ja: '京都は古いお寺や神社がたくさん残っている美しい都です।',
          romaji: 'Kyouto wa furui otera ya jinja ga takusan nokotte iru utsukushii miyako desu.',
          meaningEn: 'Kyoto is a beautiful capital where many old temples and shrines remain.',
          meaningBn: 'কিয়োটো হলো একটি প্রাচীন ও রূপসী নগরী, যেখানে এখনো অনেক ঐতিহ্যবাহী মন্দির ও শ্রাইন অক্ষত রয়েছে।'
        },
        {
          ja: '明日の午後、アルバイトの面接に行くのは都合が良いですか।',
          romaji: 'Ashita no gogo, arubaito no mensetsu ni iku no wa tsugou ga yoi desu ka.',
          meaningEn: 'Is it convenient for you to go for the part-time job interview tomorrow afternoon?',
          meaningBn: 'আগামীকাল বিকেলে পার্ট-টাইম জবের ইন্টারভিউতে যাওয়া কি আপনার সুবিধাজনক হবে?'
        }
      ],
      tamagoTip: {
        en: 'The left part is a person/settlement (者) and the right side represents a town/community (阝): a large community where people assemble, referring to the capital.',
        bn: 'বামে বসতি (者) আর ডানে এলাকার প্রতীক (阝)। অনেক মানুষ একসাথে সুন্দর ও সুরক্ষিতভাবে যেখানে বাস করে, সেই রাজকীয় মহানগরী বা রাজধানী।'
      }
    },
    {
      id: 'l29-ken',
      kanji: '県',
      emoji: '🗺️',
      strokeCount: 9,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ケン', romaji: 'ken' }],
        kunyomi: []
      },
      meanings: {
        en: 'Prefecture, province',
        bn: 'প্রিফেকচার বা জেলা (জাপানের প্রশাসনিক বিভাগ)'
      },
      vocab: [
        { kanji: '埼玉県', kana: 'さいたまけん', romaji: 'Saitama-ken', meaningEn: 'Saitama Prefecture', meaningBn: 'সাইতামা জেলা (টোকিওর পাশের জেলা)', tag: 'N4' },
        { kanji: '県知事', kana: 'けんちじ', romaji: 'kenchiji', meaningEn: 'prefectural governor', meaningBn: 'প্রিফেকচারাল গভর্নর বা জেলা প্রধান', tag: 'N3' },
        { kanji: '県庁', kana: 'けんちょう', romaji: 'kenchou', meaningEn: 'prefectural office / government', meaningBn: 'জেলা পরিষদ কার্যালয়', tag: 'N3' },
        { kanji: '県内', kana: 'けんない', romaji: 'kennai', meaningEn: 'within the prefecture', meaningBn: 'জেলার ভেতরে', tag: 'N3' },
        { kanji: '他県', kana: 'たけん', romaji: 'taken', meaningEn: 'other prefectures', meaningBn: 'অন্যান্য জেলা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '日本には一都一道二府四十三県があり、全部で四十七の都道府県があります।',
          romaji: 'Nihon ni wa itto idou nifu yonjuusanken ga ari, zenbu de yonjuunana no todou fuken ga arimasu.',
          meaningEn: 'In Japan, there is 1 metropolis, 1 circuit, 2 urban prefectures, and 43 prefectures, making a total of 47 prefectures.',
          meaningBn: 'জাপানে মোট ৪৭টি প্রশাসনিক বিভাগ (都道府県 - তদৌফুকেন) রয়েছে, যার মধ্যে ৪৩টি-ই হলো আমাদের সাধারণ প্রিফেকচার বা জেলা (県)।'
        },
        {
          ja: '週末に千葉県にある東京ディズニーランドへ遊びに行きました।',
          romaji: 'Shuumatsu ni Chiba-ken ni aru Toukyou Dizuniirando e asobi ni ikimashita.',
          meaningEn: 'On the weekend, I went to Tokyo Disneyland, which is located in Chiba Prefecture.',
          meaningBn: 'সাপ্তাহিক ছুটিতে আমি চিবা জেলায় অবস্থিত বিখ্যাত টোকিও ডিজনিল্যান্ডে বেড়াতে গিয়েছিলাম।'
        }
      ],
      tamagoTip: {
        en: 'Originally represented a boundary or administrative division of land hanging or connected under control.',
        bn: 'জাপানের প্রশাসনিক বিভাগ বা জেলা বোঝাতে এই কান্জি ব্যবহৃত হয়। মনে রাখুন, এটি একটি সীমানার ভেতরে সুবিন্যস্ত সুশৃঙ্খল প্রশাসনিক কাঠামোর চিত্র।'
      }
    },
    {
      id: 'l29-kita',
      kanji: '北',
      emoji: '🧭',
      strokeCount: 5,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ホク', romaji: 'hoku' }],
        kunyomi: [{ kana: 'きた', romaji: 'kita' }]
      },
      meanings: {
        en: 'North',
        bn: 'উত্তর দিক'
      },
      vocab: [
        { kanji: '北', kana: 'きた', romaji: 'kita', meaningEn: 'north', meaningBn: 'উত্তর', tag: 'N5' },
        { kanji: '北海道', kana: 'ほっかいどう', romaji: 'Hokkaido', meaningEn: 'Hokkaido (northern island)', meaningBn: 'হোক্কাইদো (জাপানের সর্বউত্তরের তুষারাবৃত দ্বীপ)', tag: 'N5' },
        { kanji: '北口', kana: 'きたぐち', romaji: 'kitaguchi', meaningEn: 'north exit', meaningBn: 'স্টেশনের উত্তর গেট', tag: 'N5' },
        { kanji: '東北', kana: 'とうほく', romaji: 'Touhoku', meaningEn: 'Tohoku (northeast region)', meaningBn: 'তোহোকু অঞ্চল (উত্তর-পূর্ব জাপান)', tag: 'N4' },
        { kanji: '北極', kana: 'ほっきょく', romaji: 'hokkyoku', meaningEn: 'North Pole', meaningBn: 'উত্তর মেরু', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '電車の駅に着いたら、まずは北口を出てまっすぐ歩いてください।',
          romaji: 'Densha no eki ni tsuitara, mazu wa kitaguchi o dete massugu aruite kudasai.',
          meaningEn: 'When you arrive at the train station, first go out the North Exit and walk straight.',
          meaningBn: 'ট্রেন স্টেশনে পৌঁছানোর পর প্রথমে উত্তর গেট (北口) দিয়ে বের হয়ে সোজা হাঁটা শুরু করবেন।'
        },
        {
          ja: '北海道の冬は非常に寒くて、たくさんの雪が降ります।',
          romaji: 'Hokkaido no fuyu wa hijou ni samukute, takusan no yuki ga furimasu.',
          meaningEn: 'Winter in Hokkaido is extremely cold, and a lot of snow falls.',
          meaningBn: 'হোক্কাইদোর শীতকাল প্রচণ্ড ঠাণ্ডা এবং সেখানে প্রচুর পরিমাণে তুষারপাত হয়।'
        }
      ],
      tamagoTip: {
        en: 'Two people standing back to back, cold and turning away from each other towards the cold north wind.',
        bn: 'দুইজন মানুষ ঠাণ্ডায় কাঁপতে কাঁপতে একে অপরের দিকে পিঠ ফিরিয়ে উত্তর মেরুর কনকনে ঠাণ্ডা বাতাসের বিপরীতে দাঁড়িয়ে আছে।'
      }
    },
    {
      id: 'l29-nishi',
      kanji: '西',
      emoji: '🌅',
      strokeCount: 6,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'セイ', romaji: 'sei' }, { kana: 'サイ', romaji: 'sai' }],
        kunyomi: [{ kana: 'にし', romaji: 'nishi' }]
      },
      meanings: {
        en: 'West',
        bn: 'পশ্চিম দিক'
      },
      vocab: [
        { kanji: '西', kana: 'にし', romaji: 'nishi', meaningEn: 'west', meaningBn: 'পশ্চিম', tag: 'N5' },
        { kanji: '西口', kana: 'にしぐち', romaji: 'nishiguchi', meaningEn: 'west exit', meaningBn: 'পশ্চিম গেট', tag: 'N5' },
        { kanji: '関西', kana: 'かんさい', romaji: 'Kansai', meaningEn: 'Kansai region (Osaka, Kyoto)', meaningBn: 'কানসাই অঞ্চল (ওসাকা, কিয়োটো সমৃদ্ধ পশ্চিম জাপান)', tag: 'N4' },
        { kanji: '西洋', kana: 'せいよう', romaji: 'seiyou', meaningEn: 'the West / Western countries', meaningBn: 'পাশ্চাত্য বা পশ্চিমা দেশসমূহ', tag: 'N4' },
        { kanji: '南西', kana: 'なんせい', romaji: 'nansei', meaningEn: 'southwest', meaningBn: 'দক্ষিণ-পশ্চিম', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '太陽は東の空から上り、夕方には西の空へ沈んでいきます।',
          romaji: 'Taiyou wa higashi no sora kara nobori, yuugata ni wa nishi no sora e shizunde ikimasu.',
          meaningEn: 'The sun rises in the east and sinks in the western sky in the evening.',
          meaningBn: 'সূর্য পূর্বাকাশে উদিত হয় এবং গোধূলি লগ্নে পশ্চিম দিগন্তে (西) অস্তমিত হয়ে যায়।'
        },
        {
          ja: '新宿駅は日本一大きいので、西口から東口へ行くのが大変です।',
          romaji: 'Shinjuku eki wa Nihon-ichi ookii node, nishiguchi kara higashiguchi e iku no ga taihen desu.',
          meaningEn: 'Shinjuku Station is the largest in Japan, so going from the West Exit to the East Exit is difficult.',
          meaningBn: 'শিনজুকু স্টেশন জাপানের বৃহত্তম স্টেশন হওয়ায় পশ্চিম গেট (西口) থেকে পূর্ব গেটে যাওয়া এক বিরাট যুদ্ধ।'
        }
      ],
      tamagoTip: {
        en: 'A pictograph of a bird flying back to its nest as the sun sets in the west.',
        bn: 'এটি একটি পাখির বাসার ছবি। সন্ধ্যাবেলায় সূর্য যখন পশ্চিমে হেলে পড়ে, পাখি তখন ডানা মেলে পশ্চিম আকাশে উড়ে নিজের বাসায় ফেরে।'
      }
    },
    {
      id: 'l29-sei',
      kanji: '正',
      emoji: '✅',
      strokeCount: 5,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'セイ', romaji: 'sei' }, { kana: 'ショウ', romaji: 'shou' }],
        kunyomi: [{ kana: 'ただ.しい', romaji: 'tada.shii' }, { kana: 'まさ', romaji: 'masa' }]
      },
      meanings: {
        en: 'Correct, right, justice, exact',
        bn: 'সঠিক, সত্য, যথাযথ, সঠিক উত্তর'
      },
      vocab: [
        { kanji: '正しい', kana: 'ただしい', romaji: 'tadashii', meaningEn: 'correct, right, proper', meaningBn: 'সঠিক বা যথাযথ', tag: 'N5' },
        { kanji: 'お正月', kana: 'おしょうがつ', romaji: 'oshougatsu', meaningEn: 'New Year celebration', meaningBn: 'জাপানি নববর্ষ উৎসব', tag: 'N5' },
        { kanji: '正解', kana: 'せいかい', romaji: 'seikai', meaningEn: 'correct answer', meaningBn: 'সঠিক উত্তর', tag: 'N4' },
        { kanji: '正確な', kana: 'せいかくな', romaji: 'seikaku na', meaningEn: 'accurate, precise', meaningBn: 'নিখুঁত বা নির্ভুল', tag: 'N4' },
        { kanji: '正直な', kana: 'しょうじきな', romaji: 'shoujiki na', meaningEn: 'honest, frank', meaningBn: 'সৎ বা অকপট', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '日本語の試験で、質問に対して正しい答えを一つだけ選んでください।',
          romaji: 'Nihonngo no shiken de, shitsumon ni taishite tadashii kotae o hitotsu dake erande kudasai.',
          meaningEn: 'In the Japanese exam, please choose only one correct answer for the question.',
          meaningBn: 'জাপানি ভাষার পরীক্ষায় প্রতিটি প্রশ্নের বিপরীতে কেবল একটি সঠিক (正しい) উত্তর বেছে নিন।'
        },
        {
          ja: '日本では、一月一日のお正月に家族みんなで神社にお参りします।',
          romaji: 'Nihon de wa, ichigatsu tsuitachi no oshougatsu ni kazoku minna de jinja ni omairi shimasu.',
          meaningEn: 'In Japan, during the New Year on January 1st, the whole family visits a shrine.',
          meaningBn: 'জাপানে পহেলা জানুয়ারির নববর্ষে (お正月) পরিবারের সবাই মিলে স্থানীয় শ্রাইনে গিয়ে প্রার্থনা করে।'
        }
      ],
      tamagoTip: {
        en: 'A foot (止) walking towards a straight boundary line (一): walking straight in the right direction without wandering.',
        bn: 'নিচে পা বা থামা (止) আর ওপরে সোজা একটি সীমানা রেখা (一)। একদম সোজা পথে কোনো দ্বিধা ছাড়াই সঠিক ও ন্যায়পরায়ণভাবে এগিয়ে যাওয়া।'
      }
    },
    {
      id: 'l29-hana',
      kanji: '花',
      emoji: '🌸',
      strokeCount: 7,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'カ', romaji: 'ka' }],
        kunyomi: [{ kana: 'はな', romaji: 'hana' }]
      },
      meanings: {
        en: 'Flower, blossom',
        bn: 'ফুল, পুষ্প'
      },
      vocab: [
        { kanji: '花', kana: 'はな', romaji: 'hana', meaningEn: 'flower', meaningBn: 'ফুল', tag: 'N5' },
        { kanji: 'お花見', kana: 'おはなみ', romaji: 'ohanami', meaningEn: 'cherry blossom viewing', meaningBn: 'সাকুরা বা চেরি ফুল দেখার বসন্ত উৎসব', tag: 'N5' },
        { kanji: '花火', kana: 'はなび', romaji: 'hanabi', meaningEn: 'fireworks', meaningBn: 'আতশবাজি উৎসব', tag: 'N5' },
        { kanji: '花瓶', kana: 'かびん', romaji: 'kabin', meaningEn: 'flower vase', meaningBn: 'ফুলদানী', tag: 'N4' },
        { kanji: '生け花', kana: 'いけばな', romaji: 'ikebana', meaningEn: 'Japanese flower arrangement', meaningBn: 'জাপানি ঐতিহ্যবাহী পুষ্পশৈলী বা ইকেবানা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '春になると、日本の公園はピンク色の桜の花でいっぱいになります।',
          romaji: 'Haru ni naru to, Nihon no kouen wa pinku-iro no sakura no hana de ippai ni narimasu.',
          meaningEn: 'When spring comes, Japanese parks become full of pink cherry blossoms.',
          meaningBn: 'বসন্তকাল আসার সাথে সাথেই জাপানের পার্কগুলো গোলাপি রঙের সাকুরা ফুলে (花) ছেয়ে যায়।'
        },
        {
          ja: '夏の夜、川の近くで行われる大きな花火大会を友達と見に行きました।',
          romaji: 'Natsu no yoru, kawa no chikaku de okonawareta ookina hanabi taikai o tomodachi to mi ni ikimashita.',
          meaningEn: 'On a summer night, I went with friends to see a big fireworks display held near the river.',
          meaningBn: 'গ্রীষ্মের এক রাতে নদীর তীরে আয়োজিত বিশাল আতশবাজি প্রদর্শনী (花火) দেখতে বন্ধুদের সাথে গিয়েছিলাম।'
        }
      ],
      tamagoTip: {
        en: 'The top part is grass/plants (艹) and the bottom represents change/transformation (化): plants transforming into beautiful colorful blossoms.',
        bn: 'ওপরে ঘাস বা উদ্ভিদ (艹) আর নিচে পরিবর্তন হওয়া (化)। ছোট সবুজ চারা গাছ ঋতুর পরিবর্তনে চমৎকার ও সুগন্ধি ফুলে রূপান্তরিত হয়।'
      }
    },
    {
      id: 'l29-matsuri',
      kanji: '祭',
      emoji: '🏮',
      strokeCount: 11,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'サイ', romaji: 'sai' }],
        kunyomi: [{ kana: 'まつ.り', romaji: 'matsuri' }, { kana: 'まつ.る', romaji: 'matsuru' }]
      },
      meanings: {
        en: 'Festival, ritual, celebrate',
        bn: 'উৎসব, মেলা, ধর্মানুষ্ঠান বা পূজা-পার্বণ'
      },
      vocab: [
        { kanji: '祭り', kana: 'まつり', romaji: 'matsuri', meaningEn: 'festival', meaningBn: 'ঐতিহ্যবাহী উৎসব', tag: 'N5' },
        { kanji: '文化祭', kana: 'ぶんかさい', romaji: 'bunkasai', meaningEn: 'school culture festival', meaningBn: 'স্কুল-কলেজের সাংস্কৃতিক উৎসব', tag: 'N4' },
        { kanji: '祭日', kana: 'さいじつ', romaji: 'saijitsu', meaningEn: 'national holiday / festival day', meaningBn: 'উৎসবের দিন বা সরকারি ছুটির দিন', tag: 'N3' },
        { kanji: '学園祭', kana: 'がくえんさい', romaji: 'gakuensai', meaningEn: 'university campus festival', meaningBn: 'ভার্সিটির ক্যাম্পাস কার্নিভাল', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '日本の夏祭りでは、たくさんの人が浴衣を着て屋台で食べ物を買います।',
          romaji: 'Nihon no natsu matsuri de wa, takusan no hito ga yukata o kite yatai de tabemono o kaimasu.',
          meaningEn: 'In Japanese summer festivals, many people wear yukata and buy food at street stalls.',
          meaningBn: 'জাপানের গ্রীষ্মকালীন মেলায় (夏祭り) হাজারো মানুষ ঐতিহ্যবাহী যুগাতা পরে রঙিন সব খাবারের স্টল থেকে কেনাকাটা করে আনন্দ করে।'
        },
        {
          ja: '来週、私たちの日本語学校で文化祭があるので、ぜひ遊びに来てください।',
          romaji: 'Raishu_u, watashitachi no Nihonngo gakkou de bunkasai ga aru de, zehi asobi ni kite kudasai.',
          meaningEn: 'Next week, there is a cultural festival at our Japanese language school, so please come visit.',
          meaningBn: 'আগামী সপ্তাহে আমাদের জাপানি ভাষা স্কুলে কালচারাল ফেস্টিভ্যাল (文化祭) অনুষ্ঠিত হবে, আপনারা অবশ্যই আমন্ত্রিত।'
        }
      ],
      tamagoTip: {
        en: 'The top left is meat (⺼) and top right is a hand (又) placing it on an altar (示) for God to celebrate a ritual/festival.',
        bn: 'উপরে বামে ঈশ্বরের নৈবেদ্য বা মাংস (⺼), ডানে উৎসর্গকারী হাত (又) এবং নিচে পবিত্র বেদী বা শ্রাইন (示)। দেবতার উদ্দেশ্যে উৎসর্গ করে সবাই মিলে আনন্দ উৎসব করা।'
      }
    },
    {
      id: 'l29-ao',
      kanji: '青',
      emoji: '💙',
      strokeCount: 8,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'セイ', romaji: 'sei' }, { kana: 'ショウ', romaji: 'shou' }],
        kunyomi: [{ kana: 'あお', romaji: 'ao' }, { kana: 'あお.い', romaji: 'ao.i' }]
      },
      meanings: {
        en: 'Blue, green, young',
        bn: 'নীল বা সবুজ রং, কচি বা সতেজ'
      },
      vocab: [
        { kanji: '青い', kana: 'あおい', romaji: 'aoi', meaningEn: 'blue (adjective)', meaningBn: 'নীল', tag: 'N5' },
        { kanji: '青信号', kana: 'あおしんごう', romaji: 'aoshingou', meaningEn: 'green traffic light', meaningBn: 'ট্রাফিক সিগন্যালের সবুজ বাতি', tag: 'N4' },
        { kanji: '青年', kana: 'せいねん', romaji: 'seinen', meaningEn: 'youth, young man', meaningBn: 'যুবক বা তরুণ সমাজ', tag: 'N4' },
        { kanji: '青空', kana: 'あおぞら', romaji: 'aozora', meaningEn: 'blue sky', meaningBn: 'নীলাকাশ', tag: 'N3' },
        { kanji: '青春', kana: 'せいしゅん', romaji: 'seishun', meaningEn: 'youthful days, adolescence', meaningBn: 'যৌবনকাল বা সোনালী ছাত্রজীবন', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '雲一つない青空の下で、みんなでピクニックをするのは最高です।',
          romaji: 'Kumo hitotsu nai aozora no shita de, minna de pikunikku o suru no wa saikou desu.',
          meaningEn: 'Having a picnic with everyone under a cloudless blue sky is the best.',
          meaningBn: 'মেঘমুক্ত এক নীলাকাশের (青空) নিচে সবাই মিলে জমিয়ে পিকনিক করার মজাই আলাদা।'
        },
        {
          ja: '歩行者用の信号が青に変わってから、安全を確認して横断歩道を渡りましょう।',
          romaji: 'Hokousha-you no shingou ga ao ni kawatte kara, anzen o kakunin shite oudanhodou o watarimashou.',
          meaningEn: 'After the pedestrian signal changes to green, confirm safety and cross the pedestrian crossing.',
          meaningBn: 'পথচারী পারাপারের ট্রাফিক সিগন্যাল যখন সবুজ (青) হবে, তখন চারপাশ দেখে সাবধানে রাস্তা পার হোন।'
        }
      ],
      tamagoTip: {
        en: 'The top part is a plant growing (生) and the bottom is clear water or well/moon (井/月): green plants and clear waters representing blue/green freshness.',
        bn: 'ওপরে কচি ঘাসের চারা গজিয়ে ওঠা (生) আর নিচে পরিষ্কার কুয়া বা পানির ধারা, যা প্রকৃতির তাজা সতেজ নীল বা সবুজ রঙকে প্রকাশ করে।'
      }
    },
    {
      id: 'l29-kuro',
      kanji: '黒',
      emoji: '🖤',
      strokeCount: 11,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'コク', romaji: 'koku' }],
        kunyomi: [{ kana: 'くろ', romaji: 'kuro' }, { kana: 'くろ.い', romaji: 'kuro.i' }]
      },
      meanings: {
        en: 'Black, dark',
        bn: 'কালো রং'
      },
      vocab: [
        { kanji: '黒い', kana: 'くろい', romaji: 'kuroi', meaningEn: 'black (adjective)', meaningBn: 'কালো', tag: 'N5' },
        { kanji: '黒板', kana: 'こくばん', romaji: 'kokuban', meaningEn: 'blackboard', meaningBn: 'ক্লাসরুমের ব্ল্যাকবোর্ড', tag: 'N5' },
        { kanji: '白黒', kana: 'しろくろ', romaji: 'shirokuro', meaningEn: 'black and white', meaningBn: 'সাদা-কালো', tag: 'N4' },
        { kanji: '黒字', kana: 'くろじ', romaji: 'kuroji', meaningEn: 'surplus / in the black (financial)', meaningBn: 'ব্যাবসায়িক মুনাফা বা লাভের হিসাব', tag: 'N3' },
        { kanji: '真っ黒', kana: 'まっくろ', romaji: 'makkuro', meaningEn: 'pitch black, coal black', meaningBn: 'কুচকুচে কালো', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '日本語の先生が黒板に書いた文法を、ノートに素早くメモしました।',
          romaji: 'Nihonngo no sensei ga kokuban ni kaita bunpou o, no_uto ni subayaku memo shimashita.',
          meaningEn: 'I quickly took notes of the grammar written on the blackboard by the Japanese teacher.',
          meaningBn: 'জাপানি শিক্ষক ব্ল্যাকবোর্ডে (黒板) যে ব্যাকরণটি লিখেছেন, তা আমি চটপট খাতায় নোট করে নিয়েছি।'
        },
        {
          ja: '彼女はいつも黒い服を着ているので、とてもクールで大人っぽく見えます।',
          romaji: 'Kanojo wa itsumo kuroi fuku o kite iru node, totemo ku_ru de otonappoku miemasu.',
          meaningEn: 'Since she always wears black clothes, she looks very cool and mature.',
          meaningBn: 'সে সবসময় কালো রঙের পোশাক পরার কারণে তাকে দেখতে বেশ গাম্ভীর্যপূর্ণ ও স্মার্ট দেখায়।'
        }
      ],
      tamagoTip: {
        en: 'The top is a window or chimney covered in soot and the bottom represents fire/flames (灬): a fire burning wood, leaving black soot and coal.',
        bn: 'ওপরে চুল্লী বা চিমনীর ধোঁয়া জড়ো হওয়া আর নিচে জ্বলন্ত কয়লার আগুন (灬)। আগুনে পুড়ে সব কালো ভস্মে পরিণত হওয়া।'
      }
    },
    {
      id: 'l29-shiro',
      kanji: '白',
      emoji: '🤍',
      strokeCount: 5,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ハク', romaji: 'hoku' }, { kana: 'ビャク', romaji: 'byaku' }],
        kunyomi: [{ kana: 'しろ', romaji: 'shiro' }, { kana: 'しろ.い', romaji: 'shiro.i' }]
      },
      meanings: {
        en: 'White, blank',
        bn: 'সাদা রং, শূন্য বা ফাঁকা'
      },
      vocab: [
        { kanji: '白い', kana: 'しろい', romaji: 'shiroi', meaningEn: 'white (adjective)', meaningBn: 'সাদা', tag: 'N5' },
        { kanji: '面白い', kana: 'おもしろい', romaji: 'omashiroi', meaningEn: 'interesting, funny', meaningBn: 'মজার বা চমৎকার', tag: 'N5' },
        { kanji: '白紙', kana: 'はくし', romaji: 'hakushi', meaningEn: 'blank paper', meaningBn: 'সাদা কাগজ বা ফাঁকা খাতা', tag: 'N3' },
        { kanji: '白人', kana: 'はくじん', romaji: 'hakujin', meaningEn: 'caucasian, white person', meaningBn: 'শ্বেতাঙ্গ বা সাদা চামড়ার মানুষ', tag: 'N3' },
        { kanji: '告白する', kana: 'こくはくする', romaji: 'kokuhaku suru', meaningEn: 'to confess (love or truth)', meaningBn: 'প্রেমের প্রস্তাব বা মনের কথা প্রকাশ করা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '雪が降ると、山も街の屋根も真っ白な世界に変わってしまいます।',
          romaji: 'Yuki ga furu to, yama mo machi no yane mo masshiro na sekai ni kawatte shimaimasu.',
          meaningEn: 'When it snows, both mountains and town roofs change into a pure white world.',
          meaningBn: 'তুষারপাত হলে পাহাড় ও শহরের ঘরের চালগুলো একদম শুভ্র সাদা (白い) বরফে আবৃত হয়ে যায়।'
        },
        {
          ja: '日本の落語はとても面白いので、機会があればぜひ劇場へ見に行ってください।',
          romaji: 'Nihon no rakugo wa totemo omashiroi node, kikai ga areba zehi gekijou e mi ni itte kudasai.',
          meaningEn: 'Japanese traditional comedy (rakugo) is very interesting, so if you have a chance, please go see it at the theater.',
          meaningBn: 'জাপানের ঐতিহ্যবাহী হাসির নাটক "রাকুগো" অত্যন্ত মজার (面白い); সুযোগ পেলে সশরীরে থিয়েটারে গিয়ে উপভোগ করবেন।'
        }
      ],
      tamagoTip: {
        en: 'A sun (日) with a single white ray of light coming out from the top, representing pure white light.',
        bn: 'সূর্যের (日) ওপরের দিকে একটি ছোট্ট আলোর রেখা, যা তীব্র উজ্জ্বল সাদা রঙের নির্দেশক।'
      }
    },
    {
      id: 'l29-aka',
      kanji: '赤',
      emoji: '❤️',
      strokeCount: 7,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'セキ', romaji: 'seki' }, { kana: 'シャク', romaji: 'shaku' }],
        kunyomi: [{ kana: 'あか', romaji: 'aka' }, { kana: 'あか.い', romaji: 'aka.i' }]
      },
      meanings: {
        en: 'Red, crimson',
        bn: 'লাল রং'
      },
      vocab: [
        { kanji: '赤い', kana: 'あかい', romaji: 'akai', meaningEn: 'red (adjective)', meaningBn: 'লাল', tag: 'N5' },
        { kanji: '赤ちゃん', kana: 'あかちゃん', romaji: 'akachan', meaningEn: 'baby, infant', meaningBn: 'ছোট্ট শিশু বা দুগ্ধপোষ্য বাচ্চা', tag: 'N5' },
        { kanji: '赤十字', kana: 'せきじゅうじ', romaji: 'sekijuuji', meaningEn: 'Red Cross', meaningBn: 'রেড ক্রিসেন্ট বা রেড ক্রস সোসাইটি', tag: 'N3' },
        { kanji: '赤字', kana: 'あかじ', romaji: 'akaji', meaningEn: 'deficit / in the red (financial)', meaningBn: 'লোকসান বা ঘাটতির হিসাব', tag: 'N3' },
        { kanji: '真っ赤な', kana: 'まっかな', romaji: 'makka na', meaningEn: 'deep red, flushed', meaningBn: 'টকটকে লাল', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '秋の京都は、もみじの葉が真っ赤に紅葉して言葉にならないほど綺麗です।',
          romaji: 'Aki no Kyouto wa, momiji no ha ga makka ni kouyou shite kotoba ni naranai hodo kirei desu.',
          meaningEn: 'In Kyoto during autumn, the maple leaves turn bright red, which is too beautiful for words.',
          meaningBn: 'শরৎকালে কিয়োটোর ম্যাপল পাতাগুলো টকটকে লাল (真っ赤) বর্ণ ধারণ করে, যা ভাষায় প্রকাশ করার মতো নয়।'
        },
        {
          ja: '私の姉に新しく可愛い赤ちゃんが生まれたので、プレゼントを贈ります।',
          romaji: 'Watashi no ane ni atarashiku kawaii akachan ga umareta node, purezento o okurimasu.',
          meaningEn: 'A cute new baby was born to my older sister, so I am sending a present.',
          meaningBn: 'আমার বড় আপুর ঘরে একটি ফুটফুটে সুন্দর মিষ্টি বাবু (赤ちゃん) এসেছে, তাই আমি গিফট পাঠাচ্ছি।'
        }
      ],
      tamagoTip: {
        en: 'The top is a large person (大) and bottom represents fire (火): a large raging bonfire glowing red in the dark.',
        bn: 'ওপরে বড় মাটি বা বিশাল কিছুর প্রতীক আর নিচে গনগনে লাল জ্বলন্ত আগুন (火)। বড় অগ্নিকুণ্ড জ্বললে যেমন চারপাশ টকটকে লাল দেখায়।'
      }
    },

    // --- Read Only (読める: 関西, お祝い, 結婚式) ---
    {
      id: 'l29-kansai',
      kanji: '関西',
      emoji: '🏯',
      strokeCount: 12 + 6, // 関 + 西
      jlpt: 'N4',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'カンサイ', romaji: 'Kansai' }],
        kunyomi: []
      },
      meanings: {
        en: 'Kansai region (West Japan)',
        bn: 'কানসাই অঞ্চল (পশ্চিম জাপানের ওসাকা, কিয়োটো ও কোবে সংলগ্ন এলাকা)'
      },
      vocab: [
        { kanji: '関西空港', kana: 'かんさいくうこう', romaji: 'Kansai Kuukou', meaningEn: 'Kansai International Airport', meaningBn: 'কানসাই আন্তর্জাতিক বিমানবন্দর', tag: 'N3' },
        { kanji: '関西弁', kana: 'かんさいべん', romaji: 'Kansaiben', meaningEn: 'Kansai dialect (Osaka dialect)', meaningBn: 'ওসাকার স্থানীয় কথ্য ভাষা বা উপভাষা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '関西地方に住む人々はとても陽気で、美味しい食べ物のお店がたくさんあります।',
          romaji: 'Kansai chihou ni sumu hitobito wa totemo youki de, oishii tabemono no omise ga takusan arimasu.',
          meaningEn: 'People living in the Kansai region are very cheerful, and there are many delicious food shops.',
          meaningBn: 'কানসাই অঞ্চলে (関西) বসবাসকারী জাপানিরা খুবই রসিক ও দিলখোলা মনের মানুষ, আর সেখানে প্রচুর সুস্বাদু স্ট্রিট ফুড পাওয়া যায়।'
        }
      ],
      tamagoTip: {
        en: '関 (gateway/barrier) + 西 (west) = Gateways leading to the western provinces, historically referring to Osaka and Kyoto.',
        bn: '関 (সীমান্তের গেট) + 西 (পশ্চিম) = জাপানের ঐতিহাসিক সীমান্ত গেটের পশ্চিম দিকে অবস্থিত অঞ্চলসমূহ।'
      }
    },
    {
      id: 'l29-oiwai',
      kanji: 'お祝い',
      emoji: '🎁',
      strokeCount: 12 + 4, // 祝 + い
      jlpt: 'N4',
      category: 'read_only',
      readings: {
        onyomi: [],
        kunyomi: [{ kana: 'おいわい', romaji: 'oiwai' }]
      },
      meanings: {
        en: 'Celebration, congratulatory gift',
        bn: 'শুভেচ্ছা, অভিনন্দন জ্ঞাপন, বা উপহার দেওয়া'
      },
      vocab: [
        { kanji: 'お祝いする', kana: 'おいわいする', romaji: 'oiwai suru', meaningEn: 'to celebrate / congratulate', meaningBn: 'উদযাপন করা বা মুবারকবাদ দেওয়া', tag: 'N4' },
        { kanji: '祝日', kana: 'しゅくじつ', romaji: 'shukujitsu', meaningEn: 'national holiday', meaningBn: 'সরকারি ছুটির দিন', tag: 'N4' }
      ],
      sentences: [
        {
          ja: '友達が第一志望の大学に合格したので、みんなでお祝いのパーティーを開きました।',
          romaji: 'Tomodachi ga daiichi shibou no daigaku ni goukaku shita node, minna de oiwai no pa_ti_ o hirakimashita.',
          meaningEn: 'Since my friend passed their top-choice university exam, we all held a celebration party.',
          meaningBn: 'আমার কাছের এক বন্ধু তার স্বপ্নের ইউনিভার্সিটিতে চান্স পাওয়ায় আমরা সবাই মিলে তাকে চমৎকার পার্টি দিয়ে অভিনন্দন (お祝い) জানালাম।'
        }
      ],
      tamagoTip: {
        en: '祝 (celebrate/pray) with polite prefix お: expressing gratitude and joy for someone’s good fortune.',
        bn: '祝 (দোয়া বা উদযাপন) এর সাথে সম্মানসূচক お যুক্ত হয়ে কোনো আনন্দের উপলক্ষ বা শুভকামনাকে প্রকাশ করে।'
      }
    },
    {
      id: 'l29-kekkonshiki',
      kanji: '結婚式',
      emoji: '💒',
      strokeCount: 12 + 11 + 6, // 結 + 婚 + 式
      jlpt: 'N4',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'ケッコンシキ', romaji: 'kekkonshiki' }],
        kunyomi: []
      },
      meanings: {
        en: 'Wedding ceremony',
        bn: 'বিবাহ উৎসব, বিয়ের অনুষ্ঠান'
      },
      vocab: [
        { kanji: '結婚する', kana: 'けっこんする', romaji: 'kekkon suru', meaningEn: 'to get married', meaningBn: 'বিয়ে করা', tag: 'N5' },
        { kanji: '式', kana: 'しき', romaji: 'shiki', meaningEn: 'ceremony, formula', meaningBn: 'অনুষ্ঠান বা ফর্মুলা', tag: 'N4' },
        { kanji: '入学式', kana: 'にゅうがくしき', romaji: 'nyuugakushiki', meaningEn: 'entrance ceremony', meaningBn: 'নতুন ক্লাসে ওঠার ওরিয়েন্টেশন প্রোগ্রাম', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '来月、会社の同僚の結婚式に招待されたので、素敵なスーツを着て出席します।',
          romaji: 'Raigetsu, kaisha no douryou no kekkonshiki ni shoutai sareta node, suteki na su_tsu o kite shusseki shimasu.',
          meaningEn: 'Next month, I was invited to a colleague’s wedding ceremony, so I will wear a nice suit and attend.',
          meaningBn: 'আগামী মাসে অফিসের এক সহকর্মীর বিয়ের অনুষ্ঠানে (結婚式) নিমন্ত্রণ পেয়েছি, তাই একটি চমৎকার স্যুট পরে উপস্থিত থাকব।'
        }
      ],
      tamagoTip: {
        en: '結 (tie/bind) + 婚 (marriage) + 式 (ceremony) = A grand ceremony of tying two souls and families together in marriage.',
        bn: '結 (বাঁধনে জড়ানো) + 婚 (বিবাহ) + 式 (অনুষ্ঠান) = দুটি হৃদয়ের পবিত্র দাম্পত্য বন্ধনে জড়ানোর জাঁকজমকপূর্ণ বিয়ের উৎসব।'
      }
    }
  ]
};
