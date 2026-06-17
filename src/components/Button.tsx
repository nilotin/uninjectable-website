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
    'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-950'

  const variants = {
    primary:
      'bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500',
    secondary:
      'border border-slate-300 bg-white text-slate-950 hover:border-blue-300 hover:bg-blue-50',
    dark:
      'border border-white/15 bg-white/5 text-white hover:bg-white/10',
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