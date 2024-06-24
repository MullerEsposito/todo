import logo from "../assets/logo.svg";
import styles from "./Header.module.css";

export function Header() {
  return (
   <header className={styles.header}>
    <img src={logo} className={styles.logo} />
    <div className={styles.newTaskBox}>
      <input />
      <button>Criar +</button>
    </div>
   </header> 
  )
}