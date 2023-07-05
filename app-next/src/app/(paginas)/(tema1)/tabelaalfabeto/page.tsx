
import NavBar from "@/app/components/NavBar";
import TableLetter from "@/app/components/tableComponent/tablecell";
import { IconBook, IconRefresh, IconVolume } from "@tabler/icons-react";
import { alphabetData } from "@/app/data/alphabeticLettersData"

const alphabeticPhonema = alphabetData
export default function ListaPaidEgua() {

    const currentRoute = "/tabelaalfabeto"; // Set the current route dynamically based on your page

    return (
        <div className="flex flex-col overflow-y-auto w-fullc">
            <div className="title-text-format ">
                <span>
                    <b>Alfabeto Fonético do Português </b>
                </span>
                <div className="flex gap-4">
                    <IconBook />
                    <IconVolume />
                    <IconRefresh />
                </div>

            </div>


            <div className="m-5 flex flex-col gap-3 ">

                {alphabeticPhonema.map((item, index) => (

                    <TableLetter key={index}
                        letter={item.letter}
                        phonemeSpan={item.phonemeSpan}
                        phonemePort={item.phonemePort?item.phonemePort:item.phonemeSpan}
                        color={item.color} />
                ))}

            </div>

            <NavBar currentRoute={currentRoute} />
        </div>
    )

}

{/* <div className="grid grid-cols-2  gap-1">
                    <div className="flex flex-col w-1/2">
                        <div className=" bg-[#6548a0]  p-2 z-2 rounded-tl-3xl">
                            Letra do Espanhol
                        </div>
                        <div className="bg-blue-500  text-[50px] flex justify-center">
                            A
                        </div>
                        <div className="bg-[#6548a0]  p-2 w-full flex flex-col flex-1">
                            <div>
                                Fonema do Espanhol
                            </div>
                            <span>
                                /a/ → [a]
                            </span>

                        </div>
                    </div>

                    <div className="w-1/2">
                        <div className="bg-[#6548a0]  p-2">
                            Letra do Português
                        </div>
                        <div className="bg-blue-500  text-[50px] flex justify-center">
                            A
                        </div>
                        <div className="bg-[#6548a0]  p-2 text-center flex justify-center flex-col">
                            <IconVolume />
                            <div>
                                Pronúncia do Português
                            </div>
                            <span>
                                /a/ → [a]
                            </span>
                        </div>
                    </div>
                </div> */}

// &apos; apostrófe (')