const initialState = {
    products: [],
    selectedProduct: null,
    loading: true,
    error: null,
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PRODUCTS_SUCCESS':
        return { ...state, products: action.payload, loading: false };
      case 'FETCH_PRODUCTS_FAIL':
        return { ...state, error: action.payload, loading: false };
        case 'FETCH_PRODUCT_DETAILS_SUCCESS':
      return { ...state, selectedProduct: action.payload };
    case 'FETCH_PRODUCT_DETAILS_FAIL':
      return { ...state, error: action.payload };
      default:
        return state;
    }
  };





  


