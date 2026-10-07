import React, { useState } from 'react';
import { DAILY_ROUTINE_SCHEDULE, ANTI_PROCRASTINATION_RULES, INITIAL_EISENHOWER_TASKS } from '../data/timeManagementData';
import { EisenhowerTask, TabId } from '../types';
import { playChimeSound } from '../utils/audio';
import { 
  Clock, 
  Calendar, 
  CheckCircle2, 
  AlertCircle, 
  Plus, 
  Trash2, 
  Check, 
  Sparkles, 
  Zap, 
  ArrowRight,
  ShieldAlert,
  Flame
} from 'lucide-react';

interface TimeManagementViewProps {
  setCurrentTab: (tab: TabId) => void;
}

export const TimeManagementView: React.FC<TimeManagementViewProps> = ({ setCurrentTab }) => {
  const [tasks, setTasks] = useState<EisenhowerTask[]>(INITIAL_EISENHOWER_TASKS);
  const [newTaskText, setNewTaskText] = useState('');
  const [newQuadrant, setNewQuadrant] = useState<EisenhowerTask['quadrant']>('urgent-important');

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;
    const newTask: EisenhowerTask = {
      id: Date.now().toString(),
      text: newTaskText.trim(),
      quadrant: newQuadrant,
      completed: false
    };
    setTasks([...tasks, newTask]);
    setNewTaskText('');
    playChimeSound('click');
  };

  const handleToggleTask = (id: string) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
    playChimeSound('reward');
  };

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const quadrantConfigs = [
    {
      id: 'urgent-important' as const,
      title: 'Khẩn Cấp & Quan Trọng (Làm Ngay)',
      badge: 'Cấp thiết',
      color: 'border-rose-500/50 bg-rose-950/20 text-rose-300',
      tagColor: 'bg-rose-500 text-white',
      tip: 'Hạn chót ngày mai, thi cử, việc sống còn.'
    },
    {
      id: 'not-urgent-important' as const,
      title: 'Không Khẩn Cấp Nhưng Quan Trọng (Vùng Vàng)',
      badge: 'Vùng thành công',
      color: 'border-amber-500/50 bg-amber-950/20 text-amber-300',
      tagColor: 'bg-amber-400 text-slate-950 font-bold',
      tip: 'Lập kế hoạch, học sâu, tập thể dục, nghiên cứu. Đây là nơi tạo ra GPA 3.8+!'
    },
    {
      id: 'urgent-not-important' as const,
      title: 'Khẩn Cấp Nhưng Không Quan Trọng (Ủy Thác / Hạn Chế)',
      badge: 'Gây xao nhãng',
      color: 'border-blue-500/50 bg-blue-950/20 text-blue-300',
      tagColor: 'bg-blue-500 text-white',
      tip: 'Điểm danh hộ, tin nhắn tức thì, cuộc họp không có mục tiêu rõ ràng.'
    },
    {
      id: 'not-urgent-not-important' as const,
      title: 'Không Khẩn Cấp & Không Quan Trọng (Xóa Bỏ)',
      badge: 'Lãng phí',
      color: 'border-slate-700 bg-slate-900/60 text-slate-400',
      tagColor: 'bg-slate-700 text-slate-300',
      tip: 'Lướt mạng xã hội vô thức 3 tiếng, xem drama không hồi kết.'
    }
  ];

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold">
          <Clock className="w-3.5 h-3.5" />
          <span>Làm Chủ 24 Giờ Đại Học</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Quản Lý Thời Gian & Chống Trì Hoãn
        </h1>
        <p className="text-sm sm:text-base text-slate-400">
          Biến các khoảng trống giữa các ca học thành bệ phóng năng suất. Áp dụng ma trận Eisenhower và lịch trình đồng hồ sinh học.
        </p>
      </div>

      {/* 1. MA TRẬN EISENHOWER TƯƠNG TÁC */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Công cụ tương tác</span>
            <h2 className="text-2xl font-bold text-white">Bảng Ma Trận Eisenhower Của Bạn</h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Phân loại công việc vào 4 góc để giải phóng não bộ khỏi sự quá tải:
            </p>
          </div>

          <button
            onClick={() => setCurrentTab('interactive')}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-2 border border-slate-700 self-start sm:self-auto transition-colors"
          >
            <Calendar className="w-4 h-4 text-amber-400" />
            <span>Mở Weekly Planner Chi Tiết</span>
          </button>
        </div>

        {/* Add task form */}
        <form onSubmit={handleAddTask} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            required
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            placeholder="Thêm nhiệm vụ mới (VD: Làm bài tập Triết, Điền khảo sát...)"
            className="flex-grow px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
          />

          <select
            value={newQuadrant}
            onChange={(e) => setNewQuadrant(e.target.value as any)}
            className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400"
          >
            <option value="urgent-important">Quan trọng + Khẩn cấp (Làm ngay)</option>
            <option value="not-urgent-important">Quan trọng + Không khẩn cấp (Vùng Vàng)</option>
            <option value="urgent-not-important">Khẩn cấp + Không quan trọng (Ủy thác)</option>
            <option value="not-urgent-not-important">Không khẩn cấp + Không quan trọng (Xóa bỏ)</option>
          </select>

          <button
            type="submit"
            className="py-2 px-4 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap"
          >
            <Plus className="w-4 h-4" />
            <span>Thêm Task</span>
          </button>
        </form>

        {/* 4 Quadrants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quadrantConfigs.map((q) => {
            const quadrantTasks = tasks.filter((t) => t.quadrant === q.id);
            return (
              <div
                key={q.id}
                className={`p-5 rounded-2xl border ${q.color} space-y-3 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                    <h3 className="font-bold text-sm text-white">
                      {q.title}
                    </h3>
                    <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${q.tagColor}`}>
                      {q.badge}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1 mb-3 italic">
                    💡 {q.tip}
                  </p>

                  <div className="space-y-2">
                    {quadrantTasks.length === 0 ? (
                      <div className="text-[11px] text-slate-600 text-center py-6 italic">
                        Chưa có nhiệm vụ nào trong ô này
                      </div>
                    ) : (
                      quadrantTasks.map((task) => (
                        <div
                          key={task.id}
                          className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs"
                        >
                          <div 
                            onClick={() => handleToggleTask(task.id)}
                            className="flex items-center gap-2 cursor-pointer flex-grow pr-2"
                          >
                            <div className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 ${
                              task.completed ? 'bg-emerald-500 text-slate-950' : 'border border-slate-700 bg-slate-900'
                            }`}>
                              {task.completed && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                            <span className={task.completed ? 'line-through text-slate-500' : 'text-slate-200'}>
                              {task.text}
                            </span>
                          </div>

                          <button
                            onClick={() => handleDeleteTask(task.id)}
                            className="text-slate-500 hover:text-rose-400 transition-colors p-1"
                            title="Xóa"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                <div className="text-[10px] text-slate-500 pt-2 border-t border-slate-800/60 text-right">
                  {quadrantTasks.filter((t) => t.completed).length} / {quadrantTasks.length} việc đã xong
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 2. CÁC QUY TẮC CHỐNG TRÌ HOÃN HUYỀN THOẠI */}
      <section className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Chiến thuật tâm lý</span>
          <h2 className="text-2xl font-bold text-white">4 Quy Tắc Chống Trì Hoãn Thực Chiến</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ANTI_PROCRASTINATION_RULES.map((rule, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-400" />
                <h3 className="font-bold text-sm text-white">{rule.name}</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {rule.rule}
              </p>
              <div className="pt-2 border-t border-slate-800 text-[11px] text-emerald-400">
                <strong>Tác động nhận thức:</strong> {rule.impact}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. MẪU LỊCH 1 NGÀY HỌC TẬP HIỆU QUẢ (06:30 - 23:00) */}
      <section className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Thời gian biểu tối ưu</span>
            <h2 className="text-2xl font-bold text-white">Mẫu Lịch Một Ngày Học Tập Hiệu Quả</h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Được thiết kế dựa trên nhịp điệu sinh học (Circadian Rhythm) của vỏ não sinh viên.
            </p>
          </div>
          <span className="text-xs bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full border border-indigo-500/30">
            Tổng cộng: 5-6h Học Sâu & Vẫn ngủ đủ 8h
          </span>
        </div>

        <div className="space-y-3">
          {DAILY_ROUTINE_SCHEDULE.map((item, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl border border-slate-800 border-l-4 ${item.color} flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs`}
            >
              <div className="flex items-center gap-4 md:w-1/3">
                <span className="font-mono font-bold text-white text-sm whitespace-nowrap">{item.timeRange}</span>
                <span className="font-semibold text-slate-200">{item.activity}</span>
              </div>
              <div className="text-slate-400 md:w-2/3 leading-relaxed">
                {item.note}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 text-center">
          💡 Bạn muốn tự thiết kế thời khóa biểu của riêng mình? Hãy mở <button onClick={() => setCurrentTab('interactive')} className="text-amber-400 font-bold hover:underline">Góc Tương Tác</button> để kéo thả khối thời gian và tải file in ấn.
        </div>
      </section>
    </div>
  );
};
