import React, { useEffect, useRef, useState } from "react";
import CustomCard from "../../components/customCard";
import CustomSkeleton from "../skeleton";
import { title } from "../primitives";
import { RiCloseFill } from "react-icons/ri";

export default function SearchResultComponent({
  produtos,
  loading,
  totalPages,
  currentPage,
  onPageChange,
  setSearchResults,
  setQuery
}) {
  const [firstRender, setFirstRender] = useState(true);
  const topRef = useRef(null);



  const handleClose = () =>  {
    setSearchResults(null);
    setQuery('');
  }

  useEffect(() => {
    if (!firstRender && currentPage > 1) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      setFirstRender(false);
    }
  }, [currentPage]);

  return (
    <>
      <div className="w-full flex flex-col gap-2 my-8">
      <div ref={topRef}></div>
        <div className="cursor-pointer flex justify-between" >
          <button className={title({ size: "sm" })}>Resultado da Busca</button>
          <button onClick={() => handleClose()} className="flex  items-end"><RiCloseFill size={25} /></button>
        </div>
        <div className="w-full h-[4px] mb-8 bg-gradient-to-r from-[#ee9c2e] via-[#85adb5] to-transparent"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {loading ? (
            <CustomSkeleton />
          ) : (
            produtos.map((produto) => (
              <CustomCard
                key={produto.id}
                imagem={produto.image}
                cores={produto.cores}
                titulo={produto.name}
                descricao={produto.description}
                tamanho={produto.sizes}
                referencia={produto.ref}
                id={produto.id}
                modalTitle={"Detalhes do " + produto.name}
                loading={loading}
                descButton="detalhes"
              />
            ))
          )}
        </div>
      </div>
     
    </>
  );
}
