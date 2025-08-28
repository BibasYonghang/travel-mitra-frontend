import React from "react";

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
                            <img
                                src={trail.image}
                                alt={trail.name}
                                className="w-full h-72 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{trail.name}</h3>
                                <p className="text-gray-600 mb-1">Location: {trail.location}</p>
                                <p className="text-gray-600 mb-1">Difficulty: {trail.difficulty}</p>
                                <p className="text-gray-600 mb-1">
                                    Distance: {trail.distance} | Duration: {trail.duration}
                                </p>
                                <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
