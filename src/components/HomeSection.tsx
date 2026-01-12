"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Linkedin, Mail, Github } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

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
            <div className="relative h-screen flex items-center justify-center text-left text-white overflow-hidden z-10">
                <div className="flex items-center justify-center z-10 w-full content">
                    <div className="flex-1 flex justify-end items-center pr-[30px] left">
                        <Image
                            src="/PHOTOS/about-me.jpg"
                            alt="Profile Picture"
                            width={220}
                            height={220}
                            className="w-[220px] h-[220px] object-cover rounded-full shadow-[0_0_80px_rgba(255,255,255,0.5)] profile-pic"
                        />
                    </div>
                    <div className="flex-[1.5] pl-[30px] right">
                        <h1 className="font-shadows font-bold text-[40px]">Vani Rudra</h1>
                        <br />
                        <p className="font-montserrat text-[18px]">
                            Born and raised in Pune, Maharashtra. I'm <br /> currently pursuing my B.Tech in Computer Science,<br /> honing my skills in <span className="font-bold font-montserrat" id="typing-text">{typingText}|</span>
                        </p>
                    </div>
                </div>
                <div className="absolute right-[40px] top-[45%] flex flex-col gap-[20px] social-icons">
                    <a href="https://www.linkedin.com/in/vani-rudra-/" target="_blank" className="text-white z-10 hover:scale-140 transition-transform duration-200 ease-in-out text-[30px]">
                        <Linkedin />
                    </a>
                    <a href="mailto:vani.rudra2024@nst.rishihood.edu.in" target="_blank" className="text-white z-10 hover:scale-140 transition-transform duration-200 ease-in-out text-[30px]">
                        <Mail />
                    </a>
                    <a href="https://github.com/vanosaur" target="_blank" className="text-white z-10 hover:scale-140 transition-transform duration-200 ease-in-out text-[30px]">
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
                        className="flex items-center justify-between mt-[40px] max-w-7xl mx-auto project-container"
                    >
                        {index % 2 === 0 ? (
                            <>
                                {/* Left: Text */}
                                <div className="max-w-[40%] text-left project-info">
                                    <h2 className="text-[2rem] font-bold project-title">{project.title} →</h2>
                                    <p className="text-[1.1rem] my-[10px] font-sans project-description">{project.description}</p>
                                    <div className="mt-4 tags">
                                        {project.tags.map(tag => (
                                            <button key={tag} className="bg-[rgb(172,171,171)] text-black border-none py-[5px] px-[10px] text-[0.8rem] rounded-[20px] cursor-pointer mr-[10px]">
                                                {tag}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                {/* Right: Video */}
                                <div className="project-preview">
                                    <a href={project.link} target="_blank">
                                        <video
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="w-[700px] h-[400px] rounded-[10%] object-cover shadow-[0_8px_35px_rgb(136,132,132)] hover:scale-105 transition-transform duration-500 ease-in-out videoss"
                                        >
                                            <source src={project.video} type="video/mp4" />
                                        </video>
                                    </a>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* Left: Video */}
                                <div className="project-preview">
                                    <a href={project.link} target="_blank">
                                        <video
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="w-[700px] h-[400px] rounded-[10%] object-cover shadow-[0_8px_35px_rgb(136,132,132)] hover:scale-105 transition-transform duration-500 ease-in-out videoss"
                                        >
                                            <source src={project.video} type="video/mp4" />
                                        </video>
                                    </a>
                                </div>
                                {/* Right: Text */}
                                <div className="max-w-[40%] text-left project-info">
                                    <h2 className="text-[2rem] font-bold project-title">← {project.title}</h2>
                                    <p className="text-[1.1rem] my-[10px] font-sans project-description">{project.description}</p>
                                    <div className="mt-4 tags">
                                        {project.tags.map(tag => (
                                            <button key={tag} className="bg-[rgb(172,171,171)] text-black border-none py-[5px] px-[10px] text-[0.8rem] rounded-[20px] cursor-pointer mr-[10px]">
                                                {tag}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}
                    </motion.div>
                ))}
            </section>


        </div>
    );
}
