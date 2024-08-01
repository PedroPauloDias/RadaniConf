import React from 'react';
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from 'next/image';
import CustomModal from '../CustomModal';
import CustomSkeleton from '../skeleton';
import ImageCard from './../ImageCard/index';


export default function CustomCard({ imagem, cores, titulo, descricao, tamanho, cod, referencia, descButton, classe, id, modalTitle, loading }) {

  if (loading) {
    return <CustomSkeleton />;
  }
  


  return (
    <Card className="py-4 p-2 rounded-md ">
      <CardHeader className=" p-4 flex-col items-start  ">
        <h4 className="font-bold text-xl my-1">{titulo}</h4>
        <small className="text-default-500 my-1">ref: {referencia}</small>
      </CardHeader>
      <CardBody className="overflow-visible ">
        <Image
          alt="Card background"
          className="w-full object-cover rounded-md"
          src={imagem}
          width={270}
          height={300}
          loading='lazy'
        />
        {cores && cores.length > 1 ? (
          <CustomModal className=' ' modalTitle={modalTitle}   >
            <Card className="py-4 p-2 bg-gradient-to-b dark:bg-zinc-800 md:w-full "   >
              <div className='w-full md:flex'>
                <CardHeader className="pb-2 pt-2 px-4 flex-col items-start md:w-[70%]">
                  <ImageCard imagens={cores} loading={loading} className='w-full ' />
                </CardHeader>
                <CardBody className="overflow-visible py-2 px-5  md:w-full  md:px-0">
                  <div className='flex flex-col gap-2 '>
                    <p className="font-bold text-large lg:text-lg">Nome: {titulo}</p>
                    <p className="text-tiny font-bold lg:text-lg">Descrição: {descricao}</p>
                    <p className="text-tiny font-bold lg:text-lg">Tamanho: {tamanho}</p>
                    <p className="text-tiny font-bold lg:text-lg" >Nº de referência: {referencia}</p>
                  </div>
                </CardBody>
              </div>
            </Card>
          </CustomModal>
        ) : (
          <CustomModal className='  ' modalTitle={modalTitle}>
            <Card className="py-4 p-2 bg-gradient-to-b dark:bg-zinc-800 md:w-full  ">
              <div className='w-full md:flex'>
                <CardHeader className="pb-2 pt-2 px-4 flex-col items-start md:w-[70%]">
                  <Image
                    alt="Card background"
                    className="w-full object-cover rounded-md  "
                    src={imagem}
                    width={270}
                    height={300}
                    loading='lazy'
                  />
                </CardHeader>
                <CardBody className="overflow-visible py-2 px-5  md:w-full  ">
                  <div className='flex flex-col gap-2'>
                    <p className="font-bold text-large md:text-lg">Nome: {titulo}</p>
                    <p className="text-tiny font-bold md:text-lg">Descrição: {descricao}</p>
                    <p className="text-tiny font-bold md:text-lg">Tamanho: {tamanho}</p>
                    <p className="text-tiny font-bold md:text-lg">Ref: {referencia}</p>
                    {/* <small className="text-default-500">Código: {cod}</small> */}
                  </div>
                </CardBody>
              </div>
            </Card>
          </CustomModal>
        )}
      </CardBody>
    </Card >
  );
}
