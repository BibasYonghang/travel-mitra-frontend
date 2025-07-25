
import { Bell, Menu, Mic, Search, User } from 'lucide-react'
import Slider from './components/Slider';
import { useState } from "react";

export default function Navbar() {
  const [isClicked, setIsClicked] = useState(false);

  const slider = () => {
    setIsClicked((prev) => !prev);
  }

  return (
    <>
      <nav
        className='flex justify-center w-full h-18 bg-black items-center'
      >
        <button
          onClick={slider}
          className='text-gray-300 hover:bg-white/20 rounded-full p-2 hover:cursor-pointer'>
          <Menu size={33} />
        </button>

        <img src="/images/travel-mitra-logo.png" alt="" className='h-20 left-0' />

        <div className='h-[70%] w-[50%] rounded-full border-1 ml-64 border-gray-600 flex justify-center items-center'>
          <input
            type="text"
            name='search-bar'
            placeholder='Search'
            autoComplete='new-password'
            className='   pl-5 h-full w-[90%] text-lg text-gray-200 pr-3 placeholder:text-gray-500  outline-none'
          />
          <button className='text-gray-300 bg-white/13 rounded-r-full hover:cursor-pointer hover:bg-white/20 h-full justify-center flex items-center w-[10%]'>
            <Search />
          </button>
        </div>
        <div className='text-gray-300 flex justify-center mr-32 items-center w-12 h-[70%] mx-4 cursor-pointer hover:bg-white/20 rounded-full bg-white/13'>
          <Mic />
        </div>
        <button className='text-gray-300 h-[70%] w-12 flex justify-center mr-2 items-center rounded-full hover:cursor-pointer hover:bg-white/20'>
          <Bell />
        </button>
        <button className='text-gray-300 h-[70%] w-12 flex justify-center items-center rounded-full bg-white/20 cursor-pointer'>
          <User size={25} />
        </button>
      </nav>
      <div className='text-black'>{isClicked ? <Slider /> : false}</div>
    </>
  )
}
