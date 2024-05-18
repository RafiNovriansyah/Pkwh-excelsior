"use client"

import Image from "next/image";
import Content from '@/app/Assets/Logo/Content-logo.svg'
import Link from "next/link";
import MarvelCharacters from "@/app/Content/Marvel/Characters/page";
import { Inter } from "next/font/google"; 
import Marvelnav from "@/app/Components/Marvelnav/page";
import Slideshow from "@/app/Components/Slider/page";
import NewRelease from "@/app/Content/Marvel/New_release/page";
import BestSelling from "@/app/Content/Marvel/Best_selling_comics/page";
import ReadforFree from "@/app/Content/Marvel/Read_for_free/page";


const inter = Inter({ weight: ["400"], subsets: ["latin"]});




const MarvelChar = () => {
    
    return (
        <div className="static">
            <Marvelnav/>
            <Slideshow/>    
           
               {/* COMIC CONTENT 1 */}
               <div className="static">
                    {/* LOGO CONTENT */}
                    <div className=" relative flex flex-row pl-32 pt-16">
                     <div>
                     <Image className="" src={Content}/>
                    </div>
                    
                    <div className="text-black text-3xl pl-3">
                        <p className={inter.className}>NEW RELEASE 2024</p>
                    </div>
           
                    </div>
                    <div className="p-4"></div>
                    {/*  */}
                    
                    {/* PREDATOR COMIC COVERS */}
                            <div className="">
                         <MarvelCharacters/>
                            </div>  
                    
               </div>
               <div className="p-76"></div>
                {/* COMIC CONTENT 1 END */}

                
                {/* COMIC CONTENT 2  */}
               <div className="static">
                    {/* LOGO CONTENT */}
                    <div className=" relative flex flex-row pl-32 pt-16">
                     <div>
                     <Image className="" src={Content}/>
                    </div>
                    
                    <div className="text-black text-3xl pl-3">
                        <p className={inter.className}>BEST SELLING COMICS</p>
                    </div>
           
                    </div>
                    <div className="p-4"></div>
                    {/*  */}
                    
                    {/* PREDATOR COMIC COVERS */}
                            <div>
                                
                           <BestSelling/>
                            </div>
                  
                    
               </div>
             {/* COMIC CONTENT 2 END */}
            

                  {/* COMIC CONTENT 3 */}
               <div className="static">
                    {/* LOGO CONTENT */}
                    <div className=" relative flex flex-row pl-32 pt-16">
                     <div>
                     <Image className="" src={Content}/>
                    </div>
                    
                    <div className="text-black text-3xl pl-3">
                        <p className={inter.className}>READ FOR FREE</p>
                    </div>
           
                    </div>
                    <div className="p-4"></div>
                    {/*  */}
                    
                    {/* PREDATOR COMIC COVERS */}
                            <div>
                           <ReadforFree/>
                            </div>
                    
               </div>
               {/* COMIC CONTENT 3 END */}



                
               
        </div>
    )
}

export default MarvelChar