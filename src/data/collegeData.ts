import { UniversityTerm, DayTask } from '../types';

export const THPT_VS_DAIHOC = [
  {
    criterion: 'Cách học & Giảng dạy',
    thpt: 'Thầy cô kèm cặp sát sao, nhắc nhở bài vở, kiểm tra miệng và 15 phút thường xuyên.',
    daihoc: 'Tự học và tự nghiên cứu là chính (70-80%). Giảng viên chỉ hướng dẫn khung lý thuyết và định hướng tư duy.',
    tip: 'Chủ động đọc giáo trình trước khi đến lớp; giảng đường không phải nơi nghe giảng lần đầu.'
  },
  {
    criterion: 'Lịch học & Lớp học',
    thpt: 'Lịch học cố định cả năm, ngồi cùng một tập thể lớp từ sáng đến trưa 6 ngày/tuần.',
    daihoc: 'Tự đăng ký tín chỉ, lịch học rời rạc từng buổi, đổi giảng đường liên tục, mỗi môn ngồi với một nhóm bạn khác nhau.',
    tip: 'Dùng Google Calendar để đánh dấu phòng học và giờ học, tránh nhầm ca học hoặc quên phòng.'
  },
  {
    criterion: 'Tài liệu & Học liệu',
    thpt: 'Học bám sát theo Sách giáo khoa chuẩn của Bộ Giáo dục & Đào tạo.',
    daihoc: 'Học liệu mở: Nhiều giáo trình tham khảo, slide bài giảng, bài báo khoa học, tài liệu tiếng Anh học thuật.',
    tip: 'Tận dụng thẻ thư viện trường và cơ sở dữ liệu số (ScienceDirect, Google Scholar) từ năm 1.'
  },
  {
    criterion: 'Đánh giá & Đầu điểm',
    thpt: 'Nhiều bài kiểm tra định kỳ (miệng, 15p, 1 tiết, học kỳ).',
    daihoc: 'Cấu trúc điểm phân bổ: Chuyên cần (10%) + Giữa kỳ (20-30%) + Bài tập nhóm/Thuyết trình (20%) + Cuối kỳ (40-50%).',
    tip: 'Không coi thường điểm chuyên cần và bài tập nhóm; mất điểm quá trình sẽ rất khó cứu điểm cuối kỳ.'
  },
  {
    criterion: 'Thời gian rảnh rỗi',
    thpt: 'Ít thời gian rảnh, phần lớn bị quản lý bởi gia đình và lịch học thêm.',
    daihoc: 'Rất nhiều khoảng trống giữa các ca học – cực kỳ dễ bị lãng phí vào game và ngủ nếu không có kế hoạch.',
    tip: 'Tận dụng các khoảng trống 1-2 tiếng giữa giờ để lên thư viện làm xong bài tập ngày hôm đó.'
  },
  {
    criterion: 'Trách nhiệm cá nhân',
    thpt: 'Phụ huynh và giáo viên chủ nhiệm chịu trách nhiệm theo dõi và đôn đốc.',
    daihoc: 'Bản thân sinh viên chịu trách nhiệm 100% về việc học, tài chính cá nhân, sức khỏe và tương lai nghề nghiệp.',
    tip: 'Không ai nhắc bạn nộp bài hay đi thi. Bạn là CEO của chính cuộc đời sinh viên của mình.'
  }
];

export const UNIVERSITY_TERMS: UniversityTerm[] = [
  {
    term: 'Tín chỉ (Credit)',
    definition: 'Đơn vị đo lường khối lượng học tập. Thông thường 1 tín chỉ tương đương 15 tiết lý thuyết hoặc 30 tiết thực hành trên lớp, cộng với khoảng 30 tiết tự học ở nhà.',
    example: 'Một môn học 3 tín chỉ nghĩa là có 45 tiết học trên lớp và sinh viên cần dành ít nhất 60-90 giờ tự nghiên cứu.',
    tip: 'Không nên đăng ký quá 20-22 tín chỉ trong 1 kỳ nếu bạn chưa quen nhịp độ học đại học.',
    category: 'Môn học & Tín chỉ'
  },
  {
    term: 'Học phần tiên quyết (Prerequisite)',
    definition: 'Môn học bạn bắt buộc phải học và thi đậu trước khi được phép đăng ký một môn học nâng cao tiếp theo.',
    example: 'Phải qua môn "Giải tích 1" mới được đăng ký học môn "Giải tích 2" hay "Phương trình vi phân".',
    tip: 'Trượt một môn tiên quyết có thể khiến bạn bị chậm tiến độ ra trường từ 6 tháng đến 1 năm (dính dây chuyền nợ môn).',
    category: 'Môn học & Tín chỉ'
  },
  {
    term: 'GPA (Grade Point Average)',
    definition: 'Điểm trung bình chung học tập của một học kỳ cụ thể, thường quy đổi theo thang điểm 4.0.',
    example: 'GPA kỳ 1 của bạn là 3.65 / 4.0 (tương đương loại Giỏi).',
    tip: 'Học bổng khuyến khích học tập của các trường đại học thường xét dựa trên GPA từng kỳ cộng với điểm rèn luyện.',
    category: 'Điểm số & Học vụ'
  },
  {
    term: 'CPA (Cumulative Point Average)',
    definition: 'Điểm trung bình chung tích lũy của tất cả các môn đã học từ đầu khóa cho tới thời điểm hiện tại.',
    example: 'Sau 4 năm học, CPA tích lũy đạt 3.70 sẽ được cấp bằng tốt nghiệp loại Xuất sắc.',
    tip: 'Kéo điểm CPA ở năm 3 và năm 4 rất khó vì mẫu số số tín chỉ đã quá lớn. Hãy tạo nền tảng CPA cao ngay từ năm 1 và năm 2!',
    category: 'Điểm số & Học vụ'
  },
  {
    term: 'Cảnh báo học vụ (Academic Warning)',
    definition: 'Hình thức cảnh cáo khi sinh viên có điểm GPA quá thấp (dưới ngưỡng quy định, thường là dưới 1.0 hoặc 1.2 tùy trường) hoặc nợ quá nhiều tín chỉ trong học kỳ.',
    example: 'Bị cảnh báo học vụ mức 3 liên tiếp thường sẽ dẫn đến quyết định buộc thôi học (buộc thôi học vĩnh viễn).',
    tip: 'Nếu gặp khó khăn tâm lý hoặc gia đình, hãy làm đơn xin tạm hoãn học kỳ kịp thời thay vì bỏ thi để bị trượt.',
    category: 'Điểm số & Học vụ'
  },
  {
    term: 'Cố vấn học tập (CVHT)',
    definition: 'Giảng viên được phân công phụ trách hỗ trợ sinh viên trong chi đoàn hoặc khóa học về kế hoạch học tập, chọn ngành, xử lý sự cố học vụ.',
    example: 'Khi cần xin bảo lưu, đổi lớp môn học hoặc tư vấn định hướng môn tự chọn, bạn cần xin ý kiến CVHT.',
    tip: 'Hãy chủ động lưu số điện thoại, email và chào hỏi CVHT ngay từ tuần sinh hoạt đầu khóa.',
    category: 'Cơ cấu & Thủ tục'
  },
  {
    term: 'Phòng Quản lý Đào tạo (ĐT)',
    definition: 'Cơ quan trung tâm của trường quản lý chương trình đào tạo, đăng ký môn học, thời khóa biểu, lịch thi và cấp bằng tốt nghiệp.',
    example: 'Mọi thắc mắc về phúc khảo bài thi, cấp bảng điểm tạm thời, thủ tục hoãn thi đều nộp tại phòng Đào tạo.',
    tip: 'Theo dõi bảng thông báo của phòng Đào tạo ít nhất 2 lần/tuần để không bỏ lỡ hạn đăng ký tín chỉ hay hạn nộp học phí.',
    category: 'Cơ cấu & Thủ tục'
  },
  {
    term: 'Điểm Rèn Luyện (ĐRL)',
    definition: 'Điểm đánh giá hạnh kiểm và hoạt động phong trào của sinh viên theo thang điểm 100 mỗi kỳ.',
    example: 'Tham gia hội thảo, hiến máu, câu lạc bộ, nghiên cứu khoa học giúp cộng điểm rèn luyện lên mức Xuất sắc (90-100).',
    tip: 'Dù GPA đạt 4.0 nhưng điểm rèn luyện dưới 70 bạn vẫn sẽ không được nhận học bổng trường.',
    category: 'Điểm số & Học vụ'
  }
];

export const FIRST_30_DAYS_CHECKLIST: DayTask[] = [
  {
    id: 1,
    dayRange: 'Tuần 1 (Ngày 1–7)',
    title: 'Kích hoạt email trường & Nắm rõ hạ tầng số',
    desc: 'Đăng nhập cổng sinh viên (portal), kiểm tra wifi trường, đăng ký thẻ thư viện điện tử và tài khoản Microsoft 365 / Google Workspace do trường cấp.',
    category: 'Hành chính'
  },
  {
    id: 2,
    dayRange: 'Tuần 1 (Ngày 1–7)',
    title: 'Khảo sát địa bàn trường & phòng tự học',
    desc: 'Đi một vòng xác định vị trí: Thư viện, các giảng đường lớn, phòng y tế, văn phòng Đoàn hội, căn tin và bãi giữ xe.',
    category: 'Cá nhân'
  },
  {
    id: 3,
    dayRange: 'Tuần 2 (Ngày 8–14)',
    title: 'Kết bạn với ít nhất 3 người bạn cùng chuyên ngành',
    desc: 'Tìm nhóm bạn học cùng chí hướng. Những người bạn này sẽ cùng bạn làm bài tập nhóm, giữ chỗ giảng đường và nhắc nhở nhau ôn thi.',
    category: 'Xã hội'
  },
  {
    id: 4,
    dayRange: 'Tuần 2 (Ngày 8–14)',
    title: 'Tạo tài khoản lưu trữ & thiết lập hệ thống ghi chép',
    desc: 'Cài đặt Notion, Google Drive hoặc OneNote. Tạo các thư mục riêng cho từng môn học trong kỳ 1 kèm đề cương môn học (Syllabus).',
    category: 'Học tập'
  },
  {
    id: 5,
    dayRange: 'Tuần 3 (Ngày 15–21)',
    title: 'Tham quan buổi tuyển thành viên CLB (Club Fair)',
    desc: 'Tìm hiểu các câu lạc bộ học thuật, ngoại ngữ, kỹ năng hoặc tình nguyện. Chỉ nên chọn 1–2 CLB thực sự phù hợp với mục tiêu cá nhân.',
    category: 'Xã hội'
  },
  {
    id: 6,
    dayRange: 'Tuần 3 (Ngày 15–21)',
    title: 'Gặp gỡ cố vấn học tập & Hiểu rõ chuẩn đầu ra',
    desc: 'Nắm được các chứng chỉ điều kiện ra trường: Chuẩn tiếng Anh (IELTS/TOEIC), Tin học (MOS/IC3), Giáo dục thể chất và Quốc phòng.',
    category: 'Học tập'
  },
  {
    id: 7,
    dayRange: 'Tuần 4 (Ngày 22–30)',
    title: 'Lập sơ đồ tiến độ môn học & Deadline giữa kỳ',
    desc: 'Tập hợp tất cả ngày nộp bài tập lớn và tuần thi giữa kỳ vào Google Calendar. Đảm bảo bạn không bị bất ngờ khi bài tập ập đến.',
    category: 'Học tập'
  },
  {
    id: 8,
    dayRange: 'Tuần 4 (Ngày 22–30)',
    title: 'Thiết lập ngân sách chi tiêu và nhịp sinh hoạt',
    desc: 'Kiểm soát chi phí ăn uống, tiền trọ, giáo trình. Đảm bảo giấc ngủ ổn định 7 tiếng mỗi đêm trước khi bước vào giai đoạn tăng tốc.',
    category: 'Cá nhân'
  }
];
