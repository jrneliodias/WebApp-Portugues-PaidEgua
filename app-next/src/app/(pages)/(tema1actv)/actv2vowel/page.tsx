
import NavBar from "@/app/components/navigation/NavBar";
import { actVowelData2 } from "@/app/data/actVowelData ";
import { IconBook, IconRefresh, IconVolume } from "@tabler/icons-react";


export default function Actv2Vowel() {

    const currentroute = "/actv2vowel"; // Set the current route dynamically based on your page

    return (
        <div className="main-layout">
            <div className="title-text-format">
                <span>
                    <b> Atividade 2 - Vogais</b>
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
                <div className="flex flex-col">
                    <div className="grid grid-cols-3 gap-y-2  p-2 sm:p-5 sm:gap-5">

                        {actVowelData2.map((item, index) => (
                            <div key={index} className=" flex flex-col bg-[--bg-card-color] items-center p-2 rounded-3xl  min-w-[6rem] sm:w-full place-self-center">
                                <span className="font-black">
                                    {item.portWord}
                                </span>
                                <span className="span-text-font">
                                    {item.spanWord}
                                </span>
                                <IconVolume />
                            </div>
                        ))}

                    </div>

                </div>





            </div>


            <NavBar currentRoute={currentroute} />
        </div>
    )

}
