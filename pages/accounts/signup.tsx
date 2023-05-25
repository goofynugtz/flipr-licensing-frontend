import styles from './accounts.module.css'
import "@/app/globals.css"
import Input from "@/components/input"
import Button from "@/components/button"


export default function Signup(){

  return (
    <main className={styles.main}>
      <div className={styles.foreground}>
        <Input placeholder={"Name"} type={"text"} label={"Name"}/>
        <Input placeholder={"user@organization.com"} type={"email"} label={"Email"}/>
        <Input placeholder={"**********"} type={"password"} label={"Password"}/>
        <Input placeholder={"Company"} type={"text"} label={"Organization"}/>
        <Input placeholder={"+91 456789432"} type={"phone"} label={"Mobile"}/>
        <Input placeholder={"404, Random Street, That City, This Country"} type={"text"} label={"Address"}/>
        <Button label={"Submit"}/>
      </div>
      {/* <div className={styles.background}></div> */}
    </main>
  )
}
