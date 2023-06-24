import categoriesReducer from './categoriesReducer'
import loadingReducer from './loadingReducer'
import productsReducer from './productsReducer'

const rootReducer = {
  categories: categoriesReducer,
  isLoading: loadingReducer,
  products: productsReducer,
}

export default rootReducer
