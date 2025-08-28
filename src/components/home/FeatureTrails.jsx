import React from "react";

const trails = [
    {
        name: "Sunrise Hill",
        location: "Lalitpur",
        difficulty: "Easy",
        distance: "5 km",
        duration: "2 hours",
        image: "https://source.unsplash.com/600x400/?hill,nature",
    },
    {
        name: "River View Trail",
        location: "Bhaktapur",
        difficulty: "Medium",
        distance: "8 km",
        duration: "3 hours",
        image: "https://source.unsplash.com/600x400/?river,nature",
    },
    {
        name: "Forest Trek",
        location: "Kathmandu",
        difficulty: "Hard",
        distance: "12 km",
        duration: "5 hours",
        image: "https://source.unsplash.com/600x400/?forest,trail",
    },
];

export default function FeaturedTrails() {
    return (
        <section className="py-12 bg-gray-50" id="featured-trails">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-8 text-center">Featured Trails</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {trails.map((trail, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <img
                                src={trail.image}
                                alt={trail.name}
                                className="w-full h-48 object-cover"
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
