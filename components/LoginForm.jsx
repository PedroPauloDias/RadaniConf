"use client";

import SocialLogin from "./SocialLogin";

import { doCredentialLogin } from "../app/actions";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MyButton } from './myButton/index';
import { Input } from "@nextui-org/react";


const LoginForm = () => {
    const router = useRouter();
    const [error, setError] = useState("");

    async function onSubmit(event) {
        event.preventDefault();
        try {
            const formData = new FormData(event.currentTarget);

            const response = await doCredentialLogin(formData);

            if (!!response.error) {
                console.error(response.error);
                setError(response.error.message);
            } else {
                router.push("/Dash");
            }
        } catch (e) {
            console.error(e);
            setError("Check your Credentials");
        }
    }


    return (
        <>
            <form
               className='relative z-20 flex flex-col items-center gap-6  '
                onSubmit={onSubmit}>
                <div className='flex flex-col gap-8 rounded-lg  bg-white bg-opacity-20 backdrop-blur-lg pt-10 pb-10 px-6 w-full h-full m-20'>
                    <h1 className="text-4xl font-semi text-white">Login</h1>
                    <div className="flex flex-col w-full gap-4"></div>
                   
                        <Input className="border mx-2 border-gray-500 rounded" type="email" label="Email" name="email" id="email" />
           
                        <Input className="border mx-2 border-gray-500 rounded" type="password"  label="Senha" name="password" id="password" />
                

                    <MyButton type='submit' color='radani'>LOGIN</MyButton>
                    <div className="w-full  h-[4px]   bg-gradient-to-r from-[#ee9c2e] via-[#85adb5] to-transparent "></div>
                    <div className="flex flex-col w-full ">
              <MyButton onClick={() => router.push('/')} color='radani2'>Visitante</MyButton>
            </div  >
                    </div>

            </form>
            {/* <SocialLogin /> */}
        </>
    );
};

export default LoginForm;