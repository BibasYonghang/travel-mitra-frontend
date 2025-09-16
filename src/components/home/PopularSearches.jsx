import React from 'react'
import { Link } from 'react-router-dom'

export default function PopularSearches({ searchTerm }) {

    const popularPlaces = [
        { src: "/images/travel-mitra-bg.png", placeName: "Gamecho Hike", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. " },
        { src: "/images/travel-mitra-bg.png", placeName: "Champadevi Hike", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. " },
        { src: "/images/travel-mitra-bg.png", placeName: "Lakuri Bhanjyang Hike", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. " },
        // { src: "/images/travel-mitra-bg.png", placeName: "Sundarijal Hike", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. " },
    ]
    const term = (searchTerm || "").toLowerCase();

    const filteredPlaces = popularPlaces.filter(place =>
        place.placeName.toLowerCase().includes(term)
    );

    return (
        <>
            <section className='w-full py-6  md:px-10 px-5'>
                <h1 className='text-4xl font-bold text-black'><span className='text-green-600'>Popular</span> Searches Near You</h1>
                <div className='grid  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 justify-center mt-10 w-full'>
                    {filteredPlaces.map(({ src, placeName, description }, idx) => {
                        return (

                            <div key={idx} className='flex gap-10 md:w-[29vw] h-[70vh] rounded-xl shadow-lg'>
                                <div
                                    className='h-[50vh] w-full  rounded-t-2xl rounded-b-2xl'>
                                    <div className='h-[85%] w-full overflow-hidden rounded-t-xl'>
                                        <img src={src} alt="" className='h-full w-full object-cover  hover:scale-105 transition-transform duration-200 hover:cursor-pointer ' />
                                    </div>
                                    <div className=' w-full space-y-2 pt-2 p-4 '>
                                        <h1 className='font-semibold text-xl text-black font-sans'>{placeName}</h1>
                                        <p className='text-base text-gray-600 font-semibold'>{description}</p>
                                        <div className=' relative group border rounded-sm h-8 w-24 text-center border-green-500 bg-green-500 text-green-700 '>
                                            <span className='absolute h-full w-full bg-green-600 group-hover:scale-x-100 inset-0 scale-x-0 transition-all duration-300'></span>
                                            <Link to="trials" className='absolute z-20 inset-0 pt-0.5 text-white'>See More</Link>
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
