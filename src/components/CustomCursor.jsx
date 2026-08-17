import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const HOVER_SELECTOR =
  'a, button, [role="button"], input, textarea, [data-cursor-hover]';
const ACCENT = "167, 139, 250"; // violet-400

export default function CustomCursor() {
  const [ready, setReady] = useState(false);
  const [hover, setHover] = useState(false);
  const [down, setDown] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const dot = {
    x: useSpring(x, { stiffness: 1000, damping: 60 }),
    y: useSpring(y, { stiffness: 1000, damping: 60 }),
  };
  const ring = {
    x: useSpring(x, { stiffness: 220, damping: 26 }),
    y: useSpring(y, { stiffness: 220, damping: 26 }),
  };

  useEffect(() => {
    const canUse =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canUse) return;
    setReady(true);
    document.documentElement.classList.add("custom-cursor-active");

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e) => setHover(!!e.target.closest?.(HOVER_SELECTOR));

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mousedown", () => setDown(true));
    window.addEventListener("mouseup", () => setDown(false));
    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  if (!ready) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-violet-400 mix-blend-difference -translate-x-1/2 -translate-y-1/2"
        style={dot}
        animate={{
          width: hover ? 10 : 8,
          height: hover ? 10 : 8,
          scale: down ? 0.6 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border-2 border-violet-400 -translate-x-1/2 -translate-y-1/2"
        style={ring}
        animate={{
          width: hover ? 56 : 32,
          height: hover ? 56 : 32,
          opacity: hover ? 0.9 : 0.5,
          scale: down ? 0.85 : 1,
          boxShadow: `0 0 ${hover ? 20 : 0}px rgba(${ACCENT}, 0.6)`,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
      />
    </>
  );
}
