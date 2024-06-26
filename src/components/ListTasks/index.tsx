import { ClipboardText } from "@phosphor-icons/react";
import styles from "./index.module.css";
import { Task } from "./Task";

interface ListTasksProps {
  tasks: Task[];
  onDeleteTask: (taskId: string) => void;
  onChangeTask: (taskId: string) => void;
}

export function ListTasks({ tasks, onDeleteTask, onChangeTask }: ListTasksProps) {
  const root = document.documentElement;

  const blueColor = getComputedStyle(root).getPropertyValue('--blue').trim();
  const purpleColor = getComputedStyle(root).getPropertyValue('--purple').trim();

  const completedTasksTotal = tasks.reduce((total, task) => {
    return task.isCompleted ? total + 1 : total;
  }, 0);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.info}>
          <p style={{ color: blueColor }}>Tarefas criadas</p>
          <span>{tasks ? tasks.length : 0}</span>
        </div>
        <div className={styles.info}>
          <p style={{ color: purpleColor }}>Concluídas</p>
          <span>{ completedTasksTotal || 0}</span>
        </div>
      </header>

      <main className={styles.main}>
        {tasks.length ? (
          tasks.map(task => (
            <Task 
              key={task.id} 
              task={task} 
              onDeleteTask={onDeleteTask} 
              onChangeTask={onChangeTask}
            />
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