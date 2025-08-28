import React from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

const tips = [
    "Always carry enough water and snacks.",
    "Wear comfortable hiking shoes.",
    "Check the weather forecast before heading out.",
    "Inform someone about your hiking plan.",
    "Carry a basic first-aid kit and map.",
];

export default function SafetyTips() {
    return (
        <section className="py-12 bg-gray-50" id="safety-tips">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center text-red-600">
                    Safety Tips
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tips.map((tip, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4 hover:shadow-xl transition"
                        >
                            <ExclamationTriangleIcon className="w-8 h-8 text-red-500 flex-shrink-0" />
                            <p className="text-gray-700 font-medium">{tip}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
