"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Cursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const cursorDotRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const cursorDot = cursorDotRef.current;

        if (!cursor || !cursorDot) return;

        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;
        let dotX = 0;
        let dotY = 0;

        const onMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        window.addEventListener('mousemove', onMouseMove);

        const animateCursor = () => {
            // Lerp for smooth following
            const distX = mouseX - cursorX;
            const distY = mouseY - cursorY;
            cursorX += distX * 0.1;
            cursorY += distY * 0.1;

            const dotDistX = mouseX - dotX;
            const dotDistY = mouseY - dotY;
            dotX += dotDistX * 0.2;
            dotY += dotDistY * 0.2;

            if (cursor) {
                cursor.style.left = `${cursorX}px`;
                cursor.style.top = `${cursorY}px`;
            }
            if (cursorDot) {
                cursorDot.style.left = `${dotX}px`;
                cursorDot.style.top = `${dotY}px`;
            }

            requestAnimationFrame(animateCursor);
        };

        const animationId = requestAnimationFrame(animateCursor);

        // Hover States
        const handleMouseEnter = () => cursor.classList.add('hovered');
        const handleMouseLeave = () => cursor.classList.remove('hovered');

        const updateHoverables = () => {
            const hoverables = document.querySelectorAll('.hoverable');
            hoverables.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
                el.addEventListener('mouseenter', handleMouseEnter);
                el.addEventListener('mouseleave', handleMouseLeave);
            });
        };

        // Initial check
        updateHoverables();

        // Observer for dynamic content
        const observer = new MutationObserver(updateHoverables);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(animationId);
            observer.disconnect();
            const hoverables = document.querySelectorAll('.hoverable');
            hoverables.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <>
            <div className="cursor" ref={cursorRef} id="cursor"></div>
            <div className="cursor-dot" ref={cursorDotRef} id="cursor-dot"></div>
        </>
    );
};

export default Cursor;
