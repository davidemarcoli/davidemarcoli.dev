"use client";

import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

const Loader = () => {
    const pathname = usePathname();
    const [progress, setProgress] = useState(0);
    const loaderRef = useRef<HTMLDivElement>(null);
    const counterRef = useRef<HTMLDivElement>(null);
    const barRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (pathname !== '/') return;

        let count = 0;
        const interval = setInterval(() => {
            count += Math.floor(Math.random() * 10) + 1;
            if (count >= 100) {
                count = 100;
                clearInterval(interval);

                // Start exit animation
                const tl = gsap.timeline();
                tl.to(loaderRef.current, {
                    yPercent: -100,
                    duration: 1.2,
                    ease: "power4.inOut",
                    delay: 0.2,
                    onComplete: () => {
                        // Dispatch event for other components (like Hero) to start their animations
                        window.dispatchEvent(new Event('loading-complete'));
                    }
                });
            }
            setProgress(count);
        }, 30);

        return () => clearInterval(interval);
    }, [pathname]);

    if (pathname !== '/') return null;

    return (
        <div className="loader" ref={loaderRef}>
            <div className="text-4xl font-bold tracking-tighter counter" ref={counterRef}>
                {progress}%
            </div>
            <div className="w-64 h-[2px] bg-gray-800 mt-4 rounded-full overflow-hidden">
                <div
                    className="loader-bar h-full"
                    ref={barRef}
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
};

export default Loader;
