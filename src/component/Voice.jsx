import React from 'react'
import { Link } from 'react-router-dom'

const Voice = () =>{
  return (
    <div className='w-full bg-purple-500' >
      {/* Voice Section */}
      <div className='container mx-auto w-11/12'>
        <div className=" px-4 sm:px-6">
          <div className=' p-3 sm:p-6 md:p-6 lg:p-8 text-center'>
            <h1 className='text-[28px] sm:text-3xl md:text-[28px] font-semibold text-white mb-4 sm:mb-6'>
              Ready to Share Your Voice?
            </h1>
            <p className='text-white text-[16px] sm:text-base md:text-[16px] max-w-2xl mx-auto mb-4 sm:mb-6'>
              Join a community of thoughtful writers and readers who value authentic connection and meaningful conversation.
            </p>
            <div className='flex flex-col sm:flex-row justify-center gap-3 sm:gap-4'>
              <Link to='/signUp'><button className='px-6 cursor-pointer sm:px-8 sm:py-3 bg-white text-color font-medium rounded-lg hover:bg-gray-100 transition-colors'>
                Create Account
              </button></Link>
              <button className='px-6 cursor-pointer py-2 sm:px-8 sm:py-3 bg-transparent border-1 border-white text-white font-medium rounded-lg hover:bg-white hover:text-purple-500 transition-colors'>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Voice