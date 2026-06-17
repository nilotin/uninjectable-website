type FeatureCardProps = {
  title: string
  description: string
  icon?: string
  variant?: 'light' | 'dark'
}

function FeatureCard({
  title,
  description,
  icon = '✦',
  variant = 'light',
}: FeatureCardProps) {
  const isDark = variant === 'dark'

  return (
    <div
      className={`rounded-2xl border p-6 transition hover:-translate-y-1 ${
        isDark
          ? 'border-white/10 bg-white/5 shadow-2xl shadow-blue-950/20'
          : 'border-slate-200 bg-white shadow-sm'
      }`}
    >
      <div
        className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-lg ${
          isDark ? 'bg-blue-500/10 text-blue-300' : 'bg-blue-50 text-blue-600'
        }`}
      >
        {icon}
      </div>

      <h3
        className={`text-lg font-semibold ${
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
    </div>
  )
}

export default FeatureCard