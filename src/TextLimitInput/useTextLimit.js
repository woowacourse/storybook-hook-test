import { useState } from 'react';

export const useTextLimit = (limit) => {
  const [text, setText] = useState('');
  const [isOverLimit, setIsOverLimit] = useState(false);

  const handleSetText = (newText) => {
    if (newText.length > limit) {
      newText = newText.slice(0, limit);
      setIsOverLimit(true);
    } else {
      setIsOverLimit(false);
    }
    setText(newText);
  };

  return {
    text,
    setText: handleSetText,
    isOverLimit,
  };
};
