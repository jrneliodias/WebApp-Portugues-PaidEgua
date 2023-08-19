"use client"

import { useTypedText } from "@/app/Hooks/useTypedText";
import NavBar from "@/app/components/navigation/NavBar";
import PrimaryCharacter from "@/app/components/characters/PrimaryCharacter";
import { AcaiLayout } from "@/app/components/layout/acailayout";

const imageSize = 150;

const textToType = [`Se familiarizando com os sons da Língua Portuguesa e do Dialeto belenense.`]

export default function AcaiTema1DialetoApp() {
    const typedText = useTypedText(textToType)

    const currentRoute = '/acai0tema14dialeto'; // Set the current route dynamically based on your page

    return (
        <AcaiLayout>
            
        <PrimaryCharacter   speech={typedText}/>

        <NavBar currentRoute={currentRoute} />

    </AcaiLayout>

    )

}

