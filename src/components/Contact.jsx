import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Contact.css";
import { IoIosSend } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { MdAddCall } from "react-icons/md";

const Contact = () => {
  const fade = {
    opacity: 1,
    transition: { duration: 1.5 },
  };

  const verticalLeft = {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5 },
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataToSubmit = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mnnblabl", {
        method: "POST",
        body: formDataToSubmit,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        toast.success("Thanks for your message! I'll get back to you soon.", {
          position: "top-left",
          autoClose: 3000,
        });
        setFormData({ name: "", email: "", message: "" });
        e.target.reset();
      } else {
        toast.error("Submission failed. Please try again.", {
          position: "top-left",
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error("Network error. Please try again.", {
        position: "top-left",
        autoClose: 3000,
      });
      console.error(error);
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <div className="contact" id="contact">
        <div className="container">
          <motion.div
            className="heading"
            initial={{ opacity: 0 }}
            whileInView={fade}
            viewport={{ once: true }}
          >
            <p className="heading-sub-text">Have Me</p>
            <p className="heading-text">Get in Touch</p>
          </motion.div>

          <div className="contact-box">
            <motion.div
              className="left-box"
              initial={{ opacity: 0, y: "-50px" }}
              whileInView={verticalLeft}
            >
              <div className="contact-heading">
                <p>
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your visions. Feel free to reach out
                  to me using the contact form or through the provided contact
                  details.
                </p>
              </div>

              <div className="contact-hello">
                <p>Say Hello</p>

                <Link
                  className="hello-links"
                  to="//wa.me/+917980717584"
                  target="_blank"
                >
                  <MdAddCall className="contact-icon" /> +91 7980717584
                </Link>

                <a
                  className="hello-links"
                  href="mailto:baidya.ripan024@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <HiOutlineMail className="contact-icon" /> baidya.ripan024@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div
              className="right-box"
              initial={{ opacity: 0, y: "50px" }}
              whileInView={verticalLeft}
            >
              <form
                action="https://formspree.io/f/mnnblabl"
                method="POST"
                onSubmit={handleSubmit}
              >
                <div className="form-top">
                  <div className="name">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="email">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>

                <div className="form-mid">
                  <div className="message">
                    <label htmlFor="message">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi! Do you already have website ideas, or would you like me to help build a website for you? I’m ready to work on it."
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="form-btn">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="hero-contact"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}{" "}
                    {!isSubmitting && <IoIosSend className="send-icon" />}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Contact;

