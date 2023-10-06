import "./Banner.css";
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import { Outlet } from "react-router-dom";

const Banner = () => {

    const {bannerTitle} = useContext(AuthContext);

    return (
        <div className="lg:h-[calc(100vh-104px)] grid lg:grid-cols-5 grid-cols-1 place-items-center h-auto lg:gap-10 gap-10">
            <div className="col-span-2">
                <h1 className="md:text-8xl text-6xl bebas-font text-white">{bannerTitle}</h1>

                <p className="text-white leading-loose md:text-base text-sm">
                    Cox&apos;s Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...
                </p>

                <div className='mt-10'>
                    <button id="banner-btn" className="bg-[#F9A51A] px-10 py-3 font-semibold rounded-md flex justify-center items-center gap-3">Booking <AiOutlineArrowRight className='font-bold text-black text-lg'></AiOutlineArrowRight></button>
                </div>
            </div>

            <div id="banner-slider" className="col-span-3 relative">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Banner;