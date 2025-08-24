import { Bell, Menu, Mic, Search, SearchCheck, SearchIcon, User } from 'lucide-react';
import React, { useState, useEffect } from 'react';

export default function Intro() {
    const [isClicked, setIsClicked] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const [progressBars, setProgressBars] = useState([0, 0, 0, 0]); // one for each image

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
            setCurrentImage(prev => {
                const next = (prev + 1) % backgroundImages.length;
                return next;
            });
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    // Progress bar animation logic
    useEffect(() => {
        // Reset bars when cycle finishes (last image -> first image)
        if (currentImage === 0) {
            setProgressBars(Array(backgroundImages.length).fill(0));
        }

        const interval = setInterval(() => {
            setProgressBars(prev => {
                const updated = [...prev];
                if (updated[currentImage] < 100) {
                    updated[currentImage] += 1;
                } else {
                    updated[currentImage] = 100; // keep filled
                }
                return updated;
            });
        }, 40); // 100 steps = 4s

        return () => clearInterval(interval);
    }, [currentImage]);

    return (
        <div className="w-full md:h-[85vh] h-[72vh]">
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
                <nav className='absolute top-4 z-50 flex justify-between items-center w-full  px-6 '>
                    <img src="/images/travel-mitra-logo.png" alt="Travel Mitra Logo" className='h-[7vh] ' />
                    <button
                        onClick={clickButton}
                        className='text-white hover:text-blue-600 transition-color duration-100 flex justify-center items-center rounded-full hover:bg-black/15 cursor-pointer'
                        aria-label="Toggle Menu"
                    >
                        <Menu size={27} className='hover:cursor-pointer' />
                    </button>

                    {isClicked && (
                        <ul className='space-x-8 font-medium text-white'>
                            <li><a href="#" className="hover:text-blue-500">Home</a></li>
                            <li><a href="#" className="hover:text-blue-500">Trails</a></li>
                            <li><a href="#" className="hover:text-blue-500">Weather</a></li>
                            <li><a href="#" className="hover:text-blue-500">Services</a></li>
                            <li><a href="#" className="hover:text-blue-500">Blog</a></li>
                            <li><a href="#" className="hover:text-blue-500">About</a></li>
                            <li><a href="#" className="hover:text-blue-500">Contact</a></li>
                        </ul>
                    )}
                </nav>

                {/* Intro Section */}
                <section className="absolute top-0 w-full flex flex-col items-center justify-center text-white lg:px-52 sm:px-20 px-5 text-justify md:py-55 py-40 gap-4">
                    <h1 className="font-bold text-4xl">
                        Travel With Us
                    </h1>
                    <div className='md:w-[50vw] w-[80vw] flex justify-center items-center gap-3 text-black bg-white text-lg px-5 py-5 rounded-full'>
                        <SearchIcon size={25} className='opacity-50' />
                        <input
                            type="search"
                            name="search"
                            placeholder='Search Your Destination'
                            autoComplete='off'
                            className=' w-[90%] outline-none placeholder:font-semibold'
                        />
                    </div>
                </section>

                <p className='absolute w-full md:text-2xl text-base text-white bottom-32 text-center hover:underline hover:text-blue-200 font-bold hover:cursor-pointer'>
                    Explore Nearby Trails
                </p>

                {/* Progress Bars (stay filled until cycle resets) */}
                <div className='absolute bottom-8 h-10 w-full flex justify-center items-center gap-3 '>
                    {backgroundImages.map((_, index) => (
                        <button key={index} className='w-15 h-1 block bg-white/50 overflow-hidden rounded-full'>
                            <span
                                className='h-full w-full bg-white block origin-left transition-all duration-100 rounded-full'
                                style={{
                                    transform: `scaleX(${progressBars[index] / 100})`
                                }}
                            ></span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
