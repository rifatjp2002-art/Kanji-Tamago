import { Lesson } from '../types/kanji';

export const lesson23: Lesson = {
  id: 23,
  number: 23,
  titleJa: '引っ越し',
  titleRomaji: 'Hikkoshi',
  titleBn: 'বাসা পরিবর্তন (Moving House & Apartments)',
  titleEn: 'Moving House & Apartments',
  descriptionBn: 'জাপানে নতুন অ্যাপার্টমেন্ট বা বাসা ভাড়া নেওয়া, সুবিধা-অসুবিধা যাচাই করা, ঘর সাজানো এবং চুক্তির প্রয়োজনীয় কান্জি (広, 便, 利, 建, 近, 空, 室, 和, 洋, 有)।',
  descriptionEn: 'Essential Kanji for renting apartments in Japan, rooms, conveniences, amenities, deposits, and moving procedures.',
  kanjiList: [
    // --- Main Kanji (書ける: 広, 便, 利, 建, 近, 空, 室, 和, 洋, 有) ---
    {
      id: 'l23-hiroi',
      kanji: '広',
      emoji: '📐',
      strokeCount: 5,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'コウ', romaji: 'kou' }],
        kunyomi: [{ kana: 'ひろ.い', romaji: 'hiro.i' }, { kana: 'ひろ.げる', romaji: 'hiro.geru' }]
      },
      meanings: {
        en: 'Wide, spacious, broad',
        bn: 'প্রশস্ত, বড়, ছড়ানো'
      },
      vocab: [
        { kanji: '広い', kana: 'ひろい', romaji: 'hiroi', meaningEn: 'spacious, wide', meaningBn: 'বড় বা প্রশস্ত', tag: 'N5' },
        { kanji: '広さ', kana: 'ひろさ', romaji: 'hirosa', meaningEn: 'area, width', meaningBn: 'আয়তন বা চওড়া', tag: 'N4' },
        { kanji: '広場', kana: 'ひろば', romaji: 'hiroba', meaningEn: 'plaza, square', meaningBn: 'খোলা মাঠ বা চত্ত্বর', tag: 'N4' },
        { kanji: '広告', kana: 'こうこく', romaji: 'koukoku', meaningEn: 'advertisement', meaningBn: 'বিজ্ঞাপন', tag: 'N3' },
        { kanji: '広げる', kana: 'ひろげる', romaji: 'hirogeru', meaningEn: 'to widen, spread', meaningBn: 'ছড়িয়ে দেওয়া', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '新しく引っ越したアパートの部屋はとても広くて綺麗です।',
          romaji: 'Atarashiku hikkoshita apaato no heya wa totemo hirokute kirei desu.',
          meaningEn: 'The room of the newly moved apartment is very spacious and beautiful.',
          meaningBn: 'নতুন বদলি হওয়া অ্যাপার্টমেন্টের ঘরটি বেশ প্রশস্ত এবং দারুণ সুন্দর।'
        },
        {
          ja: '不動産屋のホームページで、広さを平米（㎡）で確認しました।',
          romaji: 'Fudousanya no houmupeeji de, hirosa o heibei de kakunin shimashita.',
          meaningEn: 'I checked the spaciousness in square meters (㎡) on the real estate website.',
          meaningBn: 'রিয়েল এস্টেটের ওয়েবসাইটে গিয়ে ঘরের আয়তন স্কয়ার মিটারে দেখে নিয়েছি।'
        }
      ]
    },
    {
      id: 'l23-ben',
      kanji: '便',
      emoji: '📮',
      strokeCount: 9,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ベン', romaji: 'ben' }, { kana: 'ビン', romaji: 'bin' }],
        kunyomi: [{ kana: 'たよ.り', romaji: 'tayo.ri' }]
      },
      meanings: {
        en: 'Convenience, facility, mail',
        bn: 'সুবিধা, সুবিধা হওয়া, ডাকযোগ'
      },
      vocab: [
        { kanji: '便利', kana: 'べんり', romaji: 'benri', meaningEn: 'convenient', meaningBn: 'সুবিধাজনক', tag: 'N5' },
        { kanji: '郵便局', kana: 'ゆうびんきょく', romaji: 'yuubinkyoku', meaningEn: 'post office', meaningBn: 'ডাকঘর বা পোস্ট অফিস', tag: 'N5' },
        { kanji: '船便', kana: 'ふなびん', romaji: 'funabin', meaningEn: 'sea mail', meaningBn: 'জাহাজযোগে ডাক (সস্তা)', tag: 'N3' },
        { kanji: '航空便', kana: 'こうくうびん', romaji: 'koukuubin', meaningEn: 'air mail', meaningBn: 'আকাশপথে ডাক (দ্রুত)', tag: 'N3' },
        { kanji: '便り', kana: 'たより', romaji: 'tayori', meaningEn: 'news, letter', meaningBn: 'খবর বা বার্তা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '駅の近くにあるマンションは便利で生活しやすいです।',
          romaji: 'Eki no chikaku ni aru manshon wa benri de seikatsu shiyasui desu.',
          meaningEn: 'The apartment located near the station is convenient and easy to live in.',
          meaningBn: 'স্টেশনের কাছের ফ্ল্যাটগুলো খুবই সুবিধাজনক এবং জীবনযাপনের জন্য বেশ আরামদায়ক।'
        },
        {
          ja: '荷物を安く送るために、船便を利用することにしました।',
          romaji: 'Nimotsu o yasuku okuru tame ni, funabin o riyou suru koto ni shimashita.',
          meaningEn: 'In order to send the baggage cheaply, I decided to use sea mail.',
          meaningBn: 'মালামাল কম খরচে পাঠানোর জন্য আমি নৌপথে বা জাহাজযোগে পাঠানোর সিদ্ধান্ত নিয়েছি।'
        }
      ]
    },
    {
      id: 'l23-ri',
      kanji: '利',
      emoji: '📈',
      strokeCount: 7,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'リ', romaji: 'ri' }],
        kunyomi: [{ kana: 'き.く', romaji: 'ki.ku' }]
      },
      meanings: {
        en: 'Profit, advantage, benefit',
        bn: 'লাভ, সুবিধা, কার্যকারী'
      },
      vocab: [
        { kanji: '便利', kana: 'べんり', romaji: 'benri', meaningEn: 'convenient', meaningBn: 'সুবিধাজনক', tag: 'N5' },
        { kanji: '利用する', kana: 'りようする', romaji: 'riyou suru', meaningEn: 'to use, utilize', meaningBn: 'ব্যবহার করা', tag: 'N4' },
        { kanji: '不便な', kana: 'ふべんな', romaji: 'fuben na', meaningEn: 'inconvenient', meaningBn: 'অসুবিধাজনক', tag: 'N4' },
        { kanji: '利息', kana: 'りそく', romaji: 'risoku', meaningEn: 'interest (bank)', meaningBn: 'সুদ বা মুনাফা', tag: 'N3' },
        { kanji: '左利き', kana: 'ひだりきき', romaji: 'hidarikiki', meaningEn: 'left-handed', meaningBn: 'বাঁহাতি', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '近くに２４時間営業のスーパーがあり、不便はありません।',
          romaji: 'Chikaku ni nijuuyojikan eigyou no suupaa ga ari, fuben wa arimasen.',
          meaningEn: 'There is a 24-hour open supermarket nearby, so there is no inconvenience.',
          meaningBn: 'কাছেই ২৪ ঘণ্টা খোলা সুপারমার্কেট থাকায় জীবনযাত্রায় কোনো রকম অসুবিধা নেই।'
        },
        {
          ja: 'スマートフォンの便利なアプリを毎日利用しています।',
          romaji: 'Sumaatofon no benri na apuri o mainichi riyou shite imasu.',
          meaningEn: 'I use convenient smartphone applications every day.',
          meaningBn: 'স্মার্টফোনের দরকারি অ্যাপসগুলো আমি প্রতিদিন ব্যবহার করি।'
        }
      ]
    },
    {
      id: 'l23-tateru',
      kanji: '建',
      emoji: '🏢',
      strokeCount: 9,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ケン', romaji: 'ken' }, { kana: 'コン', romaji: 'kon' }],
        kunyomi: [{ kana: 'た.てる', romaji: 'ta.teru' }, { kana: 'た.つ', romaji: 'ta.tsu' }]
      },
      meanings: {
        en: 'Build, construct, erect',
        bn: 'নির্মাণ করা, তৈরি করা, গড়ে তোলা'
      },
      vocab: [
        { kanji: '建てる', kana: 'たてる', romaji: 'tateru', meaningEn: 'to build (something)', meaningBn: 'বাড়ি নির্মাণ করা', tag: 'N4' },
        { kanji: '建物', kana: 'たてもの', romaji: 'tatemono', meaningEn: 'building', meaningBn: 'বিল্ডিং বা ভবন', tag: 'N5' },
        { kanji: '建つ', kana: 'たつ', romaji: 'tatsu', meaningEn: 'to be built', meaningBn: 'নির্মাণ হওয়া', tag: 'N4' },
        { kanji: '二階建て', kana: 'にかいだて', romaji: 'nikaidate', meaningEn: 'two-story building', meaningBn: 'দোতলা ভবন', tag: 'N3' },
        { kanji: '建設', kana: 'けんせつ', romaji: 'kensetsu', meaningEn: 'construction', meaningBn: 'স্থাপত্য বা কনস্ট্রাকশন', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '駅の周りに背の高い新しい建物がたくさん建てられています।',
          romaji: 'Eki no mawari ni se no takai atarashii tatemono ga takusan taterarete imasu.',
          meaningEn: 'Many tall new buildings are being built around the station.',
          meaningBn: 'স্টেশনের চারপাশে অনেকগুলো নতুন উঁচু উঁচু ভবন নির্মিত হচ্ছে।'
        },
        {
          ja: '将来、静かな田舎に自分の家を建てたいです।',
          romaji: 'Shourai, shizuka na inaka ni jibun no ie o tatetai desu.',
          meaningEn: 'In the future, I want to build my own house in the quiet countryside.',
          meaningBn: 'ভবিষ্যতে একটি শান্ত গ্রামে নিজের সুন্দর একটি বাড়ি বানাতে চাই।'
        }
      ]
    },
    {
      id: 'l23-chikai',
      kanji: '近',
      emoji: '🚶',
      strokeCount: 7,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'キン', romaji: 'kin' }],
        kunyomi: [{ kana: 'ちか.い', romaji: 'chika.i' }]
      },
      meanings: {
        en: 'Near, close, neighborhood',
        bn: 'কাছে, নিকটবর্তী, আশপাশ'
      },
      vocab: [
        { kanji: '近い', kana: 'ちかい', romaji: 'chikai', meaningEn: 'near', meaningBn: 'কাছে', tag: 'N5' },
        { kanji: '近く', kana: 'ちかく', romaji: 'chikaku', meaningEn: 'nearby place', meaningBn: 'নিকটে বা কাছেই', tag: 'N5' },
        { kanji: '近所', kana: 'きんじょ', romaji: 'kinjo', meaningEn: 'neighborhood', meaningBn: 'আশপাশের এলাকা / প্রতিবেশী', tag: 'N4' },
        { kanji: '最近', kana: 'さいきん', romaji: 'saikin', meaningEn: 'recently, lately', meaningBn: 'সম্প্রতি', tag: 'N4' },
        { kanji: '近道', kana: 'ちかみち', romaji: 'chikamichi', meaningEn: 'shortcut', meaningBn: 'শর্টকাট রাস্তা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'アパートの近くに美味しいパン屋があって、毎朝買っています।',
          romaji: 'Apaato no chikaku ni oishii panya ga atte, maiasa katte imasu.',
          meaningEn: 'There is a delicious bakery near my apartment, and I buy from it every morning.',
          meaningBn: 'আমার ফ্ল্যাটের কাছেই একটি দারুণ বেকারির দোকান আছে, যেখান থেকে রোজ সকালে রুটি কিনি।'
        },
        {
          ja: '最近、近所に新しいスポーツジムがオープンしました।',
          romaji: 'Saikin, kinjo ni atarashii supootsu jimu ga oopun shimashita.',
          meaningEn: 'Recently, a new sports gym opened in the neighborhood.',
          meaningBn: 'সম্প্রতি আমাদের পাড়ায় একটি নতুন জিমনেসিয়াম চালু হয়েছে।'
        }
      ]
    },
    {
      id: 'l23-sora',
      kanji: '空',
      emoji: '🌤️',
      strokeCount: 8,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'クウ', romaji: 'kuu' }],
        kunyomi: [{ kana: 'そら', romaji: 'sora' }, { kana: 'あ.く', romaji: 'a.ku' }, { kana: 'から', romaji: 'kara' }]
      },
      meanings: {
        en: 'Sky, empty, vacant',
        bn: 'আকাশ, খালি, শূন্য'
      },
      vocab: [
        { kanji: '空', kana: 'そら', romaji: 'sora', meaningEn: 'sky', meaningBn: 'আকাশ', tag: 'N5' },
        { kanji: '空く', kana: 'あく', romaji: 'aku', meaningEn: 'to be vacant, empty', meaningBn: 'খালি হওয়া', tag: 'N4' },
        { kanji: '空気', kana: 'くうき', romaji: 'kuuki', meaningEn: 'air, atmosphere', meaningBn: 'বাতাস বা পরিবেশ', tag: 'N5' },
        { kanji: '空室', kana: 'くうしつ', romaji: 'kuushitsu', meaningEn: 'vacant room', meaningBn: 'খালি রুম', tag: 'N3' },
        { kanji: '空港', kana: 'くうこう', romaji: 'kuukou', meaningEn: 'airport', meaningBn: 'বিমানবন্দর', tag: 'N5' }
      ],
      sentences: [
        {
          ja: '不動産屋で、家賃が安くてお日様が入る空室を探しました।',
          romaji: 'Fudousanya de, yachin ga yasukute ohisama ga hairu kuushitsu o sagashimashita.',
          meaningEn: 'At the real estate agency, I looked for a vacant room with cheap rent and sunny light.',
          meaningBn: 'রিয়েল এস্টেটের অফিসে গিয়ে কম ভাড়ায় রোদ আসে এমন একটি খালি ঘর খুঁজলাম।'
        },
        {
          ja: '東京の空気は、地方と比べると少し汚れています।',
          romaji: 'Toukyou no kuuki wa, chihou to kuraberu to sukoshi yogorete imasu.',
          meaningEn: 'The air in Tokyo is a bit dirty compared to regional areas.',
          meaningBn: 'টোকিওর আবহাওয়া বা বাতাস গ্রামাঞ্চলের তুলনায় কিছুটা ধূলোবালিযুক্ত।'
        }
      ]
    },
    {
      id: 'l23-shitsu',
      kanji: '室',
      emoji: '🚪',
      strokeCount: 9,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'シツ', romaji: 'shitsu' }],
        kunyomi: []
      },
      meanings: {
        en: 'Room, chamber',
        bn: 'ঘর, কক্ষ, কামরা'
      },
      vocab: [
        { kanji: '教室', kana: 'きょうしつ', romaji: 'kyoushitsu', meaningEn: 'classroom', meaningBn: 'ক্লাসরুম', tag: 'N5' },
        { kanji: '和室', kana: 'わしつ', romaji: 'washitsu', meaningEn: 'Japanese-style room', meaningBn: 'তাতামি ম্যাট বিছানো ঐতিহ্যবাহী জাপানি ঘর', tag: 'N4' },
        { kanji: '洋室', kana: 'ようしつ', romaji: 'youshitsu', meaningEn: 'Western-style room', meaningBn: 'পাশ্চাত্য ঘর (কাঠের মেঝে)', tag: 'N4' },
        { kanji: '温室', kana: 'おんしつ', romaji: 'onshitsu', meaningEn: 'greenhouse', meaningBn: 'কাঁচের তৈরি উষ্ণ ঘর', tag: 'N3' },
        { kanji: '室内', kana: 'しつない', romaji: 'shitsunai', meaningEn: 'indoor, inside room', meaningBn: 'ঘরের ভেতরে', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '和室の畳の部屋は、冬はとても暖かくて居心地が良いです।',
          romaji: 'Washitsu no tatami no heya wa, fuyu wa totemo atatakakute igochi ga yoi desu.',
          meaningEn: 'The tatami room in Japanese style is very warm and cozy in winter.',
          meaningBn: 'তাতামি বিছানো জাপানি ঘরগুলো শীতকালে বেশ গরম এবং আরামদায়ক থাকে।'
        },
        {
          ja: '雨の日は外で遊べないので、室内でカードゲームをして遊びます।',
          romaji: 'Ame no hi wa soto de asobenai node, shitsunai de kaado geemu o shite asobimasu.',
          meaningEn: 'Since we cannot play outside on rainy days, we play card games indoors.',
          meaningBn: 'বৃষ্টির দিনে বাইরে খেলা অসম্ভব হওয়ায় আমরা ঘরের ভেতরেই লুডু বা কার্ড গেম খেলি।'
        }
      ]
    },
    {
      id: 'l23-wa',
      kanji: '和',
      emoji: '🏮',
      strokeCount: 8,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ワ', romaji: 'wa' }, { kana: 'オ', romaji: 'o' }],
        kunyomi: [{ kana: 'やわ.らぐ', romaji: 'yawa.ragu' }]
      },
      meanings: {
        en: 'Harmony, peace, Japanese style',
        bn: 'শান্তি, জাপানি ঢং, মিলন'
      },
      vocab: [
        { kanji: '和和', kana: 'わわ', romaji: 'wawa', meaningEn: 'peace, harmony', meaningBn: 'শান্তি ও একতা', tag: 'N4' },
        { kanji: '和食', kana: 'わしょく', romaji: 'washoku', meaningEn: 'Japanese food', meaningBn: 'ঐতিহ্যবাহী জাপানি খাবার', tag: 'N4' },
        { kanji: '和室', kana: 'わしつ', romaji: 'washitsu', meaningEn: 'Japanese-style room', meaningBn: 'জাপানি ঘর', tag: 'N4' },
        { kanji: '和服', kana: 'わふく', romaji: 'wafuku', meaningEn: 'Japanese clothes', meaningBn: 'জাপানি কিমোনো পোশাক', tag: 'N4' },
        { kanji: '平和な', kana: 'へいわな', romaji: 'heiwa na', meaningEn: 'peaceful', meaningBn: 'শান্তিময়', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '私は日本食が大好きで、毎日和食を作って食べています।',
          romaji: 'Watashi wa nihonshoku ga daisuki de, mainichi washoku o tsukutte tabete imasu.',
          meaningEn: 'I love Japanese food and cook and eat traditional meals every day.',
          meaningBn: 'জাপানি খাবার আমার ভীষণ প্রিয়, তাই আমি নিজেই রোজ ওয়াশোকু (জাপানি থালি) রান্না করি।'
        },
        {
          ja: '世界の国々が手をつないで、平和な社会を作ることが大切です।',
          romaji: 'Sekai no kuniguni ga te o tsunaide, heiwa na shakaii o tsukuru koto ga taisetsu desu.',
          meaningEn: 'It is important for countries around the world to hold hands and build a peaceful society.',
          meaningBn: 'বিশ্বের সকল দেশ মিলেমিশে একটি শান্তিময় পৃথিবী গড়ে তোলা অত্যন্ত জরুরি।'
        }
      ]
    },
    {
      id: 'l23-you',
      kanji: '洋',
      emoji: '🛋️',
      strokeCount: 9,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ヨウ', romaji: 'you' }],
        kunyomi: []
      },
      meanings: {
        en: 'Ocean, Western style',
        bn: 'মহাসাগর, পশ্চিমা ধাঁচ'
      },
      vocab: [
        { kanji: '洋服', kana: 'ようふく', romaji: 'youfuku', meaningEn: 'Western clothes', meaningBn: 'পশ্চিমা পোশাক', tag: 'N5' },
        { kanji: '洋室', kana: 'ようしつ', romaji: 'youshitsu', meaningEn: 'Western room', meaningBn: 'পাশ্চাত্য ঘর (কাঠের মেঝে)', tag: 'N4' },
        { kanji: '洋食', kana: 'ようしょく', romaji: 'youshoku', meaningEn: 'Western food', meaningBn: 'পাশ্চাত্য খাবার', tag: 'N4' },
        { kanji: '太平洋', kana: 'たいへいよう', romaji: 'taiheiyou', meaningEn: 'Pacific Ocean', meaningBn: 'প্রশান্ত মহাসাগর', tag: 'N3' },
        { kanji: '東洋', kana: 'とうよう', romaji: 'touyou', meaningEn: 'the Orient, East', meaningBn: 'প্রাচ্যের দেশসমূহ', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '畳が苦手なので、引っ越すときは洋室のある家を選びました।',
          romaji: 'Tatami ga nigate na node, hikkosu toki wa youshitsu no aru ie o erabimashita.',
          meaningEn: 'Since I am not good with tatami, I chose a house with Western-style rooms when moving.',
          meaningBn: 'তাতামি ম্যাট আমার অভ্যস্ত না হওয়ায়, বাসা পরিবর্তনের সময় আমি কাঠের মেঝেযুক্ত ওয়েস্টার্ন ঘর বেছে নিয়েছি।'
        },
        {
          ja: 'たまにはお洒落なレストランで、ワインを飲みながら洋食を食べます।',
          romaji: 'Tama ni wa oshare na resutoran de, wain o nomigara youshoku o tabemasu.',
          meaningEn: 'Once in a while, I eat Western food while drinking wine at a stylish restaurant.',
          meaningBn: 'মাঝে মাঝে মনোরম রেস্তোরাঁয় বসে চমৎকার ওয়েস্টার্ন ডিশ অর্ডার করে উপভোগ করি।'
        }
      ]
    },
    {
      id: 'l23-aru',
      kanji: '有',
      emoji: '💎',
      strokeCount: 6,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ユウ', romaji: 'yuu' }, { kana: 'ウ', romaji: 'u' }],
        kunyomi: [{ kana: 'あ.る', romaji: 'a.ru' }]
      },
      meanings: {
        en: 'Have, possess, exist, famous',
        bn: 'থাকা, থাকা সত্ত্বেও, খ্যাতি'
      },
      vocab: [
        { kanji: '有名な', kana: 'ゆうめいな', romaji: 'yuumei na', meaningEn: 'famous', meaningBn: 'বিখ্যাত', tag: 'N5' },
        { kanji: '有料', kana: 'ゆうりょう', romaji: 'yuuryou', meaningEn: 'fee-charging, paid', meaningBn: 'সशुल्क বা পেড সার্ভিস', tag: 'N3' },
        { kanji: '有効な', kana: 'ゆうこうな', romaji: 'yuukou na', meaningEn: 'valid, effective', meaningBn: 'কার্যকর বা মেয়াদ থাকা', tag: 'N3' },
        { kanji: '有能な', kana: 'ゆうのうな', romaji: 'yuunou na', meaningEn: 'competent, talented', meaningBn: 'দক্ষ বা গুণী', tag: 'N3' },
        { kanji: '国有', kana: 'こくゆう', romaji: 'kokuyuu', meaningEn: 'state-owned', meaningBn: 'সরকারি সম্পত্তি', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '浅草には外国人観光客にとても有名な古いお寺があります।',
          romaji: 'Asakusa ni wa gaikokujin kankoukyaku ni totemo yuumei na furui otera ga arimasu.',
          meaningEn: 'There is a very famous old temple for foreign tourists in Asakusa.',
          meaningBn: 'আসামুসার বুকেই আছে বিদেশি পর্যটকদের কাছে দারুণ নামকরা এক প্রাচীন মন্দির।'
        },
        {
          ja: '有料の駐車場に車を止めてから買い物に行きます।',
          romaji: 'Yuuryou no chuushajou ni kuruma o tomete kara kaimono ni ikimasu.',
          meaningEn: 'I park the car in the paid parking lot and then go shopping.',
          meaningBn: 'পেইড কার পার্কিংয়ে গাড়িটি পার্ক করে কেনাকাটা করতে যাচ্ছি।'
        }
      ]
    },

    // --- Read Only (読める: ～階, 家賃, 保証人, 引っ越し) ---
    {
      id: 'l23-kai',
      kanji: '階',
      emoji: '🏢',
      strokeCount: 12,
      jlpt: 'N4',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'カイ', romaji: 'kai' }, { kana: 'ガイ', romaji: 'gai' }],
        kunyomi: []
      },
      meanings: {
        en: 'Floor, counter for storeys',
        bn: 'তলা, ফ্লোর'
      },
      vocab: [
        { kanji: '～階', kana: 'かい', romaji: 'kai', meaningEn: 'floor', meaningBn: 'এত তলা', tag: 'N5' },
        { kanji: '階段', kana: 'かいだん', romaji: 'kaidan', meaningEn: 'stairs', meaningBn: 'সিঁড়ি', tag: 'N4' },
        { kanji: '一階', kana: 'いっかい', romaji: 'ikkai', meaningEn: 'first floor', meaningBn: 'নিচতলা', tag: 'N5' }
      ],
      sentences: [
        {
          ja: '新しいアパートは三階にあるので、エレベーターを使います।',
          romaji: 'Atarashii apaato wa san-kai ni aru node, erebeetaa o tsukaimasu.',
          meaningEn: 'Since the new apartment is on the third floor, I use the elevator.',
          meaningBn: 'নতুন ফ্ল্যাটটি ৩য় তলায় হওয়ায় আমি লিফট ব্যবহার করি।'
        }
      ]
    },
    {
      id: 'l23-yachin',
      kanji: '家賃',
      emoji: '🪙',
      strokeCount: 23,
      jlpt: 'N3',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'ヤチン', romaji: 'yachin' }],
        kunyomi: []
      },
      meanings: {
        en: 'House rent',
        bn: 'বাড়ি ভাড়া'
      },
      vocab: [
        { kanji: '家賃', kana: 'やちん', romaji: 'yachin', meaningEn: 'house rent', meaningBn: 'বাসার ভাড়া', tag: 'N3' },
        { kanji: '家', kana: 'いえ', romaji: 'ie', meaningEn: 'house', meaningBn: 'বাড়ি', tag: 'N5' }
      ],
      sentences: [
        {
          ja: '毎月二十五日までに大家さんに家賃を払わなければなりません।',
          romaji: 'Maitsuki nijuugo-nichi made ni ooyasan ni yachin o harawanakereba narimasen.',
          meaningEn: 'I must pay the house rent to the landlord by the 25th of every month.',
          meaningBn: 'প্রতি মাসের ২৫ তারিখের মধ্যে বাড়িওয়ালাকে অবশ্যই বাসার ভাড়া পরিশোধ করতে হবে।'
        }
      ]
    },
    {
      id: 'l23-hoshounin',
      kanji: '保証人',
      emoji: '🤝',
      strokeCount: 26,
      jlpt: 'N3',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'ホショウニン', romaji: 'hoshounin' }],
        kunyomi: []
      },
      meanings: {
        en: 'Guarantor, sponsor',
        bn: 'গ্যারান্টর, জামিনদার'
      },
      vocab: [
        { kanji: '保証人', kana: 'ほしょうにん', romaji: 'hoshounin', meaningEn: 'guarantor', meaningBn: 'গ্যারান্টর বা স্পন্সর', tag: 'N3' },
        { kanji: '保証する', kana: 'ほしょうする', romaji: 'hoshou suru', meaningEn: 'to guarantee', meaningBn: 'নিশ্চয়তা দেওয়া', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '日本でアパートを借りるために、信頼できる保証人が必要です।',
          romaji: 'Nihon de apaato o kariru tame ni, shinrai dekiru hoshounin ga hitsuyou desu.',
          meaningEn: 'In order to rent an apartment in Japan, a trustworthy guarantor is required.',
          meaningBn: 'জাপানে ফ্ল্যাট ভাড়া নেওয়ার জন্য একজন বিশ্বস্ত গ্যারান্টর বা জামিনদার প্রয়োজন হয়।'
        }
      ]
    },
    {
      id: 'l23-hikkoshi',
      kanji: '引越',
      emoji: '📦',
      strokeCount: 16,
      jlpt: 'N4',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'ヒッコシ', romaji: 'hikkoshi' }],
        kunyomi: []
      },
      meanings: {
        en: 'Moving house',
        bn: 'বাসা বদল বা বাসা পরিবর্তন'
      },
      vocab: [
        { kanji: '引っ越し', kana: 'ひっこし', romaji: 'hikkoshi', meaningEn: 'moving house', meaningBn: 'বাসা পরিবর্তন', tag: 'N4' },
        { kanji: '引っ越す', kana: 'ひっこす', romaji: 'hikkosu', meaningEn: 'to move house', meaningBn: 'বাসা বদল করা', tag: 'N4' }
      ],
      sentences: [
        {
          ja: '来週の日曜日は引っ越しの日なので、友達が手伝いに来てくれます।',
          romaji: 'Raishuu no nichiyoubi wa hikkoshi no hi na node, tomodachi ga tetsudai ni kite kuremasu.',
          meaningEn: 'Since next Sunday is the moving day, my friends are coming to help me.',
          meaningBn: 'আগামী রবিবার বাসা পরিবর্তনের দিন থাকায় আমার বন্ধুরা সাহায্য করতে আসবে।'
        }
      ]
    },

    // --- Visual Recognition (見て、分かる: 敷金, 礼金, 収納) ---
    {
      id: 'l23-shikikin',
      kanji: '敷金',
      emoji: '💵',
      strokeCount: 23,
      jlpt: 'N3',
      category: 'visual_recognition',
      readings: {
        onyomi: [{ kana: 'シキキン', romaji: 'shikikin' }],
        kunyomi: []
      },
      meanings: {
        en: 'Security deposit',
        bn: 'সিকিউরিটি ডিপোজিট (বাসা ছাড়ার সময় ফেরতযোগ্য)'
      },
      vocab: [
        { kanji: '敷金', kana: 'しききん', romaji: 'shikikin', meaningEn: 'security deposit', meaningBn: 'সিকিউরিটি ডিপোজিট', tag: 'N3' },
        { kanji: '金料', kana: 'かねりょう', romaji: 'kaneryou', meaningEn: 'fee', meaningBn: 'টাকা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '新しいマンションの初期費用として敷金を一ヶ月分払いました।',
          romaji: 'Atarashii manshon no shoki hiyou to shite shikikin o ikkagetsu bun haraimashita.',
          meaningEn: 'I paid one month’s rent as a security deposit for the initial cost of the new apartment.',
          meaningBn: 'নতুন ফ্ল্যাটের প্রথম খরচ হিসেবে এক মাসের ভাড়ার সমপরিমাণ সিকিউরিটি ডিপোজিট দিয়েছি।'
        }
      ]
    },
    {
      id: 'l23-reikin',
      kanji: '礼金',
      emoji: '🎁',
      strokeCount: 13,
      jlpt: 'N3',
      category: 'visual_recognition',
      readings: {
        onyomi: [{ kana: 'レイキン', romaji: 'reikin' }],
        kunyomi: []
      },
      meanings: {
        en: 'Key money, gratitude money',
        bn: 'ধন্যবাদসূচক উপহারের টাকা (অফেরতযোগ্য)'
      },
      vocab: [
        { kanji: '礼金', kana: 'れいきん', romaji: 'reikin', meaningEn: 'key money', meaningBn: 'বাড়িওয়ালাকে দেওয়া থ্যাঙ্ক ইউ মানি', tag: 'N3' },
        { kanji: 'お礼', kana: 'おれい', romaji: 'orei', meaningEn: 'thanks, gratitude', meaningBn: 'ধন্যবাদ জ্ঞাপন', tag: 'N4' }
      ],
      sentences: [
        {
          ja: '敷金は後で返ってきますが、礼金は戻ってこないお金です।',
          romaji: 'Shikikin wa ato de kaette kimasu ga, reikin wa modotte konai okane desu.',
          meaningEn: 'The security deposit will be returned later, but the key money is non-refundable.',
          meaningBn: 'সিকিউরিটি ডিপোজিটের টাকা পরবর্তীতে ফেরত পাওয়া গেলেও রেিকিনের টাকা অফেরতযোগ্য।'
        }
      ]
    },
    {
      id: 'l23-shuunou',
      kanji: '収納',
      emoji: '📦',
      strokeCount: 16,
      jlpt: 'N3',
      category: 'visual_recognition',
      readings: {
        onyomi: [{ kana: 'シュウノウ', romaji: 'shuunou' }],
        kunyomi: []
      },
      meanings: {
        en: 'Storage, closet space',
        bn: 'জিনিসপত্র রাখার আলমারি বা স্টোরেজ স্পেস'
      },
      vocab: [
        { kanji: '収納', kana: 'しゅうのう', romaji: 'shuunou', meaningEn: 'storage, fitting', meaningBn: 'স্টোরেজ আলমারি', tag: 'N3' },
        { kanji: '納める', kana: 'おさめる', romaji: 'osameru', meaningEn: 'to pay, supply', meaningBn: 'পরিশোধ বা গুছিয়ে রাখা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'この部屋はクローゼットなどの収納スペースがたくさんあって、片付けやすいです।',
          romaji: 'Kono heya wa kuroozetto nado no shuunou supeesu ga takusan atte, katazukeyasui desu.',
          meaningEn: 'This room has plenty of storage spaces like closets, making it easy to tidy up.',
          meaningBn: 'এই ঘরটিতে বিল্ট-ইন স্টোরেজ আলমারি অনেক বড় থাকায় জিনিসপত্র গুছিয়ে রাখা খুব সহজ।'
        }
      ]
    }
  ]
};
