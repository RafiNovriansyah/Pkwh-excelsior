"use client"
import { useEffect, useState } from 'react';
import Image from "next/image";
import Marvelnav from '@/app/Components/Marvelnav/page';
import Magneto from "@/app/Assets/Banner/Magneto_banner.png";
import Link from 'next/link';
import Cart from "@/app/Assets/Logo/Cart.svg"
import Wishlist from "@/app/Assets/Logo/Wishlist.svg"

export default function ComicsDetails ( {params}) {
  const [ComicsItem, setComicsItem] = useState([]);

  useEffect(() => {
    const fetchComicsItem = async () => {
      try {
        const response = await fetch(`http://localhost:3005/id/${params.id}`);
        const data = await response.json(response.data);
        setComicsItem(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (params.id) {
      fetchComicsItem();
    }
  }, [params]);

  return (
    <div className="static">
      <Marvelnav/>
    {ComicsItem && (
      <div>
          <div className="relative overflow-hidden pb-76">
        <Image className='absolute' src={Magneto}/>
        <div className="flex transform translate-y-20  translate-x-60">
        <div className="flex flex-row space-x-6">
    <img  src={`http://localhost:3005/getimage/${ComicsItem.image}`} width={304} height={531} />
    <div className="">
      <div className="flex justify-between pr-52">
      <p className="text-white text-2xl font-bold ">{ComicsItem.name}</p> 
      <div className="transform translate-x-48">
                        <button className="border-solid border-2 rounded p-2.5 px-8 Hover">
                        <Link href="/Marvel_main#1">Back to Comic Page</Link> 
                        </button>
      </div>
      </div> <br/>
      <p className="text-white text-xl font-semibold ">Published:</p>
      <p className="text-white text-lg "> January 22, 2024</p> <br/>
      <p className="text-white text-xl font-semibold">Writer:</p>
      <p className="text-white text-lg ">Jackson Lanzing, Alex Segura, Collin Kelly, Nilag Magruder</p> <br/>
      <p className="text-white text-xl font-semibold ">Cover Artist:</p>
      <p className="text-white text-lg ">Chad Wayne Hardin</p> <br/>
      <p className="text-white text-lg ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada nibh <br/>
      vitae felis accumsan, tristique convallis purus blandit. Vestibulum aliquet ipsum sit  <br/> amet nibh gravida, in condimentum lectus eleifend. Maecenas suscipit
       libero mauris, <br/> ac pulvinar lectus venenatis vitae. Nunc tincidunt metus augue. Donec volutpat sodales <br/> 
       feugiat. Nullam nulla sapien, rutrum sed dignissim quis, cursus ac mauris. Nunc at <br/> sodales libero. Etiam ullamcorper erat a bibendum bibendum. </p>
    </div>
  </div>
        </div>
      </div>

      <div className="bg-black pb-52 overflow-hidden" >
        <div className="flex">
          <h1 className="text-white text-3xl font-bold transform translate-y-10 translate-x-28 ">MORE DETAILS</h1>
        </div>

        <div className="flex flex-row transform translate-y-16 translate-x-28 justify-start space-x-60">
          {/* STORIES */}
          <div className="text-white">
            <p className="text-xl font-bold">STORIES</p> <br/>

            <p className="text-lg font-semibold">WRITER</p>
            <p >Jackson Lanzing, Alex Segura,<br/>
             Collin Kelly, Nilag Magruder</p> <br/>

            <p className="text-lg font-semibold">INKER</p>
            <p className="text-lg">TRAVEL FOREMAN</p> <br/>

            <p className="text-lg font-semibold">LETTERER</p>
            <p className="text-lg">VC JOE CAMAGNA</p> <br/>

            <p className="text-lg font-semibold">PENCILER</p>
            <p className="text-lg">TRAVEL FOREMAN</p> <br/>

            <p className="text-lg font-semibold">EDITOR</p>
            <p className="text-lg">NICK LOWE</p> <br/>
          </div>

          {/* COVER INFORMATION */}
          <div className="text-white">
            <p className="text-xl font-bold">COVER INFORMATION</p> <br/>

            <p className="text-lg font-semibold">COLORIST COVER</p>
            <p className="text-lg">EDGAR DELADO</p> <br/>

            <p className="text-lg font-semibold">EDITOR</p>
            <p className="text-lg">NICK LOWE</p> <br/>

            <p className="text-lg font-semibold">PENCIL COVER</p>
            <p className="text-lg">CHAD WAYNE HARDIN</p> <br/>

            <p className="text-lg font-semibold">INKER COVER</p>
            <p className="text-lg">CHAD WAYNE HARDIN</p> <br/>
          </div>


          {/* EXTENDED CREDIT INFO */}
          <div className="text-white">
            <p className="text-xl font-bold">EXTENDED CREDIT INFO</p> <br/>

            <p className="text-lg font-semibold">RATING</p>
            <p className="text-lg">Rated T</p> <br/>

            <p className="text-lg font-semibold">FORMAT</p>
            <p className="text-lg ">Comic</p> <br/>

            <p className="text-lg font-semibold">PRICE</p>
            <p className="text-lg">{ComicsItem.price + "$"}</p> <br/>

            <p className="text-lg font-semibold">FOC DATE</p>
            <p className="text-lg">DEC 18, 2024</p> <br/>

            <div className="flex flex-row space-x-10">

            <div>
              {/* <span class="icon-[ion--cart-outline]"></span> */}
              <Image className="object-center" src={Wishlist}/>
              </div>

            <div>
              {/* <span class="icon-[ion--cart-outline]"></span> */}
              <Image src={Cart}/>
              </div>

              <div>
                        <button className="border-solid border-2 rounded-tl-marvel rounded-br-marvel p-2.5 px-8 Hover">
                        <Link href={`/Payment/${ComicsItem.id}`} key={ComicsItem.id}>Buy now</Link> 
                        </button>
              </div>


              <div>

              </div>
    
            </div>
          </div>

        </div>

      </div>
      </div>
      
  
)}

<button onClick={(e) => {console.log(ComicsItem)}}>Test</button>

    </div>
  );
}