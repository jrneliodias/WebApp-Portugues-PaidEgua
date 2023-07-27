
import ActTextInput from "@/app/components/activities/actinput";
import NormalText from "@/app/components/basics/normaltext";
import TextDiv from "@/app/components/basics/text";
import NavBar from "@/app/components/navigation/NavBar";
import { IconBook, IconKeyboard, IconRefresh, IconVolume } from "@tabler/icons-react";
import imgSource from "@/app/images/acaiTigela.png"
import Image from "next/image";


const figures = Array(7).fill(imgSource);

const phrases =
        ["A - A primeira pergunta que fazemos quando queremos identificar uma pessoa que não conhecemos.",
        "B - O cumprimento que utilizamos quando vamos dormir",
        "C - A expressão que geralmente usamos quando nos apresentamos a alguém.",
        "D - A expressão de agradecimento a alguém.",
        "E - A expressão que dizemos quando nos despedimos das pessoas.",
        "F - A expressão que usamos para saber sobre o estado de ânimo da pessoa.",
        "G - O cumprimento que utilizamos ao amanhecer."]

export default function Tema2Actv3() {

    const currentRoute = "/tema2actv3"; // Set the current route dynamically based on your page

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
                        A atividade a seguir está relacionada às cuias (totuma) de açaí. Em cada uma delas, há expressões de cumprimento correspondentes a uma das situações de comunicação indicada. Escolhe uma das cuias e arrasta a expressão para a frase adequada a cada contexto.
                    </NormalText>

                </TextDiv>

                <div className="relative w-full grid grid-cols-2 gap-5">

                    {figures.map((figure, index) =>
                        <div key={index} className="flex justify-center">
                            <Image
                                src={figure}
                                width={80}
                                height={80}
                                alt={'Cuias de Açaí'}
                                priority={true}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                            />
                        </div>
                    )}

                </div>


                {phrases.map((phrase, index) => {
                    return (
                        <ActTextInput key={index}> {phrase}</ActTextInput>
                    )
                })}

            </div>
            <NavBar currentRoute={currentRoute} />
        </div>
    )

}
