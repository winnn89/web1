import React, { useState } from 'react';
import { STUDENT_STORIES, FORUM_QUESTIONS, DOWNLOADABLE_RESOURCES } from '../data/communityData';
import { ForumQuestion } from '../types';
import { playChimeSound } from '../utils/audio';
import { 
  Users, 
  Download, 
  MessageSquare, 
  ThumbsUp, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  BookOpen, 
  Share2, 
  Filter,
  FileText
} from 'lucide-react';

export const CommunityView: React.FC = () => {
  const [questions, setQuestions] = useState<ForumQuestion[]>(FORUM_QUESTIONS);
  const [selectedMajorFilter, setSelectedMajorFilter] = useState<string>('Tất cả');

  // New question form state
  const [showAskForm, setShowAskForm] = useState(false);
  const [authorName, setAuthorName] = useState('');
  const [questionTitle, setQuestionTitle] = useState('');
  const [questionContent, setQuestionContent] = useState('');
  const [questionMajor, setQuestionMajor] = useState('Kỹ thuật & CNTT');

  // Download simulation state
  const [downloadedIds, setDownloadedIds] = useState<string[]>([]);

  const handleLikeQuestion = (id: string) => {
    setQuestions(questions.map((q) => (q.id === id ? { ...q, likes: q.likes + 1 } : q)));
    playChimeSound('click');
  };

  const handleCreateQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!questionTitle.trim() || !questionContent.trim()) return;

    const newQ: ForumQuestion = {
      id: Date.now().toString(),
      author: authorName.trim() || 'Sinh viên giấu tên',
      role: 'Tân sinh viên',
      timeAgo: 'Vừa xong',
      major: questionMajor,
      year: 'Năm 1',
      title: questionTitle.trim(),
      content: questionContent.trim(),
      likes: 1,
      answers: []
    };

    setQuestions([newQ, ...questions]);
    setQuestionTitle('');
    setQuestionContent('');
    setShowAskForm(false);
    playChimeSound('reward');
  };

  const handleDownload = (id: string, title: string) => {
    if (!downloadedIds.includes(id)) {
      setDownloadedIds([...downloadedIds, id]);
    }
    playChimeSound('reward');

    // Generate a simple downloadable text/markdown file representation
    const textContent = `# TÀI LIỆU HỌC TẬP TỪ HỌC ĐẠI HỌC PRO\nTiêu đề: ${title}\nNăm: 2026\nNội dung: Tài liệu bản quyền hỗ trợ sinh viên học tập hiệu quả ở môi trường đại học.\nWebsite: https://hocdaihoc.vn\n\nChúc bạn có một kỳ học rực rỡ và đạt GPA tối đa!`;
    const blob = new Blob([textContent], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${id}-hoc-dai-hoc-pro.md`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const majors = ['Tất cả', 'Công nghệ Thông tin', 'Kinh tế & Quản trị', 'Kỹ thuật Y sinh'];

  const filteredQuestions = questions.filter((q) => {
    return selectedMajorFilter === 'Tất cả' || q.major === selectedMajorFilter;
  });

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold">
          <Users className="w-3.5 h-3.5" />
          <span>Mạng Lưới Sinh Viên Việt Nam</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Cộng Đồng & Tài Nguyên Học Tập
        </h1>
        <p className="text-sm sm:text-base text-slate-400">
          Học hỏi kinh nghiệm từ các thủ khoa đi trước, giải đáp các thắc mắc giảng đường và tải về các template học tập độc quyền.
        </p>
      </div>

      {/* 1. CÂU CHUYỆN SINH VIÊN (FORMAT CHUẨN: TRƯỚC - ĐIỂM NGOẶT - SAU - 3 LỜI KHUYÊN) */}
      <section className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Hồ sơ người thật việc thật</span>
          <h2 className="text-2xl font-bold text-white">Những Cú Lội Ngược Dòng Đỉnh Cao</h2>
          <p className="text-xs text-slate-400">
            Từ cảnh báo học vụ vươn lên thủ khoa, từ kiệt sức burnout đến làm chủ cuộc sống.
          </p>
        </div>

        <div className="space-y-6">
          {STUDENT_STORIES.map((story) => (
            <div
              key={story.id}
              className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-6 shadow-xl"
            >
              {/* Header profile */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{story.avatar}</span>
                  <div>
                    <h3 className="font-extrabold text-lg text-white">{story.name}</h3>
                    <p className="text-xs text-slate-400">{story.school}</p>
                  </div>
                </div>

                <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-amber-400/20 text-amber-300 border border-amber-400/30 self-start sm:self-auto">
                  🏆 {story.achievement}
                </span>
              </div>

              {/* 3 Phases: Trước -> Điểm ngoặt -> Sau */}
              <div className="grid md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-1.5">
                  <span className="font-bold text-rose-400 uppercase text-[10px] block">
                    1. Trước khi thay đổi (Nỗi đau)
                  </span>
                  <p className="text-slate-300 leading-relaxed text-[11px]">
                    {story.before}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 space-y-1.5">
                  <span className="font-bold text-indigo-300 uppercase text-[10px] block">
                    2. Điểm ngoặt thức tỉnh (Hành động)
                  </span>
                  <p className="text-slate-300 leading-relaxed text-[11px]">
                    {story.turningPoint}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-1.5">
                  <span className="font-bold text-emerald-400 uppercase text-[10px] block">
                    3. Kết quả ngọt ngào (Trái ngọt)
                  </span>
                  <p className="text-slate-300 leading-relaxed text-[11px]">
                    {story.after}
                  </p>
                </div>
              </div>

              {/* 3 Advices */}
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-2 text-xs">
                <span className="font-bold text-amber-400 uppercase text-[10px] block">
                  3 Lời khuyên xương máu dành cho bạn:
                </span>
                <ul className="space-y-1.5 text-slate-300 text-[11px]">
                  {story.threeAdvices.map((adv, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="font-bold text-amber-400">{idx + 1}.</span>
                      <span>{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. THƯ VIỆN TÀI LIỆU TẢI XUỐNG */}
      <section className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Tài nguyên miễn phí</span>
          <h2 className="text-2xl font-bold text-white">Thư Viện Mẫu & Biểu Mẫu Tải Xuống</h2>
          <p className="text-xs text-slate-400">
            Tải về in ấn hoặc nhập trực tiếp vào Notion/GoodNotes/Word.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {DOWNLOADABLE_RESOURCES.map((res) => {
            const isDownloaded = downloadedIds.includes(res.id);
            return (
              <div
                key={res.id}
                className="p-5 rounded-3xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between space-y-4 shadow-lg hover:border-indigo-500/40 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                      {res.category}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">
                      {res.fileSize}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white leading-snug">
                    {res.title}
                  </h3>

                  <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-3">
                    {res.desc}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <div className="text-[10px] text-slate-500">
                    Định dạng: {res.fileType} · {res.downloads} lượt tải
                  </div>

                  <button
                    onClick={() => handleDownload(res.id, res.title)}
                    className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                      isDownloaded
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-indigo-600 hover:bg-indigo-500 text-white'
                    }`}
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{isDownloaded ? 'Đã Tải Xuống' : 'Tải File Miễn Phí'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. DIỄN ĐÀN HỎI ĐÁP & CHIA SẺ */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Góc kết nối</span>
            <h2 className="text-2xl font-bold text-white">Diễn Đàn Hỏi Đáp Giảng Đường</h2>
            <p className="text-xs text-slate-400 mt-0.5">Đặt câu hỏi khó của bạn để các anh chị khóa trên giải đáp:</p>
          </div>

          <button
            onClick={() => setShowAskForm(!showAskForm)}
            className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center gap-1.5 self-start sm:self-auto transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{showAskForm ? 'Đóng Khung Hỏi' : 'Đặt Câu Hỏi Mới'}</span>
          </button>
        </div>

        {/* Ask Question Form */}
        {showAskForm && (
          <form onSubmit={handleCreateQuestion} className="p-6 rounded-3xl bg-slate-900 border border-amber-400/30 space-y-4 animate-in fade-in duration-200">
            <h3 className="font-bold text-sm text-white">Gửi Câu Hỏi Của Bạn Lên Diễn Đàn</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Tên của bạn hoặc biệt danh (tùy chọn)"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500"
              />
              <select
                value={questionMajor}
                onChange={(e) => setQuestionMajor(e.target.value)}
                className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white"
              >
                <option value="Công nghệ Thông tin">Công nghệ Thông tin</option>
                <option value="Kinh tế & Quản trị">Kinh tế & Quản trị</option>
                <option value="Kỹ thuật Y sinh">Kỹ thuật Y sinh & Y Dược</option>
                <option value="Xã hội & Ngôn ngữ">Xã hội & Ngôn ngữ</option>
              </select>
            </div>
            <input
              type="text"
              required
              placeholder="Tiêu đề câu hỏi ngắn gọn..."
              value={questionTitle}
              onChange={(e) => setQuestionTitle(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500"
            />
            <textarea
              required
              rows={3}
              placeholder="Chi tiết hoàn cảnh bạn đang gặp phải..."
              value={questionContent}
              onChange={(e) => setQuestionContent(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500"
            />
            <button
              type="submit"
              className="py-2.5 px-6 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-2 hover:bg-amber-300 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Đăng Câu Hỏi</span>
            </button>
          </form>
        )}

        {/* Filter categories */}
        <div className="flex flex-wrap gap-2">
          {majors.map((m) => (
            <button
              key={m}
              onClick={() => setSelectedMajorFilter(m)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                selectedMajorFilter === m
                  ? 'bg-amber-400 text-slate-950 font-bold'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Questions List */}
        <div className="space-y-4">
          {filteredQuestions.map((q) => (
            <div
              key={q.id}
              className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs">
                  <span className="font-bold text-white">{q.author}</span>
                  <span className="text-slate-500">·</span>
                  <span className="text-indigo-400">{q.major}</span>
                  <span className="text-slate-500">·</span>
                  <span className="text-slate-500">{q.timeAgo}</span>
                </div>

                <button
                  onClick={() => handleLikeQuestion(q.id)}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-amber-400 text-xs transition-colors"
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>{q.likes}</span>
                </button>
              </div>

              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">{q.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{q.content}</p>
              </div>

              {/* Answers */}
              {q.answers.length > 0 && (
                <div className="space-y-2 pt-3 border-t border-slate-800">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                    Câu trả lời được bình chọn nhiều nhất:
                  </span>
                  {q.answers.map((ans, aIdx) => (
                    <div
                      key={aIdx}
                      className="p-4 rounded-2xl bg-slate-950/80 border border-indigo-500/20 text-xs space-y-1.5"
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-emerald-400">{ans.author}</span>
                        <span className="text-[10px] px-1.5 py-0.2 bg-emerald-500/10 text-emerald-300 rounded">{ans.role}</span>
                        <span className="text-slate-500 text-[10px] ml-auto">{ans.timeAgo}</span>
                      </div>
                      <p className="text-slate-200 leading-relaxed text-[11px]">{ans.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
