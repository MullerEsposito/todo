import styles from "./Task.module.css";
import { RoundedInput } from "./RoundedInput";
import { TrashButton } from "./TrashButton";
import { useState } from "react";

interface TaskProps {
  id: number;
  content: string;
}

export function Task({ id, content }: TaskProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleIsChecked = () => {
    setIsChecked(oldIsChecked => !oldIsChecked);
  }

  return (
    <div className={styles.container}>
      <RoundedInput id={`task${id}`} isChecked={isChecked} handleIsChecked={handleIsChecked} />
      <label htmlFor={`task${id}`} className={isChecked ? styles.taskChecked : ""}>
        { content }
      </label>
      <TrashButton />
    </div>
  )
}