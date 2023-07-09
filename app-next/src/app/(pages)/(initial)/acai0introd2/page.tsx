"use client"
import acai0 from "@/app/images/acai0.png"
import { useTypedText } from "@/app/Hooks/useTypedText";
import NavBar from "@/app/components/navigation/NavBar";
import PrimaryCharacter from "@/app/components/characters/PrimaryCharacter";

const imageSize = 150;

const textToType = [`Olá, seja bem-vindo(a) à 
Lista Pai D'Égua.`]

export default function AcaiIntroApp2() {
    const typedText = useTypedText(textToType)

    const currentRoute = '/acai0introd2'; // Set the current route dynamically based on your page

    return (
        <div className="flex flex-col justify-end item-center py-2 gap-5 h-full ">
            <PrimaryCharacter imgSource={acai0} speech={typedText} />
            <NavBar currentRoute={currentRoute} />

        </div>

    )

}

