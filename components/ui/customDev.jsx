
"use client"; 

import { motion } from "framer-motion";
import Image from "next/image";

export default function CustomDev() {
  return (
   <motion.div
      initial={{ y: 100, opacity: 0 }}            
      whileInView={{ y: 0, opacity: 1 }}           
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false }}      
      className="max-w-7xl mx-auto w-[90%] md:w-full p-4 flex mt-10 md:mt-0 flex-col bg-gradient-to-r from-cyan-50 to-gray-100 rounded-4xl md:flex-row items-center md:justify-between"
    >
      {/* Left content */}
      <div className="w-full md:w-1/2">
        <div className="flex items-center justify-center flex-1 rounded-xl transition">
          <Image
            src="/images/2.jpg"
            alt="image"
            width={340}
            height={150}
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Right content */}
      <div className="w-full md:w-1/2 p-6 mt-9 md:mt-0">
        <h5 className="text-sm font-bold text-black">Custom Development</h5>
        <h1 className="text-4xl md:text-3xl font-bold text-blue-950 mt-2">
          Making Magic with Captivating Interfaces
        </h1>
        <p className="mt-4 text-gray-600 font-semibold">
          Long-term success requires more than just technology; it requires
          vision. Build a resilient, adaptable business prepared for the future
          with meticulously crafted software solutions.
        </p>
        <button className="mt-15 hidden md:block bg-black font-bold text-white px-6 py-2 rounded-xl hover:bg-orange-500 transition">
          Know more
        </button>
      </div>
    </motion.div>

  );
}