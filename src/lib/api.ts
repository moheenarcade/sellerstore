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

export const getProducts = async (slugs = "") => {
  try {
    const url = slugs
      ? `${baseUrl}/store/products/${slugs}`
      : `${baseUrl}/store/products`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProductsByCategorySlug = async (slug: string) => {
  const response = await axios.get(`${baseUrl}/categories/${slug}/products`);
  return response.data;
};

export const getProductBySlug = async (slug: string) => {
  try {
    const response = await axios.get(`${baseUrl}/store/product/${slug}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product by slug:', error);
    throw error;
  }
};  

// export const getSettings = async () => {
//   try {
//     const response = await axios.get(`${baseUrl}/store/setting`);
//     const settings = response.data;

//     // Save to localStorage (only runs on client-side)
//     if (typeof window !== 'undefined') {
//       localStorage.setItem('storeSettings', JSON.stringify(settings.data[0]));
//     }

//     return settings;
//   } catch (error) {
//     console.error('Error fetching setting:', error);
//     throw error;
//   } 
// };



export const getSettings = async () => {
  try {
    const response = await axios.get(`${baseUrl}/store/setting`);
    const settings = response.data;

    // Save to localStorage (only runs on client-side)
    if (typeof window !== 'undefined') {
      // Correctly accessing the settings object (no need to index into an array)
      localStorage.setItem('storeSettings', JSON.stringify(settings.data));
    }

    return settings;
  } catch (error) {
    console.error('Error fetching setting:', error);
    throw error;
  }
};



export const getCityState = async () => {
  const savedSettings = JSON.parse(localStorage.getItem('storeSettings') || '{}');
  try {
    const response = await axios.get(`${baseUrl}/store/cities/${savedSettings.country_id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching setting:', error);
    throw error;
  } 
};




