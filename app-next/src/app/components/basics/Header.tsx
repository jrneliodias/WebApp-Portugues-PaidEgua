"use client"

import Image from "next/image";
import title from "@/app/images/assets/titleapp.svg"
import { signIn, signOut, useSession } from "next-auth/react";
import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from "react";

export default function Header() {

    const [menuIsOpen, setmenuIsOpen] = useState(false)
    const handleLoginClick = () => signIn();
    const handleLogOutClick = () => signOut();
    const handleMenuClick = () => setmenuIsOpen(!menuIsOpen);
    const { status, data } = useSession();

    return (
       
            <div className="max-w-5xl fixed p-2 px-6 flex justify-between z-30 bg-cardcolor w-full shadow-sm rounded-b-lg">
                <div className="relative h-12 w-[89px]">
                    <Image
                        src={title}
                        fill
                        alt="App Title"
                    />
                </div>
    
                {status === "unauthenticated" && (<button
                    className="text=sm font-semibold"
                    onClick={handleLoginClick}>
                    Login
                </button>)}
    
    
                {status === "authenticated" && data.user! && (
                    <div className="border-[#BBBFBF] relative flex items-center gap-2 border shadow-lg  p-2 rounded-full" >
                        <AiOutlineMenu size={24} color="#BBBFBF" onClick={handleMenuClick}/>
                        <Image height={24} width={24} alt={data.user.name!} src={data.user.image!}
                            className="rounded-full shadow-md" />
    
                        {menuIsOpen && (
                            <div className="absolute top-14 left-0 w-full h-full rounded-full flex justify-center items-center shadow-md bg-cardcolor border">
                                <button className="text-sm font-semibold" onClick={handleLogOutClick}> 
                                Logout</button>
                            </div>
                        )}
    
                    </div>)}
    
    
            </div>

       
        )
}
