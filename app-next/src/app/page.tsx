'use client'
import Image from "next/image";
import Personagens from '@/app/images/acai_character/personagens.svg'
import Link from "next/link";
import { motion } from "framer-motion"


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
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    

                >
                    <Link className="border-2 px-24 p-2 text-center rounded-full bg-cardcolor font-bold" href={`/login`} passHref
                    >
                        Login                            {/* <BtnVoltar /> */}
                    </Link>
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Link className="border-2 px-20 p-2 text-center rounded-full bg-cardcolor font-bold " href={`/register`} passHref>
                        Cadastro                            {/* <BtnVoltar /> */}
                    </Link>
                </motion.button>

            </div>


            
        </div>




    )

}

