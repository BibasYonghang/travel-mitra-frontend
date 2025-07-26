import React from 'react'
import { Link } from 'react-router-dom'

export default function PopularSearches() {

    const popularPlaces = [
        { src: "/images/travel-mitra-bg.png", placeName: "Gamecho Hike", title: "Gamacho Hiking", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis aperiam hic neque eligendi doloribus id? Sed earum corporis aliquam necessitatibus, maxime porro quasi esse at veniam eligendi pariatur harum eaque." },
        { src: "/images/travel-mitra-bg.png", placeName: "Champadevi Hike", title: "Gamacho Hiking", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis aperiam hic neque eligendi doloribus id? Sed earum corporis aliquam necessitatibus, maxime porro quasi esse at veniam eligendi pariatur harum eaque." },
        { src: "/images/travel-mitra-bg.png", placeName: "Lakuri Bhanjyang Hike", title: "Gamacho Hiking", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis aperiam hic neque eligendi doloribus id? Sed earum corporis aliquam necessitatibus, maxime porro quasi esse at veniam eligendi pariatur harum eaque." },
        { src: "/images/travel-mitra-bg.png", placeName: "Sundarijal Hike", title: "Gamacho Hiking", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis aperiam hic neque eligendi doloribus id? Sed earum corporis aliquam necessitatibus, maxime porro quasi esse at veniam eligendi pariatur harum eaque." },
        { src: "/images/travel-mitra-bg.png", placeName: "PhulChoki Hike", title: "Gamacho Hiking", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis aperiam hic neque eligendi doloribus id? Sed earum corporis aliquam necessitatibus, maxime porro quasi esse at veniam eligendi pariatur harum eaque." },
    ]

    return (
        <>
            <section className='w-full px-36 py-5'>
                <h1 className='text-4xl font-bold text-blue-500'>Popular Searches</h1>
                <div className='grid grid-cols-1 gap-10 mt-10 w-full'>
                    {popularPlaces.map(({ src, placeName, title, description }, idx) => {
                        return (
                            <>
                                <div className='flex gap-10 w-full '>
                                    <div
                                        key={idx}
                                        className='h-[50vh] w-[30%] shadow-[0_0_5px_rgba(0,0,0,0.3)]'>
                                        <img src={src} alt="" className='h-[75%] w-full object-cover' />
                                        <div className=' px-5  space-y-2 pt-2 '>
                                            <h1 className='font-semibold text-blue-500'>{placeName}</h1>
                                            <div className=' relative group border h-9 w-24 text-center border-blue-500 text-blue-500 '>
                                                <span className='absolute h-full w-full bg-blue-500 group-hover:scale-x-100 inset-0 scale-x-0 transition-all duration-300'></span>
                                                <Link to="" className='absolute z-20 inset-0 pt-1 group-hover:text-white'>See More</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <section className=' w-[70%] text-justify'>
                                        <h1 className='font-bold text-2xl text-blue-500'>{title}</h1>
                                        <p className='text-lg'>{description}</p>
                                    </section>
                                </div>

                            </>

                        )
                    })
                    }
                </div>

            </section>
        </>
    )
}
