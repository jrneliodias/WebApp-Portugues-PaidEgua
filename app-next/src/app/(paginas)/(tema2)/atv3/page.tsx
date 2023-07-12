import NavBar from "@/app/components/NavBar";
import {
  IconBook,
  IconKeyboard,
  IconRefresh,
  IconVolume,
} from "@tabler/icons-react";

export default function ListaPaidEgua() {
  const currentRoute = "/atv3"; // Set the current route dynamically based on your page

  return (
    <div className="flex flex-col overflow-y-auto ">
      <div className="title-text-format ">
        <span>
          <b> ATIVIDADE 3 </b>
        </span>
        <div className="flex gap-4">
          <IconBook />
          <IconVolume />
          <IconRefresh />
        </div>
      </div>

      <div className=" flex flex-col m-5 gap-5 ">
        <div className="p-4 flex flex-col gap-3">
          <div className="normal-text-font">
            A - A primeira pergunta que fazemos quando queremos identificar uma
            pessoa que não conhecemos.{" "}
          </div>
          <div className="flex gap-2 items-center">
            <IconKeyboard size={30} />
            <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] normal-text-font flex-1">
              <input
                type="text"
                className="bg-[#8e7fbb] placeholder:text-white"
                placeholder="________ ________ ________ ________"
              />
            </div>
          </div>
        </div>
        <div className="p-4 flex flex-col gap-3">
          <div className="normal-text-font">
            B - O cumprimento que utilizamos quando vamos dormir{" "}
          </div>
          <div className="flex gap-2 items-center">
            <IconKeyboard size={30} />
            <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] normal-text-font flex-1">
              <input
                type="text"
                className="bg-[#8e7fbb] placeholder:text-white"
                placeholder="________ ________"
              />
            </div>
          </div>
        </div>
        <div className="p-4 flex flex-col gap-3">
          <div className="normal-text-font">
            C - A expressão que geralmente usamos quando nos apresentamos a
            alguém.{" "}
          </div>
          <div className="flex gap-2 items-center">
            <IconKeyboard size={30} />
            <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] normal-text-font flex-1">
              <input
                type="text"
                className="bg-[#8e7fbb] placeholder:text-white"
                placeholder="________ ________"
              />
            </div>
          </div>
        </div>
        <div className="p-4 flex flex-col gap-3">
          <div className="normal-text-font">
          D - A expressão de agradecimento a alguém.{" "}
          </div>
          <div className="flex gap-2 items-center">
            <IconKeyboard size={30} />
            <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] normal-text-font flex-1">
              <input
                type="text"
                className="bg-[#8e7fbb] placeholder:text-white"
                placeholder="________"
              />
            </div>
          </div>
        </div>
        <div className="p-4 flex flex-col gap-3">
          <div className="normal-text-font">
          E - A expressão que dizemos quando nos despedimos das pessoas. {" "}
          </div>
          <div className="flex gap-2 items-center">
            <IconKeyboard size={30} />
            <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] normal-text-font flex-1">
              <input
                type="text"
                className="bg-[#8e7fbb] placeholder:text-white"
                placeholder="________ ________"
              />
            </div>
          </div>
        </div>
        <div className="p-4 flex flex-col gap-3">
          <div className="normal-text-font">
          F - A expressão que usamos para saber sobre o estado de ânimo da pessoa.{" "}
          </div>
          <div className="flex gap-2 items-center">
            <IconKeyboard size={30} />
            <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] normal-text-font flex-1">
              <input
                type="text"
                className="bg-[#8e7fbb] placeholder:text-white"
                placeholder="________ ________"
              />
            </div>
          </div>
        </div>
        <div className="p-4 flex flex-col gap-3">
          <div className="normal-text-font">
          G - O cumprimento que utilizamos ao amanhecer.{" "}
          </div>
          <div className="flex gap-2 items-center">
            <IconKeyboard size={30} />
            <div className="bg-[#8e7fbb] p-4 flex flex-col gap-3 rounded-[20px] normal-text-font flex-1">
              <input
                type="text"
                className="bg-[#8e7fbb] placeholder:text-white"
                placeholder="________ ________"
              />
            </div>
          </div>
        </div>
      </div>

      <NavBar currentRoute={currentRoute} />
    </div>
  );
}
