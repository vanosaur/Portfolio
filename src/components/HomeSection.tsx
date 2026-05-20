"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Linkedin, Mail, Github } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectTV from "./ProjectTV";

export default function HomeSection() {
    const [typingText, setTypingText] = useState("");
    const skills = ["Agentic AI", "Fullstack Applications", "Frontend Interfaces", "Backend Engineering", "DVA Dashboards"];

    useEffect(() => {
        let skillIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let timeoutId: NodeJS.Timeout;

        const type = () => {
            const currentSkill = skills[skillIndex];

            if (isDeleting) {
                setTypingText(currentSkill.substring(0, charIndex - 1));
                charIndex--;
            } else {
                setTypingText(currentSkill.substring(0, charIndex + 1));
                charIndex++;
            }

            if (!isDeleting && charIndex === currentSkill.length) {
                isDeleting = true;
                timeoutId = setTimeout(type, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                skillIndex = (skillIndex + 1) % skills.length;
                timeoutId = setTimeout(type, 500);
            } else {
                timeoutId = setTimeout(type, isDeleting ? 100 : 200);
            }
        };

        type();
        return () => clearTimeout(timeoutId);
    }, []);

    const { scrollY } = useScroll();
    const overlayOpacity = useTransform(scrollY, [0, 500], [0.15, 1]);

    return (
        <div className="w-full relative">
            {/* Fixed Background Video (Visible throughout HomeSection scrolling) */}
            <div className="fixed top-0 left-0 w-full h-full z-0">
                <video autoPlay muted loop className="w-full h-full object-cover opacity-100">
                    <source src="/bg-video.mp4" type="video/mp4" />
                </video>
                {/* Overlay to darken video on scroll */}
                <motion.div
                    className="absolute inset-0 bg-black"
                    style={{ opacity: overlayOpacity }}
                />
            </div>

            {/* Home Hero Content */}
            <div className="relative h-screen flex items-center justify-center text-left text-white overflow-hidden z-10">
                <div className="flex flex-col md:flex-row items-center justify-center z-10 w-full content">
                    <div className="flex-1 flex justify-center md:justify-end items-center md:pr-[30px] left">
                        <Image
                            src="/PHOTOS/photo.jpeg"
                            alt="Profile Picture"
                            width={220}
                            height={220}
                            className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] object-cover rounded-full shadow-[0_0_80px_rgba(255,255,255,0.5)] profile-pic"
                        />
                    </div>
                    <div className="flex-[1.5] text-center md:text-left md:pl-[30px] right uppercase md:normal-case">
                        <h1 className="font-shadows font-bold text-[40px]">Vani Rudra</h1>
                        <br />
                        <p className="font-montserrat text-[18px]">
                            Born and raised in Pune, Maharashtra. I'm <br /> currently pursuing my B.Tech in Computer Science,<br /> honing my skills in <span className="font-bold font-montserrat" id="typing-text">{typingText}|</span>
                        </p>
                    </div>
                </div>

                {/* Social Icons - Desktop: Fixed Sidebar, Mobile: Horizontal Row */}
                <div className="absolute bottom-[40px] md:top-[45%] md:right-[40px] flex flex-row md:flex-col gap-[30px] md:gap-[20px] social-icons z-20">
                    <a href="https://www.linkedin.com/in/vani-rudra-/" target="_blank" className="text-white hover:scale-125 transition-transform duration-200 ease-in-out text-[28px] md:text-[30px]">
                        <Linkedin />
                    </a>
                    <a href="mailto:vani.rudra2024@nst.rishihood.edu.in" target="_blank" className="text-white hover:scale-125 transition-transform duration-200 ease-in-out text-[28px] md:text-[30px]">
                        <Mail />
                    </a>
                    <a href="https://github.com/vanosaur" target="_blank" className="text-white hover:scale-125 transition-transform duration-200 ease-in-out text-[28px] md:text-[30px]">
                        <Github />
                    </a>
                </div>
            </div>

            {/* Project section with Blended Background */}
            <section
                className="relative text-white py-[80px] px-4 min-h-screen flex items-center justify-center"
                id="projects"
            >
                {/* Legacy Radial Gradient (Applied as overlay to blend) */}
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,77,109,0.10),rgba(77,109,255,0.08))] opacity-80 -z-10" />

                <ProjectTV />
            </section>


        </div>
    );
}
