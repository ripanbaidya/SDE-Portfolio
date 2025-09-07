import React, { useEffect, useState } from "react"
import { BrowserRouter as Router } from "react-router-dom";
import '../styles/App.css';
import { motion } from "framer-motion";
import HomePage from "../pages/HomePage";

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (loading) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 100) return prev + 1;
          clearInterval(interval);
          return 100;
        });
      }, 30); // speed of percentage (100 * 30ms = ~3s)
    }
    const timer = setTimeout(() => setLoading(false), 3100);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [loading]);

  return (
    loading ? 
    <div className="loader">
      <motion.div 
        className="circle-loader"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: [0.5, 1.2, 1], opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.h2 
        className="loader-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        Ripan Baidya
      </motion.h2>

      {/* Percentage */}
      <motion.p 
        className="loader-percentage"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {progress}%
      </motion.p>
    </div>
    :
    <div className="App">
      <Router>
        <HomePage />
      </Router>
    </div>
  );
}

export default App;
