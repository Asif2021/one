
"use client"; 

import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { useEffect, useState } from "react";


export default function CaseStudy() {
    const [showFirst, setShowFirst] = useState(true);
      useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 1500); 

    return () => clearInterval(interval);
  }, []);


  return (
<div className="max-w-6xl mx-auto p-8 my-10 md:mt-0 bg-black text-white rounded-4xl pt-5">
        <h1 className="text-white text-5xl md:text-xl font-bold">Case Studies</h1>
    <div className=" hidden md:grid grid-cols-2 gap-4 mt-2 mb-5">
        <h1 className="font-bold text-3xl">Innovation at Every Step</h1>
        <h3 className="pr-20">Embrace the power of cutting-edge technology with us to accelerate growth and drive your business forward.</h3>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-12 gap-6">
  <div className="col-span-1 sm:col-span-1 md:col-span-3 flex flex-row md:flex-col justify-start p-4">
    <h1>Sazgar</h1>
    <h1 className="my-3">HBK Retail Park</h1>
    <h1>Seamless</h1>
  </div>

  <div className="col-span-1 sm:col-span-1 md:col-span-4 ">
    <AnimatePresence mode="wait">
        {showFirst ? (
          <motion.div
            key="div1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <h1 className="">Seamless</h1>
            <p>Revolutionized shopping experience through SAP Business One.</p>
            <div className="flex flex-row justify-between">
              <div>
                <h1 className="text-6xl text-orange-500">+88</h1>
                <p>conversion rate</p>
              </div>
              <div>
                <h1 className="text-6xl text-orange-500">+58</h1>
                <p>customer satisfaction</p>
              </div>
            </div>
            <button className="py-2 px-3 font-bold mt-8 text-black bg-white rounded-xl">
              view case study
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="div2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <h1 className="">Seamless</h1>
            <p>Revolutionized shopping experience through SAP Business One.</p>
            <div className="flex flex-row justify-between">
              <div>
                <h1 className="text-6xl text-cyan-300">+108</h1>
                <p>Automated Process</p>
              </div>
              <div>
                <h1 className="text-6xl text-cyan-300">+48</h1>
                <p>customer Acquisition</p>
              </div>
            </div>
            <button className="py-2 px-3 font-bold mt-8 text-black bg-white rounded-xl">
              view case study
            </button>
          </motion.div>
        )}
      </AnimatePresence>
  </div>
  <div className="col-span-1 sm:col-span-1 md:col-span-5">
    Column 3
  </div>
</div>


</div>

  );
}