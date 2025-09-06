export interface Solution {
  title: string;
  description: string;
  category: string;
  hashtags: string[];
  videos: SolutionStep[]; // 스텝 목록
}

// Step 구조 정의
export interface SolutionStep {
  title: string;
  youtubeUrl: string;
  goal: string;
  question: string;
}
