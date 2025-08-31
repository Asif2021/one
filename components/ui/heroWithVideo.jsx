"use client";
import LogoNavbar from "./logoNavbar";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

export default function HeroWithVideo() {
    const [showFirst, setShowFirst] = useState(true);

    useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 1500); 

    return () => clearInterval(interval);
  }, []);

  return (
   <section className="relative w-full h-screen overflow-hidden">
  {/* Background Video */}
  <video
    className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
    src="/video.mp4"
    autoPlay
    loop
    muted
    playsInline
  />
  <div className="absolute inset-0 bg-black/40" />
  {/* Content Switcher */}
  <div className="relative z-10 flex items-center justify-center h-screen text-white">
    <AnimatePresence mode="wait">
      {showFirst ? (
        <motion.div
          key="div1"
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="flex flex-col justify-center text-center">
            <h1 className="text-xs md:text-2xl mb-4">Tuned to the pulse of</h1>
            <h1 className="text-5xl md:text-9xl mb-6 text-orange-500">
              Digital Future
            </h1>
            <p className="px-10 md:px-40 py-3 rounded-lg shadow-lg text-xs md:text-base">
              Creating the next generation of Digital-first, Cloud-first, and
              AI-first businesses with hyper-personalized and end-to-end
              automation services.
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="div2"
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="flex flex-col justify-center text-center">
            <h1 className="text-base md:text-2xl mt-4 md:mt-10">
              Helping businesses
            </h1>
            <h1 className="text-3xl md:text-9xl text-orange-500">Reimagine</h1>
            <h1 className="text-3xl md:text-9xl text-orange-600">
              Tomorrow
            </h1>
            <p className="px-10 md:px-40 py-3 mb-5 rounded-lg shadow-lg text-xs md:text-base">
              From operating models to customer journeys, and product life cycles
              to employee experiences, revolutionizing every facet of global
              businesses.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>

 {/* Logo Navbar at the bottom */}
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 my-[5%] z-50">
    <LogoNavbar />
  </div>
</section>

  );
}
