import { InputHTMLAttributes } from "react"
import styles from "./RoundedInput.module.css"

interface RoundedInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isChecked: boolean;
  handleIsChecked: (isChecked: boolean) => void;
}

export function RoundedInput({ id, isChecked, handleIsChecked }: RoundedInputProps) {
  return (
    <div className={styles.container}>
      <input 
        type="checkbox" 
        id={`task${id}`} 
        checked={isChecked} 
        onChange={e => handleIsChecked(e.target.checked)}
      />
      <span className={styles.inputCheck} />
    </div>
  )
}