import { Lesson } from '../types/kanji';

export const lesson11: Lesson = {
  id: 11,
  number: 11,
  titleJa: '何時に、何をする？',
  titleRomaji: 'Nanji ni, nani o suru?',
  titleBn: 'দৈনন্দিন রুটিন ও সময়সূচি (ঘুম থেকে ওঠা, হাঁটা, চড়া, শুরু-শেষ, পড়ালেখা ও দিবারাত্রি)',
  titleEn: 'Daily Routine & Schedule (Wake Up, Walk, Ride, Start, End, Study, Morning, Noon, Night)',
  descriptionBn: 'দৈনন্দিন জীবনযাপন ও রুটিন কর্মের কাঞ্জি (起, 歩, 乗, 始, 終, 勉, 強, 朝, 昼, 夜), বাহন ও ঘুমের কাঞ্জি যেমন বাইসাইকেল (自転車), ঘুমানো (寝る) এবং সফর বা ক্লাসের জমায়েত সাইন (集合)।',
  descriptionEn: 'Essential Kanji for expressing daily schedules, waking up (起きる), walking (歩く), boarding transit (乗る), start & end (始める/終わる), studying (勉強), times of day (朝, 昼, 夜), bicycles (自転車), sleeping (寝る), and gathering points (集合).',
  kanjiList: [
    // --- MAIN KANJI (10 items) ---
    // 1. 起
    {
      id: 'l11-oki',
      kanji: '起',
      emoji: '⏰',
      strokeCount: 10,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'キ', romaji: 'ki' }
        ],
        kunyomi: [
          { kana: 'お・きる', romaji: 'o-kiru' },
          { kana: 'お・こす', romaji: 'o-kosu' },
          { kana: 'お・こる', romaji: 'o-koru' }
        ]
      },
      meanings: {
        en: 'wake up, get up, arise, occur',
        bn: 'ঘুম থেকে ওঠা, জাগ্রত হওয়া, ঘটা'
      },
      vocab: [
        {
          kanji: '起きる',
          kana: 'おきる',
          romaji: 'okiru',
          meaningEn: 'to wake up, to get up',
          meaningBn: 'ঘুম থেকে ওঠা / জেগে ওঠা',
          tag: 'Daily N5'
        },
        {
          kanji: '起こす',
          kana: 'おこす',
          romaji: 'okosu',
          meaningEn: 'to wake someone up, to cause',
          meaningBn: 'কাউকে ঘুম থেকে জাগানো',
          tag: 'Daily N5'
        },
        {
          kanji: '早起き',
          kana: 'はやおき',
          romaji: 'hayaoki',
          meaningEn: 'waking up early, early riser',
          meaningBn: 'ভোরে ঘুম থেকে ওঠা',
          tag: 'Habit N5'
        },
        {
          kanji: '起立',
          kana: 'きりつ',
          romaji: 'kiritsu',
          meaningEn: 'standing up, all rise (classroom)',
          meaningBn: 'দাঁড়ানো / সোজা হয়ে দাঁড়ানো',
          tag: 'School N4'
        },
        {
          kanji: '起床',
          kana: 'きしょう',
          romaji: 'kishou',
          meaningEn: 'rising from bed (formal)',
          meaningBn: 'শয্যাত্যাগ / ঘুম থেকে ওঠা',
          tag: 'Daily N4'
        },
        {
          kanji: '事件が起こる',
          kana: 'じけんがおこる',
          romaji: 'jiken ga okoru',
          meaningEn: 'an incident occurs',
          meaningBn: 'ঘটনা বা দুর্ঘটনা ঘটা',
          tag: 'News N4'
        }
      ],
      sentences: [
        {
          ja: '私は毎朝六時に起きて、近所の公園をジョギングします。',
          romaji: 'Watashi wa maiasa rokuji ni okite, kinjo no kouen o jogingu shimasu.',
          meaningEn: 'I wake up at 6:00 AM every morning and jog in the neighborhood park.',
          meaningBn: 'আমি প্রতিদিন সকাল ৬টায় ঘুম থেকে উঠে আশেপাশের পার্কে জগিং করি।'
        },
        {
          ja: '目覚まし時計のベルが鳴っても起きられませんでした。',
          romaji: 'Mezamashitokei no beru ga nattemo okiraremasen deshita.',
          meaningEn: 'Even though the alarm clock rang, I couldn\'t wake up.',
          meaningBn: 'অ্যালার্ম ঘড়ির ঘণ্টা বাজার পরও আমি ঘুম থেকে উঠতে পারিনি।'
        },
        {
          ja: '明日は飛行機が早いので、朝五時に起こしてください。',
          romaji: 'Ashita wa hikouki ga hayai node, asa goji ni okoshite kudasai.',
          meaningEn: 'My flight is early tomorrow, so please wake me up at 5:00 AM.',
          meaningBn: 'আগামীকাল খুব ভোরে ফ্লাইট আছে, তাই দয়া করে সকাল ৫টায় আমাকে ডেকে দেবেন।'
        }
      ],
      tamagoTip: {
        bn: 'দৌড়ানো (走) এবং নিজের দেহকে স্বীয় ইচ্ছায় পরিচালিত করা (己)। বিছানা ছেড়ে নিজের পায়ে ভর দিয়ে দাঁড়িয়ে পড়া।',
        en: 'Running legs (走) controlled by oneself (己). Arising from slumber to stand on one\'s feet.'
      }
    },

    // 2. 歩
    {
      id: 'l11-aruku',
      kanji: '歩',
      emoji: '🚶',
      strokeCount: 8,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ホ', romaji: 'ho' },
          { kana: 'ポ', romaji: 'po' }
        ],
        kunyomi: [
          { kana: 'ある・く', romaji: 'aru-ku' },
          { kana: 'あゆ・む', romaji: 'ayu-mu' }
        ]
      },
      meanings: {
        en: 'walk, step, pace, stroll',
        bn: 'হাঁটা, পদব্রজে চলা, পদক্ষেপ'
      },
      vocab: [
        {
          kanji: '歩く',
          kana: 'あるく',
          romaji: 'aruku',
          meaningEn: 'to walk',
          meaningBn: 'হাঁটা / পায়ে হেঁটে যাওয়া',
          tag: 'Daily N5'
        },
        {
          kanji: '散歩',
          kana: 'さんぽ',
          romaji: 'sanpo',
          meaningEn: 'walk, stroll',
          meaningBn: 'প্রাতঃভ্রমণ / সান্ধ্য পায়চারি',
          tag: 'Daily N5'
        },
        {
          kanji: '歩道',
          kana: 'ほどう',
          romaji: 'hodou',
          meaningEn: 'sidewalk, footpath',
          meaningBn: 'ফুটপাত / পথচারীদের রাস্তা',
          tag: 'Traffic N4'
        },
        {
          kanji: '徒歩',
          kana: 'とほ',
          romaji: 'toho',
          meaningEn: 'on foot, walking',
          meaningBn: 'পায়ে হেঁটে / পদব্রজে',
          tag: 'Daily N4'
        },
        {
          kanji: '横断歩道',
          kana: 'おうだんほどう',
          romaji: 'oudanhodou',
          meaningEn: 'pedestrian crosswalk, zebra crossing',
          meaningBn: 'জেব্রা ক্রসিং / পথচারী পারাপার',
          tag: 'Traffic N4'
        },
        {
          kanji: '一歩',
          kana: 'いっぽ',
          romaji: 'ippo',
          meaningEn: 'one step',
          meaningBn: 'এক কদম / এক পদক্ষেপ',
          tag: 'General N4'
        }
      ],
      sentences: [
        {
          ja: '駅からアパートまで歩いて約十分かかります。',
          romaji: 'Eki kara apaato made aruite yaku juppun kakarimasu.',
          meaningEn: 'It takes about 10 minutes walking from the station to my apartment.',
          meaningBn: 'স্টেশন থেকে আমার অ্যাপার্টমেন্ট পর্যন্ত হেঁটে যেতে প্রায় ১০ মিনিট সময় লাগে।'
        },
        {
          ja: '夕方の涼しい時間帯に愛犬と一緒に公園を散歩します。',
          romaji: 'Yuugata no suzushii jikantai ni aiken to issho ni kouen o sanpo shimasu.',
          meaningEn: 'During the cool evening hours, I take a walk in the park with my pet dog.',
          meaningBn: 'সন্ধ্যার শীতল আবহে আমি আমার পোষা কুকুরের সাথে পার্কে হাঁটাহাঁটি করি।'
        },
        {
          ja: '安全のために必ず横断歩道を渡るようにしましょう。',
          romaji: 'Anzen no tame ni kanarazu oudanhodou o wataru you ni shimashou.',
          meaningEn: 'For safety, let\'s always cross at the pedestrian crosswalk.',
          meaningBn: 'নিরাপত্তার স্বার্থে সর্বদা জেব্রা ক্রসিং দিয়ে রাস্তা পার হওয়া উচিত।'
        }
      ],
      tamagoTip: {
        bn: 'ডান পা থামিয়ে (止) বাঁ পা সামান্য বাঁকিয়ে সামনে ফেলা (少)। এক এক কদম করে হেঁটে চলা 歩 (あるく)।',
        en: 'Alternating feet (止 + 少) stepping in succession. Walking pace, strolls, and sidewalks.'
      }
    },

    // 3. 乗
    {
      id: 'l11-noru',
      kanji: '乗',
      emoji: '🚃',
      strokeCount: 9,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ジョウ', romaji: 'jou' }
        ],
        kunyomi: [
          { kana: 'の・る', romaji: 'no-ru' },
          { kana: 'の・せる', romaji: 'no-seru' }
        ]
      },
      meanings: {
        en: 'ride, get on, board (a train, bus, car), mount',
        bn: 'চড়া, আরোহণ করা, গাড়িতে ওঠা'
      },
      vocab: [
        {
          kanji: '乗る',
          kana: 'のる',
          romaji: 'noru',
          meaningEn: 'to ride, to board, to get on',
          meaningBn: 'চড়া / গাড়িতে বা ট্রেনে ওঠা',
          tag: 'Transport N5'
        },
        {
          kanji: '乗り物',
          kana: 'のりもの',
          romaji: 'norimono',
          meaningEn: 'vehicle, conveyance, transport',
          meaningBn: 'যানবাহন / চড়ার বাহন',
          tag: 'Daily N5'
        },
        {
          kanji: '乗り換える',
          kana: 'のりかえる',
          romaji: 'norikaeru',
          meaningEn: 'to transfer (trains/buses), to change lines',
          meaningBn: 'ট্রেন বা বাস বদল করা',
          tag: 'Transport N5'
        },
        {
          kanji: '乗り場',
          kana: 'のりば',
          romaji: 'noriba',
          meaningEn: 'boarding platform, bus stop, taxi stand',
          meaningBn: 'গাড়িতে ওঠার নির্ধারিত স্থান',
          tag: 'Transport N4'
        },
        {
          kanji: '乗車券',
          kana: 'じょうしゃけん',
          romaji: 'joushaken',
          meaningEn: 'train boarding ticket, passenger ticket',
          meaningBn: 'রেলযাত্রার টিকিট',
          tag: 'Transport N4'
        },
        {
          kanji: '乗客',
          kana: 'じょうきゃく',
          romaji: 'joukyaku',
          meaningEn: 'passenger',
          meaningBn: 'যাত্রী',
          tag: 'Society N4'
        }
      ],
      sentences: [
        {
          ja: '山手線の電車に乗って新宿から渋谷へ行きました。',
          romaji: 'Yamanotesen no densha ni notte Shinjuku kara Shibuya e ikimashita.',
          meaningEn: 'I boarded the Yamanote Line train to go from Shinjuku to Shibuya.',
          meaningBn: 'ইয়ামানোতে লাইনের ট্রেনে চড়ে আমি শিনজুকু থেকে শিবুয়া গিয়েছি।'
        },
        {
          ja: '東京駅で新幹線に乗り換えて京都へ向かいます。',
          romaji: 'Toukyou-eki de Shinkansen ni norikaete Kyouto e mukaimasu.',
          meaningEn: 'At Tokyo Station, I will transfer to the Shinkansen and head to Kyoto.',
          meaningBn: 'টোকিও স্টেশনে শিঙ্কানসেন বুলেট ট্রেনে বদল করে কিয়োটোর দিকে রওনা হব।'
        },
        {
          ja: '北口のタクシー乗り場には長い列ができていました。',
          romaji: 'Kitaguchi no takushii noriba niwa nagai retsu ga dekite imashita.',
          meaningEn: 'There was a long line formed at the North exit taxi stand.',
          meaningBn: 'উত্তর এক্সিটের ট্যাক্সি স্ট্যান্ডে দীর্ঘ লাইন পড়েছিল।'
        }
      ],
      tamagoTip: {
        bn: 'গাছের ওপর চড়া মানুষ। কোনো বাহন, ট্রেন বা বাসে আরোহণ করা বোঝাতে 乗る (のる)।',
        en: 'A person balancing atop a tall frame. Getting on vehicles, changing trains (乗り換え).'
      }
    },

    // 4. 始
    {
      id: 'l11-hajimeru',
      kanji: '始',
      emoji: '🏁',
      strokeCount: 8,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'シ', romaji: 'shi' }
        ],
        kunyomi: [
          { kana: 'はじ・まる', romaji: 'haji-maru' },
          { kana: 'はじ・める', romaji: 'haji-meru' }
        ]
      },
      meanings: {
        en: 'start, begin, commence, originate',
        bn: 'শুরু করা, আরম্ভ হওয়া, সূচনা'
      },
      vocab: [
        {
          kanji: '始まる',
          kana: 'はじまる',
          romaji: 'hajimaru',
          meaningEn: 'to start, to begin (intransitive)',
          meaningBn: 'শুরু হওয়া / আরম্ভ হওয়া',
          tag: 'Daily N5'
        },
        {
          kanji: '始める',
          kana: 'はじめる',
          romaji: 'hajimeru',
          meaningEn: 'to start, to begin something (transitive)',
          meaningBn: 'শুরু করা / সূচনা করা',
          tag: 'Daily N5'
        },
        {
          kanji: '開始',
          kana: 'かいし',
          romaji: 'kaishi',
          meaningEn: 'commencement, start, opening',
          meaningBn: 'শুরু / সূচনা',
          tag: 'Business N4'
        },
        {
          kanji: '始発',
          kana: 'しはつ',
          romaji: 'shihatsu',
          meaningEn: 'first train / first bus of the day',
          meaningBn: 'দিনের প্রথম ট্রেন বা বাস',
          tag: 'Transport N4'
        },
        {
          kanji: '年始',
          kana: 'ねんし',
          romaji: 'nenshi',
          meaningEn: 'beginning of the year, New Year',
          meaningBn: 'বছরের শুরু / নববর্ষের শুরু',
          tag: 'Time N4'
        },
        {
          kanji: '始終',
          kana: 'しじゅう',
          romaji: 'shijuu',
          meaningEn: 'from beginning to end, continuously',
          meaningBn: 'শুরু থেকে শেষ পর্যন্ত / সর্বদা',
          tag: 'General N4'
        }
      ],
      sentences: [
        {
          ja: '日本語学校の授業は毎朝九時から始まります。',
          romaji: 'Nihongo gakkou no jugyou wa maiasa kuji kara hajimarimasu.',
          meaningEn: 'Japanese language school classes begin every morning at 9:00 AM.',
          meaningBn: 'জাপানি ভাষা স্কুলের ক্লাস প্রতিদিন সকাল ৯টা থেকে শুরু হয়।'
        },
        {
          ja: '健康のために先月からジムに通い始めました。',
          romaji: 'Kenkou no tame ni sengetsu kara jimu ni kayoihajimemashita.',
          meaningEn: 'For my health, I started going to the gym since last month.',
          meaningBn: 'সুস্বাস্থ্যের জন্য গত মাস থেকে আমি জিমে যাওয়া শুরু করেছি।'
        },
        {
          ja: '朝一番の始発電車に乗って空港へ向かいました。',
          romaji: 'Asa ichiban no shihatsu densha ni notte kuukou e mukaimashita.',
          meaningEn: 'I boarded the very first train of the morning and headed to the airport.',
          meaningBn: 'সকালে প্রথম ট্রেনের শিডিউলে চড়ে আমি বিমানবন্দরের উদ্দেশ্যে রওয়ানা হয়েছিলাম।'
        }
      ],
      tamagoTip: {
        bn: 'নারী (女) এবং মাতৃজঠর বা সূচনামুখ (台)। কোনো প্রাণের জন্মের মতো যেকোনো কিছুর নতুন শুভ সূচনা 始まる।',
        en: 'A woman (女) bringing forth a new foundation (台). The inception and starting line of actions.'
      }
    },

    // 5. 終
    {
      id: 'l11-owaru',
      kanji: '終',
      emoji: '🛑',
      strokeCount: 11,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'シュウ', romaji: 'shuu' }
        ],
        kunyomi: [
          { kana: 'お・わる', romaji: 'o-waru' },
          { kana: 'お・える', romaji: 'o-eru' }
        ]
      },
      meanings: {
        en: 'end, finish, terminate, conclude',
        bn: 'শেষ হওয়া, সমাপ্ত করা, সমাপ্তি'
      },
      vocab: [
        {
          kanji: '終わる',
          kana: 'おわる',
          romaji: 'owaru',
          meaningEn: 'to end, to finish (intransitive)',
          meaningBn: 'শেষ হওয়া / সমাপ্ত হওয়া',
          tag: 'Daily N5'
        },
        {
          kanji: '終える',
          kana: 'おえる',
          romaji: 'oeru',
          meaningEn: 'to finish, to complete (transitive)',
          meaningBn: 'সমাপ্ত করা / শেষ করা',
          tag: 'Daily N4'
        },
        {
          kanji: '終わり',
          kana: 'おわり',
          romaji: 'owari',
          meaningEn: 'the end, conclusion',
          meaningBn: 'শেষ / সমাপ্তি',
          tag: 'Daily N5'
        },
        {
          kanji: '終電',
          kana: 'しゅうでん',
          romaji: 'shuuden',
          meaningEn: 'last train of the night',
          meaningBn: 'দিনের সর্বশেষ ট্রেন',
          tag: 'Transport N4'
        },
        {
          kanji: '終点',
          kana: 'しゅうてん',
          romaji: 'shuuten',
          meaningEn: 'terminal station, last stop',
          meaningBn: 'ট্রেনের শেষ গন্তব্য / অন্তিম স্টেশন',
          tag: 'Transport N4'
        },
        {
          kanji: '最終',
          kana: 'さいしゅう',
          romaji: 'saishuu',
          meaningEn: 'final, closing, ultimate',
          meaningBn: 'চূড়ান্ত / সর্বশেষ',
          tag: 'Business N4'
        }
      ],
      sentences: [
        {
          ja: '今日のアルバイトは午後十時に終わります。',
          romaji: 'Kyou no arubaito wa gogo juuji ni owarimasu.',
          meaningEn: 'Today\'s part-time job finishes at 10:00 PM.',
          meaningBn: 'আজকের খণ্ডকালীন কাজ (বাইতো) রাত ১০টায় শেষ হবে।'
        },
        {
          ja: '終電に乗り遅れないように、急いで駅へ走りましょう。',
          romaji: 'Shuuden ni noriokurenai you ni, isoide eki e hashirimashou.',
          meaningEn: 'So we don\'t miss the last train, let\'s run to the station in a hurry.',
          meaningBn: 'রাতের শেষ ট্রেন যাতে মিস না হয়, সেজন্য দ্রুত স্টেশনের দিকে দৌড়াতে হবে।'
        },
        {
          ja: 'この電車は終点の東京駅まで止まりません。',
          romaji: 'Kono densha wa shuuten no Toukyou-eki made tomarimasen.',
          meaningEn: 'This train does not stop until Tokyo Station, the final terminal.',
          meaningBn: 'এই ট্রেনটি অন্তিম গন্তব্য টোকিও স্টেশন পর্যন্ত আর কোথাও থামবে না।'
        }
      ],
      tamagoTip: {
        bn: 'সুতো (糸) বোনার শেষ গিঁট বেঁধে সম্পন্ন করা (冬 - শীতকাল বা বছরের শেষ ঋতু)। সমাপ্তি বোঝাতে 終わる ও 終電।',
        en: 'A thread (糸) knotted at the arrival of winter (冬). Tying the knot on an ended schedule.'
      }
    },

    // 6. 勉
    {
      id: 'l11-ben',
      kanji: '勉',
      emoji: '📖',
      strokeCount: 10,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ベン', romaji: 'ben' }
        ],
        kunyomi: [
          { kana: 'つと・める', romaji: 'tsuto-meru' }
        ]
      },
      meanings: {
        en: 'exertion, strive, study, diligent effort, endeavor',
        bn: 'কঠোর পরিশ্রম, একাগ্র চেষ্টা, অধ্যবসায়'
      },
      vocab: [
        {
          kanji: '勉強',
          kana: 'べんきょう',
          romaji: 'benkyou',
          meaningEn: 'study, diligence / discount (commerce)',
          meaningBn: 'পড়ালেখা / অধ্যয়ন / পণ্যে ছাড়',
          tag: 'Daily N5'
        },
        {
          kanji: '勉強する',
          kana: 'べんきょうする',
          romaji: 'benkyou suru',
          meaningEn: 'to study, to learn',
          meaningBn: 'পড়ালেখা করা / শেখা',
          tag: 'Verb N5'
        },
        {
          kanji: '勤勉な',
          kana: 'きんべんな',
          romaji: 'kinben na',
          meaningEn: 'diligent, hardworking, industrious',
          meaningBn: 'পরিশ্রমী / একনিষ্ঠ',
          tag: 'Personality N4'
        },
        {
          kanji: '勉強机',
          kana: 'べんきょうづくえ',
          romaji: 'benkyouzukue',
          meaningEn: 'study desk',
          meaningBn: 'পড়ার টেবিল',
          tag: 'Daily N5'
        },
        {
          kanji: '勉学',
          kana: 'べんがく',
          romaji: 'bengaku',
          meaningEn: 'studies, pursuit of learning',
          meaningBn: 'বিদ্যাচর্চা / জ্ঞানার্জন',
          tag: 'Academic N4'
        },
        {
          kanji: 'お勉強',
          kana: 'おべんきょう',
          romaji: 'obenkyou',
          meaningEn: 'study (polite) / bargain discount',
          meaningBn: 'পড়ালেখা (বিনীত) / বিক্রেতার মূল্যছাড়',
          tag: 'Shop N4'
        }
      ],
      sentences: [
        {
          ja: 'JLPTのN4に合格するために、毎日三時間日本語を勉強しています。',
          romaji: 'JLPT no N4 ni goukaku suru tame ni, mainichi sanjikan Nihongo o benkyou shite imasu.',
          meaningEn: 'In order to pass JLPT N4, I study Japanese for three hours every day.',
          meaningBn: 'জেএলপিটি এন৪ পরীক্ষায় উত্তীর্ণ হওয়ার জন্য আমি প্রতিদিন তিন ঘণ্টা জাপানি ভাষা পড়ি।'
        },
        {
          ja: '電器屋の店員さんに「もう少しお勉強してもらえませんか」とお願いしました。',
          romaji: 'Denkiya no ten\'in-san ni "mou sukoshi obenkyou shitemoraemasen ka" to onegai shimashita.',
          meaningEn: 'I asked the appliance store clerk, "Could you give me a bit more of a discount?"',
          meaningBn: 'ইলেকট্রনিক্স শপের কর্মীকে আমি বললাম, "দয়া করে দামটি কি আরেকটু ছাড় দেওয়া যায়?"'
        },
        {
          ja: '彼はとても勤勉で、クラスの中で一番優秀な学生です。',
          romaji: 'Kare wa totemo kinben de, kurasu no naka de ichiban yuushuu na gakusei desu.',
          meaningEn: 'He is very hardworking and the most outstanding student in the class.',
          meaningBn: 'সে অত্যন্ত পরিশ্রমী এবং পুরো ক্লাসের মধ্যে সবচেয়ে মেধাবী ছাত্র।'
        }
      ],
      tamagoTip: {
        bn: 'বিলম্বে হলেও প্রসববেদনায় সন্তান জন্মদান (免) এবং পেশির সর্বোচ্চ শক্তি প্রয়োগ (力)। অধ্যবসায়ের সাধনা 勉।',
        en: 'Deliverance through arduous labor (免) reinforced with muscle power (力). Diligence in studies (勉強).'
      }
    },

    // 7. 強
    {
      id: 'l11-tsuyoi',
      kanji: '強',
      emoji: '💪',
      strokeCount: 11,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'キョウ', romaji: 'kyou' },
          { kana: 'ゴウ', romaji: 'gou' }
        ],
        kunyomi: [
          { kana: 'つよ・い', romaji: 'tsuyo-i' },
          { kana: 'つよ・まる', romaji: 'tsuyo-maru' },
          { kana: 'し・いる', romaji: 'shi-iru' }
        ]
      },
      meanings: {
        en: 'strong, powerful, robust, force',
        bn: 'শক্তিশালী, বলিষ্ঠ, তীব্র, দৃঢ়'
      },
      vocab: [
        {
          kanji: '強い',
          kana: 'つよい',
          romaji: 'tsuyoi',
          meaningEn: 'strong, powerful',
          meaningBn: 'শক্তিশালী / তীব্র / বলিষ্ঠ',
          tag: 'Adj N5'
        },
        {
          kanji: '勉強',
          kana: 'べんきょう',
          romaji: 'benkyou',
          meaningEn: 'study',
          meaningBn: 'পড়ালেখা / অধ্যয়ন',
          tag: 'Daily N5'
        },
        {
          kanji: '強調',
          kana: 'きょうちょう',
          romaji: 'kyouchou',
          meaningEn: 'emphasis, stressing a point',
          meaningBn: 'জোর দেওয়া / গুরুত্বারোপ',
          tag: 'Language N4'
        },
        {
          kanji: '強風',
          kana: 'きょうふう',
          romaji: 'kyoufuu',
          meaningEn: 'strong wind, gale',
          meaningBn: 'তীব্র বাতাস / দমকা হাওয়া',
          tag: 'Weather N4'
        },
        {
          kanji: '強力な',
          kana: 'きょうりょくな',
          romaji: 'kyouryoku na',
          meaningEn: 'powerful, mighty',
          meaningBn: 'অতীব শক্তিশালী',
          tag: 'General N4'
        },
        {
          kanji: '強盗',
          kana: 'ごうとう',
          romaji: 'goutou',
          meaningEn: 'robbery, mugger, burglar',
          meaningBn: 'ডাকাতি / ডাকাত',
          tag: 'News N4'
        }
      ],
      sentences: [
        {
          ja: '台風が近づいているので、外は非常に強い風と雨が吹いています。',
          romaji: 'Taifuu ga chikazuite iru node, soto wa hijou ni tsuyoi kaze to ame ga fuite imasu.',
          meaningEn: 'Because a typhoon is approaching, extremely strong winds and rain are blowing outside.',
          meaningBn: 'টাইফুন ঘূর্ণিঝড় ঘনিয়ে আসায় বাইরে তীব্র দমকা বাতাস ও বৃষ্টি হচ্ছে।'
        },
        {
          ja: '日本のサッカーチームは守備がとても強くて勝ちました。',
          romaji: 'Nihon no sakkaa chiimu wa shubi ga totemo tsuyokute kachimashita.',
          meaningEn: 'The Japanese soccer team\'s defense was very strong and they won.',
          meaningBn: 'জাপানের ফুটবল দলের রক্ষণভাগ খুবই শক্তিশালী ছিল এবং তারা জয়লাভ করেছে।'
        },
        {
          ja: '先生は予習と復習の大切さを強く強調しました。',
          romaji: 'Sensei wa yoshuu to fukushuu no taisetsusa o tsuyoku kyouchou shimashita.',
          meaningEn: 'The teacher strongly emphasized the importance of preview and review.',
          meaningBn: 'শিক্ষক ক্লাসের পড়া আগে থেকে দেখা ও রিভিশনের গুরুত্বের ওপর বিশেষভাবে জোর দিয়েছেন।'
        }
      ],
      tamagoTip: {
        bn: 'শক্ত ধনুক (弓) এবং শক্ত খোলসওয়ালা পোকা (虫)। অনমনীয় শক্তি ও প্রতিরোধ ক্ষমতা 強い (つよい)।',
        en: 'A taut bow (弓) combined with a hard-shelled beetle (虫). Indomitable power and strength.'
      }
    },

    // 8. 朝
    {
      id: 'l11-asa',
      kanji: '朝',
      emoji: '🌅',
      strokeCount: 12,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'チョウ', romaji: 'chou' }
        ],
        kunyomi: [
          { kana: 'あさ', romaji: 'asa' }
        ]
      },
      meanings: {
        en: 'morning, dawn, dynasty, early day',
        bn: 'সকাল, ভোর, প্রাতঃকাল'
      },
      vocab: [
        {
          kanji: '朝',
          kana: 'あさ',
          romaji: 'asa',
          meaningEn: 'morning',
          meaningBn: 'সকাল / প্রাতঃকাল',
          tag: 'Time N5'
        },
        {
          kanji: '朝ご飯',
          kana: 'あさごはん',
          romaji: 'asagohan',
          meaningEn: 'breakfast',
          meaningBn: 'সকালের নাস্তা',
          tag: 'Food N5'
        },
        {
          kanji: '毎朝',
          kana: 'まいあさ',
          romaji: 'maiasa',
          meaningEn: 'every morning',
          meaningBn: 'প্রতিদিন সকালে',
          tag: 'Time N5'
        },
        {
          kanji: '今朝',
          kana: 'けさ',
          romaji: 'kesa',
          meaningEn: 'this morning',
          meaningBn: 'আজ সকালে',
          tag: 'Time N5'
        },
        {
          kanji: '朝日',
          kana: 'あさひ',
          romaji: 'asahi',
          meaningEn: 'morning sun, sunrise',
          meaningBn: 'ভোরের সূর্য / প্রভাতসূর্য',
          tag: 'Nature N4'
        },
        {
          kanji: '朝食',
          kana: 'ちょうしょく',
          romaji: 'choushoku',
          meaningEn: 'breakfast (formal/hotel menu)',
          meaningBn: 'সকালের নাস্তা (হোটেল/ফর্মাল)',
          tag: 'Food N4'
        }
      ],
      sentences: [
        {
          ja: '朝ご飯に温かいみそ汁と納豆ご飯を食べました。',
          romaji: 'Asagohan ni atatakai misoshiru to nattou gohan o tabemashita.',
          meaningEn: 'For breakfast, I ate warm miso soup and natto rice.',
          meaningBn: 'সকালের নাস্তায় আমি গরম মিসো স্যুপ এবং নাত্তো মেশানো ভাত খেয়েছি।'
        },
        {
          ja: '今朝は寝坊してしまって、危うく遅刻するところでした。',
          romaji: 'Kesa wa neboushiteshimatte, ayauku chikoku suru tokoro deshita.',
          meaningEn: 'I overslept this morning and almost ended up being late.',
          meaningBn: 'আজ সকালে আমার ঘুম ভাঙতে দেরি হয়ে গিয়েছিল এবং প্রায় লেট হয়ে যাচ্ছিল।'
        },
        {
          ja: 'ホテルのバイキングで美味しい和風の朝食を楽しみました。',
          romaji: 'Hoteru no baikingu de oishii wafuu no choushoku o tanoshimimashita.',
          meaningEn: 'I enjoyed a delicious Japanese-style breakfast at the hotel buffet.',
          meaningBn: 'হোটেলের বুফেতে বসে আমি সুস্বাদু জাপানি ধাঁচের নাস্তা উপভোগ করেছি।'
        }
      ],
      tamagoTip: {
        bn: 'ভোরে ঘাসের মধ্যে দিয়ে সূর্যোদয় (十 + 日 + 十) এবং আকাশে তখনও অবশিষ্ট আবছা চাঁদ (月)। নির্মল সকাল 朝 (あさ)।',
        en: 'The morning sun rising through tall grasses while the moon (月) still lingers. Morning dawn.'
      }
    },

    // 9. 昼
    {
      id: 'l11-hiru',
      kanji: '昼',
      emoji: '☀️',
      strokeCount: 9,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'チュウ', romaji: 'chuu' }
        ],
        kunyomi: [
          { kana: 'ひる', romaji: 'hiru' }
        ]
      },
      meanings: {
        en: 'noon, daytime, midday',
        bn: 'দুপুর, মধ্যাহ্ন, দিনের বেলা'
      },
      vocab: [
        {
          kanji: '昼',
          kana: 'ひる',
          romaji: 'hiru',
          meaningEn: 'noon, daytime',
          meaningBn: 'দুপুর / দিনের বেলা',
          tag: 'Time N5'
        },
        {
          kanji: '昼ご飯',
          kana: 'ひるごはん',
          romaji: 'hirugohan',
          meaningEn: 'lunch',
          meaningBn: 'দুপুরের খাবার',
          tag: 'Food N5'
        },
        {
          kanji: 'お昼',
          kana: 'おひる',
          romaji: 'ohiru',
          meaningEn: 'lunchtime, noon',
          meaningBn: 'দুপুরবেলা / দুপুরের আহার',
          tag: 'Daily N5'
        },
        {
          kanji: '昼休み',
          kana: 'ひるやすみ',
          romaji: 'hiruyasumi',
          meaningEn: 'lunch break, midday recess',
          meaningBn: 'দুপুরের বিরতি / লাঞ্চ ব্রেক',
          tag: 'Work N5'
        },
        {
          kanji: '昼食',
          kana: 'ちゅうしょく',
          romaji: 'chuushoku',
          meaningEn: 'lunch (formal term)',
          meaningBn: 'মধ্যাহ্নভোজ',
          tag: 'Food N4'
        },
        {
          kanji: '昼寝',
          kana: 'ひるね',
          romaji: 'hirune',
          meaningEn: 'afternoon nap, siesta',
          meaningBn: 'দুপুরের ভাতঘুম / স্বল্পকালীন নিদ্রা',
          tag: 'Daily N4'
        }
      ],
      sentences: [
        {
          ja: '十二時から一時間は会社の昼休みで、同僚とランチを食べます。',
          romaji: 'Juuniji kara ichiji wa kaisha no hiruyasumi de, douryou to ranchi o tabemasu.',
          meaningEn: 'From 12:00 to 1:00 is our company lunch break, and I eat lunch with colleagues.',
          meaningBn: 'বেলা ১২টা থেকে ১টা পর্যন্ত কোম্পানির দুপুরের বিরতি, তখন সহকর্মীদের সাথে লাঞ্চ করি।'
        },
        {
          ja: '今日のお昼はコンビニでツナマヨのおにぎりを二つ買いました。',
          romaji: 'Kyou no ohiru wa konbini de tsuna-mayo no onigiri o futatsu kaimashita.',
          meaningEn: 'For lunch today, I bought two tuna-mayo rice balls at the convenience store.',
          meaningBn: 'আজ দুপুরে কনভেনিয়েন্স স্টোর থেকে দুটি টুনা-মেয়োনিজ ওনিগিরি কিনেছি।'
        },
        {
          ja: '休日の午後は部屋で三十分ほど気持ちよく昼寝をしました。',
          romaji: 'Kyuujitsu no gogo wa heya de sanjuppun hodo kimochiyoku hirune o shimashita.',
          meaningEn: 'On weekend afternoons, I took a pleasant 30-minute nap in my room.',
          meaningBn: 'ছুটির দিনের দুপুরে ঘরে বসে প্রায় ৩০ মিনিট আরামে ভাতঘুম দিয়েছি।'
        }
      ],
      tamagoTip: {
        bn: 'সূর্য যখন আকাশের ঠিক মাঝামাঝি অবস্থানে (日) ছাদের ওপর প্রখর আলো ছড়ায়। দুপুরবেলা 昼 (ひる)।',
        en: 'The sun (日) positioned high above the boundary line at the crest of the sky. Midday and lunchtime.'
      }
    },

    // 10. 夜
    {
      id: 'l11-yoru',
      kanji: '夜',
      emoji: '🌙',
      strokeCount: 8,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ヤ', romaji: 'ya' }
        ],
        kunyomi: [
          { kana: 'よる', romaji: 'yoru' },
          { kana: 'よ', romaji: 'yo' }
        ]
      },
      meanings: {
        en: 'night, evening, nighttime',
        bn: 'রাত, রাত্রি, রজনী'
      },
      vocab: [
        {
          kanji: '夜',
          kana: 'よる',
          romaji: 'yoru',
          meaningEn: 'night, evening',
          meaningBn: 'রাত / রাত্রি',
          tag: 'Time N5'
        },
        {
          kanji: '今夜',
          kana: 'こんや',
          romaji: 'konya',
          meaningEn: 'tonight, this evening',
          meaningBn: 'আজ রাতে',
          tag: 'Time N5'
        },
        {
          kanji: '夜ご飯',
          kana: 'よるごはん',
          romaji: 'yorugohan',
          meaningEn: 'dinner, supper',
          meaningBn: 'রাতের খাবার',
          tag: 'Food N5'
        },
        {
          kanji: '毎夜',
          kana: 'まいよ',
          romaji: 'maiyo',
          meaningEn: 'every night',
          meaningBn: 'প্রতি রাতে',
          tag: 'Time N4'
        },
        {
          kanji: '夜中',
          kana: 'よなか',
          romaji: 'yonaka',
          meaningEn: 'middle of the night, dead of night',
          meaningBn: 'গভীর রাত / মধ্যরাত',
          tag: 'Time N4'
        },
        {
          kanji: '深夜',
          kana: 'しんや',
          romaji: 'shin\'ya',
          meaningEn: 'late night, midnight hours',
          meaningBn: 'মধ্যরাত্রি / গভীর রজনী',
          tag: 'Time N4'
        }
      ],
      sentences: [
        {
          ja: '日本の夜道は街灯が多くてとても安全なので安心です。',
          romaji: 'Nihon no yomichi wa gaitou ga ookute totemo anzen nanode anshin desu.',
          meaningEn: 'Streets in Japan have plenty of streetlights at night and are very safe, providing peace of mind.',
          meaningBn: 'জাপানের রাতের রাস্তায় অনেক স্ট্রিটলাইট থাকে বলে চলাচলে বেশ নিরাপদ ও নিশ্চিন্ত থাকা যায়।'
        },
        {
          ja: '今夜は友達と一緒に駅前の居酒屋で食事をします。',
          romaji: 'Konya wa tomodachi to issho ni ekimae no izakaya de shokuji o shimasu.',
          meaningEn: 'Tonight I am dining with friends at an izakaya pub in front of the station.',
          meaningBn: 'আজ রাতে বন্ধুদের সাথে স্টেশনের সামনের ইজাকায়ায় খাবার খাব।'
        },
        {
          ja: '試験前なので昨日は夜遅くまで机に向かっていました。',
          romaji: 'Shiken mae nanode kinou wa yoru osoku made tsukue ni mukatte imashita.',
          meaningEn: 'Because exams are coming up, I was at my desk until late last night.',
          meaningBn: 'পরীক্ষা ঘনিয়ে আসায় গতকাল গভীর রাত পর্যন্ত পড়ার টেবিলে বসেছিলাম।'
        }
      ],
      tamagoTip: {
        bn: 'ছাদের নিচে (亠) মানুষ (亻) যখন সন্ধ্যার চাঁদের (夕) আলোয় বিশ্রাম নেয়। রাত বোঝাতে 夜 (よる)।',
        en: 'A person sheltered under a roof watching the crescent moon (夕). Evening and night hours.'
      }
    },

    // --- READ-ONLY KANJI (読める - 2 items) ---
    // 11. 自転車
    {
      id: 'l11-jitensha',
      kanji: '自転車',
      emoji: '🚲',
      strokeCount: 20,
      jlpt: 'N5',
      category: 'read_only',
      readings: {
        onyomi: [
          { kana: 'ジテンシャ', romaji: 'jitensha' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'bicycle, bike, cycle',
        bn: 'বাইসাইকেল, সাইকেল'
      },
      vocab: [
        {
          kanji: '自転車',
          kana: 'じてんしゃ',
          romaji: 'jitensha',
          meaningEn: 'bicycle, bike',
          meaningBn: 'বাইসাইকেল',
          tag: 'Vehicle N5'
        },
        {
          kanji: '駐輪場',
          kana: 'ちゅうりんじょう',
          romaji: 'chuurinjou',
          meaningEn: 'bicycle parking area',
          meaningBn: 'সাইকেল পার্কিংয়ের জায়গা',
          tag: 'Place N4'
        },
        {
          kanji: '自分',
          kana: 'じぶん',
          romaji: 'jibun',
          meaningEn: 'oneself, myself',
          meaningBn: 'নিজে / আত্ম',
          tag: 'Daily N5'
        },
        {
          kanji: '運転する',
          kana: 'うんてんする',
          romaji: 'unten suru',
          meaningEn: 'to drive, to operate',
          meaningBn: 'গাড়ি চালানো',
          tag: 'Verb N5'
        },
        {
          kanji: '防犯登録',
          kana: 'ぼうはんとうろく',
          romaji: 'bouhan touroku',
          meaningEn: 'bicycle crime prevention registration',
          meaningBn: 'সাইকেলের পুলিশ ভেরিফিকেশন নম্বর',
          tag: 'Law N4'
        },
        {
          kanji: '回転',
          kana: 'かいてん',
          romaji: 'kaiten',
          meaningEn: 'rotation, revolving',
          meaningBn: 'ঘূর্ণন (যেমন: কনভেয়ার বেল্ট সুশি)',
          tag: 'Daily N4'
        }
      ],
      sentences: [
        {
          ja: '駅までの通勤に中古の自転車を買って乗っています。',
          romaji: 'Eki made no tsuukin ni chuuko no jitensha o katte notte imasu.',
          meaningEn: 'I bought a second-hand bicycle to ride for my commute to the station.',
          meaningBn: 'স্টেশনে যাতায়াতের জন্য আমি একটি সেকেন্ড-হ্যান্ড সাইকেল কিনে চড়ছি।'
        },
        {
          ja: '日本では自転車を買ったら必ず警察の防犯登録をしなければなりません。',
          romaji: 'Nihon dewa jitensha o kattara kanarazu keisatsu no bouhan touroku o shinakereba narimasen.',
          meaningEn: 'In Japan, when you buy a bike, you must complete the police anti-theft registration.',
          meaningBn: 'জাপানে সাইকেল কিনলে বাধ্যতামূলকভাবে পুলিশের চুরি প্রতিরোধ রেজিস্ট্রেশন করতে হয়।'
        },
        {
          ja: '指定された駐輪場以外の場所に止めると撤去されることがあります。',
          romaji: 'Shitei sareta chuurinjou igai no basho ni tomeru to tekkyo sareru koto ga arimasu.',
          meaningEn: 'If you park somewhere other than designated bike parking, it may be impounded.',
          meaningBn: 'নির্ধারিত সাইকেল পার্কিং ছাড়া অন্যত্র রাখলে সিটি করপোরেশন তা বাজেয়াপ্ত করতে পারে।'
        }
      ],
      tamagoTip: {
        bn: '自 (নিজ পায়ে) + 転 (ঘুরিয়ে) + 車 (চাকাযুক্ত যান)। নিজের পায়ে প্যাডেল ঘুরিয়ে চলা বাহন 自転車 (じてんしゃ)।',
        en: 'Self (自) + Rolling (転) + Vehicle (車). The ubiquitous Japanese bicycle.'
      }
    },

    // 12. 寝る
    {
      id: 'l11-neru',
      kanji: '寝る',
      emoji: '🛏️',
      strokeCount: 13,
      jlpt: 'N5',
      category: 'read_only',
      readings: {
        onyomi: [
          { kana: 'シン', romaji: 'shin' }
        ],
        kunyomi: [
          { kana: 'ね・る', romaji: 'ne-ru' },
          { kana: 'ね・かす', romaji: 'ne-kasu' }
        ]
      },
      meanings: {
        en: 'sleep, go to bed, lie down',
        bn: 'ঘুমানো, বিছানায় যাওয়া, শয়ন করা'
      },
      vocab: [
        {
          kanji: '寝る',
          kana: 'ねる',
          romaji: 'neru',
          meaningEn: 'to sleep, to go to bed',
          meaningBn: 'ঘুমানো / শুতে যাওয়া',
          tag: 'Daily N5'
        },
        {
          kanji: '寝坊',
          kana: 'ねぼう',
          romaji: 'nebou',
          meaningEn: 'oversleeping, late riser',
          meaningBn: 'ঘুম ভাঙতে দেরি হওয়া',
          tag: 'Daily N5'
        },
        {
          kanji: '寝室',
          kana: 'しんしつ',
          romaji: 'shinshitsu',
          meaningEn: 'bedroom',
          meaningBn: 'শোবার ঘর / বেডরুম',
          tag: 'House N4'
        },
        {
          kanji: '昼寝',
          kana: 'ひるね',
          romaji: 'hirune',
          meaningEn: 'afternoon nap',
          meaningBn: 'দুপুরের ভাতঘুম',
          tag: 'Daily N4'
        },
        {
          kanji: '早寝早起き',
          kana: 'はやねはやおき',
          romaji: 'hayanehayaoki',
          meaningEn: 'early to bed, early to rise',
          meaningBn: 'তাড়াতাড়ি ঘুমানো ও সকালে ওঠা',
          tag: 'Health N4'
        },
        {
          kanji: '寝台列車',
          kana: 'しんだいれっしゃ',
          romaji: 'shindai ressha',
          meaningEn: 'sleeper train',
          meaningBn: 'স্লিপার ট্রেন / শোবার বগিযুক্ত ট্রেন',
          tag: 'Transport'
        }
      ],
      sentences: [
        {
          ja: '明日は朝早いので、今夜は十一時に寝ることにします。',
          romaji: 'Ashita wa asa hayai node, konya wa juuichiji ni neru koto ni shimasu.',
          meaningEn: 'Tomorrow is early, so I decide to go to bed at 11:00 PM tonight.',
          meaningBn: 'আগামীকাল সকালে তাড়াতাড়ি উঠতে হবে, তাই আজ রাত ১১টায় ঘুমাতে যাব।'
        },
        {
          ja: 'スマホを見ながらベッドに入ると、なかなか寝られません。',
          romaji: 'Sumaho o minagara beddo ni hairu to, nakanaka neraremasen.',
          meaningEn: 'If you get into bed while looking at your smartphone, it\'s difficult to fall asleep.',
          meaningBn: 'স্মার্টফোন দেখতে দেখতে বিছানায় গেলে সহজে ঘুম আসতে চায় না।'
        },
        {
          ja: '「早寝早起き」は健康的な生活を送るための基本です。',
          romaji: '"Hayanehayaoki" wa kenkouteki na seikatsu o okuru tame no kihon desu.',
          meaningEn: '"Early to bed and early to rise" is the fundamental key to leading a healthy life.',
          meaningBn: '"তাড়াতাড়ি ঘুমানো ও সকালে ওঠা" হলো স্বাস্থ্যকর জীবনের মূল চাবিকাঠি।'
        }
      ],
      tamagoTip: {
        bn: 'ঘরের ছাদ (宀) ও কাঠের বালিশে মাথা রেখে নির্ভার বিশ্রাম। ঘুমাতে যাওয়া 寝る (ねる)।',
        en: 'Resting peacefully under a roof (宀) on a wooden headrest. Sleeping and bedtime.'
      }
    },

    // --- VISUAL RECOGNITION KANJI (見て、わかる - 1 item) ---
    // 13. 集合
    {
      id: 'l11-shuugou',
      kanji: '集合',
      emoji: '🚩',
      strokeCount: 18,
      jlpt: 'N4',
      category: 'visual_recognition',
      readings: {
        onyomi: [
          { kana: 'シュウゴウ', romaji: 'shuugou' }
        ],
        kunyomi: []
      },
      meanings: {
        en: 'gathering, assembly, meeting up at a spot, rallying point',
        bn: 'জমায়েত, সমাবেশ, নির্দিষ্ট স্থানে একত্রিত হওয়া'
      },
      vocab: [
        {
          kanji: '集合',
          kana: 'しゅうごう',
          romaji: 'shuugou',
          meaningEn: 'gathering, assembly',
          meaningBn: 'জমায়েত / জমা হওয়া',
          tag: 'Social N4'
        },
        {
          kanji: '集合場所',
          kana: 'しゅうごうばしょ',
          romaji: 'shuugou basho',
          meaningEn: 'meeting place, assembly point, rendezvous spot',
          meaningBn: 'জমায়েত হওয়ার স্থান / মিলনের জায়গা',
          tag: 'Event N4'
        },
        {
          kanji: '集合時間',
          kana: 'しゅうごうじかん',
          romaji: 'shuugou jikan',
          meaningEn: 'meeting time, assembly hour',
          meaningBn: 'জমায়েতের নির্ধারিত সময়',
          tag: 'Event N4'
        },
        {
          kanji: '集まる',
          kana: 'あつまる',
          romaji: 'atsumaru',
          meaningEn: 'to gather together, to assemble (intransitive)',
          meaningBn: 'একত্রিত হওয়া / জড়ো হওয়া',
          tag: 'Verb N5'
        },
        {
          kanji: '集める',
          kana: 'あつめる',
          romaji: 'atsumeru',
          meaningEn: 'to collect, to assemble things (transitive)',
          meaningBn: 'সংগ্রহ করা / জড়ো করা',
          tag: 'Verb N5'
        },
        {
          kanji: '合格',
          kana: 'ごうかく',
          romaji: 'goukaku',
          meaningEn: 'passing an exam, success',
          meaningBn: 'পরীক্ষায় উত্তীর্ণ হওয়া / পাস',
          tag: 'Academic N4'
        }
      ],
      sentences: [
        {
          ja: '明日のバスツアーの集合時間は朝八時三十分です。遅れないでください。',
          romaji: 'Ashita no basu tsuaa no shuugou jikan wa asa hachiji sanjuppun desu. Okurenaide kudasai.',
          meaningEn: 'Tomorrow\'s bus tour assembly time is 8:30 AM. Please do not be late.',
          meaningBn: 'আগামীকালের বাস ট্যুরের জমায়েতের সময় সকাল ৮টা ৩০ মিনিট। অনুগ্রহ করে দেরি করবেন না।'
        },
        {
          ja: '避難訓練のときは、速やかにグラウンドの集合場所に集まります。',
          romaji: 'Hinan kunren no toki wa, sumiyaka ni guraundo no shuugou basho ni atsumarimasu.',
          meaningEn: 'During evacuation drills, promptly assemble at the designated ground meeting spot.',
          meaningBn: 'দুর্যোগের মহড়ার সময় দ্রুত মাঠের জমায়েতের স্থানে একত্রিত হতে হয়।'
        },
        {
          ja: '駅前の時計台の下が私たちの集合場所になっています。',
          romaji: 'Ekimae no tokeidai no shita ga watashitachi no shuugou basho ni natte imasu.',
          meaningEn: 'Under the clock tower in front of the station is our designated meeting spot.',
          meaningBn: 'স্টেশনের সামনের ঘড়ির টাওয়ারের নিচে আমাদের জমায়েতের জায়গা নির্ধারিত রয়েছে।'
        }
      ],
      tamagoTip: {
        bn: 'গাছে পাখি জড়ো হওয়ার মতো 集 (একত্রিত হওয়া) + 合 (মিলে যাওয়া)। ট্যুর বা ফিল্ড ট্রিপে 集合場所 সাইন দেখা যায়।',
        en: 'Gather (集) + Unite (合). The essential landmark sign for school tours and company outings.'
      }
    }
  ]
};
