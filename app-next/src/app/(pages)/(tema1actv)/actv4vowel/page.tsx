
import NormalText from "@/app/components/basics/normaltext";
import SpanishText, { PhonemeFont } from "@/app/components/basics/spanishtext";
import NavBar from "@/app/components/navigation/NavBar";
import { actWordsData } from "@/app/data/actWordsData";
import { IconBook, IconRefresh, IconVolume } from "@tabler/icons-react";



export default function Actv4Vowel() {

    const currentroute = "/actv4vowel"; // Set the current route dynamically based on your page

    return (
        <div className="main-layout">
            <div className="title-text-format">
                <span>
                    <b> Atividade 4 - Palavras</b>
                </span>
                <div className="flex gap-4">
                    <IconBook />
                    <IconVolume />
                    <IconRefresh />
                </div>

            </div>
            <div className="body-text-layout customClass">
                <div>
                    <div className="normal-text-font">
                        Escuta o áudio com atenção e organiza a sequência das letras que formam a palavra indicada. Ao clicar em cada letra, tu poderás ouvir sua respectiva pronúncia.
                    </div>
                </div>
                <div className="grid gap-5">
                    <div className="flex flex-col gap-4">
                        {actWordsData.map((item, wordIndex) => {
                            return (
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="grid grid-cols-[1fr_3fr]">
                                        <input className="row bg-transparent border rounded-full w-10 p-1 text-center focus:outline-none hover:bg-cardcolor row-span-2 shrink" />
                                        <NormalText>
                                            {item.portWord}
                                        </NormalText>
                                        <SpanishText>
                                            {item.spanishWord}
                                        </SpanishText>
                                    </div>
                                    <div className="flex justify-between px-4">
                                        <PhonemeFont className="flex items-center">
                                            {item.phonemeWord}
                                        </PhonemeFont>
                                        <div className="border place-self-center p-2 rounded-lg">
                                            <IconVolume />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <NavBar currentRoute={currentroute} />
        </div >
    )

}
