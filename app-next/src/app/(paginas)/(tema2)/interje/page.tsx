import NavBar from "@/app/components/NavBar";
import { IconBook, IconRefresh, IconVolume } from "@tabler/icons-react";

export default function ListaPaidEgua() {
  const currentRoute = "/interje"; // Set the current route dynamically based on your page

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
          <div className="normal-text-font">Interjeições paraenses: </div>
          <div className="span-text-font">Interjecciones paraense:</div>
        </div>

        <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] ">
          <div>
            <div className="flex gap-2">
              <div className="normal-text-font">Ah! Tá!</div>
              <IconVolume />
            </div>

            <div className="span-fonema-font"> [ʻa! ʻta]</div>
          </div>
        </div>

        <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] ">
          <div>
            <div className="flex gap-2">
              <div className="normal-text-font">Caramba</div>
              <IconVolume />
            </div>

            <div className="span-fonema-font">[kaʻɾãba]</div>
          </div>
        </div>

        <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] ">
          <div>
            <div className="flex gap-2">
              <div className="normal-text-font">Eita!</div>
              <IconVolume />
            </div>

            <div className="span-fonema-font">[ʻejta]</div>
          </div>
        </div>

        <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] ">
          <div>
            <div className="flex gap-2">
              <div className="normal-text-font">Eita!</div>
              <IconVolume />
            </div>

            <div className="span-fonema-font">[ʻejta]</div>
          </div>
        </div>

        <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] ">
          <div>
            <div className="flex gap-2">
              <div className="normal-text-font">Hen / Hen-hen</div>
              <IconVolume />
            </div>

            <div className="span-fonema-font">[ʻẽj / ʻẽj ʻẽj]</div>
          </div>
        </div>

        <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] ">
          <div>
            <div className="flex gap-2">
              <div className="normal-text-font">Hum / Hum…hum</div>
              <IconVolume />
            </div>

            <div className="span-fonema-font">[ʻũ / ũ ũ]</div>
          </div>
        </div>

        <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] ">
          <div>
            <div className="flex gap-2">
              <div className="normal-text-font">Né?</div>
              <IconVolume />
            </div>

            <div className="span-fonema-font">[ʻnɛ?]</div>
          </div>
        </div>

        <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] ">
          <div>
            <div className="flex gap-2">
              <div className="normal-text-font">Nossa!</div>
              <IconVolume />
            </div>

            <div className="span-fonema-font">[ʻnosa]</div>
          </div>
        </div>

        <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] ">
          <div>
            <div className="flex gap-2">
              <div className="normal-text-font">Oi?</div>
              <IconVolume />
            </div>

            <div className="span-fonema-font">[ʻoj?]</div>
          </div>
        </div>

        <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] ">
          <div>
            <div className="flex gap-2">
              <div className="normal-text-font">Poxa</div>
              <IconVolume />
            </div>

            <div className="span-fonema-font">[ʻpoʃa]</div>
          </div>
        </div>

        <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] ">
          <div>
            <div className="flex gap-2">
              <div className="normal-text-font">Pi-or</div>
              <IconVolume />
            </div>

            <div className="span-fonema-font">[ʻpiʻoɾ]</div>
          </div>
        </div>
      </div>

      <NavBar currentRoute={currentRoute} />
    </div>
  );
}
