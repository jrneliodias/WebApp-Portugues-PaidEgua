
import NavBar from "@/app/components/NavBar";


export default function ListaPaidEgua() {

    const currentRoute = "/alfafonetico"; // Set the current route dynamically based on your page

    return (
        <div className="flex flex-col overflow-y-auto ">
            <div className="title-text-format ">
                <span>
                    <b> Objetivos de Aprendizagem </b>
                </span>

            </div>
            <div className=" flex flex-col m-5 gap-5 ">
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

                <div className="bg-[#6548a0] p-5 rounded-lg flex flex-col gap-2">
                    <div className="">
                        <div className="normal-text-font text font-black">
                            A tua Compreensão Oral:
                        </div>
                        <div className="span-text-font">
                            Tu Comprensión Oral:
                        </div>
                    </div>
                    <div>
                        <div className="normal-text-font">
                            percebendo a diferença de sons (fonemas) do dialeto belenense com os fonemas do espanhol.
                        </div>
                        <div className="span-text-font">
                            percibiendo la diferencia de sonidos (fonemas) del dialecto belenense con los fonemas del español.
                        </div>
                    </div>
                    <div>
                        <div className="normal-text-font">
                            associando os áudios as suas respectivas pronúncias por meio das transcrições fonéticas.
                        </div>
                        <div className="span-text-font">
                            asociando los audios a sus respectivas pronunciaciones por medio de las transcripciones fonéticas.
                        </div>
                    </div>
                </div>

                <div className="bg-[#6548a0] p-5 rounded-lg flex flex-col gap-2">
                    <div className="">
                        <div className="normal-text-font text font-black">
                            A tua Compreensão Leitora:
                        </div>
                        <div className="span-text-font">
                            Tu Comprensión Lectora:
                        </div>
                    </div>
                    <div>
                        <div className="normal-text-font">
                            identificando o sentido contextualizado das Saudações Papa Chibé e das Expressões idiomáticas paraenses
                        </div>
                        <div className="span-text-font">
                            identificando el sentido contextualizado de los Saludos “Papa Chibé” y de las Expresiones idiomáticas paraenses.
                        </div>
                    </div>

                </div>

                <div className="bg-[#6548a0] p-5 rounded-lg flex flex-col gap-2">
                    <div className="">
                        <div className="normal-text-font text font-black">
                            A tua expressão escrita (digitada)
                        </div>
                        <div className="span-text-font">
                            Tu Expresión Escrita (Digitada)
                        </div>
                    </div>
                    <div>
                        <div className="normal-text-font">
                            utilizando as expressões idiomáticas e de cumprimentos de forma apropriada a cada situação comunicativa.
                        </div>
                        <div className="span-text-font">
                            utilizando las expresiones idiomáticas y de saludos de forma apropiada a cada situación comunicativa.
                        </div>
                    </div>
                </div>

                <div className="bg-[#6548a0] p-5 rounded-lg flex flex-col gap-2">
                    <div className="">
                        <div className="normal-text-font text font-black">
                            A tua Expressão Oral:
                        </div>
                        <div className="span-text-font">
                            Tu Expresión Oral:
                        </div>
                    </div>
                    <div>
                        <div className="normal-text-font">
                            conhecendo os sons das letras e das palavras para que teu aprendizado ocorra de forma mais espontânea e imediata.
                        </div>
                        <div className="span-text-font">
                            conociendo los sonidos de las letras y de las palabras para que tu aprendizaje ocurra de forma más espontanea e inmediata.
                        </div>
                    </div>
                    <div>
                        <div className="normal-text-font">
                            exercitando a identificação e a manipulação dos sons através do dialeto belenense.
                        </div>
                        <div className="span-text-font">
                            ejercitando la identificación y la manipulación de los sonidos através del dialecto belenense.
                        </div>
                    </div>
                    <div>
                        <div className="normal-text-font">
                            aprimorando a tua oralidade em relação ao contexto cultural paraense.
                        </div>
                        <div className="span-text-font">
                            mejorando tu oralidad en relación al contexto cultural paraense.
                        </div>
                    </div>
                </div>

            </div>

            <NavBar currentRoute={currentRoute} />
        </div>
    )

}
