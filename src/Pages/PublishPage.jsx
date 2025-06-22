import React from 'react'
import image2 from '../assets/dabo imgs/assets/heroImage.jpg'
import { Link } from 'react-router-dom'

const PublishPage = () => {
    const handleSubmit = (e) => {
      e.preventDefault()
  }
  return (
    <div className='container mx-auto w-11/12 flex flex-col items-center justify-center min-h-screen md:px-2'>
        <div className='w-[90%] mt-4 md:w-[100%]'>
          <p className='text-start text-xs font-light text-gray-400 md:text-start'>Preview in Bibian...</p>
        </div>
        <form onSubmit={handleSubmit} className='w-[90%] my-2 md:w-[100%]'>
            <div className='my-2 p-2 md:p-4'>
              <h1 className='text-xl font-semibold md:text-4xl mb-4'>Tom’s Redemption</h1>
              <p className='text-start text-xs font-light text-gray-400'>A Story of Pain, Secrets, and the Long Road to Healing</p>
              <h3 className='text-xs font-semibold md:text-sm'>By Bibian Okoro</h3>
           </div>
           <span><img src={image2} className='my-4 md:h-[280px] md:w-[100%]'/></span>
            <div className='my-2 p-2 md:p-4'>
              <h3 className='text-base md:text-2xl font-medium mb-3 md:mb-6'>The Perfect Lie</h3>
              <p className='text-start text-xs font-light text-gray-400 md:w-[100%] md:text-lg md:font-normal my-4'>From the outside, the Ajayi family was flawless.</p>
              <p className='text-start text-xs font-light text-gray-400 md:w-[100%] md:text-lg md:font-normal'>A mansion with golden gates. A father whose suits cost more than a teacher’s salary.</p>
              <p className='text-start text-xs font-light text-gray-400 md:w-[100%] md:text-lg md:font-normal'>A mother so elegant, she turned heads at every PTA meeting.</p>
              <p className='text-start text-xs font-light text-gray-400 md:w-[100%] md:text-lg md:font-normal'>And Tomiwa a.k.a Tomy to friends and loved ones, the adored only son, living a dream life most boys envied.</p>
              <p className='text-start text-xs font-light text-gray-400 mt-3 md:mt-4 md:w-[100%] md:text-lg md:font-normal'>But behind the polished front door, chaos brewed.</p>
           </div>
           <div className='my-2 p-2 md:p-4'>
               <h3 className='text-base md:text-2xl font-medium mb-3 md:mb-6'>The Cracks Begin</h3>
               <p className='text-start text-xs font-light my-4 text-gray-400 md:w-[100%] md:text-lg md:font-normal'>Tomy was eight when the world shifted. His father, once a titan in the oil industry,<br/> began drinking. First on weekends. Then on days he skipped work. <br/> The man who once tucked him in with bedtime stories now stumbled into the house, <br/> singing offbeat tunes and reeking of gin.</p>
               <p className='text-start text-xs font-light text-gray-400 mt-4 md:w-[100%] md:text-lg md:font-normal'>His mother, once radiant, grew tired. Tired of pretending. Tired of carrying everything. <br/> She became sharp, loud, unpredictable. Arguments replaced laughter. <br/> Shards of glass replaced family dinners.</p>
               <p className='text-start text-xs font-light text-gray-400 mt-4 md:w-[100%] md:text-lg md:font-normal'>And yet, when Dad sobered up, he morphed back into Mr. Perfect — doting,<br/>apologetic, generous. He took them shopping. Planned surprise trips. <br/> Sent Mum roses.</p>
               <p className='text-start text-xs font-light text-gray-400 mt-4 md:w-[100%] md:text-lg md:font-normal'>The world saw the highlight reel.</p>
               <p className='text-start text-xs font-light text-gray-400 my-4 md:w-[100%] md:text-lg md:font-normal'>No one saw Tomy disappearing.</p>
           </div>
           <div className='my-2 p-2 md:p-4'>
              <h3 className='text-base md:text-2xl font-medium mb-3 md:mb-6'>Silent Scars</h3>
              <p className='text-start text-xs font-light text-gray-400 my-4 md:w-[100%] md:text-lg md:font-normal'>No one noticed the silence that wrapped around Tomy like a straightjacket. Not when he came home with bruises. Not when the maid started locking the door behind her. Not when he stopped speaking in full sentences.</p>
              <p className='text-start text-xs font-light text-gray-400 my-4 md:w-[100%] md:text-lg md:font-normal'>They gave him what they thought was love — gifts, vacations, ice cream trucks on Saturdays.</p>
              <p className='text-start text-xs font-light text-gray-400 md:w-[100%] md:text-lg md:font-normal'>They didn’t know they were feeding a starving boy candy instead of care.</p>
              <p className='text-start text-xs font-light text-gray-400 md:w-[100%] md:text-lg md:font-normal my-4'>Last week, he won an award at school.</p>
              <p className='text-start text-xs font-light text-gray-400 md:w-[100%] md:text-lg md:font-normal my-4'>His parents didn’t even know he entered a competition.</p>
           </div>
           <div className='my-2 p-2 md:p-4'>
              <h3 className='text-base md:text-2xl font-medium mb-3 md:mb-6'>From Golden Boy to Ghost</h3>
              <p className='text-start text-xs font-light text-gray-400 my-4 md:w-[100%] md:text-lg md:font-normal'>By 16, Tomy had perfected his masks. By 18, he traded innocence for escape — drugs, parties, and sex. He didn’t feel alive unless he was almost dead. His fame on campus wasn’t academic. Girls feared and adored him. Stories circulated — orgies, threesomes, blackout nights.</p>
              <p className='text-start text-xs font-light text-gray-400 md:w-[100%] md:text-lg md:font-normal my-4'>Two near-fatal encounters with girls at his mother’s university — covered up before daylight. </p>
              <p className='text-start text-xs font-light text-gray-400 md:w-[100%] md:text-lg md:font-normal'>They called him “mysterious.”</p>
              <p className='text-start text-xs font-light text-gray-400 md:w-[100%] md:text-lg md:font-normal my-4'>He called it pain.</p>
           </div>
           <div className='my-2 p-2 md:p-4'>
              <h3 className='text-base md:text-2xl font-medium mb-3 md:mb-6'>Then Came Gina</h3>
              <p className='text-start text-xs font-light my-4 text-gray-400 md:w-[100%] md:text-lg md:font-normal'>It was just another lecture. Noisy, crowded, forgettable.</p>
              <p className='text-start text-xs font-light text-gray-400 md:w-[100%] md:text-lg md:font-normal my-4'>Until he saw her.</p>
              <p className='text-start text-xs font-light text-gray-400 md:w-[100%] md:text-lg md:font-normal'>Gina.</p>
              <p className='text-start text-xs font-light text-gray-400 my-4 md:w-[100%] md:text-lg md:font-normal'>She wasn’t flashy. She didn’t dress for attention. But she glowed with something rare “peace”. Something sacred. Her laugh was pure, her confidence gentle. She spoke with conviction. She believed in God. She was sexy in a way Tomy didn’t know how to defile.</p>
              <p className='text-start text-xs font-light text-gray-400 my-4 md:w-[100%] md:text-lg md:font-normal'>He wanted her. But not to conquer.</p>
              <p className='text-start text-xs font-light my-4 text-gray-400 md:w-[100%] md:text-lg md:font-normal'>He wanted to heal.</p>
           </div>
           <div className='my-2 p-2 md:p-4'>
              <h3 className='text-base md:text-2xl font-medium mb-3 md:mb-6'>Still Healing, Still Hoping</h3>
              <p className='text-start text-xs font-light text-gray-400 md:w-[100%] md:text-lg md:font-normal my-4'>He wasn’t perfect.</p>
              <p className='text-start text-xs font-light text-gray-400 md:w-[100%] md:text-lg md:font-normal'>But he was present.</p>
              <p className='text-start text-xs font-light text-gray-400 md:w-[100%] md:text-lg md:font-normal mt-8'>And with Gina by his side, not as a savior, but a witness. Tomy took the first real steps toward a life he thought he’d never deserve.</p>
              <p className='text-start text-xs font-light text-gray-400 md:w-[100%] md:text-lg md:font-normal my-4'>Because in the end, it wasn’t love that saved him.</p>
              <p className='text-start text-xs font-light text-gray-400 md:w-[100%] md:text-lg md:font-normal my-4'>It was being seen.</p>
              <h3 className='text-start text-sm md:text-xl font-medium mt-6'>To Be Continued…</h3>
           </div>
           <div className='my-2 p-2 md:p-4'>
               <h3 className='text-base md:text-2xl font-medium mb-3 md:mb-6'>
                If You’re Still Reading…</h3>
               <p className='text-start text-xs font-light text-gray-800 md:w-[100%] md:text-lg md:font-normal my-4'>Thank you.</p>
               <p className='text-start text-xs font-light text-gray-800 md:w-[100%] md:text-lg md:font-normal my-4'>This story is fiction, but for many, the wounds are real. If this touched you, helped you, or reminded you of someone, please share it.</p>
               <p className='text-start text-xs font-light text-gray-800 md:w-[100%] md:text-lg md:font-normal my-4'>You never know who needs to read this today.</p>
               {/* {['#MentalHealth','#FamilyTrauma','#RedemptionStories','#Fiction','#AfricanNarratives','#EmotionalHealing','#DarkRomance','#TherapyJourney','#ComingOfAge','#TomysRedemption'].map(tag =>(
                  <span key={tag} className="text-xs md:text-sm px-2 py-1 w-[50%]">
                    {tag}
                  </span>
               ))} */}
               <p className='text-start text-xs font-light text-gray-800 md:w-[100%] md:text-lg md:font-normal mt-8 md:mt-15'>#MentalHealth  #FamilyTrauma  #RedemptionStories  #Fiction<br/>#AfricanNarratives  #EmotionalHealing  #DarkRomance  #TherapyJourney <br/>#ComingOfAge  #TomysRedemption</p>
           </div>
           <div className='flex space-x-0.5 md:space-x-6 my-6 md:my-10'>
              <button className='text-xs md:text-sm font-thin md:font-normal bg-gray-300 rounded-md md:rounded-lg px-1.5 md:px-4 md:py-1'>Fiction</button>
              <button className='text-xs md:text-sm font-thin md:font-normal bg-gray-300 rounded-md md:rounded-lg px-1.5 md:px-4 md:py-1'>Trauma</button>
              <button className='text-xs md:text-sm font-thin md:font-normal bg-gray-300 rounded-md md:rounded-lg px-1.5 md:px-4 md:py-1'>Healing</button>
              <button className='text-xs md:text-sm font-thin md:font-normal bg-gray-300 rounded-md md:rounded-lg px-1.5 md:px-4 md:py-1'>Dark Fiction</button>
              <button className='text-xs md:text-sm font-thin md:font-normal bg-gray-300 rounded-md md:rounded-lg px-1.5 md:px-4 md:py-1'>Hope</button>
           </div>
           <div className='flex items-center justify-center gap-2 md:gap-10 mt-4 md:mt-15'>
                <Link to="/preview" className='text-white text-center bg-black p-1 md:p-2 w-[50%] md:w-[50%] rounded md:rounded-lg text-xs md:text-base font-normal'><button>Continue editing</button></Link>
                <Link to="/published" className='text-white text-center bg-purple-500 p-1 md:p-2 w-[50%] md:w-[50%] rounded md:rounded-lg text-xs md:text-base font-normal'><button>Publish</button></Link>
            </div>
        </form>
    </div>
  )
}

export default PublishPage
        