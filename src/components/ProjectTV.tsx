"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Power, ChevronLeft, ChevronRight, ExternalLink, Github, Monitor } from "lucide-react";

const projects = [
    // FRONTEND Category
    {
        id: "recipe",
        title: "Recipe Finder",
        category: "FRONTEND",
        description: "A comprehensive Recipe Finder web application enabling users to search database entries based on kitchen ingredients, diet preferences, and cuisine categories.",
        tags: ["HTML", "CSS", "Javascript"],
        video: "/videos/recipe.mp4",
        link: "https://vanosaur.github.io/Recipe_Finder_project/",
        repo: "https://github.com/vanosaur/Recipe_Finder_project"
    },
    {
        id: "youtube",
        title: "Youtube Clone",
        category: "FRONTEND",
        description: "A pixel-perfect responsive clone of the YouTube desktop and mobile layouts, reproducing search flows, video grids, and responsive sidebar navigation.",
        tags: ["HTML", "CSS"],
        video: "/videos/youtube.mp4",
        link: "https://vanosaur.github.io/Youtube_clone/",
        repo: "https://github.com/vanosaur/Youtube_clone"
    },
    {
        id: "calc",
        title: "Calculator",
        category: "FRONTEND",
        description: "A clean, modern calculator interface supporting fundamental arithmetic operations, responsive keypads, and dark mode theme compatibility.",
        tags: ["HTML", "CSS", "Javascript"],
        video: "/videos/calc.mp4",
        link: "https://vanosaur.github.io/Calculator_project/",
        repo: "https://github.com/vanosaur/Calculator_project"
    },
    {
        id: "capstone",
        title: "Capstone Project",
        category: "FRONTEND",
        description: "An advanced responsive web template built utilizing modern Flexbox layouts, featuring hover actions, clean transitions, and layout modularity.",
        tags: ["HTML", "CSS"],
        video: "/videos/capstone.mp4",
        link: "https://vanosaur.github.io/Capstone_project/",
        repo: "https://github.com/vanosaur/Capstone_project"
    },

    // FULLSTACK Category
    {
        id: "snaptrek",
        title: "SnapTrek Platform",
        category: "FULLSTACK",
        description: "A full-stack travel and media sharing platform featuring Instagram-style feeds, video Reels upload pipelines integrated with Cloudinary, profile personalization, and user engagement metrics.",
        tags: ["React.js", "Express", "Node.js", "MongoDB", "Prisma", "Cloudinary"],
        video: "/videos/snaptrek.mp4",
        link: "https://snap-trek-fullstack.vercel.app/",
        repo: "https://github.com/vanosaur/snap_trek_fullstack"
    },
    {
        id: "campusride",
        title: "CampusRide Platform",
        category: "FULLSTACK",
        description: "Concurrent ride-dispatching engine built following SOLID principles. Matches drivers to campus bookings dynamically with real-time state persistence in MongoDB Atlas.",
        tags: ["Node.js", "Express", "MongoDB", "Render", "Vercel", "SOLID Principles"],
        video: "/videos/campusride.mp4",
        link: "https://campus-ride-sd-project.vercel.app/",
        repo: "https://github.com/vanosaur/CampusRide_SD_Project"
    },

    // BACKEND Category
    {
        id: "loadguard",
        title: "LoadGuard Resilience Engine",
        category: "BACKEND",
        description: "High-performance load balancer and system resilience queueing engine built with FastAPI and SQLite. Features client-side rate limiting, backpressure controls, and background workers with watchdog process safety.",
        tags: ["FastAPI", "Python", "SQLite", "Token Bucket", "Backpressure", "Worker Pools"],
        video: "/videos/loadguard.mp4",
        link: "https://loadguard.onrender.com/",
        repo: "https://github.com/vanosaur/loadguard"
    },

    // AI_AGENTIC Category
    {
        id: "acnesol",
        title: "AcneSol Skincare AI",
        category: "AI_AGENTIC",
        description: "Agentic medical vision assistant. Integrates a MobileNetV2 CNN classifier for acne lesion diagnostics with LangGraph RAG reasoning loops to deliver safety-grounded treatment plans.",
        tags: ["Next.js", "Python", "MobileNetV2", "LangGraph", "Groq", "RAG"],
        video: "/videos/acnesol.mp4",
        link: "https://acnesol.vercel.app/",
        repo: "https://github.com/vanosaur/Acnesol"
    },
    {
        id: "studycoach",
        title: "AI Study Coach",
        category: "AI_AGENTIC",
        description: "Personalized syllabus companion that structures learning roadmaps, generates adaptive practice checkpoints, and guides students using conversational RAG agents.",
        tags: ["Next.js", "LangGraph", "RAG", "Generative AI", "TailwindCSS"],
        video: "/videos/studyai.mp4",
        link: "https://ai-study-coach-xedbefuukzrmyohydecamk.streamlit.app/",
        repo: "https://github.com/vanosaur/ai-study-coach"
    },

    // DVA_DASHBOARD Category
    {
        id: "airquality",
        title: "Air Quality Analytics Dashboard",
        category: "DVA_DASHBOARD",
        description: "An environmental intelligence analytics dashboard mapping particulate concentrations (PM2.5, PM10) across metropolitan areas to evaluate civic impact and air safety standards.",
        tags: ["Tableau", "Data Analysis", "Data Visualization", "Environmental Science"],
        video: "/videos/dashboards.mp4",
        link: "https://public.tableau.com/app/profile/vani.rudra",
        repo: "https://github.com/vanosaur"
    }
];

const categories = [
    { key: "ALL", label: "All Projects" },
    { key: "AI_AGENTIC", label: "Agentic AI" },
    { key: "FULLSTACK", label: "Fullstack" },
    { key: "FRONTEND", label: "Frontend" },
    { key: "BACKEND", label: "Backend" },
    { key: "DVA_DASHBOARD", label: "DVA Dashboards" }
];

export default function ProjectTV() {
    const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isPowerOn, setIsPowerOn] = useState<boolean>(true);

    const filteredProjects = projects.filter(
        (p) => selectedCategory === "ALL" || p.category === selectedCategory
    );

    const activeProject = filteredProjects[currentIndex] || filteredProjects[0];

    const nextProject = () => {
        if (!isPowerOn) return;
        setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
    };

    const prevProject = () => {
        if (!isPowerOn) return;
        setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
    };

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        setCurrentIndex(0);
    };

    const renderScreenContent = () => {
        if (!isPowerOn) return null;

        if (activeProject?.video) {
            return (
                <video
                    key={activeProject.id}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain rounded-xl"
                >
                    <source src={activeProject.video} type="video/mp4" />
                </video>
            );
        }

        return (
            <div className="w-full h-full bg-slate-950 flex items-center justify-center text-white/40 text-[13px]">
                No Video Signal
            </div>
        );
    };

    return (
        <div className="w-full max-w-5xl mx-auto px-4 py-6 relative z-10 flex flex-col items-center">
            
            {/* Header Title */}
            <div className="text-center mb-8 w-full">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center font-poppins font-black text-[2.5rem] sm:text-[4rem] text-white tracking-tight"
                >
                    Featured Projects
                </motion.h1>
                <div className="w-20 h-1 bg-[#6366f1] mx-auto mt-3 rounded-full" />
            </div>

            {/* Smart Display System Container */}
            <div className="w-full bg-white/[0.02] border border-white/10 rounded-[24px] p-4 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-lg flex flex-col gap-6">
                
                {/* 1. Category Switcher Tab Bar (Sleek Glassmorphic Pill Dock) */}
                <div className="w-full flex flex-wrap gap-2 justify-center border-b border-white/5 pb-4">
                    {categories.map((cat) => (
                        <button
                            key={cat.key}
                            onClick={() => handleCategoryChange(cat.key)}
                            className={`px-4 py-2 text-[12px] font-chakra font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer relative overflow-hidden active:scale-95 ${
                                selectedCategory === cat.key
                                    ? "bg-[#6366f1] text-white shadow-[0_4px_20px_rgba(99,102,241,0.35)]"
                                    : "bg-white/[0.03] text-white/60 hover:bg-white/[0.08] hover:text-white border border-white/5"
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* 2. Bezel-less Display Viewport */}
                <div className="w-full aspect-video max-h-[480px] rounded-2xl bg-black border border-white/10 overflow-hidden relative shadow-[inset_0_0_40px_rgba(0,0,0,0.9)] flex flex-col justify-between">
                    
                    {/* Screen reflection glass overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.06] pointer-events-none z-10" />

                    <AnimatePresence mode="wait">
                        {isPowerOn ? (
                            <motion.div
                                key={activeProject ? activeProject.id : "empty"}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="w-full h-full relative"
                            >
                                {renderScreenContent()}
                            </motion.div>
                        ) : (
                            <div className="w-full h-full bg-[#050608] flex flex-col items-center justify-center text-center p-6 select-none">
                                <Monitor className="w-10 h-10 text-white/10 mb-2.5 animate-pulse" />
                                <span className="text-[11px] font-chakra text-white/30 uppercase tracking-widest">DISPLAY OFFLINE</span>
                                <button 
                                    onClick={() => setIsPowerOn(true)}
                                    className="mt-4 px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 text-[11px] font-chakra uppercase transition-all"
                                >
                                    Boot Console
                                </button>
                            </div>
                        )}
                    </AnimatePresence>
                </div>

                {/* 3. Sleek Integrated Navigation Control Bar */}
                <div className="w-full flex items-center justify-between px-2 py-1 text-white/60 text-[11px] font-chakra border-t border-white/5 pt-4">
                    
                    {/* Status Badge */}
                    <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${
                            isPowerOn ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" : "bg-rose-500"
                        }`} />
                        <span className="font-bold uppercase tracking-wider text-[10px] sm:text-[11px]">
                            {isPowerOn ? `LIVE MATCH // ${activeProject?.id.toUpperCase()}` : "STANDBY"}
                        </span>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={prevProject}
                            disabled={!isPowerOn}
                            className={`p-2 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:text-white transition-all active:scale-90 ${
                                !isPowerOn && "opacity-20 cursor-not-allowed"
                            }`}
                        >
                            <ChevronLeft size={16} />
                        </button>
                        
                        <span className="font-bold text-[10px] tracking-widest text-white/40">
                            {currentIndex + 1} / {filteredProjects.length}
                        </span>

                        <button
                            onClick={nextProject}
                            disabled={!isPowerOn}
                            className={`p-2 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:text-white transition-all active:scale-90 ${
                                !isPowerOn && "opacity-20 cursor-not-allowed"
                            }`}
                        >
                            <ChevronRight size={16} />
                        </button>
                    </div>

                    {/* Power Toggle Button */}
                    <button
                        onClick={() => setIsPowerOn(!isPowerOn)}
                        className={`p-2 rounded-xl border transition-all active:scale-90 flex items-center gap-1.5 font-bold uppercase text-[9px] tracking-wider ${
                            isPowerOn 
                                ? "bg-rose-950/20 border-rose-500/30 text-rose-400 hover:bg-rose-900/30 hover:border-rose-400" 
                                : "bg-emerald-950/20 border-emerald-500/30 text-emerald-400 hover:bg-emerald-900/30 hover:border-emerald-400"
                        }`}
                        title={isPowerOn ? "Power Off" : "Power On"}
                    >
                        <Power size={12} />
                        <span className="hidden sm:inline">{isPowerOn ? "OFF" : "ON"}</span>
                    </button>
                </div>
            </div>

            {/* 4. Glassmorphic Project Details Card */}
            <AnimatePresence mode="wait">
                {isPowerOn && activeProject && (
                    <motion.div
                        key={activeProject.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.2 }}
                        className="w-full mt-6 bg-white/[0.02] border border-white/10 backdrop-blur-md rounded-[20px] p-5 sm:p-7 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center"
                    >
                        {/* Title and Descriptions */}
                        <div className="flex-1 space-y-3.5 text-left">
                            <div className="flex flex-wrap gap-2 items-center">
                                <span className="bg-[#6366f1]/20 text-[#a5b4fc] border border-[#6366f1]/20 px-2.5 py-0.5 text-[10px] font-bold uppercase rounded-md font-chakra tracking-wider">
                                    {activeProject.category.replace("_", " ")}
                                </span>
                            </div>

                            <h2 className="text-[22px] sm:text-[25px] font-black text-white tracking-tight leading-tight">
                                {activeProject.title}
                            </h2>

                            <p className="text-white/70 text-[13px] sm:text-[14px] leading-relaxed max-w-2xl font-montserrat">
                                {activeProject.description}
                            </p>

                            {/* Tech Stack Badges */}
                            <div className="flex flex-wrap gap-2 pt-1.5">
                                {activeProject.tags.map((tag) => (
                                    <span 
                                        key={tag} 
                                        className="bg-white/5 text-white/60 border border-white/5 py-0.5 px-2.5 text-[10px] rounded-md font-sans font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 w-full md:w-auto shrink-0 pt-4 md:pt-0 border-t border-white/5 md:border-0">
                            {activeProject.link && (
                                <a
                                    href={activeProject.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-bold text-[12px] hover:bg-slate-100 active:scale-95 transition-all w-full md:w-40 border border-white"
                                >
                                    <span>Launch Site</span>
                                    <ExternalLink size={13} />
                                </a>
                            )}
                            {activeProject.repo && (
                                <a
                                    href={activeProject.repo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 text-white/80 border border-white/10 hover:border-white/20 hover:text-white active:scale-95 transition-all w-full md:w-40 text-[12px] font-semibold"
                                >
                                    <Github size={13} />
                                    <span>Source Code</span>
                                </a>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
