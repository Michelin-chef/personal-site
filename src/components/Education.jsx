import { GraduationCap } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import { education } from '../data/resume'

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest uppercase text-[var(--color-accent)] mb-4">
            Education
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text)] mb-8">
            教育背景
          </h2>
          <div className="p-6 sm:p-8 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)]">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                <GraduationCap size={24} className="text-[var(--color-accent)]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-text)]">
                  {education.school}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] mt-0.5">
                  {education.degree} · {education.period}
                </p>
                <ul className="mt-4 space-y-1">
                  {education.details.map((d, i) => (
                    <li
                      key={i}
                      className="text-sm text-[var(--color-text-secondary)] pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:rounded-full before:bg-[var(--color-text-secondary)]/40"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
