
import NavBar from "@/app/components/NavBar";
import { IconVolume } from "@tabler/icons-react";


export default function ListaPaidEgua() {

    const currentroute = "/alfafonetico3"; // Set the current route dynamically based on your page

    return (
        <div className="main-layout">
            <div className="title-text-format">
                <span>
                    <b> Tema I - Alfabeto Fonético do Português </b>
                </span>

            </div>
            <div className=" flex flex-col gap-5 max-w-3xl mb-20">
                <div>
                    <div className="normal-text-font">
                        Essas diferenças acontecem com relação às Consoantes: J/G; L; R, V; Z/S e X.
                    </div>
                    <div className="span-text-font">
                        Esas diferencias ocurren con relación a las Consonantes: J/G; L; R, V; Z/S y X.
                    </div>
                </div>
                <div>
                    <div className="normal-text-font">
                        Observa os exemplos:
                    </div>
                    <div className="span-text-font">
                        Observa los ejemplos:
                    </div>
                </div>
                <div>
                    <div className="normal-text-font">
                        No português brasileiro, as ledivas &lt;J&gt; /ʒ/, diante de qualquer vogal e &lt;G&gt; /ʒ/ diante de &lt;E&gt; e &lt;I&gt; têm  pronúncias diferentes do espanhol.
                    </div>
                    <div className="span-text-font">
                        En el portugués brasileño, las ledivas &lt;J&gt; /ʒ/, ante cualquier vocal y la &lt;G&gt; /ʒ/ ante &lt;E&gt; e &lt;I&gt; tienen pronunciaciones diferentes del español.
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
                    <div className="p-5 max-w-lg  mx-auto">
                        <div className="grid grid-rows-2 grid-cols-3 grid-flow-row">
                            <div className="top-left-cell">
                                <div className="normal-text-font">
                                    Jardim
                                </div>
                                <div className="phoneme-text-font">
                                    [ʒaɾ`dʒĩ]
                                </div>
                                <IconVolume />
                            </div>
                            <div className="top-mid-cell">
                                <div className="normal-text-font">
                                    Jeremias
                                </div>
                                <div className="phoneme-text-font">
                                    [ʒeɾe'mjaʃ]
                                </div>
                                <IconVolume />
                            </div>
                            <div className="top-right-cell">
                                <div className="normal-text-font">
                                    Jogo
                                </div>
                                <div className="phoneme-text-font">
                                    ['ʒogʊ]
                                </div>
                                <IconVolume />
                            </div>
                            <div className="bottom-left-cell">
                                <div className="normal-text-font">
                                    Julia
                                </div>
                                <div className="phoneme-text-font">
                                    ['ʒuʎja]
                                </div>
                                <IconVolume />
                            </div>
                            <div className="bottom-mid-cell">
                                <div className="normal-text-font">
                                    Gente
                                </div>
                                <div className="phoneme-text-font">
                                    ['ʒẽtʃI]
                                </div>
                                <IconVolume />
                            </div>
                            <div className="bottom-right-cell">
                                <div className="normal-text-font">
                                    Gigante
                                </div>
                                <div className="phoneme-text-font">
                                    [ʒi'gãtʃI]
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
                    <div className="p-5 max-w-lg mx-auto ">
                        <div className="grid grid-rows-2 grid-cols-3 grid-flow-row">
                            <div className="top-left-cell">
                                <div className="normal-text-font">
                                    Jardín
                                </div>
                                <div className="phoneme-text-font">
                                    [xar'ðĩn]
                                </div>
                                <IconVolume />
                            </div>
                            <div className="top-mid-cell">
                                <div className="normal-text-font">
                                    Jeremias
                                </div>
                                <div className="phoneme-text-font">
                                    [xeɾẽ'mjas]
                                </div>
                                <IconVolume />
                            </div>
                            <div className="top-right-cell">
                                <div className="normal-text-font">
                                    Juego
                                </div>
                                <div className="phoneme-text-font">
                                    ['xweɣo]
                                </div>
                                <IconVolume />
                            </div>
                            <div className="bottom-left-cell">
                                <div className="normal-text-font">
                                    Julia
                                </div>
                                <div className="phoneme-text-font">
                                    ['xulja]
                                </div>
                                <IconVolume />
                            </div>
                            <div className="bottom-mid-cell">
                                <div className="normal-text-font">
                                    Gente
                                </div>
                                <div className="phoneme-text-font">
                                    ['xẽnte]
                                </div>
                                <IconVolume />
                            </div>
                            <div className="bottom-right-cell">
                                <div className="normal-text-font">
                                    Gigante
                                </div>
                                <div className="phoneme-text-font">
                                    [xi'ɣãnte]
                                </div>
                                <IconVolume />
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    <div className="normal-text-font">
                        Esses são exemplos de transcrições fonéticas, ou seja, indicam a forma como devemos pronunciar essas palavras em português.
                    </div>
                    <div className="span-text-font">
                        Esos son ejemplos de transcripciones fonéticas, o sea, indican la forma cómo debemos pronunciar esas palabras en español.
                    </div>
                </div>
                <div>
                    <div className="normal-text-font">
                        No português brasileiro, a letra &lt;L&gt; tem pronuncia diferente do espanhol. O &lt;L&gt; finalizando sílaba tem som de &lt;U&gt; [w]. Pronunciamos, por exemplo:
                    </div>
                    <div className="span-text-font">
                        En el portugués brasileño, la letra &lt;L&gt; tiene pronunciación diferente del español. La &lt;L&gt; finalizando sílaba tiene sonido de &lt;U&gt; [w]. Pronunciamos, por ejemplo:
                    </div>
                </div>
                <div>
                    <div className="normal-text-font">
                        a palavra “Calma” [kawma] e em espanhol “Calma” [kalma];
                    </div>
                    <div className="span-text-font">
                        a palavra “Difícil” ['dʒifisiw] e em espanhol “Difícil” ['difisil].
                    </div>
                </div>
                <div>
                    <div className="normal-text-font">
                        No português brasileiro, a pronúncia da letra &lt;V&gt; também é diferente do espanhol.
                    </div>
                    <div className="span-text-font">
                        En el portugués brasileño, la pronunciación de la letra &lt;V&gt; también es diferente del español.
                    </div>
                </div>
                <div>
                    <div className="normal-text-font">
                        Pronunciamos, por exemplo: “Vaca” ['vaka] e em espanhol “Vaca” ['baka].
                    </div>
                    <div className="span-text-font">
                        Pronunciamos, por ejemplo: “Vaca” ['vaka] y en español “Vaca” ['baka].
                    </div>
                </div>
                <div>
                    <div className="normal-text-font">
                        No português brasileiro, a pronúncia da letra &lt;R&gt; é diferente do espanhol.
                    </div>
                    <div className="span-text-font">
                        En el portugués brasileño, la pronunciación de la letra &lt;R&gt; es diferente del español.
                    </div>
                </div>
                <div>
                    <div className="normal-text-font">
                        Por exemplo: Ramon [xa'mõ] em português é diferente de Ramón ['ȓamõn] em espanhol. Em ambas as línguas são nomes próprios masculinos.
                    </div>
                    <div className="span-text-font">
                        Por ejemplo: Ramom [xa'mõ] en portugués es diferente de Ramón ['ȓamõn] en español. En ambas las lenguas son nombres propios masculinos.
                    </div>
                </div>
                <div>
                    <div className="normal-text-font">
                        A pronúncia da letra &lt;R&gt; iniciando palavra, em português, é suave, enquanto que a pronúncia da letra &lt;R&gt; em espanhol, em qualquer posição, é vibrante (forte).
                    </div>
                    <div className="span-text-font">
                        La pronunciación de la letra &lt;R&gt; empezando palabra, en portugués, es débil, mientras la pronunciación de la letra &lt;R&gt; en español, en cualquier posición, es vibrante (fuerte).
                    </div>
                </div>
                <div>
                    <div className="normal-text-font">
                        No português brasileiro, a letra &lt;Z&gt; tem pronúncia diferente do espanhol.
                    </div>
                    <div className="span-text-font">
                        En el portugués brasileño, la letra  &lt;Z&gt; tiene pronunciación diferente del español.
                    </div>
                </div>
                <div>
                    <div className="normal-text-font">
                        Pronunciamos, por exemplo: Zélia ['zɛʎja] e em espanhol “Zelia” ['selja].
                    </div>
                    <div className="span-text-font">
                        Pronunciamos, por ejemplo: Zélia ['zɛʎja] y en español “Zelia” ['selja].
                    </div>
                </div>
                <div>
                    <div className="normal-text-font">
                        O mesmo ocorre com a pronúncia da letra  &lt;S&gt;.
                    </div>
                    <div className="span-text-font">
                        El mismo ocurre con la pronunciación de la letra  &lt;S&gt;.
                    </div>
                </div>
                <div>
                    <div className="normal-text-font">
                        No português brasileiro, o  &lt;S&gt; entre vogais tem o mesmo som da letra  &lt;Z&gt;.
                    </div>
                    <div className="span-text-font">
                        En el portugués brasileño, la  &lt;S&gt; entre vocales tiene el mismo sonido de la letra  &lt;Z&gt;.
                    </div>
                </div>
                <div>
                    <div className="normal-text-font">
                        Pronunciamos, por exemplo: Museu [mu'zew] / Casa ['kaza] / rosa ['xoza] e em espanhol Museo [mu'seo] / Casa ['kasa], rosa ['rosa].
                    </div>
                    <div className="span-text-font">
                        Pronunciamos, por ejemplo: Museu [mu'zew] / Casa ['kaza] / rosa ['xoza] y en español Museo [mu'seo] / Casa ['kasa], rosa ['rosa].
                    </div>
                </div>
                <div>
                    <div className="normal-text-font">
                        No português brasileiro, a letra  &lt;X&gt; tem quatro formas diferentes de pronunciar:
                    </div>
                    <div className="span-text-font">
                        En el portugués brasileño, la letra &lt;X&gt; tiene cuatro formas diferentes de pronunciar:
                    </div>
                </div>
                <div>
                    <div className="normal-text-font">
                        A primeira, por exemplo, é o som de: XA; XE; XI,como nas palavras: Xarope [∫a'ɾɔpI]; Mexer['meʃeɾ]; Xícara ['ʃikaɾa].
                    </div>
                    <div className="span-text-font">
                        La primera, por ejemplo, es el sonido de: XA; XE; XI, como enlas palabra - “Xarope” [∫a'ɾɔpI]; “Mexer” ['meʃeɾ]; “Xícara”['ʃikaɾa].
                    </div>
                </div>
                <div>
                    <div className="normal-text-font">
                        A segunda, é o som de: SI, como nas palavras: Máximo ['masimʊ]; Auxílio [aw'siʎiw].
                    </div>
                    <div className="span-text-font">
                        La segunda, es el sonido de: SI, como en las palabras - “Máximo” ['masimʊ]; “Auxílio” [aw'siʎiw].
                    </div>
                </div>
                <div>
                    <div className="normal-text-font">
                        A terceira, é o som de: ZA; ZE; ZI; ZO, como nas palavras: Exato [e'zatʊ]; Exemplo [e'zẽplʊ]; Exílio [e'ziʎjʊ]; Êxodo ['ezodʊ].
                    </div>
                    <div className="span-text-font">
                        La tercera, es el sonido de: ZA; ZE; ZI; ZO, como en las palabras - “Exato” [e'zatʊ]; “Exemplo” [e'zẽplʊ]; “Exílio” [e'ziʎjʊ]; “Êxodo” ['ezodʊ].
                    </div>
                </div>
                <div>
                    <div className="normal-text-font">
                        A quarta, é o som de: KIS, como nas palavras: Complexo [kõ'lɛkisʊ]; Táxi ['takisi]; Tórax ['tɔɾakisi].
                    </div>
                    <div className="span-text-font">
                        La cuarta, es el sonido de: KIS, como en las palabras – “Complexo” [kõ'plɛkisʊ]; “Táxi” ['takisi]; “Tórax” ['tɔɾakisi]
                    </div>
                </div>
                <div>
                    <div className="normal-text-font">
                        Mas, também, há algumas palavras em português que a letra &lt;X&gt; simplesmente não é pronunciada como, por exemplo: Exceto [e'sɛtʊ]; Exceção [ese'sãw]; Excelente [ese'lẽt∫I].
                        <div className="span-text-font">
                            Pero, también, hay algunas palabras en portugués que la letra &lt;X&gt; simplemente no es pronunciada como, por ejemplo: “Exceto” [e'sɛtʊ]; “Exceção” [ese'sãw]; “Excelente” [ese'lẽt∫I].
                        </div>
                    </div>
                </div>



            </div>

            <NavBar currentRoute={currentroute} />
        </div>
    )

}
