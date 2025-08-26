import React from "react";
import { User, Star, MessageSquare, Camera } from "lucide-react";

export default function CommunitySection() {
    const features = [
        {
            icon: <User className="w-10 h-10 text-blue-600" />,
            title: "User Profiles",
            description:
                "Log completed hikes, track achievements, and showcase your outdoor journey.",
            bg: "bg-blue-100",
        },
        {
            icon: <Star className="w-10 h-10 text-yellow-600" />,
            title: "Trail Reviews & Ratings",
            description:
                "Share feedback, rate trails, and upload photos to help fellow hikers.",
            bg: "bg-yellow-100",
        },
        {
            icon: <MessageSquare className="w-10 h-10 text-purple-600" />,
            title: "Forum & Q&A",
            description:
                "Ask questions, exchange tips, and connect with the hiking community.",
            bg: "bg-purple-100",
        },
        {
            icon: <Camera className="w-10 h-10 text-pink-600" />,
            title: "Social Sharing",
            description:
                "Post your hiking photos and experiences in an Instagram-style feed.",
            bg: "bg-pink-100",
        },
    ];

    return (
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-white rounded-2xl mt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
                Join the Hiking Community
            </h2>
            <p className="mt-2 text-gray-600 text-center max-w-2xl mx-auto">
                Connect with other hikers, share your experiences, and become part of a
                thriving outdoor community.
            </p>

            <div className="grid gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-4">
                {features.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl hover:cursor-pointer transition"
                    >
                        <div className={`${item.bg} p-4 rounded-full mb-4`}>
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
