
import NavBar from "@/app/components/NavBar";
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
            <div className=" flex flex-col  gap-5  max-w-3xl">
                <div>
                    <div className="normal-text-font">
                        Particularidades que estão relacionadas às letras: D; L; N; T; S e Z.
                    </div>
                    <div className="span-text-font">
                        Particularidades que están relacionadas a las letras: D; L; N; T; S y Z.
                    </div>
                </div>
                <div>
                    <div className="normal-text-font">
                        No português falado na RMB, as letras abaixo, diante da vogal &lt;I&gt; têm pronúncias diferentes do espanhol:
                    </div>
                    <div className="span-text-font">
                        En el portugués hablado en la RMB, las letra abajo, ante de la vocal &lt;I&gt; tiene pronunciaciones diferentes del español:
                    </div>
                </div>



                <div>
                    <div>
                        <div className="normal-text-font">
                            Pronunciamos, por exemplo:
                        </div>
                        <div className="span-text-font">
                            Pronunciamos, por ejemplo:
                        </div>
                    </div>
                    <div className="p-5 flex justify-center w-full">
                        <div className="grid grid-rows-2 grid-cols-2 grid-flow-row w-full lg:w-1/2">
                            <div className="top-left-cell">
                                <div className="normal-text-font">
                                    D
                                </div>
                                <div className="phoneme-text-font">
                                    'di ['dʒi]
                                </div>
                                <IconVolume />
                            </div>

                            <div className="top-right-cell">
                                <div className="normal-text-font">
                                    L
                                </div>
                                <div className="phoneme-text-font">
                                    'li ['ʎi]
                                </div>
                                <IconVolume />
                            </div>
                            <div className="bottom-left-cell">
                                <div className="normal-text-font">
                                    N
                                </div>
                                <div className="phoneme-text-font">
                                    'ni ['ɲi]
                                </div>
                                <IconVolume />
                            </div>

                            <div className="bottom-right-cell">
                                <div className="normal-text-font">
                                    T
                                </div>
                                <div className="phoneme-text-font">
                                    'ti ['tʃi]
                                </div>
                                <IconVolume />
                            </div>

                        </div>
                    </div>
                    <div className="p-5 flex justify-center">
                        <div className="grid grid-rows-2 grid-cols-2 grid-flow-row w-full lg:w-1/2">
                            <div className="top-left-cell">
                                <div className="normal-text-font">
                                    diferente
                                </div>
                                <div className="phoneme-text-font">
                                    [dʒife'ɾẽtʃI]
                                </div>
                                <IconVolume />
                            </div>

                            <div className="top-right-cell">
                                <div className="normal-text-font">
                                    livro
                                </div>
                                <div className="phoneme-text-font">
                                    ['ʎivɾʊ]
                                </div>
                                <IconVolume />
                            </div>
                            <div className="bottom-left-cell">
                                <div className="normal-text-font">
                                    nível
                                </div>
                                <div className="phoneme-text-font">
                                    ['ɲivew]
                                </div>
                                <IconVolume />
                            </div>

                            <div className="bottom-right-cell">
                                <div className="normal-text-font">
                                    tigre
                                </div>
                                <div className="phoneme-text-font">
                                    ['tʃigɾI]
                                </div>
                                <IconVolume />
                            </div>

                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <div className="normal-text-font">
                            Enquanto que no Espanhol se pronuncia:
                        </div>
                        <div className="span-text-font">
                            Mientras en Español se pronuncia:
                        </div>
                    </div>
                    <div className="p-5 flex justify-center">
                        <div className="grid grid-rows-2 grid-cols-2 grid-flow-row w-full lg:w-1/2">
                            <div className="top-left-cell">
                                <div className="normal-text-font">
                                    D
                                </div>
                                <div className="phoneme-text-font">
                                    'di ['di]
                                </div>
                                <IconVolume />
                            </div>

                            <div className="top-right-cell">
                                <div className="normal-text-font">
                                    L
                                </div>
                                <div className="phoneme-text-font">
                                    'li ['li]
                                </div>
                                <IconVolume />
                            </div>
                            <div className="bottom-left-cell">
                                <div className="normal-text-font">
                                    N
                                </div>
                                <div className="phoneme-text-font">
                                    'ni ['ni]
                                </div>
                                <IconVolume />
                            </div>

                            <div className="bottom-right-cell">
                                <div className="normal-text-font">
                                    T
                                </div>
                                <div className="phoneme-text-font">
                                    'ti ['ti]
                                </div>
                                <IconVolume />
                            </div>

                        </div>
                    </div>
                    <div className="p-5 flex justify-center">
                        <div className="grid grid-rows-2 grid-cols-2 grid-flow-row w-full lg:w-1/2">
                            <div className="top-left-cell">
                                <div className="normal-text-font">
                                    diferente
                                </div>
                                <div className="phoneme-text-font">
                                    [dife'ɾẽnte]
                                </div>
                                <IconVolume />
                            </div>

                            <div className="top-right-cell">
                                <div className="normal-text-font">
                                    livro
                                </div>
                                <div className="phoneme-text-font">
                                    ['liβɾo]
                                </div>
                                <IconVolume />
                            </div>
                            <div className="bottom-left-cell">
                                <div className="normal-text-font">
                                    nível
                                </div>
                                <div className="phoneme-text-font">
                                    [ni'bel]
                                </div>
                                <IconVolume />
                            </div>

                            <div className="bottom-right-cell">
                                <div className="normal-text-font">
                                    tigre
                                </div>
                                <div className="phoneme-text-font">
                                    ['tiɣɾe]
                                </div>
                                <IconVolume />
                            </div>

                        </div>
                    </div>


                </div>

                <div>
                    <div className="normal-text-font">
                        Outra particularidade do português falado na RMB está relacionada às letras &lt;S&gt; e &lt;Z&gt;, finalizando sílaba e palavras. Diferente do espanhol, as letras adquirem um som característico do falar belenense.
                    </div>
                    <div className="span-text-font">
                        Otra particularidad del portugués hablado en la RMB está relacionada a las letras &lt;S&gt; y &lt;Z&gt;, finalizando sílaba y palabra. Diferente del español, las letras adquiere un sonido característico del dialecto belenense.
                    </div>
                </div>

                <div className="flex gap-2">
                    <div className="normal-text-font">
                        Exemplo
                    </div>
                    <div className="span-text-font">
                        (Ejemplo)
                    </div>
                </div>

                <div className="p-5 flex justify-center">
                    <div className="grid grid-rows-2 grid-cols-2 grid-flow-row w-full lg:w-1/2">
                        <div className="top-left-cell">
                            <div className="normal-text-font">
                                Escola
                            </div>
                            <div className="phoneme-text-font">
                                [Iʃ'kɔla]
                            </div>
                            <IconVolume />
                        </div>

                        <div className="top-right-cell">
                            <div className="normal-text-font">
                                três
                            </div>
                            <div className="phoneme-text-font">
                                ['tɾejʃ]
                            </div>
                            <IconVolume />
                        </div>
                        <div className="bottom-left-cell">
                            <div className="normal-text-font">
                                vez
                            </div>
                            <div className="phoneme-text-font">
                                ['vejʃ]
                            </div>
                            <IconVolume />
                        </div>

                        <div className="bottom-right-cell">
                            <div className="normal-text-font">
                                raiz
                            </div>
                            <div className="phoneme-text-font">
                                [xa'iʃ]
                            </div>
                            <IconVolume />
                        </div>

                    </div>
                </div>
                <div className="p-5 flex justify-center">
                    <div className="grid grid-rows-2 grid-cols-2 grid-flow-row  w-full lg:w-1/2">
                        <div className="top-left-cell">
                            <div className="normal-text-font">
                                Escuela
                            </div>
                            <div className="phoneme-text-font">
                                [es'kwela]
                            </div>
                            <IconVolume />
                        </div>

                        <div className="top-right-cell">
                            <div className="normal-text-font">
                                tres
                            </div>
                            <div className="phoneme-text-font">
                                ['tɾes]
                            </div>
                            <IconVolume />
                        </div>
                        <div className="bottom-left-cell">
                            <div className="normal-text-font">
                                vez
                            </div>
                            <div className="phoneme-text-font">
                                ['bes]
                            </div>
                            <IconVolume />
                        </div>

                        <div className="bottom-right-cell">
                            <div className="normal-text-font">
                                raiz
                            </div>
                            <div className="phoneme-text-font">
                                [ȓa'is]
                            </div>
                            <IconVolume />
                        </div>

                    </div>
                </div>

            </div>

            
           <NavBar currentRoute={currentroute} />
        </div>
    )

}
