const categoriesReducer = (
  categories = { data: [], selectedCategoryIndex: null },
  action
) => {
  switch (action.type) {
    case "set_categories":
      return { ...categories, ...action.payload };

    default:
      return categories;
  }
};
export default categoriesReducer;
