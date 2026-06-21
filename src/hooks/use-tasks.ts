import useLocalStorage from "./use-local-storage";
import { TASKS_KEY, Task, TaskState } from "../models/task";
import { delay } from "../helpers/utils";
import React    from "react";

export default function useTasks() {
    const [tasksData] = useLocalStorage<Task[]>(TASKS_KEY, []);
    const [tasks, setTasks] = React.useState<Task[]>([]);
    const [isLoadingTasks, setIsLoadingTasks] = React.useState(true);

    async function fetchTasks() {
        console.time("Carregando tarefas...");
        if (isLoadingTasks) {
           
            await delay(2000);
            setIsLoadingTasks(false);
            console.timeEnd("Carregando tarefas...");
        }

        setTasks(tasksData);

    }

    React.useEffect(() => {

        fetchTasks();
    }, [tasksData]);


    return {
        tasks,
            tasksCount: tasks.length,
            createdTasksCount: tasks.filter((task: Task) => task.state === TaskState.Created).length,
        concludedTasksCount: tasks.filter((task: Task) => task.concluded).length,
        isLoadingTasks,
    };
}
