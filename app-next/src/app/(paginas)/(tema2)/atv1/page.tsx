import NavBar from "@/app/components/NavBar";
import { IconBook, IconRefresh, IconVolume } from "@tabler/icons-react";
import Lineballoon from "./components/lineballoon";

export default function ListaPaidEgua() {
  const currentRoute = "/atv1"; // Set the current route dynamically based on your page

  return (
    <div className="flex flex-col overflow-y-auto ">
      <div className="title-text-format ">
        <span>
          <b> ATIVIDADE 1 </b>
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
            Escuta o áudio com atenção e organiza a sequência das palavras que
            indicam formas de cumprimento.
          </div>
        </div>

        <Lineballoon text={["DE", "CONHECER", "GOSTEI", "TE"]}/>

        <Lineballoon text={["AS", "COISAS?", "ESTÃO", "COMO"]}/>

        <Lineballoon text={["FEITO?", "QUE", "O", "TENS"]}/>
        
        <Lineballoon text={["ATRASADOS", "ESTAMOS", "BORIMBORA", "SAIR", "PRA"]}/>
        
        <Lineballoon text={["TODAS!", "BOA", "E", "A", "TODAS", "NOITE"]}/>
        
      </div>

      <NavBar currentRoute={currentRoute} />
    </div>
  );
}
