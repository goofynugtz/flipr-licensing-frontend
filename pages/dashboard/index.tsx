import Button from "@/components/button"
import Sidebar from "@/components/sidebar"
import styles from './dashboard.module.css'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '@/context/AuthContext'
import { useRouter } from 'next/router';
import Visualizations from "@/components/visualizations"

export default function Dashboard() {
  const authContext = useContext(AuthContext)
  const router = useRouter();

  useEffect(() => {
    try {
      if (authContext.isAuth == true){
        const accToken = localStorage.getItem('access');
        const refToken = localStorage.getItem('refresh');
        authContext.setIsAuth!(true)
        authContext.setAccessToken!(accToken)
        authContext.setRefreshToken!(refToken)
      } else {
        router.push('/accounts')
      }

    } catch (e) {
      console.log(e)
    }
  }, [])

  const sidebarProps = [
    { url: '/dashboard/issue', display: '/issue' },
    { url: '/dashboard/validate', display: '/validate' },
    { url: '/dashboard/validate', display: '/policies' },
    { url: '/dashboard/validate', display: '/validate' },
  ]

  const handleLogout = () => {
    localStorage.clear()
    authContext.setIsAuth!(false)
    authContext.setAccessToken!(null)
    authContext.setRefreshToken!(null)
    console.log(localStorage.getItem('access'))
    router.push('/accounts/login')
  }

  return (
    <main className={styles.main}>
      <div className={styles.left}>
        <Sidebar {...sidebarProps} />
        <Button label={"Logout"} onClick={handleLogout} />
      </div>
      <div className={styles.right}>
      <Visualizations />
      </div>
    </main>
  )
}
