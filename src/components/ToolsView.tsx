import React, { useState } from 'react';
import { TOOLS_DIRECTORY, AI_ETHICS_MANIFESTO } from '../data/toolsData';
import { ToolItem } from '../types';
import { 
  Wrench, 
  ExternalLink, 
  Check, 
  X, 
  ShieldAlert, 
  Sparkles, 
  Filter,
  CheckCircle2
} from 'lucide-react';

export const ToolsView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả');

  const categories = [
    'Tất cả',
    'Ghi chú & Kiến thức',
    'Ôn tập & Flashcard',
    'Tập trung',
    'Lập kế hoạch',
    'Nghiên cứu',
    'Thiết kế',
    'Học trực tuyến',
    'Trợ lý AI'
  ];

  const filteredTools = TOOLS_DIRECTORY.filter((tool) => {
    return selectedCategory === 'Tất cả' || tool.category === selectedCategory;
  });

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold">
          <Wrench className="w-3.5 h-3.5" />
          <span>Kho Vũ Khí Công Nghệ</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Công Cụ & Ứng Dụng Hỗ Trợ Học Tập
        </h1>
        <p className="text-sm sm:text-base text-slate-400">
          Tổng hợp phần mềm tuyển chọn có phân loại, mức giá, ưu nhược điểm thực tế và hướng dẫn tận dụng gói sinh viên.
        </p>
      </div>

      {/* Categories Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-1.5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              selectedCategory === cat
                ? 'bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-400/20'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredTools.map((tool) => (
          <div
            key={tool.id}
            className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between space-y-4 hover:border-indigo-500/40 transition-colors shadow-lg"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  {tool.category}
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                  tool.pricing === 'Miễn phí'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                }`}>
                  {tool.pricing}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white flex items-center justify-between">
                <span>{tool.name}</span>
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-amber-400 transition-colors"
                  title="Mở trang web"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed">
                {tool.description}
              </p>

              {/* Pros & Cons */}
              <div className="space-y-2 pt-2 border-t border-slate-800 text-[11px]">
                <div className="text-emerald-400 flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                  <span><strong>Ưu điểm:</strong> {tool.pros}</span>
                </div>
                <div className="text-rose-400 flex items-start gap-1.5">
                  <X className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 stroke-[2.5]" />
                  <span><strong>Nhược điểm:</strong> {tool.cons}</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800/80 text-[11px] text-amber-300">
              <strong>Phù hợp nhất:</strong> {tool.bestFor}
            </div>
          </div>
        ))}
      </div>

      {/* AI ETHICS MANIFESTO (LƯU Ý QUAN TRỌNG TRONG THIẾT KẾ) */}
      <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-indigo-950/80 via-slate-900 to-rose-950/30 border border-indigo-500/40 space-y-6 shadow-2xl">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-bold">
            <ShieldAlert className="w-4 h-4 text-rose-400" />
            <span>Lưu Ý Sống Còn Về Đạo Đức Học Thuật</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {AI_ETHICS_MANIFESTO.title}
          </h2>
          <p className="text-sm font-semibold text-amber-300">
            {AI_ETHICS_MANIFESTO.coreRule}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 pt-2">
          {AI_ETHICS_MANIFESTO.guidelines.map((guide, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-2 text-xs"
            >
              <div className="flex items-center gap-2 font-bold text-white text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{guide.title}</span>
              </div>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                {guide.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
