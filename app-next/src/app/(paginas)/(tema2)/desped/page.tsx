import NavBar from "@/app/components/NavBar";
import { IconBook, IconRefresh, IconVolume } from "@tabler/icons-react";

export default function ListaPaidEgua() {
  const currentRoute = "/desped"; // Set the current route dynamically based on your page

  return (
    <div className="flex flex-col overflow-y-auto ">
      <div className="title-text-format ">
        <span>
          <b> Na Nossa Região </b>
        </span>
        <div className="flex gap-4">
          <IconBook />
          <IconVolume />
          <IconRefresh />
        </div>
      </div>
      <div className=" flex flex-col m-5 gap-5 ">
        <div>
          <div className="normal-text-font">Nos despedimos dizendo:</div>
          <div className="span-text-font">Nos despedimos hablando:</div>
        </div>

        <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] ">
          <div>
            <div className="flex gap-2">
              <div className="normal-text-font">Tchau</div>
              <IconVolume />
            </div>

            <div className="span-fonema-font">[ʻtʃaw]</div>

            <div className="span-text-font">Chao</div>
          </div>
        </div>

        <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] ">
          <div>
            <div className="flex gap-2">
              <div className="normal-text-font">Até logo</div>
              <IconVolume />
            </div>

            <div className="span-fonema-font">[aʻtɛ ʻlɔgʊ]</div>

            <div className="span-text-font">Hasta luego</div>
            <div className="span-text-font">Hasta la vista</div>
          </div>
          
        </div>

        <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] ">
          <div>
            <div className="flex gap-2">
              <div className="normal-text-font">Até amanhã</div>
              <IconVolume />
            </div>

            <div className="span-fonema-font">[aʻtɛ amãʻɲã]</div>

            <div className="span-text-font">Hasta mañana</div>
          </div>
        </div>

      </div>

      <NavBar currentRoute={currentRoute} />
    </div>
  );
}
