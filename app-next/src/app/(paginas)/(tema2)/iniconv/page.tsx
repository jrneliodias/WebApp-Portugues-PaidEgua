import NavBar from "@/app/components/NavBar";
import { IconBook, IconRefresh, IconVolume } from "@tabler/icons-react";

export default function ListaPaidEgua() {
  const currentRoute = "/iniconv"; // Set the current route dynamically based on your page

  return (
    <div className="flex flex-col overflow-y-auto ">
      <div className="title-text-format ">
        <span>
          <b> O Belenense que se Preza... </b>
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
            Inicia uma conversa perguntando:{" "}
          </div>
          <div className="span-text-font">
            Empieza una conversa preguntando:
          </div>
        </div>

        <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] ">
          <div>
            <div className="flex gap-2">
              <div className="normal-text-font">Quanto tempo?</div>
              <IconVolume />
            </div>

            <div className="span-fonema-font">[ʻkwãtʊ ʻtẽpʊ?] </div>

            <div className="span-text-font">¿Tanto tiempo?</div>
          </div>
        </div>

        <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] ">
          <div>
            <div className="flex gap-2">
              <div className="normal-text-font">E aí, mano?</div>
              <IconVolume />
            </div>

            <div className="span-fonema-font">[ʻI aʻi ʻmãnʊ?]</div>

            <div className="span-text-font">¿Y ahí mi Pana?</div>
          </div>
        </div>

        <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] ">
          <div>
            <div className="flex gap-2">
              <div className="normal-text-font">O que tens feito?</div>
              <IconVolume />
            </div>

            <div className="span-fonema-font">[ʻʊ ʻkI ʻtẽjʃ ʻfejtʊ?]</div>

            <div className="span-text-font">¿En qué andas?</div>
          </div>
        </div>

        <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] ">
          <div>
            <div className="flex gap-2">
              <div className="normal-text-font">Como estão as coisas?</div>
              <IconVolume />
            </div>

            <div className="span-fonema-font">[ʻkõmʊ Iʃʻtãw ʻajʃ ʻkojzajʃ?]</div>

            <div className="span-text-font">¿Cómo va todo?</div>
          </div>
        </div>
      </div>

      <NavBar currentRoute={currentRoute} />
    </div>
  );
}
