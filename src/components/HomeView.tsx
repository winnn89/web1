import React, { useState } from 'react';
import { TabId } from '../types';
import { 
  Sparkles, 
  ArrowRight, 
  BrainCircuit, 
  CheckCircle2, 
  HelpCircle, 
  Clock, 
  Calendar, 
  Award, 
  BookOpen, 
  TrendingUp, 
  ChevronRight,
  Flame,
  ShieldCheck,
  Zap
} from 'lucide-react';

interface HomeViewProps {
  setCurrentTab: (tab: TabId) => void;
  onOpenMethodDetail: (methodId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ setCurrentTab, onOpenMethodDetail }) => {
  const [selectedPainPoint, setSelectedPainPoint] = useState<number | null>(0);
  const [activeRoadmapYear, setActiveRoadmapYear] = useState<number>(1);

  const painPoints = [
    {
      title: 'Học trước quên sau?',
      problem: 'Đọc đi đọc lại giáo trình 5 lần nhưng đến khi gấp sách lại hoặc vào phòng thi thì não hoàn toàn trắng xóa.',
      science: 'Do bạn đang sử dụng "Nhận diện thụ động" (Passive Recognition) thay vì "Truy hồi chủ động" (Active Retrieval). Não bộ chỉ củng cố đường mòn synapse khi bạn ép nó nhớ lại.',
      solution: 'Áp dụng phương pháp Active Recall kết hợp Spaced Repetition (Lặp lại ngắt quãng 1-3-7-14 ngày).',
      targetMethodId: 'active-recall',
      methodName: 'Xem phương pháp Active Recall'
    },
    {
      title: 'Hay trì hoãn & Nước đến chân mới nhảy?',
      problem: 'Biết là phải làm bài tập lớn nhưng cứ mở máy lên là lướt mạng xã hội, để đến 12h đêm trước hạn nộp mới cuống cuồng làm.',
      science: 'Hiện tượng "Hạch hạnh nhân bắt cóc" (Amygdala Hijack): Não bộ coi bài tập lớn là mối đe dọa đau khổ và tìm kiếm dopamine tức thời từ mạng xã hội.',
      solution: 'Dùng Kỹ thuật Pomodoro 25/5 kết hợp Quy tắc 10 phút khởi động vi mô để giảm sức ỳ ban đầu.',
      targetMethodId: 'pomodoro',
      methodName: 'Khám phá kỹ thuật Pomodoro'
    },
    {
      title: 'Quá tải deadline & Mất phương hướng?',
      problem: 'Học 7-8 môn cùng lúc, lịch thi dồn dập, hoạt động CLB và việc làm thêm khiến bạn kiệt sức, không biết bắt đầu từ đâu.',
      science: 'Quá tải nhận thức (Cognitive Overload). Trí nhớ ngắn hạn chỉ giữ được 4-7 mục thông tin cùng lúc nếu không được số hóa ra bên ngoài.',
      solution: 'Sử dụng Ma trận Eisenhower phân loại 4 vùng ưu tiên và kỹ thuật Time-blocking lịch tuần.',
      targetMethodId: 'time',
      methodName: 'Học cách làm chủ Thời gian'
    },
    {
      title: 'Áp lực điểm số & Sợ mất học bổng?',
      problem: 'Cày cuốc học cả ngày lẫn đêm nhưng điểm vẫn lẹt đẹt 6-7, trong khi bạn cùng lớp học nhẹ nhàng vẫn đạt 9-10.',
      science: 'Nghịch lý Dunning-Kruger và ảo tưởng về sự chăm chỉ (Illusion of hard work): Ngồi lâu trên ghế không đồng nghĩa với học sâu.',
      solution: 'Học theo Kỹ thuật Feynman để hiểu bản chất sâu sắc và học cách viết tóm tắt Cornell có hệ thống.',
      targetMethodId: 'feynman',
      methodName: 'Khám phá Kỹ thuật Feynman'
    }
  ];

  const roadmapData = [
    {
      year: 1,
      theme: 'Thích Nghi & Thiết Lập Nền Tảng',
      badge: 'Năm 1',
      goal: 'Bảo vệ CPA không bị rơi xuống vực thẳm và làm quen với phương pháp tự học',
      tasks: [
        'Hiểu bản chất hệ thống tín chỉ, quy chế học vụ và chuẩn đầu ra.',
        'Xây dựng thói quen tự học và thử nghiệm các phương pháp ghi chép (Cornell/Notion).',
        'Tạo lập nhóm bạn học 3-4 người cùng chuyên ngành để chia sẻ tài liệu.',
        'Tham gia 1 câu lạc bộ để mở rộng kỹ năng mềm và mạng lưới quan hệ.',
        'Chinh phục các môn đại cương (Toán, Triết học, Pháp luật) với điểm A/B+.'
      ]
    },
    {
      year: 2,
      theme: 'Xây Dựng Nền Tảng Chuyên Ngành & Ngoại Ngữ',
      badge: 'Năm 2',
      goal: 'Nắm vững kiến thức cơ sở ngành và bứt phá chứng chỉ ngoại ngữ quốc tế',
      tasks: [
        'Học sâu các môn tiên quyết cơ sở ngành (nền tảng của nghề nghiệp tương lai).',
        'Luyện thi và hoàn thành chứng chỉ tiếng Anh (IELTS 6.5+ / TOEIC 750+) hoặc ngoại ngữ 2.',
        'Bắt đầu tiếp cận các bài báo nghiên cứu khoa học (NCKH) dưới sự hướng dẫn của giảng viên.',
        'Học cách sử dụng công cụ chuyên ngành (Figma, GitHub, SPSS, SQL, AutoCad...).',
        'Duy trì CPA trên 3.2 để mở rộng cơ hội săn học bổng doanh nghiệp.'
      ]
    },
    {
      year: 3,
      theme: 'Chuyên Sâu, Nghiên Cứu & Thực Tập Khởi Động',
      badge: 'Năm 3',
      goal: 'Cọ xát với thực tế doanh nghiệp và hoàn thành các đồ án lớn',
      tasks: [
        'Đăng ký đề tài Nghiên cứu khoa học sinh viên cấp Khoa/Trường.',
        'Viết CV chuyên nghiệp và nộp đơn ứng tuyển các chương trình Thực tập sinh (Internship).',
        'Tham gia các cuộc thi học thuật, hackathon hoặc giải quyết tình huống kinh doanh (Case study).',
        'Xây dựng hồ sơ năng lực cá nhân (Portfolio/GitHub profile) thể hiện các dự án thực tế.',
        'Kết nối sâu với các thầy cô bộ môn và cựu sinh viên đi trước.'
      ]
    },
    {
      year: 4,
      theme: 'Khóa Luận, Tốt Nghiệp & Bứt Phá Sự Nghiệp',
      badge: 'Năm 4',
      goal: 'Tốt nghiệp đúng hạn với tấm bằng danh giá và có việc làm chính thức',
      tasks: [
        'Tập trung toàn lực hoàn thành Khóa luận tốt nghiệp hoặc các học phần thay thế.',
        'Thực tập tốt nghiệp toàn thời gian, thể hiện năng lực để được giữ lại làm nhân viên chính thức.',
        'Rà soát toàn bộ điều kiện tốt nghiệp (tín chỉ, GDTC, GDQP, chuẩn ngoại ngữ & tin học).',
        'Chuẩn bị hồ sơ ứng tuyển học bổng du học Thạc sĩ nếu có định hướng nghiên cứu.',
        'Tốt nghiệp với tâm thế của một cử nhân/kỹ sư tự tin, làm chủ tư duy phản biện.'
      ]
    }
  ];

  return (
    <div className="space-y-20 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-amber-500/15 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            {/* Tagline pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-lg backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-xs font-semibold text-slate-300">
                Bản Thiết Kế Nội Dung & Phương Pháp Đỉnh Cao Cho Sinh Viên Việt Nam
              </span>
            </div>

            {/* Main Punchy Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
              Học Thông Minh Hơn, <br className="hidden sm:inline" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-300 to-indigo-400">
                Không Phải Học Nhiều Hơn
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Bộ công cụ, phương pháp khoa học nhận thức và cẩm nang thực chiến giúp sinh viên bứt phá GPA 3.6+, làm chủ thời gian mà vẫn có cuộc sống sinh viên trọn vẹn.
            </p>

            {/* 2 CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
              <button
                onClick={() => setCurrentTab('interactive')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 font-extrabold text-sm hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-400/20 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 transition-all"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Làm Bài Test Phong Cách Học (3 Phút)</span>
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('roadmap-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-sm border border-slate-700/80 flex items-center justify-center gap-2 transition-all"
              >
                <span>Xem Lộ Trình 4 Năm</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Quote badge */}
            <div className="pt-2">
              <span className="text-xs text-slate-400 italic">
                "Đại học không dạy bạn phải học gì – nó dạy bạn cách tự học."
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR (SỐ LIỆU TẠO UY TÍN) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl backdrop-blur-xl">
          <div className="text-center p-3">
            <span className="block text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono">7+</span>
            <span className="text-xs text-slate-400 mt-1 block">Phương Pháp Khoa Học</span>
          </div>
          <div className="text-center p-3 border-l border-slate-800/80">
            <span className="block text-3xl sm:text-4xl font-extrabold text-indigo-400 font-mono">30+</span>
            <span className="text-xs text-slate-400 mt-1 block">Công Cụ Tuyển Chọn</span>
          </div>
          <div className="text-center p-3 border-l border-slate-800/80">
            <span className="block text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono">100+</span>
            <span className="text-xs text-slate-400 mt-1 block">Mẹo Thực Chiến Học Đường</span>
          </div>
          <div className="text-center p-3 border-l border-slate-800/80">
            <span className="block text-3xl sm:text-4xl font-extrabold text-purple-400 font-mono">5K+</span>
            <span className="text-xs text-slate-400 mt-1 block">Sinh Viên Đang Áp Dụng</span>
          </div>
        </div>
      </section>

      {/* 3. NỖI ĐAU CỦA SINH VIÊN (GÂY ĐỒNG CẢM & GIẢI PHÁP KHOA HỌC) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Bạn Có Đang Mắc Kẹt Ở Những Nỗi Đau Này?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Vấn Đề Không Phải Bạn Kém Thông Minh
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Vấn đề là bạn đang dùng công cụ học của cấp 3 để giải quyết bài toán đại học. Nhấn vào từng vấn đề để xem giải pháp khoa học:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {painPoints.map((item, idx) => {
              const isSelected = selectedPainPoint === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedPainPoint(idx)}
                  className={`p-5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between space-y-4 ${
                    isSelected
                      ? 'bg-indigo-950/70 border-indigo-500 shadow-xl shadow-indigo-500/10'
                      : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-800/70 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xl">
                      {idx === 0 ? '🧠' : idx === 1 ? '⏳' : idx === 2 ? '⚡' : '🎯'}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isSelected ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {isSelected ? 'Đang xem' : 'Chi tiết'}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm text-white leading-snug">
                    {item.title}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Expanded Pain Point Insight */}
          {selectedPainPoint !== null && (
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-indigo-500/40 shadow-2xl space-y-4 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Chẩn đoán khoa học</span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {painPoints[selectedPainPoint].title}
                  </h3>
                </div>
                <button
                  onClick={() => {
                    const target = painPoints[selectedPainPoint].targetMethodId;
                    if (target === 'time') {
                      setCurrentTab('time');
                    } else {
                      onOpenMethodDetail(target);
                    }
                  }}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1.5 self-start sm:self-auto transition-colors"
                >
                  <span>{painPoints[selectedPainPoint].methodName}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-6 pt-2">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-rose-400">Triệu chứng thực tế:</span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {painPoints[selectedPainPoint].problem}
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-amber-400">Nguyên lý nhận thức:</span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {painPoints[selectedPainPoint].science}
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-emerald-400">Cách xử lý 3 bước:</span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {painPoints[selectedPainPoint].solution}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. SỐ LIỆU THUYẾT PHỤC: ĐƯỜNG CONG LÃNG QUÊN EBBINGHAUS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-indigo-950/60 via-slate-900 to-slate-950 border border-slate-800 shadow-2xl grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold">
              <BrainCircuit className="w-3.5 h-3.5" />
              <span>Chứng minh khoa học</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              Bạn Sẽ Quên 70% Kiến Thức Chỉ Sau 24 Giờ Nếu Không Ôn Đúng Lúc
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Theo nghiên cứu kinh điển về <strong>Đường cong lãng quên (Forgetting Curve)</strong> của nhà tâm lý học Hermann Ebbinghaus: Não bộ sinh ra là để quên những thông tin không được kích hoạt lại.
            </p>
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 space-y-2">
              <div className="font-bold text-amber-400">Công thức bẻ gãy đường cong:</div>
              <p>
                Ôn tập nhẹ 10 phút sau 24h → sau 3 ngày → sau 7 ngày → sau 14 ngày. Tổng thời gian chỉ 30 phút, nhưng đưa kiến thức thẳng vào bộ nhớ dài hạn trọn đời.
              </p>
            </div>
            <button
              onClick={() => onOpenMethodDetail('spaced-repetition')}
              className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 group"
            >
              <span>Xem hướng dẫn Spaced Repetition chi tiết</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Visual Graph Representation */}
          <div className="md:col-span-5 p-6 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block text-center">
              Mô phỏng đường cong trí nhớ
            </span>

            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between text-[11px] mb-1">
                  <span className="text-rose-400 font-semibold">Học nhồi không ôn lại:</span>
                  <span className="text-slate-400">Còn 20% sau 1 tuần</span>
                </div>
                <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden">
                  <div className="w-1/5 h-full bg-rose-500 rounded-full" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] mb-1">
                  <span className="text-amber-400 font-semibold">Đọc lại thụ động (Highlight):</span>
                  <span className="text-slate-400">Còn 45% sau 1 tuần</span>
                </div>
                <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden">
                  <div className="w-[45%] h-full bg-amber-400 rounded-full" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] mb-1">
                  <span className="text-emerald-400 font-semibold">Spaced Repetition + Active Recall:</span>
                  <span className="text-emerald-300 font-bold">Giữ lại 90%+ vĩnh viễn</span>
                </div>
                <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden">
                  <div className="w-[92%] h-full bg-emerald-500 rounded-full" />
                </div>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slate-500 text-center italic">
              "Ôn đúng lúc quan trọng hơn học cật lực."
            </div>
          </div>
        </div>
      </section>

      {/* 5. PHƯƠNG PHÁP HỌC NỔI BẬT (4 THẺ MÀU RIÊNG) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Phương pháp cốt lõi
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                4 Trụ Cột Học Tập Được Khoa Học Công Nhận
              </h2>
            </div>
            <button
              onClick={() => setCurrentTab('methods')}
              className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 group self-start sm:self-auto"
            >
              <span>Xem toàn bộ 8 phương pháp</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                id: 'pomodoro',
                name: 'Pomodoro',
                desc: 'Học 25 phút tập trung, nghỉ 5 phút. Chống kiệt sức và triệt tiêu trì hoãn tức thì.',
                color: 'border-t-rose-500 bg-rose-500/5',
                tag: 'Tập trung'
              },
              {
                id: 'feynman',
                name: 'Kỹ Thuật Feynman',
                desc: 'Giải thích như thể đang dạy một đứa trẻ 12 tuổi để bóc trần những vùng mù kiến thức.',
                color: 'border-t-amber-500 bg-amber-500/5',
                tag: 'Hiểu sâu'
              },
              {
                id: 'active-recall',
                name: 'Active Recall',
                desc: 'Gấp sách tự truy hồi thay vì đọc thụ động. Phương pháp nhớ lâu số 1 trong tâm lý học.',
                color: 'border-t-indigo-500 bg-indigo-500/5',
                tag: 'Trí nhớ'
              },
              {
                id: 'cornell',
                name: 'Ghi Chép Cornell',
                desc: 'Chia 3 cột: Gợi ý, Ghi chú, Tóm tắt. Bí quyết biến bài giảng 3 tiếng thành tài liệu ôn thi 1 trang.',
                color: 'border-t-emerald-500 bg-emerald-500/5',
                tag: 'Ghi chép'
              }
            ].map((card) => (
              <div
                key={card.id}
                className={`p-6 rounded-2xl bg-slate-900/80 border border-slate-800 border-t-4 ${card.color} flex flex-col justify-between space-y-4 shadow-xl hover:translate-y-[-2px] transition-all`}
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {card.tag}
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    {card.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <button
                  onClick={() => onOpenMethodDetail(card.id)}
                  className="w-full py-2 px-3 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-xs font-semibold text-slate-200 hover:text-white flex items-center justify-between transition-colors"
                >
                  <span>Xem chi tiết</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LỘ TRÌNH 4 NĂM ĐẠI HỌC (WIREPOINT SECTION 6) */}
      <section id="roadmap-section" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Chiến lược đường dài
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Lộ Trình 4 Năm Đại Học Toàn Diện
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Mỗi năm học có một sứ mệnh riêng biệt. Đừng để đến năm 4 mới chuẩn bị CV!
            </p>
          </div>

          {/* Stepper Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {roadmapData.map((stage) => {
              const isActive = activeRoadmapYear === stage.year;
              return (
                <button
                  key={stage.year}
                  onClick={() => setActiveRoadmapYear(stage.year)}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    isActive
                      ? 'bg-amber-400 text-slate-950 font-bold shadow-lg shadow-amber-400/20'
                      : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <span className={`text-[10px] uppercase font-bold block ${isActive ? 'text-slate-900' : 'text-amber-400'}`}>
                    {stage.badge}
                  </span>
                  <span className="text-sm font-extrabold block mt-0.5 truncate">
                    {stage.theme.split('&')[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Details */}
          {(() => {
            const currentStage = roadmapData.find((s) => s.year === activeRoadmapYear) || roadmapData[0];
            return (
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6 animate-in fade-in duration-200">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      Mục tiêu trọng tâm {currentStage.badge}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white pt-1">
                    {currentStage.theme}
                  </h3>
                  <p className="text-xs sm:text-sm text-amber-300/90">
                    🎯 {currentStage.goal}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    5 Nhiệm vụ chiến lược bắt buộc phải hoàn thành:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {currentStage.tasks.map((task, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs text-slate-200 flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{task}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* 7. LỜI NHẮN TỪ ĐÀN ANH / CHỊ & THỦ KHOA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Người thật · Kết quả thật
            </span>
            <h2 className="text-2xl font-extrabold text-white">
              Lời Nhắn Từ Những Người Đi Trước
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 to-rose-500 flex items-center justify-center text-xl text-white font-bold">
                  MQ
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Nguyễn Minh Quân</h4>
                  <p className="text-xs text-slate-400">Thủ khoa K64 ĐH Bách Khoa Hà Nội (CPA 3.82)</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 italic leading-relaxed">
                "Năm nhất mình từng nhận cảnh báo học vụ vì điểm 2.1. Đừng xấu hổ khi nhận điểm kém, hãy xấu hổ nếu bạn vẫn dùng cách học thụ động cũ. Chuyển sang Active Recall và học nhóm Feynman đã thay đổi hoàn toàn tương lai của mình."
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-xl text-white font-bold">
                  PA
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Trần Phương Anh</h4>
                  <p className="text-xs text-slate-400">GPA 3.91 ĐH Ngoại Thương TP.HCM · IELTS 8.5</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 italic leading-relaxed">
                "Bí quyết lớn nhất để vừa đạt bằng Giỏi vừa làm chủ nhiệm CLB là Time-Blocking và bảo vệ giấc ngủ. Mình không bao giờ thức quá 23h30 để học bài. Khi bạn ngủ đủ, 1 tiếng học sâu buổi sáng hiệu quả bằng cả đêm thức trắng."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. QUICK JUMP TO INTERACTIVE TOOLS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-amber-500/20 via-purple-900/20 to-indigo-900/30 border border-amber-500/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Công cụ tương tác độc quyền
            </span>
            <h3 className="text-2xl font-black text-white">
              Sẵn Sàng Áp Dụng Ngay Vào Kỳ Học Này?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Đừng chỉ đọc lý thuyết suông. Bật đồng hồ Pomodoro, làm bài test phong cách học, kéo thả thời khóa biểu và thử thách 21 ngày ngay hôm nay.
            </p>
          </div>

          <button
            onClick={() => setCurrentTab('interactive')}
            className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm shadow-xl shadow-amber-400/20 flex items-center gap-2 whitespace-nowrap transition-transform active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>Mở Bộ Công Cụ Tương Tác</span>
          </button>
        </div>
      </section>
    </div>
  );
};
