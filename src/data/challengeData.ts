import { HabitChallengeDay } from '../types';

export const HABIT_CHALLENGE_DAYS: HabitChallengeDay[] = [
  {
    day: 1,
    title: 'Dọn sạch bàn học & Loại bỏ rác thị giác',
    action: 'Dọn sạch mặt bàn học. Chỉ để lại máy tính/vở, 1 cây bút và 1 ly nước. Đưa điện thoại sang phòng khác.',
    whyItWorks: 'Không gian ngăn nắp giải phóng tài nguyên thị giác của vỏ não, giảm cảm giác áp lực vô thức.',
    category: 'Tập trung'
  },
  {
    day: 2,
    title: 'Thử nghiệm 1 vòng Pomodoro 25 phút',
    action: 'Chọn 1 bài tập bạn ghét nhất. Bật timer 25 phút trên web này và làm liên tục không ngẩng đầu.',
    whyItWorks: 'Vượt qua ngưỡng sức ỳ tâm lý (Starting friction). Bạn sẽ nhận ra công việc không đáng sợ như tưởng tượng.',
    category: 'Tập trung'
  },
  {
    day: 3,
    title: 'Áp dụng Quy tắc 2 Phút triệt để',
    action: 'Bất kỳ việc gì mất dưới 2 phút (reply mail, nộp bài, cất sách), làm ngay lập tức trong hôm nay.',
    whyItWorks: 'Ngăn chặn hiện tượng "hiệu ứng Zeigarnik" (tâm trí bị ám ảnh bởi các việc dang dở dồn ứ).',
    category: 'Thói quen'
  },
  {
    day: 4,
    title: 'Thực hành Active Recall 1 lần',
    action: 'Đọc xong 1 mục sách, gấp sách lại và viết ra giấy nháp 3 điều bạn vừa đọc mà không nhìn tài liệu.',
    whyItWorks: 'Kích hoạt nơ-ron truy hồi thông tin, tăng độ bền liên kết synapse não gấp 3 lần so với đọc lại.',
    category: 'Tư duy'
  },
  {
    day: 5,
    title: 'Viết Top 3 Việc Quan Trọng Nhất (MIT)',
    action: 'Trước 22:00 tối nay, ghi ra giấy đúng 3 việc quan trọng nhất ngày mai bắt buộc phải hoàn thành.',
    whyItWorks: 'Định hình mục tiêu rõ ràng trước khi thức dậy giúp não bộ không rơi vào trạng thái hoang mang sáng hôm sau.',
    category: 'Công cụ'
  },
  {
    day: 6,
    title: 'Không chạm điện thoại trong 30 phút sau khi thức dậy',
    action: 'Sáng mai dậy: Uống 1 ly nước ấm, rửa mặt, ăn sáng mà không mở bất kỳ mạng xã hội nào.',
    whyItWorks: 'Bảo vệ mức dopamine tự nhiên, ngăn não bị cuốn vào vòng xoáy kích thích bị động đầu ngày.',
    category: 'Thói quen'
  },
  {
    day: 7,
    title: 'Review tuần đầu & Tự thưởng lành mạnh',
    action: 'Nhìn lại 6 ngày qua, ghi nhận nỗ lực của bản thân và tự thưởng cho mình 1 buổi đi dạo hoặc đồ uống yêu thích.',
    whyItWorks: 'Hệ thống tưởng thưởng củng cố vòng lặp thói quen thần kinh (Cue -> Routine -> Reward).',
    category: 'Tư duy'
  },
  {
    day: 8,
    title: 'Thử nghiệm Kỹ thuật Feynman',
    action: 'Chọn 1 khái niệm chuyên ngành, giả vờ giảng lại cho 1 đứa trẻ 12 tuổi nghe trong 3 phút.',
    whyItWorks: 'Phơi bày chính xác những "vùng mù" kiến thức mà bạn tưởng mình đã hiểu.',
    category: 'Tư duy'
  },
  {
    day: 9,
    title: 'Tạo tài khoản Anki & Thêm 10 thẻ đầu tiên',
    action: 'Tải Anki/Quizlet, nhập 10 thuật ngữ khó nhất tuần này và quẹt thử vòng đầu tiên.',
    whyItWorks: 'Khởi động cỗ máy lặp lại ngắt quãng để chuẩn bị cho kỳ thi dài hạn.',
    category: 'Công cụ'
  },
  {
    day: 10,
    title: 'Time-Blocking cho ngày mai',
    action: 'Chia các giờ trong ngày mai thành các khối: Giờ học sâu, giờ lên lớp, giờ nghỉ ngơi và tập thể dục.',
    whyItWorks: 'Nếu bạn không kiểm soát thời gian của mình, người khác và các tác nhân xao nhãng sẽ kiểm soát nó.',
    category: 'Công cụ'
  },
  {
    day: 11,
    title: 'Thực hành Hít thở 4-7-8 khi căng thẳng',
    action: 'Dành 3 phút buổi chiều làm 4 chu kỳ thở 4-7-8 (Hít 4s - Giữ 7s - Thở 8s).',
    whyItWorks: 'Kích hoạt hệ thần kinh phó giao cảm (Parasympathetic nervous system), lập tức hạ nhịp tim và cortisol.',
    category: 'Thói quen'
  },
  {
    day: 12,
    title: 'Đọc tài liệu theo phương pháp SQ3R',
    action: 'Khi đọc giáo trình hôm nay: Lướt đề mục (Survey) và đặt 2 câu hỏi (Question) trước khi đọc chi tiết.',
    whyItWorks: 'Biến việc đọc thành trò chơi tìm kiếm lời giải, chống hiện tượng "đọc như ru ngủ".',
    category: 'Tư duy'
  },
  {
    day: 13,
    title: 'Học một buổi không nhạc nền / lofi',
    action: 'Thử 1 block 45 phút học trong sự tĩnh lặng tuyệt đối hoặc chỉ có tiếng ồn trắng tự nhiên.',
    whyItWorks: 'Tập thích nghi với không gian phòng thi thật sự – nơi không hề có tai nghe hay nhạc nền.',
    category: 'Tập trung'
  },
  {
    day: 14,
    title: 'Cắt đứt "Bận rộn ảo" (Fake Work)',
    action: 'Rà soát danh sách việc làm: Xóa bỏ 1 việc không đem lại giá trị thực tế cho mục tiêu học tập.',
    whyItWorks: 'Tập trung vào 20% công việc mang lại 80% kết quả (Nguyên lý Pareto).',
    category: 'Thói quen'
  },
  {
    day: 15,
    title: 'Làm việc nhóm: Gửi tin nhắn cập nhật tiến độ',
    action: 'Chủ động nhắn tin vào nhóm môn học cập nhật phần việc mình đang làm và hỏi thăm bạn cùng nhóm.',
    whyItWorks: 'Giao tiếp chủ động triệt tiêu 90% hiểu lầm và bất đồng trong làm việc nhóm.',
    category: 'Thói quen'
  },
  {
    day: 16,
    title: 'Vẽ 1 Sơ đồ Tư duy (Mind Map) tổng kết chương',
    action: 'Dùng giấy A4 xoay ngang hoặc Miro, vẽ sơ đồ liên kết ý tưởng của 1 chương môn học.',
    whyItWorks: 'Kích hoạt mã hóa kép (Dual coding) kết hợp ngôn ngữ và không gian trực quan.',
    category: 'Tư duy'
  },
  {
    day: 17,
    title: 'Ngủ đủ 8 tiếng & Ngắt màn hình trước 23:00',
    action: 'Tắt máy tính trước 22:30, lên giường trước 23:00 và ngủ trọn vẹn 8 tiếng.',
    whyItWorks: 'Giấc ngủ REM củng cố thông tin từ vùng hồi hải mã vào vỏ não dài hạn.',
    category: 'Thói quen'
  },
  {
    day: 18,
    title: 'Tập nói trước gương 5 phút',
    action: 'Đứng thẳng, nhìn vào gương và tự thuyết trình 1 chủ đề bất kỳ trong 5 phút kèm ngôn ngữ cơ thể.',
    whyItWorks: 'Xây dựng sự tự tin và giảm phản ứng co rúm của hệ cơ khi đứng trước đám đông.',
    category: 'Tập trung'
  },
  {
    day: 19,
    title: 'Tra cứu 1 bài báo trên Google Scholar',
    action: 'Tìm 1 bài báo khoa học liên quan đến ngành học, tải bản PDF và đọc phần Abstract.',
    whyItWorks: 'Làm quen với ngôn ngữ học thuật quốc tế và kỹ năng trích dẫn.',
    category: 'Công cụ'
  },
  {
    day: 20,
    title: 'Dạy lại 1 điều mới cho người khác',
    action: 'Kể cho bạn cùng phòng hoặc người thân nghe 1 điều thú vị bạn mới học được trong tuần.',
    whyItWorks: 'Hiệu ứng Protégé: Khi dạy người khác, bạn đào sâu và củng cố kiến thức tốt nhất.',
    category: 'Tư duy'
  },
  {
    day: 21,
    title: 'Lễ Tốt Nghiệp 21 Ngày: Đánh giá & Thiết lập hệ thống',
    action: 'Điểm danh toàn bộ 21 ngày. Bạn đã chính thức hình thành bản đồ thần kinh của một sinh viên ưu tú!',
    whyItWorks: 'Thói quen mới đã bám rễ. Giờ đây phương pháp học thông minh đã trở thành phản xạ tự nhiên của bạn.',
    category: 'Tư duy'
  }
];
