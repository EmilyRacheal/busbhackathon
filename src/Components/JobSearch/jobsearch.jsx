import React from 'react'
import {AiOutlineSearch} from "react-icons/ai"

function Jobsearch() {
  return (
    <div className='mt-[170px] py-7 flex justify-center bg-gradient-to-r from-[#FFA945] to-[#FF811D] w-full'>
        <div className=' flex w-11/12 gap-x-5'>
        <div className="border border-gray-500 w-[80%] sm:flex items-center hidden justify-between px-4 backdrop-blur-lg bg-gradient-to-b from-white/60 to-white/30 border-none py-2">
            <input type="text" placeholder="Search" className=" placeholder:text-white w-full text-white font-bold  outline-none cursor-pointer bg-transparent" />
            <AiOutlineSearch size={20} color={'#ffffff'}/>
          </div>
            <button className='bg-[#0F0F0F] text-white rounded-[32px] w-full max-w-[200px]'>Search</button>
        </div>
    </div>
  )
}

export default Jobsearch