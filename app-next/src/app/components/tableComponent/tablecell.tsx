import { IconVolume } from "@tabler/icons-react";
interface alphabeticTableProps {
    letter: string,
    phonemeSpan: string,
    phonemePort: string,
    color?: string,

}

export default function TableLetter(props: alphabeticTableProps) {


    return (
        <div className="flex flex-col">
            <div className="flex">
                <div className="divide-collapse border-2 flex-1 bg-[#6548a0]  p-2  rounded-tl-[16px] justify-center flex items-centers border-r border-b font-bold">
                    Letra do Espanhol
                </div>
                <div className="divide-collapse border-2 flex-1 bg-[#6548a0] p-2 rounded-tr-[16px] flex justify-center items-center  border-l border-b font-bold">
                    Letra do Português
                </div>

            </div>

            <div className="flex border-collapse">
                <div className={`border-2 flex-1 bg-[#8564b4]  text-[50px] flex justify-center border-r border-y font-black  ${props.color}`}>
                    {props.letter}
                </div>

                <div className={`border-2 flex-1 bg-[#8564b4]  text-[50px] flex justify-center items-center border-l border-y font-black ${props.color}`}>
                    {props.letter ==="Ñ" ? "-": props.letter}
                </div>


            </div>
            <div className="flex border-collapse">
                <div className="border-2 flex-1 bg-[#6548a0]  p-2 flex flex-col justify-end items-center rounded-bl-[16px] border-r border-t ">
                    
                    <div className="font-bold flex text-center">
                        Fonema do <br /> Espanhol
                    </div>
                    <div>
                        {props.phonemeSpan}
                    </div>

                </div>
                <div className="border-2 flex-1 bg-[#6548a0]  p-2 text-center flex justify-center flex-col items-center rounded-br-[16px] border-l border-t">
                    <IconVolume />
                    <div className="font-bold">
                        Pronúncia do Português
                    </div>
                    <span>
                        {props.phonemePort}
                    </span>
                </div>

            </div>
        </div>
    );
}