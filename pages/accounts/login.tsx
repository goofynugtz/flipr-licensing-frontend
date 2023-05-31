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

interface IToken {
  access: string, 
  refresh: string;
}

export default function Login(){
  const authContext = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter();
  
  const handleSubmit = async () => {
    try {
      const response = await axios.post<IToken>('https://licensing.sr.flipr.ai/accounts/login/', {
        email: email,
        password: password,
      });
      if (response.status === 200){
        authContext.setAccessToken!(response.data.access)
        authContext.setRefreshToken!(response.data.refresh)
        authContext.setIsAuth!(true)
        localStorage.setItem('access', response.data.access);
        localStorage.setItem('refresh', response.data.refresh);
        router.push('/dashboard')

      } else {
        toast.error(`${response.status} Could not login`);
      }
    } catch (error) {
      console.log(error);
      toast.error('Incorrect email/password');
    }
  };

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

  const handleKeyPress = (e:any) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.foreground}>
        <Input placeholder={"user@organization.com"} type={"email"} label={"Email"} onChange={(e:any) => setEmail(e.target.value)}/>
        <Input placeholder={"**********"} type={"password"} label={"Password"} onChange={(e:any) => setPassword(e.target.value)} onKeyDown={handleKeyPress}/>
        <Link href={"/accounts/forgot-password"}>Forgot Password?</Link>
        <Button label={"Submit"} onClick={handleSubmit}/>
      </div>
      {/* <div className={styles.background}></div> */}
    </main>
  )
}
