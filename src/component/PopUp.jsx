import React, { useState } from 'react';
import { Trash2,Share2,PencilLine, Delete } from 'lucide-react';

const PopUp = () => {
     const [showDropdown, setShowDropdown] = useState(false);
    return (
        <div className="relative">
            <button ClassName="bg-black w-32 h-32 absolute " onClick={() => setShowDropdown(!showDropdown)}>
                <span className="text-xl"><button>⋮</button></span>
            </button>
            {showDropdown && (<div className="absolute lg:-right-33 lg:-top-5 mt-2 bg-white shadow-lg rounded-2xl right-7 -top-5">
                <ul className='flex flex-col gap-2'>
                    <li className="px-4 py-2 space-x-2 hover:bg-gray-100 cursor-pointer flex"><PencilLine/> <p>Edit</p></li>
                    <li className="px-4 space-x-2 py-2 hover:bg-gray-100 cursor-pointer flex"><Share2/> <p>Share</p></li>
                    <li className="px-4 space-x-2 py-2 hover:bg-gray-100 cursor-pointer flex text-red-600"><Trash2/> <p>Delete</p></li>
                </ul>
            </div>)}
        </div>


    );
};

export default PopUp;