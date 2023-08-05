
import Image from "next/image";
import Personagens from '@/app/images/acai_character/personagens.svg'
import Link from "next/link";


export default function Home() {
    const currentRoute = "/"; // Set the current route dynamically based on your page

    return (

        <div className='items-center px-4 py-2 max-w-5xl w-full h-screen justify-center flex flex-col gap-5'>
            <div className="relative h-[270px] w-3/4">
                <Image
                    src={Personagens}
                    alt="personagens"
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                />
            </div>

            <Link href={"/"} className="border-2 w-full max-w-xs p-2 text-center rounded-full bg-cardcolor font-bold"> Login</Link>
            <Link href={"/"} className="border-2 w-full max-w-xs p-2 text-center rounded-full bg-cardcolor font-bold"> Cadastro</Link>


            <form className='flex flex-col gap-4 w-full max-w-xs'>
                <div className="flex flex-col gap-1">
                    <label>E-mail</label>
                    <input
                        type='email'
                        name='email'
                        className='border border-zinc-200 shadow-sm rounded h-10 px-3 text-black' />
                </div>
                <div className="flex flex-col gap-1">
                    <label>Senha</label>
                    <input
                        type='password'
                        name='password'
                        className='border border-zinc-200 shadow-sm rounded h-10 px-3 text-black' />
                </div>

                <button type='submit'
                    className='bg-emerald-500 rounded font-semibold h-10 hover:bg-emerald-600'>
                    Salvar
                </button>
            </form>
        </div>




    )

}

