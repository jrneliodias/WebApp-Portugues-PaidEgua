
import NavBar from "@/app/components/navigation/NavBar";
import { syllableData } from "@/app/data/actSyllableData";
import { IconBook, IconRefresh, IconVolume } from "@tabler/icons-react";


const shuffleString = (stringArray: string[], answer: string) => {

    while (stringArray.join("") === answer) {
        for (let i = stringArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [stringArray[i], stringArray[j]] = [stringArray[j], stringArray[i]]
        }
    }
    return stringArray
}



export default function Actv3Vowel() {

    const currentroute = "/actv5vowel"; // Set the current route dynamically based on your page

    return (
        <div className="main-layout">
            <div className="title-text-format">
                <span>
                    <b> Atividade 5 - Sílabas</b>
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

                <div className="flex flex-col gap-3 my-5">
                    {syllableData.map((item, wordIndex) => {
                        return (
                            <div className="flex flex-col gap-3 my-4">
                                <div className="flex gap-2" key={wordIndex}>
                                    {shuffleString(item.syllable, item.answer).map((syllables, syllableIndex) =>
                                    (
                                        <div key={syllableIndex} className=" bg-cardcolor uppercase p-3 rounded-md min-w-[2.1rem]">
                                            {syllables}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex gap-2">
                                    <IconVolume />

                                    <p className="phoneme-text-font text-xl mr-5">
                                        {item.phonemeWord}
                                    </p>

                                    {(Array.from(
                                        { length: item.syllable.length },
                                        (_, index) => (
                                            <div key={index} className="border-b-2 min-w-[1rem]"></div>
                                        )))}
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
            <NavBar currentRoute={currentroute} />
        </div >
    )

}
