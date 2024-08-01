import axios from 'axios';

const baseUrl = 'https://radani-api.vercel.app/produtos';
export async function getAllProducts() {
  
  const response = await axios.get(`${baseUrl}`)  
  return response;
};

export async function getProductsById(id) {
  try {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response;
  } catch (error) {
    throw new Error(`Erro ao buscar produto por ID: ${error.message}`);
  }
}

export const getSingleProduct = async (id) => {
  try {
    const response = await getProductsById(id);
    const singleProduct = response.data; // Extrai os dados da resposta axios
    console.log(singleProduct)
    return singleProduct;
  } catch (error) {
    console.error('Erro ao buscar produto:', error);
    throw error; // Lança o erro novamente para ser tratado onde a função foi chamada
  }
};

export async function getSearchProduct(query, page = 1, pageSize = 10) {
  try {
    const response = await axios.get(`${baseUrl}/busca/${query}`, {
        params: {
        query: query || '', // Garante que a query não seja nula ou indefinida
        page,
        pageSize
      }
    });
    const searchProduct = response.data; // Extrai os dados da resposta axios
    return searchProduct;
  } catch (error) {
    if (error.response) {
      // O servidor retornou um código de status diferente de 2xx
      console.error("Erro de resposta do servidor:", error.response.data);
    } else if (error.request) {
      // A requisição foi feita, mas não houve resposta
      console.error("Não houve resposta do servidor:", error.request);
    } else {
      // Algo aconteceu na configuração da requisição que causou o erro
      console.error("Erro ao configurar a requisição:", error.message);
    }
    throw error; // Lança o erro novamente para ser tratado onde a função foi chamada
  }
}





export async function getAllProductsTag(tag) {
  try {
    const response = await axios.get(`${baseUrl}?tag=${tag}`);
    return response.data; // Retorna apenas os dados da resposta
  } catch (error) {
    throw new Error(`Erro ao buscar produtos pela tag: ${error.message}`);
  }
}
