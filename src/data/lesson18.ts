import { Lesson } from '../types/kanji';

export const lesson18: Lesson = {
  id: 18,
  number: 18,
  titleJa: '目標に向かって',
  titleRomaji: 'Mokuhyou ni mukatte',
  titleBn: 'লক্ষ্যের দিকে (Towards Goals - Advancement & Exams)',
  titleEn: 'Towards Goals (Advancement & Exams)',
  descriptionBn: 'উচ্চশিক্ষা, পরীক্ষা, চাকরি এবং লক্ষ্য অর্জন সম্পর্কিত প্রয়োজনীয় কান্জি (進, 試, 験, 卒, 業, 説, 明, 写, 真, 願, 部, 科)।',
  descriptionEn: 'Essential Kanji for higher education, exams, career advancement, and achieving goals.',
  kanjiList: [
    // --- Main Kanji (書ける: 進, 試, 験, 卒, 業, 説, 明, 写, 真, 願, 部, 科) ---
    {
      id: 'l18-susumu',
      kanji: '進',
      emoji: '🚀',
      strokeCount: 11,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'シン', romaji: 'shin' }],
        kunyomi: [{ kana: 'すす.む', romaji: 'susu.mu' }, { kana: 'すす.める', romaji: 'susu.meru' }]
      },
      meanings: {
        en: 'Advance, proceed, progress',
        bn: 'অগ্রসর হওয়া, এগিয়ে যাওয়া'
      },
      vocab: [
        { kanji: '進学', kana: 'しんがく', romaji: 'shingaku', meaningEn: 'entering higher education', meaningBn: 'উচ্চশিক্ষায় ভর্তি', tag: 'N3' },
        { kanji: '進む', kana: 'すすむ', romaji: 'susumu', meaningEn: 'to advance', meaningBn: 'এগিয়ে যাওয়া', tag: 'N4' },
        { kanji: '進路', kana: 'しんろ', romaji: 'shinro', meaningEn: 'future path', meaningBn: 'ভবিষ্যৎ ক্যারিয়ারের পথ', tag: 'N3' },
        { kanji: '進歩', kana: 'しんぽ', romaji: 'shinpo', meaningEn: 'progress, improvement', meaningBn: 'উন্নতি বা অগ্রগতি', tag: 'N3' },
        { kanji: '行進', kana: 'こうしん', romaji: 'koushin', meaningEn: 'march, parade', meaningBn: 'মার্চ বা প্যারেড', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '高校卒業後、大学に進学します।',
          romaji: 'Koukou sotsugyou go, daigaku ni shingaku shimasu.',
          meaningEn: 'After graduating high school, I will enter university.',
          meaningBn: 'হাইস্কুল পাসের পর বিশ্ববিদ্যালয়ে ভর্তি হব।'
        },
        {
          ja: '日本語の勉強が順調に進んでいます।',
          romaji: 'Nihonngo no benkyou ga junchou ni susunde imasu.',
          meaningEn: 'My Japanese studies are progressing smoothly.',
          meaningBn: 'আমার জাপানি ভাষা শিক্ষা দারুণভাবে এগিয়ে চলেছে।'
        }
      ]
    },
    {
      id: 'l18-tamesu',
      kanji: '試',
      emoji: '📝',
      strokeCount: 13,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'シ', romaji: 'shi' }],
        kunyomi: [{ kana: 'ため.す', romaji: 'tame.su' }]
      },
      meanings: {
        en: 'Test, try, attempt',
        bn: 'পরীক্ষা করা, চেষ্টা করা'
      },
      vocab: [
        { kanji: '試験', kana: 'しけん', romaji: 'shiken', meaningEn: 'exam', meaningBn: 'পরীক্ষা', tag: 'N5' },
        { kanji: '試合', kana: 'しあい', romaji: 'shiai', meaningEn: 'match, game', meaningBn: 'খেলার ম্যাচ', tag: 'N4' },
        { kanji: '試着', kana: 'しちゃく', romaji: 'shichaku', meaningEn: 'trying on clothes', meaningBn: 'পোশাক ট্রায়াল দেওয়া', tag: 'N3' },
        { kanji: '試食', kana: 'ししょく', romaji: 'shishoku', meaningEn: 'food sampling', meaningBn: 'খাবার টেস্ট করা', tag: 'N3' },
        { kanji: '試す', kana: 'ためす', romaji: 'tamesu', meaningEn: 'to try out', meaningBn: 'চেষ্টা করে দেখা', tag: 'N4' }
      ],
      sentences: [
        {
          ja: '来週日本語能力試験を受験します।',
          romaji: 'Raishuu nihonngo nouryoku shiken o juken shimasu.',
          meaningEn: 'Next week I will take the JLPT exam.',
          meaningBn: 'আগামী সপ্তাহে জাপানি ভাষা দক্ষতা পরীক্ষা দেব।'
        },
        {
          ja: '服を買う前に試着室で試着します।',
          romaji: 'Fuku o kau mae ni shichakushitsu de shichaku shimasu.',
          meaningEn: 'Before buying clothes, I try them on in the fitting room.',
          meaningBn: 'কাপড় কেনার আগে ট্রায়াল রুমে পরে দেখি।'
        }
      ]
    },
    {
      id: 'l18-ken',
      kanji: '験',
      emoji: '🧪',
      strokeCount: 18,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ケン', romaji: 'ken' }],
        kunyomi: []
      },
      meanings: {
        en: 'Test, experience, effect',
        bn: 'পরীক্ষা, অভিজ্ঞতা, ফল'
      },
      vocab: [
        { kanji: '試験', kana: 'しけん', romaji: 'shiken', meaningEn: 'exam', meaningBn: 'পরীক্ষা', tag: 'N5' },
        { kanji: '経験', kana: 'けいけん', romaji: 'keiken', meaningEn: 'experience', meaningBn: 'অভিজ্ঞতা', tag: 'N4' },
        { kanji: '実験', kana: 'じっけん', romaji: 'jikken', meaningEn: 'experiment', meaningBn: 'ল্যাব পরীক্ষা', tag: 'N3' },
        { kanji: '体験', kana: 'たいけん', romaji: 'taiken', meaningEn: 'personal experience', meaningBn: 'ব্যক্তিগত অভিজ্ঞতা', tag: 'N3' },
        { kanji: '受験', kana: 'じゅけん', romaji: 'juken', meaningEn: 'taking an exam', meaningBn: 'পরীক্ষায় অংশগ্রহণ', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '日本で働いた経験はとても役に立ちます।',
          romaji: 'Nihon de hataraita keiken wa totemo yaku ni tachimasu.',
          meaningEn: 'The experience of working in Japan is very useful.',
          meaningBn: 'জাপানে কাজ করার অভিজ্ঞতা খুব কাজে দেয়।'
        },
        {
          ja: '科学の授業で面白い実験をしました।',
          romaji: 'Kagaku no jugyou de omoshiroi jikken o shimashita.',
          meaningEn: 'We did an interesting experiment in science class.',
          meaningBn: 'বিজ্ঞান ক্লাসে একটি চমৎকার পরীক্ষা করেছি।'
        }
      ]
    },
    {
      id: 'l18-sotsu',
      kanji: '卒',
      emoji: '🎓',
      strokeCount: 8,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ソツ', romaji: 'sotsu' }],
        kunyomi: []
      },
      meanings: {
        en: 'Graduate, soldier',
        bn: 'গ্র্যাজুয়েশন, পাস করা'
      },
      vocab: [
        { kanji: '卒業', kana: 'そつぎょう', romaji: 'sotsugyou', meaningEn: 'graduation', meaningBn: 'পাস করা', tag: 'N4' },
        { kanji: '大卒', kana: 'だいそつ', romaji: 'daisotsu', meaningEn: 'university graduate', meaningBn: 'বিশ্ববিদ্যালয় স্নাতক', tag: 'N3' },
        { kanji: '新卒', kana: 'しんそつ', romaji: 'shinsotsu', meaningEn: 'new graduate', meaningBn: 'সদ্য পাস করা ছাত্র', tag: 'N3' },
        { kanji: '卒業式', kana: 'そつぎょうしき', romaji: 'sotsugyoushiki', meaningEn: 'graduation ceremony', meaningBn: 'সমাবর্তন অনুষ্ঠান', tag: 'N3' },
        { kanji: '卒業生', kana: 'そつぎょうせい', romaji: 'sotsugyousei', meaningEn: 'alumni', meaningBn: 'প্রাক্তন ছাত্রছাত্রী', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '来年３月に大学を卒業する予定です।',
          romaji: 'Rainen san-gatsu ni daigaku o sotsugyou suru yotei desu.',
          meaningEn: 'I plan to graduate from university next March.',
          meaningBn: 'আগামী বছর মার্চ মাসে বিশ্ববিদ্যালয় পাস করার কথা আছে।'
        },
        {
          ja: '卒業式で友達と一緒に写真を撮りました।',
          romaji: 'Sotsugyoushiki de tomodachi to issho ni shashin o torimashita.',
          meaningEn: 'I took photos with friends at the graduation ceremony.',
          meaningBn: 'সমাবর্তন অনুষ্ঠানে বন্ধুদের সাথে ছবি তুলেছি।'
        }
      ]
    },
    {
      id: 'l18-gyou',
      kanji: '業',
      emoji: '🏢',
      strokeCount: 13,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ギョウ', romaji: 'gyou' }],
        kunyomi: []
      },
      meanings: {
        en: 'Business, industry, work',
        bn: 'ব্যবসা, শিল্প, কর্ম'
      },
      vocab: [
        { kanji: '授業', kana: 'じゅぎょう', romaji: 'jugyou', meaningEn: 'class, lesson', meaningBn: 'ক্লাস', tag: 'N5' },
        { kanji: '卒業', kana: 'そつぎょう', romaji: 'sotsugyou', meaningEn: 'graduation', meaningBn: 'পাস করা', tag: 'N4' },
        { kanji: '営業', kana: 'えいぎょう', romaji: 'eigyou', meaningEn: 'business hours', meaningBn: 'ব্যবসা বা খোলা থাকা', tag: 'N3' },
        { kanji: '産業', kana: 'さんぎょう', romaji: 'sangyou', meaningEn: 'industry', meaningBn: 'শিল্প খাত', tag: 'N3' },
        { kanji: '残業', kana: 'ざんぎょう', romaji: 'zangyou', meaningEn: 'overtime work', meaningBn: 'ওভারটাইম কাজ', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '今日の日本語の授業はとても楽しかったです।',
          romaji: 'Kyou no nihonngo no jugyou wa totemo tanoshikatta desu.',
          meaningEn: 'Today’s Japanese class was very fun.',
          meaningBn: 'আজকের জাপানি ভাষার ক্লাসটি খুব মজার ছিল।'
        },
        {
          ja: '仕事が忙しくて毎日残業しています।',
          romaji: 'Shigoto ga isogashikute mainichi zangyou shite imasu.',
          meaningEn: 'I am busy with work and work overtime every day.',
          meaningBn: 'কাজের চাপে প্রতিদিন ওভারটাইম করতে হচ্ছে।'
        }
      ]
    },
    {
      id: 'l18-setsu',
      kanji: '説',
      emoji: '💬',
      strokeCount: 14,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'セツ', romaji: 'setsu' }],
        kunyomi: [{ kana: 'と.く', romaji: 'to.ku' }]
      },
      meanings: {
        en: 'Explain, opinion, rumor',
        bn: 'ব্যাখ্যা করা, মতামত'
      },
      vocab: [
        { kanji: '説明', kana: 'せつめい', romaji: 'setsumei', meaningEn: 'explanation', meaningBn: 'ব্যাখ্যা', tag: 'N4' },
        { kanji: '小説', kana: 'しょうせつ', romaji: 'shousetsu', meaningEn: 'novel', meaningBn: 'উপন্যাস', tag: 'N3' },
        { kanji: '説明会', kana: 'せつめいかい', romaji: 'setsumeikai', meaningEn: 'information session', meaningBn: 'তথ্যভিত্তিক সেমিনার', tag: 'N3' },
        { kanji: '説得', kana: 'せっとく', romaji: 'settoku', meaningEn: 'persuasion', meaningBn: 'বুঝিয়ে রাজি করানো', tag: 'N3' },
        { kanji: '説く', kana: 'とく', romaji: 'toku', meaningEn: 'to explain', meaningBn: 'ব্যাখ্যা দেওয়া', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '先生が分かりやすく説明してくれました।',
          romaji: 'Sensei ga wakariyasuku setsumei shite kuremashita.',
          meaningEn: 'The teacher explained it clearly to me.',
          meaningBn: 'শিক্ষক সুন্দর ও সহজভাবে বুঝিয়ে দিয়েছেন।'
        },
        {
          ja: '大学の入学説明会に参加します।',
          romaji: 'Daigaku no nyuugaku setsumeikai ni sanka shimasu.',
          meaningEn: 'I will attend the university orientation session.',
          meaningBn: 'বিশ্ববিদ্যালয়ের ওরিয়েন্টেশন সেমিনারে যোগ দেব।'
        }
      ]
    },
    {
      id: 'l18-akaru',
      kanji: '明',
      emoji: '☀️',
      strokeCount: 8,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'メイ', romaji: 'mei' }],
        kunyomi: [{ kana: 'あ.かるい', romaji: 'akarui' }]
      },
      meanings: {
        en: 'Bright, clear, light',
        bn: 'উজ্জ্বল, পরিষ্কার'
      },
      vocab: [
        { kanji: '明るい', kana: 'あかるい', romaji: 'akarui', meaningEn: 'bright', meaningBn: 'উজ্জ্বল বা হাসিখুশি', tag: 'N5' },
        { kanji: '説明', kana: 'せつめい', romaji: 'setsumei', meaningEn: 'explanation', meaningBn: 'ব্যাখ্যা', tag: 'N4' },
        { kanji: '明日', kana: 'あした', romaji: 'ashita', meaningEn: 'tomorrow', meaningBn: 'আগামীকাল', tag: 'N5' },
        { kanji: '証明', kana: 'しょうめい', romaji: 'shoumei', meaningEn: 'proof, certificate', meaningBn: 'প্রমাণ বা প্রত্যয়ন', tag: 'N3' },
        { kanji: '明確', kana: 'めいかく', romaji: 'meikaku', meaningEn: 'clear, explicit', meaningBn: 'স্পষ্ট ও নির্দিষ্ট', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'この部屋は窓が大きくて明るいです।',
          romaji: 'Kono heya wa mado ga ookikute akarui desu.',
          meaningEn: 'This room has big windows and is bright.',
          meaningBn: 'এই ঘরটির জানালাগুলো বড় হওয়ায় বেশ আলোকিত।'
        },
        {
          ja: '明日の朝早く出発します।',
          romaji: 'Ashita no asa hayaku shuppatsu shimasu.',
          meaningEn: 'I will depart early tomorrow morning.',
          meaningBn: 'আগামীকাল সকালে দ্রুত রওনা হব।'
        }
      ]
    },
    {
      id: 'l18-sha',
      kanji: '写',
      emoji: '📷',
      strokeCount: 5,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'シャ', romaji: 'sha' }],
        kunyomi: [{ kana: 'うつ.す', romaji: 'utsu.su' }]
      },
      meanings: {
        en: 'Copy, photograph, reflect',
        bn: 'ছবি তোলা, নকল করা'
      },
      vocab: [
        { kanji: '写真', kana: 'しゃしん', romaji: 'shashin', meaningEn: 'photograph', meaningBn: 'ছবি', tag: 'N5' },
        { kanji: '写す', kana: 'うつす', romaji: 'utsusu', meaningEn: 'to copy, to photo', meaningBn: 'নকল করা বা ছবি তোলা', tag: 'N4' },
        { kanji: '写生', kana: 'しゃせい', romaji: 'shasei', meaningEn: 'sketching', meaningBn: 'ছবি আঁকা', tag: 'N3' },
        { kanji: '複写', kana: 'ふくしゃ', romaji: 'fukusha', meaningEn: 'copy, duplicate', meaningBn: 'ফটোকপি বা অনুলিপি', tag: 'N3' },
        { kanji: '映写', kana: 'えいしゃ', romaji: 'eisha', meaningEn: 'projection', meaningBn: 'স্ক্রিনে প্রজেক্ট করা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '旅行のときにたくさん写真を撮りました।',
          romaji: 'Ryokou no toki ni takusan shashin o torimashita.',
          meaningEn: 'I took many photos during the trip.',
          meaningBn: 'ভ্রমণের সময় অনেক ছবি তুলেছি।'
        },
        {
          ja: '黒板の文字をノートに写します।',
          romaji: 'Kokuban no moji o nooto ni utsushimasu.',
          meaningEn: 'I copy the letters from the blackboard into my notebook.',
          meaningBn: 'ব্ল্যাকবোর্ডের লেখাগুলো খাতায় টুকছি।'
        }
      ]
    },
    {
      id: 'l18-shin',
      kanji: '真',
      emoji: '✨',
      strokeCount: 10,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'シン', romaji: 'shin' }],
        kunyomi: [{ kana: 'ま', romaji: 'ma' }]
      },
      meanings: {
        en: 'True, reality, exact',
        bn: 'সত্য, বাস্তব, আসল'
      },
      vocab: [
        { kanji: '写真', kana: 'しゃしん', romaji: 'shashin', meaningEn: 'photograph', meaningBn: 'ছবি', tag: 'N5' },
        { kanji: '真面目', kana: 'まじめ', romaji: 'majime', meaningEn: 'serious, diligent', meaningBn: 'মনোযোগী ও পরিশ্রমী', tag: 'N4' },
        { kanji: '真ん中', kana: 'まんなか', romaji: 'mannaka', meaningEn: 'exact center', meaningBn: 'ঠিক মাঝখানে', tag: 'N4' },
        { kanji: '真実', kana: 'しんじつ', romaji: 'shinjitsu', meaningEn: 'truth, reality', meaningBn: 'সত্য ঘটনা', tag: 'N3' },
        { kanji: '真空', kana: 'しんくう', romaji: 'shinkuu', meaningEn: 'vacuum', meaningBn: 'শূন্যস্থান', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '彼はいつも真面目に仕事をします।',
          romaji: 'Kare wa itsumo majime ni shigoto o shimasu.',
          meaningEn: 'He always works diligently.',
          meaningBn: 'সেসময় অত্যন্ত একাগ্রতার সাথে কাজ করে।'
        },
        {
          ja: '部屋の真ん中にテーブルを置きます।',
          romaji: 'Heya no mannaka ni teeburu o okimasu.',
          meaningEn: 'I place a table in the exact middle of the room.',
          meaningBn: 'ঘরের ঠিক মাঝখানে একটি টেবিল বসিয়েছি।'
        }
      ]
    },
    {
      id: 'l18-gan',
      kanji: '願',
      emoji: '✍️',
      strokeCount: 19,
      jlpt: 'N3',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ガン', romaji: 'gan' }],
        kunyomi: [{ kana: 'ねが.う', romaji: 'negau' }]
      },
      meanings: {
        en: 'Wish, petition, application',
        bn: 'আবেদন করা, প্রার্থনা করা'
      },
      vocab: [
        { kanji: '願書', kana: 'がんしょ', romaji: 'gansho', meaningEn: 'application form', meaningBn: 'আবেদনপত্র', tag: 'N3' },
        { kanji: 'お願い', kana: 'おねがい', romaji: 'onegai', meaningEn: 'request, favor', meaningBn: 'অনুরোধ', tag: 'N5' },
        { kanji: '願う', kana: 'ねがう', romaji: 'negau', meaningEn: 'to wish', meaningBn: 'আশা বা প্রার্থনা করা', tag: 'N3' },
        { kanji: '願望', kana: 'がんぼう', romaji: 'ganbou', meaningEn: 'desire, wish', meaningBn: 'তীব্র আকাঙ্ক্ষা', tag: 'N3' },
        { kanji: '出願', kana: 'しゅつがん', romaji: 'shuttsugan', meaningEn: 'filing application', meaningBn: 'আবেদনপত্র জমা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '大学の願書を締め切りまでに提出しました।',
          romaji: 'Daigaku no gansho o shimekiri made ni teishutsu shimashita.',
          meaningEn: 'I submitted the university application form before the deadline.',
          meaningBn: 'শেষ সময়ের আগেই বিশ্ববিদ্যালয়ের আবেদনপত্র জমা দিয়েছি।'
        },
        {
          ja: 'これからもよろしくお願いします।',
          romaji: 'Kore kara mo yoroshiku onegai shimasu.',
          meaningEn: 'Please continue to favor me in the future as well.',
          meaningBn: 'ভবিষ্যতেও আপনার সহযোগিতা প্রত্যাশা করছি।'
        }
      ]
    },
    {
      id: 'l18-bu',
      kanji: '部',
      emoji: '🏫',
      strokeCount: 11,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ブ', romaji: 'bu' }],
        kunyomi: []
      },
      meanings: {
        en: 'Department, section, part',
        bn: 'বিভাগ, অংশ, অনুষদ'
      },
      vocab: [
        { kanji: '学部', kana: 'がくぶ', romaji: 'gakubu', meaningEn: 'faculty, academic department', meaningBn: 'অনুষদ / ডিপার্টমেন্ট', tag: 'N3' },
        { kanji: '部屋', kana: 'へや', romaji: 'heya', meaningEn: 'room', meaningBn: 'ঘর', tag: 'N5' },
        { kanji: '部長', kana: 'ぶちょう', romaji: 'buchou', meaningEn: 'department manager', meaningBn: 'বিভাগীয় প্রধান', tag: 'N3' },
        { kanji: '全部', kana: 'ぜんぶ', romaji: 'zenbu', meaningEn: 'all, whole', meaningBn: 'সবকিছু', tag: 'N5' },
        { kanji: '部分', kana: 'ぶぶん', romaji: 'bubun', meaningEn: 'part, portion', meaningBn: 'আংশিক বা অংশ', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '私は経済学部に合格してとても嬉しいです।',
          romaji: 'Watashi wa keizaigakubu ni goukaku shite totemo ureshii desu.',
          meaningEn: 'I passed into the Faculty of Economics and am very happy.',
          meaningBn: 'অর্থনীতি বিভাগে সুযোগ পেয়ে আমি ভীষণ আনন্দিত।'
        },
        {
          ja: '宿題を全部終わらせました।',
          romaji: 'Shukudai o zenbu owarasemashita.',
          meaningEn: 'I finished all my homework.',
          meaningBn: 'বাড়ির সব কাজ শেষ করে ফেলেছি।'
        }
      ]
    },
    {
      id: 'l18-ka',
      kanji: '科',
      emoji: '📚',
      strokeCount: 9,
      jlpt: 'N3',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'カ', romaji: 'ka' }],
        kunyomi: []
      },
      meanings: {
        en: 'Course, department, subject',
        bn: 'বিভাগ, সাবজেক্ট, কোর্স'
      },
      vocab: [
        { kanji: '学科', kana: 'がっか', romaji: 'gakka', meaningEn: 'course of study', meaningBn: 'একাডেমিক কোর্স', tag: 'N3' },
        { kanji: '教科書', kana: 'きょうかしょ', romaji: 'kyoukasho', meaningEn: 'textbook', meaningBn: 'পাঠ্যবই', tag: 'N4' },
        { kanji: '科学', kana: 'かがく', romaji: 'kagaku', meaningEn: 'science', meaningBn: 'বিজ্ঞান', tag: 'N4' },
        { kanji: '内科', kana: 'ないか', romaji: 'naika', meaningEn: 'internal medicine', meaningBn: 'মেডিসিন বিভাগ', tag: 'N3' },
        { kanji: '外科', kana: 'げか', romaji: 'geka', meaningEn: 'surgery department', meaningBn: 'সার্জারি বিভাগ', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '大学でコンピュータ科学を専攻しています।',
          romaji: 'Daigaku de konpyuutaa kagaku o senkou shite imasu.',
          meaningEn: 'I am majoring in computer science at university.',
          meaningBn: 'বিশ্ববিদ্যালয়ে কম্পিউটার সায়েন্সে পড়াশোনা করছি।'
        },
        {
          ja: '風邪を引いたので内科を受診しました।',
          romaji: 'Kaze o hiita node naika o jushin shimashita.',
          meaningEn: 'I caught a cold so I visited internal medicine.',
          meaningBn: 'ঠান্ডা লাগায় মেডিসিন বিভাগের ডাক্তার দেখিয়েছি।'
        }
      ]
    },

    // --- Read Only (読める: 専門, 就職, 受験) ---
    {
      id: 'l18-senmon',
      kanji: '専門',
      emoji: '🎓',
      strokeCount: 14,
      jlpt: 'N3',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'センモン', romaji: 'senmon' }],
        kunyomi: []
      },
      meanings: {
        en: 'Specialty, major field',
        bn: 'विशेषায়িত বিষয়, মেজর'
      },
      vocab: [
        { kanji: '専門', kana: 'せんもん', romaji: 'senmon', meaningEn: 'specialty', meaningBn: 'विशेषज्ञতা', tag: 'N3' },
        { kanji: '専門学校', kana: 'せんもんがっこう', romaji: 'senmon gakkou', meaningEn: 'vocational college', meaningBn: 'কারিগরি কলেজ', tag: 'N3' },
        { kanji: '専門家', kana: 'せんもんか', romaji: 'senmonka', meaningEn: 'expert', meaningBn: 'विशेषज्ञ', tag: 'N3' },
        { kanji: '専門知識', kana: 'せんもんちしき', romaji: 'senmon chishiki', meaningEn: 'specialized knowledge', meaningBn: 'विशेषায়িত জ্ঞান', tag: 'N3' },
        { kanji: '専門分野', kana: 'せんもんぶんや', romaji: 'senmon bunya', meaningEn: 'specialized field', meaningBn: 'विशेषায়িত ক্ষেত্র', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '私の専門分野はITプログラミングです।',
          romaji: 'Watashi no senmon bunya wa aitii puroguramingu desu.',
          meaningEn: 'My specialized field is IT programming.',
          meaningBn: 'আমার মূল সাবজেক্ট হলো আইটি প্রোগ্রামিং।'
        },
        {
          ja: '専門学校でデザインの技術を学びます।',
          romaji: 'Senmon gakkou de dezain no gijutsu o menabimasu.',
          meaningEn: 'I learn design techniques at vocational school.',
          meaningBn: 'কারিগরি কলেজে ডিজাইনিং শিখছি।'
        }
      ]
    },
    {
      id: 'l18-shuushoku',
      kanji: '就職',
      emoji: '👔',
      strokeCount: 17,
      jlpt: 'N3',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'シュウショク', romaji: 'shuushoku' }],
        kunyomi: []
      },
      meanings: {
        en: 'Finding employment, getting a job',
        bn: 'চাকরি পাওয়া, কর্মসংস্থান'
      },
      vocab: [
        { kanji: '就職', kana: 'しゅうしょく', romaji: 'shuushoku', meaningEn: 'finding employment', meaningBn: 'চাকরি পাওয়া', tag: 'N3' },
        { kanji: '就職活動', kana: 'しゅうしょくかつどう', romaji: 'shuushoku katsudou', meaningEn: 'job hunting', meaningBn: 'চাকরির সন্ধান (শুকাৎসু)', tag: 'N3' },
        { kanji: '就任', kana: 'しゅうにん', romaji: 'shuunin', meaningEn: 'inauguration', meaningBn: 'দায়িত্ব গ্রহণ', tag: 'N3' },
        { kanji: '職業', kana: 'しょくぎょう', romaji: 'shokugyou', meaningEn: 'occupation', meaningBn: 'পেশা', tag: 'N3' },
        { kanji: '職場', kana: 'しょくば', romaji: 'しょくば', meaningEn: 'workplace', meaningBn: 'কর্মক্ষেত্র', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '大学を卒業したら日本のIT企業に就職したいです।',
          romaji: 'Daigaku o sotsugyou shitara Nihon no aitii kigyou ni shuushoku shitai desu.',
          meaningEn: 'When I graduate, I want to get a job at a Japanese IT company.',
          meaningBn: 'গ্র্যাজুয়েশনের পর জাপানি আইটি কোম্পানিতে যোগ দিতে চাই।'
        },
        {
          ja: '来月から本格的に就職活動を始めます।',
          romaji: 'Raigetsu kara honkakuteki ni shuushoku katsudou o hajimemasu.',
          meaningEn: 'Starting next month, I will earnestly begin job hunting.',
          meaningBn: 'আগামী মাস থেকে পুরোদমে চাকরির চেষ্টা শুরু করব।'
        }
      ]
    },
    {
      id: 'l18-juken',
      kanji: '受験',
      emoji: '📝',
      strokeCount: 22,
      jlpt: 'N3',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'ジュケン', romaji: 'juken' }],
        kunyomi: []
      },
      meanings: {
        en: 'Taking an entrance examination',
        bn: 'পরীক্ষায় অংশগ্রহণ করা'
      },
      vocab: [
        { kanji: '受験', kana: 'じゅけん', romaji: 'juken', meaningEn: 'taking an exam', meaningBn: 'পরীক্ষায় বসা', tag: 'N3' },
        { kanji: '受験生', kana: 'じゅけんせい', romaji: 'jukensei', meaningEn: 'examinee', meaningBn: 'পরীক্ষার্থী', tag: 'N3' },
        { kanji: '受験料', kana: 'じゅけんりょう', romaji: 'jukenryou', meaningEn: 'exam fee', meaningBn: 'পরীক্ষার ফি', tag: 'N3' },
        { kanji: '受ける', kana: 'うける', romaji: 'ukeru', meaningEn: 'to take (exam)', meaningBn: 'পরীক্ষা দেওয়া', tag: 'N4' },
        { kanji: '合格', kana: 'ごうかく', romaji: 'goukaku', meaningEn: 'passing exam', meaningBn: 'পাস করা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '大学受験のために毎日１０時間勉強しています।',
          romaji: 'Daigaku juken no tame ni mainichi juu-jikan benkyou shite imasu.',
          meaningEn: 'I study 10 hours every day for the university entrance exam.',
          meaningBn: 'ভার্সিটি ভর্তির জন্য প্রতিদিন ১০ ঘণ্টা পড়াশোনা করছি।'
        },
        {
          ja: '受験票を忘れずに試験場に持って来てください।',
          romaji: 'Jukenhyou o wasurezu ni shikenjou ni motte kite kudasai.',
          meaningEn: 'Please bring your exam voucher to the test site without fail.',
          meaningBn: 'পরীক্ষার এডমিট কার্ডটি ভুলে না গিয়ে সাথে আনবেন।'
        }
      ]
    },

    // --- Visual Recognition (見て、分かる: 必着) ---
    {
      id: 'l18-hicchyaku',
      kanji: '必着',
      emoji: '📬',
      strokeCount: 11,
      jlpt: 'N3',
      category: 'visual_recognition',
      readings: {
        onyomi: [{ kana: 'ヒッチャク', romaji: 'hicchyaku' }],
        kunyomi: []
      },
      meanings: {
        en: 'Must arrive by, deadline for delivery',
        bn: 'নির্দিষ্ট তারিখের মধ্যে পৌঁছানো বাধ্যতামূলক'
      },
      vocab: [
        { kanji: '必着', kana: 'ひっちゃく', romaji: 'hicchyaku', meaningEn: 'must arrive by', meaningBn: 'অবশ্যই পৌঁছাতে হবে', tag: 'N3' },
        { kanji: '必要', kana: 'ひつよう', romaji: 'hitsuyou', meaningEn: 'necessary', meaningBn: 'প্রয়োজনীয়', tag: 'N4' },
        { kanji: '必死', kana: 'ひっし', romaji: 'hisshi', meaningEn: 'desperate, frantic', meaningBn: 'প্রাণপণ চেষ্টা', tag: 'N3' },
        { kanji: '到着', kana: 'とうちゃく', romaji: 'touchaku', meaningEn: 'arrival', meaningBn: 'পৌঁছানো', tag: 'N4' },
        { kanji: '着く', kana: 'つく', romaji: 'tsuku', meaningEn: 'to arrive', meaningBn: 'পৌঁছানো', tag: 'N5' }
      ],
      sentences: [
        {
          ja: '願書は５月１０日必着で送ってください।',
          romaji: 'Gansho wa go-gatsu touka hicchyaku de okutte kudasai.',
          meaningEn: 'Please mail the application form so that it arrives strictly by May 10th.',
          meaningBn: 'আবেদনপত্রটি ১০ই মে এর মধ্যেই যেন পৌঁছায় এমনভাবে পাঠাবেন।'
        },
        {
          ja: '合格のために必死で努力します।',
          romaji: 'Goukaku no tame ni hisshi de doryoku shimasu.',
          meaningEn: 'I will make a desperate effort to pass.',
          meaningBn: 'পাস করার জন্য আপ্রাণ চেষ্টা করে যাব।'
        }
      ]
    }
  ]
};
