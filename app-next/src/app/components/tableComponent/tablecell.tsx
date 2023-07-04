export default function TableCell(props:any) {
    const { className, children } = props;
    return (
        <div className={`flex flex-col justify-center items-center ${className}`}>
            {children}
        </div>
    );
}