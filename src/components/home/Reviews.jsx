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
        <section className="relative  h-[145vh] " id="reviews">
            <div className="absolute h-screen w-full bg-green-500 bg">

            </div>
            <div className="absolute bottom-0 container md:px-10 px-5 ">
                <h2 className="font-bold mb-8 text-white
                md:text-4xl text-3xl">User <span className="text-black">Reviews</span> </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {reviews.map((review, idx) => (
                        <div
                            key={idx}
                            className="h-[50vh] bg-white shadow-md rounded-lg p-6  hover:shadow-xl transition"
                        >
                            <p className="text-gray-700 mb-4">"{review.comment}"</p>
                            <p className="font-semibold">{review.name}</p>
                            <p className="text-yellow-500">
                                {"★".repeat(review.rating)}{" "}
                                {"☆".repeat(5 - review.rating)}
                            </p>
                        </div>
                    ))}
                </div>
                <div className='relative group border rounded-sm h-8 w-60 mt-6 text-center border-green-500 bg-green-600 text-green-700'>
                    <span className='absolute h-full w-full bg-green-500 group-hover:scale-x-100 inset-0 scale-x-0 transition-all duration-300'></span>
                    <Link to="trials-info" className='absolute z-20 inset-0 pt-0.5 text-white'>See More and Leave One</Link>
                </div>
            </div>
        </section>
    );
}
