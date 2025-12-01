// 3_4_1 Fix disappearing input text - Fixed by ensuring Form component maintains its state by keeping it in the same place in the tree

import { useState } from 'react';

export default function App() {
    const [showHint, setShowHint] = useState(false);
    return (
        <div>
            {showHint && <p><i>Hint: Your favorite city?</i></p>}
            <Form />
            {showHint ? (
                <button onClick={() => {
                    setShowHint(false);
                }}>Hide hint</button>
            ) : (
                <button onClick={() => {
                    setShowHint(true);
                }}>Show hint</button>
            )}
        </div>
    );
}

function Form() {
  const [text, setText] = useState('');
  return (
    <textarea
      value={text}
      onChange={e => setText(e.target.value)}
    />
  );
}

