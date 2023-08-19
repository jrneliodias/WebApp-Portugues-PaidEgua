
import NormalText from "@/app/components/basics/normaltext";
import SpanishText, { PhonemeFont } from "@/app/components/basics/spanishtext";
import TextDiv from "@/app/components/basics/text";
import LightColorCard, { TextLightColorCard, WordCard } from "@/app/components/cards/card";
import NavBar from "@/app/components/navigation/NavBar";
import { IconBook, IconRefresh, IconVolume } from "@tabler/icons-react";
import erv from "@/app/images/market/ervmarket.jpg"
import lettuce from "@/app/images/market/lettucemarket.jpg"
import art from "@/app/images/market/artmarket.jpg"
import fruit from "@/app/images/market/fruitmarket.jpg"
import fish from "@/app/images/market/fishmarket.jpg"
import shrimp from "@/app/images/market/shrimpmarket.jpg"
import FoodImage from "@/app/components/imagesComponents/foodImage";

export default function TreforcoAct2() {

    const currentRoute = "/treforcoactv2"; // Set the current route dynamically based on your page

    return (
        <div className="main-layout ">
            <div className="title-text-format ">
                <span>
                    <b> GASTRONOMIA - ATIVIDADE 2</b>
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
                        O que podemos comprar na feira do Ver-o-Peso? Associando os áudios dos feirantes do Ver-o-Peso oferecendo seus produtos, clica na imagem que representa cada produto anunciado.
                    </NormalText>
                </TextDiv>
                <div className="flex flex-col gap-4 m-2">
                    <div className="flex justify-around gap-3">
                        <TextLightColorCard className=" border-2 w-1/2 flex gap-2">
                            <div className="border-2 p-2 rounded-full font-bold">
                                1
                            </div>
                            <p>
                                Quem quiser fazer um delicioso arroz paraense ou vatapá Pai d'égua, é só vir aqui comprar com a gente alguns quilos de camarão.
                            </p>
                        </TextLightColorCard>
                        <FoodImage imgSource={erv} className="w-3/5" />
                    </div>
                    <div className="flex justify-around gap-3">
                        <TextLightColorCard className=" border-2 w-1/2 flex gap-2">
                            <div className="border-2 p-2 rounded-full font-bold">
                                2
                            </div>
                            <p>Bom dia, freguesa! Bom dia, freguês! Temos banana, cupuaçu, jambo, maracujá.
                            </p>
                        </TextLightColorCard>
                        <FoodImage imgSource={lettuce} className="w-3/5" />
                    </div>
                    <div className="flex justify-around gap-3">
                        <TextLightColorCard className=" border-2 w-1/2 flex gap-2">
                            <div className="border-2 p-2 rounded-full font-bold">
                                3
                            </div>
                            <p>
                                E aí, maninho! Temos peixe fresco, filhote e pescada para fazer uma bela caldeirada. E dourada, para comer frita com açaí.
                            </p>
                        </TextLightColorCard>
                        <FoodImage imgSource={art} className="w-3/5" />
                    </div>
                    <div className="flex justify-around gap-3">
                        <TextLightColorCard className=" border-2 w-1/2 flex gap-2">
                            <div className="border-2 p-2 rounded-full font-bold">
                                4
                            </div>
                            <p>
                                E aí, minha gente? Estão precisando de boas energias? Então vem aqui com as Erveiras do Ver-o-Peso comprar a "chega-te a mim", "busca longe", "dinheiro em penca" e tantos outros cheiros do Pará.
                            </p>
                        </TextLightColorCard>
                        <FoodImage imgSource={fruit} className="w-3/5" />
                    </div>
                    <div className="flex justify-around gap-3">
                        <TextLightColorCard className=" border-2 w-1/2 flex gap-2">
                            <div className="border-2 p-2 rounded-full font-bold">
                                5
                            </div>
                            <p>
                                Oi, mano! Aqui tu encontras todos os tipos de legumes que vais precisar para preparar um cozidão bem adubado.
                            </p>

                        </TextLightColorCard>
                        <FoodImage imgSource={fish} className="w-3/5" />
                    </div>
                    <div className="flex justify-around gap-3">
                        <TextLightColorCard className=" border-2 w-1/2 flex gap-2">
                            <div className="border-2 p-2 rounded-full font-bold">
                                6
                            </div>
                            <p>
                                Ei, mana! Não queres comprar uma lembrancinha de Belém para uma amiga ou amigo muito querido? Pois então, aqui no Ver-o-Peso tem muito artesanato marajoara*.
                            </p>
                        </TextLightColorCard>
                        <FoodImage imgSource={shrimp} className="w-3/5" />
                    </div>
                </div>

                <div className="flex leading-none p-3">
                    <p>
                        *É conhecida pelo nome de arte marajoara o conjunto de artefatos, sobretudo a cerâmica, produzida por antifos habitantes da ilha do Marajó, principal.
                    </p>
                </div>

            </div>
            <NavBar currentRoute={currentRoute} />
        </div>
    )

}


