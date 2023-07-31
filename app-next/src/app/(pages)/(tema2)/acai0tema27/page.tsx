"use client"

import { useTypedText } from "@/app/Hooks/useTypedText";
import NavBar from "@/app/components/navigation/NavBar";
import PrimaryCharacter from "@/app/components/characters/PrimaryCharacter";

const imageSize = 150;

const textToType = [`Mano (a), para que tu consigas iniciar uma conversa em português, é necessário que conheças algumas formas de cumprimento.`]

export default function AcaiIntroApp20() {
    const typedText = useTypedText(textToType)

    const currentRoute = '/acai0tema21'; // Set the current route dynamically based on your page

    return (
        <AcaiLayout>
            
        <PrimaryCharacter   speech={typedText}/>

        <NavBar currentRoute={currentRoute} />

    </AcaiLayoutv>

    )

}

