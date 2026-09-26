import { Lesson } from '../types/kanji';

export const lesson14: Lesson = {
  id: 14,
  number: 14,
  titleJa: '気をつけて！',
  titleRomaji: 'Ki o tsukete!',
  titleBn: 'সাবধান ও সতর্ক থাকুন! (প্রবেশ, প্রস্থান, ব্যবহার, নতুন-পুরোনো, মনোযোগ ও থামা)',
  titleEn: 'Watch Out! / Be Careful! (Enter, Exit, Hold, Stand, Use, Inside/During, New, Old, Caution & Stop)',
  descriptionBn: 'জাপানের জননিরাপত্তা, সাইনবোর্ড ও ট্রাফিক নিয়মের কাঞ্জি: প্রবেশ-প্রস্থান ও জিনিসপত্র (入, 出, 持, 立, 使, 用), অবস্থান ও গুণাবলী (中, 新, 古), সতর্কতা ও স্থগিতকরণ (注, 意, 止), পড়া ও বোঝার নির্দেশিকা যেমন নিষেধ (禁止), ট্রেন থেকে নামা (降りる) এবং গণপরিবহনের সাইন (最〜, 優先席, 禁煙)।',
  descriptionEn: 'Essential Kanji for safety, public signs, and transit rules in Japan: entering & carrying (入, 出, 持, 立, 使, 用), state & age (中, 新, 古), vigilance & stops (注, 意, 止), warning vocabulary (禁止, 降りる), and transit signage (最〜, 優先席, 禁煙).',
  kanjiList: [
    // --- MAIN KANJI (12 items) ---
    // 1. 入
    {
      id: 'l14-hai',
      kanji: '入',
      emoji: '🚪',
      strokeCount: 2,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ニュウ', romaji: 'nyuu' }
        ],
        kunyomi: [
          { kana: 'はい・る', romaji: 'hai-ru' },
          { kana: 'い・れる', romaji: 'i-reru' },
          { kana: 'い・る', romaji: 'i-ru' }
        ]
      },
      meanings: {
        en: 'enter, insert, put in, go into',
        bn: 'প্রবেশ করা, ঢোকা, ভেতরে রাখা, ভর্তি হওয়া'
      },
      vocab: [
        {
          kanji: '入る',
          kana: 'はいる',
          romaji: 'hairu',
          meaningEn: 'to enter, to go inside',
          meaningBn: 'প্রবেশ করা / ভেতরে ঢোকা',
          tag: 'Verb N5'
        },
        {
          kanji: '入れる',
          kana: 'いれる',
          romaji: 'ireru',
          meaningEn: 'to put in, to insert',
          meaningBn: 'ভেতরে রাখা / প্রবেশ করানো',
          tag: 'Verb N5'
        },
        {
          kanji: '入口',
          kana: 'いりぐち',
          romaji: 'iriguchi',
          meaningEn: 'entrance, way in',
          meaningBn: 'প্রবেশদ্বার / এন্ট্রি গেট',
          tag: 'Place N5'
        },
        {
          kanji: '入学',
          kana: 'にゅうがく',
          romaji: 'nyuugaku',
          meaningEn: 'entry to school, matriculation',
          meaningBn: 'স্কুলে বা বিশ্ববিদ্যালয়ে ভর্তি',
          tag: 'School N4'
        },
        {
          kanji: '気に入る',
          kana: 'きにいる',
          romaji: 'ki ni iru',
          meaningEn: 'to like, to take a fancy to',
          meaningBn: 'পছন্দ হওয়া / মনে ধরা',
          tag: 'Daily N4'
        },
        {
          kanji: '入院',
          kana: 'にゅういん',
          romaji: 'nyuuin',
          meaningEn: 'hospitalization',
          meaningBn: 'হাসপাতালে ভর্তি হওয়া',
          tag: 'Medical N4'
        }
      ],
      sentences: [
        {
          ja: '「危ないですから、黄色い線の内側に入ってお待ちください。」',
          romaji: '"Abunai desu kara, kiiroi sen no uchigawa ni haitte omachi kudasai."',
          meaningEn: '"Because it is dangerous, please step inside the yellow line and wait."',
          meaningBn: '"বিপদজনক হওয়ায় প্ল্যাটফর্মের হলুদ দাগের ভেতরের অংশে ঢুকে অপেক্ষা করুন।"'
        },
        {
          ja: '自動販売機に千円札を入れて、温かい缶コーヒーを買いました。',
          romaji: 'Jidouhanbaiki ni sen\'ensatsu o irete, atatakai kan koohii o kaimashita.',
          meaningEn: 'I inserted a 1,000 yen bill into the vending machine and bought a hot canned coffee.',
          meaningBn: 'ভেন্ডিং মেশিনে এক হাজার ইয়েনের নোট ঢুকিয়ে গরম ক্যান কফি কিনলাম।'
        },
        {
          ja: '四月から日本の大学に入学するので、日本語の勉強に励んでいます。',
          romaji: 'Shigatsu kara Nihon no daigaku ni nyuugaku suru node, Nihongo no benkyou ni hagende imasu.',
          meaningEn: 'Since I will enter a Japanese university in April, I am striving diligently in my Japanese studies.',
          meaningBn: 'এপ্রিল থেকে জাপানের বিশ্ববিদ্যালয়ে ভর্তি হব, তাই জাপানি ভাষা চর্চায় কঠোর পরিশ্রম করছি।'
        }
      ],
      tamagoTip: {
        bn: 'ভেতরের দিকে ঝুঁকে প্রবেশ করার অঙ্গভঙ্গি। প্রবেশ করা 入る (はいる) ও তোরণ 入口 (いりぐち)।',
        en: 'A person bending inward as they step through a doorway. Enter (入る) and entrance (入口).'
      }
    },

    // 2. 出
    {
      id: 'l14-de',
      kanji: '出',
      emoji: '📤',
      strokeCount: 5,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'シュツ', romaji: 'shutsu' },
          { kana: 'スイ', romaji: 'sui' }
        ],
        kunyomi: [
          { kana: 'で・る', romaji: 'de-ru' },
          { kana: 'だ・す', romaji: 'da-su' }
        ]
      },
      meanings: {
        en: 'exit, leave, take out, come out, attend',
        bn: 'বের হওয়া, বের করা, ত্যাগ করা, উপস্থিত থাকা'
      },
      vocab: [
        {
          kanji: '出る',
          kana: 'でる',
          romaji: 'deru',
          meaningEn: 'to exit, to leave, to come out',
          meaningBn: 'বের হওয়া / প্রস্থান করা',
          tag: 'Verb N5'
        },
        {
          kanji: '出す',
          kana: 'だす',
          romaji: 'dasu',
          meaningEn: 'to take out, to submit',
          meaningBn: 'বের করা / জমা দেওয়া (হোমওয়ার্ক)',
          tag: 'Verb N5'
        },
        {
          kanji: '出口',
          kana: 'でぐち',
          romaji: 'deguchi',
          meaningEn: 'exit, way out',
          meaningBn: 'বহির্গমন তোরণ / প্রস্থান পথ',
          tag: 'Place N5'
        },
        {
          kanji: '出発',
          kana: 'しゅっぱつ',
          romaji: 'shuppatsu',
          meaningEn: 'departure',
          meaningBn: 'রওনা হওয়া / যাত্রা শুরু',
          tag: 'Travel N4'
        },
        {
          kanji: '思い出す',
          kana: 'おもいだす',
          romaji: 'omoidasu',
          meaningEn: 'to recall, to remember',
          meaningBn: 'মনে পড়া / স্মরণ করা',
          tag: 'Verb N4'
        },
        {
          kanji: '出席',
          kana: 'しゅっせき',
          romaji: 'shusseki',
          meaningEn: 'attendance, presence',
          meaningBn: 'উপস্থিতি / ক্লাসে হাজিরা',
          tag: 'School N4'
        }
      ],
      sentences: [
        {
          ja: '朝八時にアパートを出て、満員電車に乗って会社へ通っています。',
          romaji: 'Asa hachiji ni apaato o dete, man\'in densha ni notte kaisha e kayotte imasu.',
          meaningEn: 'I leave my apartment at 8:00 AM and commute to work on a crowded train.',
          meaningBn: 'সকাল আটটায় ফ্ল্যাট থেকে বের হয়ে ভিড়ে ঠাসা ট্রেনে চড়ে অফিসে যাই।'
        },
        {
          ja: '授業が終わるまでに、宿題の作文を先生に出してください。',
          romaji: 'Jugyou ga owaru made ni, shukudai no sakubun o sensei ni dashite kudasai.',
          meaningEn: 'Please submit your homework essay to the teacher by the time class ends.',
          meaningBn: 'ক্লাস শেষ হওয়ার আগেই বাড়ির কাজের প্রবন্ধটি শিক্ষকের কাছে জমা দিন।'
        },
        {
          ja: '駅構内がとても広いので、案内板の「東出口」の矢印に従って歩きました。',
          romaji: 'Eki kounai ga totemo hiroi node, annaiban no "Higashideguchi" no yajirushi ni shitagatte arukimashita.',
          meaningEn: 'Because the station interior was so huge, I followed the "East Exit" arrows on the guide sign.',
          meaningBn: 'স্টেশনের ভেতরটা অনেক বড় হওয়ায় গাইড সাইনের "পূর্ব এক্সিট"-এর তীরচিহ্ন অনুসরণ করে হেঁটেছি।'
        }
      ],
      tamagoTip: {
        bn: 'একটি পাহাড়ের ওপর থেকে আরেকটি পাহাড় বেরিয়ে আসার দৃশ্য (山+山)। বের হওয়া 出る (でる) ও তোরণ 出口।',
        en: 'Sprouts emerging consecutively like mountains rising above mountains. Exit (出る, 出口).'
      }
    },

    // 3. 持
    {
      id: 'l14-mo',
      kanji: '持',
      emoji: '👜',
      strokeCount: 9,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ジ', romaji: 'ji' }
        ],
        kunyomi: [
          { kana: 'も・つ', romaji: 'mo-tsu' }
        ]
      },
      meanings: {
        en: 'hold, have, carry, possess, own',
        bn: 'ধরা, বহন করা, সাথে থাকা, নিজের দখলে থাকা'
      },
      vocab: [
        {
          kanji: '持つ',
          kana: 'もつ',
          romaji: 'motsu',
          meaningEn: 'to hold, to carry, to possess',
          meaningBn: 'ধরা / বহন করা / কাছে থাকা',
          tag: 'Verb N5'
        },
        {
          kanji: '持ってくる',
          kana: 'もってくる',
          romaji: 'motte kuru',
          meaningEn: 'to bring (something here)',
          meaningBn: 'নিয়ে আসা (কাছে)',
          tag: 'Verb N5'
        },
        {
          kanji: '持っていく',
          kana: 'もっていく',
          romaji: 'motte iku',
          meaningEn: 'to take (something there)',
          meaningBn: 'নিয়ে যাওয়া (অন্যত্র)',
          tag: 'Verb N5'
        },
        {
          kanji: '持ち物',
          kana: 'もちもの',
          romaji: 'mochimono',
          meaningEn: 'belongings, personal effects',
          meaningBn: 'ব্যক্তিগত জিনিসপত্র / সাথে নেওয়ার সামগ্রী',
          tag: 'Daily N4'
        },
        {
          kanji: '気持ち',
          kana: 'きもち',
          romaji: 'kimochi',
          meaningEn: 'feeling, mood, sensation',
          meaningBn: 'অনুভূতি / মনের ভাব',
          tag: 'Daily N5'
        },
        {
          kanji: 'お金持ち',
          kana: 'おかねもち',
          romaji: 'okanemochi',
          meaningEn: 'rich person, wealthy',
          meaningBn: 'ধনাঢ্য ব্যক্তি / ধনী',
          tag: 'Society N4'
        }
      ],
      sentences: [
        {
          ja: '「荷物が重そうですね。階段の上までお持ちしましょうか。」',
          romaji: '"Nimotsu ga omosou desu ne. Kaidan no ue made omochi shimashou ka."',
          meaningEn: '"Your luggage looks heavy. Shall I carry it for you to the top of the stairs?"',
          meaningBn: '"আপনার লাগেজটি বেশ ভারী মনে হচ্ছে। সিঁড়ির ওপর পর্যন্ত আমি বয়ে নিয়ে সাহায্য করব কি?"'
        },
        {
          ja: '明日の遠足の持ち物は、お弁当、水筒、そして雨具です。',
          romaji: 'Ashita no ensoku no mochimono wa, obentou, suitou, soshite amagu desu.',
          meaningEn: 'The items to bring for tomorrow\'s excursion are a lunchbox, water bottle, and rain gear.',
          meaningBn: 'আগামীকালের শিক্ষা সফরের প্রয়োজনীয় সামগ্রী হলো লাঞ্চবক্স, পানির বোতল এবং ছাতা/বৃষ্টির পোশাক।'
        },
        {
          ja: '日本で生活するときは、在留カードを常に携帯して持つ義務があります。',
          romaji: 'Nihon de seikatsu suru toki wa, zairyuu kaado o tsuneni keitai shite motsu gimu ga arimasu.',
          meaningEn: 'When living in Japan, you have a legal obligation to always carry your Residence Card with you.',
          meaningBn: 'জাপানে বসবাসকালে রেসিডেন্স কার্ড (জাইরিউ কার্ড) সর্বদা সঙ্গে বহন করার আইনি বাধ্যবাধকতা রয়েছে।'
        }
      ],
      tamagoTip: {
        bn: 'হাত দিয়ে (扌) মন্দিরের মতো মূল্যবান কিছু সযত্নে ধরে রাখা (寺)। বহন করা বা কাছে থাকা 持つ (もつ)।',
        en: 'A hand (扌) carefully holding sacred temple property (寺). To hold or possess (持つ).'
      }
    },

    // 4. 立
    {
      id: 'l14-ta',
      kanji: '立',
      emoji: '🧍',
      strokeCount: 5,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'リツ', romaji: 'ritsu' },
          { kana: 'リュウ', romaji: 'ryuu' }
        ],
        kunyomi: [
          { kana: 'た・つ', romaji: 'ta-tsu' },
          { kana: 'た・てる', romaji: 'ta-teru' }
        ]
      },
      meanings: {
        en: 'stand, stand up, establish, set up',
        bn: 'দাঁড়ানো, খাড়া হওয়া, প্রতিষ্ঠা করা'
      },
      vocab: [
        {
          kanji: '立つ',
          kana: 'たつ',
          romaji: 'tatsu',
          meaningEn: 'to stand up, to rise',
          meaningBn: 'দাঁড়ানো / খাড়া হওয়া',
          tag: 'Verb N5'
        },
        {
          kanji: '立てる',
          kana: 'たてる',
          romaji: 'tateru',
          meaningEn: 'to stand something up, to make a plan',
          meaningBn: 'খাড়া করে রাখা / পরিকল্পনা আঁকা',
          tag: 'Verb N5'
        },
        {
          kanji: '立ち入り禁止',
          kana: 'たちいりきんし',
          romaji: 'tachiirikinshi',
          meaningEn: 'Keep Out, No Trespassing',
          meaningBn: 'প্রবেশ নিষেধ (জরুরি সাইন)',
          tag: 'Sign N4'
        },
        {
          kanji: '役に立つ',
          kana: 'やくにたつ',
          romaji: 'yaku ni tatsu',
          meaningEn: 'to be useful, to be helpful',
          meaningBn: 'কাজে লাগা / উপকারী হওয়া',
          tag: 'Daily N5'
        },
        {
          kanji: '国立',
          kana: 'こくりつ',
          romaji: 'kokuritsu',
          meaningEn: 'national (university/park)',
          meaningBn: 'জাতীয় / সরকার প্রতিষ্ঠিত',
          tag: 'Society N4'
        },
        {
          kanji: '私立',
          kana: 'しりつ',
          romaji: 'shiritsu',
          meaningEn: 'private (university/institution)',
          meaningBn: 'বেসরকারি প্রতিষ্ঠান',
          tag: 'Society N4'
        }
      ],
      sentences: [
        {
          ja: '「工事中のため危険です。この先は立ち入り禁止となっています。」',
          romaji: '"Kouji-chuu no tame kiken desu. Kono saki wa tachiirikinshi to natte imasu."',
          meaningEn: '"Because of construction it is hazardous. Beyond this point is No Trespassing."',
          meaningBn: '"নির্মাণকাজ চলায় বিপজ্জনক। এখান থেকে সামনে প্রবেশ সম্পূর্ণ নিষিদ্ধ।"'
        },
        {
          ja: '電車内でお年寄りに席を譲るため、すぐに立ち上がりました。',
          romaji: 'Denshanai de otoshiyori ni seki o yuzuru tame, sugu ni tachiagarimashita.',
          meaningEn: 'In order to yield my seat to an elderly person on the train, I stood up immediately.',
          meaningBn: 'ট্রেনের ভেতর বয়োবৃদ্ধ ব্যক্তিকে বসার জায়গা করে দিতে আমি তৎক্ষণাৎ দাঁড়িয়ে পড়লাম।'
        },
        {
          ja: 'スマートフォンに翻訳アプリを入れておくと、旅行中に大変役に立ちます。',
          romaji: 'Sumaatofon ni hon\'yaku apuri o irete oku to, ryokou-chuu ni taihen yaku ni tachimasu.',
          meaningEn: 'Installing a translation app on your smartphone proves immensely useful during travel.',
          meaningBn: 'স্মার্টফোনে অনুবাদ অ্যাপ ইনস্টল করে রাখলে ভ্রমণকালে তা দারুণ উপকারে আসে।'
        }
      ],
      tamagoTip: {
        bn: 'মাটিতে দুই পা ছড়িয়ে দৃঢ়ভাবে সোজা হয়ে দাঁড়িয়ে থাকা মানুষের প্রতিচ্ছবি। দাঁড়ানো 立つ (たつ)।',
        en: 'A person standing firmly with both feet planted on the ground. Stand (立つ) and Keep Out (立ち入り禁止).'
      }
    },

    // 5. 使
    {
      id: 'l14-tsuka',
      kanji: '使',
      emoji: '🔧',
      strokeCount: 8,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'シ', romaji: 'shi' }
        ],
        kunyomi: [
          { kana: 'つか・う', romaji: 'tsuka-u' }
        ]
      },
      meanings: {
        en: 'use, employ, utilize, messenger, envoy',
        bn: 'ব্যবহার করা, কাজে লাগানো, দূত'
      },
      vocab: [
        {
          kanji: '使う',
          kana: 'つかう',
          romaji: 'tsukau',
          meaningEn: 'to use, to employ',
          meaningBn: 'ব্যবহার করা',
          tag: 'Verb N5'
        },
        {
          kanji: '使い方',
          kana: 'つかいかた',
          romaji: 'tsukaikata',
          meaningEn: 'how to use, way of usage',
          meaningBn: 'ব্যবহারবিধি / ব্যবহারের নিয়ম',
          tag: 'Daily N5'
        },
        {
          kanji: '使用',
          kana: 'しよう',
          romaji: 'shiyou',
          meaningEn: 'use, application, utilization',
          meaningBn: 'ব্যবহার / প্রয়োগ',
          tag: 'Daily N4'
        },
        {
          kanji: '使用中',
          kana: 'しようちゅう',
          romaji: 'shiyouchuu',
          meaningEn: 'in use, occupied (restroom)',
          meaningBn: 'ব্যবহৃত হচ্ছে / দখলকৃত (টয়লেট)',
          tag: 'Sign N4'
        },
        {
          kanji: '大使館',
          kana: 'たいしかん',
          romaji: 'taishikan',
          meaningEn: 'embassy',
          meaningBn: 'দূতাবাস',
          tag: 'Place N4'
        },
        {
          kanji: '使者',
          kana: 'ししゃ',
          romaji: 'shisha',
          meaningEn: 'messenger, envoy',
          meaningBn: 'বার্তা প্রেরক / দূত',
          tag: 'General'
        }
      ],
      sentences: [
        {
          ja: '「この電子レンジの使い方がよく分からないので、教えていただけますか。」',
          romaji: '"Kono denshirenji no tsukaikata ga yoku wakaranai node, oshiete itadakemasu ka."',
          meaningEn: '"I don\'t understand how to use this microwave very well; could you please show me?"',
          meaningBn: '"এই মাইক্রোওয়েভ ওভেনের ব্যবহারের নিয়মটি ঠিক বুঝতে পারছি না, একটু বুঝিয়ে দেবেন কি?"'
        },
        {
          ja: '新幹線の車内トイレのドアに「使用中」のランプが赤く点灯しています。',
          romaji: 'Shinkansen no shanai toire no doa ni "shiyouchuu" no ranpu ga akaku tentou shite imasu.',
          meaningEn: 'On the Shinkansen onboard toilet door, the "In Use" lamp is lit up in red.',
          meaningBn: 'শিনকানসেনের ট্রেনের টয়লেটের দরজায় লাল রঙের "ব্যবহৃত হচ্ছে" (使用中) বাতি জ্বলছে।'
        },
        {
          ja: 'パスポートの更新手続きを行うために、都内にある大使館を訪れました。',
          romaji: 'Pasupooto no koushin tetsuzuki o okonau tame ni, tonai ni aru taishikan o otozuremashita.',
          meaningEn: 'In order to handle passport renewal procedures, I visited the embassy located in the capital.',
          meaningBn: 'পাসপোর্ট নবায়নের কাজ সম্পন্ন করার জন্য রাজধানীতে অবস্থিত দূতাবাসে গিয়েছিলাম।'
        }
      ],
      tamagoTip: {
        bn: 'একজন মানুষ (亻) যার হাতে কাজের খাতা বা দাপ্তরিক দায়িত্ব (吏)। ব্যবহার করা 使う বা দূতাবাস 大使館।',
        en: 'A person (亻) managing an official errand (吏). To use (使う) or embassy (大使館).'
      }
    },

    // 6. 用
    {
      id: 'l14-you',
      kanji: '用',
      emoji: '📋',
      strokeCount: 5,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ヨウ', romaji: 'you' }
        ],
        kunyomi: [
          { kana: 'もち・いる', romaji: 'mochi-iru' }
        ]
      },
      meanings: {
        en: 'business, task, for the use of, service, utilize',
        bn: 'কাজ, প্রয়োজনাদি, ব্যবহারের জন্য, উদ্দেশ্য'
      },
      vocab: [
        {
          kanji: '用事',
          kana: 'ようじ',
          romaji: 'youji',
          meaningEn: 'tasks, business to attend to, errands',
          meaningBn: 'জরুরি কাজ / দায়দায়িত্ব',
          tag: 'Daily N5'
        },
        {
          kanji: '用意',
          kana: 'ようい',
          romaji: 'youi',
          meaningEn: 'preparation, getting ready',
          meaningBn: 'প্রস্তুতি / আয়োজন',
          tag: 'Daily N5'
        },
        {
          kanji: '利用',
          kana: 'りよう',
          romaji: 'riyou',
          meaningEn: 'use, utilization, taking advantage of',
          meaningBn: 'সুবিধা নেওয়া / কাজে লাগানো',
          tag: 'Daily N4'
        },
        {
          kanji: '子供用',
          kana: 'こどもよう',
          romaji: 'kodomoyou',
          meaningEn: 'for children\'s use',
          meaningBn: 'শিশুদের ব্যবহারের জন্য',
          tag: 'Sign N4'
        },
        {
          kanji: '非常用',
          kana: 'ひじょうよう',
          romaji: 'hijouyou',
          meaningEn: 'for emergency use only',
          meaningBn: 'কেবল জরুরি প্রয়োজনে ব্যবহার্য',
          tag: 'Emergency N4'
        },
        {
          kanji: '用具',
          kana: 'ようぐ',
          romaji: 'yougu',
          meaningEn: 'tool, equipment, implements',
          meaningBn: 'যন্ত্রপাতি / প্রয়োজনীয় সরঞ্জাম',
          tag: 'General N4'
        }
      ],
      sentences: [
        {
          ja: '午後は市役所で住民票を取る用事があるので、一時的に席を外します。',
          romaji: 'Gogo wa shiyakusho de juuminhyou o toru youji ga aru node, ichijiteki ni seki o hazushimasu.',
          meaningEn: 'Because I have an errand to obtain a residency certificate at city hall this afternoon, I will step away briefly.',
          meaningBn: 'বিকেলে সিটি হলে রেসিডেন্স সার্টিফিকেট তোলার কাজ থাকায় সাময়িকভাবে ডেস্কের বাইরে থাকব।'
        },
        {
          ja: '「電車の非常用ドアコックは、緊急時以外は絶対に触らないでください。」',
          romaji: '"Densha no hijouyou doa kokku wa, kinkyuuji igai wa zettai ni sawaranaide kudasai."',
          meaningEn: '"Never touch the train\'s emergency door cock except during emergencies."',
          meaningBn: '"জরুরি অবস্থা ছাড়া ট্রেনের ইমার্জেন্সি ডোর হ্যান্ডল কখনোই স্পর্শ করবেন না।"'
        },
        {
          ja: '週末のハイキングに向けて、雨具や非常食の用意を万全に整えました。',
          romaji: 'Shuumatsu no haikingu ni mukete, amagu ya hijoushoku no youi o banzen ni totonoemashita.',
          meaningEn: 'Ahead of the weekend hike, I fully organized preparations for rain gear and emergency food.',
          meaningBn: 'সাপ্তাহিক হাইকিংয়ের উদ্দেশ্যে বৃষ্টির পোশাক ও জরুরি খাবারের সম্পূর্ণ প্রস্তুতি সম্পন্ন করেছি।'
        }
      ],
      tamagoTip: {
        bn: 'বেতের তৈরি ঝুড়ি বা প্রয়োজনীয় পাত্র যা নানা কাজে ব্যবহার করা হয়। প্রয়োজনীয় কাজ 用事 ও প্রস্তুতি 用意।',
        en: 'A woven utility basket suitable for multiple tasks. Business errand (用事) and prepare (用意).'
      }
    },

    // 7. 中
    {
      id: 'l14-naka',
      kanji: '中',
      emoji: '🎯',
      strokeCount: 4,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'チュウ', romaji: 'chuu' },
          { kana: 'ジュウ', romaji: 'juu' }
        ],
        kunyomi: [
          { kana: 'なか', romaji: 'naka' }
        ]
      },
      meanings: {
        en: 'inside, middle, during, throughout, center',
        bn: 'ভেতরে, মাঝে, কেন্দ্র, চলাকালীন, ব্যাপী'
      },
      vocab: [
        {
          kanji: '中',
          kana: 'なか',
          romaji: 'naka',
          meaningEn: 'inside, middle',
          meaningBn: 'ভেতরে / মধ্যভাগে',
          tag: 'Place N5'
        },
        {
          kanji: '一日中',
          kana: 'いちにちじゅう',
          romaji: 'ichinichijuu',
          meaningEn: 'all day long, throughout the day',
          meaningBn: 'সারাদিন ধরে / দিনব্যাপী',
          tag: 'Time N5'
        },
        {
          kanji: '授業中',
          kana: 'じゅぎょうちゅう',
          romaji: 'jugyouchuu',
          meaningEn: 'during class, in the middle of class',
          meaningBn: 'ক্লাস চলাকালীন',
          tag: 'School N5'
        },
        {
          kanji: '工事中',
          kana: 'こうじちゅう',
          romaji: 'koujichuu',
          meaningEn: 'under construction',
          meaningBn: 'নির্মাণকাজ চলছে এমন',
          tag: 'Sign N4'
        },
        {
          kanji: '準備中',
          kana: 'じゅんびちゅう',
          romaji: 'junbichuu',
          meaningEn: 'in preparation, getting ready (shop closed)',
          meaningBn: 'প্রস্তুতি চলছে (দোকান খোলার পূর্বে)',
          tag: 'Sign N4'
        },
        {
          kanji: '中心',
          kana: 'ちゅうしん',
          romaji: 'chuushin',
          meaningEn: 'center, core, focal point',
          meaningBn: 'কেন্দ্রস্থল / মধ্যবিন্দু',
          tag: 'Place N4'
        }
      ],
      sentences: [
        {
          ja: '授業中はスマートフォンの電源を切るか、マナーモードに設定してください。',
          romaji: 'Jugyouchuu wa sumaatofon no dengen o kiru ka, manaamoodo ni settei shite kudasai.',
          meaningEn: 'During class, please either turn off your smartphone power or set it to silent manner mode.',
          meaningBn: 'ক্লাস চলাকালীন স্মার্টফোন বন্ধ রাখুন অথবা সাইলেন্ট ম্যানার মোডে দিয়ে রাখুন।'
        },
        {
          ja: '店の前に「準備中」の看板が出ているときは、中に入ることができません。',
          romaji: 'Mise no mae ni "junbichuu" no看板 ga dete iru toki wa, naka ni hairu koto ga dekimasen.',
          meaningEn: 'When the "In Preparation" board is displayed in front of the shop, you cannot enter inside.',
          meaningBn: 'রেস্তোরাঁর সামনে "প্রস্তুতি চলছে" সাইনবোর্ড থাকলে ভেতরে প্রবেশ করা যায় না।'
        },
        {
          ja: '昨日は一日中強い雨が降っていたので、家で映画を見て過ごしました。',
          romaji: 'Kinou wa ichinichijuu tsuyoi ame ga futte ita node, ie de eiga o mite sugoshimashita.',
          meaningEn: 'Because heavy rain fell all day long yesterday, I spent the day watching movies at home.',
          meaningBn: 'গতকাল সারাদিন ধরে ভারি বৃষ্টি হওয়ায় বাসায় সিনেমা দেখে সময় কাটিয়েছি।'
        }
      ],
      tamagoTip: {
        bn: 'একটি লক্ষ্যবস্তুর ঠিক মাঝখান দিয়ে তীরের আঘাত। কেন্দ্র বা চলমান অবস্থা 中 (なか, チュウ)।',
        en: 'An arrow piercing straight through the center of a target circle. Center and during (中).'
      }
    },

    // 8. 新
    {
      id: 'l14-shin',
      kanji: '新',
      emoji: '🆕',
      strokeCount: 13,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'シン', romaji: 'shin' }
        ],
        kunyomi: [
          { kana: 'あたら・しい', romaji: 'atara-shii' },
          { kana: 'あら・た', romaji: 'ara-ta' }
        ]
      },
      meanings: {
        en: 'new, fresh, novel',
        bn: 'নতুন, তাজা, আধুনিক'
      },
      vocab: [
        {
          kanji: '新しい',
          kana: 'あたらしい',
          romaji: 'atarashii',
          meaningEn: 'new, fresh',
          meaningBn: 'নতুন / আধুনিক',
          tag: 'Daily N5'
        },
        {
          kanji: '新聞',
          kana: 'しんぶん',
          romaji: 'shinbun',
          meaningEn: 'newspaper',
          meaningBn: 'সংবাদপত্র',
          tag: 'Daily N5'
        },
        {
          kanji: '新幹線',
          kana: 'しんかんせん',
          romaji: 'shinkansen',
          meaningEn: 'bullet train (Shinkansen)',
          meaningBn: 'শিনকানসেন বুলেট ট্রেন',
          tag: 'Train N5'
        },
        {
          kanji: '新年',
          kana: 'しんねん',
          romaji: 'shinnen',
          meaningEn: 'New Year',
          meaningBn: 'নতুন বছর / নববর্ষ',
          tag: 'Time N5'
        },
        {
          kanji: '新車',
          kana: 'しんしゃ',
          romaji: 'shinsha',
          meaningEn: 'new car',
          meaningBn: 'নতুন গাড়ি',
          tag: 'Daily N4'
        },
        {
          kanji: '新人',
          kana: 'しんじん',
          romaji: 'shinjin',
          meaningEn: 'newcomer, rookie employee',
          meaningBn: 'নতুন কর্মী / নবীন ব্যক্তি',
          tag: 'Business N4'
        }
      ],
      sentences: [
        {
          ja: '新しく引っ越したアパートは、駅から歩いて五分のとても静かな場所にあります。',
          romaji: 'Atarashiku hikkoshita apaato wa, eki kara aruite gofun no totemo shizuka na basho ni arimasu.',
          meaningEn: 'The newly moved-in apartment is in a very quiet location a 5-minute walk from the station.',
          meaningBn: 'নতুন ওঠা অ্যাপার্টমেন্টটি স্টেশন থেকে পাঁচ মিনিটের হাঁটা দূরত্বে খুব শান্ত এলাকায় অবস্থিত।'
        },
        {
          ja: '毎朝出勤前の電車の中で、スマートフォンで最新のニュースをチェックします。',
          romaji: 'Maiasa shukkin mae no densha no naka de, sumaatofon de saishin no nyuusu o chekku shimasu.',
          meaningEn: 'Every morning on the train before work, I check the latest news on my smartphone.',
          meaningBn: 'প্রতিদিন সকালে অফিসে যাওয়ার পথে ট্রেনের ভেতর ফোনে লেটেস্ট নিউজ দেখে নিই।'
        },
        {
          ja: '日本のお正月には、「あけましておめでとうございます」と新年の挨拶を交わします。',
          romaji: 'Nihon no oshougatsu ni wa, "Akemashite omedetou gozaimasu" to shinnen no aisatsu o kawashimasu.',
          meaningEn: 'During Japanese New Year, people exchange New Year greetings: "Happy New Year!"',
          meaningBn: 'জাপানের নববর্ষে "আকেমাশিতে ওমেদেতো গোজাইমাস" বলে নববর্ষের শুভেচ্ছা বিনিময় করা হয়।'
        }
      ],
      tamagoTip: {
        bn: 'একটি জীবন্ত গাছের ওপর (立+木) কুঠার চালিয়ে (斤) তাজা সুগন্ধযুক্ত কাঠ সংগ্রহ করা। নতুন 新しい (あたらしい)।',
        en: 'Using an axe (斤) on a standing tree (立+木) to fashion fresh timber. New (新しい, 新幹線).'
      }
    },

    // 9. 古
    {
      id: 'l14-furu',
      kanji: '古',
      emoji: '🏺',
      strokeCount: 5,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'コ', romaji: 'ko' }
        ],
        kunyomi: [
          { kana: 'ふる・い', romaji: 'furu-i' },
          { kana: 'ふる・す', romaji: 'furu-su' }
        ]
      },
      meanings: {
        en: 'old, antique, used, secondhand',
        bn: 'পুরোনো, প্রাচীন, সেকেলে, ব্যবহৃত'
      },
      vocab: [
        {
          kanji: '古い',
          kana: 'ふるい',
          romaji: 'furui',
          meaningEn: 'old (objects), antique',
          meaningBn: 'পুরোনো / প্রাচীন',
          tag: 'Daily N5'
        },
        {
          kanji: '古本',
          kana: 'ふるほん',
          romaji: 'furuhon',
          meaningEn: 'secondhand book, used book',
          meaningBn: 'ব্যবহৃত পুরোনো বই',
          tag: 'Shop N5'
        },
        {
          kanji: '中古',
          kana: 'ちゅうこ',
          romaji: 'chuuko',
          meaningEn: 'secondhand, pre-owned',
          meaningBn: 'ব্যবহৃত / সেকেন্ড হ্যান্ড (গাড়ি/মোবাইল)',
          tag: 'Shop N4'
        },
        {
          kanji: '古本屋',
          kana: 'ふるほんや',
          romaji: 'furuhon\'ya',
          meaningEn: 'secondhand bookstore',
          meaningBn: 'পুরোনো বইয়ের দোকান',
          tag: 'Shop N4'
        },
        {
          kanji: '古着',
          kana: 'ふるぎ',
          romaji: 'furugi',
          meaningEn: 'vintage clothing, used clothes',
          meaningBn: 'ভিন্টেজ পোশাক / ব্যবহৃত কাপড়',
          tag: 'Shop N4'
        },
        {
          kanji: '古代',
          kana: 'こだい',
          romaji: 'kodai',
          meaningEn: 'ancient times, antiquity',
          meaningBn: 'প্রাচীন যুগ / অতীতকাল',
          tag: 'History N4'
        }
      ],
      sentences: [
        {
          ja: '東京の神保町には、貴重な古本を取り扱う専門店がずらりと並んでいます。',
          romaji: 'Toukyou no Jinbouchou ni wa, kichou na furuhon o toriatsukau senmonten ga zurari to narande imasu.',
          meaningEn: 'In Tokyo\'s Jimbocho, specialty shops dealing in precious secondhand books line the street.',
          meaningBn: 'টোকিওর জিম্বোচো এলাকায় দুর্লভ পুরোনো বইয়ের অনেক বিখ্যাত দোকান সারিবদ্ধভাবে রয়েছে।'
        },
        {
          ja: '予算を節約するため、リサイクルショップで状態のいい中古の冷蔵庫を買いました。',
          romaji: 'Yosan o setsuyaku suru tame, risaikuru shoppu de joutai no ii chuuko no reizouko o kaimashita.',
          meaningEn: 'To save budget, I bought a used refrigerator in good condition at a recycle shop.',
          meaningBn: 'খরচ বাঁচাতে রিসাইকেল শপ থেকে ভালো কন্ডিশনের একটি সেকেন্ড হ্যান্ড ফ্রিজ কিনেছি।'
        },
        {
          ja: '京都には千年以上前に建てられた古い木造のお寺がたくさん残っています。',
          romaji: 'Kyouto ni wa sennen ijou mae ni taterareta furui mokuzou no otera ga takusan nokotte imasu.',
          meaningEn: 'In Kyoto, many ancient wooden temples built over 1,000 years ago still remain.',
          meaningBn: 'কিয়োটোতে এক হাজার বছরেরও আগে নির্মিত অসংখ্য প্রাচীন কাঠের মন্দির টিকে আছে।'
        }
      ],
      tamagoTip: {
        bn: 'দশ প্রজন্ম ধরে (十) মুখে মুখে প্রচলিত (口) প্রাচীন গল্প বা ঐতিহ্য। পুরোনো 古い (ふるい)।',
        en: 'Tales handed down through ten generations (十) by mouth (口). Old (古い) and secondhand (中古).'
      }
    },

    // 10. 注
    {
      id: 'l14-chuu',
      kanji: '注',
      emoji: '⚠️',
      strokeCount: 8,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'チュウ', romaji: 'chuu' }
        ],
        kunyomi: [
          { kana: 'そそ・ぐ', romaji: 'soso-gu' }
        ]
      },
      meanings: {
        en: 'pour, focus, attention, note, order',
        bn: 'ঢালা, মনোযোগ দেওয়া, সতর্কতা, অর্ডার'
      },
      vocab: [
        {
          kanji: '注意',
          kana: 'ちゅうい',
          romaji: 'chuui',
          meaningEn: 'caution, attention, warning',
          meaningBn: 'সতর্কতা / সাবধানতা / মনোযোগ',
          tag: 'Daily N5'
        },
        {
          kanji: '注意する',
          kana: 'ちゅういする',
          romaji: 'chuui suru',
          meaningEn: 'to be careful, to pay attention, to warn',
          meaningBn: 'সাবধান হওয়া / সতর্ক করা',
          tag: 'Verb N5'
        },
        {
          kanji: '注文',
          kana: 'ちゅうもん',
          romaji: 'chuumon',
          meaningEn: 'order (food/goods)',
          meaningBn: 'অর্ডার / খাবারের ফরমাশ',
          tag: 'Daily N5'
        },
        {
          kanji: '注目',
          kana: 'ちゅうもく',
          romaji: 'chuumoku',
          meaningEn: 'attention, notice, looking closely',
          meaningBn: 'দৃষ্টি আকর্ষণ / বিশেষ নজর',
          tag: 'General N4'
        },
        {
          kanji: '注ぐ',
          kana: 'そそぐ',
          romaji: 'sosogu',
          meaningEn: 'to pour (water/tea), to shed',
          meaningBn: 'ঢালা (কাপে চা ঢালা)',
          tag: 'Verb N4'
        },
        {
          kanji: '特注',
          kana: 'とくちゅう',
          romaji: 'tokuchuu',
          meaningEn: 'special order, custom-made',
          meaningBn: 'বিশেষ অর্ডার / কাস্টমাইজড',
          tag: 'Shop'
        }
      ],
      sentences: [
        {
          ja: '「足元が濡れて滑りやすくなっていますので、転倒にご注意ください。」',
          romaji: '"Ashimoto ga nurete suberiyasuku natte imasu node, tentou ni gochuui kudasai."',
          meaningEn: '"Because the ground is wet and slippery, please watch out for falling."',
          meaningBn: '"মেঝে ভেজা ও পিচ্ছিল হওয়ায় দয়া করে পা পিছলে পড়ার ব্যাপারে সতর্ক থাকুন।"'
        },
        {
          ja: '居酒屋でタッチパネルの画面を使って、焼き鳥とウーロン茶を注文しました。',
          romaji: 'Izakaya de tacchipaneru no gamen o tsukatte, yakitori to uuroncha o chuumon shimashita.',
          meaningEn: 'At the pub, using the touch panel screen, I ordered yakitori chicken and oolong tea.',
          meaningBn: 'ইজাকায়ায় টাচপ্যানেল স্ক্রিন ব্যবহার করে আমি ইয়াকিতোরি এবং ওলোং চা অর্ডার করেছি।'
        },
        {
          ja: '自転車に乗るときは、歩行者や車に十分に注意して運転しましょう。',
          romaji: 'Jitensha ni noru toki wa, hokousha ya kuruma ni juubun ni chuui shite unten shimashou.',
          meaningEn: 'When riding a bicycle, let\'s ride paying ample attention to pedestrians and vehicles.',
          meaningBn: 'বাইসাইকেল চালানোর সময় পথচারী ও গাড়ির ব্যাপারে যথেষ্ট সতর্ক হয়ে চালানো উচিত।'
        }
      ],
      tamagoTip: {
        bn: 'পানি ঢালার মতো (氵) এক জায়গায় মনোযোগের ধারা কেন্দ্রীভূত করা (主)। সতর্কতা 注意 ও খাবারের অর্ডার 注文।',
        en: 'Pouring liquid (氵) directly into a master vessel (主). Caution (注意) and food orders (注文).'
      }
    },

    // 11. 意
    {
      id: 'l14-i',
      kanji: '意',
      emoji: '💡',
      strokeCount: 13,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'イ', romaji: 'i' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'mind, idea, thought, meaning, intention',
        bn: 'মন, উদ্দেশ্য, অর্থ, চিন্তা, অনুভূতি'
      },
      vocab: [
        {
          kanji: '意味',
          kana: 'いみ',
          romaji: 'imi',
          meaningEn: 'meaning, significance',
          meaningBn: 'অর্থ / তাৎপর্য',
          tag: 'Daily N5'
        },
        {
          kanji: '注意',
          kana: 'ちゅうい',
          romaji: 'chuui',
          meaningEn: 'caution, paying mind',
          meaningBn: 'সতর্কতা / মনোযোগ',
          tag: 'Daily N5'
        },
        {
          kanji: '意見',
          kana: 'いけん',
          romaji: 'iken',
          meaningEn: 'opinion, view',
          meaningBn: 'মতামত / ব্যক্তিগত অভিমত',
          tag: 'Daily N4'
        },
        {
          kanji: '用意',
          kana: 'ようい',
          romaji: 'youi',
          meaningEn: 'preparation, getting ready',
          meaningBn: 'প্রস্তুতি / আয়োজন',
          tag: 'Daily N5'
        },
        {
          kanji: '意外',
          kana: 'いがい',
          romaji: 'igai',
          meaningEn: 'unexpected, surprising',
          meaningBn: 'অপ্রত্যাশিত / অভাবনীয়',
          tag: 'General N4'
        },
        {
          kanji: '決意',
          kana: 'けつい',
          romaji: 'ketsui',
          meaningEn: 'decision, determination, resolution',
          meaningBn: 'দৃঢ় সংকল্প / প্রতিজ্ঞা',
          tag: 'General N4'
        }
      ],
      sentences: [
        {
          ja: '「この標識の漢字の意味が分からないので、辞書で調べてみます。」',
          romaji: '"Kono hyoushiki no kanji no imi ga wakaranai node, jisho de shirabete mimasu."',
          meaningEn: '"I don\'t understand the meaning of the kanji on this road sign, so I will look it up in a dictionary."',
          meaningBn: '"এই সাইনবোর্ডের কাঞ্জির অর্থ বুঝতে পারছি না, তাই ডিকশনারিতে খুঁজে দেখছি।"'
        },
        {
          ja: '会議で新しいプロジェクトについて、自分の意見をはっきりと述べました。',
          romaji: 'Kaigi de atarashii purojekuto ni tsuite, jibun no iken o hakkiri to nobemashita.',
          meaningEn: 'At the meeting, I clearly stated my opinion regarding the new project.',
          meaningBn: 'মিটিংয়ে নতুন প্রজেক্ট সম্পর্কে আমি স্পষ্টভাবে আমার মতামত ব্যক্ত করেছি।'
        },
        {
          ja: '試験の前日には、受験票や筆記用具の用意をしっかり済ませておきましょう。',
          romaji: 'Shiken no zenjitsu ni wa, jukenhyou ya hikkiyougu no youi o shikkari sumasete okimashou.',
          meaningEn: 'On the day before the exam, let\'s thoroughly complete preparations for the exam voucher and writing utensils.',
          meaningBn: 'পরীক্ষার আগের দিন অ্যাডমিট কার্ড ও কলম-পেন্সিলের প্রস্তুতি ভালোভাবে সেরে রাখা উচিত।'
        }
      ],
      tamagoTip: {
        bn: 'হৃদয়ের বা মনের (心) ভেতর জাগ্রত হওয়া কোনো ধ্বনি বা অনুভূতি (音)। অর্থ 意味 বা মতামত 意見।',
        en: 'Sounds or thoughts (音) echoing from the deep heart (心). Meaning (意味) and opinion (意見).'
      }
    },

    // 12. 止
    {
      id: 'l14-to',
      kanji: '止',
      emoji: '🛑',
      strokeCount: 4,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'シ', romaji: 'shi' }
        ],
        kunyomi: [
          { kana: 'と・まる', romaji: 'to-maru' },
          { kana: 'と・める', romaji: 'to-meru' }
        ]
      },
      meanings: {
        en: 'stop, halt, cease, prevent',
        bn: 'থামা, থামানো, বন্ধ করা, স্থগিত'
      },
      vocab: [
        {
          kanji: '止まる',
          kana: 'とまる',
          romaji: 'tomaru',
          meaningEn: 'to stop (moving), to come to a halt',
          meaningBn: 'থেমে যাওয়া / বন্ধ হওয়া',
          tag: 'Verb N5'
        },
        {
          kanji: '止める',
          kana: 'とめる',
          romaji: 'tomeru',
          meaningEn: 'to stop something, to park (a car)',
          meaningBn: 'থামানো / পার্ক করা',
          tag: 'Verb N5'
        },
        {
          kanji: '中止',
          kana: 'ちゅうし',
          romaji: 'chuushi',
          meaningEn: 'cancellation, suspension',
          meaningBn: 'বাতিল / স্থগিত করা',
          tag: 'Daily N4'
        },
        {
          kanji: '通行止め',
          kana: 'つうこうどめ',
          romaji: 'tsuukoudome',
          meaningEn: 'road closed, closed to traffic',
          meaningBn: 'রাস্তা বন্ধ / যান চলাচল নিষেধ',
          tag: 'Sign N4'
        },
        {
          kanji: '一時停止',
          kana: 'いちじていし',
          romaji: 'ichijiteishi',
          meaningEn: 'temporary stop (road traffic sign)',
          meaningBn: 'সাময়িক পূর্ণ বিরতি (রোড সাইন: 止まれ)',
          tag: 'Traffic N4'
        },
        {
          kanji: '立ち止まる',
          kana: 'たちどまる',
          romaji: 'tachidomaru',
          meaningEn: 'to stop in one\'s tracks, to pause',
          meaningBn: 'হাঁটতে হাঁটতে থমকে দাঁড়ানো',
          tag: 'Verb N4'
        }
      ],
      sentences: [
        {
          ja: '「止まれ」の標識がある交差点では、車も自転車も必ず一時停止しなければなりません。',
          romaji: '"Tomare" no hyoushiki ga aru kousaten dewa, kuruma mo jitensha mo kanarazu ichijiteishi shinakereba narimasen.',
          meaningEn: 'At intersections with a "Stop" sign, cars and bicycles must come to a complete temporary stop.',
          meaningBn: '"থামুন" (止まれ) সাইন থাকা মোড়ে গাড়ি এবং বাইসাইকেল উভয়কেই বাধ্যতামূলকভাবে থামতে হবে।'
        },
        {
          ja: '強い台風が接近しているため、明日の花火大会は中止になりました。',
          romaji: 'Tsuyoi taifuu ga sekkin shite iru tame, ashita no hanabitaikai wa chuushi ni narimashita.',
          meaningEn: 'Because a powerful typhoon is approaching, tomorrow\'s fireworks festival has been cancelled.',
          meaningBn: 'শক্তিশালী টাইফুন ধেয়ে আসায় আগামীকালের আতশবাজি উৎসবটি স্থগিত (বাতিল) করা হয়েছে।'
        },
        {
          ja: '踏切の手前では警報機が鳴ったら、無理に渡らずに直ちに止まりましょう。',
          romaji: 'Fumikiri no temae dewa keihouki ga nattara, muri ni watarazu ni tadachini tomarimashou.',
          meaningEn: 'When the alarm sounds before a railroad crossing, do not force across and stop immediately.',
          meaningBn: 'লেভেল ক্রসিংয়ের সাইরেন বাজামাত্র ঝুঁকি নিয়ে পার না হয়ে সাথে সাথে থেমে যাওয়া উচিত।'
        }
      ],
      tamagoTip: {
        bn: 'পা ফেলে সামনে এগিয়ে যাওয়ার গতিকে আকস্মিক থামিয়ে দেওয়া। থামা 止まる ও বাতিল 中止।',
        en: 'A footprint halting its motion. To stop (止まる) or cancellation (中止).'
      }
    },

    // --- READ-ONLY KANJI (読める - 2 items) ---
    // 13. 禁止
    {
      id: 'l14-kinshi',
      kanji: '禁止',
      emoji: '🚫',
      strokeCount: 17,
      jlpt: 'N4',
      category: 'read_only',
      readings: {
        onyomi: [
          { kana: 'キンシ', romaji: 'kinshi' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'prohibition, ban, forbidden',
        bn: 'নিষেধ, বারণ, নিষিদ্ধকরণ'
      },
      vocab: [
        {
          kanji: '禁止',
          kana: 'きんし',
          romaji: 'kinshi',
          meaningEn: 'prohibition, ban',
          meaningBn: 'নিষেধ / নিষিদ্ধ',
          tag: 'Daily N4'
        },
        {
          kanji: '立ち入り禁止',
          kana: 'たちいりきんし',
          romaji: 'tachiirikinshi',
          meaningEn: 'No Trespassing, Keep Out',
          meaningBn: 'অনধিকার প্রবেশ নিষেধ',
          tag: 'Sign N4'
        },
        {
          kanji: '駐車禁止',
          kana: 'ちゅうしゃきんし',
          romaji: 'chuushakinshi',
          meaningEn: 'No Parking',
          meaningBn: 'গাড়ি পার্কিং নিষেধ',
          tag: 'Sign N4'
        },
        {
          kanji: '撮影禁止',
          kana: 'さつえいきんし',
          romaji: 'satsueikinshi',
          meaningEn: 'Photography Prohibited, No Photos',
          meaningBn: 'ছবি তোলা সম্পূর্ণ নিষেধ',
          tag: 'Sign N4'
        },
        {
          kanji: '禁煙',
          kana: 'きんえん',
          romaji: 'kinen',
          meaningEn: 'No Smoking',
          meaningBn: 'ধূমপান নিষেধ',
          tag: 'Sign N4'
        },
        {
          kanji: '通行禁止',
          kana: 'つうこうきんし',
          romaji: 'tsuukoukinshi',
          meaningEn: 'Closed to traffic / pedestrians',
          meaningBn: 'চলাচল সম্পূর্ণ নিষিদ্ধ',
          tag: 'Traffic'
        }
      ],
      sentences: [
        {
          ja: '「美術館内でのフラッシュ撮影は禁止されていますのでご注意ください。」',
          romaji: '"Bijutsukannai de no furasshu satsuei wa kinshi sarete imasu node gochuui kudasai."',
          meaningEn: '"Flash photography inside the art museum is prohibited, so please be cautious."',
          meaningBn: '"আর্ট মিউজিয়ামের ভেতরে ফ্ল্যাশ দিয়ে ছবি তোলা সম্পূর্ণ নিষিদ্ধ, তাই সতর্ক থাকুন।"'
        },
        {
          ja: '駅前の歩道は放置自転車が禁止されており、停めると撤去されます。',
          romaji: 'Ekimae no hodou wa houchijitensha ga kinshi sarete ori, tomeru to tekkyo saremasu.',
          meaningEn: 'Leaving bicycles on the sidewalk in front of the station is prohibited; parked bikes will be impounded.',
          meaningBn: 'স্টেশনের সামনের ফুটপাতে যত্রতত্র সাইকেল রাখা নিষিদ্ধ; রাখলে পুলিশ তা বাজেয়াপ্ত করবে।'
        },
        {
          ja: '公園の芝生エリアには「ペットの立ち入り禁止」の看板が立てられています。',
          romaji: 'Kouen no shibafu eria ni wa "petto no tachiirikinshi" no kanban ga taterarete imasu.',
          meaningEn: 'In the park\'s lawn area, a sign reading "No Pets Allowed" is posted.',
          meaningBn: 'পার্কের ঘাসের আঙিনায় "পোষা প্রাণী নিয়ে প্রবেশ নিষেধ"-এর সাইনবোর্ড লাগানো আছে।'
        }
      ],
      tamagoTip: {
        bn: '禁 (কঠোর ধর্মীয় বা আইনি বারণ) + 止 (থামানো)। জাপানের সর্বত্র দেখা জরুরি সাইন 禁止 (きんし)।',
        en: 'Prohibit (禁) + Halt (止). Official signs forbidding actions across Japan.'
      }
    },

    // 14. 降りる
    {
      id: 'l14-oriru',
      kanji: '降りる',
      emoji: '🚶‍♂️',
      strokeCount: 13,
      jlpt: 'N5',
      category: 'read_only',
      readings: {
        onyomi: [
          { kana: 'コウ', romaji: 'kou' }
        ],
        kunyomi: [
          { kana: 'お・りる', romaji: 'o-riru' },
          { kana: 'お・ろす', romaji: 'o-rosu' },
          { kana: 'ふ・る', romaji: 'fu-ru' }
        ]
      },
      meanings: {
        en: 'get off, disembark, descend, rain falls',
        bn: 'নামা (যানবাহন থেকে), অবতরণ করা, বৃষ্টি পড়া'
      },
      vocab: [
        {
          kanji: '降りる',
          kana: 'おりる',
          romaji: 'oriru',
          meaningEn: 'to get off (train/bus), to descend',
          meaningBn: 'নামা (বাস/ট্রেন থেকে)',
          tag: 'Verb N5'
        },
        {
          kanji: '降ろす',
          kana: 'おろす',
          romaji: 'orosu',
          meaningEn: 'to drop off (a passenger), to unload',
          meaningBn: 'নামিয়ে দেওয়া / নামানো',
          tag: 'Verb N5'
        },
        {
          kanji: '降る',
          kana: 'ふる',
          romaji: 'furu',
          meaningEn: 'to fall (rain/snow)',
          meaningBn: 'পড়া / বর্ষণ হওয়া (বৃষ্টি/তুষার)',
          tag: 'Verb N5'
        },
        {
          kanji: '降車口',
          kana: 'こうしゃぐち',
          romaji: 'koushaguchi',
          meaningEn: 'exit door for getting off (bus/train)',
          meaningBn: 'বাস বা ট্রেন থেকে নামার দরজা',
          tag: 'Transit N4'
        },
        {
          kanji: '電車を降りる',
          kana: 'でんしゃをおりる',
          romaji: 'densha o oriru',
          meaningEn: 'to get off the train',
          meaningBn: 'ট্রেন থেকে নামা',
          tag: 'Transit N5'
        },
        {
          kanji: '雨降り',
          kana: 'あめふり',
          romaji: 'amefuri',
          meaningEn: 'rainy weather, rainfall',
          meaningBn: 'বৃষ্টির দিন / বর্ষণ',
          tag: 'Weather'
        }
      ],
      sentences: [
        {
          ja: '「次の渋谷駅で山手線を降りますので、出口の近くに移動しましょう。」',
          romaji: '"Tsugi no Shibuya eki de Yamanotesen o orimasu node, deguchi no chikaku ni idou shimashou."',
          meaningEn: '"Because we are getting off the Yamanote Line at the next Shibuya station, let\'s move near the exit doors."',
          meaningBn: '"পরবর্তী শিবুয়া স্টেশনে আমরা ইয়ামানোতে লাইন থেকে নামব, তাই দরজার কাছাকাছি সরে যাই।"'
        },
        {
          ja: '日本の路線バスは、後ろのドアから乗って前のドアから降ります。',
          romaji: 'Nihon no rosen basu wa, ushiro no doa kara notte mae no doa kara orimasu.',
          meaningEn: 'In Japanese route buses, you board from the rear door and alight from the front door.',
          meaningBn: 'জাপানের লোকাল বাসে সাধারণত পেছনের দরজা দিয়ে উঠতে হয় এবং সামনের দরজা দিয়ে নামতে হয়।'
        },
        {
          ja: '急激に大雪が降り始めたので、安全のために車のスピードを落としました。',
          romaji: 'Kyuugeki ni ooyuki ga furihajimeta node, anzen no tame ni kuruma no supiido o otoshimashita.',
          meaningEn: 'Because heavy snow suddenly started falling, I lowered the car\'s speed for safety.',
          meaningBn: 'আচমকা প্রচণ্ড তুষারপাত শুরু হওয়ায় নিরাপত্তার স্বার্থে গাড়ির গতি কমিয়ে দিয়েছি।'
        }
      ],
      tamagoTip: {
        bn: 'পাহাড় বা উঁচু স্থান (阝) থেকে নিচে নেমে আসার পদচিহ্ন। ট্রেন থেকে নামা 降りる (おりる)।',
        en: 'Stepping down from elevated ground (阝). To alight from trains (降りる) or precipitation (降る).'
      }
    },

    // --- VISUAL RECOGNITION (見て、わかる - 3 items) ---
    // 15. 最〜
    {
      id: 'l14-sai',
      kanji: '最〜',
      emoji: '🥇',
      strokeCount: 12,
      jlpt: 'N4',
      category: 'visual_recognition',
      readings: {
        onyomi: [
          { kana: 'サイ', romaji: 'sai' }
        ],
        kunyomi: [
          { kana: 'もっと・も', romaji: 'motto-mo' }
        ]
      },
      meanings: {
        en: 'most, -est, utmost, ultimate, supreme',
        bn: 'সর্ব-, সবচেয়ে, চরম, সর্বাধিক'
      },
      vocab: [
        {
          kanji: '最近',
          kana: 'さいきん',
          romaji: 'saikin',
          meaningEn: 'recently, lately',
          meaningBn: 'সম্প্রতি / আজকাল',
          tag: 'Daily N5'
        },
        {
          kanji: '最初',
          kana: 'さいしょ',
          romaji: 'saisho',
          meaningEn: 'the beginning, at first',
          meaningBn: 'প্রথমদিকে / শুরুতে',
          tag: 'Daily N5'
        },
        {
          kanji: '最後',
          kana: 'さいご',
          romaji: 'saigo',
          meaningEn: 'the last, the end',
          meaningBn: 'সর্বশেষ / অন্তিম',
          tag: 'Daily N5'
        },
        {
          kanji: '最高',
          kana: 'さいこう',
          romaji: 'saikou',
          meaningEn: 'the highest, maximum, best, supreme',
          meaningBn: 'সর্বোচ্চ / সেরা / দারুণ',
          tag: 'Daily N4'
        },
        {
          kanji: '最新',
          kana: 'さいしん',
          romaji: 'saishin',
          meaningEn: 'the newest, latest, state-of-the-art',
          meaningBn: 'সর্বাধুনিক / লেটেস্ট সংস্করণ',
          tag: 'General N4'
        },
        {
          kanji: '最悪',
          kana: 'さいあく',
          romaji: 'saiaku',
          meaningEn: 'the worst, horrible',
          meaningBn: 'নিকৃষ্টতম / সবচেয়ে খারাপ অবস্থা',
          tag: 'Daily N4'
        }
      ],
      sentences: [
        {
          ja: '東京の夏の最高気温は三十八度に達し、非常に厳しい猛暑となりました。',
          romaji: 'Toukyou no natsu no saikou kion wa sanjuuhachido ni tasshi, hijou ni kibishii mousho to narimashita.',
          meaningEn: 'Tokyo\'s highest summer temperature reached 38 degrees, turning into a severely intense heatwave.',
          meaningBn: 'টোকিওর গ্রীষ্মে সর্বোচ্চ তাপমাত্রা ৩৮ ডিগ্রিতে পৌঁছে এক তীব্র তাপদাহ সৃষ্টি হয়েছিল।'
        },
        {
          ja: '最近はスマートフォン一つで電車の改札や買い物の決済がすべて完了します。',
          romaji: 'Saikin wa sumaatofon hitotsu de densha no kaisatsu ya kaimono no kessai ga subete kanryou shimasu.',
          meaningEn: 'Recently, with just one smartphone, train gates and shopping payments are all completed.',
          meaningBn: 'আজকাল একটিমাত্র স্মার্টফোন দিয়েই ট্রেনের গেট পারাপার ও কেনাকাটার বিল পরিশোধ হয়ে যায়।'
        },
        {
          ja: '列の最後に並んで、人気ラーメン店のオープンを順番に待ちました。',
          romaji: 'Retsu no saigo ni narande, ninki raamen-ten no oopun o junban ni machimashita.',
          meaningEn: 'I lined up at the end of the queue and waited for the popular ramen shop to open.',
          meaningBn: 'লাইনের একেবারে শেষে দাঁড়িয়ে জনপ্রিয় রামেন দোকানটি খোলার জন্য অপেক্ষা করলাম।'
        }
      ],
      tamagoTip: {
        bn: 'সূর্য ও কানের মতো যা সকলের চেয়ে উপরে বা অগ্রগণ্য। সর্বোচ্চ 最高, সাম্প্রতিক 最近 বা লেটেস্ট 最新।',
        en: 'The superlative prefix indicating the peak or extreme. Peak (最高), recent (最近), newest (最新).'
      }
    },

    // 16. 優先席
    {
      id: 'l14-yuusenseki',
      kanji: '優先席',
      emoji: '💺',
      strokeCount: 28,
      jlpt: 'N4',
      category: 'visual_recognition',
      readings: {
        onyomi: [
          { kana: 'ユウセンセキ', romaji: 'yuusenseki' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'priority seating (on trains/buses for elderly, pregnant, injured)',
        bn: 'অগ্রাধিকার আসন (ট্রেন/বাসে বয়োবৃদ্ধ, গর্ভবতী ও অসুস্থদের জন্য সংরক্ষিত আসন)'
      },
      vocab: [
        {
          kanji: '優先席',
          kana: 'ゆうせんせき',
          romaji: 'yuusenseki',
          meaningEn: 'priority seat, courtesy seat',
          meaningBn: 'অগ্রাধিকার আসন (ট্রেন/বাস)',
          tag: 'Train N4'
        },
        {
          kanji: '優先する',
          kana: 'ゆうせんする',
          romaji: 'yuusen suru',
          meaningEn: 'to prioritize, to give preference to',
          meaningBn: 'অগ্রাধিকার দেওয়া',
          tag: 'Verb N4'
        },
        {
          kanji: '座席',
          kana: 'ざせき',
          romaji: 'zaseki',
          meaningEn: 'seat',
          meaningBn: 'বসার আসন / সিট',
          tag: 'Transit N4'
        },
        {
          kanji: '指定席',
          kana: 'していせき',
          romaji: 'shiteiseki',
          meaningEn: 'reserved seat',
          meaningBn: 'রিজার্ভড আসন (শিনকানসেন)',
          tag: 'Train N4'
        },
        {
          kanji: '自由席',
          kana: 'じゆうせき',
          romaji: 'jiyuuseki',
          meaningEn: 'non-reserved seat',
          meaningBn: 'সাধারণ আসন (আগে আসলে আগে পাবেন)',
          tag: 'Train N4'
        },
        {
          kanji: '満席',
          kana: 'まんせき',
          romaji: 'manseki',
          meaningEn: 'all seats occupied, full house',
          meaningBn: 'সব সিট ভর্তি / পূর্ণ',
          tag: 'Daily N4'
        }
      ],
      sentences: [
        {
          ja: '「優先席付近では、混雑時には携帯電話の電源をお切りください。」',
          romaji: '"Yuusenseki fukin dewa, konzatsuji ni wa keitaidenwa no dengen o okiri kudasai."',
          meaningEn: '"Near priority seating, during crowded times please switch off mobile phone power."',
          meaningBn: '"অগ্রাধিকার আসনের আশেপাশে ভিড়ের সময় মোবাইল ফোনের সুইচ বন্ধ রাখুন (পেসমেকার সুরক্ষায়)।"'
        },
        {
          ja: '電車内では、お年寄りや妊婦さんのために優先席を譲り合いましょう。',
          romaji: 'Denshanai dewa, otoshiyori ya ninpu-san no tame ni yuusenseki o yuzuriaimashou.',
          meaningEn: 'Inside trains, let\'s mutually yield priority seats for the elderly and pregnant women.',
          meaningBn: 'ট্রেনের ভেতর বয়োবৃদ্ধ ও গর্ভবতী মায়েদের সম্মানে অগ্রাধিকার আসনটি ছেড়ে দেওয়া উচিত।'
        },
        {
          ja: '新幹線のチケットを買うとき、確実に座るために指定席を選びました。',
          romaji: 'Shinkansen no chiketto o kau toki, kakujitsu ni suwaru tame ni shiteiseki o erabimashita.',
          meaningEn: 'When buying Shinkansen tickets, I chose reserved seating to guarantee sitting.',
          meaningBn: 'শিনকানসেনের টিকিট কেনার সময় নিশ্চিতভাবে বসার জন্য আমি নির্ধারিত রিজার্ভড সিট বেছে নিয়েছি।'
        }
      ],
      tamagoTip: {
        bn: '優 (স্নেহ/মমতা) + 先 (আগে) + 席 (সিট)। দুর্বলদের প্রথমে বসার অধিকার 優先席 (ゆうせんせき)।',
        en: 'Kindness (優) + Prior (先) + Seat (席). Courtesy priority seating in Japanese public transit.'
      }
    },

    // 17. 禁煙
    {
      id: 'l14-kinen',
      kanji: '禁煙',
      emoji: '🚭',
      strokeCount: 26,
      jlpt: 'N4',
      category: 'visual_recognition',
      readings: {
        onyomi: [
          { kana: 'キンエン', romaji: 'kin\'en' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'no smoking, smoking prohibited, quitting smoking',
        bn: 'ধূমপান নিষেধ, অধূমপায়ী এলাকা'
      },
      vocab: [
        {
          kanji: '禁煙',
          kana: 'きんえん',
          romaji: 'kin\'en',
          meaningEn: 'no smoking, quitting smoking',
          meaningBn: 'ধূমপান নিষেধ / ধূমপান বর্জন',
          tag: 'Daily N4'
        },
        {
          kanji: '禁煙席',
          kana: 'きんえんせき',
          romaji: 'kin\'enseki',
          meaningEn: 'non-smoking seats',
          meaningBn: 'অধূমপায়ীদের আসন',
          tag: 'Shop N4'
        },
        {
          kanji: '禁煙車',
          kana: 'きんえんしゃ',
          romaji: 'kin\'ensha',
          meaningEn: 'non-smoking train car',
          meaningBn: 'অধূমপায়ী বগি (শিনকানসেন)',
          tag: 'Train N4'
        },
        {
          kanji: '喫煙所',
          kana: 'きつえんじょ',
          romaji: 'kitsuenjo',
          meaningEn: 'designated smoking area',
          meaningBn: 'ধূমপানের জন্য নির্ধারিত নির্দিষ্ট কক্ষ/স্থান',
          tag: 'Place N4'
        },
        {
          kanji: '煙草',
          kana: 'たばこ',
          romaji: 'tabako',
          meaningEn: 'tobacco, cigarettes',
          meaningBn: 'সিগারেট / তামাক',
          tag: 'Daily N5'
        },
        {
          kanji: '煙',
          kana: 'けむり',
          romaji: 'kemuri',
          meaningEn: 'smoke, fumes',
          meaningBn: 'ধোঁয়া',
          tag: 'Nature N4'
        }
      ],
      sentences: [
        {
          ja: '「駅の構内およびホームは、終日全面禁煙となっております。」',
          romaji: '"Eki no kounai oyobi hoomu wa, shuujitsu zenmen kin\'en to natte orimasu."',
          meaningEn: '"Station premises and platforms are strictly non-smoking all day throughout."',
          meaningBn: '"স্টেশন প্রাঙ্গণ এবং ট্রেনের প্ল্যাটফর্ম সারাদিনব্যাপী সম্পূর্ণ ধূমপানমুক্ত এলাকা।"'
        },
        {
          ja: '健康のために今年こそ煙草をやめて、禁煙を続けると決心しました。',
          romaji: 'Kenkou no tame ni kotoshi koso tabako o yamete, kin\'en o tsuzukeru to kesshin shimashita.',
          meaningEn: 'For the sake of health, I resolved to finally quit cigarettes this year and continue smoking cessation.',
          meaningBn: 'সুস্বাস্থ্যের স্বার্থে এবার সিগারেট ছেড়ে দিয়ে ধূমপান বর্জন বজায় রাখার সংকল্প করেছি।'
        },
        {
          ja: '路上での喫煙は条例で禁止されており、罰金が科される自治体もあります。',
          romaji: 'Rojou de no kitsuen wa jourei de kinshi sarete ori, bakkin ga kasareru jichitai mo arimasu.',
          meaningEn: 'Smoking on public streets is prohibited by local ordinances, and some municipalities levy fines.',
          meaningBn: 'রাস্তায় হেঁটে হেঁটে ধূমপান করা আইনে নিষিদ্ধ এবং অনেক পৌরসভায় এতে তাৎক্ষণিক জরিমানা করা হয়।'
        }
      ],
      tamagoTip: {
        bn: '禁 (নিষেধ) + 煙 (ধোঁয়া/তামাক)। স্বাস্থ্য ও পরিচ্ছন্নতা রক্ষায় জনবহুল স্থানে 禁煙 (きんえん)।',
        en: 'Prohibition (禁) + Smoke (煙). Universal no-smoking designation in Japanese stations and shops.'
      }
    }
  ]
};
