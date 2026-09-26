import { Lesson } from '../types/kanji';

export const lesson2: Lesson = {
  id: 2,
  number: 2,
  titleJa: '買い物',
  titleRomaji: 'Kaimono',
  titleBn: 'কেনাকাটা ও সুপারমার্কেট',
  titleEn: 'Shopping & Supermarket Prices',
  descriptionBn: 'জাপানে কেনাকাটা, দাম নির্ধারণ, মাংসের লেবেল এবং সুপারমার্কেটের ছাড়ের স্টিকার পড়ার জন্য প্রয়োজনীয় কান্জি।',
  descriptionEn: 'Essential Kanji for prices, currency, meat packaging, and supermarket discount stickers in Japan.',
  kanjiList: [
    // 1. 一
    {
      id: 'l2-ichi',
      kanji: '一',
      emoji: '1️⃣',
      strokeCount: 1,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'イチ', romaji: 'ichi' },
          { kana: 'イツ', romaji: 'itsu' }
        ],
        kunyomi: [
          { kana: 'ひと', romaji: 'hito' },
          { kana: 'ひと・つ', romaji: 'hito-tsu' }
        ]
      },
      meanings: {
        en: 'one, 1, single',
        bn: 'এক, ১, একটি'
      },
      vocab: [
        {
          kanji: '一つ',
          kana: 'ひとつ',
          romaji: 'hitotsu',
          meaningEn: 'one item',
          meaningBn: 'একটি (জিনিস)',
          tag: 'Daily N5'
        },
        {
          kanji: '一人',
          kana: 'ひとり',
          romaji: 'hitori',
          meaningEn: 'one person, alone',
          meaningBn: 'একজন, একা',
          tag: 'Daily N5'
        },
        {
          kanji: '一日',
          kana: 'ついたち',
          romaji: 'tsuitachi',
          meaningEn: 'first day of the month',
          meaningBn: 'মাসের ১ তারিখ',
          tag: 'Special N5'
        },
        {
          kanji: '一月',
          kana: 'いちがつ',
          romaji: 'ichigatsu',
          meaningEn: 'January',
          meaningBn: 'জানুয়ারি মাস',
          tag: 'Daily N5'
        },
        {
          kanji: '一番',
          kana: 'いちばん',
          romaji: 'ichiban',
          meaningEn: 'number one, the best',
          meaningBn: 'সেরা, এক নম্বর, সবচেয়ে',
          tag: 'Daily N5'
        },
        {
          kanji: '一緒に',
          kana: 'いっしょに',
          romaji: 'issho ni',
          meaningEn: 'together',
          meaningBn: 'একসাথে',
          tag: 'Daily N5'
        }
      ],
      sentences: [
        {
          ja: 'りんごを一つください。',
          romaji: 'Ringo o hitotsu kudasai.',
          meaningEn: 'Please give me one apple.',
          meaningBn: 'আমাকে একটি আপেল দিন দয়া করে।'
        },
        {
          ja: 'これが一番安くておいしいです。',
          romaji: 'Kore ga ichiban yasukute oishii desu.',
          meaningEn: 'This one is the cheapest and most delicious.',
          meaningBn: 'এটি সবচেয়ে সস্তা এবং সুস্বাদু।'
        },
        {
          ja: '一人でスーパーへ買い物に行きました。',
          romaji: 'Hitori de suupaa e kaimono ni ikimashita.',
          meaningEn: 'I went alone to the supermarket for shopping.',
          meaningBn: 'আমি একা একা সুপারমার্কেটে কেনাকাটা করতে গিয়েছিলাম।'
        }
      ],
      tamagoTip: {
        bn: 'একটি অনুভূমিক দাগ—তর্জনী বা একটি কাঠি প্রদর্শন করে ১ সংখ্যা বোঝায়।',
        en: 'A single horizontal line representing the number 1 or one stretched finger.'
      }
    },
    // 2. 二
    {
      id: 'l2-ni',
      kanji: '二',
      emoji: '2️⃣',
      strokeCount: 2,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ニ', romaji: 'ni' }],
        kunyomi: [
          { kana: 'ふた', romaji: 'futa' },
          { kana: 'ふた・つ', romaji: 'futa-tsu' }
        ]
      },
      meanings: {
        en: 'two, 2, double',
        bn: 'দুই, ২, দ্বিতীয়'
      },
      vocab: [
        {
          kanji: '二つ',
          kana: 'ふたつ',
          romaji: 'futatsu',
          meaningEn: 'two items',
          meaningBn: 'দুটি (জিনিস)',
          tag: 'Daily N5'
        },
        {
          kanji: '二人',
          kana: 'ふたり',
          romaji: 'futari',
          meaningEn: 'two people, pair',
          meaningBn: 'দুইজন',
          tag: 'Daily N5'
        },
        {
          kanji: '二日',
          kana: 'ふつか',
          romaji: 'futsuka',
          meaningEn: 'second day of month / two days',
          meaningBn: 'মাসের ২ তারিখ / দুই দিন',
          tag: 'Special N5'
        },
        {
          kanji: '二月',
          kana: 'にがつ',
          romaji: 'nigatsu',
          meaningEn: 'February',
          meaningBn: 'ফেব্রুয়ারি মাস',
          tag: 'Daily N5'
        },
        {
          kanji: '二十才',
          kana: 'はたち',
          romaji: 'hatachi',
          meaningEn: 'twenty years old',
          meaningBn: 'বিশ বছর বয়স',
          tag: 'Daily N5'
        },
        {
          kanji: '二階',
          kana: 'にかい',
          romaji: 'nikai',
          meaningEn: 'second floor',
          meaningBn: 'দ্বিতল, দোতলা',
          tag: 'Daily N5'
        }
      ],
      sentences: [
        {
          ja: 'おにぎりを二つ買いました。',
          romaji: 'Onigiri o futatsu kaimashita.',
          meaningEn: 'I bought two rice balls.',
          meaningBn: 'আমি দুটি ওনিগিরি (ভাতের বল) কিনেছি।'
        },
        {
          ja: '二人で映画を見に行きましょう。',
          romaji: 'Futari de eiga o mi ni ikimashou.',
          meaningEn: 'Let us two go watch a movie.',
          meaningBn: 'চলুন আমরা দুজন একসাথে সিনেমা দেখতে যাই।'
        },
        {
          ja: 'スーパーの二階で服を売っています。',
          romaji: 'Suupaa no nikai de fuku o utte imasu.',
          meaningEn: 'Clothes are sold on the second floor of the supermarket.',
          meaningBn: 'সুপারমার্কেটের দোতলায় পোশাক বিক্রি হয়।'
        }
      ],
      tamagoTip: {
        bn: 'দুটি অনুভূমিক রেখা—উপরেরটি কিছুটা ছোট, নিচেরটি লম্বা।',
        en: 'Two parallel strokes representing the count of 2.'
      }
    },
    // 3. 三
    {
      id: 'l2-san',
      kanji: '三',
      emoji: '3️⃣',
      strokeCount: 3,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'サン', romaji: 'san' }],
        kunyomi: [
          { kana: 'み', romaji: 'mi' },
          { kana: 'みっ・つ', romaji: 'mi-ttsu' }
        ]
      },
      meanings: {
        en: 'three, 3',
        bn: 'তিন, ৩'
      },
      vocab: [
        {
          kanji: '三つ',
          kana: 'みっつ',
          romaji: 'mittsu',
          meaningEn: 'three items',
          meaningBn: 'তিনটি (জিনিস)',
          tag: 'Daily N5'
        },
        {
          kanji: '三人',
          kana: 'さんにん',
          romaji: 'sannin',
          meaningEn: 'three people',
          meaningBn: 'তিনজন',
          tag: 'Daily N5'
        },
        {
          kanji: '三日',
          kana: 'みっか',
          romaji: 'mikka',
          meaningEn: 'third day of month / 3 days',
          meaningBn: 'মাসের ৩ তারিখ / তিন দিন',
          tag: 'Special N5'
        },
        {
          kanji: '三月',
          kana: 'さんがつ',
          romaji: 'sangatsu',
          meaningEn: 'March',
          meaningBn: 'মার্চ মাস',
          tag: 'Daily N5'
        },
        {
          kanji: '三角形',
          kana: 'さんかくけい',
          romaji: 'sankakukei',
          meaningEn: 'triangle',
          meaningBn: 'ত্রিভুজ',
          tag: 'N4'
        },
        {
          kanji: '三時',
          kana: 'さんじ',
          romaji: 'sanji',
          meaningEn: 'three o\'clock (snack time)',
          meaningBn: 'তিনটা (বিকালের নাশতার সময়)',
          tag: 'Daily N5'
        }
      ],
      sentences: [
        {
          ja: '卵をパックで三つ買いました。',
          romaji: 'Tamago o pakku de mittsu kaimashita.',
          meaningEn: 'I bought three packs of eggs.',
          meaningBn: 'আমি তিন প্যাকেট ডিম কিনেছি।'
        },
        {
          ja: '三月三日はひな祭りです。',
          romaji: 'Sangatsu mikka wa hinamatsuri desu.',
          meaningEn: 'March 3rd is the Doll Festival (Hinamatsuri).',
          meaningBn: '৩রা মার্চ হলো জাপানের হিনামাৎসুরি উৎসব।'
        },
        {
          ja: '三人でレストランの席を予約しました。',
          romaji: 'Sannin de resutoran no seki o yoyaku shimashita.',
          meaningEn: 'We reserved a table at the restaurant for three people.',
          meaningBn: 'তিনজনের জন্য রেস্তোরাঁয় টেবিল বুক করেছি।'
        }
      ],
      tamagoTip: {
        bn: 'মাঝের রেখাটি সবচেয়ে ছোট, নিচের রেখাটি সবচেয়ে দীর্ঘ। মোট ৩টি রেখা।',
        en: 'Three lines stacked: middle is shortest, bottom is longest.'
      }
    },
    // 4. 四
    {
      id: 'l2-yon',
      kanji: '四',
      emoji: '4️⃣',
      strokeCount: 5,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'シ', romaji: 'shi' }],
        kunyomi: [
          { kana: 'よ', romaji: 'yo' },
          { kana: 'よっ・つ', romaji: 'yo-ttsu' },
          { kana: 'よん', romaji: 'yon' }
        ]
      },
      meanings: {
        en: 'four, 4',
        bn: 'চার, ৪'
      },
      vocab: [
        {
          kanji: '四つ',
          kana: 'よっつ',
          romaji: 'yottsu',
          meaningEn: 'four items',
          meaningBn: 'চারটি (জিনিস)',
          tag: 'Daily N5'
        },
        {
          kanji: '四人',
          kana: 'よにん',
          romaji: 'yonin',
          meaningEn: 'four people',
          meaningBn: 'চারজন',
          tag: 'Daily N5'
        },
        {
          kanji: '四日',
          kana: 'よっか',
          romaji: 'yokka',
          meaningEn: 'fourth day of month / 4 days',
          meaningBn: 'মাসের ৪ তারিখ / চার দিন',
          tag: 'Special N5'
        },
        {
          kanji: '四月',
          kana: 'しがつ',
          romaji: 'shigatsu',
          meaningEn: 'April',
          meaningBn: 'এপ্রিল মাস',
          tag: 'Daily N5'
        },
        {
          kanji: '四季',
          kana: 'しき',
          romaji: 'shiki',
          meaningEn: 'the four seasons',
          meaningBn: 'চার ঋতু (জাপানের)',
          tag: 'Culture N4'
        },
        {
          kanji: '四角い',
          kana: 'しかくい',
          romaji: 'shikakui',
          meaningEn: 'square, rectangular',
          meaningBn: 'চৌকো, চারকোনা',
          tag: 'Daily N4'
        }
      ],
      sentences: [
        {
          ja: 'バナナを四本買います。',
          romaji: 'Banana o yonhon kaimasu.',
          meaningEn: 'I will buy four bananas.',
          meaningBn: 'আমি চারটি কলা কিনব।'
        },
        {
          ja: '四月は日本の学校の始まりです。',
          romaji: 'Shigatsu wa Nihon no gakkou no hajimari desu.',
          meaningEn: 'April is the start of Japanese schools.',
          meaningBn: 'এপ্রিল মাস হলো জাপানের বিদ্যালয় শুরু হওয়ার সময়।'
        },
        {
          ja: 'このテーブルは四人用です。',
          romaji: 'Kono teeburu wa yonin-you desu.',
          meaningEn: 'This table is for four persons.',
          meaningBn: 'এই টেবিলটি চারজন ব্যক্তির ব্যবহারের জন্য।'
        }
      ],
      tamagoTip: {
        bn: 'একটি বাক্সের (口) ভেতর দুটি পর্দা বা বিভাজন রেখা (儿) যা চার কোণা ঘর তৈরি করে।',
        en: 'A window frame with parted curtains dividing space into 4 segments.'
      }
    },
    // 5. 五
    {
      id: 'l2-go',
      kanji: '五',
      emoji: '5️⃣',
      strokeCount: 4,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ゴ', romaji: 'go' }],
        kunyomi: [
          { kana: 'いつ', romaji: 'itsu' },
          { kana: 'いつ・つ', romaji: 'itsu-tsu' }
        ]
      },
      meanings: {
        en: 'five, 5',
        bn: 'পাঁচ, ৫'
      },
      vocab: [
        {
          kanji: '五つ',
          kana: 'いつつ',
          romaji: 'itsutsu',
          meaningEn: 'five items',
          meaningBn: 'পাঁচটি (জিনিস)',
          tag: 'Daily N5'
        },
        {
          kanji: '五人',
          kana: 'ごにん',
          romaji: 'gonin',
          meaningEn: 'five people',
          meaningBn: 'পাঁচজন',
          tag: 'Daily N5'
        },
        {
          kanji: '五日',
          kana: 'いつか',
          romaji: 'itsuka',
          meaningEn: 'fifth day of month / 5 days',
          meaningBn: 'মাসের ৫ তারিখ / পাঁচ দিন',
          tag: 'Special N5'
        },
        {
          kanji: '五月',
          kana: 'ごがつ',
          romaji: 'gogatsu',
          meaningEn: 'May',
          meaningBn: 'মে মাস',
          tag: 'Daily N5'
        },
        {
          kanji: '五円玉',
          kana: 'ごえんだま',
          romaji: 'goendama',
          meaningEn: '5-yen coin (good luck)',
          meaningBn: '৫ ইয়েনের মুদ্রা (ভাগ্যের প্রতীক)',
          tag: 'Money N5'
        },
        {
          kanji: '五分',
          kana: 'ごふん',
          romaji: 'gofun',
          meaningEn: 'five minutes',
          meaningBn: 'পাঁচ মিনিট',
          tag: 'Time N5'
        }
      ],
      sentences: [
        {
          ja: 'パンを五つ選びました。',
          romaji: 'Pan o itsutsu erabimashita.',
          meaningEn: 'I picked five pieces of bread.',
          meaningBn: 'আমি পাঁচটি রুটি পছন্দ করেছি।'
        },
        {
          ja: '駅からスーパーまで歩いて五分です。',
          romaji: 'Eki kara suupaa made aruite gofun desu.',
          meaningEn: 'It takes five minutes on foot from the station to the supermarket.',
          meaningBn: 'স্টেশন থেকে সুপারমার্কেট হেঁটে পাঁচ মিনিট দূরে।'
        },
        {
          ja: '日本の五円玉には穴が開いています。',
          romaji: 'Nihon no goendama ni wa ana ga aite imasu.',
          meaningEn: 'The Japanese 5-yen coin has a hole in it.',
          meaningBn: 'জাপানের ৫ ইয়েনের মুদ্রার মাঝে একটি ছিদ্র থাকে।'
        }
      ],
      tamagoTip: {
        bn: 'হাতের ৫টি আঙুল এবং দুই প্রান্তের সংযোগস্থল।',
        en: 'Ancient counting sticks crossed to represent 5.'
      }
    },
    // 6. 六
    {
      id: 'l2-roku',
      kanji: '六',
      emoji: '6️⃣',
      strokeCount: 4,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ロク', romaji: 'roku' }],
        kunyomi: [
          { kana: 'む', romaji: 'mu' },
          { kana: 'むっ・つ', romaji: 'mu-ttsu' },
          { kana: 'むい', romaji: 'mui' }
        ]
      },
      meanings: {
        en: 'six, 6',
        bn: 'ছয়, ৬'
      },
      vocab: [
        {
          kanji: '六つ',
          kana: 'むっつ',
          romaji: 'muttsu',
          meaningEn: 'six items',
          meaningBn: 'ছয়টি (জিনিস)',
          tag: 'Daily N5'
        },
        {
          kanji: '六人',
          kana: 'ろくにん',
          romaji: 'rokunin',
          meaningEn: 'six people',
          meaningBn: 'ছয়জন',
          tag: 'Daily N5'
        },
        {
          kanji: '六日',
          kana: 'むいか',
          romaji: 'muika',
          meaningEn: 'sixth day of month / 6 days',
          meaningBn: 'মাসের ৬ তারিখ / ছয় দিন',
          tag: 'Special N5'
        },
        {
          kanji: '六月',
          kana: 'ろくがつ',
          romaji: 'rokugatsu',
          meaningEn: 'June',
          meaningBn: 'জুন মাস',
          tag: 'Daily N5'
        },
        {
          kanji: '六本木',
          kana: 'ろっぽんぎ',
          romaji: 'roppongi',
          meaningEn: 'Roppongi (famous Tokyo district)',
          meaningBn: 'রপ্পোঙ্গি (টোকিওর বিখ্যাত এলাকা)',
          tag: 'Tokyo Place'
        },
        {
          kanji: '六百',
          kana: 'ろっぴゃく',
          romaji: 'roppyaku',
          meaningEn: 'six hundred (600)',
          meaningBn: 'ছয় শত (৬০০)',
          tag: 'Price N5'
        }
      ],
      sentences: [
        {
          ja: 'ビールを六本買いました。',
          romaji: 'Biiru o roppon kaimashita.',
          meaningEn: 'I bought six bottles of beer.',
          meaningBn: 'আমি ছয়টি বিয়ারের বোতল কিনেছি।'
        },
        {
          ja: 'このお弁当は六百円です。',
          romaji: 'Kono obentou wa roppyakuen desu.',
          meaningEn: 'This bento box lunch is 600 yen.',
          meaningBn: 'এই বেন্টো লাঞ্চ বক্সটির দাম ৬০০ ইয়েন।'
        },
        {
          ja: '夕方六時にスーパーで会いましょう。',
          romaji: 'Yuugata rokuji ni suupaa de aimashou.',
          meaningEn: 'Let\'s meet at the supermarket at 6:00 in the evening.',
          meaningBn: 'সন্ধ্যা ছয়টায় সুপারমার্কেটে দেখা করা যাক।'
        }
      ],
      tamagoTip: {
        bn: 'উপরে একটি টুপি ও নিচে দুটি পা। জাপানি সংখ্যায় ৬।',
        en: 'A person standing wide with arms resting on hips representing 6.'
      }
    },
    // 7. 七
    {
      id: 'l2-nana',
      kanji: '七',
      emoji: '7️⃣',
      strokeCount: 2,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'シチ', romaji: 'shichi' }],
        kunyomi: [
          { kana: 'なな', romaji: 'nana' },
          { kana: 'なな・つ', romaji: 'nana-tsu' },
          { kana: 'なの', romaji: 'nano' }
        ]
      },
      meanings: {
        en: 'seven, 7',
        bn: 'সাত, ৭'
      },
      vocab: [
        {
          kanji: '七つ',
          kana: 'ななつ',
          romaji: 'nanatsu',
          meaningEn: 'seven items',
          meaningBn: 'সাতটি (জিনিস)',
          tag: 'Daily N5'
        },
        {
          kanji: '七人',
          kana: 'しちにん / ななにん',
          romaji: 'shichinin / nananin',
          meaningEn: 'seven people',
          meaningBn: 'সাতজন',
          tag: 'Daily N5'
        },
        {
          kanji: '七日',
          kana: 'なのか',
          romaji: 'nanoka',
          meaningEn: 'seventh day of month / 7 days',
          meaningBn: 'মাসের ৭ তারিখ / সাত দিন',
          tag: 'Special N5'
        },
        {
          kanji: '七月',
          kana: 'しちがつ',
          romaji: 'shichigatsu',
          meaningEn: 'July',
          meaningBn: 'জুলাই মাস',
          tag: 'Daily N5'
        },
        {
          kanji: '七時',
          kana: 'しちじ',
          romaji: 'shichiji',
          meaningEn: 'seven o\'clock',
          meaningBn: 'সাতটা বাজে',
          tag: 'Time N5'
        },
        {
          kanji: '七百',
          kana: 'ななひゃく',
          romaji: 'nanahyaku',
          meaningEn: 'seven hundred (700)',
          meaningBn: 'সাত শত (৭০০)',
          tag: 'Price N5'
        }
      ],
      sentences: [
        {
          ja: 'トマトを七つ袋に入れました。',
          romaji: 'Tomato o nanatsu fukuro ni iremashita.',
          meaningEn: 'I put seven tomatoes in the bag.',
          meaningBn: 'আমি ব্যাগে সাতটি টমেটো রেখেছি।'
        },
        {
          ja: 'スーパーは夜七時に閉まります。',
          romaji: 'Suupaa wa yoru shichiji ni shimarimasu.',
          meaningEn: 'The supermarket closes at 7:00 PM.',
          meaningBn: 'সুপারমার্কেট রাত সাতটায় বন্ধ হয়ে যায়।'
        },
        {
          ja: 'この牛肉は七百円でした。',
          romaji: 'Kono gyuuniku wa nanahyaku-en deshita.',
          meaningEn: 'This beef cost 700 yen.',
          meaningBn: 'এই গরুর মাংসটির দাম ছিল ৭০০ ইয়েন।'
        }
      ],
      tamagoTip: {
        bn: 'উল্টানো ৭ এর মতো বাঁকানো স্ট্রোক যা সাত নির্দেশ করে।',
        en: 'A horizontal slash crossed with a curved tail, easily recognized as 7.'
      }
    },
    // 8. 八
    {
      id: 'l2-hachi',
      kanji: '八',
      emoji: '8️⃣',
      strokeCount: 2,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ハチ', romaji: 'hachi' }],
        kunyomi: [
          { kana: 'や', romaji: 'ya' },
          { kana: 'やっ・つ', romaji: 'ya-ttsu' },
          { kana: 'よう', romaji: 'you' }
        ]
      },
      meanings: {
        en: 'eight, 8, prosperity',
        bn: 'আট, ৮, সমৃদ্ধি'
      },
      vocab: [
        {
          kanji: '八つ',
          kana: 'やっつ',
          romaji: 'yattsu',
          meaningEn: 'eight items',
          meaningBn: 'আটটি (জিনিস)',
          tag: 'Daily N5'
        },
        {
          kanji: '八人',
          kana: 'はちにん',
          romaji: 'hachinin',
          meaningEn: 'eight people',
          meaningBn: 'আটজন',
          tag: 'Daily N5'
        },
        {
          kanji: '八日',
          kana: 'ようか',
          romaji: 'youka',
          meaningEn: 'eighth day of month / 8 days',
          meaningBn: 'মাসের ৮ তারিখ / আট দিন',
          tag: 'Special N5'
        },
        {
          kanji: '八月',
          kana: 'はちがつ',
          romaji: 'hachigatsu',
          meaningEn: 'August',
          meaningBn: 'আগস্ট মাস',
          tag: 'Daily N5'
        },
        {
          kanji: '八百屋',
          kana: 'やおや',
          romaji: 'yaoya',
          meaningEn: 'greengrocer, vegetable shop',
          meaningBn: 'শাকসবজির দোকান',
          tag: 'Supermarket N5'
        },
        {
          kanji: '八百',
          kana: 'はっぴゃく',
          romaji: 'happyaku',
          meaningEn: 'eight hundred (800)',
          meaningBn: 'আট শত (৮০০)',
          tag: 'Price N5'
        }
      ],
      sentences: [
        {
          ja: '駅前の八百屋で新鮮な野菜を買いました。',
          romaji: 'Ekimae no yaoya de shinsen na yasai o kaimashita.',
          meaningEn: 'I bought fresh vegetables at the greengrocer in front of the station.',
          meaningBn: 'স্টেশনের সামনের সবজির দোকান থেকে তাজা শাকসবজি কিনেছি।'
        },
        {
          ja: 'この豚肉はパックで八百円です。',
          romaji: 'Kono butaniku wa pakku de happyakuen desu.',
          meaningEn: 'This pork is 800 yen per pack.',
          meaningBn: 'এই শূকরের মাংসের প্যাকেটের দাম ৮০০ ইয়েন।'
        },
        {
          ja: '八月は日本でとても暑いです。',
          romaji: 'Hachigatsu wa Nihon de totemo atsui desu.',
          meaningEn: 'August is very hot in Japan.',
          meaningBn: 'আগস্ট মাসে জাপানে প্রচণ্ড গরম পড়ে।'
        }
      ],
      tamagoTip: {
        bn: 'নিচের দিকে প্রসারিত রূপ যা জাপানে "সুয়েহিরোগারি" বা ক্রমাগত সমৃদ্ধি নির্দেশক শুভ প্রতীক।',
        en: 'Spreading wider at the bottom (Suehirogari), an auspicious shape of prosperity.'
      }
    },
    // 9. 九
    {
      id: 'l2-kyuu',
      kanji: '九',
      emoji: '9️⃣',
      strokeCount: 2,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'キュウ', romaji: 'kyuu' },
          { kana: 'ク', romaji: 'ku' }
        ],
        kunyomi: [
          { kana: 'ここの', romaji: 'kokono' },
          { kana: 'ここの・つ', romaji: 'kokono-tsu' }
        ]
      },
      meanings: {
        en: 'nine, 9',
        bn: 'নয়, ৯'
      },
      vocab: [
        {
          kanji: '九つ',
          kana: 'ここのつ',
          romaji: 'kokonotsu',
          meaningEn: 'nine items',
          meaningBn: 'নয়টি (জিনিস)',
          tag: 'Daily N5'
        },
        {
          kanji: '九人',
          kana: 'きゅうにん / くにん',
          romaji: 'kyuunin / kunin',
          meaningEn: 'nine people',
          meaningBn: 'নয়জন',
          tag: 'Daily N5'
        },
        {
          kanji: '九日',
          kana: 'ここのか',
          romaji: 'kokonoka',
          meaningEn: 'ninth day of month / 9 days',
          meaningBn: 'মাসের ৯ তারিখ / নয় দিন',
          tag: 'Special N5'
        },
        {
          kanji: '九月',
          kana: 'くがつ',
          romaji: 'kugatsu',
          meaningEn: 'September',
          meaningBn: 'সেপ্টেম্বর মাস',
          tag: 'Daily N5'
        },
        {
          kanji: '九時',
          kana: 'くじ',
          romaji: 'kuji',
          meaningEn: 'nine o\'clock',
          meaningBn: 'নয়টা বাজে',
          tag: 'Time N5'
        },
        {
          kanji: '九州',
          kana: 'きゅうしゅう',
          romaji: 'kyuushuu',
          meaningEn: 'Kyushu (southern main island)',
          meaningBn: 'কিউশু (জাপানের দক্ষিণ দ্বীপ)',
          tag: 'Japan Region'
        }
      ],
      sentences: [
        {
          ja: '夜九時を過ぎると、惣菜が安くなります。',
          romaji: 'Yoru kuji o sugiru to, souzai ga yasuku narimasu.',
          meaningEn: 'After 9:00 PM, side dishes get discounted.',
          meaningBn: 'রাত ৯টা পার হলে প্রস্তুত খাবারগুলো সস্তায় পাওয়া যায়।'
        },
        {
          ja: 'みかんが九つ入っています。',
          romaji: 'Mikan ga kokonotsu haitte imasu.',
          meaningEn: 'There are nine mandarins in it.',
          meaningBn: 'এতে নয়টি কমলা রয়েছে।'
        },
        {
          ja: '九月に日本へ引っ越します。',
          romaji: 'Kugatsu ni Nihon e hikkoshimasu.',
          meaningEn: 'I will move to Japan in September.',
          meaningBn: 'সেপ্টেম্বর মাসে জাপানে বাসা স্থানান্তর করব।'
        }
      ],
      tamagoTip: {
        bn: 'বাঁকানো হুকের মতো স্ট্রোক—৯ সংখ্যা প্রকাশ করে।',
        en: 'A bent arm with a hook, traditionally symbolizing the ultimate single-digit 9.'
      }
    },
    // 10. 十
    {
      id: 'l2-juu',
      kanji: '十',
      emoji: '🔟',
      strokeCount: 2,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'ジュウ', romaji: 'juu' },
          { kana: 'ジッ', romaji: 'ji-' }
        ],
        kunyomi: [
          { kana: 'とお', romaji: 'too' },
          { kana: 'と', romaji: 'to' }
        ]
      },
      meanings: {
        en: 'ten, 10, complete',
        bn: 'দশ, ১০, পূর্ণাঙ্গ'
      },
      vocab: [
        {
          kanji: '十',
          kana: 'とお',
          romaji: 'too',
          meaningEn: 'ten items',
          meaningBn: 'দশটি (জিনিস)',
          tag: 'Daily N5'
        },
        {
          kanji: '十人',
          kana: 'じゅうにん',
          romaji: 'juunin',
          meaningEn: 'ten people',
          meaningBn: 'দশজন',
          tag: 'Daily N5'
        },
        {
          kanji: '十日',
          kana: 'とおか',
          romaji: 'tooka',
          meaningEn: 'tenth day of month / 10 days',
          meaningBn: 'মাসের ১০ তারিখ / দশ দিন',
          tag: 'Special N5'
        },
        {
          kanji: '十月',
          kana: 'じゅうがつ',
          romaji: 'juugatsu',
          meaningEn: 'October',
          meaningBn: 'অক্টোবর মাস',
          tag: 'Daily N5'
        },
        {
          kanji: '十分',
          kana: 'じゅっぷん / じっぷん',
          romaji: 'juppun / jippun',
          meaningEn: 'ten minutes',
          meaningBn: 'দশ মিনিট',
          tag: 'Time N5'
        },
        {
          kanji: '二十日',
          kana: 'はつか',
          romaji: 'hatsuka',
          meaningEn: '20th day of the month',
          meaningBn: 'মাসের ২০ তারিখ',
          tag: 'Special N5'
        }
      ],
      sentences: [
        {
          ja: '卵がパックに十個入っています。',
          romaji: 'Tamago ga pakku ni jukko haitte imasu.',
          meaningEn: 'There are ten eggs in the pack.',
          meaningBn: 'প্যাকেটে দশটি ডিম রয়েছে।'
        },
        {
          ja: 'あと十分でセールが終わります。',
          romaji: 'Ato juppun de seeru ga owarimasu.',
          meaningEn: 'The sale ends in another ten minutes.',
          meaningBn: 'আর দশ মিনিটের মধ্যে সেল শেষ হয়ে যাবে।'
        },
        {
          ja: '十月十日はスポーツの日です。',
          romaji: 'Juugatsu tooka wa supootsu no hi desu.',
          meaningEn: 'October 10th is Sports Day in Japan.',
          meaningBn: '১০ই অক্টোবর জাপানের ক্রীড়া দিবস।'
        }
      ],
      tamagoTip: {
        bn: 'একটি ক্রস বা যোগ চিহ্ন (+), যা হাত ও পায়ের সমস্ত ১০টি আঙুল পূর্ণ হওয়া বোঝায়।',
        en: 'A cross representing completeness: all ten fingers accounted for.'
      }
    },
    // 11. 百
    {
      id: 'l2-hyaku',
      kanji: '百',
      emoji: '💯',
      strokeCount: 6,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ヒャク', romaji: 'hyaku' }],
        kunyomi: [{ kana: 'もも', romaji: 'momo' }]
      },
      meanings: {
        en: 'hundred, 100',
        bn: 'একশত, ১০০, শত'
      },
      vocab: [
        {
          kanji: '百',
          kana: 'ひゃく',
          romaji: 'hyaku',
          meaningEn: 'one hundred',
          meaningBn: 'একশত (১০০)',
          tag: 'Price N5'
        },
        {
          kanji: '三百',
          kana: 'さんびゃく',
          romaji: 'sanbyaku',
          meaningEn: 'three hundred (300)',
          meaningBn: 'তিনশত (৩০০)',
          tag: 'Price N5'
        },
        {
          kanji: '六百',
          kana: 'ろっぴゃく',
          romaji: 'roppyaku',
          meaningEn: 'six hundred (600)',
          meaningBn: 'ছয়শত (৬০০)',
          tag: 'Price N5'
        },
        {
          kanji: '八百',
          kana: 'はっぴゃく',
          romaji: 'happyaku',
          meaningEn: 'eight hundred (800)',
          meaningBn: 'আটশত (৮০০)',
          tag: 'Price N5'
        },
        {
          kanji: '百均',
          kana: 'ひゃっきん',
          romaji: 'hyakkin',
          meaningEn: '100-yen shop (Daiso, Seria)',
          meaningBn: '১০০ ইয়েনের দোকান (ডাইসো ইত্যাদি)',
          tag: 'Daily Supermarket'
        },
        {
          kanji: '百貨店',
          kana: 'ひゃっかてん',
          romaji: 'hyakkaten',
          meaningEn: 'department store',
          meaningBn: 'ডিপার্টমেন্টাল স্টোর',
          tag: 'N4'
        }
      ],
      sentences: [
        {
          ja: '百均でノートとペンを買いました。',
          romaji: 'Hyakkin de nooto to pen o kaimashita.',
          meaningEn: 'I bought a notebook and pen at the 100-yen shop.',
          meaningBn: '১০০ ইয়েনের দোকান থেকে খাতা ও কলম কিনেছি।'
        },
        {
          ja: 'このおにぎりは百二十円です。',
          romaji: 'Kono onigiri wa hyakunijuuen desu.',
          meaningEn: 'This onigiri is 120 yen.',
          meaningBn: 'এই ওনিগিরিটির দাম ১২০ ইয়েন।'
        },
        {
          ja: '三百円の割引シールが貼ってあります。',
          romaji: 'Sanbyakuen no waribiki shiiru ga hatte arimasu.',
          meaningEn: 'There is a 300-yen discount sticker attached.',
          meaningBn: '৩০০ ইয়েন ছাড়ের স্টিকার লাগানো আছে।'
        }
      ],
      tamagoTip: {
        bn: 'এক (一) + সাদা (白) = একশত। জাপানি সুপারমার্কেটে 百均 (১০০ ইয়েন শপ) প্রতিদিনের পরিচিত দৃশ্য।',
        en: 'One (一) over white (白) = 100. Extremely common in "Hyakkin" (100-yen shops).'
      }
    },
    // 12. 千
    {
      id: 'l2-sen',
      kanji: '千',
      emoji: '🏷️',
      strokeCount: 3,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'セン', romaji: 'sen' }],
        kunyomi: [{ kana: 'ち', romaji: 'chi' }]
      },
      meanings: {
        en: 'thousand, 1,000',
        bn: 'হাজার, ১০০০, সহস্র'
      },
      vocab: [
        {
          kanji: '千',
          kana: 'せん',
          romaji: 'sen',
          meaningEn: 'one thousand (1,000)',
          meaningBn: 'এক হাজার (১০০০)',
          tag: 'Price N5'
        },
        {
          kanji: '二千',
          kana: 'にせん',
          romaji: 'nisen',
          meaningEn: 'two thousand',
          meaningBn: 'দুই হাজার (২০০০)',
          tag: 'Price N5'
        },
        {
          kanji: '三千',
          kana: 'さんぜん',
          romaji: 'sanzen',
          meaningEn: 'three thousand',
          meaningBn: 'তিন হাজার (৩০০০)',
          tag: 'Price N5'
        },
        {
          kanji: '八千',
          kana: 'はっせん',
          romaji: 'hassen',
          meaningEn: 'eight thousand',
          meaningBn: 'আট হাজার (৮০০০)',
          tag: 'Price N5'
        },
        {
          kanji: '千円札',
          kana: 'せんえんさつ',
          romaji: "sen'ensatsu",
          meaningEn: '1,000-yen banknote',
          meaningBn: '১০০০ ইয়েনের কাগজের নোট',
          tag: 'Money N5'
        },
        {
          kanji: '千葉県',
          kana: 'ちばけん',
          romaji: 'chibaken',
          meaningEn: 'Chiba Prefecture',
          meaningBn: 'চিবা প্রিফেকচার (টোকিওর পাশে)',
          tag: 'Japan Place'
        }
      ],
      sentences: [
        {
          ja: 'お会計は二千五百円です。',
          romaji: 'Okaikei wa nisen gohyakuen desu.',
          meaningEn: 'The total bill is 2,500 yen.',
          meaningBn: 'বিল বাবদ মোট ২,৫০০ ইয়েন হয়েছে।'
        },
        {
          ja: '千円札を崩して小銭にしてください。',
          romaji: 'Sen\'ensatsu o kuzushite kozeni ni shite kudasai.',
          meaningEn: 'Please break this 1,000-yen bill into coins.',
          meaningBn: '১,০০০ ইয়েনের নোটটি ভাঙিয়ে খুচরা করে দিন দয়া করে।'
        },
        {
          ja: 'この牛肉は千円引きでお得でした。',
          romaji: 'Kono gyuuniku wa sen\'enbiki de otoku deshita.',
          meaningEn: 'This beef was 1,000 yen off and a great deal.',
          meaningBn: 'এই গরুর মাংস ১,০০০ ইয়েন ছাড়ে পাওয়া গেছে এবং খুব সাশ্রয়ী ছিল।'
        }
      ],
      tamagoTip: {
        bn: 'মানুষ (人) ও দশ (十) মিলে এক হাজার জনের বিশাল দল বোঝায়। ৩টি স্ট্রোক।',
        en: 'A person (人) mark crossed with ten (十) signifying thousands of people.'
      }
    },
    // 13. 万
    {
      id: 'l2-man',
      kanji: '万',
      emoji: '💴',
      strokeCount: 3,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [
          { kana: 'マン', romaji: 'man' },
          { kana: 'バン', romaji: 'ban' }
        ],
        kunyomi: [{ kana: 'よろず', romaji: 'yorozu' }]
      },
      meanings: {
        en: 'ten thousand (10,000), myriad',
        bn: 'দশ হাজার (১০০০০), মান (জাপানি গণনা একক)'
      },
      vocab: [
        {
          kanji: '一万',
          kana: 'いちまん',
          romaji: 'ichiman',
          meaningEn: 'ten thousand (10,000)',
          meaningBn: 'দশ হাজার (১ মান)',
          tag: 'Price N5'
        },
        {
          kanji: '一万円札',
          kana: 'いちまんえんさつ',
          romaji: 'ichiman\'ensatsu',
          meaningEn: '10,000-yen banknote',
          meaningBn: '১০,০০০ ইয়েনের সর্বোচ্চ নোট',
          tag: 'Money N5'
        },
        {
          kanji: '五万',
          kana: 'ごまん',
          romaji: 'goman',
          meaningEn: 'fifty thousand (50,000)',
          meaningBn: 'পঞ্চাশ হাজার',
          tag: 'Price N5'
        },
        {
          kanji: '万引き',
          kana: 'まんびき',
          romaji: 'manbiki',
          meaningEn: 'shoplifting (warning sign)',
          meaningBn: 'দোকান থেকে চুরি (সতর্কতামূলক সাইন)',
          tag: 'Supermarket Warning'
        },
        {
          kanji: '万歳',
          kana: 'ばんざい',
          romaji: 'banzai',
          meaningEn: 'Banzai! / Long live!',
          meaningBn: 'বানজাই! দীর্ঘজীবী হোক!',
          tag: 'Culture'
        },
        {
          kanji: '万一',
          kana: 'まんいち',
          romaji: 'man\'ichi',
          meaningEn: 'by any chance, if worst comes to worst',
          meaningBn: 'দৈবাৎ, কোনো কারণে যদি',
          tag: 'N4'
        }
      ],
      sentences: [
        {
          ja: 'スーパーで一万円札を出してお釣りを貰いました。',
          romaji: 'Suupaa de ichiman\'ensatsu o dashite otsuri o moraimashita.',
          meaningEn: 'I paid with a 10,000-yen bill at the supermarket and got change.',
          meaningBn: 'সুপারমার্কেটে ১০,০০০ ইয়েনের নোট দিয়ে বাকি টাকা ফেরত নিয়েছি।'
        },
        {
          ja: '家賃は毎月六万円です。',
          romaji: 'Yachin wa maitsuki rokuman\'en desu.',
          meaningEn: 'The apartment rent is 60,000 yen each month.',
          meaningBn: 'প্রতি মাসে বাসার ভাড়া ৬০,০০০ ইয়েন (৬ মান)।'
        },
        {
          ja: '店内に「万引き防止」の看板があります。',
          romaji: 'Tennai ni "manbiki boushi" no kanban ga arimasu.',
          meaningEn: 'There is a "Shoplifting Prevention" sign inside the shop.',
          meaningBn: 'দোকানের ভেতরে "চুরি প্রতিরোধ" বিষয়ক সাইনবোর্ড রয়েছে।'
        }
      ],
      tamagoTip: {
        bn: 'জাপানে টাকা গণনায় প্রতি ৪ অঙ্কে (10,000 = ১万) নতুন ঘর হয়। তাই ১万円 মানে প্রায় ৭,০০০-৮,০০০ টাকা।',
        en: 'Japanese numbers group by 10,000 (万) rather than 1,000. 1万円 is the largest banknote in Japan.'
      }
    },
    // 14. 円
    {
      id: 'l2-en',
      kanji: '円',
      emoji: '🪙',
      strokeCount: 4,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'エン', romaji: 'en' }],
        kunyomi: [{ kana: 'まる・い', romaji: 'maru-i' }]
      },
      meanings: {
        en: 'yen (currency), circle, round',
        bn: 'ইয়েন (জাপানের মুদ্রা), বৃত্ত, গোল'
      },
      vocab: [
        {
          kanji: '円',
          kana: 'えん',
          romaji: 'en',
          meaningEn: 'yen (Japanese currency)',
          meaningBn: 'ইয়েন (জাপানি মুদ্রা)',
          tag: 'Price N5'
        },
        {
          kanji: '百円',
          kana: 'ひゃくえん',
          romaji: 'hyakuen',
          meaningEn: '100 yen',
          meaningBn: 'একশত ইয়েন',
          tag: 'Price N5'
        },
        {
          kanji: '千円',
          kana: 'せんえん',
          romaji: 'sen\'en',
          meaningEn: '1,000 yen',
          meaningBn: 'এক হাজার ইয়েন',
          tag: 'Price N5'
        },
        {
          kanji: '円高',
          kana: 'えんだか',
          romaji: 'endaka',
          meaningEn: 'strong yen',
          meaningBn: 'শক্তিশালী ইয়েন দর',
          tag: 'Business N4'
        },
        {
          kanji: '円安',
          kana: 'えんやす',
          romaji: 'enyasu',
          meaningEn: 'weak yen',
          meaningBn: 'দুর্বল ইয়েন দর',
          tag: 'Business N4'
        },
        {
          kanji: '円い',
          kana: 'まるい',
          romaji: 'marui',
          meaningEn: 'round, circular',
          meaningBn: 'গোল, বৃত্তাকার',
          tag: 'Daily N5'
        }
      ],
      sentences: [
        {
          ja: 'これはいくらですか。―五百円です。',
          romaji: 'Kore wa ikura desu ka. - Gohyakuen desu.',
          meaningEn: 'How much is this? - It is 500 yen.',
          meaningBn: 'এটার দাম কত? — এটি ৫০০ ইয়েন।'
        },
        {
          ja: '百円ショップで食器を揃えました。',
          romaji: 'Hyakuen shoppu de shokki o soroemashita.',
          meaningEn: 'I bought tableware at the 100-yen shop.',
          meaningBn: '১০০ ইয়েনের দোকান থেকে খাবারের থালাবাসন কিনেছি।'
        },
        {
          ja: '消費税込みで千八十円になりました。',
          romaji: 'Shouhizei-komi de sen hachijuuen ni narimashita.',
          meaningEn: 'With consumption tax included, it became 1,080 yen.',
          meaningBn: 'ভ্যাট বা ট্যাক্স সহ মোট ১,০৮০ ইয়েন হয়েছে।'
        }
      ],
      tamagoTip: {
        bn: 'বৃত্তাকার মুদ্রার আকৃতি থেকে 円 কান্জি এসেছে। জাপানি পণ্যের দামের পাশে সর্বদা এই কান্জি থাকে।',
        en: 'Originally depicting a round coin. Found next to almost every price tag in Japan.'
      }
    },

    // --- READ-ONLY KANJI (読める) ---
    // 15. 牛肉
    {
      id: 'l2-gyuuniku',
      kanji: '牛肉',
      emoji: '🥩',
      strokeCount: 10,
      jlpt: 'N5',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'ギュウニク', romaji: 'gyuuniku' }],
        kunyomi: []
      },
      meanings: {
        en: 'beef (cow meat)',
        bn: 'গরুর মাংস (বিফ)'
      },
      vocab: [
        {
          kanji: '牛肉',
          kana: 'ぎゅうにく',
          romaji: 'gyuuniku',
          meaningEn: 'beef',
          meaningBn: 'গরুর মাংস',
          tag: 'Supermarket N5'
        },
        {
          kanji: '和牛',
          kana: 'わぎゅう',
          romaji: 'wagyuu',
          meaningEn: 'Wagyu (premium Japanese beef)',
          meaningBn: 'ওয়াগিউ (জাপানি প্রিমিয়াম গরুর মাংস)',
          tag: 'Gourmet'
        },
        {
          kanji: '牛丼',
          kana: 'ぎゅうどん',
          romaji: 'gyuudon',
          meaningEn: 'beef bowl (Yoshinoya, Sukiya)',
          meaningBn: 'গিউদোন (ভাতের ওপর গরুর মাংসের জনপ্রিয় পদ)',
          tag: 'Daily Food'
        },
        {
          kanji: '牛乳',
          kana: 'ぎゅうにゅう',
          romaji: 'gyuunyuu',
          meaningEn: 'cow\'s milk',
          meaningBn: 'গরুর দুধ',
          tag: 'Supermarket N5'
        },
        {
          kanji: '肉屋',
          kana: 'にくや',
          romaji: 'nikuya',
          meaningEn: 'butcher shop',
          meaningBn: 'মাংসের দোকান',
          tag: 'Shop N5'
        },
        {
          kanji: '牛',
          kana: 'うし',
          romaji: 'ushi',
          meaningEn: 'cow, cattle',
          meaningBn: 'গরু',
          tag: 'Animal N5'
        }
      ],
      sentences: [
        {
          ja: 'スーパーの肉売り場で牛肉を百グラム買いました。',
          romaji: 'Suupaa no niku-uriba de gyuuniku o hyakuguramu kaimashita.',
          meaningEn: 'I bought 100 grams of beef at the supermarket meat section.',
          meaningBn: 'সুপারমার্কেটের মাংসের কাউন্টার থেকে ১০০ গ্রাম গরুর মাংস কিনেছি।'
        },
        {
          ja: 'すき焼きには日本の牛肉がよく合います。',
          romaji: 'Sukiyaki ni wa Nihon no gyuuniku ga yoku aimasu.',
          meaningEn: 'Japanese beef goes very well with Sukiyaki.',
          meaningBn: 'সুকিয়াকি খাবারের সাথে জাপানের গরুর মাংস খুব ভালো মানায়।'
        },
        {
          ja: '牛丼屋で並盛りを一つ注文しました。',
          romaji: 'Gyuudonya de namimori o hitotsu chuumon shimashita.',
          meaningEn: 'I ordered one regular size at the beef bowl shop.',
          meaningBn: 'গিউদোনের দোকানে একটি রেগুলার সাইজের বাটি অর্ডার করেছি।'
        }
      ],
      tamagoTip: {
        bn: 'শিংওয়ালা গরু (牛) + মাংস (肉)। জাপানের সুপারমার্কেটের মিট সেকশনে এই লেবেলটি চেনা অত্যন্ত জরুরি।',
        en: 'Cow (牛) + Meat (肉) = Beef. Crucial for identifying meat packages in supermarkets.'
      }
    },
    // 16. 豚肉
    {
      id: 'l2-butaniku',
      kanji: '豚肉',
      emoji: '🥓',
      strokeCount: 17,
      jlpt: 'N5',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'トンニク', romaji: 'tonniku' }],
        kunyomi: [{ kana: 'ぶたにく', romaji: 'butaniku' }]
      },
      meanings: {
        en: 'pork (pig meat)',
        bn: 'শূকরের মাংস (পর্ক)'
      },
      vocab: [
        {
          kanji: '豚肉',
          kana: 'ぶたにく',
          romaji: 'butaniku',
          meaningEn: 'pork',
          meaningBn: 'শূকরের মাংস',
          tag: 'Supermarket N5'
        },
        {
          kanji: '豚カツ',
          kana: 'とんカツ',
          romaji: 'tonkatsu',
          meaningEn: 'pork cutlet',
          meaningBn: 'শূকরের মাংসের কাটলেট',
          tag: 'Daily Food'
        },
        {
          kanji: '豚骨',
          kana: 'とんこつ',
          romaji: 'tonkotsu',
          meaningEn: 'pork bone broth (ramen)',
          meaningBn: 'পর্ক ব্রোথ (টোকিও/হাকাতা রামেন স্যুপ)',
          tag: 'Food Culture'
        },
        {
          kanji: '豚汁',
          kana: 'とんじる / ぶたじる',
          romaji: 'tonjiru / butajiru',
          meaningEn: 'pork and vegetable miso soup',
          meaningBn: 'পর্ক ও শাকসবজির মিসো স্যুপ',
          tag: 'Daily Food'
        },
        {
          kanji: '豚',
          kana: 'ぶた',
          romaji: 'buta',
          meaningEn: 'pig, swine',
          meaningBn: 'শূকর',
          tag: 'Animal N5'
        },
        {
          kanji: '焼肉',
          kana: 'やきにく',
          romaji: 'yakiniku',
          meaningEn: 'grilled meat, BBQ',
          meaningBn: 'গ্রিল করা মাংস, ইয়াকিনিকু',
          tag: 'Food N5'
        }
      ],
      sentences: [
        {
          ja: 'イスラム教徒の友達は豚肉を食べません。',
          romaji: 'Isuramukyouto no tomodachi wa butaniku o tabemasen.',
          meaningEn: 'My Muslim friend does not eat pork.',
          meaningBn: 'আমার মুসলিম বন্ধু শূকরের মাংস খায় না।'
        },
        {
          ja: 'ラーメンのスープに豚骨が使われています。',
          romaji: 'Raamen no suupu ni tonkotsu ga tsukawarete imasu.',
          meaningEn: 'Pork bone broth is used in the ramen soup.',
          meaningBn: 'রামেনের স্যুপে পর্ক বোন ব্রোথ (豚骨) ব্যবহৃত হয়েছে।'
        },
        {
          ja: '食品の裏の表示を見て、豚肉が入っていないか確認します。',
          romaji: 'Shokuhin no ura no hyouji o mite, butaniku ga haitte inai ka kakunin shimasu.',
          meaningEn: 'I check the label on the back of food items to make sure there is no pork.',
          meaningBn: 'খাবারের প্যাকেটের পেছনের তালিকা দেখে নিশ্চিত হই যে শূকরের মাংস নেই।'
        }
      ],
      tamagoTip: {
        bn: 'শূকর (豚) + মাংস (肉)। হালাল ও খাদ্যতালিকা সচেতন ব্যক্তিদের জন্য জাপানে এই কান্জিটি চেনা অপরিহার্য।',
        en: 'Pig (豚) + Meat (肉) = Pork. An indispensable kanji to recognize for dietary or halal preferences in Japan.'
      }
    },
    // 17. 鶏肉
    {
      id: 'l2-toriniku',
      kanji: '鶏肉',
      emoji: '🍗',
      strokeCount: 25,
      jlpt: 'N5',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'ケイニク', romaji: 'keiniku' }],
        kunyomi: [{ kana: 'とりにく', romaji: 'toriniku' }]
      },
      meanings: {
        en: 'chicken meat, poultry',
        bn: 'মুরগির মাংস (চিকেন)'
      },
      vocab: [
        {
          kanji: '鶏肉',
          kana: 'とりにく',
          romaji: 'toriniku',
          meaningEn: 'chicken meat',
          meaningBn: 'মুরগির মাংস',
          tag: 'Supermarket N5'
        },
        {
          kanji: '焼き鳥',
          kana: 'やきとり',
          romaji: 'yakitori',
          meaningEn: 'grilled skewered chicken',
          meaningBn: 'ইয়াকিতোরি (শিক কাবাব চিকেন)',
          tag: 'Daily Food'
        },
        {
          kanji: '鳥肉',
          kana: 'とりにく',
          romaji: 'toriniku',
          meaningEn: 'poultry meat (alternative writing)',
          meaningBn: 'পাখি/মুরগির মাংস (বিকল্প বানান)',
          tag: 'Supermarket'
        },
        {
          kanji: 'から揚げ',
          kana: 'からあげ',
          romaji: 'karaage',
          meaningEn: 'Japanese fried chicken',
          meaningBn: 'জাপানি ফ্রাইড চিকেন (কারাআগে)',
          tag: 'Daily Food'
        },
        {
          kanji: '鶏卵',
          kana: 'けいらん',
          romaji: 'keiran',
          meaningEn: 'hen\'s egg (label)',
          meaningBn: 'মুরগির ডিম (প্যাকেট লেবেল)',
          tag: 'Supermarket'
        },
        {
          kanji: '小鳥',
          kana: 'ことり',
          romaji: 'kotori',
          meaningEn: 'small bird',
          meaningBn: 'ছোট পাখি',
          tag: 'Daily N5'
        }
      ],
      sentences: [
        {
          ja: '今夜は鶏肉と玉ねぎでカレーを作ります。',
          romaji: 'Kon\'ya wa toriniku to tamanegi de karee o tsukurimasu.',
          meaningEn: 'Tonight I will make curry with chicken and onions.',
          meaningBn: 'আজ রাতে মুরগির মাংস ও পেঁয়াজ দিয়ে কারি তৈরি করব।'
        },
        {
          ja: 'コンビニで出来立ての鶏肉のから揚げを買いました。',
          romaji: 'Konbini de dekitate no toriniku no karaage o kaimashita.',
          meaningEn: 'I bought freshly prepared fried chicken at the convenience store.',
          meaningBn: 'কনভেনিয়েন্স স্টোর থেকে গরম গরম চিকেন কারাআগে কিনেছি।'
        },
        {
          ja: '鶏肉はヘルシーで高タンパクです。',
          romaji: 'Toriniku wa herushii de koutanpaku desu.',
          meaningEn: 'Chicken meat is healthy and high in protein.',
          meaningBn: 'মুরগির মাংস স্বাস্থ্যকর এবং প্রচুর প্রোটিনযুক্ত।'
        }
      ],
      tamagoTip: {
        bn: 'মুরগি/মোরগ (鶏) + মাংস (肉)। সুপারমার্কেটের প্যাকেটে 鳥肉 হিসেবেও প্রায়ই লেখা থাকে।',
        en: 'Rooster/Chicken (鶏) + Meat (肉) = Chicken meat. Also written as 鳥肉 on supermarket labels.'
      }
    },

    // --- VISUAL RECOGNITION KANJI (見て、わかる) ---
    // 18. 〜産 (産)
    {
      id: 'l2-san-origin',
      kanji: '〜産',
      emoji: '🗾',
      strokeCount: 11,
      jlpt: 'N4',
      category: 'visual_recognition',
      readings: {
        onyomi: [{ kana: 'サン', romaji: 'san' }],
        kunyomi: [
          { kana: 'う・む', romaji: 'u-mu' },
          { kana: 'う・まれる', romaji: 'u-mareru' }
        ]
      },
      meanings: {
        en: 'product of..., origin, produced in',
        bn: 'উৎপাদিত, দেশজ, অমুক অঞ্চলের পণ্য'
      },
      vocab: [
        {
          kanji: '国産',
          kana: 'こくさん',
          romaji: 'kokusan',
          meaningEn: 'domestic / produced in Japan',
          meaningBn: 'জাপানে উৎপাদিত, দেশীয় পণ্য',
          tag: 'Supermarket Sticker'
        },
        {
          kanji: '日本産',
          kana: 'にほんさん',
          romaji: 'nihonsan',
          meaningEn: 'product of Japan',
          meaningBn: 'জাপানি পণ্য, জাপানের ফলন',
          tag: 'Origin Label'
        },
        {
          kanji: '外国産',
          kana: 'がいこくさん',
          romaji: 'gaikokusan',
          meaningEn: 'imported / foreign product',
          meaningBn: 'আমদানিকৃত বিদেশি পণ্য',
          tag: 'Origin Label'
        },
        {
          kanji: '青森県産',
          kana: 'あおもりけんさん',
          romaji: 'Aomori-kensan',
          meaningEn: 'produced in Aomori Prefecture (famous apples)',
          meaningBn: 'আওমোরি প্রিফেকচারে উৎপাদিত (বিখ্যাত আপেল)',
          tag: 'Regional Food'
        },
        {
          kanji: '生産',
          kana: 'せいさん',
          romaji: 'seisan',
          meaningEn: 'production, manufacture',
          meaningBn: 'উৎপাদন',
          tag: 'N4'
        },
        {
          kanji: 'お土産',
          kana: 'おみやげ',
          romaji: 'omiyage',
          meaningEn: 'souvenir, local gift',
          meaningBn: 'স্মারক উপহার, ওমিয়াগে',
          tag: 'Culture N5'
        }
      ],
      sentences: [
        {
          ja: 'スーパーで「国産牛肉」のシールを確認して買います。',
          romaji: 'Suupaa de "kokusan gyuuniku" no shiiru o kakunin shite kaimasu.',
          meaningEn: 'I check the "Domestic Japanese Beef" sticker at the supermarket before buying.',
          meaningBn: 'সুপারমার্কেটে "জাপানে উৎপাদিত গরুর মাংস" (国産) স্টিকার দেখে কিনি।'
        },
        {
          ja: 'この甘いイチゴは福岡県産です。',
          romaji: 'Kono amai ichigo wa Fukuoka-kensan desu.',
          meaningEn: 'These sweet strawberries are produced in Fukuoka Prefecture.',
          meaningBn: 'এই মিষ্টি স্ট্রবেরিগুলো ফুকুওকা প্রিফেকচারে উৎপাদিত।'
        },
        {
          ja: '外国産の牛肉は国産より少し安いです。',
          romaji: 'Gaikokusan no gyuuniku wa kokusan yori sukoshi yasui desu.',
          meaningEn: 'Imported beef is slightly cheaper than domestic Japanese beef.',
          meaningBn: 'আমদানিকৃত গরুর মাংস জাপানের দেশি মাংসের চেয়ে কিছুটা সস্তা।'
        }
      ],
      tamagoTip: {
        bn: 'সুপারমার্কেটের ফলমূল ও মাংসের প্যাকেটে 国産 (জাপানের দেশীয়) বা 〜県産 (অমুক জেলার) স্টিকারে এই কান্জিটি সর্বত্র দেখা যায়।',
        en: 'Seen everywhere on supermarket produce and meat tags indicating origin: 国産 (Domestic) or 〜県産 (Prefecture-grown).'
      }
    },
    // 19. 〜引き (引)
    {
      id: 'l2-biki-discount',
      kanji: '〜引き',
      emoji: '🏷️',
      strokeCount: 4,
      jlpt: 'N5',
      category: 'visual_recognition',
      readings: {
        onyomi: [{ kana: 'イン', romaji: 'in' }],
        kunyomi: [{ kana: 'ひ・く', romaji: 'hi-ku' }]
      },
      meanings: {
        en: '...discount, off, price reduction, pull',
        bn: 'ছাড়, হ্রাস, ডিসকাউন্ট, টেনে কমানো'
      },
      vocab: [
        {
          kanji: '割引',
          kana: 'わりびき',
          romaji: 'waribiki',
          meaningEn: 'discount, percentage off',
          meaningBn: 'ছাড়, ডিসকাউন্ট',
          tag: 'Daily Supermarket'
        },
        {
          kanji: '２割引',
          kana: 'にわりびき',
          romaji: 'niwaribiki',
          meaningEn: '20% off',
          meaningBn: '২০% ছাড়',
          tag: 'Discount Sticker'
        },
        {
          kanji: '５割引',
          kana: 'ごわりびき',
          romaji: 'gowaribiki',
          meaningEn: '50% off (half price)',
          meaningBn: '৫০% ছাড় (অর্ধেক দাম)',
          tag: 'Discount Sticker'
        },
        {
          kanji: '値引き',
          kana: 'ねびき',
          romaji: 'nebiki',
          meaningEn: 'price reduction sticker',
          meaningBn: 'মূল্য হ্রাস, দাম কমানো',
          tag: 'Discount Sticker'
        },
        {
          kanji: '百円引き',
          kana: 'ひゃくえんびき',
          romaji: 'hyakuenbiki',
          meaningEn: '100 yen off',
          meaningBn: '১০০ ইয়েন ছাড়',
          tag: 'Discount Sticker'
        },
        {
          kanji: '引き出し',
          kana: 'ひきだし',
          romaji: 'hikidashi',
          meaningEn: 'drawer / withdrawal',
          meaningBn: 'ড্রয়ার / ব্যাংক থেকে টাকা তোলা',
          tag: 'Daily N4'
        }
      ],
      sentences: [
        {
          ja: '夕方七時になると、刺身とお弁当が「２割引」になります。',
          romaji: 'Yuugata shichiji ni naru to, sashimi to obentou ga "niwaribiki" ni narimasu.',
          meaningEn: 'At 7:00 PM, sashimi and bento boxes get marked 20% off.',
          meaningBn: 'সন্ধ্যা সাতটা বাজলেই সাশিমি এবং বেন্টো বক্সে "২০% ছাড়" স্টিকার পড়ে।'
        },
        {
          ja: '「百円引き」のシールが貼ってあるパンを選びました。',
          romaji: '"Hyakuenbiki" no shiiru ga hatte aru pan o erabimashita.',
          meaningEn: 'I chose the bread with the "100-yen off" sticker attached.',
          meaningBn: '"১০০ ইয়েন ছাড়" স্টিকার লাগানো রুটিটি আমি বেছে নিয়েছি।'
        },
        {
          ja: '閉店間際は「半額（５割引）」シールを狙うチャンスです。',
          romaji: 'Heiten majika wa "hangaku (gowaribiki)" shiiru o nerau chansu desu.',
          meaningEn: 'Right before store closing is your chance to catch half-price (50% off) stickers.',
          meaningBn: 'দোকান বন্ধের ঠিক আগে অর্ধেক দাম (৫০% ছাড়) স্টিকার পাওয়ার দারুণ সুযোগ।'
        }
      ],
      tamagoTip: {
        bn: 'ধনুক (弓) থেকে তীর টেনে বের করার চিত্র। সুপারমার্কেটে ２割引 মানে ২০% ছাড়, 百円引き মানে ১০০ ইয়েন মূল্যহ্রাস।',
        en: 'Drawing an arrow from a bow (弓). In stores, ２割引 means 20% off, 百円引き means 100 yen reduced.'
      }
    },
    // 20. 酒
    {
      id: 'l2-sake-alcohol',
      kanji: '酒',
      emoji: '🍶',
      strokeCount: 10,
      jlpt: 'N5',
      category: 'visual_recognition',
      readings: {
        onyomi: [{ kana: 'シュ', romaji: 'shu' }],
        kunyomi: [
          { kana: 'さけ', romaji: 'sake' },
          { kana: 'さか', romaji: 'saka' }
        ]
      },
      meanings: {
        en: 'alcohol, sake, rice wine, liquor',
        bn: 'মদ, অ্যালকোহল, জাপানি সাকে'
      },
      vocab: [
        {
          kanji: 'お酒',
          kana: 'おさけ',
          romaji: 'osake',
          meaningEn: 'alcohol, sake',
          meaningBn: 'অ্যালকোহলযুক্ত পানীয়, সাকে',
          tag: 'Daily N5'
        },
        {
          kanji: '日本酒',
          kana: 'にほんしゅ',
          romaji: 'nihonshu',
          meaningEn: 'Japanese rice wine (sake)',
          meaningBn: 'জাপানি ঐতিহ্যবাহী চালের মদ',
          tag: 'Culture N5'
        },
        {
          kanji: '居酒屋',
          kana: 'いざかや',
          romaji: 'izakaya',
          meaningEn: 'Japanese-style pub / diner',
          meaningBn: 'ইজাকায়া (জাপানি ডাইনিং পাব)',
          tag: 'Daily Culture'
        },
        {
          kanji: '酒屋',
          kana: 'さかや',
          romaji: 'sakaya',
          meaningEn: 'liquor store',
          meaningBn: 'মদের দোকান',
          tag: 'Shop N5'
        },
        {
          kanji: '飲酒運転',
          kana: 'いんしゅうんてん',
          romaji: 'inshuuuten',
          meaningEn: 'drunk driving (strictly prohibited)',
          meaningBn: 'মদ্যপ অবস্থায় গাড়ি চালানো (কঠোর নিষিদ্ধ)',
          tag: 'Traffic Warning'
        },
        {
          kanji: '洋酒',
          kana: 'ようしゅ',
          romaji: 'youshu',
          meaningEn: 'Western liquor/wine',
          meaningBn: 'পাশ্চাত্য মদ (হুইস্কি/ওয়াইন)',
          tag: 'Supermarket Shelf'
        }
      ],
      sentences: [
        {
          ja: 'コンビニの看板に「酒・たばこ」と書いてあります。',
          romaji: 'Konbini no kanban ni "Sake / Tabako" to kaite arimasu.',
          meaningEn: 'The convenience store sign reads "Sake (Liquor) & Tobacco".',
          meaningBn: 'কনভেনিয়েন্স স্টোরের সাইনবোর্ডে "অ্যালকোহল ও তামাক" লেখা থাকে।'
        },
        {
          ja: '日本では二十歳未満のお酒は法律で禁止されています。',
          romaji: 'Nihon de wa hatachi miman no osake wa houritsu de kinshi sarete imasu.',
          meaningEn: 'In Japan, alcohol under the age of 20 is forbidden by law.',
          meaningBn: 'জাপানে ২০ বছরের কম বয়সীদের জন্য অ্যালকোহল গ্রহণ আইনত নিষিদ্ধ।'
        },
        {
          ja: 'ジュース売り場と酒の売り場は分かれています。',
          romaji: 'Juusu-uriba to sake no uriba wa wakarete imasu.',
          meaningEn: 'The juice section and the alcohol section are separated.',
          meaningBn: 'জুসের কর্নার এবং অ্যালকোহলের কর্নার আলাদা করা থাকে।'
        }
      ],
      tamagoTip: {
        bn: 'বামপাশে পানির ফোঁটা (氵) + ডানপাশে অ্যালকোহলের বয়াম বা বোতল (酉)। সুপারমার্কেট বা কনবিনির বাইরে 「酒」 চিহ্ন দেখে সহজে চেনা যায়।',
        en: 'Water droplets (氵) beside a fermentation jar (酉). Printed outside convenience stores to signify licensed liquor sales.'
      }
    }
  ]
};
