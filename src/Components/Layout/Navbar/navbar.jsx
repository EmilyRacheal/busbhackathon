import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { HiOutlineUserCircle } from "react-icons/hi"
import { useState } from "react";

function Navbar() {
  const menuRef = useRef();
  const [mobileView, setMobileView] = useState(false);

  const handleShowMobile = () => {
    setMobileView(!mobileView);
    menuRef.current.style.display = mobileView ? "none" : "flex";
  };
  return (
    <div>
      <div className="border shadow-sm border-none py-2 w-full flex justify-center">
        <div className="flex justify-between items-center w-11/12 ">
          <div className="flex items-start w-full sm:w-[unset] sm:items-center flex-col sm:flex-row gap-x-20">
            <div className="w-full flex justify-between items-center">
              <h1 className="text-[#FF811D] text-[24px] px-[3%] sm:px-0 cursor-pointer font-semibold">
                BUSB
              </h1>

              <BiMenu
                className="flex sm:hidden"
                size={25}
                onClick={handleShowMobile}
              />
            </div>
          </div>


          <div className="flex items-center gap-x-[15px]">
          <div className=" sm:flex items-center hidden bg-[#FFFAF0] justify-between py-[7px] px-4">
            <input
              type="text"
              placeholder="Search"
              className="outline-none cursor-pointer bg-[#FFFAF0]"
            />
            <AiOutlineSearch size={22} />
          </div>
          <button className="bg-black py-[10px] px-[25px] rounded-[30px] text-white text-sm md:text-[17px]">
            Register
          </button>

          <HiOutlineUserCircle size={30} color="#0F0F0F50" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
