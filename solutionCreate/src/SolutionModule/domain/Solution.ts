export interface Solution {
  title: string;
  category: string;
  description: string;
  hashtags: string;
  videos: SolutionStep[]; // 스텝 목록
}

// Step 구조 정의
export interface SolutionStep {
  title: string;
  question: string;
  goal: string;
  youtubeId: string;
  youtubeTitle: string;
}
