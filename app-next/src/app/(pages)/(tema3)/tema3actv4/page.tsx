
import NormalText from "@/app/components/basics/normaltext";
import SpanishText, { PhonemeFont } from "@/app/components/basics/spanishtext";
import TextDiv from "@/app/components/basics/text";
import LightColorCard, { WordCard } from "@/app/components/cards/card";
import NavBar from "@/app/components/navigation/NavBar";
import { IconBook, IconRefresh, IconVolume } from "@tabler/icons-react";
import Image from "next/image";
import cacapalavras from "@/app/images/caca-palavras.jpg"


export default function Tema3Act4() {

    const currentRoute = "/tema3actv4"; // Set the current route dynamically based on your page

    return (
        <div className="main-layout ">
            <div className="title-text-format ">
                <span>
                    <b> Tema III - Atividade 4</b>
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
                        <p>
                        Tu gostas de caça-palavras? Então, vou te apresentar ao Caça-palavras “Adubado”. Nesta brincadeira terás que encontrar as palavras e expressões idiomáticas paraenses, na horizontal, vertical e na diagonal , clicando nas letras correspondentes. Para facilitar, poderás acompanhar o áudio através das transcrições fonéticas, além de observar o sentido de cada uma em espanhol. Te vira!!!!
                        </p>
                    </NormalText>
                </TextDiv>

                <Image
                    src={cacapalavras}
                    alt="roleta"
                    width={400}
                    className="place-self-center rounded-md"

                />

              


           






            </div>
            <NavBar currentRoute={currentRoute} />
        </div>
    )

}


