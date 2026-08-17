import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { projects, otherProjects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden scroll-mt-20 py-28">
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-2">Projects</h2>
          <p className="text-muted mb-12">A few full-stack builds I've shipped, start to finish.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: (idx % 4) * 0.05 }}
              whileHover={{ y: -5 }}
              className="group border border-line rounded-2xl bg-surface overflow-hidden hover:shadow-xl hover:shadow-rose/10 transition-all flex flex-col"
            >
              <Link to={`/projects/${project.slug}`} className="block relative aspect-[16/10] overflow-hidden border-b border-line">
                <img
                  src={project.cover}
                  alt={`${project.name} homepage screenshot`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent" />
              </Link>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs text-muted mb-2">{project.date}</p>
                <h3 className="font-display text-2xl text-ink">{project.name}</h3>
                <p className="text-roseDeep text-sm mb-4">{project.subtitle}</p>

                {project.stats.length > 0 && (
                  <div className="flex flex-wrap gap-4 mb-4">
                    {project.stats.slice(0, 3).map((s) => (
                      <div key={s.label}>
                        <p className="font-display text-xl text-ink">{s.value}</p>
                        <p className="text-[11px] text-muted">{s.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.slice(0, 4).map((s) => (
                    <span key={s} className="text-[11px] text-sage bg-sage/10 rounded-full px-2.5 py-1">
                      {s}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="text-[11px] text-muted px-2.5 py-1">+{project.stack.length - 4} more</span>
                  )}
                </div>

                <Link
                  to={`/projects/${project.slug}`}
                  className="mt-auto inline-flex items-center gap-1.5 text-sm text-ink font-medium border-b border-rose w-fit pb-0.5 group-hover:text-roseDeep transition-colors"
                >
                  View details
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {otherProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="mt-10 border border-line rounded-2xl bg-surface2/60 p-6"
          >
            <p className="text-xs text-muted mb-4">A few smaller builds, also on GitHub</p>
            <ul className="grid sm:grid-cols-3 gap-4">
              {otherProjects.map((p) => (
                <li key={p.name}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <p className="text-ink text-sm font-medium group-hover:text-roseDeep transition-colors">
                      {p.name} <span className="text-muted">↗</span>
                    </p>
                    <p className="text-xs text-muted mt-1 leading-relaxed">{p.subtitle}</p>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </section>
  )
}
