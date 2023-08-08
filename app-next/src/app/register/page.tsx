'use client'

import React, { useState } from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker, Select } from 'antd';
import 'dayjs/locale/pt-br'
import locale from 'antd/es/date-picker/locale/pt_BR';
import { Button, Form, Input, Radio } from 'antd';

import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const dateFormat = 'DD/MM/YYYY';
const customFormat: DatePickerProps['format'] = (value) =>
    `custom format: ${value.format(dateFormat)}`;

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};

const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};

export default function Register() {
    const [passwordVisible, setPasswordVisible] = useState(false);


    return (
        <div className="container flex flex-col justify-center items-center gap-5 my-5 ">

            <h1 className='text-xl font-black'> CADASTRO</h1>

            <form className='flex flex-col gap-4 w-full max-w-3xl '>
                <div className="flex flex-col gap-1">
                    <div className="flex flex-col">
                        <label className="leading-none">Nome</label>
                        <label className="text-gray-400 italic ">Nombre</label>
                    </div>
                    <Input size='large' placeholder="Juan"  autoComplete='name' />
                    {/* <input
                        type='text'
                        name='name'
                        className='border-2 bg-cardcolor shadow-sm rounded-full h-10 p-5  focus:outline-none '
                        placeholder="Juan" /> */}
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex flex-col">
                        <label className="leading-none">Data de Nascimento</label>
                        <label className="text-gray-400 italic">Fecha de nascimento</label>
                    </div>
                    <DatePicker size='large' onChange={onChange} locale={locale}
                        format={dateFormat}
                    />

                </div>


                <div className="flex flex-col gap-1">
                    <div className="flex flex-col">
                        <label className="leading-none">Profissão</label>
                        <label className="text-gray-400 italic">¿Cuál es tu profesión?</label>
                    </div>
                    <Input size='large' placeholder="Profesión" />
                    {/* <input
                        type='text'
                        name='name'
                        className='border-2 bg-cardcolor shadow-sm rounded-full h-10 p-5 placeholder:italic focus:outline-none '
                        placeholder="" /> */}
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex flex-col">
                        <label className="leading-none">Escolaridade</label>
                        <label className="text-gray-400 italic">¿Cuál es tu nivel de estudio?</label>
                    </div>

                    <Select
                        size='large'
                        defaultValue=""
                        onChange={handleChange}
                        options={[
                            { value: 'Ensino Médio Incompleto', label: 'Ensino Médio Incompleto' },
                            { value: 'Ensino Médio Completo', label: 'Ensino Médio Completo' },
                            { value: 'Ensino Superior Incompleto', label: 'Ensino Superior Incompleto' },
                            { value: 'Ensino Superior Completo', label: 'Ensino Superior Completo' },

                        ]}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex flex-col">

                        <label className="leading-none">E-mail</label>
                        <label className="text-gray-400 italic">Correo Eletrônico</label>
                    </div>
                    <Input size='large' placeholder="Correo eletrônico" />
                    {/* <input
                        type='email'
                        name='email'
                        className='border-2 bg-cardcolor shadow-sm rounded-full h-10 p-5 placeholder:italic focus:outline-none '
                        placeholder="Correo eletrônico" /> */}
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex flex-col">
                        <label className="leading-none">Senha</label>
                        <label className="text-gray-400 italic">Clave</label>
                    </div>


                    <Input.Password
                        size='large'
                        placeholder="password"
                        visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                    />

                    {/* 
                    <input
                        type='password'
                        name='password'
                        className='border-2 bg-cardcolor rounded-full shadow-sm h-10 p-5 placeholder:italic focus:outline-none '
                        placeholder="Senha" /> */}
                </div>

                <div className="flex flex-col gap-1">
                    <div className="flex flex-col">
                        <label className="leading-none">Situação</label>
                        <label className="text-gray-400 italic">Situacion</label>
                    </div>
                    <Select
                        size='large'
                        defaultValue=""
                        onChange={handleChange}
                        options={[
                            { value: 'Imigrante', label: 'Imigrante' },
                            { value: 'Refugiado', label: 'Refugiado(a)' },
                            { value: 'Brasileiro', label: 'Brasileiro' },

                        ]}
                    />
                    {/* <select className="block focus:shadow-outline border w-full bg-cardcolor shadow-sm rounded-full h-10 p-5 focus:outline-none  text-white  focus:border-gray-500"
                        id="grid-state"
                    >

                        <option>Imigrante</option>
                        <option>Refugiado(a)</option>
                    </select> */}
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex flex-col">
                        <label className="leading-none">Quanto tempo moras no Brasil?</label>
                        <label className="text-gray-400 italic">¿Desde cuándo vives en Brasil?</label>
                    </div>
                    <Input size='large' placeholder="dos años y cuatro meses" />
                    {/* <input
                        type='text'
                        name='time'
                        className='border-2 bg-cardcolor shadow-sm rounded-full h-10 p-5 placeholder:italic focus:outline-none '
                        placeholder="" /> */}
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex flex-col">
                        <label className="leading-none">Quanto tempo moras em Belém (RMB)?</label>
                        <label className="text-gray-400 italic">¿Desde cuándo vives en Belém (RMB)?</label>
                    </div>
                    <Input size='large' placeholder="dos años y cuatro meses" />

                    {/* <input
                        type='text'
                        name='time'
                        className='border-2 bg-cardcolor shadow-sm rounded-full h-10 p-5 placeholder:italic focus:outline-none '
                        placeholder="" /> */}
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

