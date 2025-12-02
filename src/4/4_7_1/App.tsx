// 4_7_1 Fix a resetting interval - Fixed by using functional state update to avoid dependency on count
import { useState, useEffect } from 'react';

export default function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
            console.log('✅ Creating an interval');
            const id = setInterval(() => {
                console.log('⏰ Interval tick');
                setCount(c => c + 1); // Use functional update to avoid dependency on count
            }, 1000);
            return () => {
                console.log('❌ Clearing an interval');
                clearInterval(id);
            };
        }, []); // Empty dependency array to prevent recreation of interval

    return <h1>Counter: {count}</h1>;
}