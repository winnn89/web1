import React, { useState } from 'react';
import { TabId } from '../types';
import { GraduationCap, Mail, CheckCircle2, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  setCurrentTab: (tab: TabId) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentTab }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-sm mt-20">
      {/* Top Banner: Study Hack Newsletter */}
      <div className="bg-gradient-to-r from-indigo-950/70 via-slate-900 to-amber-950/30 border-b border-slate-800/80 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Bản tin hàng tuần miễn phí
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Đăng ký nhận bản tin "Study Hack" mỗi tuần
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              1 phương pháp học tập khoa học + 1 công cụ tối ưu + 1 câu chuyện thủ khoa gửi thẳng vào hòm thư vào mỗi sáng thứ Hai. Tặng ngay Ebook cẩm nang 50 trang.
            </p>
          </div>

          <div className="w-full md:w-auto flex-shrink-0">
            {subscribed ? (
              <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="font-semibold text-sm">Đã đăng ký thành công! Kiểm tra hộp thư của bạn nhé.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md w-full">
                <div className="relative flex-grow">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Nhập email trường học của bạn..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs hover:from-amber-300 hover:to-amber-400 transition-all flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/20 whitespace-nowrap"
                >
                  <span>Nhận Ebook</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Sitemap */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-amber-500 flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                HỌC ĐẠI HỌC PRO
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Nền tảng hướng dẫn phương pháp học tập khoa học, quản lý thời gian, công cụ tương tác Pomodoro, Planner, GPA Calculator và cẩm nang hòa nhập toàn diện dành riêng cho sinh viên Việt Nam.
            </p>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300 italic">
              "Đại học không dạy bạn phải học gì – nó dạy bạn cách tự học."
              <span className="block not-italic font-semibold text-amber-400/90 mt-1">— Tài liệu dự án · 2026</span>
            </div>
          </div>

          {/* Nav Col 1 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Nội dung cốt lõi</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setCurrentTab('college-101')} className="hover:text-amber-400 transition-colors">
                  Làm quen với đại học (101)
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('methods')} className="hover:text-amber-400 transition-colors">
                  8 Phương pháp học tập hiệu quả
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('time')} className="hover:text-amber-400 transition-colors">
                  Quản lý thời gian & Eisenhower
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('skills')} className="hover:text-amber-400 transition-colors">
                  Kỹ năng thiết yếu của sinh viên
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('exam')} className="hover:text-amber-400 transition-colors">
                  Chinh phục kỳ thi (6 giai đoạn)
                </button>
              </li>
            </ul>
          </div>

          {/* Nav Col 2 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Công cụ tương tác</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setCurrentTab('interactive')} className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <span>Quiz phong cách học (VARK)</span>
                  <span className="text-[10px] bg-amber-400/20 text-amber-300 px-1 rounded">Hot</span>
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('interactive')} className="hover:text-amber-400 transition-colors">
                  Pomodoro Timer + Lo-fi Ambient
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('interactive')} className="hover:text-amber-400 transition-colors">
                  Thời khóa biểu Planner kéo-thả
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('interactive')} className="hover:text-amber-400 transition-colors">
                  Máy tính GPA & Mô phỏng mục tiêu
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('interactive')} className="hover:text-amber-400 transition-colors">
                  Thử thách 21 ngày xây thói quen
                </button>
              </li>
            </ul>
          </div>

          {/* Nav Col 3 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Cộng đồng & Hỗ trợ</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setCurrentTab('community')} className="hover:text-amber-400 transition-colors">
                  Câu chuyện thủ khoa & vươn lên
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('community')} className="hover:text-amber-400 transition-colors">
                  Hỏi đáp diễn đàn sinh viên
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('community')} className="hover:text-amber-400 transition-colors">
                  Tải Template Cornell & Infographic
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('wellness')} className="hover:text-amber-400 transition-colors">
                  Sức khỏe tâm thần & chống Burnout
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('tools')} className="hover:text-amber-400 transition-colors">
                  Đạo đức học thuật khi ứng dụng AI
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Nội dung dựa trên khoa học nhận thức · Không sao chép bản quyền · 2026</span>
          </div>
          <div className="flex items-center gap-1">
            <span>Được thiết kế vì sự phát triển của sinh viên Việt Nam</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 mx-0.5" />
          </div>
        </div>
      </div>
    </footer>
  );
};
