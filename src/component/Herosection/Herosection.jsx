import { useEffect, useState } from "react";
import { shoes,  } from "../../utilities/utilities";
import Navbar from "./Navbar";
import ShoeCard from "./ShoeCard";
import { bigShoe3 } from "../../assets/images";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import AOS from "aos"
import "aos/dist/aos.css"

const Herosection = () => {
    const [bigShoeImg, setBigShoeImg] = useState(bigShoe3)
    useEffect(()=> {
        AOS.init({duration: "1000"})
    })
    return (
        <div className="h-screen bg-[#eceeff] ">
            <Navbar></Navbar>
            <section
                className="w-[80%] mt-28 mx-auto flex xl:flex-row justify-center items-center gap-10"
            >
                <div className="relative xl:w-2/5 flex flex-col justify-center item-start w-full max-xl:padding-x" data-aos="fade-right">
                   
                    <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
                        <span className="xl:whitespace-nowrap z-10 pr-10">
                            The <span className="text-[#ff1d25b0]">New Arrival</span> <br /> Shoes
                        </span>
                        <p className="font-montserrat text-slate-gray leading-8 mt-6 mb-8 sm:max-w-sm text-gray-500 text-sm">
                        Explore Elegance, Revel in Unmatched Comfort, and the Embrace Innovation for an Exceptional Active Lifestyle
                        </p>
                        <button className="flex text-3xl  justify-center items-center gap-4 bg-[#ff1d25b0] px-4 py-1 rounded-full text-white">
                            Shop now
                            <BsFillArrowRightCircleFill />
                        </button>
                    </h1>
                </div>
                <div className="flex">
                    <div>
                        <img
                            src={bigShoeImg}
                            alt="bigShoeimage1"
                            width={610}
                            height={500}
                            className="object-contain relative z-10 "
                        />
                    </div>
                    <div className="" data-aos="fade-left">
                        {shoes.map((shoe) => (
                            <div key={shoe}>
                                <ShoeCard
                                    imgURL={shoe}
                                    changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                                    bigShoeImg={bigShoeImg}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Herosection;