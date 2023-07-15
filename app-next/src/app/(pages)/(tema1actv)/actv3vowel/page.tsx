
import NavBar from "@/app/components/navigation/NavBar";
import { actVowelData2 } from "@/app/data/actVowelData ";
import { IconBook, IconRefresh, IconVolume } from "@tabler/icons-react";


export default function Actv3Vowel() {

    const currentroute = "/actv3vowel"; // Set the current route dynamically based on your page

    return (
        <div className="main-layout">
            <div className="title-text-format">
                <span>
                    <b> Atividade 3 - Vogais</b>
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
                <div className="grid gap-4">
                    <div className="flex gap-2">
                        <IconVolume />
                        <p className="phoneme-text-font">[a'vɔ]</p>
                        <div className="border-b-2 min-w-[1rem]"></div>
                        <div className="border-b-2 min-w-[1rem]"></div>
                        <div className="border-b-2 min-w-[1rem]"></div>
                    </div>
                    <div className="flex gap-3">
                        <div className="bg-cardcolor uppercase p-3 rounded-md"> ó</div>
                        <div className="bg-cardcolor uppercase p-3 rounded-md"> a</div>
                        <div className="bg-cardcolor uppercase p-3 rounded-md"> v</div>
                    </div>
                </div>


                {/* <div className="flex flex-col">
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

                </div> */}





            </div>


            <NavBar currentRoute={currentroute} />
        </div>
    )

}
