"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current.appendChild(renderer.domElement);

        // Particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 1800;

        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 18;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        const material = new THREE.PointsMaterial({
            size: 0.025,
            color: 0xccfd3a,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending
        });

        const particlesMesh = new THREE.Points(particlesGeometry, material);
        scene.add(particlesMesh);

        camera.position.z = 4;

        // Mouse interaction
        let mouseX3D = 0;
        let mouseY3D = 0;

        const onMouseMove = (event: MouseEvent) => {
            mouseX3D = event.clientX / window.innerWidth - 0.5;
            mouseY3D = event.clientY / window.innerHeight - 0.5;
        };
        window.addEventListener('mousemove', onMouseMove);

        // Animation Loop
        const clock = new THREE.Clock();
        let animationId: number;

        const animate3D = () => {
            const elapsedTime = clock.getElapsedTime();

            particlesMesh.rotation.y = elapsedTime * 0.03;
            particlesMesh.rotation.x += (mouseY3D * 0.3 - particlesMesh.rotation.x) * 0.05;
            particlesMesh.rotation.y += (mouseX3D * 0.3 - particlesMesh.rotation.y) * 0.05;

            const positions = particlesGeometry.attributes.position.array as Float32Array;
            for (let i = 0; i < particlesCount; i++) {
                const i3 = i * 3;
                const x = positions[i3];
                // @ts-ignore
                positions[i3 + 1] += Math.sin(elapsedTime * 0.5 + x) * 0.003;
            }
            particlesGeometry.attributes.position.needsUpdate = true;

            renderer.render(scene, camera);
            animationId = requestAnimationFrame(animate3D);
        };

        animate3D();

        // Resize handler
        const onResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', onResize);

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('resize', onResize);
            cancelAnimationFrame(animationId);
            if (containerRef.current) {
                containerRef.current.removeChild(renderer.domElement);
            }
            particlesGeometry.dispose();
            material.dispose();
        };
    }, []);

    return (
        <div id="canvas-container" ref={containerRef}></div>
    );
};

export default ThreeBackground;
