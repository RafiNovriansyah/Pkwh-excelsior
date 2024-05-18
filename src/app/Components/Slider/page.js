import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"
import Link from "next/link"

// Magneto Banner
import Magneto_banner from "@/app/Assets/Banner/Magneto_banner.png";
import Magneto from "@/app/Assets/Comics/Magneto_comic.png"

// Marvels Banner
import Marvel_crop from "@/app/Assets/Banner/Marvel_banner.png";
import Marvels from "@/app/Assets/Comics/Marvel_cover.png"

// Ironman Banner
import Ironman_crop from "@/app/Assets/Banner/Ironman_banner.png";
import Ironman from "@/app/Assets/Comics/Ironman_cover.png"

// Spiderman 2099 Banner
import Spiderman_crop from "@/app/Assets/Banner/Spiderman2099_banner.png";
import Spiderman2099 from "@/app/Assets/Comics/Spiderman2099_comic.png"

// The Marvels Banner
import Themarvels_crop from "@/app/Assets/Banner/Themarvels_banner.png";

export default () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
    <>
      <div ref={sliderRef} className="keen-slider static">
        {/* MAGNETO BANNER START */}
        <div className="keen-slider__slide relative overflow-hidden pb-132">
          <Image className="absolute"   src={Magneto_banner}   />

          <div className="transform translate-y-32 translate-x-205">
            <Image className="absolute" src={Magneto}/>
          </div>

          <div className="static transform translate-y-75 translate-x-24 -space-y-5">
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
          {/* MAGNETO BANNER END */}



          {/* MARVELS BANNER */}
          <div className="keen-slider__slide relative overflow-hidden pb-132">
          <Image className="absolute"   src={Marvel_crop}   />

          <div className="transform translate-y-32 translate-x-205">
            <Image className="absolute" src={Marvels}/>
          </div>

          <div className="static transform translate-y-75 translate-x-24 -space-y-5">
          <p className="text-white relative font-['vogue'] text-6xl">YOUR COMPLETE COLLECTION <br/>
          OF MARVEL COMICS</p><br/>
          </div>

          <div className="transform translate-y-107 translate-x-24">
                    <button className="border-solid border-2 rounded-tl-marvel rounded-br-marvel text-white p-2.5 px-8 Hover">
                    <Link href="/halaman-lain">Start Reading</Link> 
                    </button> 
        </div>
          
          </div>
          {/* MARVELS BANNER END */}


          {/* IRONMAN BANNER */}
          <div className="keen-slider__slide relative overflow-hidden pb-132">
          <Image className="absolute"   src={Ironman_crop}   />

          <div className="transform translate-y-32 translate-x-205">
            <Image className="absolute" src={Ironman}/>
          </div>

          <div className="static transform translate-y-75 translate-x-24 -space-y-5">
          <p className="text-white relative font-['vogue'] text-6xl">LEARN MORE ABOUT THE <br/>
          ARMORED MAN</p><br/>
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
          {/* IRONMAN BANNER END */}


          {/* SPIDERMAN 2099 BANNER */}
          <div className="keen-slider__slide relative overflow-hidden pb-132">
          <Image className="absolute"   src={Spiderman_crop}   />

          <div className="transform translate-y-32 translate-x-205">
            <Image className="absolute" src={Spiderman2099}/>
          </div>

          <div className="static transform translate-y-75 translate-x-24 -space-y-5">
          <p className="text-white relative font-['vogue'] text-6xl">THE GUARDIAN OF CANON <br/> 
          CANON EVENT, SPIDERMAN 2099</p><br/>
        <p className="text-left text-white relative font-['nexa']">
        Embark on an electrifying journey with Magneto, <br/> 
        the master of magnetism! Join him as he navigates <br/> 
        the complex landscape of power, morality, and destiny.</p>
          </div>

          <div className="transform translate-y-107 translate-x-24">
                    <button className="border-solid border-2 rounded-tl-marvel rounded-br-marvel text-white p-2.5 px-8 Hover">
                    <Link href="/halaman-lain">Read Now!</Link> 
                    </button> 
        </div>
          
          </div>
          {/* SPIDERMAN 2099 BANNER END */}


          {/* THEMARVELS BANNER */}
          <div className="keen-slider__slide relative overflow-hidden pb-132">
          <Image className="absolute"   src={Themarvels_crop}   />

          <div className="static transform translate-y-75 translate-x-24 -space-y-5">
          <p className="text-white relative font-['vogue'] text-6xl">BROWSE ALL MARVEL <br/> CHARACTERS</p><br/>
          </div>

          <div className="transform translate-y-107 translate-x-24">
                    <button className="border-solid border-2 rounded-tl-marvel rounded-br-marvel text-white p-2.5 px-8 Hover">
                    <Link href="/halaman-lain">Start Reading!</Link> 
                    </button> 
        </div>
          
          </div>
          {/* THEMARVELS BANNER END */}
      </div>
    </>
  )
}
