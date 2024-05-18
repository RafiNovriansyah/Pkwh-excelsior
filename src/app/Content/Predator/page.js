"use client"

import Image from "next/image"
import Link from "next/link";
import { useEffect, useState } from "react";


const PredatorList = () => {
    const [predators, setPredators] = useState([]);

    // Fetch predators data on component mount
    useEffect(() => {
        async function getPageData() {
            const apiUrlEndpoint = `http://localhost:3005/`;
            const response = await fetch(apiUrlEndpoint, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    },
                body: JSON.stringify({
                    min: 0,
                    max: 7
                })
            });
            const res = await response.json();
            console.log(res);
            setPredators(res);
        }
        getPageData();
    }, []);
    return (
        <div className="flex flex-row justify-center space-x-4 pl-2 pt-6 h-60 rounded">
        {predators.map((products) => {
        return (
        <Link href={""} className="">
            
            <div className="group transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-100">
             <Image className="" src={`http://localhost:3005/getimage/${products.image}`} width={203} height={197}/>
             <div>
             <p className="text-black text-lg group-hover:text-red-marvel">{products.name}</p>
             </div>

             <div>
             <p className="text-black text-xs group-hover:text-red-marvel" >2024</p>
             </div>
            
            </div>

             </Link>
    
                );
            })}
        </div>
    );
}

export default PredatorList
