'use client'
import Link from "next/link";
import acailogo from '@/app/images/assets/acaiandlogo.svg'
import Image from "next/image";
import { Button, Form, Input } from "antd";
import { useState } from "react";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";


interface FormRule {
    email: string;
    password: string;
}

export default function Login() {
    const router = useRouter()
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [form] = Form.useForm<FormRule>();

    const onSubmit = async (data: FormRule) => {
        const signInData = await signIn('credentials', {
            email: data.email,
            password: data.password,
            redirect:false,
        })
        if (signInData?.error){
            console.log(signInData)

        }else{
            router.push('/admin');
        }

    }

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


            <Form
                form={form}
                onFinish={onSubmit}

                autoComplete='on'
                className=' container flex flex-col w-full max-w-3xl gap-2'>

                <Form.Item
                    name="email"
                >
                    <Input
                        prefix={<UserOutlined />}
                        size='large'
                        placeholder="E-mail" />
                </Form.Item>

                <Form.Item
                    name="password"
                  >
                    <Input.Password
                        prefix={<LockOutlined />}
                        size='large'
                        placeholder="Clave"
                        visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                    />
                </Form.Item>
                <Button
                    htmlType="submit"
                    size="large"
                    type="primary"
                    style={{ fontWeight: 'bold' }}
                >
                    Login
                </Button>


            </Form>


        </div>
    )

}

