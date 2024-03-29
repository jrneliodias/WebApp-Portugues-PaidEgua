
import NavBar from "@/app/components/navigation/NavBar";
import { actVowelSpellLetterData } from "@/app/data/actVowel2Data";
import { IconBook, IconRefresh, IconVolume } from "@tabler/icons-react";


const shuffleString = (string: string) => {
    const stringSplit = string.split("");
    while (stringSplit.join("") === string) {
        for (let i = stringSplit.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [stringSplit[i], stringSplit[j]] = [stringSplit[j], stringSplit[i]]
        }
    }
    return stringSplit.join("");
}



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
                                    <div className="flex gap-2" key={wordIndex}>
                                        {shuffleString(item.portWord).split("").map((letter, letterIndex) =>
                                        (
                                            <div key={letterIndex} className=" bg-cardcolor uppercase p-3 rounded-md min-w-[2.1rem]">
                                                {letter}
                                            </div>
                                        ))}
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
