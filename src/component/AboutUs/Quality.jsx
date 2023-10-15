import { shoe8 } from '../../assets/images';
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react';
const Quality = () => {
    useEffect(()=> {
        AOS.init({duration: "1000"})
    })
    return (
        <div className='w-[80%] mx-auto mt-28'>
            <section
                className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
                <div className='flex flex-1 flex-col' data-aos="fade-right">
                    <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
                        We Provide You
                        <span className='text-coral-red'> Super </span>
                        <span className='text-coral-red'> Quality </span> Shoes
                    </h2>
                    <p className='mt-5 lg:max-w-lg info-text'>
                        Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
                    </p>
                    <p className='mt-5 lg:max-w-lg info-text'>
                        Our dedication to detail and excellence ensures your satisfaction
                    </p>
                    <div className='mt-12'>
                        <button className="flex text-2xl  justify-center items-center gap-4 bg-[#ff1d25b0] px-4 py-2 rounded-full text-white">
                            Learn more
                        </button>
                    </div>
                </div>

                <div className='flex-1 flex justify-center items-center' data-aos="fade-left">
                    <img
                        src={shoe8}
                        alt="products details"
                        width={570}
                        height={522}
                        className='object-contain'
                    />
                </div>
            </section>
        </div>
    );
};

export default Quality;