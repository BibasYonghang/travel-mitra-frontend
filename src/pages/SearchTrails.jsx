import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function SearchTrails() {
    const { trailName } = useParams(); // this will be the slug from URL
    const [trail, setTrail] = useState(null);

    // Utility function to convert slug back to normal trail name
    const unslugify = (slug) => slug.replace(/-/g, " ").trim().toLowerCase();

    useEffect(() => {
        const fetchTrail = async () => {
            try {
                const res = await fetch(`${APP_URL}/api/trails`);
                const data = await res.json();

                const sluggedName = unslugify(trailName);
                const found = data.find(item => item.name.toLowerCase() === sluggedName);

                setTrail(found);
            } catch (error) {
                console.log("Error:", error);
            }
        };

        fetchTrail();
    }, [trailName]);

    if (!trail) {
        return (
            <p className="p-10 text-center text-xl text-red-600">
                Trail Not Found
            </p>
        );
    }

    return (
        <div className="p-6 md:p-10">
            <img
                src={trail.image || "/images/placeholder.jpg"}
                alt={trail.name}
                className="w-full rounded-lg h-[50vh] object-cover"
            />
            <h1 className="font-bold text-3xl mt-5 text-sky-700">{trail.name}</h1>
            <p className="mt-4 text-gray-700 text-lg">{trail.description}</p>

            <Link
                to="/trails"
                className="inline-block mt-8 text-sky-500 underline font-semibold"
            >
                ← Back to Trails
            </Link>
        </div>
    );
}
