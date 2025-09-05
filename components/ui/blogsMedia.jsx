"use client"; 
import Link from "next/link";
import { MoveRight  } from 'lucide-react';
import Image from "next/image";
import { motion } from "framer-motion";

export default function BlogsMedia(){
    return (
        <motion.div 
        initial={{ opacity: 0, y: 50 }}  
       whileInView={{ opacity: 1, y: 0 }}  
       transition={{ duration: 0.8, ease: "easeOut" }}  
       viewport={{ once: false, amount: 0.3 }} 
       className="max-w-6xl mx-auto p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* first column */}
            <div className="flex flex-col justify-start p-2 md:p-5 gap-3">
            <h1 className="font-bold text-xl">
                Blogs
            </h1>
            <Link href={"#"} className="text-blue-950 text-2xl mt-2 hover:underline">
            Prototyping in Product Design: Types, Tools, and Best Practices
            </Link>
            <p className="">
                Designing a digital product isnt just about jumping straight to polished screens. Before anything...
            </p>
            <Link href={"#"} className="flex flex-row text-orange-500 hover:text-orange-700 font-bold hover:underline items-center" >Read More <span className="ml-3 bg-orange-50 px-1 rounded-lg">   <MoveRight /> </span> </Link>
            </div>
            {/* second column */}
            <div className="flex flex-col justify-start p-2 md:p-5 gap-3">
            <h1 className="font-bold text-xl">Media</h1>
            <div className="flex flex-row justify-center items-center">
                <Image src={"/images/1.jpg"} alt="media" width={100} height={75} className="transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl rounded-lg border border-gray-300"/>
                <Link href={"#"} className="text-blue-950 text-base hover:underline mx-2">Synavos Partners with Odoo to Drive Digital Transformation for Businesses Globally</Link>
                <span className="ml-3 bg-orange-50 px-1 rounded-lg text-orange-500 hidden md:flex">   <MoveRight /> </span>
            </div>
             <div className="flex flex-row justify-center items-center">
                <Image src={"/images/5.jpg"} alt="media" width={100} height={75} className="transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl rounded-lg border border-gray-300"/>
                <Link href={"#"} className="text-blue-950 text-base hover:underline mx-2">Synavos Onboards Sazgar Engneering for its CRM Implementation with Odoo</Link>
                <span className="ml-3 bg-orange-50 px-1 rounded-lg text-orange-500 hidden md:flex">   <MoveRight /> </span>
            </div>
            </div>

        </motion.div>
    )
}