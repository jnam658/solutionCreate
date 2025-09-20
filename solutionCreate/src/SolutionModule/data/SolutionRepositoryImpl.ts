import type { Solution } from "../domain/Solution";
import type { SolutionRepository } from "../domain/SolutionRepository";

export class SolutionRepositoryImpl implements SolutionRepository {
  async uploadSolution(solution: Solution): Promise<void> {
    console.log("Uploading solution payload:", solution);

    const token = sessionStorage.getItem("accessToken");
    if (!token) {
      throw new Error("No access token");
    }
    const res = await fetch("/solution/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(solution),
    });

    if (!res.ok) {
      const text = await res.text(); // 서버 에러 메시지까지 로깅
      console.error("솔루션 업로드 실패:", res.status, text);
      throw new Error(`Upload failed: ${res.status}`);
    }

    const body = await res.json();
    console.log("솔루션 업로드 성공:", body);
  }
}
