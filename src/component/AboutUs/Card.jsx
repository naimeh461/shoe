import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
const Card = ({ imgURL, label, subtext }) => {
    useEffect(()=> {
        AOS.init({duration: "1000"})
    })
    return (
        <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-12 mt-20 shadow-2xl' data-aos="zoom-in">
          <div className='w-11 h-11 flex justify-center items-center bg-coral-red rounded-full bg-[#ff1d25b0] '>
            <img src={imgURL} alt={label} width={24} height={24} />
          </div>
          <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold'>
            {label}
          </h3>
          <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>
            {subtext}
          </p>
        </div>
      );
};

export default Card;