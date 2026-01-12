"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Linkedin, Mail, Github } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { clsx } from "clsx";

const projects = [
    {
        title: "Recipe Finder",
        description: "Build a Recipe Finder web application that allows users to search for recipes based on ingredients and cuisine types.",
        tags: ["HTML", "CSS", "Javascript"],
        video: "/videos/recipe.mp4",
        link: "https://vanosaur.github.io/Recipe_Finder_project/",
    },
    {
        title: "Youtube Clone",
        description: "Designed a visually appealing and fully responsive layout resembling YouTube’s interface.",
        tags: ["HTML", "CSS"],
        video: "/videos/youtube.mp4",
        link: "https://vanosaur.github.io/Youtube_clone/",
    },
    {
        title: "Calculator",
        description: "Developed a user-friendly calculator supporting basic arithmetic operations (addition, subtraction, multiplication, division).",
        tags: ["HTML", "CSS", "Javascript"],
        video: "/videos/calc.mp4",
        link: "https://vanosaur.github.io/Calculator_project/",
    },
    {
        title: "Capstone Project",
        description: "Developed a fully responsive interface with a structured layout and engaging UI. Used Flex for seamless adaptability across devices. Used hover effects to make it visually attractive.",
        tags: ["HTML", "CSS"],
        video: "/videos/capstone.mp4",
        link: "https://vanosaur.github.io/Capstone_project/",
    },
];

export default function HomeSection() {
    const [typingText, setTypingText] = useState("");
    const skills = ["Web Development", "UI/UX Design", "Problem Solving"];

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
            <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden z-10 px-6 py-20">
                <div className="flex flex-col md:flex-row items-center justify-center z-10 w-full max-w-6xl mx-auto gap-10 md:gap-0">
                    <div className="flex-1 flex justify-center md:justify-end items-center md:pr-[30px]">
                        <Image
                            src="/PHOTOS/about-me.jpg"
                            alt="Profile Picture"
                            width={220}
                            height={220}
                            className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] object-cover rounded-full shadow-[0_0_80px_rgba(255,255,255,0.5)] profile-pic"
                        />
                    </div>
                    <div className="flex-[1.5] text-center md:text-left md:pl-[30px]">
                        <h1 className="font-shadows font-bold text-[36px] md:text-[40px]">Vani Rudra</h1>
                        <p className="font-montserrat text-[16px] md:text-[18px] mt-4 max-w-lg mx-auto md:mx-0">
                            Born and raised in Pune, Maharashtra. I'm currently pursuing my B.Tech in Computer Science, honing my skills in <span className="font-bold font-montserrat" id="typing-text">{typingText}|</span>
                        </p>
                    </div>
                </div>

                {/* Social Icons - Desktop: Sidebar, Mobile: Horizontal Row */}
                <div className="absolute bottom-[40px] md:top-[45%] md:right-[40px] md:translate-y-[-50%] flex flex-row md:flex-col gap-[30px] md:gap-[20px] social-icons z-20">
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
                className="relative text-white p-[50px] text-center"
                id="projects"
            >
                {/* Legacy Radial Gradient (Applied as overlay to blend) */}
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,77,109,0.10),rgba(77,109,255,0.08))] opacity-80 -z-10" />

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mt-[40px] mb-[90px] font-poppins font-black text-[4rem] sm:text-[6rem] text-transparent [-webkit-text-stroke:2px_white] tracking-tighter title"
                >
                    Featured Projects
                </motion.h1>

                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className={clsx(
                            "flex flex-col md:flex-row items-center justify-between mt-[60px] md:mt-[100px] max-w-7xl mx-auto gap-10 md:gap-20",
                            index % 2 !== 0 && "md:flex-row-reverse"
                        )}
                    >
                        {/* Text Content */}
                        <div className="w-full md:w-[40%] text-left project-info">
                            <h2 className="text-[1.8rem] md:text-[2rem] font-bold project-title">
                                {index % 2 === 0 ? `${project.title} →` : `← ${project.title}`}
                            </h2>
                            <p className="text-[1rem] md:text-[1.1rem] my-[10px] font-sans project-description leading-relaxed">
                                {project.description}
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2 tags">
                                {project.tags.map(tag => (
                                    <span key={tag} className="bg-white/10 text-white border border-white/10 py-[4px] px-[12px] text-[0.8rem] rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Video / Preview */}
                        <div className="w-full md:w-[60%] project-preview">
                            <a href={project.link} target="_blank" className="block relative aspect-video w-full overflow-hidden rounded-[20px] md:rounded-[40px] shadow-[0_8px_35px_rgba(0,0,0,0.5)] hover:scale-[1.02] transition-transform duration-500">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                >
                                    <source src={project.video} type="video/mp4" />
                                </video>
                            </a>
                        </div>
                    </motion.div>
                ))}
            </section>


        </div>
    );
}
