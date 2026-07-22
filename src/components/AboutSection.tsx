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
            <section className="max-w-[900px] mx-auto my-[40px] px-6 text-center font-montserrat">
                <p className="text-[1.1rem] leading-[1.7] text-white/90 max-w-[800px] mx-auto mb-10">
                    Hi👋 &nbsp; I'm <span className="font-bold text-[#a5b4fc]">Vani Rudra</span>, a computer science student and software developer passionate about building intelligent systems and responsive digital experiences. I enjoy designing concurrent architectures, safety-grounded AI pipelines, and intuitive user interfaces.
                </p>

                {/* Core Focus Area Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left mt-8">
                    
                    {/* Agentic AI */}
                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300">
                        <h3 className="font-shadows text-[1.3rem] text-[#a5b4fc] font-bold mb-2">Agentic AI</h3>
                        <p className="text-[0.9rem] text-gray-400 leading-[1.5]">
                            Building autonomous agent loops, vision-based diagnostics, and safety-grounded retrieval-augmented generation (RAG) pipelines.
                        </p>
                    </div>

                    {/* Fullstack Development */}
                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300">
                        <h3 className="font-shadows text-[1.3rem] text-[#a5b4fc] font-bold mb-2">Fullstack Dev</h3>
                        <p className="text-[0.9rem] text-gray-400 leading-[1.5]">
                            Designing complete end-to-end platforms featuring concurrent ride-dispatching systems and real-time social media pipelines.
                        </p>
                    </div>

                    {/* Frontend Interfaces */}
                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300">
                        <h3 className="font-shadows text-[1.3rem] text-[#a5b4fc] font-bold mb-2">Frontend UI</h3>
                        <p className="text-[0.9rem] text-gray-400 leading-[1.5]">
                            Crafting pixel-perfect, highly responsive, and interactive interfaces with smooth micro-animations and clean layouts.
                        </p>
                    </div>

                    {/* Backend Engineering */}
                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300">
                        <h3 className="font-shadows text-[1.3rem] text-[#a5b4fc] font-bold mb-2">Backend Systems</h3>
                        <p className="text-[0.9rem] text-gray-400 leading-[1.5]">
                            Developing resilient load balancers, client-side rate limiters, token buckets, and background worker queueing models.
                        </p>
                    </div>

                    {/* DVA Dashboards */}
                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 md:col-span-2 lg:col-span-1 lg:col-start-2">
                        <h3 className="font-shadows text-[1.3rem] text-[#a5b4fc] font-bold mb-2">DVA Dashboards</h3>
                        <p className="text-[0.9rem] text-gray-400 leading-[1.5]">
                            Creating interactive environmental intelligence analytics and public data visualizations mapping air quality metrics.
                        </p>
                    </div>

                </div>
            </section>

            <div className="w-[60%] h-[1px] bg-[#dad7d7] mx-auto my-[30px]"></div>

            {/* Skills Section */}
            <section className="max-w-[900px] mx-auto my-[50px] flex flex-col md:flex-row justify-start text-left gap-8 md:gap-[150px] px-6">
                <h2 className="text-[1.2rem] font-bold uppercase w-[150px] shrink-0 text-white/50 font-montserrat">Skills</h2>
                <div className="flex-1 space-y-8 font-montserrat">
                    
                    {/* Languages */}
                    <div>
                        <h3 className="text-[1.05rem] font-bold mb-3 text-white/90">Languages</h3>
                        <div className="flex flex-wrap gap-2">
                            {["Python", "JavaScript", "TypeScript", "HTML5", "CSS3", "SQL"].map((skill) => (
                                <span key={skill} className="px-3.5 py-1.5 text-[0.8rem] rounded-full bg-white/[0.03] border border-white/10 text-gray-300 hover:border-white/25 hover:bg-white/[0.06] transition-all duration-300">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Frameworks & Libraries */}
                    <div>
                        <h3 className="text-[1.05rem] font-bold mb-3 text-white/90">Frameworks & Libraries</h3>
                        <div className="flex flex-wrap gap-2">
                            {["React.js", "Next.js", "FastAPI", "Express", "Node.js", "LangGraph", "Streamlit", "TailwindCSS"].map((skill) => (
                                <span key={skill} className="px-3.5 py-1.5 text-[0.8rem] rounded-full bg-white/[0.03] border border-white/10 text-gray-300 hover:border-white/25 hover:bg-white/[0.06] transition-all duration-300">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Databases & Tools */}
                    <div>
                        <h3 className="text-[1.05rem] font-bold mb-3 text-white/90">Databases & Tools</h3>
                        <div className="flex flex-wrap gap-2">
                            {["MongoDB", "SQLite", "Prisma", "Cloudinary", "Tableau", "Git / GitHub", "Vercel", "Render"].map((skill) => (
                                <span key={skill} className="px-3.5 py-1.5 text-[0.8rem] rounded-full bg-white/[0.03] border border-white/10 text-gray-300 hover:border-white/25 hover:bg-white/[0.06] transition-all duration-300">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Creative & Soft Skills */}
                    <div>
                        <h3 className="text-[1.05rem] font-bold mb-3 text-white/90">Creative & System Focus</h3>
                        <div className="flex flex-wrap gap-2">
                            {["Sketching", "Painting", "UI/UX Prototyping", "SOLID Principles", "System Design"].map((skill) => (
                                <span key={skill} className="px-3.5 py-1.5 text-[0.8rem] rounded-full bg-white/[0.03] border border-white/10 text-gray-300 hover:border-white/25 hover:bg-white/[0.06] transition-all duration-300">
                                    {skill}
                                </span>
                            ))}
                        </div>
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
