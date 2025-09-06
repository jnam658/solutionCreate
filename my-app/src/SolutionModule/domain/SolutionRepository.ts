import type { Solution } from "./Solution";

export interface SolutionRepository {
  uploadSolution(solution: Solution): Promise<void>;
}
