import axios from 'axios';

const baseUrl = 'https://radani-api.vercel.app/categorias';

export async function getAllCategories(page, pageSize) {
  try {
    const response = await axios.get(baseUrl, {
      params: {
        page: page,
        pageSize: pageSize
      }
    })
    // Processar a resposta conforme necessário, incluindo totalPages se aplicável
    const data = response.data.data; // Dados da lista de categorias
    const totalPages = response.data.totalPages; // Total de páginas

    return { data, totalPages };
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
    throw error;
  }
}

export async function getCategories(tag) {
  const response = await axios.get(`${baseUrl}tag?tag=${tag}`); 
  return response;
}

export async function getProductsByTag(tag, page = 1, pageSize = 10) {
  try {
    const response = await axios.get(`${baseUrl}/${tag}`, {
      params: {
        page: page,
        pageSize: pageSize
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(`Erro ao buscar produtos pela tag: ${error.message}`);
  }
}





