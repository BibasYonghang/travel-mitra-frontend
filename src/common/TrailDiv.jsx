import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function TrailDiv({ image, name, stars, link, idx }) {
  return (
    <>
      <div
        key={idx}
        className="flex gap-10 shadow-lg py-3 sm:py-4 px-2 sm:px-3"
      >
        <div className="w-full">
          <div className="w-full overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full object-cover rounded-md hover:rounded-md hover:scale-105 transition-transform duration-200 hover:cursor-pointer
                                               h-[28vh] sm:h-[30vh] md:h-[38vh] xl:h-[37vh]"
            />
          </div>
          <div className="w-full mt-2">
            <h1 className="font-bold  font-sans text-base md:text-xl text-sky-700">
              {name}
            </h1>
            {Array.from({ length: stars }).map((_, idx) => (
              <AiFillStar
                key={idx}
                size={15}
                className="text-yellow-400 inline"
              />
            ))}
            <p className=" text-gray-600">Rated {stars} out of 5 on average</p>

            <hr className="my-5 text-gray-300" />

            <div className="relative group border rounded-sm h-8 w-24 mt-2 text-center border-sky-500 bg-sky-600 text-sky-700">
              <span className="absolute h-full w-full bg-sky-500 group-hover:scale-x-100 inset-0 scale-x-0 transition-all duration-300"></span>
              <Link
                to={link}
                className="absolute z-20 inset-0 pt-0.5 text-white"
              >
                See More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
