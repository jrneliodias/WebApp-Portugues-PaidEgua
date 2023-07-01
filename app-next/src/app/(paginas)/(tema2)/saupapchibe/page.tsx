
import NavBar from "@/app/components/NavBar";


export default function ListaPaidEgua() {

    const currentRoute = "/saupapchibe"; // Set the current route dynamically based on your page

    return (
        <div className="flex flex-col overflow-y-auto ">
            <div className="title-text-format ">
                <span>
                    <b> Tema II - Saudações Papa Chibé </b>
                </span>

            </div>
            <div className=" flex flex-col m-5 gap-5 ">
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
