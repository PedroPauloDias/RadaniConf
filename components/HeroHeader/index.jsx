import React from 'react'
import Image from 'next/image'
import banner1 from '../../public/banner1.png'
import banner2 from '../../public/banner2.jpeg'
import banner3 from '../../public/banner3.jpeg'
import banner4 from '../../public/banner4.jpeg'

import CustomCarousel from './../carousel/index';


export default function HeroHeader() {
  return (
    <div>
      <CustomCarousel>   
        <div className=" w-full  flex items-center justify-center text-white">
          <Image src={banner1} alt="Descrição da imagem" width={1800} height={600} className='rounded-md ' />
        </div>
        <div className=" w-full  flex items-center justify-center text-white">
          <Image src={banner2} alt="Descrição da imagem" width={1800} height={600} className='rounded-md ' />
        </div>
        <div className=" w-full  flex items-center justify-center text-white">
          <Image src={banner3} alt="Descrição da imagem" width={1800} height={600} className='rounded-md ' />
        </div>
        <div className=" w-full  flex items-center justify-center text-white">
          <Image src={banner4} alt="Descrição da imagem" width={1800} height={600} className='rounded-md ' />
        </div>
      </CustomCarousel>


    </div>
  )
}
