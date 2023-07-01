
import NavBar from "@/app/components/NavBar";


export default function ListaPaidEgua() {

    const currentRoute = "/listapaidegua2"; // Set the current route dynamically based on your page

    return (
        <div className="flex flex-col overflow-y-auto ">
            <div className="title-text-format ">
                <span>
                    <b> Lista Pai D&#39;Égua? </b>
                </span>

            </div>
            <div className=" flex flex-col m-5 gap-5 ">
                <div>
                    <div className="normal-text-font">
                        Fizemos uma lista de assuntos que tu vais aprender aqui neste Web App, os quais consideramos importantes para ampliar o teu conhecimento da Língua Portuguesa.
                    </div>
                    <div className="span-text-font">
                        Hicimos una Lista de asuntos que vas a aprender aquí en el Web
                        App, los cuales consideramos importantes para ampliar tu
                        conocimiento de la Lengua Portuguesa.
                    </div>
                </div>
           
                <div>
                    <div className="normal-text-font">
                        Dentre vários temas, escolhemos os três que julgamos serem os mais interessantes do nosso
                        falar regional.
                    </div>
                    <div className="span-text-font">
                        Entre varios temas, elegimos los tres que pensamos que son los más
                        interesantes de nuestra forma de hablar:
                    </div>
                </div>
            </div>

            <NavBar currentRoute={currentRoute} />
        </div>
    )

}
