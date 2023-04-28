import { renderHook } from '@testing-library/react-hooks';
import { useEvenOrOdd } from './useEvenOrOdd';

test('useEvenOrOdd hook 테스트', () => {
    // useEvenOrOdd 훅을 사용하고, 인자로 2를 전달
    const { result } = renderHook(() => useEvenOrOdd(2));

    expect(result.current).toBe('짝수');
  
    // useEvenOrOdd 훅을 사용하고, 인자로 3를 전달
    const { result: result2 } = renderHook(() => useEvenOrOdd(3));

    expect(result2.current).toBe('홀수');
  });