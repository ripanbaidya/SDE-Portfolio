// src/components/Skills.js
import React from "react";
import "../styles/Skills.css";
import { motion } from "framer-motion";
import { SkillsData } from "../data/SkillsData";

const Skills = () => {
  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  // Card animation (entrance + floating effect)
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9, rotateX: -15 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div className="skills" id="skills">
      <div className="container">
        {/* Heading */}
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="heading"
        >
          <p className="heading-sub-text">What I work with</p>
          <p className="heading-text">My Skills</p>
        </motion.div>

        {/* Categories */}
        {SkillsData.map((category, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={containerVariants}
            className="skills-category"
          >
            {/* Category title */}
            <motion.h3
              className="category-title"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {category.category}
            </motion.h3>

            {/* Skills flex-box */}
            <div className="skills-box">
              {category.skills.map((skill, i) => (
                <motion.div
                  className="skill-card"
                  key={i}
                  variants={cardVariants}
                  whileHover={{
                    rotateY: 15,
                    rotateX: 8,
                    scale: 1.08,
                    boxShadow: "0 20px 40px rgba(56,189,248,0.45)",
                    transition: { duration: 0.4, ease: "easeOut" },
                  }}
                  whileTap={{ scale: 0.95, rotateY: -5, rotateX: -2 }}
                >
                  {/* Parallax icon */}
                  <motion.div
                    className="skill-icon"
                    whileHover={{ y: -8, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <img
                      src={skill.link}
                      alt={skill.name}
                      className="skill-img"
                      loading="lazy"
                    />
                  </motion.div>
                  <motion.small
                    className="skill-desc"
                    whileHover={{ color: "#38bdf8", y: -2 }}
                  >
                    {skill.name}
                  </motion.small>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
