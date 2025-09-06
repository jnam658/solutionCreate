import { useState } from "react";
import { UploadSolutionUseCase } from "../domain/UploadSolutionUseCase";
import type { Solution, SolutionStep } from "../domain/Solution";
import { SolutionRepositoryImpl } from "../data/SolutionRepositoryImpl";

function SolutionHandler() {
  const [Solution, setSolution] = useState<Solution>({
    title: "",
    description: "",
    category: "",
    hashtags: [],
    videos: [
      { title: "", youtubeUrl: "", goal: "", question: "" },
      { title: "", youtubeUrl: "", goal: "", question: "" },
    ],
  });
  const addStep = (step: SolutionStep) => {
    setSolution({
      ...Solution,
      videos: [...Solution.videos, step],
    });
  };
  const onDelete = (step: SolutionStep) => {
    setSolution({
      ...Solution,
      videos: [...Solution.videos.filter((s) => s !== step)],
    });
  };
  const updateStep = (index: number, updatedStep: SolutionStep) => {
    setSolution((prev) => ({
      ...prev,
      videos: prev.videos.map((s, i) => (i === index ? updatedStep : s)),
    }));
  };
  const updateIntro = (updatedIntro: Solution) => {
    setSolution((prev) => ({
      ...prev,
      ...updatedIntro,
    }));
  };
  const repository = new SolutionRepositoryImpl();
  const uploadSolutionUseCase = new UploadSolutionUseCase(repository);
  const uploadSolution = async (solution: Solution) => {
    try {
      await uploadSolutionUseCase.execute(solution);
      alert("솔루션 업로드 성공!");
    } catch (err) {
      alert("업로드 실패: " + (err as Error).message);
    }
  };

  return {
    Solution,
    setSolution,
    addStep,
    onDelete,
    updateStep,
    updateIntro,
    uploadSolution,
  };
}
export default SolutionHandler;
