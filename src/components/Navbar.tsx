"use client";

import Link from "next/link";
import { clsx } from "clsx";
import { animate, motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = [
        { name: "Projects", id: "projects" },
        { name: "About", id: "about" },
        { name: "Beyond Code", id: "art" },
        { name: "Contact", id: "contact" },
    ];

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
        e.preventDefault();
        setIsOpen(false); // Close mobile menu on click
        const element = document.getElementById(id);
        if (element) {
            const offset = 80; // Offset for navbar height
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;

            animate(window.scrollY, offsetPosition, {
                type: "tween",
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1], // easeOutQuart
                onUpdate: (latest) => window.scrollTo(0, latest)
            });
        }
    };

    return (
        <nav className="fixed left-1/2 -translate-x-1/2 top-[20px] w-[90%] md:w-auto flex justify-between items-center px-[20px] md:px-[30px] py-[15px] bg-white/20 rounded-[20px] shadow-[0px_4px_10px_rgba(0,0,0,0.1)] z-[1000] backdrop-blur-xl border border-white/10">
            <div className="font-pacifico text-white text-[1.5rem] mr-8">V</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-[5px]">
                {navItems.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => handleScroll(e, item.id)}
                        className={clsx(
                            "no-underline text-[#dfdcdc] px-[15px] py-2 text-[16px] font-medium font-montserrat relative z-10 transition-all duration-300 ease-in-out hover:text-white rounded-lg hover:bg-white/10 cursor-pointer"
                        )}
                    >
                        {item.name}
                    </a>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-[80px] left-0 w-full bg-black/80 backdrop-blur-2xl border border-white/10 rounded-[20px] p-6 flex flex-col gap-4 md:hidden overflow-hidden"
                    >
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={(e) => handleScroll(e, item.id)}
                                className="text-white text-xl font-montserrat font-medium py-3 border-b border-white/5 last:border-0"
                            >
                                {item.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
