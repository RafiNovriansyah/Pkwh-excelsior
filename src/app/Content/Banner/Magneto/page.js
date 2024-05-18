import Marvelnav from "@/app/Components/Marvelnav/page";
import Magneto_banner from "@/app/Assets/Banner/Magneto_banner.png";
import Magneto from "@/app/Assets/Comics/Magneto_comic.png"
import Image from "next/image";
import Link from "next/link";

const MagnetoBanner = () => {
    return (
        <div className="static"> 
            <Marvelnav />
            <div className="relative overflow-hidden pb-156">

        <Image className="absolute" src={Magneto_banner}/>

        <div className="transform translate-y-32 translate-x-205">
            <Image className="absolute" src={Magneto}/>
        </div>

        <div className="static transform translate-y-96 translate-x-24 -space-y-5">
        <p className="text-white relative font-['vogue'] text-6xl">MOST READ COMICS</p><br/>
        <p className="text-left text-white relative font-['nexa']">
        Embark on an electrifying journey with Magneto, <br/> 
        the master of magnetism! Join him as he navigates <br/> 
        the complex landscape of power, morality, and destiny.</p>
        </div>

        <div className="transform translate-y-107 translate-x-24">
                    <button className="border-solid border-2 rounded-tl-marvel rounded-br-marvel text-white p-2.5 px-8 Hover">
                    <Link href="/halaman-lain">Read More</Link> 
                    </button> 
        </div>
        </div>
        </div>
    )
}

export default MagnetoBanner

// Import gambar-gambar untuk slider

import Themarvels_banner from '@/app/Content/Banner/Themarvels/page';