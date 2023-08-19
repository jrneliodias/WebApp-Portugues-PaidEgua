"use client"

import { useTypedText } from "@/app/Hooks/useTypedText";
import NavBar from "@/app/components/navigation/NavBar";
import PrimaryCharacter from "@/app/components/characters/PrimaryCharacter";
import { AcaiLayout } from "@/app/components/layout/acailayout";

const imageSize = 150;

const textToType = [`Mano(a), queres conhecer uma curiosidade bacana sobre as vogais do português brasileiro e do dialeto belenense? Então, vamos lá!`]

export default function AcaiTema1CuriousApp() {
    const typedText = useTypedText(textToType)

    const currentRoute = '/acai0tema13curious'; // Set the current route dynamically based on your page

    return (
        <AcaiLayout>
            
            <PrimaryCharacter   speech={typedText}/>

            <NavBar currentRoute={currentRoute} />

        </AcaiLayout>

    )

}

