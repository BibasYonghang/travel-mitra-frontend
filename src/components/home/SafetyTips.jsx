import React from "react";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";

const tips = [
    "Wear comfortable hiking shoes.",
    "Check the weather forecast before heading out.",
    "Inform someone about your hiking plan.",
    "Carry a basic first-aid kit and map.",
    "Bring a fully charged mobile phone for emergencies.",
    "Pack light but include essential layers for changing weather.",
];

export default function SafetyTips() {
    return (
        <section className="py-12 md:px-10 px-5 bg-gray-100" id="safety-tips">
            <div className="container mx-auto">
                <h2 className="md:text-4xl text-3xl font-bold mb-12  text-green-600">
                    Safety <span className="text-black">Tips</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tips.map((tip, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4 hover:shadow-xl transition"
                        >
                            <ShieldCheckIcon className="w-7 h-7 text-green-600 flex-shrink-0" />
                            <p className="text-gray-700 font-medium">{tip}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
