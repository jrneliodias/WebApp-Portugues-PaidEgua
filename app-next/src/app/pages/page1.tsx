import Image from "next/image";
import ballon0 from "../images/ballon1.svg"
import acai0 from "../images/acai0.png"

export default function Pag1() {
    return (
        <div className="flex flex-col justify-center item-center py-2 gap-5 h-full m-10">
            <div className="relative flex justify-center">
                {/* <Image
                    src={ballon0}
                    height={250}
                    width={250}
                    alt="ballon"
                    className="relative z-100"
                /> */}
                <div className="relative">

                    <div className=" bg-[--background-nav-app] p-5  rounded-[40px] inline-block w-[300px] border border-[--background-nav-app] drop-shadow-md z-50">
                        Esperamos que este
                        aprendizado colabore
                        para as tuas relações
                        de comunicação no
                        cotidiano em nossa
                        cidade.
                    </div>
                    <div className="absolute w-0 h-0 border-t-[20px] border-t-transparent border-b-[--background-nav-app] border-b-[20px] border-l-[20px] border-l-transparent border-r-transparent border-r-[20px] border left-[80px] rotate-45 -bottom-[18px] drop-shadow-md ">
                    </div>
                </div>

            </div>
            <div className="flex justify-center drop-shadow-lg">
                <Image
                    src={acai0}
                    height={200}
                    width={200}
                    alt="personagem-acai"
                />
            </div>

        </div>

    )

}
