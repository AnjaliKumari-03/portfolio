import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { profile } from "../data/portfolioData";
import SectionGlow from "./SectionGlow";

const roles = [
  "Full-Stack MERN Developer",
  "React.js Enthusiast",
  "API & Backend Builder",
  "UI Detail Lover",
];

function useCyclingText(words, hold = 1900) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % words.length), hold);
    return () => clearInterval(t);
  }, [words, hold]);
  return words[index];
}

export default function Hero() {
  const currentRole = useCyclingText(roles);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <motion.section
      ref={sectionRef}
      id="hero"
      style={{ opacity: heroOpacity, y: heroY }}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-cream"
    >
      <div className="absolute inset-0 grid-fade pointer-events-none" />
      <SectionGlow colors={["indigo", "violet", "teal"]} opacity={0.35} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-12 h-12 rounded-full bg-gradient-to-br from-rose via-peach to-lavender flex items-center justify-center text-white font-display text-lg shadow-md shadow-rose/30">
              AK
            </span>
            <p className="label-tag text-m text-roseDeep">Hi, I'm </p>
          </div>

          <h1 className="relative inline-block font-display text-5xl md:text-6xl leading-[1.05] text-ink">
            {profile.name}
          </h1>

          <div className="h-9 mt-6 overflow-hidden">
            <motion.p
              key={currentRole}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.4 }}
              className="font-display text-2xl md:text-3xl text-roseDeep"
            >
              {currentRole}
            </motion.p>
          </div>
          <p className="mt-6 text-muted max-w-md leading-relaxed">
            {profile.tagline}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="bg-rose text-white font-medium px-6 py-3 rounded-full hover:bg-roseDeep transition shadow-sm shadow-rose/30"
            >
              View Projects
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="text-sm text-ink border-b border-line hover:border-roseDeep hover:text-roseDeep transition pb-0.5"
            >
              Download Resume ↓
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="hidden md:block"
        >
          <div className="relative bg-surface border border-line rounded-[2rem] p-8 shadow-xl shadow-rose/10">
            <span className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-peach/70 blur-sm" />
            <span className="absolute -bottom-4 -left-4 w-14 h-14 rounded-full bg-lavender/40 blur-md" />

            <p className="label-tag text-xs text-muted mb-6">What I bring</p>
            <ul className="space-y-5">
              <li className="flex items-center gap-4">
                <span className="w-12 h-12 shrink-0 rounded-2xl bg-rose/15 flex items-center justify-center font-display text-xl text-roseDeep">
                  6+
                </span>
                <span className="text-sm text-ink">
                  projects shipped &amp; deployed
                </span>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-12 h-12 shrink-0 rounded-2xl bg-lavender/20 flex items-center justify-center font-display text-xl text-lavender">
                  39
                </span>
                <span className="text-sm text-ink">
                  REST API endpoints designed and secured
                </span>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-12 h-12 shrink-0 rounded-2xl bg-sage/20 flex items-center justify-center font-display text-xl text-sage">
                  10+
                </span>
                <span className="text-sm text-ink">
                  reusable React components built
                </span>
              </li>
            </ul>
            <div className="mt-8 pt-6 border-t border-line">
              <p className="text-xs text-muted mb-3">Currently exploring</p>
              <ul className="space-y-2.5">
                {[
                  "Full-Stack roles",
                  "Frontend developer roles",
                  "Backend developer roles",
                ].map((role, i) => (
                  <motion.li
                    key={role}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.15,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                    className="flex items-center gap-3"
                  >
                    <motion.span
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut",
                      }}
                      className="w-2 h-2 rounded-full bg-sage shrink-0"
                    />
                    <span className="text-ink font-medium text-sm">{role}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-muted hover:text-roseDeep transition-colors"
      >
        <span className="text-xs label-tag">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="text-lg"
        >
          ↓
        </motion.span>
      </motion.a>
    </motion.section>
  );
}
