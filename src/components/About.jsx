import React from "react";
import "../styles/About.css";
import { motion } from "framer-motion";
import ProfileImg from "../images/profile_me.jpg";

const About = () => {
  const horizontal = {
    x: 0,
    opacity: 1,
    transition: { type: "spring", duration: 2, bounce: 0.3 },
  };

  return (
    <>
      <div className="about" id="about">
        <div className="container">
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={horizontal}
            viewport={{ once: true }}
            className="heading"
          >
            <p className="heading-sub-text">Who I am</p>
            <p className="heading-text">About Me</p>
          </motion.div>
          <div className="split-about">
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              whileInView="visible"
              variants={{
                visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
              }}
              className="about-content"
            >
              <p>
                Hi, I’m <strong>Ripan Baidya</strong>—a Java Full Stack
                Developer passionate about building scalable, cloud-native
                applications. I’m currently focused on microservices,
                distributed systems, and strengthening my DSA skills.
              </p>
              <br />
              <p>
                Beyond coding, I’m curious about mental health, biohacking, and
                personal development. I believe growth in life and technology go
                hand in hand, and I’m always striving to push both forward.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: "50", opacity: 0 }}
              whileInView={horizontal}
              className="about-img"
            >
              <img src={ProfileImg} alt="Profile" />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
