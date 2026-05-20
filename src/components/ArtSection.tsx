"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// List of sketches (Removed sketch10 as requested)
const sketches = [
    { src: "/sketches/sketch1.jpeg", alt: "Sketch 1" },
    { src: "/sketches/sketch2.jpeg", alt: "Sketch 2" },
    { src: "/sketches/sketch3.jpeg", alt: "Sketch 3" },
    { src: "/sketches/sketch4.jpeg", alt: "Sketch 4" },
    { src: "/sketches/sketch5.png", alt: "Sketch 5" },
    { src: "/sketches/sketch6.jpeg", alt: "Sketch 6" },
    { src: "/sketches/sketch7.jpeg", alt: "Sketch 7" },
    { src: "/sketches/sketch8.jpeg", alt: "Sketch 8" },
    { src: "/sketches/sketch9.jpeg", alt: "Sketch 9" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9, rotate: -3 },
    show: {
        opacity: 1,
        x: 0,
        scale: 1,
        rotate: 0,
        transition: { type: "spring", stiffness: 80, damping: 12 } as any
    },
};

export default function ArtSection() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -380,
                behavior: "smooth",
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 380,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="w-full relative z-10 py-20 min-h-[70vh] bg-black" id="art">
            {/* Content Header & Controls */}
            <div className="pt-[100px] px-6 sm:px-20 pb-[40px] flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div>
                    <motion.h1
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="font-poppins text-[3.5rem] md:text-[6rem] font-black text-transparent [-webkit-text-stroke:1px_white] md:[-webkit-text-stroke:2px_white] tracking-tighter"
                    >
                        Sketch Space
                    </motion.h1>
                    <motion.p
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="font-montserrat mt-4 text-gray-300 text-base md:text-lg max-w-2xl"
                    >
                        A pencil, a blank page, and an idea—this is where it all begins.
                        Raw, unfiltered, and straight from the imagination.
                    </motion.p>
                </div>

                {/* Slider Control Buttons */}
                <div className="flex gap-3 shrink-0 self-end md:self-auto">
                    <button
                        onClick={scrollLeft}
                        className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all text-white flex items-center justify-center cursor-pointer"
                        aria-label="Scroll Left"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={scrollRight}
                        className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all text-white flex items-center justify-center cursor-pointer"
                        aria-label="Scroll Right"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            {/* Gallery Carousel */}
            <div className="relative w-full overflow-hidden">
                <style>{`
                    .no-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>
                <motion.div
                    ref={scrollContainerRef}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex overflow-x-auto gap-6 px-6 sm:px-20 py-4 max-w-[1600px] mx-auto no-scrollbar snap-x snap-mandatory scroll-smooth"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {sketches.map((sketch, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.03,
                                rotate: index % 2 === 0 ? 1 : -1,
                                zIndex: 10,
                                transition: { duration: 0.3 }
                            }}
                            className="relative group shrink-0 w-[290px] sm:w-[330px] md:w-[360px] h-[360px] cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-white/5 snap-start"
                            onClick={() => setSelectedImage(sketch.src)}
                        >
                            <Image
                                src={sketch.src}
                                alt={sketch.alt}
                                fill
                                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <p className="text-white font-mono text-xl">#00{index + 1}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-md"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-8 right-8 text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={32} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-4xl max-h-[85vh] flex items-center justify-center p-2"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage}
                                alt="Selected Sketch"
                                width={800}
                                height={1000}
                                className="object-contain max-h-[85vh] w-auto rounded-lg shadow-2xl"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
