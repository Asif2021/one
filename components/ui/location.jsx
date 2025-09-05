"use client"
import Link from "next/link";

export default function Location(){
    return(
        <div className="max-w-6xl mx-auto p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col justify-start p-2 md:p-5 gap-1">
                <h1 className="text-orange-500 font-bold text-xl">Middle East</h1>
                <h3>304, Saheel Al Ittihad Road</h3>
                <p> Al Nahda 1, Dubai</p>
                <Link href="#" className="hover:underline font-semibold">+971 (50) 560-6283</Link>
            </div>

        </div>
    )
}