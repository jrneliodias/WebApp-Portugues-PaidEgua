import { IconKeyboard, IconBook, IconVolume, IconRefresh } from "@tabler/icons-react"
import NavBar from "@/app/components/NavBar";


export default function AboutApp3() {

    const currentRoute = "/aboutapp3"; // Set the current route dynamically based on your page

    return (
        <div className="flex flex-col overflow-y-auto justify-start">
            <div className="title-text-format">
                <span>
                    <b> O que é o PT-BR Pai D&#39;Égua? </b>
                </span>
                <span>
                    <i> ¿Qué es el Portugués Pai D&#39;Égua? </i>
                </span>
            </div>
            <div className=" flex flex-col m-5 gap-5">
                <div className="grid grid-cols-[1fr_6fr] p-2">
                    <div className="row-span-2 place-self-center bg-[--background-nav-app] p-2 rounded-full m-2 ">
                        <IconBook size={30} />
                    </div>
                    <div className="normal-text-font">
                        <span>
                            Ao aparecer esse símbolo deves LER.
                        </span>
                    </div>
                    <div className="span-text-font flex flex-wrap gap-1 ">
                        <span>
                            Cuando aparezca el ícono debes LEER.
                        </span>
                    </div>
                </div>
                <div className="grid grid-cols-[1fr_6fr] p-2">
                    <div className="row-span-2 place-self-center bg-[--background-nav-app] p-2 rounded-full m-2 ">
                        <IconVolume size={30} />
                    </div>

                    <div className="flex normal-text-font gap-1">
                        <span>
                            Ao aparecer o símbolo deves OUVIR.
                        </span>

                    </div>
                        <div className="span-text-font ">
                            <span>
                                Cuando aparezca el ícono
                            </span>
                        </div>
                </div>
                <div className="grid grid-cols-[1fr_6fr] p-2">
                    <div className="row-span-2 place-self-center bg-[--background-nav-app] p-2 rounded-full m-2 ">
                        <IconRefresh size={30} />
                    </div>

                    <div className="flex normal-text-font gap-1">
                        <span>
                        Ao aparecer o símbolo deves REPETIR.
                        </span>

                    </div>
                        <div className="span-text-font ">
                            <span>
                                Cuando aparezca el ícono debes REPETIR.
                            </span>
                        </div>
                </div>
                <div className="grid grid-cols-[1fr_6fr] p-2">
                    <div className="row-span-2 place-self-center bg-[--background-nav-app] p-2 rounded-full m-2 ">
                        <IconKeyboard size={30} />
                    </div>

                    <div className="flex normal-text-font gap-1">
                        <span>
                        Ao aparecer o símbolo deves DIGITAR.
                        </span>

                    </div>
                        <div className="span-text-font ">
                            <span>
                                Cuando aparezca el ícono debes DIGITAR.
                            </span>
                        </div>
                </div>
              

            </div>

            <NavBar currentRoute={currentRoute} />
        </div>
    )

}
