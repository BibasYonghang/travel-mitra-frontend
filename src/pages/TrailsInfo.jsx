import React from "react";
import { MapPin, Clock, ArrowUpRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

// ChisapaniTrailComponent.jsx
// Single-file React component styled with Tailwind CSS (v4).
// Usage: drop this file into a React + Tailwind project and render <ChisapaniTrail />.

export default function TrailsInfo() {
    const images = [
        "/images/chisapani-1.jpg",
        "/images/chisapani-2.jpg",
        "/images/chisapani-3.jpg",
    ];

    const stats = [
        { label: "Length", value: "9.8 km" },
        { label: "Elevation", value: "1,086 m" },
        { label: "Time", value: "4.5–5 hr" },
        { label: "Difficulty", value: "Hard" },
    ];

    const reviews = [
        {
            name: "Rocco Knights",
            date: "Apr 15, 2025",
            text: "Good conditions — not crowded. Great temperature. Paths are mostly single track.",
            rating: 5,
        },
        {
            name: "Smieci Z neta",
            date: "Dec 12, 2024",
            text: "Entry 1000rs. No need for guide. First day can be tough — use hiking poles.",
            rating: 4,
        },
        {
            name: "Flynn Healy",
            date: "Oct 10, 2024",
            text: "Lots of monkey so happy",
            rating: 4,
        },
    ];

    return (
        <div className="min-h-screen bg-slate-50 md:p-8 p-2">
            <div className="w-[93vw] mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border border-sky-200">
                {/* Header */}
                <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-6 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center text-2xl font-semibold">CT</div>
                        <div>
                            <h1 className="text-2xl md:text-3xl font-extrabold">Chisapani Trail</h1>
                            <p className="text-sm opacity-90">Sundarijal to Chauki Banjyang · Shivapuri Nagarjun National Park</p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <div className="flex items-center gap-2 text-sm">
                            <Star className="w-4 h-4" />
                            <span className="font-semibold">4.3</span>
                            <span className="opacity-90">(62 reviews)</span>
                        </div>
                        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-emerald-600 font-semibold shadow-sm hover:scale-105 transition">
                            Get directions
                            <ArrowUpRight className="w-4 h-4" />
                        </button>
                    </div>
                </header>

                {/* Main content grid */}
                <main className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                    {/* Left: Images & map */}
                    <section className="md:col-span-2 space-y-4">
                        <div className="rounded-xl overflow-hidden shadow-md">
                            {/* Image carousel (static placeholders) */}
                            <div className="relative h-64 md:h-80 bg-gradient-to-br from-emerald-50 to-white">
                                <img src={images[0]} alt="Chisapani" className="w-full h-full object-cover" />
                                <div className="absolute left-4 bottom-4 bg-white/70 rounded-md px-3 py-1 text-sm font-medium">Photo of Chisapani Trail</div>
                            </div>
                            <div className="flex gap-2 p-3 bg-white">
                                {images.map((src, i) => (
                                    <img key={i} src={src} alt={`thumb-${i}`} className="w-20 h-14 rounded-md object-cover border" />
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl overflow-hidden border">
                            {/* Map / route preview */}
                            <div className="p-4 bg-white">
                                <h3 className="font-bold text-lg">Map & Route</h3>
                                <p className="text-sm text-slate-600 mt-1">Point to point — Sundarijal → Chauki Banjyang</p>
                            </div>
                            <div className="h-44 md:h-56 bg-slate-100 flex items-center justify-center">
                                {/* Replace with Mapbox iframe or embed when using real API */}
                                <div className="text-center text-slate-500">Map preview (replace with Mapbox iframe)</div>
                            </div>
                            <div className="p-4 flex gap-3 bg-white">
                                <button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-emerald-600 text-white font-semibold hover:opacity-90">Download the route</button>
                                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-emerald-600 text-emerald-600 font-semibold">Share</button>
                            </div>
                        </div>
                    </section>

                    {/* Right: Stats, weather, reviews */}
                    <aside className="space-y-4">
                        <div className="rounded-xl p-4 bg-white border shadow-sm">
                            <h4 className="text-lg font-bold">Trail at a glance</h4>
                            <ul className="mt-3 grid grid-cols-2 gap-3">
                                {stats.map((s) => (
                                    <li key={s.label} className="p-3 rounded-lg bg-emerald-50">
                                        <div className="text-xs text-slate-500">{s.label}</div>
                                        <div className="font-semibold">{s.value}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-xl p-4 bg-white border shadow-sm">
                            <h4 className="text-lg font-bold">Weather (next 7 days)</h4>
                            <div className="mt-3 grid grid-cols-2 gap-3">
                                <div className="p-3 rounded-lg bg-emerald-50">
                                    <div className="text-xs">Tue</div>
                                    <div className="font-semibold">19° · Clear</div>
                                </div>
                                <div className="p-3 rounded-lg bg-emerald-50">
                                    <div className="text-xs">Wed</div>
                                    <div className="font-semibold">18° · Partly Cloudy</div>
                                </div>
                                <div className="p-3 rounded-lg bg-emerald-50">
                                    <div className="text-xs">Thu</div>
                                    <div className="font-semibold">18° · Rain</div>
                                </div>
                                <div className="p-3 rounded-lg bg-emerald-50">
                                    <div className="text-xs">Fri</div>
                                    <div className="font-semibold">18° · Clear</div>
                                </div>
                            </div>
                            <p className="mt-3 text-sm text-slate-500">Expect some mosquitos along the trail. Pack insect repellent.</p>
                        </div>

                        <div className="rounded-xl p-4 bg-white border shadow-sm">
                            <div className="flex items-center justify-between">
                                <h4 className="text-lg font-bold">Recent reviews</h4>
                                <Link to='' className="text-sm text-emerald-600 font-medium">See all</Link>
                            </div>

                            <div className="mt-3 space-y-3">
                                {reviews.map((r, idx) => (
                                    <div
                                        key={idx}
                                        className="p-3 rounded-lg bg-emerald-50"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="font-semibold">{r.name}</div>
                                            <div className="text-xs text-slate-600">{r.date}</div>
                                        </div>
                                        <div className="text-sm mt-1 text-slate-700">{r.text}</div>
                                        <div className="mt-2 flex items-center gap-1 text-amber-500">
                                            {Array.from({ length: r.rating }).map((_, i) => (
                                                <Star key={i} className="w-4 h-4" />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-4 bg-white border shadow-sm text-sm">
                            <h4 className="font-bold mb-2">Tips</h4>
                            <ul className="list-disc list-inside space-y-1 text-slate-600">
                                <li>Bring a water bottle — there are shops on the first half.</li>
                                <li>Use hiking poles for the steep first section.</li>
                                <li>Entry fee: ~1000 NPR (check local updates).</li>
                            </ul>
                        </div>
                    </aside>
                </main>

                {/* Footer */}
                <footer className="p-6 border-t bg-white flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-sm text-slate-600">Last updated: Sep 14, 2025</div>
                    <div className="flex gap-3">
                        <button className="px-4 py-2 rounded-lg bg-emerald-600 text-white font-semibold">Mark as completed</button>
                        <button className="px-4 py-2 rounded-lg border border-emerald-600 text-emerald-600">Suggest edit</button>
                    </div>
                </footer>
            </div>

            {/* Quick floating CTA */}
            <div className="fixed right-6 bottom-6">
                <a href="#" className="inline-flex items-center gap-3 px-4 py-3 rounded-full bg-emerald-600 text-white shadow-lg">Hit the trail</a>
            </div>
        </div>
    );
}
