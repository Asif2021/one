"use client";
import LogoNavbar from "./logoNavbar";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";




export default function HeroWithVideo() {
    const [showFirst, setShowFirst] = useState(true);
    
const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })}
    useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 1800); 

    return () => clearInterval(interval);
  }, []);

  return (
   <section className="relative w-full h-3/4 overflow-hidden">
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
  <div className="relative z-10 flex justify-center mt-18 md:mt-32 h-[480px] md:h-[590px] text-white">
    <AnimatePresence mode="wait">
      {showFirst ? (
        <motion.div
          key="div1"
           initial={{ opacity: 0, scale: 0.95 }}   
        animate={{ opacity: 1 }}      
        exit={{ opacity: 0 }}     
        transition={{ duration: 1.2 }}
        >
          <div className="flex flex-col justify-center text-center max-w-3xl">
            <h1 className="text-2xl md:text-3xl">Tuned to the pulse of</h1>
            <h1 className="text-7xl md:text-9xl text-orange-500">
              Digital Future
            </h1>
            <p className="px-10 py-3 rounded-lg shadow-lg text-base md:text-base">
              Creating the next generation of Digital-first, Cloud-first, and
              AI-first businesses with hyper-personalized and end-to-end
              automation services.
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="div2"
           initial={{ opacity: 0, scale: 0.95 }}   // 👈 start state
        animate={{ opacity: 1 }}      // 👈 enter state
        exit={{ opacity: 0, }}      // 👈 leave state
        transition={{ duration: 1.2 }}
        >
          <div className="flex flex-col justify-center text-center items-center max-w-3xl">
            <h1 className="text-2xl md:text-3xl">
              Helping businesses
            </h1>
            <h1 className="text-7xl md:text-9xl text-orange-500">Reimagine</h1>
            <h1 className="text-7xl md:text-9xl text-orange-500">
              Tomorrow
            </h1>
            <p className="shadow-lg text-base md:text-base">
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
  <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-40 w-full">
    <LogoNavbar />
  </div>
     <motion.button
      onClick={handleScrollDown}
     animate={{ y: [ -40, 0 ] }}
      transition={{
        duration: 1.5,                     
        ease: "easeIn",                     
        repeat: Infinity,                  
        repeatType: "loop",
        repeatDelay: 0.4,  }}
      className="absolute bottom-12 left-1/2 -translate-x-1/2 z-50 
                 p-3 text-white transition cursor-pointer"
    >
      <ArrowDown className="w-5 md:w-8 h-5 md:h-8" />
    </motion.button>
  
</section>

  );
}
