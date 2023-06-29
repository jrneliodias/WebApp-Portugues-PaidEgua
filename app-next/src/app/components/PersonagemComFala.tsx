import Image, { StaticImageData } from "next/image";


interface PersonagemProps {
    imgSource: StaticImageData;
}

export default function PersonagemComFala(props: PersonagemProps) {
    return (
        <div className="h-full">
            <div className=" flex justify-center">
                <div className="relative m-5 ">
                    <div className=" bg-[--background-nav-app] p-2  rounded inline-block w-full border border-[--background-nav-app] drop-shadow-md z-50">
                        <span className="text-sm/[0px]">
                            Me chamo Carlito e sou a ação de digitar. Meu símbolo é o
                            </span>
                    </div>
                    <div className="absolute w-0 h-0 border-t-[20px] border-t-transparent border-b-[--background-nav-app] border-b-[20px] border-l-[20px] border-l-transparent border-r-transparent border-r-[20px] border left-5 rotate-45 -bottom-[18px] drop-shadow-md ">
                    </div>
                </div>
            </div>
            <div className="flex justify-center drop-shadow-lg relative w-full h-1/2">
                <Image
                    src={props.imgSource}
                    fill
                    alt="personagem-acai"
                    className="object-contain"
                />
            </div>
        </div>
    );
}