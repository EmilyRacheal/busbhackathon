import React from "react";
import { MdOutlineAdd } from "react-icons/md";

function Employeebody() {
  return (
    <div className="w-full flex justify-center py-6">
      <div className="flex flex-col w-[70%] border border-emerald-400 px-7 py-10">
        <div className="flex items-center gap-x-2 justify-end">
          <h1 className="font-medium text-[18px]">Add Jobs</h1>
          <MdOutlineAdd
            color="#FF811D"
            className="bg-[#FF811D80] rounded-[50%]"
          />
        </div>
        <div>
          <h1 className="text-transparent font-bold text-[20px] bg-clip-text bg-gradient-to-r from-[#FFA945] to-[#FF811D]">
            Explore Job Seekers Near You
          </h1>
        </div>

        <div className="flex">
          <div className="flex items-center flex-col mt-7">
            <div className="border border-l-0 border-t-0 border-b-0 border-[#979797] h-[70%]" />
            <p className="text-gray-300">|</p>
            <div className="border border-l-0 border-t-0 border-b-0 border-[#979797] h-[70%]" />
            <div className="border border-l-0 border-t-0 border-b-0 border-[#979797] h-[70%]" />
            <p className="text-gray-300">|</p>
            <div className="border border-l-0 border-t-0 border-b-0 border-[#979797] h-[70%]" />
          </div>


          <div className="px-10 w-full">
            <form action="" className="flex flex-col gap-y-5">
              <div>
                <label htmlFor="">Job Title</label>
                <div className="w-full border border-gray-400">
                  <input
                    type="text"
                    placeholder="Program Manager"
                    className="outline-none cursor-pointer bg-transparent w-full px-3"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="">Job Description</label>
                <textarea name="" id="" cols="30" rows="3" className="border border-[#979797] outline-none p-3"></textarea>
              </div>
              <div>
                <label htmlFor="">Job Requirments</label>
                <div className="w-full border border-gray-400">
                  <input
                    type="text"
                    placeholder="Program Manager"
                    className="outline-none cursor-pointer bg-transparent w-full px-3"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="">Amount</label>
                <div className="w-full border border-gray-400">
                  <input
                    type="text"
                    placeholder="NGN 100"
                    className="outline-none cursor-pointer bg-transparent w-full px-3"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="">Deadline</label>
                <div className="w-full border border-gray-400">
                  <input
                    type="text"
                    placeholder="24 / 04 / 2022"
                    className="outline-none cursor-pointer bg-transparent w-full px-3"
                  />
                </div>
              </div>
              <div className="w-full flex justify-center">
              <button className="mt-5 flex justify-center items-center bg-black md:w-full md:max-w-[400px] w-[80%] py-3 rounded-[30px] text-white text-sm md:text-[20px]">
                    Add
                  </button>
              </div>
              
            </form>
          </div>


          <div className="flex items-center flex-col mt-7">
            <div className="border border-r-0 border-t-0 border-b-0 border-[#979797] h-[70%]" />
            <p className="text-gray-300">|</p>
            <div className="border border-r-0 border-t-0 border-b-0 border-[#979797] h-[70%]" />
            <div className="border border-r-0 border-t-0 border-b-0 border-[#979797] h-[70%]" />
            <p className="text-gray-300">|</p>
            <div className="border border-r-0 border-t-0 border-b-0 border-[#979797] h-[70%]" />
          </div>
          <div>
            <div />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employeebody;
