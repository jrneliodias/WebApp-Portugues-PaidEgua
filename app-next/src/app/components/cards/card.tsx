

export default function LightColorCard(props:any) {
    return (
        <div className="bg-[#8e7fbb] p-4 px-5 flex gap-5 items-center justify-between  rounded-[20px] w-3/4 mx-auto">
            {props.children}
        </div>
    );
}