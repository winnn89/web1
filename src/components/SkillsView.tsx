import React, { useState } from 'react';
import { ESSENTIAL_SKILLS } from '../data/skillsData';
import { 
  Sparkles, 
  BookOpen, 
  PenTool, 
  Users, 
  Mic, 
  Search, 
  Globe, 
  CheckCircle2, 
  Quote
} from 'lucide-react';

export const SkillsView: React.FC = () => {
  const [activeSkillId, setActiveSkillId] = useState<string>(ESSENTIAL_SKILLS[0].id);

  const iconMap: Record<string, React.ReactNode> = {
    BookOpen: <BookOpen className="w-5 h-5" />,
    PenTool: <PenTool className="w-5 h-5" />,
    Users: <Users className="w-5 h-5" />,
    Mic: <Mic className="w-5 h-5" />,
    Search: <Search className="w-5 h-5" />,
    Globe: <Globe className="w-5 h-5" />,
  };

  const currentSkill = ESSENTIAL_SKILLS.find((s) => s.id === activeSkillId) || ESSENTIAL_SKILLS[0];

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Kỹ Năng Đột Phá Điểm Số</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Kỹ Năng Thiết Yếu Của Sinh Viên
        </h1>
        <p className="text-sm sm:text-base text-slate-400">
          Những kỹ năng sống còn giúp bạn vượt trội nhưng trường đại học hiếm khi có một môn học riêng để dạy trực tiếp.
        </p>
      </div>

      {/* Interactive Tabs for 6 Skills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {ESSENTIAL_SKILLS.map((skill) => {
          const isActive = skill.id === activeSkillId;
          return (
            <button
              key={skill.id}
              onClick={() => setActiveSkillId(skill.id)}
              className={`p-3.5 rounded-2xl border text-center transition-all flex flex-col items-center gap-2 ${
                isActive
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-lg shadow-amber-400/20 scale-105'
                  : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:bg-slate-800'
              }`}
            >
              <div className={`p-2 rounded-xl ${isActive ? 'bg-slate-950 text-amber-400' : 'bg-slate-800 text-slate-300'}`}>
                {iconMap[skill.icon]}
              </div>
              <span className="text-xs leading-tight font-bold line-clamp-1">{skill.title.split('&')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Active Skill Deep Dive */}
      <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-8 shadow-2xl">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Cẩm nang hướng dẫn</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {currentSkill.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
            {currentSkill.summary}
          </p>
        </div>

        {/* 3 Core Tips */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400">
            3 Bí quyết cốt lõi:
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {currentSkill.coreTips.map((tip, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-2 text-xs"
              >
                <div className="flex items-center gap-2 text-white font-bold text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{tip.title}</span>
                </div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Framework & Quote */}
        <div className="grid sm:grid-cols-2 gap-4 pt-2">
          <div className="p-5 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 space-y-2 text-xs">
            <span className="font-bold text-indigo-300 uppercase tracking-wider text-[10px] block">
              Khung hành động khuyến nghị (Action Framework):
            </span>
            <p className="text-slate-200 leading-relaxed font-medium">
              {currentSkill.actionableFramework}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-amber-950/30 border border-amber-500/30 space-y-2 text-xs">
            <span className="font-bold text-amber-300 uppercase tracking-wider text-[10px] block flex items-center gap-1">
              <Quote className="w-3.5 h-3.5" />
              <span>Châm ngôn vàng:</span>
            </span>
            <p className="text-slate-200 leading-relaxed italic">
              "{currentSkill.goldenQuote}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
