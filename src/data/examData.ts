export interface ExamTimelineStage {
  phase: string;
  timeframe: string;
  badge: string;
  color: string;
  actions: string[];
  mistakeToAvoid: string;
  proTip: string;
}

export const EXAM_TIMELINE_STAGES: ExamTimelineStage[] = [
  {
    phase: 'Giai đoạn 1: Chuẩn bị & Quy hoạch',
    timeframe: 'Trước thi 4 tuần',
    badge: 'Xây dựng bản đồ',
    color: 'from-blue-500 to-indigo-600',
    actions: [
      'Thu thập toàn bộ đề cương môn học (Syllabus), slide bài giảng và tối thiểu 3 bộ đề thi các năm trước.',
      'Phân loại mức độ ưu tiên của các môn: Môn nhiều tín chỉ, môn khó, môn thi trước được ưu tiên hàng đầu.',
      'Chia nhỏ các chương lý thuyết thành các mục tiêu cụ thể theo từng ngày (mỗi ngày ôn 1 chương).'
    ],
    mistakeToAvoid: 'Nghĩ rằng còn nhiều thời gian nên chần chừ chưa bắt đầu ôn.',
    proTip: 'Hỏi các anh chị khóa trên về phong cách ra đề của giảng viên phụ trách (thích trắc nghiệm, bài tập tự luận hay lý thuyết mở).'
  },
  {
    phase: 'Giai đoạn 2: Luyện đề & Đào sâu',
    timeframe: 'Trước thi 2 tuần',
    badge: 'Thực chiến giả lập',
    color: 'from-indigo-600 to-purple-600',
    actions: [
      'Làm đề thi thử có bấm đồng hồ đúng với thời gian thi thật (ví dụ 60 hoặc 90 phút).',
      'Đánh dấu đỏ những câu làm sai, tra lại tài liệu và ghi chép vào "Sổ tay lỗi sai" (Mistake Notebook).',
      'Học nhóm 2–3 người để hỏi đáp chéo các câu hỏi khó và các trường hợp ngoại lệ.'
    ],
    mistakeToAvoid: 'Chỉ đọc lướt lời giải của đề cũ mà không tự tay đặt bút giải từ đầu đến cuối.',
    proTip: 'Não bạn chỉ nhớ được quy trình giải khi chính bạn tự tay viết nó ra nháp dưới áp lực thời gian.'
  },
  {
    phase: 'Giai đoạn 3: Tinh gọn & Cô đọng',
    timeframe: 'Trước thi 1 tuần',
    badge: 'Cheat Sheet 1 trang',
    color: 'from-purple-600 to-pink-600',
    actions: [
      'Tự tay làm một bản "Cheat Sheet" (Tóm tắt toàn bộ môn học chỉ trên 1–2 mặt giấy A4).',
      'Áp dụng phương pháp Active Recall: Nhìn vào tiêu đề công thức, tự viết lại chứng minh và cách dùng mà không mở sách.',
      'Chốt lại các dạng bài chắc chắn có trong đề thi và ôn thật nhuần nhuyễn để không bị mất điểm oan.'
    ],
    mistakeToAvoid: 'Học thêm kiến thức hoàn toàn mới trong giai đoạn này (gây nhiễu loạn và hoang mang).',
    proTip: 'Việc tự cô đọng kiến thức vào 1 tờ A4 bắt bạn phải tư duy hệ thống hóa ở mức độ cao nhất.'
  },
  {
    phase: 'Giai đoạn 4: Giữ sức & Sẵn sàng',
    timeframe: 'Đêm trước ngày thi',
    badge: 'Tâm lý & Thể chất',
    color: 'from-emerald-600 to-teal-600',
    actions: [
      'Xem lại nhẹ nhàng tờ Cheat Sheet 30 phút trước khi đi ngủ, tuyệt đối không giải thêm bài tập khó.',
      'Chuẩn bị đầy đủ đồ dùng vào túi: Thẻ sinh viên, CCCD, máy tính Casio đã kiểm tra pin, 2 bút cùng màu, thước kẻ, nước lọc.',
      'Đi ngủ trước 23:00 và ngủ đủ 7–8 tiếng để hồi hải mã kịp sắp xếp dữ liệu vào bộ nhớ.'
    ],
    mistakeToAvoid: 'Thức trắng đêm (All-nighter) uống cà phê đặc – nghiên cứu chứng minh nó làm giảm 40% khả năng giải quyết vấn đề phức tạp sáng hôm sau.',
    proTip: 'Đừng ôn bài trên giường; não sẽ liên kết chiếc giường với sự căng thẳng khiến bạn mất ngủ.'
  },
  {
    phase: 'Giai đoạn 5: Tác chiến trong phòng thi',
    timeframe: 'Trong phòng thi',
    badge: 'Chiến thuật làm bài',
    color: 'from-amber-500 to-orange-600',
    actions: [
      'Dành 2 phút đầu đọc quét toàn bộ đề thi: Đánh dấu các câu dễ nhất và làm chúng ngay lập tức để lấy điểm chắc và tạo đà tự tin.',
      'Phân bổ thời gian theo thang điểm: Ví dụ câu 2 điểm chỉ dành tối đa 15 phút, câu 4 điểm dành 30 phút.',
      'Luôn chừa 5–7 phút cuối giờ để rà soát: Kiểm tra số báo danh, kiểm tra xem có câu nào bị bỏ sót hay sai sót tính toán số học không.'
    ],
    mistakeToAvoid: 'Mắc kẹt ở một câu khó quá 10 phút làm cháy thời gian cho các câu dễ còn lại.',
    proTip: 'Nếu gặp câu bí, hãy viết ra nháp định nghĩa và các công thức liên quan; thường thì việc viết ra sẽ kích thích trí nhớ liên tưởng.'
  },
  {
    phase: 'Giai đoạn 6: Rút kinh nghiệm & Khép lại',
    timeframe: 'Sau khi thi xong',
    badge: 'Tối ưu hóa',
    color: 'from-slate-600 to-slate-800',
    actions: [
      'Rời phòng thi và không tham gia tranh luận đáp án quá đà gây tâm lý tiêu cực cho môn thi kế tiếp.',
      'Ghi nhanh lại 3 bài học: Mình bị mất điểm ở đâu? Sai do hổng kiến thức, do đọc ẩu đề hay do phân bổ thời gian kém?',
      'Nghỉ ngơi nửa ngày xả hơi trước khi bắt tay vào ôn tập môn học tiếp theo.'
    ],
    mistakeToAvoid: 'Cắn rứt và tự trách bản thân về một bài thi đã qua – điều quan trọng là kết quả tổng thể cả kỳ.',
    proTip: 'Thất bại trong một bài kiểm tra chỉ là phản hồi thông tin (feedback), không phải là bản án về trí tuệ của bạn.'
  }
];
