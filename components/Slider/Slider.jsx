import { Swiper, SwiperSlide } from 'swiper/react';

import { A11y, Pagination, Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './Slider.module.css'




export default function Slider({ children, settings }) {

  
  return (
    <Swiper
    modules={[ Pagination, A11y]}

    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    {...settings}
     className={styles.swiper}>
      {children}
    </Swiper>
  )
}




