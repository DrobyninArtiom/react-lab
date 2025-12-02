import { useEffect, useRef } from 'react';

export default function MyInput(
    {
        value,
        onChange
    }: {
        value: string,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    }) {

    const ref = useRef<HTMLInputElement>(null);
    
        useEffect(() => {
            if (ref.current) {
                ref.current.focus();
            }
        }, []); // Пустой массив зависимостей означает, что эффект выполнится только при монтировании
    
        return (
            <input
                ref={ref}
                value={value}
                onChange={onChange}
            />
        );
    }