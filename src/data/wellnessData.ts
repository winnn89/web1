export interface WellnessPillar {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  color: string;
  actionItems: string[];
  warningSign: string;
  scientificFact: string;
}

export const WELLNESS_PILLARS: WellnessPillar[] = [
  {
    id: 'sleep',
    title: 'Giấc Ngủ & Tối Ưu Não Bộ',
    subtitle: 'Nền tảng của trí nhớ dài hạn và khả năng giải quyết vấn đề',
    badge: 'Phục hồi thần kinh',
    color: 'from-indigo-600 to-blue-500',
    actionItems: [
      'Duy trì khung giờ ngủ cố định (ngủ lúc 23:00 - dậy lúc 06:30), kể cả vào cuối tuần để giữ nhịp sinh học ổn định.',
      'Ngừng uống cà phê, trà đậm và nước tăng lực sau 14:00 chiều vì nửa đời sống (half-life) của caffeine kéo dài tới 6-8 tiếng.',
      'Bật chế độ lọc ánh sáng vàng (Night Shift/f.lux) và ngừng nhìn vào màn hình điện thoại 30 phút trước khi lên giường.'
    ],
    warningSign: 'Dấu hiệu thiếu ngủ: Cần uống từ 2-3 ly cà phê mỗi ngày mới tỉnh táo, hay quên chìa khóa/ví, dễ cáu gắt và buồn ngủ khi ngồi giảng đường.',
    scientificFact: 'Trong giấc ngủ sâu, hệ thống glymphatic trong não sẽ hoạt động mạnh gấp 10 lần để dọn dẹp các độc tố beta-amyloid tích tụ trong ngày.'
  },
  {
    id: 'nutrition-movement',
    title: 'Vận Động & Năng Lượng Thể Chất',
    subtitle: 'Nhiên liệu sạch nuôi dưỡng sự tập trung bền bỉ suốt 8 tiếng',
    badge: 'Thể lực dồi dào',
    color: 'from-emerald-600 to-teal-500',
    actionItems: [
      'Vận động nhẹ 20–30 phút mỗi ngày: Đi bộ nhanh, nhảy dây hoặc tập cardio nhẹ để kích thích tiết BDNF (chất dinh dưỡng thần kinh não).',
      'Luôn ăn sáng có chứa protein và chất xơ (trứng, yến mạch, bánh mì nguyên cám) thay vì chỉ uống nước ngọt có ga.',
      'Uống đủ 1.5 - 2 lít nước mỗi ngày; để sẵn bình nước ngay trên bàn học để không bị mất nước gây đau đầu ngắt quãng.'
    ],
    warningSign: 'Dấu hiệu uể oải: Tụt năng lượng đột ngột lúc 14:00 chiều sau bữa trưa nhiều tinh bột trắng.',
    scientificFact: 'Chỉ 20 phút đi bộ vừa phải đã làm tăng lưu lượng máu lên não thêm 15%, giúp cải thiện tốc độ xử lý bài toán logic ngay tức thì.'
  },
  {
    id: 'burnout-stress',
    title: 'Nhận Diện Stress & Chống Burnout',
    subtitle: 'Bảo vệ bản thân khỏi sự kiệt quệ tâm lý trước mùa thi cử',
    badge: 'Sức khỏe tinh thần',
    color: 'from-amber-600 to-rose-500',
    actionItems: [
      'Thực hành kỹ thuật hít thở 4-7-8 khi cảm thấy hồi hộp: Hít vào bằng mũi 4 giây, giữ hơi thở 7 giây, thở ra chậm qua miệng 8 giây.',
      'Viết xả suy nghĩ (Brain Dump Journaling): Dành 5 phút viết hết tất cả những mối lo lắng ra giấy rồi đóng sổ lại.',
      'Nghỉ ngơi có chủ đích (Active Rest): Đi dạo công viên, nói chuyện với bạn bè thay vì "nghỉ ngơi thụ động" bằng việc lướt điện thoại 3 tiếng.'
    ],
    warningSign: 'Dấu hiệu Burnout: Cảm thấy chán ghét mọi môn học, mất hết động lực phấn đấu, xa lánh bạn bè và thấy bản thân bất lực.',
    scientificFact: 'Cortisol cao kéo dài sẽ làm teo nhỏ các gai khớp thần kinh ở vùng hồi hải mã, trực tiếp hủy hoại khả năng ghi nhớ kiến thức mới.'
  },
  {
    id: 'support-network',
    title: 'Mạng Lưới Tìm Kiếm Sự Giúp Đỡ',
    subtitle: 'Không bao giờ bạn phải chịu đựng sự cô độc một mình ở đại học',
    badge: 'Kết nối sẻ chia',
    color: 'from-purple-600 to-indigo-700',
    actionItems: [
      'Gặp gỡ Trung tâm Tham vấn Tâm lý & Hỗ trợ Sinh viên tại trường bạn đang theo học (dịch vụ hoàn toàn miễn phí và bảo mật).',
      'Chủ động tâm sự với Cố vấn học tập nếu cảm thấy khối lượng bài vở và áp lực thi cử vượt quá ngưỡng chịu đựng.',
      'Duy trì kết nối với gia đình và ít nhất 1 người bạn thân có thể lắng nghe mà không phán xét.'
    ],
    warningSign: 'Cảnh báo đỏ: Suy nghĩ tiêu cực kéo dài trên 2 tuần liên tiếp, bỏ ăn, bỏ học và mất ngủ triền miên.',
    scientificFact: 'Nghiên cứu của Harvard kéo dài 85 năm chỉ ra rằng: Mối quan hệ gắn kết chất lượng là yếu tố số 1 bảo vệ sức khỏe và tuổi thọ con người.'
  }
];

export const CRISIS_RESOURCES = [
  {
    name: 'Phòng Tư vấn Tâm lý Học đường & Đoàn Thanh niên',
    desc: 'Có mặt tại hầu hết các trường Đại học lớn (ĐHQG, Bách Khoa, Kinh tế, Ngoại thương...). Hỗ trợ giải tỏa áp lực thi cử và định hướng.',
    contact: 'Văn phòng Đoàn trường hoặc Phòng Công tác Sinh viên'
  },
  {
    name: 'Đường dây nóng hỗ trợ tâm lý Ngày & Đêm',
    desc: 'Đường dây tư vấn khủng hoảng tâm lý miễn phí toàn quốc (Viện Sức khỏe Tâm thần / Tổng đài Quốc gia).',
    contact: 'Hotline 111 (Tổng đài Quốc gia) hoặc 1900 6444'
  }
];
