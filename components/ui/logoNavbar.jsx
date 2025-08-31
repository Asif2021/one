"use client";

import Image from "next/image";

export default function LogoNavbar() {
  const logos = [
    { src: "/logos/PoliceLogo.png", alt: "Logo 1" },
    { src: "/logos/PoliceLogo.png", alt: "Logo 2" },
    { src: "/logos/PoliceLogo.png", alt: "Logo 3" },
    { src: "/logos/PoliceLogo.png", alt: "Logo 4" },
    { src: "/logos/PoliceLogo.png", alt: "Logo 5" },
    { src: "/logos/PoliceLogo.png", alt: "Logo 6" },
     ];

  return (
    <nav className="w-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-md rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-2">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center flex-1 rounded-xl  transition"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                className="w-full h-auto max-h-10 md:max-h-12 lg:max-h-14 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
