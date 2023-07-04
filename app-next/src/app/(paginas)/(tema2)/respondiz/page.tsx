import NavBar from "@/app/components/NavBar";
import { IconBook, IconRefresh, IconVolume } from "@tabler/icons-react";

export default function ListaPaidEgua() {
  const currentRoute = "/respondiz"; // Set the current route dynamically based on your page

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
          Responde dizendo:{" "}
          </div>
          <div className="span-text-font">
          Responde diciendo:
          </div>
        </div>

        <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] ">
          <div>
            <div className="flex gap-2">
              <div className="normal-text-font">Tô bem</div>
              <IconVolume />
            </div>

            <div className="span-fonema-font">[ʻto ʻbẽj]</div>

            <div className="span-text-font">Estoy bien</div>
          </div>
        </div>

        <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] ">
          <div>
            <div className="flex gap-2">
              <div className="normal-text-font">Não tô bem</div>
              <IconVolume />
            </div>

            <div className="span-fonema-font">[ʻnãw ʻto ʻbẽj]</div>

            <div className="span-text-font">No estoy bien / No me siento bien</div>
          </div>
        </div>

        <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] ">
          <div>
            <div className="flex gap-2">
              <div className="normal-text-font">Tá devagar</div>
              <IconVolume />
            </div>

            <div className="span-fonema-font">[ʻta dʒivaʻgaɾ]</div>

            <div className="span-text-font">Andando, ahí va</div>
          </div>
        </div>

        <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] ">
          <div>
            <div className="flex gap-2">
              <div className="normal-text-font">Vou indo</div>
              <IconVolume />
            </div>

            <div className="span-fonema-font">[ʻvow ʻĩdʊ]</div>

            <div className="span-text-font">Voy llevándola</div>
          </div>
        </div>

        <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] ">
          <div>
            <div className="flex gap-2">
              <div className="normal-text-font">Tô mais ou menos</div>
              <IconVolume />
            </div>

            <div className="span-fonema-font">[ʻto ʻmajʃzow ʻmẽnʊʃ] </div>

            <div className="span-text-font">Más o menos</div>
          </div>
        </div>

        <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] ">
          <div>
            <div className="flex gap-2">
              <div className="normal-text-font">Gostei de te conhecer</div>
              <IconVolume />
            </div>

            <div className="span-fonema-font">[goʃʻtej dʒI ʻtʃI kõɲeʻseɾ]</div>

            <div className="span-text-font">Me gustó conocerte</div>
          </div>
        </div>

        <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] ">
          <div>
            <div className="flex gap-2">
              <div className="normal-text-font">Pois não</div>
              <IconVolume />
            </div>

            <div className="span-fonema-font">[ʻpojʃ ʻnãw]</div>

            <div className="span-text-font">¡Cómo no!</div>
          </div>
        </div>
      </div>

      <NavBar currentRoute={currentRoute} />
    </div>
  );
}
