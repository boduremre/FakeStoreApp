import axios from "axios";

const API_URL = "https://fakestoreapi.com";

export const getProducts = () => axios.get(`${API_URL}/products?limit=4`);

export const getProductById = (id) => axios.get(`${API_URL}/products/${id}`);

export const getCategories = () => axios.get(`${API_URL}/products/categories`);

export const getProductsByCategory = (category) =>
  axios.get(`${API_URL}/products/category/${category}`);
