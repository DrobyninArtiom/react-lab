// 4_8_1 Extract a useCounter Hook - Extracted counter logic into a reusable custom hook
import { useCounter } from "./useCounter";

export default function Counter() {
  const count = useCounter();
  return <h1>Seconds passed: {count}</h1>;
}
