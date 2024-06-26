import { Trash } from "@phosphor-icons/react";

import styles from "./Task.module.css";
import { RoundedInput } from "./RoundedInput";

interface TaskProps {
  id: number;
  content: string;
}

export function Task({ id, content }: TaskProps) {
  return (
    <div className={styles.container}>
      <RoundedInput id={`task${id}`} />
      <label htmlFor={`task${id}`}>{ content }</label>
      <Trash size={18} />
    </div>
  )
}