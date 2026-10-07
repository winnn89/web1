import React, { useState } from 'react';
import { THPT_VS_DAIHOC, UNIVERSITY_TERMS, FIRST_30_DAYS_CHECKLIST } from '../data/collegeData';
import { playChimeSound } from '../utils/audio';
import { 
  BookOpen, 
  Search, 
  CheckCircle2, 
  Check, 
  HelpCircle, 
  AlertTriangle, 
  Compass, 
  Clock, 
  Sparkles,
  Info
} from 'lucide-react';

export const College101View: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTermCategory, setSelectedTermCategory] = useState<string>('Tất cả');

  // Checklist state
  const [checkedTaskIds, setCheckedTaskIds] = useState<number[]>(() => {
    const saved = localStorage.getItem('college_101_checklist');
    return saved ? JSON.parse(saved) : [1, 2];
  });

  const toggleChecklistTask = (id: number) => {
    let next: number[];
    if (checkedTaskIds.includes(id)) {
      next = checkedTaskIds.filter((t) => t !== id);
    } else {
      next = [...checkedTaskIds, id];
      playChimeSound('reward');
    }
    setCheckedTaskIds(next);
    localStorage.setItem('college_101_checklist', JSON.stringify(next));
  };

  const checklistProgress = Math.round((checkedTaskIds.length / FIRST_30_DAYS_CHECKLIST.length) * 100);

  // Filtered terms
  const categories = ['Tất cả', 'Điểm số & Học vụ', 'Môn học & Tín chỉ', 'Cơ cấu & Thủ tục'];

  const filteredTerms = UNIVERSITY_TERMS.filter((term) => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedTermCategory === 'Tất cả' || term.category === selectedTermCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold">
          <Compass className="w-3.5 h-3.5" />
          <span>Nhập Môn Sinh Viên K65+</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Làm Quen Với Môi Trường Đại Học
        </h1>
        <p className="text-sm sm:text-base text-slate-400">
          Xóa tan cảm giác "sốc văn hóa" ngay từ những tuần đầu tiên. Hiểu rõ luật chơi của giảng đường để không bị trừ điểm oan và nắm thế chủ động.
        </p>
      </div>

      {/* 1. SO SÁNH THPT VS. ĐẠI HỌC */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Bức tranh khác biệt</span>
            <h2 className="text-2xl font-bold text-white">Khác Biệt Cốt Lõi: THPT vs. Đại Học</h2>
          </div>
          <p className="text-xs text-slate-400 max-w-md">
            Hiểu được sự thay đổi trong cách vận hành giúp bạn chuyển dịch tư duy từ "người bị quản lý" sang "người làm chủ cuộc đời".
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {THPT_VS_DAIHOC.map((row, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div className="space-y-3">
                <span className="text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded bg-slate-800 text-amber-300 inline-block">
                  {row.criterion}
                </span>

                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                    <span className="text-[10px] font-bold text-rose-400 uppercase block mb-1">Thời THPT (Cũ)</span>
                    <p className="text-slate-300 leading-relaxed">{row.thpt}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/30">
                    <span className="text-[10px] font-bold text-indigo-300 uppercase block mb-1">Môi trường Đại học (Mới)</span>
                    <p className="text-white leading-relaxed font-medium">{row.daihoc}</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 text-[11px] text-emerald-400 flex items-start gap-1.5">
                <Sparkles className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                <span><strong>Mẹo thích nghi:</strong> {row.tip}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. TỪ ĐIỂN ĐẠI HỌC 101 */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Thuật ngữ học vụ</span>
            <h2 className="text-2xl font-bold text-white">Từ Điển Đại Học 101</h2>
            <p className="text-xs text-slate-400 mt-1">
              Những khái niệm sống còn: Tín chỉ, Tiên quyết, GPA/CPA, Cảnh báo học vụ...
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm thuật ngữ học vụ..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedTermCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                selectedTermCategory === cat
                  ? 'bg-amber-400 text-slate-950 font-bold'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Terms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTerms.map((term, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 hover:border-indigo-500/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-extrabold text-white">
                  {term.term}
                </h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  {term.category}
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {term.definition}
              </p>

              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs text-slate-400 space-y-1">
                <div><strong className="text-amber-400">Ví dụ:</strong> {term.example}</div>
                <div className="pt-1 border-t border-slate-800 text-emerald-400">
                  <strong>💡 Lời khuyên:</strong> {term.tip}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CHECKLIST 30 NGÀY ĐẦU TIÊN TƯƠNG TÁC */}
      <section className="space-y-6">
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Hành động tuần đầu</span>
              <h2 className="text-2xl font-bold text-white mt-1">Checklist 30 Ngày Đầu Nhập Môn</h2>
              <p className="text-xs text-slate-400 mt-1">
                Tích vào những việc bạn đã hoàn thành để theo dõi mức độ sẵn sàng thích nghi của bạn.
              </p>
            </div>

            <div className="text-left sm:text-right flex-shrink-0">
              <span className="text-2xl font-black text-amber-400 font-mono">{checklistProgress}%</span>
              <span className="text-xs text-slate-400 block">Đã hoàn thành ({checkedTaskIds.length}/{FIRST_30_DAYS_CHECKLIST.length})</span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-400 transition-all duration-300"
              style={{ width: `${checklistProgress}%` }}
            />
          </div>

          {/* Task list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            {FIRST_30_DAYS_CHECKLIST.map((task) => {
              const isChecked = checkedTaskIds.includes(task.id);
              return (
                <div
                  key={task.id}
                  onClick={() => toggleChecklistTask(task.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3.5 ${
                    isChecked
                      ? 'bg-emerald-950/30 border-emerald-500/40'
                      : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                    isChecked ? 'bg-emerald-500 text-slate-950' : 'border border-slate-700 bg-slate-900'
                  }`}>
                    {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>

                  <div className="space-y-1 flex-grow">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-slate-500 uppercase">{task.dayRange}</span>
                      <span className="text-[10px] text-indigo-400 bg-indigo-500/10 px-1.5 py-0.2 rounded">{task.category}</span>
                    </div>
                    <h4 className={`text-xs font-bold ${isChecked ? 'text-emerald-300 line-through' : 'text-white'}`}>
                      {task.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {task.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
