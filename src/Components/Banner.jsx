import React from "react";
import image from "../assets/slider2.png";
import image1 from "../assets/platform.png";
const Banner = () => {
  return (
    <div className="flex items-center h-[300px] justify-center relative ">
      <div className="absolute inset-2 z-10 top-28 text-white">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
          الموظف الذكي
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg">
          Smart Employee Platform
        </p>
      </div>
      <div className="relative">
        <img
          src={image}
          alt="Background"
          className="shadow-sm h-[300px] object-cover w-full rounded-md"
        />

        <img
          src={image1}
          width={200}
          alt="Floating Icon"
          className="absolute top-[76%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
};

export default Banner;
