
import NavBar from "@/app/components/navigation/NavBar";


export default function AboutApp2() {

    const currentRoute = "/aboutapp2"; // Set the current route dynamically based on your page

    return (
        <div className="main-layout ">
            <div className="title-text-format">
                <span>
                    <b> O que é o PT-BR Pai D&#39;Égua? </b>
                </span>
                <span>
                    <i> ¿Qué es el Portugués Pai D&#39;Égua? </i>
                </span>
            </div>
            <div className=" body-text-layout">
                <div>
                    <div className="normal-text-font">
                        Assim, de agora em diante, tu vais perceber que
                        toda nossa conversa será feita de duas
                        maneiras:
                    </div>
                    <div className="span-text-font ">
                        Así, a partir de ahora, tú vas a percibir que toda nuestra conversa será hecha de dos formas:
                    </div>
                </div>

                <div>
                    <div className="normal-text-font">
                        Irás ouvir e ler em língua portuguesa os temas
                        apresentados neste Web App e
                    </div>

                    <div className="span-text-font ">
                        Vas a escuchar y leer en lengua portuguesa los temas presentados en este Web App y
                    </div>
                </div>
                <div>
                    <div className="normal-text-font">
                        Poderás, em caso dúvida, ler em Espanhol o
                        significado de uma palavra e/ou expressão.
                    </div>
                    <div className="span-text-font">

                        ¿Podrás, en caso de duda, leer en español el significado de una palabra y/o expresión.
                        Agora, observa os

                    </div>
                </div>

                <div>
                    <div className="normal-text-font">
                        Agora, observa os símbolos que serão utilizados
                        neste Web App. Toda vez que um determinado
                        desenho aparece, tu terás que executar uma
                        ação específica.
                    </div>
                    <div className="span-text-font">

                        Ahora, observa los símbolos que serán utilizados en este Web App. Toda vez que un determinado dibujo surgir, tendrás que ejecutar una acción específica.

                    </div>
                </div>
            </div>

            <NavBar currentRoute={currentRoute} />
        </div>
    )

}
