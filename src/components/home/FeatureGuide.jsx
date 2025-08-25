import React from "react";

export default function FeatureGuide() {
    const guides = [
        { id: 1, name: "John Doe", experience: 5, image: "/images/guide1.jpg" },
        { id: 2, name: "Jane Smith", experience: 7, image: "/images/guide2.jpg" },
        { id: 3, name: "Mike Johnson", experience: 4, image: "/images/guide3.jpg" },
        { id: 4, name: "Emily Davis", experience: 6, image: "/images/guide4.jpg" },
    ];

    return (
        <section className="mt-16">
            <h2 className="text-3xl font-bold text-center">Featured Guides</h2>
            <div className="flex flex-wrap justify-center gap-6 mt-6">
                {guides.map((guide) => (
                    <div
                        key={guide.id}
                        className="w-60 border rounded-lg p-4 shadow-md hover:shadow-lg transition"
                    >
                        <img
                            src={guide.image}
                            alt={guide.name}
                            className="w-full h-40 object-cover rounded-md"
                        />
                        <h3 className="mt-2 font-bold">{guide.name}</h3>
                        <p className="text-gray-600">{guide.experience} yrs experience</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
