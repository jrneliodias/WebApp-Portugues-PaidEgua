"use client"
import acai0 from "@/app/images/acai0.png"
import { useTypedText } from "@/app/Hooks/useTypedText";
import NavBar from "@/app/components/navigation/NavBar";
import PrimaryCharacter from "@/app/components/characters/PrimaryCharacter";
import { AcaiLayout } from "@/app/components/layout/acailayout";

const imageSize = 150;

const textToType = [`Mano/Mana, concluímos as atividades relacionadas aos temas abordados.`, `Agora, o que achas de fazermos algumas atividades de reforço do Português Pai D'Égua? A primeira é sobre a gastronomia paraense.`,`Tu sabias que desde 2015, Belém tem o título internacional de Cidade Criativa da Gastronomia? Por isso, vamos agora tratar desse aspecto bem especial da nossa cultura, a culinária paraense.`]

export default function AcaiTreforco0App() {
    const typedText = useTypedText(textToType)

    const currentRoute = '/acai0treforco0'; // Set the current route dynamically based on your page

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