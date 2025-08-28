import React, { useEffect, useState } from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    LayersControl,
    useMap,
} from "react-leaflet";
import L from "leaflet";

// Import marker images
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix default marker issue in Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

const { BaseLayer } = LayersControl;

// Custom component to move map when position updates
function RecenterMap({ position }) {
    const map = useMap();
    useEffect(() => {
        map.setView(position, 13);
    }, [position, map]);
    return null;
}

export default function Map() {
    const [position, setPosition] = useState([27.7172, 85.324]); // Kathmandu default
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState("");

    // Get user location
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    setPosition([pos.coords.latitude, pos.coords.longitude]);
                    setLoading(false);
                },
                () => {
                    setLoading(false); // fallback: Kathmandu
                }
            );
        }
    }, []);

    // Handle search
    const handleSearch = async (e) => {
        e.preventDefault();
        if (!query.trim()) return;

        try {
            const res = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${query}`
            );
            const data = await res.json();
            if (data && data.length > 0) {
                const { lat, lon } = data[0];
                setPosition([parseFloat(lat), parseFloat(lon)]);
            } else {
                alert("Location not found!");
            }
        } catch (err) {
            console.error("Search error:", err);
        }
    };

    return (

        <div className="w-full md:h-[570px] h-[500px] md:px-10 px-5 pt-5 rounded-2xl overflow-hidden relative">
            <h1 className="h-20 font-bold text-4xl text-center"><span className="text-green-600"> Explore</span>  Trial on Map</h1>
            {/* Search Bar */}
            <form
                onSubmit={handleSearch}
                className="absolute top-28 left-1/2 -translate-x-1/2 z-[1000] bg-white shadow-md rounded-full flex"
            >
                <input
                    type="text"
                    value={query}
                    placeholder="Search location..."
                    onChange={(e) => setQuery(e.target.value)}
                    className="px-5 py-4 rounded-l-full  outline-none
                    sm:w-[40vw] w-[33vw]"
                />
                <button
                    type="submit"
                    className="md:px-4 px-2 py-4 bg-green-600 text-white rounded-r-full hover:bg-green-700 hover:cursor-pointer"
                >
                    Search
                </button>
            </form>

            {/* Map */}
            <MapContainer center={position} zoom={13} className="w-full h-full rounded-2xl ">
                <LayersControl position="topright">
                    {/* Default Street Map */}
                    <BaseLayer checked name="Street Map" className="rounded-2xl">
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </BaseLayer>

                    {/* Satellite Map */}
                    <BaseLayer name="Satellite">
                        <TileLayer
                            attribution="Tiles &copy; Esri"
                            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                        />
                    </BaseLayer>
                </LayersControl>

                <Marker position={position}>
                    <Popup>{loading ? "Fetching location..." : "You are here 📍"}</Popup>
                </Marker>

                {/* Keep map centered when position changes */}
                <RecenterMap position={position} />
            </MapContainer>
        </div>
    );
}
