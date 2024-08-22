"use client";

import SocialLogin from "./SocialLogin";

import { doCredentialLogin } from "../app/actions";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MyButton } from './myButton/index';
import { Input } from "@nextui-org/react";
import { toast, Toaster } from 'react-hot-toast';
import Link from 'next/link';


const LoginForm = () => {
    const router = useRouter();
    const [error, setError] = useState("");




    async function onSubmit(event) {
        event.preventDefault();
        try {
            const formData = new FormData(event.currentTarget);

            const response = await doCredentialLogin(formData);

            if (response.error) {
                console.error(response.error);
                setError(response.error.message);
            } else {
                router.push("/");
            }
        } catch (e) {
            console.error(e);
            setError("verifique os dados e tente novamente");
        }
    }



    async function handleVisitorLogin() {
        const formData = new FormData();
        formData.append("email", "visitante@example.com");
        formData.append("password", "visitante123");

        toast.promise(
            doCredentialLogin(formData),
            {
                loading: 'Login...',
                success: <b>Bem vindo!</b>,
                error: <b>Could not save.</b>,
            },
            {
                duration: 6000,
            }
        ).then(response => {
            if (response.error) {
                console.error(response.error);
                setError(response.error.message);
            } else {
                setTimeout(() => {
                    router.push("/");
                }, 3000);
            }
        }).catch(err => {
            console.error(err);
        });
    }



    return (
            <>
            <Toaster toastOptions={{ duration: 5000, }}
            />
            <form
                className='relative z-20 flex flex-col  items-center gap-2 sm:gap-6 mt-8 '
                onSubmit={onSubmit}>
                <div className='flex flex-col  -mt-2 sm:mt-0 gap-8 rounded-lg p-4  bg-white bg-opacity-20 backdrop-blur-lg  sm:p-8 px-6 w-full h-full m-20'>
                    <h1 className="text-3xl font-semi text-white">Login</h1>
                    <div className="flex flex-col w-full gap-3 -mt-4 sm:mt-0"></div>

                    <Input className="-mt-2 sm:mt-0 " radius='xs' type="email" label="Email" name="email" id="email" />

                    <Input className="-mt-2 sm:mt-0  " radius='xs' type="password" label="Senha" name="password" id="password" />


                    <MyButton className='-mt-2 sm:mt-0' type='submit' color='radani'>LOGIN</MyButton>
                    <div className="w-full  h-[3px]  sm:h-[4px] -mt-2 sm:mt-0 bg-gradient-to-r from-[#ee9c2e] via-[#85adb5] to-transparent "></div>
                    <div className="flex flex-col w-full -mt-2 sm:mt-0 ">
                        <MyButton type='submit' onClick={handleVisitorLogin} color='radani2'>Visitante</MyButton>
                    </div  >
                    <Link href='/register'><p>registre-se</p>            </Link>

                </div>

            </form>
            </>
            );
    };

            export default LoginForm;