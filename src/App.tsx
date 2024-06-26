import { useState } from "react";

import { Header } from "./components/Header";
import { ListTasks } from "./components/ListTasks";


import "./global.css";
import { v4 as uuidv4 } from "uuid";
import { Task } from "./components/ListTasks/Task";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleOnNewTaskCreated = (newTaskContent: string) => {
    const newTask: Task = {
      id: uuidv4(),
      content: newTaskContent,
      isCompleted: false
    }
    setTasks(oldTask => [...oldTask, newTask]);
  }

  const handleOnChangeTask = (taskId: string) => {
    const updatedTasks = tasks.map(task => {
      return task.id === taskId 
        ? { ...task, isCompleted: !task.isCompleted }
        : { ...task };
    });

    setTasks(updatedTasks);
  }

  const handleOnDeleteTask = (taskId: string) => {
    const filteredTasks = tasks.filter(task => task.id != taskId);
    setTasks(filteredTasks);
  }

  return (
    <>
      <Header onNewTaskCreated={handleOnNewTaskCreated} />
      <ListTasks 
        tasks={tasks} 
        onDeleteTask={handleOnDeleteTask}
        onChangeTask={handleOnChangeTask}
      />
    </>
  )
}

export default App
