
"use client"; 

import { motion, AnimatePresence, easeInOut } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function CaseStudy() {
    const [index, setIndex] = useState(0);

     const images = ["/images/3.jpg", "/images/4.jpg", "/images/5.jpg"];
     const data = [
        {
            heading: "Seamless",
            description: "Outsourced their operational core with a contact center in place",
            stats:[
                {value:"+88", label:"conversion rate"},
                {value:"+99", label:"customer satisfaction"},
            ]
        },
        {
            heading: "HBK Retail Park",
            description: "Revolutionized shopping experience through SAP Business One.",
            stats:[
                {value:"+98", label:"conversion rate"},
                {value:"+89", label:"customer satisfaction"},
            ]
        },
        {
            heading: "Seamless",
            description: "Outsourced their operational core with a contact center in place",
            stats:[
                {value:"+100", label:"conversion rate"},
                {value:"+99", label:"customer satisfaction"},
            ]
        },
     ]
      useEffect(() => {
    const interval = setInterval(() => {
     setIndex((prev) => (prev + 1) % images.length);
    }, 1500); 

    return () => clearInterval(interval);
  }, [images.length]);


  return (
<div className="max-w-6xl mx-auto px-8 pt overflow-hidden my-10 md:mt-0 bg-black text-white rounded-4xl">
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
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h1 className="text-2xl font-bold">{data[index].heading}</h1>
        <p className="mt-2">{data[index].description}</p>

        <div className="flex flex-row justify-between mt-4">
          {data[index].stats.map((stat, i) => (
            <div key={i}>
              <h1 className="text-6xl text-orange-500">{stat.value}</h1>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>

        <button className="py-2 px-3 font-bold mt-8 text-black bg-white rounded-xl">
          view case study
        </button>
          </motion.div>
      </AnimatePresence>
  </div>
  <div className="col-span-1 sm:col-span-1 md:col-span-5">
    <AnimatePresence mode="wait">
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
    className="flex items-center justify-center flex-1 rounded-xl transition"
  >
    <Image
      src={images[index]}
      alt={`image-${index}`}
      width={440}
      height={250}
      priority
      loading="eager"
      className="w-full h-64 object-cover rounded-tl-4xl rounded-br-4xl"
    />
  </motion.div>
</AnimatePresence>

  </div>
</div>


</div>

  );
}