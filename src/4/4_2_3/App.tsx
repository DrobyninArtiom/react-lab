// 4_2_3 Scrolling an image carousel - Added refs to images and implemented scrollIntoView for active image
import { useState } from 'react';
import { useRef, useEffect } from 'react';

export default function CatFriends() {
    const [index, setIndex] = useState(0);
    const activeRef = useRef<HTMLLIElement>(null);
    
    useEffect(() => {
        if (activeRef.current) {
            activeRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center',
            });
        }
    }, [index]);

    return (
        <>
            <nav>
                <button onClick={() => {
                    if (index < catList.length - 1) {
                        setIndex(index + 1);
                    } else {
                        setIndex(0);
                    }
                }}>
                    Next
                </button>
            </nav>
            <div>
                <ul>
                    {catList.map((cat, i) => (
                        <li key={cat.id} ref={index === i ? activeRef : null}>
                            <img
                                className={
                                    index === i ?
                                        'active' :
                                        ''
                                }
                                src={cat.imageUrl}
                                alt={'Cat #' + cat.id}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

type PlaceType = {
  id: number;
  imageUrl: string;
}

const catList: PlaceType[] = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: `cat${i}.jpg`
  });
}

