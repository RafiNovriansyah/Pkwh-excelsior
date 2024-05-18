
"use client"

import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google"; 
import Navbar from "../Components/Navbar/page";
import Library from "../Content/Marvel/Library/page";
import Background from '@/app/Assets/Banner/Library_bg.png'


const inter = Inter({ weight: ["400"], subsets: ["latin"]});




export default function Cart () {
    
    return (
        <div className="static">
            <Navbar/>

                <div className="flex flex-col">

                    <div className="flex justify-center">
                    <div className="rounded-t-lg bg-black-navbar py-4  w-121">
                        <h1 className="text-left inline-block align-middle pl-10">Pilih semua</h1>
                    </div>
                    </div>

                    <div className="flex justify-center">
                    <div className="rounded-t-lg bg-black-navbar px-75 w-121 ">
                    <h1 className="text-black">Pilih semua</h1>
                    </div>
                    </div>
                </div>
                
               
        </div>
    )
}

