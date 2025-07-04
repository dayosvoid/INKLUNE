import React from 'react'
import { PencilLine } from 'lucide-react';
import profileImg from '../assets/dayo imgs/assets/image/profile_picture.png'
import { useState, useContext } from 'react';
import EditBioContext from '../context/EditBioContext';


const Profile = ({ShowEditPage}) => {
    const {bioname,fixUsername} = useContext(EditBioContext)
  return (
    <div className=''>
        <div className='flex justify-center gap-[20px] px-3 w-full '>
            {/* left for dp */}
            <div>
                <span className='size-[96px]'><img src={profileImg} alt="" /></span>
            </div>
            {/* right for content */}
            <div className='flex flex-col gap-[12px]'>
                <div className='flex justify-between items-center'>
                    <h2 className='font-[800]'>{fixUsername}</h2>
                    <span className='flex bg-white hover:bg-purple-100  cursor-pointer hover:font-bold rounded-[10px] font-[500] text-16px border-1 border-[hsla(0,0%,94%,1)] py-[6px] px-[10px]'>
                        <button onClick={ShowEditPage}  className="space-x-[10px]"><p className='inline '>Edit</p><PencilLine className='inline'/> </button>
                    </span>
                </div>
                {/* bio content */}
                <div className='bg-white p-3 rounded-[10px] border-[1px] border-[hsla(0,0%,94%,1)] lg:w-[620px] font-[500] '>
                    <p className='font-500 text-[14px] text-[hsla(0,0%,39%)]'>Bio</p>
                    <p className='text-[14px] '>{bioname}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile