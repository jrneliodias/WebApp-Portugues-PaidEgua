
import NormalText from "@/app/components/basics/normaltext";
import SpanishText, { PhonemeFont } from "@/app/components/basics/spanishtext";
import TextDiv from "@/app/components/basics/text";
import LightColorCard, { TextLightColorCard, WordCard } from "@/app/components/cards/card";
import NavBar from "@/app/components/navigation/NavBar";
import { IconBook, IconRefresh, IconVolume } from "@tabler/icons-react";
import charge from "@/app/images/charges/chargeturma.jpg"
import FoodImage, { ChargeImage } from "@/app/components/imagesComponents/foodImage";
import { Options, Question } from "@/app/components/forms/questions";




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
                        1- Lê o texto abaixo com atenção e marca a opção correta.
                    </NormalText>
                    <ChargeImage className="place-self-center" imgSource={charge} />
                </TextDiv>

                <Question className="">
                    <div> 1 - O menino Açaí</div>
                    <Options>
                        a) ficou muito agradecido por ter ganhado uma sunga de oncinha.
                    </Options>
                    <Options>
                        b) não gostou do presente que recebeu da sua mãe.
                    </Options>
                    <Options>
                        c) preferiu não comentar sua opinião sobre o presente.
                    </Options>

                </Question>
                <Question className="">
                    <div>
                        2 - Dorinha falou para o Açaí: <b> “deixa de pavulagem” </b>; essa expressão idiomática traz o sentido de: “deixar de ser...”
                    </div>
                    <Options>
                        a) mal agradecido
                    </Options>
                    <Options>
                        b) convencido
                    </Options>
                    <Options>
                        c) engraçado
                    </Options>

                </Question>

                <Question className="">
                    <div>
                        3 - A expressão “tá muito palha” pode ser substituída, sem alterar o sentido, por
                    </div>
                    <Options>
                        a) tá bem
                    </Options>
                    <Options>
                        b) tá mais ou menos
                    </Options>
                    <Options>
                        C) tá muito ruim
                    </Options>

                </Question>
                <Question className="">
                    <div>
                        4- Ao usar a expressão “Borimbora”, o pai do Açaí quer dizer que:
                    </div>
                    <Options>
                        a) todos devem ir logo para a praia.
                    </Options>
                    <Options>
                        b) o Açaí deve deixar de ser mal agradecido
                    </Options>
                    <Options>
                        c) Dorinha não deve se intrometer na conversa.
                    </Options>

                </Question>




            </div>
            <NavBar currentRoute={currentRoute} />

        </div>
    )

}


