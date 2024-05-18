"use client"

import { useEffect, useState } from 'react';
import Navbar from "../../Components/Navbar/page";
import LeftArrow from '@/app/Assets/Logo/Left_Arrow.svg'
import Image from "next/image";
import { Inter } from "next/font/google";
import Dana from '@/app/Assets/Logo/Dana.png'
import Shopee from '@/app/Assets/Logo/Shopee.png'
import Bcaa from '@/app/Assets/Logo/BCA.png'
import Ironman from '@/app/Assets/Comics/Iron_man_comic.png'
import Marvelnav from '@/app/Components/Marvelnav/page';
import { useRouter } from 'next/navigation';



const inter = Inter({ weight: ["400"], subsets: ["latin"]});


export default function Payment({params}) {
    const [MarvelItem, setMarvelItem] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const router = useRouter();


useEffect(() => {
    const fetchMarvelItem = async () => {
      try {
        const response = await fetch(`http://localhost:3005/id/${params.id}`);
        const data = await response.json(response.data);
        setMarvelItem(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (params.id) {
      fetchMarvelItem();
    }
  }, [params]);

  const handleCheckout = async () => {
    setIsLoading(true);
    // Simulasi proses pembayaran
    setTimeout(() => {
        setIsLoading(false);
        setIsSuccess(true);
    }, 2000);
};

const handleNavigate = () => {
    router.push('/Library'); // Navigasi ke halaman lain setelah pembayaran berhasil
};

    return (
        <div className="pb-120 overflow-hidden">
          <Marvelnav/>
            {MarvelItem && (
                    <div>
                        <div className="flex transform translate-x-60 translate-y-20 space-x-4  ">
            <Image className="" src={LeftArrow}/>
            <div className="text-black text-4xl">
            <h1 className={inter.className}>Checkout</h1>
            </div>
            </div>

            <div className="flex transform translate-x-60 translate-y-36 space-x-4">
            <div className="text-black text-xl">
            <h1 className={inter.className}>1. Contact Information</h1>
            </div>
            </div>

            {/* INPUT TYPE */}
            <div className="grid grid-rows-2 grid-flow-col gap-2 transform translate-x-60 translate-y-36 pt-10">
                <div className="flex flex-col">
                    <h1 className="text-black">First Name</h1>
                <input type="text"
                 placeholder=""
                 value={firstName}
                 onChange={(e) => setFirstName(e.target.value)}
                 className="text-black w-76 h-10 rounded border-2 border-black-marvel border-opacity-100"/>
                </div>

                <div className="flex flex-col">
                <h1 className="text-black">Phone Number</h1>
                <input type="text" 
                placeholder=""
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                 className="text-black w-76 h-10 rounded border-2 border-black-marvel border-opacity-100"/>
                </div>
            </div>

            <div className="grid grid-rows-2 grid-flow-col gap-2 transform translate-x-156 translate-y-2.5">
                <div className="flex flex-col">
                <h1 className="text-black">Last Name</h1>
                <input type="text" 
                placeholder=""
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                 className="text-black w-76 h-10 rounded border-2 border-black-marvel border-opacity-100"/>
                </div>

                <div className="flex flex-col">
                <h1 className="text-black">Email</h1>
                <input type="text" 
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                 className="text-black w-76 h-10 rounded border-2 border-black-marvel border-opacity-100"/>
                </div>
                </div>

        <div className="flex transform translate-x-60 translate-y-36 space-x-4">
            <div className="text-black text-xl">
            <h1 className={inter.className}>2. Payment Method</h1>
            </div>
            </div>

            {/* PAYMENT METHOD */}
            <div className="flex flex-row transform translate-x-60 translate-y-36 pt-10 space-x-10">

                <div className="flex flex-col">
                    <h1 className="text-black">Dana</h1>
                    <div className="">
                    <button className="hover:border-2 border-indigo-600 focus:ring-2 focus:ring-blue-600" onClick={() => setPaymentMethod('Dana')}>
                    <Image src={Dana} width={132} height={48}/>
                    </button>
                    </div>
                </div>

                <div className="flex flex-col">
                <h1 className="text-black">Shopee</h1>
                <div className="">
                <button className="hover:border-2 border-indigo-600 focus:ring-2 focus:ring-blue-600" onClick={() => setPaymentMethod('Shopee')}>
                <Image src={Shopee} width={112} height={48}/>
                </button>
                </div>
                </div>
                
                <div className="flex flex-col">
                <h1 className="text-black">BCA</h1>
                <div className="">
                <button className="hover:border-2 border-indigo-600 focus:ring-2 focus:ring-blue-600" onClick={() => setPaymentMethod('BCA')}>
                <Image src={Bcaa} width={112} height={48}/>
                </button>
                </div>
                </div>

            </div>

            <div>
                <div className="transform translate-x-205 -translate-y-108">
                <Image src={`http://localhost:3005/getimage/${MarvelItem.image}`} width={282} height={441}/>
                <h1 className="text-black">{MarvelItem.name}</h1>
                <button  onClick={handleCheckout}
                className="bg-red-500 hover:bg-red-700 rounded w-52 h-10">
                Checkout
                </button>
                </div>

                {isLoading && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <div className="text-white text-xl">Processing Payment...</div>
                        </div>
                    )}

                      {isSuccess && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <div className="bg-white p-10 rounded shadow-lg text-center">
                                <div className="text-2xl mb-4 text-black-marvel">Payment Successful!</div>
                                <div className="mb-4 text-black-marvel">Name: {firstName} {lastName}</div>
                                <div className="mb-4 text-black-marvel">Payment Method: {paymentMethod}</div>
                                <div className="text-green-500 text-6xl mb-4 ">✔</div>
                                <button onClick={handleNavigate} className="bg-red-500 hover:bg-red-marvel text-white py-2 px-4 rounded">
                                    Continue
                                </button>
                            </div>
                        </div>
                    )}

            </div>
                    </div>
            )}
            
        </div>
      
    );
}