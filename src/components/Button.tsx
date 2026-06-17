import type { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary'
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
    'inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition'

  const variants = {
    primary:
      'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/20',
    secondary:
      'border border-white/15 bg-white/5 text-white hover:bg-white/10',
  }

  const className = `${baseClasses} ${variants[variant]}`

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  )
}

export default Button