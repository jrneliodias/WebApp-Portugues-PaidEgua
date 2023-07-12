import Image from "next/image";
import PersonagensPg0 from './images/personagens-pag0.png'
import NavBar from './components/navigation/NavBar';

export default function Home() {
    const currentRoute = "/"; // Set the current route dynamically based on your page

    return (


        <div className="flex flex-col gap-5  justify-center items-center h-full p-2 ">

            <div className="mt-3 relative w-full flex items-center min-h-[450px] moto-g4:min-h-[600px]">
                <Image
                    src={PersonagensPg0}
                    alt="personagens"
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                />
            </div>
            <div className="w-1/2 text-center text-xs sm:text-base max-w-lg">
                <p>
                    Desenvolvido pelo Laboratório de
                    Pesquisa e Experimentação em Multimídia do
                    NITAE² - UFPA
                </p>
            </div>
            <NavBar currentRoute={currentRoute} />
        </div>




    )

}

