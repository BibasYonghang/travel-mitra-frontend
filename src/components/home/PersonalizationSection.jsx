import React from "react";
import { Heart, Map, TrendingUp, Compass } from "lucide-react"; // icons

export default function PersonalizationSection() {
    const features = [
        {
            icon: <Heart className="w-10 h-10 text-green-600" />,
            title: "Save Favorite Trails",
            description:
                "Keep a personal list of your top hiking spots and revisit them anytime.",
        },
        {
            icon: <Map className="w-10 h-10 text-green-600" />,
            title: "Create Custom Routes",
            description:
                "Plan and design your own hiking routes to explore the outdoors your way.",
        },
        {
            icon: <TrendingUp className="w-10 h-10 text-green-600" />,
            title: "Track Your Progress",
            description:
                "See your total distance hiked, number of trails completed, and achievements.",
        },
        {
            icon: <Compass className="w-10 h-10 text-green-600" />,
            title: "Suggested Hikes",
            description:
                "Get smart recommendations based on your location and hiking history.",
        },
    ];

    return (
        <section className=" rounded-2xl mt-16
        md:py-16 py-12
        md:px-10 px-5">
            <h2 className=" font-bold text-gray-800 
            md:text-4xl text-3xl ">
                <span className="text-green-600">Personalize</span>   Your Hiking Journey
            </h2>
            <p className="mt-2 text-gray-600 text-justify">
                Tailor your adventures with features designed to track your progress and
                suggest the best trails for you.
            </p>

            <div className="grid gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-4">
                {features.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
                    >
                        <div className="bg-green-100 p-4 rounded-full mb-4">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">
                            {item.title}
                        </h3>
                        <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
