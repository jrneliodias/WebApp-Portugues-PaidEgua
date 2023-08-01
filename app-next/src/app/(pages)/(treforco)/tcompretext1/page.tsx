
import NormalText from "@/app/components/basics/normaltext";
import SpanishText, { PhonemeFont } from "@/app/components/basics/spanishtext";
import TextDiv from "@/app/components/basics/text";
import LightColorCard, { TextLightColorCard, WordCard } from "@/app/components/cards/card";
import NavBar from "@/app/components/navigation/NavBar";
import { IconBook, IconRefresh, IconVolume } from "@tabler/icons-react";
import charge from "@/app/images/charges/chargeturma.jpg"
import FoodImage, { ChargeImage } from "@/app/components/imagesComponents/foodImage";




export default function TcompreTextual1() {

    const currentRoute = "/tcompretext1"; // Set the current route dynamically based on your page

    return (
        <div className="main-layout ">
            <div className="title-text-format ">
                <span>
                    <b> COMPREENSÃO TEXTUAL - ATIVIDADE 1 </b>
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
                        O designer gráfico paraense Rosinaldo Pinheiro se inspirou na nossa cultura para criar a Turma do Açaí, e seus personagens: D. Preta, S. Manduca, Dorinha, Mariazinha e o personagem principal da historinha, um menino chamado Açaí.
                    </NormalText>
                </TextDiv>

                <TextDiv className="flex flex-col gap-3">
                    <NormalText >
                        1 2- Lê o texto abaixo com atenção e marca a opção correta.
                    </NormalText>
                    <ChargeImage className="place-self-center" imgSource={charge}/>
                </TextDiv>

                

            </div>
            <NavBar currentRoute={currentRoute} />
        </div>
    )

}


