

const InputSearch = () => {


  const { session } = useAuth();

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

      // Filtra produtos se o usuário não for "vendedor"
        filtered = searchResults.filter(searchResult => searchResult.tag && searchResult.tag === "Lancamento");

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
    <>
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
              </>
  )
}

export default InputSearch