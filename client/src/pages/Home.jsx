import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import JobListing from '../components/JobListing'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='mx-4'>
        <Hero />
        <JobListing />
      </div>
    </div>
  )
}

export default Home
