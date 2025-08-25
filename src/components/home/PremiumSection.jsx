import React from "react";

export default function PremiumSection() {
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
        <section className="mt-16 px-6 py-12 bg-green-50 rounded-lg text-center">
            <h2 className="text-3xl font-bold">Upgrade Your Adventures</h2>
            <p className="mt-2 text-gray-700 max-w-xl mx-auto">
                Whether you want to explore offline or create your own route, choose the membership
                that helps you make the most of every minute outdoors.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-8">
                {plans.map((plan) => (
                    <div
                        key={plan.name}
                        className={`w-72 border rounded-lg p-6 shadow-md hover:shadow-xl transition ${plan.name === "Premium" ? "bg-green-100 border-green-400" : "bg-white"
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
                            <button className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg font-bold hover:bg-green-700 transition">
                                Upgrade Now
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
