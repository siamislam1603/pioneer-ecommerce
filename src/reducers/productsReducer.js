const productsRes = {products: [], total: 0, limit: 0, skip: 0, currentPage: 0}
const productsReducer = (
  products = {categorical: productsRes, trending: productsRes, featured: productsRes},
  action
) => {
  switch (action.type) {
    case 'set_categorical_products':
      return {...products, categorical: {...products.categorical, ...action.payload}}
    case 'set_trending_products':
      return {...products, trending: {...products.trending, ...action.payload}}
    case 'set_featured_products':
      return {...products, featured: {...products.featured, ...action.payload}}
    default:
      return products
  }
}
export default productsReducer
