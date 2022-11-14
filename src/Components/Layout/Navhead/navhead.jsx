import React from 'react'
import {CgAdd} from "react-icons/cg"
import {CgToolbox} from "react-icons/cg"

function Navhead() {
  return (
    <div className='flex justify-center items-center w-full flex-col gap-y-4 pb-7'>
        <h3 className='text-[#FF811D] text-[25px]'>Hello!, what would like to do today?</h3>
        <div className='flex gap-x-6'>
            <div className='flex items-center gap-x-2'>
            <CgAdd color='#FF811D' size={35}/>
            <p className='text-[20px]'>Post Jobs</p>
            </div>

            <div className='flex items-center gap-x-2'>
                <CgToolbox color='#FF811D' size={35}/>
                <p className='text-[20px]'>Check out Job Seekers</p>
            </div>
        </div>
        <div className='border border-b-0 border-[#979797] w-[80%]'/>
    </div>
  )
}

export default Navhead