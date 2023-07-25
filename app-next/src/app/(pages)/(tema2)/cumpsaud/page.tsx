
import NormalText from "@/app/components/basics/normaltext";
import SpanishText, { PhonemeFont } from "@/app/components/basics/spanishtext";
import TextDiv from "@/app/components/basics/text";
import LightColorCard from "@/app/components/cards/card";
import NavBar from "@/app/components/navigation/NavBar";
import { IconBook, IconRefresh, IconVolume } from "@tabler/icons-react";


export default function CumpSaud() {

    const currentRoute = "/cumpsaud"; // Set the current route dynamically based on your page

    return (
        <div className="main-layout ">
            <div className="title-text-format ">
                <span>
                    <b>  Na Nossa Região  </b>
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
                        Observa que além de traduzirmos essas expressões para o espanhol, também fizemos as transcrições fonéticas para que tu possas acompanhar a pronúncia.
                    </NormalText>
                    <SpanishText>
                        Observa que además de traducir esas expresiones al español, también hicimos las transcripciones fonéticas para que puedas acompañar la pronunciación.
                    </SpanishText>
                </TextDiv>
                <TextDiv>
                    <NormalText>
                        Cumprimentamos as pessoas com:
                    </NormalText>
                    <SpanishText>
                        Saludamos a la gente con:
                    </SpanishText>
                </TextDiv>

                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Bom dia!
                        </NormalText>
                        <PhonemeFont>
                            ['bõ 'dʒja]
                        </PhonemeFont>
                        <SpanishText>
                            ¡Buenos días!
                        </SpanishText>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>



            </div>
            <NavBar currentRoute={currentRoute} />
        </div>
    )

}
