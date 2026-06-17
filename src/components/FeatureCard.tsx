type FeatureCardProps = {
  title: string
  description: string
  icon?: string
  variant?: 'light' | 'dark'
}

function FeatureCard({
  title,
  description,
  icon = '01',
  variant = 'light',
}: FeatureCardProps) {
  const isDark = variant === 'dark'

  return (
    <div
      className={`group p-6 transition duration-200 hover:-translate-y-1 ${
        isDark
          ? 'pixel-card-dark bg-[#0f1b2d] text-white'
          : 'pixel-card bg-[#f8fbff] text-slate-950'
      }`}
    >
      <div
        className={`pixel-mini-icon mb-6 flex h-14 w-14 items-center justify-center text-sm font-semibold ${
          isDark
            ? 'bg-cyan-300/10 text-cyan-300'
            : 'bg-slate-100 text-blue-700'
        }`}
      >
        <span className="font-mono-accent">{icon}</span>
      </div>

      <h3
        className={`text-[1.65rem] font-extrabold uppercase leading-tight tracking-tight ${
          isDark ? 'text-white' : 'text-slate-950'
        }`}
      >
        {title}
      </h3>

      <p
        className={`mt-5 text-base leading-8 ${
          isDark ? 'text-slate-300' : 'text-slate-500'
        }`}
      >
        {description}
      </p>

      <div
        className={`mt-8 h-[6px] w-20 ${
          isDark ? 'bg-cyan-300' : 'bg-blue-600'
        }`}
      />
    </div>
  )
}

export default FeatureCard