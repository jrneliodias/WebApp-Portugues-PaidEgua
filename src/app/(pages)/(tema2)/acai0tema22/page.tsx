"use client"

import { useTypedText } from "@/app/Hooks/useTypedText";
import NavBar from "@/app/components/navigation/NavBar";
import PrimaryCharacter from "@/app/components/characters/PrimaryCharacter";
import { AcaiLayout } from "@/app/components/layout/acailayout";

const imageSize = 150;

const textToType = [`Agora que conheceste algumas saudações da Língua Portuguesa, iremos te apresentar a forma particular que o belenense utiliza para cumprimentar as pessoas, denominadas aqui, neste Web App, de “Saudações Papa Chibé”.`]

export default function AcaiIntroApp22() {
    const typedText = useTypedText(textToType)

    const currentRoute = '/acai0tema22'; // Set the current route dynamically based on your page

    return (
        <AcaiLayout>
            
        <PrimaryCharacter   speech={typedText}/>

        <NavBar currentRoute={currentRoute} />

    </AcaiLayout>

    )

}

