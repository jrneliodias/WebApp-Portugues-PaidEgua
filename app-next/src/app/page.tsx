import Botao_menu from "./components/caixa";
import BtnVoltar from "./components/BtnVoltar";
import BtnProxima from "./components/BtnProxima";
import BtnHome from "./components/BtnHome";


export default function Home() {
  return (
    <body className="text-white min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl">Português <br /> <br /> Pai D&apos;Égua</h1>
      
      <footer className="fixed bottom-0 left-0 z-20 w-[100vw] h-[10vh] grid place-items-center">
        <div className="border-2 rounded-full bg-[#8055bd]">
          <div className="flex items-center justify-between  w-[300px] h-[50px]">
            <Botao_menu> <BtnVoltar /> </Botao_menu>
            <Botao_menu> <BtnHome/> </Botao_menu>
            <Botao_menu> <BtnProxima /> </Botao_menu>

          </div>
        </div>
      </footer>

    </body>


  )

}
