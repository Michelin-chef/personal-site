import { Mail, Phone } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import { personalInfo } from '../data/resume'

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 px-6 bg-[var(--color-bg-secondary)]">
      <div className="max-w-2xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest uppercase text-[var(--color-accent)] mb-4">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text)] mb-4">
            联系我
          </h2>
          <p className="text-base text-[var(--color-text-secondary)] mb-10">
            如果您对我的背景感兴趣，欢迎随时联系
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] hover:scale-[1.02] transition-transform duration-300"
            >
              <Mail size={20} className="text-[var(--color-accent)]" />
              <span className="text-sm text-[var(--color-text)]">{personalInfo.email}</span>
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] hover:scale-[1.02] transition-transform duration-300"
            >
              <Phone size={20} className="text-[var(--color-accent)]" />
              <span className="text-sm text-[var(--color-text)]">{personalInfo.phone}</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
