import React from 'react'
// import { Link } from 'react-router'
import { useState } from 'react'
import SortFunction from '../context/SortFunction'
import { useContext } from 'react'
import Blog from './Blog'
import Likedblog from './Likedblog'

const Directory = () => {
    const [blog, setBlog] = useState(false)
  const {togglePopular,toggleLatest} = useContext(SortFunction)
  const [button,setButton] = useState(true)

  const toggleToTrue=()=>{
        setBlog(true)
     }
     const toggleToFalse=()=>{
        setBlog(false)
     }
  // const [button2,setButton2] = useState(false)
  const yourButtons=()=>{
    setButton(true)
     toggleToFalse()}

  const LikedButtons=()=>{
    setButton(false)
     toggleToTrue()}


  // to toggle color for latest and popular and also carry out the function
    const [button2,setButton2] = useState(false)

    const popularButton=(callback)=>{
    setButton2(true);
    togglePopular()//from sortFunction
    }

    

    const lastestButton=()=>{
    setButton2(false)
     toggleLatest()
    }

    // 
     
    
    
  


  return (
    <div>
        <div className='flex justify-between text-[16px] px-2  '>
            {/* left  */}
            <div className='flex gap-[16px] '>
              {/* <Link to='/yourblogs'> */}
                <button onClick={yourButtons} ><h2 style={{color: button ? 'hsl(256,90%,68%)' : 'black' }} className='font-medium hover:font-bold cursor-pointer'>Your blogs</h2></button>
              {/* </Link> */}

              {/* <Link to='/likedblog'> */}
                 <button onClick={LikedButtons}><h2 style={{color: button ? 'black' : 'hsl(256,90%,68%)' }} className='font-medium  hover:font-bold cursor-pointer'>Liked blogs</h2></button>
              {/* </Link> */}
            </div>
            {/* right */}
            <div className='flex gap-[16px] '>
              <button onClick={lastestButton}><h2 style={{color: button2 ? 'black' : 'hsl(256,90%,68%)' }}   className='font-medium hover:font-bold cursor-pointer '>Latest</h2></button>
              <button onClick={popularButton}><h2 style={{color: button2 ? 'hsl(256,90%,68%)' : 'black' }}   className='font-medium hover:font-bold cursor-pointer'>Popular</h2></button>
            </div>
        </div>
         {!blog && <Blog/>}
        {blog && <Likedblog/>}
    </div>
  )
}

export default Directory