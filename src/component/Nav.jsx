import React from 'react'
import logo from '../assets/joseph imgs/assets/Inklune logo.png'
import { Search } from 'lucide-react'
import write from '../assets/joseph imgs/assets/write.png'
import bell from '../assets/joseph imgs/assets/notification bell.png'
import profile from '../assets/joseph imgs/assets/profile id.png'
import { Link } from 'react-router-dom'
// import '../style sheet/nav.css'
// import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <div className='w-full'>
      <div id='nav' className='w-full border border-t-0 border-l-0 border-r-0 border-gray-300 py-3 md:py-4 z-1'>
      <div className='w-[95%] md:w-11/12 container mx-auto flex items-center justify-between my-auto'>
        <div className='flex lg:w-[30%] md:w-[50%] gap-3'>
          <Link to='/Home2'><span><img className='w-[50%] md:w-[100%] lg:w-[90%] md:pt-2' src={logo} alt="" /></span></Link>
          <div className='relative hidden md:block md:pt-2 lg:pt-3'>
            <Search size={15} className='lg:size-5 absolute lg:left-2 md:left-5 md:top-3 lg:top-4 text-gray-400'/>
            <input className='bg-gray-200 rounded-2xl pl-8 outline-none lg:py-[2px]' type="text" placeholder='    search stories' />
          </div>
        </div>
        <div className='flex md:w-[30%] lg:w-[20%]'>
         <Link to="/post"><span className='hidden md:block'><img className='w-[50%] pt-2' src={write} alt="" /></span></Link>
          <span><img className='w-[60%] md:w-[50%] pt-2' src={bell} alt="" /></span>
         <Link to="/Profile"><span><img className='w-[60%]' src={profile} alt="" /></span></Link>
        </div>
      </div>
    </div>
      <div className='w-[95%] md:w-11/12 container mx-auto flex gap-2 md:gap-4 lg:gap-6 my-auto pt-10 md:pt-8 lg:pt-10 text-sm md:text-md lg:text-[15px]'>
        {/* //<Link to='/Landing'> */}
        <Link to="/"><button className='text-white rounded bg-purple-500 px-2 py-1 hover:transform-[scale(1.1)]'>Home</button></Link>
        {/* </Link> */}
        {/* <Link className='my-auto' to='/Following'> */}
        <Link to="/following"><button className='hover:text-purple-500 hover:transform-[scale(1.1)]'>Following</button></Link>
        {/* </Link> */}
        <button>Popular</button>
        <button>Recommended</button>
      </div>
    </div>
  )
}

export default Nav