import type { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'dark'
  href?: string
  onClick?: () => void
}

function Button({
  children,
  variant = 'primary',
  href,
  onClick,
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-slate-950'

  const variants = {
    primary:
      'bg-[#ff4fa3] text-white shadow-[0_0_28px_rgba(255,79,163,0.32)] hover:bg-[#ff6fb4]',
    secondary:
      'border border-slate-300 bg-white text-slate-950 hover:border-[#ec4899]/40 hover:bg-pink-50',
    dark:
      'border border-white/15 bg-white/5 text-white hover:border-[#ec4899]/40 hover:bg-white/10',
  }

  const className = `${baseClasses} ${variants[variant]}`

  if (href) {
    return (
      <a href={href} onClick={onClick} className={className}>
        {children}
        <span aria-hidden="true">→</span>
      </a>
    )
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
      <span aria-hidden="true">→</span>
    </button>
  )
}

export default Button