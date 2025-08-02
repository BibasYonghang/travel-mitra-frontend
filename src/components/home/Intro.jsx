import { Bell, Menu, Mic, Search, User } from 'lucide-react';
import React from 'react';

export default function Intro({ searchTerm, setSearchTerm }) {
    return (
        <div className="w-full h-[85vh] px-2 ">
            <div className="relative h-full w-full">
                <img
                    src="/images/travel-mitra-bg.png"
                    alt=""
                    className="object-cover w-full h-full object-[center_50%] absolute top-0 left-0"
                />
                <div className="absolute bottom-0 h-[60vh] w-full bg-gradient-to-t from-black to-transparent"></div>

                <nav className="absolute flex justify-center w-full h-20 items-center  px-2">
                    <img src="/images/travel-mitra-logo.png" alt="" className="h-[25vh] mx-4" />

                    <div className="h-[60%] w-[50%] rounded-full ml-40 bg-white flex justify-center items-center">
                        <input
                            type="search"
                            placeholder="Search Your Destination"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-8 h-full w-[90%] text-lg text-gray-600 pr-3  outline-none"
                        />
                        <button className="text-black bg-black/10 rounded-r-full hover:cursor-pointer hover:bg-black/15 h-full justify-center flex items-center w-[10%]">
                            <Search />
                        </button>
                    </div>

                    <div className="text-black flex justify-center mr-32 items-center w-12 h-[60%] mx-4 cursor-pointer hover:bg-black/15 bg-black/10  rounded-full ">
                        <Mic />
                    </div>
                    <button className="text-black h-[60%] w-12 flex justify-center mr-2 ml-8 items-center rounded-full hover:bg-black/15 bg-black/10  hover:cursor-pointer ">
                        <Bell />
                    </button>
                    <button className="text-black h-[60%] w-12 flex justify-center items-center rounded-full  hover:bg-black/15 bg-black/10  cursor-pointer">
                        <User size={25} />
                    </button>
                </nav>

                <section className="absolute bottom-0 text-white px-52 text-justify py-15 flex flex-col items-start justify-center gap-7">
                    <h1 className="font-bold text-4xl">
                        <span className="text-blue-500"> Travel Mitra</span> — Your Perfect Travel Companion
                    </h1>
                    <p>Travel Mitra helps you explore your day trips smarter and easier by giving you all the essential info in one place:

                        Real-time weather forecasts to plan your day perfectly

                        Price estimates for local services and items to manage your budget

                        Details on nearby hotels, restaurants, and facilities for a hassle-free experience

                        Live updates on current location conditions so you can make informed decisions

                        Whether you’re planning a quick getaway or a spontaneous adventure, Travel Mitra makes your journey smooth, well-informed, and enjoyable.</p>
                </section>
            </div>
        </div>
    );
}
