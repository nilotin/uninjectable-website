type FeatureCardProps = {
  title: string
  description: string
  icon?: string
  variant?: 'light' | 'dark'
  compactOnMobile?: boolean
}

function FeatureCard({
  title,
  description,
  icon = '01',
  variant = 'light',
  compactOnMobile = false,
}: FeatureCardProps) {
  const isDark = variant === 'dark'
  const isImageIcon = /\.(png|jpg|jpeg|svg|webp)$/i.test(icon)

  return (
    <div
      className={`group transition duration-200 hover:-translate-y-1 ${
        compactOnMobile ? 'min-h-[280px] p-5 md:min-h-[420px] md:p-6' : 'p-6'
      } ${
        isDark
          ? 'pixel-card-dark bg-[#0f1b2d] text-white'
          : 'pixel-card bg-[#f8fbff] text-slate-950'
      }`}
    >
      <div
        className={`pixel-mini-icon mb-6 flex items-center justify-center overflow-hidden ${
          compactOnMobile ? 'h-14 w-14 md:h-16 md:w-16' : 'h-16 w-16'
        } ${
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
            className={`object-contain ${
              compactOnMobile ? 'h-9 w-9 md:h-12 md:w-12' : 'h-12 w-12'
            }`}
          />
        ) : (
          <span className="font-mono-accent text-sm font-semibold">
            {icon}
          </span>
        )}
      </div>

      <h3
        className={`font-extrabold uppercase leading-tight tracking-tight ${
          compactOnMobile ? 'text-[1.25rem] md:text-[1.65rem]' : 'text-[1.65rem]'
        } ${isDark ? 'text-white' : 'text-slate-950'}`}
      >
        {title}
      </h3>

      <p
        className={`${
          compactOnMobile
            ? 'mt-4 text-[0.9rem] leading-6 md:mt-5 md:text-base md:leading-8'
            : 'mt-5 text-base leading-8'
        } ${isDark ? 'text-slate-300' : 'text-slate-500'}`}
      >
        {description}
      </p>

      <div
        className={`${
          compactOnMobile ? 'mt-6 md:mt-8' : 'mt-8'
        } h-[6px] w-20 ${isDark ? 'bg-[#ff4fa3]' : 'bg-blue-600'}`}
      />
    </div>
  )
}

export default FeatureCard