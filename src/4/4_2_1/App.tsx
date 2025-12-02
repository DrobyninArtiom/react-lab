// 4_2_1 Play and pause the video - Added ref to video element and implemented play/pause functionality

import { useState, useRef, useEffect } from 'react';

export default function VideoPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    function handleClick() {
        const nextIsPlaying = !isPlaying;
        setIsPlaying(nextIsPlaying);
        if (nextIsPlaying) {
            videoRef.current?.play();
        } else {
            videoRef.current?.pause();
        }
    }

    return (
        <>
            <button onClick={handleClick}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <video
                width="250"
                ref={videoRef}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            >
                <source
                    src="flower.mp4"
                    type="video/mp4"
                />
            </video>
        </>
    )
}
