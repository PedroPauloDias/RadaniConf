'use client'
import React from 'react';
import Image from 'next/image';
import Banner from '../../public/banner3.jpeg';
import LoginForm from "../../components/LoginForm"

export default function LoginPage() {

  return (
    <>
      <div className=' flex items-center justify-center p-4'>

        <Image
          src={Banner}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className=''
        />
        <div className='absolute inset-0 bg-black bg-opacity-50  '>

        </div>
        <LoginForm />
      </div>
    </>
  );
}
