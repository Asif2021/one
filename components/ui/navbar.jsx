"use client";
import { useState, useEffect } from "react";
import { Menu, X, BookOpen, Info, ChevronDown } from "lucide-react";
import {  } from 'lucide-react';


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
    description: 'Popover with more details',
  },
  {
    name: 'Products',
    href: '#',
    icon: ChevronDown,
    description: 'Explore our range of services',
  },
  {
    name: 'Projects',
    href: '#',
    icon: ChevronDown,
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
          <div className="flex-shrink-0 font-bold text-2xl text-gray-900 md:text-left absolute right-4 md:static">
            MyLogo
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-800 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

         

          {/* Center Menu (Desktop) */}
          <div className="hidden md:flex space-x-10">
            {links.map((item) => (
              <div key={item.name} className="relative group">
            <button className="flex items-center gap-2 text-gray-900 font-medium hover:text-gray-600 transition">
            {/* Render icon if exists */}
             {item.name}
            {item.icon && <item.icon className="w-5 h-5 text-blue-600" />}
           
          </button>
                {/* Popover Dropdown */}
                {item.name !== 'Blogs' && (
        <div className="absolute left-0 w-screen hidden group-hover:block mt-4">
            <div className="bg-white/80 backdrop-blur-md shadow-lg p-6">
              <p className="text-gray-700">{item.name} {item.description}</p>
            </div>
        </div>)}
              </div>
            ))}
          </div>

          {/* Right Side Button */}
          <div className="hidden md:flex">
            <button className="px-5 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white text-black shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-4">
            {["Products", "Projects", "Services"].map((item) => (
              <details key={item} className="group">
                <summary className="cursor-pointer font-medium text-lg">
                  {item}
                </summary>
                <div className="pl-4 mt-2 text-gray-700">
                  <p>{item} submenu content...</p>
                </div>
              </details>
            ))}
            <button className="w-full mt-4 px-5 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
