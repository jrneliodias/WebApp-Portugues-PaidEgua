import React from 'react'

export default function FormApp() {

    
    return (
        <div className='main-layout h-screen justify-center '>
            <form className='flex flex-col gap-4 w-full max-w-xs'>
                <div className="flex flex-col gap-1">
                    <label>E-mail</label>
                    <input 
                    type='email' 
                    name='email' 
                    className='border border-zinc-200 shadow-sm rounded h-10 px-3 text-black'/>
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
