import Marvelnav from "@/app/Components/Marvelnav/page";
import Spiderman_crop from "@/app/Assets/Banner/Spiderman2099_banner.png";
import Spiderman2099 from "@/app/Assets/Comics/Spiderman2099_comic.png"
import Image from "next/image";
import Link from "next/link";

const Spiderman2099_banner = () => {
    return (
        <div className="static"> 
            <Marvelnav />
            <div className="relative overflow-hidden pb-156">

        <Image className="absolute " src={Spiderman_crop}/>

        <div className="transform translate-y-32 translate-x-205">
            <Image className="absolute" src={Spiderman2099}/>
        </div>

        <div className="static transform translate-y-75 translate-x-24 -space-y-5">
        <p className="text-white relative font-['vogue'] text-6xl"> THE GUARDIAN OF CANON EVENT, <br/> 
        SPIDERMAN 2099</p><br/>
        <p className="text-left text-white relative font-['nexa']">
        Embark on an electrifying journey with Magneto, <br/> 
        the master of magnetism! Join him as he navigates <br/> 
        the complex landscape of power, morality, and destiny.</p>
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

export default Spiderman2099_banner