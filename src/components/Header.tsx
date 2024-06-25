import { PlusCircle } from "@phosphor-icons/react";

import logo from "../assets/logo.svg";
import styles from "./Header.module.css";

export function Header() {
  return (
   <header className={styles.header}>
    <img src={logo} className={styles.logo} />
    <div className={styles.newTaskBox}>
      <input placeholder="Adicione uma nova tarefa" />
      <button>
        Criar 
        <PlusCircle size={18} color="#f2f2f2" weight="bold" />
      </button>
    </div>
   </header> 
  )
}