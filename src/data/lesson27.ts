import { Lesson } from '../types/kanji';

export const lesson27: Lesson = {
  id: 27,
  number: 27,
  titleJa: 'いろいろな健康法',
  titleRomaji: 'Iroiro na Kenkouhou',
  titleBn: 'বিভিন্ন স্বাস্থ্যবিধি ও শরীরচর্চা (Various Health Methods)',
  titleEn: 'Various Health Methods',
  descriptionBn: 'শারীরিক অঙ্গ-প্রত্যঙ্গ, দৌড়াদৌড়ি, ওজন কমানো, পরিমাপ করা এবং সুস্থ জীবনযাপনের জন্য প্রয়োজনীয় গুরুত্বপূর্ণ কান্জি (頭, 顔, 首, 走, 声, 重, 太, 計, 不, 痛)।',
  descriptionEn: 'Essential Kanji related to physical health, body parts, exercising, tracking measurements, and managing wellness in Japan.',
  kanjiList: [
    // --- Main Kanji (書ける: 頭, 顔, 首, 走, 声, 重, 太, 計, 不, 痛) ---
    {
      id: 'l27-atama',
      kanji: '頭',
      emoji: '👤',
      strokeCount: 16,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'トウ', romaji: 'tou' }, { kana: 'ズ', romaji: 'zu' }],
        kunyomi: [{ kana: 'あたま', romaji: 'atama' }, { kana: 'かしら', romaji: 'kashira' }]
      },
      meanings: {
        en: 'Head, mind, counter for large animals',
        bn: 'মাথা, মস্তিষ্ক, বুদ্ধি'
      },
      vocab: [
        { kanji: '頭', kana: 'あたま', romaji: 'atama', meaningEn: 'head, brain', meaningBn: 'মাথা', tag: 'N5' },
        { kanji: '頭痛', kana: 'ずつう', romaji: 'zutsuu', meaningEn: 'headache', meaningBn: 'মাথাব্যথা', tag: 'N4' },
        { kanji: '頭が良い', kana: 'あたまがいい', romaji: 'atama ga ii', meaningEn: 'smart, clever', meaningBn: 'বুদ্ধিমান বা মেধাবী', tag: 'N5' },
        { kanji: '一頭', kana: 'いっとう', romaji: 'ittou', meaningEn: 'one large animal (counter)', meaningBn: 'একটি বড় পশু (গণনা করার একক)', tag: 'N3' },
        { kanji: '先頭', kana: 'せんとう', romaji: 'sentou', meaningEn: 'front, lead', meaningBn: 'সবার সামনে বা অগ্রভাগ', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '風邪を引いたみたいで、朝から頭が少し痛くてだるいです।',
          romaji: 'Kaze o hiita mitai de, asa kara atama ga sukoshi itakute darui desu.',
          meaningEn: 'It seems I caught a cold; my head has been hurting a little and I feel sluggish since morning.',
          meaningBn: 'মনে হচ্ছে ঠান্ডা লেগেছে, সকাল থেকেই মাথাটা কেমন যেন একটু ঝিমঝিম করছে আর ব্যাথা করছে।'
        },
        {
          ja: '彼は本当に頭が良い学生で、いつもテストで満点を取ります।',
          romaji: 'Kare wa hontou ni atama ga ii gakusei de, itsumo tesuto de manten o torimasu.',
          meaningEn: 'He is really a smart student and always gets a perfect score on tests.',
          meaningBn: 'সে অত্যন্ত মেধাবী ছাত্র, যেকোনো পরীক্ষাতেই সবসময় পুরো নম্বর পেয়ে প্রথম হয়।'
        }
      ],
      tamagoTip: {
        en: 'The left side is bean/vessel (豆) and the right side is head/page (頁), representing a head sitting on top of the neck structure.',
        bn: 'বামে শিম বা গোলাকার পাত্র (豆) আর ডানে মাথা বা ফেইস (頁)। পাত্রের মতো বসানো গোলাকার আকৃতিটিই হলো আমাদের মাথা।'
      }
    },
    {
      id: 'l27-kao',
      kanji: '顔',
      emoji: '😊',
      strokeCount: 18,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ガン', romaji: 'gan' }],
        kunyomi: [{ kana: 'かお', romaji: 'kao' }]
      },
      meanings: {
        en: 'Face, expression, look',
        bn: 'মুখমণ্ডল, মুখাবয়ব, অভিব্যক্তি'
      },
      vocab: [
        { kanji: '顔', kana: 'かお', romaji: 'kao', meaningEn: 'face', meaningBn: 'মুখমণ্ডল', tag: 'N5' },
        { kanji: '洗顔', kana: 'せんがん', romaji: 'sengan', meaningEn: 'facial wash', meaningBn: 'মুখ ধোয়া বা ফেইস ওয়াশ', tag: 'N3' },
        { kanji: '顔色', kana: 'かおいろ', romaji: 'kaoiro', meaningEn: 'complexion, facial expression', meaningBn: 'মুখের অবস্থা বা মুখের ভঙ্গি', tag: 'N3' },
        { kanji: '笑顔', kana: 'えがお', romaji: 'egao', meaningEn: 'smiling face', meaningBn: 'হাসিমুখ বা স্নিগ্ধ হাসি', tag: 'N3' },
        { kanji: '似顔絵', kana: 'にがおえ', romaji: 'nigaoe', meaningEn: 'portrait sketch, caricature', meaningBn: 'মুখের অবয়ব এঁকে তৈরি স্কেচ', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '朝起きたら、まず冷たい水で顔を洗って目を覚まします।',
          romaji: 'Asa okitara, mazu tsumetai mizu de kao o aratte me o samashimasu.',
          meaningEn: 'When I wake up in the morning, I first wash my face with cold water to wake up fully.',
          meaningBn: 'সকালে ঘুম থেকে উঠে অলসতা কাটাতে প্রথমে ঠান্ডা পানি দিয়ে ভালো করে মুখ ধুয়ে নিই।'
        },
        {
          ja: '彼女はいつも素敵な笑顔で挨拶をしてくれるので、元気がもらえます।',
          romaji: 'Kanojo wa itsumo suteki na egao de aisatsu o shite kureru node, genki ga moraemasu.',
          meaningEn: 'Since she always greets with a lovely smile, it gives me energy.',
          meaningBn: 'সে সবসময় মিষ্টি হাসিমুখে সম্ভাষণ জানায়, যা দেখলে মনটা নিমিষেই ভালো হয়ে যায়।'
        }
      ],
      tamagoTip: {
        en: 'The left side represents hair and lines of the face (彦) and the right side represents head (頁), showing the details of a human face.',
        bn: 'বামে সুশ্রী বা সাজানো রূপ (彦) আর ডানে মাথা (頁) - মানুষের মাথায় থাকা সবচেয়ে আকর্ষণীয় অংশ অর্থাৎ তার ফেইস বা সুন্দর মুখাবয়ব।'
      }
    },
    {
      id: 'l27-kubi',
      kanji: '首',
      emoji: '🦒',
      strokeCount: 9,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'シュ', romaji: 'shu' }],
        kunyomi: [{ kana: 'くび', romaji: 'kubi' }]
      },
      meanings: {
        en: 'Neck, head, leader, fired from job',
        bn: 'ঘাড়, গলা, প্রধান বা লিডার'
      },
      vocab: [
        { kanji: '首', kana: 'くび', romaji: 'kubi', meaningEn: 'neck', meaningBn: 'গলা বা ঘাড়', tag: 'N5' },
        { kanji: '手首', kana: 'てくび', romaji: 'tekubi', meaningEn: 'wrist', meaningBn: 'কবজি (হাতের গলা)', tag: 'N4' },
        { kanji: '足首', kana: 'あしくび', romaji: 'ashikubi', meaningEn: 'ankle', meaningBn: 'পায়ের গোড়ালি বা কবজি', tag: 'N4' },
        { kanji: '首相', kana: 'しゅしょう', romaji: 'shushou', meaningEn: 'prime minister', meaningBn: 'প্রধানমন্ত্রী', tag: 'N3' },
        { kanji: '首都', kana: 'しゅと', romaji: 'shuto', meaningEn: 'capital city', meaningBn: 'রাজধানী', tag: 'N3' },
        { kanji: '首になる', kana: 'くびになる', romaji: 'kubi ni naru', meaningEn: 'to get fired, dismissed', meaningBn: 'চাকরি থেকে বরখাস্ত হওয়া', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'パソコンの前に座りすぎたせいで、首がとても凝ってしまいました।',
          romaji: 'Pasokon no mae ni suwarisugita sei de, kubi ga totemo kotte shimaimashita.',
          meaningEn: 'Because of sitting too much in front of the computer, my neck became very stiff.',
          meaningBn: 'কম্পিউটারের সামনে দীর্ঘক্ষণ একনাগাড়ে বসে কাজ করার জন্য আমার ঘাড় একদম শক্ত হয়ে জ্যাম লেগে আছে।'
        },
        {
          ja: '日本の首都である東京は、世界でも有数の大都市です।',
          romaji: 'Nihon no shuto de aru Toukyou wa, sekai demo yuusu no daitoshi desu.',
          meaningEn: 'Tokyo, which is the capital of Japan, is one of the leading major cities in the world.',
          meaningBn: 'জাপানের রাজধানী টোকিও বর্তমান বিশ্বের অন্যতম একটি উন্নত ও আধুনিক মেগাসিটি।'
        }
      ],
      tamagoTip: {
        en: 'A pictograph showing hair or horns on top and the shape of a neck with nostrils or wrinkles below.',
        bn: 'ওপরের দুটি দাগ মাথার চুল বা চোখের ভ্রু আর নিচে গলার অবয়ব যা থেকে পুরো শরীর নিয়ন্ত্রিত হয়।'
      }
    },
    {
      id: 'l27-hashiru',
      kanji: '走',
      emoji: '🏃',
      strokeCount: 7,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ソウ', romaji: 'sou' }],
        kunyomi: [{ kana: 'はし.る', romaji: 'hashi.ru' }]
      },
      meanings: {
        en: 'Run, rush, race',
        bn: 'দৌড়ানো, দ্রুত চলা, ছুটে যাওয়া'
      },
      vocab: [
        { kanji: '走る', kana: 'はしる', romaji: 'hashiru', meaningEn: 'to run', meaningBn: 'দৌড়ানো', tag: 'N5' },
        { kanji: 'ごちそう', kana: 'ご馳走', romaji: 'gochisou', meaningEn: 'feast, treat', meaningBn: 'মজাদার ভোজ বা ট্রিট', tag: 'N5' },
        { kanji: '走者', kana: 'そうしゃ', romaji: 'sousha', meaningEn: 'runner', meaningBn: 'দৌড়বিদ', tag: 'N3' },
        { kanji: '暴走', kana: 'ぼうそう', romaji: 'bousou', meaningEn: 'running wild, out of control', meaningBn: 'বেপরোয়া বেগে গাড়ি চালানো', tag: 'N3' },
        { kanji: '走り幅跳び', kana: 'はしりはばとび', romaji: 'hashirihabatobi', meaningEn: 'long jump', meaningBn: 'দীর্ঘ লাফ (খেলা)', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '遅刻しそうだったので、駅から学校まで息を切らして走りました।',
          romaji: 'Chikoku shisou datta node, eki kara gakkou made iki o kirashite hashirimashita.',
          meaningEn: 'Because I was about to be late, I ran out of breath from the station to school.',
          meaningBn: 'দেরি হয়ে যাওয়ায় স্টেশন থেকে স্কুল পর্যন্ত একদম হাপাতে হাঁপাতে দৌড়ে গিয়েছিলাম।'
        },
        {
          ja: '健康を維持するために、毎朝１５分ほどジョギングで走っています।',
          romaji: 'Kenkou o iji suru tame ni, maiasa juugofun hodo jogingu de hashitte imasu.',
          meaningEn: 'To maintain health, I jog/run for about 15 minutes every morning.',
          meaningBn: 'শরীর ফিট রাখার জন্য প্রতিদিন সকালে নিয়ম করে অন্তত ১৫ মিনিট জগিং বা দৌড়াদৌড়ি করি।'
        }
      ],
      tamagoTip: {
        en: 'The top part is soil/earth (土) and bottom is feet in motion (𠂡), representing kicking the earth with your feet to run fast.',
        bn: 'ওপরে মাটি (土) আর নিচে দ্রুত ছুটতে থাকা পা। মাটিতে পা দিয়ে জোরে ধাক্কা দিয়ে দ্রুত এগিয়ে যাওয়াই হলো দৌড়ানো।'
      }
    },
    {
      id: 'l27-koe',
      kanji: '声',
      emoji: '🗣️',
      strokeCount: 7,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'セイ', romaji: 'sei' }, { kana: 'ショウ', romaji: 'shou' }],
        kunyomi: [{ kana: 'こえ', romaji: 'koe' }]
      },
      meanings: {
        en: 'Voice, sound',
        bn: 'কণ্ঠস্বর, আওয়াজ, ডাক'
      },
      vocab: [
        { kanji: '声', kana: 'こえ', romaji: 'koe', meaningEn: 'voice', meaningBn: 'কণ্ঠস্বর', tag: 'N5' },
        { kanji: '大声', kana: 'おおごえ', romaji: 'oogoe', meaningEn: 'loud voice', meaningBn: 'চিৎকার বা বড় গলা', tag: 'N4' },
        { kanji: '話し声', kana: 'はなしごえ', romaji: 'hanashigoe', meaningEn: 'speaking voice', meaningBn: 'কথা বলার আওয়াজ', tag: 'N4' },
        { kanji: '声優', kana: 'せいゆう', romaji: 'seiyuu', meaningEn: 'voice actor/actress', meaningBn: 'কণ্ঠশিল্পী বা ডাবিং আর্টিস্ট (অ্যানিমে)', tag: 'N3' },
        { kanji: '歌声', kana: 'うたごえ', romaji: 'utagoe', meaningEn: 'singing voice', meaningBn: 'গানের গলা বা সুর', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'おばあちゃんは耳が少し遠いので、大きな声で話してあげてください।',
          romaji: 'Obaachan wa mimi ga sukoshi tooi node, ookina koe de hanashite age kudasai.',
          meaningEn: 'Grandmother is a bit hard of hearing, so please speak in a loud voice for her.',
          meaningBn: 'দাদি কানে একটু কম শোনেন, তাই উনার সাথে কথা বলার সময় একটু জোরে গলা ছেড়ে বলবেন।'
        },
        {
          ja: '将来、有名なアニメの声優になるために、専門学校で練習しています।',
          romaji: 'Shourai, yuumei na anime no seiyuu ni naru tame ni, senmon gakkou de renshuu shite imasu.',
          meaningEn: 'In the future, to become a famous anime voice actor, I am practicing at a vocational school.',
          meaningBn: 'ভবিষ্যতে নামকরা অ্যানিমের ডাবিং আর্টিস্ট বা ভয়েস ওভার শিল্পী হতে একটি ইনস্টিটিউটে অনুশীলন করছি।'
        }
      ],
      tamagoTip: {
        en: 'Represents a person hanging a chime stone (士) over an ear/mouth configuration, producing sweet, resonant sound waves.',
        bn: 'এটি একটি বাদ্যযন্ত্রে ঘা দিয়ে চমৎকার ধ্বনি বা কণ্ঠস্বর বের করা প্রকাশ করে।'
      }
    },
    {
      id: 'l27-omoi',
      kanji: '重',
      emoji: '⚖️',
      strokeCount: 9,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ジュウ', romaji: 'juu' }, { kana: 'チョウ', romaji: 'chou' }],
        kunyomi: [{ kana: 'おも.い', romaji: 'omo.i' }, { kana: 'かさ.ねる', romaji: 'kasa.neru' }]
      },
      meanings: {
        en: 'Heavy, weight, pile up, serious',
        bn: 'ভারী, ওজন, স্তূপ, গুরুতর'
      },
      vocab: [
        { kanji: '重い', kana: 'おもい', romaji: 'omoi', meaningEn: 'heavy, serious', meaningBn: 'ভারী বা গুরুতর', tag: 'N5' },
        { kanji: '体重', kana: 'たいじゅう', romaji: 'taijuu', meaningEn: 'body weight', meaningBn: 'শরীরের ওজন', tag: 'N4' },
        { kanji: '重ねる', kana: 'かさねる', romaji: 'kasaneru', meaningEn: 'to pile up, repeat', meaningBn: 'একটার ওপর আরেকটা চাপানো বা পুনরাবৃত্তি করা', tag: 'N3' },
        { kanji: '貴重な', kana: 'きちょうな', romaji: 'kichou na', meaningEn: 'precious, valuable', meaningBn: 'মূল্যবান বা দামি', tag: 'N3' },
        { kanji: '重大な', kana: 'じゅうだいな', romaji: 'juudai na', meaningEn: 'grave, critical', meaningBn: 'অত্যন্ত গুরুত্বপূর্ণ বা মারাত্মক', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'この旅行バッグは荷物を詰めすぎて、私一人では持ち上げられないほど重いです।',
          romaji: 'Kono ryokou baggu wa nimotsu o tsumesugite, watashi hitori de wa mochiagerarenai hodo omoi desu.',
          meaningEn: 'This travel bag has too many things packed; it’s so heavy that I can’t lift it by myself.',
          meaningBn: 'এই ট্রাভেল ব্যাগটিতে অতিরিক্ত জিনিসপত্র ভরার কারণে এটি এত ভারী হয়েছে যে আমি একলা তুলতে পারছি না।'
        },
        {
          ja: '最近少し太ったので、毎日お風呂に入る前に体重を計るようにしています।',
          romaji: 'Saikin sukoshi futotta node, mainichi ofuro ni hairu mae ni taijuu o hakaru you ni shite imasu.',
          meaningEn: 'Lately I put on a bit of weight, so I try to measure my body weight before taking a bath every day.',
          meaningBn: 'ইদানীং একটু মোটা হয়ে যাওয়ায় প্রতিদিন গোসল করার আগে ওজন মাপার অভ্যাস করেছি।'
        }
      ],
      tamagoTip: {
        en: 'A thousand (千) bags of grain stacked on the earth (土), representing a very heavy load.',
        bn: 'মাটির (土) ওপর হাজারটা (千) বস্তা স্তূপ করে রাখা হয়েছে, যা প্রচণ্ড ভারী ওজন নির্দেশ করে।'
      }
    },
    {
      id: 'l27-futoshi',
      kanji: '太',
      emoji: '🍞',
      strokeCount: 4,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'タイ', romaji: 'tai' }, { kana: 'タ', romaji: 'ta' }],
        kunyomi: [{ kana: 'ふと.い', romaji: 'futo.i' }, { kana: 'ふと.る', romaji: 'futo.ru' }]
      },
      meanings: {
        en: 'Fat, thick, plump, big',
        bn: 'মোটা, স্থূল, পুরু, বড়'
      },
      vocab: [
        { kanji: '太る', kana: 'ふとる', romaji: 'futoru', meaningEn: 'to gain weight, get fat', meaningBn: 'মোটা হওয়া বা ওজন বাড়া', tag: 'N5' },
        { kanji: '太い', kana: 'ふとい', romaji: 'futoi', meaningEn: 'thick, fat', meaningBn: 'পুরু বা মোটা (দড়ি, আঙুল)', tag: 'N5' },
        { kanji: '太平洋', kana: 'たいへいよう', romaji: 'taiheiyou', meaningEn: 'Pacific Ocean', meaningBn: 'প্রশান্ত মহাসাগর', tag: 'N3' },
        { kanji: '太鼓', kana: 'たいこ', romaji: 'taiko', meaningEn: 'traditional drum', meaningBn: 'জাপানি ঐতিহ্যবাহী বড় ঢাক বা ড্রাম', tag: 'N3' },
        { kanji: '極太', kana: 'ごくぶと', romaji: 'gokubuto', meaningEn: 'extra thick', meaningBn: 'অতিরিক্ত মোটা বা চওড়া (উどん বা রামেন নুডলস)', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'お菓子や炭酸飲料ばかり食べたり飲んだりしていると、すぐに太ってしまいますよ।',
          romaji: 'Okashi ya tansan inryou bakari tabetari nondari shite iru to, sugu ni futotte shimaimasu yo.',
          meaningEn: 'If you only eat sweets and drink carbonated drinks, you will gain weight quickly.',
          meaningBn: 'মিষ্টি খাবার আর কোমল পানীয় অতিরিক্ত খেলে শরীরের মেদ খুব দ্রুত বৃদ্ধি পাবে।'
        },
        {
          ja: 'このレストランの太いうどんは、コシがあってすごく美味しいです।',
          romaji: 'Kono resutoran no futoi udon wa, koshi ga atte sugoku oishii desu.',
          meaningEn: 'The thick Udon noodles of this restaurant are chewy and very delicious.',
          meaningBn: 'এই রেস্তোরাঁর মোটা উদন নুডলসটি খেতে দারুণ চিবানোযোগ্য ও সুস্বাদু।'
        }
      ],
      tamagoTip: {
        en: 'The kanji for big (大) with an extra dot (、) added at the bottom, indicating something even greater or thicker than big.',
        bn: 'বড় (大) এর নিচে একটি অতিরিক্ত ডট (、) যোগ করা হয়েছে। বড়র চেয়েও বড় বা স্থূল বোঝাতে এই কান্জি ব্যবহৃত হয়।'
      }
    },
    {
      id: 'l27-kei',
      kanji: '計',
      emoji: '⏱️',
      strokeCount: 9,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ケイ', romaji: 'kei' }],
        kunyomi: [{ kana: 'はか.る', romaji: 'haka.ru' }, { kana: 'はか.らう', romaji: 'haka.rau' }]
      },
      meanings: {
        en: 'Measure, plan, calculate, total',
        bn: 'পরিমাপ করা, পরিকল্পনা করা, হিসাব করা'
      },
      vocab: [
        { kanji: '時計', kana: 'とけい', romaji: 'tokei', meaningEn: 'watch, clock', meaningBn: 'ঘড়ি', tag: 'N5' },
        { kanji: '計画', kana: 'けいかく', romaji: 'keikaku', meaningEn: 'plan, schedule', meaningBn: 'পরিকল্পনা বা প্ল্যান', tag: 'N5' },
        { kanji: '計る', kana: 'はかる', romaji: 'hakaru', meaningEn: 'to measure, weigh', meaningBn: 'মাপ নেওয়া বা পরিমাপ করা', tag: 'N4' },
        { kanji: '合計', kana: 'ごうけい', romaji: 'goukei', meaningEn: 'total sum', meaningBn: 'মোট যোগফল', tag: 'N4' },
        { kanji: '家計簿', kana: 'かけいぼ', romaji: 'kakeibo', meaningEn: 'household account book', meaningBn: 'পারিবারিক খরচের হিসাব খাতা', tag: 'N3' },
        { kanji: '計算する', kana: 'けいさんする', romaji: 'keisan suru', meaningEn: 'to calculate', meaningBn: 'হিসাব বা গণনা করা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '来年の夏休みに日本に旅行する計画を、今から一生懸命考えています।',
          romaji: 'Rainen no natsuyasumi ni Nihon ni ryokou suru keikaku o, ima kara isshoukenmei kangaete imasu.',
          meaningEn: 'I am enthusiastically thinking about the plan to travel to Japan next summer vacation.',
          meaningBn: 'আগামী বছরের গ্রীষ্মের ছুটিতে জাপানে ভ্রমণের পরিকল্পনাটি এখন থেকেই দারুণ আগ্রহ নিয়ে সাজাচ্ছি।'
        },
        {
          ja: 'お会計のレジで合計金額を確認してから、クレジットカードで支払いました।',
          romaji: 'Okaikei no reji de goukei kinkaku o kakunin shite kara, kurejitto kaado de shiharaimashita.',
          meaningEn: 'After checking the total amount at the payment register, I paid with a credit card.',
          meaningBn: 'কাউন্টারে মোট বিল চেক করে নিয়ে আমি ক্রেডিট কার্ড দিয়ে টাকা পরিশোধ করেছি।'
        }
      ],
      tamagoTip: {
        en: 'The left side is words/speak (言) and the right side is ten (十): using logical words to count up to ten, representing planning or calculating.',
        bn: 'বামে কথা বলা বা গণনা (言) আর ডানে সংখ্যা দশ (十)। মুখ দিয়ে এক থেকে দশ পর্যন্ত গণনা করা বা প্ল্যান করা।'
      }
    },
    {
      id: 'l27-fu',
      kanji: '不',
      emoji: '❌',
      strokeCount: 4,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'フ', romaji: 'fu' }, { kana: 'ブ', romaji: 'bu' }],
        kunyomi: []
      },
      meanings: {
        en: 'Non-, negative, bad, clumsy',
        bn: 'অ-, না, অভাব, অনুপযুক্ত'
      },
      vocab: [
        { kanji: '不便な', kana: 'ふべんな', romaji: 'fuben na', meaningEn: 'inconvenient', meaningBn: 'অসুবিধাজনক', tag: 'N5' },
        { kanji: '不安な', kana: 'ふあんな', romaji: 'fuan na', meaningEn: 'anxious, worried', meaningBn: 'উদ্বিগ্ন বা চিন্তিত', tag: 'N4' },
        { kanji: '不足', kana: 'ふそく', romaji: 'fusoku', meaningEn: 'shortage, lack', meaningBn: 'ঘাটতি বা অভাব', tag: 'N4' },
        { kanji: '不思議な', kana: 'ふしぎな', romaji: 'fushigi na', meaningEn: 'mysterious, strange', meaningBn: 'অদ্ভুত বা অলৌকিক', tag: 'N4' },
        { kanji: '不満な', kana: 'ふまんな', romaji: 'fuman na', meaningEn: 'dissatisfied', meaningBn: 'অসন্তুষ্ট', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '私の田舎は電車が少ないので移動がとても不便ですが、自然は綺麗です।',
          romaji: 'Watashi no inaka wa densha ga sukunai node idou ga totemo fuben desu ga, shizen wa kirei desu.',
          meaningEn: 'Because there are few trains in my countryside, traveling is very inconvenient, but the nature is beautiful.',
          meaningBn: 'আমার গ্রামের বাড়িতে ট্রেন অনেক কম চলায় চলাফেরা করা কষ্টকর কিন্তু ওখানকার প্রকৃতি দারুণ মনোরম।'
        },
        {
          ja: '初めての仕事でミスをしないか、前日の夜からとても不安でした।',
          romaji: 'Hajimete no shigoto de misu o shinai ka, zenjitsu no yoru kara totemo fuan deshita.',
          meaningEn: 'I was very anxious since the night before about whether I would make a mistake on my first job.',
          meaningBn: 'প্রথম কর্মদিবসে কোনো ভুল করে ফেলি কি না এই নিয়ে আগের দিন রাত থেকেই খুব টেনশনে ছিলাম।'
        }
      ],
      tamagoTip: {
        en: 'A plant bud covered by a line above it, preventing it from growing, symbolizing negativity or "not".',
        bn: 'মাটির ওপর গজাতে থাকা চারা গাছের মাথায় পাথর চাপা দেওয়ার চিত্র, যা বৃদ্ধিকে বাধাগ্রস্ত করে এবং নেতিবাচক অবস্থা প্রকাশ করে।'
      }
    },
    {
      id: 'l27-itai',
      kanji: '痛',
      emoji: '🤕',
      strokeCount: 12,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ツウ', romaji: 'tsuu' }],
        kunyomi: [{ kana: 'いた.い', romaji: 'ita.i' }, { kana: 'いた.む', romaji: 'ita.mu' }]
      },
      meanings: {
        en: 'Pain, hurt, ache, damage',
        bn: 'ব্যথা, যাতনা, কষ্ট পাওয়া'
      },
      vocab: [
        { kanji: '痛い', kana: 'いたい', romaji: 'itai', meaningEn: 'painful, sore', meaningBn: 'ব্যথা বা বেদনাদায়ক', tag: 'N5' },
        { kanji: '頭痛', kana: 'ずつう', romaji: 'zutsuu', meaningEn: 'headache', meaningBn: 'মাথাব্যথা', tag: 'N4' },
        { kanji: '痛む', kana: 'いたむ', romaji: 'itamu', meaningEn: 'to ache, hurt', meaningBn: 'ব্যথা করা (ক্রিয়াপদ)', tag: 'N4' },
        { kanji: '腹痛', kana: 'ふくつう', romaji: 'fukutsuu', meaningEn: 'stomachache', meaningBn: 'পেটব্যথা', tag: 'N3' },
        { kanji: '痛み止め', kana: 'いたみどめ', romaji: 'itamidome', meaningEn: 'painkiller', meaningBn: 'ব্যথানাশক ওষুধ', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '冷たいアイスクリームを急いで食べたら、急にお腹が痛くなりました।',
          romaji: 'Tsumetai aisukuriimu o isoide tabetara, kyuu ni onaka ga itaku narimashita.',
          meaningEn: 'When I ate cold ice cream quickly, my stomach suddenly started hurting.',
          meaningBn: 'তাড়াহুড়ো করে অতিরিক্ত ঠান্ডা আইসক্রিম খাওয়ার কারণে হঠাৎ আমার পেটব্যথা শুরু হয়ে গেল।'
        },
        {
          ja: '歯が我慢できないほど痛いので、すぐに近くの歯医者の予約を取りました।',
          romaji: 'Ha ga gaman dekinai hodo itai node, sugu ni chikaku no haisha no yoyaku o torimashita.',
          meaningEn: 'My tooth hurts so much that I cannot bear it, so I immediately booked an appointment with a nearby dentist.',
          meaningBn: 'দাঁতের ব্যথাটা একদম সহ্য করার মতো নয়, তাই সাথে সাথেই পাশের ডেন্টিস্টের অ্যাপয়েন্টমেন্ট বুক করেছি।'
        }
      ],
      tamagoTip: {
        en: 'The sickness/ailment radical (疒) enclosing a symbol representing passing through or blockages (マ + 用), representing blocked energy causing sharp pain.',
        bn: 'অসুস্থতার সাইন (疒) এর ভেতর যাতনা প্রকাশের অবয়ব, যা তীব্র ব্যথা বা কোনো অঙ্গে অসুস্থতার আক্রমণকে ইঙ্গিত করে।'
      }
    },

    // --- Read Only (読める: 健康, 両～, 肩, 体脂肪) ---
    {
      id: 'l27-kenkou',
      kanji: '健康',
      emoji: '🥗',
      strokeCount: 11 + 11, // 健 + 康
      jlpt: 'N4',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'ケンコウ', romaji: 'kenkou' }],
        kunyomi: []
      },
      meanings: {
        en: 'Health, wellness',
        bn: 'স্বাস্থ্য, সুস্বাস্থ্য'
      },
      vocab: [
        { kanji: '健康', kana: 'けんこう', romaji: 'kenkou', meaningEn: 'health', meaningBn: 'স্বাস্থ্য', tag: 'N4' },
        { kanji: '不健康な', kana: 'ふけんこうな', romaji: 'fukenkou na', meaningEn: 'unhealthy', meaningBn: 'অস্বাস্থ্যকর', tag: 'N3' },
        { kanji: '健康保険', kana: 'けんこうほけん', romaji: 'kenkou hoken', meaningEn: 'health insurance', meaningBn: 'হেলথ ইন্স্যুরেন্স বা স্বাস্থ্য বীমা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '毎日十分に睡眠をとり、栄養バランスの良い食事をするのが健康に一番大切です।',
          romaji: 'Mainichi juubun ni suimin o tori, eiyou baransu no yoi shokuji o suru no ga kenkou ni ichiban taisetsu desu.',
          meaningEn: 'Getting enough sleep every day and eating a well-balanced diet is the most important thing for health.',
          meaningBn: 'নিয়ম করে পর্যাপ্ত ঘুমানো এবং পুষ্টিগুণে সমৃদ্ধ ব্যালেন্সড ডায়েট মেনে খাবার খাওয়াই হলো সুস্বাস্থ্যের মূল চাবিকাঠি।'
        }
      ],
      tamagoTip: {
        en: '健 (healthy/robust person) + 康 (peace/ease) = A robust state of body and ease of mind.',
        bn: '健 (সুস্থ ও বলিষ্ঠ শরীর) + 康 (শান্তি ও আরাম) = শারীরিক সুস্থতা এবং মানসিক শান্তির চমৎকার ভারসাম্য।'
      }
    },
    {
      id: 'l27-ryou',
      kanji: '両～',
      emoji: '🙌',
      strokeCount: 6,
      jlpt: 'N3',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'リョウ', romaji: 'ryou' }],
        kunyomi: []
      },
      meanings: {
        en: 'Both, counter for vehicles',
        bn: 'উভয়, দুটিই, ট্রেনের কামরা গণনার একক'
      },
      vocab: [
        { kanji: '両親', kana: 'りょうしん', romaji: 'ryoushin', meaningEn: 'parents (both parents)', meaningBn: 'বাবা-মা (উভয় অভিভাবক)', tag: 'N5' },
        { kanji: '両手', kana: 'りょうて', romaji: 'ryoute', meaningEn: 'both hands', meaningBn: 'দুটি হাত', tag: 'N4' },
        { kanji: '両方', kana: 'りょうほう', romaji: 'ryouhou', meaningEn: 'both sides, both ways', meaningBn: 'উভয় পক্ষ বা দুদিকই', tag: 'N4' }
      ],
      sentences: [
        {
          ja: '日本で一人暮らしをしていて寂しいときは、バングラデシュにいる両親の声を思い出します।',
          romaji: 'Nihon de hitorigurashi o shiteite sabishii toki wa, Banguradeshu ni iru ryoushin no koe o omoidashimasu.',
          meaningEn: 'When I feel lonely living alone in Japan, I remember the voices of my parents in Bangladesh.',
          meaningBn: 'জাপানে একা একা থাকার সময়ে যখন খুব একাকী লাগে, তখন বাংলাদেশে থাকা বাবা-মার গলার আওয়াজ মনে করি।'
        }
      ],
      tamagoTip: {
        en: 'A balanced scale holding two items equally, representing "both" or a pair.',
        bn: 'একটি দাঁড়িপাল্লার দুই পাশে সমান দুটি জিনিস ঝুলিয়ে রাখার অবয়ব, যা উভয় দিক বা জোড়া প্রকাশ করে।'
      }
    },
    {
      id: 'l27-kata',
      kanji: '肩',
      emoji: '💪',
      strokeCount: 8,
      jlpt: 'N3',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'ケン', romaji: 'ken' }],
        kunyomi: [{ kana: 'かた', romaji: 'kata' }]
      },
      meanings: {
        en: 'Shoulder',
        bn: 'কাঁধ'
      },
      vocab: [
        { kanji: '肩', kana: 'かた', romaji: 'kata', meaningEn: 'shoulder', meaningBn: 'কাঁধ', tag: 'N3' },
        { kanji: '肩こり', kana: 'かたこり', romaji: 'katakori', meaningEn: 'stiff shoulders', meaningBn: 'কাঁধ শক্ত হয়ে যাওয়া বা ব্যথা হওয়া', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '重い仕事用のカバンを毎日右側の肩にかけるせいで、右の肩だけが痛みます।',
          romaji: 'Omoi shigotoyou no kaban o mainichi migigawa no kata ni kakeru sei de, migi no kata dake ga itamimasu.',
          meaningEn: 'Because I hang a heavy work bag on my right shoulder every day, only my right shoulder hurts.',
          meaningBn: 'অফিসের ভারী ব্যাগটি প্রতিদিন ডান কাঁধে ঝোলানোর কারণে আমার শুধু ডানদিকের কাঁধেই অসম্ভব ব্যথা করে।'
        }
      ],
      tamagoTip: {
        en: 'Top is door/gate (戸) and bottom is body part/flesh (月), representing the shoulder joints framing the upper torso like doors.',
        bn: 'ওপরে দরজার ফ্রেম (戸) আর নিচে মাংসের অংশ (月) - যা দরজার মতো ঝুলে থাকা আমাদের দুই পাশের কাঁধের জয়েন্ট নির্দেশ করে।'
      }
    },
    {
      id: 'l27-taishibou',
      kanji: '体脂肪',
      emoji: '🩸',
      strokeCount: 7 + 10 + 12, // 体 + 脂 + 肪
      jlpt: 'N3',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'タイシボウ', romaji: 'taishibou' }],
        kunyomi: []
      },
      meanings: {
        en: 'Body fat',
        bn: 'শরীরের চর্বি বা ফ্যাট'
      },
      vocab: [
        { kanji: '体脂肪', kana: 'たいしぼう', romaji: 'taishibou', meaningEn: 'body fat percentage', meaningBn: 'শরীরের চর্বির শতকরা হার', tag: 'N3' },
        { kanji: '脂肪', kana: 'しぼう', romaji: 'shibou', meaningEn: 'fat, grease', meaningBn: 'চর্বি', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '最新の体重計を使って、自分の体脂肪もしっかりチェックして記録しています।',
          romaji: 'Saishin no taijuukei o tsukatte, jibun no taishibou mo shikkari chekku shite kiroku shite imasu.',
          meaningEn: 'Using the latest weight scale, I also check and record my body fat carefully.',
          meaningBn: 'নতুন প্রযুক্তির একটি স্কেল দিয়ে আমি শুধু ওজনই নয়, শরীরের মেদ বা চর্বির পার্সেন্টেজও নিখুঁতভাবে ট্র‍্যাক করি।'
        }
      ],
      tamagoTip: {
        en: '体 (body) + 脂 (animal fat) + 肪 (grease/fat) = The fat tissues stored within the body.',
        bn: '体 (শরীর) + 脂 (চর্বি) + 肪 (মেদ) = শরীরের চামড়ার নিচে জমে থাকা অতিরিক্ত ফ্যাট বা ক্ষতিকর মেদ।'
      }
    },

    // --- Visual Recognition (見て、分かる: 秒) ---
    {
      id: 'l27-byou',
      kanji: '秒',
      emoji: '⏱️',
      strokeCount: 9,
      jlpt: 'N4',
      category: 'visual_recognition',
      readings: {
        onyomi: [{ kana: 'ビョウ', romaji: 'byou' }],
        kunyomi: []
      },
      meanings: {
        en: 'Second (unit of time)',
        bn: 'সেকেন্ড (সময় পরিমাপের ক্ষুদ্র একক)'
      },
      vocab: [
        { kanji: '秒', kana: 'びょう', romaji: 'byou', meaningEn: 'second', meaningBn: 'সেকেন্ড', tag: 'N4' },
        { kanji: '毎秒', kana: 'まいびょう', romaji: 'maibyou', meaningEn: 'every second', meaningBn: 'প্রতি সেকেন্ডে', tag: 'N3' },
        { kanji: '数秒', kana: 'すうびょう', romaji: 'suubyou', meaningEn: 'few seconds', meaningBn: 'কয়েক সেকেন্ড', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'スプリンターが100メートルをわずか10秒以下で走りきりました।',
          romaji: 'Supurintaa ga hyaku meetoru o wazuka juubyou ika de hashirikirimashita.',
          meaningEn: 'The sprinter ran the 100 meters in less than just 10 seconds.',
          meaningBn: 'দৌড়বিদটি ১০০ মিটার দূরত্ব অবিশ্বাস্যভাবে ১০ সেকেন্ডেরও কম সময়ে অতিক্রম করে ইতিহাস গড়েছে।'
        }
      ],
      tamagoTip: {
        en: 'Grain (禾) on the left and extremely small/minor (少) on the right: a grain-sized tiny division of time, which is a second.',
        bn: 'বামে ধান গাছ বা শস্য (禾) আর ডানে অত্যন্ত ক্ষুদ্র বা কম (少)। শস্যের মতো অতি ক্ষুদ্র সময় পরিমাপ করার ভাগ বা সেকেন্ড।'
      }
    }
  ]
};
