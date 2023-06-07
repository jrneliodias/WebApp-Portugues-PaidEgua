export default function Caixa(props:any) {
    return(
        <div className={`
        flex justify-center items-center
        bg-purple-500 rounded-md p-2
        
        `}>
            {props.children}
        </div>
    )
}