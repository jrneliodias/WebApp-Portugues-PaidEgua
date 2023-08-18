'use client'

import React, { useState } from 'react';
import type { DatePickerProps, SelectProps } from 'antd';
import { DatePicker, InputNumber, Select, Space, Typography } from 'antd';
import 'dayjs/locale/pt-br'
import locale from 'antd/es/date-picker/locale/pt_BR';
import { Button, Form, Input, Radio } from 'antd';
import { FormInputLabel } from '../components/forms/inputs';
import { useRouter } from 'next/navigation';

const dateFormat = 'DD/MM/YYYY';
const customFormat: DatePickerProps['format'] = (value) =>
    `custom format: ${value.format(dateFormat)}`;

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};

const options: SelectProps['options'] = [{ value: 0, label: '0 ano' }, { value: 1, label: '1 ano' }, ...Array.from({ length: 100 }, (_, i) => ({ value: i + 2, label: `${i + 2} anos` }))];
const optionsMonth: SelectProps['options'] = [{ value: 0, label: '0 mês' }, { value: 1, label: '1 mês' }, ...Array.from({ length: 11 }, (_, i) => ({ value: i + 2, label: `${i + 2} meses` }))];
const optionsDays: SelectProps['options'] = [{ value: 0, label: '0 dia' }, { value: 1, label: '1 dia' }, ...Array.from({ length: 30 }, (_, i) => ({ value: i + 2, label: `${i + 2} dias` }))];



export default function RegisterPage() {

    const router = useRouter()

    const [situation, setSituation] = useState('Imigrante');
    const renderFields = situation !== 'Brasileiro'


    function changeTimeToDays(data: any, label: string) {

        const years = data[label].anos
        const month = data[label].meses
        const days = data[label].dias
        data[label] = `${365 * years + 30 * month + days}`
        return data

    }

    function formatDataInput(data: any) {
        data.username = data.username.trim()
        data.profession = data.profession.trim()
       
        delete data.confirm
        if (data.situation === 'Brasileiro') {
            data.timeInBrazil = 'Já nasceu no Brasil'
            data.timeInBelem = 'Já mora no Brasil'
            //setOutput(JSON.stringify(data, null, 2))
            return data
        }
        const dataTimeinBrazil = changeTimeToDays(data, "timeInBrazil")
        const dataTimeinBelemAndBrazil = changeTimeToDays(dataTimeinBrazil, "timeInBelem")
        //setOutput(JSON.stringify(dataTimeinBelemAndBrazil, null, 2))
        return dataTimeinBelemAndBrazil

    }

    async function createUser(data: any) {
        const dataFomatted = formatDataInput(data)
        const response = await fetch('/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataFomatted)
        })

        if (response.ok) {
            router.push('/')
        } else {
            console.error('Registration failed.')
        }


    }
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [form] = Form.useForm();


    const [output, setOutput] = useState('')


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
                    <Form.Item name="username"
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
                        name="birthdate"
                        rules={[{ required: true, message: 'Insira sua data de nascimento.' }]}>

                        <DatePicker size='large' locale={locale}
                            format={dateFormat}
                        />
                    </Form.Item>
                </div>

                <div className="flex flex-col gap-1">
                    <FormInputLabel label='Profissão' spanishLabel='¿Cuál es tu profesión?' />
                    <Form.Item
                        name="profession"
                        rules={[{ required: true, message: 'Missing area' }]}>
                        <Input size='large' placeholder="Profesión" />
                    </Form.Item>
                </div>

                <div className="flex flex-col gap-1">

                    <FormInputLabel label='Escolaridade' spanishLabel='¿Cuál es tu nivel de estudio?' />
                    <Form.Item
                        name="schooling"
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
                    <Form.Item name="situation" rules={[{ required: true, message: 'Escolha uma das opções.' }]}>

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
                                <Form.Item>
                                    <Space size={'large'}>

                                        <Form.Item

                                            name={['timeInBrazil', "anos"]}
                                            rules={[{ required: true, message: 'Por favor, quanto tempo está no Brasil.' },]}
                                            style={{ display: 'flex', gap: '5px' }}
                                        >

                                            <Select
                                                size='large'
                                                placeholder="Ano(s)  "
                                                options={options}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            style={{}}
                                            name={['timeInBrazil', "meses"]}
                                            rules={[{ required: true, message: 'Por favor, quanto tempo está no Brasil.' },]}
                                        >

                                            <Select
                                                size='large'
                                                placeholder="Mes(es)  "
                                                options={optionsMonth}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            style={{}}
                                            name={['timeInBrazil', "dias"]}
                                            rules={[{ required: true, message: 'Por favor, quanto tempo está no Brasil.' },]}
                                        >
                                            <Select
                                                size='large'

                                                placeholder="Dia(s)  "
                                                options={optionsDays}
                                            />
                                        </Form.Item>
                                    </Space>
                                </Form.Item>


                            </div>
                            <div className="flex flex-col gap-1">

                                <FormInputLabel label='Quanto tempo moras em Belém (RMB)?'
                                    spanishLabel='¿Desde cuándo vives en Belém (RMB)?' />
                                <Form.Item>
                                    <Space size={'large'}>

                                        <Form.Item

                                            name={['timeInBelem', "anos"]}
                                            rules={[{ required: true, message: 'Por favor, quanto tempo está no Brasil.' },]}
                                            style={{}}
                                        >

                                            <Select
                                                size='large'

                                                placeholder="Ano(s)  "
                                                options={options}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            style={{}}
                                            name={['timeInBelem', "meses"]}
                                            rules={[{ required: true, message: 'Por favor, quanto tempo está no Brasil.' },]}
                                        >

                                            <Select
                                                size='large'
                                                placeholder="Mes(es)  "
                                                options={optionsMonth}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            style={{}}
                                            name={['timeInBelem', "dias"]}
                                            rules={[{ required: true, message: 'Por favor, quanto tempo está no Brasil.' },]}
                                        >
                                            <Select
                                                size='large'

                                                placeholder="Dia(s)  "
                                                options={optionsDays}
                                            />
                                        </Form.Item>
                                    </Space>
                                </Form.Item>

                            </div>
                        </>
                    ) : (null)}
                {/* <Button htmlType="button" onClick={onFill}>
                    Fill
                </Button> */}

                <Button
                    htmlType="submit"
                    className='bg-cardcolor text-white  shadow-lg rounded font-bold h-10 hover:bg-[--background-nav-app] mt-4'
                >
                    Cadastro
                </Button>


            </Form>
            <pre> {output}</pre>
        </div >


    )

}

