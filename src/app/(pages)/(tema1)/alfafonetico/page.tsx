
import NavBar from "@/app/components/navigation/NavBar";


export default function ListaPaidEgua() {

    const currentRoute = "/alfafonetico"; // Set the current route dynamically based on your page

    return (
        <div className="main-layout">
            <div className="title-text-format ">
                <span>
                    <b> Tema I - Alfabeto Fonético do Português </b>
                </span>

            </div>
            <div className="body-text-layout ">
                <div>
                    <div className="normal-text-font">
                        Para aprenderes o Português falado na Região Metropolitana de Belém (RMB), tu terás que compreender os sons (fonemas) que existem no Português e não existem no Espanhol. E virce-versa. Dessa forma, será mais fácil aprenderes a pronúncia da nossa língua
                    </div>
                    <div className="span-text-font">
                        Para aprender el portugués hablado en la Región Metropolitana de Belém (RMB), tú tendrás que comprender los sonidos (fonemas) que existen en el Portugués y no existen en el Español. Y viceversa. De esa forma, será más fácil aprender la pronuncia de nuestra lengua.
                    </div>
                </div>
                <div>
                    <div className="normal-text-font">
                        Neste Web App, apresentamoss o Alfabeto Fonético da Língua Portuguesa e suas particularidades relacionadas ao dialeto belenense, bem como as diferenças com o Espanhol.
                    </div>
                    <div className="span-text-font">
                        En este Web App, presentamos el Alfabeto Fonético de la Lengua Portuguesa y sus particularidades y bien como las diferencias con el español.
                    </div>
                </div>

                <div className="bg-[#6548a0] p-5 rounded-lg flex flex-col gap-2 border-2    ">

                    <div>
                        <div className="normal-text-font">
                            Os símbolos fonéticos utilizados neste Web App levaram em consideração o Alfabeto Fonético Internacional (IPA), entretanto alguns fonemas foram adaptados para o português brasileiro e para o dialeto belenense.
                        </div>
                        <div className="span-text-font">
                            Los símbolos fonéticos utilizados en este Web App tomaron en cuenta el Alfabeto Fonético Internacional (IPA), sin embargo algunos fonemas fueron adaptados para el portugués brasileño y para el dialecto belenense.
                        </div>
                    </div>

                </div>



            </div>

            <NavBar currentRoute={currentRoute} />
        </div>
    )

}
