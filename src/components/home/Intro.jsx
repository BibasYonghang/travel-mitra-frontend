import { Bell, Menu, Mic, Search, SearchCheck, SearchIcon, User } from 'lucide-react';
import React, { useState, useEffect } from 'react';

export default function Intro() {
    const [isClicked, setIsClicked] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const backgroundImages = [
        { path: "/images/travel-mitra-bg.png" },
        { path: "/images/background-image1.png" },
        { path: "/images/background-image2.png" },
        { path: "/images/background-image3.png" },
    ];

    const clickButton = () => {
        setIsClicked(prev => !prev);
    };

    // Rotating background images every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(prev => (prev + 1) % backgroundImages.length);
        }, 4000);

        return () => clearInterval(interval); // cleanup on unmount
    }, []);

    return (
        <div className="w-full h-[70vh] px-2">
            <div className="relative h-full w-full">
                {/* Background Image */}
                <img
                    src={backgroundImages[currentImage].path}
                    alt="Background"
                    className="object-cover w-full h-full object-[center_50%] absolute top-0 left-0"
                />

                {/* Gradient Overlay */}
                <div className="absolute top-0 h-[30vh] w-full bg-gradient-to-b from-black to-transparent"></div>

                {/* Navbar */}
                <nav className='absolute z-50 flex justify-between items-center w-full h-20 pr-6'>
                    {/* Logo */}
                    <img src="/images/travel-mitra-logo.png" alt="Travel Mitra Logo" className='h-[18vh]' />

                    {/* Menu Button */}
                    <button
                        onClick={clickButton}
                        className='text-white hover:text-blue-600 transition-color duration-100 flex justify-center items-center rounded-full hover:bg-black/15 cursor-pointer'
                        aria-label="Toggle Menu"
                    >
                        <Menu size={27} className='hover:cursor-pointer' />
                    </button>

                    {/* Navigation Links */}
                    {isClicked && (
                        <ul className='space-x-8 font-medium text-white'>
                            <li><a href="#" className="hover:text-blue-500 text-red-600">Home</a></li>
                            <li><a href="#" className="hover:text-blue-500">Trails</a></li>
                            <li><a href="#" className="hover:text-blue-500">Weather</a></li>
                            <li><a href="#" className="hover:text-blue-500">Services</a></li>
                            <li><a href="#" className="hover:text-blue-500">Blog</a></li>
                            <li><a href="#" className="hover:text-blue-500">About</a></li>
                            <li><a href="#" className="hover:text-blue-500">Contact</a></li>
                        </ul>
                    )}

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

                {/* Intro Section */}
                <section className="absolute top-0 flex flex-col items-center justify-center text-white lg:px-52 sm:px-20 px-5 text-justify py-40 gap-4">
                    <h1 className="font-bold text-4xl">
                        Travel With Us
                    </h1>
                    <div className='w-[80vw] flex items-center gap-3 text-black bg-white text-lg px-5 py-5 rounded-full'>
                        <SearchIcon size={25} className='opacity-50' />
                        <input
                            type="search"
                            name="search"
                            placeholder='Search Your Destination'
                            autoComplete='off'
                            className='w-[90%] outline-none placeholder:font-semibold'
                        />
                    </div>
                </section>

                <p className='absolute w-full text-white bottom-32 text-center underline font-bold hover:cursor-pointer'>
                    Explore Nearby Trails
                </p>

                <div className='absolute bottom-8 h-10 w-full flex justify-center items-center gap-3 '>
                    <span className='w-15 h-1 block bg-white'></span>
                    <span className='w-15 h-1 block bg-white'></span>
                    <span className='w-15 h-1 block bg-white'></span>
                    <span className='w-15 h-1 block bg-white'></span>
                </div>

            </div>
        </div>
    );
}
