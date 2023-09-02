export const types = {
    setProductState: '[PRODUCT] Set Product State',
    setError: '[PRODUCT] Set Error',
    setCatalogueState: '[Catalogue] Set Catalogue State'
  }
  
  const productReducer= ( state, action = {}) => {
    switch (action.type) {
      case types.setProductState:
        return {
          ...state,
          product: action.payload,
        }
      case types.setError:
        return {
          ...state,
          error: action.payload,
        }
      default:
        return state;
    }
  }
  
  export default productReducer;