import React from 'react'
import styles from "./hero.module.css"
import Lady from "../../assets/lady.png"
import Girl from "../../assets/girl.png"
import Arrow from "../../assets/Arrow.png"

function Hero() {
  return (
    <div className='w-full flex justify-center'>
        <div className='flex w-11/12 relative mt-10'>
            <div>
            <img src={Lady} alt="" srcset="" />
            </div>
            <div className='absolute left-[35%] top-[60%]'>
                <img src={Arrow} alt="" srcset="" />
            </div>
            <div className='w-full text-[20px] flex items-center max-w-[175px] absolute left-[11%] top-[21%] py-1 bg-[#0F0F0F] text-white h-full max-h-[60px] px-2 '>
                <p>Need a Job? I am here for you</p>
            </div>
            <div className='w-full text-[20px] flex items-center max-w-[175px] absolute right-[15%] top-[100%] z-[2] py-1 bg-[#FF811D] text-white h-full max-h-[60px] px-2 '>
                <p>Need a Worker? I am available</p>
            </div>
            <div className='w-[100px] h-[100px] rounded-[50%] bg-[#0F0F0F] absolute left-[13%] top-[80%]'/>
            <div className='w-[162px] h-[162px] rounded-[50%] bg-gradient-to-r from-[#FFA945] to-[#FF811D] absolute left-[22%] top-[90%]'/>
            <div className='w-[100px] h-[100px] rounded-[50%] bg-gradient-to-r from-[#FFA945] to-[#FF811D] absolute right-[1%] top-[30%] z-[2]'/>

            <div className='ml-[40px]'>
                <h1 className='w-full max-w-[600px] font-bold text-transparent text-[50px] bg-clip-text bg-gradient-to-r from-[#FFC965] to-[#FF811D]'>Discover the right Jobs / Workers for you.</h1>
            </div>
            <div className='absolute right-[0px] top-[30%]'>
                <img className='' src={Girl} alt="" srcset="" />
            </div>
        </div>
    </div>
  )
}

export default Hero