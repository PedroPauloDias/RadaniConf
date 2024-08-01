import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaSquareFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

import logo from '../../public/logoRadani.png'

export const Footer = () => {
  return (
    <footer className=" flex flex-col items-center justify-center py-3  ">
      <div className="w-full   items-center justify-around bg-foreground p-8  ">
        <div className='text-foreground-50 sm:flex justify-center items-center '>
          <div className='hidden sm:block '>
            <Image alt="Logo" src={logo} width={300} height={300} />
          </div>
          <div className=' text-foreground-50 text-sm'>
            <p>Rua João rosa de oliveira, 59</p>
            <p>Porangaba-SP </p>
            <p>Cep: 18.260-000</p>
            <p>Telefone: (15) 3257-1286</p>
            <p>CNPJ: 96.201.785/0001-30</p>
          </div>

          <div className=' sm:flex sm:flex-col sm:mx-6 '>
            <h2 className='text-foreground-50 mt-4 sm:hidden'>Redes Sociais</h2>
            <div className='flex gap-2 ' >
              <p><FaSquareFacebook size={20} /></p>
              <p><FaInstagram size={20} /></p>
              <p><BsTwitterX size={20} /></p>
            </div>
          </div>
        </div>

      </div>
 


        <div className='w-full flex  flex-row items-center justify-center gap-2 text-xs'>
          <span className="text-default-600 ">Desenvolvido por </span>
          <p className="text-default-500 ">Pedro Dias</p>
          <p className="text-default-600">@ Todos os direitos reservados</p>
        </div>
    </footer>
  )
}
