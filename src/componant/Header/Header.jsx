import React, { useEffect } from "react";
import hero from "../../assets/hero.jpg";
import LoginPopUp from "../LoginPopUp/LoginPopUp";

const Header = () => {
   
  return (
    <section
      className="relative w-[95%] rounded-3xl py-16 px-4 sm:px-6 mt-[80px] 
                 h-[50vh] sm:h-[75vh] md:h-[90vh] my-[30px] mx-auto text-left md:mt-[100px]  
                lg:min-h-[80vh] bg-no-repeat bg-center bg-cover bg-blend-overlay lg:mt-[80px] "
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/30 rounded-3xl"></div>

      {/* Text Content */}

      <div className="relative z-10 flex flex-col sm:min640-text-2xl items-start gap-3 sm:gap-6 md:gap-[1.5vw] 
                      w-full sm:w-3/4 md:w-1/2 
                      bottom-6 sm:bottom-12 sm:px-0 sm:my-20 md:bottom-[10%] 
                      left-4 sm:left-6 md:left-[6vw] px-2  ">
        <h1 className="text-2xl   w-full  sm:text-3xl sm:mt-[50px]  md:text-4xl md:mt-[40px] lg:text-5xl xl:text-6xl xl:mt-20 font-extrabold text-pink-600 drop-shadow-lg 
              2xl:text-7xl">
          Elegant Handloom Sarees
        </h1>

        <p className="text-sm sm:text-base md:text-xl text-white mt-2 sm:mt-4 max-w-full sm:max-w-xl md:max-w-2xl xl:text-2xl  2xl:text-w-2xl drop-shadow">
          Discover the timeless beauty of handcrafted sarees, woven with tradition and love.
        </p>

        <button className="mt-3  sm:mt-4  w-auto sm bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700 xl:w-[200px] ">
          View More
        </button>
      </div>
    </section>
  );
};

export default Header;
