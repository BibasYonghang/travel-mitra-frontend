import React from "react";
import { Heart, Map, TrendingUp, Compass } from "lucide-react"; // icons

export default function Personalization() {
    const iconClass = "w-6 sm:w-10 h-6 sm:h-10 text-green-600"
    const features = [
        {
            icon: <Heart className={iconClass} />,
            title: "Save Favorite Trails",
            description:
                "Keep a personal list of your top hiking spots and revisit them anytime.",
        },
        {
            icon: <Map className={iconClass} />,
            title: "Create Custom Routes",
            description:
                "Plan and design your own hiking routes to explore the outdoors your way.",
        },
        {
            icon: <TrendingUp className={iconClass} />,
            title: "Track Your Progress",
            description:
                "See your total distance hiked, number of trails completed, and achievements.",
        },
        {
            icon: <Compass className={iconClass} />,
            title: "Suggested Hikes",
            description:
                "Get smart recommendations based on your location and hiking history.",
        },
    ];

    return (
        <section className=" rounded-2xl mt-7
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

            <div className="grid mt-10
            grid-cols-1 sm:grid-cols-2 xl:grid-cols-4
            gap-2 sm:gap-8
            ">
                {features.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md hover:shadow-xl transition
                        p-2 sm:p-6 
                        "
                    >
                        <div className="bg-green-100 p-4 rounded-full mb-4">
                            {item.icon}
                        </div>
                        <h3 className=" font-semibold text-gray-800
                        text-xl
                        ">
                            {item.title}
                        </h3>
                        <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
