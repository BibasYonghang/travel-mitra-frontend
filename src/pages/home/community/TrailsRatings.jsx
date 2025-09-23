import React from "react";
import { Star } from "lucide-react";

export default function TrailsRating() {
    const reviews = [
        { user: "Alice", trail: "Everest Base Camp", rating: 5, text: "Amazing experience!" },
        { user: "Bob", trail: "Annapurna Circuit", rating: 4, text: "Great trails but challenging." },
        { user: "Charlie", trail: "Langtang Valley", rating: 5, text: "Beautiful and peaceful." },
    ];

    return (
        <section className="py-16 px-6 md:px-12 bg-yellow-50 min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
                Trail Reviews & Ratings
            </h1>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                Share your feedback, rate trails, and help fellow hikers explore the best paths.
            </p>

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                {reviews.map((review, idx) => (
                    <div
                        key={idx}
                        className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition"
                    >
                        <h2 className="text-xl font-semibold">{review.user}</h2>
                        <p className="text-gray-600 mt-1 italic">{review.trail}</p>
                        <div className="flex mt-2 gap-1 text-yellow-500">
                            {Array.from({ length: review.rating }).map((_, i) => (
                                <Star key={i} className="w-4 h-4" />
                            ))}
                        </div>
                        <p className="mt-2 text-gray-700 text-sm">{review.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
