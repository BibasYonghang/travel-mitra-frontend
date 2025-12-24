import React, { useState, useEffect } from "react";
import { ArrowLeft, Star, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function Review() {

    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");


    const [reviews, setReviews] = useState([])

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




    useEffect(() => {
        const userReviews = async () => {
            try {
                const res = await fetch(`${APP_URL}/api/reviews`,)
                const data = await res.json();
                setReviews(data);
            } catch (error) {
                console.log(error)
            }

        }

        userReviews();
    }, [])




    return (
        <div className="px-6 py-6 space-y-6">
            <h1 className="text-3xl font-bold text-black">Traveler <span className="text-sky-600">Reviews</span></h1>

            {/* Review Input */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-sky-200 space-y-3">

                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Share your trekking experience..."
                    className="w-full min-h-60 border border-sky-200 rounded-xl p-3 text-sky-600  resize-none focus:outline-none focus:ring-2 focus:ring-sky-500"
                    rows={3}
                />
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

                <button
                    onClick={handleSubmit}
                    className="bg-sky-600 text-white px-6 py-2 rounded-lg hover:bg-sky-700 hover:cursor-pointer transition">
                    Post Review
                </button>
            </div>

            {/* Review List */}
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {reviews.map((review, idx) => (
                    <div
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
                    </div>
                ))}
            </div>
            <div className="mt-10 w-auto">
                <Link
                    to="/"
                    className="font-bold hover:scale-y-105 hover:text-sky-500 transform duration-150 underline sm:text-xl text-md flex items-center gap-2"
                >
                    <ArrowLeft size={20} className="mt-1" /> Back To Home
                </Link>
            </div>
        </div>
    );
}