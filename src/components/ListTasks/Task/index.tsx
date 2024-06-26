import styles from "./Task.module.css";
import { RoundedInput } from "./RoundedInput";
import { TrashButton } from "./TrashButton";
import { useState } from "react";

export type Task = {
  id: string;
  content: string;
  isCompleted: boolean;
}

interface TaskProps {
  task: Task;
  onDeleteTask: (taskId: string) => void;
  onChangeTask: (taskId: string) => void;
}

export function Task({ task: { id, content }, onDeleteTask, onChangeTask }: TaskProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleIsChecked = (_isChecked: boolean) => {
    setIsChecked(_isChecked);
    onChangeTask(id);
  }

  return (
    <div className={styles.container}>
      <RoundedInput id={`task${id}`} isChecked={isChecked} handleIsChecked={handleIsChecked} />
      <label htmlFor={`task${id}`} className={isChecked ? styles.taskChecked : ""}>
        { content }
      </label>
      <TrashButton onClick={() => onDeleteTask(id)} />
    </div>
  )
}