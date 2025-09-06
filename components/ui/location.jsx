"use client"
import Link from "next/link";
import { FaFacebook, FaYoutube, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";



export default function Location(){
    return(
        <div className="max-w-6xl mx-auto p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* first Section */}
            <div className="flex flex-row justify-start p-2 md:p-5 gap-6">
            <div className="flex flex-col justify-start p-2 md:p-5 gap-1">
                <h1 className="text-orange-500 font-bold text-xl">Middle East</h1>
                <h3>304, Saheel Al Ittihad Road</h3>
                <p> Al Nahda 1, Dubai</p>
                <Link href="#" className="hover:underline font-semibold">+971 (50) 560-6283</Link>
                <h1 className="text-orange-500 font-bold text-xl mt-8">Asia</h1>
                <h3>346, Block G3, Johar Town,</h3>
                <p> 54782, Lahore, Pakistan</p>
                <Link href="#" className="hover:underline font-semibold">+92 111-211-111</Link>
            </div>
            <div className="flex flex-col justify-start p-2 md:p-5 gap-1">
                <h1 className="text-orange-500 font-bold text-xl">America</h1>
                <h3>2046, Windsor Road North Baldwin</h3>
                <p>New York 11510-2946, USA</p>
                <Link href="#" className="hover:underline font-semibold">+1 (516) 410-5195</Link>
                <h1 className="text-orange-500 font-bold text-xl mt-13 md:mt-8">Europe</h1>
                <h3>Epicenter, 36 Mäster Samuelsgatan,</h3>
                <p>111 57 Stockholm, Sweden</p>
                <Link href="#" className="hover:underline font-semibold">+46 (73) 210-0017</Link>
            </div>
            </div>
            {/* second section */}
            <div className="flex flex-row justify-between p-2 md:p-5 gap-3">
                <div className="flex flex-col justify-start p-2 md:p-5 gap-5">
                    <h1 className="font-semibold text-xl">Resources</h1>
                    <Link href="#" className="hover:underline">Life at Synavos</Link>
                    <Link href="#" className="hover:underline">Join our Team</Link>
                    <Link href="#" className="hover:underline">IT Trainings</Link>
                </div>
                <div className="flex flex-col justify-start p-2 md:p-5 gap-8">
                    <h1 className="font-semibold text-xl">Follow Us</h1>
<div className="flex flex-row gap-8 text-2xl text-gray-600">
    <div className="flex flex-col gap-8">
        <Link href="https://facebook.com"><FaFacebook className="w-4 h-4 transition duration-100 ease-in-out hover:scale-150" /></Link>
        <Link href="https://youtube.com"><FaYoutube className="w-4 h-4 transition duration-100 ease-in-out hover:scale-150" /></Link>
    </div>
      <div className="flex flex-col gap-8">
        <Link href="https://twitter.com"><FaTwitter className="w-4 h-4 transition duration-100 ease-in-out hover:scale-150" /></Link>
      <Link href="https://linkedin.com"><FaLinkedin className="w-4 h-4 transition duration-100 ease-in-out hover:scale-150" /></Link>
      </div>
      <div className="flex flex-col gap-8">
        <Link href="https://instagram.com"><FaInstagram  className="w-4 h-4 transition duration-100 ease-in-out hover:scale-150"/></Link>
      <Link href="https://instagram.com"><FaWhatsapp className="w-4 h-4 transition duration-100 ease-in-out hover:scale-150"/></Link>
      </div>

    </div>
                </div>


            </div>
        </div>
    )
}