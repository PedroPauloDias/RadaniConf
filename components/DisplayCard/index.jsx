'use client'
import React, { useState } from 'react'
import { Card, CardHeader, CardBody, } from "@nextui-org/react";

import Image from 'next/image';
import { LuMoveRight } from "react-icons/lu";
import { useRouter } from 'next/navigation'
import CustomModal from '../CustomModal';
import CustomSkeleton from '../skeleton';
import MyButton from '../myButton';

export default function DisplayCard({ imagem, titulo, descricao, tag , tamanho, referencia, descButton, classe, id , loading }) {
  const router = useRouter()

  const handleClick = () => {
    if (classe === 'id') {
      router.push(`produtos/${id}`);
    } if (classe === 'tag') {
      router.push(`categorias/${tag}`);
    }
  };

  if (loading) {
    return <CustomSkeleton />; 
  }

  return (
    <Card className="py-6 p-2 hover:dark:bg-zinc-800 rounded-md">
      <CardHeader className=" p-4 flex-col items-start">
        <h4 className="font-semi text-2xl ">{titulo}</h4>
        <p className="text-tiny uppercase font-bold">{descricao}</p>
        <small className="text-default-500">{referencia}</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="w-full object-cover rounded-md "
          src={imagem}
          width={270}
          height={270}
          loading='lazy'
        />
        <MyButton onClick={handleClick}
            color="radani" className=" max-w-28 flex items-center justify-center text-sm gap-2 p-2 mt-8 mb-3">
          ver mais
          <LuMoveRight className='mt-1'/>
        </MyButton>
      </CardBody>
    </Card>

  )
}
