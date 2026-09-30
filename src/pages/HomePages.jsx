import React from 'react'
import Hero from "../componentes/Hero"
import HomeCards from "../componentes/HomeCards"
import JobListings from "../componentes/JobListings"
import ViewAllJobs from "../componentes/ViewAllJobs"

const HomePages = () => {
  return (
    <>
        <Hero/>
        <HomeCards/>
        <JobListings isHome={true}/>
        <ViewAllJobs/>
    </>
  )
}

export default HomePages
