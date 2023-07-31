"use client"

import { useTypedText } from "@/app/Hooks/useTypedText";
import NavBar from "@/app/components/navigation/NavBar";
import PrimaryCharacter from "@/app/components/characters/PrimaryCharacter";
import { AcaiLayout } from "@/app/components/layout/acailayout";

const imageSize = 150;

const textToType = [`Tema I
Alfabeto Fonético do Português e suas particularidades em relação ao dialeto de Belém`]

export default function AcaiIntroApp() {
    const typedText = useTypedText(textToType)

    const currentRoute = '/acai0tema1'; // Set the current route dynamically based on your page

    return (
        <AcaiLayout>
            
            <PrimaryCharacter   speech={typedText}/>

            <NavBar currentRoute={currentRoute} />

        </AcaiLayout>

    )

}

