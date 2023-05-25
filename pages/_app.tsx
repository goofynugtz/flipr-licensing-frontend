import '@/app/globals.css'
import type { AppProps } from 'next/app'
import { AuthContext, defaultState } from '@/context/AuthContext'
import { useState } from 'react'

// import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
  const [isAuth, setIsAuth] = useState(defaultState.isAuth)

  return (
    <>
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
      <Component {...pageProps}/>
    </AuthContext.Provider>
    {/* <Analytics /> */}
    </>
  )
}

export default MyApp