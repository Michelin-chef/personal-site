import { Code2, Cpu, Video, Wifi, Wrench, Zap } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import { skills } from '../data/resume'

const iconMap = { Code2, Cpu, Video, Wifi, Wrench, Zap }

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 px-6 bg-[var(--color-bg-secondary)]">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest uppercase text-[var(--color-accent)] mb-4">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text)] mb-12">
            专业技能
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((group, i) => {
            const Icon = iconMap[group.icon] || Code2
            return (
              <ScrollReveal key={group.category} delay={i * 0.1}>
                <div className="h-full p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] hover:scale-[1.02] transition-transform duration-300">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-base font-semibold text-[var(--color-text)] mb-3">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
