import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, ArrowUpRight } from "lucide-react";
import { AiFillStar } from "react-icons/ai";

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
        { label: "Name", value: trail.name || "N/A" },
        { label: "Distance on Foot", value: trail.distance || "N/A" },
        { label: "Location", value: trail.location || "N/A" },
        { label: "Trek Duration", value: trail.duration || "N/A" },
        { label: "Difficulty", value: trail.difficulty || "N/A" },
        { label: "Elevation", value: trail.elevation || "N/A" },
        { label: "Starting Point", value: trail.startingPoint || "N/A" },
        { label: "Best Season", value: trail.bestSeason || "N/A" }

    ];

    return (
        <div className="min-h-screen bg-slate-50 md:p-8 p-2">
            <div className="w-[95vw] mx-auto bg-white/90 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border border-sky-200">
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
                        <div className="flex items-center gap-2 text-lg">
                            <AiFillStar className="w-4 h-4" />
                            <span className="font-semibold">{trail.reviews || "4.5"}</span>
                            <span className="opacity-90">{trail.stars} reviews</span>
                        </div>
                        <button
                            onClick={() => {
                                if (trail.coordinates) {
                                    const { lat, lng } = trail.coordinates;
                                    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
                                    window.open(url, "_blank"); // opens in a new tab
                                } else {
                                    alert("Coordinates not available for this trail.");
                                }
                            }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-sky-700 font-semibold shadow-sm hover:scale-103 transition hover:cursor-pointer"
                        >
                            Get directions
                            <ArrowUpRight className="w-4 h-4" />
                        </button>
                    </div>
                </header>

                {/* MAIN CONTENT */}
                <main className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                    {/* LEFT SIDE */}
                    <section className="md:col-span-2 space-y-5">
                        <div className="rounded-xl overflow-hidden shadow-md">
                            <img src={images[0]} alt={trail.name} className="w-full h-[66vh] object-cover" />
                        </div>
                        <section className="space-y-2">
                            <h1 className="text-xl font-bold">Photos of <span className="text-sky-600"> {trail.name}</span></h1>
                            <div className="flex gap-2">

                                {images.map((src, i) => (
                                    <img key={i} src={src} alt="" className="w-24 h-16 rounded-md object-cover" />
                                ))}
                            </div>
                        </section>


                        <div className="">
                            <h2 className="text-xl font-bold mb-2">About this <span className="text-sky-600">Trail</span> </h2>
                            <p className="text-slate-700 leading-relaxed text-justify">
                                {trail.description || "No detailed description available for this trail."}
                            </p>
                        </div>
                    </section>

                    {/* RIGHT SIDE */}
                    <aside className="space-y-4">
                        <div className="rounded-xl p-4 bg-white border border-sky-200 shadow-sm">
                            <h4 className="text-lg font-bold">Trail <span className="text-sky-600">Stats</span> </h4>
                            <ul className="mt-3 grid grid-cols-2 gap-3">
                                {stats.map((s) => (
                                    <li key={s.label} className="p-3 rounded-lg bg-sky-50">
                                        <div className="text-xs text-slate-500">{s.label}</div>
                                        <div className="font-semibold">{s.value}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-xl overflow-hidden shadow-sm border border-sky-200">
                            <h4 className="text-lg font-bold p-4 bg-white border-b border-sky-200">Location <span className="text-sky-600">Map</span></h4>

                            <iframe
                                title="Trail Map"
                                src={`https://maps.google.com/maps?q=${trail.coordinates?.lat},${trail.coordinates?.lng}&z=14&output=embed`}
                                width="100%"
                                height="272"
                                style={{ border: 0 }}
                                loading="lazy"
                                allowFullScreen
                            ></iframe>

                        </div>

                    </aside>
                </main>

                {/* FOOTER */}
                <footer className="p-6 border-t border-sky-400 bg-white flex justify-between">
                    <Link to="/trails" className="px-4 py-2 rounded-lg bg-sky-700 text-white font-semibold hover:bg-sky-800">← Back to Trails</Link>
                </footer>
            </div>
        </div>
    );
}
