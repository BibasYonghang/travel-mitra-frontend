import { Bell, CrossIcon, Menu, Mic, Search, SearchCheck, SearchIcon, User, X } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Intro() {
    const navigate = useNavigate();
    const [isClicked, setIsClicked] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const [progressBars, setProgressBars] = useState([0, 0, 0, 0]); // one for each image

    const backgroundImages = [
        { path: "/images/background-image2.png" },
        { path: "/images/travel-mitra-bg.png" },
        { path: "/images/background-image1.png" },
        { path: "/images/background-image3.png" },
    ];

    const aboutApp = () => {
        const trails = document.getElementById("about-app")
        trails?.scrollIntoView({ behavior: "smooth" })
    }
    const contact = () => {
        const trails = document.getElementById("contact")
        trails?.scrollIntoView({ behavior: "smooth" })
    }


    const navLi = [
        { name: "Home", action: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
        { name: "Trails", route: "/trails" },
        { name: "About", action: aboutApp },
        { name: "Contact", action: contact },
    ]

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

    const popularSearches = () => {
        const trails = document.getElementById("popular-section")
        trails?.scrollIntoView({ behavior: "smooth" })
    }


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
                <div className="absolute z-10 top-0 h-[30vh] w-full bg-gradient-to-b from-black to-transparent"></div>

                {/* Navbar */}
                <nav className='absolute  z-50   md:px-10  flex justify-between items-center w-full  '>
                    <img src="/images/travel-mitra-logo.png" alt="Travel Mitra Logo" className='h-[7vh] mt-4 md:ml-0 ml-4' />

                    {window.innerWidth < 800 ?
                        (
                            <button
                                onClick={clickButton}
                                className='absolute z-20 right-0 pr-5 text-white hover:text-green-600 transition-color duration-100 flex justify-center items-center rounded-full hover:bg-black/15 cursor-pointer'
                                aria-label="Toggle Menu"
                            >
                                <Menu size={27} className='hover:cursor-pointer' />
                            </button>

                        )
                        :
                        (
                            <ul className='flex lg:space-x-8 md:space-x-4 font-medium text-white'>
                                {navLi.map(({ name, action, route }, idx) =>
                                (
                                    <li
                                        key={idx}
                                        className=" text-white hover:cursor-pointer hover:scale-102 hover:text-green-500 transform duration-150  text-lg">
                                        <ul onClick={() => {
                                            if (action) {
                                                action()
                                            } else if (route) {
                                                navigate(route)
                                            }
                                            setIsClicked(false); // close mobile menu if needed
                                        }}>
                                            {name}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        )
                    }



                    {isClicked && (
                        <div className="absolute top-0 left-0  z-50 w-full h-screen px-8 py-10 font-medium text-black bg-white transition-transform duration-300">
                            <div className='flex w-full'>
                                <img
                                    src="/images/travel-mitra-logo.png"
                                    alt="Travel Mitra Logo"
                                    className="h-[7vh] mb-6"
                                />
                                <button
                                    onClick={clickButton}
                                    className='pl-36 mb-6 text-black hover:text-green-600 transition-color duration-100 flex justify-center items-center rounded-full  cursor-pointer'
                                    aria-label="Toggle Menu"
                                >
                                    <X size={27} className='hover:cursor-pointer' />
                                </button>
                            </div>
                            <ul className='mt-4'>
                                <ul className='space-y-6'>
                                    {navLi.map(({ name, action, route }, idx) => (
                                        <li
                                            key={idx}
                                            className=" text-black cursor-pointer text-lg"
                                            onClick={() => {
                                                if (action) {
                                                    action()
                                                } else if (route) {
                                                    navigate(route)
                                                }
                                                setIsClicked(false); // close menu
                                            }}
                                        >
                                            {name}
                                        </li>
                                    ))}
                                </ul>
                            </ul>
                            <div className='flex flex-col justify-center space-y-6 mt-12'>
                                <a href="" className='py-3 text-center  rounded-full bg-gray-200'>Sign Up  </a>
                                <a href="" className='py-3 text-center rounded-full bg-gray-200'>Log in</a>
                                <a href="" className='py-3 text-center  rounded-full bg-black text-white'>Continue in app</a>
                            </div>

                        </div>
                    )}
                </nav>

                {/* Intro Section */}
                <section className="absolute top-0 w-full flex flex-col items-center justify-center text-white lg:px-52 sm:px-20 px-5 text-justify md:py-55 py-40 gap-4">
                    <h1 className="font-bold text-4xl 
                    md:text-5xl">
                        Travel With Us
                    </h1>
                    <div className='md:w-[50vw] w-[80vw] flex justify-center items-center gap-3 text-black bg-white text-lg px-5 py-5 rounded-full'>
                        <SearchIcon size={25} className='opacity-50' />
                        <input
                            type="search"
                            name="search"
                            placeholder='Find your next adventure'
                            autoComplete='off'
                            className=' w-[90%] outline-none placeholder:font-semibold
                            md:placeholder:text-lg placeholder:text-base'
                        />
                    </div>
                </section>

                <div className='absolute bottom-32 w-full flex justify-center'>
                    <p onClick={popularSearches} className='font-bold text-white hover:cursor-pointer hover:scale-102 hover:text-green-500 transform duration-150 underline text-xl'>
                        Explore Nearby Trails
                    </p>
                </div>


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
