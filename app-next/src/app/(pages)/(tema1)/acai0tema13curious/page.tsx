"use client"
import acai0 from "@/app/images/acai0.png"
import { useTypedText } from "@/app/Hooks/useTypedText";
import NavBar from "@/app/components/navigation/NavBar";
import PrimaryCharacter from "@/app/components/characters/PrimaryCharacter";

const imageSize = 150;

const textToType = [`Mano(a), queres conhecer uma curiosidade bacana sobre as vogais do português brasileiro e do dialeto belenense? Então, vamos lá!`]

export default function AcaiTema1CuriousApp() {
    const typedText = useTypedText(textToType)

    const currentRoute = '/acai0tema13curious'; // Set the current route dynamically based on your page

    return (
        <div className="flex flex-col justify-end item-center h-full">
            <PrimaryCharacter imgSource={acai0} speech={typedText} />

            <NavBar currentRoute={currentRoute} />

        </div>

    )

}
