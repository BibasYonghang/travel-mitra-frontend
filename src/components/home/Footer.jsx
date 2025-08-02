import React from "react";
import { SiApple } from "react-icons/si";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Footer() {
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

  return (
    <footer className="relative h-[80vh]">
      {/* Background image */}
      <img
        src="/images/footer-image.png"
        alt="Footer background"
        className="object-cover h-full w-full object-[center_30%]"
      />

      {/* Main content */}
      <div className="absolute top-0 h-[80%] px-4 w-full">
        {/* Logo */}
        <img
          src="/images/travel-mitra-logo.png"
          alt="Travel Mitra Logo"
          className="h-[20vh]"
        />

        <div className="flex w-full">
          {/* Sections */}
          {footerSections.map(({ title, links }) => (
            <div key={title} className="px-4 flex flex-col gap-6 w-[18%]">
              <h2 className="font-bold text-2xl">{title}</h2>
              <ul className="font-semibold text-base flex flex-col gap-4">
                {links.map((link) => (
                  <li
                    key={link}
                    className="hover:underline hover:cursor-pointer"
                  >
                    <a href="">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* App buttons */}
          <div className="px-4 flex flex-col gap-6 w-[25%]">
            <h2 className="font-bold text-2xl">An App For OutDoors</h2>

            {/* App Store */}
            <div className="w-[10vw] h-[6vh] flex justify-center items-center bg-black text-white rounded-lg border border-black">
              <a
                href=""
                className="relative w-full h-full flex justify-center items-center gap-1"
              >
                <p className="absolute mb-5 mr-4 text-center text-[10px] w-full">
                  Get It On
                </p>
                <SiApple size={25} className="text-white inline" />
                <span className="text-lg inline font-bold pt-1">App Store</span>
              </a>
            </div>

            {/* Play Store */}
            <div className="w-[10vw] h-[6vh] flex justify-center items-center bg-black text-white rounded-lg border border-black">
              <a
                href=""
                className="relative w-full h-full flex justify-center items-center"
              >
                <p className="absolute mb-5 mr-3 text-center text-[10px] w-full">
                  Get It On
                </p>
                <img
                  src="/images/playstore-logo.png"
                  alt="Play Store"
                  className="h-9 w-8"
                />
                <span className="text-lg inline font-bold pt-1">Play Store</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Social icons */}
      <div className="absolute bottom-20 flex w-full justify-center gap-5">
        {socialIcons.map((Icon, i) => (
          <Icon
            key={i}
            size={Icon === FaTiktok ? 20 : 25}
            className={Icon === FaTiktok ? "mt-0.5" : ""}
          />
        ))}
      </div>

      {/* Copyright */}
      <p className="absolute bottom-9 flex w-full justify-center">
        &copy; {currentYear} Travel Mitra. All Right Reserved
      </p>
    </footer>
  );
}
