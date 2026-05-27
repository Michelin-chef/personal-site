import ScrollReveal from './ScrollReveal'
import { experiences } from '../data/resume'

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest uppercase text-[var(--color-accent)] mb-4">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text)] mb-12">
            工作经历
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-[var(--color-border)]" />

          {experiences.map((exp, i) => (
            <ScrollReveal key={i} delay={0.2}>
              <div className="relative pl-14 pb-8">
                <div className="absolute left-3.5 top-1 w-3.5 h-3.5 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg)]" />
                <div className="p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)]">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h3 className="text-lg font-semibold text-[var(--color-text)]">
                      {exp.role}
                    </h3>
                    <span className="text-sm text-[var(--color-text-secondary)] whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--color-accent)] font-medium mb-4">
                    {exp.company}
                  </p>
                  <ul className="space-y-2">
                    {exp.highlights.map((item, j) => (
                      <li
                        key={j}
                        className="text-sm text-[var(--color-text-secondary)] leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:rounded-full before:bg-[var(--color-text-secondary)]/40"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
