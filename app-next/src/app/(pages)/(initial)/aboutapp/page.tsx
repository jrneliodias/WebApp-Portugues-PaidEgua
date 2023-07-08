
import NavBar from "@/app/components/NavBar";


export default function AboutApp() {

    const currentRoute = "/aboutapp"; // Set the current route dynamically based on your page

    return (
        <div className="flex flex-col overflow-y-auto">
            <div className="title-text-format">
                <span>
                    <b> O que é o PT-BR Pai D&#39;Égua? </b>
                </span>
                <span>
                    <i> ¿Qué es el Portugués Pai D&#39;Égua? </i>
                </span>
            </div>
            <div className=" flex flex-col m-5 gap-5  max-w-3xl mb-20">
                <div>
                    <div className="normal-text-font">
                        Oi, mano(a)! Tu estás entrando em um espaço
                        virtual bilíngue - Português-Espanhol - que foi
                        pensado pra ti, imigrante venezuelano(a), que
                        mora aqui, na Região Metropolitana de Belém
                        (RMB), Capital do Estado do Pará, Norte do Brasil,
                        e que está aprendendo a Língua Portuguesa.
                    </div>

                    <div className=" span-text-font ">

                        ¡Hola, Pana! Tú estás entrando en un espacio
                        virtual bilingüe - Portugués-Español - que ha
                        sido pensado para ti, inmigrante venezolano
                        (a), que vive aquí, en la Región Metropolitana de
                        Belém (RMB), Capital de Estado de Pará, Norte
                        de Brasil, y que está aprendiendo el portugués.

                    </div>
                </div>

                <div>
                    <div className="normal-text-font">
                        Este é um webapp fonético-cultural em que os
                        conteúdos e as atividades foram elaboradas
                        para te ajudar na comunicação em português,
                        utilizando uma linguagem do dialeto belenense.
                        E foi chamado de Português Pai D&apos;Égua por
                        significar algo muito bom, excelente, legal!
                    </div>

                    <div className="span-text-font ">
                        Este es un webapp fonético-cultural donde los
                        contenidos y las actividades fueron elaboradas
                        para ayudarte en la comunicación en
                        portugués, utilizando un lenguaje con acento
                        belenense. Y ha sido llamado de Portugués &ldquo;Pai
                        D&apos;Égua&ldquo; por significar algo muy bueno,
                        excelente, chévere!
                    </div>
                </div>

                <div>
                    <div className="normal-text-font">
                        Tu estás percebendo esse jeito diferente de
                        falar? Pois é, essa é a linguagem que usamos
                        aqui em Belém em situações mais informais e,
                        por isso, é a forma que iremos utilizar neste
                        espaço de comunicação.
                    </div>
                    <div className="span-text-font">

                        ¿Te das cuenta que nuestra forma de hablar es
                        diferente? Bueno, ese es un lenguaje que
                        usamos aquí en Belém en situaciones más
                        informales y, por eso, es la forma que vamos a
                        utilizar en este espacio de comunicación.

                    </div>
                </div>
            </div>
            
            <NavBar currentRoute={currentRoute}/>
        </div>
    )

}
