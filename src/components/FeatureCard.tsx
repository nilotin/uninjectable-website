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
      className={`group rounded-3xl p-6 transition duration-200 hover:-translate-y-1 ${
        isDark
          ? 'enterprise-panel-dark text-white'
          : 'enterprise-panel text-slate-950'
      }`}
    >
      <div
        className={`font-mono-accent mb-5 inline-flex h-11 min-w-11 items-center justify-center rounded-xl border px-3 text-xs font-semibold ${
          isDark
            ? 'border-cyan-300/20 bg-cyan-300/10 text-cyan-300'
            : 'border-blue-200 bg-blue-50 text-blue-700'
        }`}
      >
        {icon}
      </div>

      <h3
        className={`text-lg font-bold tracking-tight ${
          isDark ? 'text-white' : 'text-slate-950'
        }`}
      >
        {title}
      </h3>

      <p
        className={`mt-3 text-sm leading-6 ${
          isDark ? 'text-slate-300' : 'text-slate-600'
        }`}
      >
        {description}
      </p>

      <div
        className={`mt-6 h-px w-full ${
          isDark ? 'bg-white/10' : 'bg-slate-200'
        }`}
      />
    </div>
  )
}

export default FeatureCard