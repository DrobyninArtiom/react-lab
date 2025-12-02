// 4_8_3 Extract useInterval out of useCounter - Extracted interval logic into a separate useInterval hook
import { useState } from 'react';
import { useInterval } from './useInterval';

export function useCounter(delay: number = 1000) {
  const [count, setCount] = useState(0);
  useInterval(() => {
    setCount(c => c + 1);
  }, delay);
  return count;
}