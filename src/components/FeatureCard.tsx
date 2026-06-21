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

  const isImageIcon = /\.(png|jpg|jpeg|svg|webp)$/i.test(icon)

  return (
    <div
      className={`group p-6 transition duration-200 hover:-translate-y-1 ${
        isDark
          ? 'pixel-card-dark bg-[#0f1b2d] text-white'
          : 'pixel-card bg-[#f8fbff] text-slate-950'
      }`}
    >
      <div
        className={`pixel-mini-icon mb-6 flex h-16 w-16 items-center justify-center overflow-hidden ${
          isDark
            ? 'bg-[#ff4fa3]/10 text-[#ff4fa3]'
            : 'bg-slate-100 text-blue-700'
        }`}
      >
        {isImageIcon ? (
          <img
            src={`${import.meta.env.BASE_URL}${icon}`}
            alt=""
            aria-hidden="true"
            className="h-12 w-12 object-contain"
          />
        ) : (
          <span className="font-mono-accent text-sm font-semibold">
            {icon}
          </span>
        )}
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
          isDark ? 'bg-[#ff4fa3]' : 'bg-blue-600'
        }`}
      />
    </div>
  )
}

export default FeatureCard