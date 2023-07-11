
import NavBar from "@/app/components/navigation/NavBar";
import { IconVolume } from "@tabler/icons-react";


export default function AlfaFoneticaCuriosity() {

    const currentroute = "/alfafoneticocuriosity"; // Set the current route dynamically based on your page

    return (
        <div className="main-layout">
            <div className="title-text-format">
                <span>
                    <b> Tema I - Alfabeto Fonético do Português </b>
                </span>

            </div>
            <div className="body-text-layout">

                <div>
                    <div className="normal-text-font">
                        Dependendo da palavra, as vogais &lt;E&gt; e &lt;O&gt; têm três formas diferentes de pronunciar...
                    </div>
                    <div className="span-text-font">
                        Dependiendo de la palabra las vocales &lt;E&gt; y &lt;O&gt; tienen tres formas diferentes de pronunciar...
                    </div>
                </div>
                <div>
                    <div className="normal-text-font">
                        Podem ser pronunciadas com um som mais fechado [e] / [o], como nas palavras: Ele; bolo.
                    </div>
                    <div className="span-text-font">
                        Pueden ser pronunciadas con un sonido más cerrado [e] / [o], como en las palabras: “Ele”; “bolo”.
                    </div>
                </div>

                <div className="border h-20 w-full">
                    Imagem
                </div>
                <div>
                    <div className="normal-text-font">
                        Podem ser pronunciadas com um som mais aberto [ɛ] / [ɔ] como nas palavras: Ela; bola.
                    </div>
                    <div className="span-text-font">
                        Pueden ser pronunciadas con un sonido más abierto [ɛ] / [ɔ] como en las palabras: “Ela”; “bola”.
                    </div>
                </div>


                <div className="border h-20 w-full">
                    Imagem
                </div>
                <div>
                    <div className="normal-text-font">
                        E, em muitas regiões do Brasil, são pronunciadas como se fosse um [I]/ [ʊ], como nas palavras: Abacate; Macaco.
                    </div>
                    <div className="span-text-font">
                        Y, en muchas regiones de Brasil, son pronunciadas como si fuera una [I]/ [ʊ], como en las palabras:“Abacate”; “Macaco”.
                    </div>
                </div>


                <div className="border h-20 w-full">
                    Imagem
                </div>






            </div>


            <NavBar currentRoute={currentroute} />
        </div>
    )

}
