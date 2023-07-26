
import ActTextInput from "@/app/components/activities/actinput";
import LineCards from "@/app/components/activities/linecards";
import NormalText from "@/app/components/basics/normaltext";
import SpanishText from "@/app/components/basics/spanishtext";
import TextDiv from "@/app/components/basics/text";
import LightColorCard, { WordCard } from "@/app/components/cards/card";
import NavBar from "@/app/components/navigation/NavBar";
import { IconBook, IconKeyboard, IconRefresh, IconVolume } from "@tabler/icons-react";




const phrases = ["¿EN QUÉ ANDAS?",
    "ESTOY BIEN",
    "¿Y AHÍ, MI PANA?",
    "MUCHO GUSTO",
    "ME LLAMO…",
    "¡BUENOS DÍAS!",
    "¡HASTA LUEGO!",
    "¿DÓNDE VIVES?",
    "MI NOMBRE ES...",
    "YA ME VOY",
    "¡HOLA!",
    "¿CUÁL ES TU NOMBRE?",
    "¡BUENAS NOCHES!",
    "MUCHAS GRACIAS"];


export default function Tema2Actv2() {

    const currentRoute = "/tema2actv2"; // Set the current route dynamically based on your page

    return (
        <div className="main-layout ">
            <div className="title-text-format ">
                <span>
                    <b> Tema 2 - Atividade 2</b>
                </span>
                <div className="flex gap-4">
                    <IconBook />
                    <IconVolume />
                    <IconRefresh />
                </div>
            </div>
            <div className="body-text-layout">
                <TextDiv>
                    <NormalText>
                        Digita em português a palavra ou a frase correspondente às formas de cumprimento relacionadas ao espanhol. Se tiveres dúvidas, podes retornar aos quadros das saudaçòes Papa Chibé.
                    </NormalText>

                </TextDiv>

                {phrases.map((phrase,index) => {
                    return(
                        <ActTextInput key = {index} > {phrase}</ActTextInput>
                    )
                })}






            </div>
            <NavBar currentRoute={currentRoute} />
        </div>
    )

}
