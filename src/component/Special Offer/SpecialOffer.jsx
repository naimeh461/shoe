import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { offer } from '../../assets/images'
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'

function SpecialOffer() {
    useEffect(()=> {
        AOS.init({duration: "1000"})
    })
    return (
        <section
            className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container w-[80%] mx-auto mt-20'
        >
            <div  data-aos="fade-right">
                <img src={offer} alt="offer" width={773} height={687} className='object-contain w-full' />
            </div>
            <div className='flex flex-1 flex-col'  data-aos="fade-left">
                <h2 className='text-4xl font-palanquin font-bold'>
                    <span className='text-coral-red'>Special </span>
                    Offer
                </h2>
                <p className='mt-4 info-text text-gray-500 text-base'>
                    Embark on a shopping journey that redefines your experience with
                    unbeatable deals. From premier selections to incredible savings, we
                    offer unparalleled value that sets us apart.
                </p>
                <p className='mt-6 info-text text-gray-500 text-base'>
                    Navigate a realm of possibilities designed to fulfill your unique
                    desires, surpassing the loftiest expectations. Your journey with us is
                    nothing short of exceptional.
                </p>
                <div className='mt-11 flex flex-wrap gap-4'>
                    <button className="flex text-2xl  justify-center items-center gap-4 bg-[#ff1d25b0] px-4 py-2 rounded-full text-white">
                        Shop now
                        <BsFillArrowRightCircleFill />
                    </button>
                    <button className="flex text-2xl  justify-center items-center gap-4 bg-[#ff1d25b0] px-4 py-2 rounded-full text-white">
                        Learn more
                    </button>
                </div>
            </div>
        </section>
    )
}

export default SpecialOffer