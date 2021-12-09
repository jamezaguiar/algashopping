import React from 'react';
import { Wrapper, Title, Array } from './ShoppingList.styles';
import Checkbox from '../../shared/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllProducts,
  selectSelectedProducts,
} from '../../store/Products/Products.selectors';
import { toggleProduct } from '../../store/Products/Products.actionCreators';

function ShoppingList({ title, displayOnlySelected }) {
  const dispatch = useDispatch();
  const products = useSelector(
    displayOnlySelected ? selectSelectedProducts : selectAllProducts
  );

  function handleToggle(id) {
    dispatch(toggleProduct(id));
  }

  return (
    <Wrapper>
      <Title>{title}:</Title>
      <Array>
        {products.map(product => (
          <Checkbox
            key={product.id}
            value={product.checked}
            title={product.name}
            onClick={() => handleToggle(product.id)}
          />
        ))}
      </Array>
    </Wrapper>
  );
}

export default ShoppingList;
