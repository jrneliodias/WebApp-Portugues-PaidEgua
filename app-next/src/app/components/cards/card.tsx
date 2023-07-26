

export default function LightColorCard(props:any) {
    return (
        <div className={`bg-cardcolor p-4 px-5 flex gap-5 items-center justify-between  rounded-[20px] w-full mx-auto ${props.className}`}>
            {props.children}
        </div>
    );
}

export function WordCard(props:any) {
    return (
        <div className={`bg-[#8e7fbb] px-3 py-2 flex gap-3 rounded-[1.5rem] ${props.className}`}>
            {props.children}
        </div>
    );
}
