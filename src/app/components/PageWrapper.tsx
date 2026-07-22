"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
