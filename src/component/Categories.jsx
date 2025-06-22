import React from 'react'
import img1 from "../assets/joseph imgs/assets/creative.png"
import img2 from "../assets/joseph imgs/assets/literal.png"
import img3 from "../assets/joseph imgs/assets/peronal.png"
import img4 from "../assets/joseph imgs/assets/craft.png"
import img5 from "../assets/joseph imgs/assets/cultural.png"
import img6 from "../assets/joseph imgs/assets/professional.png"
import img7 from "../assets/joseph imgs/assets/wellness.png"
import img8 from "../assets/joseph imgs/assets/historical.png"




const Categories = () => {
    const data = [
    {
        img:img1,
        title:"Creative Writing",
        text:"fiction, poetry and narrative exploration"
    },
    {
        img:img2,
        title:"Literal Analysis",
        text:"Deep dives into themes, styles and meaning"
    },
    {
        img:img3,
        title:"Personal Growth",
        text:"Self-discovery through written word"
    },
    {
        img:img4,
        title:"Craft & Techniques",
        text:"Mastering the tools of effective writing"
    },
    {
        img:img5,
        title:"Cultural Commentary",
        text:"Perspectives on society and human experience"
    },
    {
        img:img6,
        title:"Professional writing",
        text:"Career insights for writers and editors"
    },
    {
        img:img7,
        title:"Wellness & Mindfulness",
        text:"Writing as a path to mental wellbeing"
    },
    {
        img:img8,
        title:"Historical Perspective",
        text:"Learning from writers across time"
    }
]
  return (
    <div id='category' className='w-full bg-gray-200 py-3 md:py-5'>
        <div className='w-[95%] md:w-11/12 container mx-auto'>
            <h1 className='text-center font-bold py-5 text-xl lg:text-3xl'>Explore Categories</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4'>
                {
                    data.map((item, index) => {
                        return(
                            <div key={index} className='bg-white rounded-lg flex flex-col justify-center items-center text-sm md:text-md py-6'>
                                <span><img className='w-[40%] mx-auto' src={item.img} alt="" /></span>
                                <h1 className='font-bold py-2 text-lg md:text-xl'>{item.title}</h1>
                                <p className='w-[90%] mx-auto text-center'>{item.text}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Categories