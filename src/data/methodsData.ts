import { MethodItem } from '../types';

export const METHODS_DATA: MethodItem[] = [
  {
    id: 'pomodoro',
    name: 'Phương Pháp Pomodoro',
    subtitle: 'Kỹ thuật chia nhịp cà chua chống kiệt sức và triệt tiêu trì hoãn',
    color: 'from-rose-500 to-amber-500',
    badge: 'Tập trung cao độ',
    problem: 'Ngồi vào bàn học 4 tiếng nhưng thực tế chỉ lướt điện thoại 3 tiếng, não mệt mỏi, công việc vẫn dậm chân tại chỗ.',
    sciencePrinciple: 'Bộ não con người chỉ duy trì sự tập trung tối ưu (sustained attention) trong khoảng 20-30 phút trước khi năng lượng chú ý suy giảm. Nhịp nghỉ ngắn 5 phút giúp tái tạo dopamine và hồi phục thùy trán (prefrontal cortex).',
    threeSteps: [
      {
        step: 1,
        title: 'Xác định một đầu việc duy nhất & Đặt 25 phút',
        description: 'Chỉ chọn 1 mục tiêu cụ thể (ví dụ: làm 10 bài tập xác suất), tắt thông báo điện thoại, bật timer 25 phút và cam kết không chuyển tab.'
      },
      {
        step: 2,
        title: 'Học sâu cho tới khi chuông reo & Nghỉ 5 phút',
        description: 'Tập trung 100%. Khi hết 25 phút, lập tức dừng lại, đứng dậy uống nước, vươn vai hoặc nhìn xa 20 mét. Tuyệt đối không lướt mạng xã hội lúc nghỉ.'
      },
      {
        step: 3,
        title: 'Lặp lại 4 chu kỳ rồi nghỉ dài 15–30 phút',
        description: 'Sau khi hoàn thành 4 quả Pomodoro (khoảng 2 tiếng học tập chất lượng cao), tự thưởng cho bản thân một khoảng nghỉ dài trước khi sang block tiếp theo.'
      }
    ],
    bestSubjects: ['Lập trình & Kỹ thuật', 'Luyện giải đề trắc nghiệm', 'Đọc tài liệu dài', 'Viết tiểu luận'],
    commonMistakes: [
      'Nghỉ giữa hiệp bằng cách xem TikTok/Reels (làm não bị quá tải dopamine thay vì phục hồi).',
      'Cố học tiếp khi chuông đã reo vì đang "vào đà" dẫn đến quá tải ở chu kỳ sau.',
      'Đặt mục tiêu quá mơ hồ như "học môn Triết" thay vì "đọc 15 trang chương 2".'
    ],
    fiveMinuteExercise: 'Chọn ngay 1 bài tập bạn đang trì hoãn từ hôm qua. Bật đồng hồ 5 phút trên trang web này, cam kết chỉ viết dàn ý hoặc giải 1 câu đầu tiên. Bạn sẽ thấy sức ỳ biến mất!',
    keyTakeaway: 'Kỷ luật không phải là ngồi lì 6 tiếng, mà là tập trung trọn vẹn trong từng block 25 phút.'
  },
  {
    id: 'feynman',
    name: 'Kỹ Thuật Feynman',
    subtitle: 'Thước đo hiểu bản chất: Giải thích như thể đang dạy một đứa trẻ 12 tuổi',
    color: 'from-amber-500 to-emerald-500',
    badge: 'Hiểu bản chất',
    problem: 'Đọc giáo trình thấy gật gù hiểu hết, nhưng khi bước vào phòng thi hoặc ai hỏi lại thì ấp úng, không diễn đạt được ra chữ.',
    sciencePrinciple: 'Hiệu ứng Dunning-Kruger và ảo tưởng về năng lực (Illusion of Competence). Khi bạn buộc phải diễn đạt kiến thức bằng ngôn ngữ đơn giản, não bộ kích hoạt quá trình tái mã hóa (re-encoding), phơi bày chính xác những "vùng mù" kiến thức.',
    threeSteps: [
      {
        step: 1,
        title: 'Chọn khái niệm & Giảng lại trên trang giấy trắng',
        description: 'Lấy 1 tờ giấy, viết tên khái niệm ở đầu trang. Tự viết lời giải thích như đang giảng cho một học sinh cấp 2 chưa từng nghe về môn này.'
      },
      {
        step: 2,
        title: 'Bắt quả tang chỗ bị "khựng" hoặc phải dùng biệt ngữ',
        description: 'Bất cứ khi nào bạn phải dùng từ chuyên ngành khó hiểu hoặc ngập ngừng, đó chính là lỗ hổng kiến thức thực sự của bạn.'
      },
      {
        step: 3,
        title: 'Mở lại giáo trình để lấp lỗ hổng & Đơn giản hóa bằng ẩn dụ',
        description: 'Đọc lại tài liệu chuyên sâu chỉ để trả lời đúng phần bạn vừa bí. Sau đó nghĩ ra 1 ví dụ đời thường (ẩn dụ) để minh họa cho khái niệm đó.'
      }
    ],
    bestSubjects: ['Kinh tế vĩ mô / vi mô', 'Cấu trúc dữ liệu & Thuật toán', 'Vật lý đại cương', 'Luật kinh tế', 'Sinh lý học'],
    commonMistakes: [
      'Học vẹt định nghĩa trong sách thay vì dùng từ ngữ của chính mình.',
      'Nghĩ thầm trong đầu thay vì viết ra giấy hoặc nói thành tiếng (nói thầm dễ tự đánh lừa mình).',
      'Bỏ qua bước tạo hình ảnh ẩn dụ so sánh với đời sống.'
    ],
    fiveMinuteExercise: 'Hãy thử giải thích khái niệm "Lãi kép" (hoặc "Đệ quy" trong lập trình) bằng 3 câu ngắn gọn cho một đứa trẻ 10 tuổi mà không dùng bất kỳ từ ngữ cao siêu nào.',
    keyTakeaway: 'Nếu bạn không thể giải thích điều gì đó một cách giản dị, chứng tỏ bạn chưa thực sự hiểu sâu sắc nó.'
  },
  {
    id: 'active-recall',
    name: 'Active Recall (Gợi Nhớ Chủ Động)',
    subtitle: 'Phương pháp học tập được khoa học chứng minh hiệu quả số 1',
    color: 'from-indigo-500 to-sky-500',
    badge: 'Khoa học nhận thức',
    problem: 'Tốn hàng chục giờ đọc đi đọc lại, dùng bút highlight tô màu khắp trang sách nhưng điểm số vẫn lẹt đẹt vì trí nhớ thụ động.',
    sciencePrinciple: 'Thực hành truy hồi (Retrieval Practice). Não bộ không ghi nhớ khi tiếp nhận thông tin thụ động (input), mà củng cố mạng lưới synapse thần kinh khi phải nỗ lực "kéo" thông tin từ bộ nhớ dài hạn ra (output). Sự gắng sức này tạo ra dấu ấn bền vững.',
    threeSteps: [
      {
        step: 1,
        title: 'Chuyển tiêu đề và đề mục thành câu hỏi',
        description: 'Khi đọc giáo trình, thay vì gạch chân dòng "Đặc điểm của mô hình thác nước", hãy chuyển nó thành câu hỏi: "Mô hình thác nước có 4 ưu điểm và 2 nhược điểm cốt lõi nào?".'
      },
      {
        step: 2,
        title: 'Gấp sách lại và tự trả lời bằng cách viết hoặc nói',
        description: 'Không nhìn tài liệu. Cố gắng nhớ và viết câu trả lời ra giấy nháp hoặc nói to thành tiếng. Dù chỉ nhớ được 30% cũng tuyệt đối không mở sách sớm.'
      },
      {
        step: 3,
        title: 'Mở sách kiểm tra và sửa sai ngay lập tức',
        description: 'Đối chiếu xem mình quên ý nào, tô đỏ phần bị thiếu để tập trung gợi nhớ lại vào lần kiểm tra tiếp theo.'
      }
    ],
    bestSubjects: ['Y Dược & Giải phẫu', 'Lịch sử Đảng & Pháp luật đại cương', 'Sinh học phân tử', 'Từ vựng ngoại ngữ'],
    commonMistakes: [
      'Đọc lại giáo trình nhiều lần rồi ngộ nhận rằng mình đã nhớ.',
      'Xem đáp án quá sớm khi vừa mới suy nghĩ được 10 giây.',
      'Sợ cảm giác bí bách khi không nhớ ra (chính cảm giác bí bách đó mới kích thích não tạo kết nối mới).'
    ],
    fiveMinuteExercise: 'Gấp tài liệu lại ngay bây giờ. Lấy một mẩu giấy và viết ra 5 điều quan trọng nhất bạn đã học được trong ngày hôm nay mà không nhìn vở.',
    keyTakeaway: 'Kiểm tra bản thân không phải là bước đánh giá cuối cùng, mà chính là phương pháp học tập mạnh mẽ nhất.'
  },
  {
    id: 'spaced-repetition',
    name: 'Spaced Repetition (Lặp Lại Ngắt Quãng)',
    subtitle: 'Vũ khí bẻ gãy đường cong lãng quên của Ebbinghaus',
    color: 'from-purple-500 to-indigo-600',
    badge: 'Trí nhớ dài hạn',
    problem: 'Học nhồi nhét trước ngày thi đạt điểm 8-9, nhưng sau đó 1 tuần thì toàn bộ kiến thức biến mất như chưa từng tồn tại.',
    sciencePrinciple: 'Đường cong lãng quên (Forgetting Curve) của Hermann Ebbinghaus chứng minh con người quên 70% kiến thức mới sau 24-48 giờ nếu không ôn lại. Ôn tập đúng vào thời điểm chuẩn bị quên giúp "đặt lại" đường cong và kéo dài chu kỳ nhớ theo cấp số nhân.',
    threeSteps: [
      {
        step: 1,
        title: 'Lập lịch ôn theo các khoảng giãn: 1 - 3 - 7 - 14 - 30 ngày',
        description: 'Sau khi học xong bài mới: Ôn lại sau 24h (lần 1) -> sau 3 ngày (lần 2) -> sau 1 tuần (lần 3) -> sau 2 tuần (lần 4) -> sau 1 tháng (lần 5).'
      },
      {
        step: 2,
        title: 'Sử dụng hệ thống Flashcard (Anki / Quizlet)',
        description: 'Các phần mềm này tích hợp thuật toán SM-2 hoặc FSRS, tự động đẩy thẻ khó lên ôn hàng ngày và dãn cách các thẻ bạn đã nhớ ra hàng tuần.'
      },
      {
        step: 3,
        title: 'Chỉ mất 15–20 phút mỗi ngày để duy trì hàng nghìn kiến thức',
        description: 'Biến việc quẹt thẻ flashcard thành thói quen mỗi sáng hoặc khi đi xe buýt. Không bao giờ phải đối mặt với cảnh "thức trắng đêm trước thi".'
      }
    ],
    bestSubjects: ['Từ vựng IELTS/TOEIC/Ngoại ngữ', 'Dược lý & Thuật ngữ y khoa', 'Công thức toán thống kê', 'Điều luật & Án lệ'],
    commonMistakes: [
      'Bỏ dở giữa chừng vì lười quẹt thẻ khi số lượng tích lũy tăng lên.',
      'Làm flashcard chứa quá nhiều thông tin trên 1 thẻ (nguyên tắc: 1 thẻ chỉ chứa 1 sự thật duy nhất).',
      'Chỉ ôn dồn trước kỳ thi thay vì chia đều mỗi ngày 15 phút.'
    ],
    fiveMinuteExercise: 'Cài đặt Anki hoặc Quizlet vào điện thoại. Tạo bộ thẻ 5 thuật ngữ chuyên ngành quan trọng nhất tuần này và thử quẹt vòng đầu tiên.',
    keyTakeaway: 'Học 15 phút mỗi ngày trong 1 tháng hiệu quả gấp 10 lần việc học 8 tiếng trong một đêm.'
  },
  {
    id: 'cornell',
    name: 'Ghi Chép Cornell',
    subtitle: 'Phương pháp ghi chép 3 phần tối ưu cho các bài giảng kéo dài 3 tiếng',
    color: 'from-amber-600 to-orange-500',
    badge: 'Kỹ năng ghi chú',
    problem: 'Chép kín cả cuốn vở nhưng khi mở ra ôn thi thì như ma trận chữ, không biết đâu là trọng tâm, nhìn vào chỉ muốn gấp lại.',
    sciencePrinciple: 'Được phát minh bởi Giáo sư Walter Pauk tại Đại học Cornell. Việc phân chia cấu trúc trang giấy buộc não bộ phải đồng thời ghi nhận, phân tích câu hỏi gợi mở và tổng hợp thông tin, chuyển đổi từ ghi chép thụ động sang tư duy phản biện.',
    threeSteps: [
      {
        step: 1,
        title: 'Chia trang giấy thành 3 vùng: Gợi ý, Ghi chú, Tóm tắt',
        description: 'Cột bên phải (chiếm 70% chiều ngang): Ghi nội dung chính trong giờ học. Cột bên trái (30%): Ghi từ khóa và câu hỏi gợi nhớ. Hàng dưới cùng (5-7 dòng): Tóm tắt cốt lõi.'
      },
      {
        step: 2,
        title: 'Trong giờ học: Chỉ viết ý chính vào Cột Ghi chú',
        description: 'Dùng ký hiệu viết tắt, gạch đầu dòng, vẽ mũi tên quan hệ nhân quả. Không chép từng lời của giảng viên.'
      },
      {
        step: 3,
        title: 'Sau giờ học (trong vòng 24h): Hoàn thiện Cột Gợi ý & Tóm tắt',
        description: 'Viết các câu hỏi kiểm tra sang cột trái. Viết 2-3 câu tóm tắt ở đáy trang: "Nếu phải giải thích trang này trong 1 phút, mình sẽ nói gì?".'
      }
    ],
    bestSubjects: ['Triết học Mác-Lênin', 'Lịch sử văn minh thế giới', 'Kinh tế học đại cương', 'Tâm lý học xã hội', 'Các môn lý luận'],
    commonMistakes: [
      'Để trống cột Gợi ý và phần Tóm tắt sau khi tan học (khiến cuốn vở trở về dạng ghi chép thông thường).',
      'Cố nắn nót chữ đẹp làm mất nhịp nghe giảng.',
      'Tóm tắt quá dài bằng cách copy lại nội dung phía trên.'
    ],
    fiveMinuteExercise: 'Lấy 1 tờ giấy A4, kẻ đường dọc 6cm từ mép trái và đường ngang 5cm từ mép dưới. Tóm tắt lại nội dung buổi học gần nhất theo đúng bố cục Cornell.',
    keyTakeaway: 'Ghi chép tốt không phải là viết lại tất cả những gì giảng viên nói, mà là ghi lại cách bạn hiểu vấn đề.'
  },
  {
    id: 'sq3r',
    name: 'Kỹ Thuật Đọc Sâu SQ3R',
    subtitle: 'Chiến thuật tiêu hóa giáo trình dày 500 trang mà không bị ngủ gật',
    color: 'from-teal-600 to-emerald-600',
    badge: 'Xử lý giáo trình',
    problem: 'Mở giáo trình ra đọc từ trang đầu tiên, đọc được 5 trang thì mắt díp lại, không đọng lại bất kỳ thông tin nào trong đầu.',
    sciencePrinciple: 'Phương pháp đọc có chủ đích do Francis P. Robinson phát triển. Khi bạn tiếp cận văn bản với các câu hỏi có sẵn, não bộ sẽ bật chế độ "tìm kiếm mục tiêu" (selective attention), biến việc đọc thành hành trình khám phá thay vì chịu trận.',
    threeSteps: [
      {
        step: 1,
        title: 'Survey (Lướt) & Question (Đặt câu hỏi)',
        description: 'Dành 3 phút lướt tiêu đề, đồ thị, phần in đậm và câu hỏi cuối chương. Lập tức tự hỏi: "Chương này giải quyết vấn đề gì? Mình cần tìm câu trả lời cho điều gì?".'
      },
      {
        step: 2,
        title: 'Read (Đọc có chọn lọc) & Recite (Thuật lại)',
        description: 'Đọc từng phần để tìm câu trả lời cho câu hỏi vừa đặt. Đọc xong 1 mục, dừng lại, quay đi và tự nói lại nội dung bằng từ ngữ của mình.'
      },
      {
        step: 3,
        title: 'Review (Ôn tập tổng thể)',
        description: 'Lướt lại toàn bộ sơ đồ và các câu hỏi để kiểm tra tính liên kết giữa các phần trong chương.'
      }
    ],
    bestSubjects: ['Đọc giáo trình chuyên ngành', 'Đọc bài báo nghiên cứu khoa học (Paper)', 'Sách tham khảo kinh tế - luật'],
    commonMistakes: [
      'Cố đọc từ đầu đến cuối như đọc truyện trinh thám.',
      'Vừa đọc vừa highlight ngay từ dòng đầu tiên mà chưa hiểu tổng quan.',
      'Bỏ qua bước đặt câu hỏi (Question).'
    ],
    fiveMinuteExercise: 'Mở 1 chương sách bạn cần đọc tuần này. Chỉ đọc tiêu đề chính và các đề mục con, sau đó viết ra 3 câu hỏi bạn muốn tìm câu trả lời trong chương đó.',
    keyTakeaway: 'Đọc thụ động là ru ngủ não bộ; đọc có câu hỏi dẫn đường là kích hoạt tư duy phản biện.'
  },
  {
    id: 'mindmap',
    name: 'Sơ Đồ Tư Duy (Mind Map)',
    subtitle: 'Hệ thống hóa bức tranh toàn cảnh và liên kết mạng lưới ý niệm',
    color: 'from-fuchsia-600 to-purple-600',
    badge: 'Tư duy thị giác',
    problem: 'Kiến thức rời rạc từng mảnh vụn, biết từng định nghĩa nhỏ nhưng không hiểu chúng liên quan gì đến nhau trong toàn bộ môn học.',
    sciencePrinciple: 'Lý thuyết mã hóa kép (Dual Coding Theory) của Allan Paivio. Bộ não xử lý thông tin ngôn ngữ và hình ảnh qua hai kênh song song. Kết hợp màu sắc, không gian đa chiều và từ khóa giúp tăng khả năng liên tưởng lên hơn 300%.',
    threeSteps: [
      {
        step: 1,
        title: 'Đặt chủ đề cốt lõi ở trung tâm trang giấy nằm ngang',
        description: 'Dùng trang giấy A4 hoặc phần mềm (Miro/XMind), vẽ chủ đề ở tâm với màu sắc nổi bật.'
      },
      {
        step: 2,
        title: 'Tỏa ra các nhánh chính (cấp 1) bằng các đường cong tự nhiên',
        description: 'Mỗi nhánh tương ứng 1 chương hoặc 1 chủ đề lớn. Mỗi nhánh nên dùng 1 màu riêng biệt.'
      },
      {
        step: 3,
        title: 'Phát triển các nhánh con với từ khóa và biểu tượng',
        description: 'Chỉ dùng từ khóa ngắn (không viết cả câu), thêm mũi tên chỉ mối liên hệ giữa các nhánh khác nhau.'
      }
    ],
    bestSubjects: ['Luật dân sự & Hình sự', 'Sinh học hệ thống', 'Kiến trúc máy tính', 'Kế toán tài chính', 'Ôn tập tổng kết môn'],
    commonMistakes: [
      'Nhét cả đoạn văn dài vào từng nhánh khiến sơ đồ bị rối rắm.',
      'Chỉ dùng một màu mực đơn điệu làm mất tác dụng kích thích thị giác.',
      'Vẽ quá cầu kỳ mất thời gian trang trí thay vì tập trung vào mối liên kết logic.'
    ],
    fiveMinuteExercise: 'Lấy 1 tờ giấy, vẽ ở giữa chữ "Kế hoạch tuần này". Tỏa ra 4 nhánh: Học tập, Rèn luyện, Bạn bè, Cá nhân với mỗi nhánh 2 từ khóa hành động.',
    keyTakeaway: 'Một sơ đồ tư duy tốt cho phép bạn nhìn thấy cả khu rừng lẫn từng thân cây cùng một lúc.'
  },
  {
    id: 'interleaving-peer',
    name: 'Học Xen Kẽ & Dạy Nhóm (Interleaving)',
    subtitle: 'Phá vỡ thói quen luyện bài cục bộ & Kỹ thuật "người này dạy người kia"',
    color: 'from-sky-600 to-indigo-700',
    badge: 'Chiến thuật đỉnh cao',
    problem: 'Khi làm một dạng toán 10 bài liên tiếp thì làm rất trơn tru, nhưng đi thi khi đề xáo trộn các dạng thì bối rối không biết áp dụng công thức nào.',
    sciencePrinciple: 'Học xen kẽ (Interleaving Practice) buộc não bộ liên tục thực hiện bước phân loại (discrimination) trước khi giải quyết. Cùng với hiệu ứng Protégé Effect (khi chuẩn bị để dạy người khác, ta học nghiêm túc và thấu đáo hơn gấp bội).',
    threeSteps: [
      {
        step: 1,
        title: 'Trộn lẫn 3-4 dạng bài tập trong một buổi ôn',
        description: 'Thay vì giải 20 bài tích phân dạng 1 rồi mới sang dạng 2, hãy làm: Dạng 1 -> Dạng 2 -> Dạng 3 -> Quay lại Dạng 1.'
      },
      {
        step: 2,
        title: 'Tổ chức nhóm học 3-4 người và chia chủ đề giảng chéo',
        description: 'Mỗi bạn phụ trách nghiên cứu sâu 1 chủ đề khó và có 15 phút để giảng lại cho các bạn còn lại phản biện.'
      },
      {
        step: 3,
        title: 'Đặt câu hỏi xoáy và giải quyết các tình huống bẫy',
        description: 'Người nghe không chỉ gật đầu mà đóng vai "giám khảo khó tính" đặt câu hỏi phản biện để kiểm tra độ vững của bạn.'
      }
    ],
    bestSubjects: ['Toán cao cấp', 'Vật lý đại cương', 'Xác suất thống kê', 'Lập trình giải thuật', 'Học nhóm thi vấn đáp'],
    commonMistakes: [
      'Học nhóm biến thành buổi tụ tập buôn chuyện ăn vặt.',
      'Xen kẽ các môn quá khác biệt khiến não bị phân tán (nên xen kẽ các chủ đề trong cùng một khối kiến thức).',
      'Ngại hỏi lại khi bạn mình giảng chưa rõ.'
    ],
    fiveMinuteExercise: 'Hẹn một người bạn thân 15 phút tối nay qua video call: Mỗi người sẽ có 5 phút giảng cho người kia nghe 1 bài toán hay mà mình mới học được.',
    keyTakeaway: 'Dạy người khác là cấp độ cao nhất của việc làm chủ tri thức.'
  }
];

export const SUBJECT_METHOD_MATRIX = [
  {
    subjectType: 'Lý thuyết nhiều (Luật, Lịch sử Đảng, Triết học, Kinh tế chính trị)',
    recommended: 'Active Recall + Spaced Repetition + Mind map',
    reason: 'Cần ghi nhớ khối lượng dữ kiện và điều luật khổng lồ, đồng thời phải liên kết logic giữa các học thuyết.',
    color: 'border-l-indigo-500'
  },
  {
    subjectType: 'Tính toán & Logic (Toán cao cấp, Vật lý, Kế toán, Xác suất)',
    recommended: 'Làm đề + Feynman + Học xen kẽ (Interleaving)',
    reason: 'Phải hiểu bản chất định lý, nhận diện đúng dạng bài trong đề thi ngẫu nhiên và phản xạ nhanh.',
    color: 'border-l-amber-500'
  },
  {
    subjectType: 'Lập trình, Kỹ thuật & Công nghệ (CNTT, Điện tử, Cơ khí)',
    recommended: 'Học bằng dự án (Project-based) + Pomodoro',
    reason: 'Chỉ đọc code không nhớ được; phải chia nhỏ task, thực hành debug liên tục và làm sản phẩm thật.',
    color: 'border-l-rose-500'
  },
  {
    subjectType: 'Ngoại ngữ & Ngôn ngữ học (IELTS, TOEIC, Tiếng Nhật, v.v.)',
    recommended: 'Spaced Repetition (Anki) + Nghe-Nói đa giác quan mỗi ngày',
    reason: 'Từ vựng cần khoảng lặp ngắt quãng để vào trí nhớ vĩnh viễn; ngữ âm cần phản xạ cơ miệng hàng ngày.',
    color: 'border-l-emerald-500'
  }
];
