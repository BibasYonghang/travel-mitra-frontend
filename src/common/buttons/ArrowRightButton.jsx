import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function ArrowRightButton({ buttonTitle, buttonLink }) {
  return (
    <div className="mt-10 w-fit hover:cursor-pointer">
      <Link
        to={buttonLink}
        className="group font-semibold hover:text-sky-500 transform hover:-translate-y-0.5 duration-100 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-50 to-transparent rounded-full transition-all hover:shadow-md"
      >
        <p className="font-poppins">{buttonTitle}</p>
        <ArrowRight
          size={18}
          className="group-hover:translate-x-1 transition-transform duration-200"
        />
      </Link>
    </div>
  );
}
