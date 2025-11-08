import { ArrowRight, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const reviews = [
    {
        name: "Sita Shrestha",
        comment: "Loved the Sunrise Hill trail! The early morning trek was peaceful, and the sunrise over the valley was breathtaking. The trail was well-marked, and I felt completely safe throughout. Highly recommend for beginners and anyone who loves nature.",
        rating: 5,
    },
    {
        name: "Ram Thapa",
        comment: "Forest Trek was challenging but totally worth it. The trail had steep climbs, yet the lush greenery and waterfalls made every step enjoyable. The guide was knowledgeable and made the trek safe and fun. Highly recommend for adventure and nature lovers.",
        rating: 4,
    },
    {
        name: "Mina Koirala",
        comment: "River View Trail had amazing views! Walking along the riverside while birds chirped and the breeze kept the weather perfect made this trek unforgettable. The local homestays were welcoming. Highly recommend for those seeking a serene trekking experience.",
        rating: 5,
    },
    {
        name: "Bibas Yonghang",
        comment: "Ghandruk trek was truly beautiful. The panoramic views of Annapurna and Machhapuchhre were surreal, and the Gurung culture along the way was fascinating. Every day brought a new hidden gem. Highly recommend for  hikers seeking a memorable journey.",
        rating: 5,
    },
];

export default function Reviews() {
    return (
        <section id="#about-app" className="relative w-full text-white bg-white xl:h-[150vh] lg:h-[200vh] md:h-[215vh] sm:h-[190vh] h-[320vh]">
            {/* About Section */}
            <div className="relative w-full py-16 flex flex-col items-center text-center px-4 md:px-10">
                <div
                    className="absolute h-[100vh] inset-0 bg-cover bg-center opacity-90"
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
            <div className="relative w-full bottom-20 py-16 px-4 md:px-10 text-gray-800">
                <h2 className="font-bold text-3xl md:text-4xl mb-10">
                    User <span className="text-sky-600">Reviews</span>
                </h2>

                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {reviews.map((review, idx) => (
                        <Link
                            to="user-review"
                            key={idx}
                            className="h-auto min-h-[50vh] bg-gradient-to-br from-white to-gray-100 shadow-lg rounded-xl p-6 hover:shadow-2xl hover:scale-102 transition-transform flex flex-col justify-between"
                        >
                            {/* Reviewer avatar placeholder */}
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 rounded-full bg-sky-200 flex items-center justify-center font-bold text-sky-700">
                                    {review.name.charAt(0)}
                                </div>
                                <p className="ml-3 font-semibold text-gray-800">{review.name}</p>
                            </div>

                            <p className="text-gray-700 mb-4 text-justify text-sm md:text-base italic">
                                "{review.comment}"
                            </p>

                            <div className="flex items-center mt-auto">
                                {Array.from({ length: review.rating }).map((_, i) => (
                                    <Star key={i} className="text-yellow-500 w-5 h-5" />
                                ))}
                                {Array.from({ length: 5 - review.rating }).map((_, i) => (
                                    <Star key={i} className="text-gray-300 w-5 h-5" />
                                ))}
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-10">
                    <Link
                        to="user-review"
                        className="font-bold hover:text-sky-500 transform duration-100 underline sm:text-xl text-md flex items-center gap-2"
                    >
                        See More & Leave a Review <ArrowRight size={20} className="mt-1"/>
                    </Link>
                </div>
            </div>
        </section>
    );
}
