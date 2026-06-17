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
      className={`group relative overflow-hidden p-6 transition hover:-translate-y-1 ${
        isDark
          ? 'retro-panel-dark bg-[#071033] text-white'
          : 'retro-panel bg-[#f8fbff] text-slate-950'
      }`}
    >
      <div
        className={`absolute right-3 top-3 font-pixel text-[10px] ${
          isDark ? 'text-[#35d6ff]/60' : 'text-[#123cbe]/40'
        }`}
      >
        //
      </div>

      <div
        className={`mb-5 inline-flex h-12 min-w-12 items-center justify-center border-2 px-3 font-pixel text-xs ${
          isDark
            ? 'border-[#35d6ff] bg-[#050a26] text-[#35d6ff]'
            : 'border-slate-950 bg-[#edf4ff] text-[#123cbe] shadow-[3px_3px_0_#101936]'
        }`}
      >
        {icon}
      </div>

      <h3
        className={`text-lg font-black uppercase leading-6 ${
          isDark ? 'text-white' : 'text-slate-950'
        }`}
      >
        {title}
      </h3>

      <p
        className={`mt-3 text-sm leading-6 ${
          isDark ? 'text-slate-300' : 'text-slate-700'
        }`}
      >
        {description}
      </p>

      <div
        className={`mt-6 h-1 w-16 transition group-hover:w-24 ${
          isDark ? 'bg-[#ff4fa3]' : 'bg-[#123cbe]'
        }`}
      />
    </div>
  )
}

export default FeatureCard