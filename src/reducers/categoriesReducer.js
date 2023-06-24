const individualCategories = {data: [], selectedIndex: null}
const categoriesReducer = (
  categories = {
    all: individualCategories,
    trending: individualCategories,
    featured: {selectedIndex: null},
  },
  action
) => {
  switch (action.type) {
    case 'set_categories':
      return {...categories, ...action.payload}
    case 'set_all_categories':
      return {...categories, all: {...categories.all, ...action.payload}}
    case 'set_trending_categories':
      return {...categories, trending: {...categories.trending, ...action.payload}}
    case 'set_featured_category_index':
      return {...categories, featured: {selectedIndex: action.payload}}
    default:
      return categories
  }
}
export default categoriesReducer
