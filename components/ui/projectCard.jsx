import { ArrowRight, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";


export default function ProjectCard() {
    const [activeIndex, setActiveIndex] = useState(0);
    
   const rows = [
     { icon: <Settings />, title: "Custom App Projects", subtitle: "Innovative apps designed to solve, simplify, and succeed." },
     { icon: <Settings />, title: "ERP CaseStudies", subtitle: "Real-world success stories of our innovative enterprise solutions." },
     { icon: <Settings />, title: "Process Outsourcing", subtitle: "Strategically managed services at an offshore operational centre." },
   ];

  return (
    <div className="grid grid-cols-3 gap-6 max-w-7xl mx-auto p-6 rounded-xl">
      {/* Left column (2/3 width) */}
      <div className="col-span-2 flex flex-col gap-6">
        {rows.map((row, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            className="grid grid-cols-[40px_170px_1fr_40px] items-center bg-white cursor-pointer hover:bg-blue-100 transition duration-500 rounded-lg p-4"
          >
            {/* Icon */}
            <div className="flex justify-center">{row.icon}</div>

            {/* Title */}
            <h1 className="text-base font-semibold text-gray-800">{row.title}</h1>

            {/* Subtitle */}
            <h4 className="text-sm font-semibold text-gray-600">{row.subtitle}</h4>

            {/* ArrowRight aligned right */}
             <motion.div
        animate={{ x: [0, 4, 0] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
       className="flex justify-center">
              <ArrowRight className={`w-5 h-5 text-orange-500 ${activeIndex == index ? "block" : "hidden"}`} />
            </motion.div>
          </div>
        ))}
      </div>

      {/* Right column (1/3 width) */}
      <div className="col-span-1 flex flex-col items-center justify-center mb-5">
        <Image
          src="/images/2.jpg"
          alt="Right side image"
          width={250}
          height={250}
          className="rounded-xl object-cover"
        />
         <Link
      href="#"
      className="flex flex-row items-center gap-2 hover:underline"
    >
      Engaging modern learners to enhance knowledge retention and performance.
      <ArrowRight className="w-5 h-5 text-orange-500" />
    </Link>
      </div>
    </div>
  );
}






// "use client";
// import { ArrowRight, Settings } from "lucide-react";
// import Image from "next/image";

// export default function ProjectCard() {
//   const rows = [
//     { icon: <Settings />, title: "Custom App Projects", subtitle: "Innovative apps designed to solve, simplify, and succeed." },
//     { icon: <Settings />, title: "ERP Casestudies", subtitle: "Real-world success stories of our innovative enterprise solutions." },
//     { icon: <Settings />, title: "Process Outsourcing", subtitle: "Strategically managed services at an offshore operational centre." },
//   ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto p-6">
//       {/* Left Column (2/3 width) */}
//       <div className="md:col-span-2 flex flex-col space-y-6">
//   {rows.map((row, i) => (
//     <div
//       key={i}
//       className="flex items-center justify-between p-4 hover:bg-gray-100 rounded-xl"
//     >
//       {/* Icon + Title + Subtitle */}
//       <div className="flex items-center gap-6">
//         <span className="text-orange-500">{row.icon}</span>

//         {/* Wrap title + subtitle together */}
//         <div className="flex items-center gap-3">
//           <h1 className="text-lg font-bold text-gray-900">{row.title}</h1>
//           <h4 className="text-gray-600 text-sm">{row.subtitle}</h4>
//         </div>
//       </div>

//       {/* Arrow Right (far right) */}
//       <ArrowRight className="w-6 h-6 text-orange-500" />
//     </div>
//   ))}
// </div>


//       {/* Right Column (1/3 width, Image) */}
//       <div className="flex items-center justify-center">
//         <Image
//           src="/images/2.jpg"
//           alt="Example"
//           width={300}
//           height={300}
//           className="rounded-xl shadow-lg object-cover"
//         />
//       </div>
//     </div>
//   );
// }
