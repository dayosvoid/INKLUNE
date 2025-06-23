import React from 'react'
import { useState } from 'react'
import logo from '../assets/joseph imgs/Inklune logo.png'
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';
import { Search } from 'lucide-react';
// import '../style sheet/nav.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    // function to toggle between mobile and desktop view
    const changeView = () => {
        if(!isOpen){
            setIsOpen(true)
        }
        else{
            setIsOpen(false)
        }
    }
  return (
   <div id='nav' className='backdrop-blur-lg w-full border-b-2 shadow-sm border-gray-200 text-sm md:text-[13px] lg:text-lg py-5 z-1'>
        <div className='w-11/12 container mx-auto text-gray-500 flex justify-between gap-4'>
            <div className='md:w-[50%] flex items-center justify-start gap-3 lg:gap-7 text-[12px]'>
                <img className='w-[70px] md:w-[110px] lg:w-[140px]' src={logo} alt="" />
                <span className='flex gap-3 items-center pt-1'>
                    <p className='hidden md:block text-center'>Home</p>
                    <a href="#explore"><p className='hidden md:block'>Explore</p></a>
                    <a href="#category"><p className='hidden md:block'>Categories</p></a>
                    <a href="#community"><p className='hidden md:block'>Communities</p></a>
                </span>
                
            </div>
            <div className='hidden md:flex relative w-[50%] justify-end my-auto gap-4 md:w-[50%]'>
                <div className='flex items-center gap-1 border-2 border-gray-200 bg-gray-100 px-2 rounded-full'>
                    <Search className='size-[15px] lg:size-5  text-gray-400'/>
                    <input className='outline-none py-[2px] md:py-0' type="text" placeholder='search stories' />
                </div>
                <div className='flex gap-2'>
                    <Link to="/signIn"><button className='text-black cursor-pointer hover:text-white hover:bg-purple-300 border px-1 py-1 rounded-md border-purple-500'>Sign In</button></Link>
                    <Link to="/signUp"><button className='text-white cursor-pointer  hover:bg-purple-300 bg-purple-500 rounded-md py-1 px-1'>Sign Up</button></Link>
                </div>
            </div>
            <button onClick={changeView} className='block md:hidden'>{isOpen? <X/> : <Menu/>}</button>
        </div>
        {isOpen && <div className='flex flex-col text-center md:hidden py-3 gap-1 transition-[transform 30s ease-in]'>
                    <div className='relative'>
                        <Search size={15} className='text-gray-500 absolute left-25 top-1'/>
                        <input className='border border-gray-400 outline-none bg-gray-200 rounded-md w-[80%] text-center' type="text" placeholder='search stories'/>
                    </div>
                    <h1>Home</h1>
                    <h1>Explore</h1>
                    <h1>Categories</h1>
                    <h1>Communities</h1>
                    <Link to="/SignIn"><button className='border cursor-pointer border-purple-500 hover:bg-purple-500 hover:text-white w-[80%] mx-auto'>Sign In</button></Link>
                    <Link to="/SignUp"><button className='bg-purple-500 cursor-pointer text-white w-[80%] mx-auto'>Sign Up</button></Link>
                </div>}
   </div>
  )
}

export default Navbar