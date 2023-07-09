
import NavBar from "@/app/components/navigation/NavBar";
import { actVowelData } from "@/app/data/actVowelData ";
import { IconBook, IconRefresh, IconVolume } from "@tabler/icons-react";


export default function Actv1Vowel() {

    const currentroute = "/actv1vowel"; // Set the current route dynamically based on your page

    return (
        <div className="main-layout">
            <div className="title-text-format">
                <span>
                    <b> Atividade 1 - Vogais</b>
                </span>
                <div className="flex gap-4">
                    <IconBook />
                    <IconVolume />
                    <IconRefresh />
                </div>

            </div>
            <div className="body-text-layout">
                <div>
                    <div className="normal-text-font">
                        Em relação às vogais do português, escuta o áudio com atenção e arrasta as palavras que correspondem aos seus respectivos sons.
                    </div>
                </div>

                <div className="flex justify-around">
                    <div className="phoneme-text-font border border-gray-400 text-xl font-black p-5 rounded-3xl">
                        [e]
                    </div>
                    <div className="phoneme-text-font border border-gray-400 text-xl font-black p-5 rounded-3xl">
                        [ɛ]
                    </div>
                    <div className="phoneme-text-font border border-gray-400 text-xl font-black p-5 rounded-3xl">
                        [i]
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-5 p-5 mx-auto">

                    {actVowelData.map((item, index) => (
                        <div className=" flex flex-col bg-[--bg-card-color] items-center p-2 rounded-3xl max-w-[120px]">
                            <span className="font-black">
                            {item.portWord}
                            </span>
                            <span className="span-text-font">
                            {item.spanWord}
                            </span>
                        </div>
                    ))}

                </div>





            </div>


            <NavBar currentRoute={currentroute} />
        </div>
    )

}
