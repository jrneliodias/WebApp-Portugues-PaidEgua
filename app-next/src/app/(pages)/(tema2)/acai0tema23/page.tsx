"use client"

import { useTypedText } from "@/app/Hooks/useTypedText";
import NavBar from "@/app/components/navigation/NavBar";
import PrimaryCharacter from "@/app/components/characters/PrimaryCharacter";

const imageSize = 150;

const textToType = [`Mas não podemos deixar de citar as Interjeições paraenses, ou seja, palavras que indicam espanto, surpresa, admiração, tristeza, ordem, etc.`]

export default function AcaiIntroApp23() {
    const typedText = useTypedText(textToType)

    const currentRoute = '/acai0tema23'; // Set the current route dynamically based on your page

    return (
        <AcaiLayout>
            
        <PrimaryCharacter   speech={typedText}/>

        <NavBar currentRoute={currentRoute} />

    </AcaiLayoutv>

    )

}

