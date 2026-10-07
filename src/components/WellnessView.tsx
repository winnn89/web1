import React, { useState, useEffect } from 'react';
import { WELLNESS_PILLARS, CRISIS_RESOURCES } from '../data/wellnessData';
import { playChimeSound } from '../utils/audio';
import { 
  HeartHandshake, 
  Moon, 
  Activity, 
  AlertCircle, 
  PhoneCall, 
  Sparkles, 
  Wind, 
  Play, 
  Pause, 
  RotateCcw,
  CheckCircle2
} from 'lucide-react';

export const WellnessView: React.FC = () => {
  // Interactive 4-7-8 Breathing State
  const [breathingActive, setBreathingActive] = useState(false);
  const [breathPhase, setBreathPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [breathCountdown, setBreathCountdown] = useState(4);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (breathingActive) {
      timer = setInterval(() => {
        setBreathCountdown((prev) => {
          if (prev <= 1) {
            if (breathPhase === 'inhale') {
              setBreathPhase('hold');
              playChimeSound('click');
              return 7;
            } else if (breathPhase === 'hold') {
              setBreathPhase('exhale');
              playChimeSound('click');
              return 8;
            } else {
              setBreathPhase('inhale');
              playChimeSound('reward');
              return 4;
            }
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [breathingActive, breathPhase]);

  const toggleBreathing = () => {
    if (!breathingActive) {
      setBreathPhase('inhale');
      setBreathCountdown(4);
      setBreathingActive(true);
      playChimeSound('click');
    } else {
      setBreathingActive(false);
    }
  };

  const resetBreathing = () => {
    setBreathingActive(false);
    setBreathPhase('inhale');
    setBreathCountdown(4);
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold">
          <HeartHandshake className="w-3.5 h-3.5" />
          <span>Năng Lượng & Tâm Lý Học Đường</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Sức Khỏe & Cân Bằng Cuộc Sống
        </h1>
        <p className="text-sm sm:text-base text-slate-400">
          Học tập đỉnh cao chỉ tồn tại khi cơ thể và tâm trí được chăm sóc tử tế. Không thành tích nào xứng đáng để đánh đổi bằng sức khỏe của bạn.
        </p>
      </div>

      {/* 1. INTERACTIVE 4-7-8 BREATHING BOX */}
      <section className="p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <Wind className="w-4 h-4" />
              <span>Công cụ thư giãn trực tiếp</span>
            </span>
            <h2 className="text-2xl font-bold text-white mt-1">Bài Tập Hít Thở 4-7-8 Hạ Cortisol</h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Kỹ thuật của Tiến sĩ Andrew Weil giúp kích hoạt hệ thần kinh phó giao cảm và giảm hồi hộp trong vòng 2 phút.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleBreathing}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all ${
                breathingActive
                  ? 'bg-amber-400 text-slate-950'
                  : 'bg-indigo-600 hover:bg-indigo-500 text-white'
              }`}
            >
              {breathingActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{breathingActive ? 'Tạm Dừng' : 'Bắt Đầu Thở'}</span>
            </button>
            <button
              onClick={resetBreathing}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Breathing Visual Animation */}
        <div className="flex flex-col items-center justify-center py-6 space-y-4">
          <div className={`w-44 h-44 rounded-full flex flex-col items-center justify-center transition-all duration-1000 shadow-2xl ${
            breathPhase === 'inhale'
              ? 'scale-110 bg-indigo-600/30 border-4 border-indigo-400'
              : breathPhase === 'hold'
              ? 'scale-110 bg-amber-500/30 border-4 border-amber-400'
              : 'scale-90 bg-emerald-600/20 border-4 border-emerald-400'
          }`}>
            <span className="text-4xl font-black text-white font-mono">{breathCountdown}s</span>
            <span className="text-xs uppercase font-extrabold tracking-wider mt-1 text-slate-300">
              {breathPhase === 'inhale' ? 'Hít Vào (Mũi)' : breathPhase === 'hold' ? 'Giữ Hơi' : 'Thở Ra (Miệng)'}
            </span>
          </div>

          <p className="text-xs text-slate-400 text-center max-w-sm italic">
            {breathPhase === 'inhale' && 'Hít sâu vào bằng mũi, căng phồng bụng...'}
            {breathPhase === 'hold' && 'Giữ yên hơi thở, thư giãn vai và cơ hàm...'}
            {breathPhase === 'exhale' && 'Thở ra từ từ qua kẽ môi tạo tiếng gió nhẹ...'}
          </p>
        </div>
      </section>

      {/* 2. 4 TRỤ CỘT SỨC KHỎE */}
      <section className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Nền móng thể lực & tâm trí</span>
          <h2 className="text-2xl font-bold text-white">4 Trụ Cột Tối Ưu Năng Lượng</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {WELLNESS_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4 shadow-xl"
            >
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <div>
                  <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                  <p className="text-xs text-slate-400">{pillar.subtitle}</p>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  {pillar.badge}
                </span>
              </div>

              {/* Action items */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-300 block">Thực hành hàng ngày:</span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {pillar.actionItems.map((act, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Warning sign & Scientific fact */}
              <div className="space-y-2 pt-2 border-t border-slate-800 text-[11px]">
                <div className="text-rose-400">
                  <strong>⚠️ {pillar.warningSign}</strong>
                </div>
                <div className="text-indigo-300 italic">
                  🔬 <strong>Dẫn chứng:</strong> {pillar.scientificFact}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. NƠI TÌM HỖ TRỢ & ĐƯỜNG DÂY NÓNG */}
      <section className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
        <div className="flex items-center gap-2">
          <PhoneCall className="w-5 h-5 text-amber-400" />
          <h3 className="text-lg font-bold text-white">Mạng Lưới Trợ Giúp Khi Bạn Quá Tải</h3>
        </div>
        <p className="text-xs text-slate-400">
          Hãy nhớ rằng: Tìm kiếm sự giúp đỡ không phải là dấu hiệu của sự yếu đuối, đó là hành động dũng cảm nhất của người có trách nhiệm với chính mình.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 pt-2">
          {CRISIS_RESOURCES.map((res, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2 text-xs">
              <h4 className="font-bold text-white text-xs">{res.name}</h4>
              <p className="text-slate-400 text-[11px] leading-relaxed">{res.desc}</p>
              <div className="font-semibold text-emerald-400 pt-1 border-t border-slate-800">
                Liên hệ: {res.contact}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
