
import LineCards from "@/app/components/activities/linecards";
import NormalText from "@/app/components/basics/normaltext";
import SpanishText from "@/app/components/basics/spanishtext";
import TextDiv from "@/app/components/basics/text";
import NavBar from "@/app/components/navigation/NavBar";
import { IconBook, IconRefresh, IconVolume } from "@tabler/icons-react";


export default function Tema2Actv1() {

    const currentRoute = "/tema2actv1"; // Set the current route dynamically based on your page

    return (
        <div className="main-layout ">
            <div className="title-text-format ">
                <span>
                    <b> Tema 2 - Atividade 1</b>
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
                        Escuta o áudio com atenção e organiza a sequência das palavras que indicam formas de cumprimento.
                    </NormalText>
                  
                </TextDiv>

                <LineCards text={["DE", "CONHECER", "GOSTEI", "TE"]} />

                <LineCards text={["AS", "COISAS?", "ESTÃO", "COMO"]} />

                <LineCards text={["FEITO?", "QUE", "O", "TENS"]} />

                <LineCards text={["ATRASADOS", "ESTAMOS", "BORIMBORA", "SAIR", "PRA"]} />

                <LineCards text={["TODAS!", "BOA", "E", "A", "TODAS", "NOITE"]} />


            </div>
            <NavBar currentRoute={currentRoute} />
        </div>
    )

}
