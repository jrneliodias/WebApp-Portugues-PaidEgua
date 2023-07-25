
import NavBar from "@/app/components/navigation/NavBar";


export default function Saudpapachibe() {

    const currentRoute = "/saudpapachibe"; // Set the current route dynamically based on your page

    return (
        <div className="main-layout ">
            <div className="title-text-format ">
                <span>
                    <b> Tema II - Saudações Papa Chibé </b>
                </span>

            </div>
            <div className="body-text-layout">
                <div>
                <div className="normal-text-font">
                    Observa que além de traduzirmos essas expressões para o espanhol, também fizemos as transcrições fonéticas para que tu possas acompanhar a pronúncia.

                    </div>
                    <div className="span-text-font">
                    Observa que además de traducir esas expresiones al español, también hicimos las transcripciones fonéticas para que puedas acompañar la pronunciación.
                    </div>
                </div>
               

            </div>
            <NavBar currentRoute={currentRoute} />
        </div>
    )

}