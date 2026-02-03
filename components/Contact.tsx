"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button, TextField } from "@mui/material";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const fieldStyles = {
    "& .MuiOutlinedInput-root": {
      color: "var(--text-primary)",
      backgroundColor: "rgba(255,255,255,0.95)",
      borderRadius: "16px",
      "& fieldset": {
        borderColor: "#dbeafe",
      },
      "&:hover fieldset": {
        borderColor: "#0ea5e9",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#0284c7",
        boxShadow: "0 0 0 3px rgba(14,116,144,0.15)",
      },
    },
    "& .MuiInputLabel-root": {
      color: "#64748b",
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link
    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );
    window.location.href = `mailto:satya.achantavenkata@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Get In Touch</span>
          </h2>

          <div className="max-w-6xl mx-auto grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold mb-6 text-white">
                Let&apos;s Connect
              </h3>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your visions. Feel free to reach
                out!
              </p>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center gap-4 rounded-2xl border border-purple-800/40 bg-gray-900/80 p-4 shadow-lg"
                >
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a
                      href="mailto:satya.achantavenkata@gmail.com"
                      className="break-words text-gray-200 font-semibold hover:text-blue-300"
                    >
                      satya.achantavenkata@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center gap-4 rounded-2xl border border-blue-800/40 bg-gray-900/80 p-4 shadow-lg"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <a
                      href="tel:+18135381113"
                      className="break-words text-gray-200 font-semibold hover:text-blue-300"
                    >
                      (813) 538-1113
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center gap-4 rounded-2xl border border-blue-800/40 bg-gray-900/80 p-4 shadow-lg"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white font-semibold">
                      Ann Arbor, Michigan
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="rounded-3xl border border-white/10 bg-gray-900/80 p-8 shadow-2xl backdrop-blur-xl"
            >
              <div className="mb-6 text-sm uppercase tracking-[0.4em] text-slate-300">
                Send a Note
              </div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-slate-300">
                    Your Name
                  </p>
                  <TextField
                    fullWidth
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    placeholder="John Doe"
                    sx={fieldStyles}
                  />
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-slate-300">
                    Your Email
                  </p>
                  <TextField
                    fullWidth
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    placeholder="you@email.com"
                    sx={fieldStyles}
                  />
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-slate-300">
                    Your Message
                  </p>
                  <TextField
                    fullWidth
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    multiline
                    rows={6}
                    variant="outlined"
                    placeholder="Tell me about your project, role, or idea..."
                    sx={fieldStyles}
                  />
                </div>

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  endIcon={<FaPaperPlane />}
                  sx={{
                    background:
                      "linear-gradient(135deg, #0891b2 0%, #0e7490 50%, #0369a1 100%)",
                    py: 1.7,
                    fontSize: "1.1rem",
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #0e7490 0%, #0369a1 50%, #075985 100%)",
                    },
                  }}
                >
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
