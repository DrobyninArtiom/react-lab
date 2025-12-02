import { useState, useRef } from 'react';

export default function Chat() {
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const timeoutID = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleSend() {
    setIsSending(true);
    timeoutID.current = setTimeout(() => {
          alert('Отправлено!');
          setIsSending(false);
        }, 3000);
  }

  function handleUndo() {
    setIsSending(false);
    if (timeoutID.current) {
          clearTimeout(timeoutID.current);
        }
  }

  return (
    <>
      <input
        disabled={isSending}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        disabled={isSending}
        onClick={handleSend}>
        {isSending ? 'Отправляем...' : 'Отправить'}
      </button>
      {isSending &&
        <button onClick={handleUndo}>
          Отменить
        </button>
      }
    </>
  );
}
