import React from 'react'
import Categories from '../component/Categories'
import Community from '../component/Community'
import Featured from '../component/Featured'
import Footer from '../component/Footer'
import Hero from '../component/Hero'
import Inspired from '../component/Inspired'
import Navbar from '../component/Navbar'
import Voice from '../component/Voice'

const Home = () =>{
  return (
    <div>
     <Navbar/> 
     <Hero/>
     <Featured/>
     <Categories/>
     <Community/>
     <Voice/>
     <Inspired/>
     <Footer/>
    </div>
  )
}

export default Home