import { Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../../config/env";
import TrailDiv from "../../common/TrailDiv";
import HomeTrailsSkeleton from "../skeletons/HomeTrailsSkeleton";

export default function FeatureTrails() {
  const [trailsData, setTrailsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrails = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/api/trails`);
        const data = await res.json();
        setTrailsData(data); // store API data in state
        setLoading(false);
      } catch (error) {
        console.log(`Internal Error Says: ${error}`);
      }
    };

    fetchTrails();
  }, []);

  const featuredTrails = trailsData.slice(0, 4);
  if (loading) return <HomeTrailsSkeleton name1="Featured" name2="Trails" />;

  return (
    <section className="w-full py-6 md:px-10 px-5">
      <h1 className="font-bold text-black md:text-4xl text-3xl">
        <span className="text-sky-600">Featured</span> Trails
      </h1>
      <div
        className="grid gap-3 justify-center mt-5 w-full 
        grid-cols-1 sm:grid-cols-2  xl:grid-cols-4"
      >
        {featuredTrails.map(({ image, name, stars }, idx) => (
          <TrailDiv
            image={image}
            name={name}
            stars={stars}
            link={`/trails-info/id/${featuredTrails[idx]._id}`}
            idx={idx}
          />
        ))}
      </div>
    </section>
  );
}
