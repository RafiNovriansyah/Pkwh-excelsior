import Marvelnav from "@/app/Components/Marvelnav/page";
import Ironman_crop from "@/app/Assets/Banner/Ironman_banner.png";
import Ironman from "@/app/Assets/Comics/Ironman_cover.png"
import Image from "next/image";
import Link from "next/link";

const Ironman_banner = () => {
    return (
        <div className="static"> 
            <Marvelnav />
            <div className="relative overflow-hidden pb-156">

        <Image className="absolute " src={Ironman_crop}/>

        <div className="transform translate-y-32 translate-x-205">
            <Image className="absolute" src={Ironman}/>
        </div>

        <div className="static transform translate-y-96 translate-x-24 -space-y-5">
        <p className="text-white relative font-['vogue'] text-6xl">LEARN MORE ABOUT THE <br/> ARMORED MAN </p><br/>
        <p className="text-left text-white relative font-['nexa']">
        Unleash Your Inner Genius:
         Discover the Marvel of <br/> Iron Man's
         Innovation and Ingenuity!</p>
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

export default Ironman_banner