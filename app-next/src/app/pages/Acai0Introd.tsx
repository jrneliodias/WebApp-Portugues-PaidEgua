"use client"
import Image from "next/image";
import acai0 from "../images/acai0.png"
import { useState, useEffect } from "react";
import { useTypedText } from "../Hooks/useTypedText";

const imageSize = 150;

const textToType = [`Esperamos que este aprendizado colabore para as tuas relações de comunicação no cotidiano em nossa cidade.`,'Mano(a), com este Web App tu poderás fazer várias coisas muito firmes!']



export default function AcaiIntroApp() {
    const typedText = useTypedText(textToType)

    return (
        <div className="flex flex-col justify-end item-center py-2 gap-5 h-full mb-[100px]">
            <div className="relative flex justify-center">
                <div className="relative">

                    <div className=" bg-[--background-nav-app] p-5  rounded-[40px] inline-block w-[300px] border border-[--background-nav-app] drop-shadow-md z-50">
                        <span className="blinking-cursor">
                            {typedText}

                        </span>
                    </div>
                    <div className="absolute w-0 h-0 border-t-[20px] border-t-transparent border-b-[--background-nav-app] border-b-[20px] border-l-[20px] border-l-transparent border-r-transparent border-r-[20px] border left-[80px] rotate-45 -bottom-[18px] drop-shadow-md ">
                    </div>
                </div>

            </div>
            <div className="flex justify-center drop-shadow-lg">
                <Image
                    src={acai0}
                    height={imageSize}
                    width={imageSize}
                    alt="personagem-acai"
                />
            </div>

        </div>

    )

}
