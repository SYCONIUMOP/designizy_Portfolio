// Jai Shree Ram

import React from 'react'
import Marquee from './Marquee'
import Navbar from '../navbar/Navbar'
import HeroBottom from './HeroBottom'
// import Model from './Model'

function Home() {
  return (
    <div className='hero text-[#050505] font-["bevellierSemiBold"] relative w-full h-screen overflow-x-hidden bg-[#BFC5FE]'>     
      <Marquee />
      {/* <Model /> */}
      <div className="heroContent flex flex-col items-center justify-between relative w-[73%] my-0 mx-auto py-5 h-screen ">
        <Navbar />
        <HeroBottom />
      </div>
    </div>
  )
}

export default Home