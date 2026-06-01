import { ArrowRight, Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../../config/env.js";
import ArrowRightButton from "../../common/buttons/ArrowRightButton.jsx";
import TrailDiv from "../../common/TrailDiv.jsx";
import TrailsSkeleton from "../skeletons/TrailsSkeleton.jsx";
import HomeTrailsSkeleton from "../skeletons/HomeTrailsSkeleton.jsx";

export default function PopularSearches() {
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

  const popularSearches = trailsData.slice(4, 8);
  if (loading) return <HomeTrailsSkeleton name1="Popular" name2="Searches" />;

  return (
    <section className="w-full pt-6 md:px-10 px-5">
      <h1 className="font-bold text-black md:text-4xl text-3xl">
        <span className="text-sky-600">Popular</span> Searches
      </h1>
      <div className="grid gap-3 justify-center my-8 w-full grid-cols-1 sm:grid-cols-2  xl:grid-cols-4">
        {popularSearches.map(({ image, name, stars }, idx) => (
          <TrailDiv
            image={image}
            name={name}
            stars={stars}
            idx={idx}
            link={`/trails-info/id/${popularSearches[idx]._id}`}
          />
        ))}
      </div>
      <ArrowRightButton
        buttonTitle={"Explore All Trails"}
        buttonLink={"trails"}
      />
    </section>
  );
}
