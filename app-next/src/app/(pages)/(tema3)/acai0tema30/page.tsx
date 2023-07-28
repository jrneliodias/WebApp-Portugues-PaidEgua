"use client"
import acai0 from "@/app/images/acai0.png"
import { useTypedText } from "@/app/Hooks/useTypedText";
import NavBar from "@/app/components/navigation/NavBar";
import PrimaryCharacter from "@/app/components/characters/PrimaryCharacter";
import SpanishText from "@/app/components/basics/spanishtext";

const imageSize = 150;

const textToType = [`TEMA III
Expressões Idiomáticas Paraenses*`]

export default function AcaiTema30App() {
    const typedText = useTypedText(textToType)

    const currentRoute = '/acai0tema30'; // Set the current route dynamically based on your page

    return (
        <div className="flex flex-col place-self-center justify-end py-5 h-full">
            <PrimaryCharacter
                imgSource={acai0}
                speech={typedText}
                textStyle="text-xl font-black  italic text-center"
            />

            <div className="border-2 m-5 p-4 rounded-3xl">
                *São palavras e/ou frases cujo significado ultrapassa o sentido literal das suas partes. Elas apresentam características culturais.
                <SpanishText>
                    Son palabras y/o frases cuyo significado ultrapasa el sentido literal de sus partes. Ellas presentan características culturales.
                </SpanishText>
            </div>
            <NavBar currentRoute={currentRoute} />

        </div>

    )

}