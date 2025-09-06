async function sendLoginRequest(username: string, password: string) {
    const res = await fetch('/user/login', {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email: username, password: password})});
    const body = await res.json();
    const { accessToken, refreshToken } = body.data;
    sessionStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    return {status: res.status, body};
}
export default sendLoginRequest;