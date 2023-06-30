import Image, { StaticImageData } from "next/image";


interface PersonagemProps {
    imgSource: StaticImageData;
    icon: JSX.Element
    speech: string
}


export default function PersonagemComFala(props: PersonagemProps) {
    return (
        <div className="h-full flex flex-col justify-center">
            

                <div className=" flex justify-center">

                    <div className="relative ">
                        <div className=" bg-[--background-nav-app] p-3  rounded-[12px] w-full border border-[--background-nav-app] drop-shadow-md leading-none flex flex-col items-center">
                            <span className=" flex text-sm">
                                {props.speech} {/* Texto a ser renderizado*/}
                            </span>
                            {props.icon}

                        </div> {/* Balão de Fala  */}
                        <div className="absolute w-0 h-0 border-t-[20px] border-t-transparent border-b-[--background-nav-app] border-b-[20px] border-l-[20px] border-l-transparent border-r-transparent border-r-[20px] border left-5 rotate-45 -bottom-[18px] drop-shadow-md z-50">
                        </div>
                    </div>
                </div>
        
            <div className="flex justify-center drop-shadow-lg relative w-full h-1/2">
                <Image
                    src={props.imgSource}
                    fill
                    alt="personagem-acai"
                    className="object-contain p-2"
                    priority={true}

                />
            </div>



        </div>
    );
}