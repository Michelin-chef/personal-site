import { personalInfo } from '../data/resume'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-16"
    >
      <div className="text-center max-w-3xl">
        <p className="text-sm font-medium tracking-widest uppercase text-[var(--color-accent)] mb-6">
          Embedded Software Engineer
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[var(--color-text)] leading-[1.05]">
          {personalInfo.name}
        </h1>
        <p className="mt-6 text-xl sm:text-2xl md:text-3xl font-medium text-[var(--color-text-secondary)]">
          {personalInfo.title}
        </p>
        <p className="mt-4 text-base sm:text-lg text-[var(--color-text-secondary)]/80 max-w-xl mx-auto leading-relaxed">
          {personalInfo.tagline}
        </p>
        <div className="mt-10">
          <button
            onClick={() =>
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[var(--color-accent)] rounded-full hover:opacity-90 transition-opacity"
          >
            了解更多
          </button>
        </div>
      </div>
    </section>
  )
}
