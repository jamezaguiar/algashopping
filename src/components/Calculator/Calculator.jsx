import React, { useState } from 'react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sum, subtract } from '../../store/Calculator/Calculator.actions';

const Calculator = () => {
  const dispatch = useDispatch();
  const result = useSelector(state => state.calculator.result);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const handleSum = useCallback(() => {
    dispatch(sum(a, b));
  }, [a, b, dispatch]);

  const handleSubtract = useCallback(() => {
    dispatch(subtract(a, b));
  }, [a, b, dispatch]);

  return (
    <>
      <input
        type="number"
        placeholder="a"
        value={a}
        onChange={event => setA(Number(event.target.value))}
      />
      <input
        type="number"
        placeholder="b"
        value={b}
        onChange={event => setB(Number(event.target.value))}
      />
      <button onClick={handleSum}>somar</button>
      <button onClick={handleSubtract}>subtrair</button>
      <div>{result}</div>
    </>
  );
};

export default Calculator;
