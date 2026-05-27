import { FolderGit2 } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import { projects } from '../data/resume'

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 px-6 bg-[var(--color-bg-secondary)]">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest uppercase text-[var(--color-accent)] mb-4">
            Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text)] mb-12">
            项目经历
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((proj, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="h-full p-6 sm:p-8 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] hover:scale-[1.01] transition-transform duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center">
                    <FolderGit2 size={20} className="text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-text)]">
                      {proj.name}
                    </h3>
                    <p className="text-xs text-[var(--color-text-secondary)]">
                      {proj.platform} · {proj.period}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  {proj.summary}
                </p>

                <ul className="space-y-1.5 mb-5">
                  {proj.contributions.map((item, j) => (
                    <li
                      key={j}
                      className="text-sm text-[var(--color-text-secondary)] leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:rounded-full before:bg-[var(--color-text-secondary)]/40"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
