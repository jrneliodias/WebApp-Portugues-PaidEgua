 "use client"
import Image from "next/image";

import { useTypedText } from "@/app/Hooks/useTypedText";
import NavBar from "@/app/components/navigation/NavBar";
import PrimaryCharacter from "@/app/components/characters/PrimaryCharacter";
import { AcaiLayout } from "@/app/components/layout/acailayout";

const imageSize = 150;

const textToType = [`Ei, mano (a)! Percebeste algumas diferenças de pronúncia entre as letras do português e do espanhol?`]

export default function AcaiTema1App() {
    const typedText = useTypedText(textToType)
    
    const currentRoute = '/acai0tema12'; // Set the current route dynamically based on your page

    return (
        <AcaiLayout>
            
        <PrimaryCharacter   speech={typedText}/>

        <NavBar currentRoute={currentRoute} />

    </AcaiLayout>
    )

}

