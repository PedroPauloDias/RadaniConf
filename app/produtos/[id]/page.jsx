"use client"
import { useRouter } from 'next/router';
import { getProductsById } from '../../../services/productServices';
import { useEffect, useState } from 'react';
import CustomCard from '../../../components/customCard/index';

export default function ProdutoIndividual() {
  const router = useRouter();
  const { id } = router.query;
  const [produtos, setProdutos] = useState([]); // Inicializa como um array vazio
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduto = async () => {
      if (id) {
        try {
          const produtoData = await getProductsById(id);
          console.log("produtoData:", produtoData.data);
          setProdutos([produtoData.data]); // Armazena o produto em um array
        } catch (err) {
          setError('Erro ao buscar produto');
          console.error(err);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchProduto();
  }, [id]);



  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!produtos || produtos.length === 0) {
    return <div>Produto não foi encontrado</div>;
  }

  return (
    <>
      {produtos.map((produto) => (
        <> 
     <h1 className='w-full text-3xl mb-4'>{produto.name} </h1>
     <div className="w-full h-[4px] mb-8 bg-gradient-to-r from-[#ee9c2e] via-[#85adb5]   to-[#ee9c2e]"></div>    
        <CustomCard
          
          imagem={produto.image}
          titulo={produto.name}
          cores={produto.cores}
          descricao={produto.description}
          tamanho={produto.sizes}
          referencia={produto.ref}
          obs={produto.obs}
          descButton='ver mais'
          classe='id'
          id={produto.id}
          />
          
          </>
      ))}
    </>
  );
}
