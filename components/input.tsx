import { ChangeEventHandler, KeyboardEventHandler } from 'react'
import styles from './input.module.css'

export interface InputProps {
  placeholder: string,
  type: string,
  label: string
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined,
  onKeyDown?: KeyboardEventHandler<HTMLInputElement> | undefined,
}

export default function Input(data: InputProps) {
  return (
    <div className={styles.textbox}>
      <input className={styles.input} type={data.type} required placeholder={data.placeholder} onChange={data.onChange} onKeyDown={data.onKeyDown}/>
      <span className={styles.label}>{data.label}</span>
    </div>
  )
}
