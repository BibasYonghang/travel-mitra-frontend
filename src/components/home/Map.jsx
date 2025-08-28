import React from "react";

export default function Map() {
    return (
        <section className="py-12 bg-white" id="map-preview">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-8">Explore Trails on Map</h2>
                <div className="border rounded-lg overflow-hidden shadow-md">
                    <img
                        src="https://source.unsplash.com/1200x500/?map,mountains"
                        alt="Map Preview"
                        className="w-full h-80 object-cover"
                    />
                </div>
                <p className="mt-4 text-gray-600">
                    Visualize nearby trails and plan your next adventure.
                </p>
            </div>
        </section>
    );
}
