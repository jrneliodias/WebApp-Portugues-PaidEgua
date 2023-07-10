"use client"
import Image, { StaticImageData } from "next/image";
import { useState } from "react";


interface PersonagemProps {
    imgSource: StaticImageData;
    speech: string;
    textStyle?: string;
}


export default function PrimaryCharacter({ imgSource, speech, textStyle = '' }: PersonagemProps) {

    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const handleImageLoad = () => {
        setIsImageLoaded(true);
    }

    return (
        <div className="h-full flex flex-col min-h-full min-w-[300px] gap-2 justify-end pb-10">
            <div className=" flex justify-center">
                {isImageLoaded ? (<div className="relative max-w-xs ">
                    <div className=" bg-[--background-nav-app] p-5 rounded-3xl w-full  border border-[--background-nav-app] drop-shadow-md  flex flex-col gap-1 min-w-[300px] min-h-[42px]">
                        <span className={`whitespace-pre-line blinking-cursor ${textStyle}`}>
                            {speech} {/* Texto a ser renderizado*/}
                        </span>
                    </div> {/* Balão de Fala  */}
                    <div className="absolute w-0 h-0 border-t-[20px] border-t-transparent border-b-[--background-nav-app] border-b-[20px] border-l-[20px] border-l-transparent border-r-transparent border-r-[20px] border left-[3rem] rotate-45 -bottom-[18px] drop-shadow-md z-50">
                    </div>
                </div>) : null}
            </div>

            <div className="flex justify-center drop-shadow-lg relative w-full  h-[40%]">
                <Image
                    src={imgSource}
                    fill
                    alt="personagem-acai"
                    className={`object-contain`}
                    priority={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onLoadingComplete={handleImageLoad}

                />
            </div>
        </div>
    );
}