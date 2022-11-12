import React from 'react'
import Navbar from '../../Components/Navbar/navbar'
import Hero from "../../Components/Hero/hero"
import Jobsearch from '../../Components/JobSearch/jobsearch'
import Featured from '../../Components/Featured/featured'


function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Jobsearch />
        <Featured />
    </div>
  )
}

export default Home