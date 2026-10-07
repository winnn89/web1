export interface TimeBlockItem {
  timeRange: string;
  activity: string;
  note: string;
  category: 'routine' | 'deepwork' | 'rest' | 'social' | 'review';
  color: string;
}

export const DAILY_ROUTINE_SCHEDULE: TimeBlockItem[] = [
  {
    timeRange: '06:30 – 07:30',
    activity: 'Thức dậy, vận động nhẹ & ăn sáng dinh dưỡng',
    note: 'Quy tắc vàng: Tuyệt đối không lướt mạng xã hội ngay trong 30 phút đầu sau khi mở mắt. Uống 1 ly nước ấm để đánh thức não bộ.',
    category: 'routine',
    color: 'border-l-amber-400 bg-amber-500/10'
  },
  {
    timeRange: '08:00 – 11:30',
    activity: 'Lên lớp / Học sâu (Deep Work 2–3 vòng Pomodoro)',
    note: 'Khoảng thời gian vỏ não hoạt động minh mẫn nhất trong ngày. Xếp môn khó nhất, bài toán hóc búa nhất hoặc viết tiểu luận vào đây.',
    category: 'deepwork',
    color: 'border-l-indigo-500 bg-indigo-500/10'
  },
  {
    timeRange: '12:00 – 13:30',
    activity: 'Ăn trưa đầy đủ + Nghỉ ngắn phục hồi (Power Nap)',
    note: 'Chợp mắt 15–20 phút giúp xả rác thông tin tạm thời và nạp lại năng lượng cho buổi chiều. Tránh ngủ trưa quá 30 phút vì dễ bị say ngủ.',
    category: 'rest',
    color: 'border-l-emerald-500 bg-emerald-500/10'
  },
  {
    timeRange: '14:00 – 17:00',
    activity: 'Bài tập về nhà, làm việc nhóm, ngồi thư viện',
    note: 'Áp dụng Active Recall để ôn lại ngay các nội dung vừa học buổi sáng. Giải quyết bài tập lớn và thảo luận cùng nhóm môn học.',
    category: 'deepwork',
    color: 'border-l-purple-500 bg-purple-500/10'
  },
  {
    timeRange: '17:30 – 19:30',
    activity: 'Câu lạc bộ, thể thao rèn luyện, ăn tối cùng bạn bè',
    note: 'Cân bằng cuộc sống là điều kiện tiên quyết để duy trì phong độ đường dài suốt 4 năm. Chạy bộ hoặc tập gym giải tỏa cortisol tích tụ.',
    category: 'social',
    color: 'border-l-rose-500 bg-rose-500/10'
  },
  {
    timeRange: '20:00 – 21:30',
    activity: 'Ôn ngắt quãng 30 phút (Spaced Repetition) + Chuẩn bị mai',
    note: 'Quẹt 20 thẻ Anki, xem lại ghi chú Cornell hôm qua. Xếp sẵn sách vở, tài liệu vào balo cho ngày mai để sáng không vội vã.',
    category: 'review',
    color: 'border-l-sky-500 bg-sky-500/10'
  },
  {
    timeRange: '22:00 – 23:00',
    activity: 'Thư giãn, đọc sách giải trí, ngắt kết nối thiết bị',
    note: 'Tắt màn hình xanh điện thoại trước khi ngủ 45 phút để tuyến tùng tiết melatonin tự nhiên.',
    category: 'rest',
    color: 'border-l-slate-400 bg-slate-500/10'
  },
  {
    timeRange: '23:00',
    activity: 'Ngủ đủ giấc (7–8 tiếng trọn vẹn)',
    note: 'Giấc ngủ REM củng cố thông tin từ hồi hải mã vào vỏ não dài hạn. Thức đêm học bài là cách nhanh nhất để quên sạch kiến thức.',
    category: 'rest',
    color: 'border-l-indigo-400 bg-indigo-900/20'
  }
];

export const ANTI_PROCRASTINATION_RULES = [
  {
    name: 'Quy tắc 2 Phút (Two-Minute Rule)',
    rule: 'Bất kỳ công việc nào có thể hoàn thành trong vòng dưới 2 phút (trả lời email giảng viên, nộp file bài tập, dọn bàn học), hãy làm ngay lập tức mà không ghi vào danh sách việc cần làm.',
    impact: 'Giải phóng tâm trí khỏi hàng chục việc vặt gây phân tâm vô hình.'
  },
  {
    name: 'Quy tắc 10 Phút "Khởi động vi mô"',
    rule: 'Khi đối mặt với bài luận 15 trang khó nhằn khiến bạn sợ hãi, hãy tự nhủ: "Mình chỉ ngồi viết đúng 10 phút, viết xong 1 đoạn mở bài dở ẹc cũng được rồi nghỉ".',
    impact: 'Sự kháng cự của não bộ thường nằm ở ngưỡng bắt đầu (Starting friction). Một khi đã ngồi vào 10 phút, bạn sẽ có đà để tiếp tục.'
  },
  {
    name: 'Quy tắc "Điện thoại ở phòng khác"',
    rule: 'Nghiên cứu của Đại học Texas chứng minh chỉ cần điện thoại nằm trong tầm mắt (kể cả khi đã úp màn hình và tắt chuông), não bộ vẫn mất 10-15% công suất làm việc để chống lại sự cám dỗ.',
    impact: 'Đặt điện thoại ở góc phòng hoặc trong balo khi học sâu để tăng gấp đôi hiệu suất.'
  },
  {
    name: 'Bộ 3 Công việc Quan trọng Nhất (MIT - Most Important Tasks)',
    rule: 'Mỗi tối trước khi đi ngủ, chọn ra đúng 3 việc bắt buộc phải làm xong vào ngày hôm sau. Hoàn thành xong 3 việc này thì ngày hôm đó được tính là một ngày thành công.',
    impact: 'Tránh rơi vào bẫy "bận rộn ảo" (làm rất nhiều việc phụ nhưng việc cốt lõi thì né tránh).'
  }
];

export const INITIAL_EISENHOWER_TASKS = [
  {
    id: 'e1',
    text: 'Ôn tập thi giữa kỳ môn Giải tích (Thứ 5 thi)',
    quadrant: 'urgent-important' as const,
    completed: false
  },
  {
    id: 'e2',
    text: 'Đọc trước 2 bài báo nghiên cứu chuẩn bị đề tài NCKH',
    quadrant: 'not-urgent-important' as const,
    completed: false
  },
  {
    id: 'e3',
    text: 'Học 30 từ vựng chuyên ngành tiếng Anh trên Anki',
    quadrant: 'not-urgent-important' as const,
    completed: true
  },
  {
    id: 'e4',
    text: 'Điểm danh hộ bạn cùng phòng môn thể dục (Cần từ chối)',
    quadrant: 'urgent-not-important' as const,
    completed: false
  },
  {
    id: 'e5',
    text: 'Lướt TikTok xem drama không mục đích 2 tiếng',
    quadrant: 'not-urgent-not-important' as const,
    completed: false
  }
];
