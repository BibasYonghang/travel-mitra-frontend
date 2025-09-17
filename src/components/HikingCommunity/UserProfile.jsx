import React from "react";
import { User } from "lucide-react";

export default function UserProfile() {
    const users = [
        { name: "Alice", hikes: 12, achievement: "Mountain Conqueror" },
        { name: "Bob", hikes: 8, achievement: "Trail Explorer" },
        { name: "Charlie", hikes: 20, achievement: "Peak Master" },
    ];

    return (
        <section className="py-16 px-6 md:px-12 bg-green-50 min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
                Personal Hiking Profiles
            </h1>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                Track your hikes, achievements, and share your outdoor journey with the community.
            </p>

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                {users.map((user, idx) => (
                    <div
                        key={idx}
                        className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition text-center"
                    >
                        <User className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                        <h2 className="text-xl font-semibold">{user.name}</h2>
                        <p className="mt-2 text-gray-600">
                            Hikes Completed: <span className="font-bold">{user.hikes}</span>
                        </p>
                        <p className="mt-1 text-gray-500 italic">{user.achievement}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
