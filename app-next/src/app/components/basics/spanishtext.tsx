export default function SpanishText(props:any) {
    return (
        <div className="span-text-font">
            {props.children}
        </div>
    );
}

export function PhonemeFont(props:any) {
    return (
        <div className="span-fonema-font">
            {props.children}
        </div>
    );
}