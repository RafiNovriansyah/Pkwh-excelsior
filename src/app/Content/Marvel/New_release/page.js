"use client"

import Image from "next/image"
import Link from "next/link";
import { useEffect, useState } from "react";


const NewRelease = () => {
    const [comics, setcomics] = useState([]);

    // Fetch comics data on component mount
    useEffect(() => {
        async function getPageData() {
            const apiUrlEndpoint = `http://localhost:3005/comics-query`;
            const response = await fetch(apiUrlEndpoint, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    },
                body: JSON.stringify({
                    min: 0,
                    max: 19
                })
            });
            const res = await response.json();
            console.log(res);
            setcomics(res);
        }
        getPageData();
    }, []);
    return (
        <div id="1" className="grid grid-cols-6 pl-36 pr-36 pt-6 gap-6 h-60 rounded pb-132">
        {comics.map((products) => {
        return (
            <Link href={`/ComicsMarvel/${products.id}`} key={products.id}>          
            <div className="group transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105" >
             <Image className="transition duration-300 ease-in-out" src={`http://localhost:3005/getimage/${products.image}`} width={203} height={197}/>
             <div className="">
             <p className="text-black text-lg group-hover:text-red-marvel">{products.name}</p>
             <p className="text-black text-xs group-hover:text-red-marvel">2024</p>
             </div>
            </div>

             </Link>
    
                );
            })}
        </div>
    );
}

export default NewRelease
