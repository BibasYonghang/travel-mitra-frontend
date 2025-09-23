import React from 'react'
import { Link } from 'react-router-dom'

export default function PopularSearches({ searchTerm }) {

    const popularPlaces = [
        { src: "/images/travel-mitra-bg.png", placeName: "Gamecho Hike", description: "Lorem ipsum dolor  " },
        { src: "/images/travel-mitra-bg.png", placeName: "Champadevi Hike", description: "Lorem ipsum dolor" },
        { src: "/images/travel-mitra-bg.png", placeName: "Lakuri Hike", description: "Lorem ipsum dolor  " },
        { src: "/images/travel-mitra-bg.png", placeName: "Sundarijal Hike", description: "Lorem ipsum dolor  " },
    ]
    const term = (searchTerm || "").toLowerCase();

    const filteredPlaces = popularPlaces.filter(place =>
        place.placeName.toLowerCase().includes(term)
    );

    return (
        <>
            <section className='w-full py-6  md:px-10 px-5'>
                <h1 className=' font-bold text-black
                 md:text-4xl text-3xl
                '>
                    <span className='text-green-600'>Popular</span> Searches Near You
                </h1>
                <div className='grid  gap-3 justify-center mt-5 w-full
                               grid-cols-2 md:grid-cols-3 xl:grid-cols-4
                '>
                    {filteredPlaces.map(({ src, placeName, description }, idx) => {
                        return (

                            <div
                                key={idx}
                                className='flex gap-10  shadow-lg 
                                           py-3 sm:py-6 
                                           px-2 sm:px-3
                            '>
                                <div
                                    className='w-full'>
                                    <div className='w-full overflow-hidden 
                                    '>
                                        <img src={src} alt="" className=' w-full object-cover  hover:scale-105 transition-transform duration-200 hover:cursor-pointer
                                        h-[18vh] sm:h-[28vh] md:h-[33vh]  xl:h-[37vh]
                                         ' />
                                    </div>
                                    <div className=' w-full space-y-2 pt-2 '>
                                        <h1 className='font-semibold  text-black font-sans
                                                       text-base md:text-xl
                                        '>
                                            {placeName}
                                        </h1>
                                        <p className='text-base text-gray-600'>{description}</p>
                                        <div className=' relative group border rounded-sm h-8 w-24 text-center border-green-500 bg-green-600 text-green-700 '>
                                            <span className='absolute h-full w-full bg-green-500 group-hover:scale-x-100 inset-0 scale-x-0 transition-all duration-300'></span>
                                            <Link to="trials-info" className='absolute z-20 inset-0 pt-0.5 text-white'>See More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>

            </section>
        </>
    )
}
