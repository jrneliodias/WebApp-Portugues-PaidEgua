
import acai0 from "@/app/images/acai0.png"
import acaiphone from "@/app/images/acaiphone.png"
import acaihear from "@/app/images/acaihear.png"
import acaihat from "@/app/images/acaihat.png"
import acaibook from "@/app/images/acaibook.png"
import NavBar from "@/app/components/NavBar";
import PersonagemComFala from "@/app/components/PersonagemComFala";
import { IconKeyboard,IconBook, IconVolume, IconRefresh} from "@tabler/icons-react"

const imageSize = 150;


export default function AcaiTurma() {
    // const typedText = useTypedText(textToType)
    const currentRoute = "/acaiturma"; // Set the current route dynamically based on your page
    const keyboard = <IconKeyboard />
    const volume = <IconVolume />
    const refresh = <IconRefresh  />
    const book = <IconBook />

    const speech = {
        pablito: 'Sou Pablito e minha ação é a de repetir. Meu símbolo é o ',
        juanito: 'Sou Juanito e represento a ação de ler. Meu símbolo é o ',
        carlito: 'Me chamo Carlito e sou a ação de digitar. Meu símbolo é o ',
        abelita: 'Me chamo Abelita e sou a ação de ouvir. Meu símbolo é o ',
    
    }


    return (
        <div className="grid grid-cols-2 grid-rows-2 h-full gap-2  m-3">

            <PersonagemComFala imgSource={acaiphone} speech = {speech.pablito} icon={refresh}  />
            <PersonagemComFala imgSource={acaihear}  speech = {speech.abelita} icon={volume}  />
            <PersonagemComFala imgSource={acaihat}   speech = {speech.carlito} icon={keyboard}  />
            <PersonagemComFala imgSource={acaibook}  speech = {speech.juanito} icon={book}  />

            <NavBar currentRoute={currentRoute} />

        </div>

    )

}

