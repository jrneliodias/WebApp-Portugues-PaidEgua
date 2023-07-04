 "use client"
import Image from "next/image";
import acai0 from "@/app/images/acai0.png"
import { useTypedText } from "@/app/Hooks/useTypedText";
import NavBar from "@/app/components/NavBar";

const imageSize = 150;

const textToType = [`Se familiarizando com as Formas de Cumprimento.`]

export default function AcaiIntroApp() {
    const typedText = useTypedText(textToType)
    
    const currentRoute = '/acai0tema24'; // Set the current route dynamically based on your page

    return (
        <div className="flex flex-col justify-end item-center py-2 gap-5 h-full mb-[100px]">
            <div className=" flex justify-center">
                <div className="relative">

                    <div className=" bg-[--background-nav-app] p-5  rounded-[40px] inline-block w-[300px] border border-[--background-nav-app] drop-shadow-md z-50 text-center">
                        <span className="blinking-cursor text-center whitespace-pre-line text-xl">
                        
                            {typedText}

                        </span>
                    </div>
                    <div className="absolute w-0 h-0 border-t-[20px] border-t-transparent border-b-[--background-nav-app] border-b-[20px] border-l-[20px] border-l-transparent border-r-transparent border-r-[20px] border left-[80px] rotate-45 -bottom-[18px] drop-shadow-md ">
                    </div>
                </div>

            </div>
            <div className="flex justify-center drop-shadow-lg relative w-full h-1/2">
                <Image
                    src={acai0}
                    fill
                    alt="personagem-acai"
                    className="object-contain"
                    priority={true}
                    sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <NavBar currentRoute={currentRoute} />

        </div>

    )

}

