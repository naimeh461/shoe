import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { products } from "../../utilities/utilities";
import { SwiperNavButtons } from "./SwiperNavButton";
import { star } from "../../assets/icons";
const BestProduct = () => {
    return (
        <div className="py-[120px] w-[80%] mx-auto">
            <p className=" text-[40px]  md:px-0 text-center  lg:text-left  font-montserrat lg:ml-10 xl:ml-8 -mb-16 "><span className="text-[#ff1d25b0]">Best Recommendation</span> for you</p>
            <div className="max-w-7xl mx-auto ">
            </div>
            <Swiper
                spaceBetween={30}
                slidesPerView={4}
                breakpoints={{
                    240: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                className="py-6"
            >
                {products.map((item) => (
                    <SwiperSlide key={item.id} className="group relative mt-20 ">
                        <div
                            className='flex flex-1 flex-col w-full max-sm:w-full'
                        >
                            <img
                                src={item?.imgURL}
                                alt={item?.name}
                                className='w-[290px] h-[290px]' />
                            <div
                                className='mt-8 flex justify-start gap-2.5'>
                                <img
                                    src={star}
                                    alt="rating icon"
                                    width={24} height={24} />
                                <p className='font-sans text-xl leading-normal text-slate-gray'>
                                    {item?.rating}
                                </p>
                            </div>
                            <div>
                                <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
                                    {item?.name}
                                </h3>
                                <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>
                                    {item?.price}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="hidden  lg:flex absolute -top-0  right-10 z-30 ">
                    <SwiperNavButtons></SwiperNavButtons>
                </div>
                <div className="lg:hidden flex justify-center">
                    <SwiperNavButtons></SwiperNavButtons>
                </div>
            </Swiper>
        </div>
    );
};

export default BestProduct;
