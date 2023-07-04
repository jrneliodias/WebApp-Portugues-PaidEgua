
import NavBar from "@/app/components/NavBar";
import { IconBook, IconRefresh, IconVolume } from "@tabler/icons-react";

export default function ListaPaidEgua() {

    const currentRoute = "/tabelaalfabeto"; // Set the current route dynamically based on your page

    return (
        <div className="flex flex-col overflow-y-auto ">
            <div className="title-text-format ">
                <span>
                    <b> Tema I - Alfabeto Fonético do Português </b>
                </span>
                <div className="flex gap-4">
                    <IconBook />
                    <IconVolume />
                    <IconRefresh />
                </div>

            </div>


            <div className="m-5 gap-5 ">

                <div className="flex flex-col divide-collapse">
                    <div className="flex">
                        <div className="divide-collapse border-2 flex-1 bg-[#6548a0]  p-2  rounded-tl-[16px] justify-center flex items-centers border-r border-b">
                            Letra do Espanhol
                        </div>
                        <div className="divide-collapse border-2 flex-1 bg-[#6548a0] p-2 rounded-tr-[16px] flex justify-center items-center  border-l border-b">
                            Letra do Português
                        </div>

                    </div>

                    <div className="flex border-collapse">
                        <div className="border-2 flex-1 bg-[#8564b4]  text-[50px] flex justify-center border-r border-y">
                            A
                        </div>

                        <div className="border-2 flex-1 bg-[#8564b4]  text-[50px] flex justify-center items-center border-l border-y">
                            A
                        </div>


                    </div>
                    <div className="flex border-collapse">
                        <div className="border-2 flex-1 bg-[#6548a0]  p-2 flex flex-col justify-center items-center rounded-bl-[16px] border-r border-t">
                            <div className="">
                                Fonema do Espanhol
                            </div>
                            <div>
                                /a/ → [a]
                            </div>

                        </div>
                        <div className="border-2 flex-1 bg-[#6548a0]  p-2 text-center flex justify-center flex-col items-center rounded-br-[16px] border-l border-t">
                            <IconVolume />
                            <div>
                                Pronúncia do Português
                            </div>
                            <span>
                                /a/ → [a]
                            </span>
                        </div>

                    </div>
                </div>



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





            </div>

            <NavBar currentRoute={currentRoute} />
        </div>
    )

}

// &apos; apostrófe (')