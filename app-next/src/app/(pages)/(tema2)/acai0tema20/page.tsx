"use client"

import { useTypedText } from "@/app/Hooks/useTypedText";
import NavBar from "@/app/components/navigation/NavBar";
import PrimaryCharacter from "@/app/components/characters/PrimaryCharacter";
import { AcaiLayout } from "@/app/components/layout/acailayout";

const imageSize = 150;

const textToType = [`Tema II 
Saudações Papa Chibé`]

export default function AcaiIntroApp() {
    const typedText = useTypedText(textToType)

    const currentRoute = '/acai0tema20'; // Set the current route dynamically based on your page

    return (
        <AcaiLayout>
            
            <PrimaryCharacter   speech={typedText} textStyle="font-black"/>

            <NavBar currentRoute={currentRoute} />

        </AcaiLayout>
    )

}

