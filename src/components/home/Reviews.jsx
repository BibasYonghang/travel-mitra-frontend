import { ArrowBigUp, ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const reviews = [
    {
        name: "Sita Shrestha",
        comment: "Loved the Sunrise Hill trail! Easy and scenic.",
        rating: 5,
    },
    {
        name: "Ram Thapa",
        comment: "Forest Trek was challenging but totally worth it.",
        rating: 4,
    },
    {
        name: "Mina Koirala",
        comment: "River View Trail had amazing views. Highly recommend!",
        rating: 5,
    },
    {
        name: "Mina Koirala",
        comment: "River View Trail had amazing views. Highly recommend!",
        rating: 5,
    },
];

export default function Reviews() {
    return (

        <>
            <section id="#about-app" className="relative  w-full text-white bg-white
                                                xl:h-[150vh] lg:h-[200vh] md:h-[215vh] sm:h-[190vh] h-[320vh]
                                                 ">
                {/* About Section */}
                <div className="relative w-full py-16 flex flex-col items-center text-center px-4 md:px-10">
                    <div
                        className="absolute h-[100vh] inset-0 bg-cover bg-center opacity-90 "
                        style={{ backgroundImage: "url('/images/app-description-text-bg.png')" }}
                    >
                        <div className="absolute w-full h-[20vh] top-0 bg-gradient-to-b from-white to-transparent"></div>
                        <div className="absolute w-full h-[20vh] bottom-0 bg-gradient-to-t from-white to-transparent"></div>

                    </div>

                    <div className="relative z-10 xl:pr-80 lg:pr-60 md:pr-44 sm:pr-40">
                        <h1 className="text-2xl md:text-4xl font-extrabold text-start text-sky-700 mb-6">
                            About <span className="text-black">Travel Mitra</span>
                        </h1>

                        <p className="text-sm md:text-lg text-black leading-relaxed text-justify">
                            TravelMitra is a platform for <span className="text-gray-900 font-semibold">hiking, trekking, and discovering new natural landscapes</span>. We provide <span className="text-gray-900 font-semibold">verified insights on routes, trail conditions, difficulty levels, weather expectations, required equipment, estimated travel costs, accommodations, and local guides</span> to help travelers plan with confidence.
                            <br /><br />
                            Our mission is to <span className="text-gray-900 font-semibold">inspire exploration</span> by giving users <span className="text-gray-900 font-semibold">accurate, community-driven information</span> so every journey can be <span className="text-gray-900 font-semibold">safe, enjoyable, and well-prepared</span>.
                            <br /><br />
                            Whether you're a beginner or an experienced trekker, TravelMitra helps you <span className="text-gray-900 font-semibold">plan smartly, stay informed, and focus on enjoying every moment of your adventure</span>.
                        </p>

                    </div>
                </div>

                {/* Reviews Section */}
                <div className="relative w-full bottom-20 py-16 px-4 md:px-10 text-gray-800 ">
                    <div className="">
                        <h2 className="font-bold text-3xl md:text-4xl mb-10">
                            User <span className="text-sky-600">Reviews</span>
                        </h2>

                        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                            {reviews.map((review, idx) => (
                                <Link
                                    to="user-review"
                                    key={idx}
                                    className="h-[50vh] bg-white shadow-md rounded-lg p-6 hover:shadow-xl hover:cursor-pointer transition flex flex-col justify-between"
                                >
                                    <p className="text-gray-700 mb-4 text-sm md:text-base">
                                        "{review.comment}"
                                    </p>
                                    <div>
                                        <p className="font-semibold">{review.name}</p>
                                        <p className="text-yellow-500 text-lg">
                                            {"★".repeat(review.rating)}{" "}
                                            {"☆".repeat(5 - review.rating)}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="mt-10 flex">
                            <Link
                                to="user-review"
                                className="font-bold hover:scale-102 hover:text-sky-500 transform duration-150 underline 
                                           sm:text-xl text-md"
                            >
                                See More & Leave a Review <ArrowRight size={20} className="inline" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
