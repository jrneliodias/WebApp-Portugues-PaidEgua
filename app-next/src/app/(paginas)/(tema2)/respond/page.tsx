import NavBar from "@/app/components/NavBar";
import { IconBook, IconRefresh, IconVolume } from "@tabler/icons-react";

export default function ListaPaidEgua() {
  const currentRoute = "/respond"; // Set the current route dynamically based on your page

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
          <div className="normal-text-font">Respondemos:</div>
          <div className="span-text-font">Contestamos:</div>
        </div>

        <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] ">
          <div>
            <div className="flex gap-2">
              <div className="normal-text-font">Me chamo...</div>
              <IconVolume />
            </div>

            <div className="span-fonema-font">[ʻmI ʻʃãmu] </div>

            <div className="span-text-font">Me llamo...</div>
          </div>
        </div>

        <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] ">
          <div>
            <div className="flex gap-2">
              <div className="normal-text-font">Meu nome é...</div>
              <IconVolume />
            </div>

            <div className="span-fonema-font">[ʻmew ʻnõmI ʻɛ]</div>

            <div className="span-text-font">Mi nombre es...</div>
          </div>
        </div>

        <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] ">
          <div>
            <div className="flex gap-2">
              <div className="normal-text-font">Muito prazer</div>
              <IconVolume />
            </div>

            <div className="span-fonema-font">[ʻmuĩtʊ pɾaʻzeɾ]</div>

            <div className="span-text-font">Mucho gusto</div>
          </div>
        </div>

        <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] ">
          <div>
            <div className="flex gap-2">
              <div className="normal-text-font">Muito obrigado(a)</div>
              <IconVolume />
            </div>

            <div className="span-fonema-font">[ʻmuĩtʊ obɾiʻgadʊ / obɾiʻgada] </div>

            <div className="span-text-font">Muchas gracias</div>
          </div>
        </div>

        <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] ">
          <div>
            <div className="flex gap-2">
              <div className="normal-text-font">Moro em...</div>
              <IconVolume />
            </div>

            <div className="span-fonema-font">[ʻmɔɾʊ ʻẽj] </div>

            <div className="span-text-font">Vivo en...</div>
          </div>
        </div>

        <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] ">
          <div>
            <div className="flex gap-2">
              <div className="normal-text-font">Esta é minha amiga</div>
              <IconVolume />
            </div>

            <div className="span-fonema-font">[ʻɛʃta ʻɛ ʻmĩɲa aʻmiga]  </div>

            <div className="span-text-font">Esta es mi amiga</div>
          </div>
        </div>

        <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] ">
          <div>
            <div className="flex gap-2">
              <div className="normal-text-font">Este é meu amigo</div>
              <IconVolume />
            </div>

            <div className="span-fonema-font">[ʻeʃtʃI ʻɛ ʻmew aʻmigu] </div>

            <div className="span-text-font">Este es mi amigo</div>
          </div>
        </div>
      </div>

      <NavBar currentRoute={currentRoute} />
    </div>
  );
}
