export default function TextDiv(props:any) {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
}