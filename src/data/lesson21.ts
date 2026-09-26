import { Lesson } from '../types/kanji';

export const lesson21: Lesson = {
  id: 21,
  number: 21,
  titleJa: '旅行の計画',
  titleRomaji: 'Ryokou no keikaku',
  titleBn: 'ভ্রমণের পরিকল্পনা (Travel Planning)',
  titleEn: 'Travel Planning',
  descriptionBn: 'ভ্রমণের পরিকল্পনা, বুকিং, হোটেল স্টে এবং যাতায়াতের জন্য আকর্ষণীয় কান্জি (子, 親, 代, 屋, 内, 自, 由, 発, 着, 遠)।',
  descriptionEn: 'Essential Kanji for planning trips, family travel, hotels, transportation, and sightseeing in Japan.',
  kanjiList: [
    // --- Main Kanji (書ける: 子, 親, 代, 屋, 内, 自, 由, 発, 着, 遠) ---
    {
      id: 'l21-ko',
      kanji: '子',
      emoji: '👶',
      strokeCount: 3,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'シ', romaji: 'shi' }, { kana: 'ス', romaji: 'su' }],
        kunyomi: [{ kana: 'こ', romaji: 'ko' }]
      },
      meanings: {
        en: 'Child, kid, seed',
        bn: 'শিশু, সন্তান, বাচ্চা'
      },
      vocab: [
        { kanji: '子供', kana: 'こども', romaji: 'kodomo', meaningEn: 'child, children', meaningBn: 'শিশু বা বাচ্চারা', tag: 'N5' },
        { kanji: '女の子', kana: 'おんなのこ', romaji: 'onnanoko', meaningEn: 'girl', meaningBn: 'মেয়ে শিশু', tag: 'N5' },
        { kanji: '男の子', kana: 'おとのこ', romaji: 'otokonoko', meaningEn: 'boy', meaningBn: 'ছেলে শিশু', tag: 'N5' },
        { kanji: '親子', kana: 'おやこ', romaji: 'oyako', meaningEn: 'parent and child', meaningBn: 'পিতা-মাতা এবং সন্তান', tag: 'N4' },
        { kanji: '迷子', kana: 'まいご', romaji: 'maigo', meaningEn: 'lost child', meaningBn: 'হারিয়ে যাওয়া শিশু', tag: 'N4' }
      ],
      sentences: [
        {
          ja: '旅行代理店で、子供向けの割引ツアーを予約しました।',
          romaji: 'Ryokou dairiten de, kodomo muke no waribiki tsuaa o yoyaku shimashita.',
          meaningEn: 'I booked a discounted tour package tailored for children at the travel agency.',
          meaningBn: 'ভ্রমণ সংস্থায় গিয়ে বাচ্চাদের বিশেষ ডিসকাউন্টের ট্যুর প্যাকেজ বুক করেছি।'
        },
        {
          ja: '遊園地で親子が楽しそうに遊んでいます।',
          romaji: 'Yuuenchi de oyako ga tanoshisou ni asonde imasu.',
          meaningEn: 'Parents and children are playing happily in the amusement park.',
          meaningBn: 'বিনোদন পার্কে বাবা-মা ও সন্তান আনন্দের সাথে খেলা করছে।'
        }
      ]
    },
    {
      id: 'l21-oya',
      kanji: '親',
      emoji: '👪',
      strokeCount: 16,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'シン', romaji: 'shin' }],
        kunyomi: [{ kana: 'おや', romaji: 'oya' }, { kana: 'した.しい', romaji: 'shita.shii' }]
      },
      meanings: {
        en: 'Parent, intimacy, close',
        bn: 'পিতা-মাতা, ঘনিষ্ঠ, আত্মীয়'
      },
      vocab: [
        { kanji: '親', kana: 'おや', romaji: 'oya', meaningEn: 'parent', meaningBn: 'বাবা-মা', tag: 'N5' },
        { kanji: '親切な', kana: 'しんせつな', romaji: 'shinsetsu na', meaningEn: 'kind, friendly', meaningBn: 'দয়ালু বা আন্তরিক', tag: 'N5' },
        { kanji: '両親', kana: 'りょうしん', romaji: 'ryoushin', meaningEn: 'both parents', meaningBn: 'বাবা-মা উভয়েই', tag: 'N5' },
        { kanji: '親しい', kana: 'したしい', romaji: 'shitashii', meaningEn: 'close, intimate', meaningBn: 'ঘনিষ্ঠ', tag: 'N4' },
        { kanji: '親友', kana: 'しんゆう', romaji: 'shinyuu', meaningEn: 'best friend', meaningBn: 'সেরা বন্ধু', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '今度の冬休み、両親を連れて温泉旅行に行くつもりです।',
          romaji: 'Kondo no fuyuyasumi, ryoushin o tsurete onsen ryokou ni iku tsumori desu.',
          meaningEn: 'This coming winter vacation, I plan to take my parents on a hot spring trip.',
          meaningBn: 'আসন্ন শীতের ছুটিতে বাবা-মাকে সাথে নিয়ে গরম পানির ঝর্ণার রিসোর্টে ভ্রমণের ইচ্ছা আছে।'
        },
        {
          ja: '駅員さんは私たちにとても親切に道を教えてくれました।',
          romaji: 'Ekiin-san wa watashitachi ni totemo shinsetsu ni michi o oshiete kuremashita.',
          meaningEn: 'The station staff kindly taught us the way.',
          meaningBn: 'স্টেশন মাস্টার আমাদের অত্যন্ত আন্তরিকতার সাথে পথটি দেখিয়ে দিলেন।'
        }
      ]
    },
    {
      id: 'l21-dai',
      kanji: '代',
      emoji: '🪙',
      strokeCount: 5,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ダイ', romaji: 'dai' }, { kana: 'タイ', romaji: 'tai' }],
        kunyomi: [{ kana: 'か.わる', romaji: 'ka.waru' }, { kana: 'よ', romaji: 'yo' }]
      },
      meanings: {
        en: 'Substitute, replace, period, charge',
        bn: 'পরিবর্তে দেওয়া, চার্জ বা ফি, যুগ বা প্রজন্ম'
      },
      vocab: [
        { kanji: '代わりに', kana: 'かわりに', romaji: 'kawari ni', meaningEn: 'instead of, in place of', meaningBn: 'পরিবর্তে', tag: 'N4' },
        { kanji: '部屋代', kana: 'へやだい', romaji: 'heyadai', meaningEn: 'room rent', meaningBn: 'ঘরের ভাড়া', tag: 'N3' },
        { kanji: 'バス代', kana: 'ばすだい', romaji: 'basudai', meaningEn: 'bus fare', meaningBn: 'বাসের ভাড়া', tag: 'N4' },
        { kanji: '時代', kana: 'じだい', romaji: 'jidai', meaningEn: 'era, age', meaningBn: 'যুগ বা কাল', tag: 'N3' },
        { kanji: '代理店', kana: 'だいりてん', romaji: 'dairiten', meaningEn: 'agency', meaningBn: 'এজেন্সি বা এজেন্ট অফিস', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '病気の友達の代わりに、私がホテルの予約変更をしました।',
          romaji: 'Byouki no tomodachi no kawari ni, watashi ga hoteru no yoyaku henkou o shimashita.',
          meaningEn: 'Instead of my sick friend, I made the hotel reservation change.',
          meaningBn: 'অসুস্থ বন্ধুর পরিবর্তে আমি হোটেলের বুকিংটি পরিবর্তন করে দিয়েছি।'
        },
        {
          ja: '江戸時代の歴史的なお寺を訪ねるのが好きです।',
          romaji: 'Edo jidai no rekishiteki na otera o tazuneru no ga suki desu.',
          meaningEn: 'I like to visit historical temples of the Edo period.',
          meaningBn: 'এদো যুগের ঐতিহাসিক মন্দিরগুলোতে ঘুরতে আমার খুব ভালো লাগে।'
        }
      ]
    },
    {
      id: 'l21-ya',
      kanji: '屋',
      emoji: '🏠',
      strokeCount: 9,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'オク', romaji: 'oku' }],
        kunyomi: [{ kana: 'や', romaji: 'ya' }]
      },
      meanings: {
        en: 'Roof, house, shop, seller',
        bn: 'ছাদ, বাড়ি, দোকান, বিক্রেতা'
      },
      vocab: [
        { kanji: '部屋', kana: 'へや', romaji: 'heya', meaningEn: 'room', meaningBn: 'কামরা বা ঘর', tag: 'N5' },
        { kanji: '本屋', kana: 'ほんや', romaji: 'honya', meaningEn: 'bookstore', meaningBn: 'বইয়ের দোকান', tag: 'N5' },
        { kanji: '八百屋', kana: 'やおや', romaji: 'yaoya', meaningEn: 'greengrocer', meaningBn: 'সবজির দোকান', tag: 'N5' },
        { kanji: '居酒屋', kana: 'いざかや', romaji: 'izakaya', meaningEn: 'Japanese pub', meaningBn: 'ঐতিহ্যবাহী জাপানি পাব', tag: 'N3' },
        { kanji: '屋上', kana: 'おくじょう', romaji: 'okujou', meaningEn: 'rooftop', meaningBn: 'ছাদ', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '旅館の和室の部屋は広くて静かでした।',
          romaji: 'Ryokan no washitsu no heya wa hirokute shizuka deshita.',
          meaningEn: 'The Japanese-style room in the ryokan was spacious and quiet.',
          meaningBn: 'ঐতিহ্যবাহী জাপানি রিসোর্টের ঘরটি বেশ বড় এবং শান্ত ছিল।'
        },
        {
          ja: '居酒屋で美味しい焼き鳥を注文して食べました।',
          romaji: 'Izakaya de oishii yakitori o chuumon shite tabemashita.',
          meaningEn: 'I ordered and ate delicious yakitori at the Japanese pub.',
          meaningBn: 'জাপানি পাবে ইয়াকিতোরি (চিকেন গ্রিল কাবাব) অর্ডার করে খেয়েছি।'
        }
      ]
    },
    {
      id: 'l21-uchi',
      kanji: '内',
      emoji: '🚪',
      strokeCount: 4,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ナイ', romaji: 'nai' }, { kana: 'ダイ', romaji: 'dai' }],
        kunyomi: [{ kana: 'うち', romaji: 'uchi' }]
      },
      meanings: {
        en: 'Inside, within, home',
        bn: 'ভেতরে, অন্তর্বর্তী, পরিবার বা ঘর'
      },
      vocab: [
        { kanji: '家内', kana: 'かない', romaji: 'kanai', meaningEn: 'my wife (humble)', meaningBn: 'আমার স্ত্রী', tag: 'N4' },
        { kanji: '内側', kana: 'うちがわ', romaji: 'uchigawa', meaningEn: 'inside, inner side', meaningBn: 'ভেতরের দিক', tag: 'N3' },
        { kanji: '都内', kana: 'とない', romaji: 'tonai', meaningEn: 'within Tokyo metropolitan area', meaningBn: 'টোকিও শহরের ভেতরে', tag: 'N3' },
        { kanji: '国内旅行', kana: 'こくないりょこう', romaji: 'kokunai ryokou', meaningEn: 'domestic travel', meaningBn: 'দেশের অভ্যন্তরীণ ভ্রমণ', tag: 'N3' },
        { kanji: '案内する', kana: 'あんないする', romaji: 'annai suru', meaningEn: 'to guide, show around', meaningBn: 'পথ প্রদর্শন করা বা গাইড করা', tag: 'N4' }
      ],
      sentences: [
        {
          ja: '長期休暇には海外ではなく国内旅行を楽しみます।',
          romaji: 'Chouki kyuuka ni wa kaigai de wa naku kokunai ryokou o tanoshimasu.',
          meaningEn: 'On long holidays, I enjoy domestic travel rather than going abroad.',
          meaningBn: 'দীর্ঘ ছুটিতে বিদেশের বদলে আমি দেশের ভেতরেই ঘুরে বেড়ানো পছন্দ করি।'
        },
        {
          ja: '観光ガイドさんが京都の古い街を案内してくれました।',
          romaji: 'Kankou gaidosan ga Kyouto no furui machi o annai shite kuremashita.',
          meaningEn: 'The tourist guide showed us around the old town of Kyoto.',
          meaningBn: 'ট্যুরিস্ট গাইড আমাদের কিয়োটোর চমৎকার পুরনো শহরটি ঘুরিয়ে দেখালেন।'
        }
      ]
    },
    {
      id: 'l21-ji',
      kanji: '自',
      emoji: '👤',
      strokeCount: 6,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ジ', romaji: 'ji' }, { kana: 'シ', romaji: 'shi' }],
        kunyomi: [{ kana: 'みずか.ら', romaji: 'mizuka.ra' }]
      },
      meanings: {
        en: 'Self, oneself',
        bn: 'নিজে, স্বয়ং'
      },
      vocab: [
        { kanji: '自分', kana: 'じぶん', romaji: 'jibun', meaningEn: 'oneself', meaningBn: 'নিজে বা নিজের', tag: 'N5' },
        { kanji: '自転車', kana: 'じてんしゃ', romaji: 'jitensha', meaningEn: 'bicycle', meaningBn: 'সাইকেল', tag: 'N5' },
        { kanji: '自動車', kana: 'じどうしゃ', romaji: 'jidousha', meaningEn: 'automobile, car', meaningBn: 'মোটরগাড়ি', tag: 'N5' },
        { kanji: '自由な', kana: 'じゆうな', romaji: 'jiyuu na', meaningEn: 'free, liberal', meaningBn: 'স্বাধীন বা স্বাধীনচেতা', tag: 'N4' },
        { kanji: '自動販売機', kana: 'じどうはんばいき', romaji: 'jidouhanbaiki', meaningEn: 'vending machine', meaningBn: 'স্বয়ংক্রিয় ভেন্ডিং মেশিন', tag: 'N4' }
      ],
      sentences: [
        {
          ja: '自分の力で旅行のスケジュールを全部立てました।',
          romaji: 'Jibun no chikara de ryokou no sukejuuru o zenbu tatemashita.',
          meaningEn: 'I made the entire travel schedule by myself.',
          meaningBn: 'আমি নিজেই নিজের ক্ষমতায় ভ্রমণের সম্পূর্ণ শিডিউলটি তৈরি করেছি।'
        },
        {
          ja: '喉が渇いたので自動販売機で冷たいお茶を買いました।',
          romaji: 'Nodo ga kawaita node jidouhanbaiki de tsumetai ocha o kaimashita.',
          meaningEn: 'I was thirsty so I bought cold green tea from the vending machine.',
          meaningBn: 'তেষ্টা পাওয়ায় ভেন্ডিং মেশিন থেকে একটি ঠাণ্ডা ওচা (গ্রিন টি) কিনেছি।'
        }
      ]
    },
    {
      id: 'l21-yuu',
      kanji: '由',
      emoji: '🗽',
      strokeCount: 5,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ユ', romaji: 'yu' }, { kana: 'ユウ', romaji: 'yuu' }],
        kunyomi: []
      },
      meanings: {
        en: 'Reason, origin, cause',
        bn: 'কারণ, উৎস, স্বাধীনতা'
      },
      vocab: [
        { kanji: '自由', kana: 'じゆう', romaji: 'jiyuu', meaningEn: 'freedom, liberty', meaningBn: 'স্বাধীনতা', tag: 'N4' },
        { kanji: '理由', kana: 'りゆう', romaji: 'riyuu', meaningEn: 'reason, cause', meaningBn: 'কারণ', tag: 'N4' },
        { kanji: '経由', kana: 'けいゆ', romaji: 'keiyu', meaningEn: 'via, by way of', meaningBn: 'হয়ে বা ভায়া', tag: 'N3' },
        { kanji: '由来', kana: 'ゆらい', romaji: 'yurai', meaningEn: 'origin, history', meaningBn: 'উৎস বা ইতিহাস', tag: 'N3' },
        { kanji: '不自由な', kana: 'ふじゆうな', romaji: 'fujiyuu na', meaningEn: 'disabled, inconvenient', meaningBn: 'অসুবিধা বা পঙ্গুত্ব', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'パック旅行ではなく、自由に行き先を決める自由旅行にしました।',
          romaji: 'Pakku ryokou de wa naku, jiyuu ni ikisaki o kimeru jiyuu ryokou ni shimashita.',
          meaningEn: 'Instead of a package tour, we opted for free-style travel where we decide destinations freely.',
          meaningBn: 'প্যাকেজ ট্যুর না নিয়ে আমরা নিজেরাই স্বাধীনভাবে ঘুরে বেড়ানোর প্ল্যান করেছি।'
        },
        {
          ja: '仕事の都合を理由に、旅行の予定を延期しました।',
          romaji: 'Shigoto no tsugou o riyuu ni, ryokou no yotei o enki shimashita.',
          meaningEn: 'Because of business convenience, I postponed the travel schedule.',
          meaningBn: 'অফিসের কাজের অজুহাতে ভ্রমণের প্ল্যানটি কিছুদিনের জন্য পিছিয়ে দিয়েছি।'
        }
      ]
    },
    {
      id: 'l21-hatsu',
      kanji: '発',
      emoji: '🛫',
      strokeCount: 9,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ハツ', romaji: 'hatsu' }, { kana: 'ホツ', romaji: 'hotsu' }],
        kunyomi: []
      },
      meanings: {
        en: 'Departure, launch, publish, emit',
        bn: 'রওনা হওয়া, বহির্গমন, শুরু করা'
      },
      vocab: [
        { kanji: '出発', kana: 'しゅっぱつ', romaji: 'shuppatsu', meaningEn: 'departure', meaningBn: 'রওনা হওয়া', tag: 'N4' },
        { kanji: '発車する', kana: 'はっしゃする', romaji: 'hassha suru', meaningEn: 'departure of train', meaningBn: 'ট্রেন স্টেশন ছেড়ে যাওয়া', tag: 'N3' },
        { kanji: '発表する', kana: 'はっぴょうする', romaji: 'happyou suru', meaningEn: 'to present, publish', meaningBn: 'ঘোষণা করা বা প্রকাশ করা', tag: 'N4' },
        { kanji: '発見する', kana: 'はっけんする', romaji: 'hakken suru', meaningEn: 'to discover', meaningBn: 'আবিষ্কার করা', tag: 'N3' },
        { kanji: '発達', kana: 'はったつ', romaji: 'hattatsu', meaningEn: 'development', meaningBn: 'উন্নতি লাভ করা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '明日の朝八時に東京駅を出発して京都に向かいます।',
          romaji: 'Ashita no asa hachi-ji ni Toukyou-eki o shuppatsu shite Kyouto ni mukaimasu.',
          meaningEn: 'Tomorrow morning at 8 o’clock I will depart Tokyo station and head towards Kyoto.',
          meaningBn: 'আগামীকাল সকাল ৮টায় টোকিও স্টেশন থেকে রওনা হয়ে কিয়োটোর দিকে যাব।'
        },
        {
          ja: '新しい新電車の発車時刻を確認しました।',
          romaji: 'Atarashii shin-densha no hassha jikoku o kakunin shimashita.',
          meaningEn: 'I checked the departure time of the new train.',
          meaningBn: 'নতুন ট্রেন ছাড়ার সময়টি আমি নিশ্চিত করে নিয়েছি।'
        }
      ]
    },
    {
      id: 'l21-chaku',
      kanji: '着',
      emoji: '🛬',
      strokeCount: 12,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'チャク', romaji: 'chaku' }],
        kunyomi: [{ kana: 'き.る', romaji: 'ki.ru' }, { kana: 'つ.く', romaji: 'tsu.ku' }]
      },
      meanings: {
        en: 'Arrive, wear, clad',
        bn: 'পৌঁছানো, পরিধান করা, পরা'
      },
      vocab: [
        { kanji: '着く', kana: 'つく', romaji: 'tsuku', meaningEn: 'to arrive', meaningBn: 'পৌঁছানো', tag: 'N5' },
        { kanji: '着る', kana: 'きる', romaji: 'kiru', meaningEn: 'to wear', meaningBn: 'পোশাক পরা (শরীরের ওপর অংশ)', tag: 'N5' },
        { kanji: '到着', kana: 'とうちゃく', romaji: 'touchaku', meaningEn: 'arrival', meaningBn: 'পৌঁছানো', tag: 'N4' },
        { kanji: '着物', kana: 'きもの', romaji: 'kimono', meaningEn: 'traditional Japanese robe', meaningBn: 'কিমোনো (জাপানি ঐতিহ্যবাহী পোশাক)', tag: 'N5' },
        { kanji: '水着', kana: 'みずぎ', romaji: 'mizugi', meaningEn: 'swimsuit', meaningBn: 'সাঁতারের পোশাক', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '京都行きの電車は夕方四時に到着する予定です।',
          romaji: 'Kyouto-yuki no densha wa yuugata yo-ji ni touchaku suru yotei desu.',
          meaningEn: 'The train bound for Kyoto is scheduled to arrive at 4 PM.',
          meaningBn: 'কিয়োটোগামী ট্রেনটি বিকেল ৪টায় পৌঁছানোর কথা আছে।'
        },
        {
          ja: '京都を旅行中に、着物を着て古いお寺を散歩しました।',
          romaji: 'Kyouto o ryokou chuu ni, kimono o kite furui otera o sanpo shimashita.',
          meaningEn: 'During my travel to Kyoto, I wore a kimono and walked around old temples.',
          meaningBn: 'কিয়োটো ভ্রমণের সময় কিমোনো পরে প্রাচীন মন্দিরগুলোর চারপাশে হেঁটে বেড়িয়েছি।'
        }
      ]
    },
    {
      id: 'l21-tooi',
      kanji: '遠',
      emoji: '⛰️',
      strokeCount: 13,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'エン', romaji: 'en' }],
        kunyomi: [{ kana: 'とお.い', romaji: 'too.i' }]
      },
      meanings: {
        en: 'Far, distant',
        bn: 'দূরে, দূরবর্তী'
      },
      vocab: [
        { kanji: '遠い', kana: 'とおい', romaji: 'tooi', meaningEn: 'far, distant', meaningBn: 'দূরে', tag: 'N5' },
        { kanji: '遠足', kana: 'えんそく', romaji: 'ensoku', meaningEn: 'excursion, picnic', meaningBn: 'শিক্ষা সফর বা পিকনিক', tag: 'N4' },
        { kanji: '遠慮する', kana: 'えんりょする', romaji: 'enryo suru', meaningEn: 'to hesitate, hold back', meaningBn: 'দ্বিধা বা ইতস্তত করা', tag: 'N3' },
        { kanji: '遠く', kana: 'とおく', romaji: 'tooku', meaningEn: 'distant place', meaningBn: 'অনেক দূর', tag: 'N4' },
        { kanji: '望遠鏡', kana: 'ぼうえんきょう', romaji: 'bouenkyou', meaningEn: 'telescope', meaningBn: 'দূরবীন বা টেলিস্কোপ', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '富士山は東京から遠いですが、晴れた日には見えます।',
          romaji: 'Fujisan wa Toukyou kara tooi desu ga, hareta hi ni wa miemasu.',
          meaningEn: 'Mount Fuji is far from Tokyo, but you can see it on a clear day.',
          meaningBn: 'মাউন্ট ফুজি টোকিও থেকে অনেক দূরে হলেও পরিষ্কার দিনে দেখা যায়।'
        },
        {
          ja: '子供のとき、学校の遠足で動物園に行きました।',
          romaji: 'Kodomo no toki, gakkou no ensoku de doubutsuen ni ikimashita.',
          meaningEn: 'When I was a kid, we went to the zoo for a school picnic.',
          meaningBn: 'ছোটবেলায় স্কুলের পিকনিকে আমরা চিড়িয়াখানায় গিয়েছিলাম।'
        }
      ]
    },

    // --- Read Only (読める: 泊まる, 送迎, 温泉) ---
    {
      id: 'l21-tomaru',
      kanji: '泊',
      emoji: '🏨',
      strokeCount: 8,
      jlpt: 'N4',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'ハク', romaji: 'haku' }],
        kunyomi: [{ kana: 'と.まる', romaji: 'to.maru' }, { kana: 'と.める', romaji: 'to.meru' }]
      },
      meanings: {
        en: 'Overnight stay, lodge',
        bn: 'রাতযাপন করা, থাকা'
      },
      vocab: [
        { kanji: '泊まる', kana: 'とまる', romaji: 'tomaru', meaningEn: 'to stay overnight', meaningBn: 'হোটেল/রিসোর্টে রাত কাটানো', tag: 'N4' },
        { kanji: '一泊二日', kana: 'いっぱくふつか', romaji: 'ippaku futsuka', meaningEn: 'one night, two days', meaningBn: '১ রাত ২ দিনের ট্যুর', tag: 'N3' },
        { kanji: '宿泊', kana: 'しゅくはく', romaji: 'shukuhaku', meaningEn: 'lodging, staying', meaningBn: 'রাতযাপন', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '京都のホテルに一泊二日で泊まります、楽しみです।',
          romaji: 'Kyouto no hoteru ni ippaku futsuka de tomarimasu, tanoshimi desu.',
          meaningEn: 'I will stay at a hotel in Kyoto for one night and two days, I am looking forward to it.',
          meaningBn: 'কিয়োটোর হোটেলে এক রাত দুই দিনের জন্য থাকব, খুব আনন্দ হচ্ছে।'
        }
      ]
    },
    {
      id: 'l21-sougei',
      kanji: '送迎',
      emoji: '🚐',
      strokeCount: 18,
      jlpt: 'N3',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'ソウゲイ', romaji: 'sougei' }],
        kunyomi: []
      },
      meanings: {
        en: 'Pick-up and drop-off service, welcome and send-off',
        bn: 'আনা ও নেওয়ার ফ্রি শাটল বাস সার্ভিস'
      },
      vocab: [
        { kanji: '送迎バス', kana: 'そうげいバス', romaji: 'sougei basu', meaningEn: 'courtesy shuttle bus', meaningBn: 'ফ্রি শাটল বাস সার্ভিস (রিসোর্ট)', tag: 'N3' },
        { kanji: '迎える', kana: 'むかえる', romaji: 'mukaeru', meaningEn: 'to welcome, greet', meaningBn: 'স্বাগত জানানো বা রিসিভ করা', tag: 'N4' }
      ],
      sentences: [
        {
          ja: '温泉旅館は最寄り駅から無料の送迎サービスがあります।',
          romaji: 'Onsen ryokan wa moyori eki kara muryou no sougei saabisu ga arimasu.',
          meaningEn: 'The hot spring resort provides a free shuttle pick-up service from the nearest station.',
          meaningBn: 'ঝর্ণা রিসোর্টটি কাছের স্টেশন থেকে ফ্রিতে যাতায়াতের বাস সার্ভিস দেয়।'
        }
      ]
    },
    {
      id: 'l21-onsen',
      kanji: '温泉',
      emoji: '♨️',
      strokeCount: 22,
      jlpt: 'N4',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'オンセン', romaji: 'onsen' }],
        kunyomi: []
      },
      meanings: {
        en: 'Hot spring, mineral spring',
        bn: 'গরম পানির ঝর্ণা (ওনসেন রিসোর্ট)'
      },
      vocab: [
        { kanji: '温泉', kana: 'おんせん', romaji: 'onsen', meaningEn: 'hot spring', meaningBn: 'ওনসেন বা কুসুম গরম পানির ঝর্ণা', tag: 'N4' },
        { kanji: '泉', kana: 'いずみ', romaji: 'izumi', meaningEn: 'spring, fountain', meaningBn: 'ঝর্ণা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '箱根の有名な温泉に入って、体がとても温まりました।',
          romaji: 'Hakone no yuumei na onsen ni haitte, karada ga totemo atatamarimashita.',
          meaningEn: 'I entered the famous hot spring in Hakone, and my body warmed up nicely.',
          meaningBn: 'হাকোনের বিখ্যাত গরম পানির ঝর্ণায় গোসল করার পর শরীরটি অনেক সতেজ ও গরম লেগেছে।'
        }
      ]
    },

    // --- Visual Recognition (見て、分かる: 往復) ---
    {
      id: 'l21-oufuku',
      kanji: '往復',
      emoji: '🎫',
      strokeCount: 20,
      jlpt: 'N3',
      category: 'visual_recognition',
      readings: {
        onyomi: [{ kana: 'オウフク', romaji: 'oufuku' }],
        kunyomi: []
      },
      meanings: {
        en: 'Round trip, return ticket',
        bn: 'যাতায়াত (আসা-যাওয়া), দ্বিমুখী টিকিট'
      },
      vocab: [
        { kanji: '往復', kana: 'おうふく', romaji: 'oufuku', meaningEn: 'round trip', meaningBn: 'আসা-যাওয়া বা দ্বিমুখী সফর', tag: 'N3' },
        { kanji: '片道', kana: 'かたみち', romaji: 'katamichi', meaningEn: 'one-way trip', meaningBn: 'একমুখী সফর', tag: 'N3' },
        { kanji: '復習する', kana: 'ふくしゅうする', romaji: 'fukushuu suru', meaningEn: 'to review', meaningBn: 'পুনরালোচনা করা', tag: 'N4' }
      ],
      sentences: [
        {
          ja: '電車の切符は片道ではなく、往復で買ったほうが安いです।',
          romaji: 'Densha no kippu wa katamichi de wa naku, oufuku de katta hou ga yasui desu.',
          meaningEn: 'It is cheaper to buy a train ticket for a round trip rather than a one-way trip.',
          meaningBn: 'ট্রেনের টিকিট ওয়ান-ওয়ে না কেটে রিটার্ন (যাতায়াতসহ) কাটলে দাম কম পাওয়া যায়।'
        }
      ]
    }
  ]
};
