
import NavBar from "@/app/components/navigation/NavBar";
import { IconVolume } from "@tabler/icons-react";
import Image from "next/image";
import homem from "@/app/images/homem.png"
import bolo from "@/app/images/bolo.png"
import mulher from "@/app/images/mulher.png"
import bola from "@/app/images/bola.png" 
import abacate from "@/app/images/abacate.png" 
import macaco from "@/app/images/macaco.png" 


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
                <div className="flex justify-around">
                    <div className="flex flex-col  w-full p-3 gap-3 ">
                        <div className=" border-2 bg-[--bg-card-color] flex justify-center flex-col items-center rounded-lg p-3 px-6 mx-auto">
                            <IconVolume />
                            <p>Ele</p>
                            <p className="phoneme-text-font">['eʎI]</p>
                            <p className="span-text-font">Él</p>
                        </div>
                        <div className="relative h-[10rem] ">

                            <Image
                                alt="homem"
                                src={homem}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col h-80 w-full p-3 gap-3">
                    <div className=" border-2 bg-[--bg-card-color] flex justify-center flex-col items-center rounded-lg p-3 px-6 mx-auto">
                            <IconVolume />
                            <p>Ele</p>
                            <p className="phoneme-text-font">['bolʊ]</p>
                            <p className="span-text-font">Torta</p>
                        </div>
                        <div className="relative h-[10rem] w-auto">
                            <Image
                                alt="bolo"
                                src={bolo}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="normal-text-font">
                        Podem ser pronunciadas com um som mais aberto [ɛ] / [ɔ] como nas palavras: Ela; bola.
                    </div>
                    <div className="span-text-font">
                        Pueden ser pronunciadas con un sonido más abierto [ɛ] / [ɔ] como en las palabras: “Ela”; “bola”.
                    </div>
                </div>

                <div className="flex justify-around">
                    <div className="flex flex-col  w-full p-3 gap-3 ">
                        <div className=" border-2 bg-[--bg-card-color] flex justify-center flex-col items-center rounded-lg p-3 px-6 mx-auto">
                            <IconVolume />
                            <p>Ela</p>
                            <p className="phoneme-text-font">['ɛla]</p>
                            <p className="span-text-font">Ella</p>
                        </div>
                        <div className="relative h-[10rem] ">

                            <Image
                                alt="mulher"
                                src={mulher}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col h-80 w-full p-3 gap-10">
                    <div className=" border-2 bg-[--bg-card-color] flex justify-center flex-col items-center rounded-lg p-3 px-6 mx-auto">
                            <IconVolume />
                            <p>Bola</p>
                            <p className="phoneme-text-font">['bɔla]</p>
                            <p className="span-text-font">Pelota</p>
                        </div>
                        <div className="relative h-[4rem] w-auto">
                            <Image
                                alt="bola"
                                src={bola}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </div>
                    </div>
                </div>


                <div>
                    <div className="normal-text-font">
                        E, em muitas regiões do Brasil, são pronunciadas como se fosse um [I]/ [ʊ], como nas palavras: Abacate; Macaco.
                    </div>
                    <div className="span-text-font">
                        Y, en muchas regiones de Brasil, son pronunciadas como si fuera una [I]/ [ʊ], como en las palabras:“Abacate”; “Macaco”.
                    </div>
                </div>

                <div className="flex justify-around">
                    <div className="flex flex-col  w-full p-3 gap-5 ">
                        <div className=" border-2 bg-[--bg-card-color] flex justify-center flex-col items-center rounded-lg p-3 px-6 mx-auto">
                            <IconVolume />
                            <p>Abacate</p>
                            <p className="phoneme-text-font">[aba'katʃI]</p>
                            <p className="span-text-font">Aguacate</p>
                        </div>
                        <div className="relative h-[6rem] ">

                            <Image
                                alt="abacate"
                                src={abacate}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col h-80 w-full p-3 gap-5">
                    <div className=" border-2 bg-[--bg-card-color] flex justify-center flex-col items-center rounded-lg p-3 px-6 mx-auto">
                            <IconVolume />
                            <p>Macaco</p>
                            <p className="phoneme-text-font">[ma'kakʊ]</p>
                            <p className="span-text-font">Mono</p>
                        </div>
                        <div className="relative h-[8rem] w-auto">
                            <Image
                                alt="macaco"
                                src={macaco}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </div>
                    </div>
                </div>






            </div>


            <NavBar currentRoute={currentroute} />
        </div>
    )

}
