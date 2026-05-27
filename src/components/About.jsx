import ScrollReveal from './ScrollReveal'
import { aboutText } from '../data/resume'

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest uppercase text-[var(--color-accent)] mb-4">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text)] mb-8">
            关于我
          </h2>
          <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] leading-relaxed">
            {aboutText}
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
