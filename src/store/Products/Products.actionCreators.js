import { PRODUCTS_TOGGLE_PRODUCT } from './Products.actionTypes';

export const toggleProduct = id => {
  return {
    type: PRODUCTS_TOGGLE_PRODUCT,
    payload: { id },
  };
};
