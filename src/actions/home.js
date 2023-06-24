import {getAllProducts, getCategories, getPaginatedProducts, getProductsByCategory} from '../api'

export const fetchHomeData = () => async (dispatch) => {
  const categories = await getCategories()
  const trendingCategories = categories.data.slice(-5, -1)
  const featuredCategoryIndex = Math.floor(Math.random() * categories.data.length)
  dispatch({
    type: 'set_all_categories',
    payload: {data: ['all', ...categories.data], selectedIndex: 0, currentPage: 0},
  })
  dispatch({
    type: 'set_trending_categories',
    payload: {data: trendingCategories, selectedIndex: 0, currentPage: 0},
  })
  dispatch({type: 'set_featured_category_index', payload: featuredCategoryIndex})
  const categoricalProducts = await getAllProducts()
  dispatch({
    type: 'set_categorical_products',
    payload: {...categoricalProducts.data},
  })
  const trendingProducts = await getProductsByCategory(trendingCategories[0])
  dispatch({
    type: 'set_trending_products',
    payload: {...trendingProducts.data},
  })
  const featuredProducts = await getProductsByCategory(categories.data[featuredCategoryIndex])
  dispatch({
    type: 'set_featured_products',
    payload: {...featuredProducts.data},
  })
  dispatch({type: 'set_is_loading', payload: false})
}

export const updateProductsList =
  ({categories, type, selectedIndex}) =>
  async (dispatch) => {
    const {data} =
      categories[selectedIndex] === 'all'
        ? await getAllProducts()
        : await getProductsByCategory(categories[selectedIndex])

    const actionType = `set_${type === 'all' ? 'categorical' : type}_products`
    dispatch({type: `set_${type}_categories`, payload: {selectedIndex}})
    dispatch({type: actionType, payload: {...data, currentPage: 0}})
  }

export const fetchPaginatedProducts =
  ({type, products, limit, skip, currentPage}) =>
  async (dispatch) => {
    const {data} = await getPaginatedProducts({limit, skip})
    dispatch({
      type: `set_${type}_products`,
      payload: {...data, products: [...products, ...data.products], limit, currentPage},
    })
  }
