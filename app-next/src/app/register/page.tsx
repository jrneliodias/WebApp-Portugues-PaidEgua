'use client'

import React, { useState } from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker, InputNumber, Select, Space } from 'antd';
import 'dayjs/locale/pt-br'
import locale from 'antd/es/date-picker/locale/pt_BR';
import { Button, Form, Input, Radio } from 'antd';

import { FormInputLabel } from '../components/forms/inputs';
import { Option } from 'antd/es/mentions';
const dateFormat = 'DD/MM/YYYY';
const customFormat: DatePickerProps['format'] = (value) =>
    `custom format: ${value.format(dateFormat)}`;

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};




export default function RegisterPage() {

    const onFill = () => {
        form.setFieldsValue({
            nome: 'Nélio',
            profissao: 'Estudante',
            email: 'jrneliodias@gmail.com',
            password: '123123',


        });
    };
    const [situation, setSituation] = useState('Imigrante');
    const renderFields = situation !== 'Brasileiro'


    const [passwordVisible, setPasswordVisible] = useState(false);
    const [form] = Form.useForm();


    const [output, setOutput] = useState('')

    function createUser(data: any) {
        data.nome = data.nome.trim()
        data.profissao = data.profissao.trim()
        if (data.situacao === 'Brasileiro') {
            data.tempoNoBrasil = 'Já nasceu no Brasil'
            data.tempoEmBelem = 'Já mora no Brasil'
        }
        setOutput(JSON.stringify(data, null, 2))
    }


    return (
        <div className=" flex flex-col justify-center container moto-g4:w-[90%] items-center gap-5 my-5">

            <h1 className='text-xl font-black'>CADASTRO</h1>

            <Form
                form={form}
                onFinish={createUser}
                autoComplete='on'
                className='flex flex-col w-full max-w-3xl gap-4'>

                <div className="flex flex-col gap-1">
                    <FormInputLabel label='Nome' spanishLabel='Nombre' />
                    <Form.Item name="nome"
                        rules={[
                            { required: true, message: 'Insira seu nome completo.' },
                            { type: 'string', min: 1, message: 'Insira seu nome corretamente.' },
                            { whitespace: true, message: "Nome não pode estar em branco." },
                            

                        ]}>
                        <Input size='large' placeholder="Juan" autoComplete='name' />
                    </Form.Item>
                </div>

                <div className="flex flex-col gap-1">
                    <FormInputLabel label='Data de Nascimento' spanishLabel='Fecha de Nascimento' />
                    <Form.Item
                        name="nascimento"
                        rules={[{ required: true, message: 'Insira sua data de nascimento.' }]}>

                        <DatePicker size='large' locale={locale}
                            format={dateFormat}
                        />
                    </Form.Item>
                </div>

                <div className="flex flex-col gap-1">
                    <FormInputLabel label='Profissão' spanishLabel='¿Cuál es tu profesión?' />
                    <Form.Item
                        name="profissao"
                        rules={[{ required: true, message: 'Missing area' }]}>
                        <Input size='large' placeholder="Profesión" />
                    </Form.Item>
                </div>

                <div className="flex flex-col gap-1">

                    <FormInputLabel label='Escolaridade' spanishLabel='¿Cuál es tu nivel de estudio?' />
                    <Form.Item
                        name="escolaridade"
                        rules={[{ required: true, message: 'Escolha uma opção' }]}>
                        <Select
                            size='large'

                            options={[
                                { value: 'Ensino Médio Incompleto', label: 'Ensino Médio Incompleto' },
                                { value: 'Ensino Médio Completo', label: 'Ensino Médio Completo' },
                                { value: 'Ensino Superior Incompleto', label: 'Ensino Superior Incompleto' },
                                { value: 'Ensino Superior Completo', label: 'Ensino Superior Completo' },

                            ]}
                        />
                    </Form.Item>
                </div>
                <div className="flex flex-col gap-1">

                    <FormInputLabel label='E-mail' spanishLabel='Correo Eletrônico' />
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Insira um e-mail.' }, { type: 'email', message: 'Esse email não é valido.' }]}>
                        <Input size='large' placeholder="juan@email.com" />
                    </Form.Item>

                </div>
                <div className="flex flex-col gap-1">
                    <FormInputLabel label='Senha' spanishLabel='Clave' />
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Insira uma senha.' }, { type: 'string', min: 6, message: 'A senha deve ter no mínimo 6 caracteres' }]}>
                        <Input.Password
                            size='large'
                            placeholder="Clave"
                            visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                        />
                    </Form.Item>
                    <Form.Item
                        name="confirm"
                        className='text-white'
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Por favor, confime sua senha',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('As senha não são as mesmas.'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password
                            placeholder='Confirme sua senha'
                            size='large' />
                    </Form.Item>

                </div>

                <div className="flex flex-col gap-1">
                    <FormInputLabel label='Situação' spanishLabel='Situacion' />
                    <Form.Item name="situacao" rules={[{ required: true, message: 'Escolha uma das opções.' }]}>

                        <Select
                            size='large'
                            onChange={(value) => setSituation(value)}

                            options={[
                                { value: 'Imigrante', label: 'Imigrante' },
                                { value: 'Refugiado', label: 'Refugiado(a)' },
                                { value: 'Brasileiro', label: 'Brasileiro' },

                            ]}
                        />
                    </Form.Item>

                </div>



                {renderFields ?
                    (
                        <>
                            <div className="flex flex-col gap-1">
                                <FormInputLabel label='Quanto tempo moras no Brasil?' spanishLabel='¿Desde cuándo vives en Brasil?' />
                                <Form.Item
                                    name="tempoNoBrasil" rules={[{ required: true, message: 'Por favor, responda essa pergunta.' },]}>
                                    <Input size='large' placeholder="dos años y cuatro meses" />
                                </Form.Item>


                            </div>
                            <div className="flex flex-col gap-1">

                                <FormInputLabel label='Quanto tempo moras em Belém (RMB)?'
                                    spanishLabel='¿Desde cuándo vives en Belém (RMB)?' />
                                <Form.Item name="tempoEmBelem" rules={[{ required: true, message: 'Por favor, responda essa pergunta.' },]}>
                                    <Input size='large' placeholder="dos años y cuatro meses" />
                                </Form.Item>

                            </div>
                        </>
                    ) : (null)}




                <Button htmlType="button" onClick={onFill}>
                    Fill
                </Button>

                <Button
                    htmlType="submit"
                    className='bg-cardcolor text-white  shadow-lg rounded font-bold h-10 hover:bg-[--background-nav-app] mt-4'
                >
                    Cadastro
                </Button>


            </Form>
            <pre> {output}</pre>
        </div>


    )

}

