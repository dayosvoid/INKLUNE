import React from 'react'
import { CirclePlus } from 'lucide-react';
import { Link } from 'react-router-dom'
import Nav from '../component/Nav dayo';

const Post = () => {
  const handleSubmit = (e) => {
      e.preventDefault()
  }
  return (
    <div>
      <Nav/>
      <div className='container mx-auto w-11/12 flex flex-col items-center justify-center pt-25 min-h-screen px-2'>
          <div className='w-[90%] mt-4 md:w-[100%]'>
            <p className='text-start text-xs font-light text-gray-400 md:text-start'>Draft in Bibian...</p>
          </div>
          <form onSubmit={handleSubmit} className='w-[90%] my-2 md:w-[100%]'>
            {/* Title */}
              <input type="text" placeholder='Title' className='block my-2 w-full h-[80px] p-2 border rounded bg-white text-gray-400 font-bold text-2xl tracking-wide' />
            {/* subtitle */}
              <div className='relative'>
                  <input type="text" id='subtitle' placeholder='Add subtitle' className='block my-2 w-full h-[20px] p-3 rounded border text-xs font-thin bg-white text-gray-500 px-5'/>
                  <label htmlFor='subtitle' className='absolute top-0.25 left-1.5 opacity-50 hover:cursor-pointer'><CirclePlus width={10}/></label>
              </div>
            {/* image */}
              {/* <div className='relative'>
                    <input type="file" placeholder='Add images, Video, links...' className='block my-2 w-full h-[20px] p-3 rounded border text-xs font-thin bg-white text-gray-500 px-5'/>
                    <label className='absolute top-0.25 left-1.5 opacity-50 hover:cursor-pointer'><CirclePlus width={10}/></label>
                  </div> */}
                  {/* <div className='relative border h-[20px] p-3 rounded  '>
                      <input type="file" id='file' className='invisible  block my-2 w-full h-[20px] p-3 rounded border text-xs font-thin bg-white text-gray-500 px-5'/>
                      <div  className='absolute top-0.25 left-1.5 opacity-50 '>
                        <label type='file' for="file" className='flex gap-1 hover:cursor-pointer'><CirclePlus width={10} /><p className='text-sm text-gray-500 font-thin'>Add images, Video, links...</p></label>
                      </div>
                  </div> */}
                <div className="relative">
                    <input type="file"  id="file-upload" className="block my-2 w-full h-[20px] p-3 rounded border text-xs font-thin bg-white text-gray-500 px-5 invisible absolute"/>
                    <label htmlFor="file-upload" className="inline-flex items-center gap-1 px-2 p-3 rounded border text-xs font-thin bg-white text-gray-500 hover:cursor-pointer w-full h-[20px]"><CirclePlus width={10}/> <span className='text-gray-500'>Add images, Video, links...</span></label>
                </div>
            {/* text area */}
                <textarea placeholder='Tell your story' className='block mt-1 w-full h-[250px] rounded border p-2 text-xs font-thin bg-white text-gray-500'></textarea>
            {/* category */}
                <input type="text" placeholder='Add category' className='block my-2 w-[40%] h-[20px] p-3 rounded border text-xs font-thin bg-white text-gray-500'/>
            {/* Tag */}
                <input type="text" placeholder='Add Tags' className='block mt-2 w-[40%] h-[20px] p-3 rounded border text-xs font-thin bg-white text-gray-500'/>
            {/* buttons */}
                <div className='flex items-center justify-center gap-2 md:gap-4 mt-4 md:mt-8'>
                    <Link to="/preview" className='text-white text-center bg-black p-1 md:p-2 w-[50%] md:w-[25%] rounded text-xs font-thin'><button>Preview</button></Link>
                    <Link to="/publish" className='text-white text-center bg-purple-500 p-1 md:p-2 w-[50%] md:w-[25%] rounded text-xs font-thin'><button>Publish</button></Link>
                </div>
          </form>
      </div>
    </div>
  )
}

export default Post