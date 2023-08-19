
import NavBar from "@/app/components/navigation/NavBar";
import TableLetter from "@/app/components/tableComponent/tablecell";
import { IconBook, IconRefresh, IconVolume } from "@tabler/icons-react";
import { alphabetData } from "@/app/data/alphabeticLettersData"

const alphabeticPhonema = alphabetData
export default function ListaPaidEgua() {

    const currentRoute = "/tabelaalfabeto"; // Set the current route dynamically based on your page

    return (
        <div className="main-layout lg:max-w-5xl">
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


            <div className="body-text-layout lg:grid lg:grid-cols-2 lg:max-w-5xl">

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
