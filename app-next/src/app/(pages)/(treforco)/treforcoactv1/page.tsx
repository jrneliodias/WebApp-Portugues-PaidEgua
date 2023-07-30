
import NormalText from "@/app/components/basics/normaltext";
import SpanishText, { PhonemeFont } from "@/app/components/basics/spanishtext";
import TextDiv from "@/app/components/basics/text";
import LightColorCard, { WordCard } from "@/app/components/cards/card";
import NavBar from "@/app/components/navigation/NavBar";
import { IconBook, IconRefresh, IconVolume } from "@tabler/icons-react";
import acai from "@/app/images/foods/acai.jpg"
import arroz from "@/app/images/foods/arrozparaense.jpg"
import pato from "@/app/images/foods/patotucupi.jpg"
import tacaca from "@/app/images/foods/tacaca.jpg"
import manicoba from "@/app/images/foods/manicoba.jpg"
import vatapa from "@/app/images/foods/manicoba.jpg"

export default function TreforcoAct1() {

    const currentRoute = "/treforcoactv1"; // Set the current route dynamically based on your page

    return (
        <div className="main-layout ">
            <div className="title-text-format ">
                <span>
                    <b> GASTRONOMIA - ATIVIDADE 1</b>
                </span>
                <div className="flex gap-4">
                    <IconBook />
                    <IconVolume />
                    <IconRefresh />
                </div>
            </div>
            <div className="body-text-layout">
                <TextDiv>
                    <NormalText >
                        Esse título foi concedido pela UNESCO, considerando-se as cores, cheiros e sabores tipicamente amazônicos, os quais podem ser degustados em nossa culinária. De acordo com as descrições apresentadas no áudio, clica na imagem correspondente à comida típica paraense.
                    </NormalText>
                </TextDiv>





            </div>
            <NavBar currentRoute={currentRoute} />
        </div>
    )

}


