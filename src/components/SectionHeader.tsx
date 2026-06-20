type SectionHeaderProps = {
  eyebrow: string
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
    <div className="max-w-3xl">
      <p
        className={[
          'terminal-eyebrow font-mono-accent text-[13px] font-semibold uppercase tracking-[0.22em]',
          isDark ? 'text-[#ff4fa3]' : 'text-blue-600',
        ].join(' ')}
      >
        <span>{eyebrow}</span>
      </p>

      <h2
        className={[
          'mt-4 text-[2.65rem] font-extrabold leading-tight tracking-tight md:text-5xl',
          isDark ? 'text-white' : 'text-slate-950',
        ].join(' ')}
      >
        {title}
      </h2>

      {description && (
        <p
          className={[
            'mt-5 text-lg leading-8',
            isDark ? 'text-slate-300' : 'text-slate-500',
          ].join(' ')}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeader