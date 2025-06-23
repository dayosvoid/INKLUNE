import React, { useEffect } from 'react'
import { useState } from 'react'
import AppLogo from '../assets/dayo imgs/assets/nav_icon/Frame 2.png'
import Searchbar from '../assets/dayo imgs/assets/nav_icon/stash_search-solid.png'
import WriteIcon from '../assets/dayo imgs/assets/nav_icon/hugeicons_quill-write-02.png'
// import NotifyBell from '../assets/nav_icon/notification bell.png'
import ProfileImg from '../assets/dayo imgs/assets/image/Frame 3.png'
import { Menu,X,Bell } from 'lucide-react';
import { Link } from 'react-router-dom'
import NavMenu from './NavMenu'


const Nav = () => {
    // dropdown menu 
    const [menu,setMenu] = useState(false)
    const dropMenu =()=>{
       setMenu(!menu)
    }
    // to stop screen from scrolling when dropdown shows
    useEffect(()=>{
     document.body.style.overflow = menu ? 'hidden' : 'auto';
    },[menu])
  return (
    <div className='backdrop-blur-lg border-b-2 fixed border-gray-200 shadow-md w-full z-3 lg:px-[100px] '>
        <div className='container mx-auto w-11/12  flex items-center'>
            {/* the nav bar */}
            <nav className='w-full min-w-[300px] max-w-[1440px] flex justify-between items-center lg:py-[15px]  '>
                {/* left section */}
                <div className='flex gap-[24px] items-center'>
                    <Link to='/Home2'><span className='size-20 sm:w-[110px] md:w-[125px] flex items-center cursor-pointer'><img src={AppLogo} alt="logo" className='' /></span></Link>

                    {/* the search bar */}
                    <div>
                        <form action="" className='hidden md:flex outline-2 outline-gray-300 gap-[2px] items-center py-[3px] pl-[10px] md:min-w-[250px] lg:h-[44px] lg:min-w-[380px] rounded-full inset-shadow-sm inset-shadow-gray-500/20'>
                            <button className=''><img src={Searchbar} alt="" className='size-[20px] cursor-pointer'/></button>
                            <input type="text" placeholder='Search Stories' id='search' className='outline-none pr-3 text-gray-900 text-[13px] font-semibold ' />
                        </form>
                    </div>
                </div>


                {/* right section */}
                <div className='relative'>
                
                    <div className='flex items-center md:hidden gap-[12px]'>

                        <button onClick={dropMenu}>
                        {menu?<X/>:<Menu/>}
                        </button>

                        <span>
                            <button><img src={ProfileImg} alt="" className='md:size-[40px] size-[35px]' /></button>
                        </span>
                        

                    </div>
                    {/* {
                        menu && <div className=' absolute z-10 right-0 top-15 left-[-170px] md:hidden'><NavMenu/></div>
                    } */}

                    <div className='hidden md:flex gap-[20px] items-center'>
                        <span className='cursor-pointer'>
                           <Link to="/Post"> <button className='flex gap-1 cursor-pointer'> <img src={WriteIcon} alt="" className='size-[24px] inline'/> <p className='hover:font-bold'>Write</p> </button></Link>
                        </span>

                        
                        <span className='w-[20%] relative cursor-pointer'>
                            <button className='flex cursor-pointer'><Bell className=''/></button>
                            <span className='absolute opacity-0 pt-7 hover:opacity-100 left-[-10px] top-0 text-[10px] font-100 text-nowrap'><span className='bg-[#c5c4c5] text-gray-800 rounded-3xl px-2 py-[2px]'>No Notif...</span></span>
                        </span>

                        <span>
                            <Link to="/Profile"><button className='cursor-pointer' ><img src={ProfileImg} alt="" className='size-[20px] md:size-[40px]' /></button></Link>
                        </span>
                    </div>
                </div>
            </nav>
        </div>
         {
                menu && <div className=' fixed z-10 bg-white min-w-full top-20 md:hidden'><NavMenu/></div>
            }
    </div>
  )
}

export default Nav