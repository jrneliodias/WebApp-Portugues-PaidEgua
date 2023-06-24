import Image from "next/image";
import PersonagensPg0 from '../images/personagens-pag0.png'

export default function CoverPage() {
    return (
        <div className="flex flex-col gap-5 justify-center items-center h-4/5 mt-[30px]">

            <div className="relative w-full h-full ">
                <Image
                    src={PersonagensPg0}
                    alt="personagens"
                    fill
                    className="object-contain"

                />
            </div>
            <div className="w-[300px] text-center text-xs">
                <p>
                    Desenvolvido pelo Laboratório de
                    Pesquisa e Experimentação em Multimídia do
                    NITAE - UFPA
                </p>
            </div>


        </div>
    )

}

