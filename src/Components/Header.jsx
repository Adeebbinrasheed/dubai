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
import Select from "react-select";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
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

  const customStyles = {
    control: (base) => ({
      ...base,
      backgroundColor: "rgba(0, 0, 0, 0.35)", // Black with opacity
      border: "none",
      color: "#fff",
      boxShadow: "none", // No shadow
    }),
    singleValue: (base) => ({
      ...base,
      color: "#fff",
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "rgba(0, 0, 0, 0.35)",
      color: "#fff",
      margin: 0, // Remove the gap
    }),
    option: (base, { isFocused }) => ({
      ...base,
      backgroundColor: isFocused ? "rgba(255, 255, 255, 0.1)" : "transparent", // Slight highlight on hover
      color: "#fff", // White text
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "#fff", // White arrow
      padding: "8px", // Adjust spacing
    }),
    indicatorSeparator: () => ({
      display: "none", // Remove the line
    }),
  };

  // const CustomOption = ({ data, innerRef, innerProps }) => {
  //   return (
  //     <div
  //       ref={innerRef}
  //       {...innerProps}
  //       className="p-2 flex flex-col cursor-pointer hover:bg-gray-100"
  //     >
  //       <span className="font-bold text-sm">{data.title}</span>
  //       <span className="text-xs text-gray-500">{data.subtitle}</span>
  //     </div>
  //   );
  // };
  return (
    <div className="fixed z-20 top-0 left-0 right-0 flex justify-between px-10 md:px-14  items-center p-4 text-white ">
      <div>
        <img src={logo} alt="" className="w-20 h-8 md:w-24 md:h-10" />
      </div>
      <div className="hidden md:flex gap-5 items-center justify-center ">
        <div className="flex gap-5 justify-center items-center">
          <button className="p-2  px-2 bg-[#0d9f6e] rounded-lg">
            <CiSearch />
          </button>
          <button className="p-2  px-2 bg-[#0d9f6e] rounded-lg">
            <BiCalendarAlt />
          </button>
          <button className="p-2  px-2 bg-[#0d9f6e] rounded-lg">
            <BiHandicap />
          </button>
          <button className="p-2  px-2 bg-[#0d9f6e] rounded-lg">
            <CiCircleQuestion />
          </button>
          <button className="p-2  px-2 bg-[#0d9f6e] rounded-lg">
            <BsFullscreen />
          </button>
        </div>
        <div className="p-4 max-w-sm mx-auto">
          <Select
            options={options}
            getOptionLabel={(e) => (
              <div className="flex flex-col">
                <span>{e.title}</span>
                <span className="text-sm text-gray-500">{e.subtitle}</span>
              </div>
            )}
            styles={customStyles}
          />
        </div>
        <div className="">
          <button className="p-3 bg-[#0d9f6e] rounded-lg ">mm</button>
          <button>
            <FaRegUser />
          </button>
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
        {open ? <IoMdClose /> : <IoIosMenu />}
      </button>
      {open && (
        <div className="absolute top-full left-0 w-full h-screen bg-[#015848] text-black flex flex-col  items-center pt-20 space-y-10 py-5 md:hidden">
          <div className="flex gap-5 justify-center items-center">
            <button className="p-2  px-2 bg-[#0d9f6e] rounded-lg">
              <CiSearch />
            </button>
            <button className="p-2  px-2 bg-[#0d9f6e] rounded-lg">
              <BiCalendarAlt />
            </button>
            <button className="p-2  px-2 bg-[#0d9f6e] rounded-lg">
              <BiHandicap />
            </button>
            <button className="p-2  px-2 bg-[#0d9f6e] rounded-lg">
              <CiCircleQuestion />
            </button>
            <button className="p-2  px-2 bg-[#0d9f6e] rounded-lg">
              <BsFullscreen />
            </button>
          </div>
          <div className="p-4 max-w-sm mx-auto">
            <Select
              options={options}
              getOptionLabel={(e) => (
                <div className="flex flex-col">
                  <span>{e.title}</span>
                  <span className="text-sm text-gray-500">{e.subtitle}</span>
                </div>
              )}
              styles={customStyles}
            />
          </div>
          <div className="">
            <button className="p-3 bg-[#0d9f6e] rounded-lg ">mm</button>
            <button>
              <FaRegUser />
            </button>
          </div>
          <div className="flex justify-center items-center p-1 gap-2 ">
            <div>
              <h1 className="font-light">أديب</h1>
              <h1 className="font-semibold">ديفلبر</h1>
            </div>
            <img src={dp} alt="" className="w-11 h-11 rounded-full border-2" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
