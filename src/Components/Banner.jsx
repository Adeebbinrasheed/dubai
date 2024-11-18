import React from "react";
import image from "../assets/slider2.png";
import image1 from "../assets/platform.png";
const Banner = () => {
  return (
    <div className="flex items-center h-[300px] justify-center relative ">
      <div className="absolute inset-2 z-20 top-28 text-white">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
          الموظف الذكي
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg">
          Smart Employee Platform
        </p>
      </div>
      <div className="fixed ">
        <img src={image} alt="" className="shadow-sm h-[300px] object-cover " />

        <img
          src={image1}
          width={200}
          alt=""
          className="absolute  top-32 right-[204px]"
        />
      </div>
    </div>
  );
};

export default Banner;
