import { useEffect, useState } from "react";
import type { Task } from "../interfaces";
import getUserTasks from "../services/task.service";

function TaskPage()
{
    const[tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        async function fetchTasks()
        {
            const tasks = await getUserTasks();
            console.log(tasks)
            setTasks(tasks);
        }
        fetchTasks();
    }, [])

    return (
        <div className="space-y-4">
            {tasks.map((task) => (
                <div key={task.id} className="p-4 bg-white rounded-lg shadow">
                    <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
                    <p className="text-gray-600 mt-2">{task.description}</p>
                </div>
            ))}
        </div>
    )
}

export default TaskPage;