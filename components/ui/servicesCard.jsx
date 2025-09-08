"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Settings, ArrowRight } from "lucide-react";

export default function ThreeDivs() {
  const content = [
    {
      title: "Custom Software Services",
      subHeadings: [
        "Core Audit",
        "Design Audit",
        "Digital Product Design",
        "Web Development",
        "Mobile App Development",
      ],
      image: "/images/1.jpg",
      icon: <Settings />,
    },
    {
      title: "Enterprise Resource Planning",
      subHeadings: [
        "ERP Services",
        "Odoo",
        "SAP Business One",
        "Microsoft Business Central",
      ],
      image: "/images/2.jpg",
      icon: <Settings />,
    },
    {
      title: "Managed IT Services",
      subHeadings: [
        "DevOps",
        "Public & Private Cloud",
        "Bare-Metal Server Setup",
        "NOC - SOC & Technical Helpdesk",
      ],
      image: "/images/3.jpg",
      icon: <Settings />,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10">
      {/* Left div (main headings) */}
      <div className="flex flex-col space-y-6 border-r pr-6">
        {content.map((item, index) => (
          <Link
            href="#"
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            className={`group flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
              activeIndex === index
                ? "bg-orange-50 text-black font-semibold"
                : "text-gray-700 hover:bg-orange-50"
            }`}
          >
            <div className="flex items-center gap-2">
              {item.icon}
              {item.title}
            </div>
            
              <ArrowRight className={`w-4 h-4 ${activeIndex===index ? "group-hover:opacity-100 transition-opacity duration-200 text-orange-500" : "opacity-0"}`}/>
           
          </Link>
        ))}
      </div>

      {/* Middle div (sub-headings) */}
      <div className="flex flex-col space-y-4 p-4 border-r">
        {content[activeIndex].subHeadings.map((sub, i) => (
          <h3
            key={i}
            className="text-base text-black font-semibold cursor-pointer hover:text-orange-500 transition-colors"
          >
            {sub}
          </h3>
        ))}
      </div>

      {/* Right div (image) */}
      <div className="flex items-center justify-center p-4">
        <Image
          src={content[activeIndex].image}
          alt={content[activeIndex].title}
          width={400}
          height={300}
          className="rounded-xl shadow-md object-cover"
        />
      </div>
    </div>
  );
}