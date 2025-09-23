import { Menu, Search } from 'lucide-react'
import Slider from './Slider';
import { useState } from "react";

export default function Navbar() {
  const [isClicked, setIsClicked] = useState(false);

  const toggleSlider = () => {
    setIsClicked((prev) => !prev);
  }

  return (
    <>
      <nav className='flex justify-between items-center w-full h-20 bg-white px-6'>
        {/* Menu Button */}
        <button
          onClick={toggleSlider}
          className='text-black h-[60%] w-12 flex justify-center items-center rounded-full hover:bg-black/15 cursor-pointer'
          aria-label="Toggle Menu"
        >
          <Menu size={30} />
        </button>

        {/* Logo */}
        <img src="/images/travel-mitra-logo.png" alt="Travel Mitra Logo" className='h-full mx-4' />

        {/* Navigation Links */}
        <ul className='space-x-8 font-medium text- '>
          <li><a href="#" className="hover:text-blue-500 text-red-600">Home</a></li>
          <li><a href="#" className="hover:text-blue-500">Trails</a></li>
          <li><a href="#" className="hover:text-blue-500">Weather</a></li>
          <li><a href="#" className="hover:text-blue-500">Services</a></li>
          <li><a href="#" className="hover:text-blue-500">Blog</a></li>
          <li><a href="#" className="hover:text-blue-500">About</a></li>
          <li><a href="#" className="hover:text-blue-500">Contact</a></li>
        </ul>


        {/* Search Bar */}
        <div className='hidden md:flex items-center border border-gray-400 rounded-full px-3 py-1 w-80'>
          <input
            type="search"
            name="search"
            placeholder='Search Your Destination'
            autoComplete='off'
            className='flex-grow text-black text-base outline-none px-2'
          />
          <button className='text-black hover:text-blue-500'>
            <Search size={20} />
          </button>
        </div>

      </nav>

      {/* Mobile Slider / Sidebar */}
      <div>{isClicked && <Slider />}</div>
    </>
  )
}
