import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaChevronDown,
  FaMapMarkerAlt,
  FaCompass,
  FaHeart,
} from "react-icons/fa";
import { MdExplore } from "react-icons/md";

const footerSections = [
  {
    title: "Explore",
    icon: <MdExplore className="text-sky-500" />,
    links: ["Countries", "Region", "Cities", "Parks"],
  },
  {
    title: "Maps",
    icon: <FaMapMarkerAlt className="text-sky-500" />,
    links: ["My Map", "Create Map", "Print Map", "Route Converter"],
  },
  {
    title: "Company",
    icon: <FaCompass className="text-sky-500" />,
    links: ["About", "Jobs", "Press", "Ambassadors"],
  },
  {
    title: "Community",
    icon: <FaHeart className="text-sky-500" />,
    links: ["Support", "Gift Membership", "Cities", "All Trail Gear"],
  },
];

const socialLinks = [
  {
    icon: <FaFacebookF size={18} />,
    label: "Facebook",
    href: "#",
    hoverColor: "hover:bg-blue-600",
  },
  {
    icon: <FaInstagram size={18} />,
    label: "Instagram",
    href: "#",
    hoverColor: "hover:bg-pink-600",
  },
  {
    icon: <FaYoutube size={18} />,
    label: "YouTube",
    href: "#",
    hoverColor: "hover:bg-red-600",
  },
  {
    icon: <FaTiktok size={18} />,
    label: "TikTok",
    href: "#",
    hoverColor: "hover:bg-neutral-700",
  },
];

function AccordionSection({ section, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-800">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-4 px-1 text-left group"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-2 text-white font-semibold text-sm tracking-wide uppercase">
          <span className="text-base">{section.icon}</span>
          {section.title}
        </span>
        <FaChevronDown
          className={`text-gray-400 transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180 text-sky-500" : ""
          }`}
          size={14}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="pb-4 space-y-1 pl-1">
          {section.links.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="block py-1.5 px-2 text-gray-400 text-sm rounded-md hover:text-sky-400 hover:bg-sky-500/10 transition-all duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);
  const currentYear = new Date().getFullYear();

  const toggleSection = (idx) => {
    setOpenSection(openSection === idx ? null : idx);
  };

  return (
    <footer className="bg-gray-950 text-white w-full">
      <div className=" mx-auto px-6 lg:px-10">
        {/* ── MAIN FOOTER BODY ── */}
        <div className="py-14  pt-30 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6">
            {/* Brand column */}
            <div className="lg:col-span-3 flex flex-col gap-10">
              {/* Logo */}
              <div>
                <div className="mb-10">
                  <img
                    src="/images/travel-mitra-logo.png"
                    alt="Travel Mitra Logo"
                    className="h-[6vh] md:h-[8vh] cursor-pointer"
                  />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                  Your trusted companion for discovering the world — one
                  adventure at a time.
                </p>
              </div>

              {/* Social icons */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">
                  Follow Us
                </p>
                <div className="flex items-center gap-2">
                  {socialLinks.map(({ icon, label, href, hoverColor }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className={`w-9 h-9 rounded-xl bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 hover:scale-110 hover:shadow-lg ${hoverColor}`}
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Divider on large screens */}
            <div className="hidden lg:flex lg:col-span-1 justify-center">
              <div className="w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent" />
            </div>

            {/* Nav columns — DESKTOP */}
            <div className="hidden lg:grid lg:col-span-8 grid-cols-4 gap-10">
              {footerSections.map((section) => (
                <div key={section.title}>
                  <h4 className="flex items-center gap-2 mb-10 text-white font-bold text-xs uppercase tracking-widest">
                    <span className="text-base">{section.icon}</span>
                    {section.title}
                  </h4>
                  <ul className="space-y-10">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-gray-400 text-sm hover:text-sky-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Nav sections — MOBILE ACCORDION */}
            <div className="lg:hidden">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
                Navigate
              </p>
              {footerSections.map((section, idx) => (
                <AccordionSection
                  key={section.title}
                  section={section}
                  isOpen={openSection === idx}
                  onToggle={() => toggleSection(idx)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="border-t border-gray-800 py-10 sm:pt-15 sm:pb-20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="text-gray-500 text-sm">
              © {currentYear}{" "}
              <span className="text-white font-semibold">TravelMitra</span>. All
              rights reserved.
            </p>
            <p className="text-gray-600 text-xs flex items-center gap-1">
              Designed & Developed By Bibas Yonghang
            </p>
            <div className="flex items-center gap-4">
              {["Privacy Policy", "Terms of Use", "Sitemap"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-500 text-xs hover:text-sky-400 transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
