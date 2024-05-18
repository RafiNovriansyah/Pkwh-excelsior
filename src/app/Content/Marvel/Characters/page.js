"use client"

import Image from "next/image"
import Link from "next/link";
import { useEffect, useState } from "react";


const MarvelCharacters = () => {
    const [predators, setPredators] = useState([]);

    // Fetch predators data on component mount
    useEffect(() => {
        async function getPageData() {
            const apiUrlEndpoint = `http://localhost:3005/marvel-character`;
            const response = await fetch(apiUrlEndpoint, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    },
                body: JSON.stringify({
                    min: 0,
                    max: 10
                })
            });
            const res = await response.json();
            console.log(res);
            setPredators(res);
        }
        getPageData();
    }, []);
    return (
        <div className="grid grid-cols-6 pl-36 pr-36 pt-6 gap-6 h-60 rounded">
        {predators.map((products) => {
        return (
        <Link href={""} className="">
            
            <div className="group transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 ">
             <Image className="" src={`http://localhost:3005/getimage/${products.image}`} width={160} height={210}/>
             
             <div className="w-[160px] h-[140px] bg-black group-hover:bg-red-600 duration-500 ease-in rounded-b-lg">
                <div className="w-[160px] h-1 bg-red-600  ">
                <div className="space-y- translate-x-2 translate-y-2">
                <p className="text-white text-lg">{products.name}</p>
             
                <p className="text-white text-xs">{products.alias}</p>
                </div>
                </div>
            
             </div>
            
            </div>

             </Link>
    
                );
            })}
        </div>
    );
}

export default MarvelCharacters
