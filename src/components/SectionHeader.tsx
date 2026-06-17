type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  variant?: 'light' | 'dark'
}

function SectionHeader({
  eyebrow,
  title,
  description,
  variant = 'light',
}: SectionHeaderProps) {
  const isDark = variant === 'dark'

  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-[0.2em] ${
            isDark ? 'text-blue-300' : 'text-blue-600'
          }`}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={`text-3xl font-bold tracking-tight md:text-4xl ${
          isDark ? 'text-white' : 'text-slate-950'
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base leading-7 md:text-lg ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeader