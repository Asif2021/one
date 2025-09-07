"use client";

import Image from "next/image";

export default function LogoNavbar() {
  const logos = [
    { src: "/logos/clutch.png", alt: "Logo 1" },
    { src: "/logos/goodFirms.png", alt: "Logo 2" },
    { src: "/logos/iso.png", alt: "Logo 3" },
    { src: "/logos/microsoft.png", alt: "Logo 4" },
    { src: "/logos/odoo.png", alt: "Logo 5" },
    { src: "/logos/PSEB.png", alt: "Logo 6" },
     ];

  return (
    <nav className="md:max-w-3xl mx-2 md:mx-auto px-2 md:px-10 py-2 md:py-7 bg-white/5 backdrop-blur-lg border border-white/20 shadow-md rounded-2xl">
        <div className="flex items-center justify-between gap-5">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center flex-1 rounded-xl"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                className="w-full h-[30px] md:h-[40px] max-h-10 md:max-h-12 lg:max-h-14 object-contain rounded-2xl"
              />
            </div>
          ))}
        </div>
    </nav>
  );
}
