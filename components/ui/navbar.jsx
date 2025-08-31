"use client";
import { useState, useEffect } from "react";
import { Menu, X, BookOpen, Info, ChevronDown } from "lucide-react";
import {  } from 'lucide-react';
import Card from "./card";


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
          ? "backdrop-blur-md bg-white/30 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Mobile Menu Icon */}
           {/* Logo */}
          <div className="flex-shrink-0 font-bold text-2xl text-white md:text-left absolute left-4 md:static">
            MyLogo
          </div>
          <div className="flex items-center md:hidden absolute right-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-800 focus:outline-none"
            >
              {isOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
            </button>
          </div>

         

         {/* Center Menu (Desktop) */}
        <div className="hidden md:flex space-x-10">
        {links.map((item) => (
            <div key={item.name} className="relative group">
            {/* Trigger */}
            <button className="flex items-center gap-2 text-white font-medium hover:text-orange-600 transition">
                {item.name}
                {item.icon && <item.icon className="w-5 h-5 text-white hover:text-orange-600" />}
            </button>

            {/* Dropdown */}
            {item.name !== "Blogs" && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-6 z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 w-max">
                <div className="bg-white/90 backdrop-blur-md shadow-lg p-6 rounded-xl">
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
        <div className="md:hidden bg-white text-black shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-4">
            {links.map((item) => (
              <details key={item.name}>
                <summary className="cursor-pointer font-medium text-lg">
                  {/* Render icon if exists */}
                      {item.name}
                </summary>
                <div className="pl-4 mt-2 text-gray-700">
                  <p>{item.description}</p>
                </div>
              </details>
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
