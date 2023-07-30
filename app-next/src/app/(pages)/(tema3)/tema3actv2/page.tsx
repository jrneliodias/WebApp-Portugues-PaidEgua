
import NormalText from "@/app/components/basics/normaltext";
import TextDiv from "@/app/components/basics/text";
import NavBar from "@/app/components/navigation/NavBar";
import { IconBook, IconRefresh, IconVolume } from "@tabler/icons-react";



export default function Tema3Act2() {

    const currentRoute = "/tema3actv2"; // Set the current route dynamically based on your page

    return (
        <div className="main-layout ">
            <div className="title-text-format ">
                <span>
                    <b> Tema III - Atividade 2</b>
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
                    Relaciona a expressão idiomática paraense com seu sentido correspondente em português
                    </NormalText>
                 
                </TextDiv>
              
             

            </div>
            <NavBar currentRoute={currentRoute} />
        </div>
    )

}

