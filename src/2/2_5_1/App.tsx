// 2_5_1 Fix a request counter - Fixed by using functional state updates to ensure correct values are used
import { useState } from 'react';

export default function RequestTracker() {
    const [pending, setPending] = useState(0);
    const [completed, setCompleted] = useState(0);

    async function handleClick() {
            setPending(prevPending => prevPending + 1);
            await delay(3000);
            setPending(prevPending => prevPending - 1);
            setCompleted(prevCompleted => prevCompleted + 1);
        }

    return (
        <>
            <h3>Отложенные: {pending}</h3>
            <h3>Выполненные: {completed}</h3>
            <button onClick={handleClick}>Купить</button>
        </>
    );
}

function delay(ms: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}