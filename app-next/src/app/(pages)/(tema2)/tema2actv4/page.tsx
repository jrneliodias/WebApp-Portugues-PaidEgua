
import ActTextInput from "@/app/components/activities/actinput";
import NormalText from "@/app/components/basics/normaltext";
import TextDiv from "@/app/components/basics/text";
import NavBar from "@/app/components/navigation/NavBar";
import { IconBook, IconKeyboard, IconRefresh, IconVolume } from "@tabler/icons-react";
import { WordCard } from "@/app/components/cards/card";
import SpanishText, { PhonemeFont } from "@/app/components/basics/spanishtext";
import ImageCarousel from "@/app/components/activities/actimage";



const greetings = ["De onde tu és", "Seja bem-vinda", "Como estás?", "Já tô indo", "Oi", "Que bom!"];

const phrases =
    ["A - A primeira pergunta que fazemos quando queremos identificar uma pessoa que não conhecemos.",
        "B - O cumprimento que utilizamos quando vamos dormir",
        "C - A expressão que geralmente usamos quando nos apresentamos a alguém.",
        "D - A expressão de agradecimento a alguém.",
        "E - A expressão que dizemos quando nos despedimos das pessoas.",
        "F - A expressão que usamos para saber sobre o estado de ânimo da pessoa.",
        "G - O cumprimento que utilizamos ao amanhecer."]

export default function Tema2Actv4() {

    const currentRoute = "/tema2actv4"; // Set the current route dynamically based on your page

    return (
        <div className="main-layout ">
            <div className="title-text-format ">
                <span>
                    <b> Tema 2 - Atividade 3</b>
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
                        Jogar pedra, pau ou galho na mangueira para comer manga com sal é um costume muito paraense. Pensando nessa traquinagem, clica no menino e a cada manga que cair no chão irá aparecer uma forma de cumprimento, com a qual tu vais completar o diálogo, de acordo com a situação comunicativa.
                    </NormalText>
                </TextDiv>

                <div className="w-full grid grid-cols-2 gap-5 my-4">
                    <div className="flex col-span-2">
                    <ImageCarousel  />
                  
                    </div>
                    {greetings.map((greeting, index) =>

                        <WordCard key={index} className="flex justify-center"> {greeting} </WordCard>

                    )}

                </div>

                <TextDiv className="flex flex-col gap-3">
                    <NormalText>
                        Texto II: Gilberto apresenta Pilar a Rogério.
                    </NormalText>
                    <NormalText>
                        <div>
                            Gilberto:
                        </div>
                        __, Rogério. Vou te apresentar minha amiga Pilar.
                        <PhonemeFont>
                            [ oj, xo'ʒeɾjʊ. 'vow 'tʃI apɾɛzẽtaɾ 'mĩɲa a'miga pi'laɾ]
                        </PhonemeFont>
                    </NormalText>
                    <NormalText>
                        <div>
                            Rogério:
                        </div>
                        ___, Pilar, _____________?
                        <PhonemeFont>
                            [oj, pi'laɾ , 'kõmʊ Iʃ'tajʃ?]
                        </PhonemeFont>
                    </NormalText>
                    <SpanishText>
                        <div className="font-sans text-white not-italic text-lg">
                            Pilar:
                        </div>
                        Muy bien, gracias. ¿Me entiendes?
                    </SpanishText>
                    <NormalText>
                        <div>
                            Rogério:
                        </div>
                        ___, Pilar, _____________?
                    </NormalText>
                    <NormalText>
                        <div>
                            Rogério:
                        </div>
                        Sim. E tu, consegues compreende o que falo?
                        <PhonemeFont>
                            [sĩ. ' I 'tu, k õ'sɛguIʃ k õpɾiẽdeɾ ' ʊ 'kI
                            'falʊ?]
                        </PhonemeFont>
                    </NormalText>

                    <SpanishText>
                        <div className="font-sans text-white not-italic text-lg">
                            Pilar:
                        </div>
                        Muchas gracias.
                        ¿Tú también eres parense, como Gilberto?
                    </SpanishText>
                    <TextDiv>
                        <div>
                            Rogério:
                        </div>
                        Sim, nasci em Santa Izabel, mas moro
                        aqui em Belém.
                        <PhonemeFont>
                            ['sĩ, na'si 'ẽj 'sãta iza'bɛw, 'majʃ 'moɾʊ
                            a'kI 'ẽj be'lẽj]
                        </PhonemeFont>
                    </TextDiv>
                    <TextDiv>
                        <div>
                            Gilberto:
                        </div>
                        Pilar, eu e o Rogério trabalhamos juntos na mesma escola.

                        <PhonemeFont>
                            [pilaɾ, 'ew 'I 'ʊ xo'ʒɛɾjʊ tɾaba'ʎamʊʃ 'ʒũtʊʃ ' na 'mẽjʃma Iʃkɔla].
                        </PhonemeFont>
                    </TextDiv>
                    <SpanishText>
                        <div className="font-sans text-white not-italic text-lg">
                            Pilar:
                        </div>
                        ¡Qué bueno!

                    </SpanishText>
                    <TextDiv>
                        <div>
                            Rogério:
                        </div>
                        _________________, Pilar?
                        <PhonemeFont>
                            ['dʒI 'õdʒI 'tu 'ɛjʃ , pi'laɾ?]
                        </PhonemeFont>
                    </TextDiv>
                    <SpanishText>
                        <div className="font-sans text-white not-italic text-lg">
                            Pilar:
                        </div>
                        Soy de Venezuela.
                    </SpanishText>

                    <TextDiv>
                        <div>
                            Rogério:
                        </div>
                        _________! Quanto tempo tu estás em Belém?
                        <PhonemeFont>
                            [ 'kI 'bõ! ! 'kwãtʊ 'tẽpʊ 'tu Iʃ'tajʃ 'ẽj bɛ'lẽj?]
                        </PhonemeFont>
                    </TextDiv>


                    <SpanishText>
                        <div className="font-sans text-white not-italic text-lg">
                            Pilar:
                        </div>
                        Muchas gracias.
                    </SpanishText>
                    <TextDiv>
                        <div>
                            Rogério:
                        </div>
                        Então, ______________ à cidade das Mangueiras.

                        <PhonemeFont>
                            [ẽ'tãw, ' seʒa b ẽj ' vĩda ' a si'dadʒI
                            'dajʃ mã'gejɾaʃ]

                        </PhonemeFont>
                    </TextDiv>

                    <SpanishText>
                        <div className="font-sans text-white not-italic text-lg">
                            Pilar:
                        </div>
                        Muchas gracias.
                    </SpanishText>

                    <TextDiv>
                        <div>
                            Gilberto:
                        </div>
                        Bem, Temos que ir, Pilar.

                        <PhonemeFont>
                            ['bẽj, 'tẽmʊʃ 'kI 'iɾ, pi'laɾ]

                        </PhonemeFont>
                    </TextDiv>


                    <SpanishText>
                        <div className="font-sans text-white not-italic text-lg">
                            Pilar:
                        </div>
                        Sí, Gilberto
                        ¡Hasta luego, Rogério!
                    </SpanishText>


                    <TextDiv>
                        <div>
                            Rogério:
                        </div>
                        E u também __________.

                        <PhonemeFont>
                            ['ew tã'bẽj 'ʒa 'tõ 'ĩdʊ]

                        </PhonemeFont>
                    </TextDiv>



                </TextDiv>



            </div>
            <NavBar currentRoute={currentRoute} />
        </div>
    )

}
