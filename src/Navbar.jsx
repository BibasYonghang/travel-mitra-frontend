
import { Bell, Menu, Mic, Search, User } from 'lucide-react'
import Slider from './Slider';
import { useState } from "react";

export default function Navbar() {
  const [isClicked, setIsClicked] = useState(false);

  const slider = () => {
    setIsClicked((prev) => !prev);
  }

  return (
    <>
      <nav
        className='flex justify-center w-full h-20 bg-white items-center  px-2'
      >
        <button
          onClick={slider}
          className='text-black h-[60%] w-12 flex justify-center items-center rounded-full hover:bg-black/15   hover:cursor-pointer '>
          <Menu size={33} />
        </button>

        <img src="/images/travel-mitra-logo.png" alt="" className='h-full mx-4' />
        <div className='h-[60%] w-[50%] rounded-full border-1 ml-64 border-gray-600 flex justify-center items-center'>
          <input
            type="search"
            name="searchQuery_no_save"
            placeholder='Search Your Destination'
            autoComplete='new-password'
            inputMode="search"
            className='pl-8 h-full w-[90%] text-lg text-black pr-3 outline-none'
          />
          <button className='text-black bg-black/10 rounded-r-full hover:cursor-pointer hover:bg-black/15 h-full justify-center flex items-center w-[10%]'>
            <Search />
          </button>
        </div>
        <div className='text-black flex justify-center mr-32 items-center w-12 h-[60%] mx-4 cursor-pointer hover:bg-black/15 bg-black/10  rounded-full '>
          <Mic />
        </div>
        <button className='text-black h-[60%] w-12 flex justify-center mr-2 ml-8 items-center rounded-full hover:bg-black/15 bg-black/10  hover:cursor-pointer '>
          <Bell />
        </button>
        <button className='text-black h-[60%] w-12 flex justify-center items-center rounded-full  hover:bg-black/15 bg-black/10  cursor-pointer'>
          <User size={25} />
        </button>
      </nav>
      <div className='text-black'>{isClicked && <Slider />}</div>
    </>
  )
}
