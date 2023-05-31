import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'; 
import toast from 'react-hot-toast';
import axios from 'axios';
import Link from 'next/link'
import { AuthContext } from '@/context/AuthContext'
import Input from "@/components/input"
import Button from "@/components/button"
import styles from './accounts.module.css'
import "@/app/globals.css"
import Sidebar from "@/components/sidebar"

interface IToken {
  access: string, 
  refresh: string;
}

export default function LoginOrSignUp(){
  const authContext = useContext(AuthContext)

  const router = useRouter();

  const sidebarProps = [
    { url: '/accounts/login', display: '/login', helperText: ' Already a User?'},
    { url: '/accounts/signup', display: '/signup', helperText: 'New User?'},
    { url: '/accounts/forgot-password', display: '/forgot', helperText: 'Reset Password?' },
  ]

  useEffect(() => {
    try {
      const accToken = localStorage.getItem('access');
      const refToken = localStorage.getItem('refresh');
      console.log(accToken)
      console.log(refToken)
      authContext.setIsAuth!(true)
      authContext.setAccessToken!(accToken)
      authContext.setRefreshToken!(refToken)
      
      if (accToken == null) authContext.setIsAuth!(false)
      else router.push('/dashboard')

    } catch (e) {
      console.log(e)
    }
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.foreground}>
        <Sidebar {...sidebarProps} />
      </div>
      {/* <div className={styles.background}></div> */}
    </main>
  )
}
