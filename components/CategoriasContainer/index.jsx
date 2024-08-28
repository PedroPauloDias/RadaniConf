'use client'

import React, { useEffect, useState } from 'react';
import { title } from '../primitives';
import { getAllCategories } from '../../services/categoryService';
import DisplayCard from '../DisplayCard/index';
import CustomSkeleton from '../skeleton'; 
import useAuth from '@/app/hooks/useAuth';

export default function CategoriasContainer() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredCategories, setFilteredCategories] = useState([])
  
  const  {session}  = useAuth();


  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await getAllCategories();
        console.log("Categorias correta:", response.data);
        setCategories(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
        setLoading(false);
      }
    }
    fetchCategories();
  }, []);


  
  useEffect(() => {
    if (categories.length > 0) {
      console.log("Sessão:", session);
      let categoriasFiltradas = categories;
      categoriasFiltradas = categories.filter(categorie => {
          // Verifica se a tag está definida e é uma string antes de fazer a comparação
          return categorie.tag && categorie.tag !== "BigBang";
        });     

      // Log para verificar os produtos filtrados
      console.log("Produtos Filtrados:", categoriasFiltradas);
      setFilteredCategories(categoriasFiltradas)
    }
  }, [categories, session]);

  return (
    <div className='w-full flex flex-col gap-2 my-8'>
      
      <div className='pointer'>
     <button onClick={() => router.push(`/categorias`)} className={title({ size: "sm", })}  >Categorias</button>
      </div>
      <div className="w-full h-[4px] mb-8 bg-gradient-to-r from-[#ee9c2e] via-[#85adb5] to-transparent"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {loading ? (
          // Renderiza o esqueleto enquanto está carregando
          <CustomSkeleton />
        ) : (
            // Mapeia as categorias para exibir os cards
            session?.user?.role === 'vendedor' ? (
          categories.map(category => (
            <DisplayCard 
              key={category.id}
              imagem={category.image}
              titulo={category.name}
              descButton='Ver todos'
              classe='tag'
              tag={category.tag}
            />
          ))
            ) : (
              filteredCategories.map(category => (
                <DisplayCard 
                  key={category.id}
                  imagem={category.image}
                  titulo={category.name}
                  descButton='Ver todos'
                  classe='tag'
                  tag={category.tag}
                />
              ))
            )
        )}
      </div>
    </div>
  );
}
