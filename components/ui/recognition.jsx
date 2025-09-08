"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Recognition() {
   
  return (
  <motion.div 
  initial={{ opacity: 0, y: 50 }}  
       whileInView={{ opacity: 1, y: 0 }}  
       transition={{ duration: 0.8, ease: "easeOut" }}  
       viewport={{ once: false }} 
        className="max-w-7xl mx-auto py-12 w-[90%]"> 
  {/* first section of the component */}
    <motion.div 
    initial={{ opacity: 0, y: 50 }}  
       whileInView={{ opacity: 1, y: 0 }}  
       transition={{ duration: 0.8, ease: "easeOut" }}  
       viewport={{ once: false }} 
    className="relative w-full h-full grid grid-cols-1 md:grid-cols-2 mt-1 bg-gradient-to-r from-cyan-50 to-gray-100 rounded-4xl md:px-15 z-30" >
      {/* first column */}
    <div className="flex flex-col justify-center p-8">
      <h5 className="text-base md:text-lg font-bold mb-2">Industry Recognitions</h5>
      <h1 className="text-2xl md:text-4xl font-bold text-violet-950">We are awarded and recommended</h1>
    </div>
  
    {/* second column */}
  <div className="grid grid-cols-3 gap-2 p-4 md:p-8">
  
  <div className="flex items-center justify-center">
    <Image width={120} height={120}
      src="/logos/PSEB.png"
      alt="logo1"
      className="w-full h-full object-contain bg-white transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl rounded-2xl p-2 "/>
  </div> 
  <div className="flex flex-col justify-between space-y-2"> 
    <Image width={170} height={120} src="/logos/microsoft.png" alt="logo2" className="h-8 md:h-15 object-contain bg-white transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl rounded-lg px-5" />
    <Image width={170} height={120} src="/logos/iso.png" alt="logo3" className="h-8 md:h-15 object-contain bg-white transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl rounded-lg px-5" />
    <Image width={170} height={120} src="/logos/goodFirms.png" alt="logo4" className="h-8 md:h-15 object-contain bg-white transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl rounded-lg px-5" />
  </div>
  <div className="flex flex-col justify-between space-y-2">
    <Image width={170} height={120} src="/logos/odoo.png" alt="logo5" className="h-8 md:h-15 object-contain bg-white transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl rounded-lg px-5" />
    <Image width={170} height={120} src="/logos/redhat.png" alt="logo6" className="h-8 md:h-15 object-contain bg-white transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl rounded-lg px-5" />
    <Image width={170} height={120} src="/logos/clutch.png" alt="logo7" className="h-8 md:h-15 object-contain bg-white transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl rounded-lg px-5" />
  </div>
</div>

    </motion.div>
{/* second section of the component */}
   <motion.div
   initial={{ opacity: 0, y: 50 }}  
       whileInView={{ opacity: 1, y: 0 }}  
       transition={{ duration: 0.8, ease: "easeOut" }}  
       viewport={{ once: false }} 
   className="relative w-full h-[280px] mt-[-80px] overflow-hidden rounded-4xl">
    {/* Background Video */}
    <video
      className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
      src="/video.mp4"
      autoPlay
      loop
      muted
      playsInline
    />

    {/* Content over video */}
    <div className="relative z-10 flex items-center justify-center h-full my-5">
      <motion.h1 
      initial={{ opacity: 0, y: 50 }}  
       whileInView={{ opacity: 1, y: 0 }}  
       transition={{ duration: 0.8, ease: "easeOut" }}  
       viewport={{ once: false }} 
      className="text-white text-lg md:text-5xl drop-shadow-lg p-10 md:px-12 mt-10">
       Synavos is a <span className="text-orange-500"> catalyst for change </span> delivering solutions that push boundaries & set new standards.
      </motion.h1>
    </div>
  </motion.div>
  </motion.div>

  );
}
