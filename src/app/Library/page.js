
"use client"

import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google"; 
import Marvelnav from "@/app/Components/Marvelnav/page";
import Library from "../Content/Marvel/Library/page";
import Background from '@/app/Assets/Banner/Library_bg.png'


const inter = Inter({ weight: ["400"], subsets: ["latin"]});




export default function MarvelLibrary () {
    
    return (
        <div className="static">
            <Marvelnav/>

            <div className="relative overflow-hidden h-52">
               
                <Image className="absolute" width={1520} height={214} src={Background}/>
            <div className="static transform translate-y-28 translate-x-36 space-y-2">
                <div className="text-white font-bold text-2xl">
                <h1 className={inter.className}>LIBRARY</h1>
                </div>
                <input type="text" placeholder="Search by name" className="bg-white w-119"/>
            </div>
            </div>



               {/* COMIC CONTENT 1 */}
               <div className="static">
                    {/* LOGO CONTENT */}
                    <div className=" relative flex flex-row pl-32 pt-16">
                     <div>
                     <Image className="" src={""}/>
                    </div>
                    
                    <div className="text-black text-2xl pl-3">
                        <p className={inter.className}>All Comics :</p>
                    </div>
           
                    </div>
                    <div className="p-2"></div>
                    {/*  */}
                    
                    {/* PREDATOR COMIC COVERS */}
                            <div className="overflow-hidden pb-218">
                                <Library/>
                            </div>  
                    
               </div>
               <div className="pb-28"></div>
                {/* COMIC CONTENT 1 END */}


                
               
        </div>
    )
}

