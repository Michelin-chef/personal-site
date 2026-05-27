import { personalInfo } from '../data/resume'

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-[var(--color-border)]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-[var(--color-text-secondary)]">
          {personalInfo.name}
        </p>
        <p className="text-sm text-[var(--color-text-secondary)]">
          {personalInfo.title}
        </p>
      </div>
    </footer>
  )
}
