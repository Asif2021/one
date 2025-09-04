
"use client"; 

import { motion, AnimatePresence, easeInOut } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function CaseStudy() {
    const [index, setIndex] = useState(0);
    const [heading, setHeading] = useState(0);

     const images = ["/images/3.jpg", "/images/4.jpg", "/images/5.jpg"];
     const headings = ["Sazgar", "HBK Retail Park", "Seamless"];
     const data = [
        {
            title: "Sazgar",
            description: "Outsourced their operational core with a contact center in place",
            stats:[
                {value:"+88", label:"conversion rate"},
                {value:"+99", label:"customer satisfaction"},
            ]
        },
        {
            title: "HBK Retail Park",
            description: "Revolutionized shopping experience through SAP Business One.",
            stats:[
                {value:"+98", label:"conversion rate"},
                {value:"+89", label:"customer satisfaction"},
            ]
        },
        {
            title: "Seamless",
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
     setHeading((prev) => (prev + 1) % headings.length);
    }, 2500); 

    return () => clearInterval(interval);
  }, [images.length]);


  return (
<div className="max-w-6xl mx-auto px-8 pt-8 overflow-hidden my-10 md:mt-0 bg-black text-white rounded-4xl">
        <h1 className="text-white text-base md:text-xl font-bold">Case Studies</h1>
    <div className=" hidden md:grid grid-cols-2 gap-4 mt-2 mb-5">
        <h1 className="font-bold text-3xl">Innovation at Every Step</h1>
        <h3 className="pr-20">Embrace the power of cutting-edge technology with us to accelerate growth and drive your business forward.</h3>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-12 gap-6">
  <div className="col-span-1 sm:col-span-1 md:col-span-3 flex flex-row md:flex-col gap-5 justify-start p-4 text-gray-500">
  {headings.map((title, i)=>(
  <motion.h1
  key={title}
  className="flex items-start"
  animate={{ color: heading === i ? "#f97316" : "#808080" }}
  transition={{ duration: 0.8, ease: "easeInOut" }}
>
  <motion.span
    animate={{ borderColor: heading === i ? "#f97316" : "#808080" }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
    className="border-t-2 md:border-t-0 md:border-l-2 h-0 md:h-8 w-full md:w-8 mr-0 mb-4 md:mb-0"
  />
  {title}
</motion.h1>
  ))}
  </div>

  <div className="col-span-1 sm:col-span-1 md:col-span-4 mb-8 ">
    <AnimatePresence mode="wait">
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}>
        <h1 className="text-2xl font-bold">{data[index].title}</h1>
        <p className="mt-2">{data[index].description}</p>

        <div className="flex flex-row justify-between mt-4">
          {data[index].stats.map((stat, i) => (
            <div key={i}>
           <motion.h1 key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }} className={`text-6xl overflow-hidden ${ index === 1 ? "text-cyan-500" : "text-orange-500"}`}>{stat.value}</motion.h1>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>

        <button className="py-2 px-3 font-bold mt-8 text-black hover:text-white bg-white hover:bg-black rounded-xl">
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
      height={350}
      priority
      loading="eager"
      className="w-full h-72 object-cover rounded-tl-4xl rounded-br-4xl"
    />
  </motion.div>
</AnimatePresence>

  </div>
</div>


</div>

  );
}