"use client";

import React, { useEffect, useRef, ReactElement } from 'react';
import gsap from 'gsap';

interface MagneticProps {
    children: ReactElement;
}

const Magnetic = ({ children }: MagneticProps) => {
    const magnetic = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = magnetic.current;
        if (!el) return;

        const handleMouseMove = (e: MouseEvent) => {
            const position = el.getBoundingClientRect();
            const x = e.clientX - position.left - position.width / 2;
            const y = e.clientY - position.top - position.height / 2;

            gsap.to(el, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.2,
                ease: "power2.out"
            });
        };

        const handleMouseLeave = () => {
            gsap.to(el, {
                x: 0,
                y: 0,
                duration: 0.2,
                ease: "power2.out"
            });
        };

        el.addEventListener('mousemove', handleMouseMove);
        el.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            el.removeEventListener('mousemove', handleMouseMove);
            el.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return React.cloneElement(children as React.ReactElement<any>, { ref: magnetic });
};

export default Magnetic;
