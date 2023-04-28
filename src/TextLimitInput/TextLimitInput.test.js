import { renderHook, act } from '@testing-library/react-hooks';
import { useTextLimit } from './useTextLimit';

describe('useTextLimit hook 테스트', () => {

  it('글자 수 제한에 맞춰 작동하는지 확인', () => {
    // useTextLimit 훅을 사용하고, 글자 수 제한을 5로 설정
    const { result } = renderHook(() => useTextLimit(5));

    // 초기 상태에서 isOverLimit은 false
    expect(result.current.isOverLimit).toBe(false);

    // setText를 사용하여 텍스트 입력
    act(() => {
      result.current.setText('안녕하세요');
    });

    // 제한된 글자 수 이내이므로, isOverLimit은 여전히 false이고, 텍스트는 변경된 값이어야 함
    expect(result.current.isOverLimit).toBe(false);
    expect(result.current.text).toBe('안녕하세요');

    // 글자 수 제한을 초과하는 텍스트 입력
    act(() => {
      result.current.setText('안녕하세요, 세상!');
    });

    // 제한된 글자 수를 초과했으므로, isOverLimit은 true가 되어야 하고, 텍스트는 변경된 값이어야 합니다.
    expect(result.current.isOverLimit).toBe(true);
    expect(result.current.text).toBe('안녕하세요');
  });
});
