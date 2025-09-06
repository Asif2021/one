"use client"

import Image from "next/image";
const logos = [
    { src: "/logos/clutch.png", alt: "Logo 1" },
    { src: "/logos/goodFirms.png", alt: "Logo 2" },
    { src: "/logos/iso.png", alt: "Logo 3" },
    { src: "/logos/microsoft.png", alt: "Logo 4" },
    { src: "/logos/odoo.png", alt: "Logo 5" },
    { src: "/logos/PSEB.png", alt: "Logo 6" },
     ];

export default function Footer(){
    return(
<div className="max-w-6xl mx-auto p-5 flex flex-col md:flex-row gap-6 border-y border-gray-300">
  {/* first section */}
  <div className="flex flex-col w-[65%]">
    <h1 className="font-semibold text-2xl mb-4">Certified by</h1>
    <div className="flex items-center justify-between gap-6">
      {logos.map((logo, index) => (
        <div key={index} className="flex-1 flex justify-center">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={100}
            height={100}
            className="w-32 h-auto object-contain"
          />
        </div>
      ))}
    </div>
  </div>

  {/* second section */}
  <div className="flex flex-col w-[35%]">
    <h1 className="font-semibold text-2xl mb-4">Certified by</h1>
    <div className="flex flex-1 items-center justify-between gap-6">
      {logos.slice(0, 4).map((logo, index) => (
        <div key={index} className="flex-1 flex justify-center">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={100}
            height={100}
            className="w-32 h-auto object-contain"
          />
        </div>
      ))}
    </div>
  </div>
</div>


    )
}