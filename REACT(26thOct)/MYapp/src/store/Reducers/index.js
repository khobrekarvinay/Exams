import { combineReducers } from 'redux';
import cartReducer from '../Reducers/cartReducer';
import productReducer from '../Reducers/productReducer';


const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
});

export default rootReducer;
