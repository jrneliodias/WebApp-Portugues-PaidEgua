
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

                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Boa tarde!
                        </NormalText>
                        <PhonemeFont>
                            ['boa 'taɾdʒI]
                        </PhonemeFont>
                        <SpanishText>
                            ¡Buenas tardes!
                        </SpanishText>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>

                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Boa noite!
                        </NormalText>
                        <PhonemeFont>
                            ['boa 'nojtʃI]
                        </PhonemeFont>
                        <SpanishText>
                            ¡Buenas noches!
                        </SpanishText>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>

                <TextDiv>
                    <NormalText>
                        Perguntamos:
                    </NormalText>
                    <SpanishText>
                        Preguntamos:
                    </SpanishText>
                </TextDiv>

                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Como te chamas?
                        </NormalText>
                        <PhonemeFont>
                            ['kõmu 'tʃI 'ʃãmaʃ?]
                        </PhonemeFont>
                        <SpanishText>
                            ¿Cómo te llamas?
                        </SpanishText>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>

                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Qual é teu nome?
                        </NormalText>
                        <PhonemeFont>
                            ['kwaw 'ɛ 'tew 'nõmI?]
                        </PhonemeFont>
                        <SpanishText>
                            ¿Cuál es tu nombre
                        </SpanishText>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>

                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Como estás?
                        </NormalText>
                        <PhonemeFont>
                            ['kõmʊ Iʃ'tajʃ?]
                        </PhonemeFont>
                        <SpanishText>
                            ¿Cómo estás?
                        </SpanishText>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>

                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Como tens passado?
                        </NormalText>
                        <PhonemeFont>
                            ['kõmʊ 'tẽjʃ pa'sadʊ?]
                        </PhonemeFont>
                        <SpanishText>
                            ¿Cómo lo has pasado?
                        </SpanishText>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>

                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Tudo bem?
                        </NormalText>
                        <PhonemeFont>
                            ['tudʊ 'bẽj?]
                        </PhonemeFont>
                        <SpanishText>
                            ¿Todo bien?
                        </SpanishText>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>

                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Qué tal?
                        </NormalText>
                        <PhonemeFont>
                            ['kI 'taw?]
                        </PhonemeFont>
                        <SpanishText>
                            ¿Qué tal?
                        </SpanishText>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>

                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Onde moras?
                        </NormalText>
                        <PhonemeFont>
                            ['õdʒI 'mɔɾajʃ?]
                        </PhonemeFont>
                        <SpanishText>
                            ¿Dónde vives?
                        </SpanishText>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>

                <TextDiv>
                    <NormalText>
                        Respondemos:
                    </NormalText>
                    <SpanishText>
                        Contestamos:
                    </SpanishText>
                </TextDiv>

                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Me chamo...
                        </NormalText>
                        <PhonemeFont>
                            ['mI 'ʃãmu]
                        </PhonemeFont>
                        <SpanishText>
                            Me llamo...
                        </SpanishText>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>

                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Meu nome é...
                        </NormalText>
                        <PhonemeFont>
                            ['mew 'nõmI 'ɛ]
                        </PhonemeFont>
                        <SpanishText>
                            Mi nombre es...
                        </SpanishText>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>

                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Muito prazer
                        </NormalText>
                        <PhonemeFont>
                            ['muĩtʊ pɾa'zeɾ]
                        </PhonemeFont>
                        <SpanishText>
                            Mucho gusto
                        </SpanishText>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>

                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Muito obrigado(a)
                        </NormalText>
                        <PhonemeFont>
                            ['muĩtʊ obɾi'gadʊ / obɾi'gada]
                        </PhonemeFont>
                        <SpanishText>
                            Muchas gracias
                        </SpanishText>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>

                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Moro em...
                        </NormalText>
                        <PhonemeFont>
                            ['mɔɾʊ 'ẽj]
                        </PhonemeFont>
                        <SpanishText>
                            ¿Todo bien?
                        </SpanishText>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>

                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Esta é minha amiga
                        </NormalText>
                        <PhonemeFont>
                            ['ɛʃta 'ɛ 'mĩɲa a'miga]
                        </PhonemeFont>
                        <SpanishText>
                            Esta es mi amiga
                        </SpanishText>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>

                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Este é meu amigo
                        </NormalText>
                        <PhonemeFont>
                            ['eʃtʃI 'ɛ 'mew a'migu]
                        </PhonemeFont>
                        <SpanishText>
                            Este es mi amigo
                            Vivo en...
                        </SpanishText>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>

                <TextDiv>
                    <NormalText>
                        Nos despedimos dizendo:
                    </NormalText>
                    <SpanishText>
                        Nos despedimos hablando:
                    </SpanishText>
                </TextDiv>

                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Tchau
                        </NormalText>
                        <PhonemeFont>
                            ['tʃaw]
                        </PhonemeFont>
                        <SpanishText>
                            Chao
                        </SpanishText>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>

                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Até logo
                        </NormalText>
                        <PhonemeFont>
                            [a'tɛ 'lɔgʊ]
                        </PhonemeFont>
                        <SpanishText>
                            Hasta luego
                            Hasta la vista
                        </SpanishText>
                    </div>
                    <div className="rounded-xl border p-3">
                        <IconVolume size={30} />
                    </div>
                </LightColorCard>

                <LightColorCard>
                    <div className="flex gap-2 flex-col">
                        <NormalText className="font-bold">
                            Até amanhã
                        </NormalText>
                        <PhonemeFont>
                            [a'tɛ amã'ɲã]
                        </PhonemeFont>
                        <SpanishText>
                            Hasta mañana
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
