import Marvelnav from "@/app/Components/Marvelnav/page";
import Themarvels_crop from "@/app/Assets/Banner/Themarvels_banner.png";
import Image from "next/image";
import Link from "next/link";

const Themarvels_banner = () => {
    return (
        <div className="static"> 
            <Marvelnav />
            <div className="relative overflow-hidden pb-156">

        <Image className="absolute " src={Themarvels_crop}/>


        <div className="static transform translate-y-75 translate-x-24 -space-y-5">
        <p className="text-white relative font-['vogue'] text-6xl"> BROWSE ALL MARVEL <br/> 
        CHARACTERS</p>
        </div>


        <div className="transform translate-y-76 translate-x-24">
                    <button className="border-solid border-2 rounded-tl-marvel rounded-br-marvel text-white p-2.5 px-8 Hover">
                    <Link href="/halaman-lain">Read More</Link> 
                    </button> 
        </div>
        </div>
        </div>
    )
}

export default Themarvels_banner