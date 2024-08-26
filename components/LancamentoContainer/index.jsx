'use client'

import React, { useEffect, useRef, useState } from 'react'
import { title } from '../primitives'
import { getProductsByTag } from '../../services/categoryService';
import CustomCard from '../customCard';
import useAuth from '@/app/hooks/useAuth';

export default function LancamentoContainer() {
  const [produtos, setProdutos] = useState([])
  const [loading, setLoading] = useState(true);


  const  {session}  = useAuth();

console.log("DADOS DA SESSAO", session?.user?.role)
  const topRef = useRef()

  useEffect(() => {
    async function fetchCategoriesByTag() {
      try {
        setLoading(true);
        const response = await getProductsByTag('Lancamento');
        setProdutos(response.produtos);
        setLoading(false);       // Após atualizar os dados, rola de volta para o topo da página
        if (topRef.current) {
          topRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
        setLoading(false);
      }
    }
    fetchCategoriesByTag();
  }, []);

  return (
    <>
    
     
        <div className='w-full flex flex-col gap-2 my-8'>
          <h2 className={title({ size: "sm" })}>Lançamentos</h2>
          <div className="w-full h-[4px] mb-8 bg-gradient-to-r from-[#ee9c2e] via-[#85adb5] to-transparent">
            <div></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {
              produtos.map((produto) => (
                <CustomCard
                  key={produto.id}
                  imagem={produto.image}
                  cores={produto.cores}
                  titulo={produto.name}
                  descricao={produto.description}
                  tamanho={produto.sizes}
                  referencia={produto.ref}
                  classe='id'
                  id={produto.id}
                  modalTitle={'Detalhes do ' + produto.name}
                  loading={loading}
                  descButton='detalhes'
                />
              ))
            }
          </div>
        </div>
  </>
  )
}
