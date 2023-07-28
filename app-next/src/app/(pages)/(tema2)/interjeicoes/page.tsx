
import NormalText from "@/app/components/basics/normaltext";
import SpanishText, { PhonemeFont } from "@/app/components/basics/spanishtext";
import TextDiv from "@/app/components/basics/text";
import LightColorCard from "@/app/components/cards/card";
import NavBar from "@/app/components/navigation/NavBar";
import { IconBook, IconRefresh, IconVolume } from "@tabler/icons-react";


export default function Interjeicoes() {

    const currentRoute = "/interjeicoes"; // Set the current route dynamically based on your page

    return (
        <div className="main-layout ">
            <div className="title-text-format ">
            <b> Tema II - Saudações Papa Chibé </b>
                <div>
                    O Belenense que se Preza...
                </div>
                <div className="flex gap-4">
                    <IconBook />
                    <IconVolume />
                    <IconRefresh />
                </div>
            </div>
            <div className="body-text-layout">
                <TextDiv>
                    <NormalText>
                        Chama por alguém gritando:
                    </NormalText>
                    <SpanishText>
                        Llama por alguien gritando:
                    </SpanishText>
                </TextDiv>


                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Ei!
                        </NormalText>
                        <PhonemeFont>
                            ['ej]
                        </PhonemeFont>
                        <SpanishText>
                            Hey, Epa tú
                        </SpanishText>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>

                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Mano / Mana
                        </NormalText>
                        <PhonemeFont>
                            ['mãnʊ / 'mãna]
                        </PhonemeFont>
                        <SpanishText>
                            Pana
                        </SpanishText>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>

                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Maninho / Maninha
                        </NormalText>
                        <PhonemeFont>
                            [mã'ɲĩɲʊ / mã'ɲĩɲa]
                        </PhonemeFont>
                        <SpanishText>
                            Panita
                        </SpanishText>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>


                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Ah! Tá!
                        </NormalText>
                        <PhonemeFont>
                            ['a! 'ta]
                        </PhonemeFont>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>
                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Caramba
                        </NormalText>
                        <PhonemeFont>
                            [ka'ɾãba]
                        </PhonemeFont>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>
                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Eita!
                        </NormalText>
                        <PhonemeFont>
                            ['ejta]
                        </PhonemeFont>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>
                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Hen / Hen-hen
                        </NormalText>
                        <PhonemeFont>
                            ['ẽj / 'ẽj 'ẽj]
                        </PhonemeFont>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>
                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Hum / Hum…hum
                        </NormalText>
                        <PhonemeFont>
                            ['ũ / ũ ũ]
                        </PhonemeFont>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>
                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Né?
                        </NormalText>
                        <PhonemeFont>
                            ['nɛ?]
                        </PhonemeFont>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>
              
                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Nossa!
                        </NormalText>
                        <PhonemeFont>
                            ['nosa]
                        </PhonemeFont>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>
                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Oi?
                        </NormalText>
                        <PhonemeFont>
                            ['oj?]
                        </PhonemeFont>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>
                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Poxa
                        </NormalText>
                        <PhonemeFont>
                            ['poʃa]
                        </PhonemeFont>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>
                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Pi-or
                        </NormalText>
                        <PhonemeFont>
                            ['pi'oɾ]
                        </PhonemeFont>
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
