import { Trash } from "@phosphor-icons/react";

import styles from "./TrashButton.module.css";
import { ButtonHTMLAttributes } from "react";

interface TrashButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export function TrashButton({ ...props }: TrashButtonProps) {
  return (
    <button className={styles.container} {...props}>
      <Trash size={14} />
    </button>
  )
}