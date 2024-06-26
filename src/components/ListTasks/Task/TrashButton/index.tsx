import { Trash } from "@phosphor-icons/react";

import styles from "./TrashButton.module.css";

export function TrashButton() {
  return (
    <div className={styles.container}>
      <Trash size={14} />
    </div>
  )
}