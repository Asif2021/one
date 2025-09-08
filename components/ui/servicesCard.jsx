"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Settings, ArrowRight } from "lucide-react";

export default function ServicesCard() {
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
      imageLink:
        "Engaging modern learners to enhance knowledge retention and performance",
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
      imageLink: "Steps to Choose the Right Odoo Partner for Your Business",
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
      imageLink:
        "Synavos served as the operational core to deliver, managed services and global system support, with a dedicated contact center",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10">
  {/* Left div (main headings) */}
  <div className="flex flex-col space-y-6 pr-6 h-auto">
    {content.map((item, index) => (
      <Link
        href="#"
        key={index}
        onMouseEnter={() => setActiveIndex(index)}
        className={`group flex items-center justify-between px-4 py-3 rounded-lg transition-colors h-auto ${
          activeIndex === index
            ? "bg-orange-50 text-black font-semibold"
            : "text-gray-700 hover:bg-orange-50"
        }`}
      >
        <div className="flex items-center gap-2">
          {item.icon}
          {item.title}
        </div>

        {/* Right Arrow only on hover */}
        <ArrowRight
          className={`w-4 h-4 transition-opacity duration-200 text-orange-500 ${
            activeIndex === index
              ? "opacity-100"
              : "opacity-0 group-hover:opacity-100"
          }`}
        />
      </Link>
    ))}
  </div>

  {/* Middle div (sub-headings) */}
  <div className="flex flex-col space-y-4 p-4 h-full">
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
  <div className="flex flex-col items-center justify-center p-4 h-full">
    <Image
      src={content[activeIndex].image}
      alt={content[activeIndex].title}
      width={400}
      height={300}
      className="h-52 w-full rounded-xl shadow-md object-cover mb-3"
    />

    <Link
      href="#"
      className="flex flex-row items-center gap-2 hover:underline"
    >
      {content[activeIndex].imageLink}
      <ArrowRight className="w-5 h-5 text-orange-500" />
    </Link>
  </div>

  {/* ✅ Bottom div (under first 2 columns) */}
  {/* <div className="md:col-span-2 flex flex-row items-center justify-between px-8 py-4 bg-gray-200 rounded-lg self-end">
    <h1 className="font-semibold">Engagement Models</h1>
    <p className="text-gray-700">Business Process Outsourcing</p>
    <ArrowRight className="w-5 h-5 text-orange-500" />
  </div> */}
</div>

  );
}
