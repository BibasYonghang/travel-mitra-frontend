import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, ArrowUpRight } from "lucide-react";

export default function TrailInfo() {
    const { trailName, trailId } = useParams(); // get both params
    const [trail, setTrail] = useState(null);
    const [notFound, setNotFound] = useState(false);

    const unslugify = slug => slug.replace(/-/g, " ").trim().toLowerCase();

    useEffect(() => {
        const fetchTrail = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/trails");
                const data = await res.json();

                let found = null;

                if (trailId) {
                    found = data.find(t => t._id === trailId);
                } else if (trailName) {
                    found = data.find(t => t.name.toLowerCase() === unslugify(trailName));
                }

                if (!found) {
                    setNotFound(true);
                    return;
                }

                setTrail(found);
            } catch (err) {
                console.log("Error:", err);
            }
        };

        fetchTrail();
    }, [trailId, trailName]);

    if (notFound) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
                <h1 className="text-3xl font-bold text-red-600 mb-3">Trail Not Found</h1>
                <p className="text-gray-600 mb-6">
                    The trail you searched for is not available in our database.
                </p>
                <Link to="/trails" className="text-sky-600 underline text-lg">Go Back to Trails</Link>
            </div>
        );
    }

    if (!trail) return <div className="p-10 text-center text-xl">Loading...</div>;

    const images = trail.images || [trail.image || "/images/placeholder.jpg"];
    const stats = [
        { label: "Length", value: trail.length || "N/A" },
        { label: "Elevation", value: trail.elevation || "N/A" },
        { label: "Time", value: trail.time || "N/A" },
        { label: "Difficulty", value: trail.difficulty || "N/A" },
    ];
    const reviews = trail.reviews || [];

    return (
        <div className="min-h-screen bg-slate-50 md:p-8 p-2">
            <div className="w-[93vw] mx-auto bg-white/90 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border border-sky-200">
                {/* HEADER */}
                <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-6 bg-gradient-to-r from-sky-700 to-sky-500 text-white">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center text-2xl font-semibold">
                            {trail.name.slice(0, 2).toUpperCase()}
                        </div>
                        <div>
                            <h1 className="text-2xl md:text-3xl font-extrabold">{trail.name}</h1>
                            <p className="text-sm opacity-90">{trail.location || "Nepal"}</p>
                        </div>
                    </div>

                    <div className="flex gap-3 items-center">
                        <div className="flex items-center gap-2 text-sm">
                            <Star className="w-4 h-4" />
                            <span className="font-semibold">{trail.rating || "4.5"}</span>
                            <span className="opacity-90">({reviews.length} reviews)</span>
                        </div>
                        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-sky-700 font-semibold shadow-sm hover:scale-105 transition">
                            Get directions
                            <ArrowUpRight className="w-4 h-4" />
                        </button>
                    </div>
                </header>

                {/* MAIN CONTENT */}
                <main className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                    {/* LEFT SIDE */}
                    <section className="md:col-span-2 space-y-4">
                        <div className="rounded-xl overflow-hidden shadow-md">
                            <img src={images[0]} alt={trail.name} className="w-full h-80 object-cover" />
                        </div>
                        <div className="flex gap-2">
                            {images.map((src, i) => (
                                <img key={i} src={src} alt="" className="w-24 h-16 rounded-md object-cover" />
                            ))}
                        </div>
                        <div className="p-4 bg-white shadow-sm rounded-xl border">
                            <h2 className="text-lg font-bold mb-2">About this trail</h2>
                            <p className="text-slate-700 leading-relaxed">
                                {trail.description || "No detailed description available for this trail."}
                            </p>
                        </div>
                    </section>

                    {/* RIGHT SIDE */}
                    <aside className="space-y-4">
                        <div className="rounded-xl p-4 bg-white border shadow-sm">
                            <h4 className="text-lg font-bold">Trail Stats</h4>
                            <ul className="mt-3 grid grid-cols-2 gap-3">
                                {stats.map((s) => (
                                    <li key={s.label} className="p-3 rounded-lg bg-sky-50">
                                        <div className="text-xs text-slate-500">{s.label}</div>
                                        <div className="font-semibold">{s.value}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </main>

                {/* FOOTER */}
                <footer className="p-6 border-t bg-white flex justify-between">
                    <Link to="/trails" className="text-sky-600 underline">← Back to Trails</Link>
                    <button className="px-4 py-2 rounded-lg bg-sky-700 text-white font-semibold">Mark as Completed</button>
                </footer>
            </div>
        </div>
    );
}
