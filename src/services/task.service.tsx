import { API_URL } from "../environment";
import type { Task } from "../interfaces";

export const getUserTasks = async () => {
    const token = localStorage.getItem('token');
    if(!token) throw new Error("No token found");
    const response: Response = await fetch(API_URL+"tasks", {method: "GET", headers: {"Authorization": "Bearer "+token}});
    const data: Task[] = await response.json();
    return data;
}

export const createTask = async (body: {title: string, description: string}) => 
{
    const token = localStorage.getItem('token');
    if(!token) throw new Error("No token found");
    const response = fetch(API_URL+'tasks', {method: "POST", headers: {"Content-Type": "application/json", "Authorization": "Bearer "+token}, body: JSON.stringify(body)})
}

export const deleteTask = async (id: string) => {
    const token = localStorage.getItem('token');
    if(!token) throw new Error("No token found"); 
    fetch(API_URL+'tasks/'+id, {method: "DELETE", headers: { "Authorization": "Bearer " + token }})
}