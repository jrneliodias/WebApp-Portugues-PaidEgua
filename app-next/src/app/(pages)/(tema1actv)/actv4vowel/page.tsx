
import NavBar from "@/app/components/navigation/NavBar";
import { actVowelSpellLetterData } from "@/app/data/actVowel2Data";
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
                        {actVowelSpellLetterData.map((item, wordIndex) => {
                            return (
                                <div className="flex flex-col gap-3">
                                    <div className="flex gap-2">
                                        <IconVolume />

                                        <p className="phoneme-text-font text-xl mr-5">
                                            {item.phonemeWord}
                                        </p>

                                        {(Array.from(
                                            { length: item.portWord.length },
                                            (_, index) => (
                                                <div key={index} className="border-b-2 min-w-[1rem]"></div>
                                            )))}
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
