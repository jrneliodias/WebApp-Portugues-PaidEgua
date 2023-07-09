
import NavBar from "@/app/components/navigation/NavBar";
import { IconBook, IconRefresh, IconVolume } from "@tabler/icons-react";


export default function Actv1Vowel() {

    const currentroute = "/actv1vowel"; // Set the current route dynamically based on your page

    return (
        <div className="main-layout">
            <div className="title-text-format">
                <span>
                    <b> Atividade 1 - Vogais</b>
                </span>
                <div className="flex gap-4">
                    <IconBook />
                    <IconVolume />
                    <IconRefresh />
                </div>

            </div>
            <div className="body-text-layout">
                <div>
                    <div className="normal-text-font">
                    Em relação às vogais do português, escuta o áudio com atenção e arrasta as palavras que correspondem aos seus respectivos sons.
                    </div>
                </div>

                <div className="flex justify-between">
                    
                </div>
            




            </div>

            
           <NavBar currentRoute={currentroute} />
        </div>
    )

}
