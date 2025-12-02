import { useState, useEffect } from 'react';

// 4_8_2 Make the counter delay configurable - Modified useCounter hook to accept delay as a parameter
export function useCounter(delay: number) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const id = setInterval(() => {
            setCount(c => c + 1);
        }, delay);
        return () => clearInterval(id);
    }, [delay]);
    return count;
}
