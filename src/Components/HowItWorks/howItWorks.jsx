import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import {BsBuilding} from "react-icons/bs"
import {CiMoneyBill} from "react-icons/ci"
import {HiCursorClick} from "react-icons/hi"

function HowItWorks() {
  return (
    <div className='w-full flex justify-center items-center py-7'>
        <div className='w-11/12'>
        <h1 className='text-transparent text-center text-[50px] bg-clip-text bg-gradient-to-r from-[#FFC965] to-[#FF811D]'>How it works!</h1>
        <div className='flex justify-between'>
            <div className='flex flex-col justify-center items-center py-5 gap-y-3 bg-gradient-to-r rounded-[30px] from-[#FFA945] to-[#FF811D] w-full max-w-[250px]'>
                <AiOutlineSearch size={70} color={"#ffffff"}/>
                <p className='text-[20px] text-white'>Find the right job</p>
            </div>
            <div className='flex flex-col justify-center items-center py-5 gap-y-3 bg-gradient-to-r rounded-[30px] from-[#FFA945] to-[#FF811D] w-full max-w-[250px]'>
                <BsBuilding size={70} color={"#ffffff"}/>
                <p className='text-[20px] text-white'>Research Companies</p>
            </div>
            <div className='flex flex-col justify-center items-center py-5 gap-y-3 bg-gradient-to-r rounded-[30px] from-[#FFA945] to-[#FF811D] w-full max-w-[250px]'>
                <CiMoneyBill size={70} color={"#ffffff"}/>
                <p className='text-[20px] text-white'>Compare Salaries</p>
            </div> <div className='flex flex-col justify-center items-center py-5 gap-y-3 bg-gradient-to-r rounded-[30px] from-[#FFA945] to-[#FF811D] w-full max-w-[250px]'>
                <HiCursorClick size={70} color={"#ffffff"}/>
                <p className='text-[20px] text-white'>Apply</p>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default HowItWorks