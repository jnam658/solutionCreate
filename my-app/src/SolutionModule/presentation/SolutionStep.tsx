import styles from "../Solution.module.css";
import type { SolutionStep } from "../domain/Solution";

function SolutionSteps({
  index,
  step,
  onDelete,
  update,
}: {
  index: number;
  step: SolutionStep;
  onDelete: () => void;
  update: (index: number, updatedStep: SolutionStep) => void;
}) {
  return (
    <>
      <div className={styles["solution-header"]}>
        <p>{index + 1}단계 솔루션</p>
        {index + 1 > 2 ? <button onClick={onDelete}>삭제</button> : null}
      </div>
      <textarea
        placeholder="제목을 입력하세요"
        value={step.title}
        onChange={(e) => update(index, { ...step, title: e.target.value })}
      />
      <textarea
        className={styles["videoURL"]}
        placeholder="영상 링크를 입력하세요"
        value={step.youtubeUrl}
        onChange={(e) => update(index, { ...step, youtubeUrl: e.target.value })}
      />
      <textarea
        className={styles["stepgoal"]}
        placeholder="훈련 목적을 입력하세요"
        value={step.goal}
        onChange={(e) => update(index, { ...step, goal: e.target.value })}
      />
      <p>영상 시청 후 질문</p>
      <textarea
        placeholder="질문을 입력하세요"
        value={step.question}
        onChange={(e) => update(index, { ...step, question: e.target.value })}
      />
    </>
  );
}

export default SolutionSteps;
