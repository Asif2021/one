"use client"
import { motion } from "framer-motion";

export default function ReachUs() {
    return (
<div className="max-w-7xl mx-auto px-4 md:px-8 overflow-hidden pb-10 flex flex-col md:flex-row w-full bg-gradient-to-r from-cyan-50 to-gray-100 rounded-t-[45px]">
    {/* first section with 30% width */}
    <motion.div
    initial={{ opacity: 0, y: 50 }}  
       whileInView={{ opacity: 1, y: 0 }}  
       transition={{ duration: 0.8, ease: "easeOut" }}  
       viewport={{ once: false, amount: 0.3 }}
    className="w-full md:w-[30%] my-10 flex flex-col gap-4 md:p-18">
        <h1 className="text-base font-semibold text-blue-950">Reach us</h1>
        <h1 className="text-3xl font-bold text-blue-950">Meet Your Subject Matter Experts</h1>
        <p className="">We are happy to connect.</p>
    </motion.div>
    {/* second section with 70% width */}
    <motion.div
    initial={{ opacity: 0, y: 50 }}  
       whileInView={{ opacity: 1, y: 0 }}  
       transition={{ duration: 0.8, ease: "easeOut" }}  
       viewport={{ once: false, amount: 0.3 }}
    className="w-full md:w-[70%] flex flex-col gap-4 md:p-18">
        <div className="flex flex-col md:flex-row gap-4">
            <input type="text" placeholder="Full Name*" name="fullName" className="bg-white p-2 border border-gray-400 w-full md:w-1/2 rounded-lg" />
            <input type="text" placeholder="Phone*" name="phone" className="bg-white p-2 border border-gray-400 w-full md:w-1/2 rounded-lg"/>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
            <input type="text" placeholder="Email*" name="email" className="bg-white p-2 border border-gray-400 w-full md:w-1/2 rounded-lg" />
            <input type="text" placeholder="Company Name*" name="company" className="bg-white p-2 border border-gray-400 w-full md:w-1/2 rounded-lg"/>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
            <input type="text" placeholder="Designation*" name="designation" className="bg-white p-2 border border-gray-400 w-full md:w-1/2 rounded-lg" />
            <select id="services" className="bg-white border border-gray-300 text-gray-600 text-sm rounded-lg 
             focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/2 p-2
             dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
>
                <option value="SC">Select Service*</option>
                <option value="US">ERP Service</option>
                <option value="CA">Managed IT</option>
                <option value="FR">Custom Software Solution</option>
                <option value="DE">Cyber Security</option>
            </select>
        </div>
        <textarea name="textArea" id="" placeholder="Brief details about your query" className="bg-white p-4 border border-gray-400 w-full rounded-lg"/>
        <button className="bg-orange-500 hover:bg-black w-24 p-2 rounded-2xl text-white font-semibold self-end">Submit</button>
    </motion.div>

</div>
    )}