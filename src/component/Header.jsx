import React, {useState} from 'react'
import logoimg from '../assets/Frame 2.png'
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { NotebookPen } from 'lucide-react';
import { Bell } from 'lucide-react';
import navimg from "../assets/black woman.jpg"
import { Menu } from 'lucide-react';
import { Settings } from 'lucide-react';
import { LogOut } from 'lucide-react';
import { X } from 'lucide-react';





const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  return (
   
    <div>

        <nav className='w-full lg:w-full  float-left fixed flex md:gap-110 lg:flex lg:justify-between items-center bg-[#FFFFFF1A] shadow-md lg:px-30 px-5 py-5 md:w-full border-b-2 border-b-[#BBBBBB]  top-0  z-3 backdrop-blur-[7px] gap-9 '>
            {/* imglogo */}
            <div className='flex items-center gap-7'>
                <span><img  src={logoimg} alt="Inklune Logo" className="logo item-right ml-auto" /> </span>

                <button className='lg:hidden absolute right-4' onClick={() => setIsOpen(!isOpen)} > {isOpen ? <X color='purple'/> : <Menu color='purple' />} </button>

                <div>
                    {isOpen && (
              <div>
                {/* mobile screen links */}
                <div  className='lg:hidden absolute -right-1 top-20 p-5 border-b-4 border-b-gray-600 backdrop-blur-5xl rounded-lg bg-[#d6ccf1] w-full flex justify-center items- flex-col  shadow-lg text-center items-center text-gray-700 backdrop-blur-3xl md:w-full '>
                  <ul className='flex flex-col items-center text-sm gap-6 text-[20px] font-semibold p-2 py-4 '>

                    <li className='hover:text-purple-500 cursor-pointer border-2 flex  rounded-lg p-1.5 items-center  bg-[#dcd5f2] border-gray-400 md:w-130'> <Search color='gray' className='absolute left-13 md:left-40'/> <input type="search" placeholder='   ' className='text-center'/></li>
                    <li className='hover:text-purple-500 cursor-pointer'><Bell className='absolute left-15 md:left-40'/> Notification</li>  
                    <li className='hover:text-purple-500 cursor-pointer'> <NotebookPen className='absolute left-10 md:left-40' />Write</li>
                    <li className='hover:text-purple-500 cursor-pointer '> 
                    <LogOut className='absolute left-15 md:left-40' /> Sign Out</li>
                    
                    
                    <li className='hover:text-purple-500 cursor-pointer '> <Settings className='absolute left-15 md:left-40'/> Settings</li>
                    
                    
                  </ul>

                </div>
               
              </div>
               )}

                </div>


                
             <Search size={30} color='gray' absoluteStrokeWidth className='hidden lg:block' />
             <label htmlFor="#"></label>
            <input className='p-3 rounded-3xl lg:w-100  border-2 border-gray-200 text-[20px] absolute left-70 hidden lg:block pl-20' type="search"  placeholder='search stories'/>
            </div>

         {/* navlinks */}
            
            

            <div className=' lg:flex items-center justify-end gap-8'>
                <NotebookPen size={30} color='black' absoluteStrokeWidth
                 className='hidden lg:block'/> <p className='hidden lg:block'>write</p>

                <Link to="/notification" >
                <Bell size={30} color='black' absoluteStrokeWidthn className='hidden lg:block' /></Link>
                 
                
                

                <span><img className=' w-10 rounded-3xl lg:block' src={navimg} alt="" /></span>
                
            </div>

        </nav> 
    </div>


  )
}

export default Header;