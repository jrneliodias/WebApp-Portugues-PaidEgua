import NavBar from "@/app/components/NavBar";
import { IconBook, IconRefresh, IconVolume } from "@tabler/icons-react";

export default function ListaPaidEgua() {
  const currentRoute = "/cump"; // Set the current route dynamically based on your page

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
            Cumprimenta as pessoas com um simples:
          </div>
          <div className="span-text-font">
            Saludamos a la gente con un simple:
          </div>
        </div>

        <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] ">
          <div>
            <div className="flex gap-2">
              <div className="normal-text-font">Oi!</div>
              <IconVolume />
            </div>

            <div className="span-fonema-font">[ʻoj]</div>

            <div className="span-text-font">¡Hola!</div>
          </div>
        </div>

      </div>

      <NavBar currentRoute={currentRoute} />
    </div>
  );
}
