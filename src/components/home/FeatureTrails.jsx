import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function FeatureTrails() {
    const [trailsData, setTrailsData] = useState([]);

    useEffect(() => {
        const fetchTrails = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/trails");
                const data = await res.json();
                setTrailsData(data); // store API data in state
            } catch (error) {
                console.log(`Internal Error Says: ${error}`);
            }
        }

        fetchTrails();
    }, []);


    return (
        <section className='w-full py-6 md:px-10 px-5'>
            <h1 className='font-bold text-black md:text-4xl text-3xl'>
                <span className='text-green-600'>Featured</span> Trails
            </h1>
            <div className='grid gap-3 justify-center mt-5 w-full grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
                {trailsData.map(({ src, placeName, location, distance, duration }, idx) => (
                    <div key={idx} className='flex gap-10 shadow-lg py-3 sm:py-6 px-2 sm:px-3'>
                        <div className='w-full'>
                            <div className='w-full overflow-hidden'>
                                <img
                                    src={src || "/images/background-image1.png"}
                                    alt={placeName}
                                    className='w-full object-cover hover:scale-105 transition-transform duration-200 hover:cursor-pointer
                                               h-[18vh] sm:h-[28vh] md:h-[33vh] xl:h-[37vh]'
                                />
                            </div>
                            <div className='w-full pt-2'>
                                <h1 className='font-bold text-black font-sans text-base md:text-xl'>{placeName}</h1>
                                <div className='text-sm sm:text-lg'>
                                    <p><span className='font-semibold'>Distance : </span>{distance}</p>
                                    <p><span className='font-semibold'>Time : </span>{duration}</p>
                                    <p><span className='font-semibold'>Location : </span>{location}</p>
                                </div>

                                <div className='relative group border rounded-sm h-8 w-24 text-center border-green-500 bg-green-600 text-green-700'>
                                    <span className='absolute h-full w-full bg-green-500 group-hover:scale-x-100 inset-0 scale-x-0 transition-all duration-300'></span>
                                    <Link to="trials-info" className='absolute z-20 inset-0 pt-0.5 text-white'>See More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
