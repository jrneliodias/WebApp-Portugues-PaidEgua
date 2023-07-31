"use client"
import Image from "next/image";

import { useTypedText } from "@/app/Hooks/useTypedText";
import NavBar from "@/app/components/navigation/NavBar";
import PrimaryCharacter from "@/app/components/characters/PrimaryCharacter";

const imageSize = 150;

const textToType = [`Ei, presta atenção nessas orientações sobre os símbolos fonéticos e suas equivalências!`]

export default function AcaiIntroApp() {
    const typedText = useTypedText(textToType)

    const currentRoute = '/acai0tema2'; // Set the current route dynamically based on your page

    return (
        <AcaiLayout>
            
        <PrimaryCharacter   speech={typedText}/>

        <NavBar currentRoute={currentRoute} />

    </AcaiLayoutv>
    )

}

