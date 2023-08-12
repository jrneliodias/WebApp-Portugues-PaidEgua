'use client'
import Image from "next/image";
import Personagens from '@/app/images/acai_character/personagens.svg'
import Link from "next/link";
import { motion } from "framer-motion"
import MainButton from "./components/basics/buttons";


export default function Home() {
    const currentRoute = "/"; // Set the current route dynamically based on your page

    return (

        <div className='items-center px-4 py-2 max-w-5xl w-full h-screen justify-center flex flex-col gap-5'>
            <div className="relative h-[270px] w-3/4">
                <Image
                    src={Personagens}
                    alt="personagens"
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                />
            </div>
           
            <div className="w-full flex flex-col gap-10">
                
                    <MainButton link = "/login">
                        Login
                    </MainButton>
                    <MainButton link = "/register">
                        Cadastro
                    </MainButton>
                    <MainButton link = "/menuroutes">
                    Menu de Páginas 
                    </MainButton>
               
               

            </div>


            
        </div>




    )

}

