"use client";

import Image from "next/image";
import { Linkedin, Mail, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-white p-[20px] max-w-[1200px] mx-auto relative z-10"
            id="about"
        >
            {/* Header Section */}
            <header className="mt-[100px] px-[20px] py-[50px] text-center">
                <h1 className="text-[2.5rem] italic font-montserrat">
                    Welcome to my <span className="highlight font-bold font-shadows text-[3rem]">Info</span> part 🤍
                </h1>
            </header>

            {/* Image Section */}
            <section className="flex justify-center my-[20px]">
                <Image
                    src="/PHOTOS/profile.jpeg"
                    alt="Profile Picture"
                    width={280}
                    height={280}
                    className="w-[220px] h-[220px] md:w-[280px] md:h-[280px] object-cover rounded-full shadow-[0_5px_35px_rgb(134,136,137)]"
                />
            </section>

            {/* About Section */}
            <section className="max-w-[800px] mx-auto my-[30px] text-[1.1rem] leading-[1.6] px-6 text-center font-montserrat">
                <p>
                    Hi👋 &nbsp; I'm <span className="font-bold italic">Vani Rudra</span>, an aspiring software developer with expertise spanning **Agentic AI systems** (like vision-based diagnostic assistants), **Fullstack applications** (including real-time media feeds and booking engines), **Frontend user interfaces**, **Backend resilience engines** (for high-performance traffic flow), and **Data Visualization & Analytics (DVA) dashboards** (translating environmental data into actionable insights). I enjoy building concurrent architectures, safety-grounded RAG pipelines, and intuitive user experiences. Let's innovate and build something amazing together!
                </p>
            </section>

            <div className="w-[60%] h-[1px] bg-[#dad7d7] mx-auto my-[30px]"></div>

            {/* Skills Section */}
            <section className="max-w-[900px] mx-auto my-[50px] flex flex-col md:flex-row justify-start text-left gap-8 md:gap-[150px] px-6">
                <h2 className="text-[1.2rem] font-bold uppercase w-[150px] shrink-0 text-white/50">Skills</h2>
                <div className="flex-1 space-y-8">
                    <div>
                        <h3 className="text-[1.1rem] font-bold mb-2">Web Development</h3>
                        <p className="text-[0.95rem] text-gray-400">HTML, CSS, React.js , Javascript, Next.js, Tailwind</p>
                    </div>
                    <div>
                        <h3 className="text-[1.1rem] font-bold mb-2">Programming</h3>
                        <p className="text-[0.95rem] text-gray-400">Python, Java</p>
                    </div>
                    <div>
                        <h3 className="text-[1.1rem] font-bold mb-2">Creative Skills</h3>
                        <p className="text-[0.95rem] text-gray-400">Sketching, Painting</p>
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section className="max-w-[900px] mx-auto my-[50px] flex flex-col md:flex-row justify-start text-left gap-8 md:gap-[150px] px-6">
                <h2 className="text-[1.2rem] font-bold uppercase w-[150px] shrink-0 text-white/50">Education</h2>
                <div className="flex-1 space-y-8">
                    <div>
                        <h3 className="text-[1.1rem] font-bold mb-1">Newton School of Technology, Sonipat</h3>
                        <p className="text-[0.95rem] text-gray-400">B.Tech in CSE & AI • Class of 2028</p>
                    </div>
                    <div>
                        <h3 className="text-[1.1rem] font-bold mb-1">APK Jr. College</h3>
                        <p className="text-[0.95rem] text-gray-400">Higher Secondary Education • 2022-2024</p>
                    </div>
                    <div>
                        <h3 className="text-[1.1rem] font-bold mb-1">Jayawant Public School</h3>
                        <p className="text-[0.95rem] text-gray-400">Secondary Education • 2019-2022</p>
                    </div>
                </div>
            </section>

            <div className="w-[60%] h-[1px] bg-[#dad7d7] mx-auto my-[30px]"></div>


        </motion.div>
    );
}
