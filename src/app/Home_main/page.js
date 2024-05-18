"use client"

import Image from "next/image";
import Predator from '@/app/Assets/Banner/Predator.png';
import Hellboy from '@/app/Assets/Banner/Hellboy.png';
import JudgeDredd from '@/app/Assets/Banner/JudgeDredd.png'
import Content from '@/app/Assets/Logo/Content-logo.svg'
import Link from "next/link";
import { Inter } from "next/font/google";
import PredatorList from "@/app/Content/Predator/page";
import HellboyList from "@/app/Content/Hellboy/page";
import JudgeList from "@/app/Content/Judge/page";
import Marvel_GO from "@/app/Assets/Banner/Marvel_go_to.png"
import DC_GO from "@/app/Assets/Banner/DC_go_to.png"

const inter = Inter({ weight: ["400"], subsets: ["latin"]});


const Home_main = () => {
    
    return (
        <div className="static">
            {/* BANNER 1 */}

            <div className="relative overflow-hidden pb-132">

            <Image className="absolute" src={Predator} />
           
           

           <div className="static transform translate-y-96 translate-x-24 -space-y-5">
           <p className="text-white relative font-['vogue'] text-6xl">THE PREDATOR</p><br/>
           <p className="text-left text-white relative font-['nexa']">
               Discover the untamed world of The Predator: <br/>
               Unleash your primal instincts and delve deeper <br/>
               into the hunt!</p>
           </div>
          
           <div className="transform translate-y-107 translate-x-24">
                        <button className="border-solid border-2 rounded-tl-marvel rounded-br-marvel text-white p-2.5 px-8 Hover">
                        <Link href="/halaman-lain">Read More</Link> 
                        </button> 
               </div>
            </div>
           
               {/* COMIC CONTENT */}
               <div className="static">
                    {/* LOGO CONTENT */}
                    <div className=" relative flex flex-row pl-32 pt-16">
                     <div>
                     <Image className="" src={Content}/>
                    </div>
                    
                    <div className="text-black text-3xl pl-3">
                        <p className={inter.className}>READ FOR FREE PREDATOR COMICS</p>
                    </div>
           
                    </div>
                    <div className="p-7"></div>
                    {/*  */}
                    
                    {/* PREDATOR COMIC COVERS */}
                            <div>
                            <PredatorList/>
                            </div>
                    
               </div>
               <div className="p-36"></div>
               {/* BANNER 1 END */}

                
                {/* BANNER 2 */}
               <div className="relative overflow-hidden pb-132">
               <Image className="absolute" src={Hellboy}/>

               <div className="transform translate-y-96 translate-x-24 -space-y-5">
               <p className="text-white relative font-['vogue'] text-6xl">HELLBOY</p><br/>
               <p className="text-left text-white relative font-['nexa']">
               Discover the untamed world of The Predator: <br/>
               Unleash your primal instincts and delve deeper <br/>
               into the hunt!</p>
               </div>

               <div className="transform translate-y-107 translate-x-24">
                    <p>
                        <button className="border-solid border-2 rounded-tl-marvel rounded-br-marvel p-2.5 px-8 Hover">
                        <Link href="/halaman-lain">Read More</Link> 
                        </button>
                    </p>
               </div>
              
               </div>

               <div className="static">
                    {/* LOGO CONTENT */}
                    <div className=" relative flex flex-row pl-32 pt-16">
                     <div>
                     <Image className="" src={Content}/>
                    </div>
                    
                    <div className="text-black text-3xl pl-3">
                        <p className={inter.className}>READ FOR FREE HELLBOY COMICS</p>
                    </div>
           
                    </div>
                    <div className="p-7"></div>
                    {/*  */}
                    
                    {/* PREDATOR COMIC COVERS */}
                            <div>
                                
                            <HellboyList/>
                            </div>
                    
               </div>
               <div className="p-36"></div>
                {/* BANNER 2 END */}
            

                {/* BANNER 3 */}
               <div className="relative overflow-hidden pb-132">
               <Image className="absolute" src={JudgeDredd}/>

               <div className="transform translate-y-96 translate-x-24 -space-y-5">
               <p className="text-white relative font-['vogue'] text-6xl">JUDGE DREDD</p><br/>
               <p className="text-left text-white relative font-['nexa']">
               Discover the untamed world of The Predator: <br/>
               Unleash your primal instincts and delve deeper <br/>
               into the hunt!</p>
               </div>

               <div className="transform translate-y-107 translate-x-24">
                    <p>
                        <button className="border-solid border-2 rounded-tl-marvel rounded-br-marvel p-2.5 px-8 Hover">
                        <Link href="/halaman-lain">Read More</Link> 
                        </button>
                    </p>
               </div>

              
               </div>

               <div className="static">
                    {/* LOGO CONTENT */}
                    <div className=" relative flex flex-row pl-32 pt-16">
                     <div>
                     <Image className="" src={Content}/>
                    </div>
                    
                    <div className="text-black text-3xl pl-3">
                        <p className={inter.className}>READ FOR FREE JUDGE DREDD COMICS</p>
                    </div>
           
                    </div>
                    <div className="p-7"></div>
                    {/*  */}
                    
                    {/* PREDATOR COMIC COVERS */}
                            <div>
                            <JudgeList/>
                            </div>
                    
               </div>
               <div className="p-36"></div>
               {/* BANNER 3 END */}


                {/* GO TO MARVEL BANNER */}
               <div className="relative overflow-hidden pb-132">
               <Image className="absolute" src={Marvel_GO}/>

               <div className="transform translate-y-72 translate-x-24 -space-y-5">
               <p className="text-white relative font-['vogue'] text-6xl">BROWSE ALL <br/> THE MARVELS</p>
               </div>

               <div className="transform translate-y-75 translate-x-24">
                    <p>
                        <button className="border-solid border-2 rounded-tl-marvel rounded-br-marvel p-2.5 px-8 Hover">
                        <Link href="/Marvel_main">Read More</Link> 
                        </button>
                    </p>
               </div>
            </div>
            <div className="p-20"></div>
           {/* GO TO MARVEL BANNER END */}\

           
           {/* GO TO DC BANNER */}
           <div className="relative overflow-hidden pb-132">
               <Image className="absolute" src={DC_GO}/>

               <div className="transform translate-y-72 translate-x-24 -space-y-5">
               <p className="text-white relative font-['vogue'] text-6xl">BROWSE WHAT IS INSIDE <br/> THE DC COMICS</p>
               </div>

               <div className="transform translate-y-75 translate-x-24">
                    <p>
                        <button className="border-solid border-2 rounded-tl-marvel rounded-br-marvel p-2.5 px-8 Hover">
                        <Link href="/halaman-lain">Read More</Link> 
                        </button>
                    </p>
               </div>
            </div>
            <div className="p-7"></div>
            {/* GO TO DC BANNER END */}
                
               
        </div>
    )
}

export default Home_main