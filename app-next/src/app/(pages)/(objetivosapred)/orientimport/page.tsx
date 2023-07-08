import { IconKeyboard, IconBook, IconVolume, IconRefresh } from "@tabler/icons-react"
import NavBar from "@/app/components/NavBar";


export default function AboutApp3() {

    const currentRoute = "/orientimport"; // Set the current route dynamically based on your page
    const gridFormat = "grid grid-cols-[1fr_6fr] p-2 gap-1"
    const iconformat = "row-span-2 place-self-center bg-[--background-nav-app] p-2 rounded-full m-2 "

    return (
        <div className="main-layout">
            <div className="title-text-format">
                <span>
                    <b> Orientações Importantes </b>
                </span>
                <span>
                    <i> </i>
                </span>
            </div>
            <div className="grid m-5 gap-5 justify-center mb-20">
                <div className={gridFormat}>
                    <div className={iconformat}>
                        <IconBook size={30} />
                    </div>
                    <div className="normal-text-font">
                        <span>
                        Ler todas as palavras, frases em português e, se tiveres dúvida, ler em espanhol.
                        </span>
                    </div>
                    <div className="span-text-font flex flex-wrap gap-1 ">
                        <span>
                        Leer todas las palabras, frases en portugués y, si hay duda, lee en español.
                        </span>
                    </div>
                </div>
                <div className={gridFormat}>
                    <div className={iconformat}>
                        <IconVolume size={30} />
                    </div>

                    <div className="flex normal-text-font gap-1">
                        <span>
                        Ouvir todos os áudios acompanhados das respectivas transcrições fonéticas.
                        </span>

                    </div>
                        <div className="span-text-font ">
                            <span>
                                Escuchar todos los audios acompañados de las respectivas transcripciones fonéticas.
                            </span>
                        </div>
                </div>
                <div className={gridFormat}>
                    <div className={iconformat}>
                        <IconRefresh size={30} />
                    </div>

                    <div className="flex normal-text-font gap-1">
                        <span>
                        Repetir o áudio quantas vezes forem necessárias, para assimilares e compreenderes o que foi dito.
                        </span>

                    </div>
                        <div className="span-text-font ">
                            <span>
                                Cuando aparezca el ícono debes REPETIR.
                            </span>
                        </div>
                </div>
                
              

            </div>

            <NavBar currentRoute={currentRoute} />
        </div>
    )

}
