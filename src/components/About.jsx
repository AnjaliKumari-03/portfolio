import { motion } from 'framer-motion'
import { FaPaintBrush, FaBirthdayCake, FaHome } from 'react-icons/fa'
import { profile } from '../data/portfolioData'

const interestIcons = [FaPaintBrush, FaBirthdayCake, FaHome]
const interestColors = ['text-rose bg-rose/15', 'text-lavender bg-lavender/20', 'text-sage bg-sage/20']

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden scroll-mt-20 py-28">
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-10">A little about me</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="md:col-span-2 relative bg-surface border border-line rounded-2xl p-8"
          >
            <span className="font-display text-6xl text-rose/30 leading-none absolute top-4 left-6">“</span>
            <p className="relative text-muted leading-relaxed text-lg pl-2">{profile.bio}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-surface2 rounded-2xl p-6"
          >
            <p className="label-tag text-xs text-roseDeep mb-4">When I'm off the clock</p>
            <ul className="space-y-3">
              {profile.interests.map((interest, i) => {
                const Icon = interestIcons[i % interestIcons.length]
                return (
                  <li key={interest} className="flex items-center gap-3">
                    <span className={`w-9 h-9 shrink-0 rounded-full flex items-center justify-center ${interestColors[i % interestColors.length]}`}>
                      <Icon size={14} />
                    </span>
                    <span className="text-sm text-ink">{interest}</span>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
