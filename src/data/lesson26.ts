import { Lesson } from '../types/kanji';

export const lesson26: Lesson = {
  id: 26,
  number: 26,
  titleJa: '地域で',
  titleRomaji: 'Chiiki de',
  titleBn: 'স্থানীয় এলাকায় (In the Community - Neighborhood & Rules)',
  titleEn: 'In the Community (Neighborhood & Rules)',
  descriptionBn: 'নিজের পাড়া বা এলাকায় বসবাস করার সময় ময়লা ফেলা, ধার দেওয়া-নেওয়া, পোস্টাল এবং স্থানীয় নিয়মের প্রয়োজনীয় কান্জิ (工, 医, 紙, 町, 南, 以, 初, 借, 貸, 押)।',
  descriptionEn: 'Essential Kanji for community life, sorting garbage, borrowing, lending, and navigating neighborhood rules in Japan.',
  kanjiList: [
    // --- Main Kanji (書ける: 工, 医, 紙, 町, 南, 以, 初, 借, 貸, 押) ---
    {
      id: 'l26-kou',
      kanji: '工',
      emoji: '🏗️',
      strokeCount: 3,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'コウ', romaji: 'kou' }, { kana: 'ク', romaji: 'ku' }],
        kunyomi: []
      },
      meanings: {
        en: 'Construction, craft, industry',
        bn: 'নির্মাণ, কারিগরি, কারখানা'
      },
      vocab: [
        { kanji: '工場', kana: 'こうじょう', romaji: 'koujou', meaningEn: 'factory, plant', meaningBn: 'কারখানা', tag: 'N5' },
        { kanji: '工事', kana: 'こうじ', romaji: 'kouji', meaningEn: 'construction work', meaningBn: 'নির্মাণ কাজ', tag: 'N4' },
        { kanji: '工業', kana: 'こうぎょう', romaji: 'kougyou', meaningEn: 'manufacturing industry', meaningBn: 'উৎপাদন শিল্প', tag: 'N3' },
        { kanji: '工芸', kana: 'こうげい', romaji: 'kougei', meaningEn: 'industrial crafts, handcraft', meaningBn: 'কারুশিল্প', tag: 'N3' },
        { kanji: '大工', kana: 'だいく', romaji: 'daiku', meaningEn: 'carpenter', meaningBn: 'কাঠমিস্ত্রি', tag: 'N3' },
        { kanji: '人工', kana: 'じんこう', romaji: 'jinkou', meaningEn: 'artificial, man-made', meaningBn: 'কৃত্রিম', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'この町には自動車の部品を作る大きな工場がたくさんあります।',
          romaji: 'Kono machi ni wa jidousha no buhin o tsukuru ookina koujou ga takusan arimasu.',
          meaningEn: 'There are many large factories making automobile parts in this town.',
          meaningBn: 'এই শহরে গাড়ির খুচরা যন্ত্রাংশ তৈরির অনেক বড় বড় কারখানা রয়েছে।'
        },
        {
          ja: '駅の前で道路工事をしていて、車が渋滞しています।',
          romaji: 'Eki no mae de dourou kouji o shiteite, kuruma ga juutai shite imasu.',
          meaningEn: 'They are doing road construction in front of the station, causing a traffic jam.',
          meaningBn: 'স্টেশনের সামনে রাস্তার কাজ চলার কারণে গাড়ি জ্যামে আটকে আছে।'
        }
      ],
      tamagoTip: {
        en: 'The top line is heaven, the bottom is earth, and the vertical line connects them, representing a craftsman’s tool or carpenter’s square.',
        bn: 'ওপরের লাইনটি আকাশ, নিচেরটি মাটি এবং মাঝের লম্বটি দুটিকে যুক্ত করে। এটি একজন মিস্ত্রির কাজের স্কেল বা সমকোণী ত্রিভুজকে নির্দেশ করে।'
      }
    },
    {
      id: 'l26-i',
      kanji: '医',
      emoji: '🩺',
      strokeCount: 7,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'イ', romaji: 'i' }],
        kunyomi: []
      },
      meanings: {
        en: 'Doctor, medicine, healing',
        bn: 'ডাক্তার, চিকিৎসা, আরোগ্য'
      },
      vocab: [
        { kanji: '医者', kana: 'いしゃ', romaji: 'isha', meaningEn: 'doctor', meaningBn: 'ডাক্তার', tag: 'N5' },
        { kanji: '医学', kana: 'いがく', romaji: 'igaku', meaningEn: 'medical science', meaningBn: 'চিকিৎসা বিজ্ঞান', tag: 'N3' },
        { kanji: '医院', kana: 'いいん', romaji: 'iin', meaningEn: 'doctor’s clinic', meaningBn: 'ছোট ক্লিনিক', tag: 'N3' },
        { kanji: '医療', kana: 'いりょう', romaji: 'iryou', meaningEn: 'medical treatment, care', meaningBn: 'চিকিৎসা সেবা', tag: 'N3' },
        { kanji: '歯科医', kana: 'しかい', romaji: 'shikai', meaningEn: 'dentist', meaningBn: 'দন্তচিকিৎসক', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '風邪を引いたので、近くの個人医院へ行って診てもらいました।',
          romaji: 'Kaze o hiita node, chikaku no kojin iin e itte mite moraimashita.',
          meaningEn: 'I caught a cold, so I went to a nearby private clinic to be examined.',
          meaningBn: 'ঠান্ডা লাগায় পাশের একটি ক্লিনিকে গিয়ে ডাক্তার দেখিয়ে এসেছি।'
        },
        {
          ja: '日本の進んだ医療技術は多くの病気の人を救っています।',
          romaji: 'Nihon no susunda iryou gijutsu wa ooku no byouki no hito o sukutte imasu.',
          meaningEn: 'Japan’s advanced medical technology saves many sick people.',
          meaningBn: 'জাপানের উন্নত চিকিৎসা প্রযুক্তি বহু রোগাক্রান্ত মানুষের জীবন বাঁচাচ্ছে।'
        }
      ],
      tamagoTip: {
        en: 'An arrow (矢) enclosed in a case (匚), representing a physician’s case holding arrows or instruments used for treatment.',
        bn: 'একটি বাক্সের (匚) ভেতর চিকিৎসার তির বা সুচ (矢) রাখা আছে, যা প্রাচীন চিকিৎসকদের ওষুধের বক্সকে ইঙ্গিত করে।'
      }
    },
    {
      id: 'l26-kami',
      kanji: '紙',
      emoji: '📄',
      strokeCount: 10,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'シ', romaji: 'shi' }],
        kunyomi: [{ kana: 'かみ', romaji: 'kami' }]
      },
      meanings: {
        en: 'Paper',
        bn: 'কাগজ'
      },
      vocab: [
        { kanji: '紙', kana: 'かみ', romaji: 'kami', meaningEn: 'paper', meaningBn: 'কাগজ', tag: 'N5' },
        { kanji: '手紙', kana: 'てがみ', romaji: 'tegami', meaningEn: 'letter', meaningBn: 'চিঠি', tag: 'N5' },
        { kanji: '折り紙', kana: 'おりがみ', romaji: 'origami', meaningEn: 'origami (paper folding art)', meaningBn: 'কাগজ ভাঁজ করার ঐতিহ্যবাহী জাপানি শিল্প', tag: 'N4' },
        { kanji: '用紙', kana: 'ようし', romaji: 'youshi', meaningEn: 'form, blank paper sheet', meaningBn: 'নির্ধারিত ফর্ম বা কাগজ', tag: 'N4' },
        { kanji: '和紙', kana: 'わし', romaji: 'washi', meaningEn: 'traditional Japanese paper', meaningBn: 'ঐতিহ্যবাহী জাপানি কাগজ', tag: 'N3' },
        { kanji: '紙袋', kana: 'かみぶくろ', romaji: 'kamibukuro', meaningEn: 'paper bag', meaningBn: 'কাগজের ব্যাগ বা ঠোঙা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '区役所で住所を変更するための登録用紙に記入してください।',
          romaji: 'Kuyakusho de juusho o henkou suru tame no touroku youshi ni kinyuu shite kudasai.',
          meaningEn: 'Please fill out the registration form for changing the address at the ward office.',
          meaningBn: 'সিটি অফিসে ঠিকানা পরিবর্তনের জন্য নির্ধারিত আবেদন ফর্মে তথ্য পূরণ করুন।'
        },
        {
          ja: 'お土産を渡すために、綺麗な紙袋を一枚もらいました।',
          romaji: 'Omiyage o watasu tame ni, kirei na kamibukuro o ichimai moraimashita.',
          meaningEn: 'I received a nice paper bag to hand over the souvenir.',
          meaningBn: 'উপহারটি দেওয়ার জন্য একটি চমৎকার কাগজের ব্যাগ চেয়ে নিয়েছি।'
        }
      ],
      tamagoTip: {
        en: 'The left side is thread (糸) and the right side (氏) represents flat structure, indicating fibers of thread flattened out to form paper.',
        bn: 'বামে সুতা (糸) আর ডানে সমতল কাঠামো (氏) - সুতার তন্তু বা ফাইবারকে পিটিয়ে সমতল করে প্রাচীনকালে কাগজ তৈরির প্রক্রিয়াই কাগজের কান্জি।'
      }
    },
    {
      id: 'l26-machi',
      kanji: '町',
      emoji: '🏘️',
      strokeCount: 7,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'チョウ', romaji: 'chou' }],
        kunyomi: [{ kana: 'まち', romaji: 'machi' }]
      },
      meanings: {
        en: 'Town, neighborhood, street',
        bn: 'শহর, এলাকা, পাড়া'
      },
      vocab: [
        { kanji: '町', kana: 'まち', romaji: 'machi', meaningEn: 'town', meaningBn: 'শহর বা পাড়া', tag: 'N5' },
        { kanji: '町長', kana: 'ちょうちょう', romaji: 'chouchou', meaningEn: 'town mayor', meaningBn: 'মেয়র', tag: 'N3' },
        { kanji: '下町', kana: 'したまち', romaji: 'shitamachi', meaningEn: 'downtown, old commercial quarter', meaningBn: 'ঐতিহ্যবাহী প্রাচীন শহরের বাণিজ্য এলাকা', tag: 'N3' },
        { kanji: '町中', kana: 'まちじゅう', romaji: 'machijuu', meaningEn: 'all over the town', meaningBn: 'পুরো শহরজুড়ে', tag: 'N4' },
        { kanji: '町内会', kana: 'ちょうないかい', romaji: 'chounaikai', meaningEn: 'neighborhood association', meaningBn: 'স্থানীয় পাড়া উন্নয়ন কমিটি', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '私が住んでいる町は、静かでとても安全な良い場所です।',
          romaji: 'Watashi ga sunde iru machi wa, shizuka de totemo anzen na yoi basho desu.',
          meaningEn: 'The town where I live is quiet, very safe, and a nice place.',
          meaningBn: 'আমি যে এলাকায় থাকি তা খুবই শান্ত, নিরাপদ এবং চমৎকার একটি জায়গা।'
        },
        {
          ja: '町内会に参加して、地域のゴミ拾いボランティアをしました।',
          romaji: 'Chounaikai ni sanka shite, chiiki no gomihiroi borantia o shimashita.',
          meaningEn: 'I participated in the neighborhood association and volunteered to pick up garbage in the area.',
          meaningBn: 'এলাকা উন্নয়ন কমিটির হয়ে রাস্তার ময়লা পরিষ্কার করার স্বেচ্ছাসেবামূলক কাজে অংশ নিয়েছিলাম।'
        }
      ],
      tamagoTip: {
        en: 'A rice field (田) on the left and a street corner (丁) on the right: represents a town forming around agricultural borders.',
        bn: 'বামে ফসলের ক্ষেত (田) আর ডানে রাস্তার মোড় (丁) - প্রাচীনকালে ক্ষেতের সীমানা ও রাস্তার সংযোগস্থলেই বসতি বা ছোট শহর গড়ে উঠত।'
      }
    },
    {
      id: 'l26-minami',
      kanji: '南',
      emoji: '🧭',
      strokeCount: 9,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ナン', romaji: 'nan' }],
        kunyomi: [{ kana: 'みなみ', romaji: 'minami' }]
      },
      meanings: {
        en: 'South',
        bn: 'দক্ষিণ দিক'
      },
      vocab: [
        { kanji: '南', kana: 'みなみ', romaji: 'minami', meaningEn: 'south', meaningBn: 'দক্ষিণ', tag: 'N5' },
        { kanji: '南口', kana: 'みなみぐち', romaji: 'minamiguchi', meaningEn: 'south exit', meaningBn: 'দক্ষিণ গেইট বা নিষ্ক্রমণ পথ', tag: 'N5' },
        { kanji: '東南アジア', kana: 'とうなんアジア', romaji: 'tounan ajia', meaningEn: 'Southeast Asia', meaningBn: 'দক্ষিণ-পূর্ব এশিয়া', tag: 'N4' },
        { kanji: '南北', kana: 'なんぼく', romaji: 'nanboku', meaningEn: 'south and north', meaningBn: 'উত্তর-দক্ষিণ', tag: 'N3' },
        { kanji: '南向き', kana: 'みなみむき', romaji: 'minamimuki', meaningEn: 'facing south', meaningBn: 'দক্ষিণমুখী (রোদ আসার সুবিধাজনক বাড়ি)', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '駅の改札口を出たら、南口の広場で待ち合わせましょう।',
          romaji: 'Eki no kaisatsuguchi o detara, minamiguchi no hiroba de machiawase mashou.',
          meaningEn: 'After leaving the station ticket gate, let’s meet at the south exit plaza.',
          meaningBn: 'স্টেশনের টিকিট কাউন্টার পেরিয়ে দক্ষিণ গেইটের খোলা মাঠের সামনে দেখা করব।'
        },
        {
          ja: '日本のアパートは、日当たりが良い南向きの部屋が一番人気です।',
          romaji: 'Nihon no apaato wa, hiatari ga yoi minamimuki no heya ga ichiban ninki desu.',
          meaningEn: 'In Japanese apartments, rooms facing south with good sunlight are the most popular.',
          meaningBn: 'জাপানে চমৎকার রোদের আলো পাওয়ার জন্য দক্ষিণমুখী রুমগুলো ভাড়াটিয়াদের প্রথম পছন্দ।'
        }
      ],
      tamagoTip: {
        en: 'Looks like a traditional musical instrument or plant growing towards the warm sun from the south.',
        bn: 'এটি দেখতে প্রাচীন দক্ষিণমুখী বাদ্যযন্ত্রের মতো, যা উষ্ণতা ও রোদের দিক দক্ষিণকে প্রকাশ করে।'
      }
    },
    {
      id: 'l26-i-motte',
      kanji: '以',
      emoji: '📈',
      strokeCount: 5,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'イ', romaji: 'i' }],
        kunyomi: []
      },
      meanings: {
        en: 'By means of, because, compared to',
        bn: 'দিয়ে, চেয়ে, থেকে, সীমানা বা সীমা'
      },
      vocab: [
        { kanji: '以上', kana: 'いじょう', romaji: 'ijou', meaningEn: 'more than, or more', meaningBn: 'এর বেশি বা এতটুকু পর্যন্ত', tag: 'N5' },
        { kanji: '以下', kana: 'いか', romaji: 'ika', meaningEn: 'less than, or less', meaningBn: 'এর কম', tag: 'N5' },
        { kanji: '以外', kana: 'いがい', romaji: 'igai', meaningEn: 'except, besides', meaningBn: 'ব্যতীত বা ছাড়া', tag: 'N4' },
        { kanji: '以内', kana: 'いない', romaji: 'inai', meaningEn: 'within, inside', meaningBn: 'এর মধ্যে বা অনধিক', tag: 'N4' },
        { kanji: '以前', kana: 'いぜん', romaji: 'izen', meaningEn: 'previously, before', meaningBn: 'পূর্বে বা আগে', tag: 'N4' },
        { kanji: '以降', kana: 'いこう', romaji: 'ikou', meaningEn: 'henceforth, from then on', meaningBn: 'পরবর্তী সময়ে বা এরপর থেকে', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'この駐車場は、一時間以内なら無料で利用できますよ।',
          romaji: 'Kono chuushajou wa, ichijikan inai nara muryou de riyou dekimasu yo.',
          meaningEn: 'This parking lot can be used for free if it is within one hour.',
          meaningBn: 'এই পার্কিং প্লেসটি ১ ঘণ্টার মধ্যে হলে ফ্রিতে গাড়ি রাখা সম্ভব।'
        },
        {
          ja: '日本語能力試験のN4合格には、半分以上の点数が必要です।',
          romaji: 'Nihonngo nouryoku shiken no N4 goukaku ni wa, hanbun ijou no tensuu ga hitsuyou desu.',
          meaningEn: 'To pass the JLPT N4, a score of more than half is required.',
          meaningBn: 'জেএলপিটি এন৪ পরীক্ষায় পাস করতে হলে মোট নম্বরের অর্ধেক বা তার বেশি পেতে হবে।'
        }
      ],
      tamagoTip: {
        en: 'Originally showed a person using a plow tool on the left, establishing a reference point on the right (人 + plow).',
        bn: 'বামে একজন মানুষের লাঙল ধরার চিত্র, যা চাষাবাদের নির্দিষ্ট সীমানা বা রেফারেন্স পয়েন্ট টানা প্রকাশ করে।'
      }
    },
    {
      id: 'l26-hatsu',
      kanji: '初',
      emoji: '🌱',
      strokeCount: 7,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ショ', romaji: 'sho' }],
        kunyomi: [{ kana: 'はじめ', romaji: 'hajime' }, { kana: 'はじ.めて', romaji: 'haji.mete' }, { kana: 'はつ', romaji: 'hatsu' }]
      },
      meanings: {
        en: 'First, beginning, first time',
        bn: 'প্রথম, প্রারম্ভিক, প্রথমবারের মতো'
      },
      vocab: [
        { kanji: '初めて', kana: 'はじめて', romaji: 'hajimete', meaningEn: 'for the first time', meaningBn: 'প্রথমবারের মতো', tag: 'N5' },
        { kanji: '最初', kana: 'さいしょ', romaji: 'saisho', meaningEn: 'beginning, first', meaningBn: 'প্রথম বা প্রারম্ভ', tag: 'N5' },
        { kanji: '初詣', kana: 'はつもうで', romaji: 'hatsumoude', meaningEn: 'first shrine visit of New Year', meaningBn: 'বছরের প্রথম উপাসনালয় দর্শন', tag: 'N3' },
        { kanji: '初期', kana: 'しょき', romaji: 'shoki', meaningEn: 'initial period', meaningBn: 'প্রাথমিক পর্যায় বা প্রথম দিক', tag: 'N3' },
        { kanji: '初雪', kana: 'はつゆき', romaji: 'hatsuyuki', meaningEn: 'first snow of winter', meaningBn: 'বছরের প্রথম তুষারপাত', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '私は日本に来て、今日初めて雪を見て感動しました।',
          romaji: 'Watashi wa Nihon ni kite, kyou hajimete yuki o mite kandou shimashita.',
          meaningEn: 'I came to Japan and saw snow today for the first time and was moved.',
          meaningBn: 'জাপানে আসার পর আজ প্রথমবারের মতো তুষারপাত দেখে আমার দারুণ আনন্দ হলো।'
        },
        {
          ja: '一年の最初の日には、近くの神社へお参り（初詣）に行きます।',
          romaji: 'Ichinen no saisho no hi ni wa, chikaku no jinja e omairi ni ikimasu.',
          meaningEn: 'On the first day of the year, we go to make a pilgrimage to the nearby shrine.',
          meaningBn: 'বছরের প্রথম দিনে পাড়ার পাশের শ্রাইনে গিয়ে আমরা প্রার্থনা (Hatsumoude) করি।'
        }
      ],
      tamagoTip: {
        en: 'Left side is clothing (衤/衣) and right side is knife (刀): to make clothes, the very first step is cutting fabric with a knife.',
        bn: 'বামে কাপড় (衤) আর ডানে কাঁচি বা তলোয়ার (刀) - নতুন জামা বানানোর জন্য কাপড় কাটাই হলো কাজের প্রথম পদক্ষেপ বা শুরু।'
      }
    },
    {
      id: 'l26-karu',
      kanji: '借',
      emoji: '🔑',
      strokeCount: 10,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'シャク', romaji: 'shaku' }],
        kunyomi: [{ kana: 'か.りる', romaji: 'ka.riru' }]
      },
      meanings: {
        en: 'Borrow, rent',
        bn: 'ধার নেওয়া, ধার করা, সাময়িক চেয়ে নেওয়া'
      },
      vocab: [
        { kanji: '借りる', kana: 'かりる', romaji: 'kariru', meaningEn: 'to borrow, rent', meaningBn: 'ধার নেওয়া বা ভাড়া করা', tag: 'N5' },
        { kanji: '借金', kana: 'しゃっきん', romaji: 'shakkin', meaningEn: 'debt, loan', meaningBn: 'ঋণ বা ধারের টাকা', tag: 'N3' },
        { kanji: '借家', kana: 'しゃくや', romaji: 'shakuya', meaningEn: 'rented house', meaningBn: 'ভাড়া নেওয়া বাড়ি', tag: 'N3' },
        { kanji: '間借り', kana: 'まがり', romaji: 'magari', meaningEn: 'renting a room', meaningBn: 'সাবলেট বা সাবলেট রুম', tag: 'N3' },
        { kanji: '借り手', kana: 'かりて', romaji: 'karite', meaningEn: 'borrower, tenant', meaningBn: 'গ্রহীতা বা ভাড়াটিয়া', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '雨が降ってきたので、コンビニで傘を一本借りました।',
          romaji: 'Ame ga futte kita node, konbini de kasa o ippon karimashita.',
          meaningEn: 'Since it started raining, I borrowed an umbrella from the convenience store.',
          meaningBn: 'হঠাৎ বৃষ্টি শুরু হওয়ায় কনভেনিয়েন্স স্টোর থেকে একটি ছাতা সাময়িক ধার চেয়ে নিয়েছি।'
        },
        {
          ja: '図書館から借りた本は、一週間以内に返却しなければなりません।',
          romaji: 'Toshokan kara karita hon wa, isshuukan inai ni henkyaku shinakereba narimasen.',
          meaningEn: 'The books borrowed from the library must be returned within one week.',
          meaningBn: 'লাইব্রেরি থেকে নেওয়া বইগুলো অবশ্যই এক সপ্তাহের মধ্যে ফেরত দিতে হবে।'
        }
      ],
      tamagoTip: {
        en: 'Left side is a person (亻) and right side is ancient tablets stacked in the sun (昔 - past/old): a person borrowing ancient materials from the past.',
        bn: 'বামে মানুষ (亻) আর ডানে অতীত বা পুরনো সময় (昔) - অতীতে কোনো মানুষের কাছ থেকে প্রয়োজনীয় জিনিস চেয়ে বা ধার নিয়ে আসা।'
      }
    },
    {
      id: 'l26-kasu',
      kanji: '貸',
      emoji: '🤝',
      strokeCount: 12,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'タイ', romaji: 'tai' }],
        kunyomi: [{ kana: 'か.す', romaji: 'ka.su' }]
      },
      meanings: {
        en: 'Lend, rent out, lease',
        bn: 'ধার দেওয়া, ধার হিসেবে কাউকে দেওয়া'
      },
      vocab: [
        { kanji: '貸す', kana: 'かす', romaji: 'kasu', meaningEn: 'to lend', meaningBn: 'ধার দেওয়া', tag: 'N5' },
        { kanji: '貸し出し', kana: 'かしだし', romaji: 'kashidashi', meaningEn: 'lending, loaning out', meaningBn: 'বই বা ক্যাসেট ইস্যু করা', tag: 'N4' },
        { kanji: '貸間', kana: 'かしま', romaji: 'kashima', meaningEn: 'room for rent', meaningBn: 'ভাড়ার জন্য ফাঁকা রুম', tag: 'N3' },
        { kanji: '賃貸アパート', kana: 'ちんたいアパート', romaji: 'chintai apaato', meaningEn: 'rental apartment', meaningBn: 'ভাড়া দেওয়ার ফ্ল্যাট বা বাসা', tag: 'N3' },
        { kanji: '貸し主', kana: 'かしぬし', romaji: 'kashinushi', meaningEn: 'lender, landlord', meaningBn: 'মালিক বা ঋণদাতা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '消しゴムを忘れて困っている友達に、自分の予備を貸してあげました।',
          romaji: 'Keshigomu o wasurete komatte iru tomodachi ni, jibun no yobi o kashite agemashita.',
          meaningEn: 'I lent my spare eraser to my friend who forgot theirs and was in trouble.',
          meaningBn: 'রবার ভুল করে ফেলে আসায় সমস্যায় পড়া বন্ধুকে আমার অতিরিক্ত রবারটি ধার দিয়েছিলাম।'
        },
        {
          ja: '駅前のレンタルショップでは、自転車の貸し出しをしていますよ।',
          romaji: 'Ekimae no rentaru shoppu de wa, jitensha no kashidashi o shite imasu yo.',
          meaningEn: 'The rental shop in front of the station lends out bicycles.',
          meaningBn: 'স্টেশনের সামনে ভাড়ার দোকানটি থেকে সাইকেল সাময়িক ব্যবহারের জন্য ভাড়া নেওয়া যায়।'
        }
      ],
      tamagoTip: {
        en: 'Top is change/transform (代) and bottom is money/shell (貝): swapping out money or shell resources to let someone use them temporarily.',
        bn: 'ওপরে পরিবর্তন বা বদল (代) আর নিচে মুদ্রা বা কড়ি (貝) - টাকা বা জিনিস হাতবদলের মাধ্যমে কাউকে সাময়িক ব্যবহারের সুযোগ বা ধার দেওয়া।'
      }
    },
    {
      id: 'l26-osu',
      kanji: '押',
      emoji: '🔘',
      strokeCount: 8,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'オウ', romaji: 'ou' }],
        kunyomi: [{ kana: 'お.す', romaji: 'o.su' }, { kana: 'お.さえる', romaji: 'o.saeru' }]
      },
      meanings: {
        en: 'Push, press, stamp, seal',
        bn: 'ধাক্কা দেওয়া, বোতাম টেপা, সিল মারা'
      },
      vocab: [
        { kanji: '押す', kana: 'おす', romaji: 'osu', meaningEn: 'to push, press', meaningBn: 'ঠেলা দেওয়া বা টেপা', tag: 'N5' },
        { kanji: '押し入れ', kana: 'おしいれ', romaji: 'oshiire', meaningEn: 'closet (Japanese style sliding)', meaningBn: 'তাতামি স্টাইলের বড় দেয়াল আলমারি', tag: 'N4' },
        { kanji: '押印', kana: 'おういん', romaji: 'ouin', meaningEn: 'stamping a seal', meaningBn: 'সিল বা স্বাক্ষর স্ট্যাম্প বসানো', tag: 'N3' },
        { kanji: '押さえる', kana: 'おさえる', romaji: 'osaeru', meaningEn: 'to hold down, grasp', meaningBn: 'চেপে ধরা', tag: 'N3' },
        { kanji: '押しボタン', kana: 'おしボタン', romaji: 'oshibotan', meaningEn: 'push button', meaningBn: 'পুশ বাটন', tag: 'N4' }
      ],
      sentences: [
        {
          ja: 'バスから降りたいときは、壁にあるボタンを押してくださいね।',
          romaji: 'Basu kara oritai toki wa, kabe ni aru botan o oshite kudasai ne.',
          meaningEn: 'When you want to get off the bus, please press the button on the wall.',
          meaningBn: 'বাস থেকে নামতে চাইলে দেয়ালে থাকা স্টপ বোতামটি চেপে ধরবেন।'
        },
        {
          ja: '日本では大切な契約の書類に、名前の隣にハンコを押します।',
          romaji: 'Nihon de wa taisetsu na keiyaku no shorui ni, namae no tonari ni hanko o oshimasu.',
          meaningEn: 'In Japan, we stamp a seal (Hanko) next to the name on important contract documents.',
          meaningBn: 'জাপানে গুরুত্বপূর্ণ চুক্তির কাগজপত্রে সই করার পাশাপাশি নামের পাশে হাক্কো (সিল) মারতে হয়।'
        }
      ],
      tamagoTip: {
        en: 'Left side is hand (扌) and right side is shell/shield shape (甲): pushing with your hand against a shield or gate boundary.',
        bn: 'বামে হাত (扌) আর ডানে শক্ত কভার বা বর্ম (甲) - হাত দিয়ে শক্ত জিনিসের ওপর শক্তি প্রয়োগ বা ধাক্কা দেওয়া।'
      }
    },

    // --- Read Only (読める: 燃える, 缶) ---
    {
      id: 'l26-moeru',
      kanji: '燃',
      emoji: '🔥',
      strokeCount: 16,
      jlpt: 'N3',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'ネン', romaji: 'nen' }],
        kunyomi: [{ kana: 'も.える', romaji: 'mo.eru' }]
      },
      meanings: {
        en: 'Burn, catch fire',
        bn: 'জ্বলানো, দাহ্য, পোড়ানো'
      },
      vocab: [
        { kanji: '燃えるゴミ', kana: 'もえるごみ', romaji: 'moeru gomi', meaningEn: 'burnable garbage', meaningBn: 'দাহ্য বা পোড়ানোর যোগ্য ময়লা', tag: 'N3' },
        { kanji: '燃料', kana: 'ねんりょう', romaji: 'nenryou', meaningEn: 'fuel', meaningBn: 'জ্বালানি', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'この地域では、燃えるゴミは毎週火曜日と金曜日に回収します।',
          romaji: 'Kono chiiki de wa, moeru gomi wa maishuu kayoubi to kinyoubi ni kaishuu shimasu.',
          meaningEn: 'In this community, burnable garbage is collected every Tuesday and Friday.',
          meaningBn: 'আমাদের এলাকায় পোড়ানোর যোগ্য আবর্জনা প্রতি সপ্তাহের মঙ্গলবার ও শুক্রবার নেওয়া হয়।'
        }
      ],
      tamagoTip: {
        en: 'Fire (火) on the left and container with cooking meat (然) on the right, representing burning or fire combustion.',
        bn: 'বামে আগুন (火) আর ডানে প্রাকৃতিক জ্বলন বা সেদ্ধ করা (然), যা আগুনে কোনো জিনিস পুড়ে ছাই হওয়া প্রকাশ করে।'
      }
    },
    {
      id: 'l26-kan',
      kanji: '缶',
      emoji: '🥫',
      strokeCount: 6,
      jlpt: 'N3',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'カン', romaji: 'kan' }],
        kunyomi: []
      },
      meanings: {
        en: 'Can, tin, metal container',
        bn: 'টিন বা মেটালের ক্যান'
      },
      vocab: [
        { kanji: '空き缶', kana: 'あきかん', romaji: 'akikan', meaningEn: 'empty can', meaningBn: 'খালি ক্যান (টিন)', tag: 'N3' },
        { kanji: '缶ジュース', kana: 'かんジュース', romaji: 'kan juusu', meaningEn: 'canned juice', meaningBn: 'ক্যানের জুস', tag: 'N3' },
        { kanji: '缶詰', kana: 'かんづめ', romaji: 'kanzume', meaningEn: 'canned food', meaningBn: 'ক্যানজাত খাবার বা টিনজাত খাদ্য', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'ジュースを飲んだ後の空き缶は、資源ゴミとしてリサイクルします।',
          romaji: 'Juusu o nonda ato no akikan wa, shigen gomi to shite risaikuru shimasu.',
          meaningEn: 'The empty can after drinking juice is recycled as resource garbage.',
          meaningBn: 'জুস খাওয়ার পর ক্যানটি ফেলে না দিয়ে রিসাইকেলের জন্য মেটাল বিন বা ড্রামে ফেলা উচিত।'
        }
      ],
      tamagoTip: {
        en: 'A pictograph of a clay vessel or metal vessel used to hold food or drinks.',
        bn: 'এটি তরল বা খাবার রাখার প্রাচীন ধাতব কন্টেইনার বা পাত্রের অবয়ব।'
      }
    },

    // --- Visual Recognition (見て、分かる: 資源ごみ, 駐輪場) ---
    {
      id: 'l26-shigengomi',
      kanji: '資源ごみ',
      emoji: '♻️',
      strokeCount: 13 + 12 + 4, // 資 + 源 + ごみ
      jlpt: 'N3',
      category: 'visual_recognition',
      readings: {
        onyomi: [{ kana: 'シゲンごみ', romaji: 'shigen gomi' }],
        kunyomi: []
      },
      meanings: {
        en: 'Recyclable garbage, resources trash',
        bn: 'পুনর্ব্যবহারযোগ্য বর্জ্য বা রিসাইকেল ময়লা'
      },
      vocab: [
        { kanji: '資源ごみ', kana: 'しげんごみ', romaji: 'shigen gomi', meaningEn: 'recyclable trash', meaningBn: 'পুনর্ব্যবহারযোগ্য বর্জ্য', tag: 'N3' },
        { kanji: '資源', kana: 'しげん', romaji: 'shigen', meaningEn: 'natural resources', meaningBn: 'প্রাকৃতিক সম্পদ', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '新聞紙やペットボトルは資源ごみとして綺麗に洗ってから出します।',
          romaji: 'Shinbunshi ya pettobotoru wa shigen gomi to shite kirei ni aratte kara dashimasu.',
          meaningEn: 'Newspapers and plastic bottles are sorted as recyclable waste after washing cleanly.',
          meaningBn: 'খবরের কাগজ বা প্লাস্টিকের বোতলগুলো ভালো করে ধুয়ে রিসাইকেল ময়লা হিসেবে আলাদা ঝুড়িতে ফেলতে হয়।'
        }
      ],
      tamagoTip: {
        en: '資 (investment/capital) + 源 (source/well) = Resource material that can be utilized repeatedly.',
        bn: '資 (পুঁজি বা সম্পদ) + 源 (উৎস) = সম্পদযোগ্য আবর্জনা যা পুনরায় ব্যবহার উপযোগী করা যায়।'
      }
    },
    {
      id: 'l26-chuurinjou',
      kanji: '駐輪場',
      emoji: '🚲',
      strokeCount: 15 + 15 + 12, // 駐 + 輪 + 場
      jlpt: 'N3',
      category: 'visual_recognition',
      readings: {
        onyomi: [{ kana: 'チュウリンジョウ', romaji: 'chuurinjou' }],
        kunyomi: []
      },
      meanings: {
        en: 'Bicycle parking lot',
        bn: 'সাইকেল রাখার পার্কিং স্থান'
      },
      vocab: [
        { kanji: '駐輪場', kana: 'ちゅうりんじょう', romaji: 'chuurinjou', meaningEn: 'bicycle parking area', meaningBn: 'সাইকেল পার্কিং', tag: 'N3' },
        { kanji: '駐車場', kana: 'ちゅうしゃじょう', romaji: 'chuushajou', meaningEn: 'car parking lot', meaningBn: 'গাড়ি পার্কিং', tag: 'N4' },
        { kanji: '車輪', kana: 'しゃりん', romaji: 'sharin', meaningEn: 'wheel', meaningBn: 'চাকা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '駅の周りに自転車を止めると迷惑なので、必ず駐輪場に止めてください।',
          romaji: 'Eki no mawari ni jitensha o tomeru to meiwaku na node, kanarazu chuurinjou ni tomete kudasai.',
          meaningEn: 'Parking bicycles around the station causes trouble, so please make sure to park them in the bicycle parking lot.',
          meaningBn: 'স্টেশনের যত্রতত্র সাইকেল রাখলে লোকজনের চলাচলে বিঘ্ন ঘটে, তাই অবশ্যই সাইকেল স্ট্যান্ডে পার্ক করবেন।'
        }
      ],
      tamagoTip: {
        en: '駐 (stay/stop horse) + 輪 (wheel/ring) + 場 (place) = A place to stay and park wheeled vehicles (bicycles).',
        bn: '駐 (ঘোড়া বা বাহন থামানো) + 輪 (চাকা) + 場 (স্থান) = চাকাযুক্ত দ্বিচক্র বাহন বা সাইকেল পার্কিংয়ের নির্ধারিত জায়গা।'
      }
    }
  ]
};
