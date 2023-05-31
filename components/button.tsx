import styles from './button.module.css'

export interface ButtonProps {
  label: any;
  onClick?: (e: any) => Promise<void> | void;
}

export default function Button(data: ButtonProps) {
  return (
    <div className={styles.button} onClick={data.onClick}>
      <button>{data.label}</button>
    </div>
  )
}
