import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const contexts = [
    "Transforming ideas into scalable full-stack solutions.",
    "Java-powered backends with modern frontends for seamless apps.",
    "Crafting end-to-end applications — from database to UI.",
    "Full-stack expertise: Java, APIs, and responsive frontends.",
    "Building robust and user-centric solutions for the modern web.",
];


const ContextSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % contexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="context-slider">
      <AnimatePresence mode="wait">
        <motion.h2
          key={index}
          className="context-text"
          initial={{ y: "100%", opacity: 0 }}
          animate={{
            y: "0%",
            opacity: 1,
            transition: { type: "spring", stiffness: 70, damping: 12 },
          }}
          exit={{
            y: "-100%",
            opacity: 0,
            transition: { duration: 0.5 },
          }}
        >
          <motion.span
            className="sparkle"
            animate={{ scale: [1, 1.3, 1], rotate: [0, 20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            ✨
          </motion.span>{" "}
          {contexts[index]}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
};

export default ContextSlider;
