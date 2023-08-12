import Link from "next/link";

export default function MainButton(props:any) {
    return (
        <Link className="border-2 mx-5 max-w-xl p-2 text-center rounded-full bg-cardcolor font-bold hover:bg-[--background-nav] hover:scale-105 duration-75" 
        href={`${props.link}`} 
        passHref>
       { props.children  }                          {/* <BtnVoltar /> */}
    </Link>
    );
}