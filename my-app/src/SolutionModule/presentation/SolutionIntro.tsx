import styles from "../Solution.module.css";
import type { Solution } from "../domain/Solution";
function SolutionIntroModule({
  intro,
  update,
}: {
  intro: Solution;
  update: (updatedIntro: Solution) => void;
}) {
  return (
    <>
      <div className={styles["solution-intro"]}>
        <textarea
          placeholder="솔루션 이름을 입력하세요"
          onChange={(e) => update({ ...intro, title: e.target.value })}
        />
        <textarea
          placeholder="솔루션 설명을 입력하세요"
          onChange={(e) => update({ ...intro, description: e.target.value })}
        />
        <select>
          <option>카테고리1</option>
          <option>카테고리2</option>
          <option>카테고리3</option>
          <option>카테고리4</option>
          <option>카테고리5</option>
        </select>
      </div>
    </>
  );
}

export default SolutionIntroModule;
