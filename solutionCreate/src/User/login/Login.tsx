import { useEffect } from "react";
import styles from "./Login.module.css";
import userProfile from "../../assets/Rectangle 25.png";
import useLoginViewModel from "./loginViewModel";
import useUserViewModel from "../UserInfo/presentation/UserViewModel";

function Login() {
  const vm = useLoginViewModel();
  const { nickname, loading, error, refresh } = useUserViewModel();
  useEffect(() => {
    vm.updateLoginState();
  });
  if (vm.isLoggedIn) {
    return (
      <div className={styles["profile-container"]}>
        <img src={userProfile} className={styles["profile-icon"]} />
        {loading && <span className={styles["nickname"]}>불러오는 중…</span>}
        {!loading && error && <span className={styles["nickname"]}>오류</span>}
        {!loading && !error && (
          <span className={styles["nickname"]}>{nickname}</span>
        )}
      </div>
    );
  } else {
    return (
      <div className={styles["login-container"]}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="아이디"
          value={vm.id}
          onChange={(e) => vm.setId(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={vm.pw}
          onChange={(e) => vm.setPw(e.target.value)}
        />
        <button
          onClick={async () => {
            await vm.login(); // 반환값 안 씀
            if (vm.isLoggedIn) {
              // 로그인 상태를 보고
              await refresh(); // 유저정보 갱신
            }
          }}
        >
          로그인
        </button>
      </div>
    );
  }
}
export default Login;
