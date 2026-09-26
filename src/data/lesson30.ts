import { Lesson } from '../types/kanji';

export const lesson30: Lesson = {
  id: 30,
  number: 30,
  titleJa: 'ニュースをチェック',
  titleRomaji: 'Nyuusu o Chekku',
  titleBn: 'খবর চেক করা (Checking the News - Crime, Events & Cognition)',
  titleEn: 'Checking the News (Crime, Events & Cognition)',
  descriptionBn: 'জাপানি সংবাদপত্র ও খবরের কাগজের বিভিন্ন অপরাধমূলক ঘটনা, তদন্ত, সংখ্যা হ্রাস-বৃদ্ধি এবং চিন্তাভাবনা সংক্রান্ত অত্যন্ত জরুরি কান্জি (漢, 字, 署, 寒, 去, 質, 同, 思, 考, 銀, 悪)।',
  descriptionEn: 'Essential Kanji for reading Japanese news, covering crime, police stations, temperature drops, statistics fluctuation, and analytical thinking.',
  kanjiList: [
    // --- Main Kanji (書ける: 漢, 字, 署, 寒, 去, 質, 同, 思, 考, 銀, 悪) ---
    {
      id: 'l30-kan',
      kanji: '漢',
      emoji: '💮',
      strokeCount: 13,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'カン', romaji: 'kan' }],
        kunyomi: []
      },
      meanings: {
        en: 'China, Han dynasty, Sino-, Chinese character',
        bn: 'চীন, সাইনো-, হান রাজবংশ, কান্জি'
      },
      vocab: [
        { kanji: '漢字', kana: 'かんじ', romaji: 'kanji', meaningEn: 'Kanji (Chinese characters)', meaningBn: 'কান্জি বা জাপানি লিখন পদ্ধতির চীনা অক্ষর', tag: 'N5' },
        { kanji: '漢方薬', kana: 'かんぽうやく', romaji: 'kanpouyakū', meaningEn: 'Chinese herbal medicine', meaningBn: 'ঐতিহ্যবাহী চীনা ভেষজ ওষুধ', tag: 'N3' },
        { kanji: '漢和辞典', kana: 'かんわじてん', romaji: 'kanwajiten', meaningEn: 'Kanji-Japanese dictionary', meaningBn: 'কান্জি-জাপানি অভিধান', tag: 'N3' },
        { kanji: '痴漢', kana: 'ちかん', romaji: 'chikan', meaningEn: 'groper, molester', meaningBn: 'অনভিপ্রেত স্পর্শকারী বা ইভটিজার', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '日本の新聞をスラスラ読むためには、もっとたくさんの漢字を覚える必要があります।',
          romaji: 'Nihon no shinbun o surasura yomu tame ni wa, motto takusan no kanji o oboeru hitsuyou ga arimasu.',
          meaningEn: 'To read Japanese newspapers fluently, you need to memorize many more Kanji.',
          meaningBn: 'জাপানি সংবাদপত্র গড়গড় করে পড়ার জন্য আমাদের আরও অনেক বেশি কান্জি (漢字) মুখস্থ করার প্রয়োজন রয়েছে।'
        },
        {
          ja: '風邪の引き始めには、体に優しい漢方薬を飲むのが効果的ですよ।',
          romaji: 'Kaze no hikihajime ni wa, karada ni yasashii kanpouyaku o nomu no ga koukateki desu yo.',
          meaningEn: 'At the onset of a cold, it is effective to drink gentle Chinese herbal medicine.',
          meaningBn: 'ঠান্ডা লাগার শুরুতে শরীরের জন্য মৃদু ঐতিহ্যবাহী চীনা ভেষজ ওষুধ (漢方薬) খাওয়া বেশ উপকারী।'
        }
      ],
      tamagoTip: {
        en: 'The left side is water (氵) and the right side is a clay tower or high building, originally referring to the Han river basin in China.',
        bn: 'বামে পানির ফোঁটা (氵) আর ডানে একটি বড় মাটির স্তূপ বা টাওয়ার। এটি চীনের হান নদীর তীরবর্তী বসতিকে নির্দেশ করে, যেখান থেকে কান্জির উৎপত্তি।'
      }
    },
    {
      id: 'l30-ji',
      kanji: '字',
      emoji: '✍️',
      strokeCount: 6,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ジ', romaji: 'ji' }],
        kunyomi: [{ kana: 'あざ', romaji: 'aza' }]
      },
      meanings: {
        en: 'character, letter, word, section of village',
        bn: 'বর্ণ, অক্ষর, হরফ, গ্রামের বিভাগ'
      },
      vocab: [
        { kanji: '文字', kana: 'もじ', romaji: 'moji', meaningEn: 'character, letter', meaningBn: 'অক্ষর বা হরফ', tag: 'N4' },
        { kanji: '数字', kana: 'すうじ', romaji: 'suuji', meaningEn: 'number, numeral', meaningBn: 'সংখ্যা বা অঙ্ক', tag: 'N4' },
        { kanji: '名字', kana: 'みょうじ', romaji: 'myouji', meaningEn: 'surname, family name', meaningBn: 'বংশের নাম বা পদবি', tag: 'N4' },
        { kanji: '赤字', kana: 'あかじ', romaji: 'akaji', meaningEn: 'deficit, financial loss', meaningBn: 'বাজেট লোকসান বা ঘাটতি', tag: 'N3' },
        { kanji: 'ローマ字', kana: 'ろーまじ', romaji: 'roomaji', meaningEn: 'Roman letters, Romaji', meaningBn: 'রোমান হরফ বা রোমাজি', tag: 'N5' }
      ],
      sentences: [
        {
          ja: '留学生の皆さんは、ひらがなやカタカナだけでなく、漢字の文字も美しく書けますね।',
          romaji: 'Ryuugakusei noみなさんは、hiragana ya katakana dake naku, kanji no moji mo utsukushii kakemasu ne.',
          meaningEn: 'All international students can write not only Hiragana and Katakana but also Kanji characters beautifully.',
          meaningBn: 'বিদেশি শিক্ষার্থীরা হিরাগানা ও কাতাকানার পাশাপাশি কান্জি অক্ষরগুলোও (文字) অত্যন্ত চমৎকারভাবে লিখতে পারেন!'
        },
        {
          ja: 'ガス代や電気代が高くなって、今月の我が家の家計は赤字になってしまいました।',
          romaji: 'Gasudai ya denkidai ga takaku natte, kongetsu no wagaya no kakei wa akaji ni natte shimaimashita.',
          meaningEn: 'As gas and electricity bills became expensive, our family budget went into the red this month.',
          meaningBn: 'গ্যাস ও বিদ্যুতের দাম বেড়ে যাওয়ায় এই মাসে আমাদের ঘরের বাজেট ঘাটতি বা লোকসানের (赤字) মুখে পড়েছে।'
        }
      ],
      tamagoTip: {
        en: 'A child (子) under a roof (宀): a child inside a house learning to write their characters and letters.',
        bn: 'একটি ছাদের (宀) নিচে মিষ্টি শিশু (子)। ঘরের ভেতর ছোট্ট খুকুমণি বসে বসে পরম আদরে বর্ণমালা বা অক্ষর (字) লিখতে শিখছে।'
      }
    },
    {
      id: 'l30-sho',
      kanji: '署',
      emoji: '🚓',
      strokeCount: 13,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ショ', romaji: 'sho' }],
        kunyomi: []
      },
      meanings: {
        en: 'government office, station, sign, signature',
        bn: 'सरकारी দপ্তর, থানা, সই বা স্বাক্ষর করার স্থান'
      },
      vocab: [
        { kanji: '警察署', kana: 'けいさつしょ', romaji: 'keisatsusho', meaningEn: 'police station', meaningBn: 'থানা বা পুলিশ স্টেশন', tag: 'N4' },
        { kanji: '消防署', kana: 'しょうぼうしょ', romaji: 'shoubousho', meaningEn: 'fire station', meaningBn: 'ফায়ার স্টেশন বা দমকল অফিস', tag: 'N4' },
        { kanji: '署名', kana: 'しょめい', romaji: 'shomei', meaningEn: 'signature, signing', meaningBn: 'দস্তখত বা সই', tag: 'N3' },
        { kanji: '税務署', kana: 'ぜいむしょ', romaji: 'zeimusho', meaningEn: 'tax office', meaningBn: 'কর অফিস বা ইনকাম ট্যাক্স অফিস', tag: 'N3' },
        { kanji: '部署', kana: 'ぶしょ', romaji: 'busho', meaningEn: 'department, post', meaningBn: 'অফিসের বিভাগ বা নির্ধারিত কর্মস্থল', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '駅前で財布を盗まれたので、すぐに交番ではなく近くの警察署へ届け出ました।',
          romaji: 'Ekimae de saifu o nusumareta node, sugu ni kouban dewa naku chikaku no keisatsusho e todokedemashita.',
          meaningEn: 'Since my wallet was stolen in front of the station, I immediately reported it to the nearby police station instead of a police box.',
          meaningBn: 'স্টেশনের সামনে আমার মানিব্যাগ চুরি হওয়ায় আমি ছোট পুলিশ বক্সে না গিয়ে সরাসরি বড় থানায় (警察署) ডায়েরি করলাম।'
        },
        {
          ja: 'クレジットカードの申請書に、ペンで本人の署名を入れてください、と頼まれました।',
          romaji: 'Kurejitto ka_do no shinseisho ni, pen de honnin no shomei o irete kudasai, to tanomaremashita.',
          meaningEn: 'I was asked to put my signature in pen on the credit card application form.',
          meaningBn: 'ক্রেডিট কার্ডের আবেদনপত্রে কলম দিয়ে আমার নিজের স্বাক্ষর (署名) করতে অনুরোধ করা হয়েছে।'
        }
      ],
      tamagoTip: {
        en: 'The top part is a net (罒) and the bottom is a person in charge (者): using a net to gather responsible personnel, forming a government department/office.',
        bn: 'ওপরে জালের প্রতীক (罒) আর নিচে যোগ্য ব্যক্তি বা প্রতিনিধি (者)। দেশের দায়িত্বপ্রাপ্ত সুশৃঙ্খল ব্যক্তিদের এক ছাদের নিচে বসানোর সরকারি কার্যালয় বা থানা।'
      }
    },
    {
      id: 'l30-samu',
      kanji: '寒',
      emoji: '❄️',
      strokeCount: 12,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'カン', romaji: 'kan' }],
        kunyomi: [{ kana: 'さむ.い', romaji: 'samu.i' }]
      },
      meanings: {
        en: 'cold (weather)',
        bn: 'ঠান্ডা, শীত বা হিম (আবহাওয়া)'
      },
      vocab: [
        { kanji: '寒い', kana: 'さむい', romaji: 'samui', meaningEn: 'cold (air/weather)', meaningBn: 'ঠান্ডা', tag: 'N5' },
        { kanji: '寒気', kana: 'かんき', romaji: 'kanki', meaningEn: 'cold air, chill', meaningBn: 'হিমশীতল তীব্র বাতাস বা শরীরে কাঁপুনি', tag: 'N3' },
        { kanji: '防寒着', kana: 'ぼうかんぎ', romaji: 'boukangi', meaningEn: 'winter clothing, cold protection wear', meaningBn: 'শীতের গরম কাপড় বা সোয়েটার', tag: 'N3' },
        { kanji: '寒冷', kana: 'かんれい', romaji: 'kanrei', meaningEn: 'cold, freezing', meaningBn: 'বরফশীতল বা অতিশয় ঠান্ডা এলাকা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '東北地方の冬は非常に寒いので、防寒着をしっかり準備したほうが良いですよ।',
          romaji: 'Touhoku chihou no fuyu wa hijou ni samui node, boukangi o shikkari junbi shita hou ga yoi desu yo.',
          meaningEn: 'The winter in Touhoku region is extremely cold, so it is better to prepare proper cold-protection clothing.',
          meaningBn: 'তৌহুকু অঞ্চলের শীতকাল মারাত্মক রকমের ঠান্ডা (寒い) হয়ে থাকে, তাই আগেভাগেই গরম সোয়েটার জোগাড় করে রাখা বুদ্ধিমানের কাজ হবে।'
        },
        {
          ja: '今朝の天気予報によると、強い寒波が日本列島に近づいているそうです।',
          romaji: 'Kesa no tenki yohou ni yoru to, tsuyoi kanpa ga nihon rettou ni chikazuite iru sou desu.',
          meaningEn: 'According to this morning’s weather forecast, a strong cold wave is approaching the Japanese archipelago.',
          meaningBn: 'আজ সকালের আবহাওয়ার খবর অনুযায়ী, একটি তীব্র শৈত্যপ্রবাহ (寒波) জাপানের দিকে ধেয়ে আসছে।'
        }
      ],
      tamagoTip: {
        en: 'A house (宀) with straw/mats and a person (人) inside, with ice crystals (冫) at the bottom: huddling in a house on frozen ice.',
        bn: 'একটি ছাদের (宀) নিচে খড়কুটো আঁকড়ে ধরে থাকা একজন মানুষ, যার ঠিক নিচে তীব্র বরফ বা হিমের স্ফটিক (冫)। এটি শীতকালের হাড় কাঁপানো ঠান্ডার চিত্র।'
      }
    },
    {
      id: 'l30-saru',
      kanji: '去',
      emoji: '🚪',
      strokeCount: 5,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'キョ', romaji: 'kyo' }, { kana: 'コ', romaji: 'ko' }],
        kunyomi: [{ kana: 'さ.る', romaji: 'sa.ru' }]
      },
      meanings: {
        en: 'gone, past, leave, depart',
        bn: 'বিগত, অতীত, চলে যাওয়া, বিদেয় হওয়া'
      },
      vocab: [
        { kanji: '去年', kana: 'きょねん', romaji: 'kyonen', meaningEn: 'last year', meaningBn: 'গত বছর', tag: 'N5' },
        { kanji: '過去', kana: 'かこ', romaji: 'kako', meaningEn: 'the past, history', meaningBn: 'অতীত কাল', tag: 'N4' },
        { kanji: '去る', kana: 'さる', romaji: 'saru', meaningEn: 'to leave, depart', meaningBn: 'ছেড়ে চলে যাওয়া', tag: 'N3' },
        { kanji: '死去する', kana: 'しきょする', romaji: 'shikyosuru', meaningEn: 'to pass away, die', meaningBn: 'মারা যাওয়া বা পরলোকগমন করা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '去年は仕事が忙しくて帰国できませんでしたが、今年は絶対に帰りたいです।',
          romaji: 'Kyonen wa shigoto ga isogashikute kikoku dekimasen deshita ga, koto_shi wa zettai ni kaeritai desu.',
          meaningEn: 'Last year I was busy with work and couldn’t return home, but I absolutely want to go back this year.',
          meaningBn: 'গত বছর (去年) কাজের তীব্র ব্যস্ততার কারণে দেশে ফিরতে পারিনি, তবে এই বছর অবশ্যই ফিরতে চাই।'
        },
        {
          ja: 'その事件から十年の歳月が去り、街の様子もずいぶん変わりました।',
          romaji: 'Sono jiken kara juunen no saigetsu ga sari, machi no yousu mo zuibun kawarimashita.',
          meaningEn: 'Ten years of time have passed since that incident, and the city’s appearance has changed a lot.',
          meaningBn: 'সেই ঘটনার পর থেকে ১০টি বছর চলে গেছে (去り), আর এই শহরের চেহারাও এখন অনেকখানি বদলে গেছে।'
        }
      ],
      tamagoTip: {
        en: 'Soil (土) on top and an open container or mouth at the bottom, originally showing a lid being removed or discarded from a vessel.',
        bn: 'ওপরে মাটি (土) আর নিচে ঢাকনার মুখ। একটি পাত্র থেকে পুরোনো ধুলাবালি ঝেড়ে ফেলে বা বর্জন করে দূরে চলে যাওয়া।'
      }
    },
    {
      id: 'l30-shitsu',
      kanji: '質',
      emoji: '❓',
      strokeCount: 15,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'シツ', romaji: 'shitsu' }, { kana: 'シチ', romaji: 'shichi' }],
        kunyomi: []
      },
      meanings: {
        en: 'quality, substance, inquiry, pawn',
        bn: 'গুণগত মান, বৈশিষ্ট্য, প্রশ্ন, জিম্মা বা বন্ধক'
      },
      vocab: [
        { kanji: '質問する', kana: 'しつもんする', romaji: 'shitsumonsuru', meaningEn: 'to ask a question', meaningBn: 'প্রশ্ন বা জিজ্ঞাসা করা', tag: 'N5' },
        { kanji: '品質', kana: 'ひんしつ', romaji: 'hinshitsu', meaningEn: 'quality of products', meaningBn: 'পণ্যের মান বা কোয়ালিটি', tag: 'N4' },
        { kanji: '人質', kana: 'ひとじち', romaji: 'hitojichi', meaningEn: 'hostage', meaningBn: 'অপহৃত মানুষ বা জিম্মি', tag: 'N3' },
        { kanji: '質屋', kana: 'しちや', romaji: 'shichiya', meaningEn: 'pawnshop', meaningBn: 'বন্ধকী দোকান', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '講義の内容で分からないことがあれば、遠慮なく先生に質問してくださいね।',
          romaji: 'Kougi no naiyou de wakaranai koto ga areba, enryo naku sensei ni shitsumon shite kudasai ne.',
          meaningEn: 'If there is anything you don’t understand in the lecture, please don’t hesitate to ask the teacher a question.',
          meaningBn: 'লেকচারের ভেতর কোনো বিষয় বুঝতে সমস্যা হলে দ্বিধা না করে সরাসরি শিক্ষককে প্রশ্ন (質問) করবেন।'
        },
        {
          ja: 'ニュースによると、犯人は人質を連れて車でどこかへ逃げ去ったそうです।',
          romaji: 'Nyu_su ni yoru to, hannin wa hitojichi o tsurete kuruma de dokoka e nigesatta sou desu.',
          meaningEn: 'According to the news, the criminal reportedly took hostages and fled somewhere by car.',
          meaningBn: 'খবরের রিপোর্ট অনুযায়ী, অপরাধী ব্যক্তি কাস্টমারদের জিম্মি (人質) বানিয়ে গাড়িতে করে কোথাও পালিয়ে গেছে।'
        }
      ],
      tamagoTip: {
        en: 'Two axes/instruments (斤 + 斤) on top and money/shell (貝) at the bottom, representing evaluated collateral or quality of items.',
        bn: 'ওপরে দুটি কুড়াল বা দাঁড়িপাল্লা (斤斤) আর নিচে মুদ্রা বা কড়ি (貝)। কোনো দামি কড়ি বা রত্ন নিখুঁত কুড়াল দিয়ে কেটে এর আসল মান বা কোয়ালিটি যাচাই করা।'
      }
    },
    {
      id: 'l30-onaji',
      kanji: '同',
      emoji: '♊',
      strokeCount: 6,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ドウ', romaji: 'dou' }],
        kunyomi: [{ kana: 'おな.じ', romaji: 'ona.ji' }]
      },
      meanings: {
        en: 'same, identical, equal, agree',
        bn: 'একই, সমান, অভিন্ন, একমত হওয়া'
      },
      vocab: [
        { kanji: '同じ', kana: 'おなじ', romaji: 'onaji', meaningEn: 'same, identical', meaningBn: 'একই রকম', tag: 'N5' },
        { kanji: '同級生', kana: 'どうきゅうせい', romaji: 'doukyuusei', meaningEn: 'classmate', meaningBn: 'সহপাঠী বা ক্লাসের বন্ধু', tag: 'N4' },
        { kanji: '同時に', kana: 'どうじに', romaji: 'doujini', meaningEn: 'at the same time, simultaneously', meaningBn: 'একই সাথে বা যুগপৎ', tag: 'N3' },
        { kanji: '同意する', kana: 'どういする', romaji: 'douisuru', meaningEn: 'to agree, consent', meaningBn: 'সম্মতি প্রকাশ করা বা একমত হওয়া', tag: 'N3' },
        { kanji: '同僚', kana: 'どうりょう', romaji: 'douryou', meaningEn: 'colleague, coworker', meaningBn: 'অফিসের সহকর্মী', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '私たちは同じアパートに住んでいて、毎日一緒に自転車でアルバイト先へ行きます।',
          romaji: 'Watashitachi wa onaji apaato ni sundeite, mainichi issho ni jitensha de arubaitosaki e ikimasu.',
          meaningEn: 'We live in the same apartment and go to our part-time job together by bicycle every day.',
          meaningBn: 'আমরা একই (同じ) অ্যাপার্টমেন্টে থাকি এবং প্রতিদিন একসাথে সাইকেল চালিয়ে খণ্ডকালীন কাজের জায়গায় যাই।'
        },
        {
          ja: '駅前で事故と道路の工事が同時に発生して、車が全く動きません।',
          romaji: 'Ekimae de jiko to dourou no kouji ga douji ni hassei shite, kuruma ga mattaku ugokimasen.',
          meaningEn: 'An accident and road construction occurred simultaneously in front of the station, and cars aren’t moving at all.',
          meaningBn: 'স্টেশনের সামনে একই সাথে (同時に) দুর্ঘটনা ও রাস্তার কাজ শুরু হওয়ায় গাড়ি একদম নড়াচড়া করতে পারছে না।'
        }
      ],
      tamagoTip: {
        en: 'An outer frame (冂) with one (一) mouth (口) inside, representing a group of people speaking with one single voice (agreeing).',
        bn: 'একটি বড় সীমানার (冂) ভেতর এক (一) মুখে (口) সবাই কথা বলা। অর্থাৎ সবাই একসাথে একই সুরে একমত প্রকাশ করছে।'
      }
    },
    {
      id: 'l30-omou',
      kanji: '思',
      emoji: '💭',
      strokeCount: 9,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'シ', romaji: 'shi' }],
        kunyomi: [{ kana: 'おも.う', romaji: 'omo.u' }]
      },
      meanings: {
        en: 'think, feel, consider, believe',
        bn: 'মনে করা, চিন্তা করা, ধারণা করা'
      },
      vocab: [
        { kanji: '思う', kana: 'おもう', romaji: 'omou', meaningEn: 'to think, believe', meaningBn: 'মনে করা', tag: 'N5' },
        { kanji: '思い出す', kana: 'おもいだす', romaji: 'omoidasu', meaningEn: 'to recall, remember', meaningBn: 'মনে পড়া বা স্মৃতিচারণ করা', tag: 'N4' },
        { kanji: '思い出', kana: 'おもいで', romaji: 'omoide', meaningEn: 'memory, recollection', meaningBn: 'মধুর স্মৃতি', tag: 'N4' },
        { kanji: '不思議な', kana: 'ふしぎな', romaji: 'fushigi na', meaningEn: 'mysterious, wonderful', meaningBn: 'আশ্চর্যজনক বা রহস্যময়', tag: 'N4' },
        { kanji: '意思', kana: 'いし', romaji: 'ishi', meaningEn: 'will, intention', meaningBn: 'ইচ্ছা, সংকল্প বা অভিপ্রায়', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '日本語の漢字の勉強は少し大変だと思いますが、分かると非常に面白いですよ।',
          romaji: 'Nihongo no kanji no benkyou wa sukoshi taihen da to omoimasu ga, wakaru to hijou ni omoshiroi desu yo.',
          meaningEn: 'I think studying Japanese Kanji is a bit tough, but it’s extremely interesting when you understand it.',
          meaningBn: 'আমার মনে হয় (思います) জাপানি ভাষার কান্জি শেখা কিছুটা কঠিন, তবে একবার বুঝতে পারলে এটি ভীষণ চমৎকার!'
        },
        {
          ja: '富士山の山頂から見た美しい日の出の光景は、私の一生の良い思い出です।',
          romaji: 'Fujisan no sanchou kara mita utsukushii hinode no koukei wa, watashi no isshou no yoi omoide desu.',
          meaningEn: 'The beautiful view of the sunrise from the summit of Mt. Fuji is a great memory of my lifetime.',
          meaningBn: 'ফুজি পর্বতের চূড়া থেকে দেখা মনোরম সূর্যোদয়ের দৃশ্যটি আমার জীবনের অন্যতম সেরা মধুর স্মৃতি (思い出)।'
        }
      ],
      tamagoTip: {
        en: 'A brain/field (田) on top and heart (心) at the bottom: combining logic and feelings to think deeply about something.',
        bn: 'ওপরে মস্তিষ্ক বা চিন্তা করার মাঠ (田) আর নিচে কোমল মন (心)। মাথা ও মনের সমন্বয়ে কোনো গভীর বিষয় পরম স্নেহে চিন্তা করা।'
      }
    },
    {
      id: 'l30-kangaeru',
      kanji: '考',
      emoji: '💡',
      strokeCount: 6,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'コウ', romaji: 'kou' }],
        kunyomi: [{ kana: 'かんが.える', romaji: 'かんが.える' }]
      },
      meanings: {
        en: 'consider, think, contemplate, study',
        bn: 'গভীরভাবে ভাবা, চিন্তা করা, বিবেচনা করা, বুদ্ধি খাটানো'
      },
      vocab: [
        { kanji: '考える', kana: 'かんがえる', romaji: 'kangaeru', meaningEn: 'to think, consider', meaningBn: 'চিন্তা করা বা বুদ্ধি খাটানো', tag: 'N5' },
        { kanji: '考え', kana: 'かんがえ', romaji: 'kangae', meaningEn: 'thought, idea, opinion', meaningBn: 'ধারণা, মতামত বা পরিকল্পনা', tag: 'N4' },
        { kanji: '参考書', kana: 'さんこうしょ', romaji: 'sankousho', meaningEn: 'reference book, study aid', meaningBn: 'সহায়ক বই বা গাইড বই', tag: 'N3' },
        { kanji: '思考力', kana: 'しこうりょく', romaji: 'shikouryoku', meaningEn: 'thinking ability, critical thought', meaningBn: 'চিন্তাশক্তি বা বিশ্লেষণ ক্ষমতা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '将来の仕事や日本での進路について、焦らずにじっくり考えてから決めてくださいね।',
          romaji: 'Shourai no shigoto ya nihon de no shinro ni tsuite, azerazu ni jikkuri kangaete kara kimete kudasai ne.',
          meaningEn: 'Please think carefully and leisurely before deciding on your future job or career path in Japan.',
          meaningBn: 'ভবিষ্যতের ক্যারিয়ার বা জাপানে উচ্চশিক্ষার পরিকল্পনা নিয়ে তাড়াহুড়ো না করে গভীরভাবে চিন্তা (考えて) করে সিদ্ধান্ত নেবেন।'
        },
        {
          ja: '合格のためには、この試験の過去の試験参考書を繰り返し勉強することが大切です।',
          romaji: 'Goukaku no tame ni wa, kono shiken no kako no shiken sankousho o kurikaeshi benkyou suru koto ga taisetsu desu.',
          meaningEn: 'To pass, it is important to repeatedly study the past reference books of this exam.',
          meaningBn: 'পরীক্ষায় ভালো স্কোরের জন্য বিগত বছরের সহায়ক গাইড বইগুলো (参考書) বারবার অনুশীলন করা অত্যন্ত জরুরি।'
        }
      ],
      tamagoTip: {
        en: 'An old person with long hair (耂) and a curved path (丂) showing someone leaning on a cane while lost in deep contemplation.',
        bn: 'লাঠি হাতে দীর্ঘ কেশধারী এক প্রবীণ মানুষ (耂) গোলকধাঁধার মতো এক রাস্তায় (丂) দাঁড়িয়ে জীবন দর্শন নিয়ে গভীরভাবে ভাবছেন।'
      }
    },
    {
      id: 'l30-gin',
      kanji: '銀',
      emoji: '🏦',
      strokeCount: 14,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ギン', romaji: 'gin' }],
        kunyomi: []
      },
      meanings: {
        en: 'silver',
        bn: 'রূপা, রৌপ্য, রৌপ্যবর্ণ'
      },
      vocab: [
        { kanji: '銀行', kana: 'ぎんこう', romaji: 'ginkou', meaningEn: 'bank', meaningBn: 'ব্যাংক', tag: 'N5' },
        { kanji: '銀座', kana: 'ぎんざ', romaji: 'Ginza', meaningEn: 'Ginza (luxurious Tokyo district)', meaningBn: 'গিনজা (টোকিওর অত্যন্ত অভিজাত শপিং এলাকা)', tag: 'N4' },
        { kanji: '銀メダル', kana: 'ぎんめだる', romaji: 'gin medaru', meaningEn: 'silver medal', meaningBn: 'রৌপ্য পদক বা সিলভার মেডেল', tag: 'N4' },
        { kanji: '水銀', kana: 'すいぎん', romaji: 'suigin', meaningEn: 'mercury', meaningBn: 'পারদ বা মার্কারি', tag: 'N3' },
        { kanji: '銀世界', kana: 'ぎんせかい', romaji: 'ginsekai', meaningEn: 'snow-covered landscape (silver world)', meaningBn: 'বরফে ঢাকা চারপাশ যা দেখতে রূপালী মনে হয়', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'アルバイトの給料を安全に受け取るために、近くの銀行で新しい口座を開設しました।',
          romaji: 'Arubaito no kyuuryou o anzen ni uketoru tame ni, chikaku no ginkou de atarashii kouza o kaisetsu shimashita.',
          meaningEn: 'To receive my part-time job salary safely, I opened a new account at a nearby bank.',
          meaningBn: 'খখণ্ডকালীন কাজের বেতন নিরাপদে নেওয়ার জন্য আমি আমার বাড়ির পাশের ব্যাংকে (銀行) একটি নতুন অ্যাকাউন্ট খুললাম।'
        },
        {
          ja: '冬の北海道へ行くと、一面が雪で真っ白になった素晴らしい銀世界が広がっていますよ।',
          romaji: 'Fuyu no Hokkaido e iku to, ichimen ga yuki de masshiro ni natta subarashii ginsekai ga hirogatte imasu yo.',
          meaningEn: 'If you go to Hokkaido in winter, a wonderful snow-covered silver world stretches out everywhere.',
          meaningBn: 'শীতকালে হোক্কাইদোতে বেড়াতে গেলে তুষারপাতে চারপাশ একদম রূপালী আলোয় ঝলমলে বরফের এক অপরূপ স্বর্গরাজ্য (銀世界) দেখতে পাবেন।'
        }
      ],
      tamagoTip: {
        en: 'The left side is gold/metal (金) and the right side is tough/limit (艮): representing a metal that is slightly less precious but still extremely tough and valuable, which is silver.',
        bn: 'বামে সোনা বা ধাতু (金) আর ডানে শক্ত সীমানার প্রতীক (艮)। সোনার চেয়ে একটু কম মূল্যের কিন্তু চমৎকার চকচকে রৌপ্য বা রূপা।'
      }
    },
    {
      id: 'l30-warui',
      kanji: '悪',
      emoji: '👿',
      strokeCount: 11,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'アク', romaji: 'aku' }, { kana: 'オ', romaji: 'o' }],
        kunyomi: [{ kana: 'わる.い', romaji: 'waru.i' }]
      },
      meanings: {
        en: 'bad, evil, wrong, deteriorate',
        bn: 'খারাপ, ক্ষতিকর, মন্দ বা অনাকাঙ্ক্ষিত'
      },
      vocab: [
        { kanji: '悪い', kana: 'わるい', romaji: 'warui', meaningEn: 'bad, poor, undesirable', meaningBn: 'খারাপ বা মন্দ', tag: 'N5' },
        { kanji: '悪口', kana: 'わるぐち', romaji: 'waruguchi', meaningEn: 'slander, bad mouthing', meaningBn: 'কারো পেছনে নিন্দা করা বা গীবত গাওয়া', tag: 'N4' },
        { kanji: '最悪の', kana: 'さいあくの', romaji: 'saiaku no', meaningEn: 'the worst', meaningBn: 'সবচেয়ে খারাপ বা জঘন্যতম', tag: 'N3' },
        { kanji: '悪化する', kana: 'あっかする', romaji: 'akkasuru', meaningEn: 'to deteriorate, get worse', meaningBn: 'পরিস্থিতির অবণতি ঘটা বা বেগতিক হওয়া', tag: 'N3' },
        { kanji: '悪魔', kana: 'あくま', romaji: 'akuma', meaningEn: 'devil, demon', meaningBn: 'শয়তান বা ইবলিস', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '他人のいないところでその人の悪口を言うのは、お互いの信頼関係を悪くするのでやめましょう।',
          romaji: 'Tanin no inai tokoro de sono hito no waruguchi o iu no wa, otogai no shinrai kankei o waruku suru node yamemashou.',
          meaningEn: 'Stop talking bad about others behind their backs, as it ruins mutual trust.',
          meaningBn: 'কারো অনুপস্থিতিতে তার বদনাম করা বা গীবত গাওয়া (悪口) বন্ধ করা উচিত, কারণ এটি পারস্পরিক সম্পর্ক নষ্ট করে।'
        },
        {
          ja: '最近ニュースで報道されている通り、その国の経済状況はさらに悪化しているようです住民は困っています।',
          romaji: 'Saikin nyu_su de houdou sarete iru toori, sono kuni no keizai joukyou wa sarani akka shite iru you desu.',
          meaningEn: 'As recently reported in the news, that country’s economic situation seems to have deteriorated further.',
          meaningBn: 'আজকালকার খবরে যেমনটি দেখানো হচ্ছে, সেই দেশের অর্থনৈতিক অবস্থা দিন দিন আরও খারাপ বা অবনতির (悪化) দিকে যাচ্ছে।'
        }
      ],
      tamagoTip: {
        en: 'The top represents a crooked cross or bad hunchback structure (亜) and the bottom is the heart (心): an deformed structure or bad intention inside a heart, meaning bad or evil.',
        bn: 'ওপরে কুটিল বা আঁকাবাঁকা সংকীর্ণ মন (亜) আর নিচে কোমল মন (心)। মানুষের মনে কুটিলতা বা খারাপ উদ্দেশ্যে বাসা বাঁধলে তা মন্দ আচরণ তৈরি করে।'
      }
    },

    // --- Read Only (読める: 調べる, 増える, 減る, 過去) ---
    {
      id: 'l30-shiraberu',
      kanji: '調べる',
      emoji: '🔍',
      strokeCount: 15,
      jlpt: 'N4',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'チョウ', romaji: 'chou' }],
        kunyomi: [{ kana: 'しら.べる', romaji: 'shira.beru' }]
      },
      meanings: {
        en: 'to search, investigate, look up, check',
        bn: 'তদন্ত করা, খুঁজে দেখা বা অভিধানে অনুসন্ধান করা'
      },
      vocab: [
        { kanji: '調べる', kana: 'しらべる', romaji: 'shiraberu', meaningEn: 'to look up, investigate', meaningBn: 'অনুসন্ধান বা যাচাই করা', tag: 'N4' },
        { kanji: '調査する', kana: 'ちょうさする', romaji: 'chousasuru', meaningEn: 'to conduct a survey/investigation', meaningBn: 'জরিপ বা তদন্ত পরিচালনা করা', tag: 'N3' },
        { kanji: '体調', kana: 'たいちょう', romaji: 'taichou', meaningEn: 'physical condition, health state', meaningBn: 'শারীরিক অবস্থা বা স্বাস্থ্য', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '日本語の教科書で分からない単語があったときは、辞書を使って意味を詳しく調べます।',
          romaji: 'Nihongo no kyoukasho de wakaranai tango ga atta toki wa, jisho o tsukatte imi o kuwashiku shirabemasu.',
          meaningEn: 'When there is a word I don’t understand in the Japanese textbook, I look up its meaning in detail using a dictionary.',
          meaningBn: 'জাপানি বই পড়ার সময় কোনো কঠিন শব্দ সামনে এলে আমি ডিকশনারি দেখে এর অর্থটি ভালো করে খুঁজে বের করি (調べます)।'
        }
      ],
      tamagoTip: {
        en: 'Speech (言) on the left and cycle/surround (周) on the right: going around asking questions to investigate or check something thoroughly.',
        bn: 'বামে কথা (言) আর ডানে চারপাশ ঘুরে আসার প্রতীক (周)। সবার কাছে বিভিন্ন কথা জিজ্ঞেস করে পুরো এলাকার সত্য ঘটনা উদ্ঘাটন করা।'
      }
    },
    {
      id: 'l30-fueru',
      kanji: '増える',
      emoji: '📈',
      strokeCount: 14,
      jlpt: 'N4',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'ゾウ', romaji: 'zou' }],
        kunyomi: [{ kana: 'ふ.える', romaji: 'fu.eru' }, { kana: 'ふ.やす', romaji: 'fu.yasu' }]
      },
      meanings: {
        en: 'to increase, multiply (intransitive)',
        bn: 'বৃদ্ধি পাওয়া, সংখ্যায় বা পরিমাণে বাড়া'
      },
      vocab: [
        { kanji: '増える', kana: 'ふえる', romaji: 'fueru', meaningEn: 'to increase, grow', meaningBn: 'পরিমাণে বৃদ্ধি পাওয়া', tag: 'N4' },
        { kanji: '増加する', kana: 'ぞうかする', romaji: 'zoukasuru', meaningEn: 'to increase, rise', meaningBn: 'সংখ্যা বৃদ্ধি ঘটা', tag: 'N3' },
        { kanji: '増やす', kana: 'ふやす', romaji: 'fuyasu', meaningEn: 'to increase, add to (transitive)', meaningBn: 'কোনো কিছুর সংখ্যা বা পরিমাণ বাড়ানো', tag: 'N4' }
      ],
      sentences: [
        {
          ja: '最近、東京や大阪の観光地では、世界中から来た外国人観光客の数がどんどん増えています।',
          romaji: 'Saikin, Toukyou ya Oosaka no kankouchi de wa, sekaijuu kara kita gaikokujin kankoukyaku no kazu ga dondon fuete imasu.',
          meaningEn: 'Recently, the number of foreign tourists visiting tourist spots in Tokyo and Osaka is increasing rapidly.',
          meaningBn: 'আজকাল টোকিও বা ওসাকার দর্শনীয় স্থানগুলোতে বিশ্ব থেকে আসা বিদেশি পর্যটকদের সংখ্যা হু হু করে বাড়ছে (増えています)।'
        }
      ],
      tamagoTip: {
        en: 'Soil (土) on the left and stacked layers (曽) on the right: piling up soil layer upon layer, representing an increase in scale or amount.',
        bn: 'বামে মাটি (土) আর ডানে ধাপে ধাপে সাজানোর রূপক। জমির মাটি স্তরের পর স্তর সাজিয়ে মাটির টিলা ও আয়তন বৃদ্ধি করার চিত্র।'
      }
    },
    {
      id: 'l30-heru',
      kanji: '減る',
      emoji: '📉',
      strokeCount: 12,
      jlpt: 'N4',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'ゲン', romaji: 'gen' }],
        kunyomi: [{ kana: 'へ.る', romaji: 'he.ru' }, { kana: 'へ.らす', romaji: 'he.rasu' }]
      },
      meanings: {
        en: 'to decrease, diminish, cut down',
        bn: 'কমে যাওয়া, হ্রাস পাওয়া, পকেট খালি হওয়া'
      },
      vocab: [
        { kanji: '減る', kana: 'へる', romaji: 'heru', meaningEn: 'to decrease, drop', meaningBn: 'কমে যাওয়া', tag: 'N4' },
        { kanji: '減少する', kana: 'げんしょうする', romaji: 'genshousuru', meaningEn: 'to decrease, decline', meaningBn: 'পতন ঘটা বা সংখ্যায় হ্রাস পাওয়া', tag: 'N3' },
        { kanji: '減らす', kana: 'へらす', romaji: 'herasu', meaningEn: 'to reduce, decrease (transitive)', meaningBn: 'কোনো কিছুর পরিমাণ কমানো', tag: 'N4' }
      ],
      sentences: [
        {
          ja: '物価が高くなり生活費が上がったため、私の銀行の貯金残高が毎月少しずつ減っています困りました।',
          romaji: 'Bukka ga takaku nari seikatsuhi ga agatta tame, watashi no ginkou no chokin zandaka ga maitsu_tsu sukoshizutsu hette imasu.',
          meaningEn: 'Because prices became high and living expenses rose, my bank savings balance decreases bit by bit every month.',
          meaningBn: 'জিনিসপত্রের দাম বেড়ে যাওয়ায় জীবনযাত্রার খরচ অনেক বেড়ে গেছে, যার ফলে আমার জমানো টাকা প্রতি মাসে একটু একটু করে কমে (減っています) যাচ্ছে।'
        }
      ],
      tamagoTip: {
        en: 'Water drops (氵) on the left and a spear/sharp tool cutting on the right: water levels being chopped down, showing a drop or decrease.',
        bn: 'বামে পানির ফোঁটা (氵) আর ডানে কাটার ধারালো কাঁচি বা কুড়াল। গ্লাসের পানির স্তর বা সম্পদের পরিমাণ কেটে কমানোর দৃশ্য।'
      }
    },
    {
      id: 'l30-kako',
      kanji: '過去',
      emoji: '⏳',
      strokeCount: 12 + 5, // 過 + 去
      jlpt: 'N4',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'カコ', romaji: 'kako' }],
        kunyomi: []
      },
      meanings: {
        en: 'the past, previous times',
        bn: 'অতীত কাল, বিগত সময়'
      },
      vocab: [
        { kanji: '過去問', kana: 'かこもん', romaji: 'kakomon', meaningEn: 'past exam questions', meaningBn: 'বিগত বছরের পরীক্ষার প্রশ্ন', tag: 'N3' },
        { kanji: '過去形', kana: 'かこけい', romaji: 'kakokei', meaningEn: 'past tense (grammar)', meaningBn: 'অতীত কালের রূপ (ব্যাকরণ)', tag: 'N4' }
      ],
      sentences: [
        {
          ja: '過去の失敗について悔やむよりも、未来のために一生懸命に今日努力するほうがずっと大切です।',
          romaji: 'Kako no shippai ni tsuite kuyamu yori mo, mirai no tame ni isshoumeimei ni kyou doryoku suru hou ga zutto taisetsu desu.',
          meaningEn: 'Rather than regretting past failures, it is much more important to make efforts today for the future.',
          meaningBn: 'অতীতের (過去) ভুলগুলো নিয়ে হা-হুতাশ করার চেয়ে উজ্জ্বল ভবিষ্যতের জন্য আজ কঠোর পরিশ্রম করা অনেক বেশি জরুরি।'
        }
      ],
      tamagoTip: {
        en: '過 (to cross over/pass by) + 去 (departed/gone) = Time and memories that have completely crossed over and gone away forever.',
        bn: '過 (রাস্তা পেরিয়ে চলে যাওয়া) + 去 (চলে যাওয়া) = মানুষের জীবন থেকে যে সুবর্ণ বা বেদনার দিনগুলো চিরতরে হারিয়ে বিদায় নিয়েছে।'
      }
    },

    // --- Visual Recognition (見て、分かる: 殺す, 盗む, 逮捕) ---
    {
      id: 'l30-korosu',
      kanji: '殺す',
      emoji: '⚔️',
      strokeCount: 10,
      jlpt: 'N3',
      category: 'visual_recognition',
      readings: {
        onyomi: [{ kana: 'サツ', romaji: 'satsu' }],
        kunyomi: [{ kana: 'ころ.す', romaji: 'koro.su' }]
      },
      meanings: {
        en: 'to kill, murder, suppress',
        bn: 'হত্যা করা, জীবন কেড়ে নেওয়া, খুন করা'
      },
      vocab: [
        { kanji: '殺人事件', kana: 'さつじんじけん', romaji: 'satsujinjiken', meaningEn: 'murder case, homicide', meaningBn: 'হত্যাকাণ্ড বা খুনের ঘটনা', tag: 'N3' },
        { kanji: '自殺する', kana: 'じさつする', romaji: 'jisatsusuru', meaningEn: 'to commit suicide', meaningBn: 'আত্মহত্যা করা', tag: 'N3' },
        { kanji: '殺虫剤', kana: 'さっちゅうざい', romaji: 'sacchuuzai', meaningEn: 'insecticide, bug spray', meaningBn: 'কীটনাশক বা মশা মারার স্প্রে', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'テレビのニュースで、昨夜都心のアパートで起きた恐ろしい殺人事件の詳細が報道されていました।',
          romaji: 'Terebi no nyu_su de, sakuya toshin no apa_to de okita osoroshii satsujin jiken no shousai ga houdou saretewashimashita.',
          meaningEn: 'On TV news, details of a horrifying murder case that occurred in a downtown apartment last night were reported.',
          meaningBn: 'টেলিভিশনের খবরে গত রাতে শহরের একটি ফ্ল্যাটে ঘটে যাওয়া একটি ভয়ংকর হত্যাকাণ্ডের (殺人事件) রোমহর্ষক বিবরণ প্রচার করা হচ্ছিল।'
        }
      ],
      tamagoTip: {
        en: 'An ancient spear/weapon (殳) on the right striking down on a tree or living creature on the left, representing taking a life.',
        bn: 'বামে একটি গাছের বা জীবনের প্রতীক আর ডানে একটি ধারালো কুঠার বা আঘাতকারী অস্ত্র (殳)। অস্ত্র দিয়ে আঘাত করে জীবন চিরতরে কেড়ে নেওয়া।'
      }
    },
    {
      id: 'l30-nusumu',
      kanji: '盗む',
      emoji: '🥷',
      strokeCount: 11,
      jlpt: 'N4',
      category: 'visual_recognition',
      readings: {
        onyomi: [{ kana: 'トウ', romaji: 'tou' }],
        kunyomi: [{ kana: 'ぬす.む', romaji: 'nusu.mu' }]
      },
      meanings: {
        en: 'to steal, rob, plagiarize',
        bn: 'চুরি করা, অন্যের জিনিস না বলে নিয়ে নেওয়া'
      },
      vocab: [
        { kanji: '盗む', kana: 'ぬすむ', romaji: 'nusumu', meaningEn: 'to steal, rob', meaningBn: 'চুরি করা', tag: 'N4' },
        { kanji: '強盗', kana: 'ごうとう', romaji: 'goutou', meaningEn: 'robber, burglar, heist', meaningBn: 'ডাকাত বা সশস্ত্র ডাকাতি', tag: 'N3' },
        { kanji: '盗難', kana: 'とうなん', romaji: 'tounan', meaningEn: 'theft, robbery', meaningBn: 'চুরি হওয়া বা চুরির মামলা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'アパートの駐輪場に鍵をかけずに置いておいた大切な自転車が、何者かに盗まれてしまいました困りました।',
          romaji: 'Apa_to no chuurinjou ni kagi o kakezu ni oiteoita taisetsu na jitensha ga, nanimono ka ni nusumarete shimaimashita.',
          meaningEn: 'My precious bicycle parked without a lock in the apartment bicycle parking space was stolen by someone.',
          meaningBn: 'লক না করে রাখা আমার অতি শখের সাইকেলটি অ্যাপার্টমেন্টের গ্যারেজ থেকে চোর এসে চুরি (盗まれて) করে নিয়ে গেছে।'
        }
      ],
      tamagoTip: {
        en: 'An desire or saliva dripping (次) on top, and a plate or vessel (皿) at the bottom: looking at someone else’s plate and desiring to steal it.',
        bn: 'ওপরে তীব্র লালসা বা লোভের প্রতীক (次) আর নিচে সুন্দর থালাবাসন বা মাটির পাত্র (皿)। অন্যের সুন্দর সম্পদ বা পাত্র হাতানোর কুবুদ্ধি।'
      }
    },
    {
      id: 'l30-taiho',
      kanji: '逮捕',
      emoji: '🚨',
      strokeCount: 11 + 10, // 逮 + 捕
      jlpt: 'N3',
      category: 'visual_recognition',
      readings: {
        onyomi: [{ kana: 'タイホ', romaji: 'taiho' }],
        kunyomi: []
      },
      meanings: {
        en: 'arrest, apprehension, capture',
        bn: 'গ্রেপ্তার করা, পুলিশ কর্তৃক আটক হওয়া'
      },
      vocab: [
        { kanji: '逮捕する', kana: 'たいほする', romaji: 'taihosuru', meaningEn: 'to arrest', meaningBn: 'গ্রেপ্তার করা', tag: 'N3' },
        { kanji: '捕まる', kana: 'つかまる', romaji: 'tsukamaru', meaningEn: 'to be caught, arrested', meaningBn: 'পাকড়াও হওয়া বা পুলিশের জালে ধরা পড়া', tag: 'N4' }
      ],
      sentences: [
        {
          ja: '銀行から大金を盗んで車で高速道路を逃げていた強盗グループの犯人が、警察官によって全員スピード逮捕されました、安心しました।',
          romaji: 'Ginkou kara taikin o nusunde kuruma de kousokudouro o nigeteita goutou guru_pu no hannin ga, keisatsukan ni yotte zenin supi_do taiho saremashita.',
          meaningEn: 'The entire gang of robbers who stole a large sum of money from the bank and fled by car on the highway was quickly arrested by the police officers.',
          meaningBn: 'ব্যাংক থেকে টাকা ডাকাতি করে এক্সপ্রেসওয়ে দিয়ে পালানোর চেষ্টা করা ডাকাত দলের প্রত্যেক সদস্যকে পুলিশ ধাওয়া করে দ্রুত গ্রেপ্তার (逮捕) করেছে।'
        }
      ],
      tamagoTip: {
        en: '逮 (to pursue/chase down) + 捕 (to catch/seize with hands): pursuing a fleeing suspect and capturing them in handcuffs.',
        bn: '逮 (দৌড়ে পিছু তাড়া করা) + 捕 (হাত বাড়িয়ে জাপটে ধরা) = কোনো ফেরারি আসামির পেছনে ধাওয়া করে তাকে হ্যান্ডকাফ পরিয়ে আটক করা।'
      }
    }
  ]
};
