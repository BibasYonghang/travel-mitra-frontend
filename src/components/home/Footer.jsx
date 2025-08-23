import React, { useState } from "react";
import { SiApple } from "react-icons/si";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { ChevronDown } from "lucide-react";

export default function Footer() {
  const [activeIndex, setActiveIndex] = useState(null);
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Explore",
      links: ["Countries", "Region", "Cities", "Parks"],
    },
    {
      title: "Maps",
      links: ["My Map", "Create Map", "Print Map", "Route Converter"],
    },
    {
      title: "Company",
      links: ["About", "Jobs", "Press", "Ambassadors"],
    },
    {
      title: "Community",
      links: ["Support", "Gift Membership", "Cities", "All Trail Gear"],
    },
  ];

  const socialIcons = [FaFacebook, FaInstagram, FaYoutube, FaTiktok];

  const toggleSection = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <footer className="relative min-h-screen px-[6vw] bg-[#161f13] ">
      {/* Main content */}
      <div className="relative w-full py-[5vh]">
        {/* Logo */}
        <img
          src="/images/travel-mitra-logo.png"
          alt="Travel Mitra Logo"
          className="h-[6vh] hover:cursor-pointer"
        />

        <div className="w-full pt-4 px-[1vw]">
          {/* Sections */}
          {footerSections.map(({ title, links }, index) => (
            <div
              key={title}
              className="h-30vh w-full text-white transition-transform duration-300"
            >
              <button
                onClick={() => toggleSection(index)}
                className="font-bold md:text-2xl sm:text-2xl text-lg mt-4 mb-2 hover:cursor-pointer w-full flex justify-between"
              >
                {title}
                <ChevronDown
                  size={21}
                  className={`inline mt-1 transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""
                    }`}
                />
              </button>

              {/* Animated Links */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <ul className="ml-4 mt-2 ">
                  {links.map((link) => (
                    <li
                      key={link}
                      className="hover:underline w-auto hover:cursor-pointer font-semibold mt-3"
                    >
                      <a href="">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* App buttons  */}
          <section className="relative z-20 text-white flex flex-col gap-6 mt-11">
            <h2 className="font-bold text-xl">An App For OutDoors</h2>
            <div className="relative text-white flex gap-6 ">
              {/* App Store */}
              <div className="h-[6vh] w-[38vw] flex justify-center items-center bg-black text-white rounded-lg border border-black pr-3">
                <a
                  href=""
                  className="relative w-full h-full flex justify-center items-center"
                >
                  <p className="absolute mb-4 ml-4 text-center text-[10px] w-full">
                    Get It On
                  </p>
                  <SiApple size={24} className="text-white inline mr-1" />
                  <span className="text-xs inline font-bold pt-2">App Store</span>
                </a>
              </div>

              {/* Play Store */}
              <div className="h-[6vh] w-[38vw] flex justify-center items-center bg-black text-white rounded-lg border border-black pr-3">
                <a
                  href=""
                  className="relative w-full h-full flex justify-center items-center"
                >
                  <p className="absolute mb-4 ml-4 text-center text-[10px] w-full">
                    Get It On
                  </p>
                  <img
                    src="/images/playstore-logo.png"
                    alt="Play Store"
                    className="h-9 w-8"
                  />
                  <span className="text-xs inline font-bold pt-2">Play Store</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Social icons (now in flow so they also get pushed) */}
      <section className="relative z-20 mt-5 flex flex-col gap-3 ">
        <h1 className="text-white text-xl font-bold">Conncet with us </h1>
        <div className="flex w-ful gap-5">
          {socialIcons.map((Icon, i) => (
            <Icon
              key={i}
              size={Icon === FaTiktok ? 20 : 25}
              className={
                Icon === FaTiktok
                  ? "mt-0.5 hover:cursor-pointer text-white"
                  : "hover:cursor-pointer text-white"
              }
            />
          ))}
        </div>
      </section>

      {/* Copyright (in flow so footer height grows) */}
      <p className="relative z-20 mt-10 pb-8 text-white ">
        &copy; {currentYear} Travel Mitra. All Right Reserved
      </p>
    </footer>
  );
}
