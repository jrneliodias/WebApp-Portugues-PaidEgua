
import NormalText from "@/app/components/basics/normaltext";
import SpanishText, { PhonemeFont } from "@/app/components/basics/spanishtext";
import TextDiv from "@/app/components/basics/text";
import LightColorCard, { TextLightColorCard, WordCard } from "@/app/components/cards/card";
import NavBar from "@/app/components/navigation/NavBar";
import { IconBook, IconRefresh, IconVolume } from "@tabler/icons-react";
import acai from "@/app/images/foods/acai.jpg"
import arroz from "@/app/images/foods/arrozparaense.jpg"
import pato from "@/app/images/foods/patotucupi.jpg"
import tacaca from "@/app/images/foods/tacaca.jpg"
import manicoba from "@/app/images/foods/manicoba.jpg"
import vatapa from "@/app/images/foods/vatapa.jpg"
import FoodImage from "@/app/components/imagesComponents/foodImage";

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
                <div className="flex flex-col gap-4 m-2">
                    <div className="flex justify-around gap-3">
                        <TextLightColorCard className=" border-2 w-1/2 flex gap-2">
                            <div className="border-2 p-2 rounded-full font-bold">
                                1
                            </div>
                            <p>
                                Alimento feito com farinha de trigo, camarão seco, vários temperos e azeite de dendê.
                            </p>
                        </TextLightColorCard>
                        <FoodImage imgSource={tacaca} className="w-3/5" />
                    </div>
                    <div className="flex justify-around gap-3">
                        <TextLightColorCard className=" border-2 w-1/2 flex gap-2">
                            <div className="border-2 p-2 rounded-full font-bold">
                                2
                            </div>
                            <p>
                                Alimento feito com arroz cozido no caldo de tucupi, acrescido de camarão seco e folhas jambú.
                            </p>
                        </TextLightColorCard>
                        <FoodImage imgSource={pato} className="w-3/5" />
                    </div>
                    <div className="flex justify-around gap-3">
                        <TextLightColorCard className=" border-2 w-1/2 flex gap-2">
                            <div className="border-2 p-2 rounded-full font-bold">
                                3
                            </div>
                            <p>
                                Alimento feito com ave assada de forno, e depois cozida no caldo do tucupi e folhas jambú.
                            </p>
                        </TextLightColorCard>
                        <FoodImage imgSource={vatapa} className="w-3/5" />
                    </div>
                    <div className="flex justify-around gap-3">
                        <TextLightColorCard className=" border-2 w-1/2 flex gap-2">
                            <div className="border-2 p-2 rounded-full font-bold">
                                4
                            </div>
                            <p>
                                Alimento feito com folhas de maniva triturada (cozida durante sete dias), carne de porco, embutidos e defumados.
                            </p>
                        </TextLightColorCard>
                        <FoodImage imgSource={acai} className="w-3/5" />
                    </div>
                    <div className="flex justify-around gap-3">
                        <TextLightColorCard className=" border-2 w-1/2 flex gap-2">
                            <div className="border-2 p-2 rounded-full font-bold">
                                5
                            </div>
                            <p>
                                Alimento feito com goma de mandioca, caldo de tucupi, camarões e jambú – folha que provoca sensação de dormência na boca.
                            </p>

                        </TextLightColorCard>
                        <FoodImage imgSource={arroz} className="w-3/5" />
                    </div>
                    <div className="flex justify-around gap-3">
                        <TextLightColorCard className=" border-2 w-1/2 flex gap-2">
                            <div className="border-2 p-2 rounded-full font-bold">
                                6
                            </div>
                            <p>
                                Fruto da cor de vinho – alimentação consumida tradicionalmente com farinha de mandioca.
                            </p>
                        </TextLightColorCard>
                        <FoodImage imgSource={manicoba} className="w-3/5" />
                    </div>
                </div>







            </div>
            <NavBar currentRoute={currentRoute} />
        </div>
    )

}


