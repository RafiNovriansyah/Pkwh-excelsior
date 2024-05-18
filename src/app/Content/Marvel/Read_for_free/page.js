"use client"

import Image from "next/image"
import Link from "next/link";
import { useEffect, useState } from "react";


const ReadforFree = () => {
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
                    min: 24,
                    max: 31
                })
            });
            const res = await response.json();
            console.log(res);
            setcomics(res);
        }
        getPageData();
    }, []);
    return (
        <div className="grid grid-cols-6 pl-36 pr-36 pt-6 gap-6 h-60 rounded pb-107">
        {comics.map((products) => {
        return (
        <Link href={""} className="">
            
            <div>
             <Image src={`http://localhost:3005/getimage/${products.image}`} width={203} height={197}/>
             <div>
             <p className="text-black text-lg">{products.name}</p>
             </div>

             <div>
             <p className="text-black text-xs">2022</p>
             </div>
            
            </div>

             </Link>
    
                );
            })}
        </div>
    );
}

export default ReadforFree
