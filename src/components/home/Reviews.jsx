import React from "react";

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
        <section className="py-12  md:px-10 px-5 bg-gray-100" id="reviews">
            <div className="container">
                <h2 className="font-bold mb-8 text-green-600
                md:text-4xl text-3xl">User <span className="text-black">Reviews</span> </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {reviews.map((review, idx) => (
                        <div
                            key={idx}
                            className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition"
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
            </div>
        </section>
    );
}
