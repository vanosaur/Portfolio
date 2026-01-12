"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
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
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8, rotate: -5 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        transition: { type: "spring", stiffness: 100, damping: 10 } as any
    },
};

export default function ArtSection() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="w-full relative z-10 py-20 min-h-screen bg-black" id="art">
            {/* Content Header */}
            <div className="pt-[100px] px-6 sm:px-20 pb-[40px] text-center sm:text-left">
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

            {/* Gallery */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-6 sm:px-20 max-w-[1600px] mx-auto"
            >
                {sketches.map((sketch, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.05,
                            rotate: index % 2 === 0 ? 2 : -2,
                            zIndex: 10,
                            transition: { duration: 0.3 }
                        }}
                        className="relative group w-full h-[350px] cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-white/5"
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
        </div >
    );
}
