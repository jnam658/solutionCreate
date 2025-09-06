import { useEffect } from "react";
import styles from "./Login.module.css"
import userProfile from '../assets/Rectangle 25.png'
import useLoginViewModel from "./loginViewModel";

function Login() {
  const vm = useLoginViewModel();
  useEffect(() => {vm.updateLoginState();})
  if (vm.isLoggedIn) {
    return (
      <div className={styles["profile-container"]}>
        <img 
          src={userProfile}  // 기본 프로필 아이콘
          className={styles["profile-icon"]}
        />
        <span className={styles["nickname"]}>대충 엄청 길어서 문제될 수준의 닉네임</span>
      </div>
    )
  }
  else {
    return (
      <div className={styles["login-container"]}>
        <h2>Login</h2>
        <input type="text" placeholder="아이디" value={vm.id} onChange={(e) => vm.setId(e.target.value)}/>
        <input type="password" placeholder="비밀번호" value={vm.pw} onChange={(e) => vm.setPw(e.target.value)} />
        <button onClick={vm.login}>로그인</button>
      </div>
  );
  }
  
}
export default Login;