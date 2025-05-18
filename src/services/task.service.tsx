import { API_URL } from "../environment";
import type { Task } from "../interfaces";

const getUserTasks = async () => {
    const token = localStorage.getItem('token');
    if(!token) throw new Error("No token found");
    const response: Response = await fetch(API_URL+"tasks", {method: "GET", headers: {"Authorization": "Bearer "+token}});
    const data: Task[] = await response.json();
    return data;
}

export default getUserTasks;