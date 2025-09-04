"use client";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
  {
    name: 'Services',
    href: '#',
    icon: ChevronDown,
    description: 'Explore our range of services services, including web development, mobile app development, and more, and more and more and more and more and more and more and more',
  },
  {
    name: 'Products',
    href: '#',
    icon: ChevronDown,
    description: 'Explore our range of services services, including web development, mobile app development, and more, and more and more and more and more and more and more and more',
  },
  {
    name: 'Projects',
    href: '#',
    icon: ChevronDown,
    description: 'Explore our range of services services, including web development, mobile app development, and more, and more and more and more and more and more and more and more',
  },
  { name: 'Blogs', href: '#', icon: null },
]

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "backdrop-blur-md bg-white/60 shadow-md text-black"
      : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Mobile Menu Icon */}
           {/* Logo */}
          <div className="flex-shrink-0 font-bold text-2xl  md:text-left absolute left-4 md:static">
            MyLogo
          </div>
          <div className="flex items-center md:hidden absolute right-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-800 focus:outline-none"
            >
              {isOpen ? <X size={28} className="text-current" /> : <Menu size={28} className="inherit" />}
            </button>
          </div>

         

         {/* Center Menu (Desktop) */}
<div className="hidden md:flex space-x-10 relative">
  {links.map((item) => (
    <div key={item.name} className="group">
      {/* Trigger */}
      <button className="flex items-center gap-2 font-medium transition">
        {item.name}
        {item.icon && (
          <item.icon className="w-5 h-5" />
        )}
      </button>

      {/* Dropdown */}
      {item.name !== "Blogs" && (
        <div
          className="absolute left-1/2 -translate-x-1/2 mt-6 z-50
                     invisible opacity-0 group-hover:visible group-hover:opacity-100 
                     transition-all duration-200"
        >
          <div className="max-w-6xl mx-auto px-8 pt-8 overflow-hidden my-10 md:mt-0 
                          bg-white text-black rounded-4xl shadow-lg 
                          min-h-[250px] w-[80vw]">
            <div className="text-gray-700">
              {item.name} {item.description}
            </div>
          </div>
        </div>
      )}
    </div>
  ))}
</div>

          {/* Right Side Button */}
          <div className="hidden md:flex">
            <button className="px-5 py-2 rounded-full bg-orange-500 text-white font-medium transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white h-screen shadow-lg">
          <div className="w-full max-w-2xl mx-auto divide-y divide-gray-200 rounded-xl border border-gray-200">
  {links.map((item, i) => (
    <div key={i} className="group">
      {/* Accordion Header */}
      <button
        className="flex w-full items-center justify-between px-4 py-3 text-left font-medium text-lg text-gray-800 hover:bg-gray-100 transition"
        onClick={(e) => {
          const content = e.currentTarget.nextElementSibling;
          content.classList.toggle("max-h-0");
          content.classList.toggle("max-h-screen");
        }}
      >
        <span className="flex items-center gap-2">
          {item.name}
        </span>
        <svg
          className="w-5 h-5 transform transition-transform duration-300 group-[.open]:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Accordion Content */}
      <div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out px-4 text-gray-600">
        <p className="py-3">{item.description}</p>
      </div>
    </div>
  ))}

            <button className="mt-4 px-5 py-2 rounded-md bg-transparent md:bg-blue-600 text-black font-medium text-lg hover:bg-blue-700 transition">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
