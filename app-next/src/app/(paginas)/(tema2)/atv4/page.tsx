import NavBar from "@/app/components/NavBar";
import {
  IconBook,
  IconKeyboard,
  IconRefresh,
  IconVolume,
} from "@tabler/icons-react";

export default function ListaPaidEgua() {
  const currentRoute = "/atv4"; // Set the current route dynamically based on your page

  return (
    <div className="flex flex-col overflow-y-auto ">
      <div className="title-text-format ">
        <span>
          <b> ATIVIDADE 4 </b>
        </span>
        <div className="flex gap-4">
          <IconBook />
          <IconVolume />
          <IconRefresh />
        </div>
      </div>

      <div className="flex flex-col m-5 gap-5 ">
        <div className="flex flex-col gap-3">
          <div className="normal-text-font">
            Jogar pedra, pau ou galho na mangueira para comer manga com sal é um
            costume muito paraense. Pensando nessa traquinagem, clica no menino
            e a cada manga que cair no chão irá aparecer uma forma de
            cumprimento, com a qual tu vais completar o diálogo, de acordo com a
            situação comunicativa.{" "}
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#8e7fbb] p-4 rounded-[20px] normal-text-font flex justify-center">
              De onde tu és
            </div>
            <div className="bg-[#8e7fbb] p-4 rounded-[20px] normal-text-font flex justify-center">
              Seja bem-vinda
            </div>
            <div className="bg-[#8e7fbb] p-4 rounded-[20px] normal-text-font flex justify-center">
              Como estás?
            </div>
            <div className="bg-[#8e7fbb] p-4 rounded-[20px] normal-text-font flex justify-center">
              Já tô indo
            </div>
            <div className="bg-[#8e7fbb] p-4 rounded-[20px] normal-text-font flex justify-center">
              Oi
            </div>
            <div className="bg-[#8e7fbb] p-4 rounded-[20px] normal-text-font flex justify-center">
              Que bom!
            </div>
          </div>
        </div>
        <div className="normal-text-font">
          Texto II: Gilberto apresenta Pilar a Rogério.{" "}
        </div>
        <div className="normal-text-font">Gilberto: </div>
        <div className="normal-text-font">
          <input
            type="text"
            className="bg-[#8e7fbb] rounded-[20px] w-[40%] text-center py-1"
          />{" "}
          , Rogério. Vou te apresentar minha amiga Pilar.{" "}
        </div>
        <div className="span-text-font">
          [oj, xo'ʒeɾjʊ. 'vow 'tʃI apɾɛzẽtaɾ 'mĩɲa a'miga pi'laɾ]
        </div>
        <div className="normal-text-font">Rogerio: </div>
        <div className="normal-text-font">
          <input
            type="text"
            className="bg-[#8e7fbb] rounded-[20px] w-[40%] text-center py-1"
          />{" "}
          , Pilar,{" "}
          <input
            type="text"
            className="bg-[#8e7fbb] rounded-[20px] w-[40%] text-center py-1"
          />{" "}
          ?
        </div>
        <div className="span-text-font"> [oj, pi'laɾ , 'kõmʊ Iʃ'tajʃ?]</div>
        <div className="normal-text-font">Pilar: </div>
        <div className="span-text-font"> Muy bien, gracias. ¿Me entiendes?</div>
        <div className="normal-text-font">Rogério: </div>
        <div className="normal-text-font">
          Sim. E tu, consegues compreende o que falo?
        </div>
        <div className="span-text-font">
          [sĩ. 'I 'tu, kõ'sɛguIʃ kõpɾiẽdeɾ 'ʊ 'kI 'falʊ?]{" "}
        </div>
        <div className="normal-text-font">Pilar: </div>
        <div className="span-text-font">
          Sí, ya convivo con los brasileños hace tiempo. ¿Tú también eres
          parense, como Gilberto?
        </div>
        <div className="normal-text-font">Rogério: </div>
        <div className="normal-text-font">
          Sim, nasci em Santa Izabel, mas moro aqui em Belém.
        </div>
        <div className="span-text-font">
          ['sĩ, na'si 'ẽj 'sãta iza'bɛw, 'majʃ 'moɾʊ a'kI 'ẽj be'lẽj]
        </div>
        <div className="normal-text-font">Gilberto: </div>
        <div className="normal-text-font">
          Pilar, eu e o Rogério trabalhamos juntos na mesma escola.{" "}
        </div>
        <div className="span-text-font">
          [pilaɾ, 'ew 'I 'ʊ xo'ʒɛɾjʊ tɾaba'ʎamʊʃ 'ʒũtʊʃ 'na 'mẽjʃma Iʃkɔla].
        </div>
        <div className="normal-text-font">Pilar: </div>
        <div className="span-text-font">¡Qué bueno!</div>
        <div className="normal-text-font">Rogério: </div>
        <div className="normal-text-font">
          <input
            type="text"
            className="bg-[#8e7fbb] rounded-[20px] w-[40%] text-center py-1"
          />{" "}
          , Pilar?{" "}
        </div>
        <div className="span-text-font">['dʒI 'õdʒI 'tu 'ɛjʃ , pi'laɾ?]</div>
        <div className="normal-text-font">Pilar: </div>
        <div className="span-text-font">Soy de Venezuela.</div>
        <div className="normal-text-font">Rogério: </div>
        <div className="normal-text-font">
          <input
            type="text"
            className="bg-[#8e7fbb] rounded-[20px] w-[40%] text-center py-1"
          />{" "}
          ! Quanto tempo tu estás em Belém?{" "}
        </div>
        <div className="span-text-font">
          [ 'kI 'bõ! ! 'kwãtʊ 'tẽpʊ 'tu Iʃ'tajʃ 'ẽj bɛ'lẽj?]
        </div>
        <div className="normal-text-font">Pilar: </div>
        <div className="span-text-font">Llegué hace poco tiempo, algunas semanas.</div>
        <div className="normal-text-font">Rogério: </div>
        <div className="normal-text-font">
          Então, <input
            type="text"
            className="bg-[#8e7fbb] rounded-[20px] w-[40%] text-center py-1"
          />{" "}
          à cidade das Mangueiras.{" "}
        </div>
        <div className="span-text-font">
        [ẽ'tãw, 'seʒa bẽj 'vĩda 'a si'dadʒI 'dajʃ mã'gejɾaʃ]
        </div>
        <div className="normal-text-font">Pilar: </div>
        <div className="span-text-font">Muchas gracias.</div>
        <div className="normal-text-font">Gilberto: </div>
        <div className="normal-text-font">
        Bem, Temos que ir, Pilar. 
        </div>
        <div className="span-text-font">
        ['bẽj, 'tẽmʊʃ 'kI 'iɾ, pi'laɾ] 
        </div>
        <div className="normal-text-font">Pilar: </div>
        <div className="span-text-font">Sí, Gilberto</div>
        <div className="span-text-font">¡Hasta luego, Rogerio!</div>
        <div className="normal-text-font">Rogério: </div>
        <div className="normal-text-font">
          Eu também <input
            type="text"
            className="bg-[#8e7fbb] rounded-[20px] w-[40%] text-center py-1"
          />{" "}.
        </div>
        <div className="span-text-font">
        ['ew tã'bẽj 'ʒa 'tõ 'ĩdʊ]
        </div>
      </div>

      <NavBar currentRoute={currentRoute} />
    </div>
  );
}
