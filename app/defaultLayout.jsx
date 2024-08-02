"use client";
import React, { useState ,useEffect } from 'react'
import { getSearchProduct } from "@/services/productServices";
import { Footer } from "../components/footer/index";
import SearchResultComponent from "../components/SearchResult/index";
import MyPagination from "@/components/myPagination";
import { Input } from "@nextui-org/input";
import { SearchIcon } from "@/components/icons";
import { Navbar } from "@/components/navbar";
import WhatsAppButton from './../components/whatsAppButton/index';
import useAuth from './hooks/useAuth';
import CustomSkeleton from "@/components/skeleton";

export default function DefaultLayout({ children }) {
  const [searchResults, setSearchResults] = useState(null);
  const [filteredSearch, setFilteredSearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [query, setQuery] = useState(""); // Estado para armazenar a query de busca
  const [menuOpen, setMenuOpen] = useState(false);


  const {session} = useAuth()

  const handleSearch = async (query, page) => {
    try {
      setLoading(true);
      const response = await getSearchProduct(query, page);
      console.log("Resposta da busca:", response);

      setSearchResults(response.produtos);
      setTotalPages(response.totalPages);
      setCurrentPage(response.currentPage);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar Produtos:", error);
      setSearchResults(null);
      setLoading(false);
    }
  };

  // Efeito para realizar a busca inicial e atualizar ao mudar a página ou a query
  useEffect(() => {
    // Verifica se há uma query válida antes de realizar a busca
    if (query) {
      handleSearch(query, currentPage);
    }
  }, [query, currentPage]); // Executa sempre que query ou currentPage mudar

  
  useEffect(() => {
    if (searchResults) {
      console.log("Sessão:", session);
      let filtered = searchResults;
        filtered = searchResults.filter(searchResult => searchResult.tag && !searchResult.tag === "Lancamento");

      setFilteredSearch(filtered);
      console.log("Pesquisa Filtrada:", filtered);
    }
  }, [searchResults, session]);

  // Função para mudar a página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    if (query.length >= 1) {
      setMenuOpen(menuOpen);
    } if (query.length < 1) {
      setSearchResults(null);
    } else {
      setMenuOpen(false);
    }
  }, [query]);

  return (
    <div className="flex flex-col h-full w-full gap-2">
      <div className="flex relative">
        <div className="flex max-w-2xl w-full px-6">
          <Input
            onFocus={() => setMenuOpen(true)}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar"
            endContent={
              <SearchIcon className="text-sm text-default-400 pointer-events-none flex-shrink-0" />
            }
            className='max-w-32 min-w-36 lg:max-w-64'
          />
        </div>
      </div>
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-2 relative">
        {loading ? (
          <CustomSkeleton />
        ) : (
          searchResults ? (
            <>


              {session?.user?.role === 'vendedor' ? (
                <SearchResultComponent
                  produtos={searchResults}
                  loading={loading}
                  totalPages={totalPages}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                  setSearchResults={setSearchResults}
                  setQuery={setQuery}
                />
              ) : (
                <SearchResultComponent
                  produtos={filteredSearch}
                  loading={loading}
                  totalPages={totalPages}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                  setSearchResults={setSearchResults}
                  setQuery={setQuery}
                />
                )}
              <div className="my-8">
                {/* Renderiza o componente de paginação se houver mais de uma página */}
                {totalPages > 1 && (
                  <div>
                    <MyPagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                  </div>
                )}
              </div>
            </>
          ) : (children)
        )}
        <div className="flex gap-2 justify-end z-50 sticky bottom-3 cursor-pointer">
          <WhatsAppButton />
        </div>
      </main>
      <div className="container mx-auto">
        <Footer />
      </div>
    </div>
  );
}