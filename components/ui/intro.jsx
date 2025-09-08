"use client"; 

import { motion } from "framer-motion";
import Image from "next/image";

export default function Intro() {
  return (

  <motion.div
      initial={{ y: 100, opacity: 0 }}            
       whileInView={{ y: 0, opacity: 1 }}           
       transition={{ duration: 0.6, ease: "easeOut" }}
       viewport={{ once: true, amount: 0.3 }} className="w-full p-10">
    {/* first Section */}
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">   
  {/* Left Column */}
  <div>
    <h1 className="text-base md:text-xl font-bold">Over the years</h1>
    <h1 className="text-4xl font-bold text-blue-950 mt-2 pr-0 md:pr-52">
      Numbers that have enabled us
    </h1>
  </div>

  {/* Right Column */}
  <div>
    <p className="text-gray-700 text-sm md:text-base p-0 md:pr-38 mt-0 md:mt-10">
      From big data to virtual teams, the business landscape has been on a path
      of revolution. At Synavos, a creative bunch embarked on the journey to
      develop digital ecosystems that are relevant, efficient and transformative.
    </p>
  </div>
   </div>
   {/* second section */}
 <motion.div
       initial={{ opacity: 0, y: 50 }}  
       whileInView={{ opacity: 1, y: 0 }}  
       transition={{ duration: 0.8, ease: "easeOut" }}  
       viewport={{ once: false, amount: 0.3 }} 
       className="max-w-6xl mx-auto mt-8 grid grid-cols-4 gap-4">

    <div className="flex flex-col justify-evenly min-w-0 px-0 md:px-1">
      <h1 className="text-3xl md:text-6xl font-semibold text-orange-500">100+</h1>
      <p className="text-sm md:text-lg">Skilled Superheroes</p>
    </div>

    <div className="flex flex-col justify-evenly min-w-0 px-0 md:px-1">
      <h1 className="text-3xl md:text-6xl font-semibold text-orange-500">50+</h1>
      <p className="text-sm md:text-lg">Global Footprint</p>
    </div>

    <div className="flex flex-col justify-evenly min-w-0 px-0 md:px-1">
      <h1 className="text-3xl md:text-6xl font-semibold text-orange-500">99%</h1>
      <p className="text-sm md:text-lg">Customer Retention</p>
    </div>

    <div className="flex flex-col justify-evenly min-w-0 px-0 md:px-1">
      <h1 className="text-3xl md:text-6xl font-semibold text-orange-500">10</h1>
      <p className="text-sm md:text-lg">Years of Experience</p>
    </div>
  </motion.div>
</motion.div>


//  <motion.div
//       initial={{ y: 100, opacity: 0 }}            
//       whileInView={{ y: 0, opacity: 1 }}           
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       viewport={{ once: false, amount: 0.3 }}      
//       className="max-w-6xl mx-auto flex mt-10 md:mt-20 flex-col md:flex-row md:justify-between">
//   {/* Left content */}
//   <div className="w-full md:w-1/2 p-6">
//     <h1 className="text-lg font-bold text-black">Over the years</h1>
//     <h1 className="text-5xl md:text-3xl font-bold text-blue-950 mt-2 pr-52">Numbers that have enabled us</h1>
//   </div>

//   {/* Right content */}
//   <div className="w-full md:w-1/2 mt-10">
//    <p className="text-gray-700 font-semibold pr-38">From big data to virtual teams, the business landscape has been on a path of revolution. At Synavos, a creative bunch embarked on the journey to develop digital ecosystems that are relevant, efficient and transformative.</p>
//   </div>
//   <motion.div
//       className="flex flex-col md:flex-row justify-between pr-16 pl-3 mt-10"
//       initial={{ opacity: 0, y: 50 }} // start hidden & slightly below
//       whileInView={{ opacity: 1, y: 0 }} // animate to visible & normal position
//       transition={{ duration: 0.8, ease: "easeOut" }} // smooth transition
//       viewport={{ once: false, amount: 0.3 }} // animate each time it comes into view
//     >
//       <div className="flex flex-col">
//         <h1 className="text-6xl font-semibold text-orange-500">100+</h1>
//         <p>Skilled Superheroes</p>
//       </div>
//       <div className="flex flex-col text-right md:text-left">
//         <h1 className="text-6xl font-semibold text-orange-500">50+</h1>
//         <p>Global Footprint</p>
//       </div>
//       <div className="flex flex-col">
//         <h1 className="text-6xl font-semibold text-orange-500">100+</h1>
//         <p>Skilled Superheroes</p>
//       </div>
//       <div className="flex flex-col text-right md:text-left">
//         <h1 className="text-6xl font-semibold text-orange-500">50+</h1>
//         <p>Global Footprint</p>
//       </div>
//     </motion.div>
//   </motion.div>

  );
}