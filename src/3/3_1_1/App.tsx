
// 3_1_1 Add and remove a CSS class - Added state and event handlers to toggle CSS classes on click
import { useState } from 'react';

export default function Picture() {
    const [isActive, setIsActive] = useState(true);
    
    return (
        <div
            className={`background ${isActive ? 'background--active' : ''}`}
            onClick={() => setIsActive(true)}
        >
            <img
                className={`picture ${isActive ? '' : 'picture--active'}`}
                alt="Rainbow houses in Kampung Pelangi, Indonesia"
                src="/5qwVYb1.jpg"
                onClick={(e) => {
                    e.stopPropagation(); // Prevent event bubbling to parent div
                    setIsActive(false);
                }}
            />
        </div>
    );
}