import React, { useState, useEffect, useRef } from 'react';
import { QUIZ_QUESTIONS, PROFILES_MAP } from '../data/quizData';
import { HABIT_CHALLENGE_DAYS } from '../data/challengeData';
import { playChimeSound, playAmbientSound, stopAmbientSound } from '../utils/audio';
import { 
  Sparkles, 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Calculator, 
  CheckCircle2, 
  Plus, 
  Trash2, 
  Award, 
  Clock, 
  Layers, 
  Flame, 
  Share2, 
  Printer, 
  Repeat, 
  ArrowRight,
  TrendingUp,
  Brain,
  Calendar,
  Check
} from 'lucide-react';

interface InteractiveHubProps {
  initialSubTab?: 'quiz' | 'pomodoro' | 'planner' | 'gpa' | 'flashcards' | 'challenge';
}

export const InteractiveHub: React.FC<InteractiveHubProps> = ({ initialSubTab = 'quiz' }) => {
  const [activeSubTab, setActiveSubTab] = useState<'quiz' | 'pomodoro' | 'planner' | 'gpa' | 'flashcards' | 'challenge'>(initialSubTab);

  // -------------------------------------------------------------
  // 1. QUIZ STATE
  // -------------------------------------------------------------
  const [quizStep, setQuizStep] = useState<number>(0);
  const [quizScores, setQuizScores] = useState<{ visual: number; auditory: number; kinesthetic: number; readwrite: number }>({
    visual: 0,
    auditory: 0,
    kinesthetic: 0,
    readwrite: 0,
  });
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  const [copiedShare, setCopiedShare] = useState<boolean>(false);

  const handleSelectOption = (style: 'visual' | 'auditory' | 'kinesthetic' | 'readwrite') => {
    setQuizScores((prev) => ({
      ...prev,
      [style]: prev[style] + 1,
    }));
    playChimeSound('click');

    if (quizStep + 1 < QUIZ_QUESTIONS.length) {
      setQuizStep(quizStep + 1);
    } else {
      setQuizFinished(true);
      playChimeSound('reward');
    }
  };

  const getDominantProfile = () => {
    let topStyle: 'visual' | 'auditory' | 'kinesthetic' | 'readwrite' = 'visual';
    let maxVal = -1;
    (Object.keys(quizScores) as Array<keyof typeof quizScores>).forEach((key) => {
      if (quizScores[key] > maxVal) {
        maxVal = quizScores[key];
        topStyle = key;
      }
    });
    return PROFILES_MAP[topStyle] || PROFILES_MAP.visual;
  };

  const handleResetQuiz = () => {
    setQuizStep(0);
    setQuizScores({ visual: 0, auditory: 0, kinesthetic: 0, readwrite: 0 });
    setQuizFinished(false);
  };

  const handleShareQuiz = () => {
    const profile = getDominantProfile();
    const shareText = `Tôi vừa làm bài test phong cách học tập trên Học Đại Học PRO! Hồ sơ của tôi: ${profile.title} (${profile.badge}). Khám phá phương pháp học của bạn tại: hocdaihoc.vn`;
    navigator.clipboard.writeText(shareText);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2500);
  };

  // -------------------------------------------------------------
  // 2. POMODORO TIMER STATE
  // -------------------------------------------------------------
  const [timerMode, setTimerMode] = useState<'work' | 'shortBreak' | 'longBreak'>('work');
  const [timeLeft, setTimeLeft] = useState<number>(25 * 60);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [completedSessions, setCompletedSessions] = useState<number>(() => {
    const saved = localStorage.getItem('pomo_completed');
    return saved ? parseInt(saved, 10) : 3;
  });
  const [ambientMode, setAmbientMode] = useState<'off' | 'rain' | 'whitenoise' | 'lofi' | 'cafe'>('off');
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const getInitialSeconds = (mode: 'work' | 'shortBreak' | 'longBreak') => {
    if (mode === 'work') return 25 * 60;
    if (mode === 'shortBreak') return 5 * 60;
    return 15 * 60;
  };

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current as NodeJS.Timeout);
            setIsRunning(false);
            playChimeSound('complete');

            if (timerMode === 'work') {
              const nextCount = completedSessions + 1;
              setCompletedSessions(nextCount);
              localStorage.setItem('pomo_completed', nextCount.toString());
              if (nextCount % 4 === 0) {
                setTimerMode('longBreak');
                return 15 * 60;
              } else {
                setTimerMode('shortBreak');
                return 5 * 60;
              }
            } else {
              setTimerMode('work');
              return 25 * 60;
            }
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRunning, timerMode, completedSessions]);

  const switchTimerMode = (mode: 'work' | 'shortBreak' | 'longBreak') => {
    setIsRunning(false);
    setTimerMode(mode);
    setTimeLeft(getInitialSeconds(mode));
  };

  const handleResetTimer = () => {
    setIsRunning(false);
    setTimeLeft(getInitialSeconds(timerMode));
  };

  const handleAmbientChange = (mode: 'off' | 'rain' | 'whitenoise' | 'lofi' | 'cafe') => {
    setAmbientMode(mode);
    if (mode === 'off') {
      stopAmbientSound();
    } else {
      playAmbientSound(mode);
    }
  };

  useEffect(() => {
    return () => {
      stopAmbientSound();
    };
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const timerTotal = getInitialSeconds(timerMode);
  const strokeProgress = ((timerTotal - timeLeft) / timerTotal) * 100;

  // -------------------------------------------------------------
  // 3. WEEKLY TIME-BLOCK PLANNER STATE
  // -------------------------------------------------------------
  interface ScheduleBlock {
    id: string;
    day: string;
    timeSlot: string;
    title: string;
    category: 'deep' | 'class' | 'review' | 'life';
  }

  const [scheduleBlocks, setScheduleBlocks] = useState<ScheduleBlock[]>([
    { id: 'b1', day: 'Thứ 2', timeSlot: '08:00 - 11:30', title: 'Học sâu: Giải tích 1 (Deep Work)', category: 'deep' },
    { id: 'b2', day: 'Thứ 2', timeSlot: '13:30 - 16:30', title: 'Lên lớp: Pháp luật đại cương', category: 'class' },
    { id: 'b3', day: 'Thứ 3', timeSlot: '08:00 - 11:30', title: 'Lập trình C/C++ & Bài tập lớn', category: 'deep' },
    { id: 'b4', day: 'Thứ 3', timeSlot: '19:30 - 21:00', title: 'Active Recall & Ôn Anki', category: 'review' },
    { id: 'b5', day: 'Thứ 4', timeSlot: '14:00 - 17:00', title: 'Họp nhóm đồ án tại thư viện', category: 'class' },
    { id: 'b6', day: 'Thứ 5', timeSlot: '08:00 - 11:00', title: 'Học sâu: Cấu trúc dữ liệu', category: 'deep' },
    { id: 'b7', day: 'Thứ 6', timeSlot: '17:30 - 19:30', title: 'Thể thao, chạy bộ, CLB', category: 'life' },
    { id: 'b8', day: 'Thứ 7', timeSlot: '09:00 - 11:30', title: 'Luyện đề thi thử có bấm giờ', category: 'deep' },
    { id: 'b9', day: 'Chủ nhật', timeSlot: '20:00 - 21:30', title: 'Chủ nhật Review & Lên lịch tuần mới', category: 'review' }
  ]);

  const [newDay, setNewDay] = useState('Thứ 2');
  const [newTime, setNewTime] = useState('08:00 - 10:00');
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<'deep' | 'class' | 'review' | 'life'>('deep');

  const handleAddBlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    const newBlock: ScheduleBlock = {
      id: Date.now().toString(),
      day: newDay,
      timeSlot: newTime,
      title: newTitle.trim(),
      category: newCategory
    };
    setScheduleBlocks([...scheduleBlocks, newBlock]);
    setNewTitle('');
    playChimeSound('click');
  };

  const handleDeleteBlock = (id: string) => {
    setScheduleBlocks(scheduleBlocks.filter((b) => b.id !== id));
  };

  const categoryBadgeColors = {
    deep: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
    class: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    review: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    life: 'bg-rose-500/20 text-rose-300 border-rose-500/40'
  };

  const categoryNames = {
    deep: 'Học sâu (Deep Work)',
    class: 'Lên lớp / Nhóm',
    review: 'Ôn tập ngắt quãng',
    life: 'Đời sống & Thể thao'
  };

  // -------------------------------------------------------------
  // 4. GPA CALCULATOR & TARGET SIMULATOR
  // -------------------------------------------------------------
  interface CourseRow {
    id: string;
    name: string;
    credits: number;
    letterGrade: string;
  }

  const gradeMap: Record<string, number> = {
    'A+': 4.0,
    'A': 4.0,
    'B+': 3.5,
    'B': 3.0,
    'C+': 2.5,
    'C': 2.0,
    'D+': 1.5,
    'D': 1.0,
    'F': 0.0,
  };

  const [courses, setCourses] = useState<CourseRow[]>([
    { id: '1', name: 'Giải tích 1', credits: 3, letterGrade: 'A' },
    { id: '2', name: 'Đại số tuyến tính', credits: 3, letterGrade: 'B+' },
    { id: '3', name: 'Nhập môn lập trình', credits: 4, letterGrade: 'A+' },
    { id: '4', name: 'Pháp luật đại cương', credits: 2, letterGrade: 'B' },
    { id: '5', name: 'Tiếng Anh học thuật 1', credits: 3, letterGrade: 'A' },
  ]);

  const [newCourseName, setNewCourseName] = useState('');
  const [newCredits, setNewCredits] = useState(3);
  const [newGrade, setNewGrade] = useState('A');

  // Simulator state
  const [currentCPA, setCurrentCPA] = useState<number>(3.15);
  const [completedCredits, setCompletedCredits] = useState<number>(45);
  const [remainingCredits, setRemainingCredits] = useState<number>(75);
  const [targetDegree, setTargetDegree] = useState<'excellent' | 'good'>('good'); // excellent >= 3.6, good >= 3.2

  const calculateSemesterGPA = () => {
    let totalCredits = 0;
    let totalPoints = 0;
    courses.forEach((c) => {
      totalCredits += c.credits;
      totalPoints += c.credits * (gradeMap[c.letterGrade] ?? 0);
    });
    if (totalCredits === 0) return { gpa: 0, totalCredits: 0 };
    return {
      gpa: Number((totalPoints / totalCredits).toFixed(2)),
      totalCredits,
    };
  };

  const semesterResult = calculateSemesterGPA();

  const handleAddCourse = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCourseName.trim()) return;
    setCourses([
      ...courses,
      {
        id: Date.now().toString(),
        name: newCourseName.trim(),
        credits: Number(newCredits),
        letterGrade: newGrade,
      },
    ]);
    setNewCourseName('');
    playChimeSound('click');
  };

  const handleDeleteCourse = (id: string) => {
    setCourses(courses.filter((c) => c.id !== id));
  };

  // Simulate required GPA for target
  const targetThreshold = targetDegree === 'excellent' ? 3.60 : 3.20;
  const currentTotalPoints = currentCPA * completedCredits;
  const grandTotalCredits = completedCredits + remainingCredits;
  const requiredTotalPoints = targetThreshold * grandTotalCredits;
  const neededRemainingPoints = requiredTotalPoints - currentTotalPoints;
  const requiredRemainingGPA = remainingCredits > 0 ? Number((neededRemainingPoints / remainingCredits).toFixed(2)) : 0;
  const isTargetPossible = requiredRemainingGPA <= 4.0;

  // -------------------------------------------------------------
  // 5. FLASHCARD MINI TRAINER
  // -------------------------------------------------------------
  interface FlashcardItem {
    id: number;
    front: string;
    category: string;
    back: string;
    example: string;
  }

  const initialFlashcards: FlashcardItem[] = [
    {
      id: 1,
      category: 'Khoa học nhận thức',
      front: 'Active Recall là gì và tại sao vượt trội hơn đọc lại?',
      back: 'Active Recall là việc ép não bộ tự truy hồi thông tin mà không nhìn sách. Quá trình này củng cố các synapse nơ-ron mạnh gấp 3-4 lần so với đọc lại thụ động.',
      example: 'Ví dụ: Đóng sách lại và tự viết ra 5 ý chính của chương.'
    },
    {
      id: 2,
      category: 'Bộ nhớ dài hạn',
      front: 'Đường cong lãng quên Ebbinghaus chỉ ra điều gì?',
      back: 'Con người quên tới 70% kiến thức mới sau 24-48 giờ nếu không ôn lại. Lặp lại ngắt quãng (1 - 3 - 7 - 14 - 30 ngày) giúp dời mốc quên về vĩnh viễn.',
      example: 'Ứng dụng: Quẹt 20 thẻ Anki mỗi sáng.'
    },
    {
      id: 3,
      category: 'Hiểu bản chất',
      front: 'Quy tắc 4 bước của Kỹ thuật Feynman?',
      back: '1. Chọn khái niệm → 2. Giải thích cho trẻ 12 tuổi hiểu → 3. Xác định chỗ bị khựng/dùng từ khó → 4. Đơn giản hóa và dùng ẩn dụ đời thường.',
      example: 'Ví dụ: Giải thích Lãi kép như hòn tuyết lăn trên dốc.'
    },
    {
      id: 4,
      category: 'Quản lý thời gian',
      front: 'Vùng Vàng trong ma trận Eisenhower là góc phần tư nào?',
      back: 'Góc phần tư 2: "Quan trọng nhưng Không khẩn cấp". Đây là vùng của người thành công: Lên kế hoạch, học sâu, rèn luyện thể chất, nghiên cứu.',
      example: 'Hành động: Luôn đặt lịch cho việc vùng vàng vào buổi sáng.'
    },
    {
      id: 5,
      category: 'Xử lý giáo trình',
      front: '5 bước của kỹ thuật đọc sâu SQ3R?',
      back: 'Survey (Lướt cấu trúc) → Question (Đặt câu hỏi dẫn đường) → Read (Đọc chọn lọc) → Recite (Thuật lại bằng lời mình) → Review (Ôn tập hệ thống).',
      example: 'Áp dụng cho mọi cuốn giáo trình trên 300 trang.'
    },
    {
      id: 6,
      category: 'Kỹ năng ghi chép',
      front: 'Cấu trúc 3 vùng của trang ghi chép Cornell?',
      back: 'Cột bên phải (70%): Ghi chép chính trong giờ học. Cột bên trái (30%): Từ khóa & Câu hỏi gợi nhớ. Hàng đáy (5 dòng): Tóm tắt cốt lõi trong 1 phút.',
      example: 'Ôn thi chỉ cần che cột phải và trả lời các câu hỏi ở cột trái.'
    }
  ];

  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredCount, setMasteredCount] = useState(0);

  const currentCard = initialFlashcards[flashcardIndex];

  const handleNextCard = (mastered: boolean) => {
    if (mastered) {
      setMasteredCount((prev) => prev + 1);
      playChimeSound('reward');
    } else {
      playChimeSound('click');
    }
    setIsFlipped(false);
    setFlashcardIndex((prev) => (prev + 1) % initialFlashcards.length);
  };

  // -------------------------------------------------------------
  // 6. 21-DAY CHALLENGE STATE
  // -------------------------------------------------------------
  const [completedDays, setCompletedDays] = useState<number[]>(() => {
    const saved = localStorage.getItem('challenge_21_days');
    return saved ? JSON.parse(saved) : [1, 2, 3];
  });

  const toggleDayCompletion = (dayNum: number) => {
    let updated: number[];
    if (completedDays.includes(dayNum)) {
      updated = completedDays.filter((d) => d !== dayNum);
    } else {
      updated = [...completedDays, dayNum];
      playChimeSound('reward');
    }
    setCompletedDays(updated);
    localStorage.setItem('challenge_21_days', JSON.stringify(updated));
  };

  const challengeProgress = Math.round((completedDays.length / HABIT_CHALLENGE_DAYS.length) * 100);

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Hub */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Bộ Công Cụ Tương Tác "Peak"</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Học Tập Không Chỉ Là Đọc Lý Thuyết
        </h1>
        <p className="text-sm sm:text-base text-slate-400">
          Trải nghiệm ngay 6 tính năng thực chiến: Test phong cách học, Đồng hồ Pomodoro có âm thanh Lo-fi, Máy tính GPA & mô phỏng mục tiêu, Flashcards và Thử thách 21 ngày.
        </p>

        {/* Sub-tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 pt-4">
          {[
            { id: 'quiz', label: '1. Quiz Phong Cách', icon: <Brain className="w-4 h-4" /> },
            { id: 'pomodoro', label: '2. Pomodoro & Lo-Fi', icon: <Clock className="w-4 h-4" /> },
            { id: 'planner', label: '3. Weekly Planner', icon: <Calendar className="w-4 h-4" /> },
            { id: 'gpa', label: '4. Máy Tính GPA', icon: <Calculator className="w-4 h-4" /> },
            { id: 'flashcards', label: '5. Flashcard Mini', icon: <Layers className="w-4 h-4" /> },
            { id: 'challenge', label: '6. Thử Thách 21 Ngày', icon: <Flame className="w-4 h-4 text-amber-400" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveSubTab(tab.id as any);
                playChimeSound('click');
              }}
              className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 ${
                activeSubTab === tab.id
                  ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* SUB-TAB 1: QUIZ PHONG CÁCH HỌC */}
      {activeSubTab === 'quiz' && (
        <div className="max-w-3xl mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-slate-800">
            <div 
              className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-400 transition-all duration-300"
              style={{ width: `${quizFinished ? 100 : ((quizStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
            />
          </div>

          {!quizFinished ? (
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-6">
                <span className="font-semibold text-amber-400">
                  Câu hỏi {quizStep + 1} / {QUIZ_QUESTIONS.length}
                </span>
                <span>Phương pháp VARK & Nhận thức học</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-6 leading-snug">
                {QUIZ_QUESTIONS[quizStep].question}
              </h3>

              <div className="space-y-3">
                {QUIZ_QUESTIONS[quizStep].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt.style)}
                    className="w-full text-left p-4 rounded-xl bg-slate-800/70 hover:bg-indigo-950/60 border border-slate-700/60 hover:border-indigo-500/60 text-slate-200 hover:text-white text-sm transition-all group flex items-start gap-3.5 transform hover:-translate-y-0.5"
                  >
                    <span className="w-6 h-6 rounded-full bg-slate-700 group-hover:bg-indigo-600 text-slate-300 group-hover:text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="leading-relaxed flex-grow">{opt.text}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            // Quiz Result Profile
            <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
              {(() => {
                const profile = getDominantProfile();
                return (
                  <>
                    <div className="text-center space-y-2">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-bold">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Đã Hoàn Thành Bài Test</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-black text-white">
                        {profile.title}
                      </h2>
                      <p className="text-xs font-bold uppercase tracking-wider text-amber-400">
                        {profile.badge}
                      </p>
                    </div>

                    {/* Breakdown bar */}
                    <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                      <div className="text-xs font-semibold text-slate-400">Phân bố điểm số nhận thức:</div>
                      <div className="grid grid-cols-4 gap-2 text-center text-xs">
                        <div className="p-2 rounded-lg bg-indigo-950/50 border border-indigo-500/30">
                          <span className="block text-slate-400 text-[10px]">Thị giác</span>
                          <span className="text-white font-bold">{quizScores.visual} điểm</span>
                        </div>
                        <div className="p-2 rounded-lg bg-purple-950/50 border border-purple-500/30">
                          <span className="block text-slate-400 text-[10px]">Thính giác</span>
                          <span className="text-white font-bold">{quizScores.auditory} điểm</span>
                        </div>
                        <div className="p-2 rounded-lg bg-emerald-950/50 border border-emerald-500/30">
                          <span className="block text-slate-400 text-[10px]">Vận động</span>
                          <span className="text-white font-bold">{quizScores.kinesthetic} điểm</span>
                        </div>
                        <div className="p-2 rounded-lg bg-amber-950/50 border border-amber-500/30">
                          <span className="block text-slate-400 text-[10px]">Đọc & Viết</span>
                          <span className="text-white font-bold">{quizScores.readwrite} điểm</span>
                        </div>
                      </div>
                    </div>

                    {/* Profile details */}
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">Đặc điểm nổi bật của bạn</h4>
                        <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                          {profile.traits.map((t, idx) => (
                            <li key={idx}>{t}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/30 space-y-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-300">Top 3 Phương pháp tối ưu nhất cho bạn</h4>
                        <div className="grid sm:grid-cols-3 gap-2">
                          {profile.recommendedMethods.map((m, idx) => (
                            <div key={idx} className="p-2.5 rounded-lg bg-slate-900 border border-indigo-500/20 text-xs font-semibold text-white">
                              {m}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300">Mẹo học tập thực chiến & Môi trường lý tưởng</h4>
                        <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                          {profile.proTips.map((tip, idx) => (
                            <li key={idx}>{tip}</li>
                          ))}
                        </ul>
                        <div className="text-xs text-slate-400 pt-2 border-t border-slate-700/50">
                          <span className="font-semibold text-white">Không gian khuyến nghị:</span> {profile.studyEnvironment}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                      <button
                        onClick={handleShareQuiz}
                        className="w-full sm:w-auto flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-400/20 hover:scale-[1.02] transition-transform"
                      >
                        <Share2 className="w-4 h-4" />
                        <span>{copiedShare ? 'Đã sao chép vào bộ nhớ!' : 'Sao chép kết quả để chia sẻ'}</span>
                      </button>
                      <button
                        onClick={handleResetQuiz}
                        className="w-full sm:w-auto py-3 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold flex items-center justify-center gap-2 border border-slate-700 transition-colors"
                      >
                        <Repeat className="w-4 h-4" />
                        <span>Làm lại bài test</span>
                      </button>
                    </div>
                  </>
                );
              })()}
            </div>
          )}
        </div>
      )}

      {/* SUB-TAB 2: POMODORO TIMER TÍCH HỢP & LO-FI AMBIENT */}
      {activeSubTab === 'pomodoro' && (
        <div className="max-w-xl mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl space-y-8">
          {/* Mode Switcher */}
          <div className="flex p-1 bg-slate-950 rounded-xl border border-slate-800">
            <button
              onClick={() => switchTimerMode('work')}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                timerMode === 'work' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              Học Sâu (25p)
            </button>
            <button
              onClick={() => switchTimerMode('shortBreak')}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                timerMode === 'shortBreak' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              Nghỉ Ngắn (5p)
            </button>
            <button
              onClick={() => switchTimerMode('longBreak')}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                timerMode === 'longBreak' ? 'bg-amber-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              Nghỉ Dài (15p)
            </button>
          </div>

          {/* Circular Timer Visual */}
          <div className="relative flex items-center justify-center">
            <svg className="w-64 h-64 transform -rotate-90">
              <circle
                cx="128"
                cy="128"
                r="110"
                stroke="currentColor"
                strokeWidth="10"
                className="text-slate-800"
                fill="transparent"
              />
              <circle
                cx="128"
                cy="128"
                r="110"
                stroke="currentColor"
                strokeWidth="10"
                className={`transition-all duration-1000 ${
                  timerMode === 'work' ? 'text-indigo-500' : timerMode === 'shortBreak' ? 'text-emerald-500' : 'text-amber-500'
                }`}
                fill="transparent"
                strokeDasharray={2 * Math.PI * 110}
                strokeDashoffset={2 * Math.PI * 110 * (1 - strokeProgress / 100)}
                strokeLinecap="round"
              />
            </svg>

            <div className="absolute flex flex-col items-center justify-center text-center">
              <span className="text-5xl font-black text-white tracking-tighter">
                {formatTime(timeLeft)}
              </span>
              <span className="text-xs uppercase font-bold tracking-widest text-slate-400 mt-2">
                {timerMode === 'work' ? 'Focus Mode' : 'Rest Mode'}
              </span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => {
                setIsRunning(!isRunning);
                playChimeSound('click');
              }}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-transform active:scale-95 ${
                isRunning
                  ? 'bg-amber-500 hover:bg-amber-400 text-slate-950'
                  : 'bg-indigo-600 hover:bg-indigo-500 text-white'
              }`}
              title={isRunning ? 'Tạm dừng' : 'Bắt đầu'}
            >
              {isRunning ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
            </button>

            <button
              onClick={handleResetTimer}
              className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center border border-slate-700 transition-colors"
              title="Đặt lại thời gian"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
          </div>

          {/* Ambient Sound Player */}
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-amber-400" />
                <span>Nhạc nền tập trung (Web Audio Lo-Fi)</span>
              </div>
              <span className="text-[11px] text-slate-500">Chạy offline</span>
            </div>

            <div className="grid grid-cols-4 gap-1.5">
              {[
                { id: 'off', label: 'Tắt âm' },
                { id: 'lofi', label: 'Lo-Fi Bass' },
                { id: 'rain', label: 'Mưa nhẹ' },
                { id: 'cafe', label: 'Quán Cafe' },
              ].map((sound) => (
                <button
                  key={sound.id}
                  onClick={() => handleAmbientChange(sound.id as any)}
                  className={`py-1.5 px-2 rounded-lg text-xs font-semibold transition-all ${
                    ambientMode === sound.id
                      ? 'bg-amber-400 text-slate-950 font-bold'
                      : 'bg-slate-900 text-slate-400 hover:text-white'
                  }`}
                >
                  {sound.label}
                </button>
              ))}
            </div>
          </div>

          {/* Stats Bar */}
          <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-xs">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span className="text-slate-300">Hôm nay: <strong className="text-white">{completedSessions} chu kỳ</strong> hoàn thành</span>
            </div>
            <span className="text-emerald-400 font-bold">~{completedSessions * 25} phút học sâu</span>
          </div>
        </div>
      )}

      {/* SUB-TAB 3: WEEKLY TIME-BLOCK PLANNER */}
      {activeSubTab === 'planner' && (
        <div className="space-y-6">
          {/* Header & Print action */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>Thời Khóa Biểu & Time-Blocking Tuần</span>
                <span className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded font-mono">
                  {scheduleBlocks.filter((b) => b.category === 'deep').length * 2.5}h Học Sâu
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Phân bổ thời gian theo phương pháp Deep Work. Nhấn In/Xuất để dán trước bàn học.
              </p>
            </div>

            <button
              onClick={() => window.print()}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-2 border border-slate-700 transition-colors self-start sm:self-auto"
            >
              <Printer className="w-4 h-4 text-amber-400" />
              <span>In Thời Khóa Biểu (PDF)</span>
            </button>
          </div>

          {/* Add block form */}
          <form onSubmit={handleAddBlock} className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 grid grid-cols-1 sm:grid-cols-5 gap-3">
            <select
              value={newDay}
              onChange={(e) => setNewDay(e.target.value)}
              className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400"
            >
              {['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'].map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>

            <input
              type="text"
              value={newTime}
              onChange={(e) => setNewTime(e.target.value)}
              placeholder="Khung giờ (VD: 08:00 - 11:00)"
              className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400"
            />

            <input
              type="text"
              required
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="Nhiệm vụ (VD: Ôn Giải tích, Viết code...)"
              className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400"
            />

            <select
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value as any)}
              className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400"
            >
              <option value="deep">Học sâu (Deep Work)</option>
              <option value="class">Lên lớp / Họp nhóm</option>
              <option value="review">Ôn ngắt quãng</option>
              <option value="life">Đời sống / Thể thao</option>
            </select>

            <button
              type="submit"
              className="py-2 px-4 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Thêm Khối</span>
            </button>
          </form>

          {/* Schedule 7-Day Grid */}
          <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
            {['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'].map((day) => {
              const dayBlocks = scheduleBlocks.filter((b) => b.day === day);
              return (
                <div key={day} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-3 flex flex-col space-y-2.5">
                  <div className="font-bold text-xs text-center pb-2 border-b border-slate-800 text-amber-400 uppercase tracking-wider">
                    {day}
                  </div>

                  <div className="space-y-2 flex-grow">
                    {dayBlocks.length === 0 ? (
                      <div className="text-[11px] text-slate-600 text-center py-6 italic">
                        Trống lịch
                      </div>
                    ) : (
                      dayBlocks.map((block) => (
                        <div
                          key={block.id}
                          className={`p-2.5 rounded-xl border text-xs space-y-1 relative group transition-all ${
                            categoryBadgeColors[block.category]
                          }`}
                        >
                          <div className="flex items-center justify-between text-[10px] opacity-80">
                            <span>{block.timeSlot}</span>
                            <button
                              onClick={() => handleDeleteBlock(block.id)}
                              className="text-slate-400 hover:text-rose-400 opacity-0 group-hover:opacity-100 transition-opacity"
                              title="Xóa khối"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>
                          <div className="font-semibold leading-tight line-clamp-2">
                            {block.title}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 pt-2">
            {(Object.keys(categoryNames) as Array<keyof typeof categoryNames>).map((cat) => (
              <div key={cat} className="flex items-center gap-1.5">
                <span className={`w-3 h-3 rounded-full border ${categoryBadgeColors[cat]}`} />
                <span>{categoryNames[cat]}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB 4: MÁY TÍNH GPA & MÔ PHỎNG MỤC TIÊU */}
      {activeSubTab === 'gpa' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Course list & Add form */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-amber-400" />
                  <span>Danh Sách Môn Học Kỳ Này</span>
                </h3>
                <span className="text-xs text-slate-400">{courses.length} môn học</span>
              </div>

              {/* Add form */}
              <form onSubmit={handleAddCourse} className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                <input
                  type="text"
                  required
                  value={newCourseName}
                  onChange={(e) => setNewCourseName(e.target.value)}
                  placeholder="Tên môn học (VD: Xác suất...)"
                  className="sm:col-span-2 px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400"
                />
                <select
                  value={newCredits}
                  onChange={(e) => setNewCredits(Number(e.target.value))}
                  className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400"
                >
                  <option value={1}>1 tín chỉ</option>
                  <option value={2}>2 tín chỉ</option>
                  <option value={3}>3 tín chỉ</option>
                  <option value={4}>4 tín chỉ</option>
                  <option value={5}>5 tín chỉ</option>
                </select>
                <select
                  value={newGrade}
                  onChange={(e) => setNewGrade(e.target.value)}
                  className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400"
                >
                  {Object.keys(gradeMap).map((g) => (
                    <option key={g} value={g}>{g} ({gradeMap[g].toFixed(1)})</option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="sm:col-span-4 py-2 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>Thêm Môn Vào Bảng Tính</span>
                </button>
              </form>

              {/* Course rows */}
              <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs"
                  >
                    <div>
                      <span className="font-bold text-white block">{course.name}</span>
                      <span className="text-[11px] text-slate-400">{course.credits} tín chỉ · Điểm chữ: {course.letterGrade}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-amber-400 text-sm">
                        {gradeMap[course.letterGrade]?.toFixed(1)} / 4.0
                      </span>
                      <button
                        onClick={() => handleDeleteCourse(course.id)}
                        className="text-slate-500 hover:text-rose-400 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Result Card & Target Simulator */}
          <div className="lg:col-span-5 space-y-6">
            {/* Semester GPA Score Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-950/80 to-purple-950/60 border border-indigo-500/30 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-300">Kết quả dự kiến học kỳ</span>
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-black text-white">{semesterResult.gpa}</span>
                <span className="text-slate-400 text-sm font-semibold">/ 4.00</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-indigo-500/20">
                <div className="text-slate-300">Tổng tín chỉ: <strong>{semesterResult.totalCredits} TC</strong></div>
                <div className="text-slate-300">Xếp loại: <strong className="text-amber-400">
                  {semesterResult.gpa >= 3.6 ? 'Xuất Sắc' : semesterResult.gpa >= 3.2 ? 'Giỏi' : semesterResult.gpa >= 2.5 ? 'Khá' : 'Trung Bình'}
                </strong></div>
              </div>
            </div>

            {/* Target Simulator */}
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <h4 className="text-sm font-bold text-white">Mô Phỏng: Cần Bao Nhiêu Điểm Để Đạt Bằng Giỏi?</h4>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="text-slate-400 block mb-1">CPA tích lũy hiện tại của bạn:</label>
                  <input
                    type="number"
                    step="0.05"
                    min="0"
                    max="4.0"
                    value={currentCPA}
                    onChange={(e) => setCurrentCPA(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white font-mono"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-slate-400 block mb-1">Số TC đã tích lũy:</label>
                    <input
                      type="number"
                      value={completedCredits}
                      onChange={(e) => setCompletedCredits(Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 block mb-1">Số TC còn lại:</label>
                    <input
                      type="number"
                      value={remainingCredits}
                      onChange={(e) => setRemainingCredits(Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-slate-400 block mb-1">Mục tiêu tốt nghiệp:</label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setTargetDegree('good')}
                      className={`flex-1 py-1.5 rounded-lg font-bold transition-all ${
                        targetDegree === 'good' ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      Bằng Giỏi (≥ 3.20)
                    </button>
                    <button
                      type="button"
                      onClick={() => setTargetDegree('excellent')}
                      className={`flex-1 py-1.5 rounded-lg font-bold transition-all ${
                        targetDegree === 'excellent' ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      Xuất Sắc (≥ 3.60)
                    </button>
                  </div>
                </div>

                {/* Simulation Result */}
                <div className={`p-4 rounded-xl border mt-3 ${
                  isTargetPossible ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-200' : 'bg-rose-950/40 border-rose-500/30 text-rose-200'
                }`}>
                  {isTargetPossible ? (
                    <div>
                      <div className="font-bold text-xs">Mục tiêu hoàn toàn khả thi!</div>
                      <p className="text-[11px] mt-1 opacity-90 leading-relaxed">
                        Ở {remainingCredits} tín chỉ còn lại, bạn cần duy trì GPA trung bình tối thiểu là <strong className="text-white text-sm">{requiredRemainingGPA.toFixed(2)}</strong> / 4.0.
                      </p>
                    </div>
                  ) : (
                    <div>
                      <div className="font-bold text-xs">Mục tiêu vượt ngưỡng lý thuyết</div>
                      <p className="text-[11px] mt-1 opacity-90 leading-relaxed">
                        Bạn cần trung bình {requiredRemainingGPA.toFixed(2)}/4.0 (vượt quá trần 4.0). Hãy xem xét việc học cải thiện các môn điểm C/D để nâng mốc CPA ban đầu lên nhé!
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 5: FLASHCARD MINI TRAINER */}
      {activeSubTab === 'flashcards' && (
        <div className="max-w-xl mx-auto space-y-6">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              {currentCard.category} · Thẻ {flashcardIndex + 1} / {initialFlashcards.length}
            </span>
            <p className="text-xs text-slate-400">
              Nhấn vào thẻ để lật mặt sau. Tự đánh giá mức độ nhớ để củng cố Spaced Repetition.
            </p>
          </div>

          {/* Flashcard container with flip animation */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="w-full h-80 rounded-3xl cursor-pointer perspective-1000 select-none group"
          >
            <div className={`w-full h-full rounded-3xl p-8 border transition-all duration-500 flex flex-col justify-between shadow-2xl ${
              isFlipped
                ? 'bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 border-indigo-500/50'
                : 'bg-slate-900 border-slate-800 hover:border-slate-700'
            }`}>
              {!isFlipped ? (
                <>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>Mặt trước: Câu hỏi gợi nhớ</span>
                    <span className="text-amber-400/80 text-[11px]">Chạm để lật ↺</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-white text-center leading-snug">
                    {currentCard.front}
                  </div>
                  <div className="text-[11px] text-slate-500 text-center italic">
                    Gợi ý: Cố gắng nhớ và nói câu trả lời thành tiếng trước khi lật!
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-between text-xs text-indigo-400 font-semibold">
                    <span>Mặt sau: Bản chất & Hành động</span>
                    <span className="text-slate-400 text-[11px]">Chạm để quay lại ↺</span>
                  </div>
                  <div className="text-sm sm:text-base text-slate-200 leading-relaxed space-y-3">
                    <p>{currentCard.back}</p>
                    <p className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-amber-300 font-medium">
                      {currentCard.example}
                    </p>
                  </div>
                  <div className="text-[11px] text-slate-400 text-center">
                    Bạn đã nhớ ý này chưa? Hãy chọn đánh giá bên dưới.
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => handleNextCard(false)}
              className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs border border-slate-700 transition-colors"
            >
              Chưa thuộc (Ôn lại sau)
            </button>
            <button
              onClick={() => handleNextCard(true)}
              className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-1.5"
            >
              <Check className="w-4 h-4" />
              <span>Đã thuộc lòng!</span>
            </button>
          </div>

          <div className="text-center text-xs text-slate-400">
            Đã thuộc: <strong className="text-white">{masteredCount} thẻ</strong> trong bộ thẻ cốt lõi.
          </div>
        </div>
      )}

      {/* SUB-TAB 6: THỬ THÁCH 21 NGÀY XÂY THÓI QUEN */}
      {activeSubTab === 'challenge' && (
        <div className="space-y-6">
          {/* Progress Banner */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-amber-950/50 via-slate-900 to-indigo-950/50 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Flame className="w-5 h-5 text-amber-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Thử Thách 21 Ngày Khởi Tạo Phong Thần</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Đã hoàn thành {completedDays.length} / 21 Ngày ({challengeProgress}%)
              </h3>
              <p className="text-xs text-slate-400 max-w-lg">
                Mỗi ngày 1 nhiệm vụ nhỏ vi mô (Micro-Habit). Kỷ luật không phải là hành động vĩ đại trong 1 ngày, mà là những việc nhỏ làm liên tục trong 21 ngày.
              </p>
            </div>

            {/* Badges unlocked */}
            <div className="flex items-center gap-2 flex-wrap justify-center">
              {[
                { min: 1, name: 'Tân Binh', icon: '🌱' },
                { min: 7, name: 'Tuần Đầu', icon: '⚡' },
                { min: 14, name: 'Kỷ Luật', icon: '🛡️' },
                { min: 21, name: 'Bậc Thầy', icon: '👑' },
              ].map((b, idx) => {
                const unlocked = completedDays.length >= b.min;
                return (
                  <div
                    key={idx}
                    className={`px-3 py-2 rounded-xl border text-center transition-all ${
                      unlocked
                        ? 'bg-amber-400/20 border-amber-400/40 text-amber-300 shadow-md shadow-amber-400/10'
                        : 'bg-slate-900/60 border-slate-800 text-slate-600 opacity-60'
                    }`}
                  >
                    <span className="text-xl block">{b.icon}</span>
                    <span className="text-[10px] font-bold block mt-0.5">{b.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 21 Days Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {HABIT_CHALLENGE_DAYS.map((task) => {
              const isDone = completedDays.includes(task.day);
              return (
                <div
                  key={task.day}
                  onClick={() => toggleDayCompletion(task.day)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 flex flex-col justify-between space-y-3 ${
                    isDone
                      ? 'bg-indigo-950/40 border-indigo-500/50 shadow-md shadow-indigo-500/10'
                      : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                          isDone ? 'bg-indigo-500 text-white' : 'bg-slate-800 text-slate-400'
                        }`}>
                          Ngày {task.day}
                        </span>
                        <span className="text-[10px] text-slate-500">{task.category}</span>
                      </div>
                      <h4 className={`text-sm font-bold ${isDone ? 'text-indigo-200 line-through' : 'text-white'}`}>
                        {task.title}
                      </h4>
                    </div>

                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                      isDone ? 'bg-emerald-500 text-slate-950' : 'border border-slate-700 bg-slate-950'
                    }`}>
                      {isDone && <Check className="w-4 h-4 stroke-[3]" />}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {task.action}
                  </p>

                  <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-800/60 italic">
                    💡 {task.whyItWorks}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
