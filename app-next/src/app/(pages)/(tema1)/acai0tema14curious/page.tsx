"use client"

import { useTypedText } from "@/app/Hooks/useTypedText";
import NavBar from "@/app/components/navigation/NavBar";
import PrimaryCharacter from "@/app/components/characters/PrimaryCharacter";
import { AcaiLayout } from "@/app/components/layout/acailayout";

const imageSize = 150;

const textToType = [`Até aqui tá beleza, mano(a)? Agora que tu aprendeste as diferenças entre os sons (fonemas) das letras do português e do espanhol, é hora de aprender algumas questões típicas do falar belenense! Espia os exemplos abaixo!`]

export default function AcaiTema1CuriousApp2() {
    const typedText = useTypedText(textToType)

    const currentRoute = '/acai0tema14curious'; // Set the current route dynamically based on your page

    return (
        <AcaiLayout>
            
            <PrimaryCharacter   speech={typedText}/>

            <NavBar currentRoute={currentRoute} />

        </AcaiLayout>
    )

}

