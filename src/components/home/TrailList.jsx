import React from "react";
import TrailCard from "./TrailCard";

export default function TrailList({ trails, onSelect }) {
    if (!trails || trails.length === 0) return <p className="text-center mt-8">No trails found.</p>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {trails.map((trail) => (
                <TrailCard key={trail.id} trail={trail} onSelect={onSelect} />
            ))}
        </div>
    );
}