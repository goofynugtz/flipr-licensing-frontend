import styles from './input.module.css'

export interface InputProps {
  placeholder: any,
  type: any,
  label: any
  onChange?: any
}

export default function Input(data: InputProps) {
  return (
    <div className={styles.textbox}>
      <input className={styles.input} type={data.type} required placeholder={data.placeholder} onChange={data.onChange}/>
      <span className={styles.label}>{data.label}</span>
    </div>
  )
}
