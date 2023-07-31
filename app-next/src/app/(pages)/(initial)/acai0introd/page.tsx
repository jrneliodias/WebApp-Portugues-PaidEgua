 "use client"

import { useTypedText } from "@/app/Hooks/useTypedText";
import NavBar from "@/app/components/navigation/NavBar";
import PrimaryCharacter from "@/app/components/characters/PrimaryCharacter";
import { AcaiLayout } from "@/app/components/layout/acailayout";

const imageSize = 150;

const textToType = [`Esperamos que este aprendizado colabore para as tuas relações de comunicação no cotidiano em nossa cidade.`,'Mano(a), com este Web App tu poderás fazer várias coisas muito firmes!']

export default function AcaiIntroApp() {
    const typedText = useTypedText(textToType)
    
    const currentRoute = '/acai0introd'; // Set the current route dynamically based on your page

    return (
        <AcaiLayout>
            
            <PrimaryCharacter   speech={typedText}/>

            <NavBar currentRoute={currentRoute} />

        </AcaiLayoutv>

    )

}

