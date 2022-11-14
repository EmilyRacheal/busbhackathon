import React from "react";
import { MdOutlineAdd } from "react-icons/md";
import ProfileImage from "../../../assets/man.png";
import { AiOutlineHeart } from "react-icons/ai";
import Employersmaincard from "../employersmaincard/employersmaincard";
import { employerData } from "../../../EmployersData/employerData";

function Emplyoercard() {
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
          <p className="text-[#979797] text-xs">
            Recommendations are based on your profile
          </p>
        </div>

        <div className="flex flex-wrap justify-between mb-5 gap-y-7">
        {employerData.map((items) => ( 
            <div className="">
            <Employersmaincard
            img={items.img}
            name={items.name}
            title={items.title}
            icon={items.icon}
            body={items.body}
          />
            </div>
         
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default Emplyoercard;
