import { motion } from 'framer-motion'

const GLOW_COLORS = {
  indigo: '#6C8CFF',
  violet: '#C084FC',
  teal: '#2DD4BF',
  cyan: '#38BDF8',
}

const LAYOUTS = [
  { style: { top: '-12%', left: '-8%' }, size: 'w-[26rem] h-[26rem]', duration: 16 },
  { style: { bottom: '-15%', right: '-10%' }, size: 'w-[22rem] h-[22rem]', duration: 20 },
  { style: { top: '35%', right: '20%' }, size: 'w-[16rem] h-[16rem]', duration: 13 },
]

/**
 * Drifting, colored ambient glow for a section. Drop inside any
 * `relative overflow-hidden` section — it sits behind the content
 * (-z-10) and animates continuously so the page never feels static.
 */
export default function SectionGlow({ colors = ['indigo', 'violet'], opacity = 0.28 }) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {colors.map((color, i) => {
        const layout = LAYOUTS[i % LAYOUTS.length]
        return (
          <motion.div
            key={color + i}
            className={`absolute rounded-full blur-3xl ${layout.size}`}
            style={{
              ...layout.style,
              opacity,
              background: `radial-gradient(circle, ${GLOW_COLORS[color]} 0%, transparent 70%)`,
            }}
            animate={{
              x: [0, 26, -18, 0],
              y: [0, -22, 16, 0],
              scale: [1, 1.08, 0.94, 1],
            }}
            transition={{
              duration: layout.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 1.4,
            }}
          />
        )
      })}
    </div>
  )
}
