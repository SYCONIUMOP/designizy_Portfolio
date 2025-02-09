// Jai Shree Ram

import React from 'react'

function Navbar() {
  return (
    <div className='navbar w-full flex items-center justify-between h-[10%] relative'>
      <div className="nLeft font-['popinsRegular'] relative text-lg tracking-wide">&copy; Digital Agency.</div>
      <div className="nav w-[40%] px-5 relative flex items-center justify-between rounded-2xl h-full border-t-4 border-l-4 border-b-8 border-[#111] border-r-8">
        <div className="logo w-[40%] relative">
          <img src="/img/logo.svg" alt="logo" />
        </div>
        <div className="moreOpts gap-6 flex items-center justify-center text-center relative">
          <div className="bag relative">
            <img className='w-8' src="/img/bag-icon.svg" alt="" />
            <span className="absolute bg-[#fff] flex items-center justify-center text-center -right-2 -top-1 text-sm w-4 h-4 rounded-full">1</span>
          </div>
          <div className="hamburger w-fit p-4 bg-[#FF96C7] rounded-lg border-t-2 border-l-2 border-b-4 border-[#111] border-r-4">
            <svg width="25" height="25" viewBox="0 0 100 100">
              <rect y="20" width="100" height="10" fill="#111"></rect>
              <rect y="45" width="100" height="10" fill="#111"></rect>
              <rect y="70" width="100" height="10" fill="#111"></rect>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar