import Image from "next/image";
import PersonagensPg0 from '../images/personagens-pag0.png'

export default function Pag0() {
    return (
        <div className="flex flex-col mt-5 gap-5 justify-center items-center h-full">
            
                <Image 
                    src={PersonagensPg0}
                    alt="personagens"
                    height={500}
                    
                />
            <div className="w-[300px] text-center text-xs">
                Desenvolvido pelo Laboratório de
                Pesquisa e Experimentação em Multimídia do
                NITAE - UFPA
            </div>


        </div>
    )

}

