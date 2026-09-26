import { Lesson } from '../types/kanji';

export const lesson17: Lesson = {
  id: 17,
  number: 17,
  titleJa: 'ショッピング',
  titleRomaji: 'Shoppingu',
  titleBn: 'কেনাকাটা (Shopping & Payments)',
  titleEn: 'Shopping & Payments',
  descriptionBn: 'জাপানে কেনাকাটা, দাম পরিশোধ, ট্যাক্স, রিটার্ন এবং ডেলিভারি সম্পর্কিত প্রয়োজনীয় কান্জি (服, 品, 電, 別, 引, 切, 送, 開, 閉, 安)।',
  descriptionEn: 'Essential Kanji for shopping, payments, discounts, taxes, and shipping in Japan.',
  kanjiList: [
    // --- Main Kanji (書ける: 服, 品, 電, 別, 引, 切, 送, 開, 閉, 安) ---
    {
      id: 'l17-fuku',
      kanji: '服',
      emoji: '🥼',
      strokeCount: 8,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'フク', romaji: 'fuku' }],
        kunyomi: []
      },
      meanings: {
        en: 'Clothes, dress, obey',
        bn: 'পোশাক, কাপড়, মেনে চলা'
      },
      vocab: [
        { kanji: '服', kana: 'ふく', romaji: 'fuku', meaningEn: 'clothes', meaningBn: 'পোশাক বা কাপড়', tag: 'N5' },
        { kanji: '洋服', kana: 'ようふく', romaji: 'youfuku', meaningEn: 'Western clothes', meaningBn: 'পশ্চিমা পোশাক', tag: 'N5' },
        { kanji: '和服', kana: 'わふく', romaji: 'wafuku', meaningEn: 'Japanese clothes', meaningBn: 'ঐতিহ্যবাহী জাপানি পোশাক (কিমোনো)', tag: 'N4' },
        { kanji: '制服', kana: 'せいふく', romaji: 'seifuku', meaningEn: 'uniform', meaningBn: 'ইউনিফর্ম', tag: 'N4' },
        { kanji: '下着', kana: 'したぎ', romaji: 'shitagi', meaningEn: 'underwear', meaningBn: 'অন্তর্বাস', tag: 'N4' }
      ],
      sentences: [
        {
          ja: 'デパートで新しい洋服を三着買いました।',
          romaji: 'Depato de atarashii youfuku o san-chaku kaimashita.',
          meaningEn: 'I bought three pieces of new Western clothes at the department store.',
          meaningBn: 'ডিপার্টমেন্টাল স্টোর থেকে তিনটি নতুন পশ্চিমা পোশাক কিনেছি।'
        },
        {
          ja: 'この学校は制服を着るルールになっています।',
          romaji: 'Kono gakkou wa seifuku o kiru ruuru ni natte imasu.',
          meaningEn: 'This school has a rule to wear uniforms.',
          meaningBn: 'এই স্কুলে ইউনিফর্ম পরা বাধ্যতামূলক নিয়ম।'
        }
      ]
    },
    {
      id: 'l17-hin',
      kanji: '品',
      emoji: '🛍️',
      strokeCount: 9,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ヒン', romaji: 'hin' }],
        kunyomi: [{ kana: 'しな', romaji: 'shina' }]
      },
      meanings: {
        en: 'Goods, article, quality',
        bn: 'পণ্য, জিনিস, মান'
      },
      vocab: [
        { kanji: '商品', kana: 'しょうひん', romaji: 'shouhin', meaningEn: 'product, goods', meaningBn: 'পণ্যসামগ্রী', tag: 'N4' },
        { kanji: '品物', kana: 'しなもの', romaji: 'shinamono', meaningEn: 'article, item', meaningBn: 'জিনিস বা পণ্য', tag: 'N4' },
        { kanji: '品質', kana: 'ひんしつ', romaji: 'hinshitsu', meaningEn: 'quality', meaningBn: 'পণ্যের মান', tag: 'N3' },
        { kanji: '食品', kana: 'しょくひん', romaji: 'shokuhin', meaningEn: 'food products', meaningBn: 'খাদ্যসামগ্রী', tag: 'N4' },
        { kanji: '化粧品', kana: 'けしょうひん', romaji: 'keshouhin', meaningEn: 'cosmetics', meaningBn: 'প্রসাধন সামগ্রী', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'この店の食品は安くて品質がとても良いです।',
          romaji: 'Kono mise no shokuhin wa yasukute hinshitsu ga totemo yoi desu.',
          meaningEn: 'The food items in this store are cheap and the quality is very good.',
          meaningBn: 'এই দোকানের খাদ্যসামগ্রী সস্তা এবং গুণগত মানও চমৎকার।'
        },
        {
          ja: 'ネットショップで買った品物が今日届きました।',
          romaji: 'Nettoshoppu de katta shinamono ga kyou todokimashita.',
          meaningEn: 'The item I bought online arrived today.',
          meaningBn: 'অনলাইন শপ থেকে কেনা জিনিসটি আজ এসে পৌঁছেছে।'
        }
      ]
    },
    {
      id: 'l17-den',
      kanji: '電',
      emoji: '⚡',
      strokeCount: 13,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'デン', romaji: 'den' }],
        kunyomi: []
      },
      meanings: {
        en: 'Electricity, electronic',
        bn: 'বিদ্যুৎ, ইলেকট্রনিক্স'
      },
      vocab: [
        { kanji: '電気', kana: 'でんき', romaji: 'denki', meaningEn: 'electricity, light', meaningBn: 'বিদ্যুৎ বা লাইট', tag: 'N5' },
        { kanji: '電車', kana: 'でんしゃ', romaji: 'densha', meaningEn: 'electric train', meaningBn: 'বৈদ্যুতিক ট্রেন', tag: 'N5' },
        { kanji: '電話', kana: 'でんわ', romaji: 'denwa', meaningEn: 'telephone', meaningBn: 'ফোন কল', tag: 'N5' },
        { kanji: '電子レンジ', kana: 'でんしレンジ', romaji: 'denhirenji', meaningEn: 'microwave oven', meaningBn: 'মাইক্রোওয়েভ ওভেন', tag: 'N4' },
        { kanji: '電化製品', kana: 'てんかせいひん', romaji: 'denka seihin', meaningEn: 'electric appliances', meaningBn: 'বৈদ্যুতিক গৃহস্থালি সামগ্রী', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '電気代を払うためにコンビニへ行きます।',
          romaji: 'Denkidai o harau tame ni konbini e ikimasu.',
          meaningEn: 'I will go to the convenience store to pay the electricity bill.',
          meaningBn: 'বিদ্যুৎ বিল দেওয়ার জন্য কনভেনিয়েন্স স্টোরে যাচ্ছি।'
        },
        {
          ja: '秋葉原で新しい電化製品を見ました।',
          romaji: 'Akihabara de atarashii denka seihin o mimashita.',
          meaningEn: 'I looked at new electrical appliances in Akihabara.',
          meaningBn: 'আকিহাবারাতে নতুন সব ইলেকট্রনিক সামগ্রী দেখেছি।'
        }
      ]
    },
    {
      id: 'l17-betsu',
      kanji: '別',
      emoji: '🔀',
      strokeCount: 7,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ベツ', romaji: 'betsu' }],
        kunyomi: [{ kana: 'わか.れる', romaji: 'waka.reru' }]
      },
      meanings: {
        en: 'Separate, different, branch',
        bn: 'আলাদা, ভিন্ন, বিদায় নেওয়া'
      },
      vocab: [
        { kanji: '別々', kana: 'べつべつ', romaji: 'betsubetsu', meaningEn: 'separately', meaningBn: 'আলাদা আলাদা', tag: 'N4' },
        { kanji: '特別', kana: 'とくべつ', romaji: 'tokubetsu', meaningEn: 'special, particular', meaningBn: 'বিশেষ', tag: 'N4' },
        { kanji: '別名', kana: 'べつめい', romaji: 'betsumei', meaningEn: 'alias, pseudonym', meaningBn: 'ভিন্ন নাম বা ছদ্মনাম', tag: 'N3' },
        { kanji: '別居', kana: 'べっきょ', romaji: 'bekkyo', meaningEn: 'living separately', meaningBn: 'আলাদা বসবাস করা', tag: 'N3' },
        { kanji: '別れる', kana: 'わかれる', romaji: 'wakareru', meaningEn: 'to separate, split', meaningBn: 'বিদায় নেওয়া বা আলাদা হওয়া', tag: 'N4' }
      ],
      sentences: [
        {
          ja: 'お会計は別々でお願いします।',
          romaji: 'Okaikei wa betsubetsu de onegai shimasu.',
          meaningEn: 'We would like to pay separately, please.',
          meaningBn: 'আমাদের বিলটি দয়া করে আলাদা আলাদা করে দিন।'
        },
        {
          ja: '誕生日には特別なプレゼントをあげたいです।',
          romaji: 'Tanjoubi ni wa tokubetsu na purezento o agetai desu.',
          meaningEn: 'I want to give a special present on the birthday.',
          meaningBn: 'জন্মদিনে একটি বিশেষ উপহার দিতে চাই।'
        }
      ]
    },
    {
      id: 'l17-hiku',
      kanji: '引',
      emoji: '🏷️',
      strokeCount: 4,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'イン', romaji: 'in' }],
        kunyomi: [{ kana: 'ひ.く', romaji: 'hi.ku' }]
      },
      meanings: {
        en: 'Pull, draw, subtract, discount',
        bn: 'টানা, কমানো, বিয়োগ বা ছাড়'
      },
      vocab: [
        { kanji: '引き出し', kana: 'ひきだし', romaji: 'hikidashi', meaningEn: 'drawer, withdrawal', meaningBn: 'ড্রয়ার বা টাকা তোলা', tag: 'N4' },
        { kanji: '割引', kana: 'わりびき', romaji: 'waribiki', meaningEn: 'discount', meaningBn: 'ছাড় বা ডিসকাউন্ট', tag: 'N4' },
        { kanji: '引く', kana: 'ひく', romaji: 'hiku', meaningEn: 'to pull, subtract', meaningBn: 'টানা বা বিয়োগ করা', tag: 'N5' },
        { kanji: '強引', kana: 'ごういん', romaji: 'gouin', meaningEn: 'coercive, pushy', meaningBn: 'জোর জবরদস্তিমূলক', tag: 'N3' },
        { kanji: '引っ越し', kana: 'ひっこし', romaji: 'hikkoshi', meaningEn: 'moving house', meaningBn: 'বাসা পরিবর্তন', tag: 'N4' }
      ],
      sentences: [
        {
          ja: 'この商品は定価の三割引になっています।',
          romaji: 'Kono shouhin wa teika no san-waribiki ni natte imasu.',
          meaningEn: 'This product is discounted by 30% from the list price.',
          meaningBn: 'এই পণ্যটিতে মূল দাম থেকে ৩০% ছাড় দেওয়া হচ্ছে।'
        },
        {
          ja: '銀行のATMでお金を引き出します।',
          romaji: 'Ginkou no eitiemu de okane o hikidashimasu.',
          meaningEn: 'I withdraw money from the bank ATM.',
          meaningBn: 'ব্যাংক এটিএম থেকে টাকা তুলছি।'
        }
      ]
    },
    {
      id: 'l17-kiru',
      kanji: '切',
      emoji: '✂️',
      strokeCount: 4,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'セツ', romaji: 'setsu' }],
        kunyomi: [{ kana: 'き.る', romaji: 'ki.ru' }]
      },
      meanings: {
        en: 'Cut, sharp, end',
        bn: 'কাটা, তীক্ষ্ণ, সমাপ্ত'
      },
      vocab: [
        { kanji: '切る', kana: 'きる', romaji: 'kiru', meaningEn: 'to cut', meaningBn: 'কাটা', tag: 'N5' },
        { kanji: '切手', kana: 'きって', romaji: 'kitte', meaningEn: 'postage stamp', meaningBn: 'ডাকটিকিট', tag: 'N5' },
        { kanji: '切符', kana: 'きっぷ', romaji: 'kippu', meaningEn: 'ticket', meaningBn: 'チケット', tag: 'N5' },
        { kanji: '締め切り', kana: 'しめきり', romaji: 'shimekiri', meaningEn: 'deadline', meaningBn: 'শেষ সময়সীমা', tag: 'N4' },
        { kanji: '大切な', kana: 'たいせつな', romaji: 'taisetsu na', meaningEn: 'important', meaningBn: 'গুরুত্বপূর্ণ', tag: 'N5' }
      ],
      sentences: [
        {
          ja: '願書の提出の締め切りは明日です।',
          romaji: 'Gansho no teishutsu no shimekiri wa ashita desu.',
          meaningEn: 'The deadline for submitting the application is tomorrow.',
          meaningBn: 'আবেদনপত্র জমা দেওয়ার শেষ সময়সীমা আগামীকাল।'
        },
        {
          ja: '切手をはがきに貼ってポストに入れます।',
          romaji: 'Kitte o hagaki ni hatte posuto ni iremasu.',
          meaningEn: 'I stick a stamp on the postcard and put it in the mailbox.',
          meaningBn: 'পোস্টকার্ডে ডাকটিকিট লাগিয়ে পোস্টবক্সে ফেলছি।'
        }
      ]
    },
    {
      id: 'l17-okuru',
      kanji: '送',
      emoji: '📦',
      strokeCount: 9,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ソウ', romaji: 'sou' }],
        kunyomi: [{ kana: 'おく.る', romaji: 'oku.ru' }]
      },
      meanings: {
        en: 'Send, dispatch, escort',
        bn: 'পাঠানো, পৌঁছে দেওয়া'
      },
      vocab: [
        { kanji: '送る', kana: 'おくる', romaji: 'okuru', meaningEn: 'to send', meaningBn: 'পাঠানো', tag: 'N5' },
        { kanji: '送料', kana: 'そうりょう', romaji: 'souryou', meaningEn: 'shipping fee', meaningBn: 'ডেলিভারি চার্জ', tag: 'N3' },
        { kanji: '送信', kana: 'そうしん', romaji: 'soushin', meaningEn: 'sending email/message', meaningBn: 'সেন্ড বা প্রেরণ করা', tag: 'N3' },
        { kanji: '見送り', kana: 'みおくり', romaji: 'miokuri', meaningEn: 'seeing off', meaningBn: 'বিদায় জানাতে যাওয়া', tag: 'N3' },
        { kanji: '転送', kana: 'てんそう', romaji: 'tensou', meaningEn: 'forwarding', meaningBn: 'ফরওয়ার্ড করা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'ネット通販で買うと、送料が無料になります।',
          romaji: 'Netto tsuuhan de kau to, souryou ga muryou ni narimasu.',
          meaningEn: 'If you buy online, shipping is free.',
          meaningBn: 'অনলাইন থেকে কেনাকাটা করলে ডেলিভারি চার্জ সম্পূর্ণ ফ্রি।'
        },
        {
          ja: '国に住んでいる家族に手紙を送りました।',
          romaji: 'Kuni ni sunde iru kazoku ni tegami o okurimashita.',
          meaningEn: 'I sent a letter to my family living in my home country.',
          meaningBn: 'দেশে থাকা আমার পরিবারের কাছে একটি চিঠি পাঠিয়েছি।'
        }
      ]
    },
    {
      id: 'l17-aku',
      kanji: '開',
      emoji: '📂',
      strokeCount: 12,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'カイ', romaji: 'kai' }],
        kunyomi: [{ kana: 'あ.ける', romaji: 'a.keru' }, { kana: 'あ.く', romaji: 'a.ku' }, { kana: 'ひら.く', romaji: 'hira.ku' }]
      },
      meanings: {
        en: 'Open, unfold, unpack',
        bn: 'খোলা, শুরু হওয়া'
      },
      vocab: [
        { kanji: '開ける', kana: 'あける', romaji: 'akeru', meaningEn: 'to open (something)', meaningBn: 'খোলা (সক্রিয়)', tag: 'N5' },
        { kanji: '開く', kana: 'ひらく', romaji: 'hiraku', meaningEn: 'to open, hold event', meaningBn: 'খোলা বা অনুষ্ঠান করা', tag: 'N4' },
        { kanji: '開店', kana: 'かいてん', romaji: 'kaiten', meaningEn: 'store opening', meaningBn: 'দোকান খোলা', tag: 'N3' },
        { kanji: '開発', kana: 'かいはつ', romaji: 'kaihatsu', meaningEn: 'development', meaningBn: 'উন্নয়ন বা ডেভেলপমেন্ট', tag: 'N3' },
        { kanji: '開始', kana: 'かいし', romaji: 'kaishi', meaningEn: 'start, begin', meaningBn: 'শুরু হওয়া', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '新しいお店の開店祝いに行きました।',
          romaji: 'Atarashii omise no kaiten iwai ni ikimashita.',
          meaningEn: 'I went to celebrate the opening of a new store.',
          meaningBn: 'নতুন দোকানের উদ্বোধনী উদযাপনে গিয়েছিলাম।'
        },
        {
          ja: '窓を開けて部屋の空気を入れ替えます।',
          romaji: 'Mado o akete heya no kuuki o irekaemasu.',
          meaningEn: 'I open the window to change the air in the room.',
          meaningBn: 'জানালাটি খুলে ঘরের বাতাস পরিষ্কার করে নিচ্ছি।'
        }
      ]
    },
    {
      id: 'l17-shimeru',
      kanji: '閉',
      emoji: '📁',
      strokeCount: 11,
      jlpt: 'N4',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'ヘイ', romaji: 'hei' }],
        kunyomi: [{ kana: 'し.める', romaji: 'shi.meru' }, { kana: 'し.まる', romaji: 'shi.maru' }, { kana: 'と.じる', romaji: 'to.jiru' }]
      },
      meanings: {
        en: 'Close, shut, block',
        bn: 'বন্ধ করা, বন্ধ হওয়া'
      },
      vocab: [
        { kanji: '閉める', kana: 'しめる', romaji: 'shimeru', meaningEn: 'to close (something)', meaningBn: 'বন্ধ করা (সক্রিয়)', tag: 'N5' },
        { kanji: '閉じる', kana: 'とじる', romaji: 'tojiru', meaningEn: 'to close (book/eyes)', meaningBn: 'বন্ধ করা (বই/চোখ)', tag: 'N4' },
        { kanji: '閉店', kana: 'へいてん', romaji: 'heiten', meaningEn: 'store closing', meaningBn: 'দোকান বন্ধ হওয়া', tag: 'N3' },
        { kanji: '閉会', kana: 'へいかい', romaji: 'heikai', meaningEn: 'closure of meeting', meaningBn: 'सभा সমাপ্তি', tag: 'N3' },
        { kanji: '閉鎖', kana: 'へいさ', romaji: 'heisa', meaningEn: 'shutdown, closure', meaningBn: 'স্থায়ীভাবে বন্ধ', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '夜十時になるとこのスーパーは閉店します।',
          romaji: 'Yoru juu-ji ni naru to kono suupaa wa heiten shimasu.',
          meaningEn: 'At 10 PM, this supermarket closes.',
          meaningBn: 'রাত ১০টা বাজলে এই সুপারমার্কেটটি বন্ধ হয়ে যায়।'
        },
        {
          ja: '寒いのでドアをしっかり閉めてください।',
          romaji: 'Samui node doa o shikkari shimete kudasai.',
          meaningEn: 'It is cold, so please close the door tightly.',
          meaningBn: 'ঠান্ডা লাগার কারণে দরজাটি ভালোভাবে বন্ধ করে দিন।'
        }
      ]
    },
    {
      id: 'l17-yasui',
      kanji: '安',
      emoji: '🪙',
      strokeCount: 6,
      jlpt: 'N5',
      category: 'main',
      readings: {
        onyomi: [{ kana: 'アン', romaji: 'an' }],
        kunyomi: [{ kana: 'やす.い', romaji: 'yasu.i' }]
      },
      meanings: {
        en: 'Cheap, inexpensive, peaceful, safe',
        bn: 'সস্তা, শান্ত, নিরাপদ'
      },
      vocab: [
        { kanji: '安い', kana: 'やすい', romaji: 'yasui', meaningEn: 'cheap, inexpensive', meaningBn: 'সস্তা বা কমদামী', tag: 'N5' },
        { kanji: '安心', kana: 'あんしん', romaji: 'anshin', meaningEn: 'peace of mind, relief', meaningBn: 'উদ্বেগমুক্ত হওয়া বা শান্তি পাওয়া', tag: 'N4' },
        { kanji: '安全', kana: 'あんぜん', romaji: 'anzen', meaningEn: 'safety, security', meaningBn: 'নিরাপদ বা নিরাপত্তা', tag: 'N4' },
        { kanji: '安値', kana: 'やすね', romaji: 'yasune', meaningEn: 'low price', meaningBn: 'কম মূল্য', tag: 'N3' },
        { kanji: '不安定', kana: 'ふあんてい', romaji: 'fuantei', meaningEn: 'unstable', meaningBn: 'অস্থির বা অনিশ্চিত', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'このスーパーの野菜は安くて新鮮です।',
          romaji: 'Kono suupaa no yasai wa yasukute shinsen desu.',
          meaningEn: 'The vegetables in this supermarket are cheap and fresh.',
          meaningBn: 'এই সুপারমার্কেটের সবজিগুলো বেশ সস্তা এবং সতেজ।'
        },
        {
          ja: '日本は夜でも一人で歩けるくらい安全な国です।',
          romaji: 'Nihon wa yoru demo hitori de arukeru kurai anzen na kuni desu.',
          meaningEn: 'Japan is a country safe enough to walk alone even at night.',
          meaningBn: 'জাপান এতটাই নিরাপদ দেশ যে রাতেও একা হেঁটে চলা যায়।'
        }
      ]
    },

    // --- Read Only (読める: 払う, 返品, 無料) ---
    {
      id: 'l17-harau',
      kanji: '払',
      emoji: '💴',
      strokeCount: 5,
      jlpt: 'N4',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'フツ', romaji: 'futsu' }],
        kunyomi: [{ kana: 'はら.う', romaji: 'hara.u' }]
      },
      meanings: {
        en: 'Pay, clear away, brush off',
        bn: 'টাকা পরিশোধ করা, দূর করা'
      },
      vocab: [
        { kanji: '払う', kana: 'はらう', romaji: 'harau', meaningEn: 'to pay', meaningBn: 'পরিশোধ করা', tag: 'N4' },
        { kanji: '支払い', kana: 'しはらい', romaji: 'shiharai', meaningEn: 'payment', meaningBn: 'পেমেন্ট বা বিল পরিশোধ', tag: 'N4' },
        { kanji: '前払い', kana: 'まえばらい', romaji: 'maebarai', meaningEn: 'advance payment', meaningBn: 'অগ্রিম পেমেন্ট', tag: 'N3' },
        { kanji: '払戻金', kana: 'はらいもどしきん', romaji: 'haraimodoshikin', meaningEn: 'refund', meaningBn: 'রিফান্ড বা রিফান্ডের টাকা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'お支払いは現金ですか、カードですか।',
          romaji: 'Oshiharai wa genkin desu ka, kaado desu ka.',
          meaningEn: 'Is your payment by cash or card?',
          meaningBn: 'আপনি ক্যাশে বিল দেবেন নাকি কার্ডে?'
        },
        {
          ja: 'レジで代金をしっかりと払いました।',
          romaji: 'Reji de daikin o shikkari to haraimashita.',
          meaningEn: 'I paid the price properly at the cash register.',
          meaningBn: 'ক্যাশ কাউন্টারে বিলের টাকা ঠিকঠাক বুঝিয়ে দিয়েছি।'
        }
      ]
    },
    {
      id: 'l17-henpin',
      kanji: '返',
      emoji: '🔄',
      strokeCount: 7,
      jlpt: 'N4',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'ヘン', romaji: 'hen' }],
        kunyomi: [{ kana: 'かえ.す', romaji: 'kae.su' }, { kana: 'かえ.る', romaji: 'kae.ru' }]
      },
      meanings: {
        en: 'Return, repay, answer',
        bn: 'ফেরত দেওয়া, জবাব দেওয়া'
      },
      vocab: [
        { kanji: '返品', kana: 'へんぴん', romaji: 'henpin', meaningEn: 'return of goods', meaningBn: 'পণ্য ফেরত', tag: 'N3' },
        { kanji: '返事', kana: 'へんじ', romaji: 'henji', meaningEn: 'reply, answer', meaningBn: 'উত্তর বা সাড়া', tag: 'N5' },
        { kanji: '返却', kana: 'へんきゃく', romaji: 'henkyaku', meaningEn: 'returning something borrowed', meaningBn: 'ধার করা জিনিস ফেরত দেওয়া', tag: 'N3' },
        { kanji: '返す', kana: 'かえす', romaji: 'kaesu', meaningEn: 'to return (something)', meaningBn: 'ফেরত দেওয়া', tag: 'N5' }
      ],
      sentences: [
        {
          ja: 'サイズが合わない靴を返品して返金を求めました।',
          romaji: 'Saizu ga awanai kutsu o henpin shite henkin o motomemashita.',
          meaningEn: 'I returned the shoes that did not fit and asked for a refund.',
          meaningBn: 'সাইজ না মেলায় জুতো জোড়া ফেরত দিয়ে টাকা রিফান্ড চেয়েছি।'
        },
        {
          ja: '図書館に借りていた本を返却します।',
          romaji: 'Toshokan ni kariteita hon o henkyaku shimasu.',
          meaningEn: 'I will return the borrowed book to the library.',
          meaningBn: 'লাইব্রেরি থেকে ধার নেওয়া বইটি ফেরত দিয়ে আসব।'
        }
      ]
    },
    {
      id: 'l17-muryou',
      kanji: '無',
      emoji: '🆓',
      strokeCount: 12,
      jlpt: 'N4',
      category: 'read_only',
      readings: {
        onyomi: [{ kana: 'ム', romaji: 'mu' }],
        kunyomi: [{ kana: 'な.い', romaji: 'na.i' }]
      },
      meanings: {
        en: 'Nothing, without, free',
        bn: 'নেই, বিনামূল্যে'
      },
      vocab: [
        { kanji: '無料', kana: 'むりょう', romaji: 'muryou', meaningEn: 'free of charge', meaningBn: 'বিনামূল্যে', tag: 'N3' },
        { kanji: '無い', kana: 'ない', romaji: 'nai', meaningEn: 'there is none', meaningBn: 'নেই', tag: 'N5' },
        { kanji: '無駄', kana: 'むだ', romaji: 'muda', meaningEn: 'wasteful', meaningBn: 'অপচয়', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'こちらのアプリは無料でダウンロードできます।',
          romaji: 'Kochira no apuri wa muryou de daunroodo dekimasu.',
          meaningEn: 'This app can be downloaded for free.',
          meaningBn: 'এই অ্যাপটি সম্পূর্ণ বিনামূল্যে ডাউনলোড করা যাবে।'
        }
      ]
    },

    // --- Visual Recognition (見て、分かる: 価格, 税, ～込) ---
    {
      id: 'l17-kakaku',
      kanji: '価格',
      emoji: '🏷️',
      strokeCount: 10,
      jlpt: 'N3',
      category: 'visual_recognition',
      readings: {
        onyomi: [{ kana: 'カカク', romaji: 'kakaku' }],
        kunyomi: []
      },
      meanings: {
        en: 'Price, cost, value',
        bn: 'মূল্য, দাম, ভ্যালু'
      },
      vocab: [
        { kanji: '価格', kana: 'かかく', romaji: 'kakaku', meaningEn: 'price', meaningBn: 'মূল্য বা দাম', tag: 'N3' },
        { kanji: '物価', kana: 'ぶっか', romaji: 'bukka', meaningEn: 'cost of living, prices', meaningBn: 'নিত্যপণ্যের মূল্য / বাজারদর', tag: 'N3' },
        { kanji: '定価', kana: 'ていか', romaji: 'teika', meaningEn: 'fixed price', meaningBn: 'নির্ধারিত গায়ের দাম', tag: 'N3' },
        { kanji: '高価な', kana: 'こうかな', romaji: 'kouka na', meaningEn: 'expensive, valuable', meaningBn: 'দামি বা মূল্যবান', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '最近は日本の物価が高くなっています।',
          romaji: 'Saikin wa Nihon no bukka ga takaku natte imasu.',
          meaningEn: 'Recently, the cost of living in Japan has become high.',
          meaningBn: 'আজকাল জাপানের নিত্যপ্রয়োজনীয় জিনিসের দাম বেড়ে গেছে।'
        },
        {
          ja: '商品の価格をタグで確認してから買います।',
          romaji: 'Shouhin no kakaku o tagu de kakunin shite kara kaimasu.',
          meaningEn: 'I check the price of the product on the tag before buying.',
          meaningBn: 'ট্যাগে পণ্যের মূল্য যাচাই করে তবেই জিনিস কিনি।'
        }
      ]
    },
    {
      id: 'l17-zei',
      kanji: '税',
      emoji: '🧾',
      strokeCount: 12,
      jlpt: 'N3',
      category: 'visual_recognition',
      readings: {
        onyomi: [{ kana: 'ゼイ', romaji: 'zei' }],
        kunyomi: []
      },
      meanings: {
        en: 'Tax, duty',
        bn: 'ট্যাক্স, কর, ভ্যাট'
      },
      vocab: [
        { kanji: '税金', kana: 'ぜいきん', romaji: 'zeikin', meaningEn: 'tax', meaningBn: 'ট্যাক্স বা কর', tag: 'N3' },
        { kanji: '消費税', kana: 'しょうひぜい', romaji: 'shouhizei', meaningEn: 'consumption tax', meaningBn: 'কনজাম্পশন ট্যাক্স (ভ্যাট)', tag: 'N3' },
        { kanji: '免税店', kana: 'めんぜいてん', romaji: 'menzeiten', meaningEn: 'duty-free shop', meaningBn: 'ট্যাক্স-ফ্রি শপ', tag: 'N3' },
        { kanji: '課税', kana: 'かぜい', romaji: 'kazei', meaningEn: 'taxation', meaningBn: 'কর আরোপ করা', tag: 'N3' }
      ],
      sentences: [
        {
          ja: '空港の免税店でお土産を買うと安いです।',
          romaji: 'Kuukou no menzeiten de omiyage o kau to yasui desu.',
          meaningEn: 'Buying souvenirs at airport duty-free shops is cheap.',
          meaningBn: 'এয়ারপোর্টের ট্যাক্স-ফ্রি শপ থেকে গিফট কিনলে দাম কম পড়ে।'
        },
        {
          ja: '日本では現在、消費税が１０％です।',
          romaji: 'Nihon de wa genzai, shouhizei ga juupaasento desu.',
          meaningEn: 'In Japan, the consumption tax is currently 10%.',
          meaningBn: 'জাপানে বর্তমানে সাধারণ ভ্যাট (কনজাম্পশন ট্যাক্স) ১০%।'
        }
      ]
    },
    {
      id: 'l17-komi',
      kanji: '込',
      emoji: '📦',
      strokeCount: 5,
      jlpt: 'N3',
      category: 'visual_recognition',
      readings: {
        onyomi: [],
        kunyomi: [{ kana: 'こ.む', romaji: 'ko.mu' }, { kana: '-こ.み', romaji: '-komi' }]
      },
      meanings: {
        en: 'Included, crowded, loaded',
        bn: 'অন্তর্ভুক্ত (ভ্যাটসহ), ভিড়'
      },
      vocab: [
        { kanji: '税込み', kana: 'ぜいこみ', romaji: 'zeikomi', meaningEn: 'tax included', meaningBn: 'ট্যাক্স বা ভ্যাট সহ', tag: 'N3' },
        { kanji: '申し込む', kana: 'もうしこむ', romaji: 'moushikomu', meaningEn: 'to apply, sign up', meaningBn: 'আবেদন করা', tag: 'N3' },
        { kanji: '人込み', kana: 'ひとごみ', romaji: 'hitogomi', meaningEn: 'crowd of people', meaningBn: 'মানুষের ভিড়', tag: 'N3' },
        { kanji: '払い込み', kana: 'はらいこみ', romaji: 'haraikomi', meaningEn: 'payment, deposit', meaningBn: 'টাকা জমা দেওয়া', tag: 'N3' }
      ],
      sentences: [
        {
          ja: 'この表示価格はすべて税込み価格です।',
          romaji: 'Kono hyouji kakaku wa subete zeikomi kakaku desu.',
          meaningEn: 'This displayed price is all tax-included price.',
          meaningBn: 'এই প্রদর্শিত মূল্যটির সবকটিই ভ্যাটসহ মূল দাম।'
        },
        {
          ja: '休日のショッピングモールは人込みがすごいです।',
          romaji: 'Kyuujitsu no shoppingu mooru wa hitogomi ga sugoi desu.',
          meaningEn: 'The shopping mall on holidays is very crowded with people.',
          meaningBn: 'ছুটির দিনে শপিংমলগুলোতে উপচে পড়া ভিড় থাকে।'
        }
      ]
    }
  ]
};
