import Nav from '../component/Nav dayo'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Profile from '../component/Profile';
import Blog from '../component/Blog'
import Likedblog from '../component/Likedblog';
import EditBio from '../component/EditBio';
import Directory from '../component/Directory';



const MainProfile = () =>{
    const [editpage, setEditPage] = useState(false)

      const showEditBio=()=>{
      setEditPage(!editpage)
       }

       useEffect(()=>{
            document.body.style.overflow = editpage ? 'hidden' : 'auto';
            document.body.style.height = editpage ? '100dvh' : 'auto';
        },[editpage])
  return ( 
    <div>
        <Nav/>
      <div className='new container mx-auto relative top-[130px] flex flex-col gap-[42px] w-[100%]  md:w-[736.5px]'>
           {editpage && <div className='z-10 absolute h-2000 top-[-10px] sm:top-[-130px] w-full lg:top-0 backdrop-blur-xs'><div className='mt-2 w-full md:w-[736.5px] flex justify-center '><EditBio remove={showEditBio}/> </div></div>}
        <Profile ShowEditPage={showEditBio} />
        <Directory />
        {/* {!blog && <Blog/>}
        {blog && <Likedblog/>} */}
      </div>
    </div>
  )
}

export default MainProfile