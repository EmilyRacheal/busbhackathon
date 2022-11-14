import React from 'react'
import Navbar from '../../Components/Navbar/navbar'
// import Hero from "../../Components/Hero/hero"
import Jobsearch from '../../Components/JobSearch/jobsearch'
import Featured from '../../Components/Featured/featured'
import HeroPage from "../../Components/HeroPage/index"
import HowItWorks from '../../Components/HowItWorks/howItWorks'
import Explore from "../../Components/Explore/explore"
import Signup from '../Auth/signup/signup'

function Home() {
  return (
    <div>
      <Signup />
        {/* <Navbar />
        <HeroPage />
        <Jobsearch />
        <HowItWorks />
        <Featured />
        <Explore/> */}
    </div>
  )
}

export default Home