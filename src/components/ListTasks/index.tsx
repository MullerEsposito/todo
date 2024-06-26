import { ClipboardText } from "@phosphor-icons/react";
import styles from "./index.module.css";
import { useState } from "react";
import { Task } from "./Task";

export function ListTasks() {
  // const [tasks, setTasks] = useState<Task[]>([]);
  const tasks: Task[] = [];
  const root = document.documentElement;

  const blueColor = getComputedStyle(root).getPropertyValue('--blue').trim();
  const purpleColor = getComputedStyle(root).getPropertyValue('--purple').trim();

  tasks.push({id: 1, content: "Tarefa 1"});
  tasks.push({id: 2, content: "Tarefa 2"});
  tasks.push({id: 3, content: "Tarefa 3"});

  type Task = {
    id: number;
    content: string;
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.info}>
          <p style={{ color: blueColor }}>Tarefas criadas</p>
          <span>{tasks ? tasks.length : 0}</span>
        </div>
        <div className={styles.info}>
          <p style={{ color: purpleColor }}>Concluídas</p>
          <span>0</span>
        </div>
      </header>

      <main className={styles.main}>
        {tasks.length ? (
          tasks.map((task: Task) => (
            <Task key={task.id} id={task.id} content={task.content} />
          ))
        ):(
          <>
            <ClipboardText size={56} />
            <p>
              Você ainda não tem tarefas cadastradas
              <span>Crie tarefas e organize seus itens a fazer</span>
            </p>
          </>
        )}
      </main>
    </div>
  )
}