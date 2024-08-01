"use client"
import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../services/productServices';
import { title } from "@/components/primitives";
import CustomSkeleton from "@/components/skeleton";
import CustomCard from '@/components/customCard';

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await getAllProducts();
        console.log("Produtos:", response.data);
        setProdutos(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <>
      <div className='w-full flex flex-col gap-2 my-8'>
        <h2 className={title({ size: "sm" })}>Todos os Produtos</h2>
        <div className="w-full h-[4px] mb-8 bg-gradient-to-r from-[#ee9c2e] via-[#85adb5] to-[#ee9c2e]"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {loading ? (
            <CustomSkeleton />
          ) : (
            // Mapeia os produtos para exibir os cards
            produtos.map((produto) => (
              <CustomCard
                key={produto.id}
                imagem={produto.image}
                cores={produto.cores}
                titulo={produto.name}
                descricao={produto.description}
                tamanho={produto.sizes}
                referencia={produto.ref}
                descButton='ver mais'
                classe='id'
                id={produto.id}
                modalTitle={'Detalhes do ' + produto.name}
                loading={loading} 
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}
