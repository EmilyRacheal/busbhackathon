import React from 'react'
import {AiOutlineHeart} from "react-icons/ai"
import {MdLocationOn} from "react-icons/md"


function Featurecard({ img, name, title, body }) {
  return (
    <div className='py-7'>
        <div className=' transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-white-500 duration-300    bg-white shadow-2xl hover:shadow-xl rounded-lg overflow-hidden  w-full max-w-[400px]'>
            <div className='px-5 py-4 '>

            <div className='flex justify-between items-center'>
                <h4 className=' text-[#979797]'>{name}</h4>
                <AiOutlineHeart />
            </div>
            <div className='flex flex-col gap-y-1  mb-2'>
                <h5 className='text-sm font-medium py-[8px]'>{title}</h5>
                <div className='flex gap-x-3 items-center'>
                  <MdLocationOn color='#979797'/>
                  <p className='text-[#979797] text-sm'>Aba</p>
                </div>
                {/* <p className='text-xs'>{body}</p> */}
            </div>
            </div>
        </div>
    </div>
  )
}

export default Featurecard