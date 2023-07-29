"use client"
import acai0 from "@/app/images/acai0.png"
import { useTypedText } from "@/app/Hooks/useTypedText";
import NavBar from "@/app/components/navigation/NavBar";
import PrimaryCharacter from "@/app/components/characters/PrimaryCharacter";

const imageSize = 150;

const textToType = [`Se familiarizando com os sons da Língua Portuguesa e do Dialeto belenense.`]

export default function AcaiTema1DialetoApp() {
    const typedText = useTypedText(textToType)

    const currentRoute = '/acai0tema14dialeto'; // Set the current route dynamically based on your page

    return (
        <div className="flex flex-col place-self-end item-center h-full mb-32">
            <PrimaryCharacter imgSource={acai0} speech={typedText} />
            <NavBar currentRoute={currentRoute} />

        </div>

    )

}

