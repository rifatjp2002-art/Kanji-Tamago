import { Lesson } from '../types/kanji';

export const lesson28: Lesson = {
  id: 28,
  number: 28,
  titleJa: '学校で',
  titleRomaji: 'Gakkou de',
  titleBn: 'বিদ্যালয়ে (At School - Study & Classroom)',
  titleEn: 'At School (Study & Classroom)',
  descriptionBn: 'জাপানি শিক্ষা জীবন, অ্যাসাইনমেন্ট, ক্লাসরুমের নিয়মাবলী, উপস্থিতি-অনুপস্থিতি এবং প্রাতিষ্ঠানিক পরিবেশের প্রয়োজনীয় কান্জি (文, 研, 究, 課, 題, 習, 堂, 席, 欠, 全)।',
  descriptionEn: 'Essential Kanji for academic life, classroom environment, homework, research, attendance, and school facilities in Japan.',
  kanjiList: [
    // --- Main Kanji (書ける: 文, 研, 究, 課, 題, 習, 堂, 席, 欠, 全) ---
    {
      id: 'l28-bun',
      kanji: '文',
      emoji: '📝',
      strokeCount: 4,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ブン', romaji: 'bun' }, { kana: 'モン', romaji: 'mon' }],
        kunyomi: [{ kana: 'ふみ', romaji: 'fumi' }]
      },
      meanings: {
        en: 'Sentence, writing, literature',
        bn: 'বাক্য, লেখা, সাহিত্য'
      },
      vocab: [
        { kanji: '作文', kana: 'さくぶん', romaji: 'sakubun', meaningEn: 'essay, writing composition', meaningBn: 'রচনা বা অনুচ্ছেদ লিখন', tag: 'N5' },
        { kanji: '文学', kana: 'ぶんがく', romaji: 'bungaku', meaningEn: 'literature', meaningBn: 'সাহিত্য', tag: 'N4' },
        { kanji: '文法', kana: 'ぶんぽう', romaji: 'bunpou', meaningEn: 'grammar', meaningBn: 'ব্যাকরণ', tag: 'N4' },
        { kanji: '文字', kana: 'もじ', romaji: 'moji', meaningEn: 'letter, character', meaningBn: 'বর্ণ বা অক্ষর', tag: 'N4' },
        { kanji: '文化', kana: 'ぶんか', romaji: 'bunka', meaningEn: 'culture', meaningBn: 'সংস্কৃতি', tag: 'N5' },
        { kanji: '一文', kana: 'いちぶん', romaji: 'ichibun', meaningEn: 'one sentence', meaningBn: 'একটি বাক্য', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '日本語のクラスで、自分の将来の夢についての作文を書きました।',
          romaji: 'Nihonngo no kurasu de, jibun no shourai no yume ni tsuite no sakubun o kakimashita.',
          meaningEn: 'In the Japanese class, I wrote an essay about my future dream.',
          meaningBn: 'জাপানি ভাষার ক্লাসে আমার ভবিষ্যতের স্বপ্ন নিয়ে একটি সুন্দর রচনা লিখেছিলাম।'
        },
        {
          ja: '会話は上手になりましたが、まだ難しい文法がよく理解できません।',
          romaji: 'Kaiwa wa jouzu ni narimashita ga, mada muzukashii bunpou ga yoku rikai dekimasen.',
          meaningEn: 'Although my conversation has gotten better, I still don’t understand difficult grammar well.',
          meaningBn: 'জাপানি কথপোকথনে আমি বেশ দক্ষ হয়ে উঠলেও এখনো কঠিন ব্যাকরণগুলো ভালো করে বুঝতে পারি না।'
        }
      ],
      tamagoTip: {
        en: 'A pictograph representing a person with beautiful chest tattoos or patterns, which came to mean writing or sentences.',
        bn: 'এটি সাজানো বা নকশাদার রেখা প্রকাশ করে, যা পরবর্তীতে অক্ষর বা বাক্য অর্থে ব্যবহৃত হওয়া শুরু হয়।'
      }
    },
    {
      id: 'l28-ken',
      kanji: '研',
      emoji: '🔬',
      strokeCount: 9,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ケン', romaji: 'ken' }],
        kunyomi: [{ kana: 'と.ぐ', romaji: 'to.gu' }]
      },
      meanings: {
        en: 'Research, polish, sharpen',
        bn: 'গবেষণা, ঘষে মেজে ধারালো করা'
      },
      vocab: [
        { kanji: '研究する', kana: 'けんきゅうする', romaji: 'kenkyuu suru', meaningEn: 'to research, study deeply', meaningBn: 'গবেষণা বা গভীরভাবে অনুসন্ধান করা', tag: 'N4' },
        { kanji: '研究者', kana: 'けんきゅうしゃ', romaji: 'kenkyuusha', meaningEn: 'researcher', meaningBn: 'গবেষক', tag: 'N3' },
        { kanji: '研究所', kana: 'けんきゅうじょ', romaji: 'kenkyuujo', meaningEn: 'research laboratory', meaningBn: 'গবেষণাগার বা ল্যাব', tag: 'N3' },
        { kanji: '研修', kana: 'けんしゅう', romaji: 'kenshuu', meaningEn: 'training, workshop', meaningBn: 'প্রশিক্ষণ বা ওয়ার্কশপ', tag: 'N3' },
        { kanji: '研ぐ', kana: 'とぐ', romaji: 'togu', meaningEn: 'to sharpen (knife), wash (rice)', meaningBn: 'ছুরিতে শান দেওয়া বা চাল ধুয়ে নেওয়া', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '大学院に進学して、最新の環境問題について深く研究したいです।',
          romaji: 'Daigakuin ni shingaku shite, saishin no kankyou mondai ni tsuite fukaku kenkyuu shitai desu.',
          meaningEn: 'I want to enter graduate school and deeply research the latest environmental issues.',
          meaningBn: 'আমি পোস্ট গ্র্যাজুয়েশন সম্পন্ন করে সমসাময়িক পরিবেশ দূষণ নিয়ে গবেষণা করতে আগ্রহী।'
        },
        {
          ja: '来月から新しい会社で二週間のビジネス研修が始まります।',
          romaji: 'Raigetsu kara atarashii kaisha de nishuukan no bijinesu kenshuu ga hajimarimasu.',
          meaningEn: 'A two-week business training will start at the new company from next month.',
          meaningBn: 'আগামী মাস থেকে নতুন চাকরিতে আমার দুই সপ্তাহের একটি প্রফেশনাল প্রশিক্ষণ শুরু হবে।'
        }
      ],
      tamagoTip: {
        en: 'The left side is stone (石) and the right side is a tool frame (开): rubbing or polishing a stone to make it smooth and sharp.',
        bn: 'বামে পাথর (石) আর ডানে একটি খাঁজকাটা সমতল ফ্রেম। পাথর ঘষে যেমন মসৃণ করা হয়, তেমনই পড়াশোনায় নিজেকে ঘষে মেজে দক্ষ বা ধারালো করাই হলো গবেষণার কান্জি।'
      }
    },
    {
      id: 'l28-kyuu',
      kanji: '究',
      emoji: '🔍',
      strokeCount: 7,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'キュウ', romaji: 'kyuu' }],
        kunyomi: [{ kana: 'きわ.める', romaji: 'kiwa.meru' }]
      },
      meanings: {
        en: 'Investigate, research, exhaust',
        bn: 'অনুসন্ধান, চূড়ান্ত সীমানায় যাওয়া'
      },
      vocab: [
        { kanji: '研究', kana: 'けんきゅう', romaji: 'kenkyuu', meaningEn: 'research', meaningBn: 'গবেষণা', tag: 'N4' },
        { kanji: '究める', kana: 'きわめる', romaji: 'kiwameru', meaningEn: 'to master, investigate thoroughly', meaningBn: 'মাস্টারি করা বা চূড়ান্ত পর্যায়ে রপ্ত করা', tag: 'N3' },
        { kanji: '探究', kana: 'たんきゅう', romaji: 'tankyuu', meaningEn: 'quest, pursuit', meaningBn: 'সত্যের অনুসন্ধান বা অন্বেষণ', tag: 'N3' },
        { kanji: '究極', kana: 'きゅうきょく', romaji: 'kyuukyoku', meaningEn: 'ultimate, extreme', meaningBn: 'চূড়ান্ত বা চরম', tag: 'N3' },
        { kanji: '学究', kana: 'がっきゅう', romaji: 'gakkyuu', meaningEn: 'scholar, academic investigator', meaningBn: 'তাত্ত্বিক পণ্ডিত', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '歴史の謎を究明するために、多くの専門書を読み漁っています।',
          romaji: 'Rekishi no nazo o kyuumei suru tame ni, ooku no senmonsho o yomiasatte imasu.',
          meaningEn: 'In order to investigate the mysteries of history, I am reading many specialized books.',
          meaningBn: 'ইতিহাসের অজানা রহস্য উদঘাটনে আমি নিয়মিত অনেক ঐতিহাসিক গ্রন্থ ঘেঁটে চলেছি।'
        }
      ],
      tamagoTip: {
        en: 'A cave/hole (穴) with a curved body inside (九), symbolizing crawling deep into a dark cave to search for answers.',
        bn: 'ওপরে গুহা বা গর্ত (穴) আর নিচে বাঁকা সংখ্যা নয় (九)। গুহার অন্ধকার তলদেশে গিয়ে কোনো রহস্যের একদম গোড়ায় পৌঁছানো বা অনুসন্ধান করা।'
      }
    },
    {
      id: 'l28-ka',
      kanji: '課',
      emoji: '📋',
      strokeCount: 15,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'カ', romaji: 'ka' }],
        kunyomi: []
      },
      meanings: {
        en: 'Chapter, lesson, division, assignment',
        bn: 'অধ্যায়, সাবজেক্ট, বিভাগ, কাজ বা দায়িত্ব অর্পণ'
      },
      vocab: [
        { kanji: '課題', kana: 'かだい', romaji: 'kadai', meaningEn: 'assignment, task, challenge', meaningBn: 'অ্যাসাইনমেন্ট বা হোমটাস্ক', tag: 'N4' },
        { kanji: '課', kana: 'か', romaji: 'ka', meaningEn: 'lesson / section', meaningBn: 'এত অধ্যায় (যেমন: ১ম অধ্যায়) / অফিসের সেকশন', tag: 'N4' },
        { kanji: '課長', kana: 'かちょう', romaji: 'kachou', meaningEn: 'section chief', meaningBn: 'সেকশন ম্যানেজার বা শাখা প্রধান', tag: 'N3' },
        { kanji: '課税', kana: 'かぜい', romaji: 'kazei', meaningEn: 'taxation, imposition', meaningBn: 'ট্যাক্স বা কর আরোপ', tag: 'N3' },
        { kanji: '日課', kana: 'にっか', romaji: 'nikka', meaningEn: 'daily lesson, routine', meaningBn: 'প্রতিদিনের রুটিন কাজ', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '日本語の教科書の第十五課は、日本でのゴミの出し方の話です।',
          romaji: 'Nihonngo no kyoukasho no daijuugoka wa, Nihon de no gomi no dashikata no hanashi desu.',
          meaningEn: 'Lesson 15 of the Japanese textbook talks about how to throw away garbage in Japan.',
          meaningBn: 'জাপানি পাঠ্যবইয়ের ১৫তম অধ্যায়ে জাপানে ময়লা ফেলার নিয়ম নিয়ে চমৎকার আলোচনা করা হয়েছে।'
        },
        {
          ja: '大学で出された難しい課題を、締め切り日までに何とか提出しました।',
          romaji: 'Daigaku de dasareta muzukashii kadai o, shimekiribi made ni nantoka teishutsu shimashita.',
          meaningEn: 'I managed to submit the difficult assignment given at the university by the deadline.',
          meaningBn: 'বিশ্ববিদ্যালয় থেকে দেওয়া জটিল অ্যাসাইনমেন্টটি বহু কষ্টে শেষ সময়সীমার মধ্যেই জমা দিতে পেরেছি।'
        }
      ],
      tamagoTip: {
        en: 'Left side is words/speak (言) and right side is fruit/result (果): giving spoken words of result, which is assigning a lesson or task.',
        bn: 'বামে কথা (言) আর ডানে ফলাফল বা ফল (果)। কথা দিয়ে ফলের ন্যায় কোনো কাজ বুঝিয়ে দেওয়া বা ক্লাসের অধ্যায় ভাগ করে দায়িত্ব অর্পণ করা।'
      }
    },
    {
      id: 'l28-dai',
      kanji: '題',
      emoji: '📖',
      strokeCount: 18,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ダイ', romaji: 'dai' }],
        kunyomi: []
      },
      meanings: {
        en: 'Topic, theme, problem, question',
        bn: 'টপিক, আলোচনার বিষয়, প্রশ্নপত্র'
      },
      vocab: [
        { kanji: '問題', kana: 'もんだい', romaji: 'mondai', meaningEn: 'problem, question', meaningBn: 'সমস্যা বা প্রশ্নপত্র', tag: 'N5' },
        { kanji: '宿題', kana: 'しゅくだい', romaji: 'shukudai', meaningEn: 'homework', meaningBn: 'বাড়ির কাজ বা হোমওয়ার্ক', tag: 'N5' },
        { kanji: '話題', kana: 'わだい', romaji: 'wadai', meaningEn: 'topic of conversation', meaningBn: 'গল্পগুজবের বিষয় বা হট টপিক', tag: 'N3' },
        { kanji: 'タイトル / 題名', kana: 'だいめい', romaji: 'daimei', meaningEn: 'title (book, poem)', meaningBn: 'শিরোনাম', tag: 'N4' },
        { kanji: '主題', kana: 'しゅだい', romaji: 'shudai', meaningEn: 'main theme, subject', meaningBn: 'মূল প্রতিপাদ্য বিষয়', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '日本語の先生は、毎日たくさんの新しい宿題を出すので大変です।',
          romaji: 'Nihonngo no sensei wa, mainichi takusan no atarashii shukudai o dasu node taihen desu.',
          meaningEn: 'The Japanese teacher gives a lot of new homework every day, which is tough.',
          meaningBn: 'জাপানি ভাষার শিক্ষক প্রতিদিন এত বেশি হোমওয়ার্ক দেন যে তা শেষ করতে জান কয়লা হয়ে যায়।'
        },
        {
          ja: '次の試験の問題は難しそうなので、今からしっかりと復習します।',
          romaji: 'Tsugi no shiken no mondai wa muzukashisou na node, ima kara shikkari to fukushuu shimasu.',
          meaningEn: 'The next exam questions look difficult, so I will review properly from now on.',
          meaningBn: 'পরবর্তী পরীক্ষার প্রশ্নগুলো বেশ কঠিন হবে মনে হচ্ছে, তাই এখন থেকেই মন দিয়ে রিভিশন দিচ্ছি।'
        }
      ],
      tamagoTip: {
        en: 'Left side is sun rising / correct (是) and right is head (頁): getting your head straight to think correctly about a topic or answer a question.',
        bn: 'বামে সঠিক বা যুক্তিসঙ্গত (是) আর ডানে মাথা (頁)। মাথা খাটিয়ে কোনো প্রশ্ন বা বিষয়ের সঠিক সমাধান বের করা।'
      }
    },
    {
      id: 'l28-narau',
      kanji: '習',
      emoji: '🐣',
      strokeCount: 11,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'シュウ', romaji: 'shuu' }, { kana: 'ジュ', romaji: 'ju' }],
        kunyomi: [{ kana: 'なら.う', romaji: 'narau' }]
      },
      meanings: {
        en: 'Learn, practice, master',
        bn: 'শেখা, অভ্যাস করা, অনুশীলন করা'
      },
      vocab: [
        { kanji: '習う', kana: 'ならう', romaji: 'narau', meaningEn: 'to learn from a teacher', meaningBn: 'কারো কাছ থেকে শেখা', tag: 'N5' },
        { kanji: '練習する', kana: 'れんしゅうする', romaji: 'renshuu suru', meaningEn: 'to practice', meaningBn: 'অনুশীলন বা প্র্যাকটিস করা', tag: 'N5' },
        { kanji: '習慣', kana: 'しゅうかん', romaji: 'shuukan', meaningEn: 'custom, habit', meaningBn: 'অভ্যাস বা ঐতিহ্য', tag: 'N4' },
        { kanji: '学習する', kana: 'がくしゅうする', romaji: 'gakushuu suru', meaningEn: 'to study, acquire knowledge', meaningBn: 'অধ্যয়ন বা জ্ঞান লাভ করা', tag: 'N4' },
        { kanji: '復習する', kana: 'ふくしゅうする', romaji: 'fukushuu suru', meaningEn: 'to review lessons', meaningBn: 'পড়া রিভিশন দেওয়া', tag: 'N4' },
        { kanji: '自習', kana: 'じしゅう', romaji: 'jishu' , meaningEn: 'self-study', meaningBn: 'নিজে নিজে পড়া', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '日本語が上手になりたいので、週に二回、日本人の友達から直接会話を習っています।',
          romaji: 'Nihonngo ga jouzu ni naritai node, shuu ni nikai, Nihonjin no tomodachi kara chokusetsu kaiwa o naratte imasu.',
          meaningEn: 'Because I want to get better at Japanese, I learn conversation directly from my Japanese friend twice a week.',
          meaningBn: 'জাপানি ভাষা দ্রুত আয়ত্ত করতে আমি সপ্তাহে দুবার এক জাপানি বন্ধুর কাছ থেকে সরাসরি কথোপকথন শিখি।'
        },
        {
          ja: '明日の漢字の小テストのために、何度も書いて書けるように練習します।',
          romaji: 'Ashita no Kanji no shoutesuto no tame ni, nando mo kaite kakeru you ni renshuu shimasu.',
          meaningEn: 'For tomorrow’s Kanji quiz, I will practice writing many times so I can write it.',
          meaningBn: 'আগামীকালের কাঞ্জি কুইজের জন্য আমি বারবার খাতায় লিখে লিখে চমৎকার অনুশীলন করছি।'
        }
      ],
      tamagoTip: {
        en: 'The top part is feathers/wings (羽) and bottom is white/sun (白): like a baby bird flapping its wings repeatedly in the sun to learn how to fly.',
        bn: 'ওপরে পাখির ডানা (羽) আর নিচে সূর্য বা আলো (白)। সদ্য জন্মানো পাখির ছানা যেমন রোদে বারবার ডানা ঝাঁপটে ওড়ার চেষ্টা করে, তেমনই বারবার চেষ্টার মাধ্যমে ভাষা শেখা।'
      }
    },
    {
      id: 'l28-dou',
      kanji: '堂',
      emoji: '🏫',
      strokeCount: 11,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ドウ', romaji: 'dou' }],
        kunyomi: []
      },
      meanings: {
        en: 'Hall, temple, public chamber',
        bn: 'হলরুম, বিশাল মিলনায়তন, মন্দির ভবন'
      },
      vocab: [
        { kanji: '食堂', kana: 'しょくどう', romaji: 'shokudou', meaningEn: 'cafeteria, dining hall', meaningBn: 'ক্যাফেটেরিয়া বা ডাইনিং হল', tag: 'N5' },
        { kanji: '講堂', kana: 'こうどう', romaji: 'koudou', meaningEn: 'lecture hall, auditorium', meaningBn: 'বক্তৃতা মঞ্চ বা অডিটোরিয়াম', tag: 'N3' },
        { kanji: '本堂', kana: 'ほんどう', romaji: 'hondou', meaningEn: 'main temple building', meaningBn: 'মন্দিরের প্রধান মূল ঘর', tag: 'N3' },
        { kanji: '堂々と', kana: 'どうどうと', romaji: 'doudou to', meaningEn: 'magnificently, confidently', meaningBn: 'সাহসের সাথে বা সদর্পে', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'お昼休みになると、学校の広い食堂は学生たちで満員になります।',
          romaji: 'Ohiruyasumi ni naru to, gakkou no hiroi shokudou wa gakusei-tachi de man-in ni narimasu.',
          meaningEn: 'When the lunch break starts, the school’s spacious cafeteria becomes full of students.',
          meaningBn: 'দুপুরের ছুটির সাথে সাথেই স্কুলের বড় ক্যাফেটেরিয়াটি ক্ষুধার্ত ছাত্রছাত্রীদের ভিড়ে কানায় কানায় পূর্ণ হয়ে যায়।'
        },
        {
          ja: '入学説明会は、こちらの大きな講堂で行われる予定です।',
          romaji: 'Nyuugaku setsumeikai wa, kochira no ookina koudou de okonawaru yotei desu.',
          meaningEn: 'The admission orientation is scheduled to take place in this large auditorium.',
          meaningBn: 'ভর্তি বিষয়ক সেমিনারটি আমাদের এই বিশাল অডিটোরিয়ামে অনুষ্ঠিত হওয়ার কথা রয়েছে।'
        }
      ],
      tamagoTip: {
        en: 'The top represents a magnificent roof structure and bottom is soil/earth (土): a grand hall or temple built firmly on the ground.',
        bn: 'ওপরে একটি চমৎকার ছাদ বা রাজকীয় ভবনের প্রতীক আর নিচে মাটি (土)। মাটির ওপর গড়ে ওঠা অত্যন্ত জাঁকজমকপূর্ণ ও বড় হলরুম।'
      }
    },
    {
      id: 'l28-seki',
      kanji: '席',
      emoji: '🪑',
      strokeCount: 10,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'セキ', romaji: 'seki' }],
        kunyomi: []
      },
      meanings: {
        en: 'Seat, place',
        bn: 'আসন, বসার জায়গা'
      },
      vocab: [
        { kanji: '席', kana: 'せき', romaji: 'seki', meaningEn: 'seat', meaningBn: 'আসন বা সিট', tag: 'N5' },
        { kanji: '出席する', kana: 'しゅっせきする', romaji: 'shusseki suru', meaningEn: 'to attend, be present', meaningBn: 'উপস্থিত হওয়া', tag: 'N4' },
        { kanji: '座席', kana: 'ざせき', romaji: 'zaseki', meaningEn: 'passenger seat', meaningBn: 'বসার সিট (ট্রেন বা প্লেন)', tag: 'N4' },
        { kanji: '自由席', kana: 'じゆうせき', romaji: 'jiyouseki', meaningEn: 'non-reserved seat', meaningBn: 'সংরক্ষণহীন সাধারণ সিট (শিনকানসেন)', tag: 'N3' },
        { kanji: '指定席', kana: 'していせき', romaji: 'shiteiseki', meaningEn: 'reserved seat', meaningBn: 'বুকিং করা বা রিজার্ভড সিট', tag: 'N3' },
        { kanji: '欠席', kana: 'けっせき', romaji: 'kesseki', meaningEn: 'absence', meaningBn: 'অনুপস্থিতি', tag: 'N4' }
      ],
      sentences: [
        {
          ja: '授業が始まる五分前には、自分の席に座って静かに待っていてください।',
          romaji: 'Jugyou ga hajimaru gofun mae ni wa, jibun no seki ni suatte shizuka ni matteite kudasai.',
          meaningEn: 'Please sit in your seat and wait quietly five minutes before the class starts.',
          meaningBn: 'ক্লাস শুরু হওয়ার অন্তত ৫ মিনিট আগে নিজের সিটে বসে শান্তভাবে অপেক্ষা করবেন।'
        },
        {
          ja: '明日の会議には、関係するスタッフ全員が出席する予定です।',
          romaji: 'Ashita no kaigi ni wa, kankei suru sutaffu zen-in ga shusseki suru yotei desu.',
          meaningEn: 'All related staff are scheduled to attend tomorrow’s meeting.',
          meaningBn: 'আগামীকালের মিটিংয়ে দায়িত্বপ্রাপ্ত সকল কর্মকর্তার উপস্থিত থাকার কথা রয়েছে।'
        }
      ],
      tamagoTip: {
        en: 'The building radical (广) enclosing a folded woven mat (廿) on top of a cloth (巾): a designated woven mat laid down to sit inside a room.',
        bn: 'ভবন (广) এর নিচে বসার জন্য তাতামি বা মাদুর পেতে রাখার প্রাচীন চিত্র, যা বসার আসনকে প্রকাশ করে।'
      }
    },
    {
      id: 'l28-ketsu',
      kanji: '欠',
      emoji: '💤',
      strokeCount: 4,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ケツ', romaji: 'ketsu' }],
        kunyomi: [{ kana: 'か.ける', romaji: 'ka.keru' }, { kana: 'か.く', romaji: 'ka.ku' }]
      },
      meanings: {
        en: 'Lack, gap, absent, yawn',
        bn: 'অনুপস্থিত হওয়া, অভাব, হাই তোলা'
      },
      vocab: [
        { kanji: '欠席する', kana: 'けっせきする', romaji: 'kesseki suru', meaningEn: 'to be absent', meaningBn: 'অনুপস্থিত থাকা', tag: 'N4' },
        { kanji: '欠点', kana: 'けってん', romaji: 'ketten', meaningEn: 'defect, flaw, weakness', meaningBn: 'ত্রুটি বা খুত', tag: 'N3' },
        { kanji: '欠く', kana: 'かく', romaji: 'kaku', meaningEn: 'to lack, run short of', meaningBn: 'কমতি হওয়া বা অভাব থাকা', tag: 'N3' },
        { kanji: 'あくび / 欠伸', kana: 'あくび', romaji: 'akubi', meaningEn: 'yawn', meaningBn: 'হাই তোলা (মুখ হা করে)', tag: 'N3' },
        { kanji: '欠員', kana: 'けついん', romaji: 'ketsuin', meaningEn: 'vacancy, staff shortage', meaningBn: 'শূন্যপদ', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '熱があって体調が悪いので、今日の授業は欠席することにしました।',
          romaji: 'Netsu ga atte taichou ga warui node, kyou no jugyou wa kesseki suru koto ni shimashita.',
          meaningEn: 'Since I have a fever and feel unwell, I decided to be absent from today’s class.',
          meaningBn: 'জ্বর আসায় শরীর বেশি খারাপ ঠেকছে, তাই আজকের ক্লাসে অনুপস্থিত থাকার সিদ্ধান্ত নিলাম।'
        },
        {
          ja: '人には誰でも長所と欠点があり、完璧な人間はいません।',
          romaji: 'Hito ni wa dare demo chousho to ketten ga ari, kanpeki na ningen wa imasen.',
          meaningEn: 'Everyone has strengths and weaknesses, there is no perfect human.',
          meaningBn: 'প্রত্যেক মানুষেরই ভালো গুণ ও কিছু ত্রুটি থাকে, পৃথিবীতে কেউই একদম নিখুঁত নয়।'
        }
      ],
      tamagoTip: {
        en: 'A pictograph representing a person breathing or yawning with an open mouth, which implies lacking or leaving a gap.',
        bn: 'এটি মুখ হা করে হাই তোলার মতো একজন মানুষের ছবি থেকে এসেছে, যা অলসতা, কমতি বা অনুপস্থিতি বোঝাতে ব্যবহৃত হয়।'
      }
    },
    {
      id: 'l28-zen',
      kanji: '全',
      emoji: '🌎',
      strokeCount: 6,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ゼン', romaji: 'zen' }],
        kunyomi: [{ kana: 'まった.く', romaji: 'matta.ku' }, { kana: 'すべ.て', romaji: 'sube.te' }]
      },
      meanings: {
        en: 'Whole, entire, all, complete',
        bn: 'সম্পূর্ণ, পুরো, সব'
      },
      vocab: [
        { kanji: '全部', kana: 'ぜんぶ', romaji: 'zenbu', meaningEn: 'all, everything', meaningBn: 'সবকিছু বা সম্পূর্ণ', tag: 'N5' },
        { kanji: '全員', kana: 'ぜんいん', romaji: 'zen-in', meaningEn: 'all members, everyone', meaningBn: 'সকলেই বা সমস্ত সদস্য', tag: 'N4' },
        { kanji: '全国', kana: 'ぜんこく', romaji: 'zenkoku', meaningEn: 'nationwide, whole country', meaningBn: 'দেশজুড়ে বা পুরো দেশে', tag: 'N4' },
        { kanji: '安全な', kana: 'あんぜんな', romaji: 'anzen na', meaningEn: 'safe, secure', meaningBn: 'নিরাপদ', tag: 'N5' },
        { kanji: '全く', kana: 'まったく', romaji: 'mattaku', meaningEn: 'entirely, completely', meaningBn: 'একদম বা সম্পূর্ণরূপে', tag: 'N4' },
        { kanji: '完全な', kana: 'かんぜんな', romaji: 'kanzen na', meaningEn: 'perfect, complete', meaningBn: 'পরিপূর্ণ', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '試験の前の日に、テストの範囲を全部復習し終わりました।',
          romaji: 'Shiken no mae no hi ni, tesuto no han-i o zenbu fukushuushi owarimashita.',
          meaningEn: 'On the day before the exam, I finished reviewing all the test coverage.',
          meaningBn: 'পরীক্ষার আগের দিনই আমি সিলেবাসের সম্পূর্ণ অংশ রিভিশন দেওয়া শেষ করেছি।'
        },
        {
          ja: '彼が言っていることは、私には全く理解できませんでした।',
          romaji: 'Kare ga itte iru koto wa, watashi ni wa mattaku rikai dekimasen deshita.',
          meaningEn: 'I couldn’t understand what he was saying at all.',
          meaningBn: 'সে কি বলছিল তা আমি একেবারেই বা বিন্দুমাত্র বুঝতে পারিনি।'
        }
      ],
      tamagoTip: {
        en: 'An umbrella-like cover (人) protecting flawless jade stones (王), indicating something kept perfectly complete, whole, and safe.',
        bn: 'ওপরে সুরক্ষিত ছাদ বা শামিয়ানা (人) আর নিচে নিখুঁত রাজকীয় হীরা বা মুক্তা (王)। যা কোনো জিনিসকে সম্পূর্ণ অক্ষত ও সুরক্ষিত রাখা প্রকাশ করে।'
      }
    },

    // --- Read Only (読める: 授業, 宿題, 実習, 寮) ---
    {
      id: 'l28-jugyou',
      kanji: '授業',
      emoji: '🎓',
      strokeCount: 12 + 13, // 授 + 業
      jlpt: 'N5',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'ジュギョウ', romaji: 'jugyou' }],
        kunyomi: []
      },
      meanings: {
        en: 'Class, lesson, instruction',
        bn: 'ক্লাস, লেকচার'
      },
      vocab: [
        { kanji: '授業', kana: 'じゅぎょう', romaji: 'jugyou', meaningEn: 'class', meaningBn: 'ক্লাস', tag: 'N5' },
        { kanji: '授かる', kana: 'さずかる', romaji: 'sazukaru', meaningEn: 'to be awarded, receive', meaningBn: 'পুরস্কৃত বা লাভ করা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '日本語学校の朝の授業は、九時から十二時半まで行われます।',
          romaji: 'Nihonngo gakkou no asa no jugyou wa, kuji kara juunijihan made okonawaremasu.',
          meaningEn: 'The morning classes at the Japanese school are held from 9:00 to 12:30.',
          meaningBn: 'জাপানি ভাষা স্কুলের সকালের ক্লাসগুলো ৯টা থেকে শুরু হয়ে দুপুর ১২:৩০ পর্যন্ত চলে।'
        }
      ],
      tamagoTip: {
        en: '授 (instruct/bestow) + 業 (industry/work) = Bestowing knowledge and task sessions, which makes a class.',
        bn: '授 (প্রদান করা বা শিক্ষা দেওয়া) + 業 (কর্ম বা অধ্যায়) = ছাত্রদেরকে ক্লাসে পাঠদান করা।'
      }
    },
    {
      id: 'l28-shukudai',
      kanji: '宿題',
      emoji: '✍️',
      strokeCount: 11 + 18, // 宿 + 題
      jlpt: 'N5',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'シュクダイ', romaji: 'shukudai' }],
        kunyomi: []
      },
      meanings: {
        en: 'Homework',
        bn: 'বাড়ির কাজ বা হোমওয়ার্ক'
      },
      vocab: [
        { kanji: '宿題', kana: 'しゅくだい', romaji: 'shukudai', meaningEn: 'homework', meaningBn: 'বাড়ির কাজ', tag: 'N5' },
        { kanji: '宿', kana: 'やど', romaji: 'yado', meaningEn: 'lodging, inn', meaningBn: 'রিসোর্ট বা থাকার হোটেল', tag: 'N4' }
      ],
      sentences: [
        {
          ja: '宿題が終わるまでは、テレビゲームをやってはいけないと母に言われました।',
          romaji: 'Shukudai ga owaru made wa, terebigeemu o yatte wa ikenai to haha ni iwaremashita.',
          meaningEn: 'I was told by my mother that I must not play video games until my homework is finished.',
          meaningBn: 'হোমওয়ার্ক শেষ না করা পর্যন্ত ভিডিও গেম খেলা যাবে না বলে আম্মু কড়া নির্দেশ দিয়েছেন।'
        }
      ],
      tamagoTip: {
        en: '宿 (inn/home) + 題 (topic) = Topics assigned to be solved at home.',
        bn: '宿 (বাড়ি বা বাসস্থান) + 題 (প্রশ্ন বা বিষয়) = ঘরে বসে সমাধান করার জন্য দেওয়া কাজ।'
      }
    },
    {
      id: 'l28-jisshuu',
      kanji: '実習',
      emoji: '⚙️',
      strokeCount: 8 + 11, // 実 + 習
      jlpt: 'N3',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'ジッシゅう', romaji: 'jisshuu' }],
        kunyomi: []
      },
      meanings: {
        en: 'Practical training, hands-on practice',
        bn: 'হাতে-কলমে কাজ শেখা বা ইন্টার্নশিপ/ব্যবহারিক শিক্ষা'
      },
      vocab: [
        { kanji: '実習する', kana: 'じっしゅうする', romaji: 'jisshuu suru', meaningEn: 'to do practical training', meaningBn: 'ব্যবহারিক কাজ শেখা', tag: 'N3' },
        { kanji: '実る', kana: 'みのる', romaji: 'minoru', meaningEn: 'to ripen, bear fruit', meaningBn: 'ফল ধরা বা সফল হওয়া', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '看護学校の学生たちは、地元の大きな病院で二ヶ月間の実習を行います।',
          romaji: 'Kango gakkou no gakusei-tachi wa, jimoto no ookina byouin de nikaigetsu no jisshuu o okonaimasu.',
          meaningEn: 'The nursing school students do a two-month practical training at the local hospital.',
          meaningBn: 'নার্সিং কলেজের ছাত্রছাত্রীরা এলাকার বড় হাসপাতালে দুই মাসের ব্যবহারিক শিক্ষা (ইন্টার্নশিপ) নিচ্ছেন।'
        }
      ],
      tamagoTip: {
        en: '実 (reality/truth) + 習 (practice) = Practicing in a real environment to master a technical skill.',
        bn: '実 (বাস্তব বা সত্য) + 習 (অনুশীলন) = কারিগরি বা টেকনিক্যাল কাজ বাস্তবে মাঠে গিয়ে কাজ করে শেখা।'
      }
    },
    {
      id: 'l28-ryou',
      kanji: '寮',
      emoji: '🏢',
      strokeCount: 15,
      jlpt: 'N3',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'リョウ', romaji: 'ryou' }],
        kunyomi: []
      },
      meanings: {
        en: 'Dormitory, hostel',
        bn: 'ছাত্রাবাস, হোস্টেল, ডরমিটরি'
      },
      vocab: [
        { kanji: '学生寮', kana: 'がくせいりょう', romaji: 'gakuseiryou', meaningEn: 'student dormitory', meaningBn: 'স্টুডেন্ট হোস্টেল', tag: 'N3' },
        { kanji: '社員寮', kana: 'しゃいんりょう', romaji: 'shainryou', meaningEn: 'company dormitory', meaningBn: 'কোম্পানি কোয়ার্টার বা হোস্টেল', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '私は大学の学生寮に入り、色々な国の留学生と共同生活をしています।',
          romaji: 'Watashi wa daigaku no gakuseiryou ni hairi, iroiro na kuni no ryuugakusei to kyoudou seikatsu o shite imasu.',
          meaningEn: 'I entered the university student dormitory and live a communal life with international students from various countries.',
          meaningBn: 'আমি বিশ্ববিদ্যালয়ের হোস্টেলে সিট পেয়েছি, সেখানে বিভিন্ন দেশের শিক্ষার্থীদের সাথে একসাথে থাকি।'
        }
      ],
      tamagoTip: {
        en: 'A grand roof (宀) with a fire/light (僚 - colleague) structure inside, showing a shared residence building.',
        bn: 'বড় ছাদের নিচে (宀) সহকর্মী বা সতীর্থদের থাকার ঘর, যা হোস্টেল বা কোয়ার্টার নির্দেশ করে।'
      }
    },

    // --- Visual Recognition (見て、分かる: 期限) ---
    {
      id: 'l28-kigen',
      kanji: '期限',
      emoji: '⏳',
      strokeCount: 12 + 9, // 期 + 限
      jlpt: 'N4',
      category: 'visual_recognition',
      readings: {
        onyomi: [{ kana: 'キゲン', romaji: 'kigen' }],
        kunyomi: []
      },
      meanings: {
        en: 'Deadline, time limit, expiration date',
        bn: 'শেষ সময়সীমা বা ডেডলাইন'
      },
      vocab: [
        { kanji: '期限', kana: 'きげん', romaji: 'kigen', meaningEn: 'deadline', meaningBn: 'শেষ সময়সীমা', tag: 'N4' },
        { kanji: '消費期限', kana: 'しょうひきげん', romaji: 'shouhikigen', meaningEn: 'expiration date (food)', meaningBn: 'খাবার উপযোগিতার শেষ তারিখ', tag: 'N3' },
        { kanji: '限定する', kana: 'げんていする', romaji: 'gentei suru', meaningEn: 'to limit, restrict', meaningBn: 'সীমাবদ্ধ করা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '奨学金の申請書類の提出期限は、今週の金曜日の午後五時必着です।',
          romaji: 'Shougakukin no shinsei shorui no teishutsukigen wa, konshuu no kinyoubi no gogo goji hicchyaku desu.',
          meaningEn: 'The submission deadline for the scholarship application is strictly 5:00 PM this Friday.',
          meaningBn: 'স্কলারশিপের আবেদনপত্র জমা দেওয়ার শেষ সময়সীমা হলো এই সপ্তাহের শুক্রবার বিকেল ৫টা (অবশ্যই পৌঁছাতে হবে)।'
        }
      ],
      tamagoTip: {
        en: '期 (period/time) + 限 (limit/boundary) = A strict time boundary or final date.',
        bn: '期 (নির্দিষ্ট সময়কাল) + 限 (সীমানা) = কোনো সুযোগ বা কাজ সম্পন্ন করার একদম শেষ দিন বা ডেডলাইন।'
      }
    }
  ]
};
