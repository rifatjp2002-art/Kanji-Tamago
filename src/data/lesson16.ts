import { Lesson } from '../types/kanji';

export const lesson16: Lesson = {
  id: 16,
  number: 16,
  titleJa: '始めよう！',
  titleRomaji: 'Hajimeyou!',
  titleBn: 'শুরু করা যাক! (Let\'s begin - Part-time job & Skills)',
  titleEn: 'Let\'s begin! (Part-time job & Skills)',
  descriptionBn: 'জাপানে খণ্ডকালীন চাকরি (アルバイト), কাজের দক্ষতা, এবং জীবনবৃত্তান্ত (履歴書) সম্পর্কিত প্রয়োজনীয় কান্জি।',
  descriptionEn: 'Essential Kanji for starting a part-time job, skills, hourly pay, and resumes in Japan.',
  kanjiList: [
    // --- Main Kanji (書ける) ---
    {
      id: 'l16-shi',
      kanji: '仕',
      emoji: '👔',
      strokeCount: 5,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'シ', romaji: 'shi' }],
        kunyomi: [{ kana: 'つか.える', romaji: 'tsuka.eru' }]
      },
      meanings: {
        en: 'Attend, doing, official',
        bn: 'পরিবেশন করা, সেবা, কাজ'
      },
      vocab: [
        { kanji: '仕事', kana: 'しごと', romaji: 'shigoto', meaningEn: 'work, job', meaningBn: 'কাজ, চাকরি', tag: 'N5' },
        { kanji: '仕送り', kana: 'しおくり', romaji: 'shiokuri', meaningEn: 'allowance, remittance', meaningBn: 'বাড়ি থেকে পাঠানো টাকা', tag: 'N3' },
        { kanji: '仕える', kana: 'つかえる', romaji: 'tsukaeru', meaningEn: 'to serve, to work for', meaningBn: 'সেবা করা বা অধীনে কাজ করা', tag: 'N3' },
        { kanji: '仕立て', kana: 'したて', romaji: 'shitate', meaningEn: 'tailoring', meaningBn: 'পোশাক সেলাই', tag: 'N3' },
        { kanji: '仕事中', kana: 'しごとちゅう', romaji: 'shigotochuu', meaningEn: 'at work', meaningBn: 'কাজের ব্যস্ততায়', tag: 'N4' }
      ],
      sentences: [
        {
          ja: '新しい仕事を探しています。',
          romaji: 'Atarashii shigoto o sagashite imasu.',
          meaningEn: 'I am looking for a new job.',
          meaningBn: 'আমি নতুন চাকরি খুঁজছি।'
        },
        {
          ja: '毎月親から仕送りをもらいます。',
          romaji: 'Maitsuki oyako kara shiokuri o moraimasu.',
          meaningEn: 'I receive an allowance from my parents every month.',
          meaningBn: 'প্রতি মাসে বাবা-মার কাছ থেকে টাকা পাই।'
        }
      ]
    },
    {
      id: 'l16-goto',
      kanji: '事',
      emoji: '📋',
      strokeCount: 8,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ジ', romaji: 'ji' }],
        kunyomi: [{ kana: 'こと', romaji: 'koto' }]
      },
      meanings: {
        en: 'Matter, thing, business',
        bn: 'বিষয়, ব্যাপার, ঘটনা'
      },
      vocab: [
        { kanji: '仕事', kana: 'しごと', romaji: 'shigoto', meaningEn: 'work, job', meaningBn: 'কাজ', tag: 'N5' },
        { kanji: '食事', kana: 'しょくじ', romaji: 'shokuji', meaningEn: 'meal', meaningBn: 'খাবার খাওয়া', tag: 'N5' },
        { kanji: '用事', kana: 'ようじ', romaji: 'youji', meaningEn: 'errand, task', meaningBn: 'জরুরি কাজ', tag: 'N4' },
        { kanji: '火事', kana: 'かじ', romaji: 'kaji', meaningEn: 'fire accident', meaningBn: 'আগুন লাগা', tag: 'N4' },
        { kanji: '事故', kana: 'じこ', romaji: 'jiko', meaningEn: 'accident', meaningBn: 'দুর্ঘটনা', tag: 'N4' }
      ],
      sentences: [
        {
          ja: '今日は大切な用事があります。',
          romaji: 'Kyou wa taisetsu na youji ga arimasu.',
          meaningEn: 'I have an important errand today.',
          meaningBn: 'আজ আমার একটি জরুরি কাজ আছে।'
        },
        {
          ja: '交通事故に気をつけましょう。',
          romaji: 'Koutsuu jiko ni ki o tsukemashou.',
          meaningEn: 'Let’s be careful of traffic accidents.',
          meaningBn: 'সড়ক দুর্ঘটনা থেকে সতর্ক থাকি।'
        }
      ]
    },
    {
      id: 'l16-hataraku',
      kanji: '働',
      emoji: '⚙️',
      strokeCount: 13,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ドウ', romaji: 'dou' }],
        kunyomi: [{ kana: 'はたら.く', romaji: 'hatara.ku' }]
      },
      meanings: {
        en: 'To work, labor',
        bn: 'কাজ করা, শ্রম দেওয়া'
      },
      vocab: [
        { kanji: '働く', kana: 'はたらく', romaji: 'hataraku', meaningEn: 'to work', meaningBn: 'কাজ করা', tag: 'N5' },
        { kanji: '労働', kana: 'ろうどう', romaji: 'roudou', meaningEn: 'manual labor', meaningBn: 'শ্রম', tag: 'N3' },
        { kanji: '共働き', kana: 'ともばたらき', romaji: 'tomobataraki', meaningEn: 'dual-income couple', meaningBn: 'উভয় দম্পতির কাজ করা', tag: 'N3' },
        { kanji: '働かせる', kana: 'はたらかせる', romaji: 'hatarakaseru', meaningEn: 'to make work, to use mind', meaningBn: 'খাটানো বা কাজ করানো', tag: 'N3' },
        { kanji: '働き者', kana: 'はたらきもの', romaji: 'hatarakimono', meaningEn: 'hard worker', meaningBn: 'কঠোর পরিশ্রমী ব্যক্তি', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '私は日本で働きたいです。',
          romaji: 'Watashi wa Nihon de hatarakitai desu.',
          meaningEn: 'I want to work in Japan.',
          meaningBn: 'আমি জাপানে কাজ করতে চাই।'
        },
        {
          ja: '父も母も共働きで忙しいです。',
          romaji: 'Chichi mo haha mo tomobataraki de isogashii desu.',
          meaningEn: 'Both my father and mother work and are busy.',
          meaningBn: 'বাবা-মা উভয়েই চাকরি করেন তাই ব্যস্ত।'
        }
      ]
    },
    {
      id: 'l16-oshieru',
      kanji: '教',
      emoji: '📖',
      strokeCount: 11,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'キョウ', romaji: 'kyou' }],
        kunyomi: [{ kana: 'おし.える', romaji: 'oshi.eru' }, { kana: 'おそ.わる', romaji: 'oso.waru' }]
      },
      meanings: {
        en: 'Teach, inform, religion',
        bn: 'শেখানো, জানা, ধর্ম'
      },
      vocab: [
        { kanji: '教える', kana: 'おしえる', romaji: 'oshieru', meaningEn: 'to teach', meaningBn: 'শেখানো', tag: 'N5' },
        { kanji: '教室', kana: 'きょうしつ', romaji: 'kyoushitsu', meaningEn: 'classroom', meaningBn: 'শ্রেণিকক্ষ', tag: 'N5' },
        { kanji: '教科書', kana: 'きょうかしょ', romaji: 'kyoukasho', meaningEn: 'textbook', meaningBn: 'পাঠ্যবই', tag: 'N4' },
        { kanji: '教会', kana: 'きょうかい', romaji: 'kyoukai', meaningEn: 'church', meaningBn: 'গির্জা', tag: 'N4' },
        { kanji: '教授', kana: 'きょうじゅ', romaji: 'kyouju', meaningEn: 'professor', meaningBn: 'প্রফেসর', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '先生が親切に漢字を教えてくれます。',
          romaji: 'Sensei ga shinsetsu ni kanji o oshiete kuremasu.',
          meaningEn: 'The teacher kindly teaches me kanji.',
          meaningBn: 'শিক্ষক আন্তরিকতার সাথে কান্জি শিখিয়ে দেন।'
        },
        {
          ja: '授業で新しい教科書を使います。',
          romaji: 'Jugyou de atarashii kyoukasho o tsukaimasu.',
          meaningEn: 'We use a new textbook in class.',
          meaningBn: 'ক্লাসে নতুন পাঠ্যবই ব্যবহার করি।'
        }
      ]
    },
    {
      id: 'l16-oyogu',
      kanji: '泳',
      emoji: '🏊',
      strokeCount: 8,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'エイ', romaji: 'ei' }],
        kunyomi: [{ kana: 'およ.ぐ', romaji: 'oyo.gu' }]
      },
      meanings: {
        en: 'To swim',
        bn: 'সাঁতার কাটা'
      },
      vocab: [
        { kanji: '泳ぐ', kana: 'およぐ', romaji: 'oyogu', meaningEn: 'to swim', meaningBn: 'সাঁতার কাটা', tag: 'N5' },
        { kanji: '水泳', kana: 'すいえい', romaji: 'suiei', meaningEn: 'swimming', meaningBn: 'সাঁতার প্রতিযোগিতা/ব্যায়াম', tag: 'N3' },
        { kanji: '水泳部', kana: 'すいえいぶ', romaji: 'suieibu', meaningEn: 'swimming club', meaningBn: 'সুইমিং ক্লাব', tag: 'N3' },
        { kanji: '平泳ぎ', kana: 'ひらおよぎ', romaji: 'hiraoyogi', meaningEn: 'breaststroke', meaningBn: 'বুক সাঁতার', tag: 'N3' },
        { kanji: '背泳ぎ', kana: 'せおよぎ', romaji: 'seoyogi', meaningEn: 'backstroke', meaningBn: 'চিত সাঁতার', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '夏休みに海で上手に泳ぎました。',
          romaji: 'Natsuyasumi ni umi de jouzu ni oyogimashita.',
          meaningEn: 'I swam well in the sea during summer vacation.',
          meaningBn: 'গ্রীষ্মের ছুটিতে সমুদ্রে ভালো সাঁতার কেটেছি।'
        },
        {
          ja: '毎週プールで水泳を練習しています。',
          romaji: 'Maishuu puuru de suiei o renshuu shite imasu.',
          meaningEn: 'I practice swimming in the pool every week.',
          meaningBn: 'প্রতি সপ্তাহে সুইমিং পুলে সাঁতার অনুশীলন করি।'
        }
      ]
    },
    {
      id: 'l16-ei',
      kanji: '英',
      emoji: '🇬🇧',
      strokeCount: 8,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'エイ', romaji: 'ei' }],
        kunyomi: []
      },
      meanings: {
        en: 'England, English, outstanding',
        bn: 'ইংল্যান্ড, ইংরেজি, শ্রেষ্ঠ'
      },
      vocab: [
        { kanji: '英語', kana: 'えいご', romaji: 'eigo', meaningEn: 'English language', meaningBn: 'ইংরেজি ভাষা', tag: 'N5' },
        { kanji: '英国', kana: 'えいこく', romaji: 'eikoku', meaningEn: 'United Kingdom', meaningBn: 'যুক্তরাজ্য', tag: 'N3' },
        { kanji: '英会話', kana: 'えいかいわ', romaji: 'eikaiwa', meaningEn: 'English conversation', meaningBn: 'স্পোকেন ইংলিশ', tag: 'N3' },
        { kanji: '英文', kana: 'えいぶん', romaji: 'eibun', meaningEn: 'English text', meaningBn: 'ইংরেজি বাক্য বা পাঠ', tag: 'N3' },
        { kanji: '英雄', kana: 'えいゆう', romaji: 'eiyuu', meaningEn: 'hero', meaningBn: 'বীর বা নায়ক', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '私は英語と日本語が話せます。',
          romaji: 'Watashi wa eigo to nihonngo ga hanasemasu.',
          meaningEn: 'I can speak English and Japanese.',
          meaningBn: 'আমি ইংরেজি ও জাপানি বলতে পারি।'
        },
        {
          ja: '英会話スクールに通う予定です。',
          romaji: 'Eikaiwa sukuuru ni kayou yotei desu.',
          meaningEn: 'I plan to attend an English conversation school.',
          meaningBn: 'স্পোকেন ইংলিশ স্কুলে ভর্তি হওয়ার পরিকল্পনা আছে।'
        }
      ]
    },
    {
      id: 'l16-un',
      kanji: '運',
      emoji: '🚚',
      strokeCount: 12,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ウン', romaji: 'un' }],
        kunyomi: [{ kana: 'はこ.ぶ', romaji: 'hako.bu' }]
      },
      meanings: {
        en: 'Carry, transport, fortune',
        bn: 'পরিবহন, ভাগ্য, কপাল'
      },
      vocab: [
        { kanji: '運転', kana: 'うんてん', romaji: 'unten', meaningEn: 'driving', meaningBn: 'গাড়ি চালানো', tag: 'N5' },
        { kanji: '運動', kana: 'うんどう', romaji: 'undou', meaningEn: 'exercise, sports', meaningBn: 'ব্যায়াম', tag: 'N5' },
        { kanji: '運ぶ', kana: 'はこぶ', romaji: 'hakobu', meaningEn: 'to carry', meaningBn: 'বহন করা', tag: 'N4' },
        { kanji: '運がいい', kana: 'うんがいい', romaji: 'un ga ii', meaningEn: 'lucky', meaningBn: 'ভাগ্য ভালো', tag: 'N4' },
        { kanji: '運送', kana: 'うんそう', romaji: 'unsou', meaningEn: 'transportation', meaningBn: 'পণ্য পরিবহন', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '車を安全に運転します。',
          romaji: 'Kuruma o anzen ni unten shimasu.',
          meaningEn: 'I drive the car safely.',
          meaningBn: 'আমি নিরাপদে গাড়ি চালাই।'
        },
        {
          ja: '健康のために毎日運動をしています。',
          romaji: 'Kenkou no tame ni mainichi undou o shite imasu.',
          meaningEn: 'I exercise every day for my health.',
          meaningBn: 'স্বাস্থ্যের জন্য প্রতিদিন ব্যায়াম করি।'
        }
      ]
    },
    {
      id: 'l16-ten',
      kanji: '転',
      emoji: '🔄',
      strokeCount: 11,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'テン', romaji: 'ten' }],
        kunyomi: [{ kana: 'ころ.ぶ', romaji: 'korobu' }, { kana: 'ころ.がる', romaji: 'korogaru' }]
      },
      meanings: {
        en: 'Revolve, turn around, shift',
        bn: 'ঘুরানো, পরিবর্তন, গড়ানো'
      },
      vocab: [
        { kanji: '自転車', kana: 'じてんしゃ', romaji: 'jitensha', meaningEn: 'bicycle', meaningBn: 'সাইকেল', tag: 'N5' },
        { kanji: '運転', kana: 'うんてん', romaji: 'unten', meaningEn: 'driving', meaningBn: 'গাড়ি চালানো', tag: 'N5' },
        { kanji: '転ぶ', kana: 'ころぶ', romaji: 'korobu', meaningEn: 'to fall down', meaningBn: 'পড়ে যাওয়া', tag: 'N4' },
        { kanji: '転勤', kana: 'てんきん', romaji: 'tenkin', meaningEn: 'job transfer', meaningBn: 'চাকরির বদলি', tag: 'N3' },
        { kanji: '回転', kana: 'かいてん', romaji: 'kaiten', meaningEn: 'rotation', meaningBn: 'ঘোড়া বা চাকা ঘোরা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '毎日自転車で学校へ通っています。',
          romaji: 'Mainichi jitensha de gakkou e kayotte imasu.',
          meaningEn: 'I commute to school by bicycle every day.',
          meaningBn: 'প্রতিদিন সাইকেল চালিয়ে স্কুলে যাতায়াত করি।'
        },
        {
          ja: '道で転んでケガをしました。',
          romaji: 'Michi de koronde kega o shimashita.',
          meaningEn: 'I fell down on the road and got injured.',
          meaningBn: 'রাস্তায় পড়ে গিয়ে আঘাত পেয়েছি।'
        }
      ]
    },
    {
      id: 'l16-hou',
      kanji: '方',
      emoji: '🧭',
      strokeCount: 4,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ホウ', romaji: 'hou' }],
        kunyomi: [{ kana: 'かた', romaji: 'kata' }]
      },
      meanings: {
        en: 'Direction, person, method',
        bn: 'দিক, ব্যক্তি, পদ্ধতি'
      },
      vocab: [
        { kanji: '方', kana: 'かた', romaji: 'kata', meaningEn: 'person (polite)', meaningBn: 'সম্মানিত ব্যক্তি', tag: 'N4' },
        { kanji: '方法', kana: 'ほうほう', romaji: 'houhou', meaningEn: 'method', meaningBn: 'উপায় বা পদ্ধতি', tag: 'N3' },
        { kanji: '書き方', kana: 'かきかた', romaji: 'kakikata', meaningEn: 'way of writing', meaningBn: 'লেখার নিয়ম', tag: 'N4' },
        { kanji: '方向', kana: 'ほうこう', romaji: 'houkou', meaningEn: 'direction', meaningBn: 'দিক নির্দেশনা', tag: 'N3' },
        { kanji: '両方', kana: 'りょうほう', romaji: 'ryouhou', meaningEn: 'both sides', meaningBn: 'উভয় দিক বা দুটিই', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'あちらの方は日本語の先生です。',
          romaji: 'Achira no kata wa nihonngo no sensei desu.',
          meaningEn: 'That person over there is a Japanese teacher.',
          meaningBn: 'ওই সম্মানিত ব্যক্তিটি জাপানি ভাষার শিক্ষক।'
        },
        {
          ja: '漢字の正しい書き方を教えてください。',
          romaji: 'Kanji no tadashii kakikata o oshiete kudasai.',
          meaningEn: 'Please teach me the correct way of writing kanji.',
          meaningBn: 'কান্জি লেখার সঠিক পদ্ধতিটি বুঝিয়ে দিন।'
        }
      ]
    },
    {
      id: 'l16-ryuu',
      kanji: '留',
      emoji: '✈️',
      strokeCount: 10,
      jlpt: 'N3',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'リュウ', romaji: 'ryuu' }, { kana: 'ル', romaji: 'ru' }],
        kunyomi: [{ kana: 'と.まる', romaji: 'tomaru' }]
      },
      meanings: {
        en: 'Stay, detain, stay abroad',
        bn: 'থাকা, বিদেশে থাকা, আটকে রাখা'
      },
      vocab: [
        { kanji: '留学生', kana: 'りゅうがくせい', romaji: 'ryuugakusei', meaningEn: 'international student', meaningBn: 'বিদেশি শিক্ষার্থী', tag: 'N4' },
        { kanji: '留学', kana: 'りゅうがく', romaji: 'ryuugaku', meaningEn: 'studying abroad', meaningBn: 'উচ্চশিক্ষায় বিদেশে যাওয়া', tag: 'N4' },
        { kanji: '留守', kana: 'るす', romaji: 'rusu', meaningEn: 'away from home', meaningBn: 'বাড়িতে না থাকা', tag: 'N4' },
        { kanji: '書類', kana: 'しょるい', romaji: 'shorui', meaningEn: 'document', meaningBn: 'কাগজপত্র', tag: 'N3' },
        { kanji: '書留', kana: 'かきとめ', romaji: 'kakitome', meaningEn: 'registered mail', meaningBn: 'রেজিস্টার্ড ডাক', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '私は日本で留学生として勉強しています。',
          romaji: 'Watashi wa Nihon de ryuugakusei to shite benkyou shite imasu.',
          meaningEn: 'I am studying in Japan as an international student.',
          meaningBn: 'আমি জাপানে শিক্ষার্থী হিসেবে পড়াশোনা করছি।'
        },
        {
          ja: '今、家は留守ですから鍵をかけます。',
          romaji: 'Ima, ie wa rusu desu kara kagi o kakemasu.',
          meaningEn: 'No one is home right now, so I will lock the door.',
          meaningBn: 'এখন বাড়িতে কেউ নেই তাই তালা লাগিয়ে দিচ্ছি।'
        }
      ]
    },

    // --- Read Only Kanji (読める) ---
    {
      id: 'l16-ka',
      kanji: '可',
      emoji: '✅',
      strokeCount: 5,
      jlpt: 'N3',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'カ', romaji: 'ka' }],
        kunyomi: []
      },
      meanings: {
        en: 'Possible, approval',
        bn: 'সম্ভব, অনুমোদন'
      },
      vocab: [
        { kanji: '可能', kana: 'かのう', romaji: 'kanou', meaningEn: 'possible', meaningBn: 'সম্ভব', tag: 'N3' },
        { kanji: '不可', kana: 'ふか', romaji: 'fuka', meaningEn: 'not allowed', meaningBn: 'অনুমোদিত নয়', tag: 'N3' },
        { kanji: '可否', kana: 'かひ', romaji: 'kahi', meaningEn: 'yes or no, propriety', meaningBn: 'সম্ভব কি অসম্ভব', tag: 'N3' },
        { kanji: '許可', kana: 'きょか', romaji: 'kyoka', meaningEn: 'permission', meaningBn: 'অনুমতি', tag: 'N3' },
        { kanji: '愛可', kana: 'あいか', romaji: 'aika', meaningEn: 'lovable', meaningBn: 'প্রিয়', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'クレジットカードでの払いが可能です。',
          romaji: 'Kurejitto kaado de no harai ga kanou desu.',
          meaningEn: 'Payment with credit card is possible.',
          meaningBn: 'ক্রেডিট কার্ডে বিল প্রদান সম্ভব।'
        },
        {
          ja: '先生に許可をもらってから入ります。',
          romaji: 'Sensei ni kyoka o moratte kara hairimasu.',
          meaningEn: 'I will enter after getting permission from the teacher.',
          meaningBn: 'শিক্ষকের অনুমতি নিয়ে ভেতরে প্রবেশ করব।'
        }
      ]
    },
    {
      id: 'l16-fu',
      kanji: '不',
      emoji: '❌',
      strokeCount: 4,
      jlpt: 'N3',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'フ', romaji: 'fu' }, { kana: 'ブ', romaji: 'bu' }],
        kunyomi: []
      },
      meanings: {
        en: 'Non-, bad, un-',
        bn: 'অ-, না-, অপ-'
      },
      vocab: [
        { kanji: '不可', kana: 'ふか', romaji: 'fuka', meaningEn: 'not allowed', meaningBn: 'অনুমোদিত নয়', tag: 'N3' },
        { kanji: '不便', kana: 'ふべん', romaji: 'fuben', meaningEn: 'inconvenient', meaningBn: 'অসুবিধাজনক', tag: 'N4' },
        { kanji: '不安', kana: 'ふあん', romaji: 'fuan', meaningEn: 'anxiety, uneasy', meaningBn: 'চিন্তা বা উদ্বেগ', tag: 'N3' },
        { kanji: '不可能', kana: 'ふかのう', romaji: 'fukanou', meaningEn: 'impossible', meaningBn: 'অসম্ভব', tag: 'N3' },
        { kanji: '不足', kana: 'ふそく', romaji: 'fusoku', meaningEn: 'shortage, lack', meaningBn: 'ঘাটতি', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'この部屋は静かで不便ではありません。',
          romaji: 'Kono heya wa shizuka de fuben de wa arimasen.',
          meaningEn: 'This room is quiet and not inconvenient.',
          meaningBn: 'এই ঘরটি শান্ত এবং অসুবিধাজনক নয়।'
        },
        {
          ja: '試験の前は少し不安になります。',
          romaji: 'Shiken no mae wa sukoshi fuan ni narimasu.',
          meaningEn: 'I feel a bit anxious before exams.',
          meaningBn: 'পরীক্ষার আগে কিছুটা চিন্তিত লাগে।'
        }
      ]
    },
    {
      id: 'l16-jikyuu',
      kanji: '時給',
      emoji: '💰',
      strokeCount: 10,
      jlpt: 'N3',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'ジキュウ', romaji: 'jikyuu' }],
        kunyomi: []
      },
      meanings: {
        en: 'Hourly wage',
        bn: 'ঘণ্টাভিত্তিক মজুরি'
      },
      vocab: [
        { kanji: '時給', kana: 'じきゅう', romaji: 'jikyuu', meaningEn: 'hourly wage', meaningBn: 'ঘণ্টা প্রতি বেতন', tag: 'N3' },
        { kanji: '月給', kana: 'げっきゅう', romaji: 'gekkyuu', meaningEn: 'monthly salary', meaningBn: 'মাসিক বেতন', tag: 'N3' },
        { kanji: '給料', kana: 'きゅうりょう', romaji: 'kyuuryou', meaningEn: 'salary', meaningBn: 'বেতন', tag: 'N4' },
        { kanji: '給食', kana: 'きゅうしょく', romaji: 'kyuushoku', meaningEn: 'school lunch', meaningBn: 'স্কুলের খাবার', tag: 'N3' },
        { kanji: '補給', kana: 'ほきゅう', romaji: 'hokyuu', meaningEn: 'supply, refill', meaningBn: 'সরবরাহ', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'このアルバイトの時給は1200円です。',
          romaji: 'Kono arubaito no jikyuu wa sen-nihyaku-en desu.',
          meaningEn: 'The hourly wage for this part-time job is 1200 yen.',
          meaningBn: 'এই খণ্ডকালীন চাকরির ঘণ্টা প্রতি বেতন ১২০০ ইয়েন।'
        },
        {
          ja: '毎月25日に給料が振り込まれます。',
          romaji: 'Maitsuki nijuugo-nichi ni kyuuryou ga furikomaremasu.',
          meaningEn: 'Salary is deposited on the 25th of every month.',
          meaningBn: 'প্রতি মাসের ২৫ তারিখে বেতন ব্যাংকে জমা হয়।'
        }
      ]
    },
    {
      id: 'l16-rirekisho',
      kanji: '履歴書',
      emoji: '📄',
      strokeCount: 15,
      jlpt: 'N3',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'リレキショ', romaji: 'rirekisho' }],
        kunyomi: []
      },
      meanings: {
        en: 'Resume, curriculum vitae',
        bn: 'জীবনবৃত্তান্ত / সিভি'
      },
      vocab: [
        { kanji: '履歴書', kana: 'りれきしょ', romaji: 'rirekisho', meaningEn: 'resume', meaningBn: 'সিভি', tag: 'N3' },
        { kanji: '歴史', kana: 'れきし', romaji: 'rekishi', meaningEn: 'history', meaningBn: 'ইতিহাস', tag: 'N4' },
        { kanji: '学歴', kana: 'がくれき', romaji: 'gakureki', meaningEn: 'academic background', meaningBn: 'শিক্ষাগত যোগ্যতা', tag: 'N3' },
        { kanji: '職歴', kana: 'しょくれき', romaji: 'shokureki', meaningEn: 'work experience', meaningBn: 'চাকরির অভিজ্ঞতা', tag: 'N3' },
        { kanji: '経歴', kana: 'けいれき', romaji: 'keireki', meaningEn: 'career history', meaningBn: 'কর্মজীবনের ব্যাকগ্রাউন্ড', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '面接の前に丁寧に履歴書を書きます。',
          romaji: 'Mensetsu no mae ni teinei ni rirekisho o kakimasu.',
          meaningEn: 'I carefully write my resume before the interview.',
          meaningBn: 'ইন্টারভিউয়ের আগে যত্নসহকারে সিভি লিখি।'
        },
        {
          ja: '写真付きの履歴書を送ってください。',
          romaji: 'Shashin tsuki no rirekisho o okutte kudasai.',
          meaningEn: 'Please send a resume with a photo attached.',
          meaningBn: 'ছবি সংযুক্ত সিভি পাঠিয়ে দিন।'
        }
      ]
    },

    // --- Visual Recognition (見て、分かる) ---
    {
      id: 'l16-you',
      kanji: '要',
      emoji: '⚠️',
      strokeCount: 9,
      jlpt: 'N3',
      category: 'visual_recognition',
      readings: {
        onyomi: [{ kana: 'ヨウ', romaji: 'you' }],
        kunyomi: [{ kana: 'い.る', romaji: 'i.ru' }]
      },
      meanings: {
        en: 'Need, necessary, essential',
        bn: 'প্রয়োজন, জরুরি'
      },
      vocab: [
        { kanji: '必要', kana: 'ひつよう', romaji: 'hitsuyou', meaningEn: 'necessary', meaningBn: 'প্রয়োজনীয়', tag: 'N4' },
        { kanji: '要る', kana: 'いる', romaji: 'iru', meaningEn: 'to need', meaningBn: 'প্রয়োজন হওয়া', tag: 'N5' },
        { kanji: '重要', kana: 'じゅうよう', romaji: 'juuyou', meaningEn: 'important', meaningBn: 'গুরুত্বপূর্ণ', tag: 'N3' },
        { kanji: '要素', kana: 'ようそ', romaji: 'youso', meaningEn: 'element', meaningBn: 'উপাদান', tag: 'N3' },
        { kanji: '不要', kana: 'ふよう', romaji: 'fuyou', meaningEn: 'unnecessary', meaningBn: 'অপ্রয়োজনীয়', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '手続きには身分証明書が必要です。',
          romaji: 'Tetsuduki ni wa mibun shoumeisho ga hitsuyou desu.',
          meaningEn: 'An ID card is necessary for the procedure.',
          meaningBn: 'কাগজপত্রের কাজের জন্য পরিচয়পত্র প্রয়োজন।'
        },
        {
          ja: '要点をまとめて説明してください。',
          romaji: 'Youten o matomete setsumei shite kudasai.',
          meaningEn: 'Please summarize the key points and explain.',
          meaningBn: 'মূল বিষয়টি গুছিয়ে বুঝিয়ে বলুন।'
        }
      ]
    }
  ]
};
