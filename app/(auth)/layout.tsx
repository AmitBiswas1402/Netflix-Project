import Image from 'next/image'
import React, { ReactNode } from 'react'
import BGImg from '../../public/login_background.jpg'
import Logo from '../../public/netflix_logo.svg'

export default function layout({children}: {children: ReactNode}) {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
        <Image src={BGImg} alt='logo' 
            className="hidden sm:flex sm:object-cover -z-10 brightness-50"
            priority
            fill
        />

        <Image
            src={Logo}
            alt="Logo"
            width={120}
            height={120}
            priority
            className="absolute left-4 top-4 object-contain md:left-10 md:top-6"
        />
        
        {children}
    </div>
  )
}