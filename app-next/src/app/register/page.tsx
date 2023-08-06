'use client'
import Link from "next/link";
import acailogo from '@/app/images/assets/acaiandlogo.svg'
import Image from "next/image";
import SpanishText from "../components/basics/spanishtext";



export default function Register() {

    return (
        <div className="container flex flex-col justify-center items-center gap-5 my-auto">

            <h1 className="text-xl font-black ">CADASTRO</h1>

            <form className='flex flex-col gap-4 w-full max-w-xs'>
                <div className="flex flex-col gap-1">
                    <div className="flex flex-col">
                        <label className="leading-none">Nome</label>
                        <label className="text-gray-400 italic ">Nombre</label>
                    </div>
                    <input
                        type='text'
                        name='name'
                        className='border-2 bg-cardcolor shadow-sm rounded-full h-10 p-5  focus:outline-none'
                        placeholder="Juan" />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex flex-col">
                        <label className="leading-none">Data de Nascimento</label>
                        <label className="text-gray-400 italic">Fecha de nascimento</label>
                    </div>
                    <input
                        type='text'
                        name='name'
                        className='border-2 bg-cardcolor shadow-sm rounded-full h-10 p-5 placeholder:italic focus:outline-none'
                        placeholder="" />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex flex-col">
                        <label className="leading-none">Profissão</label>
                        <label className="text-gray-400 italic">¿Cuál es tu profesión?</label>
                    </div>
                    <input
                        type='text'
                        name='name'
                        className='border-2 bg-cardcolor shadow-sm rounded-full h-10 p-5 placeholder:italic focus:outline-none'
                        placeholder="" />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex flex-col">
                        <label className="leading-none">Escolaridade</label>
                        <label className="text-gray-400 italic">¿Cuál es tu nivel de estudio?</label>
                    </div>
                    <select className="block focus:shadow-outline border w-full bg-cardcolor shadow-sm rounded-full h-10 p-5 focus:outline-none text-white  focus:border-gray-500"
                        id="grid-state"
                    >
                        <option>Ensino Médio Incompleto</option>
                        <option>Ensino Médio Completo</option>
                        <option>Ensino Superior Incompleto</option>
                        <option>Ensino Superior Completo</option>

                    </select>
                </div>
                <div className="flex flex-col gap-1">
                    <label>E-mail</label>
                    <input
                        type='email'
                        name='email'
                        className='border-2 bg-cardcolor shadow-sm rounded-full h-10 p-5 placeholder:italic focus:outline-none'
                        placeholder="Correo eletrônico" />
                </div>
                <div className="flex flex-col gap-1">
                    <label>Senha</label>

                    <input
                        type='password'
                        name='password'
                        className='border-2 bg-cardcolor rounded-full shadow-sm h-10 p-5 placeholder:italic focus:outline-none'
                        placeholder="Senha" />
                </div>

                <button
                    type='submit'
                    className='bg-cardcolor  shadow-lg rounded font-bold h-10 hover:bg-[--background-nav-app] mt-4'
                >
                    Cadastro
                </button>
            </form>
        </div>


    )

}

