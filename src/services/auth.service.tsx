import { API_URL } from "../environment";

const releaseLogin = async (loginForm: {username: string, password: string}) => {
    const response: Response = await fetch(API_URL+"auth/login", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(loginForm)});
    const token: string = await response.text();
    localStorage.setItem("token", token);
}

const releaseSignup = async (signupForm: {username: string, password: string}) => {
    const response: Response = await fetch(API_URL+"auth/signup", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(signupForm)});
    const token: string = await response.text();
    localStorage.setItem("token", token);
}

export default releaseLogin;