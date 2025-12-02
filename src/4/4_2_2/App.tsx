// 4_2_2 Focus the search field - Added ref to input and implemented focus on button click
import { useRef } from 'react';

export default function Page() {
    const inputRef = useRef<HTMLInputElement>(null);
    
    function handleClick() {
        inputRef.current?.focus();
    }

    return (
        <>
            <nav>
                <button onClick={handleClick}>Search</button>
            </nav>
            <input
                ref={inputRef}
                placeholder="Looking for something?"
            />
        </>
    );
}
