import React from "react";
import { Link } from "react-router-dom";

const trails = [
    {
        name: "Sunrise Hill",
        location: "Lalitpur",
        difficulty: "Easy",
        distance: "5 km",
        duration: "2 hours",
        image: "/images/background-image1.png",
    },
    {
        name: "River View Trail",
        location: "Bhaktapur",
        difficulty: "Medium",
        distance: "8 km",
        duration: "3 hours",
        image: "/images/background-image2.png",
    },
    {
        name: "Forest Trek",
        location: "Kathmandu",
        difficulty: "Hard",
        distance: "12 km",
        duration: "5 hours",
        image: "/images/background-image3.png",
    },
];

export default function FeaturedTrails() {
    return (
        <section className="py-12  md:px-10 px-5" id="featured-trails">
            <div className="container mx-auto ">
                <h2 className="font-bold mb-8 text-black
                md:text-4xl text-3xl"> <span className="text-green-600">Featured</span>  Trails</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {trails.map((trail, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className='w-full h-72  overflow-hidden rounded-t-xl'>
                                <img
                                    src={trail.image}
                                    alt={trail.name}
                                    className="w-full h-full object-cover  hover:scale-105 transition-transform duration-200 hover:cursor-pointer"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{trail.name}</h3>
                                <p className="text-gray-600 mb-1">Location: {trail.location}</p>
                                <p className="text-gray-600 mb-1">Difficulty: {trail.difficulty}</p>
                                <p className="text-gray-600 mb-1">
                                    Distance: {trail.distance} | Duration: {trail.duration}
                                </p>
                                <div className=' relative group border rounded-sm h-8 w-24 text-center border-green-500 bg-green-500 text-green-700 '>
                                    <span className='absolute h-full w-full bg-green-600 group-hover:scale-x-100 inset-0 scale-x-0 transition-all duration-300'></span>
                                    <Link to="trials" className='absolute z-20 inset-0 pt-0.5 text-white'>See More</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
