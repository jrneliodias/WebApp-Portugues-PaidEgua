
import NormalText from "@/app/components/basics/normaltext";
import SpanishText, { PhonemeFont } from "@/app/components/basics/spanishtext";
import TextDiv from "@/app/components/basics/text";
import LightColorCard, { WordCard } from "@/app/components/cards/card";
import NavBar from "@/app/components/navigation/NavBar";
import { IconBook, IconRefresh, IconVolume } from "@tabler/icons-react";
import Image from "next/image";
import roleta from "@/app/images/roleta.svg"


export default function Tema3Act2() {

    const currentRoute = "/tema3actv3"; // Set the current route dynamically based on your page

    return (
        <div className="main-layout ">
            <div className="title-text-format ">
                <span>
                    <b> Tema III - Atividade 3</b>
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
                            Vou te apresentar a Roleta “Pavulagem”, essa expressão significa em espanhol <span className="span-text-font">“una persona vanidosa, un echón, como se habla en Venezuela”. </span>
                            Essa Roleta está dividida em 8 partes e em cada uma delas há uma expressão idiomática paraense. Tu vais movimentar a Roleta e quando parar deverás clicar no sentido corresponde em espanhol.
                        </p>
                    </NormalText>
                </TextDiv>

                <Image
                    src={roleta}
                    alt="roleta"
                    width={400}
                    className="place-self-center"

                />

                <div className="flex flex-wrap gap-3 justify-center">
                    <WordCard >
                        Sin Dinero
                    </WordCard>
                    <WordCard >
                        Seguro
                    </WordCard>
                    <WordCard >
                        No funciona
                    </WordCard>
                    <WordCard >
                        Es mentira
                    </WordCard>
                    <WordCard >
                        Desobediente

                    </WordCard>
                    <WordCard >
                        Borracho
                    </WordCard>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between w-full gap-5 items-center">
                        <span className="phoneme-text-font">['dʒiʃkI]</span>
                        <WordCard className="w-[70%] h-8">
                        </WordCard>
                    </div>
                    <div className="flex justify-between w-full gap-5 items-center">
                        <span className="phoneme-text-font">[malu'vidʊ]</span>
                        <WordCard className="w-[70%] h-8">
                        </WordCard>
                    </div>
                    <div className="flex justify-between w-full gap-5 items-center">
                        <span className="phoneme-text-font">  [papu'dʒiɲʊ]</span>
                        <WordCard className="w-[70%] h-8">
                        </WordCard>
                    </div>
                    <div className="flex justify-between w-full gap-5 items-center">
                        <span className="phoneme-text-font">['to 'ʎizʊ]</span>
                        <WordCard className="w-[70%] h-8">
                        </WordCard>
                    </div>
                    <div className="flex justify-between w-full gap-5 items-center">
                        <span className="phoneme-text-font">['dew 'bugI]</span>
                        <WordCard className="w-[70%] h-8">
                        </WordCard>
                    </div>
                    <div className="flex justify-between w-full gap-5 items-center">
                        <span className="phoneme-text-font"> ['pɔdʒI 'kɾe]</span>
                        <WordCard className="w-[70%] h-8">
                        </WordCard>
                    </div>
                    <div className="flex justify-between w-full gap-5 items-center">
                        <span className="phoneme-text-font"> ['ɛ-'gu-'a]</span>
                        <WordCard className="w-[70%] h-8">
                        </WordCard>
                    </div>
                    <div className="flex justify-between w-full gap-5 items-center">
                        <span className="phoneme-text-font">['pi'oɾ]</span>
                        <WordCard className="w-[70%] h-8">
                        </WordCard>
                    </div>








                </div>






            </div>
            <NavBar currentRoute={currentRoute} />
        </div>
    )

}


