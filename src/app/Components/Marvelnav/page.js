import Image from "next/image";
import Link from "next/link"; 
import Navbar_logo from '../../Assets/Logo/Excelsior.png';
import { Bebas_Neue } from "next/font/google";
import { Viga } from "next/font/google";

const viga = Viga({ weight: ["400"], subsets: ["latin"]})
const bebas = Bebas_Neue({ weight: ["400"], subsets: ["latin"]});
const Marvelnav = () => {
    return (

        // Header, mencakup brand logo, brand nama, dan halaman Login/Register
        <header>
            <div className="flex justify-between pl-12 bg-black-marvel border-b-2 border-red-marvel">

            <Image className="rounded-md w-12 h-14 " width={500} height={500} 
            
            src={Navbar_logo} />

            <Link href={"/Marvel_main"}>
            <div className="Excelsior pt-2.5 pr-12 text-red-marvel text-3xl font-normal font-['Designer']">Excelsior</div>
            </Link>            
            <Link className={viga.className} href="/Login"><p className="JoinUs text-red-marvel text-l pt-3.5 pr-10 font-normal">JOIN US</p></Link>
           

            </div>

            {/* Pilihan menu seksi */}
            <div className="flex justify-center bg-black-marvel pb-2.5 ">

                <div className={bebas.className}>
                <Link href="/Comics"><p className="JoinUs text-red-marvel text-l pt-3.5 pr-14 font-normal">Comics</p></Link>
                </div>

                <div className={bebas.className}>
                <Link href="/Marvel_main/Characters"><p className="JoinUs text-red-marvel text-l pt-3.5 pr-14 font-normal">Characters</p></Link>
                </div>

                <div className={bebas.className}>
                <Link href="/Marvel"><p className="JoinUs text-red-marvel text-l pt-3.5 pr-14 font-normal">Marvel</p></Link>
                </div>

                <div className={bebas.className}>
                <Link href="/DC"><p className="JoinUs text-red-marvel text-l pt-3.5 pr-14 font-normal">DC Comics</p></Link>
                </div>

                <div className={bebas.className}>
                <Link href="/Library"><p className="JoinUs text-red-marvel text-l pt-3.5 pr-14 font-normal">Library</p></Link>
                </div>

                <div className={bebas.className}>
                <Link href="/Wishlist"><p className="JoinUs text-red-marvel text-l pt-3.5 pr-14 font-normal">Wishlist</p></Link>
                </div>

                <div className={bebas.className}>
                <Link href="/Cart"><p className="JoinUs text-red-marvel text-l pt-3.5 pr-14 font-normal">Cart</p></Link>

                </div>
               
               
              
           
           
           
           
           
           
           


            </div>
        </header>
    )
}

export default Marvelnav

