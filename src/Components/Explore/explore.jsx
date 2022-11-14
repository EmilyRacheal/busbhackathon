import React from "react";

function Explore() {
  return (
    <div>
      <div>
        <h1>Explore More Jobs</h1>
      </div>
      <div className=" py-7 flex justify-center bg-gradient-to-r from-[#FFA945] to-[#FF811D] w-full">
        <div className="w-full justify-center items-center flex flex-col">
          <h2 className="text-white text-[20px] pb-5">Subscribe for job notifications</h2>
          <div className=" flex w-11/12 gap-x-5 justify-center">
            <div className="border border-gray-500 w-[50%] sm:flex items-center hidden justify-between px-4 backdrop-blur-lg bg-gradient-to-b from-white/60 to-white/30 border-none py-2">
              <input
                type="text"
                placeholder="Enter your Email"
                className=" placeholder:text-white w-full text-white font-bold  outline-none cursor-pointer bg-transparent"
              />
              {/* <AiOutlineSearch size={20} color={"#ffffff"} /> */}
            </div>
            <button className="bg-[#0F0F0F] text-white rounded-[32px] w-full max-w-[200px]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
