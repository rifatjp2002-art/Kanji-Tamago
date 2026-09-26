import { Lesson } from '../types/kanji';

export const lesson22: Lesson = {
  id: 22,
  number: 22,
  titleJa: '料理を作ろう！',
  titleRomaji: 'Ryouri o tsukurou!',
  titleBn: 'চলুন রান্না করি! (Let\'s Cook - Food & Kitchen)',
  titleEn: 'Let\'s cook! (Food & Kitchen)',
  descriptionBn: 'জাপানি খাবার রান্না, স্বাদ পরীক্ষা, টেবিল পরিষ্কার এবং রান্নার উপকরণের প্রয়োজনীয় কান্জি (牛, 魚, 飯, 菜, 味, 色, 茶, 少, 洗, 弱, 暗)।',
  descriptionEn: 'Essential Kanji for cooking Japanese food, adjusting heat, ingredients, flavors, and kitchen chores.',
  kanjiList: [
    // --- Main Kanji (書ける: 牛, 魚, 飯, 菜, 味, 色, 茶, 少, 洗, 弱, 暗) ---
    {
      id: 'l22-ushi',
      kanji: '牛',
      emoji: '🐄',
      strokeCount: 4,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ギュウ', romaji: 'gyuu' }],
        kunyomi: [{ kana: 'うし', romaji: 'ushi' }]
      },
      meanings: {
        en: 'Cow, beef, bull',
        bn: 'গরু, গরুর মাংস'
      },
      vocab: [
        { kanji: '牛', kana: 'うし', romaji: 'ushi', meaningEn: 'cow', meaningBn: 'গরু', tag: 'N5' },
        { kanji: '牛肉', kana: 'ぎゅうにく', romaji: 'gyuuniku', meaningEn: 'beef', meaningBn: 'গরুর মাংস', tag: 'N5' },
        { kanji: '牛乳', kana: 'ぎゅうにゅう', romaji: 'gyuunyuu', meaningEn: 'milk', meaningBn: 'গরুর দুধ', tag: 'N5' },
        { kanji: '子牛', kana: 'こうし', romaji: 'koushi', meaningEn: 'calf', meaningBn: 'বাছুর', tag: 'N3' },
        { kanji: '和牛', kana: 'わぎゅう', romaji: 'wagyuu', meaningEn: 'Wagyu (premium Japanese beef)', meaningBn: 'ওয়াগিউ (প্রিমিয়াম জাপানি গরুর মাংস)', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'スーパーで今夜のすき焼きのために牛肉を買いました।',
          romaji: 'Suupaa de konya no sukiyaki no tame ni gyuuniku o kaimashita.',
          meaningEn: 'I bought beef at the supermarket for tonight’s sukiyaki.',
          meaningBn: 'আজ রাতের সুকিয়াকি (জাপানি রান্নার ডিশ) তৈরির জন্য সুপারমার্কেট থেকে গরুর মাংস কিনেছি।'
        },
        {
          ja: '私は毎朝、健康のために冷たい牛乳を飲みます।',
          romaji: 'Watashi wa maiasa, kenkou no tame ni tsumetai gyuunyuu o nomimasu.',
          meaningEn: 'I drink cold milk every morning for my health.',
          meaningBn: 'স্বাস্থ্যের জন্য আমি প্রতিদিন সকালে ঠাণ্ডা দুধ পান করি।'
        }
      ]
    },
    {
      id: 'l22-sakana',
      kanji: '魚',
      emoji: '🐟',
      strokeCount: 11,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ギョ', romaji: 'gyo' }],
        kunyomi: [{ kana: 'さかな', romaji: 'sakana' }, { kana: 'うお', romaji: 'uo' }]
      },
      meanings: {
        en: 'Fish',
        bn: 'মাছ'
      },
      vocab: [
        { kanji: '魚', kana: 'さかな', romaji: 'sakana', meaningEn: 'fish', meaningBn: 'মাছ', tag: 'N5' },
        { kanji: '魚屋', kana: 'さかなや', romaji: 'sakanaya', meaningEn: 'fish store', meaningBn: 'মাছের দোকান', tag: 'N5' },
        { kanji: '金魚', kana: 'きんぎょ', romaji: 'kingyo', meaningEn: 'goldfish', meaningBn: 'গোল্ডফিশ', tag: 'N4' },
        { kanji: '焼き魚', kana: 'やきざかな', romaji: 'yakizakana', meaningEn: 'grilled fish', meaningBn: 'পোড়ানো বা গ্রিল করা মাছ', tag: 'N4' },
        { kanji: '人魚', kana: 'にんぎょ', romaji: 'ningyo', meaningEn: 'mermaid', meaningBn: 'মৎস্যকন্যা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '日本人は生で新鮮な魚を寿司や刺身としてよく食べます।',
          romaji: 'Nihonjin wa nama de shinsen na sakana o sushi ya sashimi to shite yoku tabemasu.',
          meaningEn: 'Japanese people often eat fresh raw fish as sushi or sashimi.',
          meaningBn: 'জাপানিরা কাঁচা সতেজ মাছ সুশি বা সাশিমি হিসেবে বেশ পছন্দ করে খায়।'
        },
        {
          ja: '今夜のおかずは香ばしい焼き魚です।',
          romaji: 'Konya no okazazu wa koubashii yakizakana desu.',
          meaningEn: 'Tonight’s side dish is aromatic grilled fish.',
          meaningBn: 'আজ রাতের তরকারি হলো সুগন্ধি গ্রিল করা মাছ।'
        }
      ]
    },
    {
      id: 'l22-meshi',
      kanji: '飯',
      emoji: '🍚',
      strokeCount: 12,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ハン', romaji: 'han' }],
        kunyomi: [{ kana: 'めし', romaji: 'meshi' }]
      },
      meanings: {
        en: 'Meal, boiled rice',
        bn: 'ভাত, খাবার'
      },
      vocab: [
        { kanji: 'ご飯', kana: 'ごはん', romaji: 'gohan', meaningEn: 'rice, meal', meaningBn: 'ভাত বা খাবার', tag: 'N5' },
        { kanji: '朝御飯', kana: 'あさごはん', romaji: 'asagohan', meaningEn: 'breakfast', meaningBn: 'সকালের নাস্তা', tag: 'N5' },
        { kanji: '昼ご飯', kana: 'ひるごはん', romaji: 'hirugohan', meaningEn: 'lunch', meaningBn: 'দুপুরের খাবার', tag: 'N5' },
        { kanji: '晩ご飯', kana: 'ばんごはん', romaji: 'bangohan', meaningEn: 'dinner', meaningBn: 'রাতের খাবার', tag: 'N5' },
        { kanji: '炊飯器', kana: 'すいはんき', romaji: 'suihankii', meaningEn: 'rice cooker', meaningBn: 'রাইস কুকার', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '毎日、新しい炊飯器で美味しいご飯を炊いています।',
          romaji: 'Mainichi, atarashii suihanki de oishii gohan o taite imasu.',
          meaningEn: 'Every day, I cook delicious rice in the new rice cooker.',
          meaningBn: 'প্রতিদিন নতুন রাইস কুকারে চমৎকার ঝরঝরে ভাত রান্না করি।'
        },
        {
          ja: '家族全員が揃って晩ご飯を食べる時間はとても大切です।',
          romaji: 'Kazoku zenin ga sorotte bangohan o taberu jikan wa totemo taisetsu desu.',
          meaningEn: 'The time when the whole family gathers to eat dinner is very important.',
          meaningBn: 'পরিবারের সবাই মিলে একসাথে রাতের খাবার খাওয়ার সময়টি অত্যন্ত মূল্যবান।'
        }
      ]
    },
    {
      id: 'l22-sai',
      kanji: '菜',
      emoji: '🥗',
      strokeCount: 11,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'サイ', romaji: 'sai' }],
        kunyomi: [{ kana: 'な', romaji: 'na' }]
      },
      meanings: {
        en: 'Vegetable, side dish, greens',
        bn: 'সবজি, তরকারি'
      },
      vocab: [
        { kanji: '野菜', kana: 'やさい', romaji: 'yasai', meaningEn: 'vegetable', meaningBn: 'শাকসবজি', tag: 'N5' },
        { kanji: '菜食主義者', kana: 'さいしょくしゅぎしゃ', romaji: 'saishokushugisha', meaningEn: 'vegetarian', meaningBn: 'নিরামিষভোজী', tag: 'N3' },
        { kanji: '白菜', kana: 'はくさい', romaji: 'hakusai', meaningEn: 'Napa cabbage', meaningBn: 'চীনা বাঁধাকপি', tag: 'N3' },
        { kanji: '山菜', kana: 'さんさい', romaji: 'sansai', meaningEn: 'wild edible plants', meaningBn: 'পাহাড় বা বনের ভোজ্য উদ্ভিদ', tag: 'N3' },
        { kanji: '惣菜', kana: 'そうざい', romaji: 'souzai', meaningEn: 'prepared side dish', meaningBn: 'তৈরি তরকারি', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '健康的な生活のために、毎日たくさんの新鮮な野菜を食べます।',
          romaji: 'Kenkou teki na seikatsu no tame ni, mainichi takusan no shinsen na yasai o tabemasu.',
          meaningEn: 'For a healthy life, I eat lots of fresh vegetables every day.',
          meaningBn: 'স্বাস্থ্যকর জীবনের জন্য আমি প্রতিদিন প্রচুর পরিমাণে তাজা শাকসবজি খাই।'
        },
        {
          ja: 'スーパーのお惣菜コーナーで美味しそうなコロッケを買いました।',
          romaji: 'Suupaa no osouzai koonaa de oishisou na korokke o kaimashita.',
          meaningEn: 'I bought delicious-looking croquettes at the supermarket side-dish corner.',
          meaningBn: 'সুপারমার্কেটের তৈরি খাবারের কাউন্টার থেকে লোভনীয় ক্রকেট (এক ধরণের স্ন্যাক্স) কিনেছি।'
        }
      ]
    },
    {
      id: 'l22-aji',
      kanji: '味',
      emoji: '👅',
      strokeCount: 8,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ミ', romaji: 'mi' }],
        kunyomi: [{ kana: 'あじ', romaji: 'aji' }, { kana: 'あじ.わう', romaji: 'aji.wau' }]
      },
      meanings: {
        en: 'Taste, flavor',
        bn: 'স্বাদ, ফ্লেভার'
      },
      vocab: [
        { kanji: '味', kana: 'あじ', romaji: 'aji', meaningEn: 'taste, flavor', meaningBn: 'স্বাদ', tag: 'N5' },
        { kanji: '意味', kana: 'いみ', romaji: 'imi', meaningEn: 'meaning', meaningBn: 'অর্থ', tag: 'N5' },
        { kanji: '趣味', kana: 'しゅみ', romaji: 'shumi', meaningEn: 'hobby', meaningBn: 'শখ', tag: 'N5' },
        { kanji: '調味料', kana: 'ちょうみりょう', romaji: 'choumiryou', meaningEn: 'seasoning, condiment', meaningBn: 'মশলাপাতি', tag: 'N3' },
        { kanji: '味噌', kana: 'みそ', romaji: 'miso', meaningEn: 'fermented soybean paste', meaningBn: 'মিসো (জাপানি সয়াবিন পেস্ট)', tag: 'N4' }
      ],
      sentences: [
        {
          ja: '母が作ったスープはとても優しい味がします।',
          romaji: 'Haha ga tsukutta suupu wa totemo yasashii aji ga shimasu.',
          meaningEn: 'The soup made by my mother has a very gentle taste.',
          meaningBn: 'মায়ের হাতের তৈরি স্যুপটির স্বাদ খুবই নরম ও চমৎকার।'
        },
        {
          ja: '料理に醤油や塩などの調味料を入れて味を調えます।',
          romaji: 'Ryouri ni shouyu ya shio nado no choumiryou o irete aji o totonoemasu.',
          meaningEn: 'I add seasonings like soy sauce and salt to the dish to adjust the taste.',
          meaningBn: 'রান্নায় সয়া সস ও লবণের মতো মশলা দিয়ে স্বাদ ঠিক করছি।'
        }
      ]
    },
    {
      id: 'l22-iro',
      kanji: '色',
      emoji: '🎨',
      strokeCount: 6,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ショク', romaji: 'shoku' }, { kana: 'シキ', romaji: 'shiki' }],
        kunyomi: [{ kana: 'いろ', romaji: 'iro' }]
      },
      meanings: {
        en: 'Color, feature',
        bn: 'রঙ, বৈশিষ্ট্য'
      },
      vocab: [
        { kanji: '色', kana: 'いろ', romaji: 'iro', meaningEn: 'color', meaningBn: 'রঙ', tag: 'N5' },
        { kanji: '色々', kana: 'いろいろ', romaji: 'iroiro', meaningEn: 'various', meaningBn: 'বিভিন্ন রকম বা নানা প্রকার', tag: 'N5' },
        { kanji: '茶色', kana: 'ちゃいろ', romaji: 'chairo', meaningEn: 'brown', meaningBn: 'বাদামী রঙ', tag: 'N5' },
        { kanji: '景色', kana: 'けしき', romaji: 'keshiki', meaningEn: 'scenery, landscape', meaningBn: 'দৃশ্য বা মনোরম দৃশ্য', tag: 'N4' },
        { kanji: '特色', kana: 'とくしょく', romaji: 'tokushoku', meaningEn: 'characteristic, distinct feature', meaningBn: 'বিশেষত্ব', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'お弁当のなかに、色とりどりの野菜を入れるときれいに見えます।',
          romaji: 'Obentou no naka ni, irotoridori no yasai o ireru to kirei ni miemasu.',
          meaningEn: 'When you put colorful vegetables in the bento, it looks beautiful.',
          meaningBn: 'টিফিন বক্সে রঙিন শাকসবজি সাজিয়ে দিলে তা দেখতে দারুণ সুন্দর লাগে।'
        },
        {
          ja: '秋になると、山の木の葉の色が赤や黄色に変わります।',
          romaji: 'Aki ni naru to, yama no ki no ha no iro ga aka ya kiiro ni kawarimasu.',
          meaningEn: 'When autumn comes, the color of mountain leaves changes to red and yellow.',
          meaningBn: 'শরৎকাল এলে পাহাড়ি গাছের পাতার রঙ লাল ও হলুদে রূপ নেয়।'
        }
      ]
    },
    {
      id: 'l22-cha',
      kanji: '茶',
      emoji: '🍵',
      strokeCount: 9,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'チャ', romaji: 'cha' }, { kana: 'サ', romaji: 'sa' }],
        kunyomi: []
      },
      meanings: {
        en: 'Tea, brown',
        bn: 'চা, বাদামী'
      },
      vocab: [
        { kanji: 'お茶', kana: 'おちゃ', romaji: 'ocha', meaningEn: 'green tea, tea', meaningBn: 'সবুজ চা বা লিকার চা', tag: 'N5' },
        { kanji: '紅茶', kana: 'こうちゃ', romaji: 'koucha', meaningEn: 'black tea', meaningBn: 'ব্ল্যাক টি বা লাল চা', tag: 'N4' },
        { kanji: '喫茶店', kana: 'きっさてん', romaji: 'kissaten', meaningEn: 'coffee shop, cafe', meaningBn: 'কফি শপ বা চায়ের দোকান', tag: 'N4' },
        { kanji: '茶道', kana: 'さどう', romaji: 'sadou', meaningEn: 'tea ceremony', meaningBn: 'ঐতিহ্যবাহী জাপানি চা চক্র অনুষ্ঠান', tag: 'N3' },
        { kanji: '抹茶', kana: 'まっちゃ', romaji: 'maccha', meaningEn: 'powdered green tea', meaningBn: 'মাচ্চা চা বা গুঁড়ো সবুজ চা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '食後に温かいお茶を飲んでリラックスするのが毎日の習慣です।',
          romaji: 'Shokugo ni atatakai ocha o nonde rirakkusu suru no ga mainichi no shuukan desu.',
          meaningEn: 'Relaxing by drinking warm green tea after meals is my daily habit.',
          meaningBn: 'খাবারের পর হালকা গরম ওচা পান করে বিশ্রাম নেওয়া আমার প্রতিদিনের অভ্যাস।'
        },
        {
          ja: '静かな喫茶店でお気に入りの本をゆっくりと読みました।',
          romaji: 'Shizuka na kissaten de okiniiri no hon o yukkuri to yomimashita.',
          meaningEn: 'I slowly read my favorite book in a quiet cafe.',
          meaningBn: 'একটি শান্ত কফি শপে বসে প্রিয় বইটি মনের সুখে পড়েছি।'
        }
      ]
    },
    {
      id: 'l22-suku',
      kanji: '少',
      emoji: '🥄',
      strokeCount: 4,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ショウ', romaji: 'shou' }],
        kunyomi: [{ kana: 'すく.ない', romaji: 'suku.nai' }, { kana: 'すこ.し', romaji: 'suko.shi' }]
      },
      meanings: {
        en: 'Few, little, a bit',
        bn: 'অল্প, সামান্য, কম'
      },
      vocab: [
        { kanji: '少し', kana: 'すこし', romaji: 'sukoshi', meaningEn: 'a little', meaningBn: 'সামান্য বা একটু', tag: 'N5' },
        { kanji: '少ない', kana: 'すくない', romaji: 'sukunai', meaningEn: 'few, scarce', meaningBn: 'অল্প বা খুব কম', tag: 'N5' },
        { kanji: '少々', kana: 'しょうしょう', romaji: 'shoushou', meaningEn: 'just a minute, a pinch', meaningBn: 'এক চিমটি বা সামান্য সময়', tag: 'N3' },
        { kanji: '少年', kana: 'しょうねん', romaji: 'shounen', meaningEn: 'boy, juvenile', meaningBn: 'কিশোর', tag: 'N3' },
        { kanji: '少女', kana: 'しょうじょ', romaji: 'shoujo', meaningEn: 'girl, maiden', meaningBn: 'কিশোরী', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '塩を少々入れてスープの味を整えてください।',
          romaji: 'Shio o shoushou irete suupu no aji o totonoete kudasai.',
          meaningEn: 'Add a pinch of salt to adjust the taste of the soup.',
          meaningBn: 'স্যুপে এক চিমটি লবণ দিয়ে স্বাদটি ঠিক করে নিন।'
        },
        {
          ja: 'このレストランは、お肉の量が少なくて少し残念でした।',
          romaji: 'Kono resutoran wa, oniku no ryou ga sukunakute sukoshi zannen deshita.',
          meaningEn: 'In this restaurant, the amount of meat was small and a bit disappointing.',
          meaningBn: 'এই রেস্তোরাঁয় মাংসের পরিমাণ খুব কম থাকায় একটু আফসোস লাগল।'
        }
      ]
    },
    {
      id: 'l22-arau',
      kanji: '洗',
      emoji: '🧼',
      strokeCount: 9,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'セン', romaji: 'sen' }],
        kunyomi: [{ kana: 'あら.う', romaji: 'ara.u' }]
      },
      meanings: {
        en: 'Wash, inquire, probe',
        bn: 'ধোয়া, পরিষ্কার করা'
      },
      vocab: [
        { kanji: '洗う', kana: 'あらう', romaji: 'arau', meaningEn: 'to wash', meaningBn: 'ধোয়া', tag: 'N5' },
        { kanji: 'お手洗い', kana: 'おてあらい', romaji: 'otearai', meaningEn: 'restroom, toilet', meaningBn: 'টয়লেট বা ওয়াশরুম', tag: 'N5' },
        { kanji: '洗濯する', kana: 'せんたくする', romaji: 'sentaku suru', meaningEn: 'to wash clothes', meaningBn: 'কাপড় কাঁচা', tag: 'N5' },
        { kanji: '洗剤', kana: 'せんざい', romaji: 'senzai', meaningEn: 'detergent', meaningBn: 'ডিটারজেন্ট বা সাবান গুঁড়ো', tag: 'N3' },
        { kanji: '洗面所', kana: 'せんめんじょ', romaji: 'senmenjo', meaningEn: 'washroom, basin area', meaningBn: 'মুখ ধোয়ার স্থান', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'ご飯を食べる前に、石鹸で手をきれいに洗います।',
          romaji: 'Gohan o taberu mae ni, sekken de te o kirei ni araimasu.',
          meaningEn: 'Before eating meals, I wash my hands clean with soap.',
          meaningBn: 'খাবার খাওয়ার আগে সাবান দিয়ে হাত দুটি ভালোভাবে ধুয়ে নিই।'
        },
        {
          ja: '週末にまとめて溜まった洋服を洗濯します।',
          romaji: 'Shuumatsu ni matomete tamatta youfuku o sentaku shimasu.',
          meaningEn: 'I wash accumulated clothes all together on weekends.',
          meaningBn: 'সাপ্তাহিক ছুটিতে জমে থাকা কাপড়গুলো একসাথে ধুয়ে ফেলি।'
        }
      ]
    },
    {
      id: 'l22-yowai',
      kanji: '弱',
      emoji: '🔥',
      strokeCount: 10,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ジャク', romaji: 'jaku' }],
        kunyomi: [{ kana: 'よわ.い', romaji: 'yowa.i' }, { kana: 'よわ.る', romaji: 'yowa.ru' }]
      },
      meanings: {
        en: 'Weak, frail, low heat',
        bn: 'দুর্বল, অল্প আঁচ (রান্না)'
      },
      vocab: [
        { kanji: '弱い', kana: 'よわい', romaji: 'yowai', meaningEn: 'weak', meaningBn: 'দুর্বল', tag: 'N5' },
        { kanji: '弱火', kana: 'よわび', romaji: 'yowabi', meaningEn: 'low heat', meaningBn: 'হালকা আঁচ বা অল্প আগুন', tag: 'N3' },
        { kanji: '弱点', kana: 'じゃくてん', romaji: 'jakuten', meaningEn: 'weak point, weakness', meaningBn: 'দুর্বলতা', tag: 'N3' },
        { kanji: '弱肉強食', kana: 'じゃくにくきょうしょく', romaji: 'jakunikukyoushoku', meaningEn: 'survival of the fittest', meaningBn: 'জোর যার মুল্লুক তার', tag: 'N3' },
        { kanji: '弱る', kana: 'よわる', romaji: 'yowaru', meaningEn: 'to weaken', meaningBn: 'দুর্বল হয়ে পড়া', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'お肉が柔らかくなるまで、弱火でじっくりと煮込みます।',
          romaji: 'Oniku ga yawarakaku naru made, yowabi de jikkuri to nikomimasu.',
          meaningEn: 'Simmer thoroughly on low heat until the meat becomes tender.',
          meaningBn: 'মাংস নরম না হওয়া পর্যন্ত হালকা আঁচে সুন্দরভাবে সেদ্ধ করছি।'
        },
        {
          ja: '風邪を引いて体が弱っているので、今日は早く寝ます।',
          romaji: 'Kaze o hiite karada ga yowatte iru node, kyou wa hayaku nemasu.',
          meaningEn: 'Since I caught a cold and my body is weakened, I will sleep early today.',
          meaningBn: 'ঠান্ডা লেগে শরীর দুর্বল হয়ে থাকায় আজ দ্রুত ঘুমিয়ে পড়ব।'
        }
      ]
    },
    {
      id: 'l22-kurai',
      kanji: '暗',
      emoji: '🕶️',
      strokeCount: 13,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'アン', romaji: 'an' }],
        kunyomi: [{ kana: 'くら.い', romaji: 'kura.i' }]
      },
      meanings: {
        en: 'Dark, gloomy, dim',
        bn: 'অন্ধকার, অস্পষ্ট, মন মরা'
      },
      vocab: [
        { kanji: '暗い', kana: 'くらい', romaji: 'kurai', meaningEn: 'dark, dim', meaningBn: 'অন্ধকার বা আলোহীন', tag: 'N5' },
        { kanji: '真っ暗', kana: 'まっくら', romaji: 'makkura', meaningEn: 'pitch dark', meaningBn: 'ঘুটঘুটে অন্ধকার', tag: 'N4' },
        { kanji: '暗記する', kana: 'あんきする', romaji: 'ankisuru', meaningEn: 'to memorize', meaningBn: 'মুখস্থ করা', tag: 'N3' },
        { kanji: '暗証番号', kana: 'あんしょうばんごう', romaji: 'anshou bangou', meaningEn: 'PIN number', meaningBn: 'পাসওয়ার্ড পিন', tag: 'N3' },
        { kanji: '暗い人', kana: 'くらいひと', romaji: 'kurai hito', meaningEn: 'gloomy person', meaningBn: 'মৌন বা মনমরা স্বভাবের লোক', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '台所が暗いので、電気をつけて明るくします।',
          romaji: 'Daidokoro ga kurai node, denki o tsukete akaruku shimasu.',
          meaningEn: 'The kitchen is dark, so I will turn on the light to make it bright.',
          meaningBn: 'রান্নাঘরটি অন্ধকার লাগায় লাইট জ্বালিয়ে আলোকিত করছি।'
        },
        {
          ja: '夕方の五時になると外はもう真っ暗になります।',
          romaji: 'Yuugata no go-ji ni naru to soto wa mou makkura ni narimasu.',
          meaningEn: 'When it turns 5 PM, it becomes pitch dark outside.',
          meaningBn: 'বিকেল ৫টা বাজলেই বাইরে ঘুটঘুটে অন্ধকার হয়ে যায়।'
        }
      ]
    },

    // --- Read Only (読める: 砂糖, 塩, 油, 卵) ---
    {
      id: 'l22-satou',
      kanji: '砂糖',
      emoji: '🍬',
      strokeCount: 21,
      jlpt: 'N4',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'サトウ', romaji: 'satou' }],
        kunyomi: []
      },
      meanings: {
        en: 'Sugar',
        bn: 'চিনি'
      },
      vocab: [
        { kanji: '砂糖', kana: 'さとう', romaji: 'satou', meaningEn: 'sugar', meaningBn: 'চিনি', tag: 'N4' },
        { kanji: '砂', kana: 'すな', romaji: 'suna', meaningEn: 'sand', meaningBn: 'বালু', tag: 'N4' }
      ],
      sentences: [
        {
          ja: 'コーヒーに砂糖をスプーン一杯入れます।',
          romaji: 'Koohii ni satou o supuun ippai iremasu.',
          meaningEn: 'I put a spoonful of sugar in the coffee.',
          meaningBn: 'কফিতে এক চামচ চিনি দিচ্ছি।'
        }
      ]
    },
    {
      id: 'l22-shio',
      kanji: '塩',
      emoji: '🧂',
      strokeCount: 13,
      jlpt: 'N4',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'エン', romaji: 'en' }],
        kunyomi: [{ kana: 'しお', romaji: 'shio' }]
      },
      meanings: {
        en: 'Salt',
        bn: 'লবণ'
      },
      vocab: [
        { kanji: '塩', kana: 'しお', romaji: 'shio', meaningEn: 'salt', meaningBn: 'লবণ', tag: 'N4' },
        { kanji: '塩辛い', kana: 'しおからい', romaji: 'shiokarai', meaningEn: 'salty', meaningBn: 'লোনা বা অতিরিক্ত নোনতা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'スープの味が薄いので少し塩を入れました।',
          romaji: 'Suupu no aji ga usui node sukoshi shio o iremashita.',
          meaningEn: 'Since the taste of the soup was bland, I added a bit of salt.',
          meaningBn: 'স্যুপের স্বাদ একটু পানসে লাগায় সামান্য লবণ যোগ করলাম।'
        }
      ]
    },
    {
      id: 'l22-abura',
      kanji: '油',
      emoji: '🧴',
      strokeCount: 8,
      jlpt: 'N4',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'ユ', romaji: 'yu' }],
        kunyomi: [{ kana: 'あぶら', romaji: 'abura' }]
      },
      meanings: {
        en: 'Oil',
        bn: 'তেল, ভোজ্যতেল'
      },
      vocab: [
        { kanji: '油', kana: 'あぶら', romaji: 'abura', meaningEn: 'oil', meaningBn: 'ভোজ্যতেল', tag: 'N4' },
        { kanji: 'サラダ油', kana: 'さらだゆ', romaji: 'saradayu', meaningEn: 'salad oil, cooking oil', meaningBn: 'সয়াবিন তেল / রান্নার তেল', tag: 'N3' },
        { kanji: 'しょう油', kana: 'しょうゆ', romaji: 'shouyu', meaningEn: 'soy sauce', meaningBn: 'সয়া সস', tag: 'N5' }
      ],
      sentences: [
        {
          ja: 'フライパンにサラダ油を薄くひいて肉を焼きます।',
          romaji: 'Furaipan ni saradayu o usuku hiite niku o yakimasu.',
          meaningEn: 'Spread a thin layer of cooking oil on the pan and grill the meat.',
          meaningBn: 'ফ্রাইপ্যানে সামান্য রান্নার তেল ব্রাশ করে মাংসটি ভাজছি।'
        }
      ]
    },
    {
      id: 'l22-tamago',
      kanji: '卵',
      emoji: '🥚',
      strokeCount: 7,
      jlpt: 'N4',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'ラン', romaji: 'ran' }],
        kunyomi: [{ kana: 'たまご', romaji: 'tamago' }]
      },
      meanings: {
        en: 'Egg',
        bn: 'ডিম'
      },
      vocab: [
        { kanji: '卵', kana: 'たまご', romaji: 'tamago', meaningEn: 'egg', meaningBn: 'ডিম', tag: 'N4' },
        { kanji: '卵焼き', kana: 'たまごやき', romaji: 'tamagoyaki', meaningEn: 'Japanese rolled omelet', meaningBn: 'ডিম ভাজি বা ওমলেট', tag: 'N4' }
      ],
      sentences: [
        {
          ja: 'お弁当に大好きな甘い卵焼きを入れました।',
          romaji: 'Obentou ni daisuki na amai tamagoyaki o iremashita.',
          meaningEn: 'I put my favorite sweet rolled omelet in the bento box.',
          meaningBn: 'লাঞ্চ বক্সে আমার অতি পছন্দের মিষ্টি ডিম ভাজি সাজিয়ে দিয়েছি।'
        }
      ]
    },

    // --- Visual Recognition (見て、分かる: 限定) ---
    {
      id: 'l22-gentei',
      kanji: '限定',
      emoji: '⏳',
      strokeCount: 15,
      jlpt: 'N3',
      category: 'visual_recognition',
      readings: {
        onyomi: [{ kana: 'ゲンテイ', romaji: 'gentei' }],
        kunyomi: []
      },
      meanings: {
        en: 'Limited, restriction',
        bn: 'সীমাবদ্ধ, লিমিটেড অফার বা সীমিত'
      },
      vocab: [
        { kanji: '期間限定', kana: 'きかんげんてい', romaji: 'kikan gentei', meaningEn: 'limited time offer', meaningBn: 'সীমিত সময়ের অফার', tag: 'N3' },
        { kanji: '限定品', kana: 'げんていひん', romaji: 'genteihin', meaningEn: 'limited edition item', meaningBn: 'সীমিত সংস্করণের পণ্যসামগ্রী', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'この秋限定の抹茶チョコレートはとても人気があります।',
          romaji: 'Kono aki gentei no maccha chokoreeto wa totemo ninki ga arimasu.',
          meaningEn: 'This autumn-limited matcha chocolate is extremely popular.',
          meaningBn: 'শরতের এই লিমিটেড এডিশনের মাচ্চা চকলেটটি ক্রেতাদের মাঝে ব্যাপক জনপ্রিয়।'
        }
      ]
    }
  ]
};
