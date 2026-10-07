import React from 'react';
import { EXAM_TIMELINE_STAGES } from '../data/examData';
import { 
  Award, 
  Calendar, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  FileText, 
  Sparkles,
  ShieldCheck,
  Zap
} from 'lucide-react';

export const ExamView: React.FC = () => {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-semibold">
          <Award className="w-3.5 h-3.5" />
          <span>Kế Hoạch Tác Chiến Điểm A+</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Chinh Phục Kỳ Thi: Từ Ôn Thi Đến Phòng Thi
        </h1>
        <p className="text-sm sm:text-base text-slate-400">
          Quy trình 6 giai đoạn chuẩn mực giúp bạn biến mùa thi căng thẳng thành màn biểu diễn phong độ đỉnh cao.
        </p>
      </div>

      {/* 6 STAGES TIMELINE */}
      <section className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Lộ trình tác chiến</span>
          <h2 className="text-2xl font-bold text-white">6 Giai Đoạn Vượt Vũ Môn</h2>
        </div>

        <div className="space-y-4">
          {EXAM_TIMELINE_STAGES.map((stage, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4 shadow-xl hover:border-slate-700 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="font-extrabold text-base text-white">{stage.phase}</h3>
                    <span className="text-xs text-amber-400 font-semibold">{stage.timeframe}</span>
                  </div>
                </div>

                <span className="text-xs px-2.5 py-1 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 self-start sm:self-auto font-bold">
                  {stage.badge}
                </span>
              </div>

              {/* Action items */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Nhiệm vụ trọng tâm:</span>
                <div className="grid sm:grid-cols-3 gap-3">
                  {stage.actions.map((act, aIdx) => (
                    <div
                      key={aIdx}
                      className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs text-slate-200 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mistake & Pro Tip */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/30 text-rose-200">
                  <strong className="block text-rose-400 font-bold mb-1">⚠️ Sai lầm chết người cần tránh:</strong>
                  {stage.mistakeToAvoid}
                </div>
                <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-emerald-200">
                  <strong className="block text-emerald-400 font-bold mb-1">💡 Mẹo cao thủ (Pro Tip):</strong>
                  {stage.proTip}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CHEAT SHEET STRATEGY BOX */}
      <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-indigo-950/70 via-slate-900 to-amber-950/40 border border-slate-800 shadow-2xl space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20 text-xs font-bold">
            <FileText className="w-3.5 h-3.5" />
            <span>Chiến Thuật Cheat Sheet 1 Trang</span>
          </div>
          <h2 className="text-2xl font-extrabold text-white">
            Nghệ Thuật Thu Nhỏ Cả Môn Học Vào 1 Tờ Giấy A4
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
            Tự làm "Cheat sheet" (kể cả khi phòng thi không cho mang vào) là phương pháp ôn tập có hiệu quả nhận thức cao nhất. Khi bạn bị giới hạn trong 1 mặt giấy A4, bạn buộc phải loại bỏ 80% chi tiết râu ria và chắt lọc 20% xương sống cốt lõi.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
            <span className="font-bold text-amber-400 block text-xs">1. Khu Vực Công Thức & Khung Logic</span>
            <p className="text-slate-300 leading-relaxed">
              Chỉ ghi các định lý, công thức mẹ và các điều kiện ràng buộc. Dùng mũi tên ký hiệu để tiết kiệm diện tích.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
            <span className="font-bold text-indigo-400 block text-xs">2. Khu Vực Bẫy & Lỗi Sai Thường Gặp</span>
            <p className="text-slate-300 leading-relaxed">
              Ghi chú lại 3 lỗi sai mà bạn hay mắc nhất khi làm bài tập (nhầm đơn vị, quên điều kiện mẫu số, thiếu kết luận...).
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
            <span className="font-bold text-emerald-400 block text-xs">3. Khu Vực Từ Khóa Trọng Điểm</span>
            <p className="text-slate-300 leading-relaxed">
              Các thuật ngữ chuyên ngành bắt buộc phải có trong câu trả lời tự luận để barem chấm điểm cho điểm tối đa.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
