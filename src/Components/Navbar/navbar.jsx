import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function Navbar() {
  return (
    <div className="w-full">
      <div className="border shadow-sm border-none py-2 w-full flex justify-center">
        <div className="flex justify-between items-center w-11/12 ">
          <div className="flex items-center gap-x-20">
            <h1 className="text-[#FF811D] text-[24px] font-semibold">BUSB</h1>
            <ul className="flex gap-x-10 text-[#0F0F0F] text-[17px]">
              <li>Home</li>
              <li>Login</li>
              <li>Register</li>
            </ul>
          </div>
          <div className="border border-gray-500 w-[40%] flex items-center justify-between px-4">
            <input type="text" placeholder="Search" className="outline-none"/>
            <AiOutlineSearch />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
