import Marvel_crop from "@/app/Assets/Banner/Marvel_banner.png";
import Marvels from "@/app/Assets/Comics/Marvel_cover.png"
import Image from "next/image";
import Link from "next/link";

const Marvels_banner = () => {
    return (
        <div className="static"> 
            <div className="relative overflow-hidden pb-156">

        <Image className="absolute " src={Marvel_crop}/>

        <div className="transform translate-y-32 translate-x-205">
            <Image className="absolute" src={Marvels}/>
        </div>

        <div className="static transform translate-y-75 translate-x-24 -space-y-5">
        <p className="text-white relative font-['vogue'] text-6xl">YOUR COMPLETE COLLECTION
        <br/> OF MARVEL COMICS  </p> <br/>
        </div>

        <div className="transform translate-y-75 translate-x-24">
                    <button className="border-solid border-2 rounded-tl-marvel rounded-br-marvel text-white p-2.5 px-8 Hover">
                    <Link href="/halaman-lain">Start Reading</Link> 
                    </button> 
        </div>
        </div>
        </div>
    )
}

export default Marvels_banner