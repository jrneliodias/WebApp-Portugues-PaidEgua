
import LineCards from "@/app/components/activities/linecards";
import NormalText from "@/app/components/basics/normaltext";
import TextDiv from "@/app/components/basics/text";
import NavBar from "@/app/components/navigation/NavBar";
import { IconBook, IconRefresh, IconVolume } from "@tabler/icons-react";



export default function Tema3Act1() {

    const currentRoute = "/tema3actv1"; // Set the current route dynamically based on your page

    return (
        <div className="main-layout ">
            <div className="title-text-format ">
                <span>
                    <b> Tema III - Atividade 1</b>
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
                    Escuta o áudio com atenção e organiza a sequência das palavras que formam a Expressão Idiomática paraense indicada.
                    </NormalText>
                 
                </TextDiv>
              
             
                <LineCards text={["HOJE", "LASCADO", "TÔ"]} />

                <LineCards text={["BREU", "TÁ", "RUA", "ESSA", "UM"]} />

                <LineCards text={["DIZENDO?", "O", "ESTÁS", "PERAÍ", "QUE"]} />

                <LineCards text={["PARA", "BUTUCA", "DE" ,"PREJUÍZO", "TER", "FICA","NÃO"]} />

                <LineCards text={["NOVA", "COM", "ROUPA", "ZEZINHO", "A", "TODO","TÁ","PAVULAGEM"]} />

            </div>
            <NavBar currentRoute={currentRoute} />
        </div>
    )

}

