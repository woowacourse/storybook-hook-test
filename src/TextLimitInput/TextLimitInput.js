import React from 'react';
import { useTextLimit } from './useTextLimit';

export const TextLimitInput = ({ limit }) => {
  const { text, setText, isOverLimit } = useTextLimit(limit);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={isOverLimit ? 'invalid' : 'valid'}
      />
      {isOverLimit && <p className="error">글자 수가 제한을 초과했습니다.</p>}
    </div>
  );
};

