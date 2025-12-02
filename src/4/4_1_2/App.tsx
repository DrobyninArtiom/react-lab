// 4_1_2 Fix a component failing to re-render - Fixed by using useState instead of useRef to trigger re-renders
import { useState } from 'react';

export default function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button onClick={() => {
      setIsOn(!isOn);
    }}>
      {isOn ? 'Вкл' : 'Выкл'}
    </button>
  );
}