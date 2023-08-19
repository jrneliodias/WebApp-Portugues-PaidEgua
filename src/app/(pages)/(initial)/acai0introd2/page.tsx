"use client"

import { useTypedText } from "@/app/Hooks/useTypedText";
import NavBar from "@/app/components/navigation/NavBar";
import PrimaryCharacter from "@/app/components/characters/PrimaryCharacter";
import { AcaiLayout } from "@/app/components/layout/acailayout";

const imageSize = 150;

const textToType = [`Olá, seja bem-vindo(a) à 
Lista Pai D'Égua.`]

export default function AcaiIntroApp2() {
    const typedText = useTypedText(textToType)

    const currentRoute = '/acai0introd2'; // Set the current route dynamically based on your page

    return (
        <AcaiLayout>
            
        <PrimaryCharacter   speech={typedText}/>

        <NavBar currentRoute={currentRoute} />

    </AcaiLayout>

    )

}

