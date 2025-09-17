import React from "react";
import { MessageSquare } from "lucide-react";

export default function CommunityForum() {
    const questions = [
        { user: "Alice", question: "Best time to hike Everest Base Camp?", answers: 12 },
        { user: "Bob", question: "How to prepare for Annapurna Circuit?", answers: 8 },
        { user: "Charlie", question: "Tips for Langtang Valley with family?", answers: 5 },
    ];

    return (
        <section className="py-16 px-6 md:px-12 bg-purple-50 min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
                Community Forum & Q&A
            </h1>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                Ask questions, exchange tips, and connect with experienced hikers.
            </p>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                {questions.map((q, idx) => (
                    <div
                        key={idx}
                        className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <MessageSquare className="w-6 h-6 text-purple-600" />
                            <h2 className="font-semibold text-gray-800">{q.user}</h2>
                        </div>
                        <p className="text-gray-700">{q.question}</p>
                        <p className="mt-2 text-gray-500 text-sm">{q.answers} Answers</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
