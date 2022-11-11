import React from 'react'
import Navbar from '../../Components/Navbar/navbar'
import Hero from "../../Components/Hero/hero"
import Jobsearch from '../../Components/JobSearch/jobsearch'

function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Jobsearch />
    </div>
  )
}

export default Home