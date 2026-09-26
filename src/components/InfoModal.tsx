import React from 'react';
import { X, BookCheck, Sparkles, CheckCircle2 } from 'lucide-react';

interface InfoModalProps {
  onClose: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
      <div
        className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-stone-800 bg-[#12151b] text-stone-200 p-6 shadow-2xl custom-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-stone-400 hover:bg-stone-800 hover:text-stone-100 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2.5 text-amber-300 font-serif font-bold text-lg mb-1">
          <BookCheck className="h-5 w-5 text-amber-400" />
          <span>কান্জি তামাগো (Kanji Tamago · 漢字たまご) পরিচিতি</span>
        </div>
        <p className="text-xs text-stone-400 mb-4">
          A1-A2 স্তরের জন্য আধুনিক শিক্ষণ পদ্ধতির ওপর ভিত্তি করে গঠিত পাঠ্যক্রম
        </p>

        <div className="space-y-4 text-xs text-stone-300 leading-relaxed">
          <div className="rounded-2xl bg-[#161a22] p-4 border border-stone-800">
            <h4 className="font-semibold text-stone-100 text-sm mb-1.5 flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-amber-400" />
              <span>লেসন ভিত্তিক বিষয়বস্তু (Curriculum Breakdown)</span>
            </h4>
            <div className="space-y-2 mt-2">
              <div>
                <strong className="text-amber-300 font-semibold">লেসন ১ (どうぞよろしく！):</strong>
                <p className="text-stone-300 mt-0.5">
                  জাপানে নিজের পরিচয় (Self-Introduction), নাম, বয়স, জাতীয়তা ও স্কুল-বিশ্ববিদ্যালয়ের পরিচয় দেওয়ার আবশ্যক ৯টি কান্জি (私, 人, 才, 学, 生, 校, 日, 本, 語)।
                </p>
              </div>
              <div className="pt-2 border-t border-stone-800">
                <strong className="text-amber-300 font-semibold">লেসন ২ (買い物 - কেনাকাটা ও সুপারমার্কেট):</strong>
                <ul className="list-disc list-inside space-y-1 text-stone-300 mt-1">
                  <li><strong>মূল কান্জি (Main):</strong> সংখ্যা ও মুদ্রা (一 ~ 十, 百, 千, 万, 円)।</li>
                  <li><strong>পড়ার কান্জি (読める - Read-Only):</strong> সুপারমার্কেটের মিট কাউন্টারে মাংস চেনার কান্জি (牛肉, 豚肉, 鶏肉)।</li>
                  <li><strong>দেখে বোঝার কান্জি (見て、わかる - Visual Recognition):</strong> দেশীয় উৎস (〜産), ডিসকাউন্ট ছাড়ের স্টিকার (〜引き), এবং অ্যালকোহল সাইন (酒)।</li>
                </ul>
              </div>
              <div className="pt-2 border-t border-stone-800">
                <strong className="text-amber-300 font-semibold">লেসন ৩ (いつ、どこで？ - সময়, বার ও স্থান):</strong>
                <ul className="list-disc list-inside space-y-1 text-stone-300 mt-1">
                  <li><strong>মূল কান্জি (Main):</strong> সপ্তাহের দিন, সময়, বছর ও পরিমাণ (月, 火, 水, 木, 金, 土, 曜, 何, 年, 時, 間, 分 - ১২টি)।</li>
                  <li><strong>পড়ার কান্জি (読める):</strong> আবহাওয়া ও সাক্ষাতের জায়গা (雨, 場所 - ২টি)।</li>
                  <li><strong>দেখে বোঝার কান্জি (見て、わかる):</strong> ট্রেনের সময়সূচি ও ক্যালেন্ডার চিহ্ন (平日, 祝日 - ২টি)।</li>
                </ul>
              </div>
              <div className="pt-2 border-t border-stone-800">
                <strong className="text-amber-300 font-semibold">লেসন ৪ (新しい町で - নতুন শহরে ঠিকানা ও ফর্ম):</strong>
                <ul className="list-disc list-inside space-y-1 text-stone-300 mt-1">
                  <li><strong>মূল কান্জি (Main):</strong> দিক, শহর, নাম, দেশ ও পৌর ওয়ার্ড (東, 京, 名, 前, 国, 男, 女, 区, 市 - ৯টি)।</li>
                  <li><strong>পড়ার কান্জি (読める):</strong> যোগাযোগ ও পরিচয়পত্র (電話, 住所, 〜歳 - ৩টি)।</li>
                  <li><strong>দেখে বোঝার কান্জি (見て、わかる):</strong> সরকারি ফর্মের কলাম (性別 - ১টি)।</li>
                </ul>
              </div>
              <div className="pt-2 border-t border-stone-800">
                <strong className="text-amber-300 font-semibold">লেসন ৫ (楽しい週末 - ছুটির বিনোদন ও রেস্তোরাঁ):</strong>
                <ul className="list-disc list-inside space-y-1 text-stone-300 mt-1">
                  <li><strong>মূল কান্জি (Main):</strong> সপ্তাহ, সময় ও দৈনন্দিন কাজ (先, 週, 毎, 午, 後, 見, 食, 飲, 買, 物, 行, 休 - ১২টি)।</li>
                  <li><strong>পড়ার কান্জি (読める):</strong> বুফে ও আনলিমিটেড অফার (〜放題 যেমন 食べ放題, 飲み放題 - ১টি)।</li>
                  <li><strong>দেখে বোঝার কান্জি (見て、わかる):</strong> দোকানের কার্যক্রম ও হাঁটার দূরত্ব (営業, 徒歩 - ২টি)।</li>
                </ul>
              </div>
              <div className="pt-2 border-t border-stone-800">
                <strong className="text-amber-300 font-semibold">লেসন ৬ থেকে ১৫ (পর্যায়ক্রমিক সমগ্র সিলেবাস):</strong>
                <p className="text-stone-400 mt-0.5">
                  রেডিক্যাল, পরিবার, শখ, পরিবহন, ক্লিনিক, ভ্রমণ, ট্রাফিক সাইন ও আবহাওয়া বুলেটিনের সর্বমোট ২২৭টি কান্জির সমগ্র পাঠ্যক্রম।
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-amber-950/30 p-4 border border-amber-800/50">
            <h4 className="font-semibold text-amber-300 text-sm mb-1.5">
              মডুলার টগল সুইচের সুবিধা (Modular Independence)
            </h4>
            <div className="space-y-1.5 text-stone-300">
              <div className="flex items-start gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>ভিজ্যুয়াল ইমোজি:</strong> দৃষ্টিগ্রাহ্য স্মৃতির জন্য প্রতিটি কান্জির সাথে মানানসই ইমোজি।</span>
              </div>
              <div className="flex items-start gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>বাংলা ও ইংরেজি অর্থ:</strong> যে কোনো একটি বা উভয় ভাষায় সম্পূর্ণ স্বাধীনভাবে শেখার সুযোগ।</span>
              </div>
              <div className="flex items-start gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>কানা ও রোমাজি:</strong> বিগিনারদের জন্য রোমাজি অন এবং অ্যাডভান্সড শিক্ষার্থীদের জন্য রোমাজি হাইড করে কেবল কানা পড়ার সুবিধা।</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-xl bg-amber-600 hover:bg-amber-500 px-4 py-2 text-xs font-medium text-white transition-colors shadow-sm"
          >
            বুঝেছি (Got It)
          </button>
        </div>
      </div>
    </div>
  );
};
