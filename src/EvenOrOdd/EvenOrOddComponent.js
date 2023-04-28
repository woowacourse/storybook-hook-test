import React from 'react';
import { useEvenOrOdd } from './useEvenOrOdd';

const EvenOrOddComponent = ({ number }) => {
  const result = useEvenOrOdd(number);

  return <div>{number}는 {result}입니다.</div>;
};

export default EvenOrOddComponent;
