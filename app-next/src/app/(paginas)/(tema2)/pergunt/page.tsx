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
          <div className="normal-text-font">Perguntamos:</div>
          <div className="span-text-font">Preguntamos:</div>
        </div>

        <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] ">
          <div>
            <div className="flex gap-2">
              <div className="normal-text-font">Como te chamas?</div>
              <IconVolume />
            </div>

            <div className="span-fonema-font">[ʻkõmu ʻtʃI ʻʃãmaʃ?] </div>

            <div className="span-text-font">¿Cómo te llamas?</div>
          </div>
        </div>

        <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] ">
          <div>
            <div className="flex gap-2">
              <div className="normal-text-font">Qual é teu nome?</div>
              <IconVolume />
            </div>

            <div className="span-fonema-font">[ʻkwaw ʻɛ ʻtew ʻnõmI?]</div>

            <div className="span-text-font">¿Cuál es tu nombre?</div>
          </div>
        </div>

        <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] ">
          <div>
            <div className="flex gap-2">
              <div className="normal-text-font">Como estás?</div>
              <IconVolume />
            </div>

            <div className="span-fonema-font">[ʻkõmʊ Iʃʻtajʃ?]</div>

            <div className="span-text-font">¿Cómo estás?</div>
          </div>
        </div>

        <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] ">
          <div>
            <div className="flex gap-2">
              <div className="normal-text-font">Como tens passado?</div>
              <IconVolume />
            </div>

            <div className="span-fonema-font">[ʻkõmʊ ʻtẽjʃ paʻsadʊ?] </div>

            <div className="span-text-font">¿Cómo lo has pasado?</div>
          </div>
        </div>

        <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] ">
          <div>
            <div className="flex gap-2">
              <div className="normal-text-font">Tudo bem?</div>
              <IconVolume />
            </div>

            <div className="span-fonema-font">[ʻtudʊ ʻbẽj?] </div>

            <div className="span-text-font">¿Todo bien?</div>
          </div>
        </div>

        <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] ">
          <div>
            <div className="flex gap-2">
              <div className="normal-text-font">Qué tal?</div>
              <IconVolume />
            </div>

            <div className="span-fonema-font">[ʻkI ʻtaw?] </div>

            <div className="span-text-font">¿Qué tal?</div>
          </div>
        </div>

        <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] ">
          <div>
            <div className="flex gap-2">
              <div className="normal-text-font">Onde moras?</div>
              <IconVolume />
            </div>

            <div className="span-fonema-font">[ʻõdʒI ʻmɔɾajʃ?] </div>

            <div className="span-text-font">¿Dónde vives?</div>
          </div>
        </div>
      </div>

      <NavBar currentRoute={currentRoute} />
    </div>
  );
}
