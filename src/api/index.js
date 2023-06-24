import axios from 'axios'

const api = axios.create({baseURL: 'https://dummyjson.com'})

export const getCategories = () => api.get('/products/categories')
export const getProductsByCategory = (category) => api.get(`/products/category/${category}`)
export const getAllProducts = () => api.get('/products')
export const getPaginatedProducts = ({limit, skip}) =>
  api.get(`/products?limit=${limit}&skip=${skip}`)
export const getPaginatedProductsByCategory = ({limit, skip, category}) =>
  api.get(`/products/category/${category}?limit=${limit}&skip=${skip}`)
