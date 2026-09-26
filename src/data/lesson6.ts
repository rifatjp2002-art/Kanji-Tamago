import { Lesson } from '../types/kanji';

export const lesson6: Lesson = {
  id: 6,
  number: 6,
  titleJa: '一緒に！ / 漢字のパーツ',
  titleRomaji: 'Issho ni! / Kanji no paatsu',
  titleBn: 'একসাথে! ও কাঞ্জির মৌলিক অংশ (রেডিক্যাল ও দৈনন্দিন যোগাযোগ)',
  titleEn: 'Together! & Kanji Components / Radicals (Communication & Foundation)',
  descriptionBn: 'বন্ধুদের সাথে সময় কাটানো, দেখা করা (会う), যাওয়া-আসা (今, 来る, 帰る), কথা বলা ও যোগাযোগ (話す, 聞く, 読む, 書く) এবং কাঞ্জির মূল বিল্ডিং ব্লক বা রেডিক্যাল (寺, 言, 貝, 田, 力, 門)। সাথে লাইব্রেরি, খবরের কাগজ ও অভ্যর্থনা ডেস্কের সাইন (受付)।',
  descriptionEn: 'Action verbs for social life (meet, come, return, listen, read, write, speak) combined with fundamental Kanji radicals (temple, word, shell, rice field, power, gate). Includes public library, newspaper, and reception desk signs.',
  kanjiList: [
    // --- MAIN KANJI (15) ---
    // 1. 今
    {
      id: 'l6-ima',
      kanji: '今',
      emoji: '⏱️',
      strokeCount: 4,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'コン', romaji: 'kon' },
          { kana: 'キン', romaji: 'kin' }
        ],
        kunyomi: [
          { kana: 'いま', romaji: 'ima' }
        ]
      },
      meanings: {
        en: 'now, present',
        bn: 'এখন, বর্তমান, এই'
      },
      vocab: [
        {
          kanji: '今',
          kana: 'いま',
          romaji: 'ima',
          meaningEn: 'now, right now',
          meaningBn: 'এখন, এই মুহূর্তে',
          tag: 'Time N5'
        },
        {
          kanji: '今日',
          kana: 'きょう / こんにち',
          romaji: 'kyou / konnichi',
          meaningEn: 'today',
          meaningBn: 'আজ / আজকের দিন',
          tag: 'Time N5'
        },
        {
          kanji: '今週',
          kana: 'こんしゅう',
          romaji: 'konshuu',
          meaningEn: 'this week',
          meaningBn: 'এই সপ্তাহ',
          tag: 'Time N5'
        },
        {
          kanji: '今月',
          kana: 'こんげつ',
          romaji: 'kongetsu',
          meaningEn: 'this month',
          meaningBn: 'এই মাস',
          tag: 'Time N5'
        },
        {
          kanji: '今年',
          kana: 'ことし',
          romaji: 'kotoshi',
          meaningEn: 'this year',
          meaningBn: 'এই বছর',
          tag: 'Time N5'
        },
        {
          kanji: '今晩',
          kana: 'こんばん',
          romaji: 'konban',
          meaningEn: 'this evening, tonight',
          meaningBn: 'আজ রাতে',
          tag: 'Time N5'
        }
      ],
      sentences: [
        {
          ja: '今、何時何分ですか。ーちょうど三時です。',
          romaji: 'Ima, nanji nanpun desu ka. - Choudo sanji desu.',
          meaningEn: 'What time and minute is it right now? - It is exactly 3:00.',
          meaningBn: 'এখন কয়টা বেজে কত মিনিট? — ঠিক ৩টা বাজে।'
        },
        {
          ja: '今日は天気がとてもいいので、散歩しましょう。',
          romaji: 'Kyou wa tenki ga totemo ii node, sanpo shimashou.',
          meaningEn: 'The weather is very nice today, so let\'s take a stroll.',
          meaningBn: 'আজ আবহাওয়া খুব সুন্দর, তাই চলুন একটু হেঁটে আসি।'
        },
        {
          ja: '今月は日本語能力試験の申し込みがあります。',
          romaji: 'Kongetsu wa Nihongo nouryoku shiken no moushikomi ga arimasu.',
          meaningEn: 'This month has the JLPT exam application period.',
          meaningBn: 'এই মাসে জাপানি ভাষার দক্ষতা পরীক্ষা (JLPT)-র আবেদন প্রক্রিয়া রয়েছে।'
        }
      ],
      tamagoTip: {
        bn: 'বর্তমান ক্ষণকে নির্দেশক ছাদ ও চিহ্ন। 今日 (আজ), 今週 (এই সপ্তাহ), 今年 (এই বছর)-এ বহুল ব্যবহৃত।',
        en: 'A mark captured under a roof representing the present moment. Used in "today", "this week", and "now".'
      }
    },

    // 2. 来
    {
      id: 'l6-kuru',
      kanji: '来',
      emoji: '🛬',
      strokeCount: 7,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ライ', romaji: 'rai' }
        ],
        kunyomi: [
          { kana: 'く・る', romaji: 'ku-ru' },
          { kana: 'きた・る', romaji: 'kita-ru' },
          { kana: 'こ・ない', romaji: 'ko-nai' }
        ]
      },
      meanings: {
        en: 'come, arrive, next, future',
        bn: 'আসা, আগমন করা, আগামী'
      },
      vocab: [
        {
          kanji: '来る',
          kana: 'くる',
          romaji: 'kuru',
          meaningEn: 'to come, arrive',
          meaningBn: 'আসা / আগমন করা',
          tag: 'Verb N5'
        },
        {
          kanji: '来週',
          kana: 'らいしゅう',
          romaji: 'raishuu',
          meaningEn: 'next week',
          meaningBn: 'আগামী সপ্তাহ',
          tag: 'Time N5'
        },
        {
          kanji: '来月',
          kana: 'らいげつ',
          romaji: 'raigetsu',
          meaningEn: 'next month',
          meaningBn: 'পরের মাস',
          tag: 'Time N5'
        },
        {
          kanji: '来年',
          kana: 'らいねん',
          romaji: 'rainen',
          meaningEn: 'next year',
          meaningBn: 'আগামী বছর',
          tag: 'Time N5'
        },
        {
          kanji: '来日',
          kana: 'らいにち',
          romaji: 'rainichi',
          meaningEn: 'coming to Japan, arriving in Japan',
          meaningBn: 'জাপানে আগমন করা',
          tag: 'Formal N4'
        },
        {
          kanji: '未来',
          kana: 'みらい',
          romaji: 'mirai',
          meaningEn: 'future (distant)',
          meaningBn: 'ভবিষ্যত',
          tag: 'General N4'
        }
      ],
      sentences: [
        {
          ja: '日本へ何年何月に来ましたか。',
          romaji: 'Nihon e nannen nangatsu ni kimashita ka.',
          meaningEn: 'In what year and month did you come to Japan?',
          meaningBn: 'আপনি কত সালের কোন মাসে জাপানে এসেছেন?'
        },
        {
          ja: '来週の日曜日に私の家へ遊びに来てください。',
          romaji: 'Raishuu no nichiyoubi ni watashi no ie e asobi ni kite kudasai.',
          meaningEn: 'Please come visit my house next Sunday.',
          meaningBn: 'আগামী রবিবার আমার বাসায় বেড়াতে আসবেন দয়া করে।'
        },
        {
          ja: '来月、家族がバングラデシュから日本に来ます。',
          romaji: 'Raigetsu, kazoku ga Banguradeshu kara Nihon ni kimasu.',
          meaningEn: 'Next month, my family is coming to Japan from Bangladesh.',
          meaningBn: 'আগামী মাসে আমার পরিবার বাংলাদেশ থেকে জাপানে আসবে।'
        }
      ],
      tamagoTip: {
        bn: 'দূর দেশ থেকে গমের শীষ বয়ে নিয়ে আসা। আগামী সময় বোঝাতে (来週, 来月, 来年) এবং আগমন বোঝাতে 来る।',
        en: 'A wheat plant brought from afar. Symbolizes "coming" and the "next" approaching time.'
      }
    },

    // 3. 帰
    {
      id: 'l6-kaeru',
      kanji: '帰',
      emoji: '🏠',
      strokeCount: 10,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'キ', romaji: 'ki' }
        ],
        kunyomi: [
          { kana: 'かえ・る', romaji: 'kae-ru' },
          { kana: 'かえ・す', romaji: 'kae-su' }
        ]
      },
      meanings: {
        en: 'return, go home, head back',
        bn: 'ফেরা, বাড়ি ফিরে যাওয়া'
      },
      vocab: [
        {
          kanji: '帰る',
          kana: 'かえる',
          romaji: 'kaeru',
          meaningEn: 'to return, go home',
          meaningBn: 'বাড়ি ফেরা / ফিরে যাওয়া',
          tag: 'Verb N5'
        },
        {
          kanji: '帰国',
          kana: 'きこく',
          romaji: 'kikoku',
          meaningEn: 'returning to one\'s home country',
          meaningBn: 'স্বদেশে ফিরে যাওয়া',
          tag: 'Formal N4'
        },
        {
          kanji: '帰り道',
          kana: 'かえりみち',
          romaji: 'kaerimichi',
          meaningEn: 'the way home, return route',
          meaningBn: 'বাড়ি ফেরার পথ',
          tag: 'Daily N4'
        },
        {
          kanji: 'お帰りなさい',
          kana: 'おかえりなさい',
          romaji: 'okaerinasai',
          meaningEn: 'welcome home! (family greeting)',
          meaningBn: 'বাসায় স্বাগতম! (ফিরে এলে বলা হয়)',
          tag: 'Greeting N5'
        },
        {
          kanji: '日帰り',
          kana: 'ひがえり',
          romaji: 'higaeri',
          meaningEn: 'day trip (return on the same day)',
          meaningBn: 'একদিনের ট্যুর (দিনে গিয়ে দিনেই ফেরা)',
          tag: 'Travel N4'
        },
        {
          kanji: '持ち帰り',
          kana: 'もちかえり',
          romaji: 'mochikaeri',
          meaningEn: 'takeout, takeaway (food)',
          meaningBn: 'টেক-অ্যাওয়ে / পার্সেল খাবার',
          tag: 'Shop N4'
        }
      ],
      sentences: [
        {
          ja: '仕事が終わったら、真っ直ぐ家へ帰ります。',
          romaji: 'Shigoto ga owattara, massugu ie e kaerimasu.',
          meaningEn: 'When work finishes, I will return directly home.',
          meaningBn: 'কাজ শেষ হলে আমি সোজা বাসায় ফিরে যাব।'
        },
        {
          ja: 'ただいまーお帰りなさい、お疲れ様。',
          romaji: 'Tadaima - Okaerinasai, otsukaresama.',
          meaningEn: 'I\'m home! - Welcome back, good job today.',
          meaningBn: 'আমি বাড়ি ফিরেছি! — বাসায় স্বাগতম, সারাদিন কষ্ট হলো।'
        },
        {
          ja: '夏休みに二週間バングラデシュへ帰国します。',
          romaji: 'Natsuyasumi ni nishuukan Banguradeshu e kikoku shimasu.',
          meaningEn: 'I will return home to Bangladesh for two weeks during the summer break.',
          meaningBn: 'গ্রীষ্মকালীন ছুটিতে আমি দুই সপ্তাহের জন্য বাংলাদেশে নিজের দেশে ফিরে যাব।'
        }
      ],
      tamagoTip: {
        bn: 'দিনশেষে ঝাড়ু হাতে ঘরবাড়ি গুছিয়ে নিজের ঘরে ফেরা। বাড়ি ফেরা হলো 帰る এবং নিজ দেশে প্রত্যাবর্তন 帰国।',
        en: 'Returning to the household. Essential for going home (帰る) and returning to one’s native land (帰国).'
      }
    },

    // 4. 会
    {
      id: 'l6-au',
      kanji: '会',
      emoji: '🤝',
      strokeCount: 6,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'カイ', romaji: 'kai' },
          { kana: 'エ', romaji: 'e' }
        ],
        kunyomi: [
          { kana: 'あ・う', romaji: 'a-u' }
        ]
      },
      meanings: {
        en: 'meet, meet up, society, association',
        bn: 'সাক্ষাৎ করা, দেখা করা, সভা'
      },
      vocab: [
        {
          kanji: '会う',
          kana: 'あう',
          romaji: 'au',
          meaningEn: 'to meet, see someone',
          meaningBn: 'দেখা করা / সাক্ষাৎ করা',
          tag: 'Verb N5'
        },
        {
          kanji: '会社',
          kana: 'かいしゃ',
          romaji: 'kaisha',
          meaningEn: 'company, business firm',
          meaningBn: 'কোম্পানি / অফিস',
          tag: 'Business N5'
        },
        {
          kanji: '会話',
          kana: 'かいわ',
          romaji: 'kaiwa',
          meaningEn: 'conversation, dialogue',
          meaningBn: 'কথোপকথন',
          tag: 'Language N5'
        },
        {
          kanji: '会議',
          kana: 'かいぎ',
          romaji: 'kaigi',
          meaningEn: 'meeting, conference',
          meaningBn: 'মিটিং / সভা',
          tag: 'Business N4'
        },
        {
          kanji: '乾杯会',
          kana: 'かんぱいかい',
          romaji: 'kanpaikai',
          meaningEn: 'toasting party / drinking party',
          meaningBn: 'উদ্‌যাপন পার্টি',
          tag: 'Social'
        },
        {
          kanji: '教会',
          kana: 'きょうかい',
          romaji: 'kyoukai',
          meaningEn: 'church',
          meaningBn: 'গির্জা',
          tag: 'General N4'
        }
      ],
      sentences: [
        {
          ja: '駅の改札の前で友達と午後三時に会いました。',
          romaji: 'Eki no kaisatsu no mae de tomodachi to gogo sanji ni aimashita.',
          meaningEn: 'I met with my friend in front of the station ticket gates at 3:00 PM.',
          meaningBn: 'স্টেশনের টিকিট গেটের সামনে বিকেল ৩টায় আমি বন্ধুর সাথে দেখা করেছিলাম।'
        },
        {
          ja: '日本のIT会社でプログラマーとして働いています。',
          romaji: 'Nihon no IT kaisha de puroguramaa toshite hataraite imasu.',
          meaningEn: 'I am working as a programmer at a Japanese IT company.',
          meaningBn: 'আমি জাপানের একটি আইটি কোম্পানিতে প্রোগ্রামার হিসেবে কাজ করছি।'
        },
        {
          ja: '授業でペアを組んで日本語の会話を練習しました。',
          romaji: 'Jugyou de pea o kunde Nihongo no kaiwa o renshuu shimashita.',
          meaningEn: 'We paired up in class and practiced Japanese conversation.',
          meaningBn: 'ক্লাসে আমরা জোড়া বেঁধে জাপানি ভাষায় কথোপকথন অনুশীলন করেছি।'
        }
      ],
      tamagoTip: {
        bn: 'একই ছাদের নিচে বহু মানুষ একত্রিত হওয়া। দেখা করা (会う), অফিস (会社), এবং কথোপকথন (会話)।',
        en: 'People gathering together under one roof. Meaning to meet (会う) or a gathering/firm (会社).'
      }
    },

    // 5. 社
    {
      id: 'l6-sha',
      kanji: '社',
      emoji: '🏢',
      strokeCount: 7,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'シャ', romaji: 'sha' }
        ],
        kunyomi: [
          { kana: 'やしろ', romaji: 'yashiro' }
        ]
      },
      meanings: {
        en: 'company, society, Shinto shrine',
        bn: 'কোম্পানি, সমাজ, পবিত্র শ্রাইন'
      },
      vocab: [
        {
          kanji: '会社',
          kana: 'かいしゃ',
          romaji: 'kaisha',
          meaningEn: 'company, firm',
          meaningBn: 'কোম্পানি / প্রতিষ্ঠান',
          tag: 'Business N5'
        },
        {
          kanji: '社員',
          kana: 'しゃいん',
          romaji: 'shain',
          meaningEn: 'company employee, worker',
          meaningBn: 'কোম্পানির কর্মচারী',
          tag: 'Business N5'
        },
        {
          kanji: '会社員',
          kana: 'かいしゃいん',
          romaji: 'kaishain',
          meaningEn: 'office worker, corporate employee',
          meaningBn: 'চাকরিজীবী',
          tag: 'Occupation N5'
        },
        {
          kanji: '神社',
          kana: 'じんじゃ',
          romaji: 'jinja',
          meaningEn: 'Shinto shrine',
          meaningBn: 'শিন্তো শ্রাইন / মন্দির',
          tag: 'Culture N4'
        },
        {
          kanji: '社会',
          kana: 'しゃかい',
          romaji: 'shakai',
          meaningEn: 'society, public world',
          meaningBn: 'সমাজ',
          tag: 'Society N4'
        },
        {
          kanji: '社長',
          kana: 'しゃちょう',
          romaji: 'shachou',
          meaningEn: 'company president, CEO',
          meaningBn: 'কোম্পানির প্রেসিডেন্ট / বস',
          tag: 'Business N4'
        }
      ],
      sentences: [
        {
          ja: '父は東京の商事会社で会社員をしています。',
          romaji: 'Chichi wa Toukyou no shouji kaisha de kaishain o shite imasu.',
          meaningEn: 'My father works as an office employee at a trading company in Tokyo.',
          meaningBn: 'আমার বাবা টোকিওর একটি বাণিজ্যিক কোম্পানিতে চাকরি করেন।'
        },
        {
          ja: '正月に有名な神社へ初詣に行きました。',
          romaji: 'Shougatsu ni yuumei na jinja e hatsumoude ni ikimashita.',
          meaningEn: 'I went to a famous Shinto shrine for the first visit of the New Year.',
          meaningBn: 'নতুন বছরের শুরুতে আমি একটি বিখ্যাত শিন্তো মন্দিরে প্রার্থনার জন্য গিয়েছিলাম।'
        },
        {
          ja: '社長が全社員に向けて新しい方針を発表しました。',
          romaji: 'Shachou ga zenshain ni mukete atarashii houshin o happyou shimashita.',
          meaningEn: 'The company president announced the new policy to all employees.',
          meaningBn: 'কোম্পানির প্রেসিডেন্ট সকল কর্মচারীর উদ্দেশ্যে নতুন নীতিমালা ঘোষণা করেছেন।'
        }
      ],
      tamagoTip: {
        bn: 'বেদির সামনে (礻) মাটির ঢিবি (土) ঘিরে উপাসনা ও সংগঠনের মিলন। 会社 (কোম্পানি) ও 神社 (শ্রাইন)।',
        en: 'An altar (礻) and soil (土) representing communal assembly. Used for companies and Shinto shrines.'
      }
    },

    // 6. 聞
    {
      id: 'l6-kiku',
      kanji: '聞',
      emoji: '👂',
      strokeCount: 14,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ブン', romaji: 'bun' },
          { kana: 'モン', romaji: 'mon' }
        ],
        kunyomi: [
          { kana: 'き・く', romaji: 'ki-ku' },
          { kana: 'き・こえる', romaji: 'ki-koeru' }
        ]
      },
      meanings: {
        en: 'hear, listen, ask',
        bn: 'শোনা, শ্রবণ করা, জিজ্ঞেস করা'
      },
      vocab: [
        {
          kanji: '聞く',
          kana: 'きく',
          romaji: 'kiku',
          meaningEn: 'to listen, hear, ask',
          meaningBn: 'শোনা / জিজ্ঞেস করা',
          tag: 'Verb N5'
        },
        {
          kanji: '聞こえる',
          kana: 'きこえる',
          romaji: 'kikoeru',
          meaningEn: 'can hear, to be audible',
          meaningBn: 'কানে শোনা যাওয়া',
          tag: 'Verb N5'
        },
        {
          kanji: '新聞',
          kana: 'しんぶん',
          romaji: 'shinbun',
          meaningEn: 'newspaper',
          meaningBn: 'সংবাদপত্র / খবরের কাগজ',
          tag: 'Media N5'
        },
        {
          kanji: '聞き取り',
          kana: 'ききとり',
          romaji: 'kikitori',
          meaningEn: 'listening comprehension (Choukai)',
          meaningBn: 'শ্রবণ পরীক্ষা / লিসেনিং',
          tag: 'Exam N4'
        },
        {
          kanji: '見聞',
          kana: 'けんぶん',
          romaji: 'kenbun',
          meaningEn: 'information, experience (seeing & hearing)',
          meaningBn: 'দেখা ও শোনার মাধ্যমে বাস্তব অভিজ্ঞতা',
          tag: 'Culture N4'
        },
        {
          kanji: '前代未聞',
          kana: 'ぜんだいみもん',
          romaji: 'zendaimimon',
          meaningEn: 'unprecedented, unheard of',
          meaningBn: 'অভূতপূর্ব / যা আগে কখনো শোনা যায়নি',
          tag: 'Idiom'
        }
      ],
      sentences: [
        {
          ja: '通学の電車の中で日本語のラジオを聞いています。',
          romaji: 'Tsuugaku no densha no naka de Nihongo no rajio o kiite imasu.',
          meaningEn: 'I listen to Japanese radio inside the train while commuting to school.',
          meaningBn: 'স্কুলে যাওয়ার সময় ট্রেনের ভেতর আমি জাপানি রেডিও শুনি।'
        },
        {
          ja: '道が分からないときは、交番で警察官に聞きます。',
          romaji: 'Michi ga wakaranai toki wa, kouban de keisatsukan ni kikimasu.',
          meaningEn: 'When I do not know the way, I ask the police officer at the police box.',
          meaningBn: 'পথঘাট না চিনলে আমি পুলিশ বক্সে গিয়ে পুলিশকে জিজ্ঞেস করি।'
        },
        {
          ja: '外から救急車のサイレンの音が聞こえます。',
          romaji: 'Soto kara kyuukyuusha no sairen no oto ga kikoemasu.',
          meaningEn: 'The siren of an ambulance is audible from outside.',
          meaningBn: 'বাইরে থেকে একটি অ্যাম্বুলেন্সের সাইরেনের শব্দ শোনা যাচ্ছে।'
        }
      ],
      tamagoTip: {
        bn: 'দরজার (門) ভেতর কান (耳) পেতে শব্দ শোনা। কান পেতে শোনা ও প্রশ্ন করা হলো 聞く এবং নতুন খবর হলো 新聞।',
        en: 'Placing an ear (耳) between the gates (門) to listen carefully. Used for listening, asking, and newspapers.'
      }
    },

    // 7. 読
    {
      id: 'l6-yomu',
      kanji: '読',
      emoji: '📖',
      strokeCount: 14,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ドク', romaji: 'doku' },
          { kana: 'トク', romaji: 'toku' },
          { kana: 'トウ', romaji: 'tou' }
        ],
        kunyomi: [
          { kana: 'よ・む', romaji: 'yo-mu' }
        ]
      },
      meanings: {
        en: 'read, pronounce, chant',
        bn: 'পড়া, পাঠ করা'
      },
      vocab: [
        {
          kanji: '読む',
          kana: 'よむ',
          romaji: 'yomu',
          meaningEn: 'to read',
          meaningBn: 'পড়া / পাঠ করা',
          tag: 'Verb N5'
        },
        {
          kanji: '読書',
          kana: 'どくしょ',
          romaji: 'dokusho',
          meaningEn: 'reading books',
          meaningBn: 'বই পড়া / অধ্যয়ন',
          tag: 'Hobby N5'
        },
        {
          kanji: '読解',
          kana: 'どっかい',
          romaji: 'dokkai',
          meaningEn: 'reading comprehension (JLPT section)',
          meaningBn: 'পড়ে বোঝার পরীক্ষা (রিডিং সেকশন)',
          tag: 'Exam N4'
        },
        {
          kanji: '読み方',
          kana: 'よみかた',
          romaji: 'yomikata',
          meaningEn: 'way of reading, pronunciation',
          meaningBn: 'পড়ার নিয়ম / উচ্চারণ',
          tag: 'Language N5'
        },
        {
          kanji: '音読み',
          kana: 'おんよみ',
          romaji: 'on\'yomi',
          meaningEn: 'Chinese reading of Kanji',
          meaningBn: 'অন\'ইওমি (কাঞ্জির চীনা রিডিং)',
          tag: 'Grammar N4'
        },
        {
          kanji: '訓読み',
          kana: 'くんよみ',
          romaji: 'kun\'yomi',
          meaningEn: 'Japanese native reading of Kanji',
          meaningBn: 'কুন\'ইওমি (কাঞ্জির স্থানীয় জাপানি রিডিং)',
          tag: 'Grammar N4'
        }
      ],
      sentences: [
        {
          ja: '寝る前にベッドで日本の小説を読みます。',
          romaji: 'Neru mae ni beddo de Nihon no shousetsu o yomimasu.',
          meaningEn: 'I read a Japanese novel in bed before sleeping.',
          meaningBn: 'ঘুমানোর আগে বিছানায় শুয়ে আমি জাপানি উপন্যাস পড়ি।'
        },
        {
          ja: 'この漢字の読み方を教えていただけませんか。',
          romaji: 'Kono kanji no yomikata o oshiete itadakemasen ka.',
          meaningEn: 'Could you please teach me how to read this kanji?',
          meaningBn: 'এই কাঞ্জিটির উচ্চারণ বা পড়ার নিয়ম আমাকে একটু শিখিয়ে দেবেন কি?'
        },
        {
          ja: '私の趣味は休日に読書をすることです。',
          romaji: 'Watashi no shumi wa kyuujitsu ni dokusho o suru koto desu.',
          meaningEn: 'My hobby is reading books on holidays.',
          meaningBn: 'ছুটির দিনে বই পড়া আমার অন্যতম প্রিয় শখ।'
        }
      ],
      tamagoTip: {
        bn: 'কথা (言) এবং বিক্রি/পণ্য (売)। লিখিত কথাগুলো উচ্চারণ করে পড়া। বই পড়া হলো 読書 এবং উচ্চারণ 読み方।',
        en: 'Words (言) expressed aloud sequentially. Fundamental for reading (読む) and comprehension (読解).'
      }
    },

    // 8. 書
    {
      id: 'l6-kaku',
      kanji: '書',
      emoji: '✍️',
      strokeCount: 10,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ショ', romaji: 'sho' }
        ],
        kunyomi: [
          { kana: 'か・く', romaji: 'ka-ku' }
        ]
      },
      meanings: {
        en: 'write, document, book',
        bn: 'লেখা, দলিল, পুস্তক'
      },
      vocab: [
        {
          kanji: '書く',
          kana: 'かく',
          romaji: 'kaku',
          meaningEn: 'to write, compose',
          meaningBn: 'লেখা / লিপিবদ্ধ করা',
          tag: 'Verb N5'
        },
        {
          kanji: '辞書',
          kana: 'じしょ',
          romaji: 'jisho',
          meaningEn: 'dictionary',
          meaningBn: 'অভিধান / ডিকশনারি',
          tag: 'Study N5'
        },
        {
          kanji: '図書館',
          kana: 'としょかん',
          romaji: 'toshokan',
          meaningEn: 'library',
          meaningBn: 'গ্রন্থাগার / লাইব্রেরি',
          tag: 'Place N5'
        },
        {
          kanji: '書類',
          kana: 'しょるい',
          romaji: 'shorui',
          meaningEn: 'documents, paperwork',
          meaningBn: 'কাগজপত্র / নথিপত্র',
          tag: 'Business N4'
        },
        {
          kanji: '教科書',
          kana: 'きょうかしょ',
          romaji: 'kyoukasho',
          meaningEn: 'textbook',
          meaningBn: 'পাঠ্যবই',
          tag: 'School N5'
        },
        {
          kanji: '葉書',
          kana: 'はがき',
          romaji: 'hagaki',
          meaningEn: 'postcard',
          meaningBn: 'পোস্টকার্ড',
          tag: 'Post N5'
        }
      ],
      sentences: [
        {
          ja: '申請書に名前と住所を黒いペンで書きました。',
          romaji: 'Shinseisho ni namae to juusho o kuroi pen de kakimashita.',
          meaningEn: 'I wrote my name and address on the application form with a black pen.',
          meaningBn: 'আবেদনপত্রে আমি কালো কলম দিয়ে নাম ও ঠিকানা লিখেছি।'
        },
        {
          ja: '分からない言葉があったら、辞書で調べてください。',
          romaji: 'Wakaranai kotoba ga attara, jisho de shirabete kudasai.',
          meaningEn: 'If there are words you do not understand, please look them up in the dictionary.',
          meaningBn: 'অজানা কোনো শব্দ থাকলে দয়া করে ডিকশনারিতে খুঁজে দেখুন।'
        },
        {
          ja: '放課後は静かな図書館で勉強しています。',
          romaji: 'Houkago wa shizuka na toshokan de benkyou shite imasu.',
          meaningEn: 'After school, I study in the quiet library.',
          meaningBn: 'স্কুল ছুটির পর আমি শান্ত লাইব্রেরিতে বসে পড়াশোনা করি।'
        }
      ],
      tamagoTip: {
        bn: 'হাতে একটি ব্রাশ বা কলম (聿) ধরে কালি দিয়ে কাগজে দাগ টানা। লেখা হলো 書く এবং লাইব্রেরি 図書館।',
        en: 'A hand holding a stylus/brush over paper. Origin of all writing, documents, and books.'
      }
    },

    // 9. 話
    {
      id: 'l6-hanasu',
      kanji: '話',
      emoji: '🗣️',
      strokeCount: 13,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ワ', romaji: 'wa' }
        ],
        kunyomi: [
          { kana: 'はな・す', romaji: 'hana-su' },
          { kana: 'はなし', romaji: 'hanashi' }
        ]
      },
      meanings: {
        en: 'speak, talk, conversation, tale',
        bn: 'কথা বলা, গল্প, আলাপ'
      },
      vocab: [
        {
          kanji: '話す',
          kana: 'はなす',
          romaji: 'hanasu',
          meaningEn: 'to speak, talk',
          meaningBn: 'কথা বলা / আলোচনা করা',
          tag: 'Verb N5'
        },
        {
          kanji: '話',
          kana: 'はなし',
          romaji: 'hanashi',
          meaningEn: 'story, talk, conversation',
          meaningBn: 'গল্প / বক্তব্য / আলোচনা',
          tag: 'Daily N5'
        },
        {
          kanji: '電話',
          kana: 'でんわ',
          romaji: 'denwa',
          meaningEn: 'telephone, phone call',
          meaningBn: 'টেলিফোন / ফোন করা',
          tag: 'Tech N5'
        },
        {
          kanji: '会話',
          kana: 'かいわ',
          romaji: 'kaiwa',
          meaningEn: 'dialogue, conversation',
          meaningBn: 'কথোপকথন',
          tag: 'Study N5'
        },
        {
          kanji: '世話',
          kana: 'せわ',
          romaji: 'sewa',
          meaningEn: 'care, looking after (e.g. お世話になります)',
          meaningBn: 'যত্ন / সাহায্য নেওয়া',
          tag: 'Phrase N4'
        },
        {
          kanji: '昔話',
          kana: 'むかしばなし',
          romaji: 'mukashibanashi',
          meaningEn: 'folktale, old legend',
          meaningBn: 'পুরোনো রূপকথা / উপকথা',
          tag: 'Culture N4'
        }
      ],
      sentences: [
        {
          ja: '日本語でもっと上手に話せるようになりたいです。',
          romaji: 'Nihongo de motto jouzu ni hanaseru you ni naritai desu.',
          meaningEn: 'I want to become able to speak more skillfully in Japanese.',
          meaningBn: 'আমি জাপানি ভাষায় আরও সুন্দরভাবে কথা বলতে শিখতে চাই।'
        },
        {
          ja: '昨日の夜、母と電話で一時間話しました。',
          romaji: 'Kinou no yoru, haha to denwa de ichijikan hanashimashita.',
          meaningEn: 'Last night, I talked with my mother on the phone for one hour.',
          meaningBn: 'গত রাতে ফোনে আমার মায়ের সাথে আমি এক ঘণ্টা কথা বলেছি।'
        },
        {
          ja: '先生の面白い話を聞いて、みんな笑いました。',
          romaji: 'Sensei no omoshiroi hanashi o kiite, minna waraimashita.',
          meaningEn: 'Everyone laughed listening to the teacher\'s interesting story.',
          meaningBn: 'স্যারের মজার গল্প শুনে সবাই হেসে উঠেছিল।'
        }
      ],
      tamagoTip: {
        bn: 'শব্দ বা কথা (言) জিহ্বার (舌) মাধ্যমে প্রকাশ করা। কথা বলা হলো 話す এবং দূরভাষ হলো 電話।',
        en: 'Words (言) shaped by the tongue (舌). Forms foundation for speaking, calling, and conversation.'
      }
    },

    // 10. 寺 (Kanji Radical / Component)
    {
      id: 'l6-tera',
      kanji: '寺',
      emoji: '⛩️',
      strokeCount: 6,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ジ', romaji: 'ji' }
        ],
        kunyomi: [
          { kana: 'てら', romaji: 'tera' }
        ]
      },
      meanings: {
        en: 'Buddhist temple',
        bn: 'বৌদ্ধ মন্দির, প্যাগোডা'
      },
      vocab: [
        {
          kanji: 'お寺',
          kana: 'おてら',
          romaji: 'otera',
          meaningEn: 'Buddhist temple (polite)',
          meaningBn: 'বৌদ্ধ মন্দির (শ্রদ্ধাভরে)',
          tag: 'Culture N5'
        },
        {
          kanji: '金閣寺',
          kana: 'きんかくじ',
          romaji: 'kinkakuji',
          meaningEn: 'Golden Pavilion Temple (Kyoto)',
          meaningBn: 'স্বর্ণমন্দির (কিয়োটোর কিনকাকুজি)',
          tag: 'Famous N4'
        },
        {
          kanji: '寺院',
          kana: 'じいん',
          romaji: 'jiin',
          meaningEn: 'temple grounds, sacred precinct',
          meaningBn: 'মন্দির প্রাঙ্গণ',
          tag: 'Formal N4'
        },
        {
          kanji: '清水寺',
          kana: 'きよみずでら',
          romaji: 'kiyomizudera',
          meaningEn: 'Kiyomizu Temple (Kyoto landmark)',
          meaningBn: 'কিয়োমিজু-দেরা মন্দির',
          tag: 'Famous N4'
        },
        {
          kanji: '山寺',
          kana: 'やまでら',
          romaji: 'yamadera',
          meaningEn: 'mountain temple',
          meaningBn: 'পাহাড়ের চূড়ার মন্দির',
          tag: 'Nature'
        },
        {
          kanji: '寺子屋',
          kana: 'てらこや',
          romaji: 'terakoya',
          meaningEn: 'Edo-period temple elementary school',
          meaningBn: 'প্রাচীন জাপানি পাঠশালা',
          tag: 'History'
        }
      ],
      sentences: [
        {
          ja: '京都へ旅行に行って、たくさんのお寺を見学しました。',
          romaji: 'Kyouto e ryokou ni itte, takusan no otera o kengaku shimashita.',
          meaningEn: 'I went on a trip to Kyoto and toured many Buddhist temples.',
          meaningBn: 'কিয়োটো সফরে গিয়ে আমি অনেকগুলো বৌদ্ধ মন্দির ঘুরে দেখেছি।'
        },
        {
          ja: '朝のお寺は空気が澄んでいて、とても静かです。',
          romaji: 'Asa no otera wa kuuki ga sunde ite, totemo shizuka desu.',
          meaningEn: 'Morning at the temple has crisp air and is very tranquil.',
          meaningBn: 'ভোরবেলায় মন্দিরের বাতাস একদম নির্মল এবং পরিবেশ দারুণ শান্ত থাকে।'
        },
        {
          ja: '金閣寺の池に金色の建物が映って綺麗でした。',
          romaji: 'Kinkakuji no ike ni kin\'iro no tatemono ga utsutte kirei deshita.',
          meaningEn: 'The golden pavilion reflected in Kinkakuji’s pond was gorgeous.',
          meaningBn: 'কিনকাকুজি মন্দিরের লেকে সোনালী ভবনের প্রতিবিম্ব অসাধারণ দেখাচ্ছিল।'
        }
      ],
      tamagoTip: {
        bn: 'মাটির (土) ওপর পরিমাপের মাপকাঠি (寸) স্থাপন করা পবিত্র ভবন। 時 (সময়) ও 持 (ধরা) এর মূল বিল্ডিং ব্লক হলো 寺।',
        en: 'A measured sacred compound (寸) built on earth (土). Functions as the phonetic/radical root for 時 and 持.'
      }
    },

    // 11. 言 (Kanji Radical / Component)
    {
      id: 'l6-iu',
      kanji: '言',
      emoji: '💬',
      strokeCount: 7,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ゲン', romaji: 'gen' },
          { kana: 'ゴン', romaji: 'gon' }
        ],
        kunyomi: [
          { kana: 'い・う', romaji: 'i-u' },
          { kana: 'こと', romaji: 'koto' }
        ]
      },
      meanings: {
        en: 'word, say, speech, language',
        bn: 'বলা, কথা, ভাষা'
      },
      vocab: [
        {
          kanji: '言う',
          kana: 'いう',
          romaji: 'iu',
          meaningEn: 'to say, speak',
          meaningBn: 'বলা / ব্যক্ত করা',
          tag: 'Verb N5'
        },
        {
          kanji: '言葉',
          kana: 'ことば',
          romaji: 'kotoba',
          meaningEn: 'word, phrase, language',
          meaningBn: 'শব্দ / বাক্য / ভাষা',
          tag: 'Daily N5'
        },
        {
          kanji: '言語',
          kana: 'げんご',
          romaji: 'gengo',
          meaningEn: 'language (linguistics)',
          meaningBn: 'ভাষা',
          tag: 'Academic N4'
        },
        {
          kanji: '方言',
          kana: 'ほうげん',
          romaji: 'hougen',
          meaningEn: 'regional dialect',
          meaningBn: 'আঞ্চলিক উপভাষা (যেমন কানসাই-বেন)',
          tag: 'Culture N4'
        },
        {
          kanji: '伝言',
          kana: 'でんごん',
          romaji: 'dengon',
          meaningEn: 'verbal message, voice note',
          meaningBn: 'মৌখিক বার্তা / মেসেজ',
          tag: 'Daily N4'
        },
        {
          kanji: '一言',
          kana: 'ひとこと',
          romaji: 'hitokoto',
          meaningEn: 'a few words, brief remark',
          meaningBn: 'এক-দুটি কথা / সংক্ষিপ্ত মন্তব্য',
          tag: 'Daily N4'
        }
      ],
      sentences: [
        {
          ja: '日本語で「ありがとう」と言いました。',
          romaji: 'Nihongo de "arigatou" to iimashita.',
          meaningEn: 'I said "Thank you" in Japanese.',
          meaningBn: 'আমি জাপানি ভাষায় "ধন্যবাদ (Arigatou)" বলেছি।'
        },
        {
          ja: '毎日新しい日本語の言葉を五つ覚えています。',
          romaji: 'Mainichi atarashii Nihongo no kotoba o itsutsu oboete imasu.',
          meaningEn: 'I memorize five new Japanese words every day.',
          meaningBn: 'আমি প্রতিদিন পাঁচটি করে নতুন জাপানি শব্দ মুখস্থ করি।'
        },
        {
          ja: '席を外している田中さんに伝言をお願いします。',
          romaji: 'Seki o hazushite iru Tanaka-san ni dengon o onegai shimasu.',
          meaningEn: 'Please leave a message for Mr. Tanaka who is away from his desk.',
          meaningBn: 'ডেস্কে অনুপস্থিত তানাকা সাহেবকে একটি মৌখিক বার্তা পৌঁছে দিতে অনুরোধ করছি।'
        }
      ],
      tamagoTip: {
        bn: 'মুখের ভেতর থেকে কণ্ঠস্বর ও সুর বের হওয়া। 話 (বলা), 読 (পড়া), 語 (ভাষা)-র বামে 言-রেডিক্যাল (言偏) থাকে।',
        en: 'Sound vibrations flowing from mouth. Acts as the speech radical (言偏) for 話, 読, 語, 訳.'
      }
    },

    // 12. 貝 (Kanji Radical / Component)
    {
      id: 'l6-kai',
      kanji: '貝',
      emoji: '🐚',
      strokeCount: 7,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'バイ', romaji: 'bai' }
        ],
        kunyomi: [
          { kana: 'かい', romaji: 'kai' }
        ]
      },
      meanings: {
        en: 'shellfish, shell (ancient money)',
        bn: 'শামুক, ঝিনুক, কড়ি (প্রাচীন মুদ্রা)'
      },
      vocab: [
        {
          kanji: '貝',
          kana: 'かい',
          romaji: 'kai',
          meaningEn: 'shellfish, shell',
          meaningBn: 'শামুক / ঝিনুক',
          tag: 'Nature N5'
        },
        {
          kanji: '貝殻',
          kana: 'かいがら',
          romaji: 'kaigara',
          meaningEn: 'seashell',
          meaningBn: 'সমুদ্রের ঝিনুকের খোলস',
          tag: 'Nature N4'
        },
        {
          kanji: '巻き貝',
          kana: 'まきがい',
          romaji: 'makigai',
          meaningEn: 'spiral shell, snail',
          meaningBn: 'ঘূর্ণি শামুক',
          tag: 'Nature'
        },
        {
          kanji: '赤貝',
          kana: 'あかがい',
          romaji: 'akagai',
          meaningEn: 'blood clam (sushi topping)',
          meaningBn: 'সুশির উপাদান লাল ঝিনুক',
          tag: 'Food'
        },
        {
          kanji: '貝柱',
          kana: 'かいばしら',
          romaji: 'kaibashira',
          meaningEn: 'scallop meat / ligament',
          meaningBn: 'ঝিনুকের মাংস (স্ক্যালপ)',
          tag: 'Food N4'
        },
        {
          kanji: '雨覆貝',
          kana: 'あまおおいがい',
          romaji: 'amaooigai',
          meaningEn: 'bivalve clam',
          meaningBn: 'ঝিনুকের প্রজাতি',
          tag: 'Nature'
        }
      ],
      sentences: [
        {
          ja: '海岸を歩いて綺麗な貝殻を拾いました。',
          romaji: 'Kaigan o aruite kirei na kaigara o hiroimashita.',
          meaningEn: 'I walked along the beach and picked up pretty seashells.',
          meaningBn: 'সমুদ্রসৈকতে হেঁটে আমি সুন্দর সুন্দর ঝিনুকের খোলস কুড়িয়েছি।'
        },
        {
          ja: '日本の寿司屋で新鮮な貝のにぎりを食べました。',
          romaji: 'Nihon no sushiya de shinsen na kai no nigiri o tabemashita.',
          meaningEn: 'I ate fresh shellfish nigiri sushi at a Japanese sushi restaurant.',
          meaningBn: 'জাপানি সুশির দোকানে আমি তাজা ঝিনুকের নিগিরি খেয়েছি।'
        },
        {
          ja: '古代のアジアでは貝がお金として使われていました。',
          romaji: 'Kodai no Ajia dewa kai ga okane toshite tsukawarete imashita.',
          meaningEn: 'In ancient Asia, cowrie shells were used as money.',
          meaningBn: 'প্রাচীন এশিয়ায় ঝিনুকের কড়ি মুদ্রা হিসেবে লেনদেনে ব্যবহৃত হতো।'
        }
      ],
      tamagoTip: {
        bn: 'প্রাচীনকালে ঝিনুকের কড়ি ছিল মুদ্রা। তাই অর্থ ও বাণিজ্য সংক্রান্ত কাঞ্জিতে (買, 費, 賃, 財, 貨) সর্বদা 貝 রেডিক্যাল থাকে।',
        en: 'Cowrie shells were ancient currency. Forms the money radical in 買 (buy), 費 (fee), 財 (wealth).'
      }
    },

    // 13. 田 (Kanji Radical / Component)
    {
      id: 'l6-ta',
      kanji: '田',
      emoji: '🌾',
      strokeCount: 5,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'デン', romaji: 'den' }
        ],
        kunyomi: [
          { kana: 'た', romaji: 'ta' }
        ]
      },
      meanings: {
        en: 'rice field, paddy',
        bn: 'ধানক্ষেত, ফসলি জমি'
      },
      vocab: [
        {
          kanji: '田んぼ',
          kana: 'たんぼ',
          romaji: 'tanbo',
          meaningEn: 'paddy field, rice field',
          meaningBn: 'ধানক্ষেত',
          tag: 'Nature N5'
        },
        {
          kanji: '田中',
          kana: 'たなか',
          romaji: 'Tanaka',
          meaningEn: 'Tanaka (common Japanese surname)',
          meaningBn: 'তানাকা (জাপানি পারিবারিক পদবি)',
          tag: 'Name N5'
        },
        {
          kanji: '山田',
          kana: 'やまだ',
          romaji: 'Yamada',
          meaningEn: 'Yamada (common surname)',
          meaningBn: 'ইয়ামাদা (পাহাড় ও ক্ষেত)',
          tag: 'Name N5'
        },
        {
          kanji: '水田',
          kana: 'すいでん',
          romaji: 'suiden',
          meaningEn: 'water-filled paddy field',
          meaningBn: 'পানিপূর্ণ ধানক্ষেত',
          tag: 'Nature N4'
        },
        {
          kanji: '田舎',
          kana: 'いなか',
          romaji: 'inaka',
          meaningEn: 'countryside, rural hometown',
          meaningBn: 'পল্লীগ্রাম / গ্রামের বাড়ি',
          tag: 'Place N4'
        },
        {
          kanji: '油田',
          kana: 'ゆでん',
          romaji: 'yuden',
          meaningEn: 'oil field',
          meaningBn: 'তৈলক্ষেত্র',
          tag: 'Industry'
        }
      ],
      sentences: [
        {
          ja: '新幹線の窓から緑の美しい田んぼが見えました。',
          romaji: 'Shinkansen no mado kara midori no utsukushii tanbo ga miemashita.',
          meaningEn: 'From the bullet train window, beautiful green paddy fields were visible.',
          meaningBn: 'বুলেট ট্রেনের জানালা দিয়ে চমৎকার সবুজ ধানক্ষেত দেখা যাচ্ছিল।'
        },
        {
          ja: '田中先生はいつも笑顔で挨拶してくれます。',
          romaji: 'Tanaka sensei wa itsumo egao de aisatsu shite kuremasu.',
          meaningEn: 'Teacher Tanaka always greets us with a smile.',
          meaningBn: 'তানাকা শিক্ষক সবসময় হাসিমুখে কুশল বিনিময় করেন।'
        },
        {
          ja: '夏休みに友達の田舎へ遊びに行きました。',
          romaji: 'Natsuyasumi ni tomodachi no inaka e asobi ni ikimashita.',
          meaningEn: 'I went to visit my friend\'s countryside hometown during the summer break.',
          meaningBn: 'গ্রীষ্মের ছুটিতে আমি বন্ধুর গ্রামের বাড়িতে বেড়াতে গিয়েছিলাম।'
        }
      ],
      tamagoTip: {
        bn: 'আইল দিয়ে চার ভাগে ভাগ করা একটি চতুর্ভুজ ধানক্ষেত। 男 (পুরুষ = ক্ষেত + শক্তি) ও 町 (শহর)-এর রেডিক্যাল হলো 田।',
        en: 'A square rice field divided by ridges into four plots. Root for surnames and 男 (field + strength = man).'
      }
    },

    // 14. 力 (Kanji Radical / Component)
    {
      id: 'l6-chikara',
      kanji: '力',
      emoji: '💪',
      strokeCount: 2,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'リョク', romaji: 'ryoku' },
          { kana: 'リキ', romaji: 'riki' }
        ],
        kunyomi: [
          { kana: 'ちから', romaji: 'chikara' }
        ]
      },
      meanings: {
        en: 'power, strength, effort, capability',
        bn: 'শক্তি, ক্ষমতা, বল, সামর্থ্য'
      },
      vocab: [
        {
          kanji: '力',
          kana: 'ちから',
          romaji: 'chikara',
          meaningEn: 'strength, power, ability',
          meaningBn: 'শক্তি, গায়ের বল',
          tag: 'Daily N5'
        },
        {
          kanji: '能力',
          kana: 'のうりょく',
          romaji: 'nouryoku',
          meaningEn: 'ability, faculty (e.g. JLPT = 日本語能力試験)',
          meaningBn: 'দক্ষতা / সামর্থ্য',
          tag: 'Exam N4'
        },
        {
          kanji: '協力',
          kana: 'きょうりょく',
          romaji: 'kyouryoku',
          meaningEn: 'cooperation, collaboration',
          meaningBn: 'সহযোগিতা / যৌথ প্রচেষ্টা',
          tag: 'Daily N4'
        },
        {
          kanji: '努力',
          kana: 'どりょく',
          romaji: 'doryoku',
          meaningEn: 'effort, hard work, striving',
          meaningBn: 'কঠোর চেষ্টা / উদ্যম',
          tag: 'Mind N4'
        },
        {
          kanji: '力持ち',
          kana: 'ちからもち',
          romaji: 'chikaramochi',
          meaningEn: 'strong person, muscleman',
          meaningBn: 'শক্তিশালী মানুষ / বলবান ব্যক্তি',
          tag: 'People N4'
        },
        {
          kanji: '電力',
          kana: 'でんりょく',
          romaji: 'denryoku',
          meaningEn: 'electric power, electricity',
          meaningBn: 'বিদ্যুৎ শক্তি',
          tag: 'Tech N4'
        }
      ],
      sentences: [
        {
          ja: '重いタンスを運ぶためにみんなで力を合わせました。',
          romaji: 'Omoi tansu o hakobu tame ni minna de chikara o awasemashita.',
          meaningEn: 'We combined our strength together to carry the heavy wardrobe.',
          meaningBn: 'ভারী আলমারিটি বয়ে নিতে আমরা সবাই মিলে শক্তি এক করেছি।'
        },
        {
          ja: '日本語能力試験のN4に合格するために毎日努力しています。',
          romaji: 'Nihongo nouryoku shiken no N4 ni goukaku suru tame ni mainichi doryoku shite imasu.',
          meaningEn: 'I am putting in effort every day to pass the JLPT N4 exam.',
          meaningBn: 'জেএলপিটি এন৪ পরীক্ষায় উত্তীর্ণ হতে আমি প্রতিদিন কঠোর চেষ্টা করছি।'
        },
        {
          ja: 'プロジェクトの成功には皆さんの協力が必要です。',
          romaji: 'Purojekuto no seikou ni wa minna-san no kyouryoku ga hitsuyou desu.',
          meaningEn: 'Everyone\'s cooperation is necessary for the project\'s success.',
          meaningBn: 'প্রকল্পটির সফলতার জন্য আপনাদের সকলের সহযোগিতা একান্ত প্রয়োজন।'
        }
      ],
      tamagoTip: {
        bn: 'পেশিবহুল বাহু টানটান করার রূপ বা লাঙল চালানোর বল। ক্ষেতে (田) শক্তি (力) প্রয়োগকারী হলো পুরুষ (男)।',
        en: 'A flexed muscle arm or plow. Combined with field (田), it forms 男 (man who works the fields).'
      }
    },

    // 15. 門 (Kanji Radical / Component)
    {
      id: 'l6-mon',
      kanji: '門',
      emoji: '⛩️',
      strokeCount: 8,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'モン', romaji: 'mon' }
        ],
        kunyomi: [
          { kana: 'かど', romaji: 'kado' }
        ]
      },
      meanings: {
        en: 'gate, gateway, portal',
        bn: 'ফটক, তোরণ, প্রধান দরজা'
      },
      vocab: [
        {
          kanji: '門',
          kana: 'もん',
          romaji: 'mon',
          meaningEn: 'gate, gateway',
          meaningBn: 'গেট / ফটক',
          tag: 'Daily N5'
        },
        {
          kanji: '正門',
          kana: 'せいもん',
          romaji: 'seimon',
          meaningEn: 'main gate, front gate',
          meaningBn: 'প্রধান ফটক',
          tag: 'Place N4'
        },
        {
          kanji: '校門',
          kana: 'こうもん',
          romaji: 'koumon',
          meaningEn: 'school gate',
          meaningBn: 'স্কুলের তোরণ / স্কুল গেট',
          tag: 'School N4'
        },
        {
          kanji: '専門',
          kana: 'せんもん',
          romaji: 'senmon',
          meaningEn: 'specialty, major field',
          meaningBn: 'বিশেষজ্ঞ ক্ষেত্র / স্পেশালাইজেশন',
          tag: 'Academic N4'
        },
        {
          kanji: '門限',
          kana: 'もんげん',
          romaji: 'mongen',
          meaningEn: 'curfew, gate-closing time',
          meaningBn: 'ডর্মি বা হোস্টেলের গেট বন্ধের নির্দিষ্ট সময়',
          tag: 'Rules N4'
        },
        {
          kanji: '雷門',
          kana: 'かみなりもん',
          romaji: 'kaminarimon',
          meaningEn: 'Kaminarimon Gate (Asakusa landmark)',
          meaningBn: 'কামিনারিমন গেট (টোকিওর আসাকুসা)',
          tag: 'Tourism N4'
        }
      ],
      sentences: [
        {
          ja: '大学の正門の前で午後一時に待ち合わせをしましょう。',
          romaji: 'Daigaku no seimon no mae de gogo ichiji ni machiawase o shimashou.',
          meaningEn: 'Let\'s meet in front of the university\'s main gate at 1:00 PM.',
          meaningBn: 'চলুন দুপুর ১টায় বিশ্ববিদ্যালয়ের মেইন গেটের সামনে অপেক্ষা করি।'
        },
        {
          ja: '寮の門限は夜十一時なので、それまでに帰らなければなりません。',
          romaji: 'Ryou no mongen wa yoru juuichiji node, sore made ni kaeranakereba narimasen.',
          meaningEn: 'The dormitory curfew is 11:00 PM, so I must return by then.',
          meaningBn: 'ছাত্রাবাসের গেট বন্ধের সময় রাত ১১টা, তাই তার আগেই ফিরতে হবে।'
        },
        {
          ja: '大学でコンピューターサイエンスを専門に学んでいます。',
          romaji: 'Daigaku de konpyuutaa saiensu o senmon ni manande imasu.',
          meaningEn: 'I am studying computer science as my specialty at university.',
          meaningBn: 'বিশ্ববিদ্যালয়ে আমি কম্পিউটার সায়েন্সকে প্রধান বিষয় হিসেবে পড়ছি।'
        }
      ],
      tamagoTip: {
        bn: 'দুই পাল্লার বিশাল কপাটযুক্ত সদর তোরণ। এর ভেতরে কান রাখলে 聞 (শোনা), সূর্য রাখলে 間 (সময়কাল)।',
        en: 'A double swinging entrance gate. Surrounds other radicals to make 聞 (hear) and 間 (interval).'
      }
    },

    // --- READ-ONLY KANJI (読める) ---
    // 16. 新聞
    {
      id: 'l6-shinbun',
      kanji: '新聞',
      emoji: '📰',
      strokeCount: 27,
      jlpt: 'N5',
      category: 'read_only',
      readings: {
        onyomi: [
          { kana: 'シンブン', romaji: 'shinbun' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'newspaper',
        bn: 'সংবাদপত্র, খবরের কাগজ'
      },
      vocab: [
        {
          kanji: '新聞',
          kana: 'しんぶん',
          romaji: 'shinbun',
          meaningEn: 'newspaper',
          meaningBn: 'সংবাদপত্র / খবরের কাগজ',
          tag: 'Daily N5'
        },
        {
          kanji: '新聞紙',
          kana: 'しんぶんし',
          romaji: 'shinbunshi',
          meaningEn: 'newspaper paper (packing/craft)',
          meaningBn: 'খবরের কাগজের পাতা',
          tag: 'Daily N4'
        },
        {
          kanji: '新聞社',
          kana: 'しんぶんしゃ',
          romaji: 'shinbunsha',
          meaningEn: 'newspaper publishing company',
          meaningBn: 'সংবাদপত্র প্রকাশনা সংস্থা',
          tag: 'Media N4'
        },
        {
          kanji: '新聞配達',
          kana: 'しんぶんはいたつ',
          romaji: 'shinbun haitatsu',
          meaningEn: 'newspaper delivery (student job)',
          meaningBn: 'ভোরে খবরের কাগজ বিলি করার পার্ট-টাইম কাজ',
          tag: 'Arubaito'
        },
        {
          kanji: '朝日新聞',
          kana: 'あさひしんぶん',
          romaji: 'asahi shinbun',
          meaningEn: 'Asahi Shimbun (major newspaper)',
          meaningBn: 'আসাহি শিমবুন (জাপানের শীর্ষ পত্রিকা)',
          tag: 'Media'
        },
        {
          kanji: '電子新聞',
          kana: 'でんししんぶん',
          romaji: 'denshi shinbun',
          meaningEn: 'digital/online newspaper',
          meaningBn: 'অনলাইন ই-পেপার',
          tag: 'Tech'
        }
      ],
      sentences: [
        {
          ja: '朝食を食べながら毎朝新聞を読みます。',
          romaji: 'Choushoku o tabe nagara maiasa shinbun o yomimasu.',
          meaningEn: 'I read the newspaper every morning while having breakfast.',
          meaningBn: 'প্রতিদিন সকালের নাস্তা খাওয়ার সময় আমি খবরের কাগজ পড়ি।'
        },
        {
          ja: '留学生の先輩が朝早く新聞配達のアルバイトをしています。',
          romaji: 'Ryuugakusei no senpai ga asa hayaku shinbun haitatsu no arubaito o shite imasu.',
          meaningEn: 'A senior international student does a newspaper delivery part-time job early in the morning.',
          meaningBn: 'একজন সিনিয়র বিদেশি ছাত্র খুব ভোরে খবরের কাগজ বিলির পার্ট-টাইম কাজ করেন।'
        },
        {
          ja: '駅の売店で朝刊の新聞を一部買いました。',
          romaji: 'Eki no baiten de choukan no shinbun o ichibu kaimashita.',
          meaningEn: 'I bought a copy of the morning edition newspaper at the station kiosk.',
          meaningBn: 'রেলস্টেশনের দোকান থেকে আমি সকালের সংস্করণের একটি পত্রিকা কিনেছি।'
        }
      ],
      tamagoTip: {
        bn: 'নতুন (新) যা কানে পৌঁছায় বা শোনা যায় (聞)। নতুন সংবাদ লিপিবদ্ধ করাই হলো খবরের কাগজ (新聞)।',
        en: 'New things (新) that are heard (聞). Represents newspapers and daily journalism.'
      }
    },

    // 17. 図書館
    {
      id: 'l6-toshokan',
      kanji: '図書館',
      emoji: '📚',
      strokeCount: 33,
      jlpt: 'N5',
      category: 'read_only',
      readings: {
        onyomi: [
          { kana: 'トショカン', romaji: 'toshokan' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'library',
        bn: 'গ্রন্থাগার, লাইব্রেরি'
      },
      vocab: [
        {
          kanji: '図書館',
          kana: 'としょかん',
          romaji: 'toshokan',
          meaningEn: 'library',
          meaningBn: 'লাইব্রেরি / পাঠাগার',
          tag: 'Place N5'
        },
        {
          kanji: '市立図書館',
          kana: 'しりつとしょかん',
          romaji: 'shiritsu toshokan',
          meaningEn: 'city public library',
          meaningBn: 'পৌর গণগ্রন্থাগার',
          tag: 'Public N4'
        },
        {
          kanji: '図書館カード',
          kana: 'としょかんカード',
          romaji: 'toshokan kaado',
          meaningEn: 'library borrower card',
          meaningBn: 'লাইব্রেরি কার্ড',
          tag: 'Daily N5'
        },
        {
          kanji: '図書室',
          kana: 'としょしつ',
          romaji: 'toshoshitsu',
          meaningEn: 'school reading room / library room',
          meaningBn: 'পাঠকক্ষ / পড়ার ঘর',
          tag: 'School N4'
        },
        {
          kanji: '国会図書館',
          kana: 'こっかいとしょかん',
          romaji: 'kokkai toshokan',
          meaningEn: 'National Diet Library (Tokyo)',
          meaningBn: 'জাতীয় সংসদ লাইব্রেরি',
          tag: 'Official'
        },
        {
          kanji: '休館日',
          kana: 'きゅうかんび',
          romaji: 'kyuukanbi',
          meaningEn: 'library closing day',
          meaningBn: 'লাইব্রেরি বন্ধের দিন',
          tag: 'Notice'
        }
      ],
      sentences: [
        {
          ja: '図書館で日本の歴史についての本を二冊借りました。',
          romaji: 'Toshokan de Nihon no rekishi ni tsuite no hon o nisatsu karimashita.',
          meaningEn: 'I borrowed two books about Japanese history at the library.',
          meaningBn: 'লাইব্রেরি থেকে আমি জাপানের ইতিহাস বিষয়ক দুটি বই ধার নিয়েছি।'
        },
        {
          ja: '試験前は図書館の自習室で夜八時まで勉強します。',
          romaji: 'Shiken mae wa toshokan no jishuushitsu de yoru hachiji made benkyou shimasu.',
          meaningEn: 'Before exams, I study in the library\'s self-study room until 8:00 PM.',
          meaningBn: 'পরীক্ষার আগে লাইব্রেরির সেলফ-স্টাডি রুমে বসে রাত ৮টা পর্যন্ত পড়াশোনা করি।'
        },
        {
          ja: '区立図書館は誰でも無料で本を読むことができます。',
          romaji: 'Kuritsu toshokan wa dare demo muryou de hon o yomu koto ga dekimasu.',
          meaningEn: 'Anyone can read books for free at the ward public library.',
          meaningBn: 'ওয়ার্ডের গণগ্রন্থাগারে যে কেউ বিনামূল্যে বই পড়তে পারে।'
        }
      ],
      tamagoTip: {
        bn: 'ছবি ও মানচিত্র (図) + বইপত্র (書) + বড় ভবন (館)। জাপানের যেকোনো শহরে বিনামূল্যে বই পড়ার জন্য শ্রেষ্ঠ স্থান।',
        en: 'Maps/diagrams (図) + books (書) + public mansion/hall (館). Essential public facility across Japan.'
      }
    },

    // 18. 辞書
    {
      id: 'l6-jisho',
      kanji: '辞書',
      emoji: '📕',
      strokeCount: 23,
      jlpt: 'N5',
      category: 'read_only',
      readings: {
        onyomi: [
          { kana: 'ジショ', romaji: 'jisho' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'dictionary',
        bn: 'অভিধান, ডিকশনারি'
      },
      vocab: [
        {
          kanji: '辞書',
          kana: 'じしょ',
          romaji: 'jisho',
          meaningEn: 'dictionary',
          meaningBn: 'অভিধান / ডিকশনারি',
          tag: 'Study N5'
        },
        {
          kanji: '電子辞書',
          kana: 'でんしじしょ',
          romaji: 'denshijisho',
          meaningEn: 'electronic dictionary',
          meaningBn: 'ইলেকট্রনিক ডিকশনারি',
          tag: 'Tech N4'
        },
        {
          kanji: '漢字辞書',
          kana: 'かんじじしょ',
          romaji: 'kanjijisho',
          meaningEn: 'Kanji character dictionary',
          meaningBn: 'কাঞ্জি অভিধান',
          tag: 'Study N4'
        },
        {
          kanji: '辞書を引く',
          kana: 'じしょをひく',
          romaji: 'jisho o hiku',
          meaningEn: 'to look up in a dictionary',
          meaningBn: 'অভিধানে কোনো শব্দ খোঁজা',
          tag: 'Phrase N5'
        },
        {
          kanji: '国語辞書',
          kana: 'こくごじしょ',
          romaji: 'kokugojisho',
          meaningEn: 'Japanese-Japanese dictionary',
          meaningBn: 'জাপানি-জাপানি প্রমিত অভিধান',
          tag: 'Study N4'
        },
        {
          kanji: '辞書アプリ',
          kana: 'じしょアプリ',
          romaji: 'jisho apuri',
          meaningEn: 'dictionary smartphone app',
          meaningBn: 'মোবাইল ডিকশনারি অ্যাপ',
          tag: 'App'
        }
      ],
      sentences: [
        {
          ja: '読めない漢字をスマートフォンの辞書アプリで調べました。',
          romaji: 'Yomenai kanji o sumaatofon no jisho apuri de shirabemashita.',
          meaningEn: 'I looked up unreadable kanji on my smartphone dictionary app.',
          meaningBn: 'যেসব কাঞ্জি পড়তে পারছিলাম না, তা আমি ফোনের ডিকশনারি অ্যাপে খুঁজে বের করেছি।'
        },
        {
          ja: '日本語の先生から電子辞書をおすすめされました。',
          romaji: 'Nihongo no sensei kara denshijisho o osusume saremashita.',
          meaningEn: 'An electronic dictionary was recommended to me by my Japanese teacher.',
          meaningBn: 'জাপানি শিক্ষক আমাকে একটি ইলেকট্রনিক ডিকশনারি ব্যবহারের পরামর্শ দিয়েছিলেন।'
        },
        {
          ja: '分からない単語はすぐに辞書を引く習慣をつけましょう。',
          romaji: 'Wakaranai tango wa sugu ni jisho o hiku shuukan o tsukemashou.',
          meaningEn: 'Let\'s build the habit of immediately looking up unknown words in the dictionary.',
          meaningBn: 'অচেনা কোনো শব্দ পেলে সাথে সাথে ডিকশনারিতে খুঁজে নেওয়ার অভ্যাস গড়ে তোলা উচিত।'
        }
      ],
      tamagoTip: {
        bn: 'শব্দ বা পদ (辞) সংকলিত বই (書)। জাপানি ভাষা শেখার ক্ষেত্রে 「辞書を引く」 (ডিকশনারি দেখা) একটি গুরুত্বপূর্ণ বাক্যরীতি।',
        en: 'A compilation of words (辞) in a book (書). "Jisho o hiku" is the idiomatic phrase for looking up words.'
      }
    },

    // --- VISUAL RECOGNITION (見て、わかる) ---
    // 19. 受付
    {
      id: 'l6-uketsuke',
      kanji: '受付',
      emoji: '💁‍♀️',
      strokeCount: 13,
      jlpt: 'N4',
      category: 'visual_recognition',
      readings: {
        onyomi: [
          { kana: 'ジュ', romaji: 'ju' }
        ],
        kunyomi: [
          { kana: 'うけつけ', romaji: 'uketsuke' }
        ]
      },
      meanings: {
        en: 'reception, front desk, information counter',
        bn: 'অভ্যর্থনা ডেস্ক, রিসিভশন, সেবা কাউন্টার'
      },
      vocab: [
        {
          kanji: '受付',
          kana: 'うけつけ',
          romaji: 'uketsuke',
          meaningEn: 'reception desk, front counter',
          meaningBn: 'অভ্যর্থনা ডেস্ক / তথ্যকেন্দ্র',
          tag: 'Official N4'
        },
        {
          kanji: '受ける',
          kana: 'うける',
          romaji: 'ukeru',
          meaningEn: 'to receive, accept, take (exam)',
          meaningBn: 'গ্রহণ করা / পরীক্ষা দেওয়া',
          tag: 'Verb N5'
        },
        {
          kanji: '受付時間',
          kana: 'うけつけじかん',
          romaji: 'uketsuke jikan',
          meaningEn: 'reception hours, registration hours',
          meaningBn: 'কাউন্টারে আবেদনের নির্দিষ্ট সময়',
          tag: 'Notice N4'
        },
        {
          kanji: '受付番号',
          kana: 'うけつけばんごう',
          romaji: 'uketsuke bangou',
          meaningEn: 'queue number, token number',
          meaningBn: 'ক্রমিক সিরিয়াল নম্বর / টোকেন',
          tag: 'Daily N4'
        },
        {
          kanji: '受付窓口',
          kana: 'うけつけまどぐち',
          romaji: 'uketsuke madoguchi',
          meaningEn: 'reception counter window',
          meaningBn: 'কাউন্টার উইন্ডো',
          tag: 'Hospital'
        },
        {
          kanji: '総合受付',
          kana: 'そうごううけつけ',
          romaji: 'sougou uketsuke',
          meaningEn: 'general information / main reception',
          meaningBn: 'সার্বিক তথ্য ও অভ্যর্থনা কেন্দ্র',
          tag: 'Facility'
        }
      ],
      sentences: [
        {
          ja: '病院に着いたら、まず受付で保険証を出してください。',
          romaji: 'Byouin ni tsuitara, mazu uketsuke de hokenshou o dashite kudasai.',
          meaningEn: 'When you arrive at the hospital, first present your health insurance card at reception.',
          meaningBn: 'হাসপাতালে পৌঁছে সর্বপ্রথম অভ্যর্থনা ডেস্কে নিজের স্বাস্থ্যবীমা কার্ড জমা দিন।'
        },
        {
          ja: '区役所の受付で番号札を取って、ベンチで待ちました。',
          romaji: 'Kuyakusho no uketsuke de bangoufuda o totte, benchi de machimashita.',
          meaningEn: 'I took a number ticket at the ward office reception and waited on the bench.',
          meaningBn: 'ওয়ার্ড অফিসের কাউন্টারে সিরিয়াল টোকেন নিয়ে আমি বেঞ্চে অপেক্ষা করেছি।'
        },
        {
          ja: '本日の受付時間は午後四時半までとなっております。',
          romaji: 'Honjitsu no uketsuke jikan wa gogo yojihan made to natte orimasu.',
          meaningEn: 'Today\'s reception hours are until 4:30 PM.',
          meaningBn: 'আজকের সেবা গ্রহণের সময়সীমা বিকেল ৪:৩০ পর্যন্ত নির্ধারিত রয়েছে।'
        }
      ],
      tamagoTip: {
        bn: 'গ্রহণ করা (受) + সংযুক্ত হওয়া (付)। হাসপাতাল, সিটি হল, হোটেল ও বড় প্রতিষ্ঠানে ঢুকলেই প্রথমে 「受付」 কাউন্টারে যেতে হয়।',
        en: 'The very first counter you visit in any Japanese hospital, ward office, or hotel. Always marked 受付.'
      }
    }
  ]
};
