"use client"

import { useTypedText } from "@/app/Hooks/useTypedText";
import NavBar from "@/app/components/navigation/NavBar";
import PrimaryCharacter from "@/app/components/characters/PrimaryCharacter";
import { AcaiLayout } from "@/app/components/layout/acailayout";

const imageSize = 150;

const textToType = [`Como últimas atividades, que tal treinarmos um pouco a tua compreensão leitora, hem?`, `Para  isso, vamos usar dois tipos de gêneros textuais, o primeiro será relacionado a uma charge que traz
questões culturais.`,`E o segundo gênero se refere a diálogos que fazem parte de contextos e necessidades comuns a todo e qualquer imigrante e refugiado venezuelano residente no Brasil.`]

export default function AcaiTreforco1App() {
    const typedText = useTypedText(textToType)

    const currentRoute = '/acai0treforco1'; // Set the current route dynamically based on your page

    return (
        <AcaiLayout>
            <PrimaryCharacter
                
                speech={typedText}
                textStyle=""
            />

            <NavBar currentRoute={currentRoute} />
        </AcaiLayout>

    )

}