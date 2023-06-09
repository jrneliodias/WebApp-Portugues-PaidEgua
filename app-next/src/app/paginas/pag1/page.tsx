import Botao_menu from "@/app/components/caixa";
import BtnProxima from "@/app/components/BtnProxima";
import BtnHome from "@/app/components/BtnHome";
import BtnVoltar from "@/app/components/BtnVoltar";


export default function Pag1() {
    return (
        <body className="text-white min-h-screen">
            <div className="flex flex-col bg-purple-800">
                <div className="flex flex-col flex-wrap gap-1 p-2 m-2 ml-5 mr-5 rounded-full items-center border-2 bg-[#8055bd]">
                    <span>
                        <b> O que é o PT-BR Pai D&#39;Égua? </b>
                    </span>
                    <span>
                        <i> ¿Qué es el Portugués Pai D&#39;Égua? </i>
                    </span>
                </div>
                <div className=" flex flex-col m-5 gap-5 ">
                    <div className="text-justify">
                        Oi, mano(a)! Tu estás entrando em um espaço
                        virtual bilíngue - Português-Espanhol - que foi
                        pensado pra ti, imigrante venezuelano(a), que
                        mora aqui, na Região Metropolitana de Belém
                        (RMB), Capital do Estado do Pará, Norte do Brasil,
                        e que está aprendendo a Língua Portuguesa.
                    </div>

                    <div className="text-gray-400 text-justify ">
                        <i>
                            ¡Hola, Pana! Tú estás entrando en un espacio
                            virtual bilingüe - Portugués-Español - que ha
                            sido pensado para ti, inmigrante venezolano
                            (a), que vive aquí, en la Región Metropolitana de
                            Belém (RMB), Capital de Estado de Pará, Norte
                            de Brasil, y que está aprendiendo el portugués.
                        </i>
                    </div>

                </div>
            </div>
            <footer className="fixed bottom-0 left-0 z-20 w-[100vw] h-[10vh] grid place-items-center">
                <div className="border-2 rounded-full bg-[#8055bd]">
                    <div className="flex items-center justify-between  w-[300px] h-[50px]">
                        <Botao_menu> <BtnVoltar /> </Botao_menu>
                        <Botao_menu> <BtnHome /> </Botao_menu>
                        <Botao_menu> <BtnProxima /> </Botao_menu>

                    </div>
                </div>
            </footer>

        </body>

    )

}
