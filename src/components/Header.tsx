import { PlusCircle } from "@phosphor-icons/react";

import logo from "../assets/logo.svg";
import styles from "./Header.module.css";
import { useState } from "react";

interface HeaderProps {
  onNewTaskCreated: (taskValue: string) => void;
}

export function Header({ onNewTaskCreated }: HeaderProps) {
  const [taskValue, setNewTaskValue] = useState("");

  const handleOnNewTaskCreated = () => {
    onNewTaskCreated(taskValue);
    setNewTaskValue("");
  }

  return (
   <header className={styles.header}>
    <img src={logo} className={styles.logo} />
    <div className={styles.newTaskBox}>
      <input 
        placeholder="Adicione uma nova tarefa" 
        value={taskValue}
        onChange={e => setNewTaskValue(e.target.value)}
        onKeyDown={e => e.key === "Enter" ? handleOnNewTaskCreated() : "" }
      />
      <button onClick={handleOnNewTaskCreated}>
        Criar 
        <PlusCircle size={18} color="#f2f2f2" weight="bold" />
      </button>
    </div>
   </header> 
  )
}