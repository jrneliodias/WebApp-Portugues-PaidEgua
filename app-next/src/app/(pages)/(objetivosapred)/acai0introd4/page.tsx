 "use client"

import { useTypedText } from "@/app/Hooks/useTypedText";
import NavBar from "@/app/components/navigation/NavBar";
import PrimaryCharacter from "@/app/components/characters/PrimaryCharacter";

const imageSize = 150;

const textToType = [`Mas, antes de iniciarmos as atividades interativas, precisas relembrar os ícones que serão utilizados em todos os exercícios.`]

export default function AcaiIntroApp() {
    const typedText = useTypedText(textToType)
    
    const currentRoute = '/acai0introd4'; // Set the current route dynamically based on your page

    return (
        <AcaiLayout>
            
        <PrimaryCharacter   speech={typedText}/>

        <NavBar currentRoute={currentRoute} />

    </AcaiLayoutv>

    )

}

