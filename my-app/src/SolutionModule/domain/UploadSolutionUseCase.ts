import type { Solution } from "./Solution";
import type { SolutionRepository } from "./SolutionRepository";

export class UploadSolutionUseCase {
  constructor(private repository: SolutionRepository) {}

  async execute(solution: Solution): Promise<void> {
    // 👉 여기서 비즈니스 규칙(검증, 변환, 로깅 등)을 넣을 수 있음
    if (!solution.title || solution.title.trim() === "") {
      throw new Error("솔루션 제목은 필수입니다.");
    }

    await this.repository.uploadSolution(solution);
  }
}
