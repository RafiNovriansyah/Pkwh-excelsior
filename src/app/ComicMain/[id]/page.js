import Navbar from "../../Components/Navbar/page";
import LeftArrow from '@/app/Assets/Logo/Left_Arrow.svg'
import Image from "next/image";
import { Inter } from "next/font/google";
import Dana from '@/app/Assets/Logo/Dana.png'
import Shopee from '@/app/Assets/Logo/Shopee.png'
import BCA from '@/app/Assets/Logo/BCA.png'
import Ironman from '@/app/Assets/Comics/Iron_man_comic.png'
import Link from "next/link";



const inter = Inter({ weight: ["400"], subsets: ["latin"]});

export default function Payment() {

    return (
        <div className="pb-120 overflow-hidden">
            <Navbar/>

            <div className="flex transform translate-x-60 translate-y-20 space-x-4  ">
            <Image className="" src={LeftArrow}/>
            <div className="text-black text-4xl">
            <h1 className={inter.className}>Checkout</h1>
            </div>
            </div>

            <div className="flex transform translate-x-60 translate-y-36 space-x-4">
            <div className="text-black text-xl">
            <h1 className={inter.className}>1. Comics Information</h1>
            </div>
            </div>

            {/* INPUT TYPE */}
            <div className="grid grid-rows-2 grid-flow-col gap-2 transform translate-x-60 translate-y-36 pt-10">
                <div className="flex flex-col space-y-1">
                    <h1 className="text-black">Writer:</h1>
                    <h1 className="text-black">Stan Lee</h1>
                </div>

                <div className="flex flex-col space-y-1">
                    <h1 className="text-black">Release Date:</h1>
                    <h1 className="text-black">2024</h1>
                </div>
            </div>

            <div className="grid grid-rows-2 grid-flow-col gap-2 transform translate-x-156 translate-y-7">
            <div className="flex flex-col space-y-1">
                    <h1 className="text-black">Issue:</h1>
                    <h1 className="text-black">#1</h1>
                </div>

                <div className="flex flex-col space-y-1">
                    <h1 className="text-black">Cover:</h1>
                    <h1 className="text-black">Hardcover</h1>
                </div>
                </div>

        <div className="flex transform translate-x-60 translate-y-36 space-x-4">
            <div className="text-black text-xl">
            <h1 className={inter.className}>2. Synopsis</h1> <br/>
            <p>
            In a world where technology reigns supreme, billionaire genius Tony Stark leads<br/> a
             double life as the enigmatic superhero, Iron Man. When Stark Industries faces <br/> a hostile 
             takeover by a rival corporation secretly funded by an underground <br/> terrorist organization known as the Ten Rings, <br/>
             Stark's world is thrown into chaos.

With his armor upgraded and his resolve <br/>
 unwavering, Iron Man sets out to thwart the Ten Rings' <br/>
 nefarious plans for global domination. Along the way, he faces formidable foes, <br/>
  including the technologically enhanced Crimson Dynamo <br/>
  and the cunning mastermind behind the Ten Rings, the Mandarin.
            </p>
        
            </div>
            
            </div>

           

            <div className="transform translate-y-36">
                <div className="transform translate-x-205 -translate-y-180">
                <Image src={Ironman} width={282} height={441}/>
                <h1 className="text-black">Ironman Comics</h1>
                <button class="bg-red-500 hover:bg-red-700 rounded w-52 h-10">
                <Link href={"/Payment"}>Buy</Link>
                </button>
                </div>
            </div>
        </div>
      
    );
}