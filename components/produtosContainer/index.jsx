'use client'

import React, { useEffect, useState } from 'react';
import { title } from '../../components/primitives';
import { useRouter } from 'next/navigation';
import CustomCard from '../customCard';
import { getAllProducts } from '../../services/productServices';
import DisplayCard from '../DisplayCard';





export default function ProdutosContainer() {
  const [produtos, setProdutos] = useState([])
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await getAllProducts();
        console.log("Produtos:", response.data);
        setProdutos(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar Produtos:", error);
        setLoading(false);
      }
    }
    fetchCategories();
  }, []);


  const limitedProducts = produtos.slice(0, 8);


  return (
    <div className="w-full flex flex-col gap-2 my-8">
      <div className="cursor-pointer">
      <button onClick={() => router.push(`/produtos`)} className={title({ size: "sm", })}  >Produtos</button>
      </div>
      <div className="w-full  h-[4px] mb-8  bg-gradient-to-r from-[#ee9c2e] via-[#85adb5] to-transparent "><div></div></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

        {
          limitedProducts.map((produto) => (
            <CustomCard
            key={produto.id}
            imagem={produto.image}
            cores={produto.cores}
            titulo={produto.name}
            descricao={produto.description}
            tamanho={produto.tamanho}
            referencia={produto.ref}
            classe='id'
            id={produto._id}
            modalTitle={'Detalhes do ' + produto.name}
            loading={loading} // Corrigido para passar o estado correto de loading
            descButton='detalhes'
            />
          ))
        }    
      </div>
    </div>
  )
}
