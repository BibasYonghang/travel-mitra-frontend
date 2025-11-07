import React from "react";
import { Link } from "react-router-dom";

export default function Premium() {
    const plans = [
        {
            name: "Free",
            price: "$0",
            features: [
                "Access to basic trails",
                "Limited map downloads",
                "Community support",
            ],
        },
        {
            name: "Premium",
            price: "$9.99/month",
            features: [
                "Offline trail maps",
                "Custom route creation",
                "Exclusive premium trails",
                "Priority support",
                "Special adventure discounts",
            ],
        },
    ];

    return (
        <div className="relative  md:px-10 px-5 mt-16 overflow-hidden">
            <img src="/images/premium-image-bg.png" alt="Premium Background Image" className="md:h-[90vh] sm:h-[70vh] h-[50vh] object-cover md:object-top object-right md:rounded-2xl rounded-t-2xl w-full " />
            <section className="md:absolute bg-gray-200 md:bg-transparent  rounded-b-2xl top-0 md:px-20 px-6 md:py-12 py-8">
                <h2 className="md:text-4xl text-3xl font-bold md:text-gray-50">Elevate Your Hiking Adventures</h2>
                <p className="mt-2 md:text-gray-100 max-w-xl text-justify">
                    Take your hikes to the next level! Explore trails, create your own routes, and enjoy every step of your outdoor adventure with the membership that unlocks the best experiences on the trail.
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mt-8">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`lg:w-[26vw] md:w-[35vw] sm:w-[37vw] border rounded-lg p-6 shadow-md hover:shadow-xl transition ${plan.name === "Premium" ? "bg-sky-100 border-sky-400" : "bg-white border-sky-400"
                                }`}
                        >
                            <h3 className="text-xl font-bold">{plan.name}</h3>
                            <p className="mt-2 text-2xl font-extrabold">{plan.price}</p>
                            <ul className="mt-4 text-left list-disc list-inside text-gray-700">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                            {plan.name === "Premium" && (
                                <Link to="premium" className="relative inline-block group h-9 w-full bg-sky-600 rounded-md group mt-3">
                                    <span className="absolute w-full h-full bg-sky-500 scale-x-0 origin-center rounded-md group-hover:scale-x-100 transition-transform duration-300"></span>
                                    <span className="absolute z-30 w-full text-center mt-1 h-full group-hover:cursor-pointer text-white ">Upgrade Now</span>
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}
