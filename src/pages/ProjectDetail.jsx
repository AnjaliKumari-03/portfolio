import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../data/portfolioData'
import VantaBackground from '../components/VantaBackground'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24 text-center">
        <h1 className="font-display text-3xl text-ink mb-4">Project not found</h1>
        <Link to="/" className="text-roseDeep border-b border-rose">← Back to home</Link>
      </div>
    )
  }

  const liveLink = project.links.find((l) => l.href && /live|demo/i.test(l.label))
  const otherLinks = project.links.filter((l) => l.href && l !== liveLink)

  return (
    <div className="relative overflow-hidden pt-28 pb-28">
      <VantaBackground />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <Link to="/#projects" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-roseDeep transition-colors mb-8">
          ← Back to all projects
        </Link>

        {/* Banner card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden border border-line bg-surface shadow-2xl shadow-rose/10"
        >
          <div className="relative aspect-[16/9] md:aspect-[21/9]">
            <img
              src={project.cover}
              alt={`${project.name} homepage screenshot`}
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
          </div>

          <div className="relative px-6 md:px-10 pb-8 -mt-16 md:-mt-20">
            <p className="text-xs text-muted mb-2">{project.date}</p>
            <h1 className="font-display text-3xl md:text-5xl text-ink mb-2">{project.name}</h1>
            <p className="text-roseDeep text-base md:text-lg mb-6">{project.subtitle}</p>

            {(liveLink || otherLinks.length > 0) && (
              <div className="flex flex-wrap gap-3">
                {liveLink && (
                  <a
                    href={liveLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-rose text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-roseDeep transition shadow-lg shadow-rose/30"
                  >
                    {liveLink.label} ↗
                  </a>
                )}
                {otherLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-line bg-cream/60 text-ink text-sm font-medium px-5 py-2.5 rounded-full hover:border-rose hover:text-roseDeep transition"
                  >
                    {link.label} ↗
                  </a>
                ))}
                {!liveLink && otherLinks.length === 0 && (
                  <p className="text-sm text-muted italic">Live link coming soon.</p>
                )}
              </div>
            )}
          </div>
        </motion.div>

        {/* Two-column body */}
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="md:col-span-2 space-y-10"
          >
            <div>
              <h2 className="label-tag text-xs text-roseDeep mb-4">Highlights</h2>
              <ul className="space-y-3">
                {project.points.map((point, i) => (
                  <li key={i} className="text-ink leading-relaxed flex gap-3 bg-surface border border-line rounded-xl p-4">
                    <span className="text-rose mt-0.5 shrink-0">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.gallery && project.gallery.length > 0 && (
              <div>
                <h2 className="label-tag text-xs text-lavender mb-4">A closer look</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.gallery.map((src) => (
                    <div
                      key={src}
                      className="rounded-xl overflow-hidden border border-line bg-surface hover:border-rose/50 transition-colors"
                    >
                      <img src={src} alt={`${project.name} screenshot`} loading="lazy" className="w-full h-auto" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="space-y-6 md:sticky md:top-24 self-start"
          >
            {project.stats.length > 0 && (
              <div className="bg-surface border border-line rounded-2xl p-6">
                <h2 className="label-tag text-xs text-sage mb-4">At a glance</h2>
                <div className="grid grid-cols-2 gap-4">
                  {project.stats.map((s) => (
                    <div key={s.label}>
                      <p className="font-display text-2xl text-ink">{s.value}</p>
                      <p className="text-[11px] text-muted">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-surface border border-line rounded-2xl p-6">
              <h2 className="label-tag text-xs text-peach mb-4">Built with</h2>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span key={s} className="text-xs text-sage bg-sage/10 rounded-full px-3 py-1.5">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  )
}
