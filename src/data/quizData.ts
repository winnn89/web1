import { QuizQuestion, QuizResultProfile } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Khi cần tiếp thu một bài giảng khó và nhiều khái niệm mới, cách nào giúp bạn hiểu nhanh nhất?',
    options: [
      {
        text: 'Nhìn vào sơ đồ khối, hình minh họa, biểu đồ màu sắc hoặc slide của thầy cô.',
        style: 'visual',
        scoreDesc: 'Thiên hướng Thị giác (Visual)'
      },
      {
        text: 'Lắng nghe kỹ ngữ điệu của giảng viên giải thích và trao đổi thảo luận trực tiếp.',
        style: 'auditory',
        scoreDesc: 'Thiên hướng Thính giác (Auditory)'
      },
      {
        text: 'Tự tay viết code, giải bài tập mẫu hoặc làm thí nghiệm trực tiếp.',
        style: 'kinesthetic',
        scoreDesc: 'Thiên hướng Vận động & Thực hành (Kinesthetic)'
      },
      {
        text: 'Đọc kỹ giáo trình in sẵn, gạch chân các đoạn văn và viết lại dàn ý chi tiết.',
        style: 'readwrite',
        scoreDesc: 'Thiên hướng Đọc & Viết (Read/Write)'
      }
    ]
  },
  {
    id: 2,
    question: 'Khi bạn đi lạc hoặc cần tìm một phòng học mới trong khuôn viên trường đại học, bạn thường làm gì?',
    options: [
      {
        text: 'Mở bản đồ sơ đồ khuôn viên trường (Campus Map) trên điện thoại để quan sát toàn cảnh.',
        style: 'visual',
        scoreDesc: 'Quan sát bản đồ'
      },
      {
        text: 'Hỏi đường một bạn sinh viên khóa trên hoặc bác bảo vệ và nghe chỉ dẫn rẽ trái, rẽ phải.',
        style: 'auditory',
        scoreDesc: 'Lắng nghe hướng dẫn'
      },
      {
        text: 'Cứ đi dạo quanh các tòa nhà một vòng theo trực giác và cảm nhận phương hướng.',
        style: 'kinesthetic',
        scoreDesc: 'Khám phá trực tiếp'
      },
      {
        text: 'Đọc bảng chỉ dẫn danh sách phòng học dán ở chân cầu thang hoặc tin nhắn văn bản hướng dẫn.',
        style: 'readwrite',
        scoreDesc: 'Đọc văn bản hướng dẫn'
      }
    ]
  },
  {
    id: 3,
    question: 'Khi chuẩn bị cho một kỳ thi quan trọng, phương pháp ôn tập nào khiến bạn cảm thấy tự tin nhất?',
    options: [
      {
        text: 'Vẽ Mind Map tóm tắt toàn bộ chương và dùng bút nhớ nhiều màu để phân vùng kiến thức.',
        style: 'visual',
        scoreDesc: 'Sơ đồ tư duy thị giác'
      },
      {
        text: 'Học nhóm, giải thích bài cho bạn bè nghe hoặc tự ghi âm lời giảng của mình rồi nghe lại.',
        style: 'auditory',
        scoreDesc: 'Truyền đạt âm thanh'
      },
      {
        text: 'Làm thật nhiều bộ đề thi các năm trước, bấm giờ thực chiến và mô phỏng phòng thi.',
        style: 'kinesthetic',
        scoreDesc: 'Luyện đề thực chiến'
      },
      {
        text: 'Viết ra vở một bản tóm tắt chi tiết (Cheat sheet), lập bảng so sánh và tự trả lời câu hỏi.',
        style: 'readwrite',
        scoreDesc: 'Cô đọng văn bản'
      }
    ]
  },
  {
    id: 4,
    question: 'Khi mua một món đồ công nghệ mới hoặc bắt đầu dùng một phần mềm mới (ví dụ Notion/Obsidian), bạn sẽ:',
    options: [
      {
        text: 'Xem video hướng dẫn trên YouTube có quay màn hình các thao tác trực quan.',
        style: 'visual',
        scoreDesc: 'Xem video demo'
      },
      {
        text: 'Nhờ một người đã dùng thành thạo giải thích và hướng dẫn trực tiếp cho mình.',
        style: 'auditory',
        scoreDesc: 'Nghe hướng dẫn miệng'
      },
      {
        text: 'Mở phần mềm lên và bấm thử mọi nút chức năng để tự mò mẫm trải nghiệm.',
        style: 'kinesthetic',
        scoreDesc: 'Thực hành vọc vạch'
      },
      {
        text: 'Đọc trang tài liệu hướng dẫn sử dụng (Documentation) hoặc các bài viết review chi tiết.',
        style: 'readwrite',
        scoreDesc: 'Đọc tài liệu chữ'
      }
    ]
  },
  {
    id: '5' as any,
    question: 'Điều gì khiến bạn dễ bị phân tâm và mất tập trung nhất khi đang ngồi học?',
    options: [
      {
        text: 'Bàn học bừa bộn nhiều đồ vật lộn xộn hoặc có ai đó đi qua đi lại trước mặt.',
        style: 'visual',
        scoreDesc: 'Nhiễu thị giác'
      },
      {
        text: 'Tiếng ồn ào xung quanh, tiếng người khác nói chuyện thì thầm hoặc tiếng tivi.',
        style: 'auditory',
        scoreDesc: 'Nhiễu âm thanh'
      },
      {
        text: 'Phải ngồi yên một chỗ quá 30 phút mà không được đứng dậy vận động hoặc đổi tư thế.',
        style: 'kinesthetic',
        scoreDesc: 'Cuồng chân cuồng tay'
      },
      {
        text: 'Tài liệu học trình bày rối mắt, font chữ xấu, không có cấu trúc đầu mục rõ ràng.',
        style: 'readwrite',
        scoreDesc: 'Văn bản thiếu mạch lạc'
      }
    ]
  },
  {
    id: 6,
    question: 'Trong giờ thuyết trình của nhóm khác trên giảng đường, bạn thường nhớ được điều gì nhất?',
    options: [
      {
        text: 'Các hình ảnh minh họa độc đáo, video phóng sự và bố cục slide của nhóm đó.',
        style: 'visual',
        scoreDesc: 'Ấn tượng thị giác'
      },
      {
        text: 'Giọng nói truyền cảm, cách nhóm nhấn nhá ngữ điệu và các câu đùa dí dỏm.',
        style: 'auditory',
        scoreDesc: 'Ấn tượng âm thanh'
      },
      {
        text: 'Các hoạt động mini-game tương tác, câu hỏi đố vui vận động mà nhóm tổ chức.',
        style: 'kinesthetic',
        scoreDesc: 'Ấn tượng trải nghiệm'
      },
      {
        text: 'Những con số thống kê chính xác, trích dẫn tài liệu uy tín và bảng dữ liệu.',
        style: 'readwrite',
        scoreDesc: 'Ấn tượng dữ liệu'
      }
    ]
  },
  {
    id: 7,
    question: 'Khi nhớ lại một sự kiện kỷ niệm hoặc một chuyến đi chơi câu lạc bộ, điều hiện lên đầu tiên là:',
    options: [
      {
        text: 'Hình ảnh khung cảnh, cảnh sắc thiên nhiên và gương mặt nụ cười của mọi người.',
        style: 'visual',
        scoreDesc: 'Khung hình thị giác'
      },
      {
        text: 'Tiếng cười nói râm ran, tiếng đàn hát guitar và các cuộc trò chuyện đêm muộn.',
        style: 'auditory',
        scoreDesc: 'Âm thanh kỷ niệm'
      },
      {
        text: 'Cảm giác thời tiết, sự mệt mỏi thú vị khi leo núi hoặc cảm giác khi tham gia trò chơi.',
        style: 'kinesthetic',
        scoreDesc: 'Cảm giác thân thể'
      },
      {
        text: 'Những dòng trạng thái đã viết lại trên mạng xã hội hoặc những lời chúc trên bưu thiếp.',
        style: 'readwrite',
        scoreDesc: 'Nhật ký chữ viết'
      }
    ]
  },
  {
    id: 8,
    question: 'Khi một người bạn nhờ bạn giảng lại một bài tập khó, phản xạ đầu tiên của bạn là:',
    options: [
      {
        text: 'Lấy ngay một tờ giấy ra vẽ sơ đồ tóm tắt hoặc viết cấu trúc tổng quan cho bạn nhìn.',
        style: 'visual',
        scoreDesc: 'Minh họa trực quan'
      },
      {
        text: 'Nói từng bước một và yêu cầu bạn lắng nghe, vừa nói vừa đặt câu hỏi cho bạn đáp lại.',
        style: 'auditory',
        scoreDesc: 'Đối thoại thính giác'
      },
      {
        text: 'Bảo bạn cầm bút lên và tự làm thử từng bước, mình chỉ ngồi bên cạnh chỉ ra lỗi sai khi bạn vướng.',
        style: 'kinesthetic',
        scoreDesc: 'Cầm tay chỉ việc'
      },
      {
        text: 'Gửi cho bạn bản tóm tắt hoặc ghi chép chi tiết của mình để bạn tự đọc trước rồi hỏi.',
        style: 'readwrite',
        scoreDesc: 'Đọc tài liệu chuẩn'
      }
    ]
  },
  {
    id: 9,
    question: 'Môi trường học tập lý tưởng nhất của bạn là gì?',
    options: [
      {
        text: 'Bàn học gọn gàng, đủ ánh sáng tự nhiên, trang trí tranh ảnh truyền cảm hứng hoặc bảng trắng.',
        style: 'visual',
        scoreDesc: 'Góc học trực quan'
      },
      {
        text: 'Nơi có tiếng nhạc không lời du dương (Lo-fi/Binaural beats) hoặc tiếng ồn trắng (White noise) vừa phải.',
        style: 'auditory',
        scoreDesc: 'Không gian âm hưởng'
      },
      {
        text: 'Nơi có thể đứng học, vừa đi lại vừa nhẩm bài hoặc có bóng tập thể lực thay cho ghế cứng.',
        style: 'kinesthetic',
        scoreDesc: 'Không gian vận động'
      },
      {
        text: 'Thư viện tĩnh lặng tuyệt đối, xung quanh đầy ắp sách vở giáo trình và không ai nói chuyện.',
        style: 'readwrite',
        scoreDesc: 'Không gian sách vở'
      }
    ]
  },
  {
    id: 10,
    question: 'Khi học một ngôn ngữ mới (ví dụ từ vựng tiếng Anh), phương pháp nào hiệu quả nhất với bạn?',
    options: [
      {
        text: 'Gắn từ vựng với hình ảnh minh họa sống động hoặc xem phim có phụ đề tiếng Anh.',
        style: 'visual',
        scoreDesc: 'Liên kết hình ảnh'
      },
      {
        text: 'Nghe podcast, nghe bài hát và nhại lại cách phát âm (Shadowing technique).',
        style: 'auditory',
        scoreDesc: 'Âm thanh phản xạ'
      },
      {
        text: 'Dùng từ vựng đó để chat trực tiếp, diễn kịch phân vai hoặc gắn giấy nhớ vào đồ vật trong phòng.',
        style: 'kinesthetic',
        scoreDesc: 'Tương tác thực tế'
      },
      {
        text: 'Chép từ mới ra sổ tay từ vựng 5 lần kèm câu ví dụ và tra từ điển ngữ nghĩa chính xác.',
        style: 'readwrite',
        scoreDesc: 'Ghi chép từ điển'
      }
    ]
  }
];

export const PROFILES_MAP: Record<string, QuizResultProfile> = {
  visual: {
    style: 'visual',
    title: 'Người Học Thiên Hướng Thị Giác (Visual Learner)',
    badge: 'Quan Sát Sắc Bén · 35% Dân Số',
    traits: [
      'Bộ não của bạn ghi nhớ thông tin nhanh nhất qua hình ảnh, màu sắc, không gian và sơ đồ.',
      'Rất giỏi nhìn ra mối liên hệ tổng quan và bức tranh lớn (Big Picture).',
      'Thường tưởng tượng ra vị trí trang sách hoặc màu mực khi cố gắng nhớ lại câu trả lời trong phòng thi.'
    ],
    recommendedMethods: [
      'Sơ Đồ Tư Duy (Mind Mapping) với màu sắc nổi bật',
      'Flashcards có chèn hình ảnh minh họa trên Anki',
      'Kỹ Thuật Cornell với các biểu tượng (Icons) và mũi tên quan hệ'
    ],
    proTips: [
      'Dùng 3 màu bút nhớ khác nhau cho 3 mức độ quan trọng: Vàng (Khái niệm), Hồng (Cảnh báo sai lầm), Xanh lá (Ví dụ).',
      'Chuyển các bảng số liệu khô khan thành biểu đồ hoặc sơ đồ khối trước khi học thuộc.',
      'Sử dụng bảng trắng dán tường để phác thảo các chương bài học.'
    ],
    studyEnvironment: 'Bàn học ngăn nắp, tường dán sơ đồ và mindmap, tránh đồ đạc ngổn ngang gây rối mắt.'
  },
  auditory: {
    style: 'auditory',
    title: 'Người Học Thiên Hướng Thính Giác (Auditory Learner)',
    badge: 'Lắng Nghe & Truyền Cảm · 25% Dân Số',
    traits: [
      'Bạn tiếp thu kiến thức tốt nhất qua giọng nói, âm điệu, tranh luận và lời giải thích bằng miệng.',
      'Nhớ rất chuẩn những câu chuyện hoặc ví dụ mà giảng viên kể vui trong giờ học.',
      'Thích nói to thành tiếng khi học bài hoặc đọc nhẩm thành câu hoàn chỉnh trong đầu.'
    ],
    recommendedMethods: [
      'Kỹ Thuật Feynman (Giảng lại bài cho người khác nghe)',
      'Học Nhóm Phản Biện (Peer Teaching)',
      'Active Recall bằng cách tự ghi âm giọng nói rồi nghe lại'
    ],
    proTips: [
      'Xin phép giảng viên ghi âm lại các buổi học quan trọng để nghe lại khi đi xe buýt.',
      'Mỗi khi học xong một phần, hãy đóng sách lại và giảng to thành tiếng cho "bức tường" hoặc một người bạn.',
      'Bật nhạc Baroque hoặc âm thanh mưa nhẹ (Lo-Fi) với tần số 432Hz để kích hoạt sóng não Alpha.'
    ],
    studyEnvironment: 'Không gian yên tĩnh hoặc có nhạc nền ambient nhẹ, có thể thoải mái phát âm nói thành tiếng mà không sợ làm phiền người khác.'
  },
  kinesthetic: {
    style: 'kinesthetic',
    title: 'Người Học Thiên Hướng Vận Động & Trải Nghiệm (Kinesthetic Learner)',
    badge: 'Học Qua Thực Hành · 20% Dân Số',
    traits: [
      'Bạn là kiểu người "học bằng tay" – chỉ thực sự hiểu khi được trực tiếp làm thử, thí nghiệm hoặc giải bài tập.',
      'Cực kỳ ghét việc phải ngồi im nghe thuyết trình suông suốt 2-3 tiếng.',
      'Thích đi lại khi nhẩm bài, có xu hướng gõ bút hoặc rung đùi khi tập trung suy nghĩ.'
    ],
    recommendedMethods: [
      'Phương Pháp Pomodoro 25/5 (để thường xuyên được đứng dậy vận động)',
      'Học Xen Kẽ & Luyện Đề Thực Chiến (Interleaved Practice)',
      'Học theo dự án thực tế (Project-Based Learning)'
    ],
    proTips: [
      'Chia thời gian học thành các block ngắn 25 phút. Trong 5 phút nghỉ, hãy hít đất 10 cái hoặc đi uống nước.',
      'Vừa đi đi lại lại trong phòng vừa cầm tài liệu nhẩm bài học thuộc.',
      'Dùng các vật dụng tactile như stress ball hoặc viết bảng để tay chân luôn được bận rộn tích cực.'
    ],
    studyEnvironment: 'Bàn đứng (Standing desk) hoặc không gian rộng rãi có thể đứng lên ngồi xuống thoải mái.'
  },
  readwrite: {
    style: 'readwrite',
    title: 'Người Học Thiên Hướng Đọc & Viết (Read/Write Learner)',
    badge: 'Chuyên Gia Văn Bản & Logic · 20% Dân Số',
    traits: [
      'Bạn có năng khiếu ngôn ngữ tuyệt vời, nhớ sâu sắc khi nhìn thấy con chữ và tự tay viết câu hoàn chỉnh.',
      'Thích đọc sách giáo trình, tra cứu từ điển và sắp xếp tài liệu theo các gạch đầu dòng phân cấp logic.',
      'Cảm thấy yên tâm nhất khi có một cuốn sổ tay ghi chép đầy đủ chi tiết mọi thứ.'
    ],
    recommendedMethods: [
      'Kỹ Thuật Đọc Sâu SQ3R cho giáo trình',
      'Hệ Thống Ghi Chép Cornell chi tiết',
      'Active Recall bằng cách viết tóm tắt (Cheat Sheet tự chế)'
    ],
    proTips: [
      'Chuyển mọi thông tin nghe được trên giảng đường thành văn bản gạch đầu dòng có phân cấp (Bullet Journal).',
      'Tự viết lại các định nghĩa bằng văn phong chính xác của bản thân.',
      'Đọc đi đọc lại và biên tập lại các ghi chép cũ sau 24 giờ để đưa vào bộ nhớ dài hạn.'
    ],
    studyEnvironment: 'Thư viện truyền thống tĩnh lặng, nhiều sách tham khảo, bàn học có đầy đủ sổ tay và bút viết mượt mà.'
  }
};
