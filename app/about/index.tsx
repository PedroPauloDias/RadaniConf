import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import Image from "next/image";
import banner2 from '../../public/banner2.jpeg'
import { Navbar } from "@/components/navbar";

export default function DocsPage() {
  return (
    <>
      <Navbar/>
      <section className="flex flex-col items-center justify-center gap-4 p-4 py-8 xl:py-10 xl:flex-row xl:gap-16 xl:mt-32">
        <div className=" w-full max-w-2xl  flex items-center justify-center text-white">
          <Image src={banner2} alt="Descrição da imagem" width={1800} height={600} className='rounded-xl mb-8' />
        </div>
        <div className=" max-w-2xl text-center justify-center flex flex-col gap-4 xl:mb-8 ">
          <div className="xl:mt-[-10] ">
            <h1 className={title()}>Sobre nós</h1>
            <div className="w-full  h-[4px] mb-8 mt-4  bg-gradient-to-r from-[#ee9c2e] via-[#85adb5] to-transparent       xl:mt-8 xl:mb-0"><div></div></div>
          </div>

          <p className="text-left xl:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eaque esse laboriosam, dolorem deserunt error cum omnis, suscipit amet molestias itaque commodi est corporis aperiam mollitia quos, neque ipsum maxime.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ratione, laborum recusandae ad, facere necessitatibus praesentium totam error nostrum minus quae! Rerum, iste odio officiis eligendi fuga deserunt blanditiis velit!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam ab veniam suscipit voluptatem, doloremque veritatis optio? Dolores, est quas. Eveniet doloremque hic, natus fugiat aperiam quaerat quis reprehenderit repellendus laudantium.
          </p>
        </div>
      </section>
      </>
  );
}
