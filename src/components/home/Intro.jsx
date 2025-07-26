import React from 'react'

export default function Intro() {
    return (
        <>
            <div className="w-full h-[90vh] px-2 ">
                <div className="relative h-full w-full">
                    <img
                        src="/images/travel-mitra-bg.png"
                        alt=""
                        className="object-cover w-full h-full object-[center_50%] absolute top-0 left-0"
                    />
                    {/* Added 'to-transparent' to make gradient fade properly */}
                    <div className="absolute bottom-0 h-[60vh] w-full bg-gradient-to-t from-black to-transparent"></div>
                    <section className=' absolute bottom-0 text-white px-52 text-justify py-15 flex flex-col items-start justify-center gap-7'>
                        <h1 className='font-bold text-4xl'> <span className='text-blue-500'> Travel Mitra</span>  — Your Perfect Travel Companion</h1>

                        <p>
                            Travel Mitra helps you explore your day trips smarter and easier by giving you all the essential info in one place:

                            Real-time weather forecasts to plan your day perfectly

                            Price estimates for local services and items to manage your budget

                            Details on nearby hotels, restaurants, and facilities for a hassle-free experience

                            Live updates on current location conditions so you can make informed decisions

                            Whether you’re planning a quick getaway or a spontaneous adventure, Travel Mitra makes your journey smooth, well-informed, and enjoyable.
                        </p>
                    </section>
                </div>
            </div>


        </>
    )
}
