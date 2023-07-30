"use client"
import acai0 from "@/app/images/acai0.png"
import { useTypedText } from "@/app/Hooks/useTypedText";
import NavBar from "@/app/components/navigation/NavBar";
import PrimaryCharacter from "@/app/components/characters/PrimaryCharacter";
import { AcaiLayout } from "@/app/components/layout/acailayout";

const imageSize = 150;

const textToType = [`Se familiarizando com as Expressões Idiomáticas Paraenses.`]

export default function AcaiTema31App() {
    const typedText = useTypedText(textToType)

    const currentRoute = '/acai0tema31'; // Set the current route dynamically based on your page

    return (
        <AcaiLayout>
            <PrimaryCharacter
                imgSource={acai0}
                speech={typedText}
                textStyle=""
            />

            <NavBar currentRoute={currentRoute} />
        </AcaiLayout>

    )

}