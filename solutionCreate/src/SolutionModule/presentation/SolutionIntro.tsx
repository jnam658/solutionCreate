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
        <select
          value={intro.category}
          onChange={(e) => update({ ...intro, category: e.target.value })}
        >
          <option>성실성</option>
          <option>자존감</option>
          <option>개방성</option>
          <option>타인 이해</option>
          <option>공동체 의식</option>
          <option>사회적 주도성</option>
          <option>스트레스 인식</option>
          <option>감정 조절</option>
          <option>불안 경향성</option>
          <option>충동 조절</option>
          <option>자해/자살 위험</option>
          <option>학교폭력</option>
        </select>
        <textarea
          placeholder="#해시태그를 입력하세요"
          onChange={(e) => update({ ...intro, hashtags: e.target.value })}
        />
      </div>
    </>
  );
}

export default SolutionIntroModule;
