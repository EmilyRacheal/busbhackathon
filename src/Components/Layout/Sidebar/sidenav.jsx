import React from 'react'
import Userimage from "../../../assets/man.png"
import {SlNote} from "react-icons/sl"
import {MdOutlineAdd} from "react-icons/md"

function Sidenav() {
  return (
    <div  className='p-4 w-[100%] max-w-[400px] shadow-lg'>
        <div className='flex flex-col gap-y-5 w-full justify-center items-center'>
        <div className='w-[100%] max-w-[300px] border py-10 border-gray-400 flex flex-col justify-center items-center'>
                <img src={Userimage} className="w-[100px] h-[100px] rounded-[50%]" alt="" srcset="" />
            <div className='flex items-center gap-x-2'>
                <h2 className='text-[#0F0F0F] text-[18px]'>Luke Alton</h2>
                <SlNote color='#FF811D'/>
            </div>
            <div className='flex items-center gap-x-2'>
            <p className='text-[#0F0F0F] text-[13px]'>Add a Company Name</p>
            <MdOutlineAdd color='#FF811D' className='bg-[#FF811D80] rounded-[50%]'/>
            </div>
        </div>


        <div className='w-[100%] max-w-[300px] border py-5 border-gray-400 flex flex-col justify-center items-center'>
            <div className='flex-col flex gap-y-2 px-5'>
                <h1 className='text-center text-[#FFA945] text-[20px] font-semibold'>Posted Jobs</h1>
                <h3 className='text-center font-medium text-[16px]'>Program Manager at Lutech</h3>
                <p className='text-[13px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent  </p>
            </div>
            <div className='border border-b-0 border-[#979797] w-[90%] my-5'/>
            <div className='px-5'>
            <p className='text-[13px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent  </p>

            </div>
        </div>
        </div>

    </div>
  )
}

export default Sidenav