import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getCategories = async () => {
  try {
    const response = await axios.get(`${baseUrl}/categories`);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const getProducts = async () => {
    try {
      const response = await axios.get(`${baseUrl}/store/products`);
      return response.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  };

export const getProductsByCategorySlug = async (slug: string) => {
  const response = await axios.get(`${baseUrl}/categories/${slug}/products`);
  return response.data;
};

