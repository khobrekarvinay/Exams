import axios from 'axios';

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_PRODUCTS_FAIL', payload: error.message });
  }
};

export const fetchProductDetails = (id) => async (dispatch) => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      dispatch({ type: 'FETCH_PRODUCT_DETAILS_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'FETCH_PRODUCT_DETAILS_FAIL', payload: error.message });
    }
  };


