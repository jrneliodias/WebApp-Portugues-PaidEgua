

export default function LightColorCard(props:any) {
    return (
        <div className="bg-cardcolor p-4 px-5 flex gap-5 items-center justify-between  rounded-[20px] w-5/6 mx-auto">
            {props.children}
        </div>
    );
}