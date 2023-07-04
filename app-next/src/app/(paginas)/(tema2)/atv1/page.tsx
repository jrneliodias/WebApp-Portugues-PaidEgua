import NavBar from "@/app/components/NavBar";
import { IconBook, IconRefresh, IconVolume } from "@tabler/icons-react";

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
        
        <div>
          <div className="flex gap-1">
            <div className="bg-[#8e7fbb] p-4 flex gap-3 rounded-[20px] ">
              <div>
                <div className="flex gap-2">
                  <div className="normal-text-font">DE</div>
                </div>
              </div>
            </div>

            <div className="bg-[#8e7fbb] p-4 flex gap-3 rounded-[20px] ">
              <div>
                <div className="flex gap-2">
                  <div className="normal-text-font">CONHECER</div>
                </div>
              </div>
            </div>

            <div className="bg-[#8e7fbb] p-4 flex gap-3 rounded-[20px] ">
              <div>
                <div className="flex gap-2">
                  <div className="normal-text-font">GOSTEI</div>
                </div>
              </div>
            </div>

            <div className="bg-[#8e7fbb] p-4 flex gap-3 rounded-[20px] ">
              <div>
                <div className="flex gap-2">
                  <div className="normal-text-font">TE</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="flex gap-1">
          <div className="flex gap-1 p-1">
            <IconVolume />
            <IconRefresh />
          </div>

          <div className="grow border-b-2"></div>
          <div className="grow border-b-2"></div>
          <div className="grow border-b-2"></div>
          <div className="grow border-b-2"></div>
        </div>
      </div>

      <NavBar currentRoute={currentRoute} />
    </div>
  );
}
