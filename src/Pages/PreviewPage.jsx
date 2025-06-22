import React from 'react'
import image2 from '../assets/dabo imgs/assets/heroImage.jpg'
import { CirclePlus } from 'lucide-react';
import { Link } from 'react-router-dom'

const PreviewPage = () => {
    const handleSubmit = (e) => {
      e.preventDefault()
  }
  return (
    <div className='container mx-auto w-11/12 flex flex-col items-center justify-center min-h-screen md:px-2'>
        <div className='w-[90%] mt-4 md:w-[100%]'>
          <p className='text-start text-xs font-light text-gray-400'>Saved in Bibian...</p>
        </div>
        <form onSubmit={handleSubmit} className='w-[90%] my-2 md:w-[100%]'>
           <div className='border my-2 rounded p-2 md:p-4'>
              <h1 className='text-xl font-semibold md:text-4xl mb-4'>Tom’s Redemption</h1>
              <p className='text-start text-xs font-light text-gray-400'>A Story of Pain, Secrets, and the Long Road to Healing</p>
              <h3 className='text-xs font-semibold md:text-sm'>By Bibian Okoro</h3>
           </div>
           <span><img src={image2} className='my-4 md:h-[280px] md:w-[100%] rounded'/></span>
           <div className='border my-2 rounded p-2 md:p-4'>
              <h3 className='text-base md:text-2xl font-medium text-gray-500 mb-3 md:mb-4'>
              The Perfect Lie</h3>
              <p className='text-start text-xs md:text-lg font-light md:font-normal text-gray-400'>From the outside, the Ajayi family was flawless.</p>
              <p className='text-start text-xs md:text-lg font-light md:font-normal text-gray-400'>A mansion with golden gates. A father whose suits cost more than a teacher’s salary.</p>
              <p className='text-start text-xs md:text-lg font-light md:font-normal text-gray-400'>A mother so elegant, she turned heads at every PTA meeting.</p>
              <p className='text-start text-xs md:text-lg font-light md:font-normal text-gray-400'>And Tomiwa a.k.a Tomy to friends and loved ones, the adored only son, living a dream life most boys envied.</p>
              <p className='text-start text-xs md:text-lg font-normal text-gray-400 mt-3 md:mt-4'>But behind the polished front door, chaos brewed.</p>
           </div>
           <div className='relative mt-6'>
              <input type="text" id="Add-category" placeholder='Add category' className='block my-2 w-[50%] md:w-[40%] h-[10px] p-3 rounded border text-xs font-thin bg-white text-gray-500 px-5'/>
              <label htmlFor="Add-category" className='absolute top-0.25 left-1.5 opacity-50 hover:cursor-pointer'><CirclePlus width={10}/></label>
           </div>
           <div className='relative'>
              <input type="text" id="Add-tags" placeholder='Add Tags' className='block w-[50%] md:w-[40%] h-[10px] p-3 rounded border text-xs font-thin bg-white text-gray-500 px-5'/>
              <label htmlFor="Add-tags" className='absolute top-0.25 left-1.5 opacity-50 hover:cursor-pointer'><CirclePlus width={10}/></label>
           </div>
           <div className='items-start my-6 md:my-10'>
              <Link to="/publish"><button className='text-white text-center bg-black p-1 md:p-2 w-[50%] md:w-[25%] rounded text-xs font-thin'>Preview</button></Link>
           </div>
        </form>
    </div>
  )
}

export default PreviewPage