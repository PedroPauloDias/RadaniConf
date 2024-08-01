import React, { useState } from 'react'
import { ImWhatsapp } from "react-icons/im";
import { Tooltip, Button } from "@nextui-org/react";


export default function WhatsAppButton() {



  return (
    <div className='  '>
      <Tooltip
        content="Contato WhatsApp"
        closeDelay={50}
        placement="top-center"
        className="text-[#fff] bg-[#85adb5] dark:text-[#fff] dark:bg-[#ff9100ce] ">
        <button className='rounded-full w-fit text-white bg-green-500 motion-safe:animate-bounce " focus:animate-none hover:animate-none  text-md  p-2 left-24  tracking-wide '>
          <a href=" https://wa.me/55015997303095?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!" target='_blank'>
            <ImWhatsapp size={25} />
          </a>
        </button>
      </Tooltip>
    </div>
  )
}