"use client"

import { useTypedText } from "@/app/Hooks/useTypedText";
import NavBar from "@/app/components/navigation/NavBar";
import PrimaryCharacter from "@/app/components/characters/PrimaryCharacter";
import SpanishText from "@/app/components/basics/spanishtext";
import { AcaiLayout } from "@/app/components/layout/acailayout";

const imageSize = 150;

const textToType = [`TEMA III
Expressões Idiomáticas Paraenses*`]

export default function AcaiTema30App() {
    const typedText = useTypedText(textToType)

    const currentRoute = '/acai0tema30'; // Set the current route dynamically based on your page

    return (
        <AcaiLayout>
            <PrimaryCharacter
                
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

        </AcaiLayout>

    )

}