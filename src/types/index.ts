export type TabId = 
  | 'home' 
  | 'college-101' 
  | 'methods' 
  | 'time' 
  | 'skills' 
  | 'exam' 
  | 'tools' 
  | 'wellness' 
  | 'interactive' 
  | 'community';

export interface MethodItem {
  id: string;
  name: string;
  subtitle: string;
  color: string;
  badge: string;
  problem: string;
  sciencePrinciple: string;
  threeSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  bestSubjects: string[];
  commonMistakes: string[];
  fiveMinuteExercise: string;
  keyTakeaway: string;
}

export interface UniversityTerm {
  term: string;
  definition: string;
  example: string;
  tip: string;
  category: 'Điểm số & Học vụ' | 'Môn học & Tín chỉ' | 'Cơ cấu & Thủ tục';
}

export interface DayTask {
  id: number;
  dayRange: string;
  title: string;
  desc: string;
  category: 'Hành chính' | 'Học tập' | 'Xã hội' | 'Cá nhân';
  completed?: boolean;
}

export interface ToolItem {
  id: string;
  name: string;
  category: 'Ghi chú & Kiến thức' | 'Ôn tập & Flashcard' | 'Tập trung' | 'Lập kế hoạch' | 'Nghiên cứu' | 'Thiết kế' | 'Học trực tuyến' | 'Trợ lý AI';
  pricing: 'Miễn phí' | 'Freemium' | 'Có phí';
  description: string;
  pros: string;
  cons: string;
  bestFor: string;
  link: string;
  iconName?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    style: 'visual' | 'auditory' | 'kinesthetic' | 'readwrite';
    scoreDesc: string;
  }[];
}

export interface QuizResultProfile {
  style: 'visual' | 'auditory' | 'kinesthetic' | 'readwrite';
  title: string;
  badge: string;
  traits: string[];
  recommendedMethods: string[];
  proTips: string[];
  studyEnvironment: string;
}

export interface EisenhowerTask {
  id: string;
  text: string;
  quadrant: 'urgent-important' | 'not-urgent-important' | 'urgent-not-important' | 'not-urgent-not-important';
  completed: boolean;
}

export interface StudentStory {
  id: string;
  name: string;
  school: string;
  achievement: string;
  avatar: string;
  before: string;
  turningPoint: string;
  after: string;
  threeAdvices: string[];
}

export interface ForumQuestion {
  id: string;
  author: string;
  role: string;
  timeAgo: string;
  major: string;
  year: string;
  title: string;
  content: string;
  likes: number;
  answers: {
    author: string;
    role: string;
    content: string;
    timeAgo: string;
    isTopAnswer?: boolean;
  }[];
}

export interface HabitChallengeDay {
  day: number;
  title: string;
  action: string;
  whyItWorks: string;
  category: 'Tư duy' | 'Công cụ' | 'Tập trung' | 'Thói quen';
}

export interface CourseGrade {
  id: string;
  name: string;
  credits: number;
  gradeLetter: string;
  gradePoint: number;
}
