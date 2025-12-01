// 3_4_2 Swap two form fields - Fixed by lifting state up to parent component and using keys to preserve field identity

import { useState } from 'react';

export default function App() {
    const [reverse, setReverse] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    
    let checkbox = (
        <label>
            <input
                type="checkbox"
                checked={reverse}
                onChange={e => setReverse(e.target.checked)}
            />
            Reverse order
        </label>
    );
    if (reverse) {
        return (
            <>
                <Field label="Last name" value={lastName} onChange={setLastName} key="lastName" />
                <Field label="First name" value={firstName} onChange={setFirstName} key="firstName" />
                {checkbox}
            </>
        );
    } else {
        return (
            <>
                <Field label="First name" value={firstName} onChange={setFirstName} key="firstName" />
                <Field label="Last name" value={lastName} onChange={setLastName} key="lastName" />
                {checkbox}
            </>
        );
    }
}

function Field({ label, value, onChange }: { label: string, value: string, onChange: (value: string) => void }) {
    return (
        <label>
            {label}:{' '}
            <input
                type="text"
                value={value}
                placeholder={label}
                onChange={e => onChange(e.target.value)}
            />
        </label>
    );
}


