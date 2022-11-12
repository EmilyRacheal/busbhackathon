import React from 'react'
import Man from "../../assets/man.png"

function Featurecard({ img, name, title, body }) {
  return (
    <div className='py-7'>
        <div className=' transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-white-500 duration-300    bg-white shadow-2xl hover:shadow-xl rounded-lg overflow-hidden  w-full max-w-[270px]'>
            <div>
                <img src={img} alt="" srcset="" />
            </div>
            <div className='flex flex-col gap-y-1 px-5 mb-2'>
                <h4 className=' font-bold mt-2'>{name}</h4>
                <h5 className='text-sm font-medium'>{title}</h5>
                <p className='text-xs'>{body}</p>
            </div>
        </div>
    </div>
  )
}

export default Featurecard