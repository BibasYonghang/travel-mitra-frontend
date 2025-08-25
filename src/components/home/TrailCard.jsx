import React, { useState } from "react";

function TrailCard({ trail, onSelect }) {
    return (
        <div
            className="border rounded-lg p-4 shadow-md hover:shadow-xl transition cursor-pointer"
            onClick={() => onSelect(trail)}
        >
            <img
                src={trail.image}
                alt={trail.name}
                className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="mt-2 text-lg font-bold">{trail.name}</h3>
            <p className="text-gray-600">
                Distance: {trail.distance} km | Duration: {trail.duration} min
            </p>
        </div>
    );
}

export default function TrailList() {
    const [trails] = useState([
        { id: 1, name: "Mountain Trail", distance: 10, duration: 120, image: "/images/trail1.jpg" },
        { id: 2, name: "Forest Trail", distance: 7, duration: 90, image: "/images/trail2.jpg" },
        { id: 3, name: "River Trail", distance: 5, duration: 60, image: "/images/trail3.jpg" },
        { id: 4, name: "Sunset Trail", distance: 8, duration: 100, image: "/images/trail4.jpg" },
    ]);

    const handleSelect = (trail) => {
        alert(`Selected Trail: ${trail.name}`);
    };

    return (
        <section className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-6">Trails</h2>
            <div className="flex flex-wrap justify-center gap-6">
                {trails.map((trail) => (
                    <TrailCard key={trail.id} trail={trail} onSelect={handleSelect} />
                ))}
            </div>
        </section>
    );
}
