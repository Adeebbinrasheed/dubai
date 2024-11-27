import React, { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { MdClose, MdSearch } from "react-icons/md";
import { RiListSettingsFill } from "react-icons/ri";

function Middle() {
  const details = [
    "#149c60",
    "#4c809c",
    "#f56262",
    "#6f706d",
    "#149c60",
    "#4c809c",
    "#f56262",
    "#6f706d",
    "#149c60",
    "#4c809c",
    "#f56262",
    "#6f706d",
    "#149c60",
    "#4c809c",
    "#f56262",
    "#6f706d",
    "#149c60",
    "#4c809c",
    "#f56262",
    "#6f706d",
    "#149c60",
    "#4c809c",
    "#f56262",
    "#6f706d",
    "#149c60",
    "#4c809c",
    "#f56262",
    "#6f706d",
    "#149c60",
    "#4c809c",
    "#149c60",
    "#4c809c",
    "#f56262",
  ];

  const [height, setHeight] = useState(230);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setHeight(isExpanded ? 230 : 500);
    setIsExpanded(!isExpanded);
  };
  return (
    <div>
      <div className="w-full h-80 flex justify-between">
        <div className="h-80 w-96 bg-green-600 rounded-3xl"></div>
        <div
          className="w-[70%] bg-white rounded-3xl"
          style={{ height: `${height}px`, overflow: "hidden" }}
        >
          <div className=" h-10 mt-5 flex justify-between">
            <div className="flex w-fit bg-gray-200 h-9 rounded-md items-center mr-5">
              <MdSearch className="text-2xl text-gray-500" />
              <input
                type="text"
                placeholder="يبحث"
                className="rounded-md h-9 bg-gray-200 mr-3 outline-none"
              />
            </div>
            <div className="flex gap-3 items-center ml-5">
              <button className="bg-gray-200 rounded w-8 h-8 flex justify-center items-center">
                <RiListSettingsFill className="text-[26px] text-gray-600" />
              </button>
              <button
                className="bg-gray-200 rounded  w-8 h-8 flex justify-center items-center"
                onClick={handleClick}
              >
                {isExpanded ? (
                  <div className="w-8 h-8 bg-green-800 rounded flex justify-center items-center">
                    <MdClose className="text-[22px]  text-white" />
                  </div>
                ) : (
                  <CgMenuGridO className="text-[30px]  text-gray-600" />
                )}
              </button>
            </div>
          </div>

          <div className="flex flex-wrap mr-8 mt-9 gap-[32px] ">
            {details.map((data) => (
              <div>
                <div className="w-14 h-14 rounded-xl" style={{backgroundColor:`${data}`}}></div>
                <div className="text-[10px] max-w-14 mt-2 text-center">
                  اربك تكست هو اول موقع لزواره
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Middle;
