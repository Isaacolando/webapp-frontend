//import { addProductToCart } from './redux/actions/cartActions';
export const addProductToCart = (product) => {
    return {
      type: 'ADD_TO_CART',
      payload: product
    };
  };
  
  export const removeFromCart = (productId) => {
    return {
      type: 'REMOVE_FROM_CART',
      payload: productId
    };
  };
  