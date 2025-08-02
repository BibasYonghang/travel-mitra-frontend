import React from 'react'
import { Link } from 'react-router-dom'

export default function PopularSearches({ searchTerm }) {

    const popularPlaces = [
        { src: "/images/travel-mitra-bg.png", placeName: "Gamecho Hike", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. " },
        { src: "/images/travel-mitra-bg.png", placeName: "Champadevi Hike", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. " },
        { src: "/images/travel-mitra-bg.png", placeName: "Lakuri Bhanjyang Hike", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. " },
        { src: "/images/travel-mitra-bg.png", placeName: "Sundarijal Hike", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. " },
    ]
    const term = (searchTerm || "").toLowerCase();

    const filteredPlaces = popularPlaces.filter(place =>
        place.placeName.toLowerCase().includes(term)
    );

    return (
        <> 
            <section className='w-full py-5 px-8'>
                <h1 className='text-5xl font-bold text-blue-500'>Popular Searches</h1>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-10 w-full'>
                    {filteredPlaces.map(({ src, placeName, description }, idx) => {
                        return (

                            <div key={idx} className='flex gap-10 w-[22vw] h-[60vh] '>
                                <div

                                    className='h-[50vh] w-full  rounded-t-2xl rounded-b-2xl'>
                                    <img src={src} alt="" className='h-[75%] w-full object-cover rounded-2xl' />
                                    <div className='space-y-2 pt-2 w-full '>
                                        <h1 className='font-semibold text-xl text-black font-sans'>{placeName}</h1>
                                        <p className='text-base text-gray-600 font-semibold'>{description}</p>
                                        <div className=' relative group border h-8 w-24 text-center border-blue-500 text-blue-500 '>
                                            <span className='absolute h-full w-full bg-blue-500 group-hover:scale-x-100 inset-0 scale-x-0 transition-all duration-300'></span>
                                            <Link to="" className='absolute z-20 inset-0 pt-0.5 group-hover:text-white'>See More</Link>
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
