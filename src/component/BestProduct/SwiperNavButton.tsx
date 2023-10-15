import React from 'react';
import { useSwiper } from 'swiper/react';
import { BsArrowLeft , BsArrowRight} from "react-icons/bs";
import "./styles.css"
export const SwiperNavButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="swiper-nav-btns text-center  ">
      <div className='flex justify- gap-4'>
      <button className='bg-[#ff1d25b0] ' onClick={() => swiper.slidePrev()}><BsArrowLeft className='text-white '></BsArrowLeft></button>
      <button className='bg-[#ff1d25b0] ' onClick={() => swiper.slideNext()}><BsArrowRight className='text-white '></BsArrowRight></button>
      </div>
    </div>
  );
};
