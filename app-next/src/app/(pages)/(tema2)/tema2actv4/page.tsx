
import ActTextInput from "@/app/components/activities/actinput";
import NormalText from "@/app/components/basics/normaltext";
import TextDiv from "@/app/components/basics/text";
import NavBar from "@/app/components/navigation/NavBar";
import { IconBook, IconKeyboard, IconRefresh, IconVolume } from "@tabler/icons-react";
import imgSource from "@/app/images/treeboy1.png"
import Image from "next/image";
import { WordCard } from "@/app/components/cards/card";
import SpanishText, { PhonemeFont } from "@/app/components/basics/spanishtext";



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

                <div className="relative w-full grid grid-cols-2 gap-5 my-4">

                    <Image
                        src={imgSource}
                        width={200}
                        height={200}
                        alt={'Cuias de Açaí'}
                        priority={true}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="col-span-2 object-fit place-self-center"

                    />
                    {greetings.map((greeting, index) =>

                        <WordCard key={index} className="flex justify-center"> {greeting} </WordCard>

                    )}

                </div>

                <TextDiv>
                    <NormalText>
                        Texto II: Gilberto apresenta Pilar a Rogério.
                    </NormalText>
                    <NormalText>
                        Gilberto:
                        __, Rogério. Vou te apresentar minha amiga Pilar.
                    </NormalText>
                    <PhonemeFont>
                        [ oj, xo'ʒeɾjʊ. 'vow 'tʃI apɾɛzẽtaɾ 'mĩɲa a'miga pi'laɾ]
                    </PhonemeFont>
                    <NormalText>
                        Rogerio:
                        ___, Pilar, _____________?
                    </NormalText>
                    <PhonemeFont>
                        [oj, pi'laɾ , 'kõmʊ Iʃ'tajʃ?]
                    </PhonemeFont>
                    <SpanishText>
                        Pilar:
                        Muy bien, gracias. ¿Me entiendes?
                    </SpanishText>
                    <NormalText>
                        Rogerio:
                        ___, Pilar, _____________?
                    </NormalText>
                    Rogério:
                    Sim. E tu, consegues compreende o que
                    falo?
                    [sĩ. ' I 'tu, k õ'sɛguIʃ k õpɾiẽdeɾ ' ʊ 'kI
                    'falʊ?]
                    Pilar: Sí, ya convivo con los brasileños hace tiempo.
                    ¿Tú también eres parense, como Gilberto?
                    Rogério:
                    Sim, nasci em Santa Izabel, mas moro
                    aqui em Belém.
                    ['sĩ, na'si 'ẽj 'sãta iza'bɛw, 'majʃ 'moɾʊ
                    a'kI 'ẽj be'lẽj]
                    Gilberto:
                    Pilar, eu e o Rogério trabalhamos juntos
                    na mesma escola.
                    [pilaɾ, 'ew 'I 'ʊ xo'ʒɛɾjʊ tɾaba'ʎamʊʃ 'ʒũtʊʃ
                    ' na 'mẽjʃma Iʃkɔla].
                    Pilar:
                    ¡Qué bueno!
                    Rogério:
                    _________________, Pilar? ['dʒI 'õdʒI 'tu 'ɛjʃ , pi'laɾ?]
                    Pilar:
                    Soy de Venezuela.
                    Rogério:
                    _________! Quanto tempo tu estás
                    em Belém?
                    [ 'kI 'bõ! ! 'kwãtʊ 'tẽpʊ 'tu Iʃ'tajʃ 'ẽj
                    bɛ'lẽj?]
                    Pilar:
                    Llegué hace poco tiempo, algunas semanas.
                    Rogério:
                    Então, ______________ à cidade
                    das Mangueiras.
                    [ẽ'tãw, ' seʒa b ẽj ' vĩda ' a si'dadʒI
                    'dajʃ mã'gejɾaʃ]
                    Pilar:
                    Muchas gracias.
                    Gilberto:
                    Bem, Temos que ir, Pilar.
                    ['bẽj, 'tẽmʊʃ 'kI 'iɾ, pi'laɾ]
                    Pilar:
                    Sí, Gilberto
                    ¡Hasta luego, Rogerio!
                    Rogério:
                    E u também __________. ['ew tã'bẽj 'ʒa 'tõ 'ĩdʊ]
                </TextDiv>



            </div>
            <NavBar currentRoute={currentRoute} />
        </div>
    )

}
