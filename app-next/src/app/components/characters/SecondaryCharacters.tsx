"use client"
import Image, { StaticImageData } from "next/image";
import { useState } from "react";


interface PersonagemProps {
    imgSource: StaticImageData;
    icon: JSX.Element
    speech: string
    addPadding: boolean
}


export default function SecondaryCharacters(props: PersonagemProps) {

    const paddingClass = props.addPadding ? 'p-2' : '';
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const handleImageLoad = () => {
        setIsImageLoaded(true);
    }
    return (
        <div className="h-full flex flex-col justify-center">

            <div className=" flex justify-center">

                {isImageLoaded ? (<div className="relative max-w-xs ">
                    <div className=" bg-[--background-nav-app] p-3 rounded-[12px] w-full  border border-[--background-nav-app] drop-shadow-md leading-none flex flex-col  items-center gap-1">
                        <span className="text-center">
                            {props.speech} {/* Texto a ser renderizado*/}
                        </span>
                        <span >
                            {props.icon}
                        </span>
                    </div> {/* Balão de Fala  */}
                    <div className="absolute w-0 h-0 border-t-[20px] border-t-transparent border-b-[--background-nav-app] border-b-[20px] border-l-[20px] border-l-transparent border-r-transparent border-r-[20px] border left-5 rotate-45 -bottom-[18px] drop-shadow-md z-50">
                    </div>
                </div>) : null}
            </div>

            <div className="flex justify-center drop-shadow-lg relative w-5/6 h-1/2 mx-auto sm:w-full">
                <Image
                    src={props.imgSource}
                    fill
                    alt="personagem-acai"
                    className={`object-contain ${paddingClass}`}
                    priority={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onLoadingComplete={handleImageLoad}

                />
            </div>



        </div>
    );
}