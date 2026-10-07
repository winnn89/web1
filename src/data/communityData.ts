import { StudentStory, ForumQuestion } from '../types';

export const STUDENT_STORIES: StudentStory[] = [
  {
    id: 'story-1',
    name: 'Nguyễn Minh Quân',
    school: 'Đại học Bách Khoa Hà Nội (Kỹ thuật Điều khiển & Tự động hóa)',
    achievement: 'Từ học lực Trung bình (GPA 2.1) vươn lên Thủ khoa tốt nghiệp loại Xuất sắc (CPA 3.82/4.0)',
    avatar: '👨‍🎓',
    before: 'Năm nhất mình bị "sốc văn hóa" đại học toàn diện. Cứ ngỡ học như cấp 3, mình bỏ bê không đọc giáo trình trước, đến lớp chỉ ngồi xem điện thoại. Kết quả kỳ 1 nợ môn Giải tích 1 và Vật lý đại cương, CPA rơi xuống 2.1, bị trường gửi cảnh báo học vụ về cho gia đình. Mình từng nghĩ mình không đủ thông minh để học Bách Khoa.',
    turningPoint: 'Hè năm nhất, mình đọc được cuốn sách về khoa học nhận thức và biết đến Active Recall cùng Phương pháp Feynman. Mình nhận ra trước đây mình chỉ "đọc thụ động" giả vờ chăm chỉ. Mình bắt đầu lập nhóm 3 bạn học cùng, mỗi tuần chia nhau một chủ đề khó để giảng lại cho nhau nghe trên bảng trắng.',
    after: 'Từ kỳ 3 trở đi, điểm GPA mỗi kỳ của mình đều trên 3.7. Mình không còn phải thức đêm trước ngày thi mà ngược lại ngủ đủ 8 tiếng. Mình vừa hoàn thành khóa luận tốt nghiệp đạt 9.8 điểm và nhận học bổng toàn phần thạc sĩ tại Hàn Quốc.',
    threeAdvices: [
      'Đừng bao giờ học thụ động bằng cách đọc lại sách nhiều lần; hãy tự kiểm tra bản thân (Active Recall) ngay sau khi đọc.',
      'Tìm ít nhất 2 người bạn cùng chí hướng để tạo nhóm học phản biện (Feynman group); bạn sẽ tiến xa hơn rất nhiều so với đi một mình.',
      'CPA năm 1 và 2 là chiếc mỏ neo quyết định bằng tốt nghiệp. Đừng để nước đến chân mới nhảy!'
    ]
  },
  {
    id: 'story-2',
    name: 'Trần Phương Anh',
    school: 'Đại học Ngoại Thương TP.HCM (Kinh tế Đối ngoại)',
    achievement: 'GPA 3.91/4.0, Quán quân Cuộc thi Nghiên cứu Khoa học Sinh viên Cấp Bộ, IELTS 8.5',
    avatar: '👩‍🎓',
    before: 'Đầu năm 2, mình bị kiệt sức (burnout) trầm trọng. Vừa muốn giữ điểm cao, vừa làm chủ nhiệm CLB Truyền thông, vừa làm trợ lý nghiên cứu. Mình làm việc đến 2-3 giờ sáng mỗi đêm, da dẻ sạm đi, hay cáu gắt và điểm giữa kỳ tụt dốc.',
    turningPoint: 'Mình quyết định tái cấu trúc toàn bộ cuộc sống bằng phương pháp Time-Blocking và Ma trận Eisenhower. Mình học cách nói "KHÔNG" với những cuộc hẹn vô bổ và những nhiệm vụ không quan trọng. Mình dành trọn khung giờ vàng 8:00 - 11:00 sáng mỗi ngày cho Deep Work không điện thoại.',
    after: 'Năng suất tăng vọt trong khi thời gian làm việc giảm đi một nửa. Mình ngủ đúng 7.5 tiếng mỗi đêm, duy trì chạy bộ 3 buổi/tuần và tốt nghiệp với tấm bằng xuất sắc cùng bài báo quốc tế Scopus đầu tay.',
    threeAdvices: [
      'Bảo vệ khung giờ Deep Work buổi sáng như một cuộc hẹn với khách hàng triệu đô; tắt hết thông báo mạng xã hội.',
      'Sử dụng Notion hoặc Google Calendar để time-blocking cả ngày; nếu một việc không có trong lịch, nó sẽ không tồn tại.',
      'Sức khỏe thể chất là nền móng của trí tuệ: Thức đêm học bài là món nợ lãi suất kép độc hại nhất!'
    ]
  },
  {
    id: 'story-3',
    name: 'Lê Hoàng Nam',
    school: 'Đại học Y Dược TP.HCM (Bác sĩ Đa khoa)',
    achievement: 'Vượt qua 120 tín chỉ Y khoa nặng nề với điểm A 90% các môn Giải phẫu & Dược lý',
    avatar: '🩺',
    before: 'Khối lượng kiến thức ngành Y khủng khiếp đến mức có tuần phải nhớ 500 trang thuật ngữ và tên thuốc. Ban đầu mình học bằng cách chép kín các cuốn sổ dày, nhưng cứ sau 1 tuần là quên sạch tên các nhóm thuốc chống tăng huyết áp.',
    turningPoint: 'Mình chuyển đổi 100% sang sử dụng Anki với thuật toán Lặp lại ngắt quãng (Spaced Repetition). Mình chia nhỏ mỗi khái niệm thành một chiếc thẻ flashcard mini có kèm hình ảnh giải phẫu thực tế.',
    after: 'Mỗi ngày mình chỉ cần dành 30 phút quẹt thẻ trên xe buýt và trước giờ ngủ. Đến kỳ thi lâm sàng, các định nghĩa và cơ chế bệnh sinh bật ra trong đầu mình một cách hoàn toàn tự nhiên và chính xác.',
    threeAdvices: [
      'Với các môn nhiều dữ kiện và từ vựng, Anki là vũ khí tối thượng không có đối thủ.',
      'Nguyên tắc 1 sự thật/thẻ: Không bao giờ nhét một đoạn văn dài vào 1 flashcard; hãy chia thành các câu hỏi trắc nghiệm cực ngắn.',
      'Kiên trì ôn 20 phút mỗi ngày tốt hơn gấp nghìn lần dồn 10 tiếng trước kỳ thi.'
    ]
  }
];

export const FORUM_QUESTIONS: ForumQuestion[] = [
  {
    id: 'q1',
    author: 'Minh Trang',
    role: 'Tân sinh viên K65',
    timeAgo: '2 giờ trước',
    major: 'Kinh tế & Quản trị',
    year: 'Năm 1',
    title: 'Làm sao để vượt qua nỗi sợ thuyết trình trước 150 bạn trong giảng đường lớn?',
    content: 'Chào các anh chị, em là tân sinh viên và tuần tới lớp em có bài thuyết trình môn Pháp luật đại cương. Em rất sợ đứng trước đám đông, tim đập thình thịch và hay quên lời. Có mẹo nào giúp em bình tĩnh và tự tin hơn không ạ?',
    likes: 24,
    answers: [
      {
        author: 'Đức Huy (Thủ khoa K62)',
        role: 'Cựu sinh viên FTU',
        content: 'Bí quyết của anh gồm 3 điểm: 1. Đừng học thuộc lòng từng chữ (hãy nhớ theo 3 ý chính). 2. Trước khi lên bục, thực hiện kỹ thuật hít thở 4-7-8 trong 2 phút để hạ nhịp tim. 3. Đừng nhìn thẳng vào mắt từng người nếu run, hãy nhìn vào điểm giữa trán hoặc nhìn lướt qua đỉnh đầu cả hội trường. Và quan trọng nhất: Luyện nói to thành tiếng 3 lần trước gương tối nay em nhé!',
        timeAgo: '1 giờ trước',
        isTopAnswer: true
      }
    ]
  },
  {
    id: 'q2',
    author: 'Tuấn Khang',
    role: 'Sinh viên năm 2',
    timeAgo: '5 giờ trước',
    major: 'Công nghệ Thông tin',
    year: 'Năm 2',
    title: 'Gặp bạn cùng nhóm bài tập lớn "lặn mất tăm" thì nên xử lý thế nào cho văn minh?',
    content: 'Nhóm em 4 người làm đồ án Cơ sở dữ liệu nhưng có 1 bạn không bao giờ trả lời tin nhắn Zalo, đến deadline nộp phần việc của bạn ấy thì bảo bận việc gia đình. Chúng em sắp phải nộp bài rồi, các anh chị tư vấn giúp em với ạ!',
    likes: 42,
    answers: [
      {
        author: 'Lan Hương',
        role: 'Sinh viên năm 4 Bách Khoa',
        content: 'Kinh nghiệm xương máu của chị: 1. Chụp màn hình các tin nhắn giao việc và hạn chót trong nhóm làm bằng chứng khách quan. 2. Họp 3 người còn lại, chia nhau gánh nốt phần việc đó để bài thi không bị hỏng. 3. Khi nộp báo cáo kèm theo bảng đánh giá đóng góp phần trăm (% contribution) ghi rõ bạn đó 0% và gửi email riêng trình bày lịch sự với giảng viên phụ trách môn. Đừng cãi nhau trong nhóm, hãy dùng quy trình minh bạch.',
        timeAgo: '3 giờ trước',
        isTopAnswer: true
      }
    ]
  },
  {
    id: 'q3',
    author: 'Hải Đăng',
    role: 'Sinh viên năm 3',
    timeAgo: '1 ngày trước',
    major: 'Kỹ thuật Y sinh',
    year: 'Năm 3',
    title: 'Nên chọn ghi chép bằng iPad hay sổ tay giấy truyền thống?',
    content: 'Em đang phân vân không biết có nên đầu tư mua iPad để ghi chép bài giảng không hay dùng sổ tay giấy A4 theo kiểu Cornell. Các anh chị đi trước thấy ưu nhược điểm thực tế thế nào ạ?',
    likes: 18,
    answers: [
      {
        author: 'Bảo Ngọc',
        role: 'Sinh viên Y Dược',
        content: 'iPad cực kỳ tiện cho việc chèn hình ảnh giải phẫu, mang theo hàng nghìn trang slide tài liệu mà không nặng balo. Tuy nhiên, nếu bạn dễ bị phân tâm bởi thông báo Facebook/game thì sổ giấy + bút màu truyền thống vẫn là vua về độ tập trung và xúc giác ghi nhớ não bộ. Nếu mua iPad, nhớ tắt hết thông báo mạng xã hội trong giờ học nhé!',
        timeAgo: '18 giờ trước',
        isTopAnswer: true
      }
    ]
  }
];

export const DOWNLOADABLE_RESOURCES = [
  {
    id: 'template-cornell',
    title: 'Template Ghi Chép Cornell Chuẩn Đại Học (PDF & Word)',
    category: 'Ghi chép',
    desc: 'Mẫu kẻ sẵn 3 phần: Gợi ý (Cue), Ghi chú (Notes), Tóm tắt (Summary) với tỷ lệ vàng chuẩn mực, tối ưu in A4.',
    fileType: 'PDF / DOCX',
    fileSize: '1.2 MB',
    downloads: '14.2K+'
  },
  {
    id: 'weekly-planner',
    title: 'Thời Khóa Biểu & Time-Blocking Mẫu 7 Ngày Đỉnh Cao',
    category: 'Thời gian',
    desc: 'Bản kế hoạch tuần chia block 30 phút từ 06:00 đến 23:00, tích hợp mục tiêu MIT (Top 3 việc quan trọng nhất).',
    fileType: 'PDF / Excel',
    fileSize: '850 KB',
    downloads: '18.9K+'
  },
  {
    id: 'exam-checklist',
    title: 'Checklist Tác Chiến Phòng Thi & Cheat Sheet Maker',
    category: 'Thi cử',
    desc: 'Bộ quy trình kiểm tra vật dụng, chiến thuật làm bài 6 giai đoạn và khung tóm tắt 1 trang cô đọng kiến thức.',
    fileType: 'PDF In Ấn',
    fileSize: '2.1 MB',
    downloads: '9.8K+'
  },
  {
    id: 'infographic-methods',
    title: 'Infographic 8 Phương Pháp Học Tập Đỉnh Cao (Dán Bàn Học)',
    category: 'Infographic',
    desc: 'Bản thiết kế poster độ phân giải cao tóm tắt Pomodoro, Feynman, Active Recall, SQ3R để dán góc bàn học truyền cảm hứng.',
    fileType: 'PNG / PDF High-Res',
    fileSize: '4.5 MB',
    downloads: '22.4K+'
  }
];
