"use client"
import acai0 from "@/app/images/acai0.png"
import { useTypedText } from "@/app/Hooks/useTypedText";
import NavBar from "@/app/components/navigation/NavBar";
import PrimaryCharacter from "@/app/components/characters/PrimaryCharacter";

const imageSize = 150;

const textToType = [`Tu sabias que o açaí é uma frutinha que faz parte da nossa cultura? Ele é o principal alimento no cotidiano dos paraenses; é servido, quase sempre, com a farinha de mandioca, que para vocês venezuelanos “es harina de yuca”..`]

export default function AcaiIntroApp20() {
    const typedText = useTypedText(textToType)

    const currentRoute = '/acai0tema25'; // Set the current route dynamically based on your page

    return (
        <div className="flex flex-col justify-end item-center py-2 gap-5 h-full ">
            <PrimaryCharacter
                imgSource={acai0}
                speech={typedText}
                textStyle="" />
            <NavBar currentRoute={currentRoute} />

        </div>

    )

}

