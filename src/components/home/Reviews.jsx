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
];

export default function Reviews() {
    return (
        <section  id="#about-app" className="relative h-[115vh] w-full text-white bg-white">
            {/* About Section */}
            <div className="relative w-full py-16 flex flex-col items-center text-center px-4 md:px-12">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-90"
                    style={{ backgroundImage: "url('/images/app-description-text-bg.png')" }}
                ></div>

                <div className="relative z-10 xl:pr-80 lg:pr-60 md:pr-44 sm:pr-40">
                    <h1 className="text-2xl md:text-4xl font-extrabold text-start text-green-700 mb-6">
                        About <span className="text-black">Travel Mitra</span>
                    </h1>

                    <p className="text-sm md:text-lg text-black leading-relaxed text-justify">
                        TravelMitra is a platform designed especially for individuals who are passionate about hiking, trekking, and discovering new natural landscapes. We understand that planning a trek is not just about choosing a destination — it’s about having clear, reliable information to make the journey safe, enjoyable, and well-prepared.
                        <br /><br />
                        With TravelMitra, travelers can explore verified insights about trekking routes, trail conditions, difficulty levels, weather expectations, required equipment, estimated travel costs, accommodation availability, and local guidance options. Our mission is to inspire exploration by providing accurate, community-driven insights.
                        <br /><br />
                        Whether you're a beginner or a seasoned trekker, TravelMitra helps you prepare smartly so you can focus on enjoying the journey while staying confident and informed.
                    </p>
                </div>
            </div>

            {/* Reviews Section */}
            <div  className="absolute bottom-0 py-16 px-4 md:px-12 text-gray-800">
                <div className="max-w-6xl mx-auto">
                    <h2 className="font-bold text-3xl md:text-4xl text-center md:text-left mb-10">
                        User <span className="text-green-600">Reviews</span>
                    </h2>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {reviews.map((review, idx) => (
                            <div
                                key={idx}
                                className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition flex flex-col justify-between"
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
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 flex justify-center md:justify-start">
                        <Link
                            to="trials-info"
                            className="px-6 py-3 rounded-sm bg-green-600 border border-green-600 text-white font-medium hover:bg-green-500 transition"
                        >
                            See More & Leave a Review
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
