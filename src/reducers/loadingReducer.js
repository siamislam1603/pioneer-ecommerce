const loadingReducer = (isLoading = true, action) => {
  switch (action.type) {
    case 'set_is_loading':
      return action.payload

    default:
      return isLoading
  }
}

export default loadingReducer
