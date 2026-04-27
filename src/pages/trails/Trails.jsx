import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../../config/env";
import ArrowLeftButton from "../../common/buttons/ArrowLeftButton";
import TrailDiv from "../../common/TrailDiv";

const Trails = () => {
  const [trailsData, setTrailsData] = useState([]);

  useEffect(() => {
    const fetchTrails = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/api/trails`);
        const data = await res.json();
        setTrailsData(data); // store API data in state
      } catch (error) {
        console.log(`Internal Error Says: ${error}`);
      }
    };

    fetchTrails();
  }, []);

  return (
    <section className="w-full py-6 md:px-10 px-5">
      <h1 className="font-bold text-black md:text-4xl text-3xl">
        Discover <span className="text-sky-600">Trails</span>
      </h1>
      <div
        className="grid gap-3 justify-center mt-5 w-full 
                            grid-cols-1 sm:grid-cols-2  xl:grid-cols-4"
      >
        {trailsData.map(({ image, name, stars }, idx) => (
          <TrailDiv
            image={image}
            name={name}
            stars={stars}
            link={`/trails-info/id/${trailsData[idx]._id}`}
            idx={idx}
          />
        ))}
      </div>
      <div className="mt-10">
        <ArrowLeftButton buttonLink={"/"} buttonTitle={"Back To Home"} />
      </div>
    </section>
  );
};

export default Trails;
