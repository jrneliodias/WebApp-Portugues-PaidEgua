'use client'
import Link from "next/link";
import acailogo from '@/app/images/assets/acaiandlogo.svg'
import Image from "next/image";
import { Input } from "antd";
import { useState } from "react";
import { UserOutlined, LockOutlined } from '@ant-design/icons';


export default function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (

        <div className="container flex flex-col gap-10 justify-center items-center my-auto">
            <div className="relative w-full h-60">
                <Image
                    src={acailogo}
                    alt="personagens"
                    fill

                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                />
            </div>

            <form className='flex flex-col gap-4 w-full max-w-xs'>
                <div className="flex flex-col gap-1">
                <Input placeholder="E-mail" prefix={<UserOutlined />} />
                    {/* <input
                        type='email'
                        name='email'
                        className='border-2 bg-cardcolor shadow-sm rounded-full h-10 px-3' 
                        placeholder="E-mail"/> */}
                </div>
                <div className="flex flex-col gap-1">
                <Input.Password
                prefix={<LockOutlined />}
                        placeholder="password"
                        visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                    />
                 
                    {/* <input
                        type='password'
                        name='password'
                        className='border-2 bg-cardcolor rounded-full shadow-sm h-10 px-3' 
                        placeholder="Senha"/> */}
                </div>

                <button type='submit'
                    className='bg-emerald-500 rounded font-semibold h-10 hover:bg-emerald-600'>
                    Login
                </button>
            </form>

        </div>
    )

}

