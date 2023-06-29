import Image from "next/image";
import PersonagensPg0 from './images/personagens-pag0.png'
import NavBar from './components/NavBar';

export default function Home() {
  const currentRoute = "/"; // Set the current route dynamically based on your page

  return (
      <div className="flex flex-col gap-5 justify-center items-center h-full mt-[20px] p-2">

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
         <NavBar currentRoute ={currentRoute} />

      </div>

  )

}

