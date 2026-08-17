import { motion } from 'framer-motion'
import { FaCode, FaPalette, FaServer, FaDatabase, FaTools, FaBrain } from 'react-icons/fa'
import { skillGroups } from '../data/portfolioData'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.03 } },
}

const tag = {
  hidden: { opacity: 0, y: 8, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.25 } },
}

const groupIcons = [FaCode, FaPalette, FaServer, FaDatabase, FaTools, FaBrain]
const accentText = ['text-rose', 'text-lavender', 'text-sage', 'text-roseDeep', 'text-lavender', 'text-sage']
const accentBg = ['bg-rose/15', 'bg-lavender/20', 'bg-sage/20', 'bg-rose/15', 'bg-lavender/20', 'bg-sage/20']

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden scroll-mt-20 py-28 bg-gradient-to-b from-cream/50 via-transparent to-cream/50">
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-10">Technical Skills</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => {
            const Icon = groupIcons[gi % groupIcons.length]
            return (
              <motion.div
                key={group.group}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={container}
                className="bg-surface border border-line rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className={`w-9 h-9 rounded-xl flex items-center justify-center ${accentBg[gi % accentBg.length]} ${accentText[gi % accentText.length]}`}>
                    <Icon size={15} />
                  </span>
                  <p className="label-tag text-xs text-ink">{group.group}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <motion.span
                      key={item}
                      variants={tag}
                      whileHover={{ y: -3 }}
                      className="text-xs text-ink bg-cream border border-line rounded-full px-3 py-1.5 transition-colors cursor-default hover:border-rose hover:text-roseDeep"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
