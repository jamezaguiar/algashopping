import productsMock from '../../mocks/products.json';
import { PRODUCTS_TOGGLE_PRODUCT } from './Products.actionTypes';

const initialState = productsMock.products;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_TOGGLE_PRODUCT:
      return state.map(product =>
        product.id === action.payload.id
          ? { ...product, checked: !product.checked }
          : product
      );
    default:
      return state;
  }
};

export default reducer;
