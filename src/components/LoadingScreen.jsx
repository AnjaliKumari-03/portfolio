import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BLADES = Array.from({ length: 16 });

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("loading"); // loading -> holding -> expanding -> done

  // count up to 100%
  useEffect(() => {
    let raf;
    const start = performance.now();
    const duration = 3600; // slower count — more time to sit with it

    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setPhase("holding");
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // hold at 100%, then expand+blur to swallow the screen
  useEffect(() => {
    if (phase === "holding") {
      const t = setTimeout(() => setPhase("expanding"), 650);
      return () => clearTimeout(t);
    }
    if (phase === "expanding") {
      const t = setTimeout(() => setPhase("done"), 500);
      return () => clearTimeout(t);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === "done") onComplete?.();
  }, [phase, onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[10000] bg-cream flex items-center justify-center overflow-hidden"
        >
          <motion.div
            animate={
              phase === "expanding"
                ? { scale: 55, filter: "blur(60px)", opacity: [1, 1, 0] }
                : { scale: 1, filter: "blur(0px)", opacity: 1 }
            }
            transition={
              phase === "expanding"
                ? {
                    scale: { duration: 1.1, ease: [0.76, 0, 0.24, 1] },
                    filter: { duration: 1.1, ease: [0.76, 0, 0.24, 1] },
                    opacity: {
                      duration: 1.1,
                      times: [0, 0.6, 1],
                      ease: "easeIn",
                    },
                  }
                : { duration: 0.3 }
            }
            className="relative w-44 h-44 flex items-center justify-center"
          >
            {/* radial fading-blade spinner */}
            {BLADES.map((_, i) => {
              const angle = (360 / BLADES.length) * i;
              const delay = (i / BLADES.length) * 1.2;

              return (
                <motion.span
                  key={i}
                  className="absolute left-1/2 top-1/2 w-[6px] h-[28px] rounded-full"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-52px)`,
                    background:
                      "linear-gradient(180deg, #2dd4bf 0%, #1e2530 100%)",
                  }}
                  animate={{ opacity: [1, 0.12, 1] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: -delay,
                  }}
                />
              );
            })}

            {/* center label */}
            <div className="flex flex-col items-center">
              <p className="font-display text-[11px] tracking-[0.3em] text-ink/60 mb-1">
                LOADING
              </p>
              <p className="font-display text-2xl text-ink tabular-nums">
                {progress}%
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
