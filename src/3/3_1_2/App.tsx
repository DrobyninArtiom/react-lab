// 3_1_2 Profile editor - Implemented toggle between edit and view modes with real-time updates
import { useState } from 'react';

export default function EditProfile() {
    const [isEditing, setIsEditing] = useState(false);
    const [firstName, setFirstName] = useState('Jane');
    const [lastName, setLastName] = useState('Jacobs');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setIsEditing(!isEditing);
    };

    const handleFirstNameChange = (e: any) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e: any) => {
        setLastName(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                First name: {isEditing ? (
                    <input
                        value={firstName}
                        onChange={handleFirstNameChange}
                    />
                ) : (
                    <b>{firstName}</b>
                )}
            </label>
            <label>
                Last name: {isEditing ? (
                    <input
                        value={lastName}
                        onChange={handleLastNameChange}
                    />
                ) : (
                    <b>{lastName}</b>
                )}
            </label>
            <button type="submit">{isEditing ? 'Save Profile' : 'Edit Profile'}</button>
            <p>
                <i>Hello, {firstName} {lastName}!</i>
            </p>
        </form>
    );
}