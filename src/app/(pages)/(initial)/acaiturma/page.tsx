
import acaiphone from "@/app/images/acaiphone.png"
import acaihear from "@/app/images/acaihear.png"
import acaihat from "@/app/images/acaihat.png"
import acaibook from "@/app/images/acaibook.png"
import NavBar from "@/app/components/navigation/NavBar";
import { IconKeyboard,IconBook, IconVolume, IconRefresh} from "@tabler/icons-react"
import SecondaryCharacters from "@/app/components/characters/SecondaryCharacters"
import { AcaiLayout } from "@/app/components/layout/acailayout";

const imageSize = 150;


export default function AcaiTurma() {
    // const typedText = useTypedText(textToType)
    const currentRoute = "/acaiturma"; // Set the current route dynamically based on your page
    const keyboard = <IconKeyboard />
    const volume = <IconVolume />
    const refresh = <IconRefresh  />
    const book = <IconBook />

    const speech = {
        pablito: `Sou Pablito e minha ação é a de repetir. Meu símbolo é: `,
        juanito: 'Sou Juanito e represento a ação de ler. Meu símbolo é: ',
        carlito: 'Me chamo Carlito e sou a ação de digitar. Meu símbolo é: ',
        abelita: 'Me chamo Abelita e sou a ação de ouvir. Meu símbolo é: ',
    
    }


    return (
        <div className="grid grid-cols-2 grid-rows-2 h-full gap-5 gap-y-8 m-5 my-20">

            <SecondaryCharacters addPadding={false} imgSource={acaiphone} speech = {speech.pablito} icon={refresh}  />
            <SecondaryCharacters addPadding={true} imgSource={acaihear}  speech = {speech.abelita} icon={volume}  />
            <SecondaryCharacters addPadding={true} imgSource={acaihat}   speech = {speech.carlito} icon={keyboard}  />
            <SecondaryCharacters addPadding={true} imgSource={acaibook}  speech = {speech.juanito} icon={book}  />
            <NavBar currentRoute={currentRoute} />

        </div>

    )

}

