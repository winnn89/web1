import { ToolItem } from '../types';

export const TOOLS_DIRECTORY: ToolItem[] = [
  {
    id: 'notion',
    name: 'Notion',
    category: 'Ghi chú & Kiến thức',
    pricing: 'Freemium',
    description: 'Không gian làm việc tất cả trong một (All-in-one workspace), quản lý tài liệu, lịch học tập và cơ sở dữ liệu học phần.',
    pros: 'Giao diện cực đẹp, khả năng tùy biến cao, có gói Plus miễn phí cho sinh viên dùng email đuôi .edu.',
    cons: 'Tốc độ khởi động đôi khi hơi chậm khi nhiều dữ liệu, cần thời gian làm quen với hệ thống cơ sở dữ liệu (Database).',
    bestFor: 'Quản lý lịch học, đồ án nhóm, wiki kiến thức cá nhân.',
    link: 'https://www.notion.so'
  },
  {
    id: 'obsidian',
    name: 'Obsidian',
    category: 'Ghi chú & Kiến thức',
    pricing: 'Miễn phí',
    description: 'Ứng dụng xây dựng "Bộ não thứ hai" (Second Brain) dựa trên các file Markdown lưu offline trên máy tính.',
    pros: 'Bảo mật 100%, tốc độ cực nhanh, tính năng Graph View hiển thị mạng lưới kết nối giữa các ý niệm độc đáo.',
    cons: 'Yêu cầu người dùng quen với cú pháp Markdown cơ bản; đồng bộ qua điện thoại cần chút cấu hình.',
    bestFor: 'Sinh viên ngành xã hội, triết học, lập trình và nghiên cứu sinh.',
    link: 'https://obsidian.md'
  },
  {
    id: 'anki',
    name: 'Anki',
    category: 'Ôn tập & Flashcard',
    pricing: 'Miễn phí',
    description: 'Phần mềm flashcard mạnh mẽ nhất thế giới với thuật toán Lặp lại ngắt quãng (Spaced Repetition SM-2/FSRS).',
    pros: 'Hoàn toàn miễn phí trên PC/Android/Web, khả năng tùy biến phím tắt và thuật toán cực đỉnh.',
    cons: 'Giao diện ban đầu hơi cổ điển và thô ráp.',
    bestFor: 'Học từ vựng ngoại ngữ (IELTS, Nhật, Hàn), thuật ngữ Y Dược, điều luật.',
    link: 'https://apps.ankiweb.net'
  },
  {
    id: 'quizlet',
    name: 'Quizlet',
    category: 'Ôn tập & Flashcard',
    pricing: 'Freemium',
    description: 'Nền tảng thẻ ghi nhớ trực quan với chế độ trò chơi ghép thẻ (Match) và kiểm tra đa dạng.',
    pros: 'Giao diện thân thiện, dễ sử dụng ngay lập tức, kho thẻ do cộng đồng chia sẻ khổng lồ.',
    cons: 'Nhiều tính năng hay bị khóa sau gói trả phí Quizlet Plus.',
    bestFor: 'Tân sinh viên mới bắt đầu làm quen với phương pháp flashcard.',
    link: 'https://quizlet.com'
  },
  {
    id: 'forest',
    name: 'Forest',
    category: 'Tập trung',
    pricing: 'Freemium',
    description: 'Ứng dụng nuôi cây ảo để cai nghiện điện thoại. Khi bạn tập trung, cây sẽ lớn lên; nếu thoát app lướt mạng, cây sẽ chết khô.',
    pros: 'Đánh trúng tâm lý gamification tạo động lực, có thể thi đua trồng rừng cùng bạn bè.',
    cons: 'Bản iOS có tính phí một lần khoảng 99k VNĐ.',
    bestFor: 'Sinh viên hay bị tay ngứa ngáy bấm vào mạng xã hội khi đang học bài.',
    link: 'https://www.forestapp.cc'
  },
  {
    id: 'gcal',
    name: 'Google Calendar',
    category: 'Lập kế hoạch',
    pricing: 'Miễn phí',
    description: 'Ứng dụng lịch số phổ biến nhất thế giới, đồng bộ tức thời trên điện thoại, máy tính và đồng hồ thông minh.',
    pros: 'Hoàn toàn miễn phí, tích hợp tự động với Google Meet, hỗ trợ time-blocking theo dải màu sắc.',
    cons: 'Cần tự xây dựng thói quen mở lịch kiểm tra mỗi sáng.',
    bestFor: 'Sắp xếp thời khóa biểu giảng đường, lịch thi và các sự kiện câu lạc bộ.',
    link: 'https://calendar.google.com'
  },
  {
    id: 'zotero',
    name: 'Zotero',
    category: 'Nghiên cứu',
    pricing: 'Miễn phí',
    description: 'Phần mềm quản lý tài liệu tham khảo mã nguồn mở hàng đầu cho giới học thuật.',
    pros: 'Tự động trích xuất thông tin bài báo từ trang web với 1 click, tích hợp chèn nguồn tự động vào Word/Google Docs chuẩn APA, IEEE, Harvard.',
    cons: 'Dung lượng đám mây miễn phí giới hạn ở 300MB (đủ cho hàng nghìn bài báo văn bản).',
    bestFor: 'Viết tiểu luận, báo cáo thực tập, khóa luận tốt nghiệp và bài báo NCKH.',
    link: 'https://www.zotero.org'
  },
  {
    id: 'canva',
    name: 'Canva',
    category: 'Thiết kế',
    pricing: 'Freemium',
    description: 'Công cụ thiết kế đồ họa trực tuyến với hàng chục ngàn mẫu slide thuyết trình, infographic và poster hiện đại.',
    pros: 'Dễ dùng, thư viện hình ảnh và đồ họa minh họa phong phú, làm slide siêu nhanh.',
    cons: 'Dễ tạo ra các bài thuyết trình bị trùng lặp ý tưởng mẫu nếu không tùy biến khéo léo.',
    bestFor: 'Thiết kế slide bài tập nhóm, ấn phẩm truyền thông sự kiện trường.',
    link: 'https://www.canva.com'
  },
  {
    id: 'coursera',
    name: 'Coursera & edX',
    category: 'Học trực tuyến',
    pricing: 'Freemium',
    description: 'Nền tảng các khóa học trực tuyến mở (MOOC) hợp tác với các trường đại học hàng đầu thế giới (Stanford, Yale, Google, IBM).',
    pros: 'Giáo trình chuẩn quốc tế, có chính sách hỗ trợ tài chính (Financial Aid) giảm 90-100% học phí cấp chứng chỉ.',
    cons: 'Đòi hỏi khả năng tự giác cao và khả năng đọc hiểu tiếng Anh tốt.',
    bestFor: 'Học bổ sung kỹ năng chuyên sâu và làm đẹp CV xin việc.',
    link: 'https://www.coursera.org'
  },
  {
    id: 'gemini-ai',
    name: 'Trợ lý AI (Gemini / Claude / ChatGPT)',
    category: 'Trợ lý AI',
    pricing: 'Freemium',
    description: 'Gia sư cá nhân 24/7 giúp giải thích các khái niệm phức tạp, tạo bài tập tự luyện và sửa lỗi ngữ pháp/code.',
    pros: 'Tốc độ phản hồi tức thì, có thể yêu cầu giải thích theo nhiều cấp độ hiểu biết khác nhau.',
    cons: 'Đôi khi có hiện tượng ảo giác (hallucination) cung cấp số liệu chưa chính xác.',
    bestFor: 'Hỏi đáp logic, đóng vai người phản biện để ôn thi vấn đáp, gợi ý dàn bài.',
    link: 'https://gemini.google.com'
  }
];

export const AI_ETHICS_MANIFESTO = {
  title: 'Tuyên Ngôn Đạo Đức Học Thuật Khi Ứng Dụng AI',
  coreRule: 'AI là Gia Sư Khai Sáng (Tutor) – Tuyệt đối không phải Người Làm Bài Thuê (Ghostwriter)',
  guidelines: [
    {
      title: 'Dùng AI để HIỂU bản chất, không dùng để CHÉP đáp án',
      description: 'Hãy dùng câu lệnh (prompt): "Hãy giải thích cho tôi nguyên lý của thuật toán Dijkstra theo cách dễ hiểu nhất kèm ví dụ", thay vì yêu cầu "Hãy viết toàn bộ bài tập này nộp cho thầy".'
    },
    {
      title: 'Tôn trọng quy chế thi cử và liêm chính học thuật của nhà trường',
      description: 'Mỗi trường đại học và mỗi giảng viên đều có quy định riêng về việc sử dụng AI. Luôn minh bạch khai báo các công cụ AI bạn đã sử dụng để hỗ trợ nghiên cứu.'
    },
    {
      title: 'Kiểm chứng chéo thông tin (Fact-Checking)',
      description: 'Tuyệt đối không trích dẫn các tài liệu mà AI tự nghĩ ra mà không tìm thấy bản gốc trên Google Scholar hay thư viện trường. Trách nhiệm học thuật cuối cùng thuộc về bạn.'
    }
  ]
};
