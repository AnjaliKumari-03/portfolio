import { motion } from 'framer-motion'
import { FaGraduationCap, FaCertificate } from 'react-icons/fa'
import { education, certifications } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="relative overflow-hidden scroll-mt-20 py-28 bg-gradient-to-b from-cream/50 via-transparent to-cream/50">
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-10">Education &amp; Certifications</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaGraduationCap className="text-sage" />
              <p className="label-tag text-xs text-sage">Education</p>
            </div>
            <div className="space-y-4">
              {education.map((e, i) => (
                <motion.div
                  key={e.school}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-surface border border-line rounded-xl p-5 hover:-translate-y-0.5 hover:shadow-md hover:shadow-sage/10 transition-all"
                >
                  <p className="text-ink font-medium">{e.degree}</p>
                  <p className="text-muted text-sm">{e.school}</p>
                  <p className="text-xs text-muted mt-1">{e.date}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaCertificate className="text-lavender" />
              <p className="label-tag text-xs text-lavender">Certifications</p>
            </div>
            <div className="space-y-3">
              {certifications.map((c, i) => (
                <motion.div
                  key={c}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-3 bg-surface border border-line rounded-xl px-4 py-3.5 hover:-translate-y-0.5 hover:shadow-md hover:shadow-lavender/10 transition-all"
                >
                  <span className="w-7 h-7 shrink-0 rounded-full bg-rose/15 text-roseDeep flex items-center justify-center text-xs">✓</span>
                  <span className="text-sm text-ink">{c}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
