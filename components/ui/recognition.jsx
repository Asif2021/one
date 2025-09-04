"use client";
import LogoNavbar from "./logoNavbar";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Recognition() {
   

  return (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> 
    <div className="grid grid-cols-1 md:grid-cols-2 mt-1" >
      {/* first column */}
    <div className="flex flex-col justify-center p-8 bg-cyan-50">
      <h5 className="text-base md:text-lg font-bold mb-4">Industry Recognitions</h5>
      <h1 className="text-4xl md:text-5xl font-semibold">We are awarded and recommended</h1>
    </div>
  
    {/* second column */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-8 bg-gray-100">
  
  <div className="flex items-center justify-center">
    <Image width={120} height={120}
      src="/logos/PSEB.png"
      alt="logo1"
      className="w-full h-full object-contain bg-white hover:shadow-2xl transition rounded-2xl p-2 "/>
  </div>

  
  <div className="flex flex-col justify-between space-y-2"> 
    <Image width={150} height={120} src="/logos/microsoft.png" alt="logo2" className="h-15 object-contain bg-white hover:shadow-2xl transition rounded-lg px-5" />
    <Image width={150} height={120} src="/logos/iso.png" alt="logo3" className="h-15 object-contain bg-white hover:shadow-2xl transition rounded-lg px-5" />
    <Image width={150} height={120} src="/logos/goodFirms.png" alt="logo4" className="h-15 object-contain bg-white hover:shadow-2xl transition rounded-lg px-5" />
  </div>

 
  <div className="flex flex-col justify-between space-y-2">
    <Image width={150} height={120} src="/logos/odoo.png" alt="logo5" className="h-15 object-contain bg-white hover:shadow-2xl transition rounded-lg px-5" />
    <Image width={150} height={120} src="/logos/redhat.png" alt="logo6" className="h-15 object-contain bg-white hover:shadow-2xl transition rounded-lg px-5" />
    <Image width={150} height={120} src="/logos/clutch.png" alt="logo7" className="h-15 object-contain bg-white hover:shadow-2xl transition rounded-lg px-5" />
  </div>
</div>

    </div>

  </div>

  );
}
