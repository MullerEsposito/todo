import { ClipboardText } from "@phosphor-icons/react";
import styles from "./index.module.css";

export function ListTasks() {
  const root = document.documentElement;

  const blueColor = getComputedStyle(root).getPropertyValue('--blue').trim();
  const purpleColor = getComputedStyle(root).getPropertyValue('--purple').trim();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.info}>
          <p style={{ color: blueColor }}>Tarefas criadas</p>
          <span>0</span>
        </div>
        <div className={styles.info}>
          <p style={{ color: purpleColor }}>Concluídas</p>
          <span>0</span>
        </div>
      </header>

      <main className={styles.main}>
        <ClipboardText size={56} />
        <p>
          Você ainda não tem tarefas cadastradas
          <span>Crie tarefas e organize seus itens a fazer</span>
        </p>
      </main>
    </div>
  )
}