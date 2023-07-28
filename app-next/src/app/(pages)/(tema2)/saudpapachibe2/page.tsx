
import NormalText from "@/app/components/basics/normaltext";
import SpanishText, { PhonemeFont } from "@/app/components/basics/spanishtext";
import TextDiv from "@/app/components/basics/text";
import LightColorCard from "@/app/components/cards/card";
import NavBar from "@/app/components/navigation/NavBar";
import { IconBook, IconRefresh, IconVolume } from "@tabler/icons-react";


export default function SaudPapaChibe2() {

    const currentRoute = "/saudpapachibe2"; // Set the current route dynamically based on your page

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
                        Cumprimenta as pessoas com um simples:
                    </NormalText>
                    <SpanishText>
                        Saludamos a la gente con un simple:
                    </SpanishText>
                </TextDiv>


                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Oi!
                        </NormalText>
                        <PhonemeFont>
                            ['oj]
                        </PhonemeFont>
                        <SpanishText>
                            ¡Hola!
                        </SpanishText>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>

                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Quanto tempo?
                        </NormalText>
                        <PhonemeFont>
                            ['kwãtʊ 'tẽpʊ?]
                        </PhonemeFont>
                        <SpanishText>
                            ¿Tanto tiempo?
                        </SpanishText>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>

                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            E aí, mano?
                        </NormalText>
                        <PhonemeFont>
                            ['I a'i 'mãnʊ?]
                        </PhonemeFont>
                        <SpanishText>
                            ¿Y ahí mi Pana?
                        </SpanishText>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>


                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            O que tens feito?
                        </NormalText>
                        <PhonemeFont>
                            ['ʊ 'kI 'tẽjʃ 'fejtʊ?]
                        </PhonemeFont>
                        <SpanishText>
                            ¿En qué andas?
                        </SpanishText>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>

                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Como estão as coisas?
                        </NormalText>
                        <PhonemeFont>
                            ['kõmʊ Iʃ'tãw 'ajʃ 'kojzajʃ?]
                        </PhonemeFont>
                        <SpanishText>
                            ¿Cómo va todo?
                        </SpanishText>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>

                <TextDiv>
                    <NormalText>
                        Responde dizendo:
                    </NormalText>
                    <SpanishText>
                        Responde diciendo:
                    </SpanishText>
                </TextDiv>
                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Tô bem
                        </NormalText>
                        <PhonemeFont>
                            ['to 'bẽj]
                        </PhonemeFont>
                        <SpanishText>
                            Estoy bien
                        </SpanishText>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>

                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Não tô bem
                        </NormalText>
                        <PhonemeFont>
                            ['nãw 'to 'bẽj]
                        </PhonemeFont>
                        <SpanishText>
                            No estoy bien / No me siento bien
                        </SpanishText>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>

                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Tá devagar
                        </NormalText>
                        <PhonemeFont>
                            ['ta dʒiva'gaɾ]
                        </PhonemeFont>
                        <SpanishText>
                            Andando, ahí va
                        </SpanishText>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>

                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Vou indo
                        </NormalText>
                        <PhonemeFont>
                            ['vow 'ĩdʊ]
                        </PhonemeFont>
                        <SpanishText>
                            Voy llevándola
                        </SpanishText>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>

                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Tô mais ou menos
                        </NormalText>
                        <PhonemeFont>
                            ['to 'majʃzow 'mẽnʊʃ]
                        </PhonemeFont>
                        <SpanishText>
                            Más o menos
                        </SpanishText>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>

                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Gostei de te conhecer
                        </NormalText>
                        <PhonemeFont>
                            [goʃ'tej dʒI 'tʃI kõɲe'seɾ]
                        </PhonemeFont>
                        <SpanishText>
                            Me gustó conocerte
                        </SpanishText>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>

                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Pois não
                        </NormalText>
                        <PhonemeFont>
                            ['pojʃ 'nãw]
                        </PhonemeFont>
                        <SpanishText>
                            ¡Cómo no!
                        </SpanishText>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>

                <TextDiv>
                    <NormalText>
                        Despede-se falando:
                    </NormalText>
                    <SpanishText>
                        Responde diciendo:
                    </SpanishText>
                </TextDiv>

                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Já mé vu
                        </NormalText>
                        <PhonemeFont>
                            ['ʒa 'me 'vu]
                        </PhonemeFont>
                        <SpanishText>
                            Ya me voy
                        </SpanishText>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>

                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Já tô indo
                        </NormalText>
                        <PhonemeFont>
                            ['ʒa 'to 'ĩdʊ]
                        </PhonemeFont>
                        <SpanishText>
                            Ya me voy
                        </SpanishText>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>

                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Bora logo
                        </NormalText>
                        <PhonemeFont>
                            ['bɔɾa 'lɔgʊ]
                        </PhonemeFont>
                        <SpanishText>
                            Vamos
                        </SpanishText>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>

                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Borimbora
                        </NormalText>
                        <PhonemeFont>
                            [bɔɾĩ'bɔɾa]
                        </PhonemeFont>
                        <SpanishText>
                            Vamos
                        </SpanishText>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>

                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Fui!
                        </NormalText>
                        <PhonemeFont>
                            [fwi]
                        </PhonemeFont>
                        <SpanishText>
                            Me voy
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
