import Image from "next/image";
import Link from "next/link"; 
import Navbar_logo from '../../Assets/Logo/Excelsior.png';
import Twitter_logo from '../../Assets/Logo/Twitter_logo.png';
import Instagram_logo from '../../Assets/Logo/Instagram_logo.png';
import Youtube_logo from '../../Assets/Logo/Youtube_logo.png';

import { Inter } from "next/font/google";

const inter = Inter({ weight: ["400"], subsets: ["latin"]});

const Footer = () => {
    return (

        // Footer, mencakup link menuju page tertentu, sosial media, dan brand logo

        <footer className="pt-10 bg-black-footer p-6">
          
          <div className="flex flex-row justify-center space-x-28 ">
          <Link href="/"> <Image className="rounded-md w-20 h-22 " width={500} height={500} 
            
            src={Navbar_logo} /> </Link>

            {/* Link, contact us, comics, characters */}
            <div className="text-white pl-2 pt-">
                <div>
                    <Link className={inter.className} href="/Contact"><p className="font-bold text-sm">Contact Us</p></Link>
                </div>

                <div>
                    <Link className={inter.className} href="/Comics"><p className="font-bold text-sm">Comics</p></Link>
                </div>

                <div>
                    <Link className={inter.className} href="/Characters"><p className="font-bold text-sm">Characters</p></Link>
                </div>
            </div>

                <div className="flex flex-col pl-2 space-y-2">
                    <Link className={inter.className} href="/Marvel"><p className="font-bold text-red-800 text-2xl">MARVEL</p></Link>
                    <Link className={inter.className} href="/DC"><p className="font-bold text-slate-500 text-2xl text-left">DC COMICS</p></Link>
                </div>


              {/* Sosial media */}
            <div className="flex flex-col">

            <div className="text-sm">
                <p className={inter.className}>FOLLOW EXCELSIOR ON</p>
                </div>
            

           <div className="flex justify-center space-x-4 pt-2">
           <div>
            <Link  href="/"> <Image className="w-7 h-7" width={500} height={500} 
                   src={Twitter_logo} /> </Link>
                   
            </div>
           
         

            <div   >
            <Link href="/"> <Image className="w-7 h-7 " width={500} height={500} 
                   src={Instagram_logo} /> </Link>
            </div>

            <div >
            <Link href="/"> <Image className="w-7 h-7 " width={500} height={500} 
                   src={Youtube_logo} /> </Link>
            </div>
           </div>

            </div>

          </div>

        </footer>
    )
}

export default Footer
