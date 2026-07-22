"use client";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = () => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 z-50"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        className="w-16 h-16 border-4 border-t-4 border-white rounded-full border-t-transparent"
      />
    </motion.div>
  </AnimatePresence>
);

export default LoadingScreen;
