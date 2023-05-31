import Link from 'next/link';
import styles from './sidebar.module.css'

export interface sidebarProps {
  url: string;
  display: string;
  helperText: string;
}

const Sidebar = (data: any) => {
  return (
    <div className={styles.sidebar}>
      {
        Object.keys(data).map((e: string) => {
          return (
            <div className={styles.row}>
              <span className={styles.helper}>{data[e].helperText}</span>
              <Link href={data[e].url} key={e} className={styles.links}>{data[e].display}</Link>
            </div>
          )
        })
      }
    </div>
  )
}
export default Sidebar
