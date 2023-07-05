import NavBar from "@/app/components/NavBar";
import { IconBook, IconRefresh, IconVolume } from "@tabler/icons-react";
import Lineballoon from "./components/lineballoon";

export default function ListaPaidEgua() {
  const currentRoute = "/atv2"; // Set the current route dynamically based on your page

  return (
    <div className="flex flex-col overflow-y-auto ">
      <div className="title-text-format ">
        <span>
          <b> ATIVIDADE 2 </b>
        </span>
        <div className="flex gap-4">
          <IconBook />
          <IconVolume />
          <IconRefresh />
        </div>
      </div>
      <div className=" flex flex-col m-5 gap-5 ">
        <div>
          <div className="normal-text-font">
          Digita em português a palavra ou a frase correspondente às formas de cumprimento relacionadas ao espanhol. Se tiveres dúvidas, podes retornar aos quadros das saudaçòes Papa Chibé.
          </div>
        </div>

        <Lineballoon text={"¿EN QUÉ ANDAS?"}/>

        <Lineballoon text={"ESTOY BIEN"}/>

        <Lineballoon text={"¿Y AHÍ, MI PANA?"}/>

        <Lineballoon text={"MUCHO GUSTO"}/>

        <Lineballoon text={"ME LLAMO…"}/>
        
        <Lineballoon text={"¡BUENOS DÍAS!"}/>

        <Lineballoon text={"¡HASTA LUEGO!"}/>

        <Lineballoon text={"¿DÓNDE VIVES?"}/>

        <Lineballoon text={"MI NOMBRE ES..."}/>

        <Lineballoon text={"YA ME VOY"}/>

        <Lineballoon text={"¡HOLA!"}/>

        <Lineballoon text={"¿CUÁL ES TU NOMBRE?"}/>

        <Lineballoon text={"¡BUENAS NOCHES!"}/>

        <Lineballoon text={"MUCHAS GRACIAS"}/>
        
      </div>

      <NavBar currentRoute={currentRoute} />
    </div>
  );
}
