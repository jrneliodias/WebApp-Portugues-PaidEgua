
import NavBar from "@/app/components/NavBar";


export default function ListaPaidEgua() {

    const currentRoute = "/listapaidegua"; // Set the current route dynamically based on your page

    return (
        <div className="main-layout ">
            <div className="title-text-format">
                <span>
                    <b> Lista Pai D&#39;Égua? </b>
                </span>

            </div>
            <div className=" flex flex-col m-5 gap-5 mb-20">
                <div>
                    <div className="normal-text-font">
                        Fizemos uma lista de assuntos que tu vais aprender aqui neste Web App, os quais
                        consideramos importantes para ampliar o teu conhecimento da Língua Portuguesa.
                    </div>
                    <div className="span-text-font ">
                        Hicimos una Lista de asuntos que vas a aprender aquí en el Web App, los cuales consideramos importantes para ampliar tu conocimiento de la Lengua Portuguesa.
                    </div>
                </div>

                <div>
                    <div className="normal-text-font">
                        Dentre vários temas, escolhemos os três que
                        julgamos serem os mais interessantes do nosso
                        falar regional.
                    </div>

                    <div className="span-text-font ">
                        Entre varios temas, elegimos los tres que pensamos que son los más interesantes de nuestra forma de hablar:
                    </div>
                </div>
                <div className="bg-[--bg-card-color] p-4 flex flex-col gap-3 rounded-md ">
                    <div>
                        <div className="normal-text-font">
                            O primeiro, é o Alfabeto Fonético do português e
                            suas particularidades em relação ao dialeto de
                            Belém.
                        </div>
                        <div className="span-text-font">

                            El primero, es el alfabeto fonético del portugués y sus
                            particularidades con relación al dialecto de Belém.

                        </div>
                    </div>

                    <div>
                        <div className="normal-text-font">
                            É o Alfabeto com letras e representações de sons (fonemas) que indicam através de seus símbolos, a forma como devemos pronunciar.
                        </div>
                        <div className="span-text-font">

                            Es el Alfabeto con letras y representaciones de sonidos (fonemas) que indican
                            a través de sus símbolos, la forma como debemos pronunciar.

                        </div>
                    </div>
                </div>
                <div className="bg-[--bg-card-color] p-4 flex flex-col gap-3 rounded-md ">
                    <div>
                        <div className="normal-text-font">
                            O segundo, são as Saudações tipicamente
                            paraenses chamadas de “Saudações Papa
                            Chibé”.
                        </div>
                        <div className="span-text-font">

                            El segundo, son los Saludos típicamente paraenses llamados de Saludos “Papa Chibé”.

                        </div>
                    </div>
                    <div>


                    <div className="normal-text-font">
                        Formas de cumprimentar as pessoas (iniciar/terminar uma
                        conversa).
                    </div>
                    <div className="span-text-font">

                        Formas de saludar a las personas (empezar/terminar una conversación).
                    </div>
                    </div>

                </div>
                <div  className="bg-[--bg-card-color] p-4 flex flex-col gap-3 rounded-md ">

                    <div>
                        <div className="normal-text-font">
                            E terceiro e último tema são as Expressões
                            Idiomáticas paraenses.
                        </div>
                        <div className="span-text-font">

                            Y el tercero y último tema son las Expresiones idiomáticas de Pará

                        </div>
                    </div>
                    <div>
                        <div className="normal-text-font">
                            Palavras e expressões utilizadas no cotidiano belenense.
                        </div>
                        <div className="span-text-font">

                            Palabras y expresiones utilizadas en el cotidiano de Belém.

                        </div>
                    </div>
                </div>
            </div>

            <NavBar currentRoute={currentRoute} />
        </div>
    )

}
