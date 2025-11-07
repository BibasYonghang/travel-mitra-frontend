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
    <footer className="relative  md:px-10 px-5 min-h-screen  bg-[#161f13] text-gray-200">
      {/* Main content */}
      <div className="relative w-full lg:pt-[12vh] md:pt-[9vh] pt-[5vh]">
        {/* Logo */}
        <img
          src="/images/travel-mitra-logo.png"
          alt="Travel Mitra Logo"
          className="md:h-[8vh] h-[6vh]  hover:cursor-pointer"
        />

        <div className="w-full pt-10">
          {/* Sections */}
          {footerSections.map(({ title, links }, index) => (
            <div
              key={title}
              className="h-30vh w-full  transition-transform duration-300 "
            >
              <button
                onClick={() => toggleSection(index)}
                className="font-bold md:text-xl text-lg mt-4 mb-2 hover:cursor-pointer w-full flex justify-between"
              >
                {title}
                <ChevronDown
                  size={21}
                  className={`inline mt-1 transition-transform  duration-300 ${activeIndex === index ? "rotate-180" : ""
                    }`}
                />
              </button>

              {/* Animated Links */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <ul className="ml-4 mt-2 md:text-lg text-base">
                  {links.map((link) => (
                    <li
                      key={link}
                      className="hover:underline hover:text-green-400 w-auto hover:cursor-pointer font-semibold mt-3"
                    >
                      <a href="">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* App buttons  */}
          <section className="md:absolute relative z-20  flex flex-col gap-5 mt-14 md:ml-[18rem]">
            <h2 className="font-bold text-xl">An App For OutDoors</h2>
            <div className="relative  flex md:items-end  gap-6 ">
              {/* App Store */}
              <div className="h-[35px] md:max-w-[13rem]  w-[30vw] flex justify-center items-center  bg-black border border-white  hover:border-green-400   rounded-lg   pr-3">
                <a
                  href=""
                  className="relative w-full h-full flex justify-center items-center hover:text-green-400"
                >
                  <p className="absolute mb-4 ml-4 text-center text-[10px] w-full ">
                    Get It On
                  </p>
                  <SiApple size={24} className=" inline mr-1" />
                  <span className="text-xs inline font-bold pt-2">App Store</span>
                </a>
              </div>

              {/* Play Store */}
              <div className="h-[35px] md:max-w-[13rem]  w-[30vw] flex justify-center items-center  bg-black border border-white hover:border-green-400  rounded-lg  pr-3">
                <a
                  href=""
                  className="relative w-full h-full flex justify-center items-center hover:text-green-400"
                >
                  <p className="absolute mb-4 ml-4 text-center text-[10px] w-full">
                    Get It On
                  </p>
                  <img
                    src="/images/playstore-logo.png"
                    alt="Play Store"
                    className="h-8 w-8"
                  />
                  <span className="text-xs inline font-bold pt-2">Play Store</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Social icons (now in flow so they also get pushed) */}
      <section className="md:absolute relative z-20 mt-15 w-auto flex flex-col md:gap-6 gap-3 ">
        <h1 className=" text-xl font-bold">Conncet with us </h1>
        <div className="flex w-ful gap-5">
          {socialIcons.map((Icon, i) => (
            <Icon
              key={i}
              size={Icon === FaTiktok ? 20 : 25}
              className={
                Icon === FaTiktok
                  ? "mt-0.5 hover:cursor-pointer  hover:text-green-600 "
                  : "hover:cursor-pointer  hover:text-green-400  "
              }
            />
          ))}
        </div>
      </section>

      {/* Copyright (in flow so footer height grows) */}
      <p className="md:absolute relative z-20 mt-11   pb-8   lg:pl-[53rem]  md:pl-[34rem] ">
        &copy; {currentYear} Travel Mitra. All Right Reserved
      </p>
    </footer>
  );
}
