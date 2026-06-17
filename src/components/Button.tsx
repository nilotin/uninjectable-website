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
    'inline-flex items-center justify-center gap-2 border-2 px-5 py-3 text-sm font-black uppercase tracking-wide transition active:translate-x-[2px] active:translate-y-[2px] active:shadow-none'

  const variants = {
    primary:
      'border-slate-950 bg-[#ff4fa3] text-white shadow-[4px_4px_0_#101936] hover:bg-[#ff6fb4]',
    secondary:
      'border-slate-950 bg-white text-slate-950 shadow-[4px_4px_0_#101936] hover:bg-[#edf4ff]',
    dark:
      'border-[#35d6ff] bg-[#071033] text-white shadow-[4px_4px_0_#35d6ff] hover:bg-[#10246b]',
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