import { InputHTMLAttributes } from "react"
import styles from "./RoundedInput.module.css"

interface RoundedInputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export function RoundedInput({ id }: RoundedInputProps) {
  return (
    <div className={styles.container}>
      <input type="checkbox" name="" id={`task${id}`} />
      <span className={styles.inputCheck} />
    </div>
  )
}