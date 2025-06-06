import { useEffect, useState } from "react";
import type { Task } from "../interfaces";
import {createTask, deleteTask, getUserTasks} from "../services/task.service";
import { API_URL } from "../environment";

function TaskPage()
{
    const[tasks, setTasks] = useState<Task[]>([]);
    const[title, setTitle] = useState<string>('');
    const[description, setDescription] = useState<string>('');

    useEffect(() => {
        async function fetchTasks()
        {
            const tasks = await getUserTasks();
            setTasks(tasks);
        }
        fetchTasks();
    }, [])
    
    const addTaskButtonClick = async() => {
        if(title == '' || description == '') return;
        createTask({title, description});
        const tasks = await getUserTasks();
        setTasks(tasks);
        setTitle('');
        setDescription('');
    }

    const deleteTaskButtonClick = async(id: string) => {
        deleteTask(id);
        const tasks = await getUserTasks();
        setTasks(prevItems => prevItems.filter(item => item.id !== id));
    }

    const logoutButtonClick = async() => {
        localStorage.removeItem('token');
        window.location.reload();
    }

    return (
        <div className="flex items-center justify-center h-screen bg-blue-600">
            <div className="flex flex-col bg-blue-500 items-center space-y-6 w-full max-w-3xl h-screen">
                <button onClick={logoutButtonClick}>Logout</button>
                <div className="flex flex-col space-y-2 w-full max-w-md">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="p-2 rounded border"
                    placeholder="Title"
                />
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="p-2 rounded border"
                    placeholder="Description"
                />
                <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-gray-100 transition" onClick={addTaskButtonClick}>
                    Add
                </button>
                </div>

                <div className="space-y-4 bg-gray-300 p-4 w-full max-w-md rounded">
                {tasks.map((task) => (
                    <div key={task.id} className="p-4 bg-white rounded-lg shadow ">
                        <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
                        <p className="text-gray-600 mt-2">{task.description}</p>
                        <div className="flex justify-end">
                            <button className="bg-red-600 p-1 rounded-md" onClick={() => {deleteTaskButtonClick(task.id)}}>Delete</button>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>

    )
}

export default TaskPage;