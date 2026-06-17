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
        <div
          className={`mx-auto mb-5 inline-flex border-2 px-4 py-2 shadow-[3px_3px_0_#101936] ${
            isDark
              ? 'border-[#35d6ff] bg-[#050a26] text-[#7cff7a]'
              : 'border-slate-950 bg-white text-[#123cbe]'
          }`}
        >
          <p className="font-pixel text-[10px] uppercase tracking-wide">
            {eyebrow}
          </p>
        </div>
      )}

      <h2
        className={`text-3xl font-black uppercase tracking-tight md:text-5xl ${
          isDark ? 'text-white' : 'text-slate-950'
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 text-base leading-7 md:text-lg ${
            isDark ? 'text-[#dfe9ff]' : 'text-slate-700'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeader