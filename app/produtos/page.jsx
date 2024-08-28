"use client"
import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../services/productServices';
import { title } from "@/components/primitives";
import CustomSkeleton from "@/components/skeleton";
import CustomCard from '@/components/customCard';
import useAuth from '../hooks/useAuth';

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredProductNames, setFilteredProductNames] = useState([]);

  const  {session}  = useAuth();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await getAllProducts();
        console.log("Produtos:", response.data);
        console.log("PRODUTO_OBS",response.data.obs)
        setProdutos(response.data);
        console.log("OKKKKK",produtos.obs)
        setLoading(false);


      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    if (produtos.length > 0) {
      console.log("Sessão:", session);
      let produtosFiltrados = produtos;
        produtosFiltrados = produtos.filter(produto => {
          // Verifica se a tag está definida e é uma string antes de fazer a comparação
          return produto.tag && produto.tag !== "BigBang";
        });     

      // Log para verificar os produtos filtrados
      console.log("Produtos Filtrados:", produtosFiltrados);
      setFilteredProductNames(produtosFiltrados)
    }
  }, [produtos, session]);

  return (
    <>
     <div className='w-full flex flex-col gap-2 my-8'>

        <h2 className="text-3xl font-semibold">Todos os Produtos</h2>
        <div className="w-full h-[4px] mb-8 bg-gradient-to-r from-[#ee9c2e] via-[#85adb5] to-[#ee9c2e]"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {loading ? (
            <CustomSkeleton />
          ) : (
            session?.user?.role === 'vendedor' ? (
              produtos.map((produto) => (

                <CustomCard
                  key={produto.id}
                  imagem={produto.image}
                  cores={produto.cores}
                  titulo={produto.name}
                  descricao={produto.description}
                  tamanho={produto.sizes}
                  referencia={produto.ref}
                  obs={produto.obs}
                  descButton='ver mais'
                  classe='id'
                  id={produto.id}
                  modalTitle={'Detalhes do ' + produto.name}
                  loading={loading}
                />

              ))
            ) : (
              filteredProductNames.map((produto) => (
                <CustomCard
                  key={produto.id}
                  imagem={produto.image}
                  cores={produto.cores}
                  titulo={produto.name}
                  descricao={produto.description}
                  tamanho={produto.sizes}
                  referencia={produto.ref}
                  obs={produto.obs}
                  descButton='ver mais'
                  classe='id'
                  id={produto.id}
                  modalTitle={'Detalhes do ' + produto.name}
                  loading={loading}
                />
              ))
            )
          )}
        </div>
      </div>
    </>
  );
};
