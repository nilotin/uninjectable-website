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
  'inline-flex items-center justify-center gap-2 rounded-[4px] px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#03b7f7] focus:ring-offset-2 focus:ring-offset-[#00233d]'

  const variants = {
    primary:
      'bg-[#03b7f7] text-white shadow-[0_2px_10px_rgba(3,183,247,0.18)] hover:bg-[#12bcf9]',
    secondary:
      'border border-slate-300 bg-white text-slate-950 hover:border-[#03b7f7]/40 hover:bg-[#e6f7fe]',
    dark:
      'border border-white/15 bg-white/5 text-white hover:border-[#03b7f7]/40 hover:bg-white/10',
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