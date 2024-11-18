import React, { useState } from "react";
import dp from "../assets/dp.png";
import logo from "../assets/dp-logo.png";
import { CiSearch } from "react-icons/ci";
import { BsFullscreen } from "react-icons/bs";
import { CiCircleQuestion } from "react-icons/ci";
import { BiHandicap } from "react-icons/bi";
import { BiCalendarAlt } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { IoIosMenu, IoMdClose } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open,setOpen]=useState(false)
  const handleClick=()=>{
    setOpen(!open)
  }
  const options = [
    {
      title: "ksjjkjsdjs",
      subtitle: "jsdnjk",
    },
    {
      title: "Another Option",
      subtitle: "Additional Info",
    },
  ];
  return (
    <div className="fixed z-20 top-0 left-0 right-0 flex justify-between px-10 md:px-14  items-center p-4 text-white ">
      <div>
        <img src={logo} alt=""  className="w-20 h-8 md:w-24 md:h-10" />
      </div>
      <div className="hidden md:flex gap-5 items-center justify-center ">
        <div className="flex gap-5 justify-center items-center">
          <button className="p-2  px-2 bg-[#0d9f6e] rounded-lg"><CiSearch /></button>
          <button className="p-2  px-2 bg-[#0d9f6e] rounded-lg"><BiCalendarAlt /></button>
          <button className="p-2  px-2 bg-[#0d9f6e] rounded-lg"><BiHandicap /></button>
          <button className="p-2  px-2 bg-[#0d9f6e] rounded-lg"><CiCircleQuestion /></button>
          <button className="p-2  px-2 bg-[#0d9f6e] rounded-lg"><BsFullscreen /></button>
        </div>
        <div className="relative w-64">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full bg-black text-white opacity-35 py-2 px-4 rounded-md"
          >
            Select an option
          </button>
          {isOpen && (
            <div className="absolute mt-2 w-full  border rounded-md shadow-lg">
              {options.map((option, index) => (
                <div
                  key={index}
                  className="flex flex-col p-4 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setIsOpen(false);
                    console.log("Selected:", option);
                  }}
                >
                  <h1 className="text-lg font-semibold">{option.title}</h1>
                  <h2 className="text-sm text-gray-500">{option.subtitle}</h2>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="">
          <button className="p-3 bg-[#0d9f6e] rounded-lg ">mm</button>
          <button><FaRegUser /></button>
        </div>
        <div className="flex justify-center items-center p-1 gap-2 ">
          <div>
            <h1 className="font-light">أديب</h1>
            <h1 className="font-semibold">ديفلبر</h1>
          </div>
          <img src={dp} alt="" className="w-11 h-11 rounded-full border-2" />
        </div>
      </div>
      <button onClick={handleClick} className="text-3xl block md:hidden">
        {
          open ? <IoMdClose /> :<IoIosMenu />

        }

      </button>
    </div>
  );
};

export default Header;
