import styles from './visualizations.module.css'
import Graph from './graph'

export interface visualizationProps {
  // metrics: any,
  licenses: any,
}

const tables = [
  {
      "name": "test-license-1",
      "key": "KWvk0BWRqEgwg1c30Eawef5C9rfv63frxtV0vdHYtKwZrawpg2UOVh8s8/Iw7ds7HEKRTVFUygrgh3j8spIKFA==",
      "user": 31,
      "status": "VALID",
      "validUpto": "2023-05-26T05:17:50.428513Z"
  },
  {
      "name": "test-license-2",
      "key": "o4gfvW9nolGRNgyxJRHUq5fkJ7XscWB84odLIBYtEdY3gXOAOc+8v+uYNLlaCuMjPUqX9wikx9omFWJY6ckbGg==",
      "user": 34,
      "status": "VALID",
      "validUpto": "2023-05-26T18:54:16.346130Z"
  }
]

export default function Visualizations(data: visualizationProps) {
  return (
    <>
      <div className={styles.visualization}>
        <div className={styles.title}>
          Time Series data
        </div>
        <div className={styles.content}>
          <Graph />
          <Graph />
          <Graph />
          <Graph />
          <Graph />
          <Graph />
        </div>
      </div>
      <div className={styles.tables}>
        <div className={styles.title}>
          Licenses
        </div>
        <div className={styles.content}>
          {
            tables.map((e: any) => {
              return (
                <div className={styles.row}>
                  <div>{e.name}</div>
                  <div>{e.key}</div>
                  <div>{e.user}</div>
                  <div>{e.status}</div>
                  <div>{e.validUpto}</div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
