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
                    className="w-[280px] h-[280px] object-cover rounded-full shadow-[0_5px_35px_rgb(134,136,137)]"
                />
            </section>

            {/* About Section */}
            <section className="max-w-[800px] mx-auto my-[30px] text-[1.1rem] leading-[1.6] p-[20px] text-center font-montserrat">
                <p>
                    Hi👋 &nbsp; I'm <span className="font-bold italic">Vani Rudra</span>, an aspiring software developer with a passion <br /> for
                    web development, Progamming, and problem-solving. I enjoy creating intuitive <br /> and visually appealing
                    digital experiences while continuously expanding my skill set.<br /><br /> Currently, I'm exploring various technologies
                    and working on projects that enhance both my technical and creative abilities. Let's innovate and build
                    something amazing together!
                </p>
            </section>

            <div className="w-[60%] h-[1px] bg-[#dad7d7] mx-auto my-[30px]"></div>

            {/* Skills Section */}
            <section className="max-w-[900px] mx-auto my-[50px] flex justify-start text-left gap-[100px] sm:gap-[200px] flex-col sm:flex-row px-4">
                <h2 className="text-[1.2rem] font-bold uppercase w-[150px] shrink-0">Skills</h2>
                <div className="flex-2">
                    <div className="mb-[20px]">
                        <h3 className="text-[1rem] font-bold mb-[5px]">Web Development</h3>
                        <p className="text-[0.9rem] text-[#bbb] m-0">HTML, CSS, React.js , Javascript, Next.js, Tailwind</p>
                    </div>
                    <div className="mb-[20px]">
                        <h3 className="text-[1rem] font-bold mb-[5px]">Programming</h3>
                        <p className="text-[0.9rem] text-[#bbb] m-0">Python, Java</p>
                    </div>
                    <div className="mb-[20px]">
                        <h3 className="text-[1rem] font-bold mb-[5px]">Creative Skills</h3>
                        <p className="text-[0.9rem] text-[#bbb] m-0">Sketching, Painting</p>
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section className="max-w-[900px] mx-auto my-[50px] flex justify-start text-left gap-[100px] sm:gap-[200px] flex-col sm:flex-row px-4">
                <h2 className="text-[1.2rem] font-bold uppercase w-[150px] shrink-0">Education</h2>
                <div className="flex-2">
                    <div className="mb-[20px]">
                        <h3 className="text-[1rem] font-bold mb-[5px]">Newton School of Technology, Sonipat</h3>
                        <p className="text-[0.9rem] text-[#bbb] m-0">B.Tech in CSE & AI</p>
                        <p className="text-[0.9rem] text-[#bbb] m-0">Class of 2028</p>
                    </div>
                    <div className="mb-[20px]">
                        <h3 className="text-[1rem] font-bold mb-[5px]">APK Jr. College</h3>
                        <p className="text-[0.9rem] text-[#bbb] m-0">2022-2024</p>
                    </div>
                    <div className="mb-[20px]">
                        <h3 className="text-[1rem] font-bold mb-[5px]">Jayawant Public School</h3>
                        <p className="text-[0.9rem] text-[#bbb] m-0">2019-2022</p>
                    </div>
                </div>
            </section>

            <div className="w-[60%] h-[1px] bg-[#dad7d7] mx-auto my-[30px]"></div>


        </motion.div>
    );
}
