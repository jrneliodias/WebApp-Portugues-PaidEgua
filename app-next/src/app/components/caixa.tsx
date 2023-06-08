export default function Botao_menu(props:any) {
    return(
        <div className={`
        flex justify-center items-center
        p-2 rounded-full 
        
        `}>
            {props.children}
        </div>
    )
}