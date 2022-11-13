import React from 'react'
import Navbar from '../../Components/Navbar/navbar'
// import Hero from "../../Components/Hero/hero"
import Jobsearch from '../../Components/JobSearch/jobsearch'
import Featured from '../../Components/Featured/featured'
import HeroPage from "../../Components/HeroPage/index"

function Home() {
  return (
    <div>
        <Navbar />
        <HeroPage />
        <Jobsearch />
        <Featured />
    </div>
  )
}

export default Home