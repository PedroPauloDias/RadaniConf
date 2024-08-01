import React, { useState } from 'react';
import Image from 'next/image';
import CustomSkeleton from '../skeleton';
import Slider from '../../components/Slider/Slider';
import {SwiperSlide } from 'swiper/react';




export default function ImageCard({ imagens, loading }) {
  const [imagemPrincipal, setImagemPrincipal] = useState(imagens[0]);
  const [currentIndex, setCurrentIndex] = useState(0);


  const settings = {
    spaceBetween: 1,
    slidesPerView: 3,
    pagination: {
      clickable: true,
    }
  };
  

  if (loading) {
    return <CustomSkeleton />;
  }

  return (
    < >
      <div >
        <div>
          <Image
            src={imagemPrincipal}
            alt="Imagem Principal"
            width={500}
            height={300}
            className="w-auto h-auto rounded-md md:w-[98%] lg:rounded-md"
             loading="lazy"
          />
        </div>
      </div>

      <Slider      
      settings={settings}     
 
      >
            {imagens.map((imagem, index) => (
              <SwiperSlide key={index} virtualIndex={index}
                className='max-w-sm'
                
              >    
            <button 
              key={index}
                  className={`cursor-pointer m-1 
              w-full flex items-center justify-center p-8 
                  `}
              onClick={() => {
                setImagemPrincipal(imagem);
                setCurrentIndex(index);
              }}
            >
              <Image
                src={imagem}
                alt={`Thumbnail ${index + 1}`}
                width={100}
                height={60}
                 loading="lazy"
                className={`object-cover rounded-md border-2 min-w-20 ${index === currentIndex ? 'border-[#85adb5]' : 'border-transparent'}`}
              />
                </button>
                </SwiperSlide>    
            ))}
          </Slider>
    
      {/* <div className="absolute left-1 right-[270] bottom-8 flex -translate-y-1/2 transform justify-between">
          <button onClick={handlePrev} className=" bg-opacity-60 border-none min-h-2 h-8 w-8">❮</button>
          <button onClick={handleNext} className="btn btn-circle bg-opacity-60 border-none min-h-2 h-8 w-8">❯</button>
        </div> */}


    </>
  );
}
