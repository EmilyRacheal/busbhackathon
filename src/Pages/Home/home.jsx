import React from 'react'
import Navbar from '../../Components/Navbar/navbar'
// import Hero from "../../Components/Hero/hero"
import Jobsearch from '../../Components/JobSearch/jobsearch'
import Featured from '../../Components/Featured/featured'
import HeroPage from "../../Components/HeroPage/index"
import HowItWorks from '../../Components/HowItWorks/howItWorks'

function Home() {
  return (
    <div>
        <Navbar />
        <HeroPage />
        <Jobsearch />
        <HowItWorks />
        <Featured />
    </div>
  )
}

export default Home