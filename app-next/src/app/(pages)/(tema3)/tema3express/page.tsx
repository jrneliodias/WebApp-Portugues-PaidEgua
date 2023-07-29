
import NormalText from "@/app/components/basics/normaltext";
import TextDiv from "@/app/components/basics/text";
import NavBar from "@/app/components/navigation/NavBar";
import { IconBook, IconKeyboard, IconRefresh, IconVolume } from "@tabler/icons-react";
import { WordCard } from "@/app/components/cards/card";
import SpanishText, { PhonemeFont } from "@/app/components/basics/spanishtext";
import { idiomaticExpression } from "@/app/data/idiomaticExpressionData";
import { TableCell, TableHead } from "@/app/components/tableComponent/tablecell";



export default function Tema3Expressions() {

    const currentRoute = "/tema3express"; // Set the current route dynamically based on your page

    return (
        <div className="main-layout ">
            <div className="title-text-format ">
                <span>
                    <b> Tema III - Expressões Idiomáticas Paraenses</b>
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
                        Tu deves ter observado que desde a página inicial deste Web App estamos usando propositalmente palavras e expressões que só mesmo o paraense para entender. Nosso objetivo com esse tema é que tu compreendas melhor o sentido de cada uma dessas expressões tão utilizadas no cotidiano belenense. Dessa forma, apresentamos as mais usuais, para que tu possas utilizá-las com propriedade junto a amigos e familiares.
                    </NormalText>
                    <SpanishText>
                        Como has observado desde la página inicial de este Web App estamos usando de forma intencional palabras y expresiones que generalmente solo el paraense comprende. Nuestro objetivo con ese tema es que tú comprendas mejor el sentido de cada una de esas expresiones muy utilizadas en el cotidiano belenense. De esa forma, presentamos las más usuales, para que puedas utilizarlas adecuadamente con tus amigos y familiares.
                    </SpanishText>
                </TextDiv>

                <TextDiv>
                    <NormalText>
                        Para isso, selecionamos 50 palavras e expressões idiomáticas mais utilizadas pelos paraenses que moram na RMB. Elas estarão inseridas nas atividades deste Web App e serão apresentadas abaixo por ordem alfabética.
                    </NormalText>
                    <SpanishText>
                        Para eso, seleccionamos 50 expresiones idiomáticas más utilizadas por los paraenses que viven en la RMB. Ellas harán parte de las actividades de este Web App y serán presentadas por orden alfabético.
                    </SpanishText>
                </TextDiv>
                <table className="w-full m-2 max-w-[90%] ">
                    <thead className="">
                        <TableHead className="border-tl-[50px]">
                            Expressão Idiomática
                        </TableHead>
                        <TableHead>
                            Transcrição Fonética
                        </TableHead>
                        <TableHead>
                            Sentido em Português
                        </TableHead>
                        <TableHead>
                            Sentido em Espanhol
                        </TableHead>
                    </thead>

                    {idiomaticExpression.map((item, index) => {
                        return (
                            <tr key={index}>
                                <TableCell>
                                    {item.expressIdiom}
                                </TableCell>
                                <TableCell>
                                    {item.transFonetic}
                                </TableCell>
                                <TableCell>
                                    {item.sentPort}
                                </TableCell>
                                <TableCell>
                                    {item.sentSpanish}
                                </TableCell>
                            </tr>
                        )
                    })}

                </table>




            </div>
            <NavBar currentRoute={currentRoute} />
        </div>
    )

}
