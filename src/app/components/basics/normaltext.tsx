
export default function NormalText(props:any) {
    return (
    <div className={`text-lg leading-tight ${props.className}`}>
            {props.children}
        </div>
    );
}