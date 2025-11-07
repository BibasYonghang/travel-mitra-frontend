import React, { useState } from "react";
import { SiApple } from "react-icons/si";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { ChevronDown } from "lucide-react";

export default function Footer() {
  const [activeIndex, setActiveIndex] = useState(null);
  const currentYear = new Date().getFullYear();

  const footerSections = [
    { title: "Explore", links: ["Countries", "Region", "Cities", "Parks"] },
    { title: "Maps", links: ["My Map", "Create Map", "Print Map", "Route Converter"] },
    { title: "Company", links: ["About", "Jobs", "Press", "Ambassadors"] },
    { title: "Community", links: ["Support", "Gift Membership", "Cities", "All Trail Gear"] },
  ];

  const socialIcons = [FaFacebook, FaInstagram, FaYoutube, FaTiktok];

  const toggleSection = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <footer className="relative px-5 md:px-10 py-10 bg-sky-800 text-white">
      {/* Logo */}
      <div className="relative w-full pt-[5vh] md:pt-[9vh] lg:pt-[12vh]">
        <img
          src="/images/travel-mitra-logo.png"
          alt="Travel Mitra Logo"
          className="h-[6vh] md:h-[8vh] cursor-pointer"
        />

        {/* Footer Sections */}
        <div className="w-full pt-10 space-y-6">
          {footerSections.map(({ title, links }, index) => (
            <div key={title} className="transition-transform duration-300">
              <button
                onClick={() => toggleSection(index)}
                className="w-full flex justify-between font-bold text-lg md:text-xl mt-4 mb-2 cursor-pointer"
              >
                {title}
                <ChevronDown
                  size={21}
                  className={`mt-1 transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <ul className="ml-4 mt-2 text-base md:text-lg space-y-3">
                  {links.map((link) => (
                    <li key={link} className="font-semibold hover:underline hover:text--400 cursor-pointer">
                      <a href="">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* App Buttons */}
          <section className="relative md:absolute z-20 flex flex-col gap-5 mt-10 md:mt-7 md:ml-[18rem]">
            <h2 className="font-bold text-xl">An App For OutDoors</h2>
            <div className="flex gap-6 md:items-end">
              {/* App Store */}
              <div className="flex w-[30vw] md:max-w-[13rem] h-[35px] items-center justify-center text-white bg-gray-700  border border-sky-900 rounded-lg pr-3">
                <a href="" className="relative flex w-full h-full items-center justify-center ">
                  <p className="absolute w-full text-center text-[10px] mb-4 ml-4">Get It On</p>
                  <SiApple size={24} className="mr-1" />
                  <span className="text-xs font-bold pt-2 inline">App Store</span>
                </a>
              </div>

              {/* Play Store */}
              <div className="flex w-[30vw] md:max-w-[13rem] h-[35px] items-center justify-center text-white border border-sky-900 bg-gray-700 rounded-lg pr-3">
                <a href="" className="relative flex w-full h-full items-center justify-center ">
                  <p className="absolute w-full text-center text-[10px] mb-4 ml-4">Get It On</p>
                  <img src="/images/playstore-logo.png" alt="Play Store" className="h-7 w-8" />
                  <span className="text-xs font-bold pt-2 inline">Play Store</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Social Icons */}
      <section className="relative md:absolute mt-10 md:mt-7 z-20  flex flex-col gap-3 md:gap-6">
        <h1 className="text-xl font-bold">Connect with us</h1>
        <div className="flex gap-5">
          {socialIcons.map((Icon, i) => (
            <Icon
              key={i}
              size={Icon === FaTiktok ? 20 : 25}
              className={`cursor-pointer ${Icon === FaTiktok ? "mt-0.5 hover:text--600" : "hover:text--400"}`}
            />
          ))}
        </div>
      </section>

      {/* Copyright */}
      <div className=" sm:flex justify-between text-sm sm:text-md mt-8 md:mt-48  ">
        <p className="mb-3 sm:mb-0 font-semibold">&copy; {currentYear} <span className="hover:cursor-pointer hover:text-gray-900">TRAVEL MITRA.</span>  ALL RIGHT RESERVED</p>  <p className="font-semibold">DESIGN AND DEVELOPED BY BIBAS YONGHANG </p>
      </div>
    </footer>
  );
}
