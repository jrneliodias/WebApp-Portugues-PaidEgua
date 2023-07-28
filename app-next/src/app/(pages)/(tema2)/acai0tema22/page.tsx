"use client"
import acai0 from "@/app/images/acai0.png"
import { useTypedText } from "@/app/Hooks/useTypedText";
import NavBar from "@/app/components/navigation/NavBar";
import PrimaryCharacter from "@/app/components/characters/PrimaryCharacter";

const imageSize = 150;

const textToType = [`Agora que conheceste algumas saudações da Língua Portuguesa, iremos te apresentar a forma particular que o belenense utiliza para cumprimentar as pessoas, denominadas aqui, neste Web App, de “Saudações Papa Chibé”.`]

export default function AcaiIntroApp22() {
    const typedText = useTypedText(textToType)

    const currentRoute = '/acai0tema22'; // Set the current route dynamically based on your page

    return (
        <div className="flex flex-col place-self-end item-center py-2 gap-5 h-3/4 mb-[4rem] ">
            <PrimaryCharacter
                imgSource={acai0}
                speech={typedText}
                textStyle="" />
            <NavBar currentRoute={currentRoute} />

        </div>

    )

}

