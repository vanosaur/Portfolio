"use client";

import Link from "next/link";
import { clsx } from "clsx";
import { animate } from "framer-motion";

export default function Navbar() {
    const navItems = [
        { name: "Projects", id: "projects" },
        { name: "About", id: "about" },
        { name: "Beyond Code", id: "art" },
        { name: "Contact", id: "contact" },
    ];

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
        e.preventDefault();
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
        <nav className="fixed left-[20%] top-[20px] w-[60%] flex justify-between items-center px-[30px] py-[15px] bg-white/20 rounded-[20px] shadow-[0px_4px_10px_rgba(0,0,0,0.1)] z-[1000] backdrop-blur-none">
            <div className="font-pacifico text-white text-[1.5rem]">V</div>
            <div className="flex space-x-[15px]">
                {navItems.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => handleScroll(e, item.id)}
                        className={clsx(
                            "no-underline text-[#dfdcdc] mx-[15px] text-[17px] font-medium font-montserrat relative z-10 transition-colors duration-500 ease-in-out hover:text-[#151414] hover:font-bold cursor-pointer"
                        )}
                    >
                        {item.name}
                    </a>
                ))}
            </div>
        </nav>
    );
}
