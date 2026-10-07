import React, { useState } from 'react';
import { METHODS_DATA, SUBJECT_METHOD_MATRIX } from '../data/methodsData';
import { MethodItem, TabId } from '../types';
import { 
  BrainCircuit, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  Zap, 
  BookOpen, 
  Layers, 
  X,
  Target
} from 'lucide-react';

interface MethodsViewProps {
  setCurrentTab: (tab: TabId) => void;
  selectedMethodId?: string | null;
  onClearSelectedMethod?: () => void;
}

export const MethodsView: React.FC<MethodsViewProps> = ({ 
  setCurrentTab, 
  selectedMethodId, 
  onClearSelectedMethod 
}) => {
  const [activeModalMethod, setActiveModalMethod] = useState<MethodItem | null>(() => {
    if (selectedMethodId) {
      return METHODS_DATA.find((m) => m.id === selectedMethodId) || null;
    }
    return null;
  });

  const handleOpenDetail = (method: MethodItem) => {
    setActiveModalMethod(method);
  };

  const handleCloseDetail = () => {
    setActiveModalMethod(null);
    if (onClearSelectedMethod) onClearSelectedMethod();
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold">
          <BrainCircuit className="w-3.5 h-3.5" />
          <span>Khoa Học Nhận Thức Ứng Dụng</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          8 Phương Pháp Học Tập Xương Sống
        </h1>
        <p className="text-sm sm:text-base text-slate-400">
          Mỗi phương pháp được thiết kế theo chuẩn PRO: <strong>Vấn đề → Nguyên lý khoa học → Cách làm 3 bước → Ví dụ → Bài tập 5 phút</strong>.
        </p>
      </div>

      {/* 1. BẢNG CHỌN NHANH PHƯƠNG PHÁP THEO MÔN HỌC */}
      <section className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Định hướng chiến lược</span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Bảng Chọn Nhanh Phương Pháp Theo Loại Môn Học</h2>
          <p className="text-xs text-slate-400">Không có một phương pháp vạn năng cho mọi môn. Hãy ghép đúng vũ khí với từng loại đề thi:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SUBJECT_METHOD_MATRIX.map((item, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 border-l-4 ${item.color} space-y-3`}
            >
              <div className="font-bold text-sm text-white">
                {item.subjectType}
              </div>
              <div className="text-xs">
                <span className="text-amber-400 font-bold block mb-0.5">Nên ưu tiên:</span>
                <span className="text-indigo-200 font-semibold">{item.recommended}</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed pt-1 border-t border-slate-800">
                <strong className="text-slate-300">Lý do khoa học:</strong> {item.reason}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. CATALOG 8 PHƯƠNG PHÁP HỌC CỐT LÕI */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Bộ cẩm nang chi tiết</span>
            <h2 className="text-2xl font-bold text-white">Chi Tiết Từng Phương Pháp</h2>
          </div>
          <span className="text-xs text-slate-400">Nhấn để xem bài tập 5 phút</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {METHODS_DATA.map((method) => (
            <div
              key={method.id}
              onClick={() => handleOpenDetail(method)}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900 transition-all duration-200 flex flex-col justify-between space-y-4 cursor-pointer group shadow-lg"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    {method.badge}
                  </span>
                  <span className="text-xs text-slate-500 group-hover:text-amber-400 transition-colors">
                    Chi tiết →
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                  {method.name}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  {method.subtitle}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 space-y-2">
                <div className="text-[11px] text-slate-400 line-clamp-2">
                  <strong className="text-slate-300">Bài tập 5 phút:</strong> {method.fiveMinuteExercise}
                </div>
                <div className="text-[11px] font-semibold text-indigo-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Mở cẩm nang đầy đủ</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. METHOD DETAIL MODAL (THE PRO FORMULA IN FULL ACTION) */}
      {activeModalMethod && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-3xl w-full p-6 sm:p-10 space-y-6 shadow-2xl relative my-8 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
            {/* Close button */}
            <button
              onClick={handleCloseDetail}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="space-y-2 pr-8">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                {activeModalMethod.badge} · Công thức PRO
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {activeModalMethod.name}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                {activeModalMethod.subtitle}
              </p>
            </div>

            {/* PRO Formula Breakdown */}
            <div className="space-y-4">
              {/* 1. Problem (Vấn đề) */}
              <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-500/30 space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4" />
                  <span>Vấn đề thực tế sinh viên hay gặp:</span>
                </span>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {activeModalMethod.problem}
                </p>
              </div>

              {/* 2. Science Principle (Nguyên lý khoa học) */}
              <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-300 flex items-center gap-1.5">
                  <BrainCircuit className="w-4 h-4" />
                  <span>Nguyên lý khoa học nhận thức:</span>
                </span>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {activeModalMethod.sciencePrinciple}
                </p>
              </div>

              {/* 3. Three Steps (Cách làm 3 bước) */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Quy trình triển khai 3 bước:
                </span>
                <div className="space-y-2.5">
                  {activeModalMethod.threeSteps.map((step) => (
                    <div
                      key={step.step}
                      className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs flex items-start gap-3"
                    >
                      <span className="w-6 h-6 rounded-lg bg-amber-400 text-slate-950 font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                        {step.step}
                      </span>
                      <div className="space-y-0.5">
                        <h4 className="font-bold text-white text-xs">{step.title}</h4>
                        <p className="text-slate-300 text-[11px] leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Best Subjects & Mistakes */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                    Phù hợp nhất với các môn:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-300 list-disc list-inside">
                    {activeModalMethod.bestSubjects.map((sub, idx) => (
                      <li key={idx}>{sub}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                    Sai lầm thường gặp:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-300 list-disc list-inside">
                    {activeModalMethod.commonMistakes.map((mis, idx) => (
                      <li key={idx}>{mis}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 5. Five-Minute Exercise (Bài tập 5 phút thử ngay) */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/20 via-slate-900 to-indigo-900/30 border border-amber-400/40 space-y-2">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    Bài tập 5 phút thử ngay hôm nay:
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-100 font-medium leading-relaxed">
                  {activeModalMethod.fiveMinuteExercise}
                </p>
              </div>

              {/* Golden takeaway */}
              <div className="text-xs text-slate-400 text-center italic pt-2 border-t border-slate-800">
                "{activeModalMethod.keyTakeaway}"
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <button
                onClick={handleCloseDetail}
                className="w-full sm:w-auto py-2.5 px-5 rounded-xl bg-slate-800 text-slate-300 hover:text-white font-bold text-xs transition-colors"
              >
                Đóng lại
              </button>

              <button
                onClick={() => {
                  handleCloseDetail();
                  setCurrentTab('interactive');
                }}
                className="w-full sm:w-auto py-2.5 px-5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-400/20 transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Mở Góc Tương Tác Để Thực Hành</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
