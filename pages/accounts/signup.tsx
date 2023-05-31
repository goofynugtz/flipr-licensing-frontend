import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '@/context/AuthContext'
import styles from './accounts.module.css'
import "@/app/globals.css"
import Input from "@/components/input"
import Button from "@/components/button"
import toast from 'react-hot-toast';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Signup() {
  const authContext = useContext(AuthContext)

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [organization, setOrganization] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://licensing.sr.flipr.ai/accounts/signup/', {
        name, email, password, organization, phone, address,
      });

      if ((res.status === 208)) {
        toast.error('Already exists');
      } else if ((res.status === 201) || (res.status === 200)) {
        toast.success('A verification email has been sent.')
        router.push('/verify')
      }
    } catch (error) {
      toast.error('Something went wrong')
    }
  };

  useEffect(() => {
    try {
      const accToken = localStorage.getItem('access');
      const refToken = localStorage.getItem('refresh');
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
        <Input
          placeholder={"Name"}
          type={"text"}
          label={"Name"}
          onChange={(e: any) => setName(e.target.value)}
        />
        <Input
          placeholder={"user@organization.com"}
          type={"email"} label={"Email"}
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <Input
          placeholder={"**********"}
          type={"password"} label={"Password"}
          onChange={(e: any) => setPassword(e.target.value)}
        />
        <Input
          placeholder={"Company"}
          type={"text"} label={"Organization"}
          onChange={(e: any) => setOrganization(e.target.value)}
        />
        <Input
          placeholder={"+91 456789432"}
          type={"phone"} label={"Mobile"}
          onChange={(e: any) => setPhone(e.target.value)}
        />
        <Input
          placeholder={"404, Random Street, That City, This Country"}
          type={"text"} label={"Address"}
          onChange={(e: any) => setAddress(e.target.value)}
        />
        <Button label={"Submit"} />
      </div>
      {/* <div className={styles.background}></div> */}
    </main>
  )
}

