import styles from "../Solution.module.css";
import SolutionSteps from "./SolutionStep";
import SolutionIntroModule from "./SolutionIntro";
import SolutionHandler from "./SolutionViewModel";
import type { SolutionStep } from "../domain/Solution";

function SolutionPage() {
  const vm = SolutionHandler();
  return (
    <div className={styles["content-container"]}>
      <SolutionIntroModule
        intro={vm.Solution}
        update={(updatedIntro) => vm.updateIntro(updatedIntro)}
      />
      {vm.Solution.videos.map((step: SolutionStep, index: number) => (
        <SolutionSteps
          key={index}
          index={index}
          step={step}
          onDelete={() => vm.onDelete(step)}
          update={(index: number, updatedStep: SolutionStep) =>
            vm.updateStep(index, updatedStep)
          }
        />
      ))}
      <button
        onClick={() =>
          vm.setSolution({
            title: "",
            description: "",
            category: "",
            hashtags: "",
            videos: [
              ...vm.Solution.videos,
              {
                title: "",
                youtubeId: "",
                youtubeTitle: "",
                goal: "",
                question: "",
              },
            ],
          })
        }
      >
        스텝 추가
      </button>

      <div className={styles["button-container"]}>
        <button onClick={() => vm.uploadSolution(vm.Solution)}>
          솔루션 등록
        </button>
        <button>취소</button>
      </div>
    </div>
  );
}

export default SolutionPage;
