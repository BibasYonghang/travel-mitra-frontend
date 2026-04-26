import { ArrowRight, Star } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../../config/env";
import ArrowRightButton from "../../common/buttons/ArrowRightButton";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const scrollContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef(null);
  const scrollSpeed = 1; // pixels per frame

  useEffect(() => {
    const userReviews = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/api/reviews`);
        const data = await res.json();
        // Duplicate reviews for seamless infinite scroll if needed
        setReviews(data);
      } catch (error) {
        console.log(error);
      }
    };

    userReviews();
  }, []);

  // Auto-scroll animation
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer || reviews.length === 0) return;

    const startScrolling = () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);

      const scroll = () => {
        if (!isHovered && scrollContainer) {
          // Scroll right
          scrollContainer.scrollLeft += scrollSpeed;

          // Reset to start when reaching the end (for seamless loop)
          if (
            scrollContainer.scrollLeft + scrollContainer.clientWidth >=
            scrollContainer.scrollWidth - 2
          ) {
            scrollContainer.scrollLeft = 0;
          }
        }
        animationRef.current = requestAnimationFrame(scroll);
      };

      animationRef.current = requestAnimationFrame(scroll);
    };

    startScrolling();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [reviews, isHovered]);

  return (
    <section
      id="#about-app"
      className="relative w-full text-white bg-white py-4"
    >
      {/* About Section */}
      <div className="relative w-full py-16 flex flex-col items-center text-center px-4 md:px-10">
        <div
          className="absolute h-[100vh] inset-0 bg-cover bg-center opacity-90"
          style={{
            backgroundImage: "url('/images/app-description-text-bg.png')",
          }}
        >
          <div className="absolute w-full h-[20vh] top-0 bg-gradient-to-b from-white to-transparent"></div>
          <div className="absolute w-full h-[20vh] bottom-0 bg-gradient-to-t from-white to-transparent"></div>
        </div>

        <div className="relative z-10 xl:pr-80 lg:pr-60 md:pr-44 sm:pr-40">
          <h1 className="text-2xl md:text-4xl font-extrabold text-start text-sky-700 mb-6">
            About <span className="text-black">Travel Mitra</span>
          </h1>

          <p className="text-sm md:text-lg text-black leading-relaxed text-justify">
            TravelMitra is a platform for{" "}
            <span className="text-gray-900 font-semibold">
              hiking, trekking, and discovering new natural landscapes
            </span>
            . We provide{" "}
            <span className="text-gray-900 font-semibold">
              verified insights on routes, trail conditions, difficulty levels,
              weather expectations, required equipment, estimated travel costs,
              accommodations, and local guides
            </span>{" "}
            to help travelers plan with confidence.
            <br />
            <br />
            Our mission is to{" "}
            <span className="text-gray-900 font-semibold">
              inspire exploration
            </span>{" "}
            by giving users{" "}
            <span className="text-gray-900 font-semibold">
              accurate, community-driven information
            </span>{" "}
            so every journey can be{" "}
            <span className="text-gray-900 font-semibold">
              safe, enjoyable, and well-prepared
            </span>
            .
            <br />
            <br />
            Whether you're a beginner or an experienced trekker, TravelMitra
            helps you{" "}
            <span className="text-gray-900 font-semibold">
              plan smartly, stay informed, and focus on enjoying every moment of
              your adventure
            </span>
            .
          </p>
        </div>
      </div>

      {/* Reviews Section - Horizontal Scrolling with Pause on Hover */}
      <div className="relative w-full  p-4 md:px-10 text-gray-800 overflow-hidden">
        <h2 className="font-bold text-3xl md:text-4xl mb-10">
          User <span className="text-sky-600">Reviews</span>
        </h2>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide cursor-grab scroll-smooth"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {reviews.map((review, idx) => (
            <Link
              to="user-review"
              key={idx}
              className="flex-shrink-0 w-[280px] md:w-[320px] lg:w-[350px] min-h-[380px] bg-gradient-to-br from-white to-gray-50 shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between border border-gray-100 hover:border-sky-200 group"
            >
              {/* Reviewer avatar with gradient */}
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-xl">
                      {review.name?.charAt(0) || "T"}
                    </span>
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 bg-green-500 rounded-full p-1 border-2 border-white">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-lg">
                    {review.name || "Traveler"}
                  </p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="text-xs text-gray-400">
                      Verified Traveler
                    </span>
                  </div>
                </div>
              </div>

              {/* Review Comment */}
              <div className="flex-1 mb-4">
                <div className="relative">
                  <svg
                    className="absolute -top-1 -left-2 w-6 h-6 text-sky-200 opacity-50"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M10 8L6 16H10V24H4V16L8 8H10ZM22 8L18 16H22V24H16V16L20 8H22Z" />
                  </svg>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed pl-4 italic">
                    "
                    {review.comment ||
                      "Amazing experience with Travel Mitra! Highly recommended for all adventure lovers."}
                    "
                  </p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 transition-all duration-200 ${
                        i < review.rating
                          ? "text-yellow-400 fill-yellow-400 drop-shadow-sm"
                          : "text-gray-200 fill-gray-200"
                      }`}
                    />
                  ))}
                  <span className="text-xs font-medium text-gray-500 ml-1">
                    {review.rating}.0
                  </span>
                </div>
                <div className="text-sky-500 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Read more →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Gradient Overlays for smooth edges */}
        <div className="absolute left-0 top-24 bottom-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-24 bottom-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

        <ArrowRightButton
          buttonTitle={"See More & Leave a Review"}
          buttonLink={"user-review"}
        />
      </div>

      {/* Custom CSS for hiding scrollbar */}
      {/* <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}</style> */}
    </section>
  );
}
