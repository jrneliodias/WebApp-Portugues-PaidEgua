
import LineCards from "@/app/components/activities/linecards";
import NormalText from "@/app/components/basics/normaltext";
import SpanishText from "@/app/components/basics/spanishtext";
import TextDiv from "@/app/components/basics/text";
import NavBar from "@/app/components/navigation/NavBar";
import { IconBook, IconRefresh, IconVolume } from "@tabler/icons-react";


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
                <LineCards text={["¿EN QUÉ ANDAS?"]} />

                <LineCards text={["ESTOY BIEN"]} />

                <LineCards text={["¿Y AHÍ, MI PANA?"]} />

                <LineCards text={["MUCHO GUSTO"]} />

                <LineCards text={["ME LLAMO…"]} />

                <LineCards text={["¡BUENOS DÍAS!"]} />

                <LineCards text={["¡HASTA LUEGO!"]} />

                <LineCards text={["¿DÓNDE VIVES?"]} />

                <LineCards text={["MI NOMBRE ES..."]} />

                <LineCards text={["YA ME VOY"]} />

                <LineCards text={["¡HOLA!"]} />

                <LineCards text={["¿CUÁL ES TU NOMBRE?"]} />

                <LineCards text={["¡BUENAS NOCHES!"]} />

                <LineCards text={["MUCHAS GRACIAS"]} />



            </div>
            <NavBar currentRoute={currentRoute} />
        </div>
    )

}
