"use client";

import { Linkedin, Mail, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
    return (
        <section id="contact" className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
            {/* Background Video with Overlay */}
            <div className="absolute inset-0 -z-20">
                <video autoPlay muted loop className="w-full h-full object-cover">
                    <source src="/bg-video.mp4" type="video/mp4" />
                </video>
            </div>
            {/* Dark Overlay for readability */}
            <div className="absolute inset-0 bg-black/60 -z-10" />

            {/* Split Content Container */}
            <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 text-white">

                {/* Left Side: Info & Socials */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-8 text-center md:text-left"
                >
                    <div>
                        <h2 className="text-5xl md:text-7xl font-bold font-poppins mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 leading-tight">
                            Let's Talk.
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                            Have a visionary idea or just want to chat? <br />
                            I'm always open to new connections.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 text-lg">
                        <a href="mailto:vanirudra0914@gmail.com" className="flex items-center gap-4 hover:text-[#fae900] transition-colors group">
                            <span className="p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                                <Mail size={24} />
                            </span>
                            vanirudra0914@gmail.com
                        </a>
                        <a href="https://www.linkedin.com/in/vani-rudra-/" target="_blank" className="flex items-center gap-4 hover:text-[#fae900] transition-colors group">
                            <span className="p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                                <Linkedin size={24} />
                            </span>
                            LinkedIn Profile
                        </a>
                        <a href="https://github.com/vanosaur" target="_blank" className="flex items-center gap-4 hover:text-[#fae900] transition-colors group">
                            <span className="p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                                <Github size={24} />
                            </span>
                            Github Profile
                        </a>
                    </div>
                </motion.div>


                {/* Right Side: Glass Form */}
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl"
                >
                    <form action="mailto:vanirudra0914@gmail.com" method="POST" encType="text/plain" className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#fae900]/50 focus:ring-1 focus:ring-[#fae900]/50 transition-all"
                                placeholder="John Doe"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#fae900]/50 focus:ring-1 focus:ring-[#fae900]/50 transition-all"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#fae900]/50 focus:ring-1 focus:ring-[#fae900]/50 resize-none transition-all"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-[#fae900] transition-colors duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>

            {/* Footer Credits */}
            <div className="absolute bottom-4 left-0 w-full text-center z-10">
                <p className="text-gray-400 text-sm">
                    Designed and developed by <span className="text-[#fae900] font-pacifico">Vani</span>
                </p>
            </div>
        </section>
    );
}
