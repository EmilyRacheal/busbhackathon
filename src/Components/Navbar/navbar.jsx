import React, { useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";

function Navbar() {
  const menuRef = useRef();
  const [mobileView, setMobileView] = useState(false);

  const handleShowMobile = () => {
    setMobileView(!mobileView);
    menuRef.current.style.display = mobileView ? "none" : "flex";
  };

  return (
    <div className="w-full">
      <div className="border shadow-sm border-none py-2 w-full flex justify-center">
        <div className="flex justify-between items-center w-11/12 ">
          <div className="flex items-start w-full sm:w-[unset] sm:items-center flex-col sm:flex-row gap-x-20">
            <div className="w-full flex justify-between items-center">
              <h1 className="text-[#FF811D] text-[24px] px-[3%] sm:px-0 font-semibold">
                BUSB
              </h1>

              <BiMenu
                className="flex sm:hidden"
                size={25}
                onClick={handleShowMobile}
              />
            </div>

            <ul
              ref={menuRef}
              className="sm:flex hidden mt-4 sm:mt-0 gap-x-10 text-[#0F0F0F] px-[3%] sm:px-0 text-[17px] sm:flex-row flex-col"
            >
              <li>Home</li>
              <li className="my-1 sm:my-0">Login</li>
              <li>Register</li>

              <li className="border my-2 sm:hidden border-gray-500 w-full flex items-center justify-between px-4">
                <input
                  type="text"
                  placeholder="Search"
                  className="outline-none"
                />
                <AiOutlineSearch />
              </li>
            </ul>
          </div>
          <div className="border border-gray-500 w-[40%] sm:flex items-center hidden justify-between px-4">
            <input type="text" placeholder="Search" className="outline-none" />
            <AiOutlineSearch />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
