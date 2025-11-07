import React, { useState } from "react";
import { Star, User } from "lucide-react";

export default function Review() {
    const [reviews, setReviews] = useState([
        {
            id: 1,
            name: "Sita Shrestha",
            comment: "Loved the Sunrise Hill trail! The route was peaceful and beautifully marked.",
            rating: 5,
            date: "2 days ago",
        },
        {
            id: 2,
            name: "Ram Thapa",
            comment: "Forest Trek was a bit challenging, but the view was worth every step!",
            rating: 4,
            date: "5 days ago",
        },
    ]);

    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");

    const handleSubmit = () => {
        if (!comment.trim() || rating === 0) return;

        const newReview = {
            id: Date.now(),
            name: "You",
            comment,
            rating,
            date: "Just now",
        };

        setReviews([newReview, ...reviews]);
        setComment("");
        setRating(0);
    };

    return (
        <div className="px-6 py-6 space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Traveler Reviews</h1>

            {/* Review Input */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 space-y-3">
                <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                            key={star}
                            onClick={() => setRating(star)}
                            className={`h-6 w-6 cursor-pointer transition ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                }`}
                        />
                    ))}
                </div>

                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Share your trekking experience..."
                    className="w-full border rounded-xl p-3 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
                    rows={3}
                />

                <button
                    onClick={handleSubmit}
                    className="bg-sky-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
                    Post Review
                </button>
            </div>

            {/* Review List */}
            <div className="space-y-4 grid
                            grid-cols-1 lg:grid-cols-2 ">
                {reviews.map((review) => (
                    <div
                        key={review.id}
                        className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex gap-4 transition hover:shadow-md">
                        <div className="bg-gray-100 rounded-full p-3 flex items-center justify-center">
                            <User className="text-gray-500" />
                        </div>
                        <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between">
                                <p className="font-semibold text-gray-900">{review.name}</p>
                                <p className="text-xs text-gray-500">{review.date}</p>
                            </div>

                            <div className="flex items-center gap-1">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}