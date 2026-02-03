"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { Button } from "@mui/material";

const socialLinks = [
  { Icon: FaGithub, href: "https://github.com/satyaachanta", label: "GitHub" },
  {
    Icon: FaLinkedin,
    href: "https://www.linkedin.com/in/itsmesav",
    label: "LinkedIn",
  },
  {
    Icon: FaEnvelope,
    href: "mailto:satya.achantavenkata@gmail.com",
    label: "Email",
  },
  { Icon: FaPhone, href: "tel:+18135381113", label: "Phone" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-900 via-slate-900 to-slate-950 p-8 text-white shadow-2xl">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 left-10 h-56 w-56 rounded-full bg-cyan-400/30 blur-3xl"></div>
        <div className="absolute bottom-[-40px] right-0 h-64 w-64 rounded-full bg-blue-500/30 blur-3xl"></div>
      </div>

      <div className="relative z-10 flex flex-col gap-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-[0.4em] text-white/70"
        >
          Evidence-based builder
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Satya Achanta
          </h1>
          <p className="mt-2 text-lg font-light text-white/80 md:text-xl">
            Senior Software Engineer · Full Stack Engineer · Product Builder
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-base leading-relaxed text-white/80"
        >
          10+ years designing and modernizing large-scale web platforms and
          APIs. I take ideas from the whiteboard to clean code, prove them with
          focused tests, and ship confidently through tight automation so
          product teams see impact with confidence and speed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap gap-3"
        >
          <Button
            variant="contained"
            href="#contact"
            sx={{
              backgroundColor: "white",
              color: "#0369a1",
              fontWeight: 600,
              "&:hover": { backgroundColor: "#e2e8f0" },
            }}
          >
            Get In Touch
          </Button>
          <Button
            variant="outlined"
            href="/resume.pdf"
            download
            sx={{
              borderColor: "white",
              color: "white",
              fontWeight: 600,
              "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
            }}
          >
            Resume
          </Button>
          <Button
            variant="outlined"
            href="/cover-letter.pdf"
            download
            sx={{
              borderColor: "white",
              color: "white",
              fontWeight: 600,
              "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
            }}
          >
            Cover Letter
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap items-center gap-4 text-2xl"
        >
          {socialLinks.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-full border border-white/30 p-3 transition-all duration-200 hover:scale-105 hover:border-white hover:bg-white/10"
            >
              <Icon />
            </a>
          ))}
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="grid gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 text-sm text-white/90"
        >
          <div>
            <dt className="text-xs uppercase tracking-[0.3em] text-white/60">
              Location
            </dt>
            <dd className="font-semibold">Michigan, USA</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.3em] text-white/60">
              Experience
            </dt>
            <dd className="font-semibold">
              10+ years modernizing large-scale platforms
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.3em] text-white/60">
              Focus
            </dt>
            <dd className="font-semibold">
              React · TypeScript · Python · Java · Developer Experience · Cloud
              Platforms · Design Systems
            </dd>
          </div>
        </motion.dl>
      </div>
    </section>
  );
}
