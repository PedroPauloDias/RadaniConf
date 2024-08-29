import { title } from "@/components/primitives";
import Image from "next/image";
import banner2 from '../../public/banner2.jpeg'

export default function Sobre() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 p-4 py-8 xl:py-10 xl:flex-row xl:gap-16 xl:mt-32">
        <div className=" w-full max-w-2xl  flex items-center justify-center text-white">
          <Image src={banner2} alt="Descrição da imagem" width={1800} height={600} className='rounded-xl mb-8' />
        </div>
        <div className=" max-w-2xl text-center justify-center flex flex-col gap-4 xl:mb-8 ">
          <div className="xl:mt-[-10] ">
            <h1 className={title()}>Sobre nós</h1>
            <div className="w-full  h-[4px] mb-8 mt-4  bg-gradient-to-r from-[#ee9c2e] via-[#85adb5] to-transparent       xl:mt-8 xl:mb-0"><div></div></div>
          </div>

          <p className="text-left text-bold xl:text-xl">
            A empresa Radani Confecções Ltda, foi fundada em 03/02/1993 e está cadastrada no segmento de Confecções de Roupas infantis com o CNPJ 96.201.785/0001-30. No mercado, a empresa está localizada na Rua Joao Rosa de Oliveira, Nº 59 no bairro Centro em Porangaba - SP, CEP 18260-000.
            Nossos produtos são comercializado nas regiões Norte, Nordeste, Centro-Oeste, Sudeste e Sul.
          </p>
        </div>
      </section>
    </>
  );
}
