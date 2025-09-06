import { useState } from "react";
import sendLoginRequest from "./LoginModel";
function useLoginViewModel() {
    const [isLoggedIn, updateLogin] = useState(false);
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const login = async () => {
        const response = await sendLoginRequest(id, pw);
        if (response.status === 200) {
            updateLogin(true);
            alert("로그인 성공");
        } else {
            alert("로그인 실패");
        }
    }
    const updateLoginState = () => {
        const token = sessionStorage.getItem("accessToken");
        const payload = token?.split(".");
        const exp = payload && JSON.parse(atob(payload[1])).exp;
        console.log("exp:",exp,"\ndate:",Date.now()/1000);
        if(exp>Date.now()/1000) {
            updateLogin(true);
        }
    }
    return { id, setId, pw, setPw, isLoggedIn, updateLogin, login, updateLoginState };
}
export default useLoginViewModel