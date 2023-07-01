import NavBar from "@/app/components/NavBar";
import { IconBook, IconRefresh, IconVolume } from "@tabler/icons-react";

export default function ListaPaidEgua() {
  const currentRoute = "/cumpsaud"; // Set the current route dynamically based on your page

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
          <div className="normal-text-font">Cumprimentamos as pessoas com:</div>
          <div className="span-text-font">Saludamos a la gente con:</div>
        </div>

        <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] ">
          <div>
            <div className="flex gap-2">
              <div className="normal-text-font">Bom dia!</div>
              <IconVolume />
            </div>

            <div className="span-fonema-font">[ʻbõ ʻdʒja]</div>

            <div className="span-text-font">¡Buenos días!</div>
          </div>
        </div>

        <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] ">
          <div>
            <div className="flex gap-2">
              <div className="normal-text-font">Boa tarde!</div>
              <IconVolume />
            </div>

            <div className="span-fonema-font">[ʻboa ʻtaɾdʒI]</div>

            <div className="span-text-font">¡Buenas tardes!</div>
          </div>
        </div>

        <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] ">
          <div>
            <div className="flex gap-2">
              <div className="normal-text-font">Boa noite!</div>
              <IconVolume />
            </div>

            <div className="span-fonema-font">[ʻboa ʻnojtʃI]</div>

            <div className="span-text-font">¡Buenas noches!</div>
          </div>
        </div>
      </div>

      <NavBar currentRoute={currentRoute} />
    </div>
  );
}
