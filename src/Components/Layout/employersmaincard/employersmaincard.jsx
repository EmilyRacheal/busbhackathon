import React from 'react'
import ProfileImage from "../../../assets/man.png"
import {AiOutlineHeart} from "react-icons/ai"

function Employersmaincard({img, name, title, icon, body}) {
  return (
    <div>
        <div className='w-full max-w-[250px] py-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-white-500 duration-300  bg-white shadow-2xl hover:shadow-xl rounded-lg'>
            <div className='flex flex-col '>
                <img src={img} alt="" srcset="" />
                <div className='px-5 py-3'>
                <h1 className='font-semibold'>{name}</h1>
                <div className='flex items-center gap-x-4 pb-2'>
                <h3 className='text-sm font-medium'>{title}</h3>
                {icon}
                </div>
                <p className='text-xs '>{body}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Employersmaincard