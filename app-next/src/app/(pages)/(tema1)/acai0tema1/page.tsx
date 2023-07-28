"use client"
import acai0 from "@/app/images/acai0.png"
import { useTypedText } from "@/app/Hooks/useTypedText";
import NavBar from "@/app/components/navigation/NavBar";
import PrimaryCharacter from "@/app/components/characters/PrimaryCharacter";

const imageSize = 150;

const textToType = [`Tema I
Alfabeto Fonético do Português e suas particularidades em relação ao dialeto de Belém`]

export default function AcaiIntroApp() {
    const typedText = useTypedText(textToType)

    const currentRoute = '/acai0tema1'; // Set the current route dynamically based on your page

    return (
        <div className="flex flex-col place-self-end item-center py-2 gap-5 h-3/4 mb-[4rem] ">
            <PrimaryCharacter
                imgSource={acai0}
                speech={typedText}
                textStyle="text-xl font-black  italic text-center" />
            <NavBar currentRoute={currentRoute} />

        </div>

    )

}

