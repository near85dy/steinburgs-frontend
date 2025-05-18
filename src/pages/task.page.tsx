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

    return (<>
            <div className=".bg-red-500">
                {tasks.map((task) => (
                    <div key={task.id} className=".inline-block">
                        <a>{task.title}</a> 
                        <a>{task.description}</a>
                    </div>
                ))}
            </div>
        </>)
}


export default TaskPage;