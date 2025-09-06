import type { Solution } from "../domain/Solution";
import type { SolutionRepository } from "../domain/SolutionRepository";

export class SolutionRepositoryImpl implements SolutionRepository {
  async uploadSolution(solution: Solution): Promise<void> {
    await fetch("solution/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ solution }),
    });
  }
}
