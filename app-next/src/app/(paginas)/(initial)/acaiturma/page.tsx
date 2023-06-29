"use client"
import Image from "next/image";
import acai0 from "@/app/images/acai0.png"
import { useTypedText } from "@/app/Hooks/useTypedText";
import NavBar from "@/app/components/NavBar";
import PersonagemComFala from "@/app/components/PersonagemComFala";

const imageSize = 150;

// const textToType = [`Esperamos que este aprendizado colabore para as tuas relações de comunicação no cotidiano em nossa cidade.`, 'Mano(a), com este Web App tu poderás fazer várias coisas muito firmes!']

export default function AcaiTurma() {
    // const typedText = useTypedText(textToType)
    const currentRoute = "/acaiturma"; // Set the current route dynamically based on your page


    return (
        <div className="grid grid-cols-2  h-full mb-[100px]">

            <PersonagemComFala imgSource={acai0} />
            <PersonagemComFala imgSource={acai0} />
            <PersonagemComFala imgSource={acai0} />
            <PersonagemComFala imgSource={acai0} />
            <NavBar currentRoute={currentRoute} />

        </div>

    )

}

