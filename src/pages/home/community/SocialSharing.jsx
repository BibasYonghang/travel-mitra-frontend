import React from "react";
import { Camera } from "lucide-react";

export default function SocialSharing() {
    const posts = [
        { user: "Alice", image: "/images/hike1.jpg", caption: "Sunrise at Everest Base Camp!" },
        { user: "Bob", image: "/images/hike2.jpg", caption: "Annapurna Circuit trek completed!" },
        { user: "Charlie", image: "/images/hike3.jpg", caption: "Beautiful Langtang Valley views." },
    ];

    return (
        <section className="py-16 px-6 md:px-12 bg-pink-50 min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
                Photo & Adventure Sharing
            </h1>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                Share your hiking photos and explore adventures from other community members.
            </p>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
                    >
                        <img src={post.image} alt={post.caption} className="w-full h-64 object-cover" />
                        <div className="p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <Camera className="w-5 h-5 text-pink-600" />
                                <h2 className="font-semibold">{post.user}</h2>
                            </div>
                            <p className="text-gray-700 text-sm">{post.caption}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
