"use client"; 

import { motion } from "framer-motion";
import Image from "next/image";

export default function Planning() {
  return (
 <motion.div
      initial={{ y: 100, opacity: 0 }}            
      whileInView={{ y: 0, opacity: 1 }}           
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}      
      className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center md:justify-between mt-10 md:mt-20 rounded-4xl"
    >
  {/* Left content */}
  <div className="w-full md:w-1/2 p-6">
    <h5 className="text-sm font-bold text-black">Enterprise Resource Planning</h5>
    <h1 className="text-4xl md:text-3xl font-bold text-blue-950 mt-2">Quantum Leaps, Not Baby Steps</h1>
    <p className="mt-4 text-gray-600 font-semibold">
      We don’t just provide solutions; we ignite transformations. Our digital alchemy turns mundane processes into gold-standard practices. Whether you’re a startup, a mid-sized enterprise, or a global conglomerate, we orchestrate the symphony of your success
    </p>
    <button className="hidden md:block mt-15 bg-black font-bold text-white px-6 py-2 rounded-xl hover:bg-orange-500 transition">
      Know more
    </button>
  </div>

  {/* Right content */}
  <div className="w-full md:w-1/2 p-8">
    <div className="flex items-center justify-center flex-1 rounded-xl transition">
      <Image
        src="/images/4.jpg"
        alt="image"
        width={440}
        height={250}
        className="w-full h-auto object-cover rounded-xl"
      />
    </div>
  </div>
  </motion.div>

  );
}