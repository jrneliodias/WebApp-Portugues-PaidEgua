import { IconKeyboard, IconBook, IconVolume, IconRefresh } from "@tabler/icons-react"
import NavBar from "@/app/components/NavBar";


export default function AboutApp3() {

    const currentRoute = "/aboutapp3"; // Set the current route dynamically based on your page

    return (
        <div className="flex flex-col overflow-y-auto justify-start">
            <div className="flex flex-col flex-wrap  p-2 m-2 ml-5 mr-5 rounded-full items-center border-2 bg-[#8055bd] ">
                <span>
                    <b> O que é o PT-BR Pai D&#39;Égua? </b>
                </span>
                <span>
                    <i> ¿Qué es el Portugués Pai D&#39;Égua? </i>
                </span>
            </div>
            <div className=" flex flex-col m-5 gap-5">
                <div>
                    <div className="flex text-justify gap-1">
                        <span>
                            Ao aparecer o símbolo
                        </span>
                        <IconBook />
                        <span>deves LER.</span>
                    </div>
                    <div className="span-text-font flex gap-1 ">
                        <span>
                            Cuando aparezca el ícono
                        </span>
                        <IconBook />
                        <span>debes LEER.</span>
                    </div>
                </div>
                <div>
                    <div className="flex text-justify gap-1">
                        <span>
                            Ao aparecer o símbolo
                        </span>
                        <IconVolume />
                        <span>deves OUVIR.</span>
                    </div>
                    <div className="span-text-font flex gap-1 ">
                        <span>
                            Cuando aparezca el ícono
                        </span>
                        <IconVolume />
                        <span>debes ESCUCHAR.</span>
                    </div>
                </div>
                <div>
                    <div className="flex text-justify gap-1">
                        <span>
                            Ao aparecer o símbolo
                        </span>
                        <IconRefresh />
                        <span>deves REPETIR.</span>
                    </div>
                    <div className="span-text-font flex gap-1 ">
                        <span>
                            Cuando aparezca el ícono
                        </span>
                        <IconRefresh />
                        <span>debes REPETIR.</span>
                    </div>
                </div>
                <div>
                    <div className="flex text-justify gap-1">
                        <span>
                            Ao aparecer o símbolo
                        </span>
                        <IconKeyboard />
                        <span>deves DIGITAR.</span>
                    </div>
                    <div className="span-text-font flex gap-1 ">
                        <span>
                            Cuando aparezca el ícono
                        </span>
                        <IconKeyboard />
                        <span>debes DIGITAR.</span>
                    </div>
                </div>

            </div>

            <NavBar currentRoute={currentRoute} />
        </div>
    )

}
