import React from "react";
import Loginimage from "../../../assets/loginimagee.svg";
import { FcGoogle } from "react-icons/fc";

function Signup() {
  return (
    <div>
      <div className="w-full flex flex-col md:flex md:flex-row gap-y-10 h-screen">
        
        <div className="md:w-[60%] w-full flex flex-col justify-center items-center">
          <div className="flex justify-center flex-col items-center w-[90%] md:w-[55%] md:max-w-[600px]">
            <div className="flex flex-col justify-center items-center gap-y-3">
              <h1 className="md:block hidden">Sign Up as an employee</h1>
              <p className="flex items-center text-[#979797] text-sm gap-x-1">
                Create account with{" "}
                <FcGoogle className=" border-[#979797] border rounded-[50%]" />{" "}
              </p>
              <p className="text-[#979797]">----OR----</p>
            </div>

              <form
                action=""
                className="flex flex-col justify-center items-center w-[100%] gap-y-5"
              >
                <div className="w-full">
                  <label htmlFor=""> Name</label>
                  <div className="border border-[#979797] w-full items-center justify-between px-4 py-2">
                    <input
                      type="text"
                      placeholder="Enter your Full Name"
                      className=" placeholder:text-[#979797] w-full text-[#979797] font-medium  outline-none cursor-pointer bg-transparent"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label htmlFor="">Email</label>
                  <div className="border border-[#979797] w-full items-center justify-between px-4 py-2">
                    <input
                      type="text"
                      placeholder="Enter your Email Address"
                      className=" placeholder:text-[#979797] w-full text-[#979797] font-medium  outline-none cursor-pointer bg-transparent"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label htmlFor="">Password</label>
                  <div className="border border-[#979797] w-full items-center justify-between px-4 py-2">
                    <input
                      type="text"
                      placeholder="Enter your Password"
                      className=" placeholder:text-[#979797] w-full text-[#979797] font-medium  outline-none cursor-pointer bg-transparent"
                    />
                  </div>
                </div>               
                  <button className="mt-5 bg-black md:w-full md:max-w-[260px] w-[80%] py-2 rounded-[30px] text-white text-sm md:text-[20px]">
                    Register
                  </button>
                  <button className="md:hidden block border border-black md:w-full md:max-w-[260px] w-[80%] py-2 rounded-[30px] text-black text-sm md:text-[20px]">
            Sign Up as an Employee
          </button>
                <p className="text-[#979797] text-[12px]">
                  Already have an account?
                  <span className="text-[#FF811D]"> Login</span>{" "}
                </p>
              </form>
          </div>
        </div>

        <div className="bg-black flex flex-col md:w-[40%] w-full justify-center items-center gap-x-10 py-10">
          <h1 className="text-white font-medium italic text-lg md:text-[36px]">
            Need a Job?
          </h1>
          <img src={Loginimage} alt="" srcset="" className="w-[200px] md:w-[80%]"/>
          <p className="md:text-[20px]  text-sm text-white w-full max-w-[200px] md:max-w-[290px] md:pt-6 md:pb-5 text-center">
            Sign up as an employee to get a job
          </p>
          <button className="hidden md:block border border-white w-full max-w-[260px] py-2 rounded-[30px] text-white text-[20px]">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
