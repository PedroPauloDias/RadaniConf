"use client"
import React, { useEffect, useState } from 'react';
import DefaultLayout from '@/layouts/default';
import CustomSkeleton from '@/components/skeleton';
import DisplayCard from '@/components/DisplayCard/index';
import { getAllCategories } from '../../services/categoryService';
import { useRouter } from "next/navigation";
import useAuth from "../hooks/useAuth";
export default function CategoriasPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const router = useRouter();
  const { session } = useAuth();
 

  useEffect(() => {
    if (!session) {
      router.push("/login");
    }
    fetchCategories();
  }, [currentPage, session]);



  async function fetchCategories() {
    try {
      const response = await getAllCategories(currentPage, itemsPerPage); 
      setCategories(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar categorias:', error);
      setLoading(false);
    }
  }

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <DefaultLayout>
      <div className='w-full flex flex-col gap-2 my-8'>
        <h2 className='text-3xl font-semibold'>Todas as Categorias</h2>
        <div className="w-full h-[4px] mb-8 bg-gradient-to-r from-[#ee9c2e] via-[#85adb5] to-transparent"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {loading ? (
            <CustomSkeleton />
          ) : (
            categories.map(category => (
              <DisplayCard
                key={category._id}
                imagem={category.image}
                titulo={category.name}
                descricao={category.description}
                tamanho={category.tamanho}
                referencia={category.ref}
                tag={category.tag}
                descButton='ver mais'
                classe='tag'
                id={category.tag}
                modalTitle={'Detalhes do ' + category.name}
              />
            ))
          )}
        </div>
      </div>
    </DefaultLayout>
  );
}
