"use client";

import React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import Magnetic from '@/components/ui/Magnetic';

const Navbar = () => {
    return (
        <nav className="hidden md:flex fixed top-0 left-0 w-full p-8 justify-between items-center z-40 mix-blend-difference text-white">
            <Magnetic>
                <Link
                    href="#"
                    className="text-xl font-bold tracking-tighter hoverable inline-block"
                >
                    davidemarcoli.dev
                </Link>
            </Magnetic>
            <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest">
                <Link href="#about" className="hoverable hover:text-[#ccfd3a] transition-colors">Profile</Link>
                <Link href="#experience" className="hoverable hover:text-[#ccfd3a] transition-colors">Journey</Link>
                <Link href="#work" className="hoverable hover:text-[#ccfd3a] transition-colors">Work</Link>
                <Link href="#contact" className="hoverable hover:text-[#ccfd3a] transition-colors">Contact</Link>
            </div>
            <button className="md:hidden hoverable">
                <Menu />
            </button>
        </nav>
    );
};

export default Navbar;
