import React from 'react'
import { assets } from '../assets/assets'

const JobCard = ({ job }) => {
  return (
    <div className='border p-6 shadow rounded hover:bg-gray-500/10 transition-all duration-300'>
      <div className='flex items-center justify-between'>
        <img className='h-8' src={assets.company_icon} alt="" />
      </div>
      <h4 className='font-medium text-xl mt-2'>{job.title}</h4>
      <div className='flex items-center gap-3 mt-2 text-xs'>
        <span className='bg-blue-50 border border-green-200 px-4 py-1.5 rounded'>{job.location}</span>
        <span className='bg-pink-50 border border-pink-200 px-4 py-1.5 rounded'>{job.level}</span>
      </div>
      <p className='text-gray-500 text-sm mt-4' dangerouslySetInnerHTML={{__html:job.description.slice(0, 100)}}></p>
      <div className='mt-4 flex gap-4 text-sm'>
        <button className='bg-green-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-green-800 transition-all duration-300'>Apply now</button>
        <button className='text-gray-500 border border-gray-500 rounded px-4 py-2 cursor-pointer hover:text-gray-800 transition-all duration-300'>Learn More</button>
      </div>
    </div>
  )
}

export default JobCard
