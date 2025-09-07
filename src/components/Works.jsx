import React, { useState } from "react";
import "../styles/Works.css";
import { motion } from "framer-motion";
import { 
	SpringReactData,
  	DataStructureData,
 	MicroservicesData,
} from "../data/WorkData";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const Works = () => {
  const [activeTab, setActiveTab] = useState("spring-react");

  const tabData = [
    { id: "spring-react", label: "SpringBoot + React", data: SpringReactData },
    { id: "data-structures", label: "Data Structures", data: DataStructureData },
    { id: "microservices", label: "Microservices", data: MicroservicesData },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="works" id="works">
      <div className="container">
        {/* Heading */}
        <motion.div
			initial={{ y: -60, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			transition={{ duration: 1, ease: "easeOut" }}
			viewport={{ once: true }}
			className="heading"
        >
        <p className="heading-sub-text">I build real value</p>
        <p className="heading-text">Works</p>

		</motion.div>

        {/* Tabs */}
        <div className="tabs">
          	{tabData.map((tab) => (
				<button
				key={tab.id}
				className={`tab ${activeTab === tab.id ? "active" : ""}`}
				onClick={() => setActiveTab(tab.id)}
				>
				{tab.label}
            	</button>
          	))}
        </div>

        {/* Works */}
        <motion.div
			className="works-box"
			variants={containerVariants}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true }}
        >
        {tabData
            .find((tab) => tab.id === activeTab)
            .data.map((w, index) => (
				<motion.div
					key={index}
					className="work-card"
					variants={cardVariants}
					whileHover={{
						scale: 1.05,
						boxShadow: "0 15px 35px rgba(56,189,248,0.4)",
						borderColor: "#38bdf8",
						transition: { duration: 0.3 },
					}}
				>
                <h3 className="work-title">{w.title}</h3>
                <p className="work-desc">{w.desc}</p>
                
				<div className="work-tech">
                	{w.tech.map((t, i) => (
						<span key={i} className="tech-tag">
						{t}
						</span>
                	))}
                </div>

                <div className="work-links">
                	{w.gitlink && (
						<a href={w.gitlink} target="_blank" rel="noopener noreferrer">
							<FaGithub className="work-git" style={{ marginRight: "0.3rem" }}/> 
						</a>
					)}
					{w.site && w.site !== "#" && (
						<a href={w.site} target="_blank" rel="noopener noreferrer">
							<FaExternalLinkAlt className="work-site" style={{ marginRight: "0.3rem" }}/>
						</a>
					)}
				</div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Works;
