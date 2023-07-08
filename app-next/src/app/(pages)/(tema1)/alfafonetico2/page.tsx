
import NavBar from "@/app/components/NavBar";


export default function AlfaFoneticoPort2() {

    const currentRoute = "/alfafonetico2"; // Set the current route dynamically based on your page

    return (
        <div className="flex flex-col ">
            <div className="title-text-format ">
                <span>
                    <b> Tema I - Alfabeto Fonético do Português </b>
                </span>

            </div>
            <div className=" flex flex-col m-5 gap-5  max-w-3xl mb-20">
                <div>
                    <div className="normal-text-font">
                        Em barras inclinadas <span className="font-['Times_New_Roman'] bg-zinc-900 px-2 py-1 rounded-md">/ /</span> é o som da letra (FONEMA);
                    </div>
                    <div className="span-text-font">
                        En barras inclinadas <span className="font-['Times_New_Roman'] bg-zinc-900 px-2 py-1 rounded-md">/ /</span> es el sonido de la letra (FONEMA);
                    </div>
                </div>
                <div>
                    <div className="normal-text-font">
                        O que estiver em maiúscula é LETRA;
                    </div>
                    <div className="span-text-font">
                        Lo que esté en mayúscula es la LETRA;
                    </div>
                </div>
                <div>
                    <div className="normal-text-font">
                        O que estiver em colchetes <span className="font-['Times_New_Roman'] bg-zinc-900 px-2 py-1 rounded-md">[ ]</span> é a forma como deve ser a PRONÚNCIA e
                    </div>
                    <div className="span-text-font">
                        Lo que esté en corchetes <span className="font-['Times_New_Roman'] bg-zinc-900 px-2 py-1 rounded-md">[ ]</span> es la forma como debe ser PRONUNCIADA y
                    </div>

                </div>
                <div>
                    <div className="normal-text-font">
                        Esse símbolo <span className="font-['Times_New_Roman'] bg-zinc-900 px-2 py-1 rounded-md">&apos;</span> marca a sílaba mais forte da palavra.
                    </div>
                    <div className="span-text-font">
                    Ese símbolo <span className="font-['Times_New_Roman'] bg-zinc-900 px-2 py-1 rounded-md">&apos;</span> señala la sílaba más fuerte de la palabra.
                    </div>
                </div>
                <div>
                    <div className="normal-text-font">
                    A cor <span className="bg-blue-700 p-1 rounded-md">AZUL</span> destaca as vogais que possuem duas formas de pronúncia em português.
                    </div>
                    <div className="span-text-font">
                    El color <span className="bg-blue-700 p-1 rounded-md">AZUL</span> destaca las vocales que tienen dos formas de pronunciación en portugués.
                    </div>
                </div>
                <div>
                    <div className="normal-text-font">
                    A cor <span className="bg-red-700 p-1 rounded-md">VERMELHA</span> destaca as consoantes que possuem pronúncias diferentes do espanhol.
                    </div>
                    <div className="span-text-font">
                    El color <span className="bg-red-700 p-1 rounded-md">ROJO</span> destaca las consonantes que son pronunciadas de forma diferente del español.
                    </div>
                </div>
                <div>
                    <div className="normal-text-font">
                    A cor <span className="bg-green-700 p-1 rounded-md">VERDE</span>  destaca a consoante que só existe no espanhol.
                    </div>
                    <div className="span-text-font">
                    El color <span className="bg-green-700 p-1 rounded-md">VERDE</span>  destaca la consonante que solo existe en el español.
                    </div>
                </div>

            </div>
            <NavBar currentRoute={currentRoute} />
        </div>
    )

}
