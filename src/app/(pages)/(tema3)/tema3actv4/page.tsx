
import NormalText from "@/app/components/basics/normaltext";
import TextDiv from "@/app/components/basics/text";
import NavBar from "@/app/components/navigation/NavBar";
import { IconBook, IconRefresh, IconVolume } from "@tabler/icons-react";
import Image from "next/image";
import cacapalavras from "@/app/images/caca-palavras.jpg"
import { TableCell, TableHead } from "@/app/components/tableComponent/tablecell";
import { idiomaticExpression } from "@/app/data/idiomaticExpressionData";
import { Fragment } from 'react';



const foneticSpanishWords =
    [
        {
            transFonetic:"[a'xɛda]",
            sentSpanish: "Apártate",
        },
        {
            transFonetic:"[dʒI'xɔʃa]",
            sentSpanish: "Seguro / Por supuesto"
        }, {
            transFonetic:"['dew 'pɾɛgʊ]",
            sentSpanish: "No funciona"
        }, {
            transFonetic:"[le'vow 'ʊ fa'ɾɛlʊ]",
            sentSpanish: "Falleció"
        }, {
            transFonetic:"['muĩtʊ 'fiɾmI]",
            sentSpanish: "Muy bueno"
        }, {
            transFonetic:"['paj 'dɛgwa]",
            sentSpanish: "Excelente"
        }, {
            transFonetic:"['papa ʃi'bɛ]",
            sentSpanish: "Persona que nasce en el Estado de Pará"
        },  {
            transFonetic:"[pitʃi'u]",
            sentSpanish: "Olor fuerte de barcos pesqueros"
        }, {
            transFonetic:"['xajʃga da'ki]",
            sentSpanish: "Vete"
        }

    ]


export default function Tema3Act4() {

    const currentRoute = "/tema3actv4"; // Set the current route dynamically based on your page

    return (
        <div className="main-layout ">
            <div className="title-text-format ">
                <span>
                    <b> Tema III - Atividade 4</b>
                </span>
                <div className="flex gap-4">
                    <IconBook />
                    <IconVolume />
                    <IconRefresh />
                </div>
            </div>
            <div className="body-text-layout">
                <TextDiv>
                    <NormalText>
                        <p>
                            Tu gostas de caça-palavras? Então, vou te apresentar ao Caça-palavras “Adubado”. Nesta brincadeira terás que encontrar as palavras e expressões idiomáticas paraenses, na horizontal, vertical e na diagonal , clicando nas letras correspondentes. Para facilitar, poderás acompanhar o áudio através das transcrições fonéticas, além de observar o sentido de cada uma em espanhol. Te vira!!!!
                        </p>
                    </NormalText>
                </TextDiv>

                <Image
                    src={cacapalavras}
                    alt="roleta"
                    width={400}
                    className="place-self-center rounded-md"

                />

                <div className="grid grid-cols-2">
                  
                    <TableHead className="border-l-2 rounded-tl-lg">
                        Transcrição Fonética
                    </TableHead>
                    <TableHead className="border-r-2 rounded-tr-lg">
                        Sentido em Espanhol
                    </TableHead>

                    {foneticSpanishWords.map((item, index) => {
                        const isLastItem = index === foneticSpanishWords.length - 1;
                        return (
                            <Fragment key={index}>
                               
                                <TableCell key={`fonet-${index}`}
                                    className={` phoneme-text-font border-l-2 ${isLastItem ? 'border-b-2' : ''}`}>
                                    {item.transFonetic}
                                </TableCell>
                                
                                <TableCell key={`sentspa-${index}`}
                                    className={`border-r-2 ${isLastItem ? 'rounded-br-lg border-b-2' : ''}`}>
                                    {item.sentSpanish}
                                </TableCell>
                            </Fragment>
                        )
                    })}

                </div>


            </div >
            <NavBar currentRoute={currentRoute} />
        </div >
    )

}


