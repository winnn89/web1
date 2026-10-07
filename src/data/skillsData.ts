export interface SkillGuide {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  summary: string;
  coreTips: {
    title: string;
    description: string;
  }[];
  actionableFramework: string;
  goldenQuote: string;
}

export const ESSENTIAL_SKILLS: SkillGuide[] = [
  {
    id: 'reading',
    title: 'Đọc Giáo Trình & Tài Liệu Học Thuật',
    subtitle: 'Kỹ năng hấp thu tài liệu dày cộm không bao giờ rơi vào cảnh đọc chữ nọ xọ chữ kia',
    icon: 'BookOpen',
    color: 'from-blue-600 to-indigo-600',
    summary: 'Ở đại học, đọc không phải là đọc thưởng thức từng chữ một. Đọc học thuật là hoạt động "săn tìm thông tin có chủ đích" với các kỹ thuật đọc lướt và ghi chú tích cực.',
    coreTips: [
      {
        title: 'Quy tắc 2 màu bút dạ quang (Highlighting Rule)',
        description: 'Chỉ dùng màu vàng cho Từ khóa/Khái niệm và màu xanh lá cho Luận điểm/Kết quả. Nếu hơn 20% trang sách bị tô màu, bạn đang highlight sai cách.'
      },
      {
        title: 'Đọc ngược cấu trúc (Reverse Reading)',
        description: 'Luôn đọc Phần Tóm tắt (Abstract) và Kết luận (Conclusion) trước. Nắm được thông điệp cốt lõi rồi mới quay lại đọc phần thân bài.'
      },
      {
        title: 'Diễn giải lại bằng lời của mình (Paraphrasing)',
        description: 'Sau mỗi mục quan trọng, viết 1 câu tóm tắt ở lề sách bằng chính giọng điệu thường ngày của bạn.'
      }
    ],
    actionableFramework: 'Chiến thuật 3 bước: Skim (Lướt cấu trúc 2 phút) → Scan (Quét tìm số liệu & từ khóa 5 phút) → Deep Read (Đọc sâu các luận chứng phản biện).',
    goldenQuote: 'Người đọc giỏi không phải là người đọc hết mọi con chữ, mà là người biết chữ nào có thể bỏ qua.'
  },
  {
    id: 'notetaking',
    title: 'Ghi Chép Hiệu Quả & Xây Bộ Não Thứ Hai',
    subtitle: 'Chuyển hóa bài giảng của giáo sư thành hệ thống ghi chú có thể tra cứu suốt đời',
    icon: 'PenTool',
    color: 'from-amber-600 to-orange-600',
    summary: 'Đừng ghi chép như một cái máy sao chép. Mục đích của ghi chép đại học là tạo ra tài liệu ôn thi tự thân và liên kết kiến thức vào hệ thống cá nhân.',
    coreTips: [
      {
        title: 'Không chép nguyên văn lời giảng',
        description: 'Tốc độ nói của giảng viên ~150 từ/phút, tốc độ viết tay chỉ ~30 từ/phút. Chỉ ghi: Mối quan hệ nhân quả (A -> B), công thức, ví dụ phản chứng và lời khuyên thi cử.'
      },
      {
        title: 'Quy tắc 24 Giờ Vàng (Golden 24h Review)',
        description: 'Bổ sung các câu hỏi gợi nhớ và tóm tắt cuối bài trong vòng 24 giờ sau buổi học. Sau 24 giờ, 60% ký ức ngắn hạn sẽ bắt đầu bay biến.'
      },
      {
        title: 'Chọn định dạng theo tính chất môn học',
        description: 'Dùng Cornell cho môn lý luận; dùng Dàn ý phân cấp (Outline) cho lịch sử/văn bản; dùng Sơ đồ cây cho cấu trúc hệ thống.'
      }
    ],
    actionableFramework: 'Bộ công cụ số đề xuất: Obsidian (liên kết mạng lưới backlinks) hoặc Notion (tổ chức cơ sở dữ liệu học phần).',
    goldenQuote: 'Ghi chép không phải để lưu trữ lại quá khứ, mà để phục vụ cho sự sáng tạo trong tương lai.'
  },
  {
    id: 'teamwork',
    title: 'Làm Việc Nhóm & Xử Lý "Thành Viên Ăn Theo"',
    subtitle: 'Biến nhóm bài tập từ ác mộng chia rẽ thành cỗ máy đạt điểm A+',
    icon: 'Users',
    color: 'from-emerald-600 to-teal-600',
    summary: 'Bài tập nhóm chiếm tới 20-30% tổng điểm mỗi môn. Sự thất bại của các nhóm 90% đến từ việc phân chia trách nhiệm mơ hồ và thiếu deadline kiểm soát.',
    coreTips: [
      {
        title: 'Ký thỏa thuận làm việc nhóm ngay từ ngày đầu (Team Charter)',
        description: 'Quy định rõ: Kênh giao tiếp chính thức, hạn nộp bài nội bộ (sớm hơn deadline trường 48-72h), và hình thức phạt khi chậm trễ.'
      },
      {
        title: 'Phân vai rõ ràng theo ma trận RACI',
        description: 'Ai là người làm chính (Responsible), Ai là người duyệt tổng hợp (Accountable), Ai đóng góp ý kiến (Consulted).'
      },
      {
        title: 'Chiến thuật đối phó "Free-rider" văn minh nhưng dứt khoát',
        description: 'Ghi nhận tiến độ trên file chung Google Docs (có lịch sử chỉnh sửa). Nếu thành viên không làm sau 2 lần cảnh báo, báo cáo giảng viên kèm minh chứng khách quan.'
      }
    ],
    actionableFramework: 'Bộ công cụ: Trello / Notion Board để kéo thả trạng thái task (To do -> Doing -> Review -> Done).',
    goldenQuote: 'Nếu muốn đi nhanh hãy đi một mình, nếu muốn đạt điểm A+ bài tập lớn hãy có quy trình làm việc nhóm chuyên nghiệp.'
  },
  {
    id: 'presentation',
    title: 'Kỹ Năng Thuyết Trình Đỉnh Cao Trước Giảng Đường',
    subtitle: 'Nói năng cuốn hút, làm chủ ánh mắt và slide đẹp không tì vết',
    icon: 'Mic',
    color: 'from-purple-600 to-pink-600',
    summary: 'Một bài thuyết trình đại học thành công không phụ thuộc vào việc bạn nói nhiều bao nhiêu, mà là người nghe đọng lại được điều gì sau khi bạn rời bục.',
    coreTips: [
      {
        title: 'Cấu trúc kinh điển: Mở - 3 Điểm Cốt Lõi - Kết (Rule of 3)',
        description: 'Mở đầu bằng 1 câu hỏi kích thích hoặc 1 con số gây sốc. Thân bài chỉ gồm 3 luận điểm lớn. Kết thúc bằng 1 thông điệp kêu gọi hành động.'
      },
      {
        title: 'Slide tối giản: 1 Slide = 1 Ý Niệm (One idea per slide)',
        description: 'Tuyệt đối không paste nguyên đoạn văn lên slide. Giảng viên có mắt để đọc; họ nhìn bạn để nghe phân tích, không cần bạn đọc lại chữ trên màn chiếu.'
      },
      {
        title: 'Luyện tập trước gương hoặc quay video 2 lần',
        description: 'Canh thời gian bấm giờ chính xác. Đa số sinh viên bị trừ điểm vì nói quá giờ quy định.'
      }
    ],
    actionableFramework: 'Quy tắc 10/20/30 của Guy Kawasaki: Không quá 10 slide, không nói quá 20 phút, và cỡ chữ không nhỏ hơn 30pt.',
    goldenQuote: 'Sự tự tin khi thuyết trình không phải là năng khiếu bẩm sinh, nó là hệ quả của việc chuẩn bị kỹ lưỡng gấp 10 lần người khác.'
  },
  {
    id: 'research',
    title: 'Nghiên Cứu Khoa Học & Trích Dẫn Chuẩn Mực',
    subtitle: 'Khai thác kho tàng bài báo quốc tế và nói không với lỗi đạo văn',
    icon: 'Search',
    color: 'from-cyan-600 to-blue-700',
    summary: 'Sinh viên giỏi khác biệt ở khả năng tìm kiếm thông tin học thuật gốc từ các tạp chí uy tín thay vì chỉ tìm qua Google chung chung.',
    coreTips: [
      {
        title: 'Sử dụng Zotero để tự động hóa trích dẫn',
        description: 'Cài đặt plugin Zotero trên trình duyệt. Chỉ 1 click là bạn có thể lưu tài liệu và tự động sinh danh mục tài liệu tham khảo chuẩn APA 7th hoặc IEEE.'
      },
      {
        title: 'Khai thác Google Scholar & Thư viện số',
        description: 'Dùng cú pháp tìm kiếm học thuật: filetype:pdf, "từ khóa chính xác", site:.edu hoặc tìm kiếm bài báo trích dẫn theo dõi dấu vết phát triển của lý thuyết.'
      },
      {
        title: 'Hiểu đúng về Đạo văn (Plagiarism)',
        description: 'Lấy ý tưởng của người khác nhưng không ghi nguồn rõ ràng, hoặc sao chép nguyên văn mà không đặt trong ngoặc kép đều là vi phạm đạo đức học thuật.'
      }
    ],
    actionableFramework: 'Quy tắc tam giác trích dẫn: Nêu rõ Tác giả - Năm xuất bản - Luận điểm khi viết báo cáo hoặc tiểu luận.',
    goldenQuote: 'Đứng trên vai những người khổng lồ bắt đầu từ việc tôn trọng công sức trích dẫn của họ.'
  },
  {
    id: 'english',
    title: 'Tiếng Anh Học Thuật & Chuyên Ngành (Academic English)',
    subtitle: 'Vượt qua rào cản tài liệu ngoại văn và nâng tầm cơ hội việc làm',
    icon: 'Globe',
    color: 'from-amber-500 to-emerald-600',
    summary: 'Khoảng 90% tri thức nhân loại mới nhất được xuất bản bằng tiếng Anh. Giỏi tiếng Anh chuyên ngành mở ra cánh cửa học bổng và mức lương khởi điểm gấp 3 lần.',
    coreTips: [
      {
        title: 'Học từ vựng trong ngữ cảnh chuyên ngành (Collocations)',
        description: 'Đừng học từ đơn lẻ. Học cả cụm từ đi kèm, ví dụ: "conduct an experiment", "formulate a hypothesis", "mitigate risks".'
      },
      {
        title: 'Đọc tối thiểu 1 bài báo tiếng Anh mỗi tuần',
        description: 'Bắt đầu từ các trang tin học thuật dễ hiểu như Harvard Business Review, MIT Technology Review hoặc IEEE Spectrum.'
      },
      {
        title: 'Cài extension tra từ nhanh (GlotDojo / eJOY)',
        description: 'Tra nghĩa thuật ngữ ngay trên bài đọc và lưu trực tiếp vào Anki để ôn lại theo thuật toán lặp lại ngắt quãng.'
      }
    ],
    actionableFramework: 'Thói quen 15 phút: 10 phút đọc tin chuyên ngành quốc tế + 5 phút lưu 3 collocations vào flashcard.',
    goldenQuote: 'Ngoại ngữ không chỉ là một môn học để qua môn, nó là chiếc chìa khóa vạn năng mở ra kho tàng tri thức toàn cầu.'
  }
];
